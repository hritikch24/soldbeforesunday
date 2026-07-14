import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
import prisma from '@/lib/prisma';
import { sendTelegram } from '@/lib/telegram';
import { SITE_NAME } from '@/lib/config';

export async function POST(req: NextRequest) {
  const data = (await req.json().catch(() => ({}))) as Record<string, unknown>;
  const str = (k: string, max = 500) => (typeof data[k] === 'string' && (data[k] as string).length > 0 ? (data[k] as string).slice(0, max) : null);
  const type = str('event') === 'call_click' ? 'call_click' : 'pageview';
  const page = str('page');
  if (page && (page.startsWith('/metrics') || page.startsWith('/admin') || page.startsWith('/api'))) {
    return NextResponse.json({ ok: true });
  }
  const forwarded = req.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0].trim().slice(0, 45) : req.headers.get('x-real-ip')?.slice(0, 45) ?? null;
  try {
    await prisma.event.create({
      data: {
        id: randomUUID(),
        type,
        page,
        ref: str('ref', 1000),
        ua: req.headers.get('user-agent')?.slice(0, 300) ?? null,
        session: str('session', 100),
        ip,
        country: req.headers.get('x-vercel-ip-country')?.slice(0, 10) ?? null,
        device: str('device', 50),
        browser: str('browser', 50),
        utmSource: str('utmSource', 200),
        utmMedium: str('utmMedium', 200),
        utmCampaign: str('utmCampaign', 200),
        action: str('action', 50),
        phone: str('phone', 50),
      },
    });
  } catch (e) {
    console.error('event save failed', e);
  }
  if (type === 'call_click') {
    await sendTelegram(`📞 <b>Call button tapped — ${SITE_NAME}</b>\n🔗 ${page ?? ''}\n📱 ${str('phone') ?? ''}`);
  }
  return NextResponse.json({ ok: true });
}
