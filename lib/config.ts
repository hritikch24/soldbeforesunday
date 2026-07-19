// ─────────────────────────────────────────────
// SINGLE PLACE TO REBRAND before launch.
// Domain: soldbeforesunday.com
// ─────────────────────────────────────────────
export const SITE_NAME = 'Sold Before Sunday';
export const SITE_URL = 'https://www.soldbeforesunday.com';

// ── In-code configuration (no env vars needed) ─────────────
export const GA_ID = ''; // GA4 Measurement ID e.g. 'G-XXXXXXXXXX' (empty = analytics off)
// Google Ads conversion tracking. Get both from Ads > Goals > Conversions >
// your Lead conversion > Tag setup. Empty = ads tracking off.
export const GOOGLE_ADS_ID = 'AW-16801337867';
export const ADS_LEAD_LABEL = ''; // e.g. 'AbCdEfGhIj0KLMNO' (conversion label only)
export const GSC_VERIFICATION = ''; // Google Search Console HTML-tag token
export const ADMIN_KEY = '64894db5572a234c8b89cefa988c7d4e'; // /admin?key=... (rotate any time)
export const CONTACT_EMAIL = 'support@soldbeforesunday.com'; // support inbox (privacy, footer, contact page)
// Phone/WhatsApp for enquiries. Leave PHONE empty ('') to hide all call/WhatsApp
// buttons site-wide; fill both to activate them everywhere at once.
export const PHONE = '+13314318078';
export const PHONE_DISPLAY = '+1 (331) 431-8078';
export const WHATSAPP = '13314318078';
export const AI_MODEL = 'llama-3.3-70b-versatile'; // Groq model for lead scoring

// Env vars actually required at runtime (set in Vercel):
// DATABASE_URL, GROQ_API_KEY, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID
