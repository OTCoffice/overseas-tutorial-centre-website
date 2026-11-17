module.exports=async function handler(req,res){
const {randomUUID}=await import('node:crypto');
const {identity,assertSameOrigin,fail}=await import('../lib/client-auth.mjs');
const {sql,workspace,clientCase,services}=await import('../lib/client-portal.mjs');
const {validateIntake,intakeSummary,receiptText}=await import('../lib/client-intake.mjs');
const {assignee,deliverNotifications}=await import('../lib/client-notifications.mjs');
try{
 res.setHeader('Cache-Control','private, no-store');assertSameOrigin(req);const user=await identity(req);
 if(req.method==='GET'){const w=await workspace();return res.json({cases:w.payload.filter(c=>c.clientId===user.id).map(clientCase)});}
 if(!['POST','PATCH'].includes(req.method))return res.status(405).end();const b=req.body||{};
 if(!services.includes(b.service)||typeof b.goal!=='string'||!b.goal.trim()||b.goal.length>3000||typeof b.country!=='string'||!b.country.trim()||b.country.length>100)return res.status(400).json({error:'請選擇服務並填寫需求（最多 3,000 字）。'});
 const answers=validateIntake(b.service,b.country,b.answers);const w=await workspace();
 const patch=req.method==='PATCH';const id=patch?b.id:b.requestId;
 if(typeof id!=='string'||!/^[-a-f0-9]{36}$/.test(id))return res.status(400).json({error:'需求編號無效，請重新開啟表格。'});
 const old=w.payload.find(c=>c.id===id);if(old&&old.clientId!==user.id)return res.status(404).json({error:'找不到此個案。'});if(patch&&!old)return res.status(404).end();
 if(old?.intake?.submittedAt)return res.json({id});
 const assigned=await assignee(b.service,b.country);const now=new Date().toISOString();const intake={answers,submittedAt:now};const c={id,clientId:user.id,name:user.name||user.email,service:b.service,country:b.country,known:b.goal,publicSummary:b.goal,publicNext:receiptText,status:'待機構回覆',priority:'一般',owner:assigned.name,deadline:'',background:'',qualification:'',english:'',year:'',budget:'未知',school:'',course:'',missing:'',next:'核對新服務需求',risk:'待評估',source:'',verified:'',conditions:'未知',payment:'待確認',accommodation:'待確認',arrival:'待確認',routes:[],docs:[],tasks:[],actions:[],logs:[{date:new Date().toISOString(),text:'客戶建立服務需求；尚未正式委託或提交申請。'}]};
 const updated={...c,...old,service:b.service,country:b.country,publicSummary:b.goal,known:intakeSummary(b.service,b.country,answers),intake,owner:assigned.name,assigneeId:assigned.id,status:old?.status&&old.status!=='資料待補'?old.status:'待機構回覆',publicNext:old?.status&&old.status!=='資料待補'&&old.publicNext?old.publicNext:receiptText,next:old?.next||'核對客戶背景並回覆',logs:[...(old?.logs||c.logs),{date:now,text:'客戶提交背景資料；已分配至 '+assigned.name}],tasks:[...(old?.tasks||[]),{title:'核對新背景資料並回覆客戶',owner:assigned.name,due:'',done:false}]};
 const payload=patch?w.payload.map(c=>c.id===id?updated:c):[...w.payload,updated];
 if(!patch&&w.payload.filter(c=>c.clientId===user.id).length>=30)return res.status(429).json({error:'服務需求已達上限，請聯絡 OTC。'});
 const rows=await sql()`WITH changed AS (UPDATE otc_portal_workspace SET payload=${JSON.stringify(payload)}::jsonb,revision=revision+1 WHERE id=1 AND revision=${w.revision} RETURNING id), receipt AS (INSERT INTO otc_portal_messages(id,case_id,user_id,sender_name,staff,body) SELECT ${randomUUID()},${id},'system','OTC 自動收件',true,${receiptText} FROM changed RETURNING id), office AS (INSERT INTO otc_portal_notifications(id,case_id,kind,recipient) SELECT ${randomUUID()},${id},'office',${assigned.email} FROM changed ON CONFLICT DO NOTHING RETURNING id), customer AS (INSERT INTO otc_portal_notifications(id,case_id,kind,recipient) SELECT ${randomUUID()},${id},'customer',${user.email} FROM changed ON CONFLICT DO NOTHING RETURNING id) SELECT id FROM changed`;
 if(!rows.length)return res.status(409).json({error:'資料剛有更新，請再按一次提交。'});
 await deliverNotifications(id).catch(()=>{});res.status(patch?200:201).json({id});
 }catch(e){fail(res,e)}}
