'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackEvent } from './PageTracker';

export default function EngagementTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (/^\/(admin|metrics|api)/.test(pathname)) return;

    const fired = new Set<string>();
    const fire = (action: string) => {
      if (fired.has(action)) return;
      fired.add(action);
      trackEvent('engagement', { action });
    };

    // Scroll depth tracking
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const pct = Math.round((scrollTop / docHeight) * 100);
      if (pct >= 25) fire('scroll_25');
      if (pct >= 50) fire('scroll_50');
      if (pct >= 75) fire('scroll_75');
      if (pct >= 90) fire('scroll_100');
    }
    window.addEventListener('scroll', onScroll, { passive: true });

    // Section visibility tracking
    const sections = document.querySelectorAll('main section[class], main [data-section]');
    const sectionIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const id = el.dataset.section || el.id || el.className.split(/\s+/).find(c => !c.startsWith('r-')) || 'unknown';
          fire(`section_seen:${id.slice(0, 60)}`);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => sectionIO.observe(s));

    // Time on page tracking (30s, 60s, 120s, 300s)
    const timers = [
      setTimeout(() => fire('time_30s'), 30_000),
      setTimeout(() => fire('time_60s'), 60_000),
      setTimeout(() => fire('time_120s'), 120_000),
      setTimeout(() => fire('time_300s'), 300_000),
    ];

    return () => {
      window.removeEventListener('scroll', onScroll);
      sectionIO.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [pathname]);

  return null;
}
