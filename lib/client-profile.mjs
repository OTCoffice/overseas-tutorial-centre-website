import {profileFields,repeatingProfileGroups} from './client-profile-fields.mjs';
const fields=Object.fromEntries(Object.entries(profileFields).map(([group,rows])=>[group,rows.map(([key])=>key)]));
export function validateClientProfile(value){
 if(!value||typeof value!=='object'||Array.isArray(value)||JSON.stringify(value).length>50000)throw Object.assign(new Error('個人資料格式或大小不符。'),{status:400});
 function record(obj,keys){if(!obj||typeof obj!=='object'||Array.isArray(obj))throw Object.assign(new Error('請核對個人資料欄位。'),{status:400});const out={};for(const k of keys){const v=obj[k]??'';if(typeof v!=='string'||v.length>1500)throw Object.assign(new Error('單項資料最多 1,500 字。'),{status:400});out[k]=v.trim()}return out}
 const out={};for(const [k,keys]of Object.entries(fields)){if(repeatingProfileGroups.includes(k)){const rows=value[k]??[];if(!Array.isArray(rows)||rows.length>15)throw Object.assign(new Error('每類經歷最多 15 筆。'),{status:400});out[k]=rows.map(r=>record(r,keys))}else out[k]=record(value[k]??{},keys)}return out;
}
export function emptyClientProfile(){return validateClientProfile({});}

export function profileMissing(value){const p=validateClientProfile(value),missing=[];for(const [k,l] of [['familyName','英文姓'],['givenName','英文名'],['nationality','國籍'],['email','聯絡電郵'],['phone','聯絡電話']])if(!p.basic[k])missing.push(l);if(p.basic.email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.basic.email))missing.push('有效的聯絡電郵');if(!p.education.some(r=>r.school&&r.qualification&&r.subject))missing.push('至少一筆完整教育經歷（學校、學位、專業）');if(!p.plan.countries)missing.push('目標國家');if(!p.plan.degree)missing.push('申請學段');return missing;}
export function applyProfileUpdate(c,value,now,submit=false){
 const data=validateClientProfile(value);if(submit){const missing=profileMissing(data);if(missing.length)throw Object.assign(new Error('請先補充：'+missing.join('、')),{status:400})}
 const profile={data,updatedAt:now,submittedAt:submit?now:(c.profile?.submittedAt||''),submittedVersion:submit?now:(c.profile?.submittedVersion||'')};
 return {...c,profile,...(submit?{logs:[...(c.logs||[]),{date:now,text:'客戶提交完整申請資料供 OTC 核對；未向院校或簽證機關遞交。'}],tasks:[...(c.tasks||[]).filter(t=>t.system!=='profile-review'||t.done),{title:'核對客戶完整申請資料',due:'',owner:c.owner||'OTC Office',done:false,system:'profile-review'}]}:{})};
}
