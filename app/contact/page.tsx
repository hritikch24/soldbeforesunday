import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import prisma from '@/lib/prisma';
import { sendTelegram } from '@/lib/telegram';
import { scoreLead } from '@/lib/ai';
import { SITE_NAME, CONTACT_EMAIL, PHONE, PHONE_DISPLAY, WHATSAPP } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Questions about selling your property? Reach ${SITE_NAME} by form, email${PHONE ? ', phone or WhatsApp' : ''} — we reply within one business day.`,
  alternates: { canonical: '/contact' },
  openGraph: { title: `Contact ${SITE_NAME}`, description: 'Questions about selling your property? We reply within one business day.', url: '/contact' },
};

async function submitEnquiry(formData: FormData) {
  'use server';
  const data = {
    name: String(formData.get('name') ?? ''),
    phone: String(formData.get('phone') ?? ''),
    email: String(formData.get('email') ?? ''),
    message: String(formData.get('message') ?? ''),
  };
  const score = await scoreLead(data);
  try {
    await prisma.lead.create({
      data: { type: 'contact', name: data.name, phone: data.phone, email: data.email, details: JSON.stringify(data), score, page: '/contact' },
    });
  } catch (e) {
    console.error('contact save failed', e);
  }
  await sendTelegram(`✉️ <b>CONTACT ENQUIRY — ${SITE_NAME}</b>\n${score ? `🤖 ${score}\n` : ''}👤 ${data.name}\n📞 ${data.phone}\n📧 ${data.email}\n💬 ${data.message}`);
  redirect('/thanks');
}

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs crumbs={[{ href: '/', label: 'Home' }, { href: '/contact', label: 'Contact' }]} />
      <section className="mx-auto max-w-5xl px-4 pb-16">
        <h1 className="h-display text-4xl font-bold text-ink">Talk to a human.</h1>
        <p className="mt-3 max-w-2xl text-lg text-ink/70">Selling a property fast raises questions — ask them before you fill anything in. We reply within one business day.</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="card-soft p-5">
              <p className="h-display font-bold text-ink">✉ Email</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="mt-1 block text-moss hover:underline">{CONTACT_EMAIL}</a>
            </div>
            {PHONE && (
              <div className="card-soft p-5">
                <p className="h-display font-bold text-ink">📞 Phone</p>
                <a href={`tel:${PHONE}`} className="mt-1 block text-moss hover:underline">{PHONE_DISPLAY}</a>
              </div>
            )}
            {WHATSAPP && (
              <div className="card-soft p-5">
                <p className="h-display font-bold text-ink">💬 WhatsApp</p>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="mt-1 block text-moss hover:underline">Message us on WhatsApp</a>
              </div>
            )}
            <p className="text-sm text-ink/50">Ready for an offer instead? Head to your country page and use the two-minute form — that goes straight to a vetted buyer.</p>
          </div>
          <form action={submitEnquiry} className="card-soft space-y-4 p-6 md:p-8">
            <h2 className="h-display text-xl font-bold text-ink">Send a message</h2>
            <input name="name" required placeholder="Your name" className="w-full rounded-xl border border-[#ddd5c4] bg-white p-3.5" />
            <input name="phone" required type="tel" placeholder="Phone number" className="w-full rounded-xl border border-[#ddd5c4] bg-white p-3.5" />
            <input name="email" type="email" placeholder="Email (optional)" className="w-full rounded-xl border border-[#ddd5c4] bg-white p-3.5" />
            <textarea name="message" required rows={4} placeholder="Your question…" className="w-full rounded-xl border border-[#ddd5c4] bg-white p-3.5" />
            <button type="submit" className="btn-ink w-full">Send — We Reply Within a Day</button>
          </form>
        </div>
      </section>
    </>
  );
}
