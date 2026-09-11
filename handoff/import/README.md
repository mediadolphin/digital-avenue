# Importdaten für Bricks 2.4 (Staging relaunch.digital-avenue.de)

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

## Schritt 0: Bestand aufnehmen

Auftrag:

> Verbinde dich mit dem Bricks-Staging. Rufe `bricks/list-ability-status` und
> `bricks/get-design-context` auf und fasse zusammen, welche Paletten,
> Variablen, Theme Styles, Global Classes und Components schon existieren.
> Schreibe nichts.

## Schritt 1: Farben

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

## Schritt 2: Schriften

Auftrag:

> Lies `handoff/import/02-schriften.json`. Lade
> `design-system/fonts/Manrope-VariableFont_wght.woff2` als Base64 mit
> `upload-custom-font-file` hoch, lege die Familie „Manrope“ mit
> `create-custom-font` an und setze `fontFaces` mit `update-custom-font`.
> Versuche zuerst den Schlüssel `"200 800"` für die variable Achse; lehnt
> Bricks das ab, verwende `fontFacesFallback` aus der Datei. Prüfe mit
> `list-custom-fonts`. Jost bleibt Google Font: prüfe mit
> `list-settings-schema`, ob Google Fonts aktiv sind, und melde das Ergebnis.

## Schritt 3: Variablen

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

## Schritt 4: Theme Style

`04-theme-style.json` liegt im Export-Format von Bricks 2.4 RC2 (wie die
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

## Schritt 5: Global Classes

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

## Schritt 6: Icons

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

## Schritt 7: Components

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

## Schritt 8: Header

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

## Schritt 9: Footer und Hero der Startseite

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
farben `da_glass` (hell 0.72, dunkel 0.72), `da_glass_border` (hell 0.55)
und `da_glass_sand` (hell 0.78, dunkel 0.78) per `bricks/update-color`
gesenkt; Tokens in `design-system/colors_and_type.css` gleich. Service-
Karte: Selektor `.sc-title` hat jetzt `line-height: 1.3` (vorher erbte
der Titel die Absatz-Zeilenhöhe).

Nächste Schritte: mobiles Menü (Bricks 2.4 rendert die Nav-Kinder ohne
`ul.brx-nav-nested-items`, deshalb greifen Bricks' Mobile-Regeln nicht;
Alternative Offcanvas-Element), Startseite unterhalb des Heros aus den
Components (Mosaik, Kacheln, Schritte, Referenzen, Kundenstimmen,
Digital-Check), Popup Digital-Check mit Formular.

## Danach

Header und Footer als Templates, dann Seiten per
`commit-html-css-page-import` (Hero zuerst als Probe), dann Felder und
Post-Typen aus den fertigen Templates ableiten. Siehe
`handoff/BETRIEBSKONZEPT-MCP.md`.
