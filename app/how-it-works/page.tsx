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
};

const steps: [string, string][] = [
  ['Tell us about the property', 'The two-minute form: address, condition, situation, timeline. This is everything a buyer needs to prepare a serious offer. It costs nothing and commits you to nothing.'],
  ['We match you with a vetted local buyer', 'Not a call centre — an established cash buyer who actually purchases in your area and understands your street, your property type and your situation.'],
  ['You receive a no-obligation cash offer', 'Usually within 24–48 hours. The offer reflects the property as it stands — no conditions about repairs, cleaning or presentation. Ask every question you like.'],
  ['Verify, then decide in your own time', 'Ask for proof of funds (any genuine buyer provides it happily). Have your own legal representative review the paperwork. Compare against the open-market route. The decision stays entirely yours.'],
  ['Complete on your date, funds in your account', 'Once you accept, the buyer moves at your pace — from about a week in the US and UK to a few weeks elsewhere. No chain, no financing fall-throughs, no surprises at the finish line.'],
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to sell your house fast for cash',
  description: 'The five-step process for selling a property quickly to a vetted cash buyer.',
  totalTime: 'P14D',
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
              <Link key={c.slug} href={`/${c.slug}`} className="btn-ink !px-6 !py-3 text-sm">{c.flag} {c.name}</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
