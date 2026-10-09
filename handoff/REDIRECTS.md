# Weiterleitungen für den Launch

Stand 09.10.2026. Ersetzt den Redirect-Plan aus Google Drive (Juni 2026,
drei Säulen). Grundlage: Sitemap der Live-Site (page-, service- und
local-sitemap) und das URL-Inventar. Anlegen als 301 in Rank Math ›
Redirections, Plugin-Reste als 410.

| Alt (digital-avenue.de) | Neu | Code |
|---|---|---|
| `/service/` | `/leistungen/` | 301 |
| `/service/konzept/` | `/leistungen/sichtbarkeit-marke/` | 301 |
| `/service/webdesign-fuer-hamburg-und-rostock/` | `/leistungen/sichtbarkeit-marke/` | 301 |
| `/service/performance-marketing-agentur/` | `/leistungen/sichtbarkeit-marke/` | 301 |
| `/service/content-creation/` | `/leistungen/foto-video-text/` | 301 |
| `/service/kommunikation/` | `/leistungen/infrastruktur-prozesse/` | 301 |
| `/service/hosting-e-mail/` | `/leistungen/infrastruktur-prozesse/` | 301 |
| `/ueber-digital-avenue/` | `/ueber-uns/` | 301 |
| `/legal/impressum/` | `/impressum/` | 301 |
| `/legal/datenschutzerklaerung/` | `/datenschutz/` | 301 |
| `/sample-page/`, `/ui/`, `/login/`, `/login-2/`, `/login-3/`, `/register/`, `/register-2/`, `/user/`, `/members/`, `/logout/`, `/account/`, `/password-reset/`, `/newsletter/` | entfallen | 410 |

Vor dem Launch prüfen:

- Gibt es eine Portfolio-Seite (im alten Menü verlinkt, nicht in der
  Sitemap)? Falls ja: auf `/referenzen/` umleiten.
- Search Console der Live-Site auf weitere aufgerufene Adressen prüfen.
- Nach dem Go-Live jede Zeile einmal aufrufen und den Statuscode prüfen.
