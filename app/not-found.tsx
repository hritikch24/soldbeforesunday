import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="text-4xl font-extrabold text-slate-900">Page not found</h1>
      <p className="mt-6"><Link href="/" className="font-bold text-emerald-700 underline">Get your cash offer here →</Link></p>
    </section>
  );
}
