# Digital Avenue: Projektwissen für den Chat

Stand 17.09.2026. Automatisch aus dem Repository `mediadolphin/digital-avenue` gebündelt (`handoff/tools/build-chat-paket.py`). Bei jedem neuen Thema zuerst „Projektstand“ und „Merkregeln“ lesen.

## Inhalt

1. Projektstand (`handoff/STATUS.md`)
2. Merkregeln und Entscheidungen (`handoff/MERKREGELN.md`)
3. Briefing (`BRIEFING.md`)
4. Kampagne: Start (`handoff/kampagne/00_START_HIER.md`)
5. Kampagne: Konzept (`handoff/kampagne/01_Kampagnenkonzept.md`)
6. Kampagne: Mailingtexte (`handoff/kampagne/02_Mailingtexte.md`)
7. Kampagne: Landingpage-Texte (`handoff/kampagne/03_Landingpage_Texte.md`)
8. Technisches Protokoll Bricks (`handoff/import/README.md`)



---

# Projektstand

Quelle: `handoff/STATUS.md`

## Bricks-Handoff: Stand

Skill: `.claude/skills/bricks-handoff/` (Ablauf in dessen SKILL.md). Dazu die 45 offiziellen Bricks-Skills (codeerhq/bricks-skills, Release v0.1.0-beta.3) in `.claude/skills/bricks-*`, Stand in `.claude/skills/BRICKS-SKILLS.lock`.

| Phase | Stand | Ergebnis |
|---|---|---|
| 0 Klären | teilweise | Config angelegt (`handoff.config.json`, Präfix `da`, Framework **Bricks Native**, Dunkel-Selektor `:root[data-brx-theme="dark"]`). Staging `https://relaunch.digital-avenue.de` (Bricks 2.4, seit 17.09.2026 final, mit MCP Adapter), MCP-Server in `.mcp.json` (HTTP, Header aus `BRICKS_MCP_AUTH` lokal, Proxy-Anmeldung in der Cloud). Verbindung aus der Cloud-Sitzung bestätigt (11.09.2026): 193 Abilities, davon 167 Bricks und 26 Meta Box. |
| 1 Tokens exportieren | erledigt, am Staging importiert (Theme Style, 52 Farben, 48 Variablen über den Style Manager, 11.09.2026) | `export/`: 52 Farb-Tokens mit Hell- und Dunkel-Wert (davon 16 Schatten- und Glasfarben), 48 Variablen in 8 Kategorien, keine unzugeordneten. Dunkelmodus im Prototyp umgesetzt und am Staging bestätigt (Toggle-Mode-Element, 11.09.2026): Hintergrund, Button und Icons wechseln über den Color Manager. |
| 2 Schriften & Icons | erledigt (11.09.2026) | Manrope und Jost als Custom Fonts mit je 8 Schnitten im Font Manager (Jost lokal statt Google). Icon-Set „Digital Avenue“ mit 15 Icons im Icon Manager, Quelle `import/06-icons/` (SVG → Bricks Optimizer). |
| 3 Komponenten als Global Classes und Components | erledigt (11.09.2026): 50 Klassen am Staging in 8 Kategorien, 14 Components per MCP (Karten, Kacheln, Listenzeilen, Abschnitte Feature-Block, Concierge, Digital-Check-Block, Hero Landingpage), FAQ als Accordion-Muster, alle Fotos in der Mediathek; Testseiten 50, 60, 63, 101. Offen: Abnahme durch Nils, Popup Digital-Check (Formular), Partnerzeile, Zielgruppen-Tabs, Mosaik beim Seitenimport | Stand, IDs und Lernpunkte in `handoff/import/README.md`, Schritt 7. |
| 4 Templates & Seiten | begonnen (11.09.2026): Header (Nav mit Dropdowns Branchen/Referenzen, Umschalter, CTA, Burger) und Footer als Templates per MCP gebaut, Startseite mit Hero, Mosaik und Partnerzeile; offen: mobiles Menü, Rest der Startseite (Kacheln, Schritte, Referenzen, Kundenstimmen, Digital-Check, FAQ), drei Landingpages, Popup Digital-Check | Aufbau in `handoff/import/README.md`, Schritte 8 und 9. |
| 5 Abgleich, Redirects, Launch | offen | Checkliste in `references/launch-checklist.md`. |

Bricks-Version: 2.4 final am Staging (Update von RC2 am 17.09.2026). Das Plugin `da-content-model` war am Staging kurz aktiv und ist wieder entfernt (11.09.2026); Post-Typen kommen erst nach den Templates zurück. Style Guide mit Inventar und Arbeitsliste: `prototype/styleguide.html`.

Betriebskonzept (MCP, Meta Box, CPTs): `handoff/BETRIEBSKONZEPT-MCP.md`. Datenmodell (CPTs, Felder) am 11.09.2026 zurückgestellt: erst Grundparameter, Theme Style, Icons und Components, dann Felder aus den fertigen Templates ableiten.

Merkregeln zum Nachschlagen: `handoff/MERKREGELN.md`. Importdaten für den Aufbau am Staging: `handoff/import/` (README mit Aufträgen je Schritt, Build über `build-import.mjs`).

### Nächste Schritte

0. Schritte 0 bis 7 aus `handoff/import/README.md` sind am Staging erledigt (Components inklusive Abschnitte). Als Nächstes Header und Footer als Templates, dann die Seiten aus den Components zusammensetzen (Startseite zuerst). Im Chat gezeigte Anwendungspasswörter widerrufen.
1. Dunkel-Logos (Digital Avenue vorhanden, Referenzlogos fehlen) beschaffen.
2. Palette und Variablen in eine Staging-Installation importieren, Ergebnis mit `export/tokens-report.md` vergleichen.
3. Erste Global Classes anlegen (Buttons, Eyebrow, Karten) und gegen den Prototyp prüfen.

Nachtrag 11.09.2026 (abends): Startseite um die Section „Für wen“ mit Bricks-Tabs (Klasse `tabs`), Abschnittskopf (`section-head center`) und Component „Zielgruppen-Panel“ (`28c728`) ergänzt. Glas-Deckkraft auf 0.84/0.86 mit stärkerem Blur eingependelt.

Nachtrag 17.09.2026: Kampagnenpaket (`handoff/kampagne/`, ohne Kontaktdaten) übernommen. Landingpages K1/K2/K9 unter `/arztpraxen/` als Entwürfe gebaut (Posts 169, 171, 173), gemeinsame Module als Section-Template 167, Kontaktformular als Template 165. Plugin „Digital Avenue Parameter“ für Telefon, Servicezeiten, Serviceversprechen per Shortcode/Echo-Tag geschrieben (`wordpress/plugins/da-parameter.zip`), Installation durch Nils.

Nachtrag 17.09.2026: Footer-Spalte „Für wen“ (Prototyp) bzw. „Branchen“ (Bricks, Template 54) um Heilberufe und Gastgewerbe ergänzt. Beide verweisen auf `/branchen/heilberufe/` und `/branchen/gastgewerbe/`; im Prototyp vorläufig auf die Praxen- bzw. Mittelstand-Seite. Für beide Zielgruppen gibt es noch keine Seite und keinen Text.


---

# Merkregeln und Entscheidungen

Quelle: `handoff/MERKREGELN.md`

## Merkregeln für den Aufbau in Bricks

Kurze Regeln, die sich beim Aufbau am Staging bewährt haben. Zum
Nachschlagen; jede Regel ein Absatz, mit Datum. Neue Regeln unten anfügen.

### Struktur

**Section trägt Hintergrund und Abstand, Container trägt Breite, Blocks
darin tragen das Layout.** (11.09.2026) Section: Padding oben und unten
`var(--da-sp-20)`, links und rechts `var(--da-sp-6)`, dazu Hintergrund.
Container: nur Max-Breite 1240px, kein Padding, sonst verdoppelt sich der
Seitenrand. Blocks und Divs: Grid, Flex, Abstände zwischen Elementen.
Randlose Elemente (Hero-Bild bis zum Rand) bekommen eine eigene Section
ohne Seitenrand.

**Blocks haben keinen Standard-Innenabstand.** (11.09.2026) Ein Block
ordnet Kinder an (Grid, Flex, Lücken). Innenabstand, Fläche, Rand und
Schatten kommen mit der Komponenten-Klasse auf dem Block, etwa
`service-card` oder `tile`. So muss keine Klasse ein Padding
zurücksetzen, und reine Layout-Blocks rücken nicht ein.

**Ein Feld je Stelle im Template.** (11.09.2026) Jeder Inhalt, der im
Template ein eigenes Element mit eigener Position bekommt, braucht ein
eigenes Feld. Der Editor-Inhalt ist ein Block und taugt nur für Fließtext.
Einmalige Inhalte als flache Felder, wiederholende als klonbare Gruppe mit
Query Loop.

### Theme Style

**Section-Abstand steht in der Gruppe Section, die Breite in der Gruppe
Container.** (11.09.2026) Die Felder „Root container padding“ und „Root
container width“ unter General tragen ein rotes Symbol, sind Altlasten und
wirken nicht auf Sections.

**HTML-Schriftgröße im Theme Style auf 100 % setzen.** (11.09.2026)
Ohne den Wert rechnet Bricks mit 62,5 % (1rem = 10px), und alles in rem
schrumpft. Unsere Tokens stehen in Pixel und sind nicht betroffen, Plugins
und WordPress-Blöcke schon.

**Skalen-Generator für Spacing und Typography nicht verwenden.**
(11.09.2026) Er erzeugt Verhältnisreihen in rem. Unser Design System sind
Vielfache von 4px als feste `clamp()`-Werte. Die Kategorien Abstände und
Schriftgrößen bleiben ohne Skalen-Konfiguration; in den Controls sind sie
normal wählbar.

### Farben und Variablen

**Alles, was im Dunkelmodus anders aussieht, ist eine Farbe mit Hell- und
Dunkelwert im Color Manager.** (11.09.2026) Variablen haben keinen
Dunkelwert. Schatten und Glasflächen referenzieren deshalb nur Farb-Tokens
(`--da-ink-*`, `--da-teal-glow*`, `--da-glass*`); dann schaltet Bricks
nativ um, ohne eigene CSS-Regeln. Am Staging mit dem Element „Toggle – Mode“ bestätigt.

**Importdateien nur im gespeicherten Format von Bricks, ohne
Zusatzfelder.** (11.09.2026) Der Style Manager lehnt Dateien mit fremden
Schlüsseln ab („Unable to open ZIP file“). Erklärungen gehören in die
Markdown-Datei daneben. Vorlage ist immer ein Export aus Bricks.

### Klassen

**Buttons sind Basisklasse plus Variante.** (11.09.2026) `da-btn` trägt
Padding, Radius, Schrift, Übergang; `da-btn-primary`, `-ghost`, `-light`,
`-sand` nur Farbe, Rahmen, Schatten. Immer beide setzen.

**Klassen-Kategorien: Sections, Text, Buttons, Icons, Forms, Modifiers,
Utilities.** (11.09.2026) Modifier wie `on-dark`, später `sand`,
`featured`, `full`, `half` und Kachel-Varianten gehören nach Modifiers.

**Klassen-CSS wirkt als Custom CSS, auch ohne Controls.** (11.09.2026)
Der CSS Sync übersetzt importiertes CSS nicht automatisch in Regler. Die
Klasse funktioniert trotzdem; Regler entstehen erst, wenn der Sync im
Panel angestoßen wird.

### Components

**Component je wiederkehrendem Element, Listenzeilen als eigene
Component.** (11.09.2026) Service-Karte besteht aus Service-Punkt-
Instanzen in einem Slot. Slot-Inhalt der Hauptcomponent ist nur
Vorlage im Builder; auf der Seite zählt, was die Instanz in den Slot legt.

**Varianten als Class-Property, nicht als Kopie.** (11.09.2026) Eine
Property „Variante“ mit Optionen Standard und Sand bindet an die Klassen
des Wurzelelements; die Basisklasse bleibt, der Modifier kommt dazu.

**Icons in Components aus dem Icon Manager.** (11.09.2026) Icon-Element mit
Set „Digital Avenue“ plus Global Class `icon`; kein Inline-SVG, das lässt
sich per MCP nicht speichern.

**Properties immer mit Default.** (11.09.2026) Eine verbundene Property
ohne Default leert den Wert des Elements. Bei Bildern also Attachment-ID,
URL und Größe als Default eintragen.

**`color-mix` nie in CSS-Kurzschreibweisen für Klassen.** (11.09.2026)
Der Import übersetzt Kurzschreibweisen in Controls und zerlegt dabei die
Klammern. Entweder Langschreibweise (`border-color: color-mix(...)`) oder
direkt als Raw-Wert im Control.

**Abschnitte mit eigenem Hintergrund bekommen die Section als
Component-Wurzel.** (11.09.2026) Hero Landingpage trägt Verlauf und
Abstand selbst, deshalb ist die Wurzel eine Section, nicht ein Div in
einer Section. Alle anderen Abschnitte liegen als Div in Section und
Container.

**Nestable-Kinder tragen ihre Rolle in `_hidden._cssClasses`.**
(11.09.2026) Accordion: `accordion-title-wrapper` und
`accordion-content-wrapper`; Dropdown: `brx-dropdown-content`; Tabs:
`tab-menu`, `tab-title`, `tab-content`, `tab-pane`. Ohne diese Klassen
läuft das Bricks-Skript nicht.

**Controls mit Bricks-Vorgabewerten am Element setzen, nicht in der Klasse.**
(11.09.2026) Tabs und Accordion bringen Vorgaben mit (Padding 20px,
Aktiv-Hintergrund, Content-Rahmen), die Bricks mit ID-Selektor ausgibt.
Eine Klasse kann sie nicht überschreiben. Deshalb genau diese Controls am
Element auf die gewünschten Werte setzen und alles Übrige in der Klasse
lassen (Beispiel: `tabs` auf dem Zielgruppen-Umschalter).

**Component-Instanzen liegen im Nestable-Kind, sind nicht selbst das Kind.**
(11.09.2026) Ein `tab-pane` bleibt ein einfacher Block, die Component
(z. B. Zielgruppen-Panel) steckt darin. So kollidiert das `display` der
Component nicht mit dem Ein- und Ausblenden von Bricks.

**Media-Queries in Klassen brauchen die Element-Klasse im Selektor.**
(11.09.2026) Bricks erzeugt aus den Controls eine Regel wie
`.tiles.brxe-div { grid-template-columns: … }` und gibt Media-Queries
davor aus. `@media { .tiles { … } }` verliert dann doppelt (Spezifität
und Reihenfolge). Deshalb in Media-Queries immer
`.tiles.brxe-div, .tiles.brxe-block, .tiles.brxe-container` schreiben.
Gleiches gilt für Regeln, die einen Control-Wert überschreiben sollen
(`.tile-photo { padding: 0 }` gegen `.tile.brxe-div { padding }`).

### Icons

**SVGs vor dem Upload durch den SVG → Bricks Optimizer.** (11.09.2026)
Kein `width`/`height`, `viewBox` vorhanden, Farben `currentColor`, jede
Form mit Klasse `bx1`, `bx2` … Tool unter `handoff/tools/`, im Build
eingebaut.

### Arbeitsweise

**MCP-Server in `.mcp.json`, nie als claude.ai-Connector.** (11.09.2026)
Der Connector versucht OAuth, Bricks kennt nur Anwendungspasswörter, die
Verbindung läuft in eine 404-Schleife. Eine Datei für beide Orte: direkte
HTTP-Verbindung zum Endpunkt, Header `Authorization: Basic ${BRICKS_MCP_AUTH}`.
Auf dem Mac liefert die Variable den Wert, in der Cloud ersetzt der Proxy
den Header durch die Anmeldung aus den Umgebungseinstellungen
(API-Anmeldedaten, Typ Basic). Zugangsdaten nie in Datei, Repository, Chat
oder Screenshot; ein Passwort, das dort stand, widerrufen.

**Bricks › AI muss eingeschaltet sein, und Verbindungstests laufen vom
eigenen Rechner.** (11.09.2026) Ohne den Schalter kennt der Adapter keine
Bricks-Abilities. Aus der Cloud-Umgebung ersetzt der Proxy jeden
Authorization-Header durch die hinterlegte Anmeldung; ein 401 von dort sagt
nur, dass diese Anmeldung veraltet ist. Erst wenn der Test vom Mac 200
liefert und trotzdem `rest_forbidden` kommt, liegt es am Server
(Skill-Referenz `bricks-2-4.md`, Punkt 3).

**Struktur am Staging bauen, Inhalte in der Produktion pflegen.**
(11.09.2026) Struktur-Änderungen wandern als Transfer-Paket vom Staging in
die Produktion. In der Produktion nur lesende Abilities plus Anlegen und
Paket-Import freischalten, Lösch-Abilities nur im Wartungsfenster.

**Importdateien nicht von Hand ändern, Build laufen lassen.** (11.09.2026)
`node handoff/import/build-import.mjs` erzeugt alle Dateien aus Design
System und Prototyp. Ändert sich ein Token, ändert sich die Token-Datei,
dann der Build.

### Hosting

**Plesk liefert ohne `.htaccess` keine schönen Adressen.** (11.09.2026)
Fehlt die Datei im WordPress-Stammverzeichnis, landen `/wp-json/` und alle
Unterseiten in der Plesk-404, während `?rest_route=` und `?p=` weiter
gehen. Abhilfe: Standard-`.htaccess` von WordPress anlegen (Block
`# BEGIN WordPress` mit den Rewrite-Regeln), dann Permalinks einmal
speichern. Erkennungszeichen: eine HTML-Fehlerseite des Hosters statt einer
JSON-Antwort von WordPress. Die MCP-Adresse in `.mcp.json` ist die dokumentierte Form
`/wp-json/mcp/mcp-adapter-default-server`; sie setzt funktionierende
Rewrite-Regeln voraus.

**Wiederkehrende Seitenmodule liegen in Section-Templates, nicht auf jeder Seite.**
(17.09.2026) Concierge, Schritte, Partner und FAQ der Kampagnenseiten
stecken in einem Template und werden per Template-Element (`noRoot`)
eingebunden. Eine Textänderung wirkt auf allen Seiten. Auch ein Formular
ist so ein Modul: ein Template, viele Seiten.

**Grundparameter kommen aus dem Parameter-Plugin, nicht aus Fließtext.**
(17.09.2026) Telefon, E-Mail, Servicezeiten, Reaktionszeit und das
Serviceversprechen werden mit `[da key="…"]` oder in Bricks mit
`{echo:da_param('…')}` ausgegeben. Wer den Wert ändert, ändert ihn einmal.

**Kontaktdaten aus Kampagnen bleiben außerhalb von Repository und Website.**
(17.09.2026) Adresslisten gehören nur ins CRM. Die `.gitignore` blockt die
CSV-Dateien des Kampagnenpakets.

**Subagents laufen höchstens mit Opus 5.**
(17.09.2026, Nils) Wer in dieser Session Subagents startet, wählt als Modell
maximal Opus 5, um Tokens zu sparen. Das gilt für Recherche, Reviews und
parallele Bauaufgaben gleichermaßen.

**Neue Seiten werden zuerst im Prototyp gebaut, dann in Bricks.**
(17.09.2026) Auch Kampagnen-Landingpages: Prototyp (`prototype/src/pages/`)
und Staging halten denselben Stand. Bilder kommen wie immer aus Higgsfield
(Soul 2.0, Editorial-Look) und werden über `prototype/img/sources.json` und
die GitHub-Action nachgeladen, weil das Bild-CDN aus der Cloud gesperrt ist.


---

# Briefing

Quelle: `BRIEFING.md`

## Briefing: Redesign digital-avenue.de

Stand: 10. September 2026. Ergebnis der Vorab-Klärung (Fragen und Antworten von Nils Rudolph).

### Ausgangslage

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

### Entscheidungen

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

### Offene Punkte

- Claude-Design-Projekt (Quelle des Exports):
  https://claude.ai/design/p/019ddea1-f8fe-7a97-bba0-f6d090a4b241
- Inhalt des "Digital-Check" mit Nils abstimmen (Umfang, Dauer, was der Kunde bekommt).
- Echte Kundenstimmen nachliefern.
- Hosting-Hintergrund (Nils, 10.09.2026): Digital Avenue hostet nicht selbst,
  sondern arbeitet mit Partnern (IONOS, Netleaders), weil diese Infrastruktur
  und Personal für Sicherheit und Performance haben. Partnerzeile: Doctolib,
  Placetel, Netleaders, IONOS.
- Placetel-Logo und Partnerstatus prüfen (fehlt auf der Live-Site, steht im Konzept).

### Technische Hinweise

- digital-avenue.de ist aus dem Claude-Code-Netz gesperrt, aber über die
  Higgsfield-Sandbox (`sandbox_exec` mit curl) erreichbar.
- GitHub-Repo war zu Beginn leer. Arbeits-Branch: `claude/digital-avenue-redesign-0wnw6r`.
- Redirect-Plan sieht neue URL-Struktur `/leistungen/...` vor; die Landingpages
  sind darin noch nicht enthalten.

### Layout-Inspiration (von Nils, 10.09.2026)

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

### Design System (Stand des Exports vom 10.09.2026)

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

#### Abweichungen zwischen Entwurf und Entscheidungen

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

### Prototyp (Stand 10.09.2026)

- Quelle: `prototype/src/` (Seiten und Partials), gebaut mit `node prototype/build.mjs`
  nach `prototype/*.html` und als Einzeldatei-Bundle nach `prototype/dist/`.
- Seiten: Startseite, Für Praxen, Für Kanzleien, Für den Mittelstand. Alle mit
  Zielgruppen-Umschalter (Startseite), Digital-Check-Dialog mit Validierung,
  FAQ, Referenzen und Kundenstimmen-Platzhaltern.
- Bilder: 39 Higgsfield-Motive in `prototype/img/` (m34–m39 am 17.09.2026 für die Kampagnen-Landingpages) (Soul 2.0 sowie zwei Porträts
  mit GPT Image 2 für ruhige Hintergründe; rund 20 Credits gesamt). Übersicht in
  `prototype/img/contact-sheet.jpg`. Kein Motiv wird doppelt verwendet.
  Nicht verwendet: m04, m06, m08, m10, m14, m17, m20, m23, m30, m31 (m14, m17,
  m30, m31 mit Schrift- oder Bildartefakten).
- Vorschau als Artefakt: https://claude.ai/code/artifact/5c43ea84-ecc7-491f-8a93-f851f2335770
- Offen im Prototyp, als Platzhalter markiert: Adresse im Footer, Konditionen des
  Digital-Checks, Referenz-Beschreibungen, Kanzlei-Referenz, Kundenstimmen,
  Preismodell und Reaktionszeiten in den FAQ, Datenschutzhinweis im Formular.

### H1 und SEO (Entscheidung 10.09.2026)

- Startseiten-H1 nach Variante 3 (Hybrid): "Ihre Digitalagentur in Hamburg und
  Rostock. Damit alles Digitale läuft und Sie den Kopf frei haben." Eyebrow
  "Für Praxen, Kanzleien und Mittelstand". Title-Tag "Digitalagentur Hamburg &
  Rostock für Praxen, Kanzleien, Mittelstand".
- Vor dem Launch: alle Keywords auf Basis einer echten Keyword-Recherche
  optimieren (Search Console der Live-Site, Keyword-Planer). Die Landingpages
  sind die SEO-Träger; ihre H1 sollen dann die konkreten Begriffe tragen
  (z. B. "Website, Telefonanlage und Terminbuchung für Ihre Arztpraxis").

### Recruiting (Ergänzung 10.09.2026)

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

### Umzug nach WordPress / Bricks (Stand 2026-09-10)

- Skill `bricks-handoff` in `.claude/skills/bricks-handoff/` angelegt: fünf Phasen (Klären, Tokens exportieren, Schriften/Icons, Komponenten als Global Classes, Templates/Seiten, Abgleich/Launch) plus Skripte `export-tokens.mjs` und `split-icons.mjs`.
- Erster Export liegt in `handoff/export/` (Advanced-Themer-Palette, Bricks-Variablen, globales CSS, Icons, Token-Report). Stand der Phasen in `handoff/STATUS.md`.
- Entscheidung (Nils, 10.09.2026): **Bricks Native**, kein Advanced Themer. Config und Skill entsprechend umgestellt; die AT-Palette wird nur noch als Nebenprodukt erzeugt.
- Offen: Staging-Zugang, Bricks-Template-Export als Referenz für das Template-JSON-Format.

### Dark Mode (Ergänzung 10.09.2026)

- Anforderung: Als Digitalagentur soll die Seite einen Dunkelmodus haben. Umsetzung nach der CSS-Logik von Bricks Native, damit alles eins zu eins übernommen werden kann.
- Mechanik: Attribut `data-brx-theme="dark"` auf `<html>`; alle Dunkel-Werte stehen in `design-system/colors_and_type.css` im Block `:root[data-brx-theme="dark"]`, Layout-Sonderfälle in `prototype/css/site.css` unter demselben Selektor. Wahl wird in localStorage `brx_mode` gespeichert, ohne Wahl gilt die Systemeinstellung. Ein Inline-Skript im Head setzt das Attribut vor dem ersten Rendern (kein Aufblitzen).
- Umschalter: Button in der Navigation mit dem Markup des Bricks-Elements "Toggle – Mode" (`.toggle.light` / `.toggle.dark`), Mond im Hellmodus, Sonne im Dunkelmodus. Auch mobil sichtbar.
- Neue Tokens: `--da-teal-fill` / `--da-teal-fill-hover` für gefüllte Flächen mit weißem Text (Buttons, Digital-Check-Block, aktive Tabs, Kundenstimme). Im Dunkelmodus heller als das Text-Teal, damit Weiß darauf lesbar bleibt (Kontrast 5,4:1). Dunkel-Werte ergänzt für `--da-teal-dark`, `--da-teal-deeper`, `--da-nav-bg`, `--da-nav-border`, Schatten sowie Erfolg/Warnung/Fehler.
- Dunkelmodus-Regeln im Layout: Logo wechselt auf die weiße Variante; Chips und Service-Karten auf Fotos werden dunkles Glas; Hero-Glanz auf Sand reduziert; Concierge- und Deep-Kacheln bekommen eine Kontur; Fremdlogos (DIGIZT) werden per Filter invertiert. Für Bricks werden echte Dunkel-Logos gebraucht.
- Vorschau-Schalter: `?dark` und `?light` an jeder Prototyp-URL.
- Ergänzung 11.09.2026: Alles, was im Dunkelmodus anders aussieht, ist jetzt eine Farbe mit Hell- und Dunkelwert (16 neue Tokens: `--da-ink-*` für Schattenebenen, `--da-teal-glow*`, `--da-glass*`, `--da-chip-*`, `--da-step-bg`, `--da-deep-border`, `--da-wordmark`, `--da-glow-sand*`). Schatten-Variablen referenzieren nur noch diese Farben. Damit schaltet der Bricks Color Manager alles nativ um; im Prototyp-CSS bleiben nur Logo-Wechsel, Umschalter-Icons und die Platzhalter-Filter für Referenzlogos als Dunkelmodus-Regeln.

### Style Guide (10.09.2026)

- Lebende Übersicht aller Farben, Schriften, Elemente und Komponenten: `prototype/styleguide.html` (Mehrdatei) und `prototype/dist/styleguide.html` (Einzeldatei), gebaut aus `prototype/src/styleguide.html` durch `build.mjs`. Komponenten werden aus den Seitenquellen extrahiert, Farbtabelle aus der Token-Datei erzeugt. Beides bleibt damit automatisch mit dem Prototyp synchron.
- Zweck: Planung des Umzugs nach Bricks. Jede Komponente trägt einen Vorschlag (Import, Theme Style, Global Class, Component, Element nativ, Custom CSS) und die Arbeitsliste am Ende hat 32 Einträge mit Erledigt-Spalte.
- Offene Entscheidung aus dem Guide: H5 und H6 sind im Design System nicht definiert (Vorschlag: H5 = Base fett, H6 = Label in Versalien). Kein Element ist ein Slider; die Zielgruppen laufen über Tabs.

### Bricks 2.4 (Entscheidung 10.09.2026)

- Bricks 2.4 ist seit dem 17.09.2026 final auf Staging (vorher RC2); Umsetzung in Bricks läuft.
- Relevante Neuerungen: nativer MCP-Server mit AI Abilities (Claude Code kann Seiten, Templates, Components, Global Classes, Design System direkt anlegen; über den WordPress MCP Adapter, Endpunkt `index.php?rest_route=/mcp/mcp-adapter-default-server`, stdio-Brücke `@automattic/mcp-wordpress-remote`, Anwendungspasswort nur in Umgebungsvariablen; Konfiguration in `.mcp.json`, nicht als claude.ai-Connector), HTML-zu-Bricks, bidirektionaler CSS Sync zwischen Custom CSS und Style-Controls, globaler Import/Export für Design Systems und Components, Bricks Browser, Stile zwischen Breakpoints kopieren. Details in `.claude/skills/bricks-handoff/references/bricks-2-4.md` und im Style Guide, Abschnitt „Bricks 2.4“.
- Folge für den Handoff: Statt JSON-Importe von Hand einzuspielen, kann Claude Code über MCP direkt in Staging arbeiten, sofern die Staging-Domain aus der Umgebung erreichbar ist. Das Anwendungspasswort bleibt beim Client, nie im Repository.

### Datenmodell und Betrieb über MCP (11.09.2026)

- Drei Ebenen: Struktur über MCP (Bricks-Abilities), Datenmodell als Meta-Box-Code im Repo, Inhalte im WordPress-Admin.
- CPTs: `da_referenz` (mit Kundenstimme als Feldgruppe), `da_leistung`, `da_faq`, `da_partner`. Taxonomien `zielgruppe` und `leistungsbereich`. Settings Page `unternehmen`. Landingpages bleiben Seiten aus Components.
- Go-Live durch Übernahme des Stagings; danach Struktur-Änderungen als Transfer-Pakete. Details und Leitplanken in `handoff/BETRIEBSKONZEPT-MCP.md`.
- Entscheidungen 11.09.2026: Referenz-Einzelseiten ab Start; Digital-Check per E-Mail und als Anfrage-CPT; Entwicklung auf relaunch.digital-avenue.de, Go-Live per All-in-One WP Migration; Leistungen mit eigenen Seiten unter `/leistungen/`. Das Plugin mit dem Datenmodell wurde am selben Tag wieder entfernt (Git-Historie): Felder werden erst aus den fertigen Bricks-Templates abgeleitet, ein Feld je Stelle im Template. Reihenfolge jetzt: Grundparameter (Farben, Schriften, Variablen, Klassen), Icons, Theme Style, Components.


---

# Kampagne: Start

Quelle: `handoff/kampagne/00_START_HIER.md`

## Digital Avenue – Kampagnenpaket

Erstellt am 13.09.2026 aus dem Projektgespräch und sämtlichen vorhandenen Adressbeständen. Budgetplanung wurde wie gewünscht zurückgestellt.

### Die Ergebnisse

1. **01_Kampagnenkonzept.md:** vollständige Strategie mit neun Kampagnen, Zielgruppen, Fachrichtungsübersicht, Angebotslogik, Kontaktfolge, Rollen, CRM-Prozess und Erfolgsmessung.
2. **02_Mailingtexte.md:** neun Briefe und neun E-Mail-Texte, zusätzliche Telefonievarianten für beide Kanäle, eine postalische Erinnerung und eine Antwort auf Beratungsanfragen. Insgesamt 22 Textvorlagen.
3. **03_Landingpage_Texte.md:** neun passende Textvarianten samt gemeinsamen Modulen, FAQ, Kontaktformular und Gestaltungshinweisen.
4. **HubSpot/Kontakte_Hamburg.csv:** 5.867 Kontakt-Quelleinträge.
5. **HubSpot/Kontakte_Rostock.csv:** 1.024 Kontakt-Quelleinträge.
6. **HubSpot/IMPORT_ANLEITUNG.md** und **HubSpot/Feldmapping.csv:** Anleitung und Zuordnung aller 37 Spalten; benutzerdefinierte Eigenschaften vor Import anlegen.
7. **HubSpot/Praxiszuordnung_RECHERCHE_KEIN_IMPORT.csv:** 2.226 Anschriftengruppen für die anschließende Organisationsprüfung. Keine verifizierte Praxisliste und kein Unternehmensimport.
8. **HubSpot/Pruefbericht.json:** maschinenlesbare Prüfzahlen.

### Was einsatzfertig ist und was die Ausführung benötigt

Konzept und Texte sind ausgearbeitet. Die beiden CSV-Dateien sind strukturell für den beschriebenen Kontaktimport vorbereitet; der tatsächliche HubSpot-Testimport wurde ohne Kontozugriff nicht durchgeführt. Vor Import sind Eigenschaftsanlage und Bestandsabgleich nötig. Quell-ID kennzeichnet einen Verzeichniseintrag, nicht zwingend einen einmaligen Menschen. E-Mail-Adressen bleiben Recherchefelder und sind nicht als persönliches Standardfeld Email zu importieren.

Vor Versand müssen Praxiszugehörigkeit, Empfänger, Bestandskunden und Kontaktsperren geprüft sowie finale Kampagnenlinks und Pflichtangaben eingesetzt werden. Die E-Mail-Versionen sind ausschließlich für berechtigte Kontakte bestimmt. Es wurden keine E-Mails, Briefe oder Anzeigen versendet und keine Landingpages veröffentlicht.

Die öffentliche Referenznutzung von Pneumologie Eppendorf ist laut Inhaber bestätigt. Die ebenfalls genannte 5-Sterne-Bewertung ist ohne Originalprüfung nicht als Zitat verwendet worden. Servicezeiten und Feiertagsannahme sind in Konzept und Texten konsistent beschrieben.

### Prüfung

Gesamtzahl 6.891; 6.891 eindeutige Quell-IDs; regionale Anzahlen stimmen mit den Originaldateien überein. Alle Spalten haben ein Feldmapping. Kein Standard-Email-Feld, keine gesetzte Werbeeinwilligung und kein freigegebener Versanddatensatz. 35 fehlende Fachrichtungsangaben bleiben sichtbar. Eine bekannte Referenz ist automatisch erkannt, weitere Bestandskunden müssen mit der tatsächlichen Kundenliste abgeglichen werden. Alle Primärkampagnen summieren sich auf 6.891 Einträge.

Die ursprünglichen Adressdateien bleiben unverändert. Das Gesamtpaket liegt zusätzlich als ZIP neben diesem Ordner.


---

# Kampagne: Konzept

Quelle: `handoff/kampagne/01_Kampagnenkonzept.md`

## Digital Avenue: Kampagnen für Praxen und Heilberufe

Stand: 13. September 2026. Ausgearbeitetes Konzept für Hamburg und Rostock einschließlich Landkreis. Budgetentscheidungen bleiben auf Wunsch zurückgestellt. Alle Zeitangaben beziehen sich auf einen später festgelegten Start. Dieses Dokument ersetzt die früheren vorläufigen Kampagnenentscheidungen, ohne deren Datenquellen zu verändern.

### 1. Ziel und Positionierung

Neue Kunden für Bau oder Übernahme von WordPress-Websites und/oder Placetel-Telefonanlagen gewinnen und in langfristige monatliche Betreuung überführen. Praxisgestaltung, Drucksachen, Beschilderung und größere digitale Projekte ergänzen die Zusammenarbeit. Auffindbarkeit und Recruiting werden bei tatsächlichem Bedarf angeboten.

**Positionierung:** Digital Avenue ist die externe Digitalabteilung für Praxis und MVZ. Persönlich erreichbar, vorausschauend in der Pflege und zuständig für die vereinbarten Kommunikationsaufgaben.

**Leitidee:** Ihre Kommunikation gehört zusammen.

**Praktischer Beleg:** Die Praxis meldet einen Urlaub. Digital Avenue aktualisiert die vereinbarten Hinweise auf Website, Google Business und Telefonanlage und nimmt sie zum vereinbarten Zeitpunkt wieder zurück. Der Kunde muss den Folgeschritt nicht erneut beauftragen.

Bis zu 100 zusätzliche Praxen sind ein genannter Kapazitätsrahmen für zwölf Monate, kein prognostiziertes Kampagnenergebnis. Gemessen werden laufende Betreuungsverträge und monatliche Nettoumsätze; einmalige Projekte werden separat ausgewiesen.

### 2. Was angeboten wird

| Baustein | Inhalt | Angebotslogik |
|---|---|---|
| Website | WordPress-Bau oder technische Übernahme, Wartung und Inhalte | Einrichtung/Übernahme separat, laufende Betreuung monatlich |
| Digital-Concierge | Änderungen per Telefon/E-Mail, vereinbarte Folgearbeiten, abgestimmte Pflege | Klarer Umfang im Monatsvertrag; keine unbegrenzte Änderungsflatrate |
| Telefonie | Placetel einrichten oder bestehende Anlage nach Prüfung betreuen | Einrichtung separat; Betreuung monatlich; Providerkosten gesondert |
| Google Business | Stammdaten, Öffnungs- und Schließzeiten sowie vereinbarte Inhalte pflegen | Nach vereinbartem Betreuungsumfang |
| Doctolib | Vermittlung; nach Abschluss Einbindung in Website und, wenn gebucht, Telefonanlage | Konkrete Umsetzung im Angebot; keine vollständige Doctolib-Administration zugesagt |
| Gestaltung und Print | Logo, Geschäftsausstattung, Drucksachen, Beschilderung | Separate Projektangebote; Gestaltung, Produktion und Montage klar abgrenzen |
| Auffindbarkeit | Leistungsseiten, lokale SEO, optional SEA | Zielbezogenes Zusatzprojekt oder laufende Leistung; Werbebudget separat |
| Recruiting | Karriereseite, Stelleninhalte, Bewerbungswege, optional weitere Medien | Nach bestätigtem Bedarf; keine Bewerbungs- oder Besetzungsgarantie |

Vertragliches Hosting bleibt in der Regel beim Kunden; IONOS-Agenturzugriff ermöglicht technische Betreuung. Das ist ein Argument für klare Zuständigkeiten und Wahlfreiheit, keine Behauptung völliger Risikofreiheit. Partner werden anhand ihrer konkreten Aufgabe vorgestellt. Die technische Art einer Doctolib-Telefonanbindung wird je Auftrag geklärt, nicht als universelle Schnittstelle beworben.

**Serviceversprechen:** Persönliche Rückmeldung innerhalb einer Stunde, Mo–Fr 08–18 Uhr, mit Vertretung. Für die Entwürfe sind gesetzliche Feiertage ausgenommen. Bei außerhalb der Servicezeit eingegangenen Anfragen beginnt die Frist mit dem nächsten Servicefenster. Rückmeldung bedeutet keine vollständige Problemlösung. Diese Regel gehört vor Vertragsabschluss konsistent in die Leistungsbeschreibung.

Keine finalen Paketpreise in den Mailings: 149 Euro war lediglich ein diskutierter Prüfpreis. Die Kampagne führt in eine kurze Bedarfsklärung mit anschließend transparentem Angebot. Die 15 Prozent Bestandskundenrabatt auf Zusatzarbeiten sind kein Neukunden-Rabattversprechen und werden im Erstmailing nicht beworben.

### 3. Datenbasis und Qualifizierung

Die zwei Original-CSV-Dateien enthalten 5.867 Hamburger und 1.024 Rostocker Datensätze. Für Hamburg wurden die vorhandenen Namensbestandteile aus der CRM-Excel-Datei über die Quell-URL zugeordnet. Fachrichtungen wurden vollständig ausgewertet; 35 leere Angaben bleiben ungeklärt. Mehrfachqualifikationen bleiben sichtbar.

Die Importdateien enthalten **Quelleinträge als Kontakte**, keine bestätigte Liste unabhängiger Arztpraxen. Gleichlautende Namen können mehrere Arbeitsorte betreffen. Gemeinsame Anschriften, Telefonnummern oder Postfächer beweisen keine gemeinsame Organisation. Eine Recherche-Arbeitsliste fasst 2.226 Anschriftengruppen zusammen; dies ist keine Praxiszahl. Der Unterschied zu früheren Summen entsteht durch die zusätzliche Einbeziehung des Ortsfelds in die Gruppierung.

Eine fehlende Websiteangabe ist „unbekannt“. In Rostock wurden Website-/E-Mail-Daten technisch nicht erhoben. Es wird daraus weder Websitebedarf noch ein niedriger Digitalisierungsgrad abgeleitet. Fachrichtungen werden zu Kampagnenvorschlägen, nicht zu behaupteten Problemen oder Kaufwahrscheinlichkeiten.

#### Aufnahme in eine Aussendung

1. Ambulante Behandlung oder selbstständige medizinische Einrichtung bestätigen.
2. Praxis/Träger und Standort feststellen. Bei MVZ Geschäftsführung oder zuständiges Praxismanagement zuordnen. Bei angestellten Ärzten den Entscheider ermitteln; den einzelnen Arzt nicht pauschal als Websitekäufer behandeln.
3. Website, tatsächliches Leistungsangebot und vorhandene Kontaktwege ansehen; Prüfdatum und Fundstelle dokumentieren. Recruiting, Wachstum und Praxisstart nur mit konkretem Anlass auswählen.
4. Bestandskunden und Sperrvermerke abgleichen. Pneumologie Eppendorf ist in den Daten soweit erkennbar markiert; Lungenpraxis am Tibarg und Dialyse Güstrow sind zusätzliche bekannte Projekt-/Referenzhinweise, die vor Versand abzugleichen sind. Keine vollständige Kundenliste liegt vor.
5. Pro bestätigter Praxis einen passenden Empfänger bestimmen. Nicht alle Ärzte eines Standorts anschreiben. Neutrale Anrede verwenden, falls die persönliche Anrede nicht verifiziert ist.
6. Postalische Voraussetzungen und Informationspflichten berücksichtigen, Versandstatus dokumentieren. Rechercheimport allein löst keine Kommunikation aus.

#### Reihenfolge

**Zuerst:** Pneumologie/Nephrologie und angrenzende Internisten mit eigenen Patientenwegen; danach hausärztliche und andere ambulante Fachpraxen mit organisatorischem Betreuungsbedarf.

**Danach:** Psychotherapie mit passendem Betreuungsumfang, ambulante Eingriffs-/Diagnostikeinrichtungen und MVZ mit geklärter Entscheidungsebene.

**Gesondert:** Labor und Pathologie, weil Zuweiserkommunikation und Recruiting häufig passendere Einstiege sind als Patientenakquise. Krankenhaus- und Trägerzugehörigkeit bleibt ein Prüfpunkt, kein alleiniger Ausschluss.

Weitere Heilberufe wie Physio, Ergo, Logopädie, Podologie, Hebammen, reine Zahnheilkunde und Heilpraktiker sind keine vollständig erfassten Segmente dieser Listen. Es werden keine fehlenden Adressen oder Marktgrößen erfunden.

### 4. Kampagnenarchitektur

K1–K6 übersetzen Fachgruppen in passende Ansprache. K3 ist zusätzlich an einen Wachstumsanlass gebunden. K7–K9 sind fachrichtungsübergreifende Anlässe. Pro Praxis wird pro Welle **eine Hauptkampagne** gewählt. K9 ist für eine Praxis ohne belegten Spezialbedarf ein möglicher Einstieg nach Prüfung; kein automatisch belegter Wechselwunsch.

| ID | Kampagne | Auslöser | Angebot / Gesprächsziel | Landingpage |
|---|---|---|---|---|
| K1 | Facharztpraxis entlasten | Wiederkehrende Patienteninformationen, laufender Betreuungsbedarf | Website und Kontaktwege betreuen | /arztpraxen/facharztpraxis/ |
| K2 | Empfang entlasten | Wiederkehrende Änderungen und mehrere Kontaktkanäle | Concierge, Website, Google Business, Telefonie | /arztpraxen/empfang-entlasten/ |
| K3 | Passend gefunden werden | Bestätigte neue Leistung, Standort oder Wachstumsziel | Leistungsseiten, SEO, optional SEA | /arztpraxen/auffindbarkeit/ |
| K4 | Gut informiert zum Termin | Eigene Untersuchungs-/Eingriffstermine, Informationsbedarf | Patienten- und Zuweiserwege auf der Website | /arztpraxen/patienteninformation/ |
| K5 | Praxisbetreuung für Psychotherapie | Erstkontakt, Abwesenheiten und Pflegebedarf | Angemessene Websitebetreuung, Telefonie optional | /arztpraxen/psychotherapie/ |
| K6 | Kommunikation für Einrichtungen | Selbstständige Diagnostikeinrichtung mit eigener Entscheidung | Zuweiserinformationen, Website und Karriere | /arztpraxen/medizinische-einrichtungen/ |
| K7 | Praxisstart und Übernahme | Verifizierte Gründung, Übernahme, Umzug oder Modernisierung | Gestaltung, Website, Telefonie und anschließende Betreuung | /arztpraxen/praxisstart/ |
| K8 | Recruiting unterstützen | Bestätigte offene Stelle / Personalplanung | Arbeitgeberdarstellung, Stellen- und Bewerbungswege | /arztpraxen/recruiting/ |
| K9 | Betreuung wechseln | Wunsch nach externer Betreuung, Systembestand prüfen | WordPress-/Placetel-Übernahme oder Neuaufbau nach Befund | /arztpraxen/betreuung-wechseln/ |

Die Zuordnungen im Import sind ausdrücklich vorläufig: K1 963, K2 3.113, K4 673, K5 1.927 und K6 180 Einträge; 35 sind ungeklärt. Diese primäre Zuweisung ist überschneidungsfrei. Die Fachgruppenübersicht im Anhang kann Mehrfachnennungen enthalten und darf nicht zur Gesamtzahl addiert werden. K3, K7, K8 und K9 werden erst nach tatsächlichem Anlass final zugewiesen.

#### Fachrichtungsspezifische Anpassungen

Den ersten thematischen Absatz oder die Beispiele passend ersetzen; keine medizinischen Aussagen ergänzen, die nicht von der jeweiligen Praxis stammen.

| Gruppe | Passende konkrete Beispiele |
|---|---|
| Pneumologie | Vorbereitungshinweise, Sprechzeiten und direkte Terminwege |
| Nephrologie / bestätigte Dialyse | Standorte, Besuchsinformationen, bei realem Angebot Gastdialyse; Teamdarstellung |
| Kardiologie / Angiologie | Unterlagen für Untersuchungen, Kontakt- und Terminwege |
| Gastroenterologie | Von der Praxis freigegebene Vorbereitungsinformationen und deren Aktualisierung |
| Onkologie / Rheumatologie / Endokrinologie | Verlässliche Kontaktinformationen und Orientierung für wiederkehrende Besuche |
| Hausarztmedizin | Schließzeiten, Vertretung und bestehende Rezept-/Terminwege |
| Kinderheilkunde | Organisatorische Informationen für Eltern; keine erfundenen Behandlungskapazitäten |
| Gynäkologie / Urologie / Dermatologie | Unterschiedliche Terminarten und Leistungen verständlich darstellen |
| Orthopädie / HNO / Augenheilkunde | Terminvorbereitung und Ansprechpartner; OP-Themen nur wenn tatsächlich angeboten |
| Neurologie | Informationen für Patienten und Angehörige, klare Erreichbarkeit |
| Psychotherapie / Psychiatrie | Erstkontakt, Kontaktzeiten und Abwesenheiten; kein pauschales Wachstumsversprechen |
| Ambulante Chirurgie / MKG / Anästhesiologie | Organisatorische Eingriffsvorbereitung, Standort- und Kontaktwege |
| Radiologie / Nuklearmedizin / Strahlentherapie | Unterlagen, Standortzuordnung und Zuweiserinformationen |
| Humangenetik / rehabilitative Medizin | Beratungs-/Besuchsvorbereitung, Leistungen und Kontaktwege |
| Labor / Pathologie / Transfusionsmedizin | Ansprechpartner für Zuweiser, Leistungen und Recruiting; direkte Patientenansprache erst prüfen |

### 5. Medien und Ablauf pro Praxis

**Erster Kontakt:** Persönlich adressierter, einseitiger Brief mit einer Situation, einem Leistungsangebot, einem glaubwürdigen Beleg und einer Handlungsaufforderung. Absender klar als Digital Avenue erkennbar. Kein amtlich wirkendes Schreiben, keine fingierte bestehende Beziehung, keine unbelegte Websitekritik. Regionaler Bezug über Hamburg/Rostock und tatsächliche Standorte; kein erfundenes örtliches Büro.

**Landingpage:** Gleiche Botschaft wie der Brief. Eine Hauptaktion „Betreuung besprechen“. Kontakt per Telefon oder Formular möglich. Der Brief muss auch ohne QR-Code verständlich funktionieren. Alle neun Textvarianten liegen vor; umgesetzt werden zunächst K1/K2/K9 auf einem gemeinsamen Template. Keine bloßen Fachrichtungs-/Stadtduplikate zur Suchmaschinenoptimierung.

**Tag 0:** Brief nach Qualifizierung und Kontrolle versenden; Kampagne, Welle und Empfänger dokumentieren.

**Tag 14–21:** Höchstens eine postalische Erinnerung, sofern kein Widerspruch, keine Rückmeldung und kein anderes laufendes Gespräch vorliegt. Bei unzustellbar erst Daten korrigieren, nicht erneut ungeprüft senden.

**Danach:** Keine weitere automatisierte Ansprache. Ohne Reaktion Kampagne beenden und Datenverwendung nach dokumentierter Aufbewahrungsregel überprüfen. Ein konkreter späterer Anlass kann eine neue Prüfung begründen.

**Bei Anfrage:** Persönliche Rückmeldung im zugesagten Servicefenster. Zuständigkeit, Systeme, abzugebende Aufgaben und gewünschter Start klären. Angebot mit separaten einmaligen und monatlichen Positionen erstellen. Nachfassen am im Gespräch vereinbarten Termin. Kein Newsletter-Abo aus der Beratungsanfrage ableiten.

**Bei Einwilligung für Marketing-E-Mail:** Die zur Hauptkampagne passende E-Mail kann statt des Briefs eingesetzt werden. Nicht zusätzlich pauschal beide Kanäle bespielen. Das Vorliegen und der Umfang der Berechtigung müssen dokumentiert sein; keine Einwilligung aus einer veröffentlichten Adresse ableiten.

**Ergänzende Suchanzeigen:** Konzeptionell auf Entscheidersuchen wie „Praxiswebsite Betreuung“, „WordPress Arztpraxis übernehmen“ oder „Placetel Praxis Betreuung“ ausrichten. Patientenanfragen wie „Lungenarzt Hamburg“ vermeiden. Suchvolumen und Klickpreise wurden nicht geprüft; Anzeigenstart und Budget sind nicht Teil dieser Lieferung.

**Empfehlungen:** Zufriedene Kunden können die Referenzseite weitergeben. Empfehlungen nicht als Zustimmung der empfohlenen Praxis zu Werbe-E-Mails behandeln.

### 6. Referenzen und Abgrenzung

Pneumologie Eppendorf ist vom Inhaber als öffentlich freigegebene Referenz benannt. Bestätigt sind Website und ergänzende Praxisgestaltung; die genauen einzelnen Printarbeiten sollten für Bildunterschriften anhand tatsächlicher Arbeitsbeispiele benannt werden. Sichtbar auf der Praxiswebsite: Doctolib-Verlinkung, Rezeptwege, Praxis-/Zuweiserinformationen und eine MFA-Stellenanzeige. Die Praxis ist hausärztlich-internistisch mit pneumologischem Schwerpunkt.

**Referenztext für die Branchenseite:** „Für Pneumologie Eppendorf verbindet Digital Avenue die Website mit einem abgestimmten Praxisauftritt. Auf der Website finden Patient*innen Termin- und Rezeptwege sowie aktuelle Informationen. Auch die Darstellung einer offenen Stelle hat dort ihren Platz. Die Zusammenarbeit umfasst persönliche laufende Betreuung.“ Keine behauptete Gründung, Zeitersparnis oder erfolgreiche Stellenbesetzung ergänzen.

Die vom Inhaber genannte 5-Sterne-Google-Bewertung wird ohne Originalprüfung nicht zitiert oder als verifizierter Screenshot verwendet. Andere Referenzen werden erst namentlich in Mailings eingesetzt, wenn die Freigabe geklärt ist; allgemein bestätigte Erfahrung mit Dialysepraxen darf sachlich erwähnt werden.

Meyer-Wagenfeld dient als Inspiration für klare Praxisansprache, verständliche Produktwahl und Gründungsanlässe. Persönliche Betreuung und Doctolib-Vermittlung allein sind kein Alleinstellungsmerkmal. Digital Avenue belegt das Angebot durch den Concierge-Ablauf, die Kombination mit betreuter Telefonie und das konkrete Rückmeldeversprechen. Eigene Gestaltung und Texte bleiben eigenständig.

### 7. HubSpot und Vertriebsprozess

Die beiden CSV-Dateien sind vorbereitete Kontaktimporte mit benutzerdefinierten Recherchefeldern. Der separate Importleitfaden beschreibt Eigenschaftsanlage, eindeutige Quellkennung, Bestandsabgleich und Testimport. Ein Import ins echte Konto wurde nicht ausgeführt. Es gibt keinen Unternehmensimport mit erfundenen Praxisnamen. Die Praxiszuordnung wird nach Recherche bestätigt und kann anschließend mit echten Organisationen verknüpft werden.

**Arbeitsstatus:** Importiert → Qualifizierung → Für eine Kampagne freigegeben → Brief/E-Mail im berechtigten Kanal versendet → Rückmeldung → Gespräch → Angebot → Gewonnen/Verloren. Ein „Deal“ wird erst bei konkreter Gelegenheit angelegt, nicht für jeden Listeneintrag. Das System kann mit gespeicherten Ansichten und Aufgaben funktionieren; kostenpflichtige Automationen werden nicht vorausgesetzt.

**Deal-Daten:** Praxis, Entscheider, Bedarf, Kampagne, einmaliger Projektwert, monatliche Betreuung, gewünschter Start, nächster Schritt, Verantwortlicher. Die CRM-Eigenschaft „Betrag“ braucht eine einheitliche Definition; einmalige und monatliche Werte nicht ohne klare Laufzeit zusammenrechnen.

**Sperren:** Bestandskunde für Neukundenkampagne, Werbewiderspruch, fehlende Berechtigung für E-Mail, unzustellbar, bereits aktives Gespräch, falsche Zuständigkeit. Sperren wirken vor jeder Kontaktaufnahme und werden durch Reimport nicht zurückgesetzt. Die Quellfelder überschreiben keine bestehenden Einwilligungen.

### 8. Arbeitsplan und Verantwortlichkeiten

| Phase | Ergebnis | Verantwortung |
|---|---|---|
| Vorbereitung | Importfelder, Bestandsabgleich, Praxisqualifizierung und erste Liste | Nils: Entscheidung; freie Mitarbeitende: Recherche/CRM |
| Produktion | K1/K2/K9-Landingpages, Referenzdarstellung, Briefsatz und Versandprüfung | Nils: Text-/Leistungsfreigabe; freie Mitarbeitende: Gestaltung/Umsetzung |
| Erste Welle | Kleine vollständig geprüfte Teilmengen je Einstieg und Region | Nils: Auswahl; freie Mitarbeitende: Versandvorbereitung |
| Bearbeitung | Rückmeldungen, Gespräche und getrennte Angebote | Nils, mit bestätigter Vertretung |
| Auswertung | Erkenntnisse zu Bedarf, Einwänden und Betreuungsabschluss | Nils; wöchentliche kurze CRM-Auswertung |
| Erweiterung | K4/K5, anlassbezogen K7/K8; K6 gesondert | Auf Basis der Rückmeldungen und verfügbaren qualifizierten Praxen |

Die erste Welle dient dem Lernen. Als Arbeitsgröße können 20–30 bestätigte Praxen je Einstieg genutzt werden, soweit vorhanden; das ist keine vorgeschriebene Versandmenge. Kleinere Referenzsegmente vollständig sorgfältig qualifizieren, statt für vermeintliche Teststärke ungeeignete Kontakte hinzuzunehmen. Budgetfragen werden nicht erneut eröffnet.

### 9. Messung und Entscheidungen

| Kennzahl | Definition / Zweck |
|---|---|
| Zustellbare Praxen | Versandte Praxisempfänger minus Rückläufer; Personenanzahl nicht als Praxisanzahl ausgeben |
| Rückmeldequote | Eindeutige antwortende Praxen / zustellbare angeschriebene Praxen |
| Gesprächsquote | Geführte qualifizierte Gespräche / zustellbare angeschriebene Praxen |
| Angebotsquote | Angebote / geführte qualifizierte Gespräche |
| Abschlussquote | Gewonnene Betreuungsverträge / Angebote; Nenner immer mit angeben |
| Monatlicher Neuum­satz | Summe der neu vereinbarten monatlichen Netto-Betreuungspreise |
| Projektumsatz | Einmalige Aufträge separat, nicht als monatlichen Umsatz zählen |
| Betreuungsaufwand | Tatsächliche Minuten je Praxis/Monat; eigene und externe Arbeit sichtbar |
| Servicequalität | Anteil Anfragen mit persönlicher Rückmeldung innerhalb des vereinbarten Servicefensters |

Je Kampagne, Region und Welle auswerten. QR-/Kurzlinks tragen nur Kampagnenkennungen, beispielsweise `utm_source=brief&utm_medium=post&utm_campaign=da_k2_hh_w1`. Keine Namen, E-Mail-Adressen oder individuellen Arztkennungen in URLs. Technische Messung nur mit den jeweils erforderlichen Informationen/Einwilligungen. Beratungs- und Abschlussdaten aus dem CRM sind die maßgebliche Grundlage; Öffnungsraten allein steuern keine Entscheidung.

Nach jeder Welle: bei vielen Rückläufern zuerst Adressen korrigieren; bei falschen Ansprechpartnern Organisationen klären; bei Interesse ohne Gespräch CTA/Zugang vereinfachen; bei Gesprächen ohne Angebot Bedarfspassung prüfen; bei Angeboten ohne Abschluss Einwände und Leistungsumfang auswerten. Kleine Stichproben liefern Hinweise, keine statistisch gesicherten Gewinner.

### 10. Grenzen und Voraussetzungen für die Ausführung

Konzept, Texte und Importdateien sind erstellt. Nicht ausgeführt sind Import ins Kundenkonto, Einzelprüfung sämtlicher Websites, Veröffentlichung von Landingpages, Druck, Versand oder Anzeigenbuchung. Das gehört zur Umsetzung und wird nicht als bereits erledigt dargestellt.

Vor Aussendung müssen die noch variablen Felder in den Texten ersetzt werden: erreichbarer Kampagnenlink, vollständige Geschäftsbriefangaben und passende Datenschutzinformation zur Rechercheansprache. Die öffentliche Website bestätigt Telefon +49 (40) 41343870 und post@digital-avenue.de; die extern eingebundenen vollständigen Impressumsangaben waren beim Abruf nicht verfügbar und werden nicht geraten.

Postalische Werbung setzt eine passende datenschutzrechtliche Grundlage, transparente Information und Beachtung von Widersprüchen voraus. E-Mail-Werbung unterliegt zusätzlich den Voraussetzungen des § 7 UWG. Die rechtlichen Hinweise der ursprünglichen Adresslisten sind keine pauschale Versandfreigabe. Die Ausführung muss diese Anforderungen und vorhandene Kontaktsperren konkret berücksichtigen.

### Quellen

- Eigene Bestände: die fünf Adressdateien im Projektordner; beide CSV-Listen als vollständige Zeilenbasis, Hamburger CRM-Excel-Datei für Namensbestandteile. Erhebungsstand laut Übersichtsblättern: 11.07.2026.
- Unternehmensleistungen und Referenzfreigabe: Angaben von Nils Rudolph in diesem Projekt.
- Referenzfunktionen: https://pneumologie-eppendorf.de/ (abgerufen 13.09.2026).
- Inspiration: https://www.meyer-wagenfeld.de/ und https://www.meyer-wagenfeld.de/praxishomepage .
- Unternehmenskontakt: https://digital-avenue.de/legal/impressum/ .
- HubSpot: https://knowledge.hubspot.com/import-and-export/set-up-your-import-file und https://knowledge.hubspot.com/import-and-export/understand-the-import-tool .
- E-Mail-Werbung: https://www.gesetze-im-internet.de/uwg_2004/__7.html .
- Datenschutz und Direktwerbung: https://www.datenschutzkonferenz-online.de/media/oh/OH-Werbung_Februar%202022_final.pdf .

### Anhang: Fachrichtungen und regionale Bestände

Die nachfolgende Tabelle zählt Quelleinträge je Fachgruppe. Mehrfachzuordnungen sind möglich. Prioritäten und Bedarfe sind Arbeitshypothesen, keine geprüften individuellen Kaufabsichten. Insbesondere Nephrologie belegt nicht automatisch ein Dialyseangebot.

| Fachrichtung | Hamburg | Rostock inkl. Landkreis | Priorität | Kampagne | Möglicher Einstieg |
|---|---:|---:|---|---|---|
| Pneumologie | 21 | 3 | A | K1 | Untersuchungsvorbereitung, Kontaktwege, laufende Patienteninformationen |
| Nephrologie / mögliche Dialyseanbieter | 28 | 5 | A | K1 | Standortinformationen, Gastdialyse nur bei bestätigtem Angebot, Recruiting |
| Kardiologie | 58 | 10 | A | K1 | Vorbereitung, Terminwege, Informationen für wiederkehrende Besuche |
| Gastroenterologie | 25 | 5 | A | K1 | Von der Praxis freigegebene Untersuchungsinformationen und Terminwege |
| Hämatologie / Onkologie | 28 | 4 | A | K1 | Klare Kontaktwege, Team- und Standortinformationen, Recruiting |
| Rheumatologie | 14 | 3 | A | K1 | Ablaufinformationen, Erreichbarkeit, wiederkehrende Informationspflege |
| Angiologie | 5 | 3 | A | K1 | Leistungsübersicht, Vorbereitung, Kontaktwege |
| Endokrinologie / Diabetologie | 1 | 0 | A | K1 | Versorgungsangebote, Vorbereitung und laufende Informationspflege |
| Innere Medizin ohne ausgewiesenen Schwerpunkt | 703 | 48 | A | K1/K2 | Haus- oder fachärztliche Versorgung zunächst klären |
| Hausarztmedizin / praktische Ärzte | 823 | 322 | A | K2 | Öffnungs- und Schließzeiten, Vertretung, Termin- und Rezeptwege |
| Kinder- und Jugendmedizin | 234 | 47 | A | K2 | Elterninformationen, Besuchsvorbereitung und Kontaktwege |
| Gynäkologie | 416 | 62 | A | K2/K3 | Terminarten und Leistungen verständlich erklären; Wachstum nur bei Bedarf |
| Orthopädie / Unfallchirurgie | 247 | 49 | A | K2/K3 | Patientenwege, Terminarten, Teamdarstellung und Recruiting |
| HNO / Phoniatrie / Pädaudiologie | 149 | 31 | A | K2 | Untersuchungsinformationen, Terminwege, Erreichbarkeit |
| Urologie | 93 | 19 | A | K2/K3 | Leistungs- und Vorsorgeinformationen, Kontaktwege |
| Augenheilkunde | 213 | 38 | A | K2/K3 | Untersuchungs- und OP-Vorbereitung, Standort- und Terminführung |
| Dermatologie | 145 | 22 | A | K2/K3 | Versorgungsangebote und Terminarten; Auffindbarkeit nach Praxisziel |
| Chirurgie einschließlich Kinder-, Gefäß-, Herz- und Viszeralchirurgie | 100 | 21 | B | K4 | Ambulante Tätigkeit prüfen; Eingriffsvorbereitung und Nachsorgeinformationen |
| Mund-Kiefer-Gesichtschirurgie | 70 | 9 | B | K4/K3 | Patienten- und Zuweiserinformationen, Eingriffsvorbereitung |
| Neurochirurgie | 26 | 5 | B | K4 | Ambulante Sprechstunden, Zuweiserwege, Behandlungsvorbereitung |
| Plastische / ästhetische Chirurgie | 14 | 1 | B | K3/K4 | Beratungsanfragen und Leistungen, Auffindbarkeit nach tatsächlichem Angebot |
| Anästhesiologie | 120 | 25 | B | K4 | Eigene Patientenwege, OP-Kooperationen und Vorbereitungsinformationen prüfen |
| Physikalische / rehabilitative Medizin | 29 | 5 | B | K2 | Leistungsübersicht, Vorbereitung, Terminwege |
| Neurologie / Nervenheilkunde | 150 | 22 | A | K2 | Patienten- und Angehörigeninformationen, Kontaktwege, Recruiting |
| Psychiatrie einschließlich Kinder- und Jugendpsychiatrie | 167 | 24 | B | K5 | Erstkontakt und Sprechzeiten strukturieren, Kapazitäten klar kommunizieren |
| Psychotherapie / Psychosomatik | 1751 | 192 | B | K5 | Erstkontakt, Anfragen und Abwesenheit klar regeln; kleine Pakete prüfen |
| Radiologie | 144 | 20 | B | K4 | Untersuchungsvorbereitung, Standortführung, Zuweiser und Recruiting |
| Nuklearmedizin | 34 | 10 | B | K4 | Untersuchungsvorbereitung, Kontaktwege und Zuweiserinformationen |
| Strahlentherapie | 40 | 14 | B | K4 | Ablaufinformationen und Erreichbarkeit; Trägerstruktur prüfen |
| Humangenetik | 23 | 3 | B | K4 | Ambulante Beratung und Vorbereitung prüfen, Terminwege erläutern |
| Labor / Mikrobiologie / Transfusionsmedizin | 87 | 13 | C | K6 | Direkten Patientenkontakt prüfen; sonst Zuweiserkommunikation und Recruiting |
| Pathologie / Neuropathologie | 71 | 10 | C | K6 | Zuweiserkommunikation und Recruiting statt allgemeiner Patientenakquise |

Ungeklärt: 35 Datensätze. Davon leere Fachrichtung: 35. Nichtleere, nicht zugeordnete Angaben: [].


---

# Kampagne: Mailingtexte

Quelle: `handoff/kampagne/02_Mailingtexte.md`

## Mailingtexte für Digital Avenue

Stand 13.09.2026. Neun Kampagnen, jeweils Brief und E-Mail. Dazu zwei allgemeine Nachfassvorlagen und zwei Telefonievarianten. Sie-Ansprache, persönlich und sachlich; keine erfundenen Mängel, Erfolge oder Kundenzitate. Texte sind fertig ausgearbeitet, Kontakt- und Produktionsfelder müssen vor Versand ersetzt werden.

### Verwendung

- Briefe: erst nach Prüfung der Praxis, Anschrift, Zuständigkeit und postalischen Werbevoraussetzungen. Ein Brief pro bestätigter Praxis je Welle. Adresse aus dem geprüften CRM-Datensatz; Anrede neutral „Guten Tag,“.
- E-Mails: nur mit dokumentierter geeigneter Berechtigung. Die Adresslisten liefern keine Einwilligung. Kein automatischer E-Mail-Nachversand an Briefempfänger. Individuelle Angebotsantworten auf eine Anfrage zweckbezogen senden.
- Eckige Klammern sind Produktionsfelder, keine Tatsachenbehauptungen. [Kampagnenlink] wird erst nach Veröffentlichung ersetzt. +49 (40) 41343870, post@digital-avenue.de, [Postanschrift], [Datenschutzlink] und die vollständigen UG-Pflichtangaben aus bestätigten Unternehmensdaten einsetzen. Die bloße Kenntnis der Domain reicht dafür nicht.
- Die Google-Bewertung wurde mit fünf Sternen vom Inhaber bestätigt, aber nicht unabhängig aufgefunden und nicht wörtlich übermittelt. Deshalb enthalten die Mailings weder Sterne noch ein erfundenes Zitat. Die öffentliche Referenznutzung von Pneumologie Eppendorf ist laut Inhaber freigegeben.
- Die erste Rückmeldung innerhalb einer Stunde ist keine Zusage vollständiger Umsetzung. Servicezeit Mo–Fr 08–18 Uhr; Feiertage werden für die Entwürfe ausgenommen und sind vertraglich entsprechend festzulegen.

### Gemeinsame Absender- und Datenschutzbausteine

**Briefabschluss:** Nils Rudolph · Digital Avenue UG (haftungsbeschränkt) · [Postanschrift] · +49 (40) 41343870 · post@digital-avenue.de · digital-avenue.de. Ergänzen: [vollständige Geschäftsbrief-Pflichtangaben].

**Postalischer Transparenzhinweis:** „Ihre beruflichen Kontaktdaten stammen aus dem öffentlich zugänglichen Verzeichnis [KV Hamburg / KVMV], Datenstand 11.07.2026. Wir verwenden sie, um Ihnen unsere Leistungen für Praxen vorzustellen. Wenn Sie keine weiteren Angebote wünschen, genügt eine Nachricht an post@digital-avenue.de oder [Postanschrift]. Informationen zur Datenverarbeitung und Ihren Rechten: [Datenschutzlink].“ Der verlinkte Hinweis muss die erforderlichen Informationen zur Verarbeitung recherchierter Kontaktdaten enthalten; dieser Kurztext allein ersetzt sie nicht. Verantwortliche, konkrete Rechtsgrundlage, Interessenabwägung, Löschfrist und Betroffenenrechte vor Versand dokumentieren.

**E-Mail-Abschluss:** Nils Rudolph · Digital Avenue UG (haftungsbeschränkt) · +49 (40) 41343870 · post@digital-avenue.de · [Postanschrift] · [vollständige Geschäftsbrief-Pflichtangaben]. „Sie möchten keine weiteren Marketing-E-Mails erhalten? [Abmeldelink]. Datenschutz: [Datenschutzlink].“ Berechtigung und Abmeldung im CRM führen.

Die Bausteine gehören in jedes versandte Dokument. Vor einer Anfrage-Antwort keine Newslettereinwilligung voraussetzen oder behaupten.


### K1 – Facharztpraxis entlasten

Zielgruppe: Pneumologie, Nephrologie und weitere internistische Fachrichtungen; tatsächliches Versorgungsmodell prüfen.

#### Brief

**Ihre Praxisinformationen. Persönlich betreut.**

Guten Tag,

Vor einem Termin kommen oft dieselben organisatorischen Fragen: Was muss ich mitbringen? Wo melde ich mich? Wie erreiche ich die Praxis? Gut auffindbare Informationen können Ihrem Team wiederholte Erklärungen abnehmen.

Wir bauen oder übernehmen Ihre Praxiswebsite, pflegen Ihre Informationen und stimmen die Kontaktwege mit Ihnen ab. Wenn gewünscht, betreuen wir auch Ihre Placetel-Telefonanlage. Doctolib vermitteln wir und binden die gebuchte Lösung anschließend in Ihre Website und gegebenenfalls Telefonanlage ein.

Sie geben die fachlichen Inhalte frei. Wir kümmern uns um Darstellung, Aktualisierung und vereinbarte Folgeschritte. Melden Sie beispielsweise Ihren Urlaub, entfernen wir den Hinweis zum vereinbarten Zeitpunkt auch wieder.

Mit Pneumologie Eppendorf betreuen wir bereits eine internistische Hausarztpraxis mit pneumologischem Schwerpunkt. Als Agentur aus Hamburg und Rostock sind wir persönlich für Sie da. Während unserer Servicezeiten erhalten Sie innerhalb einer Stunde eine persönliche Rückmeldung: montags bis freitags, 08:00–18:00 Uhr, ausgenommen gesetzliche Feiertage.

Lassen Sie uns in einem kurzen Gespräch ansehen, welche wiederkehrenden Informationen und Kontaktwege wir für Ihre Praxis betreuen können. Sie erreichen mich unter +49 (40) 41343870 oder finden weitere Informationen unter [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen Briefabschluss und postalischen Transparenzhinweis einsetzen.]

#### E-Mail – nur bei zulässiger Kontaktberechtigung

**Betreff:** Ihre Praxisinformationen. Persönlich betreut.

**Vorschautext:** Website, digitale Terminwege und Telefonie mit persönlicher Betreuung für internistische und andere Facharztpraxen.

Guten Tag,

Vor einem Termin kommen oft dieselben organisatorischen Fragen: Was muss ich mitbringen? Wo melde ich mich? Wie erreiche ich die Praxis? Gut auffindbare Informationen können Ihrem Team wiederholte Erklärungen abnehmen.

Wir bauen oder übernehmen Ihre Praxiswebsite, pflegen Ihre Informationen und stimmen die Kontaktwege mit Ihnen ab. Wenn gewünscht, betreuen wir auch Ihre Placetel-Telefonanlage. Doctolib vermitteln wir und binden die gebuchte Lösung anschließend in Ihre Website und gegebenenfalls Telefonanlage ein.

Lassen Sie uns in einem kurzen Gespräch ansehen, welche wiederkehrenden Informationen und Kontaktwege wir für Ihre Praxis betreuen können. Antworten Sie mir gern auf diese E-Mail oder vereinbaren Sie ein Gespräch über [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen E-Mail-Abschluss einsetzen.]


### K2 – Empfang entlasten

Zielgruppe: Hausarztmedizin, Kinderheilkunde, Gynäkologie, HNO, Urologie, Orthopädie, Augenheilkunde, Dermatologie, Neurologie und rehabilitative Medizin.

#### Brief

**Eine Urlaubsinfo. Die weiteren Schritte übernehmen wir.**

Guten Tag,

Der Praxisurlaub steht fest. Nun müssen der Hinweis auf der Website, die Öffnungszeiten bei Google und die Telefonansage angepasst werden. Nach dem Urlaub soll wieder alles stimmen. Solche Aufgaben kosten im Praxisalltag Aufmerksamkeit.

Digital Avenue übernimmt die vereinbarte Pflege Ihrer Website, Ihres Google-Business-Profils und Ihrer Placetel-Telefonanlage. Sie teilen uns die Änderung mit. Wir setzen sie an den vereinbarten Stellen um und kümmern uns auch um die spätere Rücknahme.

Auch Terminwege und häufige organisatorische Fragen bringen wir auf Ihrer Website an einen gut auffindbaren Platz. Eine vorhandene WordPress-Website können wir nach technischer Prüfung in Betreuung nehmen.

Pneumologie Eppendorf gehört bereits zu unseren Praxiskunden. Als Agentur aus Hamburg und Rostock sind wir persönlich für Sie da. Während unserer Servicezeiten erhalten Sie innerhalb einer Stunde eine persönliche Rückmeldung: montags bis freitags, 08:00–18:00 Uhr, ausgenommen gesetzliche Feiertage.

Besprechen wir kurz, welche wiederkehrenden Aufgaben wir Ihrem Team abnehmen können. Sie erreichen mich unter +49 (40) 41343870 oder finden weitere Informationen unter [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen Briefabschluss und postalischen Transparenzhinweis einsetzen.]

#### E-Mail – nur bei zulässiger Kontaktberechtigung

**Betreff:** Eine Urlaubsinfo. Die weiteren Schritte übernehmen wir.

**Vorschautext:** Laufende Pflege von Website, Google Business und Telefonie für Ihren Praxisalltag.

Guten Tag,

Der Praxisurlaub steht fest. Nun müssen der Hinweis auf der Website, die Öffnungszeiten bei Google und die Telefonansage angepasst werden. Nach dem Urlaub soll wieder alles stimmen. Solche Aufgaben kosten im Praxisalltag Aufmerksamkeit.

Digital Avenue übernimmt die vereinbarte Pflege Ihrer Website, Ihres Google-Business-Profils und Ihrer Placetel-Telefonanlage. Sie teilen uns die Änderung mit. Wir setzen sie an den vereinbarten Stellen um und kümmern uns auch um die spätere Rücknahme.

Besprechen wir kurz, welche wiederkehrenden Aufgaben wir Ihrem Team abnehmen können. Antworten Sie mir gern auf diese E-Mail oder vereinbaren Sie ein Gespräch über [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen E-Mail-Abschluss einsetzen.]


### K3 – Passend gefunden werden

Zielgruppe: Alle Fachrichtungen mit bestätigtem Wachstumsziel, neuer Leistung oder neuem Standort.

#### Brief

**Ihre Leistungen sollen dort sichtbar sein, wo sie gesucht werden.**

Guten Tag,

Eine neue Leistung oder ein neuer Standort verdient eine verständliche Darstellung. Interessierte sollten schnell erkennen, was Ihre Praxis anbietet und wie sie den passenden Kontakt aufnehmen können.

Wir strukturieren Ihre Leistungsseiten, betreuen Ihr Google-Business-Profil und verbessern die Auffindbarkeit Ihrer Praxis. Wenn gezielte Werbung zu Ihrem Ziel passt, planen und betreuen wir ergänzend Google Ads mit separat vereinbartem Werbebudget.

Am Anfang steht Ihr Ziel: Welche Leistungen möchten Sie bekannter machen, und welche Anfragen passen zu Ihrer Praxis? Daraus leiten wir die Inhalte und Maßnahmen ab. Die laufende Websitepflege übernehmen wir auf Wunsch gleich mit.

Unsere Erfahrung mit Praxiswebsites fließt in die verständliche Darstellung Ihrer Leistungen ein. Als Agentur aus Hamburg und Rostock sind wir persönlich für Sie da. Während unserer Servicezeiten erhalten Sie innerhalb einer Stunde eine persönliche Rückmeldung: montags bis freitags, 08:00–18:00 Uhr, ausgenommen gesetzliche Feiertage.

Lassen Sie uns über die Leistung oder den Standort sprechen, den Sie sichtbarer machen möchten. Sie erreichen mich unter +49 (40) 41343870 oder finden weitere Informationen unter [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen Briefabschluss und postalischen Transparenzhinweis einsetzen.]

#### E-Mail – nur bei zulässiger Kontaktberechtigung

**Betreff:** Ihre Leistungen sollen dort sichtbar sein, wo sie gesucht werden.

**Vorschautext:** Leistungsseiten, Google Business und Suchmarketing passend zu Ihren tatsächlichen Praxiszielen.

Guten Tag,

Eine neue Leistung oder ein neuer Standort verdient eine verständliche Darstellung. Interessierte sollten schnell erkennen, was Ihre Praxis anbietet und wie sie den passenden Kontakt aufnehmen können.

Wir strukturieren Ihre Leistungsseiten, betreuen Ihr Google-Business-Profil und verbessern die Auffindbarkeit Ihrer Praxis. Wenn gezielte Werbung zu Ihrem Ziel passt, planen und betreuen wir ergänzend Google Ads mit separat vereinbartem Werbebudget.

Lassen Sie uns über die Leistung oder den Standort sprechen, den Sie sichtbarer machen möchten. Antworten Sie mir gern auf diese E-Mail oder vereinbaren Sie ein Gespräch über [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen E-Mail-Abschluss einsetzen.]


### K4 – Gut informiert zum Termin

Zielgruppe: Ambulante Chirurgie, MKG, Neurochirurgie, plastische Chirurgie, Anästhesiologie, Radiologie, Nuklearmedizin, Strahlentherapie und Humangenetik.

#### Brief

**Vor dem Termin schon vieles geklärt.**

Guten Tag,

Welche Unterlagen werden benötigt? Wo findet die Untersuchung statt? Welche Hinweise gelten vor dem Besuch? Wenn diese Informationen leicht zu finden sind, können sich Patient*innen besser orientieren.

Wir bringen die von Ihrer Praxis freigegebenen Informationen übersichtlich auf Ihre Website. Dazu gehören passende Kontaktwege, Standortangaben und Hinweise für Zuweiser. Die technische und inhaltliche Pflege übernehmen wir langfristig.

Bei mehreren Standorten oder unterschiedlichen Terminarten achten wir auf eine klare Zuordnung. Vorhandene Terminlösungen binden wir nach Prüfung ein. Bei Bedarf ergänzen wir die Betreuung Ihrer Telefonanlage.

Digital Avenue arbeitet bereits mit Praxen aus Pneumologie und Dialyse zusammen. Als Agentur aus Hamburg und Rostock sind wir persönlich für Sie da. Während unserer Servicezeiten erhalten Sie innerhalb einer Stunde eine persönliche Rückmeldung: montags bis freitags, 08:00–18:00 Uhr, ausgenommen gesetzliche Feiertage.

Gehen wir gemeinsam einen typischen Weg vom ersten Kontakt bis zum Termin durch und klären, wo wir Sie unterstützen können. Sie erreichen mich unter +49 (40) 41343870 oder finden weitere Informationen unter [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen Briefabschluss und postalischen Transparenzhinweis einsetzen.]

#### E-Mail – nur bei zulässiger Kontaktberechtigung

**Betreff:** Vor dem Termin schon vieles geklärt.

**Vorschautext:** Patienteninformationen, Standorte und Kontaktwege für ambulante Untersuchungen und Behandlungen.

Guten Tag,

Welche Unterlagen werden benötigt? Wo findet die Untersuchung statt? Welche Hinweise gelten vor dem Besuch? Wenn diese Informationen leicht zu finden sind, können sich Patient*innen besser orientieren.

Wir bringen die von Ihrer Praxis freigegebenen Informationen übersichtlich auf Ihre Website. Dazu gehören passende Kontaktwege, Standortangaben und Hinweise für Zuweiser. Die technische und inhaltliche Pflege übernehmen wir langfristig.

Gehen wir gemeinsam einen typischen Weg vom ersten Kontakt bis zum Termin durch und klären, wo wir Sie unterstützen können. Antworten Sie mir gern auf diese E-Mail oder vereinbaren Sie ein Gespräch über [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen E-Mail-Abschluss einsetzen.]


### K5 – Praxisbetreuung für Psychotherapie

Zielgruppe: Psychotherapie, Psychosomatik und psychiatrische Praxen; kleine Teams mit angemessenem Umfang.

#### Brief

**Ihre Website bleibt aktuell. Auch wenn Ihr Tag voll ist.**

Guten Tag,

Zwischen Behandlungen bleibt wenig Zeit, um die Website zu pflegen. Trotzdem sollen Kontaktzeiten, Erstkontaktinformationen und Abwesenheiten verlässlich stimmen.

Wir betreuen Ihre WordPress-Website technisch und inhaltlich. Sie erreichen uns per E-Mail oder Telefon und teilen uns mit, was sich ändern soll. Vereinbarte Folgeschritte, etwa die Rücknahme eines Abwesenheitshinweises, erledigen wir mit.

Gemeinsam stellen wir klar dar, wie Interessierte Kontakt aufnehmen können und welche Informationen sie vorher benötigen. Der Betreuungsumfang richtet sich nach Ihrer Praxis. Auf Wunsch prüfen wir auch Ihre Telefonie.

Als Digital Avenue betreuen wir medizinische Praxen langfristig und persönlich. Als Agentur aus Hamburg und Rostock sind wir persönlich für Sie da. Während unserer Servicezeiten erhalten Sie innerhalb einer Stunde eine persönliche Rückmeldung: montags bis freitags, 08:00–18:00 Uhr, ausgenommen gesetzliche Feiertage.

Lassen Sie uns kurz besprechen, welche Websiteaufgaben Sie künftig abgeben möchten. Sie erreichen mich unter +49 (40) 41343870 oder finden weitere Informationen unter [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen Briefabschluss und postalischen Transparenzhinweis einsetzen.]

#### E-Mail – nur bei zulässiger Kontaktberechtigung

**Betreff:** Ihre Website bleibt aktuell. Auch wenn Ihr Tag voll ist.

**Vorschautext:** Persönliche technische und inhaltliche Betreuung für psychotherapeutische und psychiatrische Praxen.

Guten Tag,

Zwischen Behandlungen bleibt wenig Zeit, um die Website zu pflegen. Trotzdem sollen Kontaktzeiten, Erstkontaktinformationen und Abwesenheiten verlässlich stimmen.

Wir betreuen Ihre WordPress-Website technisch und inhaltlich. Sie erreichen uns per E-Mail oder Telefon und teilen uns mit, was sich ändern soll. Vereinbarte Folgeschritte, etwa die Rücknahme eines Abwesenheitshinweises, erledigen wir mit.

Lassen Sie uns kurz besprechen, welche Websiteaufgaben Sie künftig abgeben möchten. Antworten Sie mir gern auf diese E-Mail oder vereinbaren Sie ein Gespräch über [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen E-Mail-Abschluss einsetzen.]


### K6 – Kommunikation für medizinische Einrichtungen

Zielgruppe: Labor, Mikrobiologie, Transfusionsmedizin, Pathologie und diagnostische Einrichtungen; separates B2B-Segment.

#### Brief

**Klare Informationen für Zuweiser, Bewerber und Ihr Team.**

Guten Tag,

Ihre Website hat mehrere Aufgaben: Ansprechpartner nennen, Leistungen erläutern und Bewerber*innen einen Eindruck Ihrer Einrichtung geben. Diese Informationen brauchen eine verlässliche laufende Pflege.

Digital Avenue baut oder übernimmt Ihre WordPress-Website und betreut Inhalte, technische Wartung und vereinbarte Aktualisierungen. Wir strukturieren Informationen nach ihren Zielgruppen und stimmen die Zuständigkeiten mit Ihnen ab.

Bei Bedarf ergänzen wir Karriereseiten, Google Business und die Betreuung Ihrer Cloud-Telefonie. In einem ersten Gespräch klären wir, welche Bereiche Ihre Einrichtung selbst beauftragen kann und wo weitere Verantwortliche eingebunden werden müssen.

Unsere Betreuung verbindet Web, Inhalte und Kommunikation in einer festen Zusammenarbeit. Als Agentur aus Hamburg und Rostock sind wir persönlich für Sie da. Während unserer Servicezeiten erhalten Sie innerhalb einer Stunde eine persönliche Rückmeldung: montags bis freitags, 08:00–18:00 Uhr, ausgenommen gesetzliche Feiertage.

Besprechen wir, welche Kommunikationsaufgaben Sie dauerhaft an einen festen Ansprechpartner abgeben möchten. Sie erreichen mich unter +49 (40) 41343870 oder finden weitere Informationen unter [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen Briefabschluss und postalischen Transparenzhinweis einsetzen.]

#### E-Mail – nur bei zulässiger Kontaktberechtigung

**Betreff:** Klare Informationen für Zuweiser, Bewerber und Ihr Team.

**Vorschautext:** Websitepflege, Ansprechpartner und Arbeitgeberdarstellung für medizinische Einrichtungen.

Guten Tag,

Ihre Website hat mehrere Aufgaben: Ansprechpartner nennen, Leistungen erläutern und Bewerber*innen einen Eindruck Ihrer Einrichtung geben. Diese Informationen brauchen eine verlässliche laufende Pflege.

Digital Avenue baut oder übernimmt Ihre WordPress-Website und betreut Inhalte, technische Wartung und vereinbarte Aktualisierungen. Wir strukturieren Informationen nach ihren Zielgruppen und stimmen die Zuständigkeiten mit Ihnen ab.

Besprechen wir, welche Kommunikationsaufgaben Sie dauerhaft an einen festen Ansprechpartner abgeben möchten. Antworten Sie mir gern auf diese E-Mail oder vereinbaren Sie ein Gespräch über [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen E-Mail-Abschluss einsetzen.]


### K7 – Praxisstart und Übernahme

Zielgruppe: Alle ambulanten Fachrichtungen mit verifizierter Gründung, Übernahme, Umzug oder Modernisierung.

#### Brief

**Ihr Praxisauftritt. Von Anfang an abgestimmt.**

Guten Tag,

Bei einer Gründung, Übernahme oder Modernisierung kommen viele Aufgaben zusammen: Logo, Praxisschild, Drucksachen, Website und Telefonie sollen rechtzeitig bereitstehen und zusammenpassen.

Digital Avenue begleitet Ihren Praxisauftritt von der Gestaltung bis zur digitalen Umsetzung. Wir entwickeln oder übernehmen Ihre Website, gestalten die vereinbarten Praxismaterialien und richten Ihre Placetel-Telefonie nach Bedarf ein.

Doctolib vermitteln wir und binden es nach Abschluss in die Website sowie, wenn gebucht, in die Telefonanlage ein. Anschließend betreuen wir die vereinbarten digitalen Leistungen langfristig. Einmalige Projekte, Produktion und laufende Betreuung weisen wir getrennt aus.

Für Pneumologie Eppendorf haben wir neben der Website auch Leistungen rund um den Praxisauftritt umgesetzt. Als Agentur aus Hamburg und Rostock sind wir persönlich für Sie da. Während unserer Servicezeiten erhalten Sie innerhalb einer Stunde eine persönliche Rückmeldung: montags bis freitags, 08:00–18:00 Uhr, ausgenommen gesetzliche Feiertage.

Lassen Sie uns Ihren Zeitplan und die benötigten Bausteine gemeinsam ordnen. Sie erreichen mich unter +49 (40) 41343870 oder finden weitere Informationen unter [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen Briefabschluss und postalischen Transparenzhinweis einsetzen.]

#### E-Mail – nur bei zulässiger Kontaktberechtigung

**Betreff:** Ihr Praxisauftritt. Von Anfang an abgestimmt.

**Vorschautext:** Gestaltung, Website und Telefonie für Praxisgründung, Übernahme und Modernisierung – anschließend persönlich betreut.

Guten Tag,

Bei einer Gründung, Übernahme oder Modernisierung kommen viele Aufgaben zusammen: Logo, Praxisschild, Drucksachen, Website und Telefonie sollen rechtzeitig bereitstehen und zusammenpassen.

Digital Avenue begleitet Ihren Praxisauftritt von der Gestaltung bis zur digitalen Umsetzung. Wir entwickeln oder übernehmen Ihre Website, gestalten die vereinbarten Praxismaterialien und richten Ihre Placetel-Telefonie nach Bedarf ein.

Lassen Sie uns Ihren Zeitplan und die benötigten Bausteine gemeinsam ordnen. Antworten Sie mir gern auf diese E-Mail oder vereinbaren Sie ein Gespräch über [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen E-Mail-Abschluss einsetzen.]


### K8 – Recruiting unterstützen

Zielgruppe: Fachrichtungsübergreifend bei bestätigter offener Stelle oder Personalplanung.

#### Brief

**Zeigen Sie, warum es sich lohnt, in Ihrer Praxis zu arbeiten.**

Guten Tag,

Wer sich für eine Stelle interessiert, möchte mehr als eine Aufgabenliste sehen: Wie arbeitet das Team? Welche Zeiten gelten? Was macht den Arbeitsplatz aus? Ihre Website kann diese Fragen beantworten.

Wir gestalten und betreuen Ihre Karriereseite, bringen Stellenangebote verständlich auf den Punkt und sorgen für einen einfachen Bewerbungsweg. Auf Wunsch ergänzen wir passende Druckmaterialien oder eine gesondert geplante Anzeigenkampagne.

Sie liefern die tatsächlichen Rahmenbedingungen und geben die Inhalte frei. Wir kümmern uns um Darstellung und Pflege – einschließlich der Aktualisierung oder Entfernung, wenn eine Stelle besetzt ist.

Auf der Website unseres Referenzkunden Pneumologie Eppendorf ist auch ein Stellenangebot eingebunden. Als Agentur aus Hamburg und Rostock sind wir persönlich für Sie da. Während unserer Servicezeiten erhalten Sie innerhalb einer Stunde eine persönliche Rückmeldung: montags bis freitags, 08:00–18:00 Uhr, ausgenommen gesetzliche Feiertage.

Lassen Sie uns ansehen, wie Sie Ihre offene Stelle und Ihre Praxis als Arbeitsplatz präsentieren möchten. Sie erreichen mich unter +49 (40) 41343870 oder finden weitere Informationen unter [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen Briefabschluss und postalischen Transparenzhinweis einsetzen.]

#### E-Mail – nur bei zulässiger Kontaktberechtigung

**Betreff:** Zeigen Sie, warum es sich lohnt, in Ihrer Praxis zu arbeiten.

**Vorschautext:** Karriereseiten, Stellenanzeigen und Bewerbungswege, die wir mit Ihnen entwickeln und aktuell halten.

Guten Tag,

Wer sich für eine Stelle interessiert, möchte mehr als eine Aufgabenliste sehen: Wie arbeitet das Team? Welche Zeiten gelten? Was macht den Arbeitsplatz aus? Ihre Website kann diese Fragen beantworten.

Wir gestalten und betreuen Ihre Karriereseite, bringen Stellenangebote verständlich auf den Punkt und sorgen für einen einfachen Bewerbungsweg. Auf Wunsch ergänzen wir passende Druckmaterialien oder eine gesondert geplante Anzeigenkampagne.

Lassen Sie uns ansehen, wie Sie Ihre offene Stelle und Ihre Praxis als Arbeitsplatz präsentieren möchten. Antworten Sie mir gern auf diese E-Mail oder vereinbaren Sie ein Gespräch über [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen E-Mail-Abschluss einsetzen.]


### K9 – Betreuung wechseln – Website und Telefonie

Zielgruppe: Alle passenden Praxen/MVZ bei bestätigtem Wechselwunsch; alternativ allgemeine Einladung ohne Mangelbehauptung.

#### Brief

**Ihre Website kann bleiben. Wir kümmern uns um die Betreuung.**

Guten Tag,

Sie möchten Website- oder Telefonieaufgaben abgeben und dabei einen festen Ansprechpartner haben? Dafür muss nicht automatisch alles neu aufgebaut werden.

Wir prüfen Ihre bestehende WordPress-Website und übernehmen sie bei technischer Eignung in die laufende Betreuung. Bei einer vorhandenen Placetel-Anlage klären wir ebenso, welche Aufgaben wir übernehmen können. Einen notwendigen Neuaufbau oder Systemwechsel bieten wir gesondert an.

Änderungswünsche erreichen uns per E-Mail oder Telefon. Wir setzen die vereinbarten Aufgaben um und denken an Folgeschritte. Ihr Hostingvertrag kann dabei direkt bei Ihnen bleiben; bei IONOS betreuen wir die Technik über den freigegebenen Agenturzugriff.

Langfristige persönliche Betreuung ist bereits die Grundlage unserer Zusammenarbeit mit medizinischen Praxen. Als Agentur aus Hamburg und Rostock sind wir persönlich für Sie da. Während unserer Servicezeiten erhalten Sie innerhalb einer Stunde eine persönliche Rückmeldung: montags bis freitags, 08:00–18:00 Uhr, ausgenommen gesetzliche Feiertage.

Besprechen wir kurz, welche Systeme Sie einsetzen und welche Betreuung Sie sich wünschen. Sie erreichen mich unter +49 (40) 41343870 oder finden weitere Informationen unter [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen Briefabschluss und postalischen Transparenzhinweis einsetzen.]

#### E-Mail – nur bei zulässiger Kontaktberechtigung

**Betreff:** Ihre Website kann bleiben. Wir kümmern uns um die Betreuung.

**Vorschautext:** Bestehende Website oder Placetel-Telefonie prüfen, Betreuung übernehmen und Änderungen zuverlässig erledigen.

Guten Tag,

Sie möchten Website- oder Telefonieaufgaben abgeben und dabei einen festen Ansprechpartner haben? Dafür muss nicht automatisch alles neu aufgebaut werden.

Wir prüfen Ihre bestehende WordPress-Website und übernehmen sie bei technischer Eignung in die laufende Betreuung. Bei einer vorhandenen Placetel-Anlage klären wir ebenso, welche Aufgaben wir übernehmen können. Einen notwendigen Neuaufbau oder Systemwechsel bieten wir gesondert an.

Besprechen wir kurz, welche Systeme Sie einsetzen und welche Betreuung Sie sich wünschen. Antworten Sie mir gern auf diese E-Mail oder vereinbaren Sie ein Gespräch über [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen E-Mail-Abschluss einsetzen.]


### Telefonievariante für K2/K9 – Brief

**Ihre Praxistelefonie braucht einen Ansprechpartner.**

Guten Tag,

Eine Ansage ändern, Schließzeiten hinterlegen oder eine Weiterleitung anpassen: Auch kleine Aufgaben an der Telefonanlage müssen zuverlässig erledigt werden.

Digital Avenue richtet Placetel-Cloud-Telefonanlagen ein und betreut sie langfristig. Nutzen Sie bereits Placetel, prüfen wir die Übernahme der Betreuung. Bei einem anderen System klären wir zunächst, ob ein Wechsel für Ihre Praxis sinnvoll ist.

Wir stimmen die vereinbarten Telefoninformationen mit Ihrer Website und Ihrem Google-Business-Profil ab. Vermitteln wir Ihnen Doctolib, binden wir die gebuchte Lösung nach Abschluss in Ihre Website und gegebenenfalls Telefonanlage ein. Die konkrete Umsetzung und laufende Betreuung beschreiben wir im Angebot.

Sie haben einen festen Ansprechpartner. Auf Ihr Anliegen erhalten Sie während unserer Servicezeiten innerhalb einer Stunde eine persönliche Rückmeldung: Montag bis Freitag, 08:00–18:00 Uhr, ausgenommen gesetzliche Feiertage.

Lassen Sie uns kurz besprechen, welche Telefonanlage Sie nutzen und welche Aufgaben wir Ihnen abnehmen können. Sie erreichen mich unter +49 (40) 41343870 oder über [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen Briefabschluss und postalischen Transparenzhinweis einsetzen.]

### Telefonievariante – E-Mail bei zulässiger Kontaktberechtigung

**Betreff:** Persönliche Betreuung für Ihre Praxistelefonie

**Vorschautext:** Ansagen, Schließzeiten und Weiterleitungen zuverlässig betreuen lassen.

Guten Tag,

wenn sich Sprechzeiten oder Zuständigkeiten ändern, soll auch die Telefonanlage richtig reagieren. Wir richten Placetel-Anlagen ein und übernehmen die vereinbarte laufende Betreuung.

Ob neue Ansage, Weiterleitung oder Schließzeit: Sie melden sich bei uns. Wir kümmern uns um die Umsetzung und abgestimmte Folgeschritte. Eine bestehende Placetel-Anlage können wir nach Prüfung übernehmen.

Möchten Sie besprechen, welche Unterstützung für Ihre Praxis sinnvoll ist? Antworten Sie mir gern oder nutzen Sie [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen E-Mail-Abschluss einsetzen.]

### Postalische Erinnerung – frühestens nach 14–21 Tagen

Nur nach erneuter Sperrlistenprüfung; maximal eine Erinnerung, kein Automatismus. Die erste Aussendung muss tatsächlich erfolgt sein.

**Website und Telefonie: Bleibt etwas für uns zu tun?**

Guten Tag,

vor Kurzem haben wir Ihnen unsere Betreuung für Praxen vorgestellt. Vielleicht ist die Pflege Ihrer Website oder Telefonanlage gerade kein dringendes Thema. Wenn Sie diese Aufgaben künftig abgeben möchten, können wir zunächst mit einem klar abgegrenzten Bereich beginnen.

Wir prüfen Ihre vorhandenen Systeme, vereinbaren den Umfang und betreuen Sie anschließend persönlich. Größere Änderungen oder neue Projekte erhalten Sie als separates Angebot.

Ein Beispiel unserer Arbeit finden Sie bei Pneumologie Eppendorf. Welche Bausteine für Ihre Praxis passen, besprechen wir gern mit Ihnen.

Sie erreichen mich unter +49 (40) 41343870 oder über [Kampagnenlink]. Wenn Sie keine weiteren Angebote wünschen, geben Sie uns bitte kurz Bescheid.

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen Briefabschluss und postalischen Transparenzhinweis einsetzen.]

### Antwort nach eingegangener Beratungsanfrage

**Betreff:** Ihre Anfrage zur Betreuung Ihrer Praxis

Guten Tag,

vielen Dank für Ihre Anfrage. Gern sehen wir uns an, wie wir Ihre Praxis bei [angefragtes Thema] unterstützen können.

Für unser erstes Gespräch schlage ich [Termin 1] oder [Termin 2] vor. Wir klären Ihre Wünsche, die vorhandenen Systeme und die Aufgaben, die Sie abgeben möchten. Anschließend erhalten Sie bei Bedarf ein Angebot mit getrennten Positionen für Einrichtung beziehungsweise Übernahme und laufende Betreuung.

Welcher Termin passt Ihnen? Alternativ erreichen Sie mich unter +49 (40) 41343870.

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Vollständige Unternehmenssignatur und Datenschutzlink einsetzen; keine Marketingeinwilligung aus der Anfrage ableiten.]


---

# Kampagne: Landingpage-Texte

Quelle: `handoff/kampagne/03_Landingpage_Texte.md`

## Landingpage-Texte und Aufbau

Neun Textvarianten auf einem gemeinsamen Seitentemplate. Die URL-Vorschläge sind noch nicht veröffentlicht. Zunächst K1, K2 und K9 umsetzen; weitere Varianten entsprechend Kampagnenstart. Alle Aussagen zu Leistungen stammen aus den bestätigten Angaben von Digital Avenue.

### K1 – /arztpraxen/facharztpraxis/

**Meta-Titel:** Facharztpraxis entlasten | Digital Avenue

**Meta-Beschreibung:** Website, digitale Terminwege und Telefonie mit persönlicher Betreuung für internistische und andere Facharztpraxen.

**Eyebrow:** Digital Avenue für Praxen und MVZ

## Mehr Zeit für Ihre Praxis. Wir kümmern uns um die Kommunikation.

Website, digitale Terminwege und Telefonie mit persönlicher Betreuung für internistische und andere Facharztpraxen.

Wir bauen oder übernehmen Ihre Praxiswebsite, pflegen Ihre Informationen und stimmen die Kontaktwege mit Ihnen ab. Wenn gewünscht, betreuen wir auch Ihre Placetel-Telefonanlage. Doctolib vermitteln wir und binden die gebuchte Lösung anschließend in Ihre Website und gegebenenfalls Telefonanlage ein.

**Button:** Betreuung besprechen

#### Das übernehmen wir für Sie

- Patienteninformationen aktuell halten
- Website bauen oder übernehmen
- Terminwege und Telefonie abstimmen

Sie geben die fachlichen Inhalte frei. Wir kümmern uns um Darstellung, Aktualisierung und vereinbarte Folgeschritte. Melden Sie beispielsweise Ihren Urlaub, entfernen wir den Hinweis zum vereinbarten Zeitpunkt auch wieder.

#### Aus der Praxis

Mit Pneumologie Eppendorf betreuen wir bereits eine internistische Hausarztpraxis mit pneumologischem Schwerpunkt.

#### Lassen Sie uns Ihre Aufgaben besprechen

Lassen Sie uns in einem kurzen Gespräch ansehen, welche wiederkehrenden Informationen und Kontaktwege wir für Ihre Praxis betreuen können.

**Button:** Gespräch anfragen

### K2 – /arztpraxen/empfang-entlasten/

**Meta-Titel:** Empfang entlasten | Digital Avenue

**Meta-Beschreibung:** Laufende Pflege von Website, Google Business und Telefonie für Ihren Praxisalltag.

**Eyebrow:** Digital Avenue für Praxen und MVZ

## Eine Mitteilung genügt. Wir kümmern uns um die nächsten Schritte.

Laufende Pflege von Website, Google Business und Telefonie für Ihren Praxisalltag.

Digital Avenue übernimmt die vereinbarte Pflege Ihrer Website, Ihres Google-Business-Profils und Ihrer Placetel-Telefonanlage. Sie teilen uns die Änderung mit. Wir setzen sie an den vereinbarten Stellen um und kümmern uns auch um die spätere Rücknahme.

**Button:** Betreuung besprechen

#### Das übernehmen wir für Sie

- Schließzeiten abgestimmt veröffentlichen
- Kontakt- und Terminwege verständlich machen
- Änderungen und Rücknahmen betreuen

Auch Terminwege und häufige organisatorische Fragen bringen wir auf Ihrer Website an einen gut auffindbaren Platz. Eine vorhandene WordPress-Website können wir nach technischer Prüfung in Betreuung nehmen.

#### Aus der Praxis

Pneumologie Eppendorf gehört bereits zu unseren Praxiskunden.

#### Lassen Sie uns Ihre Aufgaben besprechen

Besprechen wir kurz, welche wiederkehrenden Aufgaben wir Ihrem Team abnehmen können.

**Button:** Gespräch anfragen

### K3 – /arztpraxen/auffindbarkeit/

**Meta-Titel:** Passend gefunden werden | Digital Avenue

**Meta-Beschreibung:** Leistungsseiten, Google Business und Suchmarketing passend zu Ihren tatsächlichen Praxiszielen.

**Eyebrow:** Digital Avenue für Praxen und MVZ

## Gefunden werden, wenn es für Ihre Praxis zählt.

Leistungsseiten, Google Business und Suchmarketing passend zu Ihren tatsächlichen Praxiszielen.

Wir strukturieren Ihre Leistungsseiten, betreuen Ihr Google-Business-Profil und verbessern die Auffindbarkeit Ihrer Praxis. Wenn gezielte Werbung zu Ihrem Ziel passt, planen und betreuen wir ergänzend Google Ads mit separat vereinbartem Werbebudget.

**Button:** Betreuung besprechen

#### Das übernehmen wir für Sie

- Leistungen verständlich darstellen
- Lokale Praxisinformationen pflegen
- SEO und Anzeigen nach Ziel einsetzen

Am Anfang steht Ihr Ziel: Welche Leistungen möchten Sie bekannter machen, und welche Anfragen passen zu Ihrer Praxis? Daraus leiten wir die Inhalte und Maßnahmen ab. Die laufende Websitepflege übernehmen wir auf Wunsch gleich mit.

#### Aus der Praxis

Unsere Erfahrung mit Praxiswebsites fließt in die verständliche Darstellung Ihrer Leistungen ein.

#### Lassen Sie uns Ihre Aufgaben besprechen

Lassen Sie uns über die Leistung oder den Standort sprechen, den Sie sichtbarer machen möchten.

**Button:** Gespräch anfragen

### K4 – /arztpraxen/patienteninformation/

**Meta-Titel:** Gut informiert zum Termin | Digital Avenue

**Meta-Beschreibung:** Patienteninformationen, Standorte und Kontaktwege für ambulante Untersuchungen und Behandlungen.

**Eyebrow:** Digital Avenue für Praxen und MVZ

## Gut informiert ankommen.

Patienteninformationen, Standorte und Kontaktwege für ambulante Untersuchungen und Behandlungen.

Wir bringen die von Ihrer Praxis freigegebenen Informationen übersichtlich auf Ihre Website. Dazu gehören passende Kontaktwege, Standortangaben und Hinweise für Zuweiser. Die technische und inhaltliche Pflege übernehmen wir langfristig.

**Button:** Betreuung besprechen

#### Das übernehmen wir für Sie

- Vorbereitungsinformationen zugänglich machen
- Standorte und Ansprechpartner zuordnen
- Inhalte langfristig aktuell halten

Bei mehreren Standorten oder unterschiedlichen Terminarten achten wir auf eine klare Zuordnung. Vorhandene Terminlösungen binden wir nach Prüfung ein. Bei Bedarf ergänzen wir die Betreuung Ihrer Telefonanlage.

#### Aus der Praxis

Digital Avenue arbeitet bereits mit Praxen aus Pneumologie und Dialyse zusammen.

#### Lassen Sie uns Ihre Aufgaben besprechen

Gehen wir gemeinsam einen typischen Weg vom ersten Kontakt bis zum Termin durch und klären, wo wir Sie unterstützen können.

**Button:** Gespräch anfragen

### K5 – /arztpraxen/psychotherapie/

**Meta-Titel:** Praxisbetreuung für Psychotherapie | Digital Avenue

**Meta-Beschreibung:** Persönliche technische und inhaltliche Betreuung für psychotherapeutische und psychiatrische Praxen.

**Eyebrow:** Digital Avenue für Praxen und MVZ

## Ihre Praxiswebsite in verlässlichen Händen.

Persönliche technische und inhaltliche Betreuung für psychotherapeutische und psychiatrische Praxen.

Wir betreuen Ihre WordPress-Website technisch und inhaltlich. Sie erreichen uns per E-Mail oder Telefon und teilen uns mit, was sich ändern soll. Vereinbarte Folgeschritte, etwa die Rücknahme eines Abwesenheitshinweises, erledigen wir mit.

**Button:** Betreuung besprechen

#### Das übernehmen wir für Sie

- Kontaktzeiten und Erstkontakt erklären
- Abwesenheiten zuverlässig pflegen
- Technische Websitebetreuung übernehmen

Gemeinsam stellen wir klar dar, wie Interessierte Kontakt aufnehmen können und welche Informationen sie vorher benötigen. Der Betreuungsumfang richtet sich nach Ihrer Praxis. Auf Wunsch prüfen wir auch Ihre Telefonie.

#### Aus der Praxis

Als Digital Avenue betreuen wir medizinische Praxen langfristig und persönlich.

#### Lassen Sie uns Ihre Aufgaben besprechen

Lassen Sie uns kurz besprechen, welche Websiteaufgaben Sie künftig abgeben möchten.

**Button:** Gespräch anfragen

### K6 – /arztpraxen/medizinische-einrichtungen/

**Meta-Titel:** Kommunikation für medizinische Einrichtungen | Digital Avenue

**Meta-Beschreibung:** Websitepflege, Ansprechpartner und Arbeitgeberdarstellung für medizinische Einrichtungen.

**Eyebrow:** Digital Avenue für Praxen und MVZ

## Verlässliche Kommunikation für Ihre Einrichtung.

Websitepflege, Ansprechpartner und Arbeitgeberdarstellung für medizinische Einrichtungen.

Digital Avenue baut oder übernimmt Ihre WordPress-Website und betreut Inhalte, technische Wartung und vereinbarte Aktualisierungen. Wir strukturieren Informationen nach ihren Zielgruppen und stimmen die Zuständigkeiten mit Ihnen ab.

**Button:** Betreuung besprechen

#### Das übernehmen wir für Sie

- Informationen für Zuweiser ordnen
- Karriereinhalte betreuen
- Standorte und Kontakte aktuell halten

Bei Bedarf ergänzen wir Karriereseiten, Google Business und die Betreuung Ihrer Cloud-Telefonie. In einem ersten Gespräch klären wir, welche Bereiche Ihre Einrichtung selbst beauftragen kann und wo weitere Verantwortliche eingebunden werden müssen.

#### Aus der Praxis

Unsere Betreuung verbindet Web, Inhalte und Kommunikation in einer festen Zusammenarbeit.

#### Lassen Sie uns Ihre Aufgaben besprechen

Besprechen wir, welche Kommunikationsaufgaben Sie dauerhaft an einen festen Ansprechpartner abgeben möchten.

**Button:** Gespräch anfragen

### K7 – /arztpraxen/praxisstart/

**Meta-Titel:** Praxisstart und Übernahme | Digital Avenue

**Meta-Beschreibung:** Gestaltung, Website und Telefonie für Praxisgründung, Übernahme und Modernisierung – anschließend persönlich betreut.

**Eyebrow:** Digital Avenue für Praxen und MVZ

## Ihr Praxisauftritt passt zusammen.

Gestaltung, Website und Telefonie für Praxisgründung, Übernahme und Modernisierung – anschließend persönlich betreut.

Digital Avenue begleitet Ihren Praxisauftritt von der Gestaltung bis zur digitalen Umsetzung. Wir entwickeln oder übernehmen Ihre Website, gestalten die vereinbarten Praxismaterialien und richten Ihre Placetel-Telefonie nach Bedarf ein.

**Button:** Betreuung besprechen

#### Das übernehmen wir für Sie

- Logo und Praxismaterialien gestalten
- Website und Telefonie koordinieren
- Nach dem Start weiter betreuen

Doctolib vermitteln wir und binden es nach Abschluss in die Website sowie, wenn gebucht, in die Telefonanlage ein. Anschließend betreuen wir die vereinbarten digitalen Leistungen langfristig. Einmalige Projekte, Produktion und laufende Betreuung weisen wir getrennt aus.

#### Aus der Praxis

Für Pneumologie Eppendorf haben wir neben der Website auch Leistungen rund um den Praxisauftritt umgesetzt.

#### Lassen Sie uns Ihre Aufgaben besprechen

Lassen Sie uns Ihren Zeitplan und die benötigten Bausteine gemeinsam ordnen.

**Button:** Gespräch anfragen

### K8 – /arztpraxen/recruiting/

**Meta-Titel:** Recruiting unterstützen | Digital Avenue

**Meta-Beschreibung:** Karriereseiten, Stellenanzeigen und Bewerbungswege, die wir mit Ihnen entwickeln und aktuell halten.

**Eyebrow:** Digital Avenue für Praxen und MVZ

## Ihre Praxis als Arbeitsplatz sichtbar machen.

Karriereseiten, Stellenanzeigen und Bewerbungswege, die wir mit Ihnen entwickeln und aktuell halten.

Wir gestalten und betreuen Ihre Karriereseite, bringen Stellenangebote verständlich auf den Punkt und sorgen für einen einfachen Bewerbungsweg. Auf Wunsch ergänzen wir passende Druckmaterialien oder eine gesondert geplante Anzeigenkampagne.

**Button:** Betreuung besprechen

#### Das übernehmen wir für Sie

- Arbeitsplatz konkret darstellen
- Bewerbungswege vereinfachen
- Stelleninformationen aktuell halten

Sie liefern die tatsächlichen Rahmenbedingungen und geben die Inhalte frei. Wir kümmern uns um Darstellung und Pflege – einschließlich der Aktualisierung oder Entfernung, wenn eine Stelle besetzt ist.

#### Aus der Praxis

Auf der Website unseres Referenzkunden Pneumologie Eppendorf ist auch ein Stellenangebot eingebunden.

#### Lassen Sie uns Ihre Aufgaben besprechen

Lassen Sie uns ansehen, wie Sie Ihre offene Stelle und Ihre Praxis als Arbeitsplatz präsentieren möchten.

**Button:** Gespräch anfragen

### K9 – /arztpraxen/betreuung-wechseln/

**Meta-Titel:** Betreuung wechseln – Website und Telefonie | Digital Avenue

**Meta-Beschreibung:** Bestehende Website oder Placetel-Telefonie prüfen, Betreuung übernehmen und Änderungen zuverlässig erledigen.

**Eyebrow:** Digital Avenue für Praxen und MVZ

## Ein fester Ansprechpartner für Ihre digitale Praxis.

Bestehende Website oder Placetel-Telefonie prüfen, Betreuung übernehmen und Änderungen zuverlässig erledigen.

Wir prüfen Ihre bestehende WordPress-Website und übernehmen sie bei technischer Eignung in die laufende Betreuung. Bei einer vorhandenen Placetel-Anlage klären wir ebenso, welche Aufgaben wir übernehmen können. Einen notwendigen Neuaufbau oder Systemwechsel bieten wir gesondert an.

**Button:** Betreuung besprechen

#### Das übernehmen wir für Sie

- Vorhandene Systeme prüfen
- Übernahme transparent anbieten
- Änderungen und Folgeschritte betreuen

Änderungswünsche erreichen uns per E-Mail oder Telefon. Wir setzen die vereinbarten Aufgaben um und denken an Folgeschritte. Ihr Hostingvertrag kann dabei direkt bei Ihnen bleiben; bei IONOS betreuen wir die Technik über den freigegebenen Agenturzugriff.

#### Aus der Praxis

Langfristige persönliche Betreuung ist bereits die Grundlage unserer Zusammenarbeit mit medizinischen Praxen.

#### Lassen Sie uns Ihre Aufgaben besprechen

Besprechen wir kurz, welche Systeme Sie einsetzen und welche Betreuung Sie sich wünschen.

**Button:** Gespräch anfragen

### Gemeinsame Module unter jeder Variante

#### Persönlich erreichbar. Vorausschauend betreut.

Sie schicken uns Ihren Änderungswunsch per E-Mail oder rufen an. Wir melden uns innerhalb einer Stunde während unserer Servicezeiten: montags bis freitags, 08:00–18:00 Uhr, ausgenommen gesetzliche Feiertage. Den Zeitpunkt der Umsetzung stimmen wir nach Aufwand und Dringlichkeit ab.

Zu unserer Betreuung gehören auch vereinbarte Folgeschritte. Ein Urlaubshinweis wird nach Ihrer Rückkehr wieder entfernt. Sie müssen uns daran nicht erneut erinnern.

#### So beginnt die Zusammenarbeit

1. Wir besprechen Ihre Wünsche und prüfen die vorhandenen Systeme.
2. Sie erhalten ein Angebot für Einrichtung oder Übernahme und den passenden laufenden Betreuungsumfang.
3. Wir setzen die vereinbarten Arbeiten um und bleiben Ihr Ansprechpartner.

#### Verschiedene Lösungen. Ein Ansprechpartner für die vereinbarte Betreuung.

**IONOS:** Ihr Hostingvertrag bleibt bei Ihnen. Über den von Ihnen freigegebenen Agenturzugriff übernehmen wir die technischen Aufgaben.

**Doctolib:** Wir vermitteln die Lösung und binden sie nach Vertragsabschluss in Ihre Website sowie, wenn gebucht, in Ihre Telefonanlage ein.

**Placetel:** Wir richten Ihre Cloud-Telefonanlage ein oder übernehmen nach Prüfung die Betreuung einer bestehenden Anlage.

#### Häufige Fragen

**Muss meine Website neu gebaut werden?**
Nicht unbedingt. Wir prüfen Ihre WordPress-Website und bieten bei Eignung die Übernahme an. Notwendige Vorarbeiten werden vorab beschrieben.

**Was kostet die Betreuung?**
Sie erhalten einen festen monatlichen Preis für den vereinbarten Umfang. Einrichtung, größere Zusatzarbeiten und Fremdkosten werden getrennt ausgewiesen. Wir klären zuerst, welche Aufgaben tatsächlich zu Ihrer Praxis passen.

**Ist innerhalb einer Stunde alles erledigt?**
Die Zusage betrifft unsere persönliche Rückmeldung während der Servicezeiten. Die Umsetzung hängt von Dringlichkeit, Umfang und gegebenenfalls weiteren Anbietern ab.

**Kann ich auch Logo, Drucksachen oder Praxisschilder beauftragen?**
Ja. Gestaltung und Produktion bieten wir passend zum Projekt separat an und stimmen sie mit Ihrem digitalen Auftritt ab.

**Wer liefert die fachlichen Inhalte?**
Fachliche Angaben und medizinische Hinweise werden von Ihrer Praxis geprüft und freigegeben. Wir unterstützen bei der verständlichen Darstellung und Pflege.

#### Kontaktformular

Überschrift: „Welche Aufgabe möchten Sie abgeben?“
Felder: Praxis/Einrichtung, Name, geschäftliche E-Mail oder Rückrufnummer, gewünschtes Thema, kurze Nachricht. Nur notwendige Felder verpflichtend; keine Patientendaten anfordern. Sichtbarer Hinweis: „Bitte übermitteln Sie hier keine Patienten- oder Gesundheitsdaten.“ Datenschutzinformation verlinken. Eine optionale Marketingeinwilligung ist getrennt und nicht vorausgewählt; die Beratungsanfrage funktioniert ohne Newsletteranmeldung.

Bestätigung: „Vielen Dank. Ihre Anfrage ist angekommen. Wir melden uns während unserer Servicezeiten persönlich bei Ihnen.“

#### Gestaltung und Messung

Bestehendes Digital-Avenue-Design: Manrope, Teal #305b75, dunkles Teal #1b3a4a, Sand #d7c9aa, Plum #42253b. Reale freigegebene Arbeitsbeispiele verwenden; keine erfundenen Screenshots oder Testimonials. Die 5-Sterne-Bewertung erst nach Abgleich mit dem Original einbauen. Mobile Kontaktwege testen. Formularabsendung, angefragtes Thema und tatsächliche Beratungen erfassen. Keine personenbezogenen Daten in Tracking-URLs. Gesetzlich erforderliche Einwilligung für eingesetztes Tracking berücksichtigen; keine Trackinginstallation Bestandteil dieser Lieferung.


---

# Technisches Protokoll Bricks

Quelle: `handoff/import/README.md`

## Importdaten für Bricks 2.4 (Staging relaunch.digital-avenue.de)

Erzeugt aus `design-system/colors_and_type.css` und dem Prototyp mit
`node handoff/import/build-import.mjs`. Nach jeder Änderung an Tokens oder
Prototyp neu bauen, nicht von Hand editieren.

Zwei Wege je Schritt: **Import im Style Manager** von Bricks 2.4 (Datei
hochladen, kein MCP nötig) oder **Auftrag an Claude Code** lokal im
Repository oder in der Cloud-Umgebung, jeweils mit verbundenem MCP-Server
(Einrichtung in `.claude/skills/bricks-handoff/references/bricks-2-4.md`). Die JSON-Dateien liegen im
gespeicherten Format von Bricks (Schema-Bündel `bricks-element-schemas`,
`global/*.json`), ohne Zusatzfelder; Erklärungen stehen in den
Markdown-Dateien daneben. Die Aufträge unten gelten für den MCP-Weg.

Merkregeln zum Nachschlagen: `handoff/MERKREGELN.md`.

Regeln für alle Schritte: zuerst lesen (`get-design-context` und die passende
`list-*`-Ability), Ownership-Werte aus der letzten Antwort weiterreichen,
Schreibaufrufe nacheinander statt parallel, bei `duplicate`-Konflikten das
Vorhandene prüfen statt umbenennen, keine `delete-*`-Abilities, nach jedem
Schritt `handoff/STATUS.md` fortschreiben.

| Schritt | Datei | Ability-Weg | Prüfung |
|---|---|---|---|
| 0 Bestand | – | `list-ability-status`, `get-design-context` | Liste der Abilities erscheint; Design System leer oder bekannt |
| 1 Farben | `01-farben.json` (+ `01-farben.md`) | Style Manager › Colors › Import, oder `create-color-palette` und je Farbe `create-color` | 52 Farben mit Dunkelwert in der Palette „Digital Avenue“ |
| 2 Schriften | `02-schriften.json` | Font Manager im Builder oder `upload-custom-font-file`, `create-custom-font`, `update-custom-font` | erledigt 11.09.2026: Manrope und Jost als Custom Fonts, je 8 Schnitte |
| 3 Variablen | `03-variablen.json` (+ `03-variablen.md`) | Style Manager › Variables › Import, oder `set-global-variable-categories` und `set-global-variables` | 8 Kategorien, 48 Variablen |
| 4 Theme Style | `04-theme-style.json` | Import im Builder (Theme Styles › Import) oder `create-theme-style` | Stil „Digital Avenue“ aktiv, H1 und Button stimmen |
| 5 Klassen | `05-klassen/klassen.json` (+ `klassen.md`, `klassen.css`) | Style Manager › Classes › Import, oder je Klasse `create-global-class` | 21 Klassen; Button mit `da-btn da-btn-primary` rendern |
| 6 Icons | `06-icons/` (durch den SVG → Bricks Optimizer gelaufen) | Icon Manager im Builder (Browser › Icon manager), eigenes Set, SVGs einzeln hochladen | erledigt 11.09.2026: Set „Digital Avenue“ mit 15 Icons |
| 7 Components | `07-components/components.json` | `convert-html-css-to-bricks-data`, dann `create-component` | `get-component`, `render-elements` |

### Schritt 0: Bestand aufnehmen

Auftrag:

> Verbinde dich mit dem Bricks-Staging. Rufe `bricks/list-ability-status` und
> `bricks/get-design-context` auf und fasse zusammen, welche Paletten,
> Variablen, Theme Styles, Global Classes und Components schon existieren.
> Schreibe nichts.

### Schritt 1: Farben

Auftrag:

> Lies `handoff/import/01-farben.json`. Lege die Palette „Digital Avenue“ an
> und darin jede Farbe mit `create-color`: `raw`, `light` und `dark` genau wie
> in der Datei, nacheinander, Ownership jeweils aus der vorigen Antwort.
> Keine Shades generieren, die Abstufungen sind eigene Tokens. Die 16
> halbtransparenten Werte (rgb mit Alpha) sind Schatten- und Glasfarben und
> werden genauso angelegt. Prüfe zum Schluss mit `list-color-palettes`, dass
> 52 Farben mit Dunkelwert vorhanden sind, und rendere ein Element mit
> `background: var(--da-teal); box-shadow: var(--da-shadow-md)` einmal hell
> und einmal mit `data-brx-theme="dark"`.

Hinweis: Die sechs Status-Farben stehen im Design System als `oklch()`;
die Datei enthält sie als Hex (Original unter `source`). Schatten,
Glasflächen, Chips, Schritt-Nummern und Hero-Schein hängen nur an diesen
Farben, deshalb schaltet der Dunkelmodus dort über den Color Manager um,
ohne eigene CSS-Regeln.

### Schritt 2: Schriften

Auftrag:

> Lies `handoff/import/02-schriften.json`. Lade
> `design-system/fonts/Manrope-VariableFont_wght.woff2` als Base64 mit
> `upload-custom-font-file` hoch, lege die Familie „Manrope“ mit
> `create-custom-font` an und setze `fontFaces` mit `update-custom-font`.
> Versuche zuerst den Schlüssel `"200 800"` für die variable Achse; lehnt
> Bricks das ab, verwende `fontFacesFallback` aus der Datei. Prüfe mit
> `list-custom-fonts`. Jost bleibt Google Font: prüfe mit
> `list-settings-schema`, ob Google Fonts aktiv sind, und melde das Ergebnis.

### Schritt 3: Variablen

Auftrag:

> Lies `handoff/import/03-variablen.json`. Lege die acht Kategorien ohne
> Scale-Konfiguration mit `set-global-variable-categories` an (vorhandene
> Kategorien erhalten) und speichere die 48 Variablen mit
> `set-global-variables`, Namen ohne führendes `--`. Prüfe mit
> `list-global-variables` und rendere ein Element mit
> `padding: var(--da-sp-6); border-radius: var(--da-r-md); box-shadow: var(--da-shadow-lg)`.

Die Schatten-Variablen enthalten nur `var(--da-ink…)`- und
`var(--da-teal-glow…)`-Referenzen auf Farben aus Schritt 1. Deshalb braucht
keine Variable einen Dunkelwert; Bricks-Variablen hätten auch keinen.

**Skalen-Generator (Reiter Spacing und Typography) nicht verwenden.**
Bricks erzeugt dort Verhältnisreihen (`clamp()` in rem mit Steigung ab
36rem Bildschirmbreite, Wurzelgröße laut Theme Style, sonst 10px). Unser
Design System sind Vielfache von 4px in eigenen `clamp()`-Werten; eine
Verhältnisreihe bildet das nicht ab. Die Kategorien Abstände und
Schriftgrößen bleiben deshalb ohne Skalen-Konfiguration und tauchen in den
Reitern nicht auf; in den Controls sind sie normal wählbar. Eine zum Test
erzeugte Kategorie „Spacing“ mit `br-space-*` im Variablen-Manager wieder
löschen. Wer den Generator später doch nutzt, setzt vorher im Theme Style
die HTML-Schriftgröße auf 16px, sonst rechnet Bricks mit 10px.

Stand 11.09.2026: Farben (52) und Variablen (48 in 8 Kategorien) sind
über den Style Manager am Staging importiert; Exportformat der Variablen
ist `{ variables, categories, styleManager }`.

### Schritt 4: Theme Style

`04-theme-style.json` liegt im Export-Format von Bricks 2.4 (erstellt unter RC2, wie die
leere Vorlage `Global Theme`). Einfachster Weg ohne Ability: im Builder
unter Einstellungen › Theme Styles › Import die Datei einspielen. Der Stil
heißt „Digital Avenue“ und gilt mit Bedingung „any“ für die ganze Seite.

Über MCP: `create-theme-style` mit `label`, `conditions: [{ main: "any" }]`
und dem Objekt `settings` aus der Datei ohne die Schlüssel `_custom` und
`conditions`.

Auftrag (MCP-Weg):

> Lies `handoff/import/04-theme-style.json`. Lege mit `create-theme-style`
> den Theme Style „Digital Avenue“ an: `conditions: [{ main: "any" }]`,
> `settings` aus der Datei ohne `_custom` und `conditions`. Lies ihn mit
> `get-theme-styles` zurück und rendere ein H1, ein H2, einen Absatz, einen
> Button und ein Formularfeld zur Kontrolle.

Wichtig: `typographyHtml: 100%` setzt die HTML-Schriftgröße. Ohne diesen
Wert rechnet der Style Manager mit 62,5 % (1rem = 10px), und alles, was in
rem gesetzt ist, schrumpft. Am Staging bereits importierte Theme Styles von
Hand ergänzen: Theme Styles › Digital Avenue › Typography › HTML font size.

Falle beim Theme Style: Die Felder „Root container padding“ und „Root
container width“ unter General (rotes Symbol) sind Altlasten und wirken
nicht auf Sections. Section-Innenabstand steht in der Gruppe Section,
die Breite in der Gruppe Container; die Datei setzt beides dort.

Der Theme Style deckt Grundschrift, H1 bis H6, Lead, Links, Farben,
Container-Breite, Section-Abstand, Buttons (Standard, Primary, Secondary,
Light, Outline) und Formularfelder ab. Schatten der Buttons stehen nicht im
Theme Style, weil Bricks-Schatten keine Variablen mit mehreren Ebenen
tragen; sie kommen aus den Global Classes in Schritt 5. H5 und H6 sind
Vorschläge (Style Guide, Entscheidung offen).

### Schritt 5: Global Classes

Auftrag:

> Lies `handoff/import/05-klassen/klassen.json`. Lege die Kategorien Sections,
> Text, Buttons, Icons, Forms, Modifiers und Utilities an und je Eintrag eine
> Global Class mit `create-global-class`, das Feld `css` als Custom CSS der
> Klasse (Selektoren sind vollständig, Zeilenumbrüche erhalten). Prüfe mit
> `list-global-classes`, dass 21 Klassen existieren, und rendere ein
> Button-Element mit den Klassen `da-btn da-btn-primary` sowie ein
> Text-Element mit `da-eyebrow`. Melde, welche Deklarationen der CSS Sync in
> Controls übernommen hat und welche als Custom CSS geblieben sind.

Buttons: `da-btn` trägt Padding, Radius, Schrift und Übergang; die
Varianten `da-btn-primary`, `da-btn-ghost`, `da-btn-light`, `da-btn-sand`
nur Farbe, Rahmen und Schatten. Immer beide Klassen setzen.

### Schritt 6: Icons

Die 15 SVGs in `06-icons/` sind bereits durch den **SVG → Bricks Optimizer**
gelaufen (`handoff/tools/svg-bricks-optimizer.html`, Browser-Tool; dieselben
Regeln als Node-Modul in `handoff/tools/svg-bricks-optimize.mjs`, das der
Build verwendet): kein `width`/`height`, `viewBox` vorhanden, alle Farben
`currentColor`, jede Form trägt eine Klasse `bx1`, `bx2` …, damit sie sich in
Bricks per CSS einzeln ansprechen lässt. `star` färbt über `fill`, alle
anderen über `stroke`.

Ohne Ability. In Bricks › Einstellungen › Icons ein eigenes Set „Digital
Avenue“ anlegen und die 15 Dateien hochladen (Bricks 2.4 erlaubt SVG-Upload
in eigenen Sets). Klappt der Upload nicht: Dateien als Medien hochladen
(SVG-Upload unter Bricks › Einstellungen freigeben) und im Builder als
SVG-Element mit Global Class `icon` oder `icon-20` verwenden.

Neue Icons später: SVG in das Browser-Tool ziehen, Ergebnis nach
`handoff/import/06-icons/` legen, oder `node handoff/tools/svg-bricks-optimize.mjs ein.svg aus.svg`.

### Schritt 7: Components

Reihenfolge, weil spätere Components frühere enthalten: Service-Karte,
Kachel, Schritt, Referenzkarte, Kundenstimme, Pain-Karte, Feature-Block,
Concierge, FAQ, Digital-Check-Block, Hero Landingpage. Einträge ohne
`properties` (Hero Start, Mosaik, Partnerzeile, Zielgruppen-Tabs, Leitbild,
Dialog) sind Abschnitte für den späteren Seitenimport, keine Components.

Bilder liegen unter `prototype/img/`; vor der Umwandlung mit `upload-media`
hochladen und die `src`-Pfade im HTML durch die Medien-URLs ersetzen.
Sprite-Icons sind im HTML bereits als Inline-SVG eingesetzt.

Auftrag je Component (Beispiel Service-Karte):

> Lies `handoff/import/07-components/components.json` und die Dateien
> `service-card.html` und `service-card.css`. Wandle beide mit
> `convert-html-css-to-bricks-data` um; vorhandene Global Classes und
> Variablen wiederverwenden, keine neuen Globals anlegen, Warnungen
> auflisten. Prüfe den Baum: Klassen `service-card`, `sc-head`, `sc-label`,
> `sc-status`, `sc-title` müssen als Global Classes mit dem CSS aus der Datei
> entstehen, Icons als SVG-Elemente. Speichere mit `create-component`
> (Label, Kategorie und Beschreibung aus dem Manifest) und binde die
> Properties Label, Status, Titel, Liste und Variante an die passenden
> Controls; Variante als Global-Class-Property mit `sand`. Lies mit
> `get-component` zurück und rendere eine Instanz.

Stand 11.09.2026 (aus der Cloud-Sitzung per MCP angelegt): Global Class
`service-card` (id `jquabn`, Controls plus Sub-Selektoren `.sc-head`,
`.sc-label`, `.sc-status`, `.sc-title`, `ul`, `li`, `li .icon`, `&.sand`),
Modifier-Klasse `sand` (id `40736a`, Kategorie Modifiers), Components
„Service-Punkt“ (id `0b9bf7`, Property Text) und „Service-Karte“ (id
`580b83`, Properties Label, Status, Titel, Variante; Slot `76f9e7` für
Service-Punkt-Instanzen), Kategorie „Service-Karte“. Testseite „Component-
Test Service-Karte“ (Post 50, privat) mit beiden Varianten.

Gelernt beim ersten Durchlauf:

- Icons aus dem Icon Manager als Icon-Element setzen:
  `{"icon":{"library":"custom_set_nmqwgfdgv","svg":{"id":36,"icon_id":"icon_n6tla3o2l","url":"…/check.svg"}},"iconSize":"16px","_cssGlobalClasses":["daiconx13"]}`.
  Inline-SVG aus dem Konverter lässt sich nicht speichern (code-sensitiv).
- Instanzen im Elementbaum brauchen `name: "div"` und `cid`; sonst lehnt
  `create-component` ab („missing a name“).
- Kinder im Slot der Hauptcomponent werden auf der Seite nicht gerendert.
  Jede Instanz liefert ihre Listenpunkte selbst: flache Zeilen mit
  `parent` = Instanz-ID und `slotChildren: {"76f9e7": ["id1","id2"]}`.
  Verschachtelte Objekte in `slotChildren` haben beim Rendern die Karte
  verdoppelt, also flache Zeilen verwenden.
- Variante als Class-Property mit Optionen `standard` (leer) und `sand`
  (Klassen-ID); ohne `replace`, damit `service-card` erhalten bleibt.
- `create-global-class` kann eine Kategorie zuweisen
  (`category` + `expectedCategoryOwnership` aus `list-global-classes`),
  aber keine Kategorie anlegen. Neue Kategorien entstehen nur im Style
  Manager.

Stand 11.09.2026, zweiter Durchlauf (Kartenfamilie): Klassen `tiles`,
`tile` (Sub-Selektoren `.tile-num`, `h3`, `p`, `.textlink`), Modifier
`tile-teal`, `tile-deep`, `tile-sand`, `tile-cream`, `tile-photo`; `steps`,
`step`; `refs`, `ref`; `quotes`, `quote`, Modifier `featured`; `pains`,
`pain`; `checks`; `wordmark` mit Modifiern `serif`, `wide` (nur noch für die
Partnerzeile). Components
(Kategorie in Klammern): Kachel (`c3c53b`, Kacheln), Foto-Kachel
(`0851ab`, Kacheln), Schritt (`719767`, Karten), Referenzkarte (`cbca1c`,
Karten, Logo-Bild Attachment 62), Kundenstimme (`05cb9e`, Karten), Pain-Karte (`469300`, Karten).
Testseiten: „Component-Test Kachel“ (Post 60), „Component-Test Karten“
(Post 63).

Nachtrag 11.09.2026: Alle Referenzen bekommen ein Logo, deshalb ist die
Component „Referenzkarte Wortmarke“ wieder gelöscht (0 Instanzen). Platz-
halter-Logos für Dialyse Güstrow (106), Lungenpraxis am Tibarg (107) und
Urlaub bei Jana (108) liegen in der Mediathek und unter
`design-system/assets/`; echte Logos später einfach in der Property
„Logo“ austauschen.

Gelernt im zweiten Durchlauf:

- `batch-create-global-classes` übersetzt Custom CSS beim Anlegen in
  echte Controls (Padding, Border, Display, Typografie); der Rest bleibt
  Custom CSS. Kurzschreibweisen mit `color-mix(...)` gehen dabei kaputt
  (`border: 1px dashed color-mix(...)` wurde zu `var(--da-border))`).
  Farben mit `color-mix` als `_border.color.raw` setzen oder als
  Langschreibweise `border-color` schreiben.
- Eine Property ohne `default` überschreibt den Elementwert mit leer.
  Bild-Properties brauchen deshalb `default: {id, url, size}`, sonst
  zeigt jede Instanz „No image selected“.
- Instanz-Kinder brauchen `settings: {}`; Property-Werte einer Instanz
  stehen in `properties`, Class-Properties mit der Options-ID (`teal`).
- Fotos fehlen noch in der Mediathek. `prototype/img/` (30 Dateien) per
  Mediathek hochladen, dann Foto-Kachel, Feature-Block, Concierge und
  Hero Landingpage bestücken.

Stand 11.09.2026, dritter Durchlauf (Abschnitte, nach Foto-Upload):
Fotos liegen in der Mediathek (Attachments 66 bis 98, `m01` bis `m33`,
Logo DIGIZT 62). Klassen `feature` mit Modifier `flip`, `concierge`,
`timeline`, `check`, `lp-hero`, `faq`. Components (Kategorie Abschnitte):
Feature-Block (`25cc6c`, Slot `7823d9`), Timeline-Punkt (`74ec3e`),
Concierge (`0a205a`, Slot `3856e1`), Digital-Check-Block (`e44db4`, Slot
`17e049`), Hero Landingpage (`951227`, Wurzel ist eine Section). Foto-
Kachel hat jetzt ein Standardbild (74). FAQ ist keine Component, sondern
ein Accordion (Nestable) mit Klasse `faq`; Aufbau siehe unten. Testseite
„Component-Test Abschnitte“ (Post 101).

Gelernt im dritten Durchlauf:

- Eine Component darf eine `section` als Wurzel haben (Hero
  Landingpage); die Instanz liegt dann direkt auf Wurzelebene der Seite.
- `add-element` mit `accordion-nested` legt keine Kinder an. Aufbau von
  Hand: Accordion > `block` je Frage (`_cssClasses: faq-item`) > `block`
  mit `_hidden: {_cssClasses: "accordion-title-wrapper"}` (Heading h3 +
  Icon chevron-down) und `block` mit
  `_hidden: {_cssClasses: "accordion-content-wrapper"}` (Text). Bricks
  setzt `brx-open` auf das Item.
- Wurzelregeln einer Klasse werden beim Anlegen in Controls übersetzt.
  Fehlt dem Element das Control (Accordion hat kein `_direction`), geht
  die Eigenschaft verloren. Abhilfe: Regel mit Element-Klasse schreiben
  (`.faq.brxe-accordion-nested { flex-direction: column }`), die bleibt
  Custom CSS.
- Media-Queries in Klassen müssen die Element-Klasse tragen
  (`.tiles.brxe-div`), sonst gewinnt die Control-Regel `.tiles.brxe-div`
  der Basisbreite; Bricks gibt Media-Queries außerdem vor der Custom-CSS
  aus. Alle zehn Rasterklassen am 11.09.2026 entsprechend korrigiert,
  ebenso `nav-burger` (Desktop-Ausblendung als `min-width`-Query).
- Heading kennt kein `_textAlign`; Ausrichtung über
  `_typography: {"text-align": "center"}`.
- Slot-Kinder in `add-element` gehen auch verschachtelt (Objekte in
  `slotChildren`), ohne die Verdopplung aus `render-elements`.
- Listen mit `strong` im Text: Property-Typ `text` reicht, HTML wird
  ausgegeben.
- Ein `li` mit Grid-Layout (Zähler links, Text rechts) braucht ein
  eigenes Kind-Element für den Text. Liegt der Text direkt im `li`,
  werden `strong` und Textknoten getrennte Grid-Zellen und der Text
  bricht Wort für Wort um (Digital-Check-Block, Aside, korrigiert).
- Theme-Style-Buttons haben `border: none` auf `.bricks-button`. Eine
  Outline-Klasse muss deshalb auch `.bricks-button.da-btn-ghost` und
  `.brxe-button.da-btn-ghost` ansprechen, sonst verliert sie den Rahmen.

Für FAQ das Bricks-Accordion (Nestable) statt `details` verwenden; für die
Zielgruppen-Tabs später das Tabs-Element. Beides steht im Skill
`bricks-nestable-elements`.

### Schritt 8: Header

Stand 11.09.2026: Header-Template „Main Header“ (52, Bedingung „gesamte
Website“, Sticky über die Template-Einstellung `headerSticky`). Aufbau:
Section `site-nav` › Container `nav-inner` › Logo-Element (Attachment
110, 28px, Link `/`), Nav (Nestable) `nav-menu` mit fünf Text-Links,
Div `nav-actions` mit Toggle-Mode (Mond/Sonne aus dem Icon-Set), Button
`da-btn da-btn-primary da-btn-sm` und Toggle `nav-burger` (Menü-Icon,
`toggleSelector: #brxe-navmn1`). Mobile Menü über die Nav-Einstellungen:
Breakpoint 960px, Position unter dem Header (`var(--nav-h)`), Hintergrund
`--da-bg`. Neue Variable `--nav-h: 72px` (Kategorie Abstände), neue
Klasse `da-btn-sm`.

Entscheidungen:

- Dunkles Logo nicht als zweite Datei, sondern per CSS-Filter
  (`brightness(0) invert(1)`) im Dunkelmodus; das Logo ist einfarbig.
- Scroll-Zustand über Bricks' eigene Klasse
  `#brx-header.brx-sticky.scrolling`, kein eigenes Skript.
- Wurzelregeln der Header-Klassen tragen die Element-Klasse
  (`.site-nav.brxe-section`), damit der Import sie nicht in Controls
  übersetzt und `color-mix`-Werte heil bleiben.

Umbau 11.09.2026 nach Nils' Rückmeldung: Menü mit Leistungen, Branchen
(Dropdown: Ärzte, Heilberufe, Freie Berufe, Kanzleien, Ferienwohnungen,
Handwerk, Kundendienst), Referenzen (Dropdown: DIGIZT Haushaltsgeräte,
Lungenpraxis Tibarg, Dialyse Güstrow, Metallbau Rostock, Urlaub bei
Jana), Blog, Über uns. Links sind Platzhalter unter `/branchen/…/`,
`/referenzen/…/`, `/blog/`, `/ueber-uns/`. Dropdown-Aufbau: `dropdown`
(Text, Chevron, `toggleOn: both`) › `div` mit `customTag: ul` und
`_hidden: {_cssClasses: "brx-dropdown-content"}` › Text-Links. Abstand
der Menüpunkte jetzt `--da-sp-8`. Der Burger (Toggle-Element) liegt als
letztes Kind in der Nav, damit Bricks ihn nur unter dem Breakpoint zeigt
und das mobile Menü daran bindet; DOM-Reihenfolge Logo, Aktionen, Nav,
die optische Reihenfolge regelt `order` (Nav 1, Aktionen 2, mobil Nav 3,
damit der Burger rechts außen steht).

Nachtrag: Die Klassenregeln `.nav-menu .brx-nav-nested-items …` griffen
im Frontend nicht (Ursache offen, Reihenfolge und Order-Regel griffen).
Abstand, Padding, Typografie, Hover, Aktiv-Zustand und Dropdown-Optik
liegen deshalb jetzt in den Nav-Einstellungen selbst (`gap`,
`itemPadding`, `itemTypography`, `itemTypography:hover`,
`itemTypographyActive`, `dropdown…`), die Bricks mit `#brxe-navmn1
:where(…)` ausgibt. Die Klasse `nav-menu` behält Order-Regeln und das
mobile Layout.

Offen: Footer-Template „Main Footer“ (54), mobiles Menü im Browser
prüfen, aktiver Menüpunkt (`aria-current`) setzt Bricks automatisch.

### Schritt 9: Footer und Hero der Startseite

Stand 11.09.2026: Footer-Template „Main Footer“ (54, Bedingung „gesamte
Website“). Aufbau: Section `site-footer` › Container › Div `footer-grid`
mit Marke (Logo 110 per Filter weiß, Kurztext), Spalten Leistungen,
Branchen, Kontakt (Telefon, Mail, Adresse mit Icons aus dem Set) › Div
`footer-bottom` mit © `{current_date:Y}` und Impressum/Datenschutz. Die
Klasse `site-footer` trägt alle Regeln, Kinder tragen nur `_cssClasses`.
Adresse ist noch Platzhalter „[Adresse ergänzen]“.

Hero der Startseite (Post 2, ersetzt Nils' Test-Section): Section `hero`
› Container › Eyebrow, H1 mit `strong`, Lead, Buttons (primär, ghost),
Vertrauensliste mit drei Check-Icons. Die Klasse `hero` trägt Verlauf,
Schein und Typografie; die zentrierte Ausrichtung kommt über
`.hero > .brxe-container { align-items: center }`.

Mosaik und Partnerzeile (11.09.2026, Post 2): Section ohne Padding ›
Container › Div `mosaic` (Klasse trägt Raster, Kacheln, Chips, Karte,
Liste und die Media-Queries mit `.mosaic.brxe-div`). Kacheln Praxen,
Kanzleien, Mittelstand sind Divs mit `tag: a` und Link, darin Bild
(98, 67, 66), Chip und eine Service-Karte-Instanz; die Textkarte „Diese
Woche“ nutzt Service-Punkt-Instanzen direkt in `ul.mosaic-list`. Die
Partnerzeile ist eine Section `partners` mit Container `partners-inner`,
Label und Wortmarken (`wordmark`, `wide`, `serif`). Bilder für Partner-
Logos später einfach als Image statt Wortmarke.

Nachjustiert (11.09.2026): Glas-Effekt war zu deckend. Paletten-
farben `da_glass` (hell 0.84, dunkel 0.84), `da_glass_border` (hell 0.55)
und `da_glass_sand` (hell 0.86, dunkel 0.86) per `bricks/update-color`
gesenkt (0.72 war zu durchsichtig für den Lesbarkeitstest), dafür
Blur der Service-Karte auf `blur(24px) saturate(1.4)` erhöht; Tokens in
`design-system/colors_and_type.css` gleich. Service-
Karte: Selektor `.sc-title` hat jetzt `line-height: 1.3` (vorher erbte
der Titel die Absatz-Zeilenhöhe).

Nächste Schritte: mobiles Menü (Bricks 2.4 rendert die Nav-Kinder ohne
`ul.brx-nav-nested-items`, deshalb greifen Bricks' Mobile-Regeln nicht;
Alternative Offcanvas-Element), Startseite unterhalb des Heros aus den
Components (Mosaik, Kacheln, Schritte, Referenzen, Kundenstimmen,
Digital-Check), Popup Digital-Check mit Formular.

### Schritt 10: Zielgruppen-Umschalter (Tabs) auf der Startseite

Stand 11.09.2026: Section „Für wen“ (`#fuer-wen`, Klasse `section`) ›
Container › Abschnittskopf (Div mit `section-head` `dasecti02` + neuem
Modifier `center` `centr1`: Eyebrow, H2, Copy) › Bricks-Element
**Tabs (Nestable)** `fwtabs` mit Klasse `tabs` (`tabs01`).

Aufbau des Tabs-Elements (Bricks-Konvention, Rollen in
`_hidden._cssClasses`): Block `tab-menu` › drei Divs `tab-title` (je ein
Text-Span) und Block `tab-content` › drei Blocks `tab-pane` (mit `_cssId`
`tab-praxen`, `tab-kanzleien`, `tab-mittelstand`). Bricks setzt `brx-open`
auf Titel und Panel, `openTab: "0"` öffnet das erste Panel.

Die Steuerungen mit Bricks-Vorgabewerten (`titlePadding`, `contentPadding`,
`contentBorder`, `titleActiveBackgroundColor`, `titleActiveTypography`)
stehen bewusst am Element, weil Bricks die Vorgaben mit ID-Selektor
ausgibt und Klassen sie sonst nicht überschreiben könnten. Alles Übrige
(Pillen-Optik, Hover, Aktivfarbe, Mobil-Verhalten) liegt in der Klasse
`tabs` mit Selektoren `.tabs.brxe-tabs-nested > .tab-menu …`.

Jedes Panel enthält eine Instanz der neuen Component **Zielgruppen-Panel**
(`28c728`, Kategorie Abschnitte, Root-Klasse `audience` `audnc1`):
Figure mit Bild, rechts H3, Lead (`.lead`), `ul.checks` (Slot `fc3fdf`
mit Service-Punkt-Instanzen, Text darf `<strong>` enthalten) und
Textlink. Properties: Bild, Alt-Text, Titel, Lead, Linktext, Link.
Bilder: Praxen 77 (m22), Kanzleien 76 (m23), Mittelstand 79 (m20).

Das Panel ist absichtlich nicht selbst der `tab-pane`, sondern liegt
darin: So bleibt `display: grid` der Component von Bricks' Ein-/Aus-
blenden (`.tab-pane.brx-open`) unberührt; die Einblend-Animation hängt an
`.tab-pane.brx-open > .audience`.

`add-element` nimmt einen ganzen verschachtelten Teilbaum inklusive
Component-Instanzen mit `slotChildren: {slotId: [Kinder]}` an, eigene
6-stellige IDs werden übernommen.

### Schritt 11: Kampagnen-Landingpages Arztpraxen (K1, K2, K9)

Stand 17.09.2026. Grundlage: `handoff/kampagne/03_Landingpage_Texte.md`.
Entscheidungen: Kampagnenseiten liegen unter `/arztpraxen/…/` (Elternseite
„Arztpraxen“, Post 163, Entwurf); alle Referenzen dürfen genutzt werden;
die Google-Bewertung bleibt draußen; Grundparameter kommen aus dem Plugin
„Digital Avenue Parameter“ (`wordpress/plugins/da-parameter/`).

Seiten (alle Entwurf, Eltern 163): K1 „Facharztpraxis entlasten“ 169
(`facharztpraxis`), K2 „Empfang entlasten“ 171 (`empfang-entlasten`),
K9 „Betreuung wechseln“ 173 (`betreuung-wechseln`). Aufbau je Seite:

1. Hero Landingpage (Component `951227` als Section-Root; Button 1
   `#kontakt`, Button 2 `#leistungen`).
2. Section `#leistungen` › Container › Feature-Block `25cc6c` mit drei
   Service-Punkten im Slot `7823d9`.
3. Section `#referenz` (bg-alt) › Abschnittskopf (`section-head center`)
   › Div max 560px › Referenzkarte `cbca1c` Pneumologie Eppendorf
   (Platzhalter-Logo Attachment 164, `design-system/assets/`).
4. Template-Element → „LP Arztpraxen: Gemeinsame Module“ (Template 167,
   `noRoot`): Concierge (`0a205a`, Serviceversprechen als Copy und drei
   Timeline-Punkte), Schritte (`steps` + 3× Schritt `719767`), Partner
   (IONOS, Doctolib, Placetel als `tile tile-cream` im `steps`-Raster),
   FAQ (`faq`-Accordion mit fünf Fragen aus dem Kampagnenpaket).
5. Section `#kontakt` › Container › Div `lp-kontakt` (Klasse `lpkont`):
   links Eyebrow, H2, kampagnenspezifische Copy, Direktkontakt; rechts
   Div `lp-form-card` (`lpfcrd`) mit H3 und Template-Element → „LP
   Arztpraxen: Kontaktformular“ (Template 165).

Formular (Template 165, Bricks-Form `lpfrm0`, Klasse `lp-form` `lpform`):
Praxis, Name, E-Mail oder Rückrufnummer, Thema (Select), Nachricht,
HTML-Hinweis „keine Patientendaten“ mit Datenschutzlink, optionale, nicht
vorausgewählte Marketing-Checkbox, versteckte Felder `utm_campaign` und
`utm_source` (`{url_parameter:…}`) und Seitentitel, Honeypot. Aktionen:
Submission speichern + E-Mail an post@digital-avenue.de. Erfolgstext aus
dem Kampagnenpaket. Kein Tracking-Skript.

Weitere Varianten (K3–K8): Seite 169 mit `bricks/duplicate-post`
duplizieren und nur Hero-, Feature-, Referenz- und Kontakt-Texte tauschen;
die gemeinsamen Module kommen automatisch aus Template 167.

Offen: Meta-Titel und -Beschreibung (Bricks hat keine SEO-Felder, dafür
ein SEO-Plugin oder Meta Box nutzen), Seite „Arztpraxen“ (163) füllen,
Branchenseite „Ärzte“ auf `/arztpraxen/` verlinken, Datenschutzseite mit
Abschnitt zur Rechercheansprache, Serviceversprechen nach Plugin-
Installation per `{echo:da_param('serviceversprechen')}` einsetzen (heute
noch als Klartext in Concierge, FAQ und Formular-Erfolgstext).

Bilder (17.09.2026, Higgsfield Soul 2.0, auch im Prototyp als m34–m39):
K1 Hero 176 (m34), Feature 177 (m35); K2 Hero 178 (m36), Feature 179
(m37); K9 Hero 180 (m38), Feature 181 (m39). Auf Staging als PNG
hochgeladen (`upload-media` per URL, der Server holt das Bild selbst; aus
der Cloud ist das CDN gesperrt). Prototyp: `prototype/src/pages/lp-*.html`,
Routen `#lp-facharztpraxis`, `#lp-empfang-entlasten`,
`#lp-betreuung-wechseln`; bewusst nicht im Footer oder in der Navigation
verlinkt, Kampagnenseiten werden nur über den Kampagnenlink erreicht.

`update-element` kennt keine Component-Properties (nur `settings`). Eine
Instanz ändert man über `set-page-elements` mit dem ganzen Seitenbaum;
die IDs bleiben dabei erhalten (so am 17.09.2026 die Bilder getauscht).

`render-elements` zeigt für Template-Elemente zwar das HTML der Templates,
aber nicht deren Klassen-CSS; das erzeugt Bricks erst im Frontend.

### Danach

Header und Footer als Templates, dann Seiten per
`commit-html-css-page-import` (Hero zuerst als Probe), dann Felder und
Post-Typen aus den fertigen Templates ableiten. Siehe
`handoff/BETRIEBSKONZEPT-MCP.md`.
