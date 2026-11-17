import {sql} from './client-portal.mjs';
export async function assignee(service,country){
 const rows=await sql()`SELECT rules FROM otc_portal_routing WHERE id=1`;
 const rule=(rows[0]?.rules||[]).find(r=>r.service===service&&r.country&&r.country.trim().toLowerCase()===country.trim().toLowerCase())||(rows[0]?.rules||[]).find(r=>r.service===service&&!r.country);
 if(rule?.userId){const users=await sql()`SELECT u.id,u.name,u.email FROM neon_auth."user" u JOIN otc_portal_members m ON m.user_id=u.id::text WHERE u.id::text=${rule.userId} AND m.role='admin' AND u."emailVerified"=true`;if(users[0])return {id:String(users[0].id),name:users[0].name||'OTC 顧問',email:users[0].email};}
 return {id:'',name:'OTC Office',email:'office@overseasuk.com'};
}
// Claim and persist delivery state; retry uses the same provider idempotency key.
export async function deliverNotifications(caseId){
 if(!process.env.RESEND_API_KEY)return;
 const rows=await sql()`UPDATE otc_portal_notifications SET status='sending',attempts=attempts+1,updated_at=now() WHERE case_id=${caseId} AND attempts<8 AND (status IN ('pending','failed') OR (status='sending' AND updated_at<now()-interval '5 minutes')) RETURNING *`;
 await Promise.all(rows.map(async n=>{try{
 const office=n.kind==='office';const text=office?`OTC 客戶中心收到一份新背景資料。個案編號：${n.case_id}。請登入管理工作台查看並安排跟進：https://overseasuk.com/client-portal/manage/`:`OTC 已收到你的服務背景資料。個案編號：${n.case_id}。Office／負責人將核對需求並在個案內回覆。此為自動收件通知。查看資料與下一步：https://overseasuk.com/client-portal/`;
 const r=await fetch('https://api.resend.com/emails',{method:'POST',signal:AbortSignal.timeout(5000),headers:{Authorization:`Bearer ${process.env.RESEND_API_KEY}`,'Content-Type':'application/json','Idempotency-Key':`otc-intake-${n.id}`},body:JSON.stringify({from:`OTC 客戶中心 <notifications@${process.env.RESEND_EMAIL_DOMAIN||'overseasuk.com'}>`,to:[n.recipient],reply_to:'office@overseasuk.com',subject:office?'OTC 新服務需求待跟進':'OTC 已收到你的服務資料',text})});
 const body=await r.json();if(!r.ok||!body.id)throw new Error('provider_rejected');
 await sql()`UPDATE otc_portal_notifications SET status='sent',provider_id=${body.id},error=NULL,updated_at=now() WHERE id=${n.id}`;
 }catch{await sql()`UPDATE otc_portal_notifications SET status='failed',error='寄送尚未成功；請核對寄件網域及郵件服務設定後重試。',updated_at=now() WHERE id=${n.id}`;}}));
}
