// Native service headers remain the single visible cover; this map also drives social metadata.
const catalog=require('./service-native-headers.json');
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('"','&quot;');
module.exports=function(html,route){
 const a=catalog[route];if(!a)return html;
 if(route==='/zh/services/uk-sop-editing/'&&!html.includes('services-hero')){const frame=require('./academic-subpage.cjs')(a.title,'').replace(/<main[\s\S]*?<\/main>/,'');html=html.replace(/<section class="band sop-page">/,frame+'<section class="band sop-page">').replace(/(<section class="band sop-page">[\s\S]*?)<h1[\s\S]*?<\/h1>/,'$1');}
 const old=[...html.matchAll(/<meta[^>]+(?:property="og:image"|name="twitter:image")[^>]+content="([^"]+)"/g)].map(m=>m[1].split('?')[0]);if(a.previousImage)old.push(a.previousImage);
 html=html.replace(/<figure\b[^>]*>[\s\S]*?<\/figure>/g,f=>old.some(u=>f.includes(u.replace('https://overseasuk.com','')))?'':f);
 html=html.replace(/<img\b[^>]*>/g,t=>old.some(u=>t.includes(u.replace('https://overseasuk.com','')))?'':t);
 html=html.replace(/<section\b[^>]*class="[^"]*service-review-strip[^"]*"[^>]*>[\s\S]*?<\/section>/g,'');
 if(route==='/zh/services/vietnam-visa/'&&html.includes('vn-hero')){const frame=require('./academic-subpage.cjs')(a.title,'').replace(/<main[\s\S]*?<\/main>/,'').replace('教育服務與雙語學習','文件整理・申請支援').replace('按主題查閱服務、課程與出版資料，了解內容與聯絡方式。','依出行目的與日期，核對越南簽證資料及辦理安排。');html=html.replace(/<header class="vn-hero"[\s\S]*?<\/header>/,frame).replace(/<section\b[^>]*class="[^"]*service-review-strip[^"]*"[^>]*>[\s\S]*?<\/section>/g,'');}
 if(route==='/zh/services/uk-sop-editing/')html=html.replace('教育服務與雙語學習','申請文書・架構與修改').replace('按主題查閱服務、課程與出版資料，了解內容與聯絡方式。','依申請課程與經歷，整理文書架構及修改安排。');
 const img='https://overseasuk.com'+a.image+'?'+a.version;
 const setMeta=(key,value,name=false)=>{const rx=new RegExp('<meta[^>]+(?:property|name)="'+key+'"[^>]*>');const tag='<meta '+(name?'name':'property')+'="'+key+'" content="'+esc(value)+'">';html=rx.test(html)?html.replace(rx,tag):html.replace('</head>',tag+'\n</head>');};
 for(const k of ['og:image','og:image:secure_url','twitter:image','twitter:image:src'])setMeta(k,img,k.startsWith('twitter'));
 setMeta('twitter:card',a.cardType||'summary_large_image',true);
 for(const k of ['title','description'])if(!new RegExp('<meta[^>]+name="twitter:'+k+'"').test(html)){const value=(html.match(new RegExp('<meta[^>]+property="og:'+k+'"[^>]+content="([^"]*)"'))||[])[1]||a.title;setMeta('twitter:'+k,value,true);}setMeta('og:image:width',a.width);setMeta('og:image:height',a.height);setMeta('og:image:type','image/png');
 for(const key of ['og:image','og:image:secure_url','twitter:image','twitter:image:src'])html=html.replace(new RegExp('(<meta[^>]+(?:property|name)="'+key+'"[^>]+content=")[^"]*(")','g'),'$1'+img+'$2');
 html=html.replace(/(<link rel="image_src" href=")[^"]*(")/g,'$1'+img+'$2').replace(/(<meta itemprop="image" content=")[^"]*(")/g,'$1'+img+'$2');
 for(const [key,val] of [['og:image:width',a.width],['og:image:height',a.height],['og:image:type','image/png']])html=html.replace(new RegExp('(<meta[^>]+property="'+key+'"[^>]+content=")[^"]*(")'),'$1'+val+'$2');
 html=html.replace(/<(section|header)\b([^>]*class="[^"]*(?:services-hero|vn-hero|affordable-compact-header)[^"]*"[^>]*)>/,(m,t,attrs)=>'<'+t+attrs.replace(/\s(?:data-share-(?:image|width|height)|aria-label)="[^"]*"/g,'')+' data-share-image="'+esc(a.image+'?'+a.version)+'" data-share-width="'+a.width+'" data-share-height="'+a.height+'" aria-label="'+esc(a.title)+'">');
 if(a.shareLayout==='compact-square'){
  html=html.replace(/<figure class="service-link-artwork"[\s\S]*?<\/figure>/g,'');
  const card='<figure class="service-link-artwork" style="width:min(220px,100%);margin:24px auto"><img src="'+esc(a.image+'?'+a.version)+'" width="'+a.width+'" height="'+a.height+'" alt="'+esc(a.title)+'" loading="lazy" style="display:block;width:100%;height:auto;object-fit:contain"></figure>';
  html=html.replace('</main>',card+'</main>');
 }
 if(!html.includes('id="native-service-mobile-layout"'))html=html.replace('</head>','<style id="native-service-mobile-layout">@media(max-width:700px){.services-hero .service-hero-layout{display:grid!important;grid-template-columns:minmax(0,1fr)!important;gap:16px!important}.services-hero .service-hero-panel{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:6px!important}.services-hero .service-hero-panel a{min-width:0;overflow-wrap:anywhere}.services-hero .service-hero-layout>div{min-width:0}}</style></head>');
 return html;
};
