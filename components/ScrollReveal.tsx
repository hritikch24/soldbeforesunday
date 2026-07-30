'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReveal() {
  const pathname = usePathname();
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (/^\/(admin|metrics)/.test(pathname)) return;

    const els = Array.from(document.querySelectorAll('main section')) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('r-in'); io.unobserve(e.target); }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
    );

    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92) return; // already visible — no hide, no flash
      el.classList.add('r-hidden');
      io.observe(el);
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
