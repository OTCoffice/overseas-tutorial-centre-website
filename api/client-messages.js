module.exports=async function handler(req,res){
const {randomUUID}=await import('node:crypto');
const {identity,assertSameOrigin,fail}=await import('../lib/client-auth.mjs');
const {sql,role,findCase}=await import('../lib/client-portal.mjs');
try{res.setHeader('Cache-Control','private, no-store');assertSameOrigin(req);const user=await identity(req),admin=await role(user)==='admin',caseId=String(req.query.caseId||req.body?.caseId||'');await findCase(user,caseId,admin);
 if(req.method==='GET')return res.json({messages:await sql()`SELECT id,body,sender_name,staff,created_at FROM otc_portal_messages WHERE case_id=${caseId} ORDER BY created_at LIMIT 500`});
 if(req.method!=='POST')return res.status(405).end();const body=req.body.body;if(typeof body!=='string'||!body.trim()||body.length>4000)return res.status(400).json({error:'留言須為 1 至 4,000 字。'});
 await sql()`INSERT INTO otc_portal_messages(id,case_id,user_id,sender_name,staff,body) SELECT ${randomUUID()},${caseId},${user.id},${admin?'OTC':user.name||'客戶'},${admin},${body} WHERE (SELECT count(*) FROM otc_portal_messages WHERE user_id=${user.id} AND created_at>now()-interval '1 minute')<10`;res.json({ok:true});
 }catch(e){fail(res,e)}}
