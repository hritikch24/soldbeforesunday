import type { Metadata } from 'next';
import Link from 'next/link';
import { countries } from '@/data/countries';
import { citiesFor } from '@/data/cities';
import TrustBar from '@/components/TrustBar';
import { SITE_URL } from '@/lib/config';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
    languages: Object.fromEntries([['x-default', SITE_URL], ...countries.map((c) => [c.locale, `${SITE_URL}/${c.slug}`])]),
  },
};

export default function Home() {
  return (
    <>
      <section className="hero-shell relative overflow-hidden">
        <div className="aurora" aria-hidden />
        <div className="mx-auto max-w-4xl px-4 py-20 text-center md:py-28">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-moss">Vetted cash buyers · Four countries</p>
          <h1 className="h-display fluid-hero mt-4 font-bold text-ink">
            Sell the house. <span className="accent-italic">Skip the circus.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
            No agents, no fees, no repairs, no strangers traipsing through your hallway for months. Tell us about the property once — a vetted local cash buyer makes you a real offer within 24–48 hours.
          </p>
          <p id="countries" className="mt-10 text-sm font-bold uppercase tracking-[0.25em] text-ink/50">Where is your property?</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {countries.map((c) => (
              <Link key={c.slug} href={`/${c.slug}`} className="card-soft group p-6 text-lg font-bold text-ink transition hover:-translate-y-0.5">
                <span className="text-2xl">{c.flag}</span>
                <span className="h-display mt-2 block group-hover:text-moss">{c.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <TrustBar />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="h-display text-center text-3xl font-bold text-ink">Active buyer markets</h2>
        <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {countries.map((c) => (
            <div key={c.slug}>
              <h3 className="h-display font-bold text-ink">{c.flag} {c.name}</h3>
              <ul className="mt-3 space-y-1.5 text-sm">
                {citiesFor(c.slug).map((city) => (
                  <li key={city.slug}>
                    <Link href={`/${c.slug}/${city.slug}`} className="text-ink/60 hover:text-moss">Sell your house fast in {city.name}</Link>
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
