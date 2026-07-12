import { NextRequest, NextResponse } from 'next/server';

// Geo-redirect: first-time visitors landing on the homepage are sent to their
// country section based on Vercel's IP-country header. Bots are exempt (so
// Google can crawl all four sections from US IPs), and a cookie ensures a
// visitor can navigate back to / manually without being bounced again.
const COUNTRY_MAP: Record<string, string> = { US: 'us', GB: 'uk', CA: 'ca', AU: 'au' };
const BOT_RE = /bot|crawl|spider|slurp|bingpreview|duckduck|baidu|yandex|facebookexternalhit|linkedinbot|twitterbot|whatsapp|telegram|preview|gptbot|claudebot|perplexity/i;

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname !== '/') return NextResponse.next();
  if (BOT_RE.test(req.headers.get('user-agent') ?? '')) return NextResponse.next();
  if (req.cookies.get('geo_done')) return NextResponse.next();

  const cc = (req.headers.get('x-vercel-ip-country') ?? '').toUpperCase();
  const slug = COUNTRY_MAP[cc];

  const res = slug
    ? NextResponse.redirect(new URL(`/${slug}`, req.url), 307)
    : NextResponse.next();
  res.cookies.set('geo_done', '1', { maxAge: 60 * 60 * 24 * 30, path: '/' });
  return res;
}

export const config = { matcher: '/' };
