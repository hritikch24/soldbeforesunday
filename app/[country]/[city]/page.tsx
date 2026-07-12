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
      <section className="bg-slate-900 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">Sell Your House Fast in {ci.name}</h1>
            <p className="mt-4 text-lg text-slate-300">{ci.blurb}</p>
            <ul className="mt-6 space-y-2 font-medium">
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
      <section className="bg-white py-10">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-xl font-extrabold text-slate-900">Common situations we help with in {ci.name}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {situations.map((s) => (
              <Link key={s.slug} href={`/${co.slug}/situations/${s.slug}`} className="rounded-full border border-slate-300 px-4 py-1.5 text-sm hover:border-emerald-500 hover:text-emerald-700">
                {s.title(co)}
              </Link>
            ))}
          </div>
          <h2 className="mt-8 text-xl font-extrabold text-slate-900">Other areas in the {co.name}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {citiesFor(co.slug).filter((x) => x.slug !== ci.slug).map((x) => (
              <Link key={x.slug} href={`/${co.slug}/${x.slug}`} className="rounded-full border border-slate-300 px-4 py-1.5 text-sm hover:border-emerald-500 hover:text-emerald-700">
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
