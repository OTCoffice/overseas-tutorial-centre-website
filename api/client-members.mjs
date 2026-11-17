import {identity,fail} from '../lib/client-auth.mjs';
import {sql,requireAdmin} from '../lib/client-portal.mjs';
export default async function handler(req,res){try{res.setHeader('Cache-Control','private, no-store');if(req.method!=='GET')return res.status(405).end();await requireAdmin(await identity(req));const users=await sql()`SELECT id,name,email FROM neon_auth."user" WHERE "emailVerified"=true ORDER BY "createdAt" DESC LIMIT 1000`;res.json({users});}catch(e){fail(res,e)}}
