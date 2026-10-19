import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: 'About Our UK Property Introduction Service',
  description: 'How Sold Before Sunday introduces UK homeowners to independent cash buyers, what our service costs and the trade-offs to consider.',
  alternates: { canonical: '/about' },
  openGraph: { title: 'About Our UK Property Introduction Service', description: 'How Sold Before Sunday introduces UK homeowners to independent cash buyers, what our service costs and the trade-offs to consider.', url: '/about' },
};

export default function AboutPage() {
  return <>
    <Breadcrumbs crumbs={[{ href: '/', label: 'Home' }, { href: '/about', label: 'About' }]} />
    <section className="mx-auto max-w-3xl px-4 pb-16">
      <h1 className="h-display text-4xl font-bold text-ink">About {SITE_NAME}</h1>
      <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/75">
        <p>We are a UK property introduction service. We accept enquiries from homeowners in England, Scotland, Wales and Northern Ireland and explore introductions to independent cash buyers. We do not buy properties ourselves or guarantee that a buyer will make an offer.</p>
        <p>Our enquiry and introduction service is free to homeowners. We may receive an introduction fee from a buyer; we explain any applicable fee arrangement before making the introduction. Your own legal costs, mortgage charges and other sale expenses are separate.</p>
        <p>We review your enquiry first, identify any proposed buyer and confirm your permission before sharing personal details. You choose whether to proceed and should ask your own solicitor to check the buyer, funding and contract.</p>
        <p>Cash offers can be below open-market value, and a cash sale can still be delayed or fall through. Compare independent valuations and net proceeds before deciding. Read our <Link href="/guides" className="text-moss underline">UK seller guides</Link> for the questions to ask.</p>
      </div>
    </section>
  </>;
}
