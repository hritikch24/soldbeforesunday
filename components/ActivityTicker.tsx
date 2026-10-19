'use client';

// A subtle "live" strip. Deliberately shows CATEGORIES of activity and general
// regions — never invented names, addresses or dollar amounts (which would be
// fabricated claims). Purely ambient motion + real value props.
const items = [
  '✓ Free UK property enquiries',
  '✓ No fee for our introduction service',
  '✓ Sell in any condition',
  '✓ Agree a completion date with your solicitor',
  '✓ Inherited property, divorce and relocation enquiries',
  '✓ England, Scotland, Wales and Northern Ireland',
  '✓ Verify proof of funds before you sign',
  '✓ Honest advice — we tell you if listing is better',
];

export default function ActivityTicker() {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-[#e9e3d6] bg-ink py-2.5">
      <div className="flex w-max gap-8 whitespace-nowrap" style={{ animation: 'sbsMarquee 32s linear infinite' }}>
        {doubled.map((t, i) => (
          <span key={i} className="text-sm font-medium text-[#cfe0d6]">{t}</span>
        ))}
      </div>
    </div>
  );
}
