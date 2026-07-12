import type { FAQ } from '@/data/faqs';
import SchemaMarkup from './SchemaMarkup';

export default function FAQSection({ items, title = 'Frequently Asked Questions' }: { items: FAQ[]; title?: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <SchemaMarkup schema={schema} />
      <h2 className="text-2xl font-extrabold text-slate-900">{title}</h2>
      <div className="mt-6 space-y-3">
        {items.map((f) => (
          <details key={f.q} className="rounded-lg border border-slate-200 bg-white p-4">
            <summary className="cursor-pointer font-semibold text-slate-900">{f.q}</summary>
            <p className="mt-2 text-slate-600">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
