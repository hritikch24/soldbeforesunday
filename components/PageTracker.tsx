'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function getSessionId(): string {
  const key = '_sid';
  let sid = sessionStorage.getItem(key);
  if (!sid) {
    sid = Math.random().toString(36).slice(2) + Date.now().toString(36);
    sessionStorage.setItem(key, sid);
  }
  return sid;
}

export function getDevice(): string {
  const w = window.innerWidth;
  if (w < 768) return 'mobile';
  if (w < 1024) return 'tablet';
  return 'desktop';
}

export function getBrowser(): string {
  const ua = navigator.userAgent;
  if (ua.includes('Edg')) return 'Edge';
  if (ua.includes('Chrome')) return 'Chrome';
  if (ua.includes('Safari') && !ua.includes('Chrome')) return 'Safari';
  if (ua.includes('Firefox')) return 'Firefox';
  return 'Other';
}

export function trackEvent(event: string, extra: Record<string, string | null> = {}) {
  const sp = new URLSearchParams(window.location.search);
  const payload = {
    event,
    page: window.location.pathname,
    ref: document.referrer || null,
    utmSource: sp.get('utm_source'),
    utmMedium: sp.get('utm_medium'),
    utmCampaign: sp.get('utm_campaign'),
    device: getDevice(),
    browser: getBrowser(),
    session: getSessionId(),
    ts: new Date().toISOString(),
    ...extra,
  };
  try {
    if (!navigator.sendBeacon('/api/track', JSON.stringify(payload))) {
      fetch('/api/track', { method: 'POST', body: JSON.stringify(payload), keepalive: true }).catch(() => {});
    }
  } catch {
    /* no-op */
  }
}

function Tracker() {
  const pathname = usePathname();
  const search = useSearchParams();
  useEffect(() => {
    if (pathname.startsWith('/metrics') || pathname.startsWith('/admin') || pathname.startsWith('/api')) return;
    trackEvent('pageview');
    // search included so SPA navigations with new UTMs re-fire
  }, [pathname, search]);
  return null;
}

export default function PageTracker() {
  return (
    <Suspense fallback={null}>
      <Tracker />
    </Suspense>
  );
}
