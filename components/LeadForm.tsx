'use client';

import { useState, useEffect, useRef } from 'react';
import { GOOGLE_ADS_ID, ADS_LEAD_LABEL } from '@/lib/config';
import { trackEvent } from './PageTracker';
import LeadConsent from './LeadConsent';
import { isUKPostcode, normaliseUKPostcode } from '@/lib/uk-lead';

const inputCls = 'w-full rounded-xl border border-[#ddd5c4] bg-white p-3.5 text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none';
const btnCls = 'w-full rounded-full bg-ink py-4 text-lg font-bold text-white transition hover:bg-ink-soft disabled:opacity-60';

export default function LeadForm({ country, city, compact = false }: { country: string; city?: string; compact?: boolean }) {
  const [step, setStep] = useState(0);
  const [d, setD] = useState<Record<string, string>>({ country, city: city ?? '' });
  const [busy, setBusy] = useState(false);
  const [contactConsent, setContactConsent] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);
  const trackedSteps = useRef(new Set<number>());

  useEffect(() => {
    if (!trackedSteps.current.has(step)) {
      trackedSteps.current.add(step);
      trackEvent('engagement', { action: `form_step_${step}` });
    }
  }, [step]);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setD((p) => ({ ...p, [k]: e.target.value }));

  async function submit() {
    setError('');
    if (!contactConsent) { setError('Please confirm we may contact you about your enquiry.'); return; }
    setBusy(true);
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...d, country: 'uk', postcode: normaliseUKPostcode(d.postcode ?? ''), contactConsent, ts: new Date().toISOString(), page: window.location.pathname }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'We could not save your enquiry. Please try again or call us.');
      const w = window as unknown as { gtag?: (...a: unknown[]) => void };
      if (typeof w.gtag === 'function') {
        w.gtag('event', 'lead_submit', { country, city: city ?? '' });
        if (GOOGLE_ADS_ID && ADS_LEAD_LABEL) {
          w.gtag('event', 'conversion', { send_to: `${GOOGLE_ADS_ID}/${ADS_LEAD_LABEL}` });
        }
      }
      trackEvent('engagement', { action: 'form_submit' });
      setDone(true);
    } catch (failure) {
      setError(failure instanceof Error ? failure.message : 'Connection failed. Please try again or call us.');
    } finally {
      setBusy(false);
    }
  }

  if (done) {
    return (
      <div className="card-soft p-8 text-center">
        <p className="text-3xl">✓</p>
        <h3 className="h-display mt-2 text-2xl font-bold text-ink">Request received.</h3>
        <p className="mt-2 text-ink/70">We will review your UK property enquiry and contact you about the next steps. Any buyer introduction will be explained before your details are shared.</p>
      </div>
    );
  }

  const steps = [
    <div key="0" className="space-y-3">
      <input required autoComplete="street-address" aria-label="Property address" placeholder="Property address" className={inputCls} value={d.address ?? ''} onChange={set('address')} />
      <input required autoComplete="postal-code" aria-label="UK property postcode" placeholder="UK postcode, e.g. SW1A 1AA" className={inputCls} value={d.postcode ?? ''} onChange={set('postcode')} />
      <button className={btnCls} onClick={() => { if (!d.address?.trim() || !isUKPostcode(d.postcode ?? '')) { setError('Please enter a property address and valid UK postcode.'); return; } setError(''); setStep(1); }}>Get My Cash Offer →</button>
    </div>,
    <div key="1" className="space-y-3">
      <select aria-label="Property type" className={inputCls} value={d.propertyType ?? ''} onChange={set('propertyType')}>
        <option value="">Property type…</option>
        <option>House</option><option>Flat / Maisonette</option><option>Bungalow</option><option>Terraced house</option><option>Multi-unit property</option><option>Other</option>
      </select>
      <select aria-label="Property condition" className={inputCls} value={d.condition ?? ''} onChange={set('condition')}>
        <option value="">Condition…</option>
        <option>Ready to move into</option><option>Needs some work</option><option>Needs major work</option><option>Severe damage / uninhabitable</option>
      </select>
      <button className={btnCls} onClick={() => d.propertyType && d.condition && setStep(2)}>Next →</button>
    </div>,
    <div key="2" className="space-y-3">
      <select aria-label="Reason for selling" className={inputCls} value={d.reason ?? ''} onChange={set('reason')}>
        <option value="">Reason for selling…</option>
        <option>Behind on payments / at risk of losing the home</option>
        <option>Inherited property</option><option>Divorce / separation</option>
        <option>Relocating</option><option>Tired landlord</option>
        <option>Property needs too much work</option><option>Just want a fast sale</option>
      </select>
      <select aria-label="Preferred sale timeline" className={inputCls} value={d.timeline ?? ''} onChange={set('timeline')}>
        <option value="">How fast do you need to sell?…</option>
        <option>ASAP — within 2 weeks</option><option>Within a month</option>
        <option>1–3 months</option><option>Just exploring options</option>
      </select>
      <button className={btnCls} onClick={() => d.reason && d.timeline && setStep(3)}>Next →</button>
    </div>,
    <div key="3" className="space-y-3">
      <input required autoComplete="name" aria-label="Your name" placeholder="Your name" className={inputCls} value={d.name ?? ''} onChange={set('name')} />
      <input required type="tel" autoComplete="tel" inputMode="tel" aria-label="Phone number" placeholder="Phone number" className={inputCls} value={d.phone ?? ''} onChange={set('phone')} />
      <input type="email" autoComplete="email" inputMode="email" aria-label="Email (optional)" placeholder="Email (optional)" className={inputCls} value={d.email ?? ''} onChange={set('email')} />
      <LeadConsent checked={contactConsent} onChange={setContactConsent} />
      <button className={btnCls} disabled={busy || !contactConsent || !d.name?.trim() || !d.phone?.trim()} onClick={() => d.name && d.phone && submit()}>
        {busy ? 'Sending…' : 'Get My Free Cash Offer ✓'}
      </button>
      <p className="text-center text-xs text-ink/50">Free enquiry · No obligation. Buyer legal costs and terms are confirmed separately.</p>
    </div>,
  ];

  return (
    <div id="offer" className={`card-soft scroll-mt-28 p-6 ${compact ? '' : 'md:p-8'}`}>
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink/40">Step {step + 1} of 4 · ≈2 minutes · Free &amp; no obligation</p>
      <div className="mb-4 flex gap-1.5" role="progressbar" aria-label="Enquiry progress" aria-valuemin={1} aria-valuemax={4} aria-valuenow={step + 1}>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={`h-1 flex-1 rounded-full ${i <= step ? 'bg-gold' : 'bg-[#eee7d8]'}`} />
        ))}
      </div>
      <h3 className="h-display text-xl font-bold text-ink">
        {['Where is the property?', 'About the property', 'Your situation', 'Where do we send the offer?'][step]}
      </h3>
      <div className="mt-4">{steps[step]}</div>
      {error && <p role="alert" className="mt-3 text-sm text-red-700">{error}</p>}
      {step > 0 && (
        <button className="mt-3 text-sm text-ink/40 hover:text-ink/70" onClick={() => setStep(step - 1)}>← Back</button>
      )}
    </div>
  );
}
