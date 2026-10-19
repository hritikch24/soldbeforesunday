import { notFound, permanentRedirect } from 'next/navigation';

export const dynamicParams = false;
export function generateStaticParams() { return [{ country: 'uk' }]; }

export default async function CountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  if (country === 'uk') permanentRedirect('/');
  notFound();
}
