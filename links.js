// ===================================================================
// HIER EINFACH BEARBEITEN: Spalten & Links anpassen
// - Neue Spalte: einfach ein weiteres { title: "...", links: [...] } hinzufügen
// - Neuer Link: eine Zeile { name: "...", url: "..." } in die passende Spalte einfügen
// - Favicons werden automatisch anhand der URL geladen, kein extra Feld nötig
// ===================================================================

// Wichtige Links als große Buttons ganz oben (genau 5 Einträge empfohlen)
const quickLinks = [
  { name: "Linkding", url: "https://linkding.adminforge.de/bookmarks" },
  { name: "Drive", url: "https://drive.google.com/drive/home" },
  { name: "Discord", url: "https://discord.com/channels/@me" },
  { name: "Amazon", url: "https://www.amazon.de" },
  { name: "------", url: "https" },
  { name: "FTW", url: "https://beta.ftwsim.de/FlyTheWorld-Internal/users/index.xhtml" },
];

const columns = [
  {
    title: "19-08-2026",
    links: [
      { name: "Caschys Blog", url: "https://stadt-bremerhaven.de/" },
      { name: "TELEPOLIS", url: "https://www.heise.de/tp/" },
      { name: "Kuketz IT",  url: "https://www.kuketz-blog.de/" },
      { name: "Golem",  url: "https://www.golem.de/" },
      { name: "NachDenkSeiten",  url: "https://www.nachdenkseiten.de/" },
      { name: "Trausteiner",  url: "https://www.traunsteiner-tagblatt.de/" },   
      { name: "Traunstein", url: "https://www.traunstein.de/" }, 
      { name: "Deskmodder", url: "https://www.deskmodder.de/blog/" }, 
      { name: "----------", url: "https" },   
    ]
  },
  {
    title: "Wichtig",
    links: [
      { name: "Gemini", url: "https://gemini.google.com" },
      { name: "ChatGpt", url: "https://chatgpt.com/" },
      { name: "Claude", url: "https://claude.ai" },
      { name: "Copilote", url: "https://copilot.microsoft.com" },
      { name: "Perplexity", url: "https://www.perplexity.ai" },
      { name: "----BBH-ev", url: "https://bbh-ev.org/" },
      { name: "Bitwarden", url: "https://bitwarden.com/" },
      { name: "Fritz extern",  url: "https://xdgaxid85bzxglpl.myfritz.net:42559/" },
      { name: "Github", url: "https://github.com/wernerwww/startme/edit/main/links.js" },
      { name: "Kalender", url: "https://calendar.google.com/calendar/u/0/r" },
      { name: "OneDrive", url: "https://onedrive.live.com" },
    ]
  },
  {
    title: "Home",
    links: [
      { name: "OMV", url: "http://192.168.178.12:8888/#/login" },
      { name: "Paperless",   url: "http://192.168.178.12:8010/accounts/login/?next=/" },
      { name: "Immich",   url: "http://192.168.178.12:2283" },
      { name: "Jellyfin",   url: "http://192.168.178.12:8096/web/index.html#/home" },
      { name: "Fritzbox",   url: "http://192.168.178.1/" },
      { name: "FritzRepeater",   url: "http://192.168.178.7/" },
      { name: "Drucker",   url: "http://192.168.178.32/general/status.html" },
      { name: "----------", url: "https" }, 
      { name: "Telekom",   url: "https://www.telekom.de/kundencenter/rechnungsuebersicht" },
      { name: "Vodafone",   url: "https://www.vodafone.de/meinvodafone/services/" },
    ]
  },
  {
    title: "Sonstiges",
    links: [
      { name: "Cruiselevel", url: "https://cruiselevel.de/" },
      { name: "flightnews24", url: "https://flightnews24.de/" },
      { name: "OneDrive", url: "https://onedrive.live.com" },
      { name: "flusi.info", url: "https://www.flusi.info/forum/" },
      { name: "FSelite", url: "https://fselite.net/latest/" },
      { name: "----", url: "https" },
      { name: "ChinaHandy", url: "https://www.smartzone.de/neues/" },
      { name: "----", url: "https" },
      { name: "GBVH", url: "https://www.gartenbauverein-haslach.de/" },
      { name: "GBV-Fotos", url: "https://fotos.gbv-haslach.de/" },
      { name: "GBV-Dokum", url: "https://fileman.gbv-haslach.de/#/" },
    ]
  },
];
