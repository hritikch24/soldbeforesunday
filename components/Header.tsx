import Link from 'next/link';
import { SITE_NAME } from '@/lib/config';
import { countries } from '@/data/countries';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="text-lg font-extrabold tracking-tight text-slate-900">
          <span className="text-emerald-600">◆</span> {SITE_NAME}
        </Link>
        <nav className="flex items-center gap-4 text-sm font-medium text-slate-700">
          {countries.map((c) => (
            <Link key={c.slug} href={`/${c.slug}`} className="hover:text-emerald-600" title={c.name}>
              {c.flag} <span className="hidden sm:inline">{c.slug.toUpperCase()}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
