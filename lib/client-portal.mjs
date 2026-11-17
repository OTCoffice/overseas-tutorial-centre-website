import {neon} from '@neondatabase/serverless';
import {validateClientProfile} from './client-profile.mjs';
export const services=['留學申請','畢業與升學規劃','移民與居留','簽證申請','申博陪跑','學業陪跑','求職與職涯陪跑','海外生活與安家','其他服務'];
export const statuses=['資料待補','已評估','候選路線','待官方核實','文件準備中','待客戶提供','待機構回覆','待本人批准','已提交','機構已收到','有條件錄取','待完成條件','已確認入學','行前準備中','服務進行中','待客戶確認','階段完成','已結案'];
let db;
export function sql(){if(!process.env.DATABASE_URL)throw Object.assign(new Error('個案資料庫尚未配置。'),{status:503});return db??=neon(process.env.DATABASE_URL);}
// Roles are read-only here. Registration, login and email changes never grant staff access.
export async function role(user,query){
 if(!user?.id||user.emailVerified!==true)return 'client';
 const rows=await (query||sql())`SELECT role FROM otc_portal_members WHERE user_id=${user.id}`;
 return rows[0]?.role==='admin'?'admin':'client';
}
export async function requireAdmin(user,lookup=role){if(await lookup(user)!=='admin')throw Object.assign(new Error('此頁只供 OTC 管理人員使用。'),{status:403});}
export async function workspace(){const rows=await sql()`SELECT payload,revision FROM otc_portal_workspace WHERE id=1`;return rows[0]||{payload:[],revision:0};}
export function authorizeCase(user,c,admin){if(!c||(!admin&&c.clientId!==user.id))throw Object.assign(new Error('找不到此個案。'),{status:404});return c;}
export async function findCase(user,id,admin){const w=await workspace();return authorizeCase(user,w.payload.find(c=>c.id===id),admin);}
export function clientCase(c){return {id:c.id,name:c.name,profile:c.profile?{data:validateClientProfile(c.profile.data),updatedAt:c.profile.updatedAt}:null,intake:c.intake?{answers:c.intake.answers,submittedAt:c.intake.submittedAt}:null,service:c.service||'留學申請',country:c.country||'',status:c.status,deadline:c.deadline||'',publicSummary:c.publicSummary||'',publicNext:c.publicNext||'',routes:(c.routes||[]).filter(r=>r.shared===true).map(r=>({school:r.school,course:r.course,country:r.country,status:r.status||'候選項目',deadline:r.deadline||'',requirements:r.requirements||'',fee:r.fee||'',source:/^https?:\/\//i.test(r.source||'')?r.source:'',verified:r.verified||''})),tasks:(c.tasks||[]).filter(t=>t.shared===true).map(t=>({title:t.title,due:t.due||'',owner:t.owner||'',done:t.done===true})),docs:(c.docs||[]).filter(d=>d.shared===true).map(d=>({name:d.name,versions:(d.versions||[]).map(v=>({date:v.date,note:v.note,text:v.text,key:v.key,fileName:v.fileName}))}))};}
export function validateWorkspace(data){
 if(!Array.isArray(data)||data.length>5000||JSON.stringify(data).length>3500000)throw Object.assign(new Error('個案資料格式或大小不符。'),{status:400});
 const ids=new Set();
 for(const c of data){if(!c||typeof c.id!=='string'||c.id.length>100||ids.has(c.id)||typeof c.name!=='string'||!c.name.trim()||c.name.length>150||!Array.isArray(c.docs)||!Array.isArray(c.actions)||!Array.isArray(c.tasks)||!Array.isArray(c.logs)||!Array.isArray(c.routes))throw Object.assign(new Error('個案欄位不完整。'),{status:400});ids.add(c.id);if(c.clientId&&typeof c.clientId!=='string')throw Object.assign(new Error('客戶帳戶格式不符。'),{status:400});}
 return data;
}
