// UK coverage: four nations and all nine English regions. Local pages describe
// property considerations, not guaranteed buyer availability or completion times.
export interface Region {
  slug: string;
  name: string;
  country: string;
  abbr: string;
  kind: string;
  parentSlug?: string;
  metros: string[];
  intro: string;
  facts: [string, string][];
  notes: string[];
  sources: { label: string; url: string }[];
}

export const regions: Region[] = [
  {
    "slug": "england",
    "name": "England",
    "country": "uk",
    "abbr": "",
    "kind": "Nation",
    "metros": [
      "London",
      "Birmingham",
      "Manchester",
      "Leeds",
      "Bristol",
      "Newcastle"
    ],
    "intro": "From city flats to rural homes, selling in England means checking tenure, title and your chain before choosing a cash offer.",
    "facts": [
      [
        "Legal process",
        "England and Wales conveyancing"
      ],
      [
        "Enquiries",
        "Houses and flats; condition assessed individually"
      ],
      [
        "Completion date",
        "Agreed after legal checks; not guaranteed"
      ]
    ],
    "notes": [
      "Ask your conveyancer to check the title, outstanding mortgage and any restrictions early. A cash buyer still needs legal checks; removing a mortgage application does not remove the conveyancing process.",
      "An offer in England is normally subject to contract until exchange. Agree the price, any conditions and the completion date in writing, and compare the net proceeds with an estate agent valuation."
    ],
    "sources": [
      {
        "label": "GOV.UK: conveyancing and completion",
        "url": "https://www.gov.uk/buying-a-home/transferring-ownership"
      }
    ]
  },
  {
    "slug": "north-east",
    "name": "North East England",
    "country": "uk",
    "abbr": "",
    "kind": "Region",
    "metros": [
      "Newcastle",
      "Sunderland",
      "Middlesbrough",
      "Durham",
      "Gateshead",
      "Darlington"
    ],
    "intro": "Selling a terrace in Sunderland, a Newcastle flat or a home near Durham? Include its condition, tenure and postcode when asking about a cash sale.",
    "facts": [
      [
        "Legal process",
        "England and Wales conveyancing"
      ],
      [
        "Enquiries",
        "Houses and flats; condition assessed individually"
      ],
      [
        "Completion date",
        "Agreed after legal checks; not guaranteed"
      ]
    ],
    "notes": [
      "For former mining areas and older terraces, tell your solicitor about any mining reports, structural work or shared access. These documents help a prospective buyer assess the property before making commitments.",
      "Newcastle and Gateshead flats can involve lease and management paperwork, while rural Northumberland homes may need access and boundary documents. A cash offer should account for the particular property rather than a regional average."
    ],
    "sources": [
      {
        "label": "GOV.UK: conveyancing and completion",
        "url": "https://www.gov.uk/buying-a-home/transferring-ownership"
      }
    ],
    "parentSlug": "england"
  },
  {
    "slug": "north-west",
    "name": "North West England",
    "country": "uk",
    "abbr": "",
    "kind": "Region",
    "metros": [
      "Manchester",
      "Liverpool",
      "Bolton",
      "Preston",
      "Blackpool",
      "Warrington",
      "Carlisle"
    ],
    "intro": "The North West includes Greater Manchester, Merseyside, Lancashire, Cheshire and Cumbria: each property needs its own assessment, from a city terrace to a rural home.",
    "facts": [
      [
        "Legal process",
        "England and Wales conveyancing"
      ],
      [
        "Enquiries",
        "Houses and flats; condition assessed individually"
      ],
      [
        "Completion date",
        "Agreed after legal checks; not guaranteed"
      ]
    ],
    "notes": [
      "For a tenanted Manchester or Liverpool property, prepare the tenancy agreement, rent statement and any applicable licensing documents. Selling to an investor does not remove obligations to the tenants.",
      "For a converted flat, former guest house or rural Cumbrian home, explain the current use and any planning or access restrictions. Tell us the full postcode even if your town is not listed."
    ],
    "sources": [
      {
        "label": "GOV.UK: conveyancing and completion",
        "url": "https://www.gov.uk/buying-a-home/transferring-ownership"
      }
    ],
    "parentSlug": "england"
  },
  {
    "slug": "yorkshire-and-the-humber",
    "name": "Yorkshire and the Humber",
    "country": "uk",
    "abbr": "",
    "kind": "Region",
    "metros": [
      "Leeds",
      "Sheffield",
      "Bradford",
      "Hull",
      "York",
      "Doncaster",
      "Huddersfield"
    ],
    "intro": "Request a cash offer for property across Leeds, Sheffield, Bradford, York, Hull and the surrounding Yorkshire and Humber towns and villages.",
    "facts": [
      [
        "Legal process",
        "England and Wales conveyancing"
      ],
      [
        "Enquiries",
        "Houses and flats; condition assessed individually"
      ],
      [
        "Completion date",
        "Agreed after legal checks; not guaranteed"
      ]
    ],
    "notes": [
      "Older terraces and converted properties may have shared access, leasehold arrangements or alterations that need documents. Share what you know about the building before a buyer assesses an offer.",
      "For homes near rivers or the Humber, disclose any flooding and available insurance or repair records. A buyer still needs to understand the risk even when a mortgage is not involved."
    ],
    "sources": [
      {
        "label": "GOV.UK: conveyancing and completion",
        "url": "https://www.gov.uk/buying-a-home/transferring-ownership"
      }
    ],
    "parentSlug": "england"
  },
  {
    "slug": "east-midlands",
    "name": "East Midlands",
    "country": "uk",
    "abbr": "",
    "kind": "Region",
    "metros": [
      "Nottingham",
      "Leicester",
      "Derby",
      "Northampton",
      "Lincoln",
      "Chesterfield"
    ],
    "intro": "From Nottingham and Leicester to Derbyshire villages and Lincolnshire towns, explore a cash sale alongside an ordinary open-market valuation.",
    "facts": [
      [
        "Legal process",
        "England and Wales conveyancing"
      ],
      [
        "Enquiries",
        "Houses and flats; condition assessed individually"
      ],
      [
        "Completion date",
        "Agreed after legal checks; not guaranteed"
      ]
    ],
    "notes": [
      "For student lets or a house divided into units, gather tenancy, planning and licensing records where applicable. Ask your solicitor what must transfer with the sale and whether any consents are needed.",
      "If a chain has collapsed, keep the previous survey and conveyancing paperwork available. Some documents may help the next sale, but a new buyer and solicitor will decide what checks they need."
    ],
    "sources": [
      {
        "label": "GOV.UK: conveyancing and completion",
        "url": "https://www.gov.uk/buying-a-home/transferring-ownership"
      }
    ],
    "parentSlug": "england"
  },
  {
    "slug": "west-midlands",
    "name": "West Midlands",
    "country": "uk",
    "abbr": "",
    "kind": "Region",
    "metros": [
      "Birmingham",
      "Coventry",
      "Wolverhampton",
      "Stoke-on-Trent",
      "Walsall",
      "Dudley",
      "Hereford",
      "Shrewsbury",
      "Worcester"
    ],
    "intro": "Request an introduction for a property in Birmingham, Coventry, the Black Country, Staffordshire, Shropshire, Herefordshire or Worcestershire.",
    "facts": [
      [
        "Legal process",
        "England and Wales conveyancing"
      ],
      [
        "Enquiries",
        "Houses and flats; condition assessed individually"
      ],
      [
        "Completion date",
        "Agreed after legal checks; not guaranteed"
      ]
    ],
    "notes": [
      "If the property uses non-standard construction, explain the building type and any repair certificates. Cash buyers may consider homes with construction issues, but an offer and its conditions depend on their assessment.",
      "For inherited terraces, former rentals or rural houses, prepare ownership and occupancy details as well as the address. Existing tenancy rights and title restrictions still matter in a cash sale."
    ],
    "sources": [
      {
        "label": "GOV.UK: conveyancing and completion",
        "url": "https://www.gov.uk/buying-a-home/transferring-ownership"
      }
    ],
    "parentSlug": "england"
  },
  {
    "slug": "east-of-england",
    "name": "East of England",
    "country": "uk",
    "abbr": "",
    "kind": "Region",
    "metros": [
      "Norwich",
      "Ipswich",
      "Luton",
      "Peterborough",
      "Southend-on-Sea",
      "Cambridge",
      "Colchester"
    ],
    "intro": "We accept enquiries from Essex, Suffolk, Norfolk, Cambridgeshire, Bedfordshire and Hertfordshire, including coastal, city and rural properties.",
    "facts": [
      [
        "Legal process",
        "England and Wales conveyancing"
      ],
      [
        "Enquiries",
        "Houses and flats; condition assessed individually"
      ],
      [
        "Completion date",
        "Agreed after legal checks; not guaranteed"
      ]
    ],
    "notes": [
      "Disclose any known subsidence, underpinning, flooding or coastal issues and keep engineering or insurance records available. These affect the assessment of the property even for a buyer using cash.",
      "For a village home with private drainage, shared access or agricultural restrictions, ask your solicitor which documents are needed. The property details are more useful than a broad estimate of what homes nearby sell for."
    ],
    "sources": [
      {
        "label": "GOV.UK: conveyancing and completion",
        "url": "https://www.gov.uk/buying-a-home/transferring-ownership"
      }
    ],
    "parentSlug": "england"
  },
  {
    "slug": "london",
    "name": "London",
    "country": "uk",
    "abbr": "",
    "kind": "Region",
    "metros": [
      "Inner London",
      "Outer London",
      "Croydon",
      "Barking",
      "Ealing",
      "Newham",
      "Bromley"
    ],
    "intro": "Selling a London house or flat? The remaining lease, service charges, building information and any chain can matter as much as the asking price.",
    "facts": [
      [
        "Legal process",
        "England and Wales conveyancing"
      ],
      [
        "Enquiries",
        "Houses and flats; condition assessed individually"
      ],
      [
        "Completion date",
        "Agreed after legal checks; not guaranteed"
      ]
    ],
    "notes": [
      "For leasehold flats, provide the remaining lease term, ground rent, service charge and details of planned major works. Ask a qualified solicitor for current advice on lease extensions rather than relying on a single lease-length rule.",
      "If a building has cladding or fire-safety issues, supply the reports and remediation information you have. A cash buyer may assess the risk, but neither an offer nor a rapid completion is assured."
    ],
    "sources": [
      {
        "label": "GOV.UK: conveyancing and completion",
        "url": "https://www.gov.uk/buying-a-home/transferring-ownership"
      }
    ],
    "parentSlug": "england"
  },
  {
    "slug": "south-east",
    "name": "South East England",
    "country": "uk",
    "abbr": "",
    "kind": "Region",
    "metros": [
      "Brighton",
      "Southampton",
      "Portsmouth",
      "Reading",
      "Milton Keynes",
      "Oxford",
      "Medway",
      "Guildford",
      "Canterbury"
    ],
    "intro": "Explore cash-sale options across Kent, Surrey, Sussex, Hampshire, Berkshire, Oxfordshire, Buckinghamshire and the Isle of Wight.",
    "facts": [
      [
        "Legal process",
        "England and Wales conveyancing"
      ],
      [
        "Enquiries",
        "Houses and flats; condition assessed individually"
      ],
      [
        "Completion date",
        "Agreed after legal checks; not guaranteed"
      ]
    ],
    "notes": [
      "If you are coordinating a move or replacing a failed chain, give your target date and explain any onward purchase. Ask the buyer and your solicitor whether that date is realistic before making moving arrangements.",
      "For coastal flats or converted houses, prepare lease, management and maintenance records. Island properties and rural homes are welcome as enquiries, with buyer availability checked for the specific postcode."
    ],
    "sources": [
      {
        "label": "GOV.UK: conveyancing and completion",
        "url": "https://www.gov.uk/buying-a-home/transferring-ownership"
      }
    ],
    "parentSlug": "england"
  },
  {
    "slug": "south-west",
    "name": "South West England",
    "country": "uk",
    "abbr": "",
    "kind": "Region",
    "metros": [
      "Bristol",
      "Plymouth",
      "Bournemouth",
      "Exeter",
      "Gloucester",
      "Swindon",
      "Truro",
      "Taunton"
    ],
    "intro": "We accept property enquiries across Bristol, Gloucestershire, Wiltshire, Somerset, Dorset, Devon, Cornwall and the Isles of Scilly.",
    "facts": [
      [
        "Legal process",
        "England and Wales conveyancing"
      ],
      [
        "Enquiries",
        "Houses and flats; condition assessed individually"
      ],
      [
        "Completion date",
        "Agreed after legal checks; not guaranteed"
      ]
    ],
    "notes": [
      "Older rural homes may have thatch, cob walls, private drainage or restrictions on access and use. Include these details and any building reports when requesting an assessment.",
      "For holiday lets or second homes, explain occupancy, planning restrictions and any bookings or agreements. Enquiries from coastal villages and islands are included, although finding a suitable buyer may take longer."
    ],
    "sources": [
      {
        "label": "GOV.UK: conveyancing and completion",
        "url": "https://www.gov.uk/buying-a-home/transferring-ownership"
      }
    ],
    "parentSlug": "england"
  },
  {
    "slug": "wales",
    "name": "Wales",
    "country": "uk",
    "abbr": "",
    "kind": "Nation",
    "metros": [
      "Cardiff",
      "Swansea",
      "Newport",
      "Wrexham",
      "Bangor",
      "Aberystwyth",
      "Barry",
      "Bridgend"
    ],
    "intro": "Request a cash-sale introduction anywhere in Wales, from Cardiff and Swansea to North Wales, the Valleys, rural communities and Anglesey.",
    "facts": [
      [
        "Legal process",
        "England and Wales conveyancing"
      ],
      [
        "Enquiries",
        "Houses and flats; condition assessed individually"
      ],
      [
        "Completion date",
        "Agreed after legal checks; not guaranteed"
      ]
    ],
    "notes": [
      "Wales shares the England and Wales conveyancing framework, but property purchases are subject to Welsh Land Transaction Tax rather than Stamp Duty Land Tax. Your solicitor should explain any costs relevant to your sale.",
      "For a tenanted home, holiday property or inherited house, provide the relevant occupancy and ownership documents. Ask for advice specific to Wales, particularly where letting or use restrictions affect the property."
    ],
    "sources": [
      {
        "label": "GOV.UK: conveyancing and completion",
        "url": "https://www.gov.uk/buying-a-home/transferring-ownership"
      },
      {
        "label": "Welsh Government: Land Transaction Tax",
        "url": "https://www.gov.wales/land-transaction-tax-overview"
      }
    ]
  },
  {
    "slug": "scotland",
    "name": "Scotland",
    "country": "uk",
    "abbr": "",
    "kind": "Nation",
    "metros": [
      "Glasgow",
      "Edinburgh",
      "Aberdeen",
      "Dundee",
      "Paisley",
      "Inverness",
      "Stirling",
      "Perth"
    ],
    "intro": "Explore a cash sale in Scotland, including the Central Belt, Highlands, Borders and islands, using a solicitor who understands the Scottish process.",
    "facts": [
      [
        "Legal process",
        "Scottish conveyancing and missives"
      ],
      [
        "Enquiries",
        "Houses and flats; condition assessed individually"
      ],
      [
        "Completion date",
        "Agreed after legal checks; not guaranteed"
      ]
    ],
    "notes": [
      "Scottish property contracts are formed through missives. Your solicitor should explain when the contract becomes binding and agree the date of entry; do not assume that the English exchange process applies.",
      "A Home Report is generally required when marketing a home in Scotland, with exceptions. Ask your solicitor which requirements apply to your sale, including a private cash sale. Remote and island enquiries are welcome; buyer availability and travel can affect timing."
    ],
    "sources": [
      {
        "label": "Scottish Government: selling a home and Home Reports",
        "url": "https://www.mygov.scot/sell-home/first-steps"
      }
    ]
  },
  {
    "slug": "northern-ireland",
    "name": "Northern Ireland",
    "country": "uk",
    "abbr": "",
    "kind": "Nation",
    "metros": [
      "Belfast",
      "Derry/Londonderry",
      "Lisburn",
      "Newtownabbey",
      "Bangor",
      "Armagh",
      "Newry",
      "Enniskillen",
      "Omagh"
    ],
    "intro": "We accept enquiries throughout Northern Ireland, including all six counties, Belfast, Derry/Londonderry and rural or coastal communities.",
    "facts": [
      [
        "Legal process",
        "Northern Ireland conveyancing"
      ],
      [
        "Enquiries",
        "Houses and flats; condition assessed individually"
      ],
      [
        "Completion date",
        "Agreed after legal checks; not guaranteed"
      ]
    ],
    "notes": [
      "Use a solicitor familiar with Northern Ireland conveyancing. Gather title deeds, mortgage details and any lease or ground-rent documents so your solicitor can identify issues before a completion date is agreed.",
      "For inherited or jointly owned property, establish who can authorise a sale before accepting an offer. Buyers still need title and legal checks, and a cash purchase cannot bypass missing authority or unresolved ownership."
    ],
    "sources": [
      {
        "label": "nidirect: buying and selling a home",
        "url": "https://www.nidirect.gov.uk/articles/buying-home-step-step-guide"
      }
    ]
  }
];

export function regionsFor(country: string) {
  return regions.filter((r) => r.country === country);
}

export function getRegion(country: string, slug: string) {
  return regions.find((r) => r.country === country && r.slug === slug);
}
