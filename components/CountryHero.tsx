import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import type { Country } from '@/data/countries';

// Drop public/images/hero-<slug>.jpg (licensed) to enable the background photo.
// If the file is missing the browser simply shows the ink background — no break.
export default function CountryHero({ c }: { c: Country }) {
  return (
    <section className="relative overflow-hidden">
      <div className="aurora" aria-hidden />
      {/* Ships with an original SVG backdrop; drop /images/hero-<slug>.jpg (licensed) to override per country. */}
      <div className="hero-photo" style={{ backgroundImage: `image-set(url(/images/hero-${c.slug}.jpg) 1x)`, backgroundColor: "transparent" }} aria-hidden />
      <div className="hero-svg" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-2 lg:items-center">
        <div className="reveal">
          <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.25em] text-moss">
            <span className="live-dot" /> {c.flag} {c.name} · buyers active now
          </p>
          <h1 className="h-display fluid-hero mt-3 font-bold text-ink">
            Sell your house fast — <span className="accent-italic">{c.processTerm[0].toUpperCase() + c.processTerm.slice(1)} in {c.days}.</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink/70">{c.offerNote}</p>
          <ul className="mt-6 space-y-2 font-medium text-ink/80">
            <li>✓ Free, no-obligation cash offer within 24–48 hours</li>
            <li>✓ Any condition, any situation — including {c.distressTerm}</li>
            <li>✓ No {c.agentTerm} fees, no repairs, no viewings</li>
          </ul>
          <p className="mt-4 text-sm text-ink/50">Prefer to talk first? Scroll down for our direct line — most sellers call before anything else.</p>
        </div>
        <div className="reveal reveal-2">
          <LeadForm country={c.slug} />
        </div>
      </div>
    </section>
  );
}
