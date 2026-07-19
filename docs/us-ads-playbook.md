# US Google Ads Playbook — Sold Before Sunday
### Zero-waste configuration. Every setting here exists to stop a bad click.

---

## 0. IRON RULES (before a single dollar)
1. **No ads in a metro until an investor there has agreed to take leads.** Paid leads with no buyer = money burned twice.
2. **Search campaign ONLY.** At setup, UNTICK "Display Network" and UNTICK "Search Partners". These two checkboxes are where beginners lose 40% of budget.
3. **Exact match keywords only** at launch. Phrase/broad = Google spends your money "exploring".
4. **Conversion = form lead only** (already wired: fill GOOGLE_ADS_ID + ADS_LEAD_LABEL in lib/config.ts). Never optimize to clicks or pageviews.
5. Start in the 3 cheapest-CPC metros with hungriest investors: **Memphis, Cleveland, Birmingham AL.** Not all 12. Expand only on proof.

## 1. Campaign settings
| Setting | Value | Why |
|---|---|---|
| Type | Search only | See rule 2 |
| Networks | Google Search ONLY | Untick both partners/display |
| Locations | Memphis TN / Cleveland OH / Birmingham AL metros — "Presence" only (NOT "presence or interest") | "Interest" targeting shows ads to people outside the metro = waste |
| Language | English |  |
| Bidding at launch | Manual CPC, max **$12** | Below-market bid catches cheaper off-peak auctions; you lose impression share, not money |
| Bidding after 15+ conversions | Maximize Conversions w/ target CPA $80 | Only switch once Google has lead data to learn from |
| Budget | **$30/day total** (one campaign, 3 metro ad groups × ~$10) | Enough for 2–4 clicks/day; this niche is $10–40/click even bid low |
| Ad schedule | 24/7 | Distress doesn't keep office hours; 2am searches are the best leads |
| Ad rotation | Optimize | |
| URL suffix (campaign level) | `utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_term={keyword}` | Flows into your own /metrics UTM report automatically |

## 2. Ad groups & keywords (EXACT match only — brackets)
**Ad group: Memphis** → final URL `https://www.soldbeforesunday.com/us/memphis`
```
[sell my house fast memphis]
[we buy houses memphis]
[cash home buyers memphis]
[sell my house for cash memphis]
[sell house as is memphis]
```
**Ad group: Cleveland** → `/us/cleveland` — same 5 patterns with "cleveland"
**Ad group: Birmingham** → `/us/birmingham-al` — same 5 patterns with "birmingham"
**Ad group: Foreclosure (all 3 metros)** → `/us/situations/stopping-foreclosure`
```
[stop foreclosure memphis]   [stop foreclosure cleveland]   [stop foreclosure birmingham]
[sell house before foreclosure]
```

## 3. NEGATIVE KEYWORDS — the actual money-saver (add as campaign-level list, phrase match)
```
free, job, jobs, career, salary, hiring,
zillow, redfin, realtor.com, opendoor, offerpad, trulia,
agent, realtor, brokerage, listing, listings, mls,
rent, rental, renting, apartment, lease,
how to, diy, course, training, wholesaling, become an investor,
calculator, estimate, worth, value of my home, appraisal,
mortgage, refinance, loan, lender, heloc,
mobile home, land only, commercial, timeshare,
lawyer, attorney, tax, definition, meaning, reddit
```
Review the Search Terms report **every 3 days for the first 3 weeks** and add every irrelevant query as a negative. This single habit is 80% of "not wasting a penny."

## 4. Responsive Search Ads (per metro group — swap city name)
**Headlines (use all, pin #1 or #2 to position 1):**
1. Sell Your House Fast in Memphis
2. Cash Offer in 24–48 Hours
3. We Buy Houses As-Is
4. No Fees. No Repairs. No Agents.
5. Behind on Payments? Options Exist
6. Any Condition, Any Situation
7. Close in as Few as 7–14 Days
8. Inherited a House? We Buy Those
9. Skip the Showings & Commissions
10. Free, No-Obligation Cash Offer
11. Vetted Local Cash Buyers
12. You Pick the Closing Date

**Descriptions:**
1. Tell us about the property in 2 minutes. A vetted local cash buyer makes a real offer within 48 hours. Free, no obligation.
2. Foreclosure, divorce, inheritance, bad tenants, major repairs — we connect you with buyers who purchase as-is for cash.
3. No commissions, no repair demands, no strangers touring your home. Verify proof of funds before you sign anything.
4. Honest trade: cash offers run below retail in exchange for speed and certainty. Compare both numbers free.

**Why description 4 exists:** it repels bargain-curious clickers who'd cost you $25 and never sell. Pre-qualifying IN the ad is cheaper than after the click.

## 5. Assets (extensions)
- **Call asset:** +1 (331) 431-8078 (calls tracked as call_click in /metrics)
- **Sitelinks:** How It Works → /how-it-works · Avoid Scams → /guides/avoid-quick-sale-scams · FAQ → /faq · Stop Foreclosure → /us/situations/stopping-foreclosure
- **Callouts:** No Fees Ever · 24–48h Offers · Sell 100% As-Is · You Choose Closing Date
- **Structured snippet** (Types): Foreclosure, Inherited, Divorce, Damaged, Tenanted

## 6. Wire the conversion (one-time, 10 min)
1. Google Ads → Goals → Conversions → New → Website → "Lead form submitted", category **Submit lead form**, count **One**, value none.
2. Copy the AW id + label into `lib/config.ts` → `GOOGLE_ADS_ID`, `ADS_LEAD_LABEL`. Push.
3. Test: submit the form yourself via an ad preview click; conversion appears in Ads within a few hours. (Then mark your own lead junk in /metrics.)

## 7. Kill/scale rules (check /metrics weekly)
- Keyword with 15+ clicks, 0 leads → pause it.
- Metro with $150 spend, 0 leads → pause metro, investigate landing page or investor feedback first.
- Lead cost under $80 with investor paying $100–300 → raise that metro's budget 50%, repeat weekly while margin holds.
- CTR under 3% on a metro group → ad copy problem; rewrite headlines before spending more.

## 8. What NOT to do (Google will push all of these)
- ❌ "Upgrade to broad match" recommendations — never
- ❌ Performance Max — not until you have 50+ conversions
- ❌ Auto-apply recommendations — turn OFF in settings
- ❌ Display expansion, YouTube, Demand Gen — no
- ❌ Google's "add these keywords" suggestions — search-terms report only
