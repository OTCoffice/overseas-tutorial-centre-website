const fields={basic:['chineseName','familyName','givenName','nationality','residence','phone','contact'],education:['school','country','qualification','subject','start','end','grade','scale'],languages:['test','date','overall','listening','reading','writing','speaking'],work:['employer','role','start','end','details'],plan:['countries','degree','subject','intake','budget'],other:['visaHistory','notes']};
export function validateClientProfile(value){
 if(!value||typeof value!=='object'||Array.isArray(value)||JSON.stringify(value).length>50000)throw Object.assign(new Error('個人資料格式或大小不符。'),{status:400});
 function record(obj,keys){if(!obj||typeof obj!=='object'||Array.isArray(obj))throw Object.assign(new Error('請核對個人資料欄位。'),{status:400});const out={};for(const k of keys){const v=obj[k]??'';if(typeof v!=='string'||v.length>1500)throw Object.assign(new Error('單項資料最多 1,500 字。'),{status:400});out[k]=v.trim()}return out}
 const out={};for(const [k,keys]of Object.entries(fields)){if(['education','languages','work'].includes(k)){const rows=value[k]??[];if(!Array.isArray(rows)||rows.length>15)throw Object.assign(new Error('每類經歷最多 15 筆。'),{status:400});out[k]=rows.map(r=>record(r,keys))}else out[k]=record(value[k]??{},keys)}return out;
}
export function emptyClientProfile(){return validateClientProfile({});}
