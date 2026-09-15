#!/usr/bin/env node
// Render selected pages with the site's existing templates; never regenerate old covers.
const fs=require('fs'),path=require('path'),vm=require('vm'),{createRequire}=require('module'),{execFileSync}=require('child_process');
const root=path.resolve(__dirname,'..'),args=process.argv.slice(2),jobs=[];let dry=false;
for(let i=0;i<args.length;i++){
 if(args[i]==='--dry-run'){dry=true;continue;}
 if(!['--article','--service'].includes(args[i])||!args[i+1])throw Error('Usage: node scripts/render-herald.cjs --article content/article.json [--service content/service.json] [--dry-run]');
 const kind=args[i++].slice(2),file=path.resolve(root,args[i]),a=JSON.parse(fs.readFileSync(file,'utf8'));
 if(!file.startsWith(root+path.sep))throw Error('Content must be inside this repository');
 const route=a.path||'/zh/insights/'+a.slug+'/';
 if(!/^\/[a-z0-9/-]+\/$/.test(route)||route.includes('..'))throw Error('Invalid route');
 if(!a.shareImageZh||!a.socialImageVersion||!fs.existsSync(path.join(root,a.shareImageZh)))throw Error('Prepare the page-specific cover and version before rendering');
 jobs.push({kind,file,a,route});
}
if(!jobs.length)throw Error('Choose at least one page');
const started=performance.now(),generator=path.join(root,'generate-site.js'),source=fs.readFileSync(generator,'utf8');
let render;
if(jobs.some(j=>j.kind==='article')){
 const before=source.indexOf('const insights = pageShell({'),start=source.indexOf('function insightArticlePageZh('),end=source.indexOf('\nconst serviceLines = [',start);
 if(before<0||start<0||end<0)throw Error('Generator layout changed; review template extraction');
 // Only data and template definitions are evaluated. The full-site publishing loop is excluded.
 const context={require:createRequire(generator),__dirname:root,console,process,URL};
 vm.runInNewContext(source.slice(0,before)+'\n'+source.slice(start,end)+'\nglobalThis.renderSelectedArticle=insightArticlePageZh;',context,{filename:generator,timeout:15000});
 render=context.renderSelectedArticle;
}
const outputs=[];
for(const j of jobs){
 if(j.kind==='article'&&!source.includes(path.relative(root,j.file).replaceAll(path.sep,'/')))throw Error('Register article JSON in insightsArticles first so future full builds retain it');
 const html=j.kind==='article'?render(j.a):require(j.file.replace(/\.json$/,'.cjs'))();
 if(!html.includes(j.a.shareImageZh))throw Error('Template did not include the selected cover');
 const target=path.join(root,j.route,'index.html');
 outputs.push({file:target,text:html.replace(/[ \t]+$/gm,'')});
}
// Preserve existing search entries and sitemap routes; only upsert selected pages.
const searchFile=path.join(root,'search/index.html'),search=fs.readFileSync(searchFile,'utf8');
const match=search.match(/(<script type="application\/json" id="search-data">)([\s\S]*?)(<\/script>)/);
if(!match)throw Error('Search data block missing');
const entries=JSON.parse(match[2]);
for(const j of jobs){const entry={type:j.kind==='article'?'Insight':'Page',title:j.a.titleZh||j.a.title,url:j.route,desc:j.a.summaryZh||j.a.summary};const index=entries.findIndex(e=>e.url===j.route);if(index<0)entries.unshift(entry);else entries[index]={...entries[index],...entry};}
outputs.push({file:searchFile,text:search.replace(match[0],match[1]+JSON.stringify(entries).replace(/</g,'\\u003c')+match[3])});
const sitemapFile=path.join(root,'sitemap.xml');let sitemap=fs.readFileSync(sitemapFile,'utf8');
for(const j of jobs)if(!sitemap.includes('<loc>https://overseasuk.com'+j.route+'</loc>'))sitemap=sitemap.replace('</urlset>','  <url><loc>https://overseasuk.com'+j.route+'</loc></url>\n</urlset>');
outputs.push({file:sitemapFile,text:sitemap});
for(const o of outputs){if(dry){console.log('Would render:',path.relative(root,o.file));continue;}fs.mkdirSync(path.dirname(o.file),{recursive:true});fs.writeFileSync(o.file,o.text);}
if(!dry)for(const j of jobs)execFileSync('python3',['scripts/check-herald-share.py',path.relative(root,j.file)],{cwd:root,stdio:'inherit'});
console.log(`${dry?'Dry run':'Rendered'} ${jobs.length} page(s) in ${((performance.now()-started)/1000).toFixed(2)}s; no old pages or images regenerated.`);
console.log('For a NEW article, add its link to the Herald and category indexes before publishing. Review the diff, then commit/push once; run live checks after deployment.');
