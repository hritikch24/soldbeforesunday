import { IconHouse, IconCash, IconCalendar } from './Icons';

export default function HowItWorks({ processTerm, days }: { processTerm: string; days: string }) {
  const steps: [React.ReactNode, string, string][] = [
    [<IconHouse key="i" className="h-7 w-7 text-gold" />, 'Tell us about the property', 'Two minutes, online, free. Address, condition, and your timeline — that’s all a buyer needs to start.'],
    [<IconCash key="i" className="h-7 w-7 text-gold" />, 'Get a fair cash offer', 'A vetted cash buyer active in your area reviews the details and makes a no-obligation offer, usually within 24–48 hours.'],
    [<IconCalendar key="i" className="h-7 w-7 text-gold" />, `${processTerm[0].toUpperCase()}${processTerm.slice(1)} on your date`, `Accept, and the buyer moves at your pace — ${days}, or longer if you need it. No chain, no bank approvals, no fall-throughs.`],
  ];
  return (
    <section className="bg-paper py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="h-display text-center text-3xl font-bold text-ink md:text-4xl">Three steps. That&rsquo;s the whole process.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map(([icon, t, d], i) => (
            <div key={t} className="reveal rounded-2xl border border-[#e9e3d6] bg-cream/40 p-6" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">{icon}</span>
                <span className="h-display text-4xl font-bold text-gold-soft">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="h-display mt-4 text-xl font-bold text-ink">{t}</h3>
              <p className="mt-2 leading-relaxed text-ink/70">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
