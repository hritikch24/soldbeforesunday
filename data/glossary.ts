export interface Term { term: string; where: string; def: string; }

export const glossary: Term[] = [
  { term: 'Cash buyer', where: 'All countries', def: 'A person or company that purchases property with funds they already hold — no mortgage, no lender approval, which is why cash sales cannot fall through on financing.' },
  { term: 'As-is sale', where: 'All countries', def: 'A sale where the buyer takes the property in its current condition — no repairs, cleaning or clearing required from the seller. Condition affects the price, not the possibility of the sale.' },
  { term: 'Proof of funds', where: 'All countries', def: 'Evidence (bank statement or solicitor/attorney confirmation) that a buyer actually holds the money to complete. The single most important document to request before trusting any cash buyer.' },
  { term: 'Equity', where: 'All countries', def: 'The difference between what your property is worth and what you owe on it. In a distressed sale, the goal is converting remaining equity to cash before fees, arrears and legal processes consume it.' },
  { term: 'Arrears', where: 'All countries', def: 'Missed payments owed on a mortgage or other secured debt. Arrears are repaid from sale proceeds at completion — selling before enforcement is how sellers protect their remaining equity.' },
  { term: 'Foreclosure', where: 'United States', def: 'The legal process by which a lender repossesses and sells a property after missed mortgage payments. Until the process completes, the owner can still sell — a fast cash sale is a common way to stop it.' },
  { term: 'Closing', where: 'US & Canada', def: 'The final step of a property sale, when documents are signed, funds transfer and ownership changes. Cash closings commonly take 7–21 days versus 30–60+ with mortgage financing.' },
  { term: 'Power of sale', where: 'Canada (esp. Ontario)', def: 'A faster alternative to foreclosure where the lender sells the property directly after default. As with foreclosure, owners can usually sell themselves before the process completes.' },
  { term: 'Repossession', where: 'United Kingdom', def: 'The UK equivalent of foreclosure: the lender takes possession after missed payments. A completed cash sale before the possession hearing repays the debt and protects the seller’s credit and equity.' },
  { term: 'Completion', where: 'United Kingdom', def: 'The UK term for the final day of a sale — contracts have been exchanged, money moves, keys change hands. Cash completions can happen in 7–28 days.' },
  { term: 'Chain / chain-free', where: 'United Kingdom', def: 'A chain is a line of linked purchases where each sale depends on another completing. Chains are the top reason UK sales collapse; a cash buyer is chain-free by definition.' },
  { term: 'Settlement', where: 'Australia', def: 'The Australian term for the final stage of a sale, when the balance is paid and title transfers — typically 30–90 days on the open market, but negotiable to a few weeks with a cash buyer.' },
  { term: 'Mortgagee sale', where: 'Australia', def: 'A sale forced by the lender (mortgagee) after default. Selling before it reaches this stage usually nets the owner considerably more than the forced-sale outcome.' },
  { term: 'Probate', where: 'All countries (names vary)', def: 'The legal process of administering a deceased person’s estate. A sale generally completes only after probate is granted, but offers and paperwork can be agreed in advance to complete immediately after.' },
  { term: 'Vacant possession', where: 'UK / AU / CA', def: 'Selling a property empty of occupants and belongings. Cash buyers frequently waive this — buying with tenants in place or contents left behind.' },
  { term: 'Title', where: 'All countries', def: 'The legal record of who owns a property. Title issues (disputes, liens, missing owners) stall open-market sales but are routine work for experienced cash buyers.' },
];
