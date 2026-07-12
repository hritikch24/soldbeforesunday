import type { Country } from './countries';

export interface FAQ { q: string; a: string; }

export function faqsFor(c: Country): FAQ[] {
  return [
    { q: 'How fast can I actually sell?', a: `Once you submit the form, a vetted local cash buyer typically contacts you within 24 hours and can make an offer within 24–48 hours of seeing the property details. From accepted offer, ${c.processTerm} takes ${c.days} — because there is no mortgage approval, no chain and no waiting on banks.` },
    { q: 'Do I pay any fees or commissions?', a: `No. There are no ${c.agentTerm} commissions, no marketing costs and no fee for receiving an offer. The offer you accept is the figure you work from — the buyer covers their own costs.` },
    { q: 'Will the offer be below market value?', a: `Cash offers are typically below full retail market value — that is the honest trade-off for speed, certainty and selling as-is. When you subtract ${c.agentFee}, months of holding costs, and the risk of sales falling through, the net difference is usually far smaller than it first appears. You should always compare both numbers.` },
    { q: 'Do I need to make repairs or clean the property?', a: 'No. Cash buyers purchase properties exactly as they stand — including full contents if you want to walk away and leave everything. Condition affects the offer, not the possibility of a sale.' },
    { q: 'Am I obligated to accept the offer?', a: 'Never. The offer is free and no-obligation. Many sellers use it simply to know their fastest option while they weigh the open-market route.' },
    { q: 'Who exactly buys my house?', a: 'We are a connection service: we match your property with vetted, established cash buyers and investors active in your local area. You deal with the buyer directly, and you should always verify proof of funds before signing anything — any genuine cash buyer will provide it.' },
  ];
}
