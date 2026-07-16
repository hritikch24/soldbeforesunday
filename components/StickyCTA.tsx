'use client';

import { usePathname } from 'next/navigation';

export default function StickyCTA() {
  const pathname = usePathname();
  if (/^\/(admin|metrics|contact|thanks|api)/.test(pathname)) return null;
  const hasForm = /^\/(us|uk|ca|au)(\/|$)/.test(pathname);
  const href = hasForm ? '#offer' : '/#countries';
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#e9e3d6] bg-cream/95 p-2.5 backdrop-blur md:hidden">
      <a href={href} className="btn-ink block w-full text-center !py-3.5">
        Get My Free Cash Offer →
      </a>
    </div>
  );
}
