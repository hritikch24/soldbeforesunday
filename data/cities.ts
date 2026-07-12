export interface City {
  slug: string;
  name: string;
  country: string; // country slug
  region: string;  // state/province/region label
  blurb: string;
}

export const cities: City[] = [
  // US — mid-size metros with strong investor activity
  { slug: 'indianapolis', name: 'Indianapolis', country: 'us', region: 'Indiana', blurb: 'From Fountain Square fixer-uppers to inherited properties on the east side, Indianapolis has one of the most active cash-buyer markets in the Midwest.' },
  { slug: 'columbus', name: 'Columbus', country: 'us', region: 'Ohio', blurb: 'Columbus cash buyers are actively purchasing in every condition, from Hilltop to Linden — including properties that would never pass a conventional inspection.' },
  { slug: 'kansas-city', name: 'Kansas City', country: 'us', region: 'Missouri', blurb: 'On both sides of the state line, Kansas City investors buy houses as-is — inherited, fire-damaged, tenant-occupied or behind on payments.' },
  { slug: 'memphis', name: 'Memphis', country: 'us', region: 'Tennessee', blurb: 'Memphis is one of America’s biggest investor markets — cash offers move fast on houses in any condition, in any zip code.' },
  { slug: 'louisville', name: 'Louisville', country: 'us', region: 'Kentucky', blurb: 'Louisville cash buyers close quickly on estates, distressed properties and tired rentals across Jefferson County.' },
  { slug: 'oklahoma-city', name: 'Oklahoma City', country: 'us', region: 'Oklahoma', blurb: 'OKC’s cash-buyer network covers the whole metro — storm-damaged, inherited or simply unwanted, houses sell in days here.' },
  { slug: 'birmingham-al', name: 'Birmingham', country: 'us', region: 'Alabama', blurb: 'Birmingham investors buy as-is across the metro, from Ensley to Center Point — no repairs, no commissions, no waiting.' },
  { slug: 'cleveland', name: 'Cleveland', country: 'us', region: 'Ohio', blurb: 'Cleveland is a national hotspot for cash property buying — even houses needing full rehab get fair offers fast.' },
  { slug: 'milwaukee', name: 'Milwaukee', country: 'us', region: 'Wisconsin', blurb: 'Milwaukee cash buyers purchase duplexes, inherited homes and problem rentals across the county, closing on your timeline.' },
  { slug: 'tulsa', name: 'Tulsa', country: 'us', region: 'Oklahoma', blurb: 'Tulsa’s investor market moves quickly — fair cash offers on houses in any condition, any neighborhood.' },
  { slug: 'st-louis', name: 'St. Louis', country: 'us', region: 'Missouri', blurb: 'St. Louis cash buyers work both the city and the county, buying as-is where conventional sales stall.' },
  { slug: 'cincinnati', name: 'Cincinnati', country: 'us', region: 'Ohio', blurb: 'From Price Hill to Norwood, Cincinnati investors make fast cash offers on properties in every condition.' },
  // UK
  { slug: 'birmingham', name: 'Birmingham', country: 'uk', region: 'West Midlands', blurb: 'Birmingham’s cash house buyers complete chain-free purchases across the West Midlands — terraces, semis and flats in any condition.' },
  { slug: 'manchester', name: 'Manchester', country: 'uk', region: 'Greater Manchester', blurb: 'Sell fast anywhere in Greater Manchester — cash buyers purchase problem properties, inherited homes and broken-chain sales.' },
  { slug: 'leeds', name: 'Leeds', country: 'uk', region: 'West Yorkshire', blurb: 'Leeds cash buyers move quickly on houses across West Yorkshire, including properties estate agents struggle to shift.' },
  { slug: 'liverpool', name: 'Liverpool', country: 'uk', region: 'Merseyside', blurb: 'From Anfield terraces to Wirral semis, Liverpool cash buyers complete in weeks, not months.' },
  { slug: 'sheffield', name: 'Sheffield', country: 'uk', region: 'South Yorkshire', blurb: 'Sheffield sellers use cash buyers to skip the chain — any condition, any postcode in South Yorkshire.' },
  { slug: 'newcastle', name: 'Newcastle', country: 'uk', region: 'Tyne and Wear', blurb: 'Newcastle cash buyers purchase across the North East, from Byker to Gateshead, with completion on your date.' },
  { slug: 'nottingham', name: 'Nottingham', country: 'uk', region: 'Nottinghamshire', blurb: 'Nottingham’s cash-buying market covers the whole county — inherited, tenanted or in need of full modernisation.' },
  { slug: 'bradford', name: 'Bradford', country: 'uk', region: 'West Yorkshire', blurb: 'Bradford sellers get genuine cash offers on houses in any state — no agent fees, no chain, no fall-throughs.' },
  // Canada
  { slug: 'toronto', name: 'Toronto', country: 'ca', region: 'Ontario', blurb: 'GTA cash buyers purchase condos, semis and detached homes as-is — including power-of-sale situations and inherited properties.' },
  { slug: 'calgary', name: 'Calgary', country: 'ca', region: 'Alberta', blurb: 'Calgary’s cash buyers close fast on homes in any condition, from Forest Lawn to Airdrie.' },
  { slug: 'edmonton', name: 'Edmonton', country: 'ca', region: 'Alberta', blurb: 'Edmonton investors buy as-is across the metro — no realtor commissions, no repairs, no conditions.' },
  { slug: 'winnipeg', name: 'Winnipeg', country: 'ca', region: 'Manitoba', blurb: 'Winnipeg has one of Canada’s most active cash-buyer markets — fair offers on houses that need work.' },
  { slug: 'ottawa', name: 'Ottawa', country: 'ca', region: 'Ontario', blurb: 'Ottawa cash buyers purchase across the capital region, closing on your schedule with no commissions.' },
  { slug: 'hamilton', name: 'Hamilton', country: 'ca', region: 'Ontario', blurb: 'Hamilton’s investor market moves quickly — cash offers on wartime houses, rentals and estates alike.' },
  // Australia
  { slug: 'sydney', name: 'Sydney', country: 'au', region: 'NSW', blurb: 'Sydney cash buyers purchase units and houses across the metro — deceased estates, mortgagee situations and properties needing work.' },
  { slug: 'melbourne', name: 'Melbourne', country: 'au', region: 'VIC', blurb: 'Melbourne’s cash-buyer network covers the whole metro, offering fast settlement on homes in any condition.' },
  { slug: 'brisbane', name: 'Brisbane', country: 'au', region: 'QLD', blurb: 'Brisbane cash buyers move fast on Queenslanders, units and inherited properties — no agents, no open homes.' },
  { slug: 'perth', name: 'Perth', country: 'au', region: 'WA', blurb: 'Perth sellers use cash buyers to skip months of home opens — fair offers, fast settlement, any condition.' },
  { slug: 'adelaide', name: 'Adelaide', country: 'au', region: 'SA', blurb: 'Adelaide’s cash buyers purchase across the metro with settlement on your terms.' },
  { slug: 'gold-coast', name: 'Gold Coast', country: 'au', region: 'QLD', blurb: 'Gold Coast cash buyers close quickly on units and houses from Coolangatta to Coomera.' },
];

export function citiesFor(country: string) {
  return cities.filter((c) => c.country === country);
}
