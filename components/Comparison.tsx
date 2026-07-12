import type { Country } from '@/data/countries';

export default function Comparison({ c }: { c: Country }) {
  const rows = [
    ['Time to sell', `${c.days}`, '3–9 months, sometimes longer'],
    ['Fees & commissions', 'None', c.agentFee],
    ['Repairs & cleaning', 'Sell 100% as-is', 'Expected before listing'],
    ['Viewings / showings', 'None', 'Weeks of strangers in your home'],
    ['Certainty', `Cash — no chain, no financing`, 'Sales fall through regularly'],
    [`${c.processTerm[0].toUpperCase()}${c.processTerm.slice(1)} date`, 'You choose it', 'Whenever the chain allows'],
  ];
  return (
    <section className="mx-auto max-w-4xl px-4 py-14">
      <h2 className="text-center text-3xl font-extrabold text-slate-900">Cash Buyer vs {c.agentTerm[0].toUpperCase() + c.agentTerm.slice(1)}</h2>
      <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-900 text-white">
              <th className="p-3 text-left"></th>
              <th className="p-3 text-left">Cash sale via us</th>
              <th className="p-3 text-left">Listing with a {c.agentTerm}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, us, them], i) => (
              <tr key={label} className={i % 2 ? 'bg-slate-50' : 'bg-white'}>
                <td className="p-3 font-semibold text-slate-900">{label}</td>
                <td className="p-3 font-medium text-emerald-700">✓ {us}</td>
                <td className="p-3 text-slate-500">{them}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-center text-xs text-slate-500">Honest note: cash offers are typically below full retail value — speed and certainty are the trade. Always compare your net figures both ways.</p>
    </section>
  );
}
