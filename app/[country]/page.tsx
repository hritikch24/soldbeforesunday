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
      <section className="bg-slate-900 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-widest text-emerald-400">{c.flag} {c.name}</p>
            <h1 className="mt-2 text-4xl font-extrabold leading-tight md:text-5xl">Sell Your House Fast — {c.processTerm[0].toUpperCase() + c.processTerm.slice(1)} in {c.days}.</h1>
            <p className="mt-4 text-lg text-slate-300">{c.offerNote}</p>
            <ul className="mt-6 space-y-2 font-medium">
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
      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-extrabold text-slate-900">We Buy Houses Across the {c.name}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {citiesFor(c.slug).map((city) => (
              <Link key={city.slug} href={`/${c.slug}/${city.slug}`} className="rounded-full border border-slate-300 px-4 py-1.5 text-sm hover:border-emerald-500 hover:text-emerald-700">
                {city.name}, {city.region}
              </Link>
            ))}
          </div>
          <h2 className="mt-10 text-2xl font-extrabold text-slate-900">Whatever the Situation</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {situations.map((s) => (
              <Link key={s.slug} href={`/${c.slug}/situations/${s.slug}`} className="rounded-xl border border-slate-200 p-4 hover:border-emerald-400">
                <span className="font-bold text-slate-900">{s.title(c)}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FAQSection items={faqsFor(c)} />
    </>
  );
}
