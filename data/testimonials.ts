export interface Testimonial {
  quote: string;
  name: string;       // first name + last initial is fine, e.g. "Marcus T."
  location: string;   // "Memphis, TN"
  situation: string;  // "Inherited property"
  date: string;       // "March 2026"
  consent: true;      // ONLY add entries where the seller gave written permission
}

// ─────────────────────────────────────────────────────────────
// ⚠️  REAL TESTIMONIALS ONLY.
// Fabricated testimonials are illegal in the US (FTC fake-review
// rule), UK (DMCC Act) and Australia (ACL) — penalties are per
// violation. This array stays empty until real sellers give
// written consent. The site renders zero testimonial UI while
// it is empty, so nothing looks broken.
//
// HOW TO COLLECT (after each closed deal):
//  1. Ask the buyer/investor to request a short quote from the seller.
//  2. Get written permission by email or text — keep the record.
//  3. Add the entry below with the real name format and date.
// ─────────────────────────────────────────────────────────────
export const testimonials: Testimonial[] = [];
