import Link from 'next/link';
import type { Country } from '@/data/countries';
import type { City } from '@/data/cities';
import { citiesFor, cityLabel } from '@/data/cities';
import { regionsFor } from '@/data/regions';
import { situations } from '@/data/situations';
import { faqsFor } from '@/data/faqs';
import LeadForm from '@/components/LeadForm';
import HowItWorks from '@/components/HowItWorks';
import Comparison from '@/components/Comparison';
import TrustSignals from '@/components/TrustSignals';
import FoundingOffer from '@/components/FoundingOffer';
import BuyerNetwork from '@/components/BuyerNetwork';
import IllustratedBand from '@/components/IllustratedBand';
import Testimonials from '@/components/Testimonials';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import SchemaMarkup from '@/components/SchemaMarkup';
import { SITE_URL } from '@/lib/config';

// The region whose `metros` list names this city — lets a city page link "up"
// to its state/province so neither layer is an orphan in the crawl graph.
function parentRegion(co: Country, ci: City) {
  return regionsFor(co.slug).find(
    (r) => r.slug === ci.regionSlug
  );
}

export default function CityBody({ co, ci }: { co: Country; ci: City }) {
  const parent = parentRegion(co, ci);
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
      <Breadcrumbs
        crumbs={[
          { href: '/', label: 'Home' },
          ...(parent ? [{ href: `/${co.slug}/${parent.slug}`, label: parent.name }] : []),
          { href: `/${co.slug}/${ci.slug}`, label: ci.name },
        ]}
      />
      <section className="hero-shell relative overflow-hidden">
        <div className="hero-photo" style={{ backgroundImage: `image-set(url(/images/hero-${co.slug}.jpg) 1x)` }} aria-hidden />
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="h-display fluid-hero font-bold text-ink">Sell Your House Fast in {cityLabel(ci)}</h1>
            <p className="mt-4 text-lg leading-relaxed text-ink/70">{ci.blurb}</p>
            <ul className="mt-6 space-y-2 font-medium text-ink/80">
              <li>✓ Free cash-buyer enquiry, with no obligation to accept</li>
              <li>✓ Any condition, any part of {ci.name}</li>
              <li>✓ No fee for our introduction; legal costs may apply</li>
            </ul>
          </div>
          <LeadForm country={co.slug} city={ci.slug} />
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-4">
        <h2 className="h-display text-xl font-bold text-ink">
          {co.slug === 'au' ? 'Suburbs' : co.slug === 'uk' ? 'Areas' : 'Neighborhoods'} we cover in {ci.name}
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {ci.areas.map((a) => (
            <span key={a} className="rounded-full border border-[#ddd5c4] bg-white px-4 py-1.5 text-sm text-ink/70">{a}</span>
          ))}
          <span className="rounded-full bg-gold-soft px-4 py-1.5 text-sm font-medium text-ink">…and everywhere in between</span>
        </div>
      </section>
      <IllustratedBand country={co.slug} cityName={ci.name} />
      <HowItWorks processTerm={co.processTerm} days={co.days} />
      <BuyerNetwork country={co.slug} cityName={ci.name} />
      <Testimonials country={co.slug} />
      <Comparison c={co} />
      <TrustSignals />
      <FoundingOffer city={ci.name} />
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
          {parent && (
            <>
              <h2 className="mt-8 h-display text-xl font-bold text-ink">Selling elsewhere in {parent.name}?</h2>
              <p className="mt-2 text-ink/70">
                <Link href={`/${co.slug}/${parent.slug}`} className="font-semibold text-moss underline underline-offset-4">
                  See how a fast sale works across {parent.name} →
                </Link>
              </p>
            </>
          )}
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
