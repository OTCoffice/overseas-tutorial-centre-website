module.exports=async function(req,res){
 const {identity,assertSameOrigin,fail}=await import('../lib/client-auth.mjs');const {sql,requireAdmin,services}=await import('../lib/client-portal.mjs');const {deliverNotifications}=await import('../lib/client-notifications.mjs');
 try{res.setHeader('Cache-Control','private, no-store');assertSameOrigin(req);await requireAdmin(await identity(req));
 if(req.method==='GET'){const rules=await sql()`SELECT rules FROM otc_portal_routing WHERE id=1`;const staff=await sql()`SELECT u.id,u.name FROM neon_auth."user" u JOIN otc_portal_members m ON m.user_id=u.id::text WHERE m.role='admin' AND u."emailVerified"=true`;const notifications=await sql()`SELECT id,case_id,kind,status,attempts,error,created_at FROM otc_portal_notifications ORDER BY created_at DESC LIMIT 200`;return res.json({rules:rules[0]?.rules||[],staff,notifications});}
 if(req.method==='POST'&&typeof req.body?.caseId==='string'){await deliverNotifications(req.body.caseId);return res.json({ok:true});}
 if(req.method!=='PUT')return res.status(405).end();const rules=req.body?.rules;
 if(!Array.isArray(rules)||rules.length>100)return res.status(400).end();const valid=await sql()`SELECT user_id FROM otc_portal_members WHERE role='admin'`;const ids=new Set(valid.map(s=>s.user_id));const keys=new Set();
 for(const r of rules){const key=r.service+'|'+r.country?.trim().toLowerCase();if(!services.includes(r.service)||typeof r.country!=='string'||r.country.length>100||!ids.has(r.userId)||keys.has(key))return res.status(400).json({error:'請選擇有效管理帳戶；相同服務／地區只可設定一次。'});keys.add(key);}
 await sql()`UPDATE otc_portal_routing SET rules=${JSON.stringify(rules)}::jsonb WHERE id=1`;res.json({ok:true});
 }catch(e){fail(res,e)}
}
