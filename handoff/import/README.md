# Importdaten für Bricks 2.4 (Staging relaunch.digital-avenue.de)

Erzeugt aus `design-system/colors_and_type.css` und dem Prototyp mit
`node handoff/import/build-import.mjs`. Nach jeder Änderung an Tokens oder
Prototyp neu bauen, nicht von Hand editieren.

Zwei Wege je Schritt: **Import im Style Manager** von Bricks 2.4 (Datei
hochladen, kein MCP nötig) oder **Auftrag an Claude Code** lokal im
Repository mit verbundenem MCP-Server. Die JSON-Dateien liegen im
gespeicherten Format von Bricks (Schema-Bündel `bricks-element-schemas`,
`global/*.json`), ohne Zusatzfelder; Erklärungen stehen in den
Markdown-Dateien daneben. Die Aufträge unten gelten für den MCP-Weg.

Regeln für alle Schritte: zuerst lesen (`get-design-context` und die passende
`list-*`-Ability), Ownership-Werte aus der letzten Antwort weiterreichen,
Schreibaufrufe nacheinander statt parallel, bei `duplicate`-Konflikten das
Vorhandene prüfen statt umbenennen, keine `delete-*`-Abilities, nach jedem
Schritt `handoff/STATUS.md` fortschreiben.

| Schritt | Datei | Ability-Weg | Prüfung |
|---|---|---|---|
| 0 Bestand | – | `list-ability-status`, `get-design-context` | Liste der Abilities erscheint; Design System leer oder bekannt |
| 1 Farben | `01-farben.json` (+ `01-farben.md`) | Style Manager › Colors › Import, oder `create-color-palette` und je Farbe `create-color` | 52 Farben mit Dunkelwert in der Palette „Digital Avenue“ |
| 2 Schriften | `02-schriften.json` | `upload-custom-font-file`, `create-custom-font`, `update-custom-font` | `list-custom-fonts`: Manrope mit Faces |
| 3 Variablen | `03-variablen.json` (+ `03-variablen.md`) | Style Manager › Variables › Import, oder `set-global-variable-categories` und `set-global-variables` | 8 Kategorien, 48 Variablen |
| 4 Theme Style | `04-theme-style.json` | Import im Builder (Theme Styles › Import) oder `create-theme-style` | Stil „Digital Avenue“ aktiv, H1 und Button stimmen |
| 5 Klassen | `05-klassen/klassen.json` (+ `klassen.md`, `klassen.css`) | Style Manager › Classes › Import, oder je Klasse `create-global-class` | 21 Klassen; Button mit `da-btn da-btn-primary` rendern |
| 6 Icons | `06-icons/` (durch den SVG → Bricks Optimizer gelaufen) | ohne Ability: Bricks › Einstellungen › Icons, eigenes Set | Icon-Set im Builder wählbar |
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

Der Theme Style deckt Grundschrift, H1 bis H6, Lead, Links, Farben,
Container-Breite, Section-Abstand, Buttons (Standard, Primary, Secondary,
Light, Outline) und Formularfelder ab. Schatten der Buttons stehen nicht im
Theme Style, weil Bricks-Schatten keine Variablen mit mehreren Ebenen
tragen; sie kommen aus den Global Classes in Schritt 5. H5 und H6 sind
Vorschläge (Style Guide, Entscheidung offen).

## Schritt 5: Global Classes

Auftrag:

> Lies `handoff/import/05-klassen/klassen.json`. Lege die Kategorien Layout,
> Text, Buttons, Icons, Formular und Hilfsklassen an und je Eintrag eine
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

Für FAQ das Bricks-Accordion (Nestable) statt `details` verwenden; für die
Zielgruppen-Tabs später das Tabs-Element. Beides steht im Skill
`bricks-nestable-elements`.

## Danach

Header und Footer als Templates, dann Seiten per
`commit-html-css-page-import` (Hero zuerst als Probe), dann Felder und
Post-Typen aus den fertigen Templates ableiten. Siehe
`handoff/BETRIEBSKONZEPT-MCP.md`.
