import type { Metadata } from 'next';
import prisma, { type LeadRecord } from '@/lib/prisma';
import { ADMIN_KEY } from '@/lib/config';
import { revalidatePath } from 'next/cache';

export const metadata: Metadata = { title: 'Leads Admin', robots: { index: false, follow: false } };
export const dynamic = 'force-dynamic';

async function setStatus(formData: FormData) {
  'use server';
  if (String(formData.get('key')) !== ADMIN_KEY) return;
  await prisma.lead.update({ where: { id: String(formData.get('id')) }, data: { status: String(formData.get('status')) } });
  revalidatePath('/admin');
}

const statuses = ['new', 'contacted', 'sold', 'junk'];
const badge: Record<string, string> = {
  new: 'bg-emerald-100 text-emerald-800',
  contacted: 'bg-amber-100 text-amber-800',
  sold: 'bg-blue-100 text-blue-800',
  junk: 'bg-slate-200 text-slate-500',
};

interface Stat { views7: number; calls7: number; topPages: { page: string; n: number }[] }

async function getStats(): Promise<Stat | null> {
  try {
    const [v] = await prisma.$queryRawUnsafe<{ n: bigint }[]>(`SELECT COUNT(*)::bigint AS n FROM "Event" WHERE "type"='pageview' AND "createdAt" > NOW() - INTERVAL '7 days'`);
    const [c] = await prisma.$queryRawUnsafe<{ n: bigint }[]>(`SELECT COUNT(*)::bigint AS n FROM "Event" WHERE "type"='call_click' AND "createdAt" > NOW() - INTERVAL '7 days'`);
    const topPages = await prisma.$queryRawUnsafe<{ page: string; n: bigint }[]>(`SELECT "page", COUNT(*)::bigint AS n FROM "Event" WHERE "type"='pageview' AND "createdAt" > NOW() - INTERVAL '7 days' GROUP BY "page" ORDER BY n DESC LIMIT 8`);
    return { views7: Number(v?.n ?? 0), calls7: Number(c?.n ?? 0), topPages: topPages.map((t) => ({ page: t.page ?? '—', n: Number(t.n) })) };
  } catch {
    return null;
  }
}

export default async function AdminPage({ searchParams }: { searchParams: Promise<{ key?: string }> }) {
  const { key } = await searchParams;
  if (key !== ADMIN_KEY) {
    return <p className="p-16 text-center text-slate-500">Not authorized. Append ?key=YOUR_ADMIN_KEY</p>;
  }
  let leads: LeadRecord[] = [];
  let dbError = false;
  try {
    leads = await prisma.lead.findMany({ orderBy: { createdAt: 'desc' }, take: 300 });
  } catch {
    dbError = true;
  }
  const stats = await getStats();
  const forms = leads.filter((l) => l.type !== 'call_click');

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-extrabold">Leads &amp; Analytics</h1>
      {dbError && <p className="mt-4 rounded-lg bg-red-50 p-4 text-red-700">Database unreachable — check DATABASE_URL, then run /api/db-run.</p>}
      {stats && (
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-4"><p className="text-sm text-slate-500">Pageviews (7d)</p><p className="text-3xl font-extrabold">{stats.views7}</p></div>
          <div className="rounded-xl border border-slate-200 bg-white p-4"><p className="text-sm text-slate-500">Call clicks (7d)</p><p className="text-3xl font-extrabold">{stats.calls7}</p></div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-sm text-slate-500">Top pages (7d)</p>
            <ul className="mt-1 space-y-0.5 text-xs">{stats.topPages.map((t) => (<li key={t.page} className="flex justify-between"><span className="truncate">{t.page}</span><span className="ml-2 font-bold">{t.n}</span></li>))}</ul>
          </div>
        </div>
      )}
      <h2 className="mt-8 text-xl font-extrabold">Leads ({forms.length})</h2>
      <div className="mt-4 space-y-3">
        {forms.map((l) => (
          <div key={l.id} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${badge[l.status] ?? badge.new}`}>{l.status}</span>
                <span className="ml-2 font-bold">{l.name ?? '—'}</span>
                <span className="ml-2 text-slate-600">{l.phone ?? ''}</span>
                <span className="ml-2 text-sm text-slate-400">{[l.city, l.country].filter(Boolean).join(', ')}</span>
              </div>
              <span className="text-xs text-slate-400">{l.createdAt.toISOString().slice(0, 16).replace('T', ' ')}</span>
            </div>
            {l.score && <p className="mt-2 text-sm font-medium text-violet-700">🤖 {l.score}</p>}
            {l.address && <p className="mt-1 text-sm text-slate-600">🏠 {l.address}</p>}
            {l.page && <p className="mt-1 text-xs text-slate-400">{l.page}</p>}
            <div className="mt-3 flex gap-2">
              {statuses.map((s) => (
                <form key={s} action={setStatus}>
                  <input type="hidden" name="id" value={l.id} />
                  <input type="hidden" name="status" value={s} />
                  <input type="hidden" name="key" value={key} />
                  <button className={`rounded-full border px-3 py-1 text-xs font-semibold ${l.status === s ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-300 text-slate-600 hover:border-slate-500'}`}>{s}</button>
                </form>
              ))}
            </div>
          </div>
        ))}
        {!dbError && forms.length === 0 && <p className="text-slate-500">No leads yet.</p>}
      </div>
    </section>
  );
}
