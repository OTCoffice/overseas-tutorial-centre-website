import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
process.loadEnvFile('.env.local');
const root=process.cwd();
http.createServer(async(req,res)=>{try{
 const url=new URL(req.url,'http://localhost:4317');
 const pathname=decodeURIComponent(url.pathname);
 res.status=function(code){this.statusCode=code;return this};res.json=function(obj){this.setHeader('Content-Type','application/json');this.end(JSON.stringify(obj));};
 req.query=Object.fromEntries(url.searchParams);
 if(pathname.startsWith('/api/')){
  let name=pathname.slice(5).replace(/\/$/,'');if(name.startsWith('auth/')){req.query.path=name.slice(5);name='client-auth';}
  if(!/^client-[a-z]+$/.test(name)){res.status(404).end();return;}
  const chunks=[];let size=0;for await(const part of req){size+=part.length;if(size>3000000){res.status(413).end();return;}chunks.push(part);}
  const raw=Buffer.concat(chunks).toString();req.body=raw?JSON.parse(raw):undefined;
  const handler=(await import(path.join(root,'api',name+'.mjs'))).default;return await handler(req,res);
 }
 if(pathname.split('/').some(p=>p.startsWith('.'))||/^\/(api|lib|db|node_modules|scripts|client-portal\/src)\//.test(pathname)){res.status(404).end();return;}
 let file=path.resolve(root,'.'+pathname);if(!file.startsWith(root+path.sep)&&file!==root){res.status(403).end();return;}
 if((await fs.stat(file)).isDirectory())file=path.join(file,'index.html');
 const types={'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.png':'image/png','.svg':'image/svg+xml','.json':'application/json'};
 res.setHeader('Content-Type',types[path.extname(file)]||'application/octet-stream');res.end(await fs.readFile(file));
 }catch(e){res.statusCode=404;res.end('Not found');}}).listen(4317,'127.0.0.1',()=>console.log('OTC preview: http://127.0.0.1:4317/client-portal/'));
