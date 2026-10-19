'use client';

import Link from 'next/link';

export default function LeadConsent({ checked, onChange }: { checked: boolean; onChange: (checked: boolean) => void }) {
  return (
    <div className="space-y-2 text-xs leading-relaxed text-ink/65">
      <label className="flex cursor-pointer items-start gap-2">
        <input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} className="mt-0.5 h-4 w-4 shrink-0 accent-[#10231b]" required />
        <span>I agree that Sold Before Sunday may contact me by phone, text or email about this property enquiry.</span>
      </label>
      <p>We will identify any proposed buyer and confirm your permission before sharing your details. No unrelated marketing. Read our <Link href="/privacy" className="text-moss underline">Privacy Policy</Link>.</p>
    </div>
  );
}
