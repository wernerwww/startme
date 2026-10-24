# startme

Ein einfaches, selbst gehostetes Link-Dashboard mit flexiblen Spalten und Tabs – als persönliche Startseite im Browser. Keine Abhängigkeiten, kein Build-Prozess, reines HTML/CSS/JS.

## 1. Installation

### Repository klonen

```
git clone https://github.com/wernerwww/startme.git
cd startme

```

### Projekt starten

Da es sich um ein reines Frontend-Projekt ohne Server-Abhängigkeiten handelt, reicht es, die `index.html` direkt im Browser zu öffnen:

* **Windows:** Doppelklick auf `index.html`

* **macOS:** `open index.html` im Terminal oder Doppelklick im Finder

* **Linux:** `xdg-open index.html` im Terminal oder Doppelklick im Dateimanager

Das war's – es ist kein `npm install`, kein Server und keine weitere Konfiguration nötig.

💡 **Tipp:** Setze `index.html` als Startseite deines Browsers, um das Dashboard bei jedem neuen Tab zu sehen.

## 2. Links & Quick-Links anpassen

Alle Inhalte werden zentral in der Datei **`links.js`** gepflegt.

### A. Quick-Links hinzufügen (Prominente Highlight-Buttons)

Quick-Links erscheinen als hervorgehobene Buttons ganz oben auf der Seite. Du kannst Quick-Links sowohl **global** (für alle Tabs) als auch **spezifisch für einzelne Tabs** konfigurieren.

#### Globaler Quick-Link (Erscheint immer oben)

Füge deinen Link in das Array `quickLinks` ganz oben in `links.js` ein:

```
const quickLinks = [
  { name: "Linkding", url: "https://linkding.adminforge.de/bookmarks" },
  { name: "Drive", url: "https://drive.google.com/drive/home" },
  { name: "Mein neuer Quicklink", url: "https://meine-seite.de" } // ← NEU
];

```

#### Tab-spezifischer Quick-Link

Wenn ein Quick-Link nur in einem bestimmten Tab sichtbar sein soll, trage ihn direkt beim entsprechenden Tab-Objekt ein:

```
{
  id: "arbeit",
  title: "Arbeit",
  quickLinks: [
    { name: "Firmen-Portal", url: "https://intranet.firma.de" } // ← Erscheint nur im Tab "Arbeit"
  ],
  columns: [ ... ]
}

```

### B. Normale Link-Kacheln hinzufügen

Füge innerhalb der gewünschten Spalte eine neue Zeile im `links`-Array ein:

```
{ name: "Mein neuer Link", url: "https://meine-seite.de" },

```

**Beispiel:**

```
{
  title: "Wichtig",
  links: [
    { name: "GitHub", url: "https://github.com" },
    { name: "Vercel", url: "https://vercel.com" },
    { name: "Mein neuer Link", url: "https://meine-seite.de" } // ← NEU
  ]
}

```

### C. Neue Spalte hinzufügen

Füge im `columns`-Array des jeweiligen Tabs ein weiteres Objekt hinzu:

```
{
  title: "Meine neue Spalte",
  links: [
    { name: "Beispiel-Seite", url: "https://beispiel.de" }
  ]
}

```

### D. Link entfernen, umbenennen & Icons

* **Entfernen:** Zeile in `links.js` löschen.

* **Umbenennen / URL ändern:** Werte bei `name` bzw. `url` direkt anpassen.

* **Automatische Favicons:** Werden anhand der Domain automatisch über den Google-Favicon-Dienst geladen. Die URL muss vollständig sein (inkl. `https://`).

* **Icons für lokale Links (z. B. Heimnetz/IPs):**
  Lege eine Bilddatei in den Ordner `icons/` und gib sie im Link-Eintrag an:

  ```
  { name: "Router", url: "http://192.168.178.1", icon: "icons/router.png" }
  
  ```

### E. Änderungen übernehmen

Nach dem Speichern von `links.js` einfach die `index.html` im Browser neu laden (**F5**).

## 3. Versionsanzeige (automatisch aus dem GitHub-Build)

Im Footer des Dashboards wird automatisch die aktuelle Build-Nummer von GitHub Pages angezeigt (z. B. `Build #44`).

**Voraussetzung:** In `app.js` muss der Repo-Name korrekt eingetragen sein:

```
const REPO = "wernerwww/startme";

```

## 4. Projektstruktur

| Datei | Zweck | 
| ----- | ----- | 
| `index.html` | Grundgerüst der Seite | 
| `app.js` | Rendering-Logik (baut die Spalten & Kacheln aus `links.js`) | 
| `links.js` | **Hier werden Links & Quick-Links bearbeitet** | 
| `style.css` | Design & Layout (dunkles Theme, Quick-Links Styling) | 
| `icons/` | Eigene Icon-Dateien für lokale Links | 

## 5. Funktionen

* 4-Spalten-Raster, responsiv (2 Spalten auf Tablet, 1 Spalte auf Mobilgeräten)

* Tab-Unterstützung zur Kategorisierung von Links

* Schnellzugriff über Quick-Link-Buttons

* Automatisches Laden von Favicons anhand der URL (mit Fallback für lokale IPs)

* Kein Build-Prozess, keine Abhängigkeiten
