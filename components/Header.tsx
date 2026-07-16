import Link from 'next/link';
import { CONTACT_EMAIL, PHONE, PHONE_DISPLAY } from '@/lib/config';
import { countries } from '@/data/countries';

const nav = [
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/guides', label: 'Guides' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e9e3d6] bg-cream/95 backdrop-blur">
      <div className="hidden border-b border-[#e9e3d6] bg-ink text-[#cfe0d6] md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1.5 text-xs">
          <p>✓ Free offers in 24–48h &nbsp;·&nbsp; ✓ No fees, ever &nbsp;·&nbsp; ✓ Sell as-is</p>
          <p className="flex gap-4">
            {PHONE && <a href={`tel:${PHONE}`} className="hover:text-gold">📞 {PHONE_DISPLAY}</a>}
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-gold">✉ {CONTACT_EMAIL}</a>
          </p>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5">
        <Link href="/" className="h-display text-xl font-bold tracking-tight text-ink">
          Sold<span className="text-gold">·</span>Before<span className="text-gold">·</span>Sunday
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-ink/80 md:flex" aria-label="Main">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-moss">{n.label}</Link>
          ))}
          <span className="h-4 w-px bg-[#e9e3d6]" aria-hidden />
          {countries.map((c) => (
            <Link key={c.slug} href={`/${c.slug}`} title={`Sell your house fast — ${c.name}`} className="hover:opacity-70">{c.flag}</Link>
          ))}
        </nav>
        <Link href="/#countries" className="btn-ink !px-5 !py-2.5 text-sm">Get My Offer</Link>
      </div>
      <details className="border-t border-[#e9e3d6] md:hidden">
        <summary className="cursor-pointer px-4 py-2 text-sm font-medium text-ink/60">☰ Menu</summary>
        <nav className="flex flex-col px-4 pb-3 text-sm" aria-label="Mobile">
          {nav.map((n) => (<Link key={n.href} href={n.href} className="border-b border-[#f0ebe0] py-2.5">{n.label}</Link>))}
          <div className="flex gap-5 py-2.5">
            {countries.map((c) => (<Link key={c.slug} href={`/${c.slug}`}>{c.flag} {c.slug.toUpperCase()}</Link>))}
          </div>
          {PHONE && <a href={`tel:${PHONE}`} className="py-1 text-moss">📞 {PHONE_DISPLAY}</a>}
        </nav>
      </details>
    </header>
  );
}
