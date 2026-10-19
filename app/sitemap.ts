import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/config';
import { countries } from '@/data/countries';
import { cities } from '@/data/cities';
import { regions } from '@/data/regions';
import { situations } from '@/data/situations';

// Bump ONLY when page content genuinely changes. Previously this file used
// `new Date()`, which told Google every URL was modified on every deploy —
// Google responds by distrusting lastmod entirely and wasting crawl budget.
// A stable, honest date is worth far more than a fresh one.
const CONTENT_REVISED = new Date('2026-10-20');
const EVERGREEN = new Date('2026-10-20');

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: CONTENT_REVISED, priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: EVERGREEN, priority: 0.5 },
    { url: `${SITE_URL}/contact`, lastModified: EVERGREEN, priority: 0.5 },
    { url: `${SITE_URL}/faq`, lastModified: EVERGREEN, priority: 0.7 },
    { url: `${SITE_URL}/how-it-works`, lastModified: EVERGREEN, priority: 0.7 },
    { url: `${SITE_URL}/glossary`, lastModified: EVERGREEN, priority: 0.6 },
    { url: `${SITE_URL}/guides`, lastModified: EVERGREEN, priority: 0.7 },
    { url: `${SITE_URL}/guides/how-fast-cash-house-sales-work`, lastModified: EVERGREEN, priority: 0.6 },
    { url: `${SITE_URL}/guides/cash-offer-vs-listing-real-math`, lastModified: EVERGREEN, priority: 0.6 },
    { url: `${SITE_URL}/guides/avoid-quick-sale-scams`, lastModified: EVERGREEN, priority: 0.6 },
    { url: `${SITE_URL}/privacy`, lastModified: EVERGREEN, priority: 0.2 },
    { url: `${SITE_URL}/terms`, lastModified: EVERGREEN, priority: 0.2 },
  ];

  for (const c of countries) {
    for (const s of situations) {
      entries.push({ url: `${SITE_URL}/${c.slug}/situations/${s.slug}`, lastModified: EVERGREEN, priority: 0.7 });
    }
  }

  // Regions above cities: a regional page is the broader query and the hub that
  // links its cities, so it carries the higher priority of the two.
  for (const r of regions) {
    entries.push({ url: `${SITE_URL}/${r.country}/${r.slug}`, lastModified: CONTENT_REVISED, priority: 0.8 });
  }
  for (const ci of cities) {
    entries.push({ url: `${SITE_URL}/${ci.country}/${ci.slug}`, lastModified: EVERGREEN, priority: 0.75 });
  }

  return entries;
}
