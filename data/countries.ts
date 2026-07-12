export interface Country {
  slug: string;
  name: string;
  locale: string;      // hreflang
  flag: string;
  agentTerm: string;   // realtor / estate agent
  agentFee: string;    // typical fee framing
  processTerm: string; // closing / completion / settlement
  distressTerm: string;// foreclosure / repossession / mortgagee sale
  days: string;
  offerNote: string;
}

export const countries: Country[] = [
  {
    slug: 'us', name: 'United States', locale: 'en-US', flag: '🇺🇸',
    agentTerm: 'realtor', agentFee: '5–6% commission plus repairs and months of showings',
    processTerm: 'closing', distressTerm: 'foreclosure',
    days: 'as few as 7–14 days',
    offerNote: 'Fair cash offers on houses in any condition — no fees, no repairs, no realtor commissions.',
  },
  {
    slug: 'uk', name: 'United Kingdom', locale: 'en-GB', flag: '🇬🇧',
    agentTerm: 'estate agent', agentFee: 'agent fees, chains that collapse, and 4–6 month completions',
    processTerm: 'completion', distressTerm: 'repossession',
    days: 'as few as 7–28 days',
    offerNote: 'Genuine cash buyers for houses and flats in any condition — chain-free, no fees, completion on your date.',
  },
  {
    slug: 'ca', name: 'Canada', locale: 'en-CA', flag: '🇨🇦',
    agentTerm: 'realtor', agentFee: '4–5% commission plus repairs and staging',
    processTerm: 'closing', distressTerm: 'foreclosure or power of sale',
    days: 'as few as 10–21 days',
    offerNote: 'Fair cash offers on properties in any condition — no commissions, no repairs, close on your schedule.',
  },
  {
    slug: 'au', name: 'Australia', locale: 'en-AU', flag: '🇦🇺',
    agentTerm: 'real estate agent', agentFee: 'agent commissions, marketing costs and open-home months',
    processTerm: 'settlement', distressTerm: 'mortgagee repossession',
    days: 'as few as 14–30 days',
    offerNote: 'Genuine cash buyers for homes in any condition — no commissions, no repairs, settlement on your terms.',
  },
];

export function getCountry(slug: string) {
  return countries.find((c) => c.slug === slug);
}
