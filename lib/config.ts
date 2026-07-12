// ─────────────────────────────────────────────
// SINGLE PLACE TO REBRAND before launch.
// Domain: soldbeforesunday.com
// ─────────────────────────────────────────────
export const SITE_NAME = 'Sold Before Sunday';
export const SITE_URL = 'https://www.soldbeforesunday.com';

// ── In-code configuration (no env vars needed) ─────────────
export const GA_ID = ''; // GA4 Measurement ID e.g. 'G-XXXXXXXXXX' (empty = analytics off)
export const GSC_VERIFICATION = ''; // Google Search Console HTML-tag token
export const ADMIN_KEY = '64894db5572a234c8b89cefa988c7d4e'; // /admin?key=... (rotate any time)
export const CONTACT_EMAIL = 'hello@soldbeforesunday.com'; // shown in privacy policy
export const AI_MODEL = 'llama-3.3-70b-versatile'; // Groq model for lead scoring

// Env vars actually required at runtime (set in Vercel):
// DATABASE_URL, GROQ_API_KEY, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID
