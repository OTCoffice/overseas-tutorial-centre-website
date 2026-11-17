module.exports=async function handler(req,res){
const {identity,fail}=await import('../lib/client-auth.mjs');
const {role}=await import('../lib/client-portal.mjs');
try{res.setHeader('Cache-Control','private, no-store');if(req.method!=='GET')return res.status(405).end();const user=await identity(req);res.json({user:{id:user.id,name:user.name,email:user.email},role:await role(user)});}catch(e){fail(res,e)}}
