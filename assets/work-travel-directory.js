(() => {
 const form=document.querySelector('.wt-filters');
 if(!form)return;
 const query=document.getElementById('wt-query'),region=document.getElementById('wt-region'),type=document.getElementById('wt-type');
 const cards=[...document.querySelectorAll('[data-country]')],sections=[...document.querySelectorAll('[data-region-section]')];
 function filter(){
  const q=query.value.trim().toLocaleLowerCase();
  cards.forEach(c=>{c.hidden=!!((q&&!c.dataset.search.toLocaleLowerCase().includes(q))||(region.value&&c.dataset.region!==region.value)||(type.value&&!c.dataset.types.split(' ').includes(type.value)));});
  sections.forEach(s=>{s.hidden=![...s.querySelectorAll('[data-country]')].some(c=>!c.hidden);if(s.tagName==='DETAILS')s.open=!!(q||region.value||type.value)&&!s.hidden;});
  const shown=cards.filter(c=>!c.hidden),count=new Set(shown.map(c=>c.dataset.country)).size;
  document.getElementById('wt-results').textContent=count?'符合篩選：'+count+' 個國家／地區。延伸旅居另列於下方。':'沒有符合的項目。可清除篩選，或聯絡我們查詢其他目的地。';
 }
 form.addEventListener('input',filter);form.addEventListener('change',filter);form.addEventListener('reset',()=>setTimeout(filter,0));filter();
})();
