// Facts about the buyer network, per country. Update ONLY with numbers you can
// evidence if asked. Set `activeBuyers` to 0 to hide the counts automatically.
export interface NetworkFacts {
  country: string;
  activeBuyers: number;   // vetted buyers currently taking leads
  metrosCovered: number;
}

export const network: NetworkFacts[] = [
  { country: 'uk', activeBuyers: 0, metrosCovered: 8 },
];

export function factsFor(country: string) {
  return network.find((n) => n.country === country);
}
