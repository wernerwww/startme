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
  { name: "SearXNG", url: "http://192.168.178.12:8088/" },
  { name: "FTW", url: "https://beta.ftwsim.de/FlyTheWorld-Internal/users/index.xhtml" },
];

const columns = [
  {
    title: "Täglich",
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
      { name: "Gemini NB", url: "https://notebooklm.google.com/?hl=de-DE" },
      { name: "DeepSeek", url: "https://chat.deepseek.com/", icon: "icons/deepseek.png"  },
      { name: "Qwen", url: "https://chat.qwen.ai/" },
      { name: "----BBH-ev", url: "https://bbh-ev.org/" },
      { name: "Bitwarden", url: "https://bitwarden.com/" },
      { name: "Github", url: "https://github.com/wernerwww/startme/", icon: "icons/github.png"  },
      { name: "Kalender", url: "https://calendar.google.com/calendar/u/0/r" },
      { name: "OneDrive", url: "https://onedrive.live.com" },
      { name: "->PDF-Tools", url: "https://pdf.adminforge.de/de/" },
      { name: "Vodafone", url: "https://www.vodafone.de/meinvodafone/services/" },     // Holt sich das Icon weiterhin automatisch!
    ]
  },
    {
    title: "Home",
    links: [
      { name: "OMV", url: "http://192.168.178.12:8888/#/login", icon: "icons/omv.png" },
      { name: "Open Webui", url: "http://192.168.178.12:3000", icon: "icons/openwebui.png" },
      { name: "n8n", url: "http://192.168.178.12:5678", icon: "icons/n8n.png" },
      { name: "AdGuard", url: "http://192.168.178.242", icon: "icons/adguard-home.png" },     
      { name: "Paperless", url: "http://192.168.178.12:8010/accounts/login/?next=/", icon: "icons/paperless.png" },
      { name: "Immich", url: "http://192.168.178.12:2283", icon: "icons/immich.png" },
      { name: "Jellyfin", url: "http://192.168.178.12:8096/web/index.html#/home", icon: "icons/jellyfin.png" },
      { name: "Syncthing", url: "http://192.168.178.12:8384", icon: "icons/syncthing.png" },
    ]
  },
{
    title: "Home2",
    links: [
      { name: "Fritzbox", url: "http://192.168.178.1/", icon: "icons/fritzbox.png" },
      { name: "FritzRepeater", url: "http://192.168.178.7/", icon: "icons/fritzbox.png" },
      { name: "Drucker", url: "http://192.168.178.32/general/status.html", icon: "icons/printer.png" },
      { name: "Fritz extern",  url: "https://xdgaxid85bzxglpl.myfritz.net:42559/", icon: "icons/fritzbox.png"  },
    ]
  },
  {
    title: "Sonstiges",
    links: [
      { name: "Cruiselevel", url: "https://cruiselevel.de/" },
      { name: "flightnews24", url: "https://flightnews24.de/" },
      { name: "flusi.info", url: "https://www.flusi.info/forum/" },
      { name: "FSelite", url: "https://fselite.net/latest/" },
      { name: "----", url: "https" },
      { name: "ChinaHandy", url: "https://www.smartzone.de/neues/" },
      { name: "----", url: "https" },
      { name: "GBVH", url: "https://www.gartenbauverein-haslach.de/", icon: "icons/gbvh.png" },
      { name: "GBVH-Test", url: "https://www.gbv-haslach.de/", icon: "icons/gbvh.png" },
      { name: "GBV-Fotos", url: "https://fotos.gbv-haslach.de/", icon: "icons/gbvh.png" },
      { name: "GBV-Doku", url: "https://fileman.gbv-haslach.de/#/", icon: "icons/gbvh.png" },
    ]
  },
];
