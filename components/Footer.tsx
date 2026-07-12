import Link from 'next/link';
import { SITE_NAME } from '@/lib/config';
import { countries } from '@/data/countries';
import { citiesFor } from '@/data/cities';

export default function Footer() {
  return (
    <footer className="bg-ink text-[#cfe0d6]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <p className="h-display text-xl font-bold text-white">{SITE_NAME}</p>
          <p className="mt-3 text-sm leading-relaxed">We connect homeowners who need a fast sale with vetted local cash buyers. Free offers, no fees, sell as-is.</p>
          <ul className="mt-4 space-y-1 text-sm">
            <li><Link href="/how-it-works" className="hover:text-gold">How It Works</Link></li>
            <li><Link href="/faq" className="hover:text-gold">FAQ</Link></li>
            <li><Link href="/glossary" className="hover:text-gold">Property Glossary</Link></li>
            <li><Link href="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link href="/privacy" className="hover:text-gold">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-gold">Terms of Use</Link></li>
          </ul>
        </div>
        {countries.map((c) => (
          <div key={c.slug}>
            <p className="h-display font-bold text-white">{c.flag} {c.name}</p>
            <ul className="mt-3 space-y-1 text-sm">
              {citiesFor(c.slug).slice(0, 6).map((city) => (
                <li key={city.slug}><Link href={`/${c.slug}/${city.slug}`} className="hover:text-gold">{city.name}</Link></li>
              ))}
              <li><Link href={`/${c.slug}`} className="font-semibold text-gold hover:underline">All areas →</Link></li>
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-[#9db8aa]">
        © {new Date().getFullYear()} {SITE_NAME} · A property-buyer connection service. We are not estate agents, brokers or lenders; offers are made by independent vetted buyers. Always verify proof of funds and take independent advice before signing.
      </div>
    </footer>
  );
}
