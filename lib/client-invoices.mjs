const accountId='acct_1Ud3jy3kRyy5p3ml';
const unavailable=()=>Object.assign(new Error('發票服務暫時未能連線，請稍後重新整理。'),{status:503});
const emailOf=value=>String(value||'').trim().toLowerCase();
export function stripeLink(value){try{const u=new URL(value);return u.protocol==='https:'&&['invoice.stripe.com','pay.stripe.com','files.stripe.com'].includes(u.hostname)?u.href:null}catch{return null}}
export function publicInvoice(i){return {id:i.id,number:i.number,status:i.status,currency:i.currency,total:i.total,paid:i.amount_paid,remaining:i.amount_remaining,created:i.created,due:i.due_date,paidAt:i.status_transitions?.paid_at||null,description:String(i.description||i.lines?.data?.map(l=>l.description).filter(Boolean).join('；')||'OTC 服務費').slice(0,2000),url:stripeLink(i.hosted_invoice_url),pdf:stripeLink(i.invoice_pdf)}}
export async function invoicesForUser(user,request){
 if(!user?.id||!user.emailVerified||!user.email)throw Object.assign(new Error('請登入並完成電郵驗證。'),{status:403});
 const email=emailOf(user.email),customers=await request('/customers',{email,limit:100});
 // Never guess ownership from a name, case number, or browser-supplied identifier.
 if(customers.has_more)throw unavailable();
 const owned=customers.data.filter(c=>c.livemode===true&&!c.deleted&&emailOf(c.email)===email);
 if(owned.length>20)throw unavailable();
 const groups=await Promise.all(owned.map(async c=>{const rows=await request('/invoices',{customer:c.id,limit:100});return {hasMore:rows.has_more,invoices:rows.data.filter(i=>i.livemode===true&&i.customer===c.id&&(!i.customer_email||emailOf(i.customer_email)===email)&&['open','paid','void','uncollectible'].includes(i.status)).map(publicInvoice)}}));
 return {invoices:groups.flatMap(g=>g.invoices).sort((a,b)=>b.created-a.created),hasMore:groups.some(g=>g.hasMore),checkedAt:new Date().toISOString()};
}
export async function liveInvoices(user){
 const key=process.env.OTC_LIVE_STRIPE_SECRET_KEY;
 if(!/^(sk|rk)_live_/.test(key||''))throw unavailable();
 const request=async(path,params={})=>{try{const response=await fetch('https://api.stripe.com/v1'+path+'?'+new URLSearchParams(params),{headers:{Authorization:'Bearer '+key},signal:AbortSignal.timeout(12000)});if(!response.ok)throw unavailable();return await response.json()}catch{throw unavailable()}};
 const account=await request('/account');if(account.id!==accountId)throw unavailable();
 return invoicesForUser(user,request);
}
