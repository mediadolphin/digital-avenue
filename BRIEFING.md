# Briefing: Redesign digital-avenue.de

Stand: 10. September 2026. Ergebnis der Vorab-Klärung (Fragen und Antworten von Nils Rudolph).

## Ausgangslage

- Live-Site: WordPress mit Bricks und Automatic.css (ACSS). Tokens der Live-Site:
  Primär `#305b75`, Sekundär `#38aecc`, Akzent `#d7c9aa`, Tertiär `#42253b`,
  Action `#4c5c68`, Schrift Hanken Grotesk (variabel, 400/500/700/800),
  Radius 1rem, Button-Radius 0.5em, Content-Breite 128rem.
- Neues Logo (Juni 2026): `/wp-content/uploads/2026/06/digital-avenue-logo-randlos.svg`
  (Wortmarke in `#305b75`, 441 x 76 px).
- Relaunch-Konzept und Texte (Juni 2026) in Google Drive:
  "Konzept und Website-Texte Relaunch - Digital Avenue UG" und
  "Digital Avenue – URL-Inventar & Redirect-Plan".
- Positionierung laut Konzept: "Die externe Digitalabteilung / Der Digital-Concierge".
  USP: Sichtbarkeit (Webdesign, PR, Marketing) plus Infrastruktur
  (Placetel-Telefonie, Hosting, Doctolib-/HubSpot-Anbindung) aus einer Hand,
  proaktiver Service (Beispiel: Urlaubs-Service).
- Das Design System und die Entwürfe aus Claude Design liegen seit dem
  10.09.2026 unverändert unter `design-system/` im Repo (ZIP-Export).

## Entscheidungen

| Thema | Entscheidung |
|---|---|
| Zielgruppe | Inhaber-Persönlichkeiten statt Branche: der Entscheider, der sich nicht um Technik kümmern will. Bildwelt zeigt entlastete Menschen. |
| Umfang | Startseite plus drei Zielgruppen-Landingpages (Arztpraxen, Kanzleien, Mittelstand/KMU). |
| Marke | Logo und Primärblau `#305b75` bleiben. Akzentfarben, Schrift und Flächenaufteilung dürfen neu gedacht werden. Anspruch: hochwertig, dezent, elegant. |
| Bildwelt | Higgsfield: fotorealistische Menschen, ruhig und entlastet, natürliches Licht, gedämpfte Farben, Editorial-Look. Die Zielgruppe soll sich direkt wiederfinden. |
| Format | Klickbarer Prototyp: Navigation, Zielgruppen-Umschalter und Formular funktionieren. |
| Geräte | Desktop (1440 px) und Mobil (390 px), beide klickbar. |
| Texte | Alles neu texten. Das Konzept dient nur als Richtung; Ziel sind Entlastung und Persönlichkeit. |
| Primärer CTA | "Digital-Check anfragen": niedrigschwelliger Einstieg, z. B. kostenloser Check von Website, Telefonie und Google-Unternehmensprofil. Genauer Umfang des Checks ist noch von Nils zu bestätigen. |
| Vertrauensbelege | Partner-Logos (Doctolib, Placetel, Netleaders), Referenzprojekte mit Namen (DIGIZT, Lungenpraxis am Tibarg, Urlaub bei Jana), Kundenstimmen als Platzhalter `[KUNDENSTIMME]`. Kein Foto und keine Vita von Nils. |
| Higgsfield-Budget | Bis 300 Credits (Stand: 610 Credits, Pro-Plan). Etwa 12 finale Motive mit je zwei Varianten. |

## Offene Punkte

- Claude-Design-Projekt (Quelle des Exports):
  https://claude.ai/design/p/019ddea1-f8fe-7a97-bba0-f6d090a4b241
- Inhalt des "Digital-Check" mit Nils abstimmen (Umfang, Dauer, was der Kunde bekommt).
- Echte Kundenstimmen nachliefern.
- Hosting-Hintergrund (Nils, 10.09.2026): Digital Avenue hostet nicht selbst,
  sondern arbeitet mit Partnern (IONOS, Netleaders), weil diese Infrastruktur
  und Personal für Sicherheit und Performance haben. Partnerzeile: Doctolib,
  Placetel, Netleaders, IONOS.
- Placetel-Logo und Partnerstatus prüfen (fehlt auf der Live-Site, steht im Konzept).

## Technische Hinweise

- digital-avenue.de ist aus dem Claude-Code-Netz gesperrt, aber über die
  Higgsfield-Sandbox (`sandbox_exec` mit curl) erreichbar.
- GitHub-Repo war zu Beginn leer. Arbeits-Branch: `claude/digital-avenue-redesign-0wnw6r`.
- Redirect-Plan sieht neue URL-Struktur `/leistungen/...` vor; die Landingpages
  sind darin noch nicht enthalten.

## Layout-Inspiration (von Nils, 10.09.2026)

Referenz: Landingpage-Layout "HALSA" (Wellness-App, Vorschau gola.io/HALSA). Nur als
Struktur- und Stimmungsvorlage, keine Nachbildung.

Was übernommen wird:

- **Luftiger, warmer Grundton**: cremeweißer Hintergrund, große Weißräume, dünne
  Linien, keine harten Kanten. Passt zum Sand-Ton der bisherigen Akzentfarbe.
- **Schlanke Navigation**: Logo links, Menü als zentrierte Pill-Gruppe,
  rechts ein einziger Button ("Digital-Check anfragen").
- **Hero zentriert**: kleines Eyebrow-Label, zweizeilige leichte Headline,
  kurze Subline, Primärbutton dunkel plus Ghost-Button, darunter eine
  Vertrauenszeile.
- **Bildband unter dem Hero**: breite, warm belichtete Fotografie mit ruhigen
  Menschen, in die ein bis zwei schwebende Karten eingebettet sind. Bei
  Digital Avenue zeigen die Karten keine App-Statistiken, sondern konkrete
  Entlastung: etwa die Urlaubs-Service-Karte ("Website, Google-Profil und
  Telefonansage umgestellt") oder eine Digital-Check-Karte.
- **Partner-Logozeile** in Grau direkt unter dem Bildband (Doctolib, Placetel,
  Netleaders).
- **Kachelraster als Herzstück**: 4 x 2 Kacheln, abwechselnd Foto und
  Farbfläche. Farbflächen in Cremeweiß, Primärblau `#305b75` und einem tiefen
  Nachtblau. Jede Farbkachel: Überschrift, zwei Sätze, ein Textlink. Hier
  sitzen die drei Säulen und die drei Zielgruppen-Einstiege (Praxen,
  Kanzleien, Mittelstand) nebeneinander.
- **Zweispaltiger Leitbild-Block**: links Eyebrow und Headline, rechts
  Fließtext. Ersetzt die bisherige "Über uns"-Ansprache auf der Startseite.
- **Typografie**: geometrische Sans mit leichten Schnitten in den Headlines,
  enge Zeilenabstände, kleine Labels in Versalien mit Sperrung.

Was bewusst anders wird:

- Keine Avatare, Sterne oder "Trusted by 1 Million"-Zeile. Die
  Vertrauenszeile nennt stattdessen Referenzprojekte oder die Partner.
- Keine App-Screens. Die schwebenden Karten zeigen Service-Momente aus dem
  Alltag der Inhaber.
- Nachtblau-Kacheln sparsam einsetzen, damit es dezent bleibt.

## Design System (Stand des Exports vom 10.09.2026)

Quelle: `design-system/` (Claude-Design-Projekt "Digital Avenue Design System").
Maßgeblich sind `colors_and_type.css` und `digital-avenue.css`; die Preview-Karten
unter `preview/` zeigen Farben, Typo, Spacing, Buttons, Cards, Chips, Nav, Footer,
Logo und Icons. Die Entwürfe liegen in `pages/_homepage.html` und
`pages/_portfolio.html` (responsiv; die Dateien `homepage-*.html` und
`portfolio-*.html` sind nur Geräterahmen darum herum).

Tokens, die für den Prototyp gelten:

| Token | Wert |
|---|---|
| Teal (Primär) | `#305b75`, Hover `#264a60`, Dark `#1b3a4a`, Deeper `#132a37`, Subtle `#e7eff3`, Text `#234c5f` |
| Sand (Akzent) | `#d7c9aa`, Hover `#c4b393`, Subtle `#f6f2ea`, Text `#7a6845` |
| Plum (Akzent 2) | `#42253b`, Hover `#351b30`, Subtle `#f0e8ee`, Light `#8a5c7e` |
| Flächen | Body `#f9f8f6` (warmes Off-White), Alt `#f2efe9`, Card `#ffffff`, Border `#d9e3e8` |
| Text | `#19242b`, Muted `#5a6e77` |
| Nav/Footer | Hintergrund `#1b3a4a`, Text `#ede9e0`, Muted `#7796a6` |
| Dark Mode | über `data-theme="dark"` auf `<html>`; Body `#182a33`, Card `#1d3340` |
| Schrift | Manrope (Fließtext, selbst gehostet, 200 bis 800), Jost (Logo). Hanken Grotesk ist abgelöst. |
| Typo-Skala | fluid per `clamp()`: base 15 bis 16 px, lg 22 bis 30 px, xl 30 bis 44 px; Hero-H1 38 bis 76 px, Gewicht 800, Tracking -0.03em |
| Radien | 4 / 6 / 10 / 16 / 24 px, Pill 100 px |
| Spacing | fluid `--da-sp-1` bis `--da-sp-20` (3 bis 80 px), Content-Breite 1240 px |
| Buttons | Primär Teal, Sand, Plum, Ghost; 13 px × 26 px, Radius 10 px, Teal-Schatten |
| Motion | 0.2 s ease, Hover-Lift 1 bis 2 px |

Aufbau des Homepage-Entwurfs: helle Glas-Navigation (sticky), Hero zweispaltig mit
Headline links und Kachel-Collage rechts, Kennzahlen, Trust-Bar mit Partnernamen,
sechs Leistungs-Cards, Cases-Teaser, Team, Testimonials, Magazin, Kontakt-CTA,
dunkler vierspaltiger Footer. Hamburger-Drawer auf Mobil, Theme-Toggle.

### Abweichungen zwischen Entwurf und Entscheidungen

Der Entwurf ist als Design-Vorlage wertvoll, sein Inhalt ist aber überwiegend
Platzhalter und teils erfunden. Vor der Umsetzung gilt:

- **Erfundene Inhalte nicht übernehmen**: MVZ Eppendorf, Brandt & Partner,
  Holzwerk Nord, Gut Ostsee usw. sind fiktive Cases; das achtköpfige Team
  (Jana Schiller, Marek Kowalski, ...), "gegründet 2012", "12+ Jahre",
  "80+ Projekte", "94 % Kundenbindung", die Testimonials und "8 Awards" sind
  erfunden. Kontaktdaten im Entwurf (hallo@digital-avenue.de,
  +49 40 12 34 56 78) sind Platzhalter; echt sind post@digital-avenue.de und
  +49 (40) 41343870.
- **Struktur an die Entscheidungen anpassen**: drei Säulen statt sechs
  Leistungs-Cards, Zielgruppen-Einstiege (Praxen, Kanzleien, Mittelstand),
  Haupt-CTA "Digital-Check anfragen" statt "Erstgespräch buchen", keine
  Team-Sektion, Kundenstimmen nur als markierte Platzhalter, echte Partner
  (Doctolib, Placetel, Netleaders) und echte Referenzen (DIGIZT, Lungenpraxis
  am Tibarg, Urlaub bei Jana) in der Trust-Bar. Das Magazin nur, wenn Nils
  es ausdrücklich will.
- **Bildwelt**: Der Entwurf hat keine Fotografie (Kacheln mit Verläufen).
  Die Higgsfield-Bildwelt ersetzt die Hero-Collage und die Cases-Kacheln
  gemäß Layout-Inspiration (Bildband mit Service-Karten, Foto-Kacheln im
  Raster).
- **Technik-Hinweise**: `digital-avenue.css` lädt Manrope und Jost über
  Google Fonts, `colors_and_type.css` nutzt die selbst gehostete Manrope.
  Für den Prototyp die selbst gehostete Variante verwenden. Die Geräterahmen
  in `pages/frames/` laden React über unpkg und sind reine Präsentation.
  Die README enthält auch Angaben zum Kundenprojekt Digizt (Blau `#2563eb`);
  diese gelten nicht für Digital Avenue.

## Prototyp (Stand 10.09.2026)

- Quelle: `prototype/src/` (Seiten und Partials), gebaut mit `node prototype/build.mjs`
  nach `prototype/*.html` und als Einzeldatei-Bundle nach `prototype/dist/`.
- Seiten: Startseite, Für Praxen, Für Kanzleien, Für den Mittelstand. Alle mit
  Zielgruppen-Umschalter (Startseite), Digital-Check-Dialog mit Validierung,
  FAQ, Referenzen und Kundenstimmen-Platzhaltern.
- Bilder: 33 Higgsfield-Motive in `prototype/img/` (Soul 2.0 sowie zwei Porträts
  mit GPT Image 2 für ruhige Hintergründe; rund 20 Credits gesamt). Übersicht in
  `prototype/img/contact-sheet.jpg`. Kein Motiv wird doppelt verwendet.
  Nicht verwendet: m04, m06, m08, m10, m14, m17, m20, m23, m30, m31 (m14, m17,
  m30, m31 mit Schrift- oder Bildartefakten).
- Vorschau als Artefakt: https://claude.ai/code/artifact/5c43ea84-ecc7-491f-8a93-f851f2335770
- Offen im Prototyp, als Platzhalter markiert: Adresse im Footer, Konditionen des
  Digital-Checks, Referenz-Beschreibungen, Kanzlei-Referenz, Kundenstimmen,
  Preismodell und Reaktionszeiten in den FAQ, Datenschutzhinweis im Formular.

## H1 und SEO (Entscheidung 10.09.2026)

- Startseiten-H1 nach Variante 3 (Hybrid): "Ihre Digitalagentur in Hamburg und
  Rostock. Damit alles Digitale läuft und Sie den Kopf frei haben." Eyebrow
  "Für Praxen, Kanzleien und Mittelstand". Title-Tag "Digitalagentur Hamburg &
  Rostock für Praxen, Kanzleien, Mittelstand".
- Vor dem Launch: alle Keywords auf Basis einer echten Keyword-Recherche
  optimieren (Search Console der Live-Site, Keyword-Planer). Die Landingpages
  sind die SEO-Träger; ihre H1 sollen dann die konkreten Begriffe tragen
  (z. B. "Website, Telefonanlage und Terminbuchung für Ihre Arztpraxis").

## Recruiting (Ergänzung 10.09.2026)

- Für alle Kunden außer Ferienvermietung ein Kernthema: SEO-optimierte
  Karriereseite mit Online-Bewerbung (Stellen als Google-Jobs, Bewerbung vom
  Handy ohne Hürden). Referenzen: Dialyse Güstrow (zwei MFA innerhalb von vier Wochen) und
  DIGIZT GmbH (zwei Servicetechniker innerhalb von sechs Wochen), jeweils
  trotz Fachkräftemangel.
- Im Prototyp: Recruiting-Kachel auf der Startseite (ersetzt die Digital-Check-
  Kachel, der Check bleibt als CTA-Block), dritter Punkt in jedem Zielgruppen-Tab,
  je eine Recruiting-Kachel und ein "Kennen Sie das?"-Satz auf den drei
  Landingpages, Dialyse Güstrow als vierte Referenz, Karriereseite als Punkt
  im Digital-Check. Details zu den Referenzen sind noch Platzhalter.

## Umzug nach WordPress / Bricks (Stand 2026-09-10)

- Skill `bricks-handoff` in `.claude/skills/bricks-handoff/` angelegt: fünf Phasen (Klären, Tokens exportieren, Schriften/Icons, Komponenten als Global Classes, Templates/Seiten, Abgleich/Launch) plus Skripte `export-tokens.mjs` und `split-icons.mjs`.
- Erster Export liegt in `handoff/export/` (Advanced-Themer-Palette, Bricks-Variablen, globales CSS, Icons, Token-Report). Stand der Phasen in `handoff/STATUS.md`.
- Entscheidung (Nils, 10.09.2026): **Bricks Native**, kein Advanced Themer. Config und Skill entsprechend umgestellt; die AT-Palette wird nur noch als Nebenprodukt erzeugt.
- Offen: Staging-Zugang, Bricks-Template-Export als Referenz für das Template-JSON-Format.

## Dark Mode (Ergänzung 10.09.2026)

- Anforderung: Als Digitalagentur soll die Seite einen Dunkelmodus haben. Umsetzung nach der CSS-Logik von Bricks Native, damit alles eins zu eins übernommen werden kann.
- Mechanik: Attribut `data-brx-theme="dark"` auf `<html>`; alle Dunkel-Werte stehen in `design-system/colors_and_type.css` im Block `:root[data-brx-theme="dark"]`, Layout-Sonderfälle in `prototype/css/site.css` unter demselben Selektor. Wahl wird in localStorage `brx_mode` gespeichert, ohne Wahl gilt die Systemeinstellung. Ein Inline-Skript im Head setzt das Attribut vor dem ersten Rendern (kein Aufblitzen).
- Umschalter: Button in der Navigation mit dem Markup des Bricks-Elements "Toggle – Mode" (`.toggle.light` / `.toggle.dark`), Mond im Hellmodus, Sonne im Dunkelmodus. Auch mobil sichtbar.
- Neue Tokens: `--da-teal-fill` / `--da-teal-fill-hover` für gefüllte Flächen mit weißem Text (Buttons, Digital-Check-Block, aktive Tabs, Kundenstimme). Im Dunkelmodus heller als das Text-Teal, damit Weiß darauf lesbar bleibt (Kontrast 5,4:1). Dunkel-Werte ergänzt für `--da-teal-dark`, `--da-teal-deeper`, `--da-nav-bg`, `--da-nav-border`, Schatten sowie Erfolg/Warnung/Fehler.
- Dunkelmodus-Regeln im Layout: Logo wechselt auf die weiße Variante; Chips und Service-Karten auf Fotos werden dunkles Glas; Hero-Glanz auf Sand reduziert; Concierge- und Deep-Kacheln bekommen eine Kontur; Fremdlogos (DIGIZT) werden per Filter invertiert. Für Bricks werden echte Dunkel-Logos gebraucht.
- Vorschau-Schalter: `?dark` und `?light` an jeder Prototyp-URL.

## Style Guide (10.09.2026)

- Lebende Übersicht aller Farben, Schriften, Elemente und Komponenten: `prototype/styleguide.html` (Mehrdatei) und `prototype/dist/styleguide.html` (Einzeldatei), gebaut aus `prototype/src/styleguide.html` durch `build.mjs`. Komponenten werden aus den Seitenquellen extrahiert, Farbtabelle aus der Token-Datei erzeugt. Beides bleibt damit automatisch mit dem Prototyp synchron.
- Zweck: Planung des Umzugs nach Bricks. Jede Komponente trägt einen Vorschlag (Import, Theme Style, Global Class, Component, Element nativ, Custom CSS) und die Arbeitsliste am Ende hat 32 Einträge mit Erledigt-Spalte.
- Offene Entscheidung aus dem Guide: H5 und H6 sind im Design System nicht definiert (Vorschlag: H5 = Base fett, H6 = Label in Versalien). Kein Element ist ein Slider; die Zielgruppen laufen über Tabs.

## Bricks 2.4 (Entscheidung 10.09.2026)

- Wir warten auf Bricks 2.4 (derzeit RC2) und bauen erst dann in Bricks.
- Relevante Neuerungen: nativer MCP-Server mit AI Abilities (Claude Code kann Seiten, Templates, Components, Global Classes, Design System direkt anlegen; Endpunkt `/wp-json/bricks-mcp/v1/mcp`, Anwendungspasswort), HTML-zu-Bricks, bidirektionaler CSS Sync zwischen Custom CSS und Style-Controls, globaler Import/Export für Design Systems und Components, Bricks Browser, Stile zwischen Breakpoints kopieren. Details in `.claude/skills/bricks-handoff/references/bricks-2-4.md` und im Style Guide, Abschnitt „Bricks 2.4“.
- Folge für den Handoff: Statt JSON-Importe von Hand einzuspielen, kann Claude Code über MCP direkt in Staging arbeiten, sofern die Staging-Domain aus der Umgebung erreichbar ist. Das Anwendungspasswort bleibt beim Client, nie im Repository.
