import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'The terms governing use of this website and our connection service.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-extrabold">Terms of Use</h1>
      <div className="mt-6 space-y-4 leading-relaxed opacity-80">
        <p><strong>What this service is.</strong> {SITE_NAME} is a connection service: we match enquiries with vetted independent providers or buyers who operate in the relevant area. We are not a party to any transaction, contract or work agreed between you and them.</p>
        <p><strong>No fees to you.</strong> Submitting a request is free and creates no obligation on you to accept any offer or engage any provider.</p>
        <p><strong>Independent providers.</strong> Providers and buyers in our network are independent businesses. We vet for legitimacy, but you remain responsible for your own checks — including verifying proof of funds, licences and insurance where applicable, and taking independent legal or financial advice before signing anything.</p>
        <p><strong>No professional advice.</strong> Content on this site is general information, not legal, financial or real-estate advice. Laws and processes differ by country and state/province; confirm anything material with a qualified local professional.</p>
        <p><strong>Liability.</strong> To the maximum extent permitted by law, we are not liable for the acts, omissions, offers or workmanship of independent providers, or for decisions you make based on site content. Nothing in these terms limits rights that cannot be limited under your local consumer law (including the Australian Consumer Law and UK consumer protection legislation).</p>
        <p><strong>Changes.</strong> We may update these terms and the service at any time; continued use constitutes acceptance of the current version.</p>
      </div>
    </section>
  );
}
