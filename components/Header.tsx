import Link from 'next/link';
import { SITE_NAME } from '@/lib/config';
import { countries } from '@/data/countries';

const nav = [
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/faq', label: 'FAQ' },
  { href: '/glossary', label: 'Glossary' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e9e3d6] bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5">
        <Link href="/" className="h-display text-xl font-bold tracking-tight text-ink">
          Sold<span className="text-gold">·</span>Before<span className="text-gold">·</span>Sunday
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-ink/80 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-moss">{n.label}</Link>
          ))}
          <span className="h-4 w-px bg-[#e9e3d6]" />
          {countries.map((c) => (
            <Link key={c.slug} href={`/${c.slug}`} title={c.name} className="hover:opacity-70">{c.flag}</Link>
          ))}
        </nav>
        <Link href="/#countries" className="btn-ink !px-5 !py-2.5 text-sm">Get My Offer</Link>
      </div>
      <details className="border-t border-[#e9e3d6] md:hidden">
        <summary className="cursor-pointer px-4 py-2 text-sm text-ink/60">Menu</summary>
        <nav className="flex flex-col gap-1 px-4 pb-3 text-sm">
          {nav.map((n) => (<Link key={n.href} href={n.href} className="py-1.5">{n.label}</Link>))}
          <div className="flex gap-4 py-1.5">
            {countries.map((c) => (<Link key={c.slug} href={`/${c.slug}`}>{c.flag} {c.slug.toUpperCase()}</Link>))}
          </div>
        </nav>
      </details>
    </header>
  );
}
