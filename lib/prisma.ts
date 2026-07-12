import { PrismaClient } from '@prisma/client';

export interface LeadRecord {
  id: string;
  createdAt: Date;
  type: string;
  country: string | null;
  city: string | null;
  name: string | null;
  phone: string | null;
  email: string | null;
  address: string | null;
  page: string | null;
  details: string | null;
  score: string | null;
  status: string;
}

export interface EventRecord {
  id: string;
  createdAt: Date;
  type: string;
  page: string | null;
  ref: string | null;
  ua: string | null;
}

interface LeadDelegate {
  create(args: { data: Partial<Omit<LeadRecord, 'id' | 'createdAt'>> }): Promise<LeadRecord>;
  findMany(args?: { orderBy?: { createdAt: 'desc' | 'asc' }; take?: number }): Promise<LeadRecord[]>;
  update(args: { where: { id: string }; data: { status: string } }): Promise<LeadRecord>;
}

interface EventDelegate {
  create(args: { data: Partial<Omit<EventRecord, 'createdAt'>> & { id: string } }): Promise<EventRecord>;
}

export interface RawCapable {
  $executeRawUnsafe(sql: string): Promise<number>;
  $queryRawUnsafe<T = unknown>(sql: string): Promise<T>;
}

const globalForPrisma = globalThis as unknown as { prismaClient?: PrismaClient };
const client = globalForPrisma.prismaClient ?? new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prismaClient = client;

const prisma = client as unknown as { lead: LeadDelegate; event: EventDelegate } & RawCapable;
export default prisma;
