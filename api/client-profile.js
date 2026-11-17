module.exports=async function handler(req,res){
 const {identity,assertSameOrigin,fail}=await import('../lib/client-auth.mjs');
 const {sql,workspace,authorizeCase}=await import('../lib/client-portal.mjs');
 const {validateClientProfile}=await import('../lib/client-profile.mjs');
 try{res.setHeader('Cache-Control','private, no-store');assertSameOrigin(req);const user=await identity(req);if(req.method!=='PATCH')return res.status(405).end();const b=req.body||{},w=await workspace();const c=authorizeCase(user,w.payload.find(c=>c.id===b.caseId),false);if((c.profile?.updatedAt||'')!==(b.updatedAt||''))return res.status(409).json({error:'個人資料已有新版本，請重新載入後核對。'});const profile={data:validateClientProfile(b.profile),updatedAt:new Date().toISOString()};const payload=w.payload.map(row=>row.id===c.id?{...row,profile}:row);const changed=await sql()`UPDATE otc_portal_workspace SET payload=${JSON.stringify(payload)}::jsonb,revision=revision+1 WHERE id=1 AND revision=${w.revision} RETURNING id`;if(!changed.length)return res.status(409).json({error:'資料剛有更新，請重新載入後再儲存。'});return res.json({profile});}catch(e){fail(res,e)}
};
