import type { Country } from './countries';

export interface Situation {
  slug: string;
  title: (c: Country) => string;
  heading: (c: Country) => string;
  body: (c: Country) => string[];
}

export const situations: Situation[] = [
  {
    slug: 'repossession',
    title: () => 'Selling a House Before Repossession in the UK',
    heading: () => 'Facing repossession? Understand your options before relying on a sale.',
    body: () => [
      'Mortgage arrears need prompt attention. Contact your lender and an independent debt adviser, and take legal advice on any court notice or deadline. A property enquiry does not stop enforcement action.',
      'A completed sale may repay a mortgage and arrears, but only if the proceeds and timing are sufficient and the lender agrees any necessary arrangements. Ask your solicitor for a redemption figure, including charges and other secured debts.',
      'You can request a free cash-buyer introduction alongside that advice. Explain the deadline accurately. We cannot guarantee an offer, completion date or that a sale will prevent repossession.',
    ],
  },
  {
    slug: 'inherited-property', title: () => 'Sell an Inherited House in the UK', heading: () => 'Inherited a property? Plan the sale around the estate paperwork.',
    body: () => [
      'Before agreeing a sale, establish who has authority to act for the estate. Probate requirements differ by circumstances and nation; in Scotland, the relevant process is confirmation. The estate solicitor should confirm what is required.',
      'Tell us the property condition, occupancy and whether the estate paperwork is ready. An independent buyer may consider a property needing clearance or repairs, but any arrangement about contents must be agreed in writing.',
      'Compare an offer with independent valuations, estate expenses and the interests of beneficiaries. An introduction is free, and the legal process determines when a sale can complete.',
    ],
  },
  {
    slug: 'divorce', title: () => 'Selling a House During Divorce or Separation UK', heading: () => 'A property sale during separation needs agreement and independent advice.',
    body: () => [
      'Confirm ownership, any court orders and who must consent to a sale with your solicitor. A buyer introduction cannot resolve a disagreement between owners or decide how the proceeds should be divided.',
      'If all necessary parties agree to explore a sale, a cash offer can be compared with an estate agent valuation and other options. Ask for the price, conditions and proposed timescale in writing.',
      'Tell us about your preferred timeline without sharing sensitive legal or personal documents through the enquiry form. Each party should obtain appropriate independent advice before signing.',
    ],
  },
  {
    slug: 'relocation', title: () => 'Sell Your House When Relocating in the UK', heading: () => 'Moving away? Compare a cash sale with your moving deadline.',
    body: () => [
      'A relocation can leave you managing a property from another town or country. Include your target date, whether there is an onward purchase and who can provide access for an inspection.',
      'A cash buyer may remove a mortgage application from the transaction, but title checks and other legal work remain. Avoid committing to removals or an onward completion based only on an initial offer.',
      'Compare the cash offer with a realistic open-market valuation and the costs of keeping the property while it sells. We can discuss an introduction, subject to buyer availability.',
    ],
  },
  {
    slug: 'damaged-property', title: () => 'Sell a Damaged House or Problem Property UK', heading: () => 'Fire, flood or structural damage? Start with an accurate description.',
    body: () => [
      'You can enquire about a property needing major repairs, including a house or flat affected by fire, flooding or subsidence. Give a clear account of known issues and any current insurance claim.',
      'Keep surveys, engineering reports, repair certificates and planning records available for your solicitor and any prospective buyer. An inspection may still be needed even when the buyer is using cash.',
      'The condition and legal position affect whether a buyer will make an offer and at what price. Ask for all assumptions and any proposed deductions in writing before deciding.',
    ],
  },
  {
    slug: 'tired-landlord', title: () => 'Sell a Rental Property or Tenanted House UK', heading: () => 'Ready to sell a rental? Tenancy rights remain part of the sale.',
    body: () => [
      'Some independent buyers consider rental properties with tenants in place. Let us know whether the home is occupied, the tenancy type and whether there are arrears or licensing issues.',
      'Selling does not itself end a tenancy. Your solicitor should advise on deposits, notices, access, documentation and the rules in England, Scotland, Wales or Northern Ireland as applicable.',
      'Compare an investment-buyer offer with the alternatives and obtain tax advice where needed. We charge homeowners no introduction fee; legal costs and any mortgage redemption charges are separate.',
    ],
  },
];
