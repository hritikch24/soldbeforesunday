import type { Metadata } from 'next';
import GuideArticle from '@/components/GuideArticle';

const title = "Cash Offer vs Estate Agent: UK Sale Costs";
const description = "Compare UK cash-sale and estate-agent proceeds with a worked example in pounds, including legal fees, holding costs and mortgage redemption.";
export const metadata: Metadata = { title, description, alternates: { canonical: '/guides/cash-offer-vs-listing-real-math' }, openGraph: { title, description, url: '/guides/cash-offer-vs-listing-real-math' } };

export default function Guide() {
  return <GuideArticle slug="cash-offer-vs-listing-real-math" title={title} description={description} sources={[{"label": "GOV.UK: finding a solicitor or conveyancer", "url": "https://www.gov.uk/selling-a-home/finding-solicitor-conveyancer"}, {"label": "MoneyHelper: evaluating a quick house sale", "url": "https://www.moneyhelper.org.uk/en/homes/buying-a-home/quick-house-sales"}]}>

        <p>Compare what you expect to keep after a sale, rather than comparing an asking price with a cash offer. Start with independent valuations and written cost estimates for both routes.</p>
        <h2 className="h-display text-2xl font-bold text-ink">An example in pounds</h2>
        <p>These figures are illustrative assumptions, not a valuation, quote or prediction. This example assumes the same property condition under both routes and excludes tax, mortgage debt and early repayment charges until the next step.</p>
        <div className="overflow-x-auto"><table className="w-full text-left text-sm"><caption className="mb-3 text-left font-semibold">Illustrative sale proceeds before mortgage redemption</caption><thead><tr><th className="p-3">Item</th><th className="p-3">Estate agent</th><th className="p-3">Cash buyer</th></tr></thead><tbody>
          <tr><th className="p-3">Agreed sale price</th><td className="p-3">£250,000</td><td className="p-3">£220,000</td></tr>
          <tr><th className="p-3">Agent fee including VAT</th><td className="p-3">−£3,600</td><td className="p-3">£0 assumed</td></tr>
          <tr><th className="p-3">Legal costs</th><td className="p-3">−£1,500</td><td className="p-3">−£1,500</td></tr>
          <tr><th className="p-3">Holding costs until sale</th><td className="p-3">−£3,000</td><td className="p-3">−£500</td></tr>
          <tr className="bg-paper"><th className="p-3">Proceeds before mortgage</th><td className="p-3">£241,900</td><td className="p-3">£218,000</td></tr>
        </tbody></table></div>
        <p>In this example, the estate-agent route leaves £23,900 more before mortgage redemption. A faster route does not automatically produce a better financial result. Your actual costs and timing may differ substantially.</p>
        <h2 className="h-display text-2xl font-bold text-ink">Subtract the mortgage and other liabilities</h2>
        <p>Ask your lender or solicitor for a redemption statement, including any early repayment charge. With a £120,000 mortgage and no extra charges in this example, the remaining figures would be £121,900 and £98,000. Also consider other secured debts and any tax that applies to your circumstances.</p>
        <h2 className="h-display text-2xl font-bold text-ink">Use written figures for your property</h2>
        <p>Request the agent’s full fee including VAT, your solicitor’s quote and a cash buyer’s written terms. Include any Home Report, leasehold pack or clearance costs where relevant. Our introduction service is free to homeowners, but that does not make the whole sale cost-free.</p>
  </GuideArticle>;
}
