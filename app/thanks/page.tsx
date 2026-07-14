import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Message Received', robots: { index: false } };

export default function ThanksPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-24 text-center">
      <p className="text-4xl">✓</p>
      <h1 className="h-display mt-3 text-4xl font-bold text-ink">Got it — we&rsquo;ll reply within a day.</h1>
      <p className="mt-4 text-lg text-ink/70">If you&rsquo;re ready for a cash offer in the meantime, the two-minute form goes straight to a vetted buyer:</p>
      <Link href="/#countries" className="btn-ink mt-6">Get My Cash Offer</Link>
    </section>
  );
}
