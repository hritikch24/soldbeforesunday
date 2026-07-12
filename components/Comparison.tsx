import type { Country } from '@/data/countries';

export default function Comparison({ c }: { c: Country }) {
  const rows = [
    ['Time to sell', `${c.days}`, '3–9 months, sometimes longer'],
    ['Fees & commissions', 'None', c.agentFee],
    ['Repairs & cleaning', 'Sell 100% as-is', 'Expected before listing'],
    ['Viewings / showings', 'None', 'Weeks of strangers in your home'],
    ['Certainty', 'Cash — no chain, no financing', 'Sales fall through regularly'],
    [`${c.processTerm[0].toUpperCase()}${c.processTerm.slice(1)} date`, 'You choose it', 'Whenever the chain allows'],
  ];
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <h2 className="h-display text-center text-3xl font-bold text-ink md:text-4xl">Cash buyer <span className="accent-italic">or</span> {c.agentTerm}?</h2>
      <div className="card-soft mt-10 overflow-hidden !rounded-2xl">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-ink text-left text-white">
              <th className="p-4"></th>
              <th className="p-4 font-semibold">Cash sale via us</th>
              <th className="p-4 font-semibold opacity-70">Listing with a {c.agentTerm}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, us, them], i) => (
              <tr key={label} className={i % 2 ? 'bg-cream/60' : 'bg-white'}>
                <td className="p-4 font-semibold text-ink">{label}</td>
                <td className="p-4 font-medium text-moss">✓ {us}</td>
                <td className="p-4 text-ink/50">{them}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-center text-xs text-ink/50">Honest note: cash offers are typically below full retail value — speed and certainty are the trade. Always compare your net figures both ways.</p>
    </section>
  );
}
