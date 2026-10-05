// Preserve the site's approved multicolour service masthead on the alliance hub.
module.exports=({contact})=>{
 const links=[['countries','各國語校','17 國・城市與課程'],['service-scope','免費代辦','服務範圍與申請'],['budget','費用與住宿','學費・生活費・文件'],['government','政府資料','簽證・居留・課程資格']];
 return `<style>
.language-alliance-hero .band{padding-top:30px;padding-bottom:30px}
.language-alliance-hero h1{font-size:clamp(30px,3.8vw,48px);line-height:1.2;margin:14px 0}
.language-alliance-hero h2{font-size:18px;line-height:1.6}
.language-alliance-hero .service-hero-layout{grid-template-columns:minmax(300px,1fr) minmax(0,1.6fr);gap:28px}
.language-alliance-hero .service-hero-panel a{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;min-width:0;padding:22px 16px;gap:12px;text-decoration:none}
.language-alliance-hero .service-hero-panel a::before{content:attr(data-number);flex:none}
.language-alliance-hero .service-hero-panel strong{font-size:19px;line-height:1.5}
.language-alliance-hero .service-hero-panel span{font-size:12px;line-height:1.7}
.language-alliance-hero .service-hero-panel a:nth-child(1){background:rgba(61,101,137,.72)}
.language-alliance-hero .service-hero-panel a:nth-child(2){background:rgba(57,117,105,.78)}
.language-alliance-hero .service-hero-panel a:nth-child(3){background:rgba(154,66,45,.8)}
.language-alliance-hero .service-hero-panel a:nth-child(4){background:rgba(156,120,47,.82)}
.lang-directory .notes figure img{display:block;width:100%;height:auto}
.language-alliance-strip{margin-top:20px;margin-bottom:0}
.language-alliance-strip a::before{display:none!important}
.language-alliance-strip a{grid-template-columns:1fr!important}
.language-alliance-strip strong,.language-alliance-strip span{grid-column:1!important}
@media(max-width:1000px){.language-alliance-hero .service-hero-layout{grid-template-columns:1fr}.language-alliance-hero .service-hero-panel{grid-template-columns:repeat(4,minmax(0,1fr))}.language-alliance-hero .service-hero-panel a{padding:18px 12px}}
@media(max-width:600px){.language-alliance-hero .service-hero-panel,.language-alliance-strip{grid-template-columns:repeat(2,minmax(0,1fr))!important}.language-alliance-hero .service-hero-panel strong{font-size:17px}.language-alliance-hero .band{padding-top:24px;padding-bottom:24px}}
</style><section class="page-hero services-hero language-alliance-hero"><div class="band"><div class="service-hero-layout"><div><div class="eyebrow">OTC · 海外督導 · LANGUAGE SCHOOL ALLIANCE</div><h1>語校聯盟</h1><h2>17 國語言學校・免費申請代辦</h2><p class="hero-sub">從短期會話、考試準備到升學語言課程，按國家與城市找學校，比較課程、住宿與預算。</p><div class="actions"><a class="btn btn-primary" href="${contact}">免費選校諮詢</a><a class="btn btn-secondary" href="#countries">探索各國語校</a></div></div><aside class="service-hero-panel">${links.map(([id,title,sub],i)=>`<a href="#${id}" data-number="0${i+1}"><strong>${title}</strong><span>${sub}</span></a>`).join('')}</aside></div></div></section><nav class="band service-review-strip language-alliance-strip" aria-label="語校聯盟快捷入口">${links.map(([id,title,sub],i)=>`<a href="#${id}"><b>0${i+1}</b><strong>${title}</strong><span>${sub}</span></a>`).join('')}</nav>`;
};
