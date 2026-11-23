const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const a=require('../content/international-application-support.json');
const render=require('../content/international-application-support.cjs');
const desk=require('../content/service-desk.cjs');
const read=file=>fs.readFileSync(path.join(root,file),'utf8');

test('source render retains both service entry points and matches checked-in output',()=>{
  for(const [category,file] of [[undefined,'zh/services/index.html'],['learning','zh/services/categories/learning/index.html']]){
    const html=desk(category).replace(/[ \t]+$/gm,'');
    assert.ok(html.includes(`href="${a.path}"`));
    assert.equal(html,read(file));
  }
  assert.equal(render().replace(/[ \t]+$/gm,''),read(a.path.slice(1)+'index.html'));
});

test('one working share component between content and shared footer',()=>{
  const html=render();
  assert.equal((html.match(/class="page-utility-bar"/g)||[]).length,1);
  assert.ok(html.indexOf('</main>')<html.indexOf('class="page-utility-bar"'));
  assert.ok(html.indexOf('class="page-utility-bar"')<html.indexOf('class="site-footer"'));
  const url='https://overseasuk.com'+a.path;
  assert.ok(html.includes(`data-page-copy-link="${url}"`));
  assert.ok(html.includes(`data-email-body="${encodeURIComponent(url)}"`));
  for(const label of ['X','Threads','LinkedIn','Facebook','WhatsApp','Telegram']){
    const anchor=html.match(new RegExp('<a href="([^"]+)"[^>]*>'+label+'</a>'));
    assert.ok(anchor,label);assert.ok(decodeURIComponent(anchor[1]).includes(url),label);
  }
  for(const text of ['合規提示','學術誠信','聯絡與出版信息','id="service-contact"'])assert.ok(html.includes(text));
  const main=html.match(/<main[\s\S]*?<\/main>/)[0];
  assert.equal((main.match(/¥2,800/g)||[]).length,1);
  assert.ok(!/mailto:|wa\.me/.test(main));
  for(const text of ['修改次數、付款及退款條款','不保證面試、錄取、工作邀請、簽證批准','不包括受監管的移民法律建議'])assert.ok(main.includes(text));
});

test('topic-specific versioned image and matching metadata',()=>{
  const html=render(),image='https://overseasuk.com'+a.shareImageZh+'?'+a.socialImageVersion;
  for(const key of ['og:image','twitter:image'])assert.ok(html.includes(`="${key}" content="${image}"`));
  assert.ok(html.includes('property="og:image:width" content="1200"'));
  assert.ok(html.includes('property="og:image:height" content="440"'));
  assert.ok(html.includes('name="twitter:card" content="summary_large_image"'));
  assert.ok(fs.existsSync(path.join(root,a.shareImageZh)));
});
