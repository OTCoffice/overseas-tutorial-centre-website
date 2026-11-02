// Run after either node scripts/render-nursing.cjs or node generate-site.js.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const {execFileSync} = require('node:child_process');
const read = p => fs.readFileSync(p, 'utf8');
const baseline = p => execFileSync('git', ['show', `${process.env.NURSING_BASE_REF || 'origin/main'}:${p}`], {encoding:'utf8', maxBuffer:20*1024*1024});
const section = html => html.match(/<section class="nursing-international-extension"[\s\S]*?<\/section>\s*<style>[\s\S]*?<\/style>/)?.[0];
const hub = read('zh/nursing/index.html');
const original = section(baseline('zh/nursing/index.html'));
assert.ok(original, 'baseline must contain the international section');
assert.equal(section(hub), original, 'all international content, links and styles must survive');
assert.equal((section(hub).match(/<article>/g)||[]).length, 14);
assert.equal((hub.match(/id="global-nursing-pathways"/g)||[]).length, 1);
assert.equal((hub.match(/id="global-nursing-heading"/g)||[]).length, 1);
assert.equal(section(require('../content/nursing-template.cjs')('nursing-hub')), original);
const medicine = html => html.match(/<article id="medicine">[\s\S]*?<\/article>/)?.[0];
assert.equal(medicine(read('zh/subject-planning/index.html')), medicine(baseline('zh/subject-planning/index.html')));
assert.equal(medicine(require('../content/subject-study-hub.cjs').render()), medicine(baseline('zh/subject-planning/index.html')));
const data = JSON.parse(read('content/nursing-course-data.json'));
assert.equal(data.length, 254);
assert.equal(new Set(data.map(c=>c.providerCode)).size, 65);
for (const path of ['content/nursing-course-data.json','content/nursing-cricos-source.json','content/nursing-course-notes.json','vercel.json','zh/services/nursing-international/index.html']) {
  assert.equal(read(path), baseline(path), `preserve ${path}`);
}
for (const slug of ['nursing-australia','nursing-courses']) {
 assert.ok(!section(require('../content/nursing-template.cjs')(slug)), 'international section belongs only to the hub');
}
console.log('PASS: 14 international groups, source-backed navigation, 65 providers / 254 courses, styles, service links and redirects.');
