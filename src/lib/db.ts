import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function ensureDbConnection() {
  try {
    if (!process.env.DATABASE_URL) return { ok: false, reason: 'DATABASE_URL not set — using fallback logging' };
    await prisma.$connect();
    return { ok: true };
  } catch (e: any) {
    return { ok: false, reason: e?.message || 'DB connection failed' };
  }
}
