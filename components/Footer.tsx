import Link from 'next/link';
import CookieSettingsButton from './CookieSettingsButton';
import { SITE_NAME, CONTACT_EMAIL, PHONE, PHONE_DISPLAY, WHATSAPP } from '@/lib/config';
import { regions } from '@/data/regions';
import { citiesFor } from '@/data/cities';

export default function Footer() {
  return (
    <footer className="bg-ink text-[#cfe0d6]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <p className="h-display text-xl font-bold text-white">{SITE_NAME}</p>
          <p className="mt-3 text-sm leading-relaxed">Free property introductions throughout England, Scotland, Wales and Northern Ireland. Buyer availability varies by postcode.</p>
          <div className="mt-4 space-y-1 text-sm">
            <p><a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-gold">✉ {CONTACT_EMAIL}</a></p>
            {PHONE && <p><a href={`tel:${PHONE}`} className="hover:text-gold">📞 {PHONE_DISPLAY}</a></p>}
            {WHATSAPP && <p><a href={`https://wa.me/${WHATSAPP}`} className="hover:text-gold">💬 WhatsApp us</a></p>}
          </div>
          <ul className="mt-4 space-y-1 text-sm">
            <li><Link href="/how-it-works" className="hover:text-gold">How It Works</Link></li>
            <li><Link href="/faq" className="hover:text-gold">FAQ</Link></li>
            <li><Link href="/glossary" className="hover:text-gold">Property Glossary</Link></li>
            <li><Link href="/guides" className="hover:text-gold">Seller Guides</Link></li>
            <li><Link href="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-gold">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-gold">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-gold">Terms of Use</Link></li>
            <li><CookieSettingsButton /></li>
          </ul>
        </div>
        {regions.filter((r) => r.kind === 'Nation').map((r) => (
          <div key={r.slug}>
            <Link href={`/uk/${r.slug}`} className="h-display font-bold text-white hover:text-gold">{r.name}</Link>
            <ul className="mt-3 space-y-1 text-sm">
              {citiesFor('uk').filter((city) => r.slug === 'england' ? !['scotland', 'wales', 'northern-ireland'].includes(city.regionSlug ?? '') : city.regionSlug === r.slug).slice(0, 6).map((city) => (
                <li key={city.slug}><Link href={`/uk/${city.slug}`} className="hover:text-gold">{city.name}</Link></li>
              ))}
              <li><Link href={`/uk/${r.slug}`} className="font-semibold text-gold hover:underline">All areas →</Link></li>
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-[#9db8aa]">
        © {new Date().getFullYear()} {SITE_NAME} · A property-buyer connection service. We do not buy property or provide mortgages. Independent buyers make any offers. We may receive an introduction fee from a buyer; any applicable arrangement is explained before an introduction. Always verify proof of funds and take independent advice before signing.
      </div>
    </footer>
  );
}
