export interface City {
  slug: string;
  name: string;
  country: string; // country slug
  regionSlug: string;
  region: string;  // state/province/region label
  blurb: string;
  areas: string[]; // local areas — unique local content per page
}

export const cities: City[] = [
  { slug: 'birmingham', regionSlug: 'west-midlands', name: 'Birmingham', country: 'uk', region: 'West Midlands', blurb: "For Birmingham terraces, semis and flats, prepare any construction, lease or tenancy documents. A cash-buyer introduction is free, with availability checked for your postcode." , areas: ['Erdington', 'Handsworth', 'Kings Heath', 'Selly Oak', 'Solihull', 'West Bromwich'] },
  { slug: 'manchester', regionSlug: 'north-west', name: 'Manchester', country: 'uk', region: 'Greater Manchester', blurb: "For a Manchester house, converted flat or rental, provide the tenure, condition and occupancy details. Compare any cash offer with an independent open-market valuation." , areas: ['Salford', 'Stockport', 'Oldham', 'Bolton', 'Wythenshawe', 'Rochdale'] },
  { slug: 'leeds', regionSlug: 'yorkshire-and-the-humber', name: 'Leeds', country: 'uk', region: 'West Yorkshire', blurb: "For Leeds terraces and flats, mention shared access, lease arrangements and past alterations. These details help a buyer assess the property before committing to an offer." , areas: ['Headingley', 'Armley', 'Beeston', 'Morley', 'Pudsey', 'Seacroft'] },
  { slug: 'liverpool', regionSlug: 'north-west', name: 'Liverpool', country: 'uk', region: 'Merseyside', blurb: "For a Liverpool terrace, flat or rental, collect lease, tenancy and any licensing documents. An independent buyer will assess the condition and legal position before making an offer." , areas: ['Anfield', 'Toxteth', 'Walton', 'Bootle', 'Wavertree', 'Birkenhead'] },
  { slug: 'sheffield', regionSlug: 'yorkshire-and-the-humber', name: 'Sheffield', country: 'uk', region: 'South Yorkshire', blurb: "For Sheffield homes, include any building reports, occupancy details and known structural issues. A cash offer still depends on a buyer assessment and legal checks." , areas: ['Hillsborough', 'Ecclesall', 'Darnall', 'Chapeltown', 'Mosborough', 'Rotherham'] },
  { slug: 'newcastle', regionSlug: 'north-east', name: 'Newcastle', country: 'uk', region: 'Tyne and Wear', blurb: "For a Newcastle flat or house, gather title, lease and management documents where applicable. Tell us your full postcode and target moving date to discuss an introduction." , areas: ['Byker', 'Gosforth', 'Gateshead', 'Wallsend', 'Fenham', 'Jesmond'] },
  { slug: 'nottingham', regionSlug: 'east-midlands', name: 'Nottingham', country: 'uk', region: 'Nottinghamshire', blurb: "For a Nottingham home or rental, explain occupancy, any licensing requirements and the property condition. A buyer and solicitor will determine whether your preferred date is achievable." , areas: ['Bulwell', 'Carlton', 'West Bridgford', 'Arnold', 'Clifton', 'Beeston NG'] },
  { slug: 'bradford', regionSlug: 'yorkshire-and-the-humber', name: 'Bradford', country: 'uk', region: 'West Yorkshire', blurb: "For Bradford back-to-back terraces, flats and family homes, explain shared access, condition and tenure. A suitable cash buyer and an offer are subject to availability." , areas: ['Shipley', 'Keighley', 'Eccleshill', 'Great Horton', 'Idle', 'Bingley'] },
  {"slug": "edinburgh", "name": "Edinburgh", "country": "uk", "region": "City of Edinburgh", "regionSlug": "scotland", "blurb": "Edinburgh flats can involve shared repairs, factoring and common stair maintenance. Gather those records alongside the title before asking about a cash offer.", "areas": ["Leith", "Gorgie", "Corstorphine", "Portobello", "Newington", "Morningside"]},
  {"slug": "aberdeen", "name": "Aberdeen", "country": "uk", "region": "Aberdeen City", "regionSlug": "scotland", "blurb": "For an Aberdeen flat or granite house, include any common repair responsibilities, occupancy details and building reports when requesting a buyer assessment.", "areas": ["Torry", "Rosemount", "Bridge of Don", "Dyce", "Ferryhill", "Cove Bay"]},
  {"slug": "cardiff", "name": "Cardiff", "country": "uk", "region": "South Wales", "regionSlug": "wales", "blurb": "For a Cardiff terrace, Bay flat or rental property, gather lease, management and occupancy details. Welsh conveyancing and letting requirements should be checked with your solicitor.", "areas": ["Canton", "Roath", "Cathays", "Grangetown", "Llanishen", "Cardiff Bay"]},
  {"slug": "swansea", "name": "Swansea", "country": "uk", "region": "South Wales", "regionSlug": "wales", "blurb": "From Swansea terraces to Gower homes, explain the tenure, any coastal or access issues, and whether the property is occupied before requesting a cash offer.", "areas": ["Uplands", "Morriston", "Sketty", "Mumbles", "Townhill", "Gorseinon"]},
  {"slug": "belfast", "name": "Belfast", "country": "uk", "region": "Northern Ireland", "regionSlug": "northern-ireland", "blurb": "Belfast property sales use Northern Ireland conveyancing. Prepare title, mortgage and any lease or ground-rent documents for an independent solicitor to review.", "areas": ["Ballyhackamore", "Ormeau", "Stranmillis", "Falls", "Shankill", "East Belfast"]},
  {"slug": "derry", "name": "Derry/Londonderry", "country": "uk", "region": "Northern Ireland", "regionSlug": "northern-ireland", "blurb": "For a house or flat in Derry/Londonderry, confirm ownership and occupancy and speak to a Northern Ireland solicitor before agreeing a cash-sale completion date.", "areas": ["Waterside", "Cityside", "Ballyarnett", "Creggan", "Culmore", "Shantallow"]},
  {"slug": "bristol", "name": "Bristol", "country": "uk", "region": "South West England", "regionSlug": "south-west", "blurb": "Bristol flats and terraces can involve lease terms, shared access or past alterations. Include the supporting documents and your preferred moving date when asking for a cash offer.", "areas": ["Bedminster", "Bishopston", "Easton", "Fishponds", "Knowle", "St George"]},
  {"slug": "leicester", "name": "Leicester", "country": "uk", "region": "East Midlands", "regionSlug": "east-midlands", "blurb": "For a Leicester home or former rental, prepare occupancy, tenancy and alteration records. A cash offer should reflect its actual condition and the legal work needed.", "areas": ["Clarendon Park", "Evington", "Belgrave", "Braunstone", "Beaumont Leys", "Knighton"]},
  {"slug": "norwich", "name": "Norwich", "country": "uk", "region": "East of England", "regionSlug": "east-of-england", "blurb": "Norwich city homes and nearby Norfolk properties can have different access, drainage and conservation considerations. Include known restrictions when requesting a cash-sale introduction.", "areas": ["Eaton", "Thorpe Hamlet", "Lakenham", "Mile Cross", "Sprowston", "Hellesdon"]},
  {"slug": "southampton", "name": "Southampton", "country": "uk", "region": "South East England", "regionSlug": "south-east", "blurb": "For a Southampton flat or house, collect any leasehold management, service-charge and building documents. A buyer still needs those checks when buying with cash.", "areas": ["Shirley", "Portswood", "Bitterne", "Woolston", "Millbrook", "St Denys"]},
  {"slug": "glasgow", "name": "Glasgow", "country": "uk", "region": "Glasgow City", "regionSlug": "scotland", "blurb": "For a Glasgow tenement flat or house, prepare factoring, common repair and title information. A Scottish solicitor should explain Home Report requirements and missives before you commit.", "areas": ["Partick", "Shawlands", "Dennistoun", "Govan", "Maryhill", "Pollokshields"]},
];

export function citiesFor(country: string) {
  return cities.filter((c) => c.country === country);
}

export function cityLabel(c: City) {
  return c.name;
}
