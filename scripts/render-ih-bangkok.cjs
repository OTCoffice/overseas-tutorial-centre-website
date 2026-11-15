const fs=require('fs'),path=require('path'),{execFileSync}=require('child_process');
const root=path.resolve(__dirname,'..');
execFileSync(process.execPath,['scripts/render-herald.cjs','--service','content/ih-bangkok.json'],{cwd:root,stdio:'inherit'});
const file=path.join(root,'zh/summer-school-alliance/thailand/index.html');let html=fs.readFileSync(file,'utf8');
const link='/zh/summer-school-alliance/thailand/ih-bangkok/';
if(!html.includes('href="'+link+'"'))html=html.replace('<div class="summer-herald-linkbox">',`<div class="summer-herald-linkbox"><strong>IH 曼谷｜International House Bangkok</strong><span>5–15歲兒童英語營；2027兩週營費約新台幣3.2萬元，住宿機票另計。</span><div class="actions"><a class="btn btn-primary" href="${link}">院校與課程資料 →</a></div></div><div class="summer-herald-linkbox">`);
const share=html.match(/<div class="page-utility-bar" data-page-share>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/);
if(share){html=html.replace(share[0],'');html=html.replace(/<footer\b/,share[0]+'\n<footer');}
fs.writeFileSync(file,html.replace(/[ \t]+$/gm,''));
