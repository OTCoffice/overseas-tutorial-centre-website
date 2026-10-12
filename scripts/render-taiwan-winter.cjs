const fs=require('fs'),path=require('path'),{execFileSync}=require('child_process');
const root=path.resolve(__dirname,'..');process.chdir(root);
const names=['taiwan-winter','fu-jen-winter','soochow-winter'];
execFileSync(process.execPath,['scripts/render-herald.cjs',...names.flatMap(n=>['--service','content/'+n+'.json'])],{stdio:'inherit'});
const a=require('../content/taiwan-winter.json');
const p='zh/summer-school-alliance/index.html';let s=fs.readFileSync(p,'utf8');
if(!s.includes('href="'+a.path+'"')){
 const marker=/(<section class="summer-alliance-continent summer-alliance-continent--asia"[\s\S]*?<div class="summer-alliance-continent-list">)/;
 if(!marker.test(s))throw Error('Asia hub marker changed');
 s=s.replace(marker,'$1\n<article class="summer-alliance-region-card"><span class="summer-alliance-region-flag" aria-hidden="true">TW</span><div class="body"><strong>台灣 Taiwan</strong><span>輔仁與東吳大學介紹、2027 冬校比較及申請諮詢。</span><a href="'+a.path+'">查看台灣冬校專區 →</a></div></article>');
 s=s.replace(/(id="summer-continent-asia">亞洲<\/h3><\/div><b>)6 個入口/,'$17 個入口');
}
fs.writeFileSync(p,s);
const search='zh/search/index.html',re=/(<script type="application\/json" id="search-data">)([\s\S]*?)(<\/script>)/;
s=fs.readFileSync(search,'utf8');const m=s.match(re);if(!m)throw Error('Missing search data');const entries=JSON.parse(m[2]);for(const name of names){const item=require('../content/'+name+'.json');const entry={type:'寒暑校',title:item.titleZh,url:item.path,desc:item.summaryZh};const i=entries.findIndex(x=>x.url===item.path);if(i<0)entries.unshift(entry);else entries[i]=entry;}fs.writeFileSync(search,s.replace(re,(_,x,y,z)=>x+JSON.stringify(entries).replaceAll('<','\\u003c')+z));
const dir='zh/site-directory/index.html';s=fs.readFileSync(dir,'utf8');for(const name of names){const a=require('../content/'+name+'.json');if(!s.includes('href="'+a.path+'"'))s=s.replace(/(<section id="institutions">[\s\S]*?<ul class="directory-list">)/,'$1<li data-directory-row><a href="'+a.path+'">'+a.titleZh+'</a><small>中文內容</small></li>');}fs.writeFileSync(dir,s);
