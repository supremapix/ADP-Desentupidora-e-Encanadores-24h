import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const root = path.resolve('dist');
const entry = fs.readFileSync('index.tsx', 'utf8');
assert.ok(entry.includes(`document.head.querySelectorAll('[data-rh="true"]').forEach(tag => tag.remove())`), 'client boot only removes explicitly owned static metadata');
assert.ok(entry.indexOf('querySelectorAll') < entry.indexOf('ReactDOM.createRoot'), 'static ownership is released before React mounts');
const urls = [...fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8').matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
for (const url of urls) {
  const route = new URL(url).pathname;
  const file = path.join(root, route.endsWith('.html') ? route.slice(1) : route.slice(1), route.endsWith('.html') ? '' : 'index.html');
  const html = fs.readFileSync(file, 'utf8');
  for (const name of ['og:title', 'og:description', 'og:url', 'og:image', 'og:image:width', 'og:image:height']) {
    assert.equal([...html.matchAll(new RegExp(`property="${name}"`, 'g'))].length, 1, `${route}: ${name} must occur once`);
  }
  assert.equal([...html.matchAll(/rel="canonical"/g)].length, 1, `${route}: canonical must occur once`);
  assert.ok(html.includes('data-rh="true" rel="canonical"'), `${route}: canonical ownership marker`);
  assert.ok(html.includes('data-rh="true" property="og:url"'), `${route}: social ownership marker`);
  assert.ok(html.includes(`rel="canonical" href="${url}"`), `${route}: correct canonical`);
  assert.ok(html.includes(`property="og:url" content="${url}"`), `${route}: correct og:url`);
  assert.ok(html.includes('property="og:image" content="https://www.desentopeadp.com.br/og-adp.jpg"'), `${route}: absolute OG image`);
  assert.ok(html.includes('name="twitter:card" content="summary_large_image"'), `${route}: large image card`);
  assert.ok(html.includes('href="/favicon.svg"'), `${route}: favicon`);
  assert.equal([...html.matchAll(/id="developer-suprema-link"/g)].length, 1, `${route}: one footer attribution`);
}
console.log(`PASS: unique canonical/social tags, absolute OG URL, favicon and footer across ${urls.length} sitemap routes.`);
