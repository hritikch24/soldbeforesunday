'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getTrackingChoice, setTrackingChoice, SETTINGS_EVENT } from '@/lib/tracking-consent';
import { GA_ID, GOOGLE_ADS_ID } from '@/lib/config';

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(getTrackingChoice() === null);
    const show = () => setOpen(true);
    window.addEventListener(SETTINGS_EVENT, show);
    return () => window.removeEventListener(SETTINGS_EVENT, show);
  }, []);

  function choose(accepted: boolean) {
    setTrackingChoice(accepted ? 'accepted' : 'rejected');
    setOpen(false);
    if (!accepted) {
      const w = window as unknown as { gtag?: (...args: unknown[]) => void; [key: string]: unknown };
      if (GA_ID) w[`ga-disable-${GA_ID}`] = true;
      if (GOOGLE_ADS_ID) w[`ga-disable-${GOOGLE_ADS_ID}`] = true;
      w.gtag?.('consent', 'update', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
      try { sessionStorage.removeItem('_sid'); } catch { /* no-op */ }
      // Remove optional first-party Google cookies created before withdrawal.
      for (const cookie of document.cookie.split(';')) {
        const name = cookie.split('=')[0].trim();
        if (!/^(_ga|_gid|_gat|_gcl)/.test(name)) continue;
        const domains = [location.hostname, `.${location.hostname}`, '.soldbeforesunday.com'];
        document.cookie = `${name}=; Max-Age=0; path=/`;
        for (const domain of domains) document.cookie = `${name}=; Max-Age=0; path=/; domain=${domain}`;
      }
      // Unload any Google library and stop its listeners after withdrawal.
      window.location.reload();
    }
  }

  if (!open) return null;
  return <aside aria-label="Cookie choices" className="fixed inset-x-3 bottom-20 z-[110] mx-auto max-w-lg rounded-2xl border border-[#ddd5c4] bg-cream p-5 text-ink shadow-xl md:inset-x-auto md:bottom-5 md:right-5">
    <p className="h-display text-lg font-bold">Your privacy choices</p>
    <p className="mt-2 text-sm leading-relaxed text-ink/70">We use optional usage tracking and Google analytics or advertising tags only with your permission. Your enquiry works with either choice. <Link href="/privacy#cookies" className="underline">Privacy details</Link>.</p>
    <div className="mt-4 grid grid-cols-2 gap-3">
      <button type="button" onClick={() => choose(false)} className="rounded-full border border-ink px-4 py-2.5 text-sm font-semibold">Reject optional</button>
      <button type="button" onClick={() => choose(true)} className="rounded-full border border-ink bg-ink px-4 py-2.5 text-sm font-semibold text-white">Accept optional</button>
    </div>
  </aside>;
}
