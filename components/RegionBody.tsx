import Link from 'next/link';
import type { Country } from '@/data/countries';
import { type Region, regionsFor } from '@/data/regions';
import { citiesFor } from '@/data/cities';
import { situations } from '@/data/situations';
import { faqsFor } from '@/data/faqs';
import LeadForm from '@/components/LeadForm';
import HowItWorks from '@/components/HowItWorks';
import Comparison from '@/components/Comparison';
import TrustSignals from '@/components/TrustSignals';
import BuyerNetwork from '@/components/BuyerNetwork';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import SchemaMarkup from '@/components/SchemaMarkup';
import { SITE_URL } from '@/lib/config';

// Cities we already have a dedicated page for that sit inside this region.
// Matches either on the city's own region label (US states) or on the region's
// metro list (UK/CA/AU, where the labels differ).
export function citiesInRegion(r: Region) {
  return citiesFor(r.country).filter(
    (c) => c.region === r.name || c.region === r.abbr || r.metros.some((m) => m.toLowerCase().startsWith(c.name.toLowerCase()))
  );
}

export default function RegionBody({ co, r }: { co: Country; r: Region }) {
  const inner = citiesInRegion(r);
  const innerSlugs = new Set(inner.map((c) => c.slug));
  const siblings = regionsFor(co.slug).filter((x) => x.slug !== r.slug);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Fast cash house sale — ${r.name}`,
    provider: { '@id': `${SITE_URL}/#org` },
    areaServed: { '@type': 'AdministrativeArea', name: r.name },
    description: r.intro,
  };

  return (
    <>
      <SchemaMarkup schema={schema} />
      <Breadcrumbs crumbs={[{ href: '/', label: 'Home' }, { href: `/${co.slug}`, label: co.name }, { href: `/${co.slug}/${r.slug}`, label: r.name }]} />

      <section className="hero-shell relative overflow-hidden">
        <div className="hero-photo" style={{ backgroundImage: `image-set(url(/images/hero-${co.slug}.jpg) 1x)` }} aria-hidden />
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-moss">{co.flag} {r.kind} guide</p>
            <h1 className="h-display fluid-hero mt-3 font-bold text-ink">Sell Your House Fast in {r.name}</h1>
            <p className="mt-4 text-lg leading-relaxed text-ink/70">{r.intro}</p>
            <ul className="mt-6 space-y-2 font-medium text-ink/80">
              <li>✓ Cash offer within 24–48 hours — free, no obligation</li>
              <li>✓ Any condition, anywhere in {r.name}</li>
              <li>✓ No {co.agentTerm} fees · {co.processTerm} in {co.days}</li>
            </ul>
          </div>
          <LeadForm country={co.slug} />
        </div>
      </section>

      {/* THE DIFFERENTIATOR: real, region-specific process facts */}
      <section className="mx-auto max-w-5xl px-4 py-14">
        <h2 className="h-display text-2xl font-bold text-ink md:text-3xl">
          What&rsquo;s different about selling in {r.name}
        </h2>
        <dl className="mt-6 divide-y divide-[#e9e3d6] overflow-hidden rounded-2xl border border-[#e9e3d6] bg-white">
          {r.facts.map(([k, v]) => (
            <div key={k} className="grid gap-1 p-5 sm:grid-cols-3 sm:gap-6">
              <dt className="text-sm font-bold uppercase tracking-wider text-ink/45">{k}</dt>
              <dd className="text-ink sm:col-span-2">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-6 space-y-4">
          {r.notes.map((n) => (
            <p key={n.slice(0, 24)} className="leading-relaxed text-ink/75">{n}</p>
          ))}
        </div>
        <p className="mt-6 rounded-xl bg-paper p-4 text-sm text-ink/55">
          General orientation only, not legal advice. Rules change and individual circumstances vary — confirm
          your position with a {co.lawyerTerm} in {r.name} before acting on a deadline.
        </p>
      </section>

      <HowItWorks processTerm={co.processTerm} days={co.days} />
      <BuyerNetwork country={co.slug} cityName={r.name} />
      <Comparison c={co} />
      <TrustSignals />

      <section className="bg-paper py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="h-display text-2xl font-bold text-ink">Where we buy in {r.name}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {inner.map((c) => (
              <Link key={c.slug} href={`/${co.slug}/${c.slug}`} className="rounded-full border border-gold bg-white px-4 py-1.5 text-sm font-semibold text-ink hover:bg-gold-soft">
                {c.name} →
              </Link>
            ))}
            {r.metros.filter((m) => !innerSlugs.has(m.toLowerCase().replace(/[^a-z0-9]+/g, '-'))).map((m) => (
              <span key={m} className="rounded-full border border-[#ddd5c4] bg-white px-4 py-1.5 text-sm text-ink/70">{m}</span>
            ))}
            <span className="rounded-full bg-gold-soft px-4 py-1.5 text-sm font-medium text-ink">…and every town in between</span>
          </div>

          <h2 className="mt-10 h-display text-2xl font-bold text-ink">Common situations in {r.name}</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {situations.map((s) => (
              <Link key={s.slug} href={`/${co.slug}/situations/${s.slug}`} className="card-soft p-4 text-sm font-semibold text-ink transition hover:-translate-y-0.5">
                {s.title(co)}
              </Link>
            ))}
          </div>

          <h2 className="mt-10 h-display text-2xl font-bold text-ink">Other {r.kind.toLowerCase()}s in {co.nameWithThe}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {siblings.map((x) => (
              <Link key={x.slug} href={`/${co.slug}/${x.slug}`} className="rounded-full border border-[#ddd5c4] bg-white px-3.5 py-1.5 text-sm text-ink/65 hover:border-gold hover:text-ink">
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
