'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTracker() {
  const pathname = usePathname();
  useEffect(() => {
    try {
      navigator.sendBeacon(
        '/api/track',
        JSON.stringify({ event: 'pageview', page: pathname, ref: document.referrer, ts: new Date().toISOString() })
      );
    } catch { /* no-op */ }
  }, [pathname]);
  return null;
}
