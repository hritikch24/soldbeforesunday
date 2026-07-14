'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { GA_ID } from '@/lib/config';
import { trackEvent } from './PageTracker';

export default function Analytics() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.('a[href^="tel:"]') as HTMLAnchorElement | null;
      if (!a) return;
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      if (typeof w.gtag === 'function') w.gtag('event', 'call_click', { page_path: window.location.pathname, link_url: a.href });
      trackEvent('call_click', { action: 'call_click', phone: a.href.replace('tel:', '') });
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
