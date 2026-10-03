const fs=require('fs'),path=require('path'),{execFileSync}=require('child_process');
const root=path.resolve(__dirname,'..');process.chdir(root);
execFileSync(process.execPath,['scripts/render-herald.cjs','--service','content/korea-winter.json'],{stdio:'inherit'});
const a=require('../content/korea-winter.json');
const p='zh/summer-school-alliance/index.html';let s=fs.readFileSync(p,'utf8');
if(!s.includes('href="'+a.path+'"')){
 const marker=/(<section class="summer-alliance-continent summer-alliance-continent--asia"[\s\S]*?<div class="summer-alliance-continent-list">)/;
 if(!marker.test(s))throw Error('Asia hub marker changed');
 s=s.replace(marker,'$1\n<article class="summer-alliance-region-card"><span class="summer-alliance-region-flag" aria-hidden="true">🇰🇷</span><div class="body"><strong>韓國 South Korea</strong><span>漢陽大學冬校：短期課程、文化活動、日期費用與免費代辦。</span><a href="'+a.path+'">查看韓國冬校專區 →</a></div></article>');
 s=s.replace(/(id="summer-continent-asia">亞洲<\/h3><\/div><b>)5 個入口/,'$16 個入口');
}
s=s.replace('新加坡、馬來西亞與泰國項目','日韓冬校、新加坡與東南亞項目');fs.writeFileSync(p,s);
const search='zh/search/index.html',re=/(<script type="application\/json" id="search-data">)([\s\S]*?)(<\/script>)/;
s=fs.readFileSync(search,'utf8');const m=s.match(re);if(!m)throw Error('Missing search data');const entries=JSON.parse(m[2]);const entry={type:'寒暑校',title:a.titleZh,url:a.path,desc:a.summaryZh};const i=entries.findIndex(x=>x.url===a.path);if(i<0)entries.unshift(entry);else entries[i]=entry;fs.writeFileSync(search,s.replace(re,(_,x,y,z)=>x+JSON.stringify(entries).replaceAll('<','\\u003c')+z));
const dir='zh/site-directory/index.html';s=fs.readFileSync(dir,'utf8');if(!s.includes('href="'+a.path+'"'))s=s.replace(/(<section id="institutions">[\s\S]*?<ul class="directory-list">)/,'$1<li data-directory-row><a href="'+a.path+'">韓國冬校｜漢陽大學</a><small>中文內容</small></li>');fs.writeFileSync(dir,s);
