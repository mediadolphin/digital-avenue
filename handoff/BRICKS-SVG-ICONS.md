# Bricks: SVG-Icons anlegen und verwenden

Stand 20.09.2026, Bricks 2.4. Beschreibt, wie wir SVG-Icons für Bricks
vorbereiten, in ein eigenes Icon-Set laden und in Elementen, Klassen und
Components verwenden. Wie das Farbsystem-Dokument
(`handoff/BRICKS-FARBSYSTEM-DARKMODE.md`) ist es für eine andere
Claude-Code-Umgebung ohne dieses Repository geschrieben; die Mechanik gilt für
jedes Bricks-Projekt, Beispiele stammen aus digital-avenue.de. Grundlage sind
das gerenderte Frontend des Stagings, die Antworten der MCP-Abilities und die
Import-Dateien, nicht die Bricks-Dokumentation.

## 1. Kurzfassung

- Icons kommen in ein **eigenes Icon-Set** im Icon Manager von Bricks, nicht
  als Inline-SVG und nicht als Bild aus der Mediathek. Nur so lassen sie sich
  im Builder wählen, per MCP setzen und in Components als Property binden.
- Jede SVG-Datei wird vorher **normalisiert**: kein `width`/`height`,
  `viewBox` vorhanden, alle Farben `currentColor`, jede Form mit einer
  Klasse `bx1`, `bx2` …
- Bricks rendert ein Icon aus dem Set als **Inline-SVG** mit der Klasse
  `brxe-icon`. Größe und Farbe kommen aus einer Global Class (`icon`,
  `icon-20`) und aus dem umgebenden Element (`color` erbt über
  `currentColor`). Dadurch schalten Icons im Dunkelmodus mit um, ohne eigene
  Regeln.
- Die mitgelieferten Icon-Bibliotheken (Font Awesome, Ionicons, Themify)
  werden abgeschaltet, damit im Picker nur das eigene Set erscheint.

## 2. SVG-Dateien vorbereiten

### 2.1 Regeln

Ein Icon ist bricks-tauglich, wenn die Datei so aussieht:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" aria-hidden="true">
  <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round" class="bx1"/>
</svg>
```

| Regel | Warum |
|---|---|
| Kein `width`, kein `height` am Wurzelelement | Die Größe kommt aus CSS (`.icon { width: 16px; height: 16px }`). Feste Maße im SVG überschreiben das oder brechen die Skalierung. |
| `viewBox` vorhanden | Ohne `viewBox` skaliert das SVG nicht; alle Icons eines Sets auf denselben Raster (bei uns `0 0 16 16`). |
| `fill` und `stroke` auf `currentColor` (außer `none`, `transparent`, `inherit`, `url(…)`) | Das Icon erbt die Textfarbe des Elternelements. Farbe wird damit über Tokens gesteuert und wechselt im Dunkelmodus mit. |
| Inline-Styles mit Farben ebenfalls auf `currentColor` | Exporte aus Figma oder Illustrator tragen Farben oft im `style`-Attribut. |
| Jede Form (`path`, `circle`, `rect`, `ellipse`, `polygon`, `polyline`, `line`) bekommt eine Klasse `bx1`, `bx2` … | Einzelne Formen lassen sich in Bricks per CSS ansprechen (z. B. zweite Farbe, Animation). Bricks lässt die Klassen beim Sanitizing stehen. |
| `version`, `xml:space`, `enable-background`, `data-name`, XML-Prolog, Kommentare entfernen | Ballast aus Illustrator-Exporten, ohne Wirkung. |
| `aria-hidden="true"` | Icons sind dekorativ; Bedeutung steht im Text oder im `aria-label` des Buttons. |
| Ein Icon, ein Konzept: Strich **oder** Fläche | Strich-Icons über `stroke`, gefüllte über `fill`. Beides gemischt sieht bei Farbwechseln uneinheitlich aus. Bei uns nur `star` mit Fill, der Rest Stroke mit `stroke-width` 1.5 bis 2. |

### 2.2 Werkzeug

Die Regeln sind in zwei Werkzeugen umgesetzt, die identisch arbeiten:

- `handoff/tools/svg-bricks-optimizer.html`: Browser-Tool, SVG hineinziehen,
  Ergebnis mit Änderungsprotokoll kopieren.
- `handoff/tools/svg-bricks-optimize.mjs`: Node-Modul mit derselben Logik,
  als CLI `node handoff/tools/svg-bricks-optimize.mjs ein.svg aus.svg` und
  als Import `optimizeSVG(text) → { output, changes }`. Der Import-Build
  (`handoff/import/build-import.mjs`) verwendet es, um die Icons aus dem
  Prototyp-Sprite zu Einzeldateien zu machen.

Für ein anderes Projekt reicht es, das Node-Modul zu kopieren; es hat keine
Abhängigkeiten. Kernlogik in Kurzform:

```js
// Wurzel: width/height entfernen, viewBox aus width/height ableiten, wenn keiner da ist
// Alle Elemente: fill="…" und stroke="…" → currentColor (außer neutral/url),
//   Inline-Style ebenso, Formen ohne class bekommen bx1, bx2 …
// Leere Elemente selbstschließend, ungenutztes xmlns:xlink entfernen, xmlns sicherstellen
```

### 2.3 Aus einem Sprite

Prototypen verwenden oft ein Sprite (`<symbol id="i-check" viewBox="…">`
plus `<svg class="icon"><use href="#i-check"/></svg>`). Bricks kennt kein
Sprite. Der Build zerlegt es: je `<symbol>` eine Datei mit dem Inhalt des
Symbols und dessen `viewBox`, durch den Optimizer, unter sprechendem Namen
(`i-chev` → `chevron-down.svg`). Der Sprite bleibt die Quelle im Prototyp,
die Einzeldateien sind das Ziel für Bricks.

Digital Avenue: 15 Icons in `handoff/import/06-icons/` (arrow-right,
calendar, check, chevron-down, clock, mail, menu, moon, phone, pin, shield,
star, sun, wrench, x), Liste mit Herkunft in `06-icons/ICONS.md`.

## 3. Icon-Set in Bricks anlegen

### 3.1 Im Builder

Bricks › Einstellungen › Icons (Icon Manager): eigenes Set anlegen, SVG-Dateien
hochladen (Bricks 2.4 erlaubt SVG-Upload in eigenen Sets). Bricks legt jede
Datei als Anhang in der Mediathek ab und speichert im Set `id`, `name`, `url`
und `attachment_id`. Die Standard-Bibliotheken im selben Bildschirm
abschalten.

### 3.2 Per MCP

Abilities des Bricks-MCP-Adapters (Aufruf über `mcp-adapter-execute-ability`
mit `ability_name` und `parameters`):

| Ability | Parameter | Zweck |
|---|---|---|
| `bricks/list-icon-sets` | keine | Eigene Sets (`customIconSets` mit `id`, `name`) und `disabledIconSets` |
| `bricks/create-custom-icon-set` | `name` | Neues Set, liefert die Set-ID (`set_…`) |
| `bricks/upload-custom-icon` | `setId`, `name`, `svg` (Roh-Markup, max. 1 MB) | Icon hochladen; der Server säubert das SVG, legt den Anhang an und trägt es ins Set ein |
| `bricks/list-custom-icons` | `setId` | Icons des Sets mit `id` (`icon_…`), `name`, `url`, `attachment_id` |
| `bricks/delete-custom-icon`, `bricks/delete-custom-icon-set` | IDs | Aufräumen |
| `bricks/set-disabled-icon-sets` | Liste der Bibliotheken | Standard-Bibliotheken ausblenden |

Icon-Abilities brauchen keine Ownership-Kette (anders als Farben und
Klassen). Der Sanitizer lässt `class="bx1"`, `stroke="currentColor"` und
`aria-hidden` stehen; das ist am Frontend geprüft.

Digital Avenue am Staging: Set „Digital Avenue“ mit der ID
`set_nmqwgfdgv`, in Element-Settings als `library: "custom_set_nmqwgfdgv"`
(Präfix `custom_` plus Set-ID). Abgeschaltet: fontawesomeBrands,
fontawesomeRegular, fontawesomeSolid, ionicons, themify.

| Name | Icon-ID | Anhang |
|---|---|---|
| arrow-right | `icon_3rfl8l1ba` | 38 |
| calendar | `icon_g6yg8p2f5` | 37 |
| check | `icon_n6tla3o2l` | 36 |
| chevron-down | `icon_w8v2ef0ed` | 35 |
| clock | `icon_amir2wx4j` | 34 |
| mail | `icon_7ancnuany` | 33 |
| menu | `icon_v04b2rfnc` | 32 |
| moon | `icon_8y857i2ii` | 31 |
| phone | `icon_b6n9a68e9` | 30 |
| pin | `icon_1h1jdbtqh` | 29 |
| shield | `icon_cuhsvxxn9` | 28 |
| star | `icon_vxesj52o3` | 27 |
| sun | `icon_aj2jf6f3a` | 26 |
| wrench | `icon_b5gsopvlb` | 25 |
| x | `icon_ekrpbw1ba` | 24 |

Die IDs gelten nur für dieses Staging. Vor dem Setzen per MCP immer
`list-custom-icons` aufrufen und die IDs von dort nehmen.

## 4. Icons in Elementen verwenden

### 4.1 Das Icon-Element

Ein Icon aus dem Set ist ein Element `icon` mit dem Objekt `icon`:

```json
{
  "id": "chk001", "name": "icon", "parent": "…", "label": "Haken",
  "settings": {
    "icon": {
      "library": "custom_set_nmqwgfdgv",
      "svg": { "id": 36, "icon_id": "icon_n6tla3o2l", "url": "https://…/uploads/2026/09/check.svg" }
    },
    "iconSize": "16px",
    "_cssGlobalClasses": ["daiconx13"]
  }
}
```

- `library`: `custom_` plus Set-ID. `svg.id` ist die Anhang-ID,
  `svg.icon_id` die Icon-ID, `svg.url` die Datei-URL; alle drei angeben.
- `iconSize` ist das Bricks-Control für die Größe; wir setzen es passend zur
  Klasse (16px oder 20px), damit Builder-Vorschau und Frontend übereinstimmen.
- `_cssGlobalClasses` mit der Global Class `icon` (bei uns ID `daiconx13`)
  oder `icon-20` (`daicon214`).
- Keine `iconColor`-Einstellung am Element. Die Farbe kommt vom Elternelement
  oder von der Klasse des Kontexts (Abschnitt 4.3).

Gerendert wird daraus:

```html
<svg class="brxe-chk001 brxe-icon icon" xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 16 16" fill="none" aria-hidden="true">
  <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" … class="bx1"/>
</svg>
```

Also echtes Inline-SVG, kein `<i>` und kein `<img>`. Deshalb wirken
`color`, `stroke-width` und Transforms aus CSS direkt.

### 4.2 Icons in anderen Elementen

Dasselbe `icon`-Objekt (`library` + `svg`) nehmen alle Bricks-Controls vom
Typ Icon an:

- **Toggle – Mode** (Hell/Dunkel): `icon` und `iconDark`, dazu `iconSize`,
  `iconDarkSize` (Beispiel im Farbsystem-Dokument, Abschnitt 6).
- **Toggle** (Offcanvas/Burger): `icon` = menu, gerendert als Button.
- **Button**: `icon` plus `iconPosition` (`left`/`right`), z. B. arrow-right
  am Textlink-Button.
- Accordion, Nav Nested (Dropdown-Pfeil), Offcanvas-Schließen: jeweils ein
  Icon-Control mit demselben Objekt.

### 4.3 Größe und Farbe über Klassen

Zwei Global Classes für die Größe, Kategorie Icons:

```css
.icon    { width: 16px; height: 16px; flex-shrink: 0; }
.icon-20 { width: 20px; height: 20px; }
```

`flex-shrink: 0`, weil Icons fast immer in Flex-Zeilen neben Text stehen
und sonst zusammengedrückt werden.

Die Farbe setzt der Kontext, als Sub-Selektor in der Klasse des
umgebenden Elements, immer mit Token:

```css
.hero-trust .icon      { color: var(--da-teal); }
.service-card li .icon { color: var(--da-teal); margin-top: 2px; }
.checks .icon          { color: var(--da-teal); margin-top: 4px; }
.textlink .icon        { transition: transform var(--da-t); }
.textlink:hover .icon  { transform: translateX(3px); }
.faq summary .icon     { color: var(--da-teal); transition: transform var(--da-t); }
.faq details[open] summary .icon { transform: rotate(180deg); }
```

Bricks druckt solche Sub-Selektoren aus dem Custom CSS einer Global Class
als `.klasse .icon { … }` ins Frontend (am Staging geprüft). Der kleine
`margin-top` gleicht die Grundlinie bei Icons neben mehrzeiligem Text aus.

Einzelne Formen ansprechen, wenn ein Icon zwei Farben braucht:

```css
.stat .icon .bx1 { color: var(--da-teal); }
.stat .icon .bx2 { color: var(--da-sand); }
```

### 4.4 Icons in Components

In Components immer das Icon-Element aus dem Set verwenden. Inline-SVG aus
dem HTML-Konverter (`convert-html-css-to-bricks-data`) lässt sich per MCP
nicht speichern, weil Bricks Code-Elemente als sensibel behandelt. Beispiel
Service-Punkt (Component `0b9bf7`): ein `div` mit Klasse aus der Karte, darin
das Icon-Element check plus ein Text-Element mit der Property Text. Soll das
Icon austauschbar sein, wird das `icon`-Objekt als Property vom Typ Icon
gebunden, mit dem Standard-Icon als Default (Properties ohne Default leeren
das Element).

## 5. Prototyp und Bricks zusammenhalten

- Prototyp: ein Sprite im Head, Icons als `<svg class="icon"><use href="#i-check"/></svg>`,
  dieselben Klassen `icon` und `icon-20`, dieselben Kontext-Regeln in
  `prototype/css/site.css`.
- Bricks: Einzeldateien im Set, Icon-Element mit Klasse `icon`, Kontext-Regeln
  in den Global Classes.
- Neue Icons: Symbol in den Sprite des Prototyps, Name in `ICON_NAMES` des
  Import-Builds eintragen, Build laufen lassen, Datei aus `06-icons/` per
  `upload-custom-icon` ins Set. Danach `list-custom-icons` für die IDs.
- Gleicher Raster für alle Icons (16 × 16), gleiche Strichstärke, gleiche
  Rundung (`stroke-linecap: round`, `stroke-linejoin: round`). Ein Icon aus
  einer anderen Bibliothek fällt sonst sofort auf.

## 6. Übertragung auf ein neues Projekt

1. Icons auswählen, ein Raster und eine Strichstärke festlegen.
2. Jede Datei durch den Optimizer (Node-Modul kopieren oder die Regeln aus
   2.1 anwenden). Ergebnis prüfen: kein `width`/`height`, `viewBox`,
   `currentColor`, Klassen `bx…`.
3. In Bricks ein Set anlegen (`create-custom-icon-set` oder Icon Manager),
   Dateien hochladen (`upload-custom-icon` mit dem Roh-Markup), die
   Standard-Bibliotheken abschalten (`set-disabled-icon-sets`).
4. Global Classes `icon` und `icon-20` (oder die Größen des Projekts) mit
   `width`, `height`, `flex-shrink: 0` anlegen, Kategorie Icons.
5. Farbe nie am Icon, sondern als `.kontext .icon { color: var(--token) }` in
   der Klasse des umgebenden Elements.
6. Icon-Elemente mit `icon.library = custom_<setId>`, `svg {id, icon_id, url}`
   aus `list-custom-icons`, `iconSize` und der Größenklasse setzen.
7. Frontend prüfen: Inline-SVG mit `brxe-icon`, Farbe wechselt im
   Dunkelmodus mit, Größe stimmt in Builder und Frontend.

## 7. Stolperfallen

- **SVG als Bild** (`<img src="icon.svg">` oder Bild-Element): Farbe lässt
  sich nicht per CSS setzen, kein Dunkelmodus, kein Hover. Nur für Logos.
- **Inline-SVG im Code-Element**: nicht per MCP speicherbar, im Builder nur
  mit Code-Freigabe, nicht als Property bindbar.
- **`width`/`height` im SVG**: überschreibt die Klasse oder verzerrt.
- **Feste Farbe im SVG** (`stroke="#305b75"`): bleibt im Dunkelmodus dunkel.
- **`iconSize` und Klasse widersprechen sich**: Builder zeigt die eine,
  Frontend die andere Größe. Beide gleich setzen.
- **Anhang statt Icon**: ein hochgeladenes SVG in der Mediathek ist noch kein
  Icon im Set. Nur `upload-custom-icon` oder der Icon Manager tragen es ein.
- **IDs raten**: `svg.id`, `icon_id` und `url` müssen zusammenpassen; sonst
  zeigt der Builder ein leeres Icon. Immer aus `list-custom-icons`.
- **Standard-Bibliotheken an**: Redakteure wählen Font-Awesome-Icons, die
  nicht zum Set passen. Abschalten.

## 8. Dateien im Projekt Digital Avenue

| Datei | Inhalt |
|---|---|
| `handoff/import/06-icons/*.svg`, `ICONS.md` | 15 fertige Icons und Herkunft |
| `handoff/tools/svg-bricks-optimizer.html` | Browser-Tool |
| `handoff/tools/svg-bricks-optimize.mjs` | Node-Modul und CLI mit denselben Regeln |
| `handoff/import/build-import.mjs` | zerlegt den Prototyp-Sprite (`ICON_NAMES`) in Einzeldateien |
| `handoff/import/05-klassen/klassen.json` | Klassen `icon` (`daiconx13`), `icon-20` (`daicon214`), Kontext-Regeln in `textlink`, `checks`, `service-card`, `faq` |
| `design-system/assets/icons.svg` | Sprite des Design Systems (calendar, star, wrench) |
| `prototype/css/site.css` | Kontext-Regeln des Prototyps |
