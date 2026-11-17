module.exports=async function handler(req,res){
const {identity,fail}=await import('../lib/client-auth.mjs');
const {sql,requireAdmin}=await import('../lib/client-portal.mjs');
try{res.setHeader('Cache-Control','private, no-store');if(req.method!=='GET')return res.status(405).end();await requireAdmin(await identity(req));const users=await sql()`SELECT id,name,email FROM neon_auth."user" WHERE "emailVerified"=true ORDER BY "createdAt" DESC LIMIT 1000`;res.json({users});}catch(e){fail(res,e)}}
