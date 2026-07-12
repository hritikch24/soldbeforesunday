import type { Metadata } from 'next';
import { SITE_NAME, CONTACT_EMAIL } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'What we collect, why, who we share it with, and your rights.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-extrabold">Privacy Policy</h1>
      <div className="mt-6 space-y-4 leading-relaxed opacity-80">
        <p><strong>What we collect.</strong> Information you submit through our forms (name, phone, email, property or job details) and basic technical usage data (pages viewed, referring site, device type) collected first-party by our own systems — we do not use third-party tracking pixels.</p>
        <p><strong>Why we collect it.</strong> Form data exists for one purpose: connecting your request with the vetted service provider or buyer covering your area, so they can contact you as you requested. Usage data helps us understand which pages are useful.</p>
        <p><strong>Who we share it with.</strong> Your form details go to the relevant vetted provider(s) for your area — that is the service. We do not sell your information to marketing lists or unrelated third parties.</p>
        <p><strong>Consent to be contacted.</strong> By submitting a form, you agree that the matched provider(s) may contact you by phone, SMS or email about your request. You can withdraw this at any time by telling us or them to stop.</p>
        <p><strong>Retention & your rights.</strong> We keep records only as long as needed to operate the service. You may request a copy of your data or its deletion at any time by emailing {CONTACT_EMAIL}, and — where local law provides (GDPR in the UK/EU, CCPA in California, PIPEDA in Canada, the Privacy Act in Australia) — you have the corresponding statutory rights.</p>
        <p><strong>Who we are.</strong> {SITE_NAME} is a connection/dispatch service. Providers and buyers in our network are independent businesses responsible for their own conduct and privacy practices once connected with you.</p>
      </div>
    </section>
  );
}
