import Link from 'next/link';
import Breadcrumbs from './Breadcrumbs';
import SchemaMarkup from './SchemaMarkup';
import { SITE_NAME, SITE_URL } from '@/lib/config';

export default function GuideArticle({ slug, title, description, sources, children }: {
  slug: string;
  title: string;
  description: string;
  sources: { label: string; url: string }[];
  children: React.ReactNode;
}) {
  const path = `/guides/${slug}`;
  return <>
    <SchemaMarkup schema={{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description, inLanguage: 'en-GB', dateModified: '2026-10-20', author: { '@type': 'Organization', name: SITE_NAME, url: `${SITE_URL}/about` }, publisher: { '@id': `${SITE_URL}/#org` }, mainEntityOfPage: `${SITE_URL}${path}`, image: `${SITE_URL}/opengraph-image` }} />
    <Breadcrumbs crumbs={[{ href: '/', label: 'Home' }, { href: '/guides', label: 'Guides' }, { href: path, label: title }]} />
    <article className="mx-auto max-w-3xl px-4 pb-16">
      <h1 className="h-display text-3xl font-bold text-ink md:text-4xl">{title}</h1>
      <p className="mt-3 text-sm text-ink/55">UK seller guide · Updated 20 October 2026</p>
      <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/75">{children}</div>
      <div className="mt-8 rounded-xl bg-paper p-5 text-sm leading-relaxed text-ink/65">
        <p>General information, not individual legal, tax or financial advice. Ask your own adviser to confirm the position for your property.</p>
        <ul className="mt-3 space-y-2">{sources.map((source) => <li key={source.url}><a href={source.url} className="text-moss underline">{source.label}</a></li>)}</ul>
      </div>
      <div className="card-soft mt-10 p-6 text-center">
        <p className="h-display text-xl font-bold text-ink">Explore a UK cash-buyer introduction</p>
        <Link href="/#offer" className="btn-ink mt-4">Start a Free Property Enquiry</Link>
      </div>
    </article>
  </>;
}
