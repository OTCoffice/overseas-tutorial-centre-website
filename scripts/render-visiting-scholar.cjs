const fs=require('fs'),{execFileSync}=require('child_process');
execFileSync(process.execPath,['scripts/render-herald.cjs','--service','content/visiting-scholar-support.json','--service','content/phd-application-coaching.json'],{stdio:'inherit'});
fs.writeFileSync('zh/services/index.html',require('../content/service-desk.cjs')());
const a=require('../content/visiting-scholar-support.json');
const p='zh/search/index.html',s=fs.readFileSync(p,'utf8'),re=/(<script type="application\/json" id="search-data">)([\s\S]*?)(<\/script>)/,m=s.match(re),data=JSON.parse(m[2]);
const entry={type:'服務',title:a.titleZh,url:a.path,desc:a.summaryZh},i=data.findIndex(e=>e.url===a.path);if(i<0)data.unshift(entry);else data[i]=entry;
fs.writeFileSync(p,s.replace(re,(_,h,b,t)=>h+JSON.stringify(data).replaceAll('<','\\u003c')+t));
const dir='zh/site-directory/index.html';let html=fs.readFileSync(dir,'utf8');if(!html.includes('href="'+a.path+'"')){const pos=html.indexOf('<section id="institutions">');if(pos<0)throw Error('Directory section missing');const point=html.indexOf('<ul class="directory-list">',pos)+'<ul class="directory-list">'.length;html=html.slice(0,point)+`<li data-directory-row><a href="${a.path}">訪問學者與學術交流</a><small>中文內容／學習工具 · <a data-original-page href="${a.path}">原頁</a></small></li>`+html.slice(point);fs.writeFileSync(dir,html);}
