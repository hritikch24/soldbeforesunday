import { PHONE, PHONE_DISPLAY } from '@/lib/config';
import LeadForm from '@/components/LeadForm';
import type { Country } from '@/data/countries';

export default function CountryHero({ c }: { c: Country }) {
  return (
    <section className="hero-shell relative overflow-hidden">
      <div className="aurora" aria-hidden />
      {/* UK property illustration and existing hero photograph. */}
      <div className="hero-photo" style={{ backgroundImage: `image-set(url(/images/hero-${c.slug}.jpg) 1x)`, backgroundColor: "transparent" }} aria-hidden />
      <div className="hero-svg" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-2 lg:items-center">
        <div className="reveal">
          <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.25em] text-moss">
            <span className="live-dot" /> {c.flag} England · Scotland · Wales · Northern Ireland
          </p>
          <h1 className="h-display fluid-hero mt-3 font-bold text-ink">
            Sell your house fast in the UK. <span className="accent-italic">Explore a cash offer.</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink/70">{c.offerNote}</p>
          <ul className="mt-6 space-y-2 font-medium text-ink/80">
            <li>✓ Free enquiry, with no obligation to accept an offer</li>
            <li>✓ Houses and flats considered, including inherited or damaged homes</li>
            <li>✓ We introduce independent buyers; we do not buy your property</li>
          </ul>
          <p className="mt-4 text-sm text-ink/50">Prefer to talk first? <a href={`tel:${PHONE}`} className="font-semibold text-moss underline">Call {PHONE_DISPLAY}</a>. Offers and timescales depend on buyer availability and legal checks.</p>
        </div>
        <div className="reveal reveal-2">
          <LeadForm country={c.slug} />
        </div>
      </div>
    </section>
  );
}
