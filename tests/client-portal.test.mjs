import {test} from 'node:test';
import assert from 'node:assert/strict';
import {clientCase,authorizeCase,validateWorkspace} from '../lib/client-portal.mjs';
import {identity,assertSameOrigin} from '../lib/client-auth.mjs';

test('客戶只可讀取已分配至自己帳戶的個案；未知與他人個案均回覆 404',()=>{
 const c={id:'case-a',clientId:'client-a'};
 assert.equal(authorizeCase({id:'client-a'},c,false),c);
 assert.throws(()=>authorizeCase({id:'client-b'},c,false),{status:404});
 assert.throws(()=>authorizeCase({id:'client-a'},undefined,false),{status:404});
 assert.equal(authorizeCase({id:'staff'},c,true),c);
});
test('客戶回應排除內部評估、操作批准與未公開文件',()=>{
 const c={id:'case-a',name:'測試客戶',clientId:'client-a',service:'移民與居留',status:'服務進行中',known:'內部資料',risk:'內部風險',actions:[{recipient:'內部批准對象'}],logs:[{text:'內部紀錄'}],next:'內部待辦',publicNext:'請核對材料',docs:[{name:'內部文件',versions:[{text:'不得公開'}]},{name:'已公開文件',shared:true,versions:[{text:'公開內容',key:'file-a',privateComment:'內部批註'}]}]};
 const out=clientCase(c);assert.equal(out.publicNext,'請核對材料');assert.equal(out.docs.length,1);assert.equal(out.docs[0].versions[0].text,'公開內容');
 const serialized=JSON.stringify(out);for(const secret of ['內部資料','內部風險','內部批准對象','內部紀錄','內部待辦','不得公開','內部批註'])assert.ok(!serialized.includes(secret));
});
test('跨站與缺少 Origin 的寫入均拒絕；同站寫入及讀取允許',()=>{
 assert.throws(()=>assertSameOrigin({method:'PUT',headers:{host:'overseasuk.com',origin:'https://evil.example'}}),{status:403});
 assert.throws(()=>assertSameOrigin({method:'POST',headers:{host:'overseasuk.com'}}),{status:403});
 assert.doesNotThrow(()=>assertSameOrigin({method:'POST',headers:{host:'overseasuk.com',origin:'https://overseasuk.com'}}));
 assert.doesNotThrow(()=>assertSameOrigin({method:'GET',headers:{host:'overseasuk.com'}}));
});
test('未登入、未驗證及偽造身份標頭都不會獲得客戶權限',async()=>{
 const original=globalThis.fetch;process.env.NEON_AUTH_BASE_URL='https://auth.example/auth';process.env.NEON_AUTH_COOKIE_SECRET='test-only-cookie-secret-with-at-least-32-characters';
 try{globalThis.fetch=async()=>Response.json(null);await assert.rejects(()=>identity({headers:{host:'overseasuk.com','oai-authenticated-user-id':'forged-admin'}}),{status:401});
 globalThis.fetch=async()=>Response.json({user:{id:'client-a',email:'qa@example.com',emailVerified:false}});await assert.rejects(()=>identity({headers:{host:'overseasuk.com'}}),{status:403});
 globalThis.fetch=async()=>Response.json({user:{id:'client-a',email:'qa@example.com',emailVerified:true}});assert.equal((await identity({headers:{host:'overseasuk.com'}})).id,'client-a');
 }finally{globalThis.fetch=original;}
});
test('儲存拒絕重複個案 ID、缺少欄位及過大資料',()=>{
 const c={id:'case-a',name:'測試',docs:[],actions:[],tasks:[],logs:[],routes:[]};assert.equal(validateWorkspace([c]).length,1);assert.throws(()=>validateWorkspace([c,c]),{status:400});assert.throws(()=>validateWorkspace([{id:'x',name:'測試'}]),{status:400});assert.throws(()=>validateWorkspace([{...c,known:'x'.repeat(3500001)}]),{status:400});
});

test('背景問卷依服務、國家及答案分支；隱藏欄位不會收存',async()=>{
 const {intakeQuestions,validateIntake}=await import('../lib/client-intake.mjs');
 const questions=intakeQuestions('移民與居留','美國',{stage:'在讀',route:'家庭團聚'});
 for(const id of ['passport','usStatus','usConnection','graduation','sponsor'])assert.ok(questions.some(q=>q.id===id));
 assert.ok(!intakeQuestions('求職與職涯陪跑','英國',{}).some(q=>q.id==='usStatus'));
 const answers=Object.fromEntries(questions.map(q=>[q.id,q.options?q.options[0]:'測試背景']));answers.stage='在讀';answers.route='家庭團聚';answers.secret='不得收存';
 const valid=validateIntake('移民與居留','美國',answers);assert.ok(!('secret' in valid));
 delete answers.passport;assert.throws(()=>validateIntake('移民與居留','美國',answers),{status:400});
});
test('留學官方入口保留明確直申範圍、篩選與空結果',async()=>{
 const {createRequire}=await import('node:module');const require=createRequire(import.meta.url);const panel=require('../content/study-official-links.cjs');
 assert.ok(panel.entries.length>=9);for(const e of panel.entries)assert.match(e.url,/^https:\/\//);
 const html=panel();assert.match(html,/並非完整高校名錄/);assert.match(html,/school-country/);assert.match(html,/school-empty/);
});

test('客戶個人資料只保留白名單；多段經歷、長度與版本欄位分開處理',async()=>{
 const {validateClientProfile}=await import('../lib/client-profile.mjs');
 const clean=validateClientProfile({basic:{givenName:' Test ',role:'admin'},education:[{school:'A',subject:'商科'},{school:'B',subject:'資訊'}],privateNotes:'不應出現',updatedAt:'偽造版本'});
 assert.equal(clean.basic.givenName,'Test');assert.equal(clean.education.length,2);for(const key of ['role','privateNotes','updatedAt'])assert.ok(!JSON.stringify(clean).includes(key));
 assert.throws(()=>validateClientProfile({education:Array(16).fill({})}),{status:400});assert.throws(()=>validateClientProfile({basic:{phone:123}}),{status:400});
});
test('對客項目與待辦須逐項公開；排除內部評估、操作、隱藏任務',()=>{
 const out=clientCase({id:'case-a',routes:[{school:'內部校',fit:'秘密評估'},{shared:true,school:'公開校',course:'課程',fit:'秘密原因',source:'javascript:alert(1)',privateComment:'秘密'}],tasks:[{title:'內部任務'},{shared:true,title:'提供成績單',done:false,privateNote:'秘密'}]});
 assert.equal(out.routes.length,1);assert.equal(out.routes[0].school,'公開校');assert.equal(out.routes[0].source,'');assert.equal(out.tasks.length,1);assert.equal(out.tasks[0].title,'提供成績單');assert.ok(!JSON.stringify(out).includes('秘密'));assert.ok(!JSON.stringify(out).includes('內部'));
});
test('服務入口帶入申請背景，但不能帶入身份、權限或外站跳轉',async()=>{
 const {clientEntry}=await import('../lib/client-entry.mjs');assert.equal(clientEntry('?role=admin&entry=unknown'),null);const e=clientEntry('?entry=france-alternance&programme=MIAGE&role=admin&redirect=https://evil.example');assert.equal(e.country,'法國');assert.match(e.goal,/MIAGE/);assert.deepEqual(Object.keys(e).sort(),['country','goal','service']);
});
test('未知階段不會捏造申請進度，已提交不會自動變為錄取',async()=>{
 const {stageForStatus}=await import('../lib/client-progress.mjs');assert.equal(stageForStatus('待機構回覆'),null);assert.equal(stageForStatus('已提交'),3);assert.equal(stageForStatus('有條件錄取'),4);assert.equal(stageForStatus('未核實狀態'),null);
});

test('登入及電郵相符不會自動授予管理權；僅讀取明確角色紀錄',async()=>{
 const {role,requireAdmin}=await import('../lib/client-portal.mjs');
 const previous=process.env.OTC_PORTAL_OWNER_EMAIL;process.env.OTC_PORTAL_OWNER_EMAIL='owner@example.test';
 const queries=[];const query=async(parts,...values)=>{queries.push({sql:parts.join('?'),values});return []};
 try{
  assert.equal(await role({id:'registered-client',email:'owner@example.test',emailVerified:true},query),'client');
  assert.equal(queries.length,1);assert.match(queries[0].sql,/^SELECT role/);assert.deepEqual(queries[0].values,['registered-client']);
  assert.equal(await role({id:'verified-staff',emailVerified:true},async()=>[{role:'admin'}]),'admin');
  assert.equal(await role({id:'unverified-staff',emailVerified:false},async()=>{throw Error('must not query')}),'client');
  assert.equal(await role({id:'registered-client',emailVerified:true},async()=>[{role:'ADMIN'}]),'client');
  await assert.rejects(requireAdmin({id:'client'},async()=> 'client'),{status:403});
  await assert.doesNotReject(requireAdmin({id:'staff'},async()=> 'admin'));
 }finally{if(previous===undefined)delete process.env.OTC_PORTAL_OWNER_EMAIL;else process.env.OTC_PORTAL_OWNER_EMAIL=previous}
});

test('完整學生表格保留分組資料，拒絕藉新增欄位設定官方結果與角色',async()=>{
 const {validateClientProfile,profileMissing}=await import('../lib/client-profile.mjs');
 const p=validateClientProfile({basic:{familyName:'Chan',givenName:'Test',nationality:'示範',email:'test@example.test',phone:'+44000000000',passportNumber:'TEST-ONLY'},education:[{school:'示範大學',qualification:'學士',subject:'商科'}],plan:{countries:'英國',degree:'碩士'},applications:[{school:'意向院校',course:'意向課程',country:'英國',code:'TEST',status:'已錄取',shared:true}],emergency:[{name:'示範聯絡人'}],visa:{refusal:'是',refusalDetails:'測試說明',status:'已獲批'},payments:[{amount:'100',currency:'GBP',verified:true}],arrival:{pickup:'需要'},role:'admin'});
 assert.deepEqual(profileMissing(p),[]);assert.equal(p.applications[0].code,'TEST');assert.equal(p.emergency[0].name,'示範聯絡人');assert.equal(p.visa.refusal,'是');assert.equal(p.payments[0].currency,'GBP');assert.equal(p.arrival.pickup,'需要');
 for(const key of ['role','shared','verified'])assert.ok(!JSON.stringify(p).includes('"'+key+'":'));assert.equal(p.visa.status,undefined);assert.equal(p.applications[0].status,undefined);assert.ok(profileMissing({}).length>0);
 assert.throws(()=>validateClientProfile({applications:Array(16).fill({})}),{status:400});
});
test('六幣換算保留原幣，零費用與未知報價不混淆',async()=>{
 const {convertServiceFee,displayCurrencies}=await import('../lib/client-fees.mjs');const rates={CNY:1,GBP:.1,USD:.15,TWD:5,HKD:1.2,AUD:.2,EUR:.13};
 assert.equal(displayCurrencies.length,6);assert.equal(convertServiceFee(1000,'CNY','GBP',rates),100);assert.equal(convertServiceFee(1100,'AUD','AUD',rates),1100);assert.equal(convertServiceFee(1100,'AUD','GBP',rates),550);assert.equal(convertServiceFee(0,'CNY','EUR',rates),0);assert.equal(convertServiceFee(null,'CNY','EUR',rates),null);assert.throws(()=>convertServiceFee(1,'BAD','GBP',rates));
});
test('公開錄取與簽證資料和客戶意向分開；未公開院校結果仍不可見',()=>{
 const c={id:'a',name:'test',status:'待機構回覆',publicVisaStatus:'待核對',publicVisaNotes:'公開說明',privateVisaNotes:'內部資料',profile:{updatedAt:'2026-11-17',data:{applications:[{school:'客戶意向院校',status:'已錄取'}]}},routes:[{school:'內部院校',offerType:'有條件錄取'},{school:'公開院校',shared:true,offerType:'有條件錄取',reference:'TEST-123',paymentCurrency:'GBP',fit:'內部評估'}]};const out=clientCase(c);assert.equal(out.routes.length,1);assert.equal(out.routes[0].offerType,'有條件錄取');assert.equal(out.routes[0].reference,'TEST-123');assert.equal(out.publicVisaStatus,'待核對');assert.equal(out.privateVisaNotes,undefined);assert.equal(out.profile.data.applications[0].status,undefined);assert.ok(!JSON.stringify(out).includes('內部'));
});
test('提交 OTC 核對保留申請階段、記錄提交版本，且不重複建立未完成審核任務',async()=>{
 const {applyProfileUpdate}=await import('../lib/client-profile.mjs');const p={basic:{familyName:'Test',givenName:'User',nationality:'Test',email:'test@example.test',phone:'123'},education:[{school:'Test',qualification:'Bachelor',subject:'Test'}],plan:{countries:'法國',degree:'Master'}};
 const c={id:'a',clientId:'client',status:'資料待補',owner:'OTC',routes:[],tasks:[{title:'原有待辦',done:false}],logs:[]};
 const draft=applyProfileUpdate(c,{},'t1');assert.equal(draft.profile.submittedAt,'');assert.equal(draft.tasks.length,1);assert.throws(()=>applyProfileUpdate(c,{},'t1',true),{status:400});
 const submitted=applyProfileUpdate(c,p,'t2',true);assert.equal(submitted.profile.submittedAt,'t2');assert.equal(submitted.status,'資料待補');assert.equal(submitted.clientId,'client');assert.equal(submitted.tasks.length,2);
 const again=applyProfileUpdate(submitted,p,'t3',true);assert.equal(again.tasks.length,2);assert.equal(again.profile.submittedVersion,'t3');
 const revised=applyProfileUpdate(again,p,'t4');assert.equal(revised.profile.submittedVersion,'t3');assert.equal(revised.profile.updatedAt,'t4');assert.equal(c.logs.length,0);
});
test('客戶階段提示不把意向、付款紀錄或附件當成錄取與簽證結果',async()=>{
 const {stepIndicators}=await import('../lib/client-workflow.mjs');const c={profile:{updatedAt:'t2',submittedAt:'t1',submittedVersion:'t1',data:{plan:{countries:'法國',degree:'Master'},applications:[{school:'意向'}],payments:[{amount:'100'}],arrival:{pickup:'需要'}}},routes:[]};const states=stepIndicators(c);assert.equal(states.length,8);assert.equal(states[2],'提交後有草稿更新');assert.equal(states[3],'結果待更新');assert.equal(states[4],'已填付款紀錄');assert.equal(states[6],'結果待核實');assert.equal(states[7],'需求已儲存');
});
test('方案匯出只含對客公開內容，並防止 CSV 公式執行',async()=>{
 const {planCsv,csvCell}=await import('../lib/client-plan-export.mjs');assert.equal(csvCell('=SUM(A1)'), '"\'=SUM(A1)"');const projected=clientCase({id:'a',name:'Test',publicSummary:'公開方案',known:'內部資料',routes:[{school:'隱藏院校'},{school:'公開院校',course:'=TEST',shared:true}]});const csv=planCsv(projected);assert.ok(csv.includes('公開方案'));assert.ok(csv.includes('公開院校'));assert.ok(!csv.includes('隱藏院校'));assert.ok(!csv.includes('內部資料'));assert.ok(csv.includes("'=TEST"));
});
test('公開入口、費用資料及前端成品只含 OTC 品牌，不夾帶參考平台來源',async()=>{
 const {readFile}=await import('node:fs/promises');for(const p of ['content/otc-service-fees.json','client-portal/app.js','client-portal/index.html','client-portal/manage/index.html']){const s=(await readFile(new URL('../'+p,import.meta.url),'utf8')).replace(/\\u([\da-f]{4})/gi,(_,hex)=>String.fromCharCode(parseInt(hex,16)));assert.doesNotMatch(s,/小希|xiaoxi|smartcounselor|globeedu/i,p)}
});
test('全球目的地支援跨洲國家、地區及自訂目的地，不被少量合作地點限制',async()=>{
 const {readFile}=await import('node:fs/promises');const d=JSON.parse(await readFile(new URL('../content/otc-global-destinations.json',import.meta.url),'utf8'));assert.ok(d.destinations.length>=240);assert.equal(new Set(d.destinations.map(x=>x.code)).size,d.destinations.length);
 for(const code of ['IN','BR','ZA','IS','PT','FR','DE','JP','KR','TW','HK','MO','AE','KE','AR','CL','PE','MX','CA','US','AU','NZ'])assert.ok(d.destinations.some(x=>x.code===code),code);
 const {normalizeDestination}=await import('../lib/client-destinations.mjs');assert.equal(normalizeDestination('AU'),'澳洲');assert.equal(normalizeDestination('Australia'),'澳洲');assert.equal(normalizeDestination('澳大利亞'),'澳洲');assert.equal(normalizeDestination('自訂目的地'),'自訂目的地');
 const {workflowCountries}=await import('../lib/client-workflow.mjs');assert.deepEqual(workflowCountries({country:'Australia',routes:[{country:'澳洲'}],profile:{data:{plan:{countries:'AU,法國'}}}}),['澳洲','法國']);
});
