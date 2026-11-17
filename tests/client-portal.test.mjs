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
