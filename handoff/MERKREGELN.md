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

**Media-Query mit gleichem Selektor wie die Basisregel verliert.**
(17.09.2026) Bricks gibt `@media`-Blöcke vor den Basisregeln aus. Steht in
beiden dieselbe Selektorstärke (`.lp-kontakt.brxe-div`), gewinnt die
Basisregel auch auf dem Handy. Deshalb im Media-Block die Klasse doppeln:
`.lp-kontakt.lp-kontakt.brxe-div`. `render-elements` (summary) meldet den
Fall als `responsive_override_precedes_base_rule`; nach jedem Klassen-
Anlegen einmal prüfen. Korrigiert für `lp-kontakt`, `lp-form`, `audience`,
`tabs`.

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

**Media-Queries in Klassen brauchen die Element-Klasse im Selektor, und eine Stufe mehr Spezifität.**
(11.09.2026) Bricks erzeugt aus den Controls eine Regel wie
`.tiles.brxe-div { grid-template-columns: … }` und gibt Media-Queries
davor aus. `@media { .tiles { … } }` verliert dann doppelt (Spezifität
und Reihenfolge). Deshalb in Media-Queries immer
`.tiles.brxe-div, .tiles.brxe-block, .tiles.brxe-container` schreiben.
Gleiches gilt für Regeln, die einen Control-Wert überschreiben sollen
(`.tile-photo { padding: 0 }` gegen `.tile.brxe-div { padding }`).

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

