import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { ADMIN_KEY } from '@/lib/config';
import fs from 'fs';
import path from 'path';

function isAuthorized(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization');
  if (authHeader) {
    const [scheme, token] = authHeader.split(' ');
    if (scheme === 'Bearer' && token === ADMIN_KEY) return true;
  }
  const { searchParams } = new URL(request.url);
  return searchParams.get('key') === ADMIN_KEY;
}

function getSchemaFiles(): { name: string; sql: string }[] {
  const dir = path.join(process.cwd(), 'db');
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.sql'))
    .sort()
    .map((f) => ({ name: f, sql: fs.readFileSync(path.join(dir, f), 'utf-8') }));
}

async function ensureMigrationsTable() {
  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "_migrations" (
      "name" TEXT NOT NULL,
      "applied_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
      CONSTRAINT "_migrations_pkey" PRIMARY KEY ("name")
    );
  `);
}

async function run(request: NextRequest): Promise<NextResponse> {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorised.' }, { status: 401 });
  }
  try {
    await ensureMigrationsTable();
    const rows = await prisma.$queryRawUnsafe<{ name: string }[]>(`SELECT "name" FROM "_migrations" ORDER BY "name"`);
    const applied = new Set(rows.map((r) => r.name));
    const pending = getSchemaFiles().filter((s) => !applied.has(s.name));

    const ran: string[] = [];
    for (const m of pending) {
      const statements = m.sql.split(';').map((s) => s.trim()).filter(Boolean);
      for (const stmt of statements) await prisma.$executeRawUnsafe(stmt);
      await prisma.$executeRawUnsafe(`INSERT INTO "_migrations" ("name") VALUES ('${m.name.replace(/'/g, "''")}')`);
      ran.push(m.name);
    }

    const tables = await prisma.$queryRawUnsafe<{ table_name: string }[]>(
      `SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ORDER BY table_name`
    );
    return NextResponse.json({ ok: true, ran, alreadyApplied: [...applied], tables: tables.map((t) => t.table_name) });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}

export async function GET(request: NextRequest) { return run(request); }
export async function POST(request: NextRequest) { return run(request); }
