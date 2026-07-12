import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
import prisma from '@/lib/prisma';
import { sendTelegram } from '@/lib/telegram';
import { SITE_NAME } from '@/lib/config';

export async function POST(req: NextRequest) {
  const data = (await req.json().catch(() => ({}))) as Record<string, unknown>;
  const str = (k: string) => (typeof data[k] === 'string' ? (data[k] as string).slice(0, 500) : null);
  const type = str('event') === 'call_click' ? 'call_click' : 'pageview';
  try {
    await prisma.event.create({
      data: { id: randomUUID(), type, page: str('page'), ref: str('ref'), ua: req.headers.get('user-agent')?.slice(0, 300) ?? null },
    });
  } catch (e) {
    console.error('event save failed', e);
  }
  if (type === 'call_click') {
    await sendTelegram(`📞 <b>Call button tapped — ${SITE_NAME}</b>\n🔗 ${str('page') ?? ''}`);
  }
  return NextResponse.json({ ok: true });
}
