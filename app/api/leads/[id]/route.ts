import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { ADMIN_KEY } from '@/lib/config';

function isAuthorized(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization');
  if (authHeader) {
    const [scheme, token] = authHeader.split(' ');
    if (scheme === 'Bearer' && token === ADMIN_KEY) return true;
  }
  const { searchParams } = new URL(request.url);
  return searchParams.get('key') === ADMIN_KEY;
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!isAuthorized(request)) return NextResponse.json({ error: 'Unauthorised.' }, { status: 401 });
  const { id } = await params;
  const body = (await request.json().catch(() => ({}))) as { status?: string };
  const status = String(body.status ?? '');
  if (!['new', 'contacted', 'sold', 'junk'].includes(status)) {
    return NextResponse.json({ error: 'Invalid status.' }, { status: 400 });
  }
  try {
    await prisma.lead.update({ where: { id }, data: { status } });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Update failed.' }, { status: 500 });
  }
}
