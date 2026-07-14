'use client';

import { useState, useEffect, useCallback } from 'react';

interface Row { label: string; n: number }
interface Point { date: string; n: number }
interface LeadRow {
  id: string; createdAt: string; type: string; country: string | null; city: string | null;
  name: string | null; phone: string | null; email: string | null; address: string | null;
  page: string | null; details: string | null; score: string | null; status: string;
}
interface CallRow { page: string; phone: string; device: string; country: string; created_at: string }
interface Metrics {
  period: { hours: number; since: string };
  traffic: { totalViews: number; uniqueSessions: number; topPages: Row[]; topReferrers: Row[]; devices: Row[]; browsers: Row[]; countries: Row[]; ips: Row[]; utmSources: Row[]; series: Point[] };
  leads: { total: number; byStatus: Row[]; byCountry: Row[]; byCity: Row[]; byReason: Row[]; series: Point[]; recent: LeadRow[] };
  calls: { total: number; byPage: Row[]; series: Point[]; recent: CallRow[] };
}

const PERIODS = [
  ['1h', 'Last hour'], ['6h', '6 hours'], ['24h', '24 hours'], ['7d', '7 days'], ['30d', '30 days'], ['90d', '90 days'],
] as const;

const STATUS_STYLE: Record<string, string> = {
  new: 'bg-emerald-100 text-emerald-800',
  contacted: 'bg-amber-100 text-amber-800',
  sold: 'bg-blue-100 text-blue-800',
  junk: 'bg-slate-200 text-slate-500',
};

function ago(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return 'just now';
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

function Stat({ label, value, sub }: { label: string; value: string | number; sub?: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{label}</p>
      <p className="mt-1 text-3xl font-extrabold text-slate-900">{value}</p>
      {sub && <p className="mt-1 text-xs text-slate-400">{sub}</p>}
    </div>
  );
}

function Bars({ title, rows, max = 10 }: { title: string; rows: Row[]; max?: number }) {
  const sliced = rows.slice(0, max);
  const top = Math.max(...sliced.map((r) => r.n), 1);
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <h2 className="text-sm font-bold text-slate-900">{title}</h2>
      <div className="mt-4 space-y-3">
        {sliced.map((r, i) => (
          <div key={i}>
            <div className="mb-1 flex items-center justify-between text-sm">
              <span className="max-w-[220px] truncate text-slate-600" title={r.label}>{r.label || '(direct)'}</span>
              <span className="ml-3 font-semibold tabular-nums text-slate-900">{r.n.toLocaleString()}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full rounded-full bg-emerald-500" style={{ width: `${(r.n / top) * 100}%` }} />
            </div>
          </div>
        ))}
        {sliced.length === 0 && <p className="py-4 text-center text-sm text-slate-400">No data yet</p>}
      </div>
    </div>
  );
}

function Series({ title, points }: { title: string; points: Point[] }) {
  const max = Math.max(...points.map((p) => p.n), 1);
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <h2 className="text-sm font-bold text-slate-900">{title}</h2>
      {points.length < 2 ? (
        <p className="py-8 text-center text-sm text-slate-400">Not enough data to chart</p>
      ) : (
        <>
          <div className="mt-4 flex items-end gap-[2px]" style={{ height: 90 }}>
            {points.map((p, i) => (
              <div key={i} className="group relative flex-1 cursor-default rounded-t-sm bg-emerald-500/25 transition-colors hover:bg-emerald-500/70" style={{ height: `${Math.max((p.n / max) * 100, 3)}%` }}>
                <div className="pointer-events-none absolute -top-8 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-0.5 text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {p.date}: {p.n}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-2 flex justify-between text-xs text-slate-400">
            <span>{points[0].date}</span>
            <span>{points[points.length - 1].date}</span>
          </div>
        </>
      )}
    </div>
  );
}

export default function MetricsPage() {
  const [apiKey, setApiKey] = useState('');
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState<Metrics | null>(null);
  const [period, setPeriod] = useState('7d');
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const saved = sessionStorage.getItem('_metrics_key');
    if (saved) { setApiKey(saved); setAuthed(true); }
  }, []);

  const load = useCallback(async (key: string, p: string) => {
    setLoading(true); setError('');
    try {
      const param = p.endsWith('h') ? `hours=${p.slice(0, -1)}` : `days=${p.slice(0, -1)}`;
      const res = await fetch(`/api/metrics?${param}&key=${encodeURIComponent(key)}`);
      if (res.status === 401) { setError('Invalid key'); setAuthed(false); sessionStorage.removeItem('_metrics_key'); return; }
      if (!res.ok) throw new Error('fetch failed');
      setData(await res.json());
      setAuthed(true);
      sessionStorage.setItem('_metrics_key', key);
    } catch {
      setError('Failed to load metrics.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { if (authed && apiKey) load(apiKey, period); }, [authed, apiKey, period, load]);

  async function setStatus(id: string, status: string) {
    const res = await fetch(`/api/leads/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({ status }),
    }).catch(() => null);
    if (res?.ok && data) {
      setData({ ...data, leads: { ...data.leads, recent: data.leads.recent.map((l) => (l.id === id ? { ...l, status } : l)) } });
    }
  }

  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <form onSubmit={(e) => { e.preventDefault(); if (apiKey.trim()) load(apiKey.trim(), period); }} className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-8 shadow-xl">
          <h1 className="text-center text-2xl font-extrabold text-slate-900">Metrics</h1>
          <p className="mt-1 text-center text-sm text-slate-400">Enter your admin key</p>
          <input type="password" autoFocus value={apiKey} onChange={(e) => setApiKey(e.target.value)} placeholder="Admin key" className="mt-6 w-full rounded-xl border border-slate-300 p-3 text-sm" />
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          <button className="mt-4 w-full rounded-xl bg-slate-900 py-3 font-bold text-white">{loading ? 'Checking…' : 'View metrics'}</button>
        </form>
      </div>
    );
  }

  const conversion = data && data.traffic.uniqueSessions > 0 ? ((data.leads.total / data.traffic.uniqueSessions) * 100).toFixed(1) + '%' : '—';

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-3xl font-extrabold text-slate-900">Metrics</h1>
          <div className="flex flex-wrap gap-1.5">
            {PERIODS.map(([p, label]) => (
              <button key={p} onClick={() => setPeriod(p)} className={`rounded-full px-3.5 py-1.5 text-xs font-semibold ${period === p ? 'bg-slate-900 text-white' : 'border border-slate-300 bg-white text-slate-600 hover:border-slate-500'}`}>
                {label}
              </button>
            ))}
          </div>
        </div>
        {loading && <p className="mt-4 text-sm text-slate-400">Loading…</p>}
        {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
        {data && (
          <>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              <Stat label="Pageviews" value={data.traffic.totalViews.toLocaleString()} />
              <Stat label="Unique visitors" value={data.traffic.uniqueSessions.toLocaleString()} />
              <Stat label="Leads" value={data.leads.total.toLocaleString()} />
              <Stat label="Call clicks" value={data.calls.total.toLocaleString()} />
              <Stat label="Visitor → lead" value={conversion} sub="conversion rate" />
            </div>
            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <Series title="Pageviews over time" points={data.traffic.series} />
              <Series title="Leads over time" points={data.leads.series} />
              <Series title="Call clicks over time" points={data.calls.series} />
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Bars title="Top pages" rows={data.traffic.topPages} />
              <Bars title="Referrers" rows={data.traffic.topReferrers} />
              <Bars title="Countries" rows={data.traffic.countries} />
              <Bars title="Devices" rows={data.traffic.devices} max={4} />
              <Bars title="Browsers" rows={data.traffic.browsers} max={6} />
              <Bars title="UTM sources" rows={data.traffic.utmSources} />
              <Bars title="Leads by status" rows={data.leads.byStatus} max={5} />
              <Bars title="Leads by country" rows={data.leads.byCountry} max={5} />
              <Bars title="Leads by city" rows={data.leads.byCity} />
              <Bars title="Leads by reason" rows={data.leads.byReason} />
              <Bars title="Call clicks by page" rows={data.calls.byPage} />
              <Bars title="Top IPs" rows={data.traffic.ips} />
            </div>

            <h2 className="mt-10 text-xl font-extrabold text-slate-900">Recent leads ({data.leads.recent.length})</h2>
            <div className="mt-3 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100 text-left text-xs uppercase tracking-wider text-slate-400">
                    <th className="px-4 py-3">Name</th><th className="px-4 py-3">Phone</th><th className="px-4 py-3">Where</th><th className="px-4 py-3">AI score</th><th className="px-4 py-3">Status</th><th className="px-4 py-3">When</th>
                  </tr>
                </thead>
                <tbody>
                  {data.leads.recent.map((l) => (
                    <>
                      <tr key={l.id} className="cursor-pointer border-b border-slate-50 hover:bg-slate-50" onClick={() => setExpanded(expanded === l.id ? null : l.id)}>
                        <td className="px-4 py-3 font-semibold text-slate-900">{l.name ?? '—'}</td>
                        <td className="px-4 py-3"><a href={`tel:${l.phone}`} className="text-slate-700 hover:text-emerald-600" onClick={(e) => e.stopPropagation()}>{l.phone ?? '—'}</a></td>
                        <td className="px-4 py-3 text-slate-600">{[l.city, l.country?.toUpperCase()].filter(Boolean).join(', ') || '—'}</td>
                        <td className="max-w-[200px] truncate px-4 py-3 text-violet-700" title={l.score ?? ''}>{l.score ?? '—'}</td>
                        <td className="px-4 py-3">
                          <select value={l.status} onClick={(e) => e.stopPropagation()} onChange={(e) => setStatus(l.id, e.target.value)} className={`cursor-pointer appearance-none rounded-full border-0 px-2.5 py-1 text-xs font-semibold ${STATUS_STYLE[l.status] ?? STATUS_STYLE.new}`}>
                            {['new', 'contacted', 'sold', 'junk'].map((s) => (<option key={s} value={s}>{s}</option>))}
                          </select>
                        </td>
                        <td className="px-4 py-3 text-xs text-slate-400" title={new Date(l.createdAt).toLocaleString()}>{ago(l.createdAt)}</td>
                      </tr>
                      {expanded === l.id && (
                        <tr className="border-b border-slate-50 bg-slate-50/60">
                          <td colSpan={6} className="px-6 py-3 text-sm text-slate-600">
                            {l.address && <p><span className="font-semibold">Address:</span> {l.address}</p>}
                            {l.email && <p><span className="font-semibold">Email:</span> {l.email}</p>}
                            {l.page && <p><span className="font-semibold">Page:</span> {l.page}</p>}
                            {l.details && <pre className="mt-2 whitespace-pre-wrap rounded-lg bg-white p-3 text-xs text-slate-500">{JSON.stringify(JSON.parse(l.details), null, 2)}</pre>}
                          </td>
                        </tr>
                      )}
                    </>
                  ))}
                  {data.leads.recent.length === 0 && (<tr><td colSpan={6} className="px-4 py-8 text-center text-slate-400">No leads in this period.</td></tr>)}
                </tbody>
              </table>
            </div>

            <h2 className="mt-10 text-xl font-extrabold text-slate-900">Recent call clicks</h2>
            <div className="mt-3 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100 text-left text-xs uppercase tracking-wider text-slate-400">
                    <th className="px-4 py-3">Page</th><th className="px-4 py-3">Number tapped</th><th className="px-4 py-3">Device</th><th className="px-4 py-3">Country</th><th className="px-4 py-3">When</th>
                  </tr>
                </thead>
                <tbody>
                  {data.calls.recent.map((c, i) => (
                    <tr key={i} className="border-b border-slate-50">
                      <td className="max-w-[240px] truncate px-4 py-3 text-slate-700">{c.page}</td>
                      <td className="px-4 py-3 text-slate-700">{c.phone}</td>
                      <td className="px-4 py-3 text-slate-500">{c.device}</td>
                      <td className="px-4 py-3 text-slate-500">{c.country}</td>
                      <td className="px-4 py-3 text-xs text-slate-400">{ago(c.created_at)}</td>
                    </tr>
                  ))}
                  {data.calls.recent.length === 0 && (<tr><td colSpan={5} className="px-4 py-8 text-center text-slate-400">No call clicks in this period.</td></tr>)}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
