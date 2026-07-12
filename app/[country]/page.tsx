import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { countries, getCountry } from '@/data/countries';
import { citiesFor } from '@/data/cities';
import { situations } from '@/data/situations';
import { faqsFor } from '@/data/faqs';
import LeadForm from '@/components/LeadForm';
import HowItWorks from '@/components/HowItWorks';
import Comparison from '@/components/Comparison';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import SchemaMarkup from '@/components/SchemaMarkup';
import { SITE_NAME, SITE_URL } from '@/lib/config';

export function generateStaticParams() {
  return countries.map((c) => ({ country: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country } = await params;
  const c = getCountry(country);
  if (!c) return {};
  return {
    title: `Sell Your House Fast in the ${c.name} — Cash Offer in 24–48h`,
    description: `${c.offerNote} Free no-obligation offers from vetted local cash buyers, ${c.processTerm} in ${c.days}.`,
    alternates: {
      canonical: `/${c.slug}`,
      languages: Object.fromEntries(countries.map((x) => [x.locale, `${SITE_URL}/${x.slug}`])),
    },
  };
}

export default async function CountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const c = getCountry(country);
  if (!c) notFound();

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
      <section className="relative">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-moss">{c.flag} {c.name}</p>
            <h1 className="h-display mt-3 text-4xl font-bold leading-[1.08] text-ink md:text-5xl">Sell Your House Fast — {c.processTerm[0].toUpperCase() + c.processTerm.slice(1)} in {c.days}.</h1>
            <p className="mt-4 text-lg leading-relaxed text-ink/70">{c.offerNote}</p>
            <ul className="mt-6 space-y-2 font-medium text-ink/80">
              <li>✓ Free, no-obligation cash offer within 24–48 hours</li>
              <li>✓ Any condition, any situation — including {c.distressTerm}</li>
              <li>✓ No {c.agentTerm} fees, no repairs, no viewings</li>
            </ul>
          </div>
          <LeadForm country={c.slug} />
        </div>
      </section>
      <HowItWorks processTerm={c.processTerm} days={c.days} />
      <Comparison c={c} />
      <section className="bg-paper py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="h-display text-2xl font-bold text-ink">We Buy Houses Across the {c.name}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {citiesFor(c.slug).map((city) => (
              <Link key={city.slug} href={`/${c.slug}/${city.slug}`} className="rounded-full border border-[#ddd5c4] bg-white px-4 py-1.5 text-sm text-ink/70 hover:border-gold hover:text-ink">
                {city.name}, {city.region}
              </Link>
            ))}
          </div>
          <h2 className="mt-10 h-display text-2xl font-bold text-ink">Whatever the Situation</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {situations.map((s) => (
              <Link key={s.slug} href={`/${c.slug}/situations/${s.slug}`} className="card-soft p-4 transition hover:-translate-y-0.5">
                <span className="h-display font-semibold text-ink">{s.title(c)}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FAQSection items={faqsFor(c)} />
    </>
  );
}
