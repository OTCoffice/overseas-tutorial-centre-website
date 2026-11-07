const {pageShell}=require('../site');

const regions=[
  ['東亞與東南亞',[
    ['日本','文部科學省 MEXT','學士、研究生（含碩博路徑）','學費、津貼及指定旅費。','中國大陸按駐華使館與當年受理單位；香港看日本駐港總領館；台灣看日本台灣交流協會獨立簡章，按學位核對。',[
      ['MEXT 總覽','https://www.studyinjapan.go.jp/en/planning/scholarships/mext-scholarships/'],['香港','https://www.hk.emb-japan.go.jp/itpr_zh/study.html'],['台灣','https://www.koryu.or.jp/tw/']]],
    ['韓國','Global Korea Scholarship（GKS）','副學士／學士、碩士、博士','學費、津貼、機票及適用的韓語訓練。','按當年學位別及使館／大學渠道核對名額；台灣有駐台北韓國代表部的研究所公告。中國大陸及香港須查當年度指南與對應受理單位，勿沿用其他地區名額。',[
      ['GKS 官方指南','https://www.studyinkorea.go.kr/en/plan/scholarship.do?tab=gks-tab2'],['台灣 2026 研究所公告','https://overseas.mofa.go.kr/tw-zh/brd/m_1449/view.do?page=1&seq=761695']]],
    ['新加坡','Singapore International Graduate Award（SINGA）','研究型博士','學費、津貼及指定的一次性補助。','面向國際申請者。三地申請人可先查合適的研究課題及合作大學，並按當期條件核對。',[
      ['A*STAR 資助說明','https://www.a-star.edu.sg/docs/librariesprovider1/default-document-library/scholarships/flyers/240711_ia_brochure.pdf?sfvrsn=9d134969_1']]],
    ['汶萊','Brunei Darussalam Government Scholarship','文憑、學士、碩士','學費、住宿、津貼及指定旅費。','面向外國學生。三地申請人先向官方核對所持證件、年齡和院校資格。',[
      ['汶萊外交部','https://www.mfa.gov.bn/pages/online-bdgs.aspx']]]
  ]],
  ['歐洲',[
    ['羅馬尼亞','外交部政府獎學金','學士、碩士、博士','免學費及月津貼；宿舍補助按名額及規定。','面向符合條件的非歐盟申請人。三地先核對證件；學士與碩士通常以羅馬尼亞語授課，醫學、牙醫及藥學不在本方案內。',[
      ['官方申請平台','https://scholarships.studyinromania.gov.ro/'],['資格及資助','https://scholarships.studyinromania.gov.ro/scholarship-faq']]],
    ['英國','Chevening','一年制碩士','一般包括學費、生活津貼及往返旅費，個別課程有學費上限。','三地各有官方入口。適合已畢業並具備合資格工作經驗者，另有回原獎項地區要求。',[
      ['中國大陸','https://www.chevening.org/scholarship/china/'],['香港','https://www.chevening.org/scholarship/hong-kong/'],['台灣','https://www.chevening.org/scholarship/taiwan/'],['共通資格','https://www.chevening.org/resource-hub/guidance/eligibility/']]],
    ['歐盟多國','Erasmus Mundus Joint Masters','聯合碩士','全獎名額涵蓋課程參與成本，並補助生活、旅費及簽證。','向各課程聯盟直接申請，三地皆可按全球招生條件查找；逐項核對課程是否有當期全獎名額。',[
      ['歐盟委員會','https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/erasmus-mundus-joint-masters']]]
  ]],
  ['西亞',[
    ['土耳其','Türkiye Bursları','副學士／學士、碩士、博士','學費、津貼、住宿、保險、土耳其語課程及指定旅費。','國際招生，三地先按 TBBS 證件選項及年度資格查詢。即使是英授課程，獲獎者如無土耳其語 C1 仍須按規定修讀語言課。',[
      ['官方全日制方案','https://turkiyeburslari.gov.tr/fulltimeprograms'],['OTC 申請支援','/zh/turkiye-burslari/']]],
    ['沙特阿拉伯','公立大學外部獎學金','按院校與課程','官方區分全額、部分及自費名額；全額項目按錄取條款核對。','面向國際學生。三地申請人須核對平台受理證件及所選院校的全額名額。',[
      ['教育部','https://moe.gov.sa/en/education/admission-and-registration/publicuniversitiesscholarships'],['Study in Saudi','https://studyinsaudi.moe.gov.sa/']]]
  ]]
];

const complementary=[
  ['澳洲','Research Training Program（RTP）','研究型碩士及博士由大學受理，本地及國際學生均有渠道。只有獲獎通知同時列明學費抵免及生活津貼時，才按全獎估算。','https://www.education.gov.au/research-block-grants/research-training-program'],
  ['德國','DAAD 各學科碩士獎學金','按申請地及年度查資料庫。提供津貼及其他補助，DAAD 此項一般不代付學費。','https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database?detail=50026200'],
  ['愛爾蘭','Government of Ireland International Education Scholarship','面向符合境外居籍條件的申請人。得獎年度免學費並有津貼，資助只有一年，多年課程須另作預算。','https://hea.ie/policy/internationalisation/goi-ies/'],
  ['美國','Fulbright 台灣攻讀學位獎助金','台灣有獨立申請渠道。學費、津貼及資助年限按當期獎項與院校配套確認。','https://www.fulbright.org.tw/zh-hant/graduate-study-award/'],
  ['匈牙利','Stipendium Hungaricum','中國大陸及台灣各列有合作派出方；香港渠道須另核對。免學費及生活、住宿補助，但官方提醒補助未必覆蓋所有開支。','https://stipendiumhungaricum.hu/partners/'],
  ['中國大陸出境','CSC 國家公派','按具體項目核對派出條件。高水平公派研究生項目提供生活資助及指定旅費，學費須另行落實。','/zh/csc-scholarships/'],
  ['香港出境','香港卓越獎學金','有香港身分與居住要求。學費資助有上限，生活支援按經濟需要審查。','https://hkses.edb.gov.hk/tc/notes-for-applicants.html'],
  ['香港就讀','香港博士研究生獎學金 HKPFS','以津貼和研究差旅為主，學費豁免或補足由院校方案決定。','https://www.ugc.edu.hk/eng/rgc/hkphd/'],
  ['台灣出境','教育部公費留學與留學獎學金','兩者是不同制度，按年度簡章核對國籍、學群、資助上限及返國義務。','https://scholarship.moe.gov.tw/scholarship']
];

const links=items=>items.map(([label,url])=>`<a href="${url}">${label}</a>`).join(' · ');
module.exports=()=>pageShell({
  title:'政府全額獎學金｜海外督導 OTC',description:'按國家和地區查找政府全額獎學金，比較學位、資助範圍和中國大陸、香港、台灣的申請渠道。',
  image:'/assets/social/government-scholarships-20261107.png?v=20261107',imageWidth:1200,imageHeight:600,imageAlt:'政府全額獎學金',
  path:'/zh/government-scholarships/',current:'services',lang:'zh-Hant',locale:'zh',
  body:`<style>
  .award-guide{max-width:1060px;margin:auto;padding:24px 20px 44px;line-height:1.65;overflow-wrap:anywhere}
  .award-guide section{margin-top:26px;scroll-margin-top:110px}.award-guide h2{border-top:3px solid #263e4f;padding-top:12px}
  .award-guide h3{font-size:17px;margin:0}.award-guide p{margin:5px 0 8px}.award-guide article{border-bottom:1px solid #ded8ca;padding:14px 0}
  .award-guide nav{display:flex;flex-wrap:wrap;gap:8px 18px}
  </style>
  <section class="page-hero services-hero"><div class="band"><div class="service-hero-layout"><div>
  <div class="eyebrow">海外督導雙語世界 · 招生部</div><h1>政府全額獎學金</h1><p class="hero-sub">按留學目的地比較資助、學位和申請渠道。適用身分以當年度公告及受理單位為準。</p></div>
  <aside class="service-hero-panel"><a href="#region-0">東亞與東南亞</a><a href="#region-1">歐洲</a><a href="#region-2">西亞</a><a href="#other-funding">其他公費資助</a></aside></div></div></section>
  <main class="award-guide"><nav aria-label="留學導覽"><a href="/zh/study-planning/">留學規劃</a><a href="/zh/services/#study">留學申請服務</a></nav>
  <p>全獎專區收錄官方資助學費及生活的方案，包括有全獎名額的項目。保險、住宿、旅費及補助上限各有不同。以下為已核對官方來源的目錄，並非全球所有項目或當期開放名單。資料核對日期為 2026 年 11 月 7 日。</p>
  <p><strong>按學位找</strong>　本科可先看日本、韓國、汶萊、羅馬尼亞與土耳其；碩士可再看英國和歐盟聯合課程；研究型博士可再比較新加坡和各國研究資助。</p>
  ${regions.map(([region,items],index)=>`<section id="region-${index}"><h2>${region}</h2>${items.map(([country,name,level,funding,eligibility,sources])=>`<article><h3>${country}｜${name}</h3><p><strong>學位</strong>　${level}</p><p><strong>資助</strong>　${funding}</p><p><strong>申請渠道</strong>　${eligibility}</p><p>${links(sources)}</p></article>`).join('')}</section>`).join('')}
  <section id="other-funding"><h2>其他公費資助</h2><p>以下方案可能需要補足學費或生活費，按獲獎條件及院校配套計算。</p>
  ${complementary.map(([region,name,note,url])=>`<article><h3>${region}｜${name}</h3><p>${note}</p><a href="${url}">查看方案</a></article>`).join('')}</section>
  </main>`
});
