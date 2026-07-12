import type { Country } from './countries';

export interface FAQ { q: string; a: string; }

export function faqsFor(c: Country): FAQ[] {
  return [
    { q: 'How fast can I actually sell?', a: `Once you submit the form, a vetted local cash buyer typically contacts you within 24 hours and can make an offer within 24–48 hours of seeing the property details. From accepted offer, ${c.processTerm} takes ${c.days} — because there is no mortgage approval${c.slug === 'uk' ? ', no chain' : ''} and no waiting on banks.` },
    { q: 'Do I pay any fees or commissions?', a: `No. There are no ${c.agentTerm} commissions, no marketing costs and no fee for receiving an offer. The offer you accept is the figure you work from — the buyer covers their own costs.` },
    { q: 'Will the offer be below market value?', a: `Cash offers are typically below full retail market value — that is the honest trade-off for speed, certainty and selling as-is. When you subtract ${c.agentFee}, months of holding costs, and the risk of sales falling through, the net difference is usually far smaller than it first appears. You should always compare both numbers.` },
    { q: 'Do I need to make repairs or clean the property?', a: 'No. Cash buyers purchase properties exactly as they stand — including full contents if you want to walk away and leave everything. Condition affects the offer, not the possibility of a sale.' },
    { q: 'Am I obligated to accept the offer?', a: 'Never. The offer is free and no-obligation. Many sellers use it simply to know their fastest option while they weigh the open-market route.' },
    { q: 'Who exactly buys my house?', a: 'We are a connection service: we match your property with vetted, established cash buyers and investors active in your local area. You deal with the buyer directly, and you should always verify proof of funds before signing anything — any genuine cash buyer will provide it.' },
    { q: 'How do I know a cash buyer is legitimate and not a scam?', a: 'Three checks protect you completely: ask for proof of funds (a genuine buyer provides a bank statement or ${c.lawyerTerm} confirmation within a day), never pay anyone anything (legitimate buyers never charge sellers — any upfront \'fee\' is a scam), and have the contract reviewed by your own legal representative before signing. Buyers in our network are vetted, but you should run these checks on anyone, including them.' },
    { q: 'Can I sell a house with tenants still in it?', a: 'Yes. Investors often prefer tenanted properties — the rent is income from day one. Problem tenancies, expired agreements and rent arrears are all situations cash buyers deal with routinely and price in.' },
    { q: 'Can I sell before probate is complete?', a: 'You generally cannot complete a sale before probate (or its local equivalent) is granted, but you can absolutely get an offer agreed and paperwork prepared so the sale can ${c.processVerb} immediately after. Cash buyers are used to working around probate timelines.' },
    { q: 'What happens to my mortgage when I sell?', a: 'The mortgage is repaid from the sale proceeds at ${c.processTerm}, including any arrears. If your mortgage is larger than the offer, talk to the buyer anyway — some situations have solutions (negotiated settlements, assisted sales) and an honest buyer will tell you quickly if yours does not.' },
    { q: 'What information do you share, and with whom?', a: 'Only what you submit in the form, and only with the vetted buyer(s) covering your area so they can make your offer. We do not sell your details to marketing lists. See our Privacy Policy for the full picture.' },
  ];
}
