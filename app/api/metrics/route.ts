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

export async function GET(request: NextRequest): Promise<NextResponse> {
  if (!isAuthorized(request)) return NextResponse.json({ error: 'Unauthorised.' }, { status: 401 });

  const { searchParams } = new URL(request.url);
  const hoursParam = searchParams.get('hours');
  const daysParam = parseInt(searchParams.get('days') || '30', 10);
  const totalHours = hoursParam
    ? Math.min(Math.max(1, parseInt(hoursParam, 10)), 8760)
    : Math.min(Math.max(1, daysParam), 365) * 24;
  const since = new Date(Date.now() - totalHours * 60 * 60 * 1000);
  // hour buckets for short windows, day buckets otherwise
  const bucket = totalHours <= 48 ? `TO_CHAR("createdAt", 'MM-DD HH24:00')` : `TO_CHAR("createdAt", 'YYYY-MM-DD')`;

  const q = <T,>(sql: string) => prisma.$queryRawUnsafe<T[]>(sql, since).catch(() => [] as T[]);

  try {
    const [
      views, sessions, topPages, topReferrers, devices, browsers, countries, ips, utmSources, viewSeries,
      leadsTotal, leadsByStatus, leadsByCountry, leadsByCity, leadsByReason, leadSeries, recentLeads,
      callsTotal, callsByPage, callSeries, recentCalls,
    ] = await Promise.all([
      q<{ n: bigint }>(`SELECT COUNT(*)::bigint AS n FROM "Event" WHERE "type"='pageview' AND "createdAt" >= $1`),
      q<{ n: bigint }>(`SELECT COUNT(DISTINCT COALESCE("session", "ip"))::bigint AS n FROM "Event" WHERE "type"='pageview' AND "createdAt" >= $1`),
      q<{ label: string; n: bigint }>(`SELECT COALESCE("page",'—') AS label, COUNT(*)::bigint AS n FROM "Event" WHERE "type"='pageview' AND "createdAt" >= $1 GROUP BY 1 ORDER BY n DESC LIMIT 20`),
      q<{ label: string; n: bigint }>(`SELECT "ref" AS label, COUNT(*)::bigint AS n FROM "Event" WHERE "type"='pageview' AND "createdAt" >= $1 AND "ref" IS NOT NULL AND "ref" != '' GROUP BY 1 ORDER BY n DESC LIMIT 15`),
      q<{ label: string; n: bigint }>(`SELECT COALESCE("device",'unknown') AS label, COUNT(*)::bigint AS n FROM "Event" WHERE "type"='pageview' AND "createdAt" >= $1 GROUP BY 1 ORDER BY n DESC`),
      q<{ label: string; n: bigint }>(`SELECT COALESCE("browser",'unknown') AS label, COUNT(*)::bigint AS n FROM "Event" WHERE "type"='pageview' AND "createdAt" >= $1 GROUP BY 1 ORDER BY n DESC`),
      q<{ label: string; n: bigint }>(`SELECT COALESCE("country",'unknown') AS label, COUNT(*)::bigint AS n FROM "Event" WHERE "type"='pageview' AND "createdAt" >= $1 GROUP BY 1 ORDER BY n DESC LIMIT 15`),
      q<{ label: string; n: bigint }>(`SELECT COALESCE("ip",'unknown') AS label, COUNT(*)::bigint AS n FROM "Event" WHERE "type"='pageview' AND "createdAt" >= $1 GROUP BY 1 ORDER BY n DESC LIMIT 20`),
      q<{ label: string; n: bigint }>(`SELECT "utmSource" AS label, COUNT(*)::bigint AS n FROM "Event" WHERE "type"='pageview' AND "createdAt" >= $1 AND "utmSource" IS NOT NULL GROUP BY 1 ORDER BY n DESC LIMIT 10`),
      q<{ date: string; n: bigint }>(`SELECT ${bucket} AS date, COUNT(*)::bigint AS n FROM "Event" WHERE "type"='pageview' AND "createdAt" >= $1 GROUP BY 1 ORDER BY 1 ASC`),
      q<{ n: bigint }>(`SELECT COUNT(*)::bigint AS n FROM "Lead" WHERE "createdAt" >= $1`),
      q<{ label: string; n: bigint }>(`SELECT "status" AS label, COUNT(*)::bigint AS n FROM "Lead" WHERE "createdAt" >= $1 GROUP BY 1 ORDER BY n DESC`),
      q<{ label: string; n: bigint }>(`SELECT COALESCE("country",'—') AS label, COUNT(*)::bigint AS n FROM "Lead" WHERE "createdAt" >= $1 GROUP BY 1 ORDER BY n DESC LIMIT 10`),
      q<{ label: string; n: bigint }>(`SELECT COALESCE("city",'—') AS label, COUNT(*)::bigint AS n FROM "Lead" WHERE "createdAt" >= $1 GROUP BY 1 ORDER BY n DESC LIMIT 15`),
      q<{ label: string; n: bigint }>(`SELECT COALESCE(NULLIF("details"::json->>'reason',''),'—') AS label, COUNT(*)::bigint AS n FROM "Lead" WHERE "createdAt" >= $1 GROUP BY 1 ORDER BY n DESC LIMIT 10`),
      q<{ date: string; n: bigint }>(`SELECT ${bucket} AS date, COUNT(*)::bigint AS n FROM "Lead" WHERE "createdAt" >= $1 GROUP BY 1 ORDER BY 1 ASC`),
      prisma.lead.findMany({ where: { createdAt: { gte: since } }, orderBy: { createdAt: 'desc' }, take: 30 }).catch(() => []),
      q<{ n: bigint }>(`SELECT COUNT(*)::bigint AS n FROM "Event" WHERE "type"='call_click' AND "createdAt" >= $1`),
      q<{ label: string; n: bigint }>(`SELECT COALESCE("page",'—') AS label, COUNT(*)::bigint AS n FROM "Event" WHERE "type"='call_click' AND "createdAt" >= $1 GROUP BY 1 ORDER BY n DESC LIMIT 15`),
      q<{ date: string; n: bigint }>(`SELECT ${bucket} AS date, COUNT(*)::bigint AS n FROM "Event" WHERE "type"='call_click' AND "createdAt" >= $1 GROUP BY 1 ORDER BY 1 ASC`),
      q<{ page: string; phone: string; device: string; country: string; created_at: Date }>(`SELECT COALESCE("page",'') AS page, COALESCE("phone",'') AS phone, COALESCE("device",'') AS device, COALESCE("country",'') AS country, "createdAt" AS created_at FROM "Event" WHERE "type"='call_click' AND "createdAt" >= $1 ORDER BY "createdAt" DESC LIMIT 30`),
    ]);

    const num = (r: { n: bigint }[]) => Number(r[0]?.n ?? 0);
    const ser = (rows: { label?: string; date?: string; n: bigint }[]) => rows.map((r) => ({ ...r, n: Number(r.n) }));

    return NextResponse.json({
      period: { hours: totalHours, since: since.toISOString() },
      traffic: {
        totalViews: num(views),
        uniqueSessions: num(sessions),
        topPages: ser(topPages), topReferrers: ser(topReferrers), devices: ser(devices),
        browsers: ser(browsers), countries: ser(countries), ips: ser(ips), utmSources: ser(utmSources),
        series: ser(viewSeries),
      },
      leads: {
        total: num(leadsTotal),
        byStatus: ser(leadsByStatus), byCountry: ser(leadsByCountry), byCity: ser(leadsByCity), byReason: ser(leadsByReason),
        series: ser(leadSeries),
        recent: recentLeads,
      },
      calls: {
        total: num(callsTotal),
        byPage: ser(callsByPage),
        series: ser(callSeries),
        recent: recentCalls.map((r) => ({ ...r, created_at: new Date(r.created_at).toISOString() })),
      },
    });
  } catch (err) {
    console.error('[metrics] error', err);
    return NextResponse.json({ error: 'Failed to fetch metrics.' }, { status: 500 });
  }
}
