const {pageShell}=require('../site');
const academic=require('./academic-subpage.cjs');
const base='/zh/summer-school-alliance/taiwan/';
const table=(headers,rows)=>`<div class="winter-table"><table><thead><tr>${headers.map(h=>`<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(v=>`<td>${v}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
const scu='https://icae.scu.edu.tw/node/3504';
const fju='https://fjcuacademy.com/fju/course';
const support=`<h2>申請諮詢</h2><p>OTC 可協助比較課程、整理申請材料、確認校方要求，以及規劃住宿與行前準備。初次課程諮詢免費；如需進一步代辦或翻譯，先按服務範圍報價，確認後才開始。學校費用、機票、生活費及其他第三方費用另付。</p><ol><li>告知在讀學校、年級、可出發日期及預算。</li><li>確認申請資格、當期名額、費用與退費條款。</li><li>按校方要求準備材料，確認後提交。</li><li>依錄取通知安排付款、住宿及入境文件。</li></ol><p>初次諮詢毋須提供證件。錄取、入境許可、住宿及學分認可由相關機構決定。</p><p><a class="btn btn-primary" href="https://wa.me/447947991572?text=%E6%88%91%E6%83%B3%E4%BA%86%E8%A7%A3%E5%8F%B0%E7%81%A3%E5%86%AC%E6%A0%A1">WhatsApp 諮詢台灣冬校</a>　<a href="mailto:office@overseasuk.com?subject=Taiwan%20Winter%20School">office@overseasuk.com</a></p>`;
const contents={
 'taiwan-winter':`<h2>兩校比較</h2><p>輔仁位於新北市新莊，東吳本期冬校在台北市士林外雙溪校區。選擇時先看課程是否符合興趣，以及所屬學校是否符合報名要求。</p>${table(['項目','輔仁大學','東吳大學'],[
 ['2027 日期','1 月 19 日–2 月 2 日¹','1 月 18 日–2 月 4 日'],
 ['課程方向','英語溝通、藝術與心理、傳播、商業及服裝設計¹','AI 與法律／創業、文學電影、藝術社會、基礎日語'],
 ['資格','公開頁列全日制大學部及碩士生；實際受理範圍待確認¹','東吳大學大陸協議學校的在讀本科生或研究生'],
 ['費用','當期完整收費待確認','新台幣 84,500 元；機票及生活費另計'],
 ['住宿','宿舍地點、房型與收費待確認','外雙溪校區宿舍，17 晚'],
 ['來源','公開項目網站；校方確認待補','東吳大學國際與兩岸學術交流事務處簡章']])}<p><small>¹ 輔仁項目網站資料尚未找到校方官網交叉確認，暫供比較，不作為繳費依據。</small></p><p><a href="${base}fu-jen/">輔仁大學介紹與冬校資料 →</a>　<a href="${base}soochow/">東吳大學介紹與冬校資料 →</a></p><h2>選校</h2><p>偏好英語表達、傳播或設計，可先查看輔仁公開的課程方向，待校方確認當期安排。對 AI 應用、人文藝術或日語有興趣，可比較東吳課程；報名前先向母校確認協議學校資格。兩個項目日期重疊，不能按完整行程同時參加。</p><h2>資料來源</h2><p><a href="${scu}">東吳校方 2027 簡章</a> · <a href="${fju}">輔仁公開項目課程頁（校方確認待補）</a></p>${support}`,
 'fu-jen-winter':`<h2>學校</h2><p>天主教輔仁大學（Fu Jen Catholic University）位於新北市新莊區中正路 510 號。學校與短期項目的報名資格、課程及收費應分別查閱。</p><p><a href="https://www.fju.edu.tw/aboutFju.jsp?labelID=19">輔仁大學官方介紹</a> · <a href="https://www.fju.edu.tw/aboutFju.jsp?labelID=21">校方交通資訊</a></p><h2>冬季研習</h2><p>公開項目網站 fjcuacademy.com 列出以下 2027 年安排。目前未找到輔仁校方官網對此網站及當期項目的交叉確認，以下為項目頁資料，仍待校方確認。</p>${table(['項目','公開頁所列資料'],[
 ['研習期間','2027 年 1 月 19 日至 2 月 2 日'],['上課安排','1 月 20–28 日，上午 9:00–11:30'],['申請對象','全日制大學部及碩士生；個別資格待確認'],['選課','填寫三個意向，最終參加一門課程'],['課程方向','跨文化英語溝通、藝術與心理、媒體視覺傳播、金融與國際企業、服裝設計']])}<p>這些為短期研習方向；藝術與心理相關課程不等同專業治療師資格。<a href="${fju}">查看公開項目課程頁</a></p><h2>待確認資料</h2><p>申請前須取得校方或經校方確認之承辦單位的當期簡章，確認招生範圍、完整費用、住宿地點與房型、入境文件、退費條款及申請截止日。現階段不刊登未核實的報價。</p><h2>東吳比較</h2><p>東吳已有校方正式公布的 2027 冬校資料。可先比較課程、日期與資格，再決定申請方向。</p><p><a href="${base}">兩校冬校比較</a> · <a href="${base}soochow/">東吳大學冬校</a></p>${support}`,
 'soochow-winter':`<h2>學校</h2><p>東吳大學（Soochow University）在台北設有外雙溪與城中校區。2027 冬季研習班在外雙溪校區上課及住宿，地址為台北市士林區臨溪路 70 號。</p><p><a href="https://www.scu.edu.tw/">東吳大學官方網站</a> · <a href="${scu}">校方 2027 冬季研習班簡章</a></p><h2>冬季研習</h2>${table(['項目','2027 安排'],[
 ['日期','1 月 18 日至 2 月 4 日'],['報名期','2026 年 6 月 22 日至 11 月 15 日'],['資格','東吳大學大陸協議學校在讀本科生或研究生'],['選課','填兩個志願，最終最多參加一門；每門 20 小時'],['授課','中文授課；上課地點為外雙溪校區']])}<p>課程涵蓋 AI 與法律、AI 創業創新、文學與電影敘事、藝術與社會，以及基礎日語與文化。具體開課及選課結果按校方安排。</p><h2>費用</h2>${table(['校方收費項目','新台幣'],[
 ['註冊費','2,500'],['學費與參訪','65,000'],['17 晚宿舍與寢具','9,500'],['課程資料','3,000'],['入台證申請與擔保','3,000'],['學雜費與意外保險','1,500'],['合計','84,500']])}<p>總額不含往返機票及在台生活費。校方協助入台手續；付款前應確認個人申請資格及當期退費條款。</p><h2>報名</h2><p>可從校方簡章連至報名網站 <a href="https://soochow-academy.com/">soochow-academy.com</a>。校方聯絡信箱：<a href="mailto:scuip@mss.scu.edu.tw">scuip@mss.scu.edu.tw</a>。</p><p><a href="${base}">兩校冬校比較</a> · <a href="${base}fu-jen/">輔仁大學冬校資料</a></p>${support}`
};
module.exports=a=>{
 const cover=a.shareImageZh+'?'+a.socialImageVersion;
 const title=a.titleZh.split('｜')[0];
 const body=`<style>.consolidated-page{max-width:1100px;margin:auto;padding:32px 24px 64px;line-height:1.85;color:#18334d}.consolidated-page h2{border-top:2px solid #18334d;padding-top:20px;margin-top:36px;font-size:26px}.winter-table{overflow-x:auto}.winter-table table{border-collapse:collapse;width:100%;font-size:16px}.winter-table th,.winter-table td{padding:12px;border-bottom:1px solid #d7dce0;text-align:left;vertical-align:top}.winter-table th{background:#18334d;color:white}.consolidated-page figure{max-width:840px;margin:0 0 28px}@media(max-width:900px){.services-hero .service-hero-layout{grid-template-columns:1fr!important}.services-hero .service-hero-panel,.service-review-strip{grid-template-columns:repeat(2,minmax(0,1fr))!important}}@media(max-width:640px){.consolidated-page{padding:24px 18px}.winter-table table{font-size:14px;min-width:480px}}</style><figure><img src="${cover}" width="1200" height="630" alt="${title}｜2027 冬校" style="display:block;width:100%;height:auto"></figure>${contents[a.slug]}<p><a href="/zh/summer-school-alliance/">返回寒暑校聯盟</a></p><p><small>資料核查：2026 年 10 月 12 日。日期、名額、課程及收費以校方最新確認為準。</small></p>`;
 const layout=academic(title,body).replace('教育服務與雙語學習','寒暑校聯盟 · 2027 冬季研習').replace('按主題查閱服務、課程與出版資料，了解內容與聯絡方式。',a.summaryZh).replaceAll('查看相關內容','查看資料');
 return pageShell({title:a.titleZh,current:'services',lang:'zh-Hant',locale:'zh',path:a.path,description:a.summaryZh,image:cover,imageWidth:1200,imageHeight:630,imageAlt:title+'｜2027 冬校',body:layout});
};
