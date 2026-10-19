import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import SchemaMarkup from '@/components/SchemaMarkup';
import { glossary } from '@/data/glossary';
import { SITE_URL } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Property Sale Glossary — Plain-English Definitions',
  description: 'UK property sale terms explained: completion, exchange, missives, Home Reports, probate, confirmation, leasehold and proof of funds.',
  alternates: { canonical: '/glossary' },
  openGraph: { title: 'Property Sale Glossary — Plain-English Definitions', description: 'UK property sale terms explained: completion, exchange, missives, Home Reports, probate, confirmation, leasehold and proof of funds.', url: '/glossary' },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': `${SITE_URL}/glossary`,
  name: 'Fast property sale glossary',
  hasDefinedTerm: glossary.map((t) => ({ '@type': 'DefinedTerm', name: t.term, description: t.def })),
};

export default function GlossaryPage() {
  return (
    <>
      <SchemaMarkup schema={schema} />
      <Breadcrumbs crumbs={[{ href: '/', label: 'Home' }, { href: '/glossary', label: 'Glossary' }]} />
      <section className="mx-auto max-w-3xl px-4 pb-16">
        <h1 className="h-display text-4xl font-bold text-ink">The jargon, <span className="accent-italic">translated.</span></h1>
        <p className="mt-3 text-lg text-ink/70">Every term you&rsquo;ll meet in a fast property sale, in plain English — with differences between the UK nations explained.</p>
        <dl className="mt-8 space-y-5">
          {glossary.map((t) => (
            <div key={t.term} className="card-soft p-5">
              <dt className="flex items-baseline justify-between gap-3">
                <span className="h-display text-lg font-bold text-ink">{t.term}</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-gold">{t.where}</span>
              </dt>
              <dd className="mt-2 leading-relaxed text-ink/70">{t.def}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
