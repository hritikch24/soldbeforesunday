import type { Metadata } from 'next';
import GuideArticle from '@/components/GuideArticle';

const title = "How Cash House Sales Work in the UK";
const description = "Understand UK cash-buyer introductions, proof of funds, legal checks and the differences between England, Scotland, Wales and Northern Ireland.";
export const metadata: Metadata = { title, description, alternates: { canonical: '/guides/how-fast-cash-house-sales-work' }, openGraph: { title, description, url: '/guides/how-fast-cash-house-sales-work' } };

export default function Guide() {
  return <GuideArticle slug="how-fast-cash-house-sales-work" title={title} description={description} sources={[{"label": "GOV.UK: transferring ownership", "url": "https://www.gov.uk/buying-a-home/transferring-ownership"}, {"label": "Scottish Government: selling a home", "url": "https://www.mygov.scot/sell-home/first-steps"}, {"label": "nidirect: the buying process", "url": "https://www.nidirect.gov.uk/articles/buying-home-step-step-guide"}]}>

        <p>A cash purchase removes the need for a new mortgage on the property. It still requires a willing buyer, an agreed price and legal work. It can suit some sellers with a deadline, but it cannot guarantee a fast completion.</p>
        <h2 className="h-display text-2xl font-bold text-ink">Check who is making the offer</h2>
        <p>A direct buyer purchases the property itself. An introduction service, such as Sold Before Sunday, connects you with an independent buyer. Ask for the buyer’s legal identity and whether any purchase depends on finance or another sale.</p>
        <h2 className="h-display text-2xl font-bold text-ink">From enquiry to written offer</h2>
        <p>Send the UK property address and postcode, condition, occupancy and preferred timeline. We review the enquiry and explain any proposed introduction before sharing your details with permission. A buyer may ask for photos, documents or an inspection before deciding whether to offer.</p>
        <h2 className="h-display text-2xl font-bold text-ink">Legal checks still determine the date</h2>
        <p>Your solicitor checks title, authority to sell, mortgage redemption and the contract. Missing estate papers, lease documents or answers to enquiries can delay the transaction. Get a written offer with conditions and costs, and compare it with an independent valuation.</p>
        <h2 className="h-display text-2xl font-bold text-ink">The four UK nations</h2>
        <p>England and Wales normally use exchange followed by completion. Scotland uses missives, with the binding point explained by a Scottish solicitor; Home Report rules and exceptions also need checking. Northern Ireland has its own conveyancing practice. Use a legal professional familiar with the property’s jurisdiction.</p>
        <h2 className="h-display text-2xl font-bold text-ink">Decide using the whole picture</h2>
        <p>Consider the offer, any sale costs and the consequences of waiting. We charge no homeowner introduction fee; separate legal and mortgage costs can apply. You are free to decline an introduction or offer before taking on contractual obligations.</p>
  </GuideArticle>;
}
