'use client';

import { useState } from 'react';

const inputCls = 'w-full rounded-xl border border-[#ddd5c4] bg-white p-3.5 text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none';
const btnCls = 'w-full rounded-full bg-ink py-4 text-lg font-bold text-white transition hover:bg-ink-soft disabled:opacity-60';

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
      <div className="card-soft p-8 text-center">
        <p className="text-3xl">✓</p>
        <h3 className="h-display mt-2 text-2xl font-bold text-ink">Request received.</h3>
        <p className="mt-2 text-ink/70">A vetted local cash buyer will contact you within 24 hours with your no-obligation offer.</p>
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
      <p className="text-center text-xs text-ink/50">Free · No obligation · No fees. By submitting, you agree that vetted local buyer(s) in our network may contact you by phone, SMS or email about your property.</p>
    </div>,
  ];

  return (
    <div className={`card-soft p-6 ${compact ? '' : 'md:p-8'}`}>
      <div className="mb-4 flex gap-1.5">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={`h-1 flex-1 rounded-full ${i <= step ? 'bg-gold' : 'bg-[#eee7d8]'}`} />
        ))}
      </div>
      <h3 className="h-display text-xl font-bold text-ink">
        {['Where is the property?', 'About the property', 'Your situation', 'Where do we send the offer?'][step]}
      </h3>
      <div className="mt-4">{steps[step]}</div>
      {step > 0 && (
        <button className="mt-3 text-sm text-ink/40 hover:text-ink/70" onClick={() => setStep(step - 1)}>← Back</button>
      )}
    </div>
  );
}
