(() => {
  const $ = id => document.getElementById(id);
  const norm = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  if ($('country-search')) {
    const groups = [...document.querySelectorAll('[data-group]')];
    const filter = () => {
      let total = 0;
      groups.forEach(group => {
        let count = 0;
        group.querySelectorAll('[data-country]').forEach(item => {
          item.hidden = !norm(item.dataset.country).includes(norm($('country-search').value)) || !!($('region').value && $('region').value !== group.dataset.group);
          if (!item.hidden) count++;
        });
        group.hidden = !count;
        total += count;
      });
      $('country-count').textContent = total + ' 個國家與地區';
      $('country-empty').hidden = total > 0;
    };
    $('country-search').addEventListener('input', filter);
    $('region').addEventListener('change', filter);
  }
  if ($('sponsor-search')) {
    const rows = [...document.querySelectorAll('[data-sponsor]')];
    let page = 0;
    const size = 40;
    const render = () => {
      const found = rows.filter(row => norm(row.dataset.sponsor).includes(norm($('sponsor-search').value)) && (!$('city').value || row.dataset.city === $('city').value));
      const pages = Math.max(1, Math.ceil(found.length / size));
      page = Math.min(page, pages - 1);
      const visible = new Set(found.slice(page * size, (page + 1) * size));
      rows.forEach(row => row.hidden = !visible.has(row));
      $('sponsor-count').textContent = '找到 ' + found.length.toLocaleString() + ' 條記錄';
      $('page-number').textContent = (page + 1) + ' / ' + pages;
      $('previous').disabled = page === 0;
      $('next').disabled = page === pages - 1;
      $('sponsor-empty').hidden = found.length > 0;
      $('pager').hidden = false;
    };
    const filter = () => { page = 0; render(); };
    $('sponsor-search').addEventListener('input', filter);
    $('city').addEventListener('change', filter);
    $('previous').addEventListener('click', () => { page--; render(); });
    $('next').addEventListener('click', () => { page++; render(); });
    $('reset').addEventListener('click', () => { $('sponsor-search').value = ''; $('city').value = ''; filter(); });
    render();
  }
})();

// Paid programme directory; independent of the country and UK sponsor filters.
(()=>{const input=document.getElementById('programme-search'),select=document.getElementById('programme-provider');if(!input||!select)return;const rows=[...document.querySelectorAll('[data-programme]')];function filter(){const q=input.value.trim().toLowerCase();let count=0;for(const row of rows){row.hidden=!(row.dataset.programme.toLowerCase().includes(q)&&(!select.value||row.dataset.provider===select.value));if(!row.hidden)count++;}document.querySelectorAll('[data-programme-group]').forEach(g=>g.hidden=![...g.querySelectorAll('[data-programme]')].some(r=>!r.hidden));document.getElementById('programme-count').textContent=count+' 個項目'+(count?'':'，請更換關鍵字');}input.addEventListener('input',filter);select.addEventListener('change',filter);})();
