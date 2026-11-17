import {randomUUID} from 'node:crypto';
import {identity,assertSameOrigin,fail} from '../lib/client-auth.mjs';
import {sql,workspace,clientCase,services} from '../lib/client-portal.mjs';
export default async function handler(req,res){try{
 res.setHeader('Cache-Control','private, no-store');assertSameOrigin(req);const user=await identity(req);
 if(req.method==='GET'){const w=await workspace();return res.json({cases:w.payload.filter(c=>c.clientId===user.id).map(clientCase)});}
 if(req.method!=='POST')return res.status(405).end();const b=req.body;
 if(!services.includes(b.service)||typeof b.goal!=='string'||!b.goal.trim()||b.goal.length>3000||typeof b.country!=='string'||b.country.length>100)return res.status(400).json({error:'請選擇服務並填寫需求（最多 3,000 字）。'});
 const id=randomUUID();const c={id,clientId:user.id,name:user.name||user.email,service:b.service,country:b.country,known:b.goal,publicSummary:b.goal,publicNext:'OTC 將核對需求及服務範圍。',status:'資料待補',priority:'一般',owner:'OTC',deadline:'',background:'',qualification:'',english:'',year:'',budget:'未知',school:'',course:'',missing:'',next:'核對新服務需求',risk:'待評估',source:'',verified:'',conditions:'未知',payment:'待確認',accommodation:'待確認',arrival:'待確認',routes:[],docs:[],tasks:[],actions:[],logs:[{date:new Date().toISOString(),text:'客戶建立服務需求；尚未正式委託或提交申請。'}]};
 const rows=await sql()`UPDATE otc_portal_workspace SET payload=payload||${JSON.stringify([c])}::jsonb,revision=revision+1 WHERE id=1 AND (SELECT count(*) FROM jsonb_array_elements(payload) e WHERE e->>'clientId'=${user.id})<30 RETURNING revision`;
 if(!rows.length)return res.status(429).json({error:'服務需求已達上限，請聯絡 OTC。'});res.status(201).json({id});
 }catch(e){fail(res,e)}}
