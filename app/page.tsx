import type { Metadata } from 'next';
import Link from 'next/link';
import { countries } from '@/data/countries';
import { citiesFor } from '@/data/cities';
import { situations } from '@/data/situations';
import { situationIcon, IconHouse, IconCash, IconCalendar } from '@/components/Icons';
import TrustBar from '@/components/TrustBar';
import TrustSignals from '@/components/TrustSignals';
import { SITE_URL } from '@/lib/config';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
    languages: Object.fromEntries([['x-default', SITE_URL], ...countries.map((c) => [c.locale, `${SITE_URL}/${c.slug}`])]),
  },
};

const steps: [React.ReactNode, string, string][] = [
  [<IconHouse key="i" className="h-7 w-7 text-gold" />, 'Tell us about the property', 'Two minutes, online, free. Address, condition, timeline — that’s all a buyer needs to start.'],
  [<IconCash key="i" className="h-7 w-7 text-gold" />, 'Get a fair cash offer', 'A vetted local cash buyer reviews it and makes a no-obligation offer, usually within 24–48 hours.'],
  [<IconCalendar key="i" className="h-7 w-7 text-gold" />, 'Close on your date', 'Accept and move at your pace — days, not months. No chain, no bank approvals, no fall-throughs.'],
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero-shell relative overflow-hidden">
        <div className="aurora" aria-hidden />
        <div className="mx-auto max-w-5xl px-4 py-16 text-center md:py-24">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-moss">Vetted cash buyers · US · UK · Canada · Australia</p>
          <h1 className="h-display fluid-hero mx-auto mt-4 max-w-3xl font-bold text-ink">
            Sell the house. <span className="accent-italic">Skip the circus.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
            No agents, no fees, no repairs, no strangers through your hallway for months. Tell us about the
            property once — a vetted local cash buyer makes you a real offer within 24–48 hours.
          </p>
        </div>
      </section>

      {/* PHOTO COUNTRY TILES */}
      <section className="mx-auto max-w-6xl px-4 pb-4" id="countries">
        <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-ink/50">Where is your property?</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {countries.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="group relative block aspect-[4/5] overflow-hidden rounded-2xl shadow-[var(--e2)] transition hover:-translate-y-1 hover:shadow-[var(--e3)]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                style={{ backgroundImage: `image-set(url(/images/hero-${c.slug}.jpg) 1x)` }}
                aria-hidden
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(16,35,27,0) 30%, rgba(16,35,27,.82) 100%)' }} aria-hidden />
              <div className="absolute inset-x-0 bottom-0 p-5 text-left text-white">
                <span className="text-2xl">{c.flag}</span>
                <span className="h-display mt-1 block text-xl font-bold">{c.name}</span>
                <span className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-gold">Get my cash offer →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <TrustBar />

      {/* HOW IT WORKS */}
      <section className="bg-paper py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="h-display text-center text-3xl font-bold text-ink md:text-4xl">Three steps. That’s the whole process.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map(([icon, t, d], i) => (
              <div key={t} className="rounded-2xl border border-[#e9e3d6] bg-cream/40 p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">{icon}</span>
                  <span className="h-display text-4xl font-bold text-gold-soft">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="h-display mt-4 text-xl font-bold text-ink">{t}</h3>
                <p className="mt-2 leading-relaxed text-ink/70">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SITUATIONS */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="h-display text-center text-3xl font-bold text-ink md:text-4xl">Whatever the situation</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-ink/70">
          The reasons people need a fast sale are rarely simple. These are the ones we help with most.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {situations.map((s) => {
            const Ico = situationIcon[s.slug];
            return (
              <Link key={s.slug} href={`/us/situations/${s.slug}`} className="card-soft flex items-start gap-3 p-4 transition hover:-translate-y-0.5">
                {Ico && <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold-soft"><Ico className="h-5 w-5 text-ink" /></span>}
                <span className="h-display font-semibold text-ink">{s.slug.replace(/-/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase())}</span>
              </Link>
            );
          })}
        </div>
      </section>

      <TrustSignals />

      {/* WHERE WE BUY (SEO city links, cleaner) */}
      <section className="bg-paper py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="h-display text-center text-2xl font-bold text-ink">Where we buy</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {countries.map((c) => (
              <div key={c.slug}>
                <Link href={`/${c.slug}`} className="h-display font-bold text-ink hover:text-moss">{c.flag} {c.name}</Link>
                <ul className="mt-3 space-y-1.5 text-sm">
                  {citiesFor(c.slug).map((city) => (
                    <li key={city.slug}>
                      <Link href={`/${c.slug}/${city.slug}`} className="text-ink/55 hover:text-moss">{city.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
