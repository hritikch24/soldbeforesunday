import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { countries, getCountry } from '@/data/countries';
import { citiesFor } from '@/data/cities';
import { situations } from '@/data/situations';
import { faqsFor } from '@/data/faqs';
import HowItWorks from '@/components/HowItWorks';
import Comparison from '@/components/Comparison';
import TrustSignals from '@/components/TrustSignals';
import FoundingOffer from '@/components/FoundingOffer';
import BuyerNetwork from '@/components/BuyerNetwork';
import CountryHero from '@/components/CountryHero';
import ActivityTicker from '@/components/ActivityTicker';
import Testimonials from '@/components/Testimonials';
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
    title: `Sell Your House Fast in ${c.nameWithThe} — Cash Offer in 24–48h`,
    description: `${c.offerNote} Free no-obligation offers from vetted local cash buyers, ${c.processTerm} in ${c.days}.`,
    openGraph: { title: `Sell Your House Fast in ${c.nameWithThe}`, description: c.offerNote, url: `/${c.slug}` },
    alternates: {
      canonical: `/${c.slug}`,
      languages: Object.fromEntries([['x-default', SITE_URL], ...countries.map((x) => [x.locale, `${SITE_URL}/${x.slug}`])]),
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
      <Breadcrumbs crumbs={[{ href: '/', label: 'Home' }, { href: `/${c.slug}`, label: c.name }]} />
      <CountryHero c={c} />
      <ActivityTicker />
      <HowItWorks processTerm={c.processTerm} days={c.days} />
      <BuyerNetwork country={c.slug} />
      <Testimonials country={c.slug} />
      <Comparison c={c} />
      <TrustSignals />
      <FoundingOffer />
      <section className="bg-paper py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="h-display text-2xl font-bold text-ink">We Buy Houses Across {c.nameWithThe}</h2>
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
