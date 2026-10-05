const sources = [
 ['united-kingdom','英國','GOV.UK｜英語短期學生簽證','https://www.gov.uk/visa-to-study-english/overview','依課程長度區分訪客、短期學生及學生簽證；英語短期學生簽證不允許工作。'],
 ['new-zealand','紐西蘭','Immigration New Zealand｜英語學生簽證','https://www.immigration.govt.nz/visas/english-language-student-visa/','查閱全日制英語課程、資金、保險、年齡及個別工作條件。'],
 ['ireland','愛爾蘭','ISD｜留學與課程資格','https://www.irishimmigration.ie/coming-to-study-in-ireland/what-are-my-study-options/planning-to-study-in-ireland/','付款前查核課程資格、ILEP／TrustEd Ireland、財力及居留條件。'],
 ['canada','加拿大','IRCC｜學習許可申請指南','https://www.canada.ca/en/immigration-refugees-citizenship/services/application/application-forms-guides/guide-5269-applying-study-permit-outside-canada.html','確認是否需要學習許可；僅修讀英語或法語語言課程不能據此在校外打工。'],
 ['united-states','美國','美國國務院｜學生簽證','https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html','確認學校資格、I-20、SEVIS 與簽證類別，勿將訪客身分視作全日制語言課程許可。'],
 ['malta','馬爾他','Identità｜簽證問答及學生文件','https://identita.gov.mt/frequently-asked-questions/visa/','按國籍、課程及停留長度核對學生簽證、延期與所需文件。'],
 ['philippines','菲律賓','Bureau of Immigration｜Special Study Permit','https://immigration.gov.ph/services/special-study-permit/','查核 SSP 特別學習許可；另向校方確認入境停留、延期及其他適用費用。'],
 ['malaysia','馬來西亞','移民局｜Student Pass','https://www.imi.gov.my/index.php/en/main-services/pass/student-pass/','語言中心有特定學生准證規則；確認校方資格、申請程序與體檢要求。'],
 ['singapore','新加坡','ICA｜私立教育機構 Student’s Pass','https://www.ica.gov.sg/reside/STP/apply/pei','先確認機構及課程是否適用 Student’s Pass，按 ICA 要求辦理。'],
 ['japan','日本','外務省｜留學簽證','https://www.mofa.go.jp/j_info/visit/visa/long/visa6.html','長期留學核對在留資格認定證明書 COE、簽證與所在地使領館文件要求。'],
 ['south-korea','韓國','Study in Korea｜簽證與居留','https://www.studyinkorea.go.kr/en/plan/visaAndStay.do','政府留學入口；按課程核對 D-4 等適用資格及所在地使領館要求。'],
 ['france','法國','France-Visas｜學習與培訓','https://france-visas.gouv.fr/web/france-visas/etudier-se-former','用官方簽證助手按國籍、居住地及課程查詢；短期和長期程序不同。'],
 ['germany','德國','聯邦政府 Make it in Germany｜語言學習簽證','https://www.make-it-in-germany.com/en/visa-residence/types/other/language-acquisition','獨立語言課程與升學前語言準備可能適用不同居留目的。'],
 ['spain','西班牙','外交部｜學生簽證（倫敦領館說明）','https://www.exteriores.gob.es/Consulados/londres/en/ServiciosConsulares/Paginas/Consular/Visado-de-estudios.aspx','可參考學生簽證及語言課程條件；遞交地點和材料以本人居住地所屬領館為準。'],
 ['italy','意大利','外交部｜Visa for Italy','https://vistoperitalia.esteri.it/?lang=en','輸入國籍、居住地、停留天數與 Study 目的，查詢適用材料及領館。'],
 ['portugal','葡萄牙','外交部｜臨時停留簽證文件','https://vistos.mne.gov.pt/en/national-visas/necessary-documentation/temporary-stay','按課程及停留目的確認臨時停留或其他簽證，勿把一般語言課程等同高等教育學位。'],
 ['australia','澳洲','澳洲教育部｜CRICOS 官方課程查詢','https://cricos.education.gov.au/','同時查核院校與具體課程代碼、校區及註冊狀態，再確認學生簽證條件。']
];
const extra = {
 canada: [['IRCC｜校外工作資格','https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/work-off-campus.html']],
 australia: [['內政部｜Student visa（Subclass 500）','https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500']],
 ireland: [['ISD｜ILEP 與 TrustEd 過渡','https://www.irishimmigration.ie/coming-to-study-in-ireland/what-are-my-study-options/interim-list-of-eligible-programmes-ilep/'],['QQI｜TrustEd Ireland 評估及授權資料','https://www.qqi.ie/trusted-ireland-reports']]
};
const a=(name,url)=>`<a href="${url}" target="_blank" rel="noopener">${name} ↗</a>`;
function government(slug){
 const rows=slug?sources.filter(s=>s[0]===slug):sources;
 return `<section class="language-government" id="government"><h2>${slug?'政府資料與申請資格':'17 國政府入口'}</h2><p>依所持護照、居住地、年齡、課程與停留時間查核。入學通知不等於簽證或居留核准，語言課程也不一定附帶工作權利。</p>${rows.map(([id,name,label,url,note])=>`<article><h3>${name}</h3><p>${a(label,url)}${(extra[id]||[]).map(([l,u])=>'<br>'+a(l,u)).join('')}</p><p>${note}</p></article>`).join('')}<p class="lang-meta">官方入口整理：2026 年 10 月 5 日。申請前重新查閱主管機關及所屬使領館；學校資料的核對日期另列。</p></section>`;
}
module.exports={sources,government};
