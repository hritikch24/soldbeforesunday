// Run against an isolated production server with delivery credentials disabled.
import assert from 'node:assert/strict';

const base = process.argv[2] || 'http://localhost:3100';
const domain = 'https://www.soldbeforesunday.com';
const sitemapResponse = await fetch(`${base}/sitemap.xml`);
assert.equal(sitemapResponse.status, 200);
const sitemap = await sitemapResponse.text();
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
assert.equal(new Set(urls).size, urls.length, 'No duplicate sitemap URLs');
assert.ok(urls.length >= 50, 'UK public pages are included');
assert.ok(!urls.some((url) => /\/(us|ca|au)(\/|$)/.test(url)));
assert.ok(!urls.includes(`${domain}/uk`), 'Redirect is excluded from sitemap');
for (const nation of ['england', 'scotland', 'wales', 'northern-ireland']) assert.ok(urls.includes(`${domain}/uk/${nation}`));

const titles = new Set();
const descriptions = new Set();
const internalLinks = new Set();
for (let offset = 0; offset < urls.length; offset += 5) {
  await Promise.all(urls.slice(offset, offset + 5).map(async (url) => {
    const path = new URL(url).pathname;
    const response = await fetch(`${base}${path}`, { redirect: 'manual' });
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.ok(html.includes('<html lang="en-GB"'), `${path}: UK language`);
    assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length, 1, `${path}: exactly one H1`);
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)[1];
    assert.equal(new URL(canonical).pathname, path, `${path}: self-canonical`);
    const title = html.match(/<title>(.*?)<\/title>/s)[1];
    const description = html.match(/<meta name="description" content="([^"]+)"/)[1];
    assert.ok(!titles.has(title), `${path}: unique title`);
    assert.ok(!descriptions.has(description), `${path}: unique description`);
    titles.add(title); descriptions.add(description);
    assert.ok(!/US · UK|United States|Canada and Australia|13314318078/.test(html), `${path}: no old international content`);
    for (const schema of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) JSON.parse(schema[1]);
    for (const match of html.matchAll(/<a\b[^>]*href="(\/(?!\/)[^"]*)"/g)) internalLinks.add(match[1].split(/[?#]/)[0] || '/');
    assert.ok(html.includes('tel:+447780443069'), `${path}: UK phone`);
    assert.ok(html.includes('wa.me/447780443069'), `${path}: UK WhatsApp`);
    assert.ok(!/<script[^>]+src="https:\/\/www.googletagmanager.com/.test(html), `${path}: no tags before consent`);
  }));
}
const publicPaths = new Set(urls.map((url) => new URL(url).pathname));
for (const path of internalLinks) assert.ok(publicPaths.has(path), `Internal link ${path} targets a canonical public page`);

for (const [from, to] of [['/uk', '/'], ['/uk/situations/stopping-foreclosure', '/uk/situations/repossession']]) {
  const response = await fetch(`${base}${from}`, { redirect: 'manual' });
  assert.equal(response.status, 308, from);
  assert.equal(new URL(response.headers.get('location'), base).pathname, to);
}
for (const path of ['/us', '/us/ohio', '/us/situations/divorce', '/ca', '/ca/toronto', '/au', '/au/sydney', '/uk/unknown-place']) {
  assert.equal((await fetch(`${base}${path}`, { redirect: 'manual' })).status, 404, path);
}
for (const country of ['US', 'GB', 'IN', 'CA', 'AU']) {
  assert.equal((await fetch(base, { headers: { 'x-vercel-ip-country': country }, redirect: 'manual' })).status, 200, 'Homepage never geo-redirects');
}
const robots = await (await fetch(`${base}/robots.txt`)).text();
for (const path of ['/api/', '/admin', '/metrics', '/thanks']) assert.ok(robots.includes(`Disallow: ${path}`));
assert.ok(robots.includes(`Sitemap: ${domain}/sitemap.xml`));

const valid = { country: 'uk', name: 'Local QA', phone: '+447780443069', address: 'Test property', postcode: 'BT1 5GS', contactConsent: true };
for (const data of [{ ...valid, country: 'us' }, { ...valid, contactConsent: false }, { ...valid, postcode: 'JE2 4BA' }, null]) {
  const response = await fetch(`${base}/api/lead`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
  assert.equal(response.status, 400, JSON.stringify(data));
}
if (process.env.CHECK_DELIVERY_FAILURE === '1') {
  const response = await fetch(`${base}/api/lead`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(valid) });
  assert.equal(response.status, 503, 'Unavailable delivery must not report success');
}
console.log(`Passed: ${urls.length} public pages, unique SEO metadata, structured data, canonical internal links, UK phone/WhatsApp, redirects, retired markets, robots and enquiry validation.`);
