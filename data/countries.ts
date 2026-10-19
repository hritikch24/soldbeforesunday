export interface Country {
  slug: string;
  name: string;
  locale: string;
  flag: string;
  nameWithThe: string;
  lawyerTerm: string;
  processVerb: string;
  agentTerm: string;
  agentFee: string;
  processTerm: string;
  distressTerm: string;// foreclosure / repossession / mortgagee sale
  days: string;
  offerNote: string;
}

export const countries: Country[] = [
  {
    slug: 'uk', name: 'United Kingdom', nameWithThe: 'the United Kingdom', lawyerTerm: 'solicitor', processVerb: 'complete', locale: 'en-GB', flag: '🇬🇧',
    agentTerm: 'estate agent', agentFee: 'agent fees, chains that collapse, and 4–6 month completions',
    processTerm: 'completion', distressTerm: 'repossession',
    days: 'a timeframe agreed with your solicitor',
    offerNote: 'Request a cash offer for your UK house or flat. Free introductions across England, Scotland, Wales and Northern Ireland; buyer availability varies by postcode.',
  },
];
export function getCountry(slug: string) {
  return countries.find((c) => c.slug === slug);
}

export function an(term: string) {
  return `${/^[aeiou]/i.test(term) ? 'an' : 'a'} ${term}`;
}

export function titleCaseTerm(s: string) {
  return s.split(' ').map((w) => (['or', 'of', 'the'].includes(w) ? w : w.charAt(0).toUpperCase() + w.slice(1))).join(' ');
}
