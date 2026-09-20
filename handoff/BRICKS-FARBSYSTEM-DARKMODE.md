# Bricks: Farbsystem und Hell/Dunkelmodus

Stand 20.09.2026, Bricks 2.4. Beschreibt, wie Farben und der Dunkelmodus in
Bricks funktionieren und wie wir sie für digital-avenue.de umgesetzt haben.
Das Dokument ist so geschrieben, dass es in einer anderen Claude-Code-Umgebung
ohne dieses Repository verwendbar ist. Projektbezogene Beispiele stehen
jeweils als solche gekennzeichnet; die Mechanik gilt für jedes Bricks-Projekt.
Grundlage sind das gerenderte Frontend des Stagings, die Antworten der
Bricks-MCP-Abilities und die Import-Dateien des Projekts, nicht die
Bricks-Dokumentation.

## 1. Kurzfassung

- Bricks kennt keine „Dark-Mode-Klassen“. Der Dunkelmodus ist ein Attribut
  `data-brx-theme="dark"` auf `<html>`, das ein kleines Bricks-Skript setzt.
- Jede Farbe im Bricks Color Manager kann einen Hell- und einen Dunkelwert
  haben. Bricks druckt daraus selbst zwei CSS-Blöcke ins Frontend:
  `:root { --token: hell }` und `:root[data-brx-theme="dark"] { --token: dunkel }`.
- Deshalb gilt die eine Regel: **Alles, was im Dunkelmodus anders aussehen
  soll, ist eine Farbe mit Hell- und Dunkelwert im Color Manager.** Klassen,
  Theme Style und Elemente referenzieren nur `var(--token)`, nie Hexwerte.
- Was keine Farbe ist (Logos, Bildfilter), bekommt eine eigene CSS-Regel unter
  `:root[data-brx-theme="dark"]`. Das sind bei uns drei Regeln, sonst nichts.
- Der Umschalter ist das Bricks-Element „Toggle – Mode“ im Header. Bricks
  tauscht die Icons und speichert die Wahl selbst.

## 2. Wie Bricks den Dunkelmodus technisch umsetzt

### 2.1 Das Attribut

Bricks setzt `data-brx-theme` auf dem `<html>`-Element (JavaScript:
`document.documentElement.dataset.brxTheme`). Mögliche Werte: `light`,
`dark`. Der CSS-Selektor für alles Dunkle ist deshalb immer

```css
:root[data-brx-theme="dark"] { … }
```

Im Frontend liegt dazu das Skript `bricks-dl-mode-js-after` im Head. Es
liest `localStorage["brx_mode"]`, fällt auf den in Bricks eingestellten
Standardmodus zurück und wertet `auto` über `prefers-color-scheme` aus:

```js
let savedTheme = localStorage.getItem("brx_mode");
let defaultMode = "light";               // aus den Bricks-Einstellungen
let currentTheme = savedTheme || defaultMode;
if (currentTheme === "auto") {
  let prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.dataset.brxTheme = prefersDark ? "dark" : "light";
} else {
  document.documentElement.dataset.brxTheme = currentTheme;
}
```

Das Skript läuft vor dem ersten Rendern, es gibt kein Aufblitzen des
Hellmodus. Der Standardmodus (`defaultMode`) kommt aus den
Bricks-Einstellungen; am Staging steht er auf `light`. Soll die Seite ohne
gespeicherte Wahl der Systemeinstellung folgen, muss dort `auto` stehen.
Digital Avenue: im Prototyp galt ohne Wahl die Systemeinstellung, am Staging
gilt `light`. Das ist eine offene Entscheidung, keine technische Grenze.

### 2.2 Die Palette wird zu CSS-Variablen

Bricks druckt die Farben des Color Managers als Inline-CSS
(`<style id="bricks-frontend-inline-css">`) in dieser Form:

```css
:root { … --da-teal: #305b75; --da-teal-hover: #264a60; … }
:root[data-brx-theme="dark"] { --da-teal: #4d8aa0; --da-teal-hover: #5e9cb3; … }
```

Der Dunkelblock enthält nur Farben mit `darkModeEnabled: true`. Es gibt
deshalb keine eigene Token-CSS-Datei, die in Bricks eingebunden werden müsste:
die Palette **ist** die Token-Datei zur Laufzeit. Zusätzlich registriert
WordPress dieselben Farben als Block-Editor-Presets
(`--wp--preset--color--da-teal`); das ist Beiwerk und wird nicht verwendet.

### 2.3 Was Bricks nicht macht

- `color-scheme` setzt Bricks nicht. Formularfelder, Scrollbalken und
  Systemsteuerelemente folgen deshalb ohne eigenes Zutun dem Hellmodus. Die
  Token-Datei des Prototyps enthält die beiden Zeilen; in Bricks gehören sie
  ins Custom CSS (Bricks › Einstellungen › Custom Code oder Theme Style ›
  Custom CSS). Am Staging von Digital Avenue fehlen sie noch (Stand
  20.09.2026, offener Punkt):

  ```css
  :root { color-scheme: light; }
  :root[data-brx-theme="dark"] { color-scheme: dark; }
  ```

- Bricks-Variablen (Variablen-Manager, z. B. Abstände, Radien, Schatten) haben
  **keinen** Dunkelwert. Nur Farben haben einen. Daraus folgt Abschnitt 4.2.
- Bilder, SVG-Logos und Filter schaltet Bricks nicht um. Dafür braucht es
  eigene Regeln (Abschnitt 5).

## 3. Der Color Manager als Token-Speicher

### 3.1 Datenmodell einer Farbe

Jede Farbe einer Palette ist ein Objekt mit diesen Feldern:

| Feld | Bedeutung | Beispiel |
|---|---|---|
| `id` | Schlüssel in Bricks, Buchstaben, Ziffern, Unterstrich | `da_teal` |
| `raw` | Der Wert, den Bricks in Elementen und Klassen einsetzt | `var(--da-teal)` |
| `light` | Wert im Hellmodus, wird als `--da-teal` in `:root` gedruckt | `#305b75` |
| `dark` | Wert im Dunkelmodus, wird in `:root[data-brx-theme="dark"]` gedruckt | `#4d8aa0` |
| `darkModeEnabled` | `true`, sonst fehlt die Farbe im Dunkelblock | `true` |

Der Variablenname, den Bricks druckt, ist der aus `raw`. `id` und
Variablenname sollten sich nur durch Unterstrich gegen Bindestrich
unterscheiden, damit man beides zuordnen kann.

Format der gespeicherten Palette (Style Manager › Colors › Import/Export):

```json
{
  "id": "da_palette",
  "name": "Digital Avenue",
  "colors": [
    { "id": "da_teal", "raw": "var(--da-teal)", "light": "#305b75", "dark": "#4d8aa0", "darkModeEnabled": true },
    { "id": "da_glass", "raw": "var(--da-glass)", "light": "rgb(255 255 255 / 0.84)", "dark": "rgb(29 51 64 / 0.84)", "darkModeEnabled": true }
  ]
}
```

Halbtransparente Werte (`rgb(r g b / a)`) sind erlaubt und werden genauso
gedruckt. Das nutzen wir für Schatten, Glasflächen und Chips.

### 3.2 Was in die Palette gehört und was nicht

- Jede Farbe, die irgendwo im Design vorkommt, auch die Abstufungen.
  Keine Shades über den Bricks-Generator erzeugen: Abstufungen sind eigene,
  benannte Tokens mit eigenem Dunkelwert, weil eine automatische Aufhellung
  im Dunkelmodus falsch liegt.
- Auch Alpha-Farben für Schatten (`--da-ink-soft`, `--da-ink`,
  `--da-ink-strong`), Glanz (`--da-teal-glow`), Glas (`--da-glass`,
  `--da-glass-border`, `--da-glass-sand`), Chips (`--da-chip-bg`,
  `--da-chip-text`), Schritt-Nummern (`--da-step-bg`). Ohne diese Tokens
  müsste jeder Schatten eine eigene Dunkelregel bekommen.
- Nicht in die Palette: Abstände, Radien, Schriftgrößen, Übergänge. Das sind
  Bricks-Variablen ohne Dunkelwert.

Digital Avenue: 52 Farben, davon 16 mit Alpha. Übersicht mit Verwendung in
`handoff/import/01-farben.md`, Import-Datei `handoff/import/01-farben.json`.

### 3.3 Anlegen und Ändern über MCP

Abilities des Bricks-MCP-Adapters (Aufruf über
`mcp-adapter-execute-ability` mit `ability_name` und `parameters`):

- `bricks/list-color-palettes`: liest alle Paletten mit `colorDigest` und
  `itemOwnership` je Farbe. Immer zuerst aufrufen.
- `bricks/create-color-palette`: `name`. Liefert die `paletteId`
  (Digital Avenue: `hkgnvm`).
- `bricks/create-color`: `paletteId`, `id`, `raw`, `light`, `dark`,
  `darkModeEnabled: true`, plus `expectedOwnership` aus der letzten Antwort.
- `bricks/update-color`: `colorId`, `paletteId`, `light`, `dark`,
  `expectedOwnership { resource: "colorPalettes", siteId, version,
  resourceDigest, itemDigest }`. `itemDigest` ist der `colorDigest` der Farbe
  aus `list-color-palettes`.

Ownership: Jede Design-Schreibung (Farben, Klassen, Components, Variablen)
erhöht einen gemeinsamen Versionszähler. Wer schreibt, muss die zuletzt
gelesene `version` und den `resourceDigest` mitgeben; nach jedem Schreiben
neu lesen. Beim Import mehrerer Farben deshalb nacheinander, jeweils mit der
Ownership aus der vorigen Antwort. Alternative ohne MCP: Style Manager ›
Colors › Import mit der JSON-Datei aus 3.1.

Kontrolle: `bricks/render-elements` mit einem Element, dessen Klasse
`background: var(--da-teal); box-shadow: var(--da-shadow-md)` setzt, einmal
ohne und einmal mit `data-brx-theme="dark"`. Die Zusammenfassung des Renderers
zeigt die aufgelösten Werte.

## 4. Regeln für die Verwendung der Tokens

### 4.1 Nur `var(--token)`, nie Hex

Überall, wo Bricks eine Farbe annimmt (Element-Controls, Global Classes,
Theme Style), wird die Palettenfarbe gewählt. Im gespeicherten JSON steht dann
`{ "raw": "var(--da-teal)" }`, zum Beispiel:

```json
"_typography": { "color": { "raw": "var(--da-teal-text)" } },
"_border":     { "color": { "raw": "var(--da-border)" } },
"_background": { "color": { "raw": "var(--da-card-bg)" } }
```

Theme Style „Digital Avenue“, Gruppe Colors:

```json
"colors": {
  "colorPrimary":  { "raw": "var(--da-teal)" },
  "colorSecondary":{ "raw": "var(--da-sand)" },
  "colorLight":    { "raw": "var(--da-bg)" },
  "colorDark":     { "raw": "var(--da-text)" },
  "colorMuted":    { "raw": "var(--da-muted)" },
  "colorBorder":   { "raw": "var(--da-border)" },
  "colorInfo":     { "raw": "var(--da-teal)" },
  "colorSuccess":  { "raw": "var(--da-success)" },
  "colorWarning":  { "raw": "var(--da-warning)" },
  "colorDanger":   { "raw": "var(--da-error)" }
},
"general": { "siteBackground": { "color": { "raw": "var(--da-bg)" } } }
```

Ein Hexwert in einem Element ist ein Fehler, weil er im Dunkelmodus stehen
bleibt. Beim Review nach `"hex"` und `#` in Element- und Klassen-JSON suchen.

### 4.2 Schatten und Verläufe nur aus Farb-Tokens bauen

Bricks-Variablen haben keinen Dunkelwert. Ein Schatten wird trotzdem
dunkelmodusfähig, wenn er nur Farb-Tokens referenziert:

```css
--da-shadow-sm: 0 1px 3px var(--da-ink-soft), 0 2px 8px var(--da-ink-soft);
--da-shadow-md: 0 1px 4px var(--da-ink-soft), 0 4px 16px var(--da-ink);
--da-shadow-lg: 0 4px 16px var(--da-ink), 0 12px 40px var(--da-ink-strong);
--da-shadow-teal: 0 2px 12px var(--da-teal-glow);
```

`--da-ink-soft` ist hell `rgb(0 0 0 / 0.04)`, dunkel `rgb(0 0 0 / 0.22)`.
Der Schatten bleibt eine Variable, der Dunkelmodus kommt über die Farbe.
Gleiches für Hero-Verläufe (`--da-hero-from`, `--da-hero-to`) und Glanz
(`--da-teal-glow`, `--da-glow-sand`).

Bricks-Schatten-Controls tragen keine mehrstufigen Variablen. Mehrstufige
Schatten deshalb als Custom CSS einer Global Class (`box-shadow:
var(--da-shadow-md)`), nicht im Theme Style.

### 4.3 Getrennte Tokens für Fläche und Text

Ein Ton, der hell als Text und als gefüllte Fläche funktioniert, tut das im
Dunkelmodus meist nicht mehr. Deshalb je Akzent drei Rollen:

| Rolle | Token | Hell | Dunkel | Grund |
|---|---|---|---|---|
| Akzent (Links, Icons) | `--da-teal` | `#305b75` | `#4d8aa0` | auf dunklem Grund heller |
| Text-Ton (Eyebrow) | `--da-teal-text` | `#234c5f` | `#82c2d2` | Kontrast auf Seitenhintergrund |
| Füllfläche mit weißem Text | `--da-teal-fill` | `#305b75` | `#3a7189` | Weiß darauf bleibt 5,4:1 |

Wer nur ein Token pro Farbe anlegt, bekommt im Dunkelmodus entweder
unlesbaren Text oder ausgewaschene Buttons.

### 4.4 Oberflächen als Token

Seitenhintergrund, Alternativhintergrund, Karte, Navigation, Rahmen sind
eigene Tokens (`--da-bg`, `--da-bg-alt`, `--da-card-bg`, `--da-nav-bg`,
`--da-border`). Eine Karte ist hell Weiß auf Cremeweiß, dunkel `#1d3340` auf
`#182a33`. Nichts davon ist „weiß“ im Element gesetzt.

Glasflächen (Karten auf Fotos): `background: var(--da-glass);
border: 1px solid var(--da-glass-border); backdrop-filter: blur(24px)
saturate(1.4)`. Deckkraft hell 0.84, dunkel 0.84; unter 0.8 fiel der
Lesbarkeitstest durch.

## 5. Ausnahmen, die CSS brauchen

Nur was keine Farbe ist, bekommt eine Regel unter dem Dunkel-Selektor. Diese
Regeln stehen in den Global Classes (Custom CSS) oder im Custom Code:

```css
/* Einfarbiges Eigenlogo (SVG) auf dunkler Navigation weiß stellen */
.site-nav .brxe-logo img { filter: brightness(0) invert(1); }

/* Wortmarken-Platzhalter von Referenzen */
:root[data-brx-theme="dark"] .wordmark img { filter: grayscale(1) invert(1); }

/* Referenzlogos, solange keine echten Dunkel-Logos vorliegen */
:root[data-brx-theme="dark"] .ref .ref-logo img { filter: invert(1) hue-rotate(180deg); }
```

Sauberer als Filter sind zwei Logodateien. Im Prototyp lösen wir es mit zwei
`<img>` (`.logo-light`, `.logo-dark`) und Ein-/Ausblenden über den
Dunkel-Selektor; in Bricks entsprechend zwei Logo-Elemente mit je einer
Klasse, oder ein Dunkel-Logo-Feld des Logo-Elements, falls die
Bricks-Version eines hat (nicht geprüft). Für Fremdlogos (Referenzen)
braucht es echte Dunkelvarianten; die Filterregel ist ein Platzhalter.

Vermeiden: Regeln wie `:root[data-brx-theme="dark"] .card { background: #… }`.
Das ist immer ein Zeichen, dass ein Token fehlt.

## 6. Der Umschalter (Element „Toggle – Mode“)

Bricks-Element `toggle-mode`, im Header-Template neben der Navigation:

```json
{
  "id": "hdrmod", "name": "toggle-mode", "label": "Hell/Dunkel",
  "settings": {
    "icon":         { "library": "custom_set_nmqwgfdgv", "svg": { "id": 31, "icon_id": "icon_8y857i2ii", "url": ".../moon.svg" } },
    "iconDark":     { "library": "custom_set_nmqwgfdgv", "svg": { "id": 26, "icon_id": "icon_aj2jf6f3a", "url": ".../sun.svg" } },
    "iconSize": "20px", "iconDarkSize": "20px",
    "ariaLabel": "Dunkelmodus umschalten"
  }
}
```

- `icon` wird im Hellmodus gezeigt (Mond: „hier geht es ins Dunkle“),
  `iconDark` im Dunkelmodus (Sonne). Bricks blendet die beiden Spans
  `.toggle.light` und `.toggle.dark` selbst um und schreibt
  `localStorage["brx_mode"]`.
- Gerendertes Markup:
  `<button class="brxe-toggle-mode" aria-label="…"><span class="toggle light">…</span><span class="toggle dark">…</span></button>`.
- Gestaltung über eine Regel auf die Elementklasse, mit Tokens:

  ```css
  .brxe-toggle-mode { width: 40px; height: 40px; border-radius: 50%; display: grid;
    place-items: center; background: transparent; border: 1px solid var(--da-border);
    color: var(--da-muted); }
  .brxe-toggle-mode:hover { color: var(--da-teal); border-color: var(--da-teal);
    background: var(--da-teal-subtle); }
  ```

- Icons als eigenes Icon-Set im Icon Manager (SVG mit `viewBox`, ohne
  `width`/`height`, Farben `currentColor`), damit sie die Textfarbe erben.
- Der Umschalter muss auch im mobilen Header sichtbar bleiben, nicht nur im
  Offcanvas-Menü.

## 7. Parität zwischen Prototyp und Bricks

Damit ein HTML-Prototyp eins zu eins übernommen werden kann, verwendet er
dieselbe Mechanik:

- Token-Datei `design-system/colors_and_type.css` mit `:root { … }` für hell
  und `:root[data-brx-theme="dark"] { color-scheme: dark; … }` für dunkel.
  Die Bricks-Palette wird aus dieser Datei erzeugt
  (`handoff/import/build-import.mjs`); die Datei ist die Quelle, die Palette
  das Ziel. Ändert sich ein Token, ändert sich die Datei, dann die Palette
  per `update-color`.
- Inline-Skript im Head, das `data-brx-theme` aus `localStorage["brx_mode"]`
  setzt (Schlüssel und Attribut wie Bricks), Umschalter-Button mit dem Markup
  des Bricks-Elements (`.brxe-toggle-mode`, `.toggle.light`, `.toggle.dark`).
- Vorschau-Schalter `?dark` und `?light` an jeder Prototyp-URL für
  Screenshots.
- oklch-Werte (Statusfarben) im Design System, Hex in der Palette; Bricks
  nimmt oklch nicht zuverlässig in allen Controls an.

## 8. Übertragung auf ein neues Projekt

1. Tokens benennen: Präfix wählen (`--xy-…`), je Farbe Hell- und Dunkelwert
   festlegen, inklusive Alpha-Tokens für Schatten, Glas, Chips. Rollen
   trennen (Akzent, Text-Ton, Füllfläche; Hintergrund, Alt-Hintergrund, Karte,
   Rahmen, Navigation).
2. Token-Datei schreiben (`:root` hell, `:root[data-brx-theme="dark"]`
   dunkel, beide mit `color-scheme`).
3. Palette-JSON daraus erzeugen (Format in 3.1) und importieren: Style
   Manager › Colors › Import, oder per MCP `create-color-palette` und je Farbe
   `create-color` mit Ownership-Kette.
4. `color-scheme`-Regeln ins Custom CSS, weil Bricks sie nicht druckt.
5. Theme Style: Farben nur über `raw: var(--…)`; `typographyHtml: 100%`
   setzen, sonst rechnet Bricks mit 62,5 % und alles in rem schrumpft.
6. Global Classes und Elemente: Farben ausschließlich aus der Palette wählen.
   Custom CSS in Klassen nur mit `var(--…)`.
7. Header: Element „Toggle – Mode“ mit `icon`, `iconDark`, `ariaLabel`;
   Standardmodus in den Bricks-Einstellungen festlegen (`light`, `dark`,
   `auto`).
8. Ausnahmen (Logos) mit zwei Dateien oder Filtern unter
   `:root[data-brx-theme="dark"]`.
9. Prüfen: `render-elements` hell und mit `data-brx-theme="dark"`, Kontrast
   der Text- und Füll-Tokens (mindestens 4,5:1 für Text), Suche nach Hexwerten
   im Element-JSON, Formularfelder und Scrollbalken im Dunkelmodus ansehen.

## 9. Stolperfallen

- **Shades-Generator** des Color Managers nicht verwenden. Er erzeugt
  Aufhellungen ohne sinnvolle Dunkelwerte.
- **`color-mix()` in Kurzschreibweisen** (`border: 1px solid color-mix(…)`)
  zerlegt Bricks beim Anlegen einer Klasse falsch. Entweder als
  `_border.color.raw` setzen oder als eigenes Token anlegen. Eigene Tokens
  sind die bessere Lösung, dann schaltet auch das um.
- **Klassen-Normalisierung**: Bricks übersetzt die Basisregel einer Klasse
  aus dem Custom CSS in Controls; Media Queries gehen dabei verloren.
  Responsive Regeln als `.cls.brxe-div`-Selektoren schreiben, und weil Bricks
  `@media`-Blöcke vor die Basisregel druckt, im Media-Block die Klasse
  verdoppeln (`.cls.cls.brxe-div`), sonst gewinnt die Basisregel.
- **Variablen ohne Dunkelwert**: ein Schatten mit `rgb(0 0 0 / 0.1)` in einer
  Variable bleibt im Dunkelmodus so. Farbe daraus machen.
- **Bilder mit hellem Hintergrund** (Logos, Freisteller) fallen im
  Dunkelmodus auf. Transparente SVG oder Dunkelvariante.
- **`darkModeEnabled` vergessen**: die Farbe fehlt dann im Dunkelblock und
  behält den Hellwert.
- **Standardmodus**: `light` im Skript ist eine Einstellung, keine
  Voreinstellung von Bricks. Wer Systemfolge will, stellt `auto` ein.
- **Render-Vorschau** (`render-elements`) zeigt Template-Elemente ohne deren
  Klassen-CSS; die Dunkelprüfung von Templates am Frontend machen.

## 10. Dateien im Projekt Digital Avenue

| Datei | Inhalt |
|---|---|
| `design-system/colors_and_type.css` | Token-Quelle, hell und dunkel, Schriften |
| `handoff/import/01-farben.json` | Palette im Bricks-Importformat (52 Farben) |
| `handoff/import/01-farben.md` | Tabelle Hell/Dunkel mit Verwendung |
| `handoff/import/03-variablen.json` | 48 Variablen (Abstände, Radien, Schatten aus Farb-Tokens) |
| `handoff/import/04-theme-style.json` | Theme Style mit `raw: var(--da-…)` |
| `handoff/import/README.md` | Schritte 1 (Farben) und 4 (Theme Style) mit Aufträgen |
| `handoff/MERKREGELN.md` | Abschnitt „Farben und Variablen“ |
| `prototype/css/site.css` | Umschalter-Markup, Logo-Wechsel, Dunkelregeln des Prototyps |
| `prototype/js/site.js` | Umschalter-Skript mit `brx_mode` |
