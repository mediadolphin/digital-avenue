# Importdaten für Bricks 2.4 (Staging relaunch.digital-avenue.de)

Erzeugt aus `design-system/colors_and_type.css` und dem Prototyp mit
`node handoff/import/build-import.mjs`. Nach jeder Änderung an Tokens oder
Prototyp neu bauen, nicht von Hand editieren.

Ausführung: lokal in Claude Code im Repository, MCP-Server verbunden
(`/mcp` zeigt `relaunch-digital-avenue-de` als connected), Bricks-Skills aus
`.claude/skills/` geladen. Am Staging sind unter Bricks › AI alle Abilities
eingeschaltet. Jeder Schritt unten ist ein Auftrag zum Kopieren in den Chat.

Regeln für alle Schritte: zuerst lesen (`get-design-context` und die passende
`list-*`-Ability), Ownership-Werte aus der letzten Antwort weiterreichen,
Schreibaufrufe nacheinander statt parallel, bei `duplicate`-Konflikten das
Vorhandene prüfen statt umbenennen, keine `delete-*`-Abilities, nach jedem
Schritt `handoff/STATUS.md` fortschreiben.

| Schritt | Datei | Ability-Weg | Prüfung |
|---|---|---|---|
| 0 Bestand | – | `list-ability-status`, `get-design-context` | Liste der Abilities erscheint; Design System leer oder bekannt |
| 1 Farben | `01-farben.json` | `create-color-palette`, je Farbe `create-color` (raw, light, dark) | `list-color-palettes`: 36 Farben mit Dunkelwert |
| 2 Schriften | `02-schriften.json` | `upload-custom-font-file`, `create-custom-font`, `update-custom-font` | `list-custom-fonts`: Manrope mit Faces |
| 3 Variablen | `03-variablen.json`, `03-dunkel-overrides.css` | `set-global-variable-categories`, `set-global-variables`; Overrides als Custom CSS | `list-global-variables`: 8 Kategorien, 48 Variablen |
| 4 Theme Style | `04-theme-style.json` | `create-theme-style` mit `conditions: [{ main: "any" }]` | `get-theme-styles`: Einstellungen und Bedingung vorhanden |
| 5 Klassen | `05-klassen/klassen.json` | je Klasse `create-global-class` mit Custom CSS | `list-global-classes`: 21 Klassen; `render-elements` mit einem Button |
| 6 Icons | `06-icons/` | ohne Ability: Bricks › Einstellungen › Icons, eigenes Set | Icon-Set im Builder wählbar |
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
> Keine Shades generieren, die Abstufungen sind eigene Tokens. Prüfe zum
> Schluss mit `list-color-palettes`, dass 36 Farben mit Dunkelwert vorhanden
> sind, und rendere ein Element mit `background: var(--da-teal)`.

Hinweis: Die sechs Status-Farben stehen im Design System als `oklch()`;
die Datei enthält sie als Hex (Original unter `source`).

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
> `list-global-variables`. Melde danach, ob eine Ability das Custom CSS unter
> Bricks › Einstellungen › Custom Code schreiben kann; wenn nicht, sage mir,
> dass ich `03-dunkel-overrides.css` dort von Hand einfügen muss.

Warum die Overrides: Bricks-Variablen haben keinen Dunkelwert, nur Farben.
Die sieben Schatten-Variablen bekommen ihren Dunkelwert über diese Regel.

## Schritt 4: Theme Style

Auftrag:

> Lies `handoff/import/04-theme-style.json`. Prüfe jede Wertform gegen das
> Schema in
> `.claude/skills/bricks-element-schemas/references/schema-resolved/global/theme-styles.json`
> (Typography-Objekte, Border, Padding, Farben als `var()`-Referenz) und
> passe die Form an, nicht die Werte. Lege den Theme Style „Digital Avenue“
> mit `create-theme-style` und `conditions: [{ main: "any" }]` an. Lies ihn
> mit `get-theme-styles` zurück und rendere ein H1, ein H2, einen Absatz und
> einen Button zur Kontrolle.

Der Theme Style deckt Grundschrift, H1 bis H6, Lead, Links, Farben,
Container-Breite, Section-Abstand, Buttons und Formularfelder ab. H5 und H6
sind Vorschläge (siehe Style Guide, Entscheidung offen).

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

Ohne Ability. In Bricks › Einstellungen › Icons ein eigenes Set „Digital
Avenue“ anlegen und die 15 SVG-Dateien aus `06-icons/` hochladen (Bricks 2.4
erlaubt SVG-Upload in eigenen Sets). Alle Icons sind 16×16 mit Strich in
`currentColor`; `star` färbt über `fill`. Klappt der Upload nicht: Dateien
als Medien hochladen (SVG-Upload unter Bricks › Einstellungen freigeben)
und im Builder als SVG-Element mit Global Class `icon` oder `icon-20`
verwenden. Das Import-Tool aus dem Gespräch liegt nicht im Repository;
sobald es da ist, ersetzt es diesen Handschritt.

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
