// OTC 卡片目錄格式（2026-11-25）：頁籤＋搜尋＋提示條＋卡片網格。
// 用法：const {renderCardDirectory}=require('./card-directory.cjs'); renderCardDirectory(json.directory)
const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const CSS = `<style>
.cd{max-width:1120px;margin:0 auto;padding:8px 20px 40px;font-size:14px;color:#1b263d}
.cd-head h2{font-size:20px;margin:18px 0 4px;padding-left:10px;border-left:4px solid #74333a}
.cd-head p{margin:0 0 14px;color:#6b6b6b;font-size:13px}
.cd-bar{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:0 0 12px}
.cd-tab{border:1px solid #d9cfb4;background:#fff;color:#1b263d;border-radius:999px;padding:6px 14px;font-size:13px;cursor:pointer}
.cd-tab.on{background:#1b263d;color:#f9f6ee;border-color:#1b263d;box-shadow:inset 0 -2px 0 #ae9340}
.cd-search{margin-left:auto;min-width:220px;border:1px solid #d9cfb4;border-radius:999px;padding:7px 14px;font-size:13px}
.cd-tip{background:#f9f6ee;border-left:4px solid #ae9340;border-radius:8px;padding:10px 14px;font-size:13px;margin:0 0 14px}
.cd-tip b{margin-right:6px;color:#74333a}
.cd-grouphead{display:flex;justify-content:space-between;font-weight:700;font-size:13px;margin:6px 0 10px}
.cd-grouphead span{font-weight:400;color:#6b6b6b}
.cd-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
.cd-card{border:1px solid #e4dcc8;border-top:3px solid #1b263d;border-radius:10px;background:#fff;padding:14px;display:flex;flex-direction:column;gap:8px;scroll-margin-top:90px}
.cd-top{display:flex;justify-content:space-between;align-items:flex-start;gap:8px}
.cd-region{font-size:11px;color:#7a7a7a}
.cd-badge{font-size:11px;background:#74333a;color:#f9f6ee;border-radius:4px;padding:2px 7px;white-space:nowrap}
.cd-card h3{font-size:15px;margin:0;line-height:1.4;color:#1b263d}
.cd-chips{display:flex;flex-wrap:wrap;gap:6px}
.cd-chips span{font-size:11px;background:#f9f6ee;color:#1b263d;border:1px solid #e4dcc8;border-radius:4px;padding:2px 7px}
.cd-desc{margin:0;line-height:1.75;color:#3d3d3d;flex:1}
.cd-desc a{color:#74333a}
.cd-note{background:#f9f6ee;border:0;border-left:3px solid #ae9340;border-radius:6px;padding:7px 10px;font-size:12px;color:#5a5a5a;line-height:1.6}
.cd-note b{color:#74333a;margin-right:4px}
.cd-btns{display:flex;gap:8px}
.cd-btns a{font-size:13px;text-decoration:none;border-radius:6px;padding:8px 10px;text-align:center}
.cd-p{flex:1;background:#1b263d;color:#f9f6ee;border-bottom:2px solid #ae9340}
.cd-s{border:1px solid #ae9340;color:#1b263d;background:#fff}
.cd-foot{margin-top:18px;font-size:12px;color:#6b6b6b;line-height:1.8}
.cd-foot a{color:#74333a}
.cd-empty{display:none;color:#6b6b6b;padding:20px 0}
@media(max-width:900px){.cd-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:600px){.cd-grid{grid-template-columns:1fr}.cd-search{margin-left:0;width:100%}}
</style>`;
const JS = `<script>(()=>{const r=document.querySelector('.cd');if(!r)return;let t='all';const q=r.querySelector('.cd-search'),cs=[...r.querySelectorAll('.cd-card')],e=r.querySelector('.cd-empty'),n=r.querySelector('.cd-count');function f(){const k=(q.value||'').trim().toLowerCase();let c=0;cs.forEach(x=>{const ok=(t==='all'||x.dataset.tab===t)&&(!k||x.textContent.toLowerCase().includes(k));x.style.display=ok?'':'none';if(ok)c++});e.style.display=c?'none':'block';n.textContent=c}r.querySelectorAll('.cd-tab').forEach(b=>b.onclick=()=>{r.querySelectorAll('.cd-tab').forEach(y=>y.classList.remove('on'));b.classList.add('on');t=b.dataset.tab;f()});q.oninput=f;if(location.hash){const h=r.querySelector(location.hash);if(h)h.scrollIntoView()}})();</script>`;
const btn = (b, cls) => b && b.href ? `<a class="${cls}" href="${esc(b.href)}"${/^https?:/.test(b.href) && !b.href.includes('overseasuk.com') ? ' rel="noopener" target="_blank"' : ''}>${esc(b.label)}</a>` : '';
function card(c) {
  return `<article class="cd-card" data-tab="${esc(c.tab)}"${c.id ? ` id="${esc(c.id)}"` : ''}>
<div class="cd-top"><span class="cd-region">${esc(c.region)}</span>${c.badge ? `<span class="cd-badge">${esc(c.badge)}</span>` : ''}</div>
<h3>${esc(c.title)}</h3>
${c.chips?.length ? `<div class="cd-chips">${c.chips.map(x => `<span>${esc(x)}</span>`).join('')}</div>` : ''}
<p class="cd-desc">${c.desc}</p>
${c.note ? `<div class="cd-note"><b>${esc(c.noteLabel || '提醒')}：</b>${c.note}</div>` : ''}
${c.primary || c.secondary ? `<div class="cd-btns">${btn(c.primary, 'cd-p')}${btn(c.secondary, 'cd-s')}</div>` : ''}
</article>`;
}
function renderCardDirectory(d) {
  const tabs = [{ id: 'all', label: '全部' }, ...(d.tabs || [])];
  return `${CSS}<main class="cd" id="directory">
<div class="cd-head"><h2>${esc(d.title)}</h2>${d.subtitle ? `<p>${esc(d.subtitle)}</p>` : ''}</div>
<div class="cd-bar">${tabs.map((t, i) => `<button type="button" class="cd-tab${i ? '' : ' on'}" data-tab="${esc(t.id)}">${esc(t.label)}</button>`).join('')}<input class="cd-search" type="search" placeholder="${esc(d.searchPlaceholder || '搜尋關鍵詞')}" aria-label="搜尋"></div>
${d.tip ? `<div class="cd-tip"><b>${esc(d.tipLabel || '小貼士')}：</b>${d.tip}</div>` : ''}
<div class="cd-grouphead">${esc(d.groupTitle || '')}<span><span class="cd-count">${d.cards.length}</span> 項</span></div>
<div class="cd-grid">${d.cards.map(card).join('\n')}</div>
<p class="cd-empty">沒有符合的項目，換個關鍵詞試試。</p>
${d.footer ? `<div class="cd-foot">${d.footer}</div>` : ''}
</main>${JS}`;
}
module.exports = { renderCardDirectory };
