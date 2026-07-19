import { factsFor } from '@/data/network';

const checks: [string, string][] = [
  ['Proof of funds on file', 'Bank-verified evidence they can actually complete — before they ever see your details.'],
  ['Purchase history checked', 'They must evidence completed buys in your market, not just intentions.'],
  ['Registered, identifiable businesses', 'Real entities, real directors, real addresses. No anonymous cash guys.'],
  ['Removed for bad conduct', 'Pressure tactics, late price drops or fee demands to sellers ends the relationship.'],
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
          {cityName ? ` in ${cityName}` : ' in your area'}. Here&rsquo;s the bar they clear first.
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
          A genuine one will hand over proof of funds the same day.
        </p>
      </div>
    </section>
  );
}
