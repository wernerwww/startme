# startme

Ein einfaches, selbst gehostetes Link-Dashboard mit mehreren Seiten / Tabs – als persönliche Startseite im Browser. Keine Abhängigkeiten, kein Build-Prozess, reines HTML/CSS/JS.

![Dashboard Vorschau](https://img.shields.io/badge/status-läuft-3fb950)

---

## 1. Installation

### Repository klonen

```bash
git clone https://github.com/wernerwww/startme.git
cd startme
```

### Projekt starten

Da es sich um ein reines Frontend-Projekt ohne Server-Abhängigkeiten handelt, reicht es, die `index.html` direkt im Browser zu öffnen:

- **Windows:** Doppelklick auf `index.html`
- **macOS:** `open index.html` im Terminal, oder Doppelklick im Finder
- **Linux:** `xdg-open index.html` im Terminal, oder Doppelklick im Dateimanager

Das war's – es ist kein `npm install`, kein Server und keine weitere Konfiguration nötig.

> 💡 **Tipp:** Setze `index.html` als Startseite deines Browsers, um das Dashboard bei jedem neuen Tab zu sehen.

---

## 2. Links & Seiten anpassen

Alle Inhalte und Seiten werden zentral in der Datei **`links.js`** gepflegt. Die Struktur verwendet ein `pages`-Array, in dem beliebig viele Hauptseiten (Tabs) mit eigenen Quick-Links und Spalten angelegt werden können.

### Aufbau einer Seite

```javascript
const pages = [
  {
    id: "main",              // Eindeutige ID für die Seite
    name: "🏠 Hauptseite",    // Name auf dem Tab-Button
    quickLinks: [
      { name: "Anzeigename", url: "https://beispiel.de" }
    ],
    columns: [
      {
        title: "Spaltenname",
        links: [
          { name: "Linkname", url: "https://beispiel.de" }
        ]
      }
    ]
  }
];
```

### Neue Seite / Tab hinzufügen

Füge im `pages`-Array einfach ein weiteres Objekt hinzu:

```javascript
const pages = [
  // ... bestehende Seiten ...
  {
    id: "projekte",
    name: "🛠️ Projekte",
    quickLinks: [
      { name: "GitHub", url: "https://github.com" }
    ],
    columns: [
      {
        title: "Server",
        links: [
          { name: "Mein Server", url: "http://192.168.178.10" }
        ]
      }
    ]
  }
];
```

### Neue Spalte hinzufügen

Füge im `columns`-Array der jeweiligen Seite ein neues Objekt ein:

```javascript
{
  title: "Meine neue Spalte",
  links: [
    { name: "Beispiel-Seite", url: "https://beispiel.de" }
  ]
}
```

> ℹ️ Das Dashboard nutzt ein **flexibles Auto-Fit-Grid**. Spalten passen sich automatisch an die Bildschirmbreite an (mind. 240px Breite) und brechen auf kleineren Bildschirmen oder mobilen Geräten sauber um.

### Neuen Link hinzufügen

Füge innerhalb einer Spalte einen Eintrag in deren `links`-Array ein:

```javascript
{ name: "Mein neuer Link", url: "https://meine-seite.de" }
```

### Favicons

Favicons werden automatisch anhand der Domain der `url` geladen (über den Google- / DuckDuckGo-Favicon-Dienst). Es ist **kein zusätzliches Feld** nötig.

⚠️ Wichtig: Die `url` muss eine vollständige, gültige Adresse sein (inkl. `https://`), sonst wird kein Favicon geladen.

### Icons für lokale Links (z. B. Server im Heimnetz)

Für Links auf lokale IP-Adressen (z. B. `http://192.168.178.12:8888`) können Online-Dienste kein Icon abrufen. Verwende in diesen Fällen eigene Bilddateien im Ordner **`icons/`**:

```javascript
{ name: "OMV", url: "http://192.168.178.12:8888/#/login", icon: "icons/omv.png" }
```

1. Bilddatei (z. B. `.png`, ca. 64×64 px) im Ordner `icons/` ablegen.
2. Den relativen Pfad im Feld `icon` eintragen.

### Änderungen übernehmen

Nach dem Bearbeiten von `links.js` einfach die `index.html` im Browser neu laden (F5) – kein Build-Schritt erforderlich.

---

## 3. Versionsanzeige (automatisch aus dem GitHub-Build)

Im Footer des Dashboards wird automatisch die aktuelle Build-Nummer von GitHub Pages angezeigt (z. B. `Build #44`). Das Dashboard fragt beim Laden über die öffentliche GitHub-API den letzten Run des `pages-build-deployment`-Workflows ab.

**Voraussetzung:** In `app.js` muss der Repo-Name korrekt eingetragen sein:

```javascript
const REPO = "wernerwww/startme";
```

**Funktionsweise & Cache:**
- Ergebnisse werden für 30 Minuten im `sessionStorage` gecacht, um das API-Limit nicht zu überschreiten.
- Falls offline oder lokal geöffnet, wird als Fallback die statische Version (z. B. `v1.0.0`) angezeigt.

---

## 4. Projektstruktur

| Datei | Zweck |
|---|---|
| `index.html` | Grundgerüst der Seite |
| `app.js` | Rendering-Logik (Tab-Navigation, Quick-Links, Spalten & Kacheln) |
| `links.js` | **Zentrale Konfigurationsdatei (Seiten & Links)** |
| `style.css` | Design & Layout (Dunkles Theme, flexibles Grid & Tab-Styling) |
| `icons/` | Eigene Icon-Dateien für lokale Dienste |

---

## 5. Funktionen

- **Tab-Navigation:** Mehrere Unterseiten/Kategorien bequem über obere Reiter umschalten
- **Aktiver Tab wird gespeichert:** Die gewählte Seite bleibt im `localStorage` gemerkt
- **Flexibles Responsive-Grid:** Passt sich dynamisch allen Bildschirmgrößen an (PC, Laptop, Tablet, Smartphone)
- **Einklappbare Spalten:** Klick auf den Spaltenkopf klappt Inhalte auf/zu
- **Automatisches Favicon-Fetching:** Holt Webseiten-Icons automatisch per Domain
- **Kein Build-Prozess:** Sofort einsatzbereit ohne Abhängigkeiten
