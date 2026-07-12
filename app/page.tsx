import type { Metadata } from 'next';
import Link from 'next/link';
import { countries } from '@/data/countries';
import { citiesFor } from '@/data/cities';
import { SITE_URL } from '@/lib/config';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
    languages: Object.fromEntries([['x-default', SITE_URL], ...['us', 'uk', 'ca', 'au'].map((s) => {
      const locale = s === 'us' ? 'en-US' : s === 'uk' ? 'en-GB' : s === 'ca' ? 'en-CA' : 'en-AU';
      return [locale, `${SITE_URL}/${s}`];
    })]),
  },
};

export default function Home() {
  return (
    <>
      <section className="bg-slate-900 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">Sell Your House Fast. Fair Cash Offer in 24–48 Hours.</h1>
          <p className="mt-4 text-lg text-slate-300">No fees. No repairs. No agents. No months of waiting. We connect you with vetted cash buyers active in your area.</p>
          <p className="mt-8 font-bold uppercase tracking-widest text-emerald-400">Where is your property?</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {countries.map((c) => (
              <Link key={c.slug} href={`/${c.slug}`} className="rounded-xl bg-white/10 p-5 text-lg font-bold hover:bg-emerald-600">
                {c.flag} {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-center text-2xl font-extrabold text-slate-900">Active Buyer Markets</h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {countries.map((c) => (
            <div key={c.slug}>
              <h3 className="font-bold text-slate-900">{c.flag} {c.name}</h3>
              <ul className="mt-2 space-y-1 text-sm">
                {citiesFor(c.slug).map((city) => (
                  <li key={city.slug}>
                    <Link href={`/${c.slug}/${city.slug}`} className="text-slate-600 hover:text-emerald-600">
                      Sell your house fast in {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
