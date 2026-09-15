const a=require('./kyung-hee-service.json');
const escape=s=>String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
module.exports=function(base,route=a.path){
const url='https://overseasuk.com'+route;
const article='/zh/insights/kyung-hee-english-degrees-application-guide-2027/';
const cover=a.shareImageZh+'?'+a.socialImageVersion;
const intro='你好，我想了解慶熙大學申請支援。\n目前學歷／教育體系：\n年級及預計畢業年月：\n新生或插班：\n韓語／TOPIK、英語程度：\n預計入學年月與科系：';
const wa='https://wa.me/447947991572?text='+encodeURIComponent(intro);
const email='mailto:office@overseasuk.com?subject='+encodeURIComponent('慶熙大學｜初步申請評估')+'&body='+encodeURIComponent(intro);
const block=`<style>
.khu-service{max-width:1120px;margin:24px auto 52px;padding:0 24px;color:#1d302f}.khu-service h1{font-size:clamp(27px,3.3vw,43px);line-height:1.3;margin:18px 0}.khu-service h2{font-size:24px;margin:0 0 18px}.khu-service h3{font-size:18px;margin:0 0 9px}.khu-service p,.khu-service li{font-size:17px;line-height:1.8}.khu-service .ks-top{border-top:5px solid #14675e;padding:28px 0}.ks-label{color:#14675e;font-size:13px;font-weight:700;letter-spacing:2px}.ks-cover{margin:0 0 28px}.ks-cover img{width:100%;height:auto;display:block;border:1px solid #d1dacf}.ks-cover figcaption{font-size:12px;color:#687b74;margin:8px 0}.ks-actions{display:flex;flex-wrap:wrap;gap:10px;margin:22px 0}.ks-actions a{padding:12px 18px;border:1px solid #14675e;color:#14675e;font-weight:700;text-decoration:none;border-radius:5px}.ks-actions a:first-child{background:#14675e;color:white}.ks-grid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:30px}.ks-main{min-width:0}.ks-main section{padding:26px 0;border-bottom:1px solid #d1dacf}.ks-main section:first-child{padding-top:0}.ks-side{align-self:start;border:1px solid #bdcec5;background:#eef3ed;padding:24px}.ks-side ol{padding-left:24px}.ks-choice{padding:16px 0;border-top:1px solid #d1dacf}.ks-choice p{margin:0}.ks-notice{padding:18px 22px;background:#eef3ed;border-left:4px solid #14675e}.ks-steps{padding-left:24px}.ks-steps li{padding:6px 0}.ks-foot{margin-top:32px;font-size:14px;color:#687b74}.ks-links{display:flex;gap:14px;flex-wrap:wrap}.khu-service a{overflow-wrap:anywhere}.ks-share{display:flex;gap:15px;flex-wrap:wrap;border-top:1px solid #bdcec5;padding-top:20px}
@media(max-width:720px){.khu-service{padding:0 20px;margin-top:10px}.ks-grid{grid-template-columns:minmax(0,1fr)}.ks-actions a{flex:1 1 145px;text-align:center}.ks-side{margin-top:0}.khu-service p,.khu-service li{font-size:16px}.ks-cover{margin-left:0;margin-right:0}}
</style>
<main class="khu-service">
<a href="/zh/countries/south-korea/">← 韓國留學入口</a>
<header class="ks-top"><div class="ks-label">OTC APPLICATION SUPPORT · 韓國升學</div><h1>${a.titleZh}</h1><p>想讀慶熙，先把學習方向、語言與申請路線說清楚。海外督導協助你比較科系、核對資格、整理文件，再按可行的入學季推進。</p><nav class="ks-actions" aria-label="慶熙申請快捷入口"><a href="${wa}">免費初步評估</a><a href="${article}">閱讀英語系完整指南</a><a href="#service-scope">查看服務與費用</a><a href="#start">準備五項背景資料</a></nav></header>
<figure class="ks-cover"><img src="${cover}" width="1200" height="630" alt="慶熙大學申請支援：選科、文件、免費初步評估｜海外督導 OTC" loading="eager" fetchpriority="high"><figcaption>海外督導 OTC 申請支援｜本頁服務題圖</figcaption></figure>
<div class="ks-grid service-herald-grid"><div class="ks-main service-herald-main">
<section><h2>先找對英語專業</h2><p>2027 春季外國人本科簡章中的英語相關方向包括以下三個招生單位。英語專業與 English Track 不能畫上等號，申請時仍要逐項核對韓語條件。</p>
<div class="ks-choice"><h3>首爾｜英語英文學系</h3><p>比較英語語言學、英美文學及文化研究，適合想深入閱讀、分析和寫作的學生。</p></div>
<div class="ks-choice"><h3>首爾｜應用英語口筆譯學系</h3><p>關注應用語言學與英韓口筆譯；即使有大量英語授課，仍需認真準備韓語與雙向表達。</p></div>
<div class="ks-choice"><h3>國際校區｜全球溝通學部</h3><p>在英美語文／文學與英美文化之間選擇，涵蓋語言、文學、影視及文化內容。</p></div>
<p>具體課程、語言門檻及文件清單見<a href="${article}">《慶熙大學英語系申請指南》</a>。其他專業、碩博士與語學堂，可另按其招生簡章評估，不能沿用本科條件。</p></section>
<section id="service-scope"><h2>免費服務涵蓋什麼</h2><div class="ks-notice"><strong>符合 OTC 服務範圍的院校與課程，免收申請代辦服務費。</strong><p>先確認你的科系、入學季與申請背景，再說明適用服務及所需授權。是否接辦完整個案，以初步評估後的確認為準。</p></div>
<ul><li><strong>方向與資格：</strong>比較新生／插班、校區、科系與語言路線，核對官方要求。</li><li><strong>材料與時間：</strong>建立必交、追加及錄取後補交文件表，指出翻譯認證及截止時間。</li><li><strong>文書整理：</strong>解釋題目、梳理學生真實經歷及表達結構，由學生確認並負責最終內容。</li><li><strong>遞交與跟進：</strong>依院校規則協調提交、追蹤收件及補件，協助理解錄取條件與下一步。</li></ul>
<p><strong>另需自付：</strong>院校申請費、考試、翻譯／公證／認證、快遞、學費與訂金、住宿、簽證及其他第三方費用。額外付費項目若有需要，事先說明並經你同意才安排。</p><p>錄取由院校決定；我們不出售錄取、不代造文件或經歷，也不承諾獎學金、簽證或就業結果。<a href="/application-service-standards/">閱讀 OTC 申請服務準則 →</a></p></section>
<section><h2>從詢問到入學的七個步驟</h2><ol class="ks-steps"><li><strong>了解背景：</strong>先看學歷、語言、興趣與預計入學時間。</li><li><strong>確認範圍：</strong>說清可協助事項、免費部分、另付費用及資料授權。</li><li><strong>建立清單：</strong>按個人情況整理文件與取得日期。</li><li><strong>核對差距：</strong>確認資格，補足語言或認證；有疑問先向校方核實。</li><li><strong>整理與核稿：</strong>檢查資料一致性、文書內容、校區及專業名稱。</li><li><strong>遞交與補件：</strong>學生按要求繳費／郵寄，保留申請及快遞憑證。</li><li><strong>錄取後安排：</strong>確認接受期限、繳費、最終學歷和入學準備。</li></ol></section>
<section><h2>如果還沒考語言，也可以先釐清方向</h2><p>初次諮詢不需要先寄整套證件。你可以先說明目前狀況，我們再指出應優先準備韓語、申請文件，還是調整入學時間。初步評估不等於已符合報考或錄取條件。</p><p><strong>2027 春季提醒：</strong>上述韓語招生方向的新生主要 TOPIK 路線為 3 級以上，插班為 4 級以上；入學後另有語言及修課要求。不同認可替代資格、有效期、學歷與國籍條件，須按官方簡章核對。<a href="https://iadmission.khu.ac.kr/upload/contents/202608/202608140233157670.pdf" target="_blank" rel="noopener">查看 2027 春季官方簡章 →</a></p></section>
</div><aside class="ks-side service-guide-side" id="start"><div class="ks-label">開始評估</div><h2>先告訴我們五項資料</h2><ol><li>目前學歷與教育體系</li><li>年級及預計畢業年月</li><li>新生或插班申請</li><li>韓語／TOPIK 與英語程度</li><li>入學年月及感興趣科系</li></ol><p>未確定方向也沒關係，先提供已知道的部分即可。</p><div class="ks-actions"><a href="${wa}">WhatsApp 傳送背景</a><a href="${email}">Email 初步評估</a></div><p>WhatsApp：+44 7947 991572<br>Email：office@overseasuk.com<br>微信：overseasus</p><p>已在 Threads 私訊聯絡，可直接在原對話回覆以上資料，不必換平台重填。</p><a href="${article}">先看完整課程與申請文件指南 →</a></aside></div>
<p class="ks-foot">更新及資料核對：2026-09-15。本頁為海外督導 OTC 申請支援說明，並非慶熙大學官方招生頁或代理資格聲明。個人資格、開課與名額以院校當期書面要求為準。</p><nav class="ks-share" aria-label="分享慶熙申請服務頁"><strong>分享本頁</strong><a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(a.titleZh)}&url=${encodeURIComponent(url)}" target="_blank" rel="noopener">X</a><a href="https://www.threads.net/intent/post?text=${encodeURIComponent(a.titleZh+' '+url)}" target="_blank" rel="noopener">Threads</a><a href="https://wa.me/?text=${encodeURIComponent(a.titleZh+' '+url)}" target="_blank" rel="noopener">WhatsApp</a></nav>
</main>`;
let head=base.slice(0,base.indexOf('</head>'));
head=head.replace(/<title>.*?<\/title>/,`<title>${escape(a.titleZh)} | OTC Study Hub</title>`).replace(/<meta (?:name|property)="(?:description|og:[^"]+|twitter:[^"]+)"[^>]*>\s*/g,'').replace(/<link rel="canonical"[^>]*>/,`<link rel="canonical" href="${url}">`);
const metas={'description':a.summaryZh,'og:type':'website','og:site_name':'海外督導 OTC','og:title':a.titleZh,'og:description':a.summaryZh,'og:url':url,'og:image':'https://overseasuk.com'+cover,'og:image:type':'image/png','og:image:width':'1200','og:image:height':'630','og:image:alt':a.titleZh,'twitter:card':'summary_large_image','twitter:title':a.titleZh,'twitter:description':a.summaryZh,'twitter:image':'https://overseasuk.com'+cover};
head+='\n'+Object.entries(metas).map(([k,v])=>`  <meta ${k.startsWith('og:')?'property':'name'}="${k}" content="${escape(v)}">`).join('\n');
const bodyStart=base.indexOf('<body>')+6;const navEnd=base.indexOf('</header>',bodyStart)+9;const footer=base.indexOf('<footer class="site-footer">');
return head+'\n</head>\n<body>'+base.slice(bodyStart,navEnd)+block+base.slice(footer);
};
