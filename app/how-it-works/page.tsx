import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import SchemaMarkup from '@/components/SchemaMarkup';
import { SITE_URL } from '@/lib/config';
import { countries } from '@/data/countries';

export const metadata: Metadata = {
  title: 'How It Works — From Form to Funds in 5 Steps',
  description: 'Exactly what happens after you request a cash offer: vetting, the offer, proof of funds, legal work and completion — step by step, with honest timelines.',
  alternates: { canonical: '/how-it-works' },
  openGraph: { title: 'How It Works — From Form to Funds in 5 Steps', description: 'Exactly what happens after you request a cash offer: vetting, the offer, proof of funds, legal work and completion — step by step, with honest timelines.', url: '/how-it-works' },
};

const steps: [string, string][] = [
  ['Tell us about the property', 'The two-minute form: address, condition, situation, timeline. This is everything a buyer needs to prepare a serious offer. It costs nothing and commits you to nothing.'],
  ['We review the UK property enquiry', 'We check your location and circumstances, identify any suitable independent buyer and explain the proposed introduction, including any buyer-paid fee. We confirm permission before sharing your details.'],
  ['You receive a no-obligation cash offer', 'A buyer may assess the property, ask for documents or arrange an inspection. An offer is not guaranteed. Ask for the price, conditions, costs and proposed date in writing.'],
  ['Verify, then decide in your own time', 'Ask for proof of funds (any genuine buyer provides it happily). Have your own legal representative review the paperwork. Compare against the open-market route. The decision stays entirely yours.'],
  ['Complete on your date, funds in your account', 'Your solicitor checks the title, authority to sell, mortgage redemption and contract. The process differs between UK nations. A date is agreed when the legal work allows; cash sales can still be delayed or fall through.'],
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to sell your house fast for cash',
  description: 'The five-step process for selling a property quickly to an independent cash buyer.',
  step: steps.map(([name, text], i) => ({ '@type': 'HowToStep', position: i + 1, name, text })),
};

export default function HowItWorksPage() {
  return (
    <>
      <SchemaMarkup schema={howToSchema} />
      <Breadcrumbs crumbs={[{ href: '/', label: 'Home' }, { href: '/how-it-works', label: 'How It Works' }]} />
      <section className="mx-auto max-w-3xl px-4 pb-16">
        <h1 className="h-display text-4xl font-bold text-ink md:text-5xl">From form to funds, <span className="accent-italic">in five steps.</span></h1>
        <div className="mt-10 space-y-0">
          {steps.map(([t, d], i) => (
            <div key={t} className="relative border-l-2 border-gold-soft pb-10 pl-8 last:pb-0">
              <span className="h-display absolute -left-[1.35rem] top-0 flex h-10 w-10 items-center justify-center rounded-full bg-ink font-bold text-gold">{i + 1}</span>
              <h2 className="h-display text-2xl font-bold text-ink">{t}</h2>
              <p className="mt-2 text-lg leading-relaxed text-ink/70">{d}</p>
            </div>
          ))}
        </div>
        <div className="card-soft mt-12 p-8 text-center">
          <h2 className="h-display text-2xl font-bold text-ink">Ready for step one?</h2>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {countries.map((c) => (
              <Link key={c.slug} href="/#offer" className="btn-ink !px-6 !py-3 text-sm">{c.flag} {c.name}</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
