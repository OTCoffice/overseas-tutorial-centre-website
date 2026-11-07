const route = '/zh/services/overseas-degree-transfer/';
const title = '海外專升本｜韓外大插班與新加坡 SIM';
const description = '比較韓外大插班與新加坡 SIM 合作大學學位，查詢學分抵免、語言要求與免費申請代辦範圍。';

module.exports = ({pageShell, hero, contact, css, schools, schoolURL}) => {
  const [hufs, sim] = schools;
  const body = hero('海外專升本', '韓外大插班 · 新加坡 SIM', '核對專科背景、入學年級、可抵學分與剩餘修讀時間。', [
    ['院校比較', '韓外大與 SIM', '#universities'],
    ['免費代辦', '服務範圍及另付費用', '#fees'],
    ['申請流程', '先核對課程與資格', '#process'],
    ['聯絡招生部', '按背景確認方案', '#consultation'],
  ]) + `
<main class="uni-main">
  <section class="uni-section" id="universities">
    <h2>院校與入學路線</h2>
    <table><thead><tr><th scope="col">路線</th><th scope="col">申請前要核對</th></tr></thead><tbody>
      <tr><th scope="row"><a href="${schoolURL(hufs)}">韓國外國語大學</a></th><td>查看當期國際生插班簡章。按專科學歷、目標系所及授課語言核對可申請年級、韓語或英語要求，以及入學後學分認定。<br><a href="https://international.hufs.ac.kr/">韓外大國際招生 ↗</a></td></tr>
      <tr><th scope="row"><a href="${schoolURL(sim)}">新加坡 SIM GE</a></th><td>先選具體本科課程，確認頒授學位的合作大學、英語要求及是否接受現有專科學歷作學分抵免。向課程方確認剩餘修讀時間及費用。<br><a href="https://www.sim.edu.sg/degrees-diplomas/sim-global-education/university-partners-sim-ge">SIM 合作大學 ↗</a> · <a href="https://www.sim.edu.sg/degrees-diplomas/admissions">SIM 申請入口 ↗</a></td></tr>
    </tbody></table>
  </section>
  <section class="uni-section" id="fees">
    <h2>免費代辦與費用</h2>
    <p>招生部先按院校、課程及申請渠道確認可代辦範圍。適用免費代辦的項目，OTC 不收申請代辦服務費，包含申請材料清單、基本文件核對、提交協助、補件及進度跟進。</p>
    <p>學費、院校申請費、語言考試費、翻譯、公證認證、簽證規費及其他第三方費用另付。額外文書修改與獨立諮詢按範圍另行確認。韓外大和 SIM 的可代辦渠道按具體課程核對，簽證協助如有需要另行確認。</p>
  </section>
  <section class="uni-section" id="process">
    <h2>申請流程</h2>
    <ol><li>提供專科專業、就讀或畢業狀態、目標專業、語言程度及入學時間。</li><li>比較兩地課程、插班年級、學分抵免及總費用。實際錄取與抵免由院校或學位頒授方審核。</li><li>確認可代辦項目及費用後，再準備材料和提交申請。</li></ol>
    <p><a href="/zh/services/university-application-advisory/">查看 OTC 大學申請與院校目錄 →</a></p>
  </section>
  ${contact('海外專升本')}
</main>` + css;
  return {url:route,title,desc:description,html:pageShell({
    title,description,current:'zh',lang:'zh-Hant',locale:'zh',path:route,body,
    image:'/assets/social/overseas-degree-transfer-20261107.png?v=1',imageWidth:1200,imageHeight:600,
  })};
};
