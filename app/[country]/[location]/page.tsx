import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCountry } from '@/data/countries';
import { cities, cityLabel } from '@/data/cities';
import { regions, getRegion } from '@/data/regions';
import CityBody from '@/components/CityBody';
import RegionBody from '@/components/RegionBody';

// One dynamic segment serves both layers, so existing /us/memphis URLs are
// untouched while /us/ohio is added alongside them. Next.js allows only one
// dynamic segment per level, which is why this dispatches rather than nesting.

export const dynamicParams = false; // anything not pre-rendered 404s cleanly

export function generateStaticParams() {
  const cityParams = cities.map((c) => ({ country: c.country, location: c.slug }));
  const regionParams = regions.map((r) => ({ country: r.country, location: r.slug }));

  // A region slug colliding with a city slug would silently shadow a live,
  // indexed URL. Fail the build instead of letting that reach production.
  const seen = new Map<string, string>();
  for (const p of [...cityParams, ...regionParams]) {
    const key = `${p.country}/${p.location}`;
    if (seen.has(key)) throw new Error(`Duplicate location slug: /${key} — rename the region or city in data/`);
    seen.set(key, key);
  }
  return [...cityParams, ...regionParams];
}

function resolve(country: string, location: string) {
  const co = getCountry(country);
  if (!co) return null;
  const city = cities.find((x) => x.slug === location && x.country === country);
  if (city) return { co, city, region: null };
  const region = getRegion(country, location);
  if (region) return { co, city: null, region };
  return null;
}

export async function generateMetadata({ params }: { params: Promise<{ country: string; location: string }> }): Promise<Metadata> {
  const { country, location } = await params;
  const hit = resolve(country, location);
  if (!hit) return {};
  const { co, city, region } = hit;
  const url = `/${country}/${location}`;

  if (city) {
    return {
      title: `Sell My House Fast ${cityLabel(city)} — Cash Offer in 24–48h`,
      description: `Sell your house fast in ${city.name}, ${city.region}. Free cash offer from vetted local buyers — any condition, no fees, ${co.processTerm} in ${co.days}.`,
      openGraph: { title: `Sell My House Fast ${cityLabel(city)} — Cash Offer in 24–48h`, description: city.blurb, url },
      alternates: { canonical: url },
    };
  }

  const r = region!;
  return {
    title: `Sell My House Fast in ${r.name} — Cash Offer in 24–48h`,
    // Region-specific so no two of the 84 pages share a description.
    description: `${r.intro} Free no-obligation cash offer from vetted ${r.name} buyers — any condition, no fees, ${co.processTerm} in ${co.days}.`.slice(0, 320),
    openGraph: { title: `Sell My House Fast in ${r.name}`, description: r.intro, url },
    // Deliberately no hreflang here: a US state has no UK/CA/AU counterpart, and
    // non-reciprocal alternates are a Search Console error. Self-canonical only.
    alternates: { canonical: url },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ country: string; location: string }> }) {
  const { country, location } = await params;
  const hit = resolve(country, location);
  if (!hit) notFound();
  const { co, city, region } = hit;
  return city ? <CityBody co={co} ci={city} /> : <RegionBody co={co} r={region!} />;
}
