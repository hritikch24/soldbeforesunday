import Link from 'next/link';
import { countries } from '@/data/countries';
import { citiesFor } from '@/data/cities';
import { regionsFor } from '@/data/regions';
import { situations } from '@/data/situations';
import { faqsFor } from '@/data/faqs';
import HowItWorks from '@/components/HowItWorks';
import Comparison from '@/components/Comparison';
import TrustSignals from '@/components/TrustSignals';
import FoundingOffer from '@/components/FoundingOffer';
import BuyerNetwork from '@/components/BuyerNetwork';
import IllustratedBand from '@/components/IllustratedBand';
import CountryHero from '@/components/CountryHero';
import ActivityTicker from '@/components/ActivityTicker';
import { situationIcon } from '@/components/Icons';
import Testimonials from '@/components/Testimonials';
import FAQSection from '@/components/FAQSection';
import SchemaMarkup from '@/components/SchemaMarkup';
import { SITE_URL } from '@/lib/config';

export default function UKLanding() {
  const c = countries[0];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Fast cash house sale — ${c.name}`,
    provider: { '@id': `${SITE_URL}/#org` },
    areaServed: c.name,
    description: c.offerNote,
  };

  return (
    <>
      <SchemaMarkup schema={schema} />
      <CountryHero c={c} />
      <ActivityTicker />
      <IllustratedBand country={c.slug} />
      <HowItWorks processTerm={c.processTerm} days={c.days} />
      <BuyerNetwork country={c.slug} />
      <Testimonials country={c.slug} />
      <Comparison c={c} />
      <TrustSignals />
      <FoundingOffer />
      <section id="areas" className="scroll-mt-28 bg-paper py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="h-display text-2xl font-bold text-ink">Cash-sale enquiries across the whole UK</h2>
          <p className="mt-2 max-w-2xl text-ink/65">
            England, Scotland, Wales and Northern Ireland — cities, towns, villages, rural areas and UK islands.
            Find local property guidance below. We accept enquiries nationwide; a suitable buyer and an offer are not guaranteed.
          </p>
          <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {regionsFor(c.slug).map((r) => (
              <Link key={r.slug} href={`/${c.slug}/${r.slug}`} className="card-soft px-4 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5">
                {r.name}
                {r.abbr && <span className="ml-1.5 font-mono text-xs font-normal text-ink/40">{r.abbr}</span>}
              </Link>
            ))}
          </div>

          <h2 className="mt-10 h-display text-2xl font-bold text-ink">Cities we cover in depth</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {citiesFor(c.slug).map((city) => (
              <Link key={city.slug} href={`/${c.slug}/${city.slug}`} className="rounded-full border border-[#ddd5c4] bg-white px-4 py-1.5 text-sm text-ink/70 hover:border-gold hover:text-ink">
                {city.name}, {city.region}
              </Link>
            ))}
          </div>
          <h2 className="mt-10 h-display text-2xl font-bold text-ink">Whatever the Situation</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {situations.map((s) => {
              const Ico = situationIcon[s.slug];
              return (
                <Link key={s.slug} href={`/${c.slug}/situations/${s.slug}`} className="card-soft flex items-start gap-3 p-4 transition hover:-translate-y-0.5">
                  {Ico && <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold-soft"><Ico className="h-5 w-5 text-ink" /></span>}
                  <span className="h-display font-semibold text-ink">{s.title(c)}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <FAQSection items={faqsFor(c)} />
    </>
  );
}
