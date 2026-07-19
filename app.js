function getFavicon(linkObj) {
  // 1. Wenn ein benutzerdefiniertes/lokales Icon definiert ist, verwende dieses
  if (linkObj.icon) {
    return linkObj.icon;
  }
  
  // 2. Andernfalls automatisches Icon über DuckDuckGo holen
  try {
    const domain = new URL(linkObj.url).hostname;
    return `https://icons.duckduckgo.com/ip3/${domain}.ico`;
  } catch(e) {
    return '';
  }
}

function getFaviconFallback(linkObj) {
  // Wenn ein lokales Icon definiert ist, nutzt auch der Fallback dieses
  if (linkObj.icon) {
    return linkObj.icon;
  }
  
  // Andernfalls Fallback über Google holen
  try {
    const domain = new URL(linkObj.url).hostname;
    return `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;
  } catch(e) {
    return '';
  }
}

function renderQuickLinks() {
  const bar = document.getElementById('quickLinks');
  if (!bar) return;
  bar.innerHTML = '';
  quickLinks.forEach(l => {
    const a = document.createElement('a');
    a.className = 'quick-btn';
    a.href = l.url;
    a.target = '_blank';
    a.rel = 'noopener';
    
    // Übergibt das ganze Objekt 'l' statt nur der URL
    a.innerHTML = `<img src="${getFavicon(l)}" data-fallback="${getFaviconFallback(l)}" onerror="this.onerror=null;this.src=this.dataset.fallback" alt=""><span>${l.name}</span>`;
    bar.appendChild(a);
  });
}

function render() {
  renderQuickLinks();
  const board = document.getElementById('board');
  if (!board) return;
  board.innerHTML = '';

  columns.forEach((col) => {
    const colEl = document.createElement('div');
    colEl.className = 'column';
    colEl.innerHTML = `
      <div class=\"col-head\">
        <h2>${col.title}</h2>
        <div style=\"display:flex;align-items:center;gap:8px;\">
          <span class=\"count\">${col.links.length}</span>
          <span class=\"chevron\">▾</span>
        </div>
      </div>
      <div class=\"col-body\">
        <div class=\"tiles\"></div>
      </div>
    `;

    const tiles = colEl.querySelector('.tiles');
    col.links.forEach(l => {
      const a = document.createElement('a');
      a.className = 'tile';
      a.href = l.url;
      a.target = '_blank';
      a.rel = 'noopener';
      
      // Übergibt das ganze Objekt 'l' statt nur der URL
      a.innerHTML = `<img src="${getFavicon(l)}" data-fallback="${getFaviconFallback(l)}" onerror="this.onerror=null;this.src=this.dataset.fallback" alt=""><span>${l.name}</span>`;
      tiles.appendChild(a);
    });

    board.appendChild(colEl);
  });

  // Event Listener für das Auf- und Zuklappen der Spalten
  document.querySelectorAll('.col-head').forEach(head => {
    head.addEventListener('click', () => {
      head.parentElement.classList.toggle('collapsed');
    });
  });
}

// Initiales Rendern beim Laden der Seite
document.addEventListener('DOMContentLoaded', render);
