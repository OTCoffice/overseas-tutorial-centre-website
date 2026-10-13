const {pageShell}=require('../site');
const frame=require('./academic-subpage.cjs');
const a=require('./music-study-planning.json');
module.exports=function(){
 const wa='https://wa.me/447947991572?text='+encodeURIComponent('你好，我想向招生部諮詢音樂留學。\n目前學制／年級：\n主修：\n目標入學年份與國家：\n語言與全程預算：');
 const cover=a.shareImageZh+'?'+a.socialImageVersion;
 const refs=a.sources.map(([name,url])=>`<li><a href="${url}" target="_blank" rel="noopener">${name} ↗</a></li>`).join('');
 const body=a.bodyHtml.replaceAll('MUSIC_CONTACT',wa)+`<section><h2>09　官方資料</h2><p>資料核查：2026 年 10 月 13 日。院校示例按現行官方頁整理，申請時請以目標入學年度的招生簡章為準。</p><ul>${refs}</ul><p><a href="/zh/subject-planning/">返回學科規劃</a> · <a href="/zh/countries/">國別留學規劃</a> · <a href="/zh/services/europe-exchange-support/">歐洲交換申請</a></p><figure><img src="${cover}" width="1200" height="630" loading="lazy" alt="音樂留學規劃：本科交換、本科申請與畢業升碩；海外督導雙語世界招生部"><figcaption>音樂留學規劃｜海外督導雙語世界・招生部</figcaption></figure></section>`;
 let content=frame(a.name,body)
  .replace('OTC · 海外督導','海外督導雙語世界')
  .replace('<h2>教育服務與雙語學習</h2>','<h2>本科・碩士・西班牙院校</h2>')
  .replace('按主題查閱服務、課程與出版資料，了解內容與聯絡方式。','從現在的年級與音樂方向出發，安排學歷、語言、試音及作品準備。')
  .replace('<strong>03　西班牙院校實例</strong>','<strong>03　西班牙院校</strong>')
  .replace('海外督導 OTC｜海圖規劃・留學諮詢','海外督導雙語世界｜招生部')
  .replace('href="https://wa.me/447947991572">立即諮詢','href="'+wa+'">聯絡招生部')
  .replace('href="/zh/site-directory/">全站目錄','href="/zh/subject-planning/">學科規劃')
  .replace(/<section class="band service-review-strip">[\s\S]*?<\/section>/,`<nav class="band service-review-strip" aria-label="音樂留學快捷導覽"><a href="#topic-0"><b>01</b><strong>申請路線</strong><span>交換、本科與碩士</span></a><a href="#topic-2"><b>02</b><strong>院校實例</strong><span>西班牙官方要求</span></a><a href="#topic-4"><b>03</b><strong>準備時間</strong><span>大二到畢業的安排</span></a><a href="#topic-7"><b>04</b><strong>招生部服務</strong><span>申請、費用與聯絡</span></a></nav>`);
 const css=`<style>
 .music-page .consolidated-page{max-width:1100px;margin:auto;padding:8px 28px 36px;font-size:16px;line-height:1.85;color:#283c4a}
 .music-page .services-hero h1{font-size:clamp(2rem,4vw,3rem);line-height:1.3}.music-page .services-hero h2{font-size:1.25rem;line-height:1.6}
 .music-page .services-hero .hero-sub{font-size:16px!important;line-height:1.8!important}.music-page .services-hero .eyebrow{font-size:13px!important}.music-page .service-hero-layout>div>p:last-child{font-size:16px!important}.music-page .service-hero-panel a::before,.music-page .service-review-strip a::before{display:none}.music-page .service-review-strip a{padding-left:20px!important}
 .music-page .service-hero-panel a{min-height:80px;padding:18px!important}.music-page .service-hero-panel strong{font-size:18px}
 .music-page .consolidated-page>section{padding:20px 0;border-bottom:1px solid #d8d6cc}.music-page h2[id]{scroll-margin-top:130px}
 .music-page .consolidated-page h2{font-size:24px;border-top:3px solid #173649;padding-top:15px;color:#173649;margin:12px 0 20px}
 .music-page .consolidated-page h3{font-size:19px;line-height:1.6;color:#173649;margin:16px 0 8px}.music-page p{margin:10px 0 16px}
 .music-columns{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:32px}.music-columns>div{min-width:0}
 .music-table{overflow-x:auto;margin:22px 0;border:1px solid #d8d6cc}.music-table table{width:100%;min-width:640px;border-collapse:collapse;font-size:15px}
 .music-table th,.music-table td{padding:15px;text-align:left;vertical-align:top;border-bottom:1px solid #d8d6cc}.music-table thead{background:#173649;color:#fffaf0}.music-table tbody th{width:155px;color:#173649;background:#f1f3f2}.music-table tr:last-child>*{border-bottom:0}
 .music-example{padding:8px 22px 18px;margin:20px 0;border-left:4px solid #b88a2d;background:#f8f4eb}.music-example:nth-of-type(2){border-color:#467b74}.music-example:nth-of-type(3){border-color:#758aa6}
 .music-timeline{padding-left:25px}.music-timeline li{padding:0 0 8px 8px}.music-timeline li::marker{color:#947125;font-weight:bold}.music-page li{margin:8px 0}
 .music-page .consolidated-page a{color:#174f68;text-decoration:underline;text-underline-offset:3px;overflow-wrap:anywhere}.music-page .consolidated-page .btn{color:#fff;text-decoration:none}.music-page .consolidated-page .btn-secondary{color:#173649}
 .music-page figure{max-width:600px;margin:28px 0 8px}.music-page figure img{display:block;width:100%;height:auto}.music-page figcaption{font-size:13px;color:#526374;margin-top:8px}
 @media(max-width:700px){.music-columns{grid-template-columns:1fr;gap:0}.music-page .consolidated-page{padding:8px 18px 28px}.music-page .consolidated-page h2{font-size:22px}.music-page .service-hero-panel,.music-page .service-review-strip{grid-template-columns:repeat(2,minmax(0,1fr))}.music-page .service-hero-panel a{min-height:88px;padding:14px!important}.music-page .service-hero-panel strong{font-size:16px}.music-example{padding:4px 16px 16px}.music-page .actions{flex-wrap:wrap}}
 </style>`;
 return pageShell({title:a.titleZh,path:a.path,current:'zh',lang:'zh-Hant',locale:'zh',description:a.summaryZh,image:cover,imageWidth:1200,imageHeight:630,imageAlt:a.name,bodyClass:'music-page',body:css+content});
};
