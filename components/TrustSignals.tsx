import Link from 'next/link';
import { CONTACT_EMAIL, PHONE, PHONE_DISPLAY } from '@/lib/config';

const promises: [string, string][] = [
  ['You never pay us anything', 'No fees, no commissions, no "valuation" or "processing" charges — not at any stage. If anyone in this process asks you for money, walk away and tell us.'],
  ['No obligation, ever', 'An offer is information, not a contract. Take it to a lawyer, compare it against listing, or ignore it entirely. Nobody will chase you.'],
  ['We tell you when listing is better', 'If your property would net you more on the open market and you have time to wait, we will say so. A bad-fit lead helps nobody.'],
  ['Verify before you sign anything', 'Ask any buyer for proof of funds and have your own solicitor or attorney review the contract. We tell you to check us as hard as you check anyone.'],
];

export default function TrustSignals() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="h-display text-center text-3xl font-bold text-ink md:text-4xl">
        What we <span className="accent-italic">promise</span> — and what we refuse to do
      </h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {promises.map(([t, d]) => (
          <div key={t} className="card-soft p-6">
            <p className="h-display flex items-start gap-2 text-lg font-bold text-ink">
              <span className="text-moss">✓</span> {t}
            </p>
            <p className="mt-2 leading-relaxed text-ink/70">{d}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-2xl border border-[#e9e3d6] bg-white/60 p-6 text-center">
        <p className="h-display text-lg font-bold text-ink">Real people, reachable before you commit</p>
        <p className="mt-2 text-ink/70">
          Call or email us with questions first — most sellers do.
        </p>
        <p className="mt-3 font-semibold">
          {PHONE && <a href={`tel:${PHONE}`} className="text-moss hover:underline">{PHONE_DISPLAY}</a>}
          {PHONE && <span className="mx-3 text-ink/30">·</span>}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-moss hover:underline">{CONTACT_EMAIL}</a>
        </p>
        <p className="mt-4 text-sm text-ink/50">
          New to this? Read <Link href="/guides/avoid-quick-sale-scams" className="underline hover:text-moss">how to spot quick-sale scams</Link> before you talk to anyone — including us.
        </p>
      </div>
    </section>
  );
}
