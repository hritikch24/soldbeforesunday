export default function HowItWorks({ processTerm, days }: { processTerm: string; days: string }) {
  const steps = [
    ['1. Tell us about the property', 'Two minutes, online, free. Address, condition, and your timeline — that’s all a buyer needs to start.'],
    ['2. Get a fair cash offer', 'A vetted cash buyer active in your area reviews the details and makes a no-obligation offer, usually within 24–48 hours.'],
    [`3. ${processTerm[0].toUpperCase()}${processTerm.slice(1)} on your date`, `Accept, and the buyer moves at your pace — ${days}, or longer if you need it. No chain, no bank approvals, no fall-throughs.`],
  ];
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-extrabold text-slate-900">How It Works</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map(([t, d]) => (
            <div key={t} className="rounded-xl bg-slate-50 p-6">
              <h3 className="font-extrabold text-slate-900">{t}</h3>
              <p className="mt-2 text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
