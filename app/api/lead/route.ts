import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.text();
  const url = process.env.LEAD_WEBHOOK_URL;
  if (url) {
    try {
      await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body });
    } catch (e) {
      console.error('lead webhook failed', e);
    }
  } else {
    console.log('LEAD', body);
  }
  return NextResponse.json({ ok: true });
}
