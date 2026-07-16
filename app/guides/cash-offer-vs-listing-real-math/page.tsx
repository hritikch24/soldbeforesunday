import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import SchemaMarkup from '@/components/SchemaMarkup';
import { SITE_NAME, SITE_URL } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Cash Offer vs Listing: The Real Math',
  description: 'The full net-proceeds arithmetic: agent fees, repairs, holding costs, price reductions and fall-through risk versus a below-retail cash offer.',
  alternates: { canonical: '/guides/cash-offer-vs-listing-real-math' },
  openGraph: { title: 'Cash Offer vs Listing: The Real Math', description: 'The full net-proceeds arithmetic, honestly.', url: '/guides/cash-offer-vs-listing-real-math' },
};

export default function Post() {
  return (
    <>
      <SchemaMarkup schema={{ '@context': 'https://schema.org', '@type': 'Article', headline: 'Cash Offer vs Listing: The Real Math', publisher: { '@type': 'Organization', name: SITE_NAME }, mainEntityOfPage: `${SITE_URL}/guides/cash-offer-vs-listing-real-math` }} />
      <Breadcrumbs crumbs={[{ href: '/', label: 'Home' }, { href: '/guides', label: 'Guides' }, { href: '/guides/cash-offer-vs-listing-real-math', label: 'The Real Math' }]} />
      <article className="mx-auto max-w-3xl px-4 pb-16">
        <h1 className="h-display text-3xl font-bold text-ink md:text-4xl">Cash Offer vs Listing: The Real Math</h1>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/75">
          <p>&ldquo;Cash offers are below market value&rdquo; is true — and it&rsquo;s also only half the equation. The listing price isn&rsquo;t what you keep either. The honest comparison is <strong>net proceeds against net proceeds</strong>, and it has more line items than most sellers expect.</p>
          <h2 className="h-display text-2xl font-bold text-ink">What the listing route actually subtracts</h2>
          <p>Agent commission (roughly 5–6% in the US and Canada, 1–3% plus extras in the UK, similar bands in Australia). Repairs and presentation the agent asks for before photos. Anything the buyer&rsquo;s inspection or survey turns up — renegotiated off the price late, when you have the least leverage. Every month of mortgage interest, tax, insurance and utilities while you wait: months of holding costs on a slow sale add up fast. Price reductions if the market yawns. And the one nobody budgets for: sales that collapse — financing refused, survey spooked, chain broken — which cost you months and put you back at the start with the same bills running.</p>
          <h2 className="h-display text-2xl font-bold text-ink">What the cash route subtracts</h2>
          <p>One thing: the discount from retail. No commission, no repairs, no staging, minimal holding costs because weeks aren&rsquo;t months, and effectively no fall-through risk once proof of funds is verified.</p>
          <h2 className="h-display text-2xl font-bold text-ink">How to run your own numbers</h2>
          <p>Take a realistic (not hopeful) sale price for your house as-is on the open market. Subtract commission, the repair list, three to six months of holding costs, and a contingency for renegotiation. That&rsquo;s your realistic listing net. Put the cash offer beside it. On a well-kept house in a hot market, listing usually still wins on money — take that route if time permits. On a house that needs work, in probate, or against a deadline, the gap shrinks dramatically and sometimes inverts. The point isn&rsquo;t that one answer is right; it&rsquo;s that you should compare the <em>real</em> numbers, not the headline ones.</p>
          <p>Get both numbers, then decide. The offer side takes two minutes and costs nothing: <Link href="/#countries" className="text-moss underline">request yours here</Link>.</p>
        </div>
      </article>
    </>
  );
}
