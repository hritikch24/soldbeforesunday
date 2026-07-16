import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import SchemaMarkup from '@/components/SchemaMarkup';
import { SITE_NAME, SITE_URL } from '@/lib/config';

export const metadata: Metadata = {
  title: 'How to Spot and Avoid Quick-Sale Scams',
  description: 'The five scams that target motivated home sellers, the three checks that defeat all of them, and the questions genuine cash buyers answer without flinching.',
  alternates: { canonical: '/guides/avoid-quick-sale-scams' },
  openGraph: { title: 'How to Spot and Avoid Quick-Sale Scams', description: 'Five scams, three checks that defeat them.', url: '/guides/avoid-quick-sale-scams' },
};

export default function Post() {
  return (
    <>
      <SchemaMarkup schema={{ '@context': 'https://schema.org', '@type': 'Article', headline: 'How to Spot and Avoid Quick-Sale Scams', publisher: { '@type': 'Organization', name: SITE_NAME }, mainEntityOfPage: `${SITE_URL}/guides/avoid-quick-sale-scams` }} />
      <Breadcrumbs crumbs={[{ href: '/', label: 'Home' }, { href: '/guides', label: 'Guides' }, { href: '/guides/avoid-quick-sale-scams', label: 'Avoiding Scams' }]} />
      <article className="mx-auto max-w-3xl px-4 pb-16">
        <h1 className="h-display text-3xl font-bold text-ink md:text-4xl">How to Spot and Avoid Quick-Sale Scams</h1>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/75">
          <p>Distressed sellers attract predators — that&rsquo;s an industry fact and we&rsquo;d rather you read this than learn it. Here are the five patterns, and the checks that beat every one of them.</p>
          <h2 className="h-display text-2xl font-bold text-ink">The five scams</h2>
          <p><strong>The vanishing offer:</strong> a high offer to win your signature, then a steep &ldquo;revised&rdquo; price days before completion, when you&rsquo;re too committed to walk. <strong>The fee collector:</strong> charges for &ldquo;valuations,&rdquo; &ldquo;processing&rdquo; or &ldquo;legal packs&rdquo; before any purchase — genuine buyers never charge sellers anything. <strong>The option trap:</strong> a contract that doesn&rsquo;t oblige them to buy at all, just locks you in while they shop your house around. <strong>The phantom buyer:</strong> no funds, no company, no history — they&rsquo;re brokering your desperation to someone else without telling you. <strong>The equity skimmer:</strong> targets owners in arrears with &ldquo;we&rsquo;ll take over the payments&rdquo; arrangements that leave your name on the debt and their name on the deed.</p>
          <h2 className="h-display text-2xl font-bold text-ink">The three checks that defeat all of them</h2>
          <p><strong>One — proof of funds, always.</strong> A bank statement or legal confirmation that the money exists, dated this month. Genuine buyers provide it within a day, unprompted, without irritation. <strong>Two — your own legal representative.</strong> Never use a lawyer the buyer &ldquo;provides&rdquo;; your own reviews the contract for option traps and price-change clauses before you sign anything. <strong>Three — never pay anything.</strong> The rule has no exceptions: sellers pay nothing, ever. Anyone requesting a fee has told you who they are.</p>
          <h2 className="h-display text-2xl font-bold text-ink">Questions a genuine buyer answers without flinching</h2>
          <p>How many properties did you buy in the last year, and can you evidence one? What&rsquo;s your registered company name and number? Will you confirm the offer and completion date in writing? Can my solicitor or attorney review before I sign? Hesitation on any of these is your answer.</p>
          <p>This is also why <Link href="/how-it-works" className="text-moss underline">our network vets buyers</Link> on exactly these criteria before they ever see your details — but the checks above are yours to run on anyone, including buyers we introduce. Trust the process, verify the people.</p>
        </div>
      </article>
    </>
  );
}
