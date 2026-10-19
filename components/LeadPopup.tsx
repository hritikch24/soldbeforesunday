'use client';

import { useEffect, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { trackEvent } from './PageTracker';
import LeadConsent from './LeadConsent';

const SUPPRESS_KEY = 'sbs_popup_seen';

export default function LeadPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [contactConsent, setContactConsent] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);
  const [d, setD] = useState({ name: '', phone: '', address: '', postcode: '' });

  const suppressed = useCallback(() => {
    if (/^\/(admin|metrics|contact|thanks|api)/.test(pathname)) return true;
    try { return sessionStorage.getItem(SUPPRESS_KEY) === '1'; } catch { return false; }
  }, [pathname]);

  const trigger = useCallback((source: string) => {
    if (suppressed() || open || done) return;
    setOpen(true);
    try { sessionStorage.setItem(SUPPRESS_KEY, '1'); } catch { /* no-op */ }
    trackEvent('popup_open', { action: source });
  }, [suppressed, open, done]);

  useEffect(() => {
    if (suppressed()) return;
    // Timed trigger (both desktop & mobile): 35s
    const timer = setTimeout(() => trigger('timed'), 35000);
    // Exit-intent (desktop): cursor leaves viewport top
    const onLeave = (e: MouseEvent) => { if (e.clientY <= 0) trigger('exit_intent'); };
    document.addEventListener('mouseout', onLeave);
    // Mobile back-intent: fast upward scroll after engagement
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (lastY - y > 80 && y < 300 && window.innerWidth < 768) trigger('scroll_up');
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseout', onLeave);
      window.removeEventListener('scroll', onScroll);
    };
  }, [trigger, suppressed]);

  async function submit() {
    setError('');
    setBusy(true);
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...d, country: 'uk', contactConsent, source: 'exit_popup', page: window.location.pathname, ts: new Date().toISOString() }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'We could not save your enquiry. Please try again or call us.');
      trackEvent('popup_submit', { action: 'popup_submit' });
      const w = window as unknown as { gtag?: (...a: unknown[]) => void };
      if (typeof w.gtag === 'function') w.gtag('event', 'lead_submit', { source: 'exit_popup' });
      setDone(true);
    } catch (failure) {
      setError(failure instanceof Error ? failure.message : 'Connection failed. Please try again or call us.');
    } finally {
      setBusy(false);
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Request a UK property callback"
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-3xl bg-cream shadow-2xl"
        style={{ animation: 'sbsPop .28s cubic-bezier(.16,1,.3,1)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-ink/50 hover:text-ink"
        >
          ✕
        </button>
        {done ? (
          <div className="px-8 py-12 text-center">
            <p className="text-4xl">✓</p>
            <h3 className="h-display mt-3 text-2xl font-bold text-ink">We&rsquo;ll be in touch shortly.</h3>
            <p className="mt-2 text-ink/70">We will review your UK enquiry and contact you about the next steps. We confirm permission before sharing your details with a buyer.</p>
          </div>
        ) : (
          <>
            <div className="bg-ink px-8 py-6 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Before you go</p>
              <h3 className="h-display mt-1 text-2xl font-bold text-white">Wondering what your house is worth in cash?</h3>
              <p className="mt-2 text-sm text-[#cfe0d6]">Leave your UK property details to request a callback about a possible buyer introduction. Free, with no obligation.</p>
            </div>
            <div className="space-y-3 px-8 py-6">
              <input aria-label="Your name" autoComplete="name" placeholder="Your name" className="w-full rounded-xl border border-[#ddd5c4] bg-white p-3.5" value={d.name} onChange={(e) => setD({ ...d, name: e.target.value })} />
              <input aria-label="Phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="Phone number" className="w-full rounded-xl border border-[#ddd5c4] bg-white p-3.5" value={d.phone} onChange={(e) => setD({ ...d, phone: e.target.value })} />
              <input aria-label="Property location" placeholder="UK property address" className="w-full rounded-xl border border-[#ddd5c4] bg-white p-3.5" value={d.address} onChange={(e) => setD({ ...d, address: e.target.value })} />
              <input aria-label="UK property postcode" autoComplete="postal-code" placeholder="UK postcode" className="w-full rounded-xl border border-[#ddd5c4] bg-white p-3.5" value={d.postcode} onChange={(e) => setD({ ...d, postcode: e.target.value })} />
              <LeadConsent checked={contactConsent} onChange={setContactConsent} />
              {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
              <button disabled={busy || !d.name.trim() || !d.phone.trim() || !d.address.trim() || !d.postcode.trim() || !contactConsent} onClick={submit} className="btn-ink w-full disabled:opacity-50">
                {busy ? 'Sending…' : 'Get My Free Cash Offer →'}
              </button>
              <p className="text-center text-[11px] text-ink/45">UK properties only · Free enquiry · No obligation.</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
