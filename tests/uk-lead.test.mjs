import test from 'node:test';
import assert from 'node:assert/strict';
import { isUKPostcode, normaliseUKPostcode, validateUKLead } from '../lib/uk-lead.ts';

const validLead = { country: 'uk', name: 'Test Seller', phone: '+447780443069', address: '10 Example Street', postcode: 'BT1 5GS', contactConsent: true };

test('accepts postcodes across all four UK nations and UK islands', () => {
  for (const postcode of ['SW1A 1AA', 'M1 1AE', 'EH1 1YZ', 'CF10 1EP', 'BT1 5GS', 'HS1 2AD', 'KW15 1NX', 'TR21 0LW', 'PO30 1UD', 'LL77 7TW', 'GIR 0AA']) {
    assert.equal(isUKPostcode(postcode), true, postcode);
  }
  assert.equal(normaliseUKPostcode('  sw1a1aa '), 'SW1A 1AA');
});

test('rejects overseas, Crown Dependency and malformed property postcodes', () => {
  for (const postcode of ['', '90210', 'M5V 3L9', '2000', 'JE2 4BA', 'GY1 1AA', 'IM1 1AA', 'ZZ99 9ZZ', 'SW1A 123', '<script>']) {
    assert.equal(isUKPostcode(postcode), false, postcode);
  }
});

test('enquiry requires a UK property, contact details and explicit permission', () => {
  assert.equal(validateUKLead(validLead), null);
  for (const update of [{ country: 'us' }, { postcode: 'JE2 4BA' }, { contactConsent: false }, { contactConsent: 'true' }, { name: ' ' }, { phone: 'invalid' }, { address: '' }, { email: 'invalid' }, { address: 'x'.repeat(2001) }]) {
    assert.ok(validateUKLead({ ...validLead, ...update }), JSON.stringify(update));
  }
  assert.equal(validateUKLead({ ...validLead, postcode: 'EH1 1YZ', phone: '+1 202 555 0100' }), null, 'Overseas owners may enquire about their UK property');
});
