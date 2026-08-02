import Link from 'next/link';

export default function ClosingCTA() {
  return (
    <section className="hero-shell relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'image-set(url(/images/trust-keys.jpg) 1x)' }}
        aria-hidden
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(16,35,27,.88) 0%, rgba(16,35,27,.62) 55%, rgba(16,35,27,.30) 100%)' }} aria-hidden />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center">
        <h2 className="h-display text-3xl font-bold text-white md:text-4xl">See what your house is worth in cash.</h2>
        <p className="mx-auto mt-3 max-w-xl text-[#cfe0d6]">
          Free, no obligation, and no pressure. Two minutes to ask — a real figure within 24–48 hours.
        </p>
        <Link href="/#countries" className="mt-7 inline-block rounded-full bg-gold px-9 py-4 text-lg font-bold text-ink shadow-[var(--e3)] transition hover:-translate-y-0.5">
          Get My Free Offer →
        </Link>
      </div>
    </section>
  );
}
