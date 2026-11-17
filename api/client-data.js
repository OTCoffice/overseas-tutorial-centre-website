module.exports=async function handler(req,res){
const {identity,assertSameOrigin,fail}=await import('../lib/client-auth.mjs');
const {sql,role,requireAdmin,workspace,validateWorkspace}=await import('../lib/client-portal.mjs');
try{
 res.setHeader('Cache-Control','private, no-store');assertSameOrigin(req);const user=await identity(req);await requireAdmin(user);
 if(req.method==='GET'){const w=await workspace();return res.json({data:w.payload,revision:w.revision});}
 if(req.method!=='PUT')return res.status(405).end();
 const b=req.body;validateWorkspace(b.data);if(!Number.isInteger(b.revision)||b.revision<0)return res.status(400).end();
 // Assignment is by a verified, stable account ID; never claim records by email.
 const ids=[...new Set(b.data.map(c=>c.clientId).filter(Boolean))];
 if(ids.length){const found=await sql()`SELECT id FROM neon_auth."user" WHERE id::text=ANY(${ids}::text[]) AND "emailVerified"=true`;if(found.length!==ids.length)return res.status(400).json({error:'請選擇已完成電郵驗證的客戶帳戶。'});}
 const rows=await sql()`UPDATE otc_portal_workspace SET payload=${JSON.stringify(b.data)}::jsonb,revision=revision+1 WHERE id=1 AND revision=${b.revision} RETURNING revision`;
 if(!rows.length)return res.status(409).json({error:'資料已在其他視窗變更，請重新載入後編輯。'});
 return res.json({revision:rows[0].revision});
 }catch(e){fail(res,e)}}
