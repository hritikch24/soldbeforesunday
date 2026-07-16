import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import SchemaMarkup from '@/components/SchemaMarkup';
import { SITE_NAME, SITE_URL } from '@/lib/config';

export const metadata: Metadata = {
  title: 'How Fast Cash House Sales Actually Work (2026 Guide)',
  description: 'Who cash buyers are, where the money comes from, why completion takes days not months, and what happens at every step — US, UK, Canada and Australia.',
  alternates: { canonical: '/guides/how-fast-cash-house-sales-work' },
  openGraph: { title: 'How Fast Cash House Sales Actually Work', description: 'Who cash buyers are and why they can move in days.', url: '/guides/how-fast-cash-house-sales-work' },
};

export default function Post() {
  return (
    <>
      <SchemaMarkup schema={{ '@context': 'https://schema.org', '@type': 'Article', headline: 'How Fast Cash House Sales Actually Work (2026 Guide)', publisher: { '@type': 'Organization', name: SITE_NAME }, mainEntityOfPage: `${SITE_URL}/guides/how-fast-cash-house-sales-work` }} />
      <Breadcrumbs crumbs={[{ href: '/', label: 'Home' }, { href: '/guides', label: 'Guides' }, { href: '/guides/how-fast-cash-house-sales-work', label: 'How Cash Sales Work' }]} />
      <article className="mx-auto max-w-3xl px-4 pb-16">
        <h1 className="h-display text-3xl font-bold text-ink md:text-4xl">How Fast Cash House Sales Actually Work</h1>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/75">
          <p>A normal house sale is slow for one reason: the buyer&rsquo;s money doesn&rsquo;t exist yet. It sits behind a mortgage application, a lender&rsquo;s survey, an underwriter&rsquo;s checklist and — in the UK — a chain of other people&rsquo;s sales, any link of which can snap. Strip the borrowed money out and most of the timeline goes with it.</p>
          <h2 className="h-display text-2xl font-bold text-ink">Who the buyers are</h2>
          <p>Professional property investors: local companies and individuals who buy houses as stock — to renovate and resell, or to rent out. Their money comes from previous deals, investment funds or business credit lines already in place. That&rsquo;s why they can commit in days: nobody has to approve their loan, because there isn&rsquo;t one.</p>
          <h2 className="h-display text-2xl font-bold text-ink">Why they buy what others won&rsquo;t</h2>
          <p>Banks won&rsquo;t lend on houses with fire damage, structural issues or sitting tenants — so ordinary buyers can&rsquo;t buy them even if they want to. Cash buyers price the problems in and buy anyway. That is the entire reason &ldquo;any condition&rdquo; is possible: no lender has a veto.</p>
          <h2 className="h-display text-2xl font-bold text-ink">The steps, honestly</h2>
          <p>One: you share the property details (two minutes, free). Two: a buyer assesses it — sometimes from data and photos, sometimes with a short visit — and makes a written offer, usually inside 48 hours. Three: you verify their proof of funds and have your own legal representative check the paperwork. Four: the legal work runs its course — typically 7–21 days in the US and Canada, 7–28 days in the UK (no chain), a few weeks in Australia. Five: money lands, keys change hands, on a date you chose.</p>
          <h2 className="h-display text-2xl font-bold text-ink">The trade, stated plainly</h2>
          <p>The offer will be below full retail value. That discount buys speed, certainty and zero costs — no agent commission, no repairs, no months of holding costs, no risk of the sale collapsing. Whether that trade is worth it depends entirely on your situation: for a repossession deadline or a probate stalemate it usually is; for a no-rush sale of a pristine house it usually isn&rsquo;t. Our <Link href="/guides/cash-offer-vs-listing-real-math" className="text-moss underline">real-math comparison</Link> shows how to run your own numbers.</p>
        </div>
        <div className="card-soft mt-10 p-6 text-center">
          <p className="h-display text-xl font-bold text-ink">Want the number for your property?</p>
          <Link href="/#countries" className="btn-ink mt-4">Get My Free Offer</Link>
        </div>
      </article>
    </>
  );
}
