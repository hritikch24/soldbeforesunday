import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Seller Guides — Straight Answers on Fast House Sales',
  description: 'Plain-English guides for homeowners considering a fast cash sale: how it works, the real math vs listing, and how to spot quick-sale scams.',
  alternates: { canonical: '/guides' },
  openGraph: { title: 'Seller Guides', description: 'Straight answers on fast house sales.', url: '/guides' },
};

const posts = [
  { slug: 'how-fast-cash-house-sales-work', title: 'How Fast Cash House Sales Actually Work (2026 Guide)', excerpt: 'Who cash buyers are, where their money comes from, why they can move in days, and what happens at each step — with honest timelines for the US, UK, Canada and Australia.' },
  { slug: 'cash-offer-vs-listing-real-math', title: 'Cash Offer vs Listing: The Real Math', excerpt: 'Cash offers are below retail — everyone says it, few show the arithmetic. Here is the full net-proceeds comparison including fees, repairs, holding costs and fall-through risk.' },
  { slug: 'avoid-quick-sale-scams', title: 'How to Spot and Avoid Quick-Sale Scams', excerpt: 'The five scams that target motivated sellers, the three checks that defeat all of them, and the questions a genuine cash buyer answers without flinching.' },
];

export default function GuidesPage() {
  return (
    <>
      <Breadcrumbs crumbs={[{ href: '/', label: 'Home' }, { href: '/guides', label: 'Guides' }]} />
      <section className="mx-auto max-w-3xl px-4 pb-16">
        <h1 className="h-display text-4xl font-bold text-ink">Straight answers, <span className="accent-italic">before</span> you decide.</h1>
        <p className="mt-3 text-lg text-ink/70">Read these before accepting any offer — ours included.</p>
        <div className="mt-8 space-y-5">
          {posts.map((p) => (
            <Link key={p.slug} href={`/guides/${p.slug}`} className="card-soft block p-6 transition hover:-translate-y-0.5">
              <h2 className="h-display text-xl font-bold text-ink">{p.title}</h2>
              <p className="mt-2 leading-relaxed text-ink/70">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
