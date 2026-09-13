# Baukasten Digital Avenue

Anleitung für Seiten, die von Hand in Bricks gebaut werden. Stand 13.09.2026, Staging relaunch.digital-avenue.de, Bricks 2.4. Vollständige Liste aller Global Classes, Components und Templates mit Einsatzregeln. Technische Hintergründe stehen in `MERKREGELN.md`, der Aufbau je Schritt in `import/README.md`.

## 1. Grundregeln

**Section trägt Hintergrund und Abstand, Container trägt Breite, Divs tragen das Layout.** Jeder Abschnitt ist Section › Container › Div. Der Theme Style gibt jeder Section 60 bis 80 px Abstand oben und unten und den Seitenrand; der Container ist 1240 px breit. Beides nicht wiederholen. Hintergrundfarbe und Rahmen kommen als Controls auf die Section.

**Klassen kommen aus dem Klassenfeld, nie aus Custom CSS.** Global Classes im Feld „CSS-Klassen“ auswählen (Bricks referenziert sie per ID). Nur so wird ihr CSS ausgegeben. Kind-Elemente, die eine Klasse nur über einen Selektor anspricht (zum Beispiel `.tile-num`), bekommen den Namen als einfache Klasse ins Feld „Klassen“ am Element.

**Raster-Divs bekommen Breite 100 %.** Bricks richtet Kinder eines Containers links aus, nicht gestreckt. Ein Div mit Rasterklasse (`tiles`, `steps`, `refs`, `quotes`, `split`) braucht Breite 100 %, sonst wird es so breit wie sein Inhalt. Die Klasse `mosaic` bringt das mit.

**Components statt Kopien.** Wiederkehrende Elemente (Kachel, Schritt, Referenzkarte, Kundenstimme, Service-Karte) sind Components. Eine Instanz einfügen, Properties füllen, fertig. Varianten sind Properties, keine Kopien.

**Buttons sind Basisklasse plus Variante.** `da-btn` immer zusammen mit `da-btn-primary`, `da-btn-ghost`, `da-btn-light` oder `da-btn-sand`. Klein: zusätzlich `da-btn-sm`. Auf dunklem Grund: `on-dark` zum Ghost-Button.

**Buttons, die den Digital-Check öffnen, sind echte Buttons ohne Link.** Button-Element, Tag „button“, kein Link, Interaktion „Klick › Anzeigen › Popup › Popup Digital-Check (130)“. Mit einem Link (auch `#anker`) läuft die Interaktion nicht.

**Icons aus dem Icon-Set „Digital Avenue“.** Icon-Element, Bibliothek „Digital Avenue“, plus Klasse `icon` (16 px) oder `icon-20`. Kein Inline-SVG.

**Farben und Abstände als Variablen.** In Controls immer die Variablen wählen (`--da-teal`, `--da-sp-6`, `--da-r-md`), nie Hex-Werte oder Pixel tippen. Nur so stimmt der Dunkelmodus.

## 2. Rezepte

### Standardabschnitt (zum Beispiel „So arbeiten wir“)

1. Section einfügen, Klasse `section`. Für einen abgesetzten Hintergrund zusätzlich Hintergrund `--da-bg-alt` und Rahmen oben/unten 1 px `--da-border` als Controls; für einen kürzeren Abschnitt `section-sm` statt `section`.
2. Container einfügen (Standard, keine Klasse, keine Breite).
3. Div mit Klasse `section-head` › darin Text (Tag span, Klasse `da-eyebrow`), Überschrift (H2), Text (Tag p). Für einen zentrierten Kopf zusätzlich `center`.
4. Div mit der Rasterklasse des Abschnitts (`tiles`, `steps`, `refs`, `quotes`, `pains`), Breite 100 %.
5. Darin die passenden Components einfügen (Kachel, Schritt, Referenzkarte, Kundenstimme, Pain-Karte) und die Properties füllen.

### Zweispaltiger Textabschnitt (zum Beispiel „Über uns“)

1. Section mit Klassen `section` und `about` (oder ohne `about`, wenn kein Hintergrund gewünscht ist).
2. Container › Div mit Klasse `split`, Breite 100 %.
3. Linke Spalte: Div › Eyebrow, H2, weitere Inhalte. Rechte Spalte: Div mit Klasse `about-text` › Absätze.
4. Die Fakten-Kacheln: Div `about-facts` › je Fakt ein Div `fact` mit zwei Spans `num` und `label`.

### Hero einer Landingpage

1. Component „Hero Landingpage“ direkt auf Wurzelebene der Seite einfügen (sie ist selbst eine Section).
2. Properties füllen: Eyebrow, Titel (Betonung mit <strong>), Lead, zwei Buttons, Bild, Alt-Text, Bildausschnitt, Karte.
3. Button 1 soll das Popup öffnen: Nach dem Einfügen den Button in der Instanz anwählen, Link leeren, Interaktion „Klick › Anzeigen › Popup 130“ setzen.

### Landingpage (Praxen, Kanzleien, Mittelstand)

1. Hero Landingpage (Component).
2. Section `section` › Container › `section-head` › Div `pains` › drei Pain-Karten.
3. Section `section` › Container › Feature-Block (Component), bei Bedarf zweiter Feature-Block mit Bildseite „links“.
4. Section `section` › Container › Concierge (Component) mit drei Timeline-Punkten im Slot.
5. Section `section-sm` mit Hintergrund `--da-bg-alt` › Container › `section-head` › Div `refs` › Referenzkarten der Zielgruppe.
6. Section `section` › Container › Digital-Check-Block (Component).
7. Section `section` › Container › Überschrift H2 zentriert › Accordion (Nestable) mit Klasse `faq`, Aufbau siehe „FAQ“.

### FAQ mit dem Accordion (Nestable)

1. Accordion (Nestable) einfügen, Klasse `faq`, Option „FAQ-Schema“ einschalten.
2. Je Frage ein Block mit Klasse `faq-item`.
3. Darin Block 1 mit der versteckten Klasse `accordion-title-wrapper` › Überschrift H3 (Frage) und Icon „chevron-down“ mit Klasse `icon`.
4. Darin Block 2 mit der versteckten Klasse `accordion-content-wrapper` › Text (Antwort).
5. Die versteckten Klassen stehen im Feld „Klassen“ des Blocks; Bricks braucht sie für das Auf- und Zuklappen.

### Zielgruppen-Umschalter mit Tabs (Nestable)

1. Tabs (Nestable) einfügen, Klasse `tabs`. Am Element (nicht in der Klasse) Titel-Padding, Inhalts-Padding und Inhalts-Rahmen auf 0 setzen, Aktiv-Hintergrund auf `--da-teal-fill`.
2. Block „Tab-Menü“ (versteckte Klasse `tab-menu`) › je Tab ein Div (versteckte Klasse `tab-title`) mit einem Text-Span.
3. Block „Tab-Inhalte“ (versteckte Klasse `tab-content`) › je Tab ein Block (versteckte Klasse `tab-pane`).
4. In jeden `tab-pane` eine Component „Zielgruppen-Panel“ legen und füllen. Das Panel ist absichtlich nicht selbst der Pane.

## 3. Components

Einfügen über das Plus-Menü › Components. Die ID steht in Klammern; Properties füllen, Slots bekommen Instanzen der genannten Component.

### Service-Punkt (`0b9bf7`, Service-Karte)

Eine Listenzeile mit Check-Icon und Text.

**Einsatz:** In den Slot der Service-Karte, des Feature-Blocks, des Digital-Check-Blocks oder des Zielgruppen-Panels; auf der Startseite auch direkt in `ul.mosaic-list`.

| Property | Bedeutung |
|---|---|
| Text | ein Satz, `<strong>` erlaubt |

### Service-Karte (`580b83`, Service-Karte)

Glas-Karte mit Label, Status, Titel und Checkliste, liegt auf Fotos (Mosaik, Hero Landingpage).

**Einsatz:** In einer Foto-Kachel des Mosaiks oder frei in einem Div; das Foto darunter liefert der Elternkasten.

| Property | Bedeutung |
|---|---|
| Label | Kleinschrift oben links, z. B. „Urlaubs-Service“ |
| Status | grüner Status rechts, z. B. „erledigt“, „läuft“ |
| Titel | eine Zeile |
| Variante | Standard oder Sand (Glas in Sandton) |

**Slot „Listenpunkte“: Service-Punkt-Instanzen**

### Kachel (`c3c53b`, Kacheln)

Farbige Leistungskachel mit Nummer-Label, H3, Text und Textlink mit Pfeil.

**Einsatz:** Im Div `tiles`. Reihenfolge und Mischung mit Foto-Kacheln frei.

| Property | Bedeutung |
|---|---|
| Variante | Cream (Standard), Teal, Deep (dunkel), Sand |
| Label | z. B. „01 · Sichtbarkeit & Marke“ |
| Titel | H3 |
| Copy | Absatz |
| Link-Text | z. B. „Mehr erfahren“ |
| Link | Ziel, meist ein Anker |

### Foto-Kachel (`0851ab`, Kacheln)

Bildkachel im Kachelraster, Foto füllt die Kachel und zoomt leicht beim Hover.

**Einsatz:** Im Div `tiles`, zwischen den Kacheln.

| Property | Bedeutung |
|---|---|
| Bild | Foto aus der Mediathek, Größe „large“ |
| Alt-Text | Bildbeschreibung |
| Bildausschnitt | object-position, z. B. „35% 25%“, Standard „50% 50%“ |

### Schritt (`719767`, Karten)

Prozessschritt mit Nummer im Kreis, H3 und Text.

**Einsatz:** Im Div `steps` (drei nebeneinander).

| Property | Bedeutung |
|---|---|
| Nummer | 1, 2, 3 |
| Titel | H3 |
| Copy | Absatz |

### Referenzkarte (`cbca1c`, Karten)

Referenz mit Logo, Art, Titel und Text.

**Einsatz:** Im Div `refs` (passt sich an: vier, drei, eine Spalte). Später Query Loop über den Post-Typ Referenz.

| Property | Bedeutung |
|---|---|
| Logo | SVG aus der Mediathek, Größe „full“ |
| Alt-Text | Kundenname |
| Art | Kleinschrift, z. B. „Facharztpraxis · Hamburg“ |
| Titel | Kundenname als H3 |
| Copy | Leistung und Ergebnis |

### Kundenstimme (`05cb9e`, Karten)

Zitatkarte mit Tag, Zitat in Serifenschrift und Quelle.

**Einsatz:** Im Div `quotes` (breite plus schmale Karte).

| Property | Bedeutung |
|---|---|
| Variante | Standard (helle Karte) oder Featured (Teal, für die erste Karte) |
| Tag | Kleinschrift, z. B. „Kundenstimme“ |
| Zitat | mit Anführungszeichen |
| Quelle | Name, Funktion, Unternehmen |

### Pain-Karte (`469300`, Karten)

Schmerzpunkt der Landingpages: Zitat des Kunden und die Lösung.

**Einsatz:** Im Div `pains` (drei nebeneinander).

| Property | Bedeutung |
|---|---|
| Zitat | wörtlicher Satz aus dem Alltag |
| Copy | was wir dagegen tun |

### Feature-Block (`25cc6c`, Abschnitte)

Zweispaltiger Abschnitt: Text mit Eyebrow, H2, Lead und Checkliste, daneben Foto.

**Einsatz:** Direkt in den Container eines Abschnitts (`section`).

| Property | Bedeutung |
|---|---|
| Bildseite | rechts (Standard) oder links |
| Eyebrow |  |
| Titel | H2 |
| Lead | Absatz |
| Bild | Foto, „large“ |
| Alt-Text |  |

**Slot „Checkliste“: Service-Punkt-Instanzen**

### Timeline-Punkt (`74ec3e`, Abschnitte)

Zeile der Concierge-Timeline: Punkt mit Check-Icon und Text mit fettem Auftakt.

**Einsatz:** Nur im Slot des Concierge-Abschnitts.

| Property | Bedeutung |
|---|---|
| Text | `<strong>Zeitpunkt:</strong>` plus Satz |

### Concierge (`0a205a`, Abschnitte)

Dunkler Abschnitt mit Timeline und Foto mit Nachricht-Karte, zeigt den Urlaubs-Service.

**Einsatz:** Direkt in den Container eines Abschnitts.

| Property | Bedeutung |
|---|---|
| Eyebrow |  |
| Titel | H2 |
| Copy |  |
| Bild |  |
| Alt-Text |  |
| Karte: Label |  |
| Karte: Titel | die Nachricht des Kunden |
| Karte: Zeile | Kommentar darunter |

**Slot „Timeline“: Timeline-Punkt-Instanzen**

### Digital-Check-Block (`e44db4`, Abschnitte)

Teal-farbener CTA-Block mit Checkliste, Button (öffnet das Popup) und Ablauf-Box.

**Einsatz:** Direkt in den Container eines Abschnitts. Auf jeder Seite einmal, meist vor dem FAQ.

| Property | Bedeutung |
|---|---|
| Eyebrow |  |
| Titel | H2 |
| Copy |  |
| Button-Text |  |
| Hinweis | kleiner Text neben dem Button |
| Aside-Titel |  |
| Schritt 1 bis 3 | `<strong>Titel.</strong>` plus Satz |

**Slot „Listenpunkte“: Service-Punkt-Instanzen (fünf Prüfpunkte)**

### Hero Landingpage (`951227`, Abschnitte)

Hero der Landingpages mit Foto und Service-Karte. Die Wurzel ist eine Section.

**Einsatz:** Direkt auf Wurzelebene der Seite, als erstes Element.

| Property | Bedeutung |
|---|---|
| Eyebrow |  |
| Titel | H1, Betonung mit `<strong>` |
| Lead |  |
| Button 1 Text / Link | Primärbutton; für das Popup Link leeren und Interaktion setzen |
| Button 2 Text / Link | Ghost-Button, meist Anker |
| Bild |  |
| Alt-Text |  |
| Bildausschnitt |  |
| Karte: Label / Status / Titel | Service-Karte auf dem Foto |

### Zielgruppen-Panel (`28c728`, Abschnitte)

Zweispaltiges Panel mit Foto, Titel, Lead, Checkliste und Textlink; Inhalt eines Tabs.

**Einsatz:** In einen `tab-pane` des Zielgruppen-Umschalters.

| Property | Bedeutung |
|---|---|
| Bild |  |
| Alt-Text |  |
| Titel | H3 |
| Lead |  |
| Linktext |  |
| Link | Landingpage |

**Slot „Checkliste“: Service-Punkt-Instanzen**

## 4. Global Classes

Spalte „Element“ nennt das Bricks-Element, auf das die Klasse gehört. „Kinder“ sind einfache Klassen und Rollen der Kind-Elemente, die die Klasse anspricht.

### Abschnitte und Raster (Kategorie Sections)

| Klasse | Element | Zweck | Kinder | Einsatz |
|---|---|---|---|---|
| `section` | Section | Standard-Abschnittsabstand (80 px oben und unten). |  | alle Abschnitte |
| `section-sm` | Section | Kürzerer Abschnitt (64 px). |  | Referenzen |
| `section-head` | Div | Abschnittskopf, max. 62 Zeichen breit, Abstand nach unten. | Text `da-eyebrow`, H2, Text p | jeder Abschnitt mit Überschrift |
| `split` | Div (Breite 100 %) | Zwei gleich breite Spalten, ab 880 px eine. | zwei Divs | Über uns |
| `hero` | Section | Hero der Startseite: Verlauf, Schein, zentrierter Text. | H1 mit `<strong>`, Text `lead`, Div `hero-ctas` (Buttons), ul `hero-trust` (li › Icon + Span) | Startseite |
| `mosaic` | Div | Vierspaltiges Foto-Mosaik mit Textkarte, Tablet 2×2, Smartphone eine Spalte. Bringt Breite 100 % mit. | Divs `mosaic-tile` plus `mosaic-praxis`, `mosaic-card`, `mosaic-kanzlei`, `mosaic-mittelstand`; darin Bild, Span `mosaic-chip`, Service-Karte; Textkarte: `mosaic-card-head` (Spans `sc-label`, `sc-status`), `mosaic-card-title`, ul `mosaic-list`, `mosaic-card-foot` | Startseite, Section ohne Abstand |
| `partners` | Section | Partnerzeile, kompakter Abstand. | Container `partners-inner`, Span `partners-label`, Spans `wordmark` | Startseite |
| `tiles` | Div (Breite 100 %) | Kachelraster: vier Spalten, Tablet zwei, Smartphone eine. | Kachel- und Foto-Kachel-Instanzen | Leistungen |
| `steps` | Div (Breite 100 %) | Drei Spalten, unter 880 px eine. | Schritt-Instanzen | So arbeiten wir |
| `refs` | Div (Breite 100 %) | Spalten nach Platz (mind. 240 px), unter 880 px eine. | Referenzkarten | Referenzen |
| `quotes` | Div (Breite 100 %) | Breite plus schmale Spalte (1,3 : 1), unter 880 px eine. | Kundenstimmen | Referenzen |
| `pains` | Div (Breite 100 %) | Drei Spalten, unter 880 px eine. | Pain-Karten | Landingpages |
| `about` | Section | Abgesetzter Hintergrund mit Rahmen, Fakten-Raster und Textspalte. | Div `split` › links Eyebrow, H2, Div `about-facts` (Divs `fact` mit Spans `num`, `label`); rechts Div `about-text` mit Absätzen | Über uns |
| `feature` | Div | Zweispaltiger Feature-Abschnitt (Component Feature-Block). | figure mit Bild, H2, `lead`, ul `checks`; Modifier `flip` tauscht die Seiten | Landingpages |
| `concierge` | Div | Dunkler Concierge-Abschnitt (Component). | `concierge-text`, `concierge-visual`, ul `timeline` | Landingpages |
| `check` | Div | Digital-Check-Block auf Teal (Component). | ul `check-list`, Div `check-ctas`, Span `check-note`, aside `check-aside` | Startseite, Landingpages |
| `lp-hero` | Section | Hero der Landingpages (Component). | Div `lp-hero-grid` › Text mit H1, `lead`, Div `lp-hero-ctas`; figure mit Bild und Service-Karte | Landingpages |
| `audience` | Div | Zielgruppen-Panel (Component). | figure, H3, `lead`, ul `checks`, `textlink` | Zielgruppen-Umschalter |
| `faq` | Accordion (Nestable) | FAQ-Liste, max. 760 px, zentriert. | Blocks `faq-item` › `accordion-title-wrapper` (H3 + Icon), `accordion-content-wrapper` (Text) | Landingpages |
| `check-dialog` | Div | Dialog des Popups Digital-Check: Karte, Kopfzeile, Formular-Feinheiten. | Div `dialog-head` (Texte + Button `dialog-close`), Formular-Element | Popup 130 |
| `site-nav` | Section | Kopfzeile: Fläche mit Blur, ohne Section-Abstand, Seitenrand. | Container `nav-inner` | Header-Template |
| `nav-inner` | Container | Zeile des Headers: Logo links, Menü, Aktionen rechts, 72 px hoch. | Logo, Nav (Nestable) `nav-menu`, Div `nav-actions` | Header-Template |
| `nav-menu` | Nav (Nestable) | Menü: Desktop in einer Zeile, unter 960 px Drawer hinter dem Burger. Dropdown-Karte und Drawer-Liste. | Block ul (versteckte Klasse `brx-nav-nested-items`) › Text-Links und Dropdowns; Button `nav-cta` als letzter Punkt (nur im Drawer); Toggle `nav-burger` daneben | Header-Template |
| `nav-actions` | Div | Umschalter Hell/Dunkel und CTA rechts; mobil rückt sie neben den Burger, der CTA verschwindet. | Toggle-Mode, Button | Header-Template |
| `nav-burger` | Toggle | Burger-Button 44 px, zeigt im offenen Zustand ein X. |  | Header-Template |
| `site-footer` | Section | Dunkler Footer mit vier Spalten. | Div `footer-grid` › Div `footer-brand` (Logo, p), Divs `footer-col` (H4, ul), ul `footer-contact` (li › Icon + Link); Div `footer-bottom` | Footer-Template |

### Karten (Kategorie Cards)

| Klasse | Element | Zweck | Kinder | Einsatz |
|---|---|---|---|---|
| `service-card` | Div | Glas-Karte (Component Service-Karte). | Div `sc-head` (Spans `sc-label`, `sc-status`), Div `sc-title`, ul › li (Icon + Text) | Mosaik, Heroes |
| `tile` | Div | Kachel-Grundform: Fläche, Radius, Innenabstand, Mindesthöhe, Hover. | Div › Span `tile-num`, H3, p; Link `textlink` | Component Kachel |
| `step` | Div | Schritt-Karte. | Span `step-num`, H3, p | Component Schritt |
| `ref` | Div | Referenzkarte. | Div `ref-logo` (Bild), Span `ref-kind`, H3, p | Component Referenzkarte |
| `quote` | Div | Zitatkarte. | Span `placeholder-tag`, blockquote, cite | Component Kundenstimme |
| `pain` | Div | Schmerzpunkt-Karte. | blockquote, p | Component Pain-Karte |

### Varianten, immer zusätzlich zur Basisklasse (Kategorie Modifiers)

| Klasse | Element | Zweck | Kinder | Einsatz |
|---|---|---|---|---|
| `center` | Div `section-head` | Zentriert den Abschnittskopf, Eyebrow mit Linie links und rechts. |  | Für wen |
| `featured` | Div `quote` | Hervorgehobene Kundenstimme auf Teal. |  | erste Kundenstimme |
| `flip` | Div `feature` | Bild links statt rechts. |  | zweiter Feature-Block |
| `on-dark` | Button `da-btn-ghost` | Weißer Rahmen und Text auf dunklem Grund. |  | dunkle Abschnitte |
| `sand` | Div `service-card` | Glas in Sandton. |  | Variante der Service-Karte |
| `tile-cream / tile-teal / tile-deep / tile-sand` | Div `tile` | Farbvarianten der Kachel (Property „Variante“). |  | Component Kachel |
| `tile-photo` | Div `tile` | Bildkachel ohne Innenabstand, Foto füllt, Hover-Zoom. | Bild | Component Foto-Kachel |
| `serif / wide` | Span `wordmark` | Wortmarke in Serifenschrift bzw. gesperrt in Versalien. |  | Partnerzeile |

### Text und Listen (Kategorie Text)

| Klasse | Element | Zweck | Kinder | Einsatz |
|---|---|---|---|---|
| `da-eyebrow` | Text (span) | Versalien-Zeile mit Linie davor, Teal; in `section-head.center` auch Linie danach. |  | jeder Abschnittskopf |
| `textlink` | Text-Link | Fetter Link in Teal mit Pfeil-Icon, Pfeil rückt beim Hover. | Icon `icon` (arrow-right) | Kacheln, Panels |
| `checks` | Div (Tag ul) | Checkliste mit Icon je Zeile, `<strong>` für den Auftakt. | li (Div, Tag li) › Icon `icon` + Text | Feature-Block, Zielgruppen-Panel |
| `timeline` | Div (Tag ul) | Timeline mit Punkten links. | li › Span `dot` (Icon) + Text | Concierge |
| `placeholder-tag` | Text (span) | Kleiner Tag in Sand, kennzeichnet Platzhalter oder Kategorie. |  | Kundenstimmen |
| `wordmark` | Text (span) | Gedämpfte Wortmarke, beim Hover in Teal; alternativ Bild 22 px hoch. |  | Partnerzeile |

### Buttons (Kategorie Buttons)

| Klasse | Element | Zweck | Kinder | Einsatz |
|---|---|---|---|---|
| `da-btn` | Button | Basis: Innenabstand, Radius, Schrift, Übergang. Immer mit einer Variante. |  | überall |
| `da-btn-primary` | Button | Gefüllt Teal, weißer Text, Schatten. |  | Haupt-CTA |
| `da-btn-ghost` | Button | Nur Rahmen in Teal. |  | Zweit-CTA |
| `da-btn-light` | Button | Weiß mit dunkelblauem Text. |  | auf Teal-Flächen |
| `da-btn-sand` | Button | Sandfarben gefüllt. |  | Reserve |
| `da-btn-sm` | Button `da-btn` | Kleine Größe. |  | Header-CTA |
| `tabs` | Tabs (Nestable) | Pillen-Umschalter (liegt in der Kategorie Buttons). | versteckte Klassen `tab-menu`, `tab-title`, `tab-content`, `tab-pane` | Für wen |

### Icons (Kategorie Icons)

| Klasse | Element | Zweck | Kinder | Einsatz |
|---|---|---|---|---|
| `icon` | Icon | 16 × 16 px, kein Schrumpfen. |  | alle Icons |
| `icon-20` | Icon | 20 × 20 px. |  | Umschalter, Erfolgsmeldung |

### Formulare (Prototyp-Klassen, derzeit nicht im Einsatz) (Kategorie Forms)

| Klasse | Element | Zweck | Kinder | Einsatz |
|---|---|---|---|---|
| `form / field / form-foot / form-success / segmented` | Div | Stile des Prototyp-Formulars. Das Bricks-Formular im Popup nutzt stattdessen den Theme Style und `check-dialog`. Die Klassen bleiben für ein späteres selbstgebautes Formular. |  | keiner |

### Hilfsklassen (Kategorie Utilities)

| Klasse | Element | Zweck | Kinder | Einsatz |
|---|---|---|---|---|
| `sr-only` | beliebig | Nur für Screenreader sichtbar. |  | bei Bedarf |

## 5. Templates und Seiten

| Name | ID | Was es ist |
|---|---|---|
| Main Header | 52 | Header, gesamte Website. Sticky, „Sticky on scroll“ (bleibt im Fluss, Hero beginnt darunter). Menü, Umschalter Hell/Dunkel, CTA, Burger mit Drawer unter 960 px. |
| Main Footer | 54 | Footer, gesamte Website. Vier Spalten, © mit `{current_date:Y}`. Adresse noch Platzhalter. |
| Popup Digital-Check | 130 | Popup, gesamte Website. Öffnet sich über Buttons mit der Interaktion „Anzeigen › Popup 130“, schließt per X, Klick daneben und Escape. Formular speichert in Bricks › Form Submissions und mailt an post@digital-avenue.de. |
| Startseite | 2 | Seite. Hero, Mosaik, Partner, Für wen (Tabs), Leistungen, So arbeiten wir, Referenzen, Über uns, Digital-Check. |
| Component-Tests | 50, 60, 63, 101 | Private Testseiten mit je einer Instanz jeder Component. Zum Nachschauen, nicht löschen. |

## 6. Icons und Bilder

Icon-Set „Digital Avenue“ (15 Icons): arrow-right, calendar, check, chevron-down, clock, mail, menu, moon, phone, pin, shield, star, sun, wrench, x. Icon-Element mit Klasse `icon` oder `icon-20`.

- Fotos liegen in der Mediathek als m01 bis m33. Die Attachment-ID ist 99 minus Nummer (m05 → 94, m25 → 74).
- Logos: Digital Avenue 110 (hell, wird im Dunkelmodus per Filter weiß), DIGIZT 62, Dialyse Güstrow 106, Lungenpraxis am Tibarg 107, Urlaub bei Jana 108 (die letzten drei sind Platzhalter).
- Bild-Properties brauchen immer Bild, URL und Größe („large“ für Fotos, „full“ für SVG-Logos).

## 7. Wenn etwas nicht klappt

**Klasse eingetragen, aber nichts passiert.** Die Klasse steht als Text im Feld „Klassen“ statt als Global Class im Klassenfeld. Nur Global Classes bringen ihr CSS mit.

**Raster ist schmaler als der Container.** Dem Raster-Div fehlt Breite 100 %.

**Doppelter Seitenrand.** Container oder Section hat zusätzlich eigenes Padding. Beides kommt schon aus dem Theme Style.

**Popup öffnet sich nicht.** Der Button hat noch einen Link. Link leeren, Tag „button“, Interaktion prüfen.

**Tabs oder Accordion klappen nicht.** Die versteckten Klassen (`tab-menu`, `tab-pane`, `accordion-title-wrapper` …) fehlen an den Blocks.

**Component zeigt „No image selected“.** Die Bild-Property ist leer. Bild, URL und Größe eintragen.

**Farbe im Dunkelmodus falsch.** Ein Hex-Wert statt einer Variable. Farbe über die Palette wählen.
