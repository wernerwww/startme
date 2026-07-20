// Fallback-Version, falls die GitHub-API nicht erreichbar ist (z.B. lokal via file://)
const VERSION = "1.0.0";

// Repo im Format "user/repo" – für die automatische Build-Anzeige im Footer
const REPO = "wernerwww/startme";

const VERSION_CACHE_KEY = "startme_version_cache";
const VERSION_CACHE_TTL = 1000 * 60 * 30; // 30 Minuten zwischenspeichern (GitHub-API: 60 Anfragen/Std. ohne Login)

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

// Holt die letzte "pages-build-deployment" Build-Nummer von GitHub und zeigt sie im Footer
async function loadVersion(){
  const versionEl = document.getElementById('version');
  if (!versionEl) return;

  // Erst aus Cache anzeigen (vermeidet unnötige API-Anfragen)
  try {
    const cached = JSON.parse(sessionStorage.getItem(VERSION_CACHE_KEY) || 'null');
    if (cached && (Date.now() - cached.ts) < VERSION_CACHE_TTL) {
      versionEl.textContent = cached.text;
      versionEl.title = cached.title || '';
      return;
    }
  } catch(e) { /* sessionStorage evtl. nicht verfügbar, ignorieren */ }

  // Fallback-Text sofort setzen, während geladen wird
  versionEl.textContent = `v${VERSION}`;

  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/actions/runs?per_page=1`);
    if (!res.ok) throw new Error('API-Fehler: ' + res.status);
    const data = await res.json();
    const run = data.workflow_runs && data.workflow_runs[0];
    if (!run) throw new Error('Kein Workflow-Run gefunden');

    const text = `Build #${run.run_number}`;
    const title = `${run.name} · ${new Date(run.updated_at).toLocaleString('de-DE')}`;

    versionEl.textContent = text;
    versionEl.title = title;

    try {
      sessionStorage.setItem(VERSION_CACHE_KEY, JSON.stringify({ text, title, ts: Date.now() }));
    } catch(e) { /* Speichern optional, kein Problem falls nicht möglich */ }
  } catch (e) {
    // Bei Fehler (offline, Rate-Limit, file://-Aufruf, privates Repo) bleibt der Fallback "v1.0.0" stehen
    console.warn('Build-Version konnte nicht geladen werden, zeige Fallback:', e);
  }
}

// Initiales Rendern beim Laden der Seite
document.addEventListener('DOMContentLoaded', () => {
  render();
  loadVersion();
});
