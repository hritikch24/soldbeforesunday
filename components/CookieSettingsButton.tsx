'use client';

import { SETTINGS_EVENT } from '@/lib/tracking-consent';

export default function CookieSettingsButton() {
  return <button type="button" onClick={() => window.dispatchEvent(new Event(SETTINGS_EVENT))} className="text-sm underline underline-offset-4">Cookie settings</button>;
}
