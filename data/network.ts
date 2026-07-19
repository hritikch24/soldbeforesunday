// Facts about the buyer network, per country. Update ONLY with numbers you can
// evidence if asked. Set `activeBuyers` to 0 to hide the counts automatically.
export interface NetworkFacts {
  country: string;
  activeBuyers: number;   // vetted buyers currently taking leads
  metrosCovered: number;
}

export const network: NetworkFacts[] = [
  { country: 'us', activeBuyers: 0, metrosCovered: 12 },
  { country: 'uk', activeBuyers: 0, metrosCovered: 8 },
  { country: 'ca', activeBuyers: 0, metrosCovered: 6 },
  { country: 'au', activeBuyers: 0, metrosCovered: 6 },
];

export function factsFor(country: string) {
  return network.find((n) => n.country === country);
}
