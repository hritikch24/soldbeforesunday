import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCountry } from '@/data/countries';
import { cities, citiesFor } from '@/data/cities';
import { situations } from '@/data/situations';
import { faqsFor } from '@/data/faqs';
import LeadForm from '@/components/LeadForm';
import HowItWorks from '@/components/HowItWorks';
import Comparison from '@/components/Comparison';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import SchemaMarkup from '@/components/SchemaMarkup';
import { SITE_URL } from '@/lib/config';

export function generateStaticParams() {
  return cities.map((c) => ({ country: c.country, city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string; city: string }> }): Promise<Metadata> {
  const { country, city } = await params;
  const co = getCountry(country);
  const ci = cities.find((x) => x.slug === city && x.country === country);
  if (!co || !ci) return {};
  return {
    title: `Sell My House Fast ${ci.name} — Cash Offer in 24–48h`,
    description: `Sell your house fast in ${ci.name}, ${ci.region}. Free cash offer from vetted local buyers — any condition, no fees, ${co.processTerm} in ${co.days}.`,
    openGraph: { title: `Sell My House Fast ${ci.name} — Cash Offer in 24–48h`, description: ci.blurb, url: `/${country}/${city}` },
    alternates: { canonical: `/${country}/${city}` },
  };
}

export default async function CityPage({ params }: { params: Promise<{ country: string; city: string }> }) {
  const { country, city } = await params;
  const co = getCountry(country);
  const ci = cities.find((x) => x.slug === city && x.country === country);
  if (!co || !ci) notFound();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Fast cash house sale in ${ci.name}`,
    provider: { '@id': `${SITE_URL}/#org` },
    areaServed: { '@type': 'City', name: `${ci.name}, ${ci.region}` },
    description: `Cash offers on houses in any condition in ${ci.name}, ${ci.region}.`,
  };

  return (
    <>
      <SchemaMarkup schema={schema} />
      <Breadcrumbs crumbs={[{ href: '/', label: 'Home' }, { href: `/${co.slug}`, label: co.name }, { href: `/${co.slug}/${ci.slug}`, label: ci.name }]} />
      <section className="relative">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="h-display text-4xl font-bold leading-[1.08] text-ink md:text-5xl">Sell Your House Fast in {ci.name}</h1>
            <p className="mt-4 text-lg leading-relaxed text-ink/70">{ci.blurb}</p>
            <ul className="mt-6 space-y-2 font-medium text-ink/80">
              <li>✓ Cash offer within 24–48 hours — free, no obligation</li>
              <li>✓ Any condition, any part of {ci.name}</li>
              <li>✓ No {co.agentTerm} fees · {co.processTerm} in {co.days}</li>
            </ul>
          </div>
          <LeadForm country={co.slug} city={ci.slug} />
        </div>
      </section>
      <HowItWorks processTerm={co.processTerm} days={co.days} />
      <Comparison c={co} />
      <section className="bg-paper py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="h-display text-xl font-bold text-ink">Common situations we help with in {ci.name}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {situations.map((s) => (
              <Link key={s.slug} href={`/${co.slug}/situations/${s.slug}`} className="rounded-full border border-[#ddd5c4] bg-white px-4 py-1.5 text-sm text-ink/70 hover:border-gold hover:text-ink">
                {s.title(co)}
              </Link>
            ))}
          </div>
          <h2 className="mt-8 h-display text-xl font-bold text-ink">Other areas in {co.nameWithThe}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {citiesFor(co.slug).filter((x) => x.slug !== ci.slug).map((x) => (
              <Link key={x.slug} href={`/${co.slug}/${x.slug}`} className="rounded-full border border-[#ddd5c4] bg-white px-4 py-1.5 text-sm text-ink/70 hover:border-gold hover:text-ink">
                {x.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FAQSection items={faqsFor(co).slice(0, 4)} />
    </>
  );
}
