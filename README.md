# Swift Home Offers — Global Motivated-Seller Lead Site

Next.js 16 + Tailwind 4. One .com, four country sections (/us /uk /ca /au) with hreflang and native terminology (foreclosure/repossession, closing/completion/settlement, realtor/estate agent).

## Pages (~65)
Home (country gateway) · 4 country landing pages · 32 city pages · 24 situation pages (6 × 4 countries, country-adapted copy) · about.

## Conversion engine
4-step LeadForm (address → property → situation → contact) on every country/city/situation page. Submits to /api/lead → forwards JSON to LEAD_WEBHOOK_URL (Zapier/Make/Telegram/Sheets). GA4 fires `lead_submit` event (mark as Key Event).

## Launch checklist
1. Buy domain (check swifthomeoffers.com; alternates: rapidhomeoffers.com, keysoldfast.com) → update lib/config.ts.
2. Env vars in Vercel: NEXT_PUBLIC_GA_ID, NEXT_PUBLIC_GSC_VERIFICATION, LEAD_WEBHOOK_URL.
3. Deploy → verify GSC → submit /sitemap.xml.
4. In GA4 mark lead_submit as Key Event.
5. Recruit lead buyers per metro (REI groups; UK: NAPB-member buyers; AU/CA equivalents) BEFORE traffic arrives.

## Honest-copy choices (deliberate)
- Positioned as a "connection service" (true), buyers vet + proof-of-funds advice included.
- Below-market trade-off disclosed on About + FAQ — builds trust, filters tire-kickers, keeps UK (TPO/NAPB norms) and AU (ACL) compliance-friendly.
- No fake testimonials or invented statistics.
# swifthomeoffers

## Lead engine (built-in — replaces LEAD_WEBHOOK_URL)
Every lead → Postgres (Prisma) + Grok AI score + instant Telegram message + /admin dashboard.

**Only 4 env vars (set in Vercel):**
- `DATABASE_URL` — Postgres (Neon/Vercel Postgres free tier). After first deploy: `curl -X POST "https://YOURDOMAIN.com/api/db-run?key=ADMIN_KEY"` (creates tables; same pattern as sigma)
- `GROQ_API_KEY` — Groq API key from console.groq.com (lead scoring; skipped gracefully if unset)
- `TELEGRAM_BOT_TOKEN` — from @BotFather
- `TELEGRAM_CHAT_ID` — your chat id (message @userinfobot)

**In-code config (lib/config.ts):** GA_ID, GSC_VERIFICATION, ADMIN_KEY (change it!), AI_MODEL.
**Admin dashboard:** `/admin?key=<ADMIN_KEY>` — statuses: new / contacted / sold / junk.
