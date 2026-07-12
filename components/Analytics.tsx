'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { GA_ID } from '@/lib/config';

export default function Analytics() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.('a[href^="tel:"]') as HTMLAnchorElement | null;
      if (!a) return;
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      if (typeof w.gtag === 'function') w.gtag('event', 'call_click', { page_path: window.location.pathname, link_url: a.href });
      try {
        navigator.sendBeacon('/api/track', JSON.stringify({ event: 'call_click', href: a.href, page: window.location.pathname, ts: new Date().toISOString() }));
      } catch { /* no-op */ }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  if (!GA_ID) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
    </>
  );
}
