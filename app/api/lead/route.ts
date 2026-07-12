import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { sendTelegram } from '@/lib/telegram';
import { scoreLead } from '@/lib/ai';
import { SITE_NAME } from '@/lib/config';

export async function POST(req: NextRequest) {
  const data = (await req.json().catch(() => ({}))) as Record<string, unknown>;
  const str = (k: string) => (typeof data[k] === 'string' && (data[k] as string).length > 0 ? (data[k] as string) : null);

  const score = await scoreLead(data);

  let saved = false;
  try {
    await prisma.lead.create({
      data: {
        type: 'form',
        country: str('country'),
        city: str('city'),
        name: str('name'),
        phone: str('phone'),
        email: str('email'),
        address: str('address'),
        page: str('page'),
        details: JSON.stringify(data),
        score,
      },
    });
    saved = true;
  } catch (e) {
    console.error('lead db save failed', e);
  }

  await sendTelegram(
    [
      `🔥 <b>NEW LEAD — ${SITE_NAME}</b>`,
      score ? `🤖 ${score}` : null,
      str('name') ? `👤 ${str('name')}` : null,
      str('phone') ? `📞 ${str('phone')}` : null,
      str('address') ? `🏠 ${str('address')}` : null,
      str('city') || str('country') ? `📍 ${[str('city'), str('country')].filter(Boolean).join(', ')}` : null,
      str('reason') ? `💬 ${str('reason')} · ${str('timeline') ?? ''}` : null,
      str('page') ? `🔗 ${str('page')}` : null,
      saved ? null : '⚠️ DB save failed — check DATABASE_URL',
    ]
      .filter(Boolean)
      .join('\n')
  );

  return NextResponse.json({ ok: true });
}
