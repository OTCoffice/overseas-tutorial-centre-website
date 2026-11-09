const {pageShell}=require('../site');
const frame=require('./academic-subpage.cjs'),a=require('./japan-sgu-planning.json');
const programs=require('./japan-english-degree-programs.json');

function programTable(level){
  const rows=programs[level];
  return `<p>已收錄 ${rows.length} 個項目。招生輪次與截止日以校方頁面為準。</p>
  <div class="table-wrap"><table>
  <thead><tr><th scope="col">院校</th><th scope="col">項目</th><th scope="col">授課語言</th><th scope="col">招生資料與申請</th></tr></thead>
  <tbody>${rows.map(row=>`
  <tr><td>${row.school}</td><th scope="row">${row.program}</th><td>${row.language}</td>
  <td>${row.note}<br><a href="${row.application}">校方申請入口</a>${row.guide?` · <a href="${row.guide}">校方簡章或課程資料</a>`:''}</td></tr>`).join('')}
  </tbody></table></div>`;
}

module.exports=()=>{const body='<nav><a href="/zh/services/">服務總覽</a> / 日本英語學位</nav>'+`<figure style="max-width:600px;margin:16px auto"><img src="${a.shareImageZh}?${a.socialImageVersion}" alt="日本SGU英語學位選校規劃" width="1200" height="600" style="width:100%;height:auto"></figure>`+a.sections.map(s=>`<section><h2>${s.heading}</h2>${s.html}${s.degreeLevel?programTable(s.degreeLevel):''}</section>`).join('');return pageShell({title:a.titleZh,path:a.path,lang:'zh-Hant',locale:'zh',current:'services',bodyClass:'sgu-page',description:a.summaryZh,image:a.shareImageZh+'?'+a.socialImageVersion,imageWidth:1200,imageHeight:600,imageAlt:a.name,body:require('./compact-academic-style.cjs')('sgu-page')+'<style>.sgu-page .consolidated-page{max-width:1100px;margin:auto;padding:20px}.sgu-page section{padding-bottom:14px}.sgu-page .table-wrap{overflow-x:auto}.sgu-page table{width:100%;border-collapse:collapse}.sgu-page th,.sgu-page td{padding:10px;text-align:left;vertical-align:top;border-bottom:1px solid #d8d6cc}.sgu-page th{background:#eee9df}.sgu-page td:first-child{min-width:140px}</style>'+frame(a.name,body).replace(/<section class="band service-review-strip">[\s\S]*?<\/section>/,'').replace('<p>海外督導 OTC｜海圖規劃・留學諮詢</p>','').replace('教育服務與雙語學習','英語授課學位 · 本科與碩博').replace('按主題查閱服務、課程與出版資料，了解內容與聯絡方式。','課程比較、申請材料、語言準備與畢業去向。')});};
