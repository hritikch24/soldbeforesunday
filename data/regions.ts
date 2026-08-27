// ─────────────────────────────────────────────────────────────────────────────
// State / province / region landing pages.
//
// WHY THIS FILE EXISTS: 12 city pages covered ~6% of the US population. Property
// search in the US, UK and Canada is overwhelmingly state/county-scoped
// ("sell my house fast in ohio"), so this layer completes national coverage.
//
// EVERY REGION MUST BE GENUINELY DIFFERENT. Google de-indexes template farms.
// The `facts` here are real, stable, legally-grounded differences (foreclosure
// route, who runs the closing, cooling-off periods, transfer taxes) — not
// spun synonyms. If you add a region, add real facts or don't add it at all.
//
// Facts are orientation only, not legal advice; every page renders that caveat.
// ─────────────────────────────────────────────────────────────────────────────

export interface Region {
  slug: string;
  name: string;
  country: string;        // country slug
  abbr: string;           // TX, ON, NSW — '' where not applicable
  kind: string;           // State | Province | Territory | Region | Nation
  metros: string[];       // real markets inside the region
  intro: string;          // unique opening line, used in hero + meta description
  facts: [string, string][];
  notes: string[];        // 2 unique paragraphs of local substance
}

// ── UNITED STATES ────────────────────────────────────────────────────────────
// Differentiators: judicial vs non-judicial foreclosure (drives how much time a
// homeowner in default actually has), attorney-close vs title/escrow-close, and
// redemption periods. These materially change the advice, so they earn a page.

const us: Region[] = [
  {
    slug: 'alabama', name: 'Alabama', country: 'us', abbr: 'AL', kind: 'State',
    metros: ['Birmingham', 'Montgomery', 'Mobile', 'Huntsville', 'Tuscaloosa'],
    intro: 'Alabama is a non-judicial foreclosure state, so a lender can move from default to auction faster than in most of the country — which is exactly why a cash sale timeline matters here.',
    facts: [
      ['Foreclosure route', 'Non-judicial (power of sale) — no court case required'],
      ['Typical speed to auction', 'Often 60–90 days from acceleration'],
      ['Closing handled by', 'Attorney'],
      ['Redemption after sale', 'Up to 1 year for owner-occupants'],
    ],
    notes: [
      'Because Alabama lenders can foreclose without filing suit, the window between falling behind and losing the property is short. Sellers who act while they still hold title keep any equity; those who wait for the auction usually do not.',
      'Birmingham and Montgomery both have deep as-is investor pools, and Alabama\'s statutory right of redemption means buyers price carefully — expect a serious buyer to want clean title work and a full payoff figure early.',
    ],
  },
  {
    slug: 'alaska', name: 'Alaska', country: 'us', abbr: 'AK', kind: 'State',
    metros: ['Anchorage', 'Fairbanks', 'Juneau', 'Wasilla', 'Kenai'],
    intro: 'Alaska combines a small, seasonal buyer pool with non-judicial foreclosure, so properties outside Anchorage can sit for months on the open market while the clock runs.',
    facts: [
      ['Foreclosure route', 'Non-judicial deed of trust sale is standard'],
      ['Typical speed to auction', 'Roughly 90–120 days'],
      ['Closing handled by', 'Title and escrow company'],
      ['Local factor', 'Winter listing season is effectively dead outside urban hubs'],
    ],
    notes: [
      'Conventional sales in Alaska are strongly seasonal. A house listed in November in Fairbanks may see almost no showings until spring, which is the single biggest reason Alaskan sellers on a deadline look for a cash buyer instead.',
      'Remote and off-road properties are difficult to finance conventionally, so buyers who do not need a mortgage are often the only realistic route for cabins, borough parcels and homes with unconventional utilities.',
    ],
  },
  {
    slug: 'arizona', name: 'Arizona', country: 'us', abbr: 'AZ', kind: 'State',
    metros: ['Phoenix', 'Tucson', 'Mesa', 'Chandler', 'Glendale', 'Yuma'],
    intro: 'Arizona runs one of the fastest non-judicial foreclosure processes in the country — a trustee sale can be scheduled roughly 90 days after the notice is recorded.',
    facts: [
      ['Foreclosure route', 'Non-judicial trustee sale'],
      ['Minimum notice before sale', '90 days from recorded notice'],
      ['Closing handled by', 'Title and escrow company'],
      ['Redemption after sale', 'None following a trustee sale'],
    ],
    notes: [
      'No post-sale redemption means once the trustee sale happens in Arizona, it is genuinely over. Sellers in default have a hard deadline rather than a soft one, and cash buyers routinely close inside it.',
      'Phoenix has one of the largest investor markets in the US, with active buyers for everything from Maryvale rentals to unfinished renovations. Tucson and Yuma are thinner but still liquid for correctly priced as-is stock.',
    ],
  },
  {
    slug: 'arkansas', name: 'Arkansas', country: 'us', abbr: 'AR', kind: 'State',
    metros: ['Little Rock', 'Fayetteville', 'Fort Smith', 'Springdale', 'Jonesboro'],
    intro: 'Arkansas allows both judicial and non-judicial foreclosure, and lenders overwhelmingly choose the statutory non-judicial route because it is quicker.',
    facts: [
      ['Foreclosure route', 'Both available; non-judicial is standard'],
      ['Typical speed to auction', 'Around 4 months non-judicially'],
      ['Closing handled by', 'Title company, attorney optional'],
      ['Local factor', 'Northwest Arkansas growth vs. flat Delta markets'],
    ],
    notes: [
      'Arkansas is really two markets. Northwest Arkansas around Fayetteville and Springdale has sustained job-driven demand, while much of the Delta and south of the state has thin buyer depth where an as-is cash offer may beat a listing that never gets an offer.',
      'Little Rock investors buy across condition tiers, including fire-damaged and long-vacant houses that conventional lenders will not touch.',
    ],
  },
  {
    slug: 'california', name: 'California', country: 'us', abbr: 'CA', kind: 'State',
    metros: ['Los Angeles', 'San Diego', 'San Jose', 'Fresno', 'Sacramento', 'Bakersfield', 'Riverside'],
    intro: 'California is a non-judicial foreclosure state with high equity levels, which means distressed sellers here usually have real money to protect rather than just a debt to escape.',
    facts: [
      ['Foreclosure route', 'Non-judicial trustee sale'],
      ['Typical speed to auction', 'Around 200+ days including notice periods'],
      ['Closing handled by', 'Escrow company'],
      ['Key rule', 'Homeowner Bill of Rights restricts dual tracking'],
    ],
    notes: [
      'Equity is the defining California fact. A homeowner three payments behind in Riverside or Bakersfield often still has six figures of equity, and the entire point of selling before the trustee sale is keeping it rather than surrendering it at auction.',
      'Transfer taxes vary sharply by city — Los Angeles and San Francisco levy their own on top of county rates. A serious cash buyer will name who pays what up front rather than discovering it in escrow.',
    ],
  },
  {
    slug: 'colorado', name: 'Colorado', country: 'us', abbr: 'CO', kind: 'State',
    metros: ['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins', 'Pueblo', 'Lakewood'],
    intro: 'Colorado is unusual: foreclosures run through a county Public Trustee rather than a private trustee or a court, a system almost unique to the state.',
    facts: [
      ['Foreclosure route', 'Non-judicial via county Public Trustee'],
      ['Typical speed to auction', 'Roughly 110–125 days'],
      ['Closing handled by', 'Title company'],
      ['Cure right', 'Borrower may cure up to 15 days before the sale'],
    ],
    notes: [
      'The Public Trustee system gives Colorado homeowners a clearly documented cure deadline. Knowing that exact date is what determines whether a fast sale is still possible or whether the opportunity has closed.',
      'Denver and Fort Collins are competitive enough that even dated houses attract retail interest, so a cash offer competes on certainty and speed rather than on being the only option. Pueblo and the eastern plains are where as-is buyers matter most.',
    ],
  },
  {
    slug: 'connecticut', name: 'Connecticut', country: 'us', abbr: 'CT', kind: 'State',
    metros: ['Bridgeport', 'New Haven', 'Hartford', 'Stamford', 'Waterbury', 'Norwalk'],
    intro: 'Connecticut still uses strict foreclosure, a rare process where the court can transfer title directly to the lender without any auction at all.',
    facts: [
      ['Foreclosure route', 'Judicial — including strict foreclosure'],
      ['Typical timeline', 'Often 12+ months through the courts'],
      ['Closing handled by', 'Attorney (required)'],
      ['Unusual feature', 'Title can pass to the lender with no sale'],
    ],
    notes: [
      'Strict foreclosure means there may be no auction proceeds to claim any surplus from. If a Connecticut homeowner has equity, selling before law days expire is the only reliable way to convert it to cash.',
      'The long judicial timeline cuts both ways: it gives genuine breathing room to arrange a sale, but the accumulating fees and interest quietly erode whatever equity is there. Connecticut closings are attorney-run, so expect one on both sides.',
    ],
  },
  {
    slug: 'delaware', name: 'Delaware', country: 'us', abbr: 'DE', kind: 'State',
    metros: ['Wilmington', 'Dover', 'Newark', 'Middletown', 'Smyrna'],
    intro: 'Delaware foreclosures go through the courts via a scire facias action, making the process slower and more formal than in neighbouring Maryland.',
    facts: [
      ['Foreclosure route', 'Judicial (scire facias)'],
      ['Typical timeline', 'Commonly 8–12 months'],
      ['Closing handled by', 'Attorney'],
      ['Transfer tax', 'Among the highest in the US at up to 4%'],
    ],
    notes: [
      'Delaware\'s realty transfer tax is high enough to change the maths on a sale, and who pays which half is negotiable. Get it stated in writing before agreeing a number.',
      'Wilmington has steady investor demand for row homes and older stock; downstate Sussex County is dominated by coastal and retirement demand with a very different buyer profile.',
    ],
  },
  {
    slug: 'florida', name: 'Florida', country: 'us', abbr: 'FL', kind: 'State',
    metros: ['Jacksonville', 'Miami', 'Tampa', 'Orlando', 'St. Petersburg', 'Fort Lauderdale', 'Cape Coral'],
    intro: 'Florida is a judicial foreclosure state with an unusually large as-is investor market, plus insurance and condo issues that stop conventional sales dead.',
    facts: [
      ['Foreclosure route', 'Judicial — lender must file suit'],
      ['Typical timeline', 'Often 8–14 months'],
      ['Closing handled by', 'Title company or attorney'],
      ['Local blocker', 'Insurance costs and condo milestone assessments'],
    ],
    notes: [
      'Florida has a problem conventional buyers cannot solve: properties that are uninsurable, have open permits, or sit in condo buildings facing structural assessments simply will not pass a mortgage lender. Cash buyers are frequently the only route.',
      'Hurricane damage, older roofs and 40-year recertification requirements push a steady stream of otherwise sound houses into the as-is market. Investor depth in Tampa, Orlando and Jacksonville is among the best in the country.',
    ],
  },
  {
    slug: 'georgia', name: 'Georgia', country: 'us', abbr: 'GA', kind: 'State',
    metros: ['Atlanta', 'Augusta', 'Columbus', 'Macon', 'Savannah', 'Athens'],
    intro: 'Georgia has one of the fastest foreclosure processes in the country — a non-judicial sale can complete in as little as 60 days from default.',
    facts: [
      ['Foreclosure route', 'Non-judicial (power of sale)'],
      ['Typical speed to auction', 'As little as 60 days'],
      ['Closing handled by', 'Attorney (required)'],
      ['Auction schedule', 'First Tuesday of the month, county courthouse'],
    ],
    notes: [
      'Georgia\'s first-Tuesday auction calendar makes the deadline unusually concrete. Homeowners know the exact date their house is scheduled to be sold, and that date is often much sooner than they expect.',
      'Metro Atlanta has one of the deepest cash-buyer markets in the United States across every price tier. Outside the metro, Macon, Augusta and Columbus all have active as-is buyers for inherited and tenant-occupied stock.',
    ],
  },
  {
    slug: 'hawaii', name: 'Hawaii', country: 'us', abbr: 'HI', kind: 'State',
    metros: ['Honolulu', 'Pearl City', 'Hilo', 'Kailua', 'Kahului'],
    intro: 'Hawaii combines the highest median values in the country with leasehold land, ohana units and lava-zone designations that routinely block conventional financing.',
    facts: [
      ['Foreclosure route', 'Primarily judicial'],
      ['Typical timeline', 'Often well over a year'],
      ['Closing handled by', 'Escrow company'],
      ['Local blocker', 'Leasehold tenure and lava zone ratings'],
    ],
    notes: [
      'Leasehold property in Hawaii is difficult to sell conventionally as the lease term shortens, and mortgage lenders grow unwilling as expiry approaches. Cash buyers who understand the tenure are often the practical market.',
      'On Hawai\'i Island, lava zone classification affects both insurance and financing. Properties in Zones 1 and 2 frequently trade cash only, regardless of condition.',
    ],
  },
  {
    slug: 'idaho', name: 'Idaho', country: 'us', abbr: 'ID', kind: 'State',
    metros: ['Boise', 'Meridian', 'Nampa', 'Idaho Falls', 'Pocatello', 'Coeur d’Alene'],
    intro: 'Idaho uses non-judicial deed of trust sales with a firm 120-day notice period, giving sellers a well-defined window to act.',
    facts: [
      ['Foreclosure route', 'Non-judicial deed of trust sale'],
      ['Minimum notice', '120 days'],
      ['Closing handled by', 'Title and escrow company'],
      ['Redemption after sale', 'None after a trustee sale'],
    ],
    notes: [
      'Boise and Meridian absorbed enormous in-migration and have real retail depth, so a fast sale there is about certainty rather than lack of buyers. Southern and eastern Idaho are considerably thinner.',
      'Rural Idaho parcels with wells, septic systems and outbuildings often fail conventional appraisal conditions, which is where cash purchase becomes the practical path.',
    ],
  },
  {
    slug: 'illinois', name: 'Illinois', country: 'us', abbr: 'IL', kind: 'State',
    metros: ['Chicago', 'Aurora', 'Rockford', 'Joliet', 'Naperville', 'Peoria', 'Springfield'],
    intro: 'Illinois is a judicial foreclosure state with a statutory reinstatement and redemption structure, and Cook County adds its own transfer taxes and inspection rules.',
    facts: [
      ['Foreclosure route', 'Judicial'],
      ['Typical timeline', 'Commonly 12–18 months'],
      ['Closing handled by', 'Attorney'],
      ['Local factor', 'Municipal transfer stamps and pre-sale inspections'],
    ],
    notes: [
      'Many Illinois municipalities require a pre-sale inspection or a zoning certificate before transfer stamps are issued. This trips up sellers repeatedly and is one of the more common reasons a conventional sale stalls at the last moment.',
      'Chicago has enormous investor depth for two-flats, three-flats and bungalows in any condition. Downstate markets like Peoria, Rockford and Decatur have far fewer retail buyers, which is where an as-is offer often beats a listing outright.',
    ],
  },
  {
    slug: 'indiana', name: 'Indiana', country: 'us', abbr: 'IN', kind: 'State',
    metros: ['Indianapolis', 'Fort Wayne', 'Evansville', 'South Bend', 'Carmel', 'Bloomington'],
    intro: 'Indiana requires judicial foreclosure and imposes a three-month waiting period before a lender can even request a sale, giving homeowners more room than most states.',
    facts: [
      ['Foreclosure route', 'Judicial'],
      ['Statutory wait before sale', '3 months after judgment is sought'],
      ['Closing handled by', 'Title company'],
      ['Typical timeline', 'Around 6–12 months'],
    ],
    notes: [
      'The mandatory waiting period means Indiana homeowners in default usually have genuine time to arrange a sale on their own terms rather than being rushed to auction.',
      'Indianapolis is one of the most active investor markets in the Midwest and is already covered in depth on our city page. Fort Wayne, Evansville and South Bend have similar as-is demand at lower price points.',
    ],
  },
  {
    slug: 'iowa', name: 'Iowa', country: 'us', abbr: 'IA', kind: 'State',
    metros: ['Des Moines', 'Cedar Rapids', 'Davenport', 'Sioux City', 'Iowa City', 'Waterloo'],
    intro: 'Iowa is primarily judicial, but uniquely allows a borrower to waive the redemption period in exchange for a faster, cleaner resolution.',
    facts: [
      ['Foreclosure route', 'Judicial (non-judicial alternative exists)'],
      ['Typical timeline', 'Around 6–8 months'],
      ['Closing handled by', 'Attorney title opinion is standard'],
      ['Unusual feature', 'Redemption period can be waived by agreement'],
    ],
    notes: [
      'Iowa uses attorney title opinions rather than title insurance in many transactions, which is unlike most of the country and worth knowing before you agree a closing timeline with any buyer.',
      'Des Moines has steady investor activity, while smaller river and rural markets can be slow to move conventionally — particularly older farmhouses needing mechanical updates.',
    ],
  },
  {
    slug: 'kansas', name: 'Kansas', country: 'us', abbr: 'KS', kind: 'State',
    metros: ['Wichita', 'Overland Park', 'Kansas City KS', 'Topeka', 'Olathe', 'Lawrence'],
    intro: 'Kansas is a judicial foreclosure state with an unusually long redemption period — up to twelve months for many owner-occupants after the sale.',
    facts: [
      ['Foreclosure route', 'Judicial'],
      ['Redemption after sale', 'Commonly up to 12 months'],
      ['Closing handled by', 'Title company'],
      ['Typical timeline', 'Roughly 4–6 months to sale'],
    ],
    notes: [
      'The long Kansas redemption period makes auction purchases less attractive to investors, which concentrates cash-buyer interest on pre-foreclosure sales negotiated directly with the owner.',
      'Wichita has a well-established as-is market. The Johnson County suburbs are retail-driven and generally sell conventionally unless condition is a genuine obstacle.',
    ],
  },
  {
    slug: 'kentucky', name: 'Kentucky', country: 'us', abbr: 'KY', kind: 'State',
    metros: ['Louisville', 'Lexington', 'Bowling Green', 'Owensboro', 'Covington', 'Richmond'],
    intro: 'Kentucky requires judicial foreclosure and applies a court appraisal rule: if the property sells for less than two-thirds of appraised value, the owner gets a redemption right.',
    facts: [
      ['Foreclosure route', 'Judicial'],
      ['Typical timeline', 'Around 6–12 months'],
      ['Closing handled by', 'Attorney'],
      ['Two-thirds rule', 'Sale under 2/3 appraisal triggers 1-year redemption'],
    ],
    notes: [
      'Kentucky\'s two-thirds appraisal rule means lowball auction results can be partially undone, which pushes serious buyers toward negotiating directly with owners before the sale is ever scheduled.',
      'Louisville is covered on its own city page. Eastern Kentucky and the smaller river towns have thin retail demand where an as-is offer is frequently the only firm number a seller will see.',
    ],
  },
  {
    slug: 'louisiana', name: 'Louisiana', country: 'us', abbr: 'LA', kind: 'State',
    metros: ['New Orleans', 'Baton Rouge', 'Shreveport', 'Lafayette', 'Lake Charles', 'Kenner'],
    intro: 'Louisiana runs on civil law rather than common law, uses executory process for foreclosure, and has forced heirship rules that complicate inherited property more than anywhere else in the US.',
    facts: [
      ['Foreclosure route', 'Judicial — executory process, can be rapid'],
      ['Legal system', 'Civil law (Napoleonic), not common law'],
      ['Closing handled by', 'Notary or attorney'],
      ['Inheritance', 'Succession required; forced heirship can apply'],
    ],
    notes: [
      'Inherited property in Louisiana usually cannot be sold until a succession is opened and completed, and co-ownership among heirs is common. Buyers experienced with Louisiana successions handle this routinely; those from out of state often cannot.',
      'Flood zone designation and insurance availability drive value across South Louisiana as much as condition does. Properties with repeated claims frequently trade cash only.',
    ],
  },
  {
    slug: 'maine', name: 'Maine', country: 'us', abbr: 'ME', kind: 'State',
    metros: ['Portland', 'Lewiston', 'Bangor', 'Auburn', 'Biddeford', 'Augusta'],
    intro: 'Maine requires judicial foreclosure with mandatory mediation, producing one of the longest foreclosure timelines in the country.',
    facts: [
      ['Foreclosure route', 'Judicial with court-ordered mediation'],
      ['Typical timeline', 'Frequently 18+ months'],
      ['Closing handled by', 'Attorney'],
      ['Local factor', 'Heating systems and seasonal demand'],
    ],
    notes: [
      'Maine\'s mediation requirement gives homeowners genuine time, but it also means arrears build for a very long period. Selling early preserves far more equity than fighting to the end of the process.',
      'Older housing stock with oil heat, knob-and-tube wiring or failing septic is common outside Portland and routinely fails conventional lender conditions.',
    ],
  },
  {
    slug: 'maryland', name: 'Maryland', country: 'us', abbr: 'MD', kind: 'State',
    metros: ['Baltimore', 'Columbia', 'Germantown', 'Silver Spring', 'Waldorf', 'Frederick'],
    intro: 'Maryland uses a court-supervised power of sale, and Baltimore City has one of the largest concentrations of vacant and inherited row homes in the country.',
    facts: [
      ['Foreclosure route', 'Court-supervised power of sale'],
      ['Pre-file requirement', 'Loss mitigation must be offered first'],
      ['Closing handled by', 'Attorney or title company'],
      ['Local factor', 'Baltimore vacant property registration and citations'],
    ],
    notes: [
      'Baltimore vacant house notices and accumulated citations attach to the property and must be resolved at closing. Sellers regularly discover this only when a conventional buyer walks away.',
      'Ground rent is a Maryland peculiarity that surprises out-of-state buyers and can complicate title. An experienced local cash buyer will already know how to handle it.',
    ],
  },
  {
    slug: 'massachusetts', name: 'Massachusetts', country: 'us', abbr: 'MA', kind: 'State',
    metros: ['Boston', 'Worcester', 'Springfield', 'Cambridge', 'Lowell', 'Brockton', 'New Bedford'],
    intro: 'Massachusetts is non-judicial despite its reputation, and it is a strict attorney-closing state with Title 5 septic rules that stop suburban sales cold.',
    facts: [
      ['Foreclosure route', 'Non-judicial (power of sale)'],
      ['Typical timeline', 'Roughly 6–12 months with notice requirements'],
      ['Closing handled by', 'Attorney (required)'],
      ['Local blocker', 'Title 5 septic inspection required on transfer'],
    ],
    notes: [
      'Title 5 requires a passing septic inspection before most transfers outside sewered areas, and a failed system can mean a five-figure replacement. This is one of the most common reasons Massachusetts sellers turn to as-is buyers.',
      'Three-deckers in Worcester, Brockton and New Bedford have deep investor demand in any condition, including long-vacant and fire-damaged buildings.',
    ],
  },
  {
    slug: 'michigan', name: 'Michigan', country: 'us', abbr: 'MI', kind: 'State',
    metros: ['Detroit', 'Grand Rapids', 'Warren', 'Sterling Heights', 'Lansing', 'Ann Arbor', 'Flint'],
    intro: 'Michigan uses fast non-judicial foreclosure by advertisement, then grants a six-month redemption period after the sale — an unusual sequence worth understanding.',
    facts: [
      ['Foreclosure route', 'Non-judicial, by advertisement'],
      ['Typical speed to sale', 'Around 60–90 days'],
      ['Redemption after sale', 'Commonly 6 months'],
      ['Closing handled by', 'Title company'],
    ],
    notes: [
      'The Michigan sequence catches people out: the sheriff\'s sale happens quickly, but you may remain in the property during redemption. Selling your redemption interest is possible and is a genuine option many owners never hear about.',
      'Detroit and Flint have exceptional as-is buyer depth, including for properties with tax arrears or scrapping damage. Grand Rapids and Ann Arbor are retail-driven and much stronger conventionally.',
    ],
  },
  {
    slug: 'minnesota', name: 'Minnesota', country: 'us', abbr: 'MN', kind: 'State',
    metros: ['Minneapolis', 'St. Paul', 'Rochester', 'Duluth', 'Bloomington', 'Brooklyn Park'],
    intro: 'Minnesota foreclosures are non-judicial by advertisement, and the state grants a substantial post-sale redemption period of six to twelve months.',
    facts: [
      ['Foreclosure route', 'Non-judicial, by advertisement'],
      ['Redemption after sale', 'Typically 6 months, sometimes 12'],
      ['Closing handled by', 'Title company'],
      ['Local factor', 'Truth in Housing inspections in Minneapolis and St. Paul'],
    ],
    notes: [
      'Minneapolis and St. Paul both require a Truth in Housing disclosure report before listing, which surfaces defects publicly and often shrinks the retail buyer pool for older houses.',
      'The long redemption period means investors buying at auction take on real risk, so most active buyers prefer to deal directly with owners before the sale date.',
    ],
  },
  {
    slug: 'mississippi', name: 'Mississippi', country: 'us', abbr: 'MS', kind: 'State',
    metros: ['Jackson', 'Gulfport', 'Southaven', 'Hattiesburg', 'Biloxi', 'Meridian'],
    intro: 'Mississippi has one of the quickest non-judicial foreclosure processes in the country, with sales possible within roughly 60 days of notice.',
    facts: [
      ['Foreclosure route', 'Non-judicial (power of sale)'],
      ['Typical speed to auction', 'As little as 60 days'],
      ['Closing handled by', 'Attorney'],
      ['Redemption after sale', 'None'],
    ],
    notes: [
      'With no redemption right and a fast timeline, Mississippi homeowners have less margin for delay than almost anywhere else. Acting while you still hold title is the whole game.',
      'Coastal counties carry high wind and flood insurance costs that suppress conventional demand. Jackson and the Delta have thin retail markets where as-is buyers set the realistic price.',
    ],
  },
  {
    slug: 'missouri', name: 'Missouri', country: 'us', abbr: 'MO', kind: 'State',
    metros: ['Kansas City', 'St. Louis', 'Springfield', 'Columbia MO', 'Independence', 'Lee’s Summit'],
    intro: 'Missouri is a fast non-judicial state where a trustee sale can occur roughly three weeks after notice, one of the shortest windows in the US.',
    facts: [
      ['Foreclosure route', 'Non-judicial trustee sale'],
      ['Notice before sale', 'As short as 20 days'],
      ['Closing handled by', 'Title company'],
      ['Redemption after sale', 'Limited, and rarely available in practice'],
    ],
    notes: [
      'Missouri\'s twenty-day notice is brutally short. By the time many homeowners understand what the notice means, there is very little time left, which is why speed of offer matters more here than in most states.',
      'Kansas City and St. Louis both have their own city pages and deep investor networks. Springfield and the smaller Ozark markets have active as-is buyers at lower price points.',
    ],
  },
  {
    slug: 'montana', name: 'Montana', country: 'us', abbr: 'MT', kind: 'State',
    metros: ['Billings', 'Missoula', 'Great Falls', 'Bozeman', 'Butte', 'Helena'],
    intro: 'Montana uses the Small Tract Financing Act for non-judicial sales on parcels under 40 acres, with a firm 120-day notice period.',
    facts: [
      ['Foreclosure route', 'Non-judicial under Small Tract Financing Act'],
      ['Minimum notice', '120 days'],
      ['Closing handled by', 'Title and escrow company'],
      ['Acreage limit', 'Non-judicial route capped at 40 acres'],
    ],
    notes: [
      'Parcels above forty acres fall outside the non-judicial route in Montana and must go through the courts, which changes the timeline substantially for ranch and rural property.',
      'Bozeman and Missoula have strong retail demand, while Great Falls, Butte and the eastern Hi-Line are far thinner markets where as-is buyers are often the practical option.',
    ],
  },
  {
    slug: 'nebraska', name: 'Nebraska', country: 'us', abbr: 'NE', kind: 'State',
    metros: ['Omaha', 'Lincoln', 'Bellevue', 'Grand Island', 'Kearney', 'Fremont'],
    intro: 'Nebraska allows non-judicial trust deed sales and imposes some of the highest effective property tax rates in the country, which weighs on holding costs.',
    facts: [
      ['Foreclosure route', 'Non-judicial trust deed sale, or judicial'],
      ['Typical timeline', 'Roughly 4–6 months'],
      ['Closing handled by', 'Title company'],
      ['Local factor', 'High property tax burden raises carrying cost'],
    ],
    notes: [
      'High property taxes make holding an empty or inherited Nebraska house genuinely expensive month to month, which is a common reason estates sell quickly rather than waiting for a spring listing.',
      'Omaha has consistent as-is investor demand. Outstate markets are thin and older farm-adjacent homes often need mechanical work that conventional lenders will not finance.',
    ],
  },
  {
    slug: 'nevada', name: 'Nevada', country: 'us', abbr: 'NV', kind: 'State',
    metros: ['Las Vegas', 'Henderson', 'Reno', 'North Las Vegas', 'Sparks', 'Carson City'],
    intro: 'Nevada is non-judicial with a mandatory mediation programme, and HOA super-priority liens here have caused more title problems than in any other state.',
    facts: [
      ['Foreclosure route', 'Non-judicial trustee sale'],
      ['Homeowner right', 'Foreclosure Mediation Program available'],
      ['Closing handled by', 'Title and escrow company'],
      ['Local risk', 'HOA super-priority lien can outrank the mortgage'],
    ],
    notes: [
      'Nevada HOA liens have historically been able to wipe out first mortgages at auction, and the litigation legacy still shows up in title searches. Any competent local buyer will run this down before closing.',
      'Las Vegas has one of the highest-volume investor markets in the country, with genuine appetite for dated houses, tenant-occupied rentals and inherited property.',
    ],
  },
  {
    slug: 'new-hampshire', name: 'New Hampshire', country: 'us', abbr: 'NH', kind: 'State',
    metros: ['Manchester', 'Nashua', 'Concord', 'Derry', 'Dover', 'Rochester NH'],
    intro: 'New Hampshire is a non-judicial state with a short timeline, no state income tax, and a real estate transfer tax split between buyer and seller.',
    facts: [
      ['Foreclosure route', 'Non-judicial (power of sale)'],
      ['Typical timeline', 'Around 60–90 days'],
      ['Closing handled by', 'Attorney or title company'],
      ['Transfer tax', 'Levied on both buyer and seller'],
    ],
    notes: [
      'The transfer tax applies to each side of a New Hampshire transaction, so the headline offer and the net proceeds diverge more than sellers expect. Ask for a net figure, not just a purchase price.',
      'Older mill-town housing stock in Manchester and Nashua has steady investor interest, particularly multi-family buildings needing systems work.',
    ],
  },
  {
    slug: 'new-jersey', name: 'New Jersey', country: 'us', abbr: 'NJ', kind: 'State',
    metros: ['Newark', 'Jersey City', 'Paterson', 'Elizabeth', 'Trenton', 'Camden', 'Toms River'],
    intro: 'New Jersey has among the longest foreclosure timelines in the United States, routinely running well past two years through a heavily backlogged judicial system.',
    facts: [
      ['Foreclosure route', 'Judicial'],
      ['Typical timeline', 'Often 2–3 years'],
      ['Closing handled by', 'Attorney'],
      ['Homeowner right', '3-day attorney review on residential contracts'],
    ],
    notes: [
      'The extreme length of New Jersey foreclosure is not the reprieve it appears to be. Interest, taxes and fees accumulate across the entire period, and homeowners who wait it out frequently end up with nothing where selling early would have preserved real equity.',
      'Attorney review means either side can cancel a residential contract within three business days. Expect it, and expect an experienced buyer to work with it rather than pressure you past it.',
    ],
  },
  {
    slug: 'new-mexico', name: 'New Mexico', country: 'us', abbr: 'NM', kind: 'State',
    metros: ['Albuquerque', 'Las Cruces', 'Rio Rancho', 'Santa Fe', 'Roswell', 'Farmington'],
    intro: 'New Mexico requires judicial foreclosure, and adobe construction, shared wells and acequia water rights create title and financing situations found almost nowhere else.',
    facts: [
      ['Foreclosure route', 'Judicial'],
      ['Typical timeline', 'Around 6–9 months'],
      ['Closing handled by', 'Title company'],
      ['Local factor', 'Acequia water rights and shared well agreements'],
    ],
    notes: [
      'Water rights in New Mexico transfer separately from land in many cases, and an unresolved acequia or well-share agreement will stop a conventional lender. Local cash buyers deal with this regularly.',
      'Traditional adobe and manufactured housing outside Albuquerque and Santa Fe are both difficult to finance conventionally, concentrating demand among buyers who do not need an appraisal to clear.',
    ],
  },
  {
    slug: 'new-york', name: 'New York', country: 'us', abbr: 'NY', kind: 'State',
    metros: ['New York City', 'Buffalo', 'Rochester', 'Yonkers', 'Syracuse', 'Albany'],
    intro: 'New York is a judicial foreclosure state with mandatory settlement conferences, and upstate markets behave nothing like the downstate metro.',
    facts: [
      ['Foreclosure route', 'Judicial with mandatory settlement conference'],
      ['Typical timeline', 'Frequently 2–3 years'],
      ['Closing handled by', 'Attorney (required)'],
      ['Local factor', 'NYC transfer taxes and co-op board approval'],
    ],
    notes: [
      'Co-op sales in New York City require board approval, which no cash buyer can bypass and which regularly kills otherwise agreed sales. Condos and houses are far more straightforward for a fast transaction.',
      'Buffalo, Rochester and Syracuse have low price points, older stock and active as-is investor demand — a completely different market from Westchester or the five boroughs.',
    ],
  },
  {
    slug: 'north-carolina', name: 'North Carolina', country: 'us', abbr: 'NC', kind: 'State',
    metros: ['Charlotte', 'Raleigh', 'Greensboro', 'Durham', 'Winston-Salem', 'Fayetteville', 'Wilmington'],
    intro: 'North Carolina runs non-judicial foreclosure through a clerk of court hearing, and adds a ten-day upset bid period after every sale.',
    facts: [
      ['Foreclosure route', 'Non-judicial via clerk of court hearing'],
      ['Typical timeline', 'Roughly 4–6 months'],
      ['Closing handled by', 'Attorney (required)'],
      ['Upset bid period', '10 days after sale, resets on each new bid'],
    ],
    notes: [
      'The upset bid period means a North Carolina foreclosure sale is not final for at least ten days and can be extended repeatedly. That uncertainty pushes serious buyers toward negotiating with owners beforehand.',
      'Charlotte and the Triangle have strong retail demand, but the eastern counties, Fayetteville and the older Piedmont mill towns have real as-is investor markets.',
    ],
  },
  {
    slug: 'north-dakota', name: 'North Dakota', country: 'us', abbr: 'ND', kind: 'State',
    metros: ['Fargo', 'Bismarck', 'Grand Forks', 'Minot', 'West Fargo', 'Williston'],
    intro: 'North Dakota requires judicial foreclosure and grants a lengthy post-sale redemption period, making it one of the more borrower-protective states.',
    facts: [
      ['Foreclosure route', 'Judicial'],
      ['Pre-suit notice', '30-day notice before filing required'],
      ['Redemption after sale', 'Commonly 6–12 months'],
      ['Closing handled by', 'Attorney or title company'],
    ],
    notes: [
      'Western North Dakota housing values remain tied to oil activity, and Williston and Watford City can move sharply with the rig count. Timing a conventional sale there is genuinely difficult.',
      'Fargo and Bismarck are stable and largely retail, so a cash offer competes on speed and certainty rather than on being the only available buyer.',
    ],
  },
  {
    slug: 'ohio', name: 'Ohio', country: 'us', abbr: 'OH', kind: 'State',
    metros: ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo', 'Akron', 'Dayton', 'Youngstown'],
    intro: 'Ohio requires judicial foreclosure and a court-ordered appraisal, and has one of the deepest as-is investor markets in the United States.',
    facts: [
      ['Foreclosure route', 'Judicial'],
      ['Typical timeline', 'Around 6–12 months'],
      ['Closing handled by', 'Title company'],
      ['Sheriff sale rule', 'Minimum bid tied to court appraisal'],
    ],
    notes: [
      'Ohio\'s appraisal-linked minimum bid limits how cheaply a house can go at sheriff sale, which keeps investor attention on pre-foreclosure and direct purchases instead.',
      'Cleveland, Columbus and Cincinnati each have their own city page here. Toledo, Dayton, Akron and Youngstown have comparable as-is demand at lower price points, including for vacant and code-cited property.',
    ],
  },
  {
    slug: 'oklahoma', name: 'Oklahoma', country: 'us', abbr: 'OK', kind: 'State',
    metros: ['Oklahoma City', 'Tulsa', 'Norman', 'Broken Arrow', 'Lawton', 'Edmond'],
    intro: 'Oklahoma permits both judicial and non-judicial foreclosure, and storm damage is a routine rather than exceptional factor in property condition here.',
    facts: [
      ['Foreclosure route', 'Both; borrower can force the judicial route'],
      ['Typical timeline', 'Roughly 4–7 months'],
      ['Closing handled by', 'Title company with attorney title examination'],
      ['Local factor', 'Hail and wind damage, and insurance claim history'],
    ],
    notes: [
      'An Oklahoma borrower can elect to require judicial foreclosure, which slows the process and buys time — but only if the election is made properly and in time.',
      'Roof age and prior hail claims drive insurability across the state, and an uninsurable roof will stop a mortgage-dependent buyer. Cash buyers price the roof in rather than walking away.',
    ],
  },
  {
    slug: 'oregon', name: 'Oregon', country: 'us', abbr: 'OR', kind: 'State',
    metros: ['Portland', 'Salem', 'Eugene', 'Gresham', 'Hillsboro', 'Bend', 'Medford'],
    intro: 'Oregon allows non-judicial trustee sales with a mandatory resolution conference, and its statewide land use system makes rural and partitioned parcels unusually complicated.',
    facts: [
      ['Foreclosure route', 'Non-judicial trustee sale, or judicial'],
      ['Minimum notice', '120 days before sale'],
      ['Homeowner right', 'Foreclosure Avoidance Mediation available'],
      ['Local factor', 'Statewide land use zoning limits rural partition'],
    ],
    notes: [
      'Oregon\'s land use rules mean EFU and forest-zoned parcels have real restrictions on dwellings and partition. Buyers unfamiliar with the system routinely misprice these; local ones do not.',
      'Portland has active investor demand for older stock, and Bend and Medford both have condition-driven segments where conventional lenders decline and cash buyers transact.',
    ],
  },
  {
    slug: 'pennsylvania', name: 'Pennsylvania', country: 'us', abbr: 'PA', kind: 'State',
    metros: ['Philadelphia', 'Pittsburgh', 'Allentown', 'Erie', 'Reading', 'Scranton', 'Bethlehem'],
    intro: 'Pennsylvania requires judicial foreclosure with an Act 91 pre-notice, and Philadelphia has a large stock of tangled-title and inherited row homes.',
    facts: [
      ['Foreclosure route', 'Judicial'],
      ['Pre-suit requirement', 'Act 91 notice and HEMAP referral'],
      ['Typical timeline', 'Around 9–15 months'],
      ['Closing handled by', 'Title company'],
    ],
    notes: [
      'Tangled title — where the occupant is an heir but the deed is still in a deceased relative\'s name — is widespread in Philadelphia. It must be resolved before any sale, and buyers who handle estates regularly can often work alongside the process.',
      'Pittsburgh, Erie, Reading and Scranton have low price points and active as-is demand, including for houses with structural and systems issues that will not pass an FHA appraisal.',
    ],
  },
  {
    slug: 'rhode-island', name: 'Rhode Island', country: 'us', abbr: 'RI', kind: 'State',
    metros: ['Providence', 'Warwick', 'Cranston', 'Pawtucket', 'East Providence', 'Woonsocket'],
    intro: 'Rhode Island is a non-judicial state with mandatory mediation for owner-occupants and a housing stock dominated by older multi-family buildings.',
    facts: [
      ['Foreclosure route', 'Non-judicial (power of sale)'],
      ['Homeowner right', 'Mandatory mediation conference for owner-occupants'],
      ['Closing handled by', 'Attorney'],
      ['Local factor', 'Lead paint certification on pre-1978 rentals'],
    ],
    notes: [
      'Rhode Island lead paint rules bite hard on the state\'s older triple-deckers, and a missing certificate can block a rental transfer. Investor buyers price remediation in as a matter of course.',
      'Providence and Pawtucket have consistent multi-family investor demand, including for tenant-occupied buildings that most retail buyers will not consider.',
    ],
  },
  {
    slug: 'south-carolina', name: 'South Carolina', country: 'us', abbr: 'SC', kind: 'State',
    metros: ['Charleston', 'Columbia SC', 'North Charleston', 'Greenville', 'Rock Hill', 'Myrtle Beach'],
    intro: 'South Carolina requires judicial foreclosure and may allow a deficiency judgment, which makes the difference between selling early and going to auction financially significant.',
    facts: [
      ['Foreclosure route', 'Judicial'],
      ['Typical timeline', 'Roughly 6–9 months'],
      ['Closing handled by', 'Attorney (required)'],
      ['Deficiency', 'Lender may pursue a deficiency judgment'],
    ],
    notes: [
      'Where a deficiency can be pursued, an auction shortfall does not end the homeowner\'s liability. Selling for a real price before the sale is often the difference between walking away clean and carrying a judgment.',
      'Coastal Charleston and Myrtle Beach carry high insurance and flood exposure. Upstate markets around Greenville and Rock Hill have steadier as-is investor demand.',
    ],
  },
  {
    slug: 'south-dakota', name: 'South Dakota', country: 'us', abbr: 'SD', kind: 'State',
    metros: ['Sioux Falls', 'Rapid City', 'Aberdeen', 'Brookings', 'Watertown', 'Mitchell'],
    intro: 'South Dakota permits both judicial and non-judicial foreclosure and grants redemption rights that can extend up to a year after sale.',
    facts: [
      ['Foreclosure route', 'Both judicial and non-judicial available'],
      ['Redemption after sale', 'Up to 1 year in many cases'],
      ['Closing handled by', 'Title company'],
      ['Local factor', 'No state income tax; thin rural buyer pools'],
    ],
    notes: [
      'Outside Sioux Falls and Rapid City, South Dakota buyer pools are genuinely small. A house in a town of two thousand people may see a handful of serious viewings in a year on the open market.',
      'The long redemption period discourages auction buyers, so direct pre-foreclosure purchases are the more active channel.',
    ],
  },
  {
    slug: 'tennessee', name: 'Tennessee', country: 'us', abbr: 'TN', kind: 'State',
    metros: ['Nashville', 'Memphis', 'Knoxville', 'Chattanooga', 'Clarksville', 'Murfreesboro'],
    intro: 'Tennessee is a fast non-judicial state where a trustee sale can follow roughly three weeks of published notice.',
    facts: [
      ['Foreclosure route', 'Non-judicial trustee sale'],
      ['Notice before sale', 'Publication over about 20+ days'],
      ['Closing handled by', 'Title company or attorney'],
      ['Redemption after sale', 'Usually waived in the deed of trust'],
    ],
    notes: [
      'Most Tennessee deeds of trust waive the statutory right of redemption, so the trustee sale is effectively final. The short notice period leaves very little room to react.',
      'Memphis has one of the largest single-family investor markets in the country and has its own city page here. Nashville is retail-driven at the top end but still has strong as-is demand in older neighbourhoods.',
    ],
  },
  {
    slug: 'texas', name: 'Texas', country: 'us', abbr: 'TX', kind: 'State',
    metros: ['Houston', 'San Antonio', 'Dallas', 'Austin', 'Fort Worth', 'El Paso', 'Arlington'],
    intro: 'Texas has the fastest foreclosure process in the United States — as little as 41 days from notice of default to a first-Tuesday auction.',
    facts: [
      ['Foreclosure route', 'Non-judicial (power of sale)'],
      ['Minimum timeline', 'About 41 days end to end'],
      ['Auction schedule', 'First Tuesday of the month'],
      ['Homestead protection', 'Strong; limits many non-mortgage liens'],
    ],
    notes: [
      'Forty-one days is not a typo. Texas moves faster than any other state, and homeowners who assume they have months routinely do not. If you are behind in Texas, the timeline is the single most important fact on this page.',
      'Texas homestead law gives strong protection against most non-mortgage creditors, but not against the mortgage itself, tax liens or properly secured home improvement loans. Houston, Dallas and San Antonio all have very deep as-is buyer markets.',
    ],
  },
  {
    slug: 'utah', name: 'Utah', country: 'us', abbr: 'UT', kind: 'State',
    metros: ['Salt Lake City', 'West Valley City', 'Provo', 'West Jordan', 'Orem', 'Ogden', 'St. George'],
    intro: 'Utah uses non-judicial trustee sales with a roughly four-month minimum timeline, and has some of the tightest housing supply in the western US.',
    facts: [
      ['Foreclosure route', 'Non-judicial trustee sale'],
      ['Minimum timeline', 'About 4 months from notice of default'],
      ['Closing handled by', 'Title and escrow company'],
      ['Redemption after sale', 'None after a trustee sale'],
    ],
    notes: [
      'Tight supply along the Wasatch Front means even dated houses attract retail interest, so a Utah cash offer competes on certainty, timing and condition tolerance rather than on scarcity of buyers.',
      'St. George and the southern Utah market behave differently, with a heavier second-home and retirement component and more seasonal swing.',
    ],
  },
  {
    slug: 'vermont', name: 'Vermont', country: 'us', abbr: 'VT', kind: 'State',
    metros: ['Burlington', 'South Burlington', 'Rutland', 'Barre', 'Montpelier', 'St. Albans'],
    intro: 'Vermont uses judicial strict foreclosure, where title can pass to the lender at the end of a redemption period without any auction taking place.',
    facts: [
      ['Foreclosure route', 'Judicial, including strict foreclosure'],
      ['Typical timeline', 'Commonly 9–12 months'],
      ['Closing handled by', 'Attorney'],
      ['Unusual feature', 'No auction required; title passes on redemption expiry'],
    ],
    notes: [
      'Under strict foreclosure there is no sale and therefore no surplus to recover. Any equity a Vermont homeowner has is lost entirely unless the property is sold before the redemption period runs out.',
      'Older housing stock with wood heat, aging septic and seasonal access is common outside Chittenden County and frequently fails conventional lender conditions.',
    ],
  },
  {
    slug: 'virginia', name: 'Virginia', country: 'us', abbr: 'VA', kind: 'State',
    metros: ['Virginia Beach', 'Norfolk', 'Chesapeake', 'Richmond', 'Newport News', 'Alexandria', 'Roanoke'],
    intro: 'Virginia is a fast non-judicial state where a trustee sale can occur about two weeks after notice, with no post-sale redemption.',
    facts: [
      ['Foreclosure route', 'Non-judicial trustee sale'],
      ['Notice before sale', 'Can be as short as 14 days'],
      ['Closing handled by', 'Attorney or title company'],
      ['Redemption after sale', 'None'],
    ],
    notes: [
      'A fourteen-day notice combined with no redemption right makes Virginia one of the least forgiving states for a homeowner in default. Speed of decision matters more here than almost anywhere.',
      'Hampton Roads has significant flood and military relocation dynamics, producing a steady flow of sellers on hard deadlines. Richmond and Roanoke have solid as-is investor depth.',
    ],
  },
  {
    slug: 'washington', name: 'Washington', country: 'us', abbr: 'WA', kind: 'State',
    metros: ['Seattle', 'Spokane', 'Tacoma', 'Vancouver WA', 'Bellevue', 'Everett', 'Kent'],
    intro: 'Washington uses non-judicial trustee sales with a mandatory Foreclosure Fairness Act mediation referral, and levies a graduated real estate excise tax on sellers.',
    facts: [
      ['Foreclosure route', 'Non-judicial trustee sale'],
      ['Homeowner right', 'Foreclosure Fairness Act mediation'],
      ['Minimum timeline', 'About 190 days with notices'],
      ['Seller cost', 'Graduated REET, rising with sale price'],
    ],
    notes: [
      'Washington\'s real estate excise tax is paid by the seller and scales with price, so a headline offer overstates net proceeds more here than in most states. Always ask for the net.',
      'Seattle and Bellevue are retail-strong. Spokane, Tacoma and the smaller eastern Washington markets have far more condition-driven as-is activity.',
    ],
  },
  {
    slug: 'west-virginia', name: 'West Virginia', country: 'us', abbr: 'WV', kind: 'State',
    metros: ['Charleston WV', 'Huntington', 'Morgantown', 'Parkersburg', 'Wheeling', 'Martinsburg'],
    intro: 'West Virginia has one of the quickest non-judicial processes in the country and a large stock of inherited property with fractured mineral and surface ownership.',
    facts: [
      ['Foreclosure route', 'Non-judicial (power of sale)'],
      ['Typical speed to auction', 'Often 60–90 days'],
      ['Closing handled by', 'Attorney'],
      ['Local factor', 'Severed mineral rights and heirs property'],
    ],
    notes: [
      'Mineral rights in West Virginia are frequently severed from the surface and split across dozens of heirs over generations. Resolving who actually owns what is often the real obstacle to a sale, not the house.',
      'Eastern Panhandle markets near Martinsburg track the Washington DC commuter belt, while southern coalfield counties have very thin retail demand.',
    ],
  },
  {
    slug: 'wisconsin', name: 'Wisconsin', country: 'us', abbr: 'WI', kind: 'State',
    metros: ['Milwaukee', 'Madison', 'Green Bay', 'Kenosha', 'Racine', 'Appleton'],
    intro: 'Wisconsin requires judicial foreclosure, but lenders can shorten the redemption period substantially by waiving their right to a deficiency judgment.',
    facts: [
      ['Foreclosure route', 'Judicial'],
      ['Redemption before sale', '6–12 months, or shortened by waiver'],
      ['Closing handled by', 'Title company'],
      ['Typical timeline', 'Around 10–14 months'],
    ],
    notes: [
      'The redemption period in Wisconsin depends on whether the lender waives its deficiency claim. That single choice can halve the time available, so confirm which route your lender has taken.',
      'Milwaukee has its own city page and deep investor demand for duplexes and older stock. Madison is retail-driven; the Fox Valley and northern counties are thinner.',
    ],
  },
  {
    slug: 'wyoming', name: 'Wyoming', country: 'us', abbr: 'WY', kind: 'State',
    metros: ['Cheyenne', 'Casper', 'Laramie', 'Gillette', 'Rock Springs', 'Sheridan'],
    intro: 'Wyoming is a non-judicial state with a three-month redemption period after sale, and the thinnest buyer pools of any state by population.',
    facts: [
      ['Foreclosure route', 'Non-judicial (power of sale)'],
      ['Typical timeline', 'Around 90 days to sale'],
      ['Redemption after sale', 'Commonly 3 months'],
      ['Local factor', 'Smallest population in the US; very thin demand'],
    ],
    notes: [
      'With fewer than 600,000 residents statewide, Wyoming listings can sit for extended periods simply because the buyer pool is small. Energy-linked towns like Gillette and Rock Springs swing with commodity cycles.',
      'No state income tax and low property taxes keep holding costs manageable, but that does not help an estate that needs to distribute proceeds on a timeline.',
    ],
  },
  {
    slug: 'district-of-columbia', name: 'District of Columbia', country: 'us', abbr: 'DC', kind: 'District',
    metros: ['Washington DC', 'Anacostia', 'Capitol Hill', 'Petworth', 'Columbia Heights'],
    intro: 'The District uses non-judicial foreclosure but requires a mediation certificate first, and its recordation and transfer taxes are among the highest in the country.',
    facts: [
      ['Foreclosure route', 'Non-judicial, mediation certificate required'],
      ['Typical timeline', 'Roughly 6–12 months'],
      ['Closing handled by', 'Attorney or title company'],
      ['Local rule', 'TOPA gives tenants a right of first refusal'],
    ],
    notes: [
      'TOPA is the defining DC complication: tenants in many buildings have a statutory right of first refusal that must be honoured before a sale can complete. Buyers unfamiliar with TOPA routinely underestimate the timeline it adds.',
      'High combined recordation and transfer taxes materially affect net proceeds. Established DC buyers price and paper this correctly from the start.',
    ],
  },
];

// ── UNITED KINGDOM ───────────────────────────────────────────────────────────
// England & Wales share one conveyancing system, so English regions are
// differentiated on housing stock, market depth and local blockers. Scotland
// and Northern Ireland have genuinely separate legal processes.

const uk: Region[] = [
  {
    slug: 'north-east', name: 'North East England', country: 'uk', abbr: '', kind: 'Region',
    metros: ['Newcastle upon Tyne', 'Sunderland', 'Middlesbrough', 'Durham', 'Gateshead', 'Darlington'],
    intro: 'The North East has the lowest average house prices in England, which means cash buyers here compete on speed and certainty rather than on being the only option.',
    facts: [
      ['Legal process', 'England & Wales conveyancing; exchange then completion'],
      ['Typical open-market sale', '4–6 months, chain dependent'],
      ['Cash completion', 'Often 7–28 days'],
      ['Local factor', 'Large stock of pre-1919 terraces and ex-mining housing'],
    ],
    notes: [
      'Terraced housing across Sunderland, Middlesbrough and the former coalfield towns can be hard to mortgage where values fall below lender minimums, leaving cash purchase as the practical route.',
      'Newcastle has an active buy-to-let investor base servicing a large student and young professional rental market, which supports steady demand for tenanted and dated stock.',
    ],
  },
  {
    slug: 'north-west', name: 'North West England', country: 'uk', abbr: '', kind: 'Region',
    metros: ['Manchester', 'Liverpool', 'Bolton', 'Preston', 'Blackpool', 'Warrington', 'Blackburn'],
    intro: 'The North West holds some of the strongest regeneration markets in the UK alongside some of the most persistent low-value stock, often within a few miles of each other.',
    facts: [
      ['Legal process', 'England & Wales conveyancing'],
      ['Typical open-market sale', '4–6 months'],
      ['Cash completion', 'Often 7–28 days'],
      ['Local factor', 'Selective licensing schemes in several boroughs'],
    ],
    notes: [
      'Selective licensing across parts of Liverpool, Blackpool and Greater Manchester imposes landlord obligations that can complicate the sale of tenanted property. Investors active locally already hold the relevant licences.',
      'Blackpool has a significant stock of converted HMOs and former guest houses, a specialised segment where conventional buyers are scarce and cash purchasers dominate.',
    ],
  },
  {
    slug: 'yorkshire-and-the-humber', name: 'Yorkshire and the Humber', country: 'uk', abbr: '', kind: 'Region',
    metros: ['Leeds', 'Sheffield', 'Bradford', 'Hull', 'York', 'Doncaster', 'Huddersfield'],
    intro: 'Yorkshire spans high-demand commuter markets around Leeds and York and much softer markets in Hull, Bradford and the former industrial belt.',
    facts: [
      ['Legal process', 'England & Wales conveyancing'],
      ['Typical open-market sale', '4–6 months'],
      ['Cash completion', 'Often 7–28 days'],
      ['Local factor', 'Back-to-back terraces and flood-risk zones near the Humber'],
    ],
    notes: [
      'Flood risk around Hull and the Humber estuary affects both insurance and mortgage availability. Properties with a claims history frequently trade cash only.',
      'Back-to-back terraces in Leeds and Bradford are a distinctly local housing type that some lenders decline outright, concentrating demand among local investors.',
    ],
  },
  {
    slug: 'east-midlands', name: 'East Midlands', country: 'uk', abbr: '', kind: 'Region',
    metros: ['Nottingham', 'Leicester', 'Derby', 'Northampton', 'Lincoln', 'Chesterfield'],
    intro: 'The East Midlands is a steady mid-market region where most sales complete conventionally, so a cash offer is usually about avoiding a chain rather than a lack of buyers.',
    facts: [
      ['Legal process', 'England & Wales conveyancing'],
      ['Typical open-market sale', '4–6 months'],
      ['Cash completion', 'Often 7–28 days'],
      ['Local factor', 'Former coalfield villages with narrow buyer pools'],
    ],
    notes: [
      'Chain collapse is the dominant reason East Midlands sellers seek a cash buyer. The property itself is often perfectly saleable; the problem is that someone four links down the chain pulled out.',
      'Nottingham and Leicester both have substantial student rental markets supporting investor demand for HMOs and tenanted terraces.',
    ],
  },
  {
    slug: 'west-midlands', name: 'West Midlands', country: 'uk', abbr: '', kind: 'Region',
    metros: ['Birmingham', 'Coventry', 'Wolverhampton', 'Stoke-on-Trent', 'Walsall', 'Dudley', 'West Bromwich'],
    intro: 'The West Midlands has the largest concentration of former council and interwar stock outside London, plus specific construction types that mainstream lenders refuse.',
    facts: [
      ['Legal process', 'England & Wales conveyancing'],
      ['Typical open-market sale', '4–6 months'],
      ['Cash completion', 'Often 7–28 days'],
      ['Local blocker', 'Non-standard construction (Airey, Cornish, BISF)'],
    ],
    notes: [
      'Prefabricated reinforced concrete houses — Airey, Cornish, Woolaway and BISF steel-framed types — are widespread across the region and are designated defective or unmortgageable by most lenders. Cash buyers are frequently the only market.',
      'Stoke-on-Trent has some of the lowest entry prices in England, with active investor demand for terraces requiring full modernisation.',
    ],
  },
  {
    slug: 'east-of-england', name: 'East of England', country: 'uk', abbr: '', kind: 'Region',
    metros: ['Norwich', 'Ipswich', 'Luton', 'Peterborough', 'Southend-on-Sea', 'Cambridge', 'Colchester'],
    intro: 'The East spans the Cambridge growth corridor and much slower coastal and fenland markets, with subsidence and flood risk both material factors.',
    facts: [
      ['Legal process', 'England & Wales conveyancing'],
      ['Typical open-market sale', '4–6 months'],
      ['Cash completion', 'Often 7–28 days'],
      ['Local blocker', 'Clay subsidence and coastal flood risk'],
    ],
    notes: [
      'Clay soils across Essex and Cambridgeshire produce subsidence claims that make properties difficult to insure and therefore difficult to mortgage. A previous underpinning history narrows the buyer pool sharply.',
      'Coastal Norfolk, Suffolk and the Essex estuary have flood and erosion designations that affect financing regardless of the property\'s condition.',
    ],
  },
  {
    slug: 'london', name: 'London', country: 'uk', abbr: '', kind: 'Region',
    metros: ['Inner London', 'Outer London', 'Croydon', 'Barking', 'Ealing', 'Newham', 'Bromley'],
    intro: 'London\'s defining problem is not demand but leasehold: short leases, cladding, and ground rent escalation routinely make otherwise desirable flats unmortgageable.',
    facts: [
      ['Legal process', 'England & Wales conveyancing'],
      ['Typical open-market sale', '4–6 months'],
      ['Cash completion', 'Often 7–28 days'],
      ['Local blocker', 'Short leases, cladding/EWS1, escalating ground rent'],
    ],
    notes: [
      'A lease under roughly 80 years triggers marriage value on extension and most lenders decline below that threshold. Flats with short leases in London are a genuine cash-only market despite prime locations.',
      'Cladding and external wall system issues have left blocks unsaleable for years at a time. Specialist cash buyers price the remediation risk rather than waiting for an EWS1 form.',
    ],
  },
  {
    slug: 'south-east', name: 'South East England', country: 'uk', abbr: '', kind: 'Region',
    metros: ['Brighton', 'Southampton', 'Portsmouth', 'Reading', 'Milton Keynes', 'Oxford', 'Medway'],
    intro: 'The South East is England\'s most expensive region outside London, where chain length rather than buyer scarcity is what breaks sales.',
    facts: [
      ['Legal process', 'England & Wales conveyancing'],
      ['Typical open-market sale', '4–6 months'],
      ['Cash completion', 'Often 7–28 days'],
      ['Local factor', 'Long chains; high-value transactions with more to lose'],
    ],
    notes: [
      'High values mean South East chains are long and slow, and a collapse late in the process costs sellers thousands in wasted survey, legal and mortgage fees. Chain-free cash purchase removes that specific risk.',
      'Coastal Brighton, Portsmouth and Hastings have significant converted flat and HMO stock where leasehold and licensing complications are common.',
    ],
  },
  {
    slug: 'south-west', name: 'South West England', country: 'uk', abbr: '', kind: 'Region',
    metros: ['Bristol', 'Plymouth', 'Bournemouth', 'Exeter', 'Gloucester', 'Swindon', 'Torquay'],
    intro: 'The South West has a large stock of older, non-standard rural property alongside a substantial second-home and holiday-let market that behaves very differently.',
    facts: [
      ['Legal process', 'England & Wales conveyancing'],
      ['Typical open-market sale', '4–6 months'],
      ['Cash completion', 'Often 7–28 days'],
      ['Local blocker', 'Cob, thatch, and Cornish unit construction'],
    ],
    notes: [
      'Cob walls, thatched roofs and Cornish unit PRC construction are all common in the South West and all restrict lender appetite. Insurance for thatch alone excludes many mainstream buyers.',
      'Devon and Cornwall have a large holiday-let segment where seasonal income, planning restrictions and second-home council tax premiums shape who will actually buy.',
    ],
  },
  {
    slug: 'wales', name: 'Wales', country: 'uk', abbr: '', kind: 'Nation',
    metros: ['Cardiff', 'Swansea', 'Newport', 'Wrexham', 'Barry', 'Bridgend', 'Rhondda'],
    intro: 'Wales follows England\'s conveyancing system but has its own devolved property tax and a second-home council tax premium of up to 300% in some counties.',
    facts: [
      ['Legal process', 'England & Wales conveyancing'],
      ['Property tax', 'Land Transaction Tax, not Stamp Duty'],
      ['Cash completion', 'Often 7–28 days'],
      ['Local factor', 'Second-home council tax premiums up to 300%'],
    ],
    notes: [
      'Land Transaction Tax replaced Stamp Duty in Wales with different bands and thresholds, and the higher rates for additional properties change investor maths compared with England.',
      'Steep council tax premiums on second homes in Gwynedd, Pembrokeshire and Anglesey have pushed a wave of holiday-home owners to sell, while narrowing the pool of buyers for the same properties.',
    ],
  },
  {
    slug: 'scotland', name: 'Scotland', country: 'uk', abbr: '', kind: 'Nation',
    metros: ['Glasgow', 'Edinburgh', 'Aberdeen', 'Dundee', 'Paisley', 'Inverness', 'Stirling'],
    intro: 'Scotland has an entirely separate legal system: missives become binding far earlier than an English exchange, and every seller must provide a Home Report before marketing.',
    facts: [
      ['Legal process', 'Scots law — missives, not exchange/completion'],
      ['Binding point', 'Conclusion of missives, earlier than in England'],
      ['Seller requirement', 'Home Report mandatory before marketing'],
      ['Property tax', 'Land and Buildings Transaction Tax'],
    ],
    notes: [
      'The Home Report requirement means a Scottish seller pays for a survey and valuation up front, before any buyer appears. That cost is sunk whether or not the property sells, which changes the calculation on a slow listing.',
      'Because missives conclude earlier than an English exchange, Scottish sales fall through less often — but when they do, the legal position is more complex. Aberdeen remains tied to oil sector employment and can move sharply.',
    ],
  },
  {
    slug: 'northern-ireland', name: 'Northern Ireland', country: 'uk', abbr: '', kind: 'Nation',
    metros: ['Belfast', 'Derry', 'Lisburn', 'Newtownabbey', 'Bangor', 'Craigavon'],
    intro: 'Northern Ireland has its own land registry and conveyancing practice, and remains the only UK nation with a significant stock still held under fee farm grants.',
    facts: [
      ['Legal process', 'Separate NI conveyancing; Land Registry of NI'],
      ['Typical open-market sale', '3–5 months'],
      ['Cash completion', 'Often 14–28 days'],
      ['Local factor', 'Fee farm grants and unregistered Registry of Deeds title'],
    ],
    notes: [
      'A meaningful share of Northern Irish title is still unregistered and recorded in the Registry of Deeds rather than the Land Registry, which slows conveyancing and deters buyers unfamiliar with the process.',
      'Belfast has active investor demand for terraced and student-let property, while border and rural counties have considerably thinner buyer pools.',
    ],
  },
];

// ── CANADA ───────────────────────────────────────────────────────────────────
// Differentiator that actually matters: power of sale (fast, no court) vs
// judicial foreclosure (slow, court-supervised). Quebec is civil law entirely.

const ca: Region[] = [
  {
    slug: 'ontario', name: 'Ontario', country: 'ca', abbr: 'ON', kind: 'Province',
    metros: ['Toronto', 'Ottawa', 'Hamilton', 'London ON', 'Windsor', 'Kitchener', 'Oshawa'],
    intro: 'Ontario lenders overwhelmingly use power of sale rather than foreclosure, which moves far faster and leaves the homeowner entitled to any surplus.',
    facts: [
      ['Default route', 'Power of sale — no court order required'],
      ['Typical timeline', 'Can proceed within ~45 days of default notice'],
      ['Closing handled by', 'Lawyer (required)'],
      ['Land transfer tax', 'Provincial, plus a second municipal LTT in Toronto'],
    ],
    notes: [
      'Power of sale is faster than foreclosure and, importantly, the lender must account to you for any surplus after costs. Selling first almost always nets more than letting the lender sell, because you control the price and the marketing.',
      'Toronto buyers pay both provincial and municipal land transfer tax, effectively doubling the cost. This is priced into every offer in the city and is worth understanding when you compare numbers.',
    ],
  },
  {
    slug: 'quebec', name: 'Quebec', country: 'ca', abbr: 'QC', kind: 'Province',
    metros: ['Montreal', 'Quebec City', 'Laval', 'Gatineau', 'Longueuil', 'Sherbrooke'],
    intro: 'Quebec operates under civil law with a Civil Code, uses notaries rather than lawyers for closings, and gives every buyer a legal warranty of quality.',
    facts: [
      ['Legal system', 'Civil law — Civil Code of Quebec'],
      ['Default route', 'Judicial (prior notice of exercise of hypothecary right)'],
      ['Closing handled by', 'Notary (required)'],
      ['Key rule', 'Legal warranty of quality unless expressly excluded'],
    ],
    notes: [
      'Quebec\'s legal warranty of quality makes a seller liable for latent defects after closing unless the sale is expressly made without warranty and at the buyer\'s risk. Selling as-is here requires that specific wording, and a professional buyer will expect it.',
      'Notaries, not lawyers, complete Quebec transactions, and the notary is neutral between the parties. Timelines are consistent but not compressible in the way an Ontario power of sale can be.',
    ],
  },
  {
    slug: 'british-columbia', name: 'British Columbia', country: 'ca', abbr: 'BC', kind: 'Province',
    metros: ['Vancouver', 'Surrey', 'Burnaby', 'Victoria', 'Kelowna', 'Abbotsford', 'Nanaimo'],
    intro: 'British Columbia uses court-supervised judicial foreclosure with a redemption period, making it one of the slower and more owner-protective provinces.',
    facts: [
      ['Default route', 'Judicial foreclosure via Supreme Court'],
      ['Redemption period', 'Commonly around 6 months'],
      ['Closing handled by', 'Lawyer or notary public'],
      ['Local blocker', 'Leaky condo remediation and special levies'],
    ],
    notes: [
      'The court-ordered redemption period gives BC homeowners real time, but the court also controls any sale — the judge must approve the price. Selling privately before proceedings advance keeps that control with you.',
      'Strata properties facing leaky-condo remediation or large special levies are difficult to sell conventionally, because buyers cannot finance an unknown future assessment. Cash buyers price the levy and proceed.',
    ],
  },
  {
    slug: 'alberta', name: 'Alberta', country: 'ca', abbr: 'AB', kind: 'Province',
    metros: ['Calgary', 'Edmonton', 'Red Deer', 'Lethbridge', 'Fort McMurray', 'Medicine Hat'],
    intro: 'Alberta requires judicial foreclosure through the Court of King\'s Bench, and most residential mortgages here are effectively non-recourse against the borrower personally.',
    facts: [
      ['Default route', 'Judicial foreclosure, court supervised'],
      ['Typical timeline', 'Commonly 6–12 months'],
      ['Closing handled by', 'Lawyer (required)'],
      ['Unusual feature', 'No provincial land transfer tax'],
    ],
    notes: [
      'Alberta has no land transfer tax, only modest registration fees, which lowers transaction friction compared with Ontario or BC and makes fast resale more viable for investors.',
      'Fort McMurray and other energy-linked markets move with oil prices and can be genuinely illiquid in a downturn. Calgary and Edmonton both have established as-is investor networks.',
    ],
  },
  {
    slug: 'manitoba', name: 'Manitoba', country: 'ca', abbr: 'MB', kind: 'Province',
    metros: ['Winnipeg', 'Brandon', 'Steinbach', 'Thompson', 'Portage la Prairie', 'Winkler'],
    intro: 'Manitoba requires court approval for mortgage enforcement and has some of the most affordable urban housing stock in Canada.',
    facts: [
      ['Default route', 'Judicial sale, court approval required'],
      ['Typical timeline', 'Around 6–9 months'],
      ['Closing handled by', 'Lawyer'],
      ['Local factor', 'Older Winnipeg stock; foundation and flood issues'],
    ],
    notes: [
      'Winnipeg\'s older neighbourhoods have widespread clay-soil foundation movement and Red River flood exposure, both of which affect insurance and lender appetite.',
      'Winnipeg has one of Canada\'s more active as-is buyer markets relative to its size, which is why it already has a dedicated city page here.',
    ],
  },
  {
    slug: 'saskatchewan', name: 'Saskatchewan', country: 'ca', abbr: 'SK', kind: 'Province',
    metros: ['Saskatoon', 'Regina', 'Prince Albert', 'Moose Jaw', 'Swift Current', 'Yorkton'],
    intro: 'Saskatchewan has unusually strong statutory protection for homeowners, requiring lender permission from a provincial board before most foreclosure actions.',
    facts: [
      ['Default route', 'Judicial, and Farm Land Security Act protections apply'],
      ['Pre-action requirement', 'Court or board leave often needed first'],
      ['Closing handled by', 'Lawyer'],
      ['Local factor', 'Agricultural land has additional statutory protection'],
    ],
    notes: [
      'The requirement for leave before proceeding gives Saskatchewan homeowners more protection than almost any other province, particularly where farmland is involved.',
      'Saskatoon and Regina have modest but real investor demand. Rural and northern markets can be extremely thin, with very few conventional buyers for older housing.',
    ],
  },
  {
    slug: 'nova-scotia', name: 'Nova Scotia', country: 'ca', abbr: 'NS', kind: 'Province',
    metros: ['Halifax', 'Dartmouth', 'Sydney NS', 'Truro', 'New Glasgow', 'Bridgewater'],
    intro: 'Nova Scotia uses judicial foreclosure and, uniquely in the region, has a large stock of land still held under an old migrated title system.',
    facts: [
      ['Default route', 'Judicial foreclosure and sale'],
      ['Typical timeline', 'Around 6–9 months'],
      ['Closing handled by', 'Lawyer (required)'],
      ['Local factor', 'Land registration migration required before sale'],
    ],
    notes: [
      'Nova Scotia property must be migrated into the Land Registration system before it can be sold, and unmigrated parcels with unclear historic chains of title can take months to resolve. This is the most common hidden delay in the province.',
      'Halifax has genuine market depth; Cape Breton and rural mainland counties have far fewer buyers, and older uninsulated housing frequently fails lender conditions.',
    ],
  },
  {
    slug: 'new-brunswick', name: 'New Brunswick', country: 'ca', abbr: 'NB', kind: 'Province',
    metros: ['Saint John', 'Moncton', 'Fredericton', 'Dieppe', 'Miramichi', 'Bathurst'],
    intro: 'New Brunswick permits power of sale under the Property Act, making enforcement faster here than in most of Atlantic Canada.',
    facts: [
      ['Default route', 'Power of sale available under the Property Act'],
      ['Typical timeline', 'Can move within a few months'],
      ['Closing handled by', 'Lawyer'],
      ['Local factor', 'Lowest average prices in Atlantic Canada'],
    ],
    notes: [
      'Power of sale means New Brunswick lenders can move considerably faster than in Nova Scotia or Newfoundland, so the practical window to arrange a private sale is shorter than owners expect.',
      'Moncton has been the province\'s strongest growth market. Saint John and the northern counties have low price points and thin retail demand for older stock.',
    ],
  },
  {
    slug: 'newfoundland-and-labrador', name: 'Newfoundland and Labrador', country: 'ca', abbr: 'NL', kind: 'Province',
    metros: ['St. John’s', 'Mount Pearl', 'Corner Brook', 'Conception Bay South', 'Grand Falls-Windsor', 'Labrador City'],
    intro: 'Newfoundland and Labrador has the thinnest housing market in Canada outside the territories, with many outport communities seeing almost no conventional sales.',
    facts: [
      ['Default route', 'Judicial, and power of sale where the mortgage allows'],
      ['Typical timeline', 'Around 6–12 months'],
      ['Closing handled by', 'Lawyer'],
      ['Local factor', 'Outport depopulation; very small buyer pools'],
    ],
    notes: [
      'Outside the Avalon Peninsula, many communities have shrinking populations and effectively no market for older homes. A listing can run for years without a serious offer.',
      'St. John\'s has a functioning market with steady demand, and Labrador City tracks iron ore employment closely.',
    ],
  },
  {
    slug: 'prince-edward-island', name: 'Prince Edward Island', country: 'ca', abbr: 'PE', kind: 'Province',
    metros: ['Charlottetown', 'Summerside', 'Stratford', 'Cornwall PE', 'Montague', 'Souris'],
    intro: 'Prince Edward Island allows power of sale and restricts non-resident land ownership through the Lands Protection Act, which narrows the buyer pool.',
    facts: [
      ['Default route', 'Power of sale permitted'],
      ['Ownership restriction', 'Lands Protection Act limits non-resident acreage'],
      ['Closing handled by', 'Lawyer'],
      ['Local factor', 'Smallest provincial market in Canada'],
    ],
    notes: [
      'The Lands Protection Act caps how much land non-residents and corporations may acquire without approval from Executive Council, which genuinely limits who can buy larger PEI parcels.',
      'Charlottetown and Summerside carry most of the province\'s transaction volume; rural PEI sales can be slow simply because so few buyers are active.',
    ],
  },
  {
    slug: 'yukon', name: 'Yukon', country: 'ca', abbr: 'YT', kind: 'Territory',
    metros: ['Whitehorse', 'Dawson City', 'Watson Lake', 'Haines Junction', 'Carmacks'],
    intro: 'Yukon\'s housing market is concentrated almost entirely in Whitehorse, with construction costs and permafrost shaping what can be built and financed.',
    facts: [
      ['Default route', 'Judicial, Supreme Court of Yukon'],
      ['Closing handled by', 'Lawyer'],
      ['Local factor', 'Permafrost and foundation risk outside Whitehorse'],
      ['Market depth', 'Very limited; most activity in Whitehorse'],
    ],
    notes: [
      'Roughly three quarters of Yukon\'s population lives in Whitehorse, so anything outside the capital has a very small buyer pool and long marketing times.',
      'Permafrost movement affects foundations across parts of the territory and is a standard lender concern on older properties.',
    ],
  },
  {
    slug: 'northwest-territories', name: 'Northwest Territories', country: 'ca', abbr: 'NT', kind: 'Territory',
    metros: ['Yellowknife', 'Hay River', 'Inuvik', 'Fort Smith', 'Behchokǫ̀'],
    intro: 'The Northwest Territories has extremely limited housing liquidity, with high construction costs and significant Commissioner\'s land and leasehold tenure.',
    facts: [
      ['Default route', 'Judicial, Supreme Court of the NWT'],
      ['Closing handled by', 'Lawyer'],
      ['Local factor', 'Leasehold and Commissioner\'s land tenure common'],
      ['Market depth', 'Very thin outside Yellowknife'],
    ],
    notes: [
      'Leasehold tenure on Commissioner\'s land is common and affects mortgage availability, particularly where the remaining lease term is short.',
      'Yellowknife accounts for most territorial transactions. Communities off the highway system have almost no conventional resale market.',
    ],
  },
  {
    slug: 'nunavut', name: 'Nunavut', country: 'ca', abbr: 'NU', kind: 'Territory',
    metros: ['Iqaluit', 'Rankin Inlet', 'Arviat', 'Baker Lake', 'Cambridge Bay'],
    intro: 'Nunavut has the smallest and most specialised property market in Canada, dominated by government and social housing with very limited private ownership.',
    facts: [
      ['Default route', 'Judicial, Nunavut Court of Justice'],
      ['Closing handled by', 'Lawyer'],
      ['Land tenure', 'Municipal lease rather than fee simple in most communities'],
      ['Market depth', 'Minimal private resale market'],
    ],
    notes: [
      'Most Nunavut communities hold land under municipal lease rather than fee simple, and mortgage financing is correspondingly restricted. Private sales are uncommon.',
      'Iqaluit has the only meaningful private market in the territory, and even there transaction volumes are very low.',
    ],
  },
];

// ── AUSTRALIA ────────────────────────────────────────────────────────────────
// Differentiator: cooling-off periods and contract practice vary by state, and
// Victoria's vendor statement / WA's absence of cooling-off genuinely change
// how a fast sale is structured.

const au: Region[] = [
  {
    slug: 'new-south-wales', name: 'New South Wales', country: 'au', abbr: 'NSW', kind: 'State',
    metros: ['Sydney', 'Newcastle NSW', 'Wollongong', 'Central Coast', 'Wagga Wagga', 'Albury'],
    intro: 'New South Wales gives buyers a five business day cooling-off period, waivable by a section 66W certificate — which is how genuinely fast NSW sales get done.',
    facts: [
      ['Cooling-off period', '5 business days for buyers'],
      ['Fast-track mechanism', 'Section 66W certificate waives cooling-off'],
      ['Typical settlement', '42 days standard, shorter by agreement'],
      ['Distress term', 'Mortgagee in possession sale'],
    ],
    notes: [
      'A section 66W certificate signed by the buyer\'s solicitor removes the cooling-off period entirely, making the contract binding on exchange. Any buyer promising a genuinely quick, certain NSW settlement should be willing to provide one.',
      'Beyond Sydney, Newcastle, Wollongong and the Central Coast have real market depth, while western NSW towns can have very few active buyers.',
    ],
  },
  {
    slug: 'victoria', name: 'Victoria', country: 'au', abbr: 'VIC', kind: 'State',
    metros: ['Melbourne', 'Geelong', 'Ballarat', 'Bendigo', 'Shepparton', 'Frankston'],
    intro: 'Victoria requires a section 32 vendor statement before any contract is signed, and gives buyers a three business day cooling-off period.',
    facts: [
      ['Cooling-off period', '3 business days for buyers'],
      ['Seller requirement', 'Section 32 vendor statement mandatory'],
      ['Typical settlement', '30–90 days by agreement'],
      ['Distress term', 'Mortgagee sale'],
    ],
    notes: [
      'The section 32 statement must disclose title, outgoings, planning restrictions and building notices before signing. Preparing it takes time, and errors in it give the buyer grounds to rescind — which is why experienced buyers move faster than first-timers in Victoria.',
      'Melbourne\'s outer growth corridors and the regional centres of Geelong, Ballarat and Bendigo all have active investor demand for houses needing work.',
    ],
  },
  {
    slug: 'queensland', name: 'Queensland', country: 'au', abbr: 'QLD', kind: 'State',
    metros: ['Brisbane', 'Gold Coast', 'Sunshine Coast', 'Townsville', 'Cairns', 'Toowoomba', 'Rockhampton'],
    intro: 'Queensland gives buyers a five business day cooling-off period and requires a prominent warning statement, with flood and cyclone exposure a major regional factor.',
    facts: [
      ['Cooling-off period', '5 business days for buyers'],
      ['Seller requirement', 'Warning statement on the contract front page'],
      ['Typical settlement', '30–60 days'],
      ['Local factor', 'Flood mapping and cyclone rating affect insurance'],
    ],
    notes: [
      'Flood mapping after the 2011 and 2022 events reshaped insurance costs across South East Queensland, and north of Rockhampton cyclone ratings affect both premiums and lender appetite. Properties with claims histories often trade to cash buyers.',
      'Brisbane and the Gold Coast already have dedicated city pages. Townsville, Cairns and Toowoomba all have active as-is markets, particularly for older Queenslanders needing restumping.',
    ],
  },
  {
    slug: 'western-australia', name: 'Western Australia', country: 'au', abbr: 'WA', kind: 'State',
    metros: ['Perth', 'Mandurah', 'Bunbury', 'Geraldton', 'Kalgoorlie', 'Albany', 'Karratha'],
    intro: 'Western Australia has no statutory cooling-off period at all — once a WA contract is signed and accepted, it is binding immediately.',
    facts: [
      ['Cooling-off period', 'None — binding on acceptance'],
      ['Typical settlement', '30–42 days'],
      ['Contract', 'Joint REIWA/Law Society standard form'],
      ['Local factor', 'Mining-linked regional markets swing sharply'],
    ],
    notes: [
      'The absence of a cooling-off period makes WA the fastest state to lock in a sale, but it also means a seller should be certain before signing. There is no automatic route back out.',
      'Regional WA is heavily exposed to resources employment. Karratha, Port Hedland and Kalgoorlie can move dramatically with the commodity cycle, and conventional buyer depth evaporates in a downturn.',
    ],
  },
  {
    slug: 'south-australia', name: 'South Australia', country: 'au', abbr: 'SA', kind: 'State',
    metros: ['Adelaide', 'Mount Gambier', 'Whyalla', 'Murray Bridge', 'Port Lincoln', 'Port Augusta'],
    intro: 'South Australia gives buyers a two clear business day cooling-off period and requires a form 1 vendor disclosure statement to be served before it starts.',
    facts: [
      ['Cooling-off period', '2 clear business days'],
      ['Seller requirement', 'Form 1 vendor statement must be served'],
      ['Typical settlement', '30–60 days'],
      ['Distress term', 'Mortgagee sale'],
    ],
    notes: [
      'The South Australian cooling-off clock does not start until the form 1 is properly served, so a poorly prepared disclosure can quietly extend a buyer\'s exit window well past the expected date.',
      'Adelaide has its own city page. Regional SA — Whyalla, Port Augusta and the Riverland — has thin buyer depth where an as-is cash offer is frequently the only firm number available.',
    ],
  },
  {
    slug: 'tasmania', name: 'Tasmania', country: 'au', abbr: 'TAS', kind: 'State',
    metros: ['Hobart', 'Launceston', 'Devonport', 'Burnie', 'Kingston TAS', 'Ulverstone'],
    intro: 'Tasmania has no statutory cooling-off period for buyers, and a housing stock notably older and less insulated than the mainland average.',
    facts: [
      ['Cooling-off period', 'None by statute'],
      ['Typical settlement', '30–60 days'],
      ['Closing handled by', 'Conveyancer or solicitor'],
      ['Local factor', 'Older weatherboard stock; heating and damp issues'],
    ],
    notes: [
      'The absence of a cooling-off period means Tasmanian contracts bind quickly, which suits sellers who need certainty but leaves little room for a buyer to reconsider — so buyers do more diligence up front.',
      'Hobart and Launceston carry most transaction volume. West coast and rural towns have very small buyer pools, and older uninsulated weatherboard homes can be slow to sell conventionally.',
    ],
  },
  {
    slug: 'australian-capital-territory', name: 'Australian Capital Territory', country: 'au', abbr: 'ACT', kind: 'Territory',
    metros: ['Canberra', 'Belconnen', 'Tuggeranong', 'Gungahlin', 'Woden'],
    intro: 'The ACT is unique in Australia: all land is held on 99-year Crown lease rather than freehold, and sellers must provide a full contract pack including building and pest reports.',
    facts: [
      ['Land tenure', '99-year Crown leasehold, not freehold'],
      ['Cooling-off period', '5 business days'],
      ['Seller requirement', 'Contract must include building and pest reports'],
      ['Typical settlement', '30–60 days'],
    ],
    notes: [
      'Because the seller pays for building and pest reports up front in the ACT, the cost of a failed listing is higher here than elsewhere. Those reports also disclose defects to every prospective buyer from day one.',
      'Crown leasehold tenure is standard and does not impede sale, but lease variation charges can apply where a property\'s permitted use is changed. Mr Fluffy loose-fill asbestos remains a known ACT-specific issue on affected blocks.',
    ],
  },
  {
    slug: 'northern-territory', name: 'Northern Territory', country: 'au', abbr: 'NT', kind: 'Territory',
    metros: ['Darwin', 'Palmerston', 'Alice Springs', 'Katherine', 'Nhulunbuy', 'Tennant Creek'],
    intro: 'The Northern Territory has Australia\'s smallest and most volatile property market, with cyclone exposure and a heavily transient population.',
    facts: [
      ['Cooling-off period', '4 business days'],
      ['Typical settlement', '30–45 days'],
      ['Local factor', 'Cyclone rating drives insurance and lender appetite'],
      ['Market depth', 'Small; strongly linked to defence and resources'],
    ],
    notes: [
      'Darwin values are closely tied to defence postings and major resource projects, producing sharper cycles than any capital city. A listing timed badly can sit for a very long time.',
      'Post-Tracy cyclone coding matters: homes built before 1975 that have not been upgraded face higher premiums and narrower financing options, which pushes them toward cash buyers.',
    ],
  },
];

// ── EXPORTS ──────────────────────────────────────────────────────────────────

export const regions: Region[] = [...us, ...uk, ...ca, ...au];

export function regionsFor(country: string) {
  return regions.filter((r) => r.country === country);
}

export function getRegion(country: string, slug: string) {
  return regions.find((r) => r.country === country && r.slug === slug);
}
