// Public service-page context only. Never accept identities, roles or redirects.
export function clientEntry(search=''){
 const p=new URLSearchParams(search);if(p.get('entry')!=='france-alternance')return null;
 const programme=(p.get('programme')||'').trim().slice(0,600);
 return {service:'留學申請',country:'法國',goal:programme?'希望申請法國 Alternance：'+programme:'希望了解法國 Alternance 碩士課程，申請 OTC 選校與代辦協助。'};
}
