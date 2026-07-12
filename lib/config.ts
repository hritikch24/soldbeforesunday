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
export const AI_MODEL = 'llama-3.3-70b-versatile'; // Groq model for lead scoring

// Env vars actually required at runtime (set in Vercel):
// DATABASE_URL, GROQ_API_KEY, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID
