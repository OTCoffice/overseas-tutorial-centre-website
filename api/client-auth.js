import {assertSameOrigin,authResponse,sendAuthResponse,fail} from '../lib/client-auth.mjs';
const paths=new Set(['get-session','sign-in/email','sign-up/email','sign-out','email-otp/send-verification-otp','email-otp/verify-email','email-otp/passcode','request-password-reset','reset-password']);
export default async function handler(req,res){
  try{
    assertSameOrigin(req);
    const path=String(req.query.path||'').replace(/\/+$/,'');
    if(!paths.has(path)||!['GET','POST'].includes(req.method))return res.status(404).json({error:'找不到此操作。'});
    if((path==='get-session')!==(req.method==='GET'))return res.status(405).end();
    if(JSON.stringify(req.body||{}).length>12000)return res.status(413).end();
    if(['sign-up/email','email-otp/passcode','reset-password'].includes(path)&&
       (typeof req.body?.password!=='string'||req.body.password.length<12||req.body.password.length>128))return res.status(400).json({error:'密碼須為 12 至 128 個字元。'});
    return sendAuthResponse(res,await authResponse(req,path));
  }catch(e){fail(res,e)}
}
