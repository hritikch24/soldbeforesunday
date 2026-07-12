export default function TrustBar() {
  const items = [
    ['24–48h', 'to a real cash offer'],
    ['$0', 'fees, ever, to you'],
    ['Any', 'condition or situation'],
    ['4', 'countries, vetted buyers'],
  ];
  return (
    <div className="border-y border-[#e9e3d6] bg-paper">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-6 text-center md:grid-cols-4">
        {items.map(([big, small]) => (
          <div key={small}>
            <p className="h-display text-2xl font-bold text-moss">{big}</p>
            <p className="text-sm text-ink/60">{small}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
