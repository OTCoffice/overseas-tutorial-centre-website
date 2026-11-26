// Nursing hub only: retain the native header/footer and shared card renderer.
const {pageShell}=require('../site');
const {renderCardDirectory}=require('./card-directory.cjs');
module.exports=()=>{
 const a=require('./nursing-hub.json');
 const hero=`<section class="page-hero services-hero"><div class="band"><div class="eyebrow">OTC · 海外督導</div><h1 style="font-size:28px!important">${a.name}</h1><p class="hero-sub">按國家查看課程、院校與護士註冊資料。</p></div></section>`;
 const breadcrumb='<nav class="band" aria-label="頁面位置"><a href="/">首頁</a> ／ <a href="/zh/subject-planning/#medicine">學科規劃</a> ／ <span aria-current="page">護理升學</span></nav>';
 const contact='<section class="band" id="contact"><span id="topic-4"></span><h2>申請諮詢</h2><p>海外督導雙語世界｜招生部。按「申請材料」準備基本資料，透過頁腳聯絡招生部，了解合適課程與申請安排。</p><p><a class="btn btn-primary" href="#footer-contact">聯絡招生</a></p></section>';
 const related='<section class="band"><h2>相關服務</h2><p><a href="/zh/nursing/courses/">護理院校</a> · <a href="/zh/australia-job-search-coaching/">澳洲求職</a> · <a href="/zh/immigration-info/">移民資訊</a></p></section>';
 const cards=renderCardDirectory(a.directory).replace('<main class="cd" id="directory">','<main class="cd" id="directory"><span id="topic-0"></span>');
 const anchored=cards.replace('id="planning">','id="planning"><span id="topic-1"></span>').replace('id="materials">','id="materials"><span id="topic-2"></span>').replace('id="fees">','id="fees"><span id="topic-3"></span>');
 const css='<style>.cd .cd-table{overflow-x:auto}.cd .cd-head h2{font-size:20px}.cd .cd-card[data-tab="歐洲"]{border-top-color:#74333a}.cd .cd-card[data-tab="大洋洲"]{border-top-color:#ae9340}.cd .cd-card[data-tab="北美洲"]{border-top-color:#557e77}.cd .cd-card[data-tab="亞洲"]{border-top-color:#526b83}</style>';
 return pageShell({title:a.titleZh,current:'services',path:a.path,locale:'zh',lang:'zh-Hant',description:a.summaryZh,image:a.shareImageZh+'?'+a.socialImageVersion,imageWidth:a.socialImageWidth,imageHeight:a.socialImageHeight,imageAlt:'護理升學：課程與院校、入學與申請、護士註冊',body:css+breadcrumb+hero+anchored+contact+related,bodyClass:'nursing-page nursing-hub',shareAtBottom:true}).replace('<footer class="site-footer"','<footer id="footer-contact" class="site-footer"');
};
