export const PRIVACY_VERSION = '2026-10-20';

export function normaliseUKPostcode(value: string): string {
  const compact = value.toUpperCase().replace(/\s/g, '');
  return compact.length > 3 ? `${compact.slice(0, -3)} ${compact.slice(-3)}` : compact;
}

export function isUKPostcode(value: string): boolean {
  const postcode = value.toUpperCase().replace(/\s/g, '');
  // Crown Dependencies and overseas territories are outside this UK service.
  if (/^(JE|GY|IM)/.test(postcode)) return false;
  return /^(GIR0AA|[A-PR-UWYZ][A-HK-Y]?\d[\dA-HJKPSTUW]?\d[ABD-HJLNP-UW-Z]{2})$/.test(postcode);
}

export function validateUKLead(data: Record<string, unknown>): string | null {
  const str = (key: string) => typeof data[key] === 'string' ? (data[key] as string).trim() : '';
  if (str('country') !== 'uk') return 'We currently accept UK properties only.';
  if (!str('name') || !str('address') || !str('phone')) return 'Please enter your name, phone number and property address.';
  if (!isUKPostcode(str('postcode'))) return 'Enter a valid UK property postcode, including England, Scotland, Wales or Northern Ireland.';
  if (!/^[+\d\s().-]{7,30}$/.test(str('phone')) || str('phone').replace(/\D/g, '').length < 7) return 'Please enter a valid contact phone number.';
  if (str('email') && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str('email'))) return 'Please enter a valid email address or leave it blank.';
  if (data.contactConsent !== true) return 'Please confirm that we may contact you about this enquiry.';
  if (Object.values(data).some((value) => typeof value === 'string' && value.length > 2000)) return 'One of the fields is too long. Please shorten it and try again.';
  return null;
}
