# Merkregeln für den Aufbau in Bricks

Kurze Regeln, die sich beim Aufbau am Staging bewährt haben. Zum
Nachschlagen; jede Regel ein Absatz, mit Datum. Neue Regeln unten anfügen.

## Struktur

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

## Theme Style

**Section-Abstand steht in der Gruppe Section, die Breite in der Gruppe
Container.** (11.09.2026, ergänzt 13.09.2026) Die Felder „Root container
padding“ und „Root container width“ unter General tragen ein rotes Symbol,
sind Altlasten und wirken nicht auf Sections: `general.containerMaxWidth`
gibt `.brxe-container.root` aus, und Container in Sections tragen kein
`root`. Die Breite gehört als `container.width` (Feld „Width“) in die
Gruppe Container; das ergibt `.brxe-container { width: 1240px }` und
überschreibt Bricks' Vorgabe von 1100px. `widthMax` allein reicht nicht,
weil es die Vorgabe-Breite nicht anhebt. Am Staging am 13.09.2026
umgestellt, der Build schreibt jetzt `width`.

**HTML-Schriftgröße im Theme Style auf 100 % setzen.** (11.09.2026)
Ohne den Wert rechnet Bricks mit 62,5 % (1rem = 10px), und alles in rem
schrumpft. Unsere Tokens stehen in Pixel und sind nicht betroffen, Plugins
und WordPress-Blöcke schon.

**Skalen-Generator für Spacing und Typography nicht verwenden.**
(11.09.2026) Er erzeugt Verhältnisreihen in rem. Unser Design System sind
Vielfache von 4px als feste `clamp()`-Werte. Die Kategorien Abstände und
Schriftgrößen bleiben ohne Skalen-Konfiguration; in den Controls sind sie
normal wählbar.

## Farben und Variablen

**Alles, was im Dunkelmodus anders aussieht, ist eine Farbe mit Hell- und
Dunkelwert im Color Manager.** (11.09.2026) Variablen haben keinen
Dunkelwert. Schatten und Glasflächen referenzieren deshalb nur Farb-Tokens
(`--da-ink-*`, `--da-teal-glow*`, `--da-glass*`); dann schaltet Bricks
nativ um, ohne eigene CSS-Regeln. Am Staging mit dem Element „Toggle – Mode“ bestätigt.

**Importdateien nur im gespeicherten Format von Bricks, ohne
Zusatzfelder.** (11.09.2026) Der Style Manager lehnt Dateien mit fremden
Schlüsseln ab („Unable to open ZIP file“). Erklärungen gehören in die
Markdown-Datei daneben. Vorlage ist immer ein Export aus Bricks.

## Klassen

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

## Components

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
(11.09.2026, ergänzt 13.09.2026) Accordion: `accordion-title-wrapper` und
`accordion-content-wrapper`; Dropdown: `brx-dropdown-content`; Tabs:
`tab-menu`, `tab-title`, `tab-content`, `tab-pane`; **Nav (Nestable):
ein Block mit `customTag: ul` und `brx-nav-nested-items`, in dem alle
Menüpunkte liegen, der Toggle (Burger) bleibt direktes Kind der Nav.**
Ohne diese Klassen läuft das Bricks-Skript nicht. Beim Header fehlte der
Nav-Wrapper: Bricks hängt Ausblenden unter dem Breakpoint, Drawer und
`brx-open` an genau diese `ul`, deshalb blieb das Menü sichtbar und hinter
dem Burger war nichts.

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
(11.09.2026, präzisiert 13.09.2026) Bricks erzeugt aus den Controls eine
Regel wie `.tiles.brxe-div { grid-template-columns: … }`. Ein
`@media { .tiles { … } }` im Custom-CSS verliert dagegen über die
Spezifität. Deshalb in Media-Queries immer
`.tiles.brxe-div, .tiles.brxe-block, .tiles.brxe-container` schreiben.
Gleiches gilt für Regeln, die einen Control-Wert überschreiben sollen
(`.tile-photo { padding: 0 }` gegen `.tile.brxe-div { padding }`).

**Grundwerte, die eine Media-Query überschreibt, gehören in die Controls
der Klasse, nicht ins Custom-CSS.** (13.09.2026) Bricks gibt bei einer
Global Class zuerst die CSS aus den Controls aus und danach `_cssCustom`;
der MCP-Adapter sortiert `@media`-Blöcke innerhalb von `_cssCustom` beim
Speichern nach oben (eine Umsortierung kommt unverändert zurück). Steht
die Grundregel im Custom-CSS, landet sie hinter der Media-Query und
gewinnt bei gleicher Spezifität. Deshalb `display`, `grid-template-columns`,
`gap`, `grid-auto-rows`, `align-items` als Controls
(`_display`, `_gridTemplateColumns`, `_gridGap`, `_gridAutoRows`,
`_alignItemsGrid`) setzen und im Custom-CSS nur die Media-Queries lassen
(so funktionieren `tiles`, `steps`, `mosaic`, `audience`). Zielt die
Media-Query auf ein Kind (`.lp-hero .lp-hero-grid`, `.feature.flip figure`),
hilft kein Control; dann bekommt der Media-Query-Selektor die Element-Klasse
zusätzlich (`.lp-hero.brxe-section .lp-hero-grid`), damit er über die
Spezifität gewinnt.

**Layout-Divs im Container brauchen `width: 100%`.** (13.09.2026) Bricks
setzt am Container `align-items: flex-start`; ein Div darin wird nicht
gestreckt, sondern so breit wie sein Inhalt. Ein Grid mit `1fr`-Spalten
wächst dann mit dem längsten Text und lässt rechts einen Rand (Mosaik am
Tablet). Deshalb bei Rasterklassen (`mosaic`, künftig `tiles`, `steps`,
`refs`, `quotes`) `_width: 100%` als Control setzen.

**Raster: Spalten als `minmax(0, …fr)`, Reihen als `minmax(…, auto)`,
Anordnung über `grid-template-areas`.** (13.09.2026) `1fr` heißt
`minmax(auto, 1fr)`; ein langer Text kann die Spalte aufblähen. `minmax(0,
4fr)` hält das Verhältnis, Kacheln bekommen `min-width: 0`. Feste
`grid-auto-rows: 500px` schneiden längere Texte ab, `minmax(500px, auto)`
lässt die Reihe wachsen. Die Anordnung je Breite steht in
`grid-template-areas`, die Kacheln tragen nur `grid-area: praxis` usw.;
umstellen heißt dann eine Zeile ändern. Weil es für `grid-template-areas`
kein Control gibt, stehen alle drei Zustände in sich ausschließenden
Media-Queries (`min-width: 1081px`, `641px bis 1080px`, `max-width:
640px`); so spielt die Reihenfolge im Custom-CSS keine Rolle.

## Templates

**Header-Template mit „Sticky header“ und „Sticky on scroll“.** (13.09.2026)
Nur `headerSticky` macht den Header `position: fixed`; er liegt dann über
dem Seitenanfang, und der obere Section-Abstand des Heros verschwindet
hinter den 72px Nav-Höhe. Mit `headerStickyOnScroll` wird er `position:
sticky`, bleibt wie im Prototyp im Fluss und der Hero beginnt darunter.

**Kein `backdrop-filter` (und kein `transform`, `filter`) auf Header-Section
oder -Container.** (13.09.2026) Diese Eigenschaften machen das Element zum
Containing Block für `position: fixed`. Der mobile Drawer der Nav ist
`fixed` und liegt zwingend in der Nav; mit dem Blur auf der Section war
er nur 48px hoch und lag hinter dem Hero. Der Blur sitzt jetzt auf
`.site-nav.brxe-section::before` (absolut, `inset: 0`, `z-index: -1`),
die Section bleibt filterfrei.

**Nav-Controls gibt Bricks mit ID-Selektor aus, und zwar nach der
Element-CSS der Kinder.** (13.09.2026) `itemPadding`, `itemTypography`
usw. werden zu `#brxe-navmn1 :where(.brx-nav-nested-items > li > a)`
(Spezifität eines IDs). Eine Klasse verliert immer, und auch Controls am
Kind (`#brxe-navcta`) verlieren, weil Bricks sie vor der Nav-Regel
ausgibt. Wer einen einzelnen Menüpunkt anders gestalten will (CTA-Button
im Drawer), braucht `!important` in der Klasse; das ist hier bewusst so.

**Toggle-Element: der offene Zustand kommt per CSS, nicht per zweitem
Icon.** (13.09.2026) Das Toggle hat nur ein Icon-Control. Beim Öffnen
setzt Bricks `aria-expanded="true"` und die Klasse `is-active` auf den
Button. Darauf reagiert die Klasse `nav-burger`: SVG ausblenden, X aus
zwei Pseudo-Elementen in `currentColor`.

**Was mobil anders aussehen soll, darf nicht in Nav-Controls stehen.**
(13.09.2026) Dropdown-Controls der Nav (`dropdownBackgroundColor`,
`dropdownBorder`, …) gelten in beiden Zuständen mit ID-Spezifität; die
Drawer-Variante in der Klasse verliert dann. Deshalb Dropdown-Optik nur in
der Klasse `nav-menu`, Controls der Nav nur für das, was Desktop und
Drawer teilen.

**Global Classes immer per ID in `_cssGlobalClasses` referenzieren.**
(13.09.2026) `_cssClasses: "name"` schreibt nur den Klassennamen ins HTML;
Bricks gibt das CSS einer Global Class nur aus, wenn ein Element sie per
ID referenziert. Für Kind-Elemente, die nur ein Selektor der Klasse
anspricht (`.check-dialog .dialog-head`), reicht `_cssClasses`.

**Buttons, die ein Popup öffnen, sind `tag: button` ohne Link.**
(13.09.2026) Mit `href` (auch `#anker`) läuft die Klick-Interaktion
„show popup“ nicht. Interaktionen stehen am Element; auf einer Global
Class nimmt der MCP-Adapter `_interactions` nicht an.

## Icons

**SVGs vor dem Upload durch den SVG → Bricks Optimizer.** (11.09.2026)
Kein `width`/`height`, `viewBox` vorhanden, Farben `currentColor`, jede
Form mit Klasse `bx1`, `bx2` … Tool unter `handoff/tools/`, im Build
eingebaut.

## Arbeitsweise

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

## Hosting

**Plesk liefert ohne `.htaccess` keine schönen Adressen.** (11.09.2026)
Fehlt die Datei im WordPress-Stammverzeichnis, landen `/wp-json/` und alle
Unterseiten in der Plesk-404, während `?rest_route=` und `?p=` weiter
gehen. Abhilfe: Standard-`.htaccess` von WordPress anlegen (Block
`# BEGIN WordPress` mit den Rewrite-Regeln), dann Permalinks einmal
speichern. Erkennungszeichen: eine HTML-Fehlerseite des Hosters statt einer
JSON-Antwort von WordPress. Die MCP-Adresse in `.mcp.json` ist die dokumentierte Form
`/wp-json/mcp/mcp-adapter-default-server`; sie setzt funktionierende
Rewrite-Regeln voraus.
