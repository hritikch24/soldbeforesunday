import test from 'node:test';
import assert from 'node:assert/strict';
import { getTrackingChoice, hasTrackingConsent, setTrackingChoice, CONSENT_EVENT } from '../lib/tracking-consent.ts';

test('tracking is denied by default and changes only with an explicit stored choice', () => {
  const values = new Map();
  globalThis.localStorage = { getItem: (key) => values.get(key) ?? null, setItem: (key, value) => values.set(key, value) };
  globalThis.window = new EventTarget();
  let notifications = 0;
  window.addEventListener(CONSENT_EVENT, () => notifications++);
  assert.equal(getTrackingChoice(), null);
  assert.equal(hasTrackingConsent(), false);
  setTrackingChoice('accepted');
  assert.equal(hasTrackingConsent(), true);
  setTrackingChoice('rejected');
  assert.equal(hasTrackingConsent(), false);
  assert.equal(notifications, 2);
});

test('storage failures leave optional tracking disabled', () => {
  globalThis.localStorage = { getItem() { throw new Error('Unavailable'); }, setItem() { throw new Error('Unavailable'); } };
  assert.equal(hasTrackingConsent(), false);
  assert.doesNotThrow(() => setTrackingChoice('accepted'));
  assert.equal(hasTrackingConsent(), false);
});
