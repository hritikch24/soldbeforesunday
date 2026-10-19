import type { Metadata } from 'next';
import GuideArticle from '@/components/GuideArticle';

const title = "How to Check a UK Cash House Buyer";
const description = "Reduce the risks of a quick UK property sale: check buyer identity, proof of funds, fees, price conditions and your own solicitor before signing.";
export const metadata: Metadata = { title, description, alternates: { canonical: '/guides/avoid-quick-sale-scams' }, openGraph: { title, description, url: '/guides/avoid-quick-sale-scams' } };

export default function Guide() {
  return <GuideArticle slug="avoid-quick-sale-scams" title={title} description={description} sources={[{"label": "MoneyHelper: quick-sale checks and alternatives", "url": "https://www.moneyhelper.org.uk/en/homes/buying-a-home/quick-house-sales"}, {"label": "GOV.UK: property redress schemes", "url": "https://www.gov.uk/redress-scheme-estate-agencies"}]}>

        <p>A time-sensitive sale is a reason to check the paperwork carefully. No set of checks eliminates every risk, but clear written information makes an offer easier to assess.</p>
        <h2 className="h-display text-2xl font-bold text-ink">Identify the buyer and how the purchase is funded</h2>
        <p>Ask which legal person or company will buy the property, who you are dealing with and how they are paid. If someone is introducing a third-party buyer, that role and any referral arrangement should be clear. Ask your solicitor to verify evidence of available funds.</p>
        <h2 className="h-display text-2xl font-bold text-ink">Read the conditions behind the headline price</h2>
        <p>Check whether the offer is subject to a survey, valuation, finance or another sale. Ask what could change the price and whether any exclusivity or option agreement restricts your ability to sell elsewhere. Have your solicitor explain the effect before you sign.</p>
        <h2 className="h-display text-2xl font-bold text-ink">Separate our fee from other sale costs</h2>
        <p>Our homeowner enquiry and introduction fee is £0. Independent legal work, leasehold documents or mortgage redemption can still involve costs. Obtain a written breakdown and query unexpected advance payment requests; a fee alone does not establish fraud.</p>
        <h2 className="h-display text-2xl font-bold text-ink">Use independent advice and verify claimed memberships</h2>
        <p>Choose a solicitor who can advise you independently. Check any claimed registration, trade membership or redress scheme with the relevant organisation directly. Do not rely on a logo or a promise of a guaranteed completion.</p>
        <h2 className="h-display text-2xl font-bold text-ink">Keep records and raise concerns promptly</h2>
        <p>Retain the written offer, cost breakdown and correspondence. If terms change, ask for the reason and consult your solicitor before accepting. Raise complaints with the business and check whether an applicable redress scheme can consider them.</p>
  </GuideArticle>;
}
