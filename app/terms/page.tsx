import type { Metadata } from 'next';
import { SITE_NAME, CONTACT_EMAIL } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Terms of Use — UK Property Introductions',
  description: 'Terms for our UK property introduction service, including fees, independent buyers and sale costs.',
  alternates: { canonical: '/terms' },
  openGraph: { title: 'Terms of Use — UK Property Introductions', description: 'Terms for our UK property introduction service, including fees, independent buyers and sale costs.', url: '/terms' },
};

export default function TermsPage() {
  return <section className="mx-auto max-w-3xl px-4 py-12">
    <h1 className="h-display text-4xl font-bold">Terms of Use</h1>
    <p className="mt-3 text-sm text-ink/55">Updated 20 October 2026</p>
    <div className="mt-6 space-y-4 leading-relaxed text-ink/75">
      <p><strong>Our service.</strong> {SITE_NAME} accepts enquiries about properties in England, Scotland, Wales and Northern Ireland and explores introductions to independent buyers. We do not purchase your property. An enquiry does not guarantee a buyer, offer, price or completion date.</p>
      <p><strong>Eligibility.</strong> You must be at least 18 and the owner or authorised to enquire about the property. Give accurate information and do not send identity documents or bank details through the enquiry form.</p>
      <p><strong>Fees.</strong> Homeowners pay us no enquiry or introduction fee. We may receive an introduction fee from a buyer and explain any applicable arrangement before an introduction. Obtain written details of all separate legal, mortgage and transaction costs.</p>
      <p><strong>Independent buyers.</strong> Any purchase agreement is between you and the identified buyer. Check proof of funds and have your own solicitor review the contract, conditions and costs before signing. An enquiry does not commit you to sell; a later contract may create binding obligations.</p>
      <p><strong>General information.</strong> Website content is not individual legal, debt, financial or tax advice. Rules differ between UK nations. Obtain advice appropriate to your property and circumstances, especially for arrears, estates or tenancies.</p>
      <p><strong>Your rights.</strong> Nothing in these terms excludes our responsibility where it cannot lawfully be excluded or limits your statutory consumer rights. You retain any mandatory protections available where you live.</p>
      <p><strong>Questions or complaints.</strong> Email <a className="text-moss underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> with the relevant enquiry details so we can investigate. Ask any proposed buyer for their own complaints procedure and applicable redress details before proceeding.</p>
    </div>
  </section>;
}
