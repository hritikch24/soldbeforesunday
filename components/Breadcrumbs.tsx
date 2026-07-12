import Link from 'next/link';
import SchemaMarkup from './SchemaMarkup';
import { SITE_URL } from '@/lib/config';

export interface Crumb { href: string; label: string; }

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.label, item: `${SITE_URL}${c.href}` })),
  };
  return (
    <nav className="mx-auto max-w-6xl px-4 py-3 text-sm text-slate-500">
      <SchemaMarkup schema={schema} />
      {crumbs.map((c, i) => (
        <span key={c.href}>
          {i > 0 && ' › '}
          {i < crumbs.length - 1 ? <Link href={c.href} className="hover:text-emerald-600">{c.label}</Link> : <span className="text-slate-800">{c.label}</span>}
        </span>
      ))}
    </nav>
  );
}
