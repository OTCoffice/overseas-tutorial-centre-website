module.exports=async function handler(req,res){
 const {identity,fail}=await import('../lib/client-auth.mjs');
 const {liveInvoices}=await import('../lib/client-invoices.mjs');
 res.setHeader('Cache-Control','private, no-store');res.setHeader('Vary','Cookie');
 if(req.method!=='GET'){res.setHeader('Allow','GET');return res.status(405).end()}
 try{const user=await identity(req);return res.json(await liveInvoices(user))}catch(error){fail(res,error)}
};
