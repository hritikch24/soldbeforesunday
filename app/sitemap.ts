import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/config';
import { countries } from '@/data/countries';
import { cities } from '@/data/cities';
import { situations } from '@/data/situations';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: now, priority: 0.5 },
  ];
  for (const c of countries) {
    entries.push({ url: `${SITE_URL}/${c.slug}`, lastModified: now, priority: 0.9 });
    for (const s of situations) entries.push({ url: `${SITE_URL}/${c.slug}/situations/${s.slug}`, lastModified: now, priority: 0.8 });
  }
  for (const ci of cities) entries.push({ url: `${SITE_URL}/${ci.country}/${ci.slug}`, lastModified: now, priority: 0.8 });
  return entries;
}
