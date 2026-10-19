import { factsFor } from '@/data/network';

const checks: [string, string][] = [
  ['Proof of funds', 'Ask your solicitor to verify evidence of available purchase funds before relying on an offer.'],
  ['Purchase history', 'Request evidence of completed purchases and experience with your property type.'],
  ['Registered, identifiable businesses', 'Confirm the legal buyer identity, business details and any claimed memberships.'],
  ['Written terms and conduct', 'Check the conditions, costs and any price-change provisions with your independent solicitor.'],
];

export default function BuyerNetwork({ country, cityName }: { country: string; cityName?: string }) {
  const f = factsFor(country);
  return (
    <section className="bg-paper py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="h-display text-center text-3xl font-bold text-ink md:text-4xl">
          Who actually makes your offer
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-ink/70">
          We don&rsquo;t buy your property — we match it with an independent cash buyer active
          {cityName ? ` in ${cityName}` : ' in your area'}. These are the checks to confirm before you proceed.
        </p>
        {f && f.activeBuyers > 0 && (
          <p className="mt-5 text-center text-sm font-semibold text-moss">
            {f.activeBuyers} vetted {f.activeBuyers === 1 ? 'buyer' : 'buyers'} currently taking enquiries across {f.metrosCovered} metros
          </p>
        )}
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {checks.map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-[#e9e3d6] bg-cream/50 p-6">
              <p className="h-display flex items-start gap-2 font-bold text-ink"><span className="text-gold">◆</span> {t}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{d}</p>
            </div>
          ))}
        </div>
        <p className="mt-7 text-center text-sm text-ink/50">
          Run these same checks yourself on anyone who makes you an offer — including buyers we introduce.
          Do not proceed under pressure or rely on an unsupported promise.
        </p>
      </div>
    </section>
  );
}
