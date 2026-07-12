import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { countries, getCountry } from '@/data/countries';
import { situations } from '@/data/situations';
import { faqsFor } from '@/data/faqs';
import LeadForm from '@/components/LeadForm';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';

export function generateStaticParams() {
  return countries.flatMap((c) => situations.map((s) => ({ country: c.slug, slug: s.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string; slug: string }> }): Promise<Metadata> {
  const { country, slug } = await params;
  const c = getCountry(country);
  const s = situations.find((x) => x.slug === slug);
  if (!c || !s) return {};
  return {
    title: s.title(c),
    description: `${s.heading(c)} Free, no-obligation cash offers from vetted buyers — ${c.processTerm} in ${c.days}.`,
    alternates: { canonical: `/${country}/situations/${slug}` },
  };
}

export default async function SituationPage({ params }: { params: Promise<{ country: string; slug: string }> }) {
  const { country, slug } = await params;
  const c = getCountry(country);
  const s = situations.find((x) => x.slug === slug);
  if (!c || !s) notFound();

  return (
    <>
      <Breadcrumbs crumbs={[{ href: '/', label: 'Home' }, { href: `/${c.slug}`, label: c.name }, { href: `/${c.slug}/situations/${s.slug}`, label: s.title(c) }]} />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-14 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">{s.heading(c)}</h1>
          <div className="mt-5 space-y-4 text-lg text-slate-700">
            {s.body(c).map((p, i) => (<p key={i}>{p}</p>))}
          </div>
        </div>
        <div><LeadForm country={c.slug} /></div>
      </section>
      <FAQSection items={faqsFor(c).slice(0, 4)} />
    </>
  );
}
