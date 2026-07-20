# startme

Ein einfaches, selbst gehostetes Link-Dashboard mit 4 Spalten – als persönliche Startseite im Browser. Keine Abhängigkeiten, kein Build-Prozess, reines HTML/CSS/JS.

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

## 2. Links anpassen

Alle Inhalte werden zentral in der Datei **`links.js`** gepflegt. Die Struktur besteht aus einem Array `columns`, wobei jede Spalte einen Titel und eine Liste von Links enthält.

### Aufbau einer Spalte

```javascript
{
  title: "Spaltenname",
  links: [
    { name: "Anzeigename", url: "https://beispiel.de" },
  ]
}
```

### Neue Spalte hinzufügen

Füge im `columns`-Array ein weiteres Objekt hinzu:

```javascript
const columns = [
  // ... bestehende Spalten ...
  {
    title: "Meine neue Spalte",
    links: [
      { name: "Beispiel-Seite", url: "https://beispiel.de" },
    ]
  },
];
```

> ℹ️ Das Dashboard ist auf ein 4-Spalten-Raster ausgelegt (siehe `style.css`). Bei mehr als 4 Spalten wird das Layout entsprechend umbrechen (2 Spalten auf Tablet, 1 Spalte auf Mobilgeräten), sieht aber am Desktop ggf. unausgewogen aus.

### Neuen Link hinzufügen

Füge innerhalb einer bestehenden Spalte eine neue Zeile im `links`-Array ein:

```javascript
{ name: "Mein neuer Link", url: "https://meine-seite.de" },
```

Beispiel – ein Link wird zur Spalte "Wichtig" hinzugefügt:

```javascript
{
  title: "Wichtig",
  links: [
    { name: "GitHub", url: "https://github.com" },
    { name: "Vercel", url: "https://vercel.com" },
    { name: "Mein neuer Link", url: "https://meine-seite.de" }, // ← neu
  ]
}
```

### Link entfernen

Einfach die entsprechende Zeile in `links.js` löschen.

### Link umbenennen / URL ändern

Den Wert bei `name` bzw. `url` in der jeweiligen Zeile direkt bearbeiten.

### Favicons

Favicons werden automatisch anhand der Domain der `url` geladen (über den Google-Favicon-Dienst). Es ist **kein zusätzliches Feld** nötig – einfach eine gültige URL eintragen, das Icon erscheint automatisch.

⚠️ Wichtig: Die `url` muss eine vollständige, gültige Adresse sein (inkl. `https://`), sonst wird kein Favicon geladen und der Link funktioniert nicht. Platzhalter wie `"https"` (siehe aktuelle `links.js`) müssen durch echte Adressen ersetzt werden.

### Icons für lokale Links (z. B. Server im Heimnetz)

Für Links auf lokale IP-Adressen (z. B. `http://192.168.178.12:8888`) kann der Google-Favicon-Dienst kein Icon laden, da diese Adressen aus dem Internet nicht erreichbar sind. Für solche Fälle gibt es das Verzeichnis **`icons/`**, in dem eigene Icon-Dateien abgelegt werden können.

Ein Link erhält ein lokales Icon über das optionale Feld `icon`:

```javascript
{ name: "OMV", url: "http://192.168.178.12:8888/#/login", icon: "icons/omv.png" },
```

**Vorgehen:**

1. Eine Icon-Datei (z. B. `.png`, 64×64 px empfohlen) in das Verzeichnis `icons/` legen.
2. Im Link-Eintrag in `links.js` das Feld `icon` mit dem relativen Pfad zur Datei ergänzen.

Ist kein `icon`-Feld gesetzt, wird weiterhin automatisch das Favicon über die `url` geladen. Schlägt das Laden eines angegebenen lokalen Icons fehl (z. B. Datei nicht vorhanden), fällt das Dashboard automatisch auf das automatische Favicon zurück.

### Änderungen übernehmen

Nach dem Bearbeiten von `links.js` einfach die `index.html` im Browser neu laden (F5) – es ist kein Build-Schritt nötig.

---

## 3. Versionsanzeige (automatisch aus dem GitHub-Build)

Im Footer des Dashboards wird automatisch die aktuelle Build-Nummer von GitHub Pages angezeigt (z. B. `Build #44`) – ganz ohne eigenen Workflow. Das funktioniert, weil GitHub bei jedem Push auf den Pages-Branch intern automatisch den Workflow **"pages-build-deployment"** ausführt. Das Dashboard fragt beim Laden über die öffentliche GitHub-API den letzten Run dieses Workflows ab und zeigt dessen Nummer an.

**Voraussetzung:** In `app.js` muss der Repo-Name korrekt eingetragen sein:

```javascript
const REPO = "wernerwww/startme";
```

**Funktionsweise / Fallback-Verhalten:**

- Beim Laden der Seite wird kurz die statische Fallback-Version (`const VERSION = "1.0.0";`) angezeigt.
- Anschließend wird die GitHub-API abgefragt und der Text im Footer auf `Build #<Nummer>` aktualisiert.
- Ein Hover über die Anzeige zeigt Workflow-Name und Zeitpunkt als Tooltip.
- Das Ergebnis wird 30 Minuten im `sessionStorage` zwischengespeichert, um das API-Limit (60 Anfragen/Std. ohne Login) zu schonen.
- Falls die API nicht erreichbar ist (z. B. offline, Repo privat, oder die Seite wird lokal per `file://` statt über GitHub Pages geöffnet), bleibt die statische Fallback-Version `v1.0.0` stehen.

> ℹ️ Damit die Anzeige funktioniert, muss das Repository **öffentlich** sein (private Repos benötigen für die Actions-API einen Zugriffstoken, was hier aus Sicherheitsgründen nicht eingebaut ist) und die Seite muss über eine echte URL (z. B. `https://wernerwww.github.io/startme/`) aufgerufen werden – nicht als lokale Datei.

---

## 4. Projektstruktur

| Datei | Zweck |
|---|---|
| `index.html` | Grundgerüst der Seite |
| `app.js` | Rendering-Logik (baut die Spalten & Kacheln aus `links.js`) |
| `links.js` | **Hier werden Links bearbeitet** |
| `style.css` | Design/Layout (dunkles Theme) |
| `icons/` | Eigene Icon-Dateien für lokale Links (siehe Abschnitt "Icons für lokale Links") |

---

## 5. Funktionen

- 4-Spalten-Raster, responsiv (2 Spalten auf Tablet, 1 Spalte auf Mobilgeräten)
- Spalten lassen sich per Klick auf die Kopfzeile ein-/ausklappen
- Automatisches Laden von Favicons anhand der URL
- Kein Build-Prozess, keine Abhängigkeiten
