import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: 'About Us — How This Works',
  description: `${SITE_NAME} connects homeowners who need a fast sale with vetted, established local cash buyers. Free offers, no fees, honest trade-offs explained.`,
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs crumbs={[{ href: '/', label: 'Home' }, { href: '/about', label: 'About' }]} />
      <section className="mx-auto max-w-3xl px-4 pb-16">
        <h1 className="text-4xl font-extrabold text-slate-900">About {SITE_NAME}</h1>
        <div className="mt-6 space-y-4 text-lg text-slate-700">
          <p>{SITE_NAME} is a connection service. When you tell us about your property, we match it with vetted, established cash buyers who are actively purchasing in your area — and they make you a free, no-obligation offer, usually within 24–48 hours.</p>
          <p>We are not estate agents, brokers or lenders, and we never charge homeowners anything. Buyers in our network are independent businesses; you deal with them directly and should always verify proof of funds before signing — any genuine cash buyer will provide it happily.</p>
          <p>One honest thing you should know: cash offers are typically below full retail market value. That is the real trade — speed, certainty and zero costs in exchange for a lower headline figure. For many situations (repossession deadlines, probate, divorce, problem properties) that trade is worth it; for others, the open market is the better route. Our job is to make sure you know your fastest option — the decision stays entirely yours.</p>
        </div>
      </section>
    </>
  );
}
