import {randomUUID} from 'node:crypto';
import {identity,assertSameOrigin,fail} from '../lib/client-auth.mjs';
import {sql,role,findCase} from '../lib/client-portal.mjs';
export default async function handler(req,res){try{
 res.setHeader('Cache-Control','private, no-store');assertSameOrigin(req);const user=await identity(req),admin=await role(user)==='admin';
 if(req.method==='GET'&&req.query.key){
  const rows=await sql()`SELECT id,case_id,user_id,name,encode(content,'base64') AS encoded FROM otc_portal_files WHERE id::text=${String(req.query.key)}`;
  const f=rows[0];if(!f)return res.status(404).end();const c=await findCase(user,f.case_id,admin);
  const published=(c.docs||[]).some(d=>d.shared===true&&(d.versions||[]).some(v=>v.key===f.id));
  if(!admin&&f.user_id!==user.id&&!published)return res.status(404).end();
  res.setHeader('Content-Type','application/octet-stream');res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Content-Disposition',`attachment; filename*=UTF-8''${encodeURIComponent(f.name)}`);return res.end(Buffer.from(f.encoded,'base64'));
 }
 const caseId=String(req.query.caseId||req.body?.caseId||'');await findCase(user,caseId,admin);
 if(req.method==='GET'){const files=admin?await sql()`SELECT id AS key,name,created_at FROM otc_portal_files WHERE case_id=${caseId} ORDER BY created_at DESC`:await sql()`SELECT id AS key,name,created_at FROM otc_portal_files WHERE case_id=${caseId} AND user_id=${user.id} ORDER BY created_at DESC`;return res.json({files});}
 if(req.method!=='POST')return res.status(405).end();const {name,encoded}=req.body;
 if(typeof name!=='string'||!name.trim()||name.length>250||typeof encoded!=='string'||encoded.length>2800000||!/^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(encoded))return res.status(400).json({error:'附件格式不符；單份上限 2 MB。'});
 const bytes=Buffer.from(encoded,'base64');if(bytes.length>2*1024*1024)return res.status(413).json({error:'單份附件上限 2 MB。'});
 const key=randomUUID();const added=await sql()`INSERT INTO otc_portal_files(id,case_id,user_id,name,content) SELECT ${key},${caseId},${user.id},${name},decode(${encoded},'base64') WHERE (SELECT count(*) FROM otc_portal_files WHERE case_id=${caseId})<100 RETURNING id`;
 if(!added.length)return res.status(429).json({error:'此個案附件已達上限，請聯絡 OTC。'});return res.status(201).json({key,name});
 }catch(e){fail(res,e)}}
