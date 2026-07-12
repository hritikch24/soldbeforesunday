import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Analytics from '@/components/Analytics';
import SchemaMarkup from '@/components/SchemaMarkup';
import { SITE_NAME, SITE_URL } from '@/lib/config';

export const viewport: Viewport = { width: 'device-width', initialScale: 1 };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${SITE_NAME}`,
    default: `${SITE_NAME} | Sell Your House Fast for Cash — US, UK, Canada & Australia`,
  },
  description: 'Get a free, no-obligation cash offer on your house in 24–48 hours. No fees, no repairs, no agents. Vetted local cash buyers in the US, UK, Canada and Australia.',
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } : undefined,
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 font-sans text-slate-800">
        <SchemaMarkup schema={orgSchema} />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
