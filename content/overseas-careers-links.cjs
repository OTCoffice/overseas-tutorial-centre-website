module.exports=(html,zh=true)=>{
 if(html.includes('id="overseas-careers"'))return html;
 const links=zh?[
 ['日本就業準備陪跑','/zh/services/japan-employment-preparation/','特定技能方向、日語與技能考試、預算、材料及面試準備。'],
 ['澳洲求職陪跑','/zh/australia-job-search-coaching/','求職方向、履歷、面試與入職準備。'],
 ['法國留學、就業與生活','/zh/france-study-work-settlement-support/','升學、法語、實習、就業準備與居留資訊。']
 ]:[['Japan employment preparation','/zh/services/japan-employment-preparation/','Paid planning, test schedules, budgets, documents and interview preparation. Chinese service page.'],['Australia job search coaching','/australia-job-search-coaching/','Role selection, CVs, interview practice and onboarding preparation.'],['France study, work and settlement support','/france-study-work-settlement-support/','Study, language, internships, employment preparation and residence information.']];
 const block=`<section class="band compact-band" id="overseas-careers"><h2>${zh?'海外就業與生活':'Overseas careers and living'}</h2><p>${zh?'按目的地了解求職準備、專業發展及生活安排。':'Explore employment preparation, professional development and living arrangements by destination.'}</p><div class="service-feature-grid">${links.map(([t,u,d])=>`<a class="service-feature-card" href="${u}"><strong>${t}</strong><p>${d}</p><span>${zh?'查看服務 →':'View service →'}</span></a>`).join('')}</div></section>`;
 return html.replace('</main>',block+'</main>');
};
