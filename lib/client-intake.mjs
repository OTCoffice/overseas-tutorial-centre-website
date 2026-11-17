// Shared by the browser and API: only visible questions are accepted.
const q=(id,label,options)=>({id,label,options});
export function intakeQuestions(service,country,answers={}){
 const common=[q('passport','持有哪個國家／地區的護照？'),q('residence','目前居住國家／地區及居留身分'),q('stage','目前狀況',['在讀','已畢業','在職','待業','其他']),q('education','最高學歷、專業及畢業年份'),q('language','語言能力／考試成績（沒有可填未考）'),q('timing','預計何時開始／完成？'),q('budget','可用預算與幣別（未定可填待確認）')];
 if(/移民|簽證|安家/.test(service))common.push(q('route','希望了解哪類安排？',['工作','留學／畢業後安排','家庭團聚','投資／創業','長期居留／安家','尚不確定']),q('family','是否與家人同行？人數及關係（不需姓名）'),q('history','過往簽證、拒簽或居留紀錄（沒有可填無）'));
 if(/美國|美国|USA|United States/i.test(country)&&/移民|簽證/.test(service))common.push(q('usStatus','目前是否在美國？如在，請填現有身分類別與到期月份（不需證件號）'),q('usConnection','是否有美國僱主、親屬或既有申請？請概述，沒有可填無'));
 if(/留學|升學|申博|學業/.test(service))common.push(q('studyLevel','目標課程／學位'),q('subject','想讀的專業、學校或研究方向'),q('results','目前成績、預估成績及待完成的畢業要求'));
 if(service==='申博陪跑')common.push(q('research','研究經歷、計畫及導師聯絡情況'));
 if(/求職/.test(service))common.push(q('work','工作經歷與目標職位'),q('workRight','目前工作權利／工作簽證狀況'));
 if(answers.stage==='在讀')common.push(q('graduation','在讀學校、課程及預計畢業月份'));
 if(answers.route==='家庭團聚')common.push(q('sponsor','擬團聚親屬的關係、所在國家與身分類別（不需姓名）'));
 if(answers.route==='工作')common.push(q('employer','僱主／職位及聘用進度（沒有可填尚無）'));
 common.push(q('help','希望 OTC 優先協助的事項'),q('contact','偏好聯絡方式與方便聯絡的時段'));
 return common;
}
export function validateIntake(service,country,input){
 if(!input||typeof input!=='object'||Array.isArray(input))throw Object.assign(new Error('請完成背景資料。'),{status:400});
 const answers={};for(const field of intakeQuestions(service,country,input)){const v=input[field.id];if(typeof v!=='string'||!v.trim()||v.length>1500||(field.options&&!field.options.includes(v)))throw Object.assign(new Error('請填寫：'+field.label),{status:400});answers[field.id]=v.trim();}return answers;
}
export function intakeSummary(service,country,answers){return intakeQuestions(service,country,answers).map(f=>`${f.label}：${answers[f.id]||'待提供'}`).join('\n');}
export const receiptText='OTC 已收到你的資料，已送交 Office 服務隊列。接下來由負責人核對背景、服務範圍及待補文件，並在此個案回覆。你可先上傳相關成績、履歷或既有通知；暫不需要提供完整護照號碼、銀行帳戶或密碼。此為自動收件回覆，具體路線及申請要求由顧問另行核實。';
