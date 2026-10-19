'use client';

import { useEffect, useState } from 'react';

const KEY = 'sbs_tracking_consent_v1';
export const CONSENT_EVENT = 'sbs:tracking-consent';
export const SETTINGS_EVENT = 'sbs:cookie-settings';

export function getTrackingChoice(): 'accepted' | 'rejected' | null {
  try {
    const value = localStorage.getItem(KEY);
    return value === 'accepted' || value === 'rejected' ? value : null;
  } catch { return null; }
}

export function hasTrackingConsent(): boolean {
  return getTrackingChoice() === 'accepted';
}

export function setTrackingChoice(value: 'accepted' | 'rejected') {
  try { localStorage.setItem(KEY, value); } catch { /* Optional tracking stays off if storage is unavailable. */ }
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function useTrackingConsent(): boolean {
  const [accepted, setAccepted] = useState(false);
  useEffect(() => {
    const sync = () => setAccepted(hasTrackingConsent());
    sync();
    window.addEventListener(CONSENT_EVENT, sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener(CONSENT_EVENT, sync);
      window.removeEventListener('storage', sync);
    };
  }, []);
  return accepted;
}
