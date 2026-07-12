import type { FAQ } from '@/data/faqs';
import SchemaMarkup from './SchemaMarkup';

export default function FAQSection({ items, title = 'Questions sellers actually ask' }: { items: FAQ[]; title?: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  return (
    <section className="mx-auto max-w-3xl px-4 py-14">
      <SchemaMarkup schema={schema} />
      <h2 className="h-display text-3xl font-bold text-ink">{title}</h2>
      <div className="mt-6 space-y-3">
        {items.map((f) => (
          <details key={f.q} className="faq card-soft p-5">
            <summary className="h-display font-semibold text-ink">{f.q}</summary>
            <p className="mt-3 leading-relaxed text-ink/70">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
