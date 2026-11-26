// Targeted nursing rendering: country JSONs, discoverability, and no unrelated page rebuilds.
const fs=require('fs'),path=require('path'),{execFileSync}=require('child_process');
const base=path.resolve(__dirname,'..');
const countrySlugs=require('../content/nursing-destinations.json').map(c=>'nursing-'+c.slug);
const slugs=['nursing-hub',...countrySlugs,...(process.argv.includes('--countries')?[]:['nursing-courses'])];
execFileSync(process.execPath,['scripts/render-herald.cjs',...slugs.flatMap(s=>['--service','content/'+s+'.json'])],{cwd:base,stdio:'inherit'});
const records=slugs.map(s=>require('../content/'+s+'.json'));
for(const file of ['search/index.html','zh/search/index.html']){
 const p=path.join(base,file),s=fs.readFileSync(p,'utf8'),re=/(<script type="application\/json" id="search-data">)([\s\S]*?)(<\/script>)/,m=s.match(re);
 if(!m)throw Error('Missing search data: '+file);
 const entries=JSON.parse(m[2]);
 for(const a of records){const entry={type:'服務',title:a.titleZh,url:a.path,desc:a.summaryZh};const i=entries.findIndex(x=>x.url===a.path);if(i<0)entries.unshift(entry);else entries[i]={...entries[i],...entry};}
 fs.writeFileSync(p,s.replace(re,(_,o,b,c)=>o+JSON.stringify(entries).replaceAll('<','\\u003c')+c));
}
const p=path.join(base,'zh/site-directory/index.html');let directory=fs.readFileSync(p,'utf8');
for(const a of records){const re=new RegExp('(<a href="'+a.path+'">)[^<]*(</a>)','g');if(!re.test(directory))throw Error('Missing directory entry: '+a.path);directory=directory.replace(re,'$1'+a.name+'$2');}
fs.writeFileSync(p,directory);
console.log('Updated nursing pages, both search indexes and directory labels.');
