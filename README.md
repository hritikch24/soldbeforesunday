# Sold Before Sunday — UK property introductions

Next.js 16 and Tailwind 4. UK-only enquiries covering England, Scotland, Wales and Northern Ireland, including rural areas and UK islands. Buyer availability is checked per property; coverage does not guarantee a buyer or an offer.

The canonical UK homepage is `/`. `/uk` permanently redirects there. Existing UK city and regional URLs are retained; `/uk/situations/stopping-foreclosure` redirects to `/uk/situations/repossession`. Retired US, Canadian and Australian URLs return 404 and are excluded from the sitemap.

## Coverage and SEO

- Four nation hubs, all nine English regional guides and 19 city pages, with specific local property considerations and internal links.
- Six UK situation guides, three seller articles, FAQ and UK glossary.
- Self-canonical public pages, unique titles/descriptions, `en-GB`, Open Graph previews and Organization/Service/Breadcrumb/Article structured data. No fabricated reviews or local office addresses.
- `/sitemap.xml` contains 50 canonical public URLs. `/robots.txt` excludes API, administration, metrics and confirmation paths.
- Phone and WhatsApp: **+44 7780 443069**, managed centrally in `lib/config.ts`.

## Enquiry flow

The four-step form and popup require a UK property postcode and explicit permission for us to contact the seller. Crown Dependencies are excluded; overseas owners can still enquire about UK properties. Proposed buyers must be identified and permission confirmed before sharing details; this is a manual operational step, not automated buyer dispatch.

`POST /api/lead` validates the request, records permission and policy version, and attempts database storage plus a private Telegram notification. If neither delivery path works it returns 503; the form shows an error instead of a false success. Optional Groq scoring receives only limited property categories, excluding names, contact details, street addresses and free-text messages.

Optional first-party tracking and Google tags remain off until accepted. Visitors can reject them or reopen Cookie settings in the footer/privacy policy.

## Runtime configuration

- `DATABASE_URL`: PostgreSQL connection for Prisma.
- `GROQ_API_KEY`: optional enquiry prioritisation.
- `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID`: optional private delivery notifications.
- `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GOOGLE_ADS_ID`, `NEXT_PUBLIC_ADS_LEAD_LABEL`, `NEXT_PUBLIC_GSC_VERIFICATION`: optional analytics, advertising and Search Console settings.

At least one of database or Telegram delivery must work to accept enquiries. Review the existing administrative authentication configuration before production use. Apply the existing Prisma schema to the configured database through the established deployment process.

## Validation

```sh
npm run build
node --test tests/uk-lead.test.mjs
```

The postcode tests require Node.js 22.18+ (native TypeScript support). For the HTTP/SEO check, run the production server in an isolated environment with database, Telegram and Groq credentials disabled, then:

```sh
CHECK_DELIVERY_FAILURE=1 node scripts/check-uk-site.mjs http://localhost:3100
```

The delivery-failure check deliberately submits a local QA enquiry. Do not enable it against a live service. All other checks validate public pages, redirects and rejected enquiries.

## Operating the UK service

Online property introduction businesses can operate in the UK, but actively introducing buyers and sellers can fall within estate agency work. A “connection service” label does not create an exemption. Confirm the exact model and applicable requirements with a UK adviser before operating regulated activities:

- [HMRC: estate agency business supervision](https://www.gov.uk/guidance/registration-guide-for-estate-agency-businesses)
- [HMRC: introducing businesses and property portals](https://www.gov.uk/hmrc-internal-manuals/economic-crime-supervision-handbook/ecsh53050)
- [GOV.UK: property redress schemes](https://www.gov.uk/redress-scheme-estate-agencies)
- [ICO: collecting information and generating leads](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/direct-marketing-guidance/collect-information-and-generate-leads/)

Legal operator name/address and any registration or redress details were deferred at the owner's request. No membership or registration is claimed on the site. The owner still needs to supply applicable business disclosures, confirm AML/redress and data protection obligations, provider agreements/transfer safeguards, record retention and the buyer introduction/fee process. Website wording is not regulatory clearance.

For indexing, configure Search Console verification, verify the production domain and submit `/sitemap.xml`. Search rankings and indexing cannot be guaranteed.
