import type { Metadata } from 'next';
import UKLanding from '@/components/UKLanding';

export const metadata: Metadata = {
  title: { absolute: 'Sell My House Fast UK | Sold Before Sunday' },
  description: 'Sell your house fast in the UK. Request a free cash-buyer introduction across England, Scotland, Wales and Northern Ireland. No obligation. Call +44 7780 443069.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Sell My House Fast UK | Sold Before Sunday',
    description: 'Free cash-buyer introductions across all four UK nations. Houses and flats considered; buyer availability varies by postcode.',
    url: '/',
    locale: 'en_GB',
  },
};

export default function Home() { return <UKLanding />; }
