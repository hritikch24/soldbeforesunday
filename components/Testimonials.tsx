import { testimonials } from '@/data/testimonials';
import SchemaMarkup from './SchemaMarkup';
import { SITE_NAME, SITE_URL } from '@/lib/config';

export default function Testimonials({ country }: { country?: string }) {
  const items = country
    ? testimonials.filter((t) => t.location.toLowerCase().includes(country))
    : testimonials;
  if (items.length === 0) return null; // renders nothing until real reviews exist

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#org`,
    name: SITE_NAME,
    review: items.map((t) => ({
      '@type': 'Review',
      reviewBody: t.quote,
      author: { '@type': 'Person', name: t.name },
      datePublished: t.date,
    })),
  };

  return (
    <section className="bg-paper py-16">
      <SchemaMarkup schema={schema} />
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="h-display text-center text-3xl font-bold text-ink md:text-4xl">
          Sellers who <span className="accent-italic">actually</span> did this
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.slice(0, 6).map((t) => (
            <figure key={t.quote} className="card-soft p-6">
              <blockquote className="leading-relaxed text-ink/80">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 border-t border-[#eee7d8] pt-3 text-sm">
                <span className="h-display font-bold text-ink">{t.name}</span>
                <span className="block text-ink/50">{t.location} · {t.situation} · {t.date}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-ink/40">
          Every quote is from a real seller who gave written permission. We publish no reviews we cannot evidence.
        </p>
      </div>
    </section>
  );
}
