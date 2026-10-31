(()=>{
 const root=document.getElementById('korea-schools');if(!root)return;
 const query=root.querySelector('#ks-query'),level=root.querySelector('#ks-level');
 const cards=[...root.querySelectorAll('.ks-school')];
 function filter(){let count=0;const q=query.value.trim().toLocaleLowerCase();
  for(const card of cards){const visible=(!q||card.dataset.query.includes(q))&&(!level.value||card.dataset.levels.split(' ').includes(level.value));card.hidden=!visible;if(visible)count++;}
  for(const group of root.querySelectorAll('.ks-region'))group.hidden=![...group.querySelectorAll('.ks-school')].some(card=>!card.hidden);
  root.querySelector('#ks-results').textContent='顯示 '+count+' 所學校／校區';root.querySelector('#ks-empty').hidden=count>0;
 }
 query.addEventListener('input',filter);level.addEventListener('change',filter);
})();
