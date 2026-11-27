/* OTC card directory: "詳情" popup for every .cd-card (2026-11-27).
   Cards that already carry their own .cd-more-btn are left alone.
   A card may hold <template class="cd-more"> with extra detail; otherwise the popup shows the card's own content. */
(() => {
  const cards = [...document.querySelectorAll('.cd .cd-card')].filter(c => !c.querySelector('.cd-more-btn'));
  if (!cards.length) return;

  const WA = '447947991572', EMAIL = 'office@overseasuk.com', WECHAT = 'overseasus';
  const css = `
.cd .cd-btns{flex-wrap:wrap}
.cd .cd-btns .cdx-btn{flex:1 1 100%;font:inherit;font-size:13px;border:0;border-radius:6px;padding:9px 10px;cursor:pointer;background:#1b263d;color:#f9f6ee;border-bottom:2px solid #ae9340}
.cd .cd-btns .cdx-btn:hover{background:#25334f}
.cdx-dlg{border:0;border-radius:12px;padding:0;max-width:560px;width:calc(100% - 32px);max-height:calc(100vh - 32px);overflow:auto;color:#1b263d;box-shadow:0 20px 60px rgba(0,0,0,.3)}
.cdx-dlg::backdrop{background:rgba(27,38,61,.55)}
.cdx-in{position:relative;padding:22px 22px 18px;border-top:4px solid #ae9340;font-size:14px;line-height:1.8}
.cdx-x{position:absolute;right:10px;top:8px;border:0;background:none;font-size:26px;line-height:1;cursor:pointer;color:#74333a;width:40px;height:40px}
.cdx-r{font-size:12px;color:#7a7a7a}
.cdx-dlg h3{margin:2px 40px 10px 0;font-size:19px;color:#1b263d}
.cdx-b p{margin:0 0 8px}.cdx-b ul,.cdx-b ol{padding-left:20px;margin:6px 0}.cdx-b a{color:#74333a}
.cdx-b table{width:100%;border-collapse:collapse;font-size:13px}.cdx-b th,.cdx-b td{border:1px solid #e4dcc8;padding:6px;text-align:left;vertical-align:top}.cdx-b th{background:#f9f6ee}
.cdx-b .cd-chips{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 8px}.cdx-b .cd-chips span{font-size:11px;background:#f9f6ee;border:1px solid #e4dcc8;border-radius:4px;padding:2px 7px}
.cdx-b .cd-note{background:#f9f6ee;border-left:3px solid #ae9340;border-radius:6px;padding:7px 10px;font-size:12px;margin-top:8px}
.cdx-b dl{margin:6px 0}.cdx-b dt{font-weight:700}.cdx-b dd{margin:0 0 6px}
.cdx-links{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}
.cdx-links a{flex:1 1 auto;text-align:center;text-decoration:none;border:1px solid #ae9340;color:#1b263d;background:#fff;border-radius:6px;padding:8px 10px;font-size:13px}
.cdx-c{margin-top:14px;background:#f9f6ee;border-left:3px solid #ae9340;border-radius:6px;padding:10px 12px}
.cdx-a{display:flex;gap:8px;margin:8px 0 4px}
.cdx-a a{flex:1;text-align:center;text-decoration:none;border-radius:6px;padding:9px 10px;font-size:13px}
.cdx-a .cdx-wa{background:#1b263d;color:#f9f6ee;border-bottom:2px solid #ae9340}.cdx-a .cdx-em{border:1px solid #ae9340;color:#1b263d;background:#fff}
.cdx-c p{margin:0;font-size:12px;color:#5a5a5a}`;
  const st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);

  const d = document.createElement('dialog');
  d.className = 'cdx-dlg';
  d.setAttribute('aria-labelledby', 'cdx-t');
  d.innerHTML = `<div class="cdx-in"><button type="button" class="cdx-x" aria-label="關閉">×</button><span class="cdx-r"></span><h3 id="cdx-t"></h3><div class="cdx-b"></div><div class="cdx-c"><b>想問這一項？</b><div class="cdx-a"><a class="cdx-wa" target="_blank" rel="noopener">WhatsApp</a><a class="cdx-em">Email</a></div><p>WhatsApp +44 7947 991572 · ${EMAIL} · 微信 ${WECHAT}</p></div></div>`;
  document.body.appendChild(d);
  const $ = s => d.querySelector(s);
  const pageName = ((document.querySelector('h1') || {}).textContent || document.title.split('｜')[0]).trim();

  function show(card) {
    const h = ((card.querySelector('h3') || {}).textContent || '').trim();
    const region = card.querySelector('.cd-region');
    $('#cdx-t').textContent = h;
    $('.cdx-r').textContent = region ? region.textContent.trim() : pageName;
    const b = $('.cdx-b');
    b.innerHTML = '';
    const more = card.querySelector('template.cd-more');
    if (more) {
      b.appendChild(more.content.cloneNode(true));
    } else {
      card.querySelectorAll(':scope > .cd-chips, :scope > .cd-desc, :scope > .cd-note').forEach(n => b.appendChild(n.cloneNode(true)));
    }
    const links = [...card.querySelectorAll('.cd-btns a')];
    if (links.length) {
      const wrap = document.createElement('div');
      wrap.className = 'cdx-links';
      links.forEach(a => { const c = a.cloneNode(true); c.className = ''; wrap.appendChild(c); });
      b.appendChild(wrap);
    }
    const msg = `你好，我想了解「${pageName}」：${h}\n我的情況：`;
    $('.cdx-wa').href = `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
    $('.cdx-em').href = `mailto:${EMAIL}?subject=${encodeURIComponent(pageName + '｜' + h)}&body=${encodeURIComponent(msg)}`;
    if (d.showModal) d.showModal(); else d.setAttribute('open', '');
  }

  cards.forEach(card => {
    let bar = card.querySelector(':scope > .cd-btns');
    if (!bar) { bar = document.createElement('div'); bar.className = 'cd-btns'; card.appendChild(bar); }
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'cdx-btn cd-more-btn';
    btn.textContent = '詳情';
    btn.addEventListener('click', () => show(card));
    bar.appendChild(btn);
  });
  $('.cdx-x').addEventListener('click', () => d.close());
  d.addEventListener('click', e => { if (e.target === d) d.close(); });
})();
