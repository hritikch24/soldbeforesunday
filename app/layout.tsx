import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Analytics from '@/components/Analytics';
import PageTracker from '@/components/PageTracker';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StickyCTA from '@/components/StickyCTA';
import SchemaMarkup from '@/components/SchemaMarkup';
import { SITE_NAME, SITE_URL, GSC_VERIFICATION, CONTACT_EMAIL, PHONE } from '@/lib/config';

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', display: 'swap', weight: ['400', '600', '700'] });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const viewport: Viewport = { width: 'device-width', initialScale: 1 };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${SITE_NAME}`,
    default: `Sell Your House Fast for Cash | ${SITE_NAME}`,
  },
  description: 'Get a free, no-obligation cash offer on your house in 24–48 hours. No fees, no repairs, no agents. Vetted local cash buyers in the US, UK, Canada and Australia.',
  verification: GSC_VERIFICATION ? { google: GSC_VERIFICATION } : undefined,
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Sell Your House Fast for Cash`,
    description: 'Free cash offer in 24–48 hours. No fees, no repairs, no agents.',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#org`,
  name: SITE_NAME,
  url: SITE_URL,
  description: 'A connection service matching homeowners who need a fast sale with vetted local cash property buyers in the US, UK, Canada and Australia.',
  areaServed: ['United States', 'United Kingdom', 'Canada', 'Australia'],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: CONTACT_EMAIL,
    ...(PHONE ? { telephone: PHONE } : {}),
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { '@id': `${SITE_URL}/#org` },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-cream pb-16 text-ink md:pb-0">
        <SchemaMarkup schema={orgSchema} />
        <SchemaMarkup schema={websiteSchema} />
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyCTA />
        <FloatingWhatsApp />
        <Analytics />
        <PageTracker />
      </body>
    </html>
  );
}
