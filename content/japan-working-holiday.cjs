// Japan-specific content. Keep the dated Taiwan requirements separate from other passports.
const title='日本打工度假｜申請資格、文件檢查與陪跑｜海外督導 OTC';
const description='日本打工度假申請資格、台灣 2026 年後期時程與文件清單；OTC 提供履歷書、理由書、計畫書檢查及行前準備。';
const sources={
  taiwan:'https://www.koryu.or.jp/tw/visa/taipei/working/guide2026/',
  documents:'https://www.koryu.or.jp/tw/visa/taipei/working/guide2026/guide-detail1/',
  collection:'https://www.koryu.or.jp/tw/visa/taipei/working/guide2026/detail2/',
  hongkong:'https://www.hk.emb-japan.go.jp/itpr_zh/working_holiday.html',
  mofa:'https://www.mofa.go.jp/j_info/visit/w_holiday/index.html'
};
const consultUrl='https://wa.me/447947991572?text='+encodeURIComponent('你好，我想諮詢日本打工度假。\n護照國家／地區：\n年齡及目前居住地：\n預計申請期別及出發時間：\n過往申請／獲發簽證紀錄：\n需要協助的文件或事項：');
const table=(caption,head,rows)=>`<div class="wt-table"><table><caption>${caption}</caption><thead><tr>${head.map(h=>`<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr><th scope="row">${r[0]}</th>${r.slice(1).map(v=>`<td>${v}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
function render({shell,row,hub}){
  const panel=[['eligibility','申請資格','按護照與居住地查閱'],['timing','申請時間','台灣 2026 年後期'],['documents','申請材料','新版表格與文件期限'],['support','文件陪跑','檢查、修改建議與送件準備']].map(([id,label,text])=>`<a href="#${id}"><strong>${label}</strong><span>${text}</span></a>`).join('');
  const strip=[['timing','2026','10 月 19–30 日','台灣後期受理；10/26 休所'],['documents','CV','9 月新版履歷書','從官方頁下載現行格式'],['fees','FEES','服務與費用','文件檢查按範圍書面報價'],['contact','ASK','申請諮詢','首次申請、再次申請與行前準備']].map(([id,tag,label,text])=>`<a href="#${id}"><b>${tag}</b><strong>${label}</strong><span>${text}</span></a>`).join('');
  const body=`
<nav class="wt-nav" aria-label="日本打工度假內容"><a href="${hub}">打工度假聯盟</a><a href="#eligibility">資格</a><a href="#timing">時間</a><a href="#documents">材料</a><a href="#support">服務</a><a href="#fees">費用</a><a href="#faq">常見問題</a></nav>
<p class="wt-date">資料核查：<time datetime="2026-10-01">2026 年 10 月 1 日</time>。以下時程與文件清單適用於台灣申請；香港及其他護照請查看相應官方規定。</p>
${row('eligibility','01','申請資格',`<p>日本打工度假以旅行及文化體驗為主，可在許可範圍內工作補貼旅費。資格取決於護照、年齡、居住地及過往獲發簽證紀錄，在讀或畢業身分本身不等於申請資格。</p>${table('護照與申請地',['護照／地區','主要條件與官方資料'],[
['台灣','持有載明身分證字號的有效台灣護照，申請時居住於台灣，送件當日為 18–30 歲；另須符合健康、財力、同行眷屬等條件。2026 年起原則上一生最多參加兩次，每次最長一年。<a href="'+sources.taiwan+'">台灣申請須知</a>'],
['香港','通常居住於香港，持香港特區護照或 BNO 護照，申請時為 18–30 歲，且過往未獲發日本打工度假簽證。申請時間、財力及收件程序依香港規定。<a href="'+sources.hongkong+'">香港申請須知</a>'],
['其他護照','先查日本外務省的協定國家／地區，再查所屬日本使領館。中國大陸普通護照目前不在打工度假協定範圍內。<a href="'+sources.mofa+'">外務省項目總覽</a>']])}`)}
${row('timing','02','申請時間',`<p><strong>台灣 2026 年後期</strong>已公布受理安排。本人向日本台灣交流協會台北或高雄事務所提出申請，不接受代理或郵寄；同一期不得向兩所重複申請。</p>${table('台灣 2026 年後期時程',['階段','日期與安排'],[
['申請受理','2026 年 10 月 19 日（一）至 10 月 30 日（五）；週末及 10 月 26 日（一）休所。'],
['受理時段','09:15–11:30、13:45–16:00（台灣時間）。'],
['結果公布','2026 年 12 月 11 日（五）。'],
['領證期間','2026 年 12 月 14 日（一）至 2027 年 6 月 11 日（五），依事務所開放日辦理。']])}<p class="service-note">申請並非先到先得。領證期限、簽證入境有效期限與入境後在留期限各有規定，安排出發前須逐項確認。<a href="${sources.taiwan}">查看完整日程與公告</a></p>`)}
${row('documents','03','申請材料',`<p>台灣申請應使用官方現行表格，<strong>履歷書須採用 2026 年 9 月更新版</strong>。下表供準備時核對，完整格式、份數及個別情況請按官方清單辦理。</p>${table('台灣申請文件',['類別','準備內容'],[
['申請表與照片','簽證申請書、近 6 個月內白底彩色照片 1 張（高 4.5 × 寬 3.5 公分），以及身分證正反面影本。'],
['三份書面材料','履歷書、理由書、計畫書。可用中文或日文，以本人經歷及規劃撰寫；可打字，應簽名處須本人親簽。第二次參加者須說明再次申請的理由。'],
['學歷','最終學歷證明；在學者準備在學證明，已畢業者依清單備妥畢業證書影本。'],
['資金','最近 1 個月內開立、至少新台幣 8 萬元的銀行或郵局存款餘額證明正本，不以存摺影本替代。使用親屬資金者，另按要求提供 3 個月內的親屬關係證明。'],
['護照與旅日紀錄','護照正本與指定頁面影本，並按要求附上近期赴日出入境紀錄，以及過往中長期在留相關資料。'],
['出入境證明','送件前 10 日內核發的入出國日期證明書正本，查詢最近 3 年並包含入出境地點。'],
['補充資料','日語能力或日本文化學習等證明可作補充，並非必須先取得日語檢定合格證書。']])}<p>建議先完成書面材料，再按送件日倒推存款及出入境證明的申請時間，避免文件逾期。</p><p><a href="${sources.documents}">官方文件清單與表格下載 →</a></p>`)}
${row('support','04','文件陪跑',`<p>適合首次準備文件，或上次申請未通過、希望重新檢查材料的申請人。OTC 可按需要提供以下協助：</p><dl class="jp-support"><div><dt>履歷書</dt><dd>核對新版格式、學經歷日期、空白欄位及各份文件的一致性。</dd></div><div><dt>理由書</dt><dd>就本人撰寫的申請動機、文化興趣與過往經驗提供結構及表達建議。</dd></div><div><dt>計畫書</dt><dd>檢查地點、季節、停留時間、活動與預算是否具體可行，協助整理度假及補貼旅費的工作安排。</dd></div><div><dt>送件準備</dt><dd>整理文件清單、有效期限與送件時程；再次申請時比較前後材料，找出可補充及釐清的部分。</dd></div></dl><p>履歷書、理由書及計畫書由申請人本人完成。OTC 提供檢查與修改建議，不代寫個人經歷，也不代替本人送件。</p>`)}
${row('process','05','申請流程',`<ol><li><strong>諮詢：</strong>告知護照、年齡、居住地、預計期別與過往申請紀錄，確認適用規定。</li><li><strong>確認服務：</strong>列明需要檢查的文件、修改輪次、交付日期、服務費及取消條款。</li><li><strong>整理材料：</strong>本人撰寫初稿，依檢查意見修改，再備妥有期限的證明文件。</li><li><strong>本人送件：</strong>在受理期間親自申請並保留收據；按官方安排查詢結果。</li><li><strong>領證與行前：</strong>獲准後，依領證清單準備護照、收據及涵蓋全程疾病、傷害與死亡的保險證明，再確認入境期限、住宿與生活預算。</li></ol><p class="service-note">領證另有委託領取規定，與「申請須本人送件」不同。<a href="${sources.collection}">領證文件與保險要求</a></p>`)}
${row('fees','06','費用',table('服務與其他支出',['項目','費用安排'],[
['公開資料','本頁及官方連結可免費查閱。'],
['台灣打工度假簽證','日本台灣交流協會免收此類簽證手續費；其他申請地依當地公告。'],
['OTC 文件陪跑','依文件數量、檢查與修改範圍、服務期間提供書面報價，確認後開始服務。'],
['其他支出','銀行及出入境證明、必要翻譯、保險、交通、機票、住宿押金與生活費另計，由相應機構或業者收取。']])+`<p>存款證明的 8 萬元是台灣申請文件門檻，不代表足以支付整年生活。另需估算抵境後尚未找到工作時的住宿、日常開支與備用金。</p>`)}
${row('living','07','行前準備',`<p>依預計停留城市比較住宿、押金、交通與生活預算；按日語程度準備求職履歷及面試。接受職位前應看清工作內容、工資、工時、住宿費與扣款，並確認工作場所符合簽證限制。</p><p>抵境後依規定辦理在留與住址手續；確定住址後原則上須在 14 日內向市區町村申報。保險、銀行及手機等安排，可列入行前清單。</p><p><a href="/zh/services/japan-employment-preparation/">日本履歷與面試準備</a> · <a href="${hub}#extended">遠端工作等延伸旅居資料</a></p>`)}
${row('faq','08','常見問題',`<details><summary>上次沒通過，就是理由書或計畫書寫得不好嗎？</summary><p>不能只憑結果判斷。官方不公布個別不合格理由；可重新檢查資格、格式、資料一致性及計畫內容，但修改文件不代表下一次一定通過。</p></details><details><summary>計畫書可以提到工作嗎？</summary><p>可以如實說明工作如何補貼旅費。計畫應以度假及文化體驗為主，工作安排須符合許可條件，不需要隱瞞真實打算或編造旅行經歷。</p></details><details><summary>申請履歷書與找工作用的履歷一樣嗎？</summary><p>用途不同。簽證申請須採用官方履歷書格式；求職履歷則按職位整理經驗、能力及可工作時間。OTC 可分別提供文件檢查與求職準備。</p></details><details><summary>台灣可以參加兩次，等於一次住兩年嗎？</summary><p>不是。台灣 2026 年規定原則上可參加兩次，每次最長一年；第二次仍須重新符合資格並申請，不能直接把首次停留延長為兩年。曾獲簽但未入境等情況，須按官方對獲發紀錄及例外的規定確認。</p></details>`)}
<section class="wt-contact" id="contact"><h2>日本打工度假諮詢</h2><p>請提供護照國家／地區、年齡、居住地、預計申請期別與需要協助的文件。曾申請者可說明期別、結果及是否曾獲發簽證。</p><div class="wt-links"><a class="btn btn-primary" href="${consultUrl}">WhatsApp 諮詢</a><a href="mailto:office@overseasuk.com?subject=${encodeURIComponent('日本打工度假諮詢')}">office@overseasuk.com</a></div><p class="service-note">OTC 為獨立的申請準備與文件支援服務，不代表日本政府或受理機構；不保證簽證、職位或收入。申請條件與審查結果以官方為準。</p></section>
<div class="jp-sources"><h2>官方資料</h2><div class="wt-links"><a href="${sources.taiwan}">台灣 2026 年須知</a><a href="${sources.documents}">申請文件與表格</a><a href="${sources.collection}">領證與保險</a><a href="${sources.hongkong}">香港申請</a><a href="${sources.mofa}">其他協定國家／地區</a></div></div>`;
  return shell('日本打工度假',hub+'japan/',description,body,{metaTitle:title,subtitle:'申請材料 · 文件檢查 · 行前準備',panel,strip,consultUrl,bodyClass:'japan-working-holiday',css:`<style>.japan-working-holiday .wt-page p,.japan-working-holiday .wt-page li,.japan-working-holiday .wt-page details{font-size:16px}.japan-working-holiday .wt-page table{font-size:14px}.japan-working-holiday .wt-page caption{text-align:left;font-size:13px;color:#61717b;padding:0 0 8px}.japan-working-holiday .wt-page th:first-child{width:23%;min-width:90px}.japan-working-holiday .wt-page .wt-date,.japan-working-holiday .wt-page .service-note{font-size:13px}.jp-support{margin:12px 0}.jp-support>div{display:grid;grid-template-columns:90px minmax(0,1fr);gap:16px;padding:13px 0;border-bottom:1px solid #d8d4ca}.jp-support dt{font-weight:600}.jp-support dd{margin:0;line-height:1.85;font-size:16px}.jp-sources{margin-top:28px;padding-top:20px;border-top:1px solid #cbbd9f}.japan-working-holiday details p{margin-bottom:5px}.japan-working-holiday summary{line-height:1.7}.japan-working-holiday .wt-contact a{overflow-wrap:anywhere}@media(max-width:700px){.japan-working-holiday .wt-row{margin-top:22px;padding-top:16px}.japan-working-holiday .wt-page th,.japan-working-holiday .wt-page td{padding:10px 8px}.jp-support>div{grid-template-columns:70px minmax(0,1fr);gap:12px}}</style>`});
}
module.exports={title,description,render};
