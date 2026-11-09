const pathways = [
  ['藝術管理與文化政策', '從展覽、社區藝術或演出經驗延伸至文化機構營運、策展製作與公共政策。'],
  ['品牌管理與時尚商業', '從視覺傳達、服裝或產品設計延伸至品牌策略、市場研究與零售。'],
  ['設計管理與商業創新', '從設計執行延伸至產品策略、團隊協作及組織創新。'],
  ['服務設計與使用者體驗', '把原型、調研與視覺化能力用於服務流程、數位產品及公共服務。'],
  ['數位媒體與創意科技', '從動畫、影像、互動或聲音延伸至媒體技術、沉浸體驗及跨媒介製作。'],
  ['時尚系統與永續設計', '從服裝、材料或產品延伸至循環設計、產業流程與永續策略。']
];

const countries = [
  ['英國', [
    ['倫敦藝術大學（LCC）', 'MA Design Management', 'https://www.arts.ac.uk/subjects/business-and-management-and-science/postgraduate/ma-design-management-lcc', '設計管理。準備能說明研究、協作與決策過程的案例。'],
    ['倫敦藝術大學（CSM）', 'MA Arts and Cultural Enterprise', 'https://www.arts.ac.uk/subjects/business-and-management-and-science/postgraduate/ma-arts-and-cultural-enterprise-csm', '文化事業管理。一般要求至少兩年相關工作經驗，不招本科畢業後直接升讀的學生。'],
    ['倫敦國王學院', 'MA Arts & Cultural Management', 'https://www.kcl.ac.uk/study/postgraduate-taught/courses/arts-and-cultural-management-ma', '文化機構營運。用展演或文化項目說明管理動機。'],
    ['倫敦大學金匠學院', 'MA Arts Administration & Cultural Policy', 'https://www.gold.ac.uk/pg/ma-arts-admin-cultural-policy/', '藝術行政與文化政策。整理機構實習、展覽協作或政策研究案例。'],
    ['曼徹斯特大學', 'MA Arts Management, Policy and Practice', 'https://www.manchester.ac.uk/study/masters/courses/list/08035/ma-arts-management-policy-and-practice/', '藝術機構與文化政策。核對本科成績、英語要求及相關經驗。'],
    ['華威大學', 'MA Cultural Management and Creative Leadership', 'https://warwick.ac.uk/study/postgraduate/courses/ma-cultural-management-creative-leadership/', '文化管理與創意領導。可用團隊製作或文化活動案例說明職涯方向。'],
    ['謝菲爾德大學', 'MSc Creative and Cultural Industries Management', 'https://sheffield.ac.uk/postgraduate/taught/courses/2026/creative-and-cultural-industries-management-msc', '創意與文化產業管理。核對目標入學年度及學位要求。'],
    ['巴斯斯巴大學', 'MA Arts Management', 'https://www.bathspa.ac.uk/courses/pg-arts-management/', '藝術項目管理。整理策展、演出製作或社區藝術經驗。'],
    ['倫敦大學伯貝克學院', 'MA Creative Industries Management and Policy', 'https://www.bbk.ac.uk/courses/postgraduate/creative-industries-management-and-policy', '創意產業管理與政策。從創作案例延伸至產業或機構分析。'],
    ['諾森比亞大學', 'MA Creative and Cultural Industries Management', 'https://www.northumbria.ac.uk/study-at-northumbria/courses/creative-and-cultural-industries-management-dtpcci6/', '文化與創意產業管理。核對本科背景，準備項目規劃案例。'],
    ['紐卡素大學', 'MA Creative and Cultural Industries Management', 'https://www.ncl.ac.uk/postgraduate/degrees/4197f/', '創意產業管理。可從展覽、媒體製作或文化項目切入。'],
    ['薩塞克斯大學', 'MA Cultural and Creative Industries', 'https://www.sussex.ac.uk/study/masters/courses/cultural-and-creative-industries-ma', '文化與創意產業研究。可用產業研究或文化項目說明轉申方向。'],
    ['瑪格麗特女王大學', 'MA Arts, Festival and Cultural Management', 'https://www.qmu.ac.uk/study-here/postgraduate-study/2026/ma-arts-festival-and-cultural-management', '藝術節與文化管理。可整理活動籌備、觀眾拓展或志願工作經驗。'],
    ['利茲大學', 'MA Arts Management and Heritage Studies', 'https://courses.leeds.ac.uk/g646/arts-management-and-heritage-studies-ma', '藝術管理與文化遺產。可從博物館、展覽或公共文化教育切入。'],
    ['格拉斯哥大學', 'MSc Creative Industries & Cultural Policy', 'https://www.gla.ac.uk/postgraduate/taught/creative-industries-cultural-policy/', '創意產業與文化政策。準備能說明政策興趣與研究能力的材料。'],
    ['蘭卡斯特大學', 'MA Design Management', 'https://www.lancaster.ac.uk/study/postgraduate/postgraduate-courses/design-management-ma/2027/', '設計管理。用作品案例說明調研、決策及跨團隊協作。'],
    ['考文垂大學', 'MA Design Management', 'https://www.coventry.ac.uk/course-structure/pg/cas/design-management-ma/?term=2027-28', '設計策略與管理。核對設計相關背景及當年度申請材料。'],
    ['德蒙福特大學', 'MA/MSc Design Innovation and Management', 'https://www.dmu.ac.uk/study/courses/postgraduate-courses/design-innovation-and-management-degree/design-innovation-management-ma-msc.aspx', '設計創新與管理。按本科背景和職涯方向核對 MA 或 MSc 路線。'],
    ['拉夫堡大學', 'MSc Design Innovation', 'https://www.lboro.ac.uk/study/postgraduate/masters-degrees/design-innovation/', '設計創新。可用研究、原型和測試案例說明如何把設計轉為產品或服務。'],
    ['諾丁漢特倫特大學', 'MA Luxury Fashion Brand Management', 'https://www.ntu.ac.uk/course/art-and-design/pg/ma-luxury-fashion-brand-management', '奢侈時尚品牌管理。從服裝或視傳延伸至品牌定位與市場分析。'],
    ['西敏寺大學', 'MA Fashion Business Management', 'https://www.westminster.ac.uk/fashion-courses/2027-28/september/full-time/fashion-business-management-ma', '時尚商業管理。核對本科背景，準備能說明商業動機的案例。'],
    ['曼徹斯特都會大學', 'MSc Luxury Fashion Management', 'https://www.mmu.ac.uk/study/postgraduate/course/msc-luxury-fashion-management', '奢侈時尚管理。可從設計案例延伸至顧客、品牌與零售分析。']
  ]],
  ['美國', [
    ['紐約大學（Steinhardt）', 'MA Visual Arts Administration', 'https://steinhardt.nyu.edu/degree/ma-visual-arts-administration/how-apply', '視覺藝術機構管理。可用展覽、畫廊或文化項目經驗說明轉申動機。']
  ]],
  ['法國', [
    ['巴黎政治學院', 'Cultural Policy and Management', 'https://www.sciencespo.fr/ecole-affaires-publiques/en/academics/masters/policy-streams/cultural-policy-management/', '公共事務碩士的文化政策方向。法語與英語方向分開，按所選方向核對語言要求。'],
    ['法國時裝學院（IFM）', 'MSc Fashion & Luxury', 'https://www.ifmparis.fr/en/programs/degree-certificate/msc-fashion-luxury', '時尚及奢侈品商業。從作品集延伸至品牌定位、消費者與市場分析。']
  ]],
  ['德國', [
    ['魏瑪包豪斯大學', 'MFA Media Art and Design', 'https://www.uni-weimar.de/en/studies/degree-programmes/media-art-and-design-mfa/', '媒體藝術與設計。按電影、互動或聲音方向準備作品，核對能力測試及授課語言。']
  ]],
  ['意大利', [
    ['米蘭理工大學', 'MSc Product Service System Design', 'https://www.polimi.it/en/education/laurea-magistrale-programmes/programme-detail/product-service-system-design', '產品與服務系統設計。核對本科學科背景，準備調研、原型及測試案例。'],
    ['米蘭理工大學', 'MSc Design for the Fashion System', 'https://www.polimi.it/en/education/laurea-magistrale-programmes/programme-detail/design-for-the-fashion-system', '時尚系統設計。可從服裝、材料或產品設計切入，核對本科背景及作品集要求。']
  ]],
  ['日本', [
    ['慶應義塾大學（KMD）', 'Master’s Program in Media Design', 'https://www.kmd.keio.ac.jp/admissions/masters-program/', '跨媒體設計。準備可說明問題、原型與研究方向的案例，按當期簡章核對選考方式。']
  ]],
  ['芬蘭', [
    ['阿爾托大學', 'International Design Business Management（MA，藝術與設計）', 'https://www.aalto.fi/en/study-options/international-design-business-management-master-of-arts-art-and-design', '英語授課。藝術與設計申請通道要求相關本科學歷，結合設計、商業及科技。']
  ]],
  ['瑞典', [
    ['林雪平大學', 'Design, Master’s Programme', 'https://liu.se/en/education/program/6mdes', '可從設計研究、服務設計或社會議題切入。按官網核對本科先修與申請材料。']
  ]]
];

module.exports = `<section id="transition">
  <h2 class="zh-herald-section-head">轉專業導向</h2>
  <p>藝術與設計本科可從以下六個方向規劃跨專業碩士申請。先選工作方向，再按院校要求核對本科學分、授課語言、作品集及相關經驗。</p>
  <ol>${pathways.map(([title, description]) => `<li><strong>${title}</strong>。${description}</li>`).join('')}</ol>
  <h3>各國院校與課程</h3>
  <p>點選國家查看課程示例。申請資格與材料以當年度校方簡章為準。</p>
  ${countries.map(([country, programmes]) => `<details class="art-faq"><summary>${country}（${programmes.length}）</summary><ul>${programmes.map(([school, programme, url, note]) => `<li><strong>${school}</strong><br><a href="${url}" target="_blank" rel="noopener noreferrer">${programme}</a><br>${note}</li>`).join('')}</ul></details>`).join('')}
</section>`;
