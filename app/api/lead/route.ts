import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { sendTelegram } from '@/lib/telegram';
import { scoreLead } from '@/lib/ai';
import { SITE_NAME } from '@/lib/config';
import { normaliseUKPostcode, PRIVACY_VERSION, validateUKLead } from '@/lib/uk-lead';

export async function POST(req: NextRequest) {
  const input: unknown = await req.json().catch(() => null);
  if (!input || typeof input !== 'object' || Array.isArray(input)) {
    return NextResponse.json({ error: 'Please submit a valid enquiry.' }, { status: 400 });
  }
  const error = validateUKLead(input as Record<string, unknown>);
  if (error) return NextResponse.json({ error }, { status: 400 });
  const data: Record<string, unknown> = {
    ...input,
    country: 'uk',
    postcode: normaliseUKPostcode((input as Record<string, string>).postcode),
    privacyVersion: PRIVACY_VERSION,
    consentRecordedAt: new Date().toISOString(),
  };
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

  const notified = await sendTelegram(
    [
      `🔥 <b>NEW LEAD — ${SITE_NAME}</b>`,
      score ? `🤖 ${score}` : null,
      str('name') ? `👤 ${str('name')}` : null,
      str('phone') ? `📞 ${str('phone')}` : null,
      str('address') ? `🏠 ${str('address')}` : null,
      `📮 ${str('postcode')}`,
      str('city') || str('country') ? `📍 ${[str('city'), str('country')].filter(Boolean).join(', ')}` : null,
      str('reason') ? `💬 ${str('reason')} · ${str('timeline') ?? ''}` : null,
      str('page') ? `🔗 ${str('page')}` : null,
      saved ? null : '⚠️ DB save failed — check DATABASE_URL',
    ]
      .filter(Boolean)
      .join('\n')
  );

  if (!saved && !notified) {
    return NextResponse.json({ error: 'We could not save your enquiry. Please try again or call +44 7780 443069.' }, { status: 503 });
  }
  return NextResponse.json({ ok: true });
}
