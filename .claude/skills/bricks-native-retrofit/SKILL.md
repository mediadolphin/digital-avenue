---
name: bricks-native-retrofit
description: Zieht eine SCHON gebaute Bricks-Seite auf „Bricks-native" nach. Verwenden, wenn eine bestehende Bricks-Website in Custom-CSS-Inseln abgedriftet ist – Seiten- oder Element-Custom-CSS mit vielen !important, ein selbst erfundenes Dark-Mode-Attribut (z. B. data-theme statt data-brx-theme), ein Eigenbau-Umschalter aus Button plus Interaktion plus JS, feste Hex-Farben in Elementen – und daraus wieder native Bricks-Mechanik gemacht werden soll: Farb-Tokens mit Hell/Dunkelwert im Color Manager, natives toggle-mode-Element, Theme-Style-Seitenhintergrund, nur var(--token) statt Hex. Immer verwenden bei „nativ nachziehen", „Custom-CSS aufräumen", „Dunkelmodus nativ machen", „!important auflösen", „auf Bricks-Standard bringen" für eine bereits bestehende Seite. NICHT für den Erst-Handoff eines Prototyps – dafür ist bricks-handoff da.
---

# Bricks: eine bestehende Seite auf nativ nachziehen (Retrofit)

Ziel: Eine Bricks-Seite, die funktioniert, aber in Custom-CSS, `!important`
und Eigenbau-JavaScript abgedriftet ist, ohne Design-Änderung wieder auf
native Bricks-Mechanik bringen. Der Kunde soll die Seite im Builder pflegen
können; jede Insel aus rohem CSS oder eigenem Script ist eine Stelle, an der
das nicht mehr geht.

**Grundsatz:** Alles, was Bricks nativ kann, gehört in die native Stelle
(Color Manager, Theme Style, globale Klassen, native Elemente). Nur was
Bricks nicht kann (aufwändige Animationen, Icon-Masken, Overlays), bleibt
Custom-CSS – bewusst und benannt, nicht aus Verlegenheit.

Das Farb- und Dark-Mode-Rezept dahinter steht ausführlich in
`handoff/BRICKS-FARBSYSTEM-DARKMODE.md`. Diese Skill ist der Ablauf, um eine
**bereits gebaute** Seite dorthin zu bringen, plus die Fallen, die dabei
auftreten.

## Wann diese Skill, wann nicht

- **Diese Skill**: Die Seite steht schon in Bricks, hat aber Custom-CSS-Inseln,
  einen erfundenen Dark-Mode oder Eigenbau-JS. Es soll nativ werden, ohne dass
  sich das Aussehen ändert.
- **bricks-handoff**: Ein Prototyp/Design System soll erstmalig nach Bricks.
  Dort wird von Anfang an nativ gebaut; kein Retrofit nötig.

## Phase 0: Inventar – die Inseln finden

Nicht raten, messen. Für jede betroffene Seite und jedes Template:

1. `bricks/get-page-elements` mit `responseFormat: "summary"` je Post/Template.
   Lies `customCssElementCount` und `referencedGlobalClassCount`. Wenige
   Custom-CSS-Elemente und viele globale Klassen = überwiegend nativ, nur
   Inseln nacharbeiten. Viele Custom-CSS-Elemente = tiefer schauen.
2. `bricks/get-page-settings` je Seite: das **Seiten-Custom-CSS**. Das ist die
   häufigste Insel (Layout mit `!important`, erfundene Dark-Regeln).
3. Gerendertes Frontend (`curl`) nach Symptomen absuchen:
   - **Erfundenes Dark-Attribut**: `data-theme`, `data-color-mode` o. ä. statt
     Bricks' `data-brx-theme`.
   - **Feste Hex-Farben** in Element- oder Klassen-CSS (`#fff`, `#0d1017`).
   - **Eigenbau-Toggle**: ein `<button>` mit Interaktion/JS statt des
     `toggle-mode`-Elements (`brxe-toggle-mode`).
   - **Code-Element mit eigenem JS** (Persistenz, Theme-Init) – oft als
     `<pre class="brxe-code">` sichtbar, weil unsigniert (siehe Stolperfallen).
4. `bricks/get-design-context` (summary): Palette, globale Klassen, Theme
   Style, Variablen. So siehst du, was schon nativ da ist und wiederverwendet
   werden kann.

Ergebnis von Phase 0: eine Liste „Insel → native Zielstelle". Typisch:

| Insel | Native Zielstelle |
|---|---|
| `:root[data-theme="dark"]{ --x: … }` als Element-CSS | Farb-Token mit Dunkelwert im Color Manager |
| `data-theme`-Attribut + MutationObserver-JS | `data-brx-theme` von Bricks + `toggle-mode`-Element |
| Eigenbau-Umschalter (Button + Interaktion + Icon-CSS) | `toggle-mode`-Element mit Custom-Icon-Set |
| `.karte{background:#fff}` | `background: var(--card)` (Token mit Hell/Dunkelwert) |
| Body-Hintergrund per `!important`-CSS | Theme Style › `general.siteBackground: var(--page)` |
| Layout in Seiten-Custom-CSS mit `!important` | Style-Controls / Custom-CSS der globalen Klasse |

## Phase 1: Dark-Mode nativ machen

Das ist meist der größte Brocken. Reihenfolge (additiv, bricht nichts, solange
der alte Mechanismus noch parallel läuft – erst am Ende entfernen):

### 1.1 Fehlende Oberflächen-Tokens anlegen

Was im Element als Hex stand (`#fff` für Karten, weißer Seitenhintergrund),
braucht ein eigenes Token mit Hell- **und** Dunkelwert. Mindestens `--page`
(Seitenhintergrund) und `--card` (Kartenfläche), je nach Seite mehr.

`bricks/create-color` – **kein `id`-Feld**, Bricks vergibt die ID aus `raw`:

```
paletteId, raw: "var(--page)", light: "#ffffff", dark: "#0d1017",
darkModeEnabled: true, expectedOwnership: <resource-ownership aus list>
```

Ownership-Kette: vor jedem Schreiben `bricks/list-color-palettes` lesen und die
`ownership` (für Creates) bzw. die `itemOwnership` der Farbe (für Updates)
mitgeben. Nach jedem Schreiben ändert sich die Version – neu lesen.

### 1.2 Dunkelwerte auf die bestehenden Tokens

Jede Farbe, die im Dunkeln anders sein soll, bekommt einen Dunkelwert.
`bricks/update-color` je Farbe:

```
paletteId, colorId, light, dark, darkModeEnabled: true,
expectedOwnership: <itemOwnership der Farbe aus list-color-palettes>
```

Rollen trennen (aus dem Farb-Doc): Akzent heller im Dunkeln, Text-Ton für
Kontrast, Füllfläche für weißen Text. Keine automatischen Shades. Danach druckt
Bricks selbst `:root{…}` und `:root[data-brx-theme="dark"]{…}`. Prüfen:

```
curl … | grep 'data-brx-theme'   # der Dunkelblock muss erscheinen
```

### 1.3 Feste Farben auf Tokens umstellen

- **Seitenhintergrund** → Theme Style. `bricks/update-theme-style` (Param heißt
  `id`, nicht `styleId`). Vollständige Settings senden (bestehende Gruppen
  erhalten) plus `general.siteBackground.color.raw = "var(--page)"`.
  Bricks setzt den Seitenhintergrund auf `html`, nicht auf `body` – eine
  Computed-Style-Prüfung auf `body` liest deshalb transparent; das ist korrekt.
  `expectedOwnership` = `{resource:"themeStyles", siteId, version,
  resourceDigest, itemDigest}`; der `itemDigest` steht in `itemDigests[<id>]`
  aus `get-theme-styles({style:id})`.
- **Karten u. Ä.** → in der globalen Klasse `#fff` durch `var(--card)`
  ersetzen. `bricks/update-global-class` (Param heißt `classId`, nicht `id`);
  `expectedOwnership` = `itemOwnership` der Klasse, plus `lockOwnership` aus der
  `list-global-classes`-Antwort.

### 1.4 `color-scheme` ergänzen (Bricks druckt es nicht)

Formularfelder und Scrollbalken folgen sonst dem Hellmodus. Ins Custom-CSS
(Theme Style oder ein globales Element, das überall rendert – z. B. der
Header-Root):

```css
:root{color-scheme:light}
:root[data-brx-theme="dark"]{color-scheme:dark}
```

### 1.5 Natives `toggle-mode`-Element statt Eigenbau

Zuerst ein Custom-Icon-Set für Mond/Sonne:

- `bricks/create-custom-icon-set` → `name` → liefert `id` (`set_…`).
- `bricks/upload-custom-icon` je Icon: `setId`, `name`, `svg`. SVG mit
  `viewBox`, **ohne** `width`/`height`, Konturen `stroke="currentColor"`, damit
  sie die Header-Textfarbe erben. Antwort liefert `icon_id` und `attachment_id`.

Dann das Element (`bricks/add-element` mit `parentId` = Header-Steuergruppe und
ganzzahliger `position`):

```json
{ "name": "toggle-mode", "settings": {
  "_cssGlobalClasses": ["<icon-klasse>"],
  "icon":     { "library": "custom_set_<setId>", "svg": { "id": <attachment_id>, "icon_id": "<icon_id>", "url": "…/moon.svg" } },
  "iconDark": { "library": "custom_set_<setId>", "svg": { "id": <attachment_id>, "icon_id": "<icon_id>", "url": "…/sun.svg" } },
  "iconSize": "21px", "iconDarkSize": "21px",
  "ariaLabel": "Hell-/Dunkelmodus umschalten"
}}
```

Der `library`-Schlüssel ist `custom_set_` + die Set-ID (also `set_…` wird zu
`custom_set_set_…`? Nein): die Set-ID lautet z. B. `set_d34ea2bd66`, der
`library`-Wert dann `custom_set_d34ea2bd66`. Im Zweifel nach dem Anlegen das
Frontend prüfen: das Element rendert als `<button class="brxe-toggle-mode">`
mit `<span class="toggle light">` (Mond, inline-SVG) und `.toggle.dark`
(Sonne). Bricks tauscht die Spans, schreibt `localStorage["brx_mode"]` und
setzt `data-brx-theme` – Persistenz und Kein-Aufblitzen gratis.

### 1.6 Eigenbau entfernen

Erst wenn der native Weg im Browser bestätigt ist:

- Alten Umschalter-Button samt Interaktion löschen (`bricks/remove-element`).
- Eigenes Persistenz-/Init-Code-Element löschen.
- Aus dem Element-/Seiten-Custom-CSS den erfundenen Dark-Block
  (`:root[data-theme="dark"]{…}`), das Icon-Masken-CSS und die
  `body`/Karten-Hexregeln entfernen. Das Overlay-/Menü-CSS bleibt.
- Prüfen, dass kein `data-theme` (altes Attribut) und keine Hex-Farbe mehr im
  Element-JSON steht.

## Phase 2: Layout aus dem !important-CSS zurückholen

Nur wo es sinnvoll ist. Nachdem die eigentliche Ursache (oft ein Kampf mit
Lazyload oder eine Übergangslösung) behoben ist, das Layout aus dem
Seiten-Custom-CSS in die native Stelle heben:

- Einfache Flächen-/Abstands-/Rahmenregeln → Style-Controls der globalen Klasse.
- Mehrstufige Schatten, `:has()`, Overlay-Animationen → Custom-CSS der globalen
  Klasse (nicht der Seite), mit Tokens statt Hex.
- **Media Queries**: Bricks normalisiert die Basisregel einer Klasse in
  Controls und verliert dabei `@media`-Blöcke. Responsive Regeln als
  `.klasse.brxe-div`-Selektoren schreiben und im Media-Block die Klasse
  verdoppeln (`.klasse.klasse.brxe-div`), weil Bricks `@media` vor die
  Basisregel druckt (siehe `handoff/MERKREGELN.md`).
- `!important` nur behalten, wenn ein fremder Stack es wirklich erzwingt; sonst
  die Ursache beheben (Spezifität, richtige native Stelle).

## Phase 3: Prüfen

- Frontend hell und dunkel: `data-brx-theme` per Umschalter setzen, Reload –
  die Wahl muss bleiben (`brx_mode`). Ganze Seite färbt um (Hintergrund,
  Karten, Text, Buttons, Badges), nicht nur einzelne Blöcke.
- Computed Styles gegenprüfen (Seitenhintergrund auf `html`, nicht `body`).
- Suche im Element-JSON nach `#` und `data-theme` – beides darf im Dark-Kontext
  nicht mehr vorkommen.
- Nach jeder Design-Schreibung `bricks/regenerate-css-files`.
- Render-Flakes: über den Cloud-Proxy brechen große Bilder in Playwright-Renders
  manchmal ab (schwarze Fläche, obwohl das Computed-`background-image` die URL
  trägt). Bild per `curl` auf HTTP 200 prüfen; wenn das CSS korrekt ist und das
  Bild liefert, ist es ein Render-Artefakt, keine Regression.

## Was legitim Custom-CSS bleibt

Nicht alles muss nativ werden. Ohne native Entsprechung bleiben und werden
bewusst als Custom-CSS geführt:

- Vollflächige Overlay-Menüs samt Ein-/Ausblend-Animation und `:has()`-Logik.
- Icon-Masken/Formen, die kein Icon-Element abbildet.
- Aufwändige Keyframe-Animationen.

Diese gehören ins Custom-CSS der **globalen Klasse** oder eines globalen
Elements, nie verstreut über Seiten – und benutzen Tokens, damit sie im
Dunkelmodus mitgehen.

## Stolperfallen (aus der Praxis)

- **Eigenes JavaScript in Bricks läuft nicht ohne Weiteres.** Bei aktiver
  Code-Ausführung braucht ein Code-Element mit JS trotzdem `executeCode: true`
  **und** eine gültige Signatur. Die Signatur wird mit einem Server-Secret
  gebildet, das die MCP nicht freigibt – per MCP eingefügter Code rendert sonst
  als sichtbarer `<pre>`-Text. Konsequenz für den Retrofit: **kein Eigenbau-JS
  für Dark-Mode** – das native `toggle-mode` macht Persistenz und Init selbst.
  (Wo doch eigenes JS nötig ist, muss der Kunde in Bricks › Einstellungen ›
  Benutzerdefinierter Code einmal „Signaturen neu generieren".)
- **Param-Namen weichen ab.** `update-theme-style` nimmt `id` (nicht
  `styleId`); `update-global-class` nimmt `classId` (nicht `id`);
  `create-color` nimmt **kein** `id`; `add-element`-`position` muss `integer`
  sein.
- **Ownership.** Design-Schreibungen erhöhen eine gemeinsame Version. Vor jeder
  Schreibung neu lesen und die passende `itemOwnership`/`ownership` (plus
  `lockOwnership` bei Klassen) mitgeben.
- **Erstbesuch-Standard** (hell/dunkel/auto) ist eine Bricks-Einstellung, die
  die MCP nicht freigibt. Soll der Erstbesuch der Systemeinstellung folgen,
  stellt der Kunde den Farbmodus-Standard in den Bricks-Einstellungen auf
  `auto`.
- **Kein Shades-Generator** für Dunkelwerte; Aufhellungen liegen im Dunkeln
  falsch. Jede Abstufung ist ein benanntes Token mit eigenem Dunkelwert.

## Verwandte Skills und Dokumente

- `handoff/BRICKS-FARBSYSTEM-DARKMODE.md` – das ausführliche Farb-/Dark-Mode-Rezept.
- `handoff/MERKREGELN.md` – Merkregeln (Media-Queries, Klassen-Verdopplung).
- Skill `bricks-handoff` – der Erst-Handoff (Prototyp → Bricks).
- Offizielle Bricks-Skills `bricks-design-systems`, `bricks-custom-code`,
  `bricks-interactions` – Detailmechanik einzelner Bausteine.
