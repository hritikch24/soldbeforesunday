import { CONTACT_EMAIL, PHONE, PHONE_DISPLAY } from '@/lib/config';

export default function FoundingOffer({ city }: { city?: string }) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-14">
      <div className="card-soft overflow-hidden !rounded-3xl">
        <div className="bg-ink px-8 py-5 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Founding sellers</p>
          <h2 className="h-display mt-1 text-2xl font-bold text-white md:text-3xl">
            We&rsquo;re new here{city ? ` in ${city}` : ''}. That works in your favor.
          </h2>
        </div>
        <div className="px-8 py-8">
          <p className="text-lg leading-relaxed text-ink/75">
            Most quick-sale outfits route you through a call center and a script. We&rsquo;re building this
            market one seller at a time, so right now every enquiry is handled personally — and we&rsquo;d
            rather earn a reputation slowly than burn one fast.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              ['Direct line, not a queue', 'You reach a person who knows your file, first call to closing.'],
              ['Hand-picked buyers only', 'Small network, each one vetted for proof of funds and track record.'],
              ['Straight answers, including no', 'If the open market suits you better, we say so and step aside.'],
              ['Your timeline, not ours', 'Nobody chases you. Take a week, take a month.'],
            ].map(([t, d]) => (
              <li key={t} className="rounded-xl bg-cream/70 p-4">
                <p className="h-display font-bold text-ink">{t}</p>
                <p className="mt-1 text-sm text-ink/65">{d}</p>
              </li>
            ))}
          </ul>
          <div className="mt-7 rounded-2xl border border-[#e9e3d6] bg-white p-5 text-center">
            <p className="text-sm text-ink/60">Want to talk before filling anything in? That&rsquo;s normal.</p>
            <p className="mt-2 font-semibold">
              {PHONE && <a href={`tel:${PHONE}`} className="text-moss hover:underline">{PHONE_DISPLAY}</a>}
              {PHONE && <span className="mx-3 text-ink/30">·</span>}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-moss hover:underline">{CONTACT_EMAIL}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
