import type { Metadata } from 'next';
import CookieSettingsButton from '@/components/CookieSettingsButton';
import { SITE_NAME, CONTACT_EMAIL } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Privacy Policy — UK Property Enquiries',
  description: 'How we use UK property enquiries, contact permission, buyer introductions, optional tracking and your data protection rights.',
  alternates: { canonical: '/privacy' },
  openGraph: { title: 'Privacy Policy — UK Property Enquiries', description: 'How we use UK property enquiries, contact permission, buyer introductions, optional tracking and your data protection rights.', url: '/privacy' },
};

export default function PrivacyPage() {
  return <section className="mx-auto max-w-3xl px-4 py-12">
    <h1 className="h-display text-4xl font-bold">Privacy Policy</h1>
    <p className="mt-3 text-sm text-ink/55">Updated 20 October 2026</p>
    <div className="mt-6 space-y-4 leading-relaxed text-ink/75">
      <p><strong>Contact.</strong> {SITE_NAME} handles information submitted through this website. For privacy questions and requests, email <a className="text-moss underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
      <p><strong>Information we collect.</strong> Property enquiries can include your name, phone number, optional email, property address and postcode, condition, reason for selling, preferred timeline, contact permission and its timestamp. A contact message includes the details you choose to send. Do not include bank details, identity documents or sensitive personal documents.</p>
      <p><strong>Purpose and legal basis.</strong> We use your enquiry and contact permission to respond about the property service you request. We rely on your consent for the contact permission requested on the enquiry form, and take steps at your request to handle service enquiries. Necessary administration, security and complaint records may be processed for our legitimate interests or legal obligations. We do not use your enquiry for unrelated marketing.</p>
      <p><strong>Buyer introductions.</strong> We identify a proposed independent buyer and confirm permission before sharing your personal details. That buyer will be responsible for its own handling of the information and should provide its privacy details. We may receive an introduction fee, which we explain before the introduction. We do not sell your details to unrelated marketing lists.</p>
      <p><strong>Service providers.</strong> Hosting and database providers process records for us. If configured, enquiry notifications are sent to our private Telegram account and a limited property summary is sent to Groq for automated prioritisation. We exclude names, phone numbers, email addresses, street addresses and free-text messages from that summary. Prioritisation assists review and does not determine a sale or offer. Some providers may process data outside the UK; applicable UK transfer safeguards are required for those arrangements.</p>
      <p id="cookies" className="scroll-mt-28"><strong>Cookies and optional tracking.</strong> Your cookie choice is stored in this browser. Optional first-party usage tracking and any configured Google Analytics or Google Ads tags are enabled only if you accept. Usage records may include visited pages, referrer, device, session identifier and IP address. Tracking is not needed to submit an enquiry. Rejecting it leaves the property service available.</p>
      <CookieSettingsButton />
      <p><strong>Retention.</strong> We retain enquiry records while handling the request and for as long as reasonably needed for related complaints, disputes or legal duties. We review records for deletion when no longer required. The necessary retention period depends on the enquiry and any applicable legal requirements.</p>
      <p><strong>Your UK data rights.</strong> Subject to the applicable conditions, you may request access, correction, erasure, restriction or portability, object to processing and withdraw consent. Withdrawal does not affect processing already lawfully carried out. Contact us using the email above; you can also raise a concern with the <a href="https://ico.org.uk/make-a-complaint/" className="text-moss underline">Information Commissioner’s Office</a>.</p>
    </div>
  </section>;
}
