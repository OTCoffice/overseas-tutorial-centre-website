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
