# Bricks-Handoff: Stand

Skill: `.claude/skills/bricks-handoff/` (Ablauf in dessen SKILL.md). Dazu die 45 offiziellen Bricks-Skills (codeerhq/bricks-skills, Release v0.1.0) in `.claude/skills/bricks-*`, Stand in `.claude/skills/BRICKS-SKILLS.lock`.

| Phase | Stand | Ergebnis |
|---|---|---|
| 0 Klären | teilweise | Config angelegt (`handoff.config.json`, Präfix `da`, Framework **Bricks Native**, Dunkel-Selektor `:root[data-brx-theme="dark"]`). Staging `https://relaunch.digital-avenue.de` (Bricks 2.4, seit 17.09.2026 final, mit MCP Adapter), MCP-Server in `.mcp.json` (HTTP, Header aus `BRICKS_MCP_AUTH` lokal, Proxy-Anmeldung in der Cloud). Verbindung aus der Cloud-Sitzung bestätigt (11.09.2026): 193 Abilities, davon 167 Bricks und 26 Meta Box. |
| 1 Tokens exportieren | erledigt, am Staging importiert (Theme Style, 52 Farben, 48 Variablen über den Style Manager, 11.09.2026) | `export/`: 52 Farb-Tokens mit Hell- und Dunkel-Wert (davon 16 Schatten- und Glasfarben), 48 Variablen in 8 Kategorien, keine unzugeordneten. Dunkelmodus im Prototyp umgesetzt und am Staging bestätigt (Toggle-Mode-Element, 11.09.2026): Hintergrund, Button und Icons wechseln über den Color Manager. |
| 2 Schriften & Icons | erledigt (11.09.2026) | Manrope und Jost als Custom Fonts mit je 8 Schnitten im Font Manager (Jost lokal statt Google). Icon-Set „Digital Avenue“ mit 15 Icons im Icon Manager, Quelle `import/06-icons/` (SVG → Bricks Optimizer). |
| 3 Komponenten als Global Classes und Components | erledigt (11.09.2026): 50 Klassen am Staging in 8 Kategorien, 14 Components per MCP (Karten, Kacheln, Listenzeilen, Abschnitte Feature-Block, Concierge, Digital-Check-Block, Hero Landingpage), FAQ als Accordion-Muster, alle Fotos in der Mediathek; Testseiten 50, 60, 63, 101. Offen: Abnahme durch Nils, Popup Digital-Check (Formular), Partnerzeile, Zielgruppen-Tabs, Mosaik beim Seitenimport | Stand, IDs und Lernpunkte in `handoff/import/README.md`, Schritt 7. |
| 4 Templates & Seiten | Header und Footer fertig (inkl. mobiles Menü, 13.09.2026), Startseite komplett (Hero, Mosaik, Partner, Für wen, Leistungen, So arbeiten wir, Referenzen, Über uns, Digital-Check, 13.09.2026); Popup Digital-Check mit Bricks-Formular (Template 130, E-Mail plus Submissions-Tabelle, kein HubSpot, 13.09.2026); Kampagnenseiten K1, K2, K9 und Branchenseite Heilberufe als Entwürfe (17.09.2026); offen: SMTP am Server, Datenschutz-Link, echte Texte für Kundenstimmen und Referenzen, alle weiteren Seiten (Statusbericht 09.10.2026) | Aufbau in `handoff/import/README.md`, Schritte 8 bis 14. |
| 5 Abgleich, Redirects, Launch | offen | Checkliste in `references/launch-checklist.md`. |

Bricks-Version: 2.4 final am Staging (Update von RC2 am 17.09.2026). Das Plugin `da-content-model` war am Staging kurz aktiv und ist wieder entfernt (11.09.2026); Post-Typen kommen erst nach den Templates zurück. Style Guide mit Inventar und Arbeitsliste: `prototype/styleguide.html`.

Betriebskonzept (MCP, Meta Box, CPTs): `handoff/BETRIEBSKONZEPT-MCP.md`. Datenmodell (CPTs, Felder) am 11.09.2026 zurückgestellt: erst Grundparameter, Theme Style, Icons und Components, dann Felder aus den fertigen Templates ableiten.

Merkregeln zum Nachschlagen: `handoff/MERKREGELN.md`. Importdaten für den Aufbau am Staging: `handoff/import/` (README mit Aufträgen je Schritt, Build über `build-import.mjs`).

## Nächste Schritte

0. Schritte 0 bis 7 aus `handoff/import/README.md` sind am Staging erledigt (Components inklusive Abschnitte). Als Nächstes Header und Footer als Templates, dann die Seiten aus den Components zusammensetzen (Startseite zuerst). Im Chat gezeigte Anwendungspasswörter widerrufen.
1. Dunkel-Logos (Digital Avenue vorhanden, Referenzlogos fehlen) beschaffen.
2. Palette und Variablen in eine Staging-Installation importieren, Ergebnis mit `export/tokens-report.md` vergleichen.
3. Erste Global Classes anlegen (Buttons, Eyebrow, Karten) und gegen den Prototyp prüfen.

Nachtrag 11.09.2026 (abends): Startseite um die Section „Für wen“ mit Bricks-Tabs (Klasse `tabs`), Abschnittskopf (`section-head center`) und Component „Zielgruppen-Panel“ (`28c728`) ergänzt. Glas-Deckkraft auf 0.84/0.86 mit stärkerem Blur eingependelt.

Nachtrag 13.09.2026: Header auf „Sticky on scroll“ umgestellt (Hero-Abstand oben wieder da), Rasterklassen `mosaic`, `audience`, `lp-hero`, `flip` so umgebaut, dass die Media-Queries greifen (Grundwerte in Controls bzw. Selektoren mit Element-Klasse). Nächster Schritt: mobiles Menü in der Navigation.

Nachtrag 13.09.2026 (2): Mosaik auf `width: 100%`, `minmax`-Spalten und `grid-template-areas` umgebaut, Containerbreite im Theme Style von 1100 auf 1240px korrigiert (`container.width`). Offen: Header-Menü läuft bei 400px über (mobiles Menü).

Nachtrag 13.09.2026 (3): Mobiles Menü läuft. Ursache war der fehlende Wrapper-Block `ul.brx-nav-nested-items` in der Nav (plus `backdrop-filter` auf der Header-Section als Containing Block des Drawers). Header 52 umgebaut, Drawer mit CTA, Merkregeln ergänzt. Offen: Burger als X im offenen Zustand, Rest der Startseite.

Nachtrag 13.09.2026 (4): Header-Feinschliff: Burger als X, Drawer-Untermenüs als Liste, Seitenabstand, mobil Logo links und Icons rechts. Nächster Schritt: Rest der Startseite aus den Components.

Nachtrag 13.09.2026 (5): Startseite fertig gebaut (Leistungen, So arbeiten wir, Referenzen, Über uns, Digital-Check), neue Klasse `about`. Nächster Schritt: Popup Digital-Check mit Formular, dann Landingpages.

Nachtrag 13.09.2026 (6): Popup Digital-Check gebaut, alle vier CTA-Buttons öffnen es. E-Mail-Versand am Staging scheitert ohne SMTP-Plugin; Einrichtung offen.

Nachtrag 13.09.2026 (7): `handoff/BAUKASTEN.md` angelegt: Anleitung für manuell gebaute Seiten mit allen 65 Global Classes, 14 Components, Templates, Rezepten und Fehlerbildern.

Nachtrag 16.09.2026: Positionierung erweitert (Foto und Video vom Konzept bis zum Publishing, alle Inhalte auf Wunsch, alles aus einer Hand). Startseite, Footer, Prototyp-Quellen und Briefing angepasst; vierter Leistungsbereich „Foto, Video & Text“ als Kachel. Landingpages übernehmen das beim Bau.

Nachtrag 17.09.2026: Kampagnenpaket (`handoff/kampagne/`, ohne Kontaktdaten) übernommen. Landingpages K1/K2/K9 unter `/arztpraxen/` als Entwürfe gebaut (Posts 169, 171, 173), gemeinsame Module als Section-Template 167, Kontaktformular als Template 165. Plugin „Digital Avenue Parameter“ für Telefon, Servicezeiten, Serviceversprechen per Shortcode/Echo-Tag geschrieben (`wordpress/plugins/da-parameter.zip`), Installation durch Nils.

Nachtrag 17.09.2026: Footer-Spalte „Für wen“ (Prototyp) bzw. „Branchen“ (Bricks, Template 54) um Heilberufe und Gastgewerbe ergänzt. Beide verweisen auf `/branchen/heilberufe/` und `/branchen/gastgewerbe/`; im Prototyp vorläufig auf die Praxen- bzw. Mittelstand-Seite. Für beide Zielgruppen gibt es noch keine Seite und keinen Text.

Nachtrag 17.09.2026: Branchenseite Heilberufe nach Konzept aus dem Chat (`handoff/branchen/heilberufe.md`) im Prototyp (`#heilberufe`) und in Bricks (Post 196 unter Elternseite „Branchen“ 193, beide Entwurf) gebaut, fünf neue Higgsfield-Motive m40–m44, eigenes Formular-Template 194. Offene Entscheidungen im Konzept, Abschnitt 4.

### Nachtrag 20.09.2026: Farbsystem-Dokument

- `handoff/BRICKS-FARBSYSTEM-DARKMODE.md`: portable Beschreibung des
  Bricks-Farbsystems und des Hell/Dunkelmodus (Attribut `data-brx-theme`,
  Skript `bricks-dl-mode-js-after` mit `brx_mode`, Palette wird als `:root`-
  und Dunkelblock gedruckt, Datenmodell einer Farbe, Regeln, Umschalter,
  Übertragung auf neue Projekte). Für andere Claude-Code-Umgebungen gedacht.
- Dabei aufgefallen: `color-scheme: light/dark` steht am Staging noch nicht
  im Custom CSS (Formularfelder, Scrollbalken). Standardmodus am Staging ist
  `light`, im Prototyp galt die Systemeinstellung; Entscheidung offen.
- `handoff/BRICKS-SVG-ICONS.md`: portable Anleitung für SVG-Icons in Bricks
  (Normalisierung, eigenes Set per Icon Manager oder MCP, Icon-Element,
  Klassen `icon`/`icon-20`, Farbe über Kontext, Components, Stolperfallen).
  Icon-IDs des Staging-Sets per `list-custom-icons` aufgenommen.

### Nachtrag 09.10.2026: Statusbericht

- `handoff/STATUSBERICHT-2026-10-09.md`: Stand in Technik, Inhalt und
  Design, Seiteninventar gegen Navigation, Empfehlung zu Seitenstruktur
  und Meta-Box-Post-Typen, Reihenfolge bis zum Launch.
- Branches zusammengeführt (09.10.2026): `optimistic-ride`, `youthful-ritchie`
  und `affectionate-wright` sind im Arbeitsbranch; es gibt wieder einen Stand.
- Entscheidung 1 umgesetzt (09.10.2026): fünf Branchenseiten unter
  `/branchen/`: Arztpraxen (mit Kampagnenseiten darunter), Heilberufe,
  Kanzleien & Freie Berufe, Mittelstand; Gastgewerbe nach dem Launch.
  Header, Footer, Startseite, Component-Standard, Kampagnen-Doku und
  Prototyp-Footer angepasst. Details in `handoff/import/README.md`, Schritt 8.
- Neues Hilfsskript `handoff/tools/mcpcall.py`: Abilities direkt aufrufen,
  Seitenbäume als Datei bearbeiten.
- Entscheidung 2 umgesetzt (09.10.2026): Referenzen im Header als einfacher
  Link auf `/referenzen/`, kein Dropdown. Option: Referenzen-Liste im Footer.
- Entscheidung 3 (09.10.2026): Blog bleibt im Menü. Folge: Archiv-Template
  und erste Beiträge vor dem Launch nötig. Seite „Blog“ 231 als Entwurf und
  Beitragsseite angelegt, „Hello world!“ im Papierkorb.
- Partnerseiten (09.10.2026, Auftrag Nils): Übersicht und je eine Seite für
  Placetel, Doctolib, IONOS, Netleaders im Prototyp und in Bricks (Entwürfe
  214 bis 218), acht neue Motive m45 bis m52. Footer-Link „Partner“,
  Partnerzeile der Startseite verlinkt. Offen: Partnerstatus prüfen,
  Netleaders-Leistungsumfang und Abgrenzung zu IONOS (sichtbare Platzhalter).
- Korrigiert: Reihenfolge von Kacheln (Startseite), Footer-Branchen und
  Header, verursacht durch Speichern ohne Array-Sortierung (Merkregel).
- Entscheidung 4 umgesetzt (09.10.2026): Kontaktseite im Prototyp und in
  Bricks (Entwurf 235), allgemeines Formular-Template 233, Footer mit
  Hamburger Adresse aus dem Impressum und Link „Kontakt“. Offen: Adresse
  Rostock. Uneinheitlich: Digital-Check-Block sagt „Rückmeldung innerhalb
  eines Werktags“, Heilberufe und Kontaktseite „innerhalb einer Stunde
  während der Servicezeiten“; eine Formulierung festlegen.
- Bilder vom 17.09. und 09.10. liegen am Staging als PNG in voller Größe;
  vor dem Launch durch die optimierten JPGs aus `prototype/img/` ersetzen.
- 09.10.2026 (Nils): Header ohne Digital-Check-Button. Rückmeldezeiten nach
  Zielgruppe umgestellt (Merkregel). Meta Box Settings Page ist installiert;
  Feldgruppe „Unternehmensdaten“ 243 angelegt, Einstellungsseite legt Nils
  an, danach stellt Claude Footer, Kontaktseite und übrige Stellen auf die
  Felder um. Anleitung: `handoff/ANLEITUNG-2026-10-09.md`.
- Entscheidung 6 umgesetzt (09.10.2026): Leistungsübersicht und vier
  Leistungsseiten im Prototyp und in Bricks (Entwürfe 244 bis 248), Motive
  m53 bis m60, Startseite und Footer verlinkt. Weiterleitungsliste für den
  Launch: `handoff/REDIRECTS.md` (ersetzt den Drive-Plan).

