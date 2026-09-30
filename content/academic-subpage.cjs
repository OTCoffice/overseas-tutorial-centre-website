// The approved PhD/service-desk visual system: reuse the existing hero and strip classes.
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
module.exports=function(title,body){
 const headings=[...body.matchAll(/<h2(?:\s[^>]*)?>(.*?)<\/h2>/g)].slice(0,4).map((m,i)=>({label:m[1].replace(/<[^>]+>/g,''),href:'#topic-'+i}));
 let n=0;body=body.replace(/<h2(?:\s[^>]*)?>(.*?)<\/h2>/g,(_,t)=>`<h2 id="topic-${n++}">${t}</h2>`);
 const fallback=[{label:'服務內容',href:'/zh/services/'},{label:'課程學習',href:'/#curriculum'},{label:'出版資料',href:'/zh/publishing/'},{label:'全站目錄',href:'/zh/site-directory/'}];
 const cards=[...headings,...fallback].slice(0,4);
 return `<section class="page-hero services-hero"><div class="band"><div class="service-hero-layout"><div><div class="eyebrow">OTC · 海外督導</div><h1>${esc(title)}</h1><h2>教育服務與雙語學習</h2><p class="hero-sub">按主題查閱服務、課程與出版資料，了解內容與聯絡方式。</p><div class="actions"><a class="btn btn-primary" href="https://wa.me/447947991572">立即諮詢</a><a class="btn btn-secondary" href="/zh/site-directory/">全站目錄</a></div><p>海外督導 OTC｜海圖規劃・留學諮詢</p></div><aside class="service-hero-panel">${cards.map(x=>`<a href="${x.href}"><strong>${esc(x.label)}</strong><span>查看相關內容</span></a>`).join('')}</aside></div></div></section><section class="band service-review-strip"><a href="https://wa.me/447947991572"><b>ASK</b><strong>立即諮詢</strong><span>WhatsApp 聯絡海外督導</span></a><a href="/zh/services/"><b>PLAN</b><strong>服務導覽</strong><span>留學、申請與專業支援</span></a><a href="/#learning-tools"><b>LEARN</b><strong>學習工具</strong><span>課程、練習與學習資源</span></a><a href="/zh/site-directory/"><b>READ</b><strong>內容目錄</strong><span>完整專題與出版入口</span></a></section><main class="consolidated-page">${body}</main>`;
};
