// ===================================================================
// HIER MEHRERE SEITEN / KATEGORIEN PFLEGEN
// ===================================================================

const pages = [
  {
    id: "main",
    name: "🏠 Hauptseite",
    quickLinks: [
      { name: "Linkding", url: "https://linkding.adminforge.de/bookmarks" },
      { name: "Drive", url: "https://drive.google.com/drive/home" },
      { name: "Discord", url: "https://discord.com/channels/@me" },
      { name: "Amazon", url: "https://www.amazon.de" },
      { name: "SearXNG", url: "http://192.168.178.12:8088/" },
      { name: "FTW", url: "https://beta.ftwsim.de/FlyTheWorld-Internal/users/index.xhtml" },
    ],
    columns: [
      {
        title: "Täglich",
        links: [
          { name: "Caschys Blog", url: "https://stadt-bremerhaven.de/" },
          { name: "TELEPOLIS", url: "https://www.heise.de/tp/" },
          { name: "Kuketz IT",  url: "https://www.kuketz-blog.de/" },
          { name: "Golem",  url: "https://www.golem.de/" },
        ]
      },
      {
        title: "Wichtig",
        links: [
          { name: "Gemini", url: "https://gemini.google.com" },
          { name: "Bitwarden", url: "https://bitwarden.com/" },
        ]
      }
      // ... weitere Spalten für die Hauptseite ...
    ]
  },
  {
    id: "projects",
    name: "🛠️ Projekte & Admin",
    quickLinks: [
      { name: "GitHub", url: "https://github.com/wernerwww/startme/" },
      { name: "Vercel", url: "https://vercel.com" },
    ],
    columns: [
      {
        title: "Server & Dienste",
        links: [
          { name: "OMV", url: "http://192.168.178.12:8888/#/login", icon: "icons/omv.png" },
          { name: "AdGuard", url: "http://192.168.178.242", icon: "icons/adguard-home.png" },
        ]
      }
    ]
  }
];
