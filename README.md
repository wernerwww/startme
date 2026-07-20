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

### Änderungen übernehmen

Nach dem Bearbeiten von `links.js` einfach die `index.html` im Browser neu laden (F5) – es ist kein Build-Schritt nötig.

---

## 3. Projektstruktur

| Datei | Zweck |
|---|---|
| `index.html` | Grundgerüst der Seite |
| `app.js` | Rendering-Logik (baut die Spalten & Kacheln aus `links.js`) |
| `links.js` | **Hier werden Links bearbeitet** |
| `style.css` | Design/Layout (dunkles Theme) |

---

## 4. Funktionen

- 4-Spalten-Raster, responsiv (2 Spalten auf Tablet, 1 Spalte auf Mobilgeräten)
- Spalten lassen sich per Klick auf die Kopfzeile ein-/ausklappen
- Automatisches Laden von Favicons anhand der URL
- Kein Build-Prozess, keine Abhängigkeiten

