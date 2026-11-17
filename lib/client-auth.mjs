import {handleAuthProxyRequest,handleAuthRequest} from '@neondatabase/auth/server';

export function requestOrigin(req) {
  const host = String(req.headers.host || '');
  const local = /^(localhost|127\.0\.0\.1)(:\d+)?$/.test(host);
  return `${local ? 'http' : 'https'}://${host}`;
}
export function assertSameOrigin(req) {
  if (!['GET', 'HEAD'].includes(req.method) && req.headers.origin !== requestOrigin(req)) {
    throw Object.assign(new Error('請從官網重新登入後操作。'), {status:403});
  }
}
export async function authResponse(req, path, method=req.method, body=req.body, fresh=false) {
  if (!process.env.NEON_AUTH_BASE_URL || !process.env.NEON_AUTH_COOKIE_SECRET) {
    throw Object.assign(new Error('會員服務尚未配置。'), {status:503});
  }
  const headers = new Headers();
  for (const key of ['cookie', 'origin', 'user-agent']) if(req.headers[key]) headers.set(key,String(req.headers[key]));
  const url = new URL('/api/auth/'+path,requestOrigin(req));
  // Never accept user-supplied proxy/cache trust headers.
  if (path==='get-session') url.searchParams.set('disableCookieCache','true');
  let rawBody;
  if (!['GET','HEAD'].includes(method)) {
    headers.set('content-type','application/json');
    rawBody=typeof body==='string'?body:JSON.stringify(body||{});
  }
  const request = new Request(url,{method,headers,body:rawBody});
  if(fresh)return handleAuthRequest(process.env.NEON_AUTH_BASE_URL,request,path);
  return handleAuthProxyRequest({request,path,baseUrl:process.env.NEON_AUTH_BASE_URL,
    cookieSecret:process.env.NEON_AUTH_COOKIE_SECRET,sessionDataTtl:60,sameSite:'lax'});
}
export async function sendAuthResponse(res, response) {
  res.statusCode=response.status;
  for(const [key,value] of response.headers) if(!['set-cookie','content-length','content-encoding'].includes(key))res.setHeader(key,value);
  const cookies=response.headers.getSetCookie();
  if(cookies.length)res.setHeader('Set-Cookie',cookies);
  res.setHeader('Cache-Control','private, no-store');
  res.end(Buffer.from(await response.arrayBuffer()));
}
export async function identity(req) {
  const response=await authResponse(req,'get-session','GET',undefined,true);
  if(!response.ok)throw Object.assign(new Error('請重新登入。'),{status:401});
  const session=await response.json();
  if(!session?.user?.id)throw Object.assign(new Error('請先登入。'),{status:401});
  if(!session.user.emailVerified)throw Object.assign(new Error('請先完成電郵驗證。'),{status:403});
  return session.user;
}
export function fail(res,error){res.statusCode=error.status||500;res.setHeader('Cache-Control','private, no-store');res.json({error:error.status?error.message:'服務暫時未能完成，請稍後重試。'});}
