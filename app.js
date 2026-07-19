function favicon(url){
  try{
    const domain = new URL(url).hostname;
    return `https://icons.duckduckgo.com/ip3/${domain}.ico`;
  }catch(e){
    return '';
  }
}

function faviconFallback(url){
  try{
    const domain = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;
  }catch(e){
    return '';
  }
}

function renderQuickLinks(){
  const bar = document.getElementById('quickLinks');
  bar.innerHTML = '';
  quickLinks.forEach(l => {
    const a = document.createElement('a');
    a.className = 'quick-btn';
    a.href = l.url;
    a.target = '_blank';
    a.rel = 'noopener';
    a.innerHTML = `<img src="${favicon(l.url)}" data-fallback="${faviconFallback(l.url)}" onerror="this.onerror=null;this.src=this.dataset.fallback" alt=""><span>${l.name}</span>`;
    bar.appendChild(a);
  });
}

function render(){
  renderQuickLinks();
  const board = document.getElementById('board');
  board.innerHTML = '';

  columns.forEach((col) => {
    const colEl = document.createElement('div');
    colEl.className = 'column';
    colEl.innerHTML = `
      <div class="col-head">
        <h2>${col.title}</h2>
        <div style="display:flex;align-items:center;gap:8px;">
          <span class="count">${col.links.length}</span>
          <span class="chevron">▾</span>
        </div>
      </div>
      <div class="col-body">
        <div class="tiles"></div>
      </div>
    `;

    const tiles = colEl.querySelector('.tiles');
    col.links.forEach(l => {
      const a = document.createElement('a');
      a.className = 'tile';
      a.href = l.url;
      a.target = '_blank';
      a.rel = 'noopener';
      a.innerHTML = `<img src="${favicon(l.url)}" data-fallback="${faviconFallback(l.url)}" onerror="this.onerror=null;this.src=this.dataset.fallback" alt=""><span>${l.name}</span><span class="arrow">↗</span>`;
      tiles.appendChild(a);
    });

    colEl.querySelector('.col-head').addEventListener('click', () => {
      colEl.classList.toggle('collapsed');
    });

    board.appendChild(colEl);
  });
}

render();
