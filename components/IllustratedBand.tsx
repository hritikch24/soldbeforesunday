export default function IllustratedBand({ country, cityName }: { country: string; cityName?: string }) {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="mx-auto max-w-6xl px-4 pt-14 text-center">
        <h2 className="h-display text-3xl font-bold text-ink md:text-4xl">
          A calmer way to sell{cityName ? ` in ${cityName}` : ''}.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-ink/70">
          Explore a direct sale without an open-market listing. An independent buyer may still need an inspection,
          and your solicitor will confirm the legal steps and any agreed date.
        </p>
      </div>
      {/* Original per-country flat illustration — decorative, not a photo of a specific property */}
      <img
        src={`/images/neighborhood-${country}.svg`}
        alt="Illustration of local homes on a quiet street with a sold sign"
        className="mx-auto mt-2 block w-full max-w-5xl"
        loading="lazy"
        width={1200}
        height={440}
      />
    </section>
  );
}
