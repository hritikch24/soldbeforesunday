import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCountry } from '@/data/countries';
import { cities, cityLabel } from '@/data/cities';
import { regions, getRegion } from '@/data/regions';
import CityBody from '@/components/CityBody';
import RegionBody from '@/components/RegionBody';

// One route serves UK cities and regions without duplicate location slugs.

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
  const { city, region } = hit;
  const url = `/${country}/${location}`;

  if (city) {
    return {
      title: { absolute: `Sell House Fast in ${cityLabel(city)} | Sold Before Sunday` },
      description: `Sell your house fast in ${city.name}, ${city.region}. Request a free cash-buyer introduction. Houses and flats considered; no obligation to accept an offer.`,
      openGraph: { title: `Sell My House Fast ${cityLabel(city)} — UK Cash Buyer Introductions`, description: city.blurb, url },
      alternates: { canonical: url },
    };
  }

  const r = region!;
  return {
    title: { absolute: `Sell House Fast in ${r.name} | Sold Before Sunday` },
    // Each UK location has a distinct search description.
    description: `Sell your house fast in ${r.name}. Free cash-buyer introductions and local property guidance. No obligation; availability varies.`,
    openGraph: { title: `Sell My House Fast in ${r.name}`, description: r.intro, url },
    // These are distinct UK places, so each URL is self-canonical.
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
