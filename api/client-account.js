import {identity,fail} from '../lib/client-auth.mjs';
import {role} from '../lib/client-portal.mjs';
export default async function handler(req,res){try{res.setHeader('Cache-Control','private, no-store');if(req.method!=='GET')return res.status(405).end();const user=await identity(req);res.json({user:{id:user.id,name:user.name,email:user.email},role:await role(user)});}catch(e){fail(res,e)}}
