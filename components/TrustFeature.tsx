export default function TrustFeature() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl shadow-[var(--e3)]">
          <img
            src="/images/trust-handshake.jpg"
            alt="A homeowner and a cash buyer shaking hands over a signed agreement"
            className="block w-full"
            loading="lazy"
            width={1200}
            height={820}
          />
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-moss">A fair deal, plainly done</p>
          <h2 className="h-display mt-3 text-3xl font-bold text-ink md:text-4xl">An honest handshake — not a hard sell.</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/70">
            No pressure, no games, no fine print that changes at the last minute. You get a clear cash offer,
            time to think, and the right to walk away at any point. Verify proof of funds, take it to your own
            lawyer, and only move forward if it genuinely works for you.
          </p>
          <ul className="mt-5 space-y-2 font-medium text-ink/80">
            <li>✓ A written offer you can compare and keep</li>
            <li>✓ Your own legal representative reviews everything</li>
            <li>✓ You choose the completion date — or say no, free of charge</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
