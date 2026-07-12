// ─────────────────────────────────────────────
// SINGLE PLACE TO REBRAND before launch.
// Check swifthomeoffers.com or pick alternates.
// ─────────────────────────────────────────────
export const SITE_NAME = 'Swift Home Offers';
export const SITE_URL = 'https://www.swifthomeoffers.com';

// ── In-code configuration (no env vars needed) ─────────────
export const GA_ID = ''; // GA4 Measurement ID e.g. 'G-XXXXXXXXXX' (empty = analytics off)
export const GSC_VERIFICATION = ''; // Google Search Console HTML-tag token
export const ADMIN_KEY = 'change-me-before-launch'; // /admin?key=...
export const GROK_MODEL = 'grok-4-fast'; // model used for lead scoring

// Env vars actually required at runtime (set in Vercel):
// DATABASE_URL, GROK_API_KEY, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID
