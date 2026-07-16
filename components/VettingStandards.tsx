const checks = [
  ['Proof of funds', 'Every buyer must show they hold the cash to complete — bank-verified, not promised.'],
  ['Purchase track record', 'Buyers must evidence completed purchases in your market, not just intent.'],
  ['Identity & company checks', 'Registered entities, verified directors, real addresses. No anonymous "investors".'],
  ['Conduct standards', 'No pressure tactics, no fee demands to sellers, no last-minute price drops without cause — buyers who breach this leave the network.'],
];

export default function VettingStandards() {
  return (
    <section className="bg-ink py-16 text-white">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="h-display text-center text-3xl font-bold md:text-4xl">What <span className="accent-italic">&ldquo;vetted&rdquo;</span> actually means</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[#cfe0d6]">Anyone can call themselves a cash buyer. Every buyer in our network passes four checks first:</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {checks.map(([t, d], i) => (
            <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="h-display text-lg font-bold text-gold">{i + 1}. {t}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#cfe0d6]">{d}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-[#9db8aa]">And you should verify too — ask any buyer for proof of funds. Genuine ones provide it happily.</p>
      </div>
    </section>
  );
}
