import Link from 'next/link';
import { SITE_NAME } from '@/lib/config';
import { countries } from '@/data/countries';
import { citiesFor } from '@/data/cities';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <p className="text-lg font-extrabold text-white">{SITE_NAME}</p>
          <p className="mt-2 text-sm">We connect homeowners who need a fast sale with vetted local cash buyers — free, no-obligation offers, no fees, sell as-is.</p>
        </div>
        {countries.map((c) => (
          <div key={c.slug}>
            <p className="font-bold text-white">{c.flag} {c.name}</p>
            <ul className="mt-2 space-y-1 text-sm">
              {citiesFor(c.slug).slice(0, 6).map((city) => (
                <li key={city.slug}>
                  <Link href={`/${c.slug}/${city.slug}`} className="hover:text-emerald-400">{city.name}</Link>
                </li>
              ))}
              <li><Link href={`/${c.slug}`} className="font-semibold hover:text-emerald-400">All {c.slug.toUpperCase()} areas →</Link></li>
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {SITE_NAME} · A property-buyer connection service. We are not estate agents, brokers or lenders; offers are made by independent vetted buyers. Always verify proof of funds and take independent advice before signing.
      </div>
    </footer>
  );
}
