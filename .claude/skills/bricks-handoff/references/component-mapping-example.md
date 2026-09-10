# Komponenten-Zuordnung (Beispiel Digital Avenue)

Für jede Komponente des Prototyps: Bricks-Element, Global Class, was in
Bricks-Steuerung übergeht, was im CSS bleibt. "CSS" heißt: die Regel aus
dem Prototyp-Stylesheet bleibt als globales CSS aktiv.

| Prototyp-Klasse | Bricks-Element | Global Class | In Bricks steuern | Bleibt im CSS |
|---|---|---|---|---|
| `.nav` | Header-Template, Section | `nav` | Sticky, Höhe, Logo | Glas-Effekt (backdrop-filter), Scroll-Schatten |
| `.nav-menu a` | Nav Menu | `nav-menu` | Schrift Jost, Versalien, Sperrung | Hover-Farbe |
| `.nav-drawer` | Offcanvas | `nav-drawer` | Öffnen/Schließen, Breite | Typo der Einträge |
| `.hero` | Section + Container | `hero` | Padding, Ausrichtung | Verlauf und Lichtflecken (::before) |
| `.da-eyebrow` | Basic Text | `da-eyebrow` | Schrift, Farbe | Linie davor (::before) |
| `.mosaic` | Container (Grid) | `mosaic` | Spalten 4fr 3fr 2.4fr 2.4fr, Gap | Responsive Umbrüche |
| `.mosaic-tile` | Block + Image | `mosaic-tile` | Bild, Link | Verlauf, Chip-Position |
| `.service-card` | Block | `service-card` | Inhalt | Glas-Hintergrund |
| `.tabs` / `.tab-panel` | Tabs (Bricks) | `tabs` | Reiter, Inhalte | Aktiv-Zustand |
| `.tiles` / `.tile` | Container (Grid) + Block | `tiles`, `tile`, `tile-teal`, `tile-deep`, `tile-sand`, `tile-photo` | Spalten, Bild | Hover-Lift |
| `.steps` / `.step` | Container + Block | `steps`, `step` | Inhalt | Nummernkreis |
| `.refs` / `.ref` | Container + Block | `refs`, `ref` | Logo, Text | Hover |
| `.quotes` / `.quote` | Container + Block | `quote`, `quote-featured` | Zitat, Quelle | Serifenschrift des Zitats |
| `.check` | Section + Container | `check` | Inhalt, Button | Lichtfleck (::before) |
| `.check-dialog` | Popup-Template + Form | `check-dialog` | Felder, Validierung, Erfolgsmeldung | Segment-Auswahl |
| `.faq` | Accordion | `faq` | Fragen, Antworten | Chevron |
| `.footer` | Footer-Template | `footer` | Spalten, Links | Farben über Tokens |

Regeln, die sich bewährt haben:

- Klassennamen unverändert lassen, dann greift das Prototyp-CSS sofort.
- Zuerst Theme Styles setzen (Typografie, Buttons, Links, Section-Padding),
  weil sie viele Komponenten auf einmal richtig stellen.
- Pseudo-Elemente (::before, ::after) und Verläufe im CSS lassen. In Bricks
  nachgebaut werden sie unübersichtlich.
