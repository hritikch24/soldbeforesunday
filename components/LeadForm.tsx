'use client';

import { useState } from 'react';

const inputCls = 'w-full rounded-lg border border-slate-300 p-3 text-slate-900';
const btnCls = 'w-full rounded-lg bg-emerald-600 py-3.5 text-lg font-extrabold text-white hover:bg-emerald-500';

export default function LeadForm({ country, city, compact = false }: { country: string; city?: string; compact?: boolean }) {
  const [step, setStep] = useState(0);
  const [d, setD] = useState<Record<string, string>>({ country, city: city ?? '' });
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setD((p) => ({ ...p, [k]: e.target.value }));

  async function submit() {
    setBusy(true);
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...d, ts: new Date().toISOString(), page: window.location.pathname }),
      });
      const w = window as unknown as { gtag?: (...a: unknown[]) => void };
      if (typeof w.gtag === 'function') w.gtag('event', 'lead_submit', { country, city: city ?? '' });
      setDone(true);
    } finally {
      setBusy(false);
    }
  }

  if (done) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-xl">
        <p className="text-3xl">✅</p>
        <h3 className="mt-2 text-xl font-extrabold text-slate-900">Request received.</h3>
        <p className="mt-2 text-slate-600">A vetted local cash buyer will contact you within 24 hours with your no-obligation offer.</p>
      </div>
    );
  }

  const steps = [
    <div key="0" className="space-y-3">
      <input required placeholder="Property address" className={inputCls} value={d.address ?? ''} onChange={set('address')} />
      <input required placeholder={country === 'uk' ? 'Postcode' : country === 'ca' ? 'Postal code' : country === 'au' ? 'Suburb & postcode' : 'ZIP code'} className={inputCls} value={d.postcode ?? ''} onChange={set('postcode')} />
      <button className={btnCls} onClick={() => d.address && d.postcode && setStep(1)}>Get My Cash Offer →</button>
    </div>,
    <div key="1" className="space-y-3">
      <select className={inputCls} value={d.propertyType ?? ''} onChange={set('propertyType')}>
        <option value="">Property type…</option>
        <option>House</option><option>Flat / Apartment / Condo</option><option>Duplex / Multi-unit</option><option>Other</option>
      </select>
      <select className={inputCls} value={d.condition ?? ''} onChange={set('condition')}>
        <option value="">Condition…</option>
        <option>Move-in ready</option><option>Needs some work</option><option>Needs major work</option><option>Severe damage / uninhabitable</option>
      </select>
      <button className={btnCls} onClick={() => d.propertyType && d.condition && setStep(2)}>Next →</button>
    </div>,
    <div key="2" className="space-y-3">
      <select className={inputCls} value={d.reason ?? ''} onChange={set('reason')}>
        <option value="">Reason for selling…</option>
        <option>Behind on payments / at risk of losing the home</option>
        <option>Inherited property</option><option>Divorce / separation</option>
        <option>Relocating</option><option>Tired landlord</option>
        <option>Property needs too much work</option><option>Just want a fast sale</option>
      </select>
      <select className={inputCls} value={d.timeline ?? ''} onChange={set('timeline')}>
        <option value="">How fast do you need to sell?…</option>
        <option>ASAP — within 2 weeks</option><option>Within a month</option>
        <option>1–3 months</option><option>Just exploring options</option>
      </select>
      <button className={btnCls} onClick={() => d.reason && d.timeline && setStep(3)}>Next →</button>
    </div>,
    <div key="3" className="space-y-3">
      <input required placeholder="Your name" className={inputCls} value={d.name ?? ''} onChange={set('name')} />
      <input required type="tel" placeholder="Phone number" className={inputCls} value={d.phone ?? ''} onChange={set('phone')} />
      <input type="email" placeholder="Email (optional)" className={inputCls} value={d.email ?? ''} onChange={set('email')} />
      <button className={btnCls} disabled={busy} onClick={() => d.name && d.phone && submit()}>
        {busy ? 'Sending…' : 'Get My Free Cash Offer ✓'}
      </button>
      <p className="text-center text-xs text-slate-500">Free · No obligation · No fees · Your details go only to the vetted buyer for your area</p>
    </div>,
  ];

  return (
    <div className={`rounded-2xl bg-white p-6 shadow-xl ${compact ? '' : 'md:p-8'}`}>
      <div className="mb-4 flex gap-1.5">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={`h-1.5 flex-1 rounded-full ${i <= step ? 'bg-emerald-500' : 'bg-slate-200'}`} />
        ))}
      </div>
      <h3 className="text-lg font-extrabold text-slate-900">
        {['Where is the property?', 'About the property', 'Your situation', 'Where do we send the offer?'][step]}
      </h3>
      <div className="mt-4">{steps[step]}</div>
      {step > 0 && (
        <button className="mt-3 text-sm text-slate-400 hover:text-slate-600" onClick={() => setStep(step - 1)}>← Back</button>
      )}
    </div>
  );
}
