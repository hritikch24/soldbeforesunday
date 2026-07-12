import type { Metadata } from 'next';
import { countries } from '@/data/countries';
import { faqsFor } from '@/data/faqs';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'FAQ — Selling Your House Fast, Every Question Answered',
  description: 'Timelines, fees, below-market trade-offs, scam protection, tenants, probate, mortgages — every question sellers ask about fast cash house sales, answered honestly for the US, UK, Canada and Australia.',
  alternates: { canonical: '/faq' },
};

export default function FAQPage() {
  return (
    <>
      <Breadcrumbs crumbs={[{ href: '/', label: 'Home' }, { href: '/faq', label: 'FAQ' }]} />
      <section className="mx-auto max-w-3xl px-4 pb-4">
        <h1 className="h-display text-4xl font-bold text-ink">Every question, answered honestly.</h1>
        <p className="mt-3 text-lg text-ink/70">Including the ones other sites avoid — like whether the offer is below market value (it is, and we explain the trade).</p>
      </section>
      <SchemaMarkup
        schema={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: countries.flatMap((c) =>
            faqsFor(c).map((f) => ({ '@type': 'Question', name: `${c.name}: ${f.q}`, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
          ),
        }}
      />
      {countries.map((c) => (
        <FAQSection key={c.slug} items={faqsFor(c)} title={`${c.flag} ${c.name}`} withSchema={false} />
      ))}
    </>
  );
}
