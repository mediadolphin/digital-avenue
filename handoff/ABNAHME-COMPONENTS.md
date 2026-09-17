# Abnahme der 14 Components

Stand 17.09.2026 (Checkliste aus dem Chat, mit dem Stand der Components in
Bricks abgeglichen). Nils prüft im Browser und trägt hinter jeder Zeile
**i. O.** oder den Mangel ein. Aus den Mängeln entsteht die Arbeitsliste für
die Code-Session.

Testseiten am Staging (alle privat, eingeloggt aufrufen):

| Seite | Post | Inhalt |
|---|---|---|
| Component-Test Service-Karte | 50 | Service-Karte, Service-Punkt |
| Component-Test Kachel | 60 | Kachel, Foto-Kachel |
| Component-Test Karten | 63 | Schritt, Referenzkarte, Kundenstimme, Pain-Karte |
| Component-Test Abschnitte | 101 | Feature-Block, Timeline-Punkt, Concierge, Digital-Check-Block, Hero Landingpage |
| Startseite | 2 | Zielgruppen-Panel im Tabs-Umschalter |
| Heilberufe | 196 | Alle Abschnitts-Components in echter Reihenfolge, Service-Karte in Sand |

Vergleichsstand ist immer der Prototyp: `prototype/dist/digital-avenue-prototyp.html`
bzw. die Quellseite, die im Manifest je Component genannt ist.

## Abgleich mit dem Stand in Bricks (Code-Session, 17.09.2026)

Die Property-Listen der Checkliste weichen an einigen Stellen vom Stand in
Bricks ab. Geprüft wird, was es gibt:

| Component | Properties in Bricks | Abweichung zur Checkliste |
|---|---|---|
| Kachel `c3c53b` | Variante, Label, Titel, Copy, Link-Text, Link | kein Bild; Foto kommt aus der Foto-Kachel |
| Foto-Kachel `0851ab` | Bild, Alt-Text, Bildausschnitt | |
| Referenzkarte `cbca1c` | Logo, Alt-Text, Art, Titel, Copy | kein Link; Karte ist nicht klickbar |
| Kundenstimme `05cb9e` | Variante, Tag, Zitat, Quelle | Name und Rolle stehen zusammen in „Quelle“ |
| Pain-Karte `469300` | Zitat, Copy | kein Titel |
| Feature-Block `25cc6c` | Bildseite, Eyebrow, Titel, Lead, Bild, Alt-Text; Slot Checkliste | Titel ist H2 |
| Concierge `0a205a` | Eyebrow, Titel, Copy, Bild, Alt-Text, Karte (Label, Titel, Zeile); Slot Timeline | kein Button, kein Link |
| Digital-Check-Block `e44db4` | Eyebrow, Titel, Copy, Button-Text, Hinweis, Aside-Titel, Schritt 1–3; Slot Checkliste | ein Button (öffnet Popup 130), kein zweiter |
| Hero Landingpage `951227` | Eyebrow, Titel, Lead, Button 1 Text/Link, Button 2 Text/Link, Bild, Alt-Text, Bildausschnitt, Karte (Label, Status, Titel) | Wurzel ist eine Section |
| Zielgruppen-Panel `28c728` | Bild, Alt-Text, Titel, Lead, Linktext, Link; Slot Checkliste | |

Vorab bekannt, muss nicht neu gefunden werden: Dunkel-Logos der Referenzen
fehlen; Popup Digital-Check (Template 130) hat bereits ein Formular, aber noch
ohne Datenschutzlink; Media-Query-Fehler in `lp-kontakt`, `lp-form`,
`audience`, `tabs` am 17.09. korrigiert, Prüfung 2 bleibt trotzdem sinnvoll.

---

## Vier Prüfungen, die bei jeder Component laufen

1. **Hell und dunkel.** Toggle-Mode umschalten. Flächen, Rahmen, Schatten,
   Glas und Icons müssen mitwechseln. Bleibt etwas stehen, referenziert die
   Regel eine Variable statt eines Farb-Tokens.
2. **Drei Breiten.** Desktop, 960px, 390px. Gesucht sind Raster, die auf dem
   Handy einspaltig sein müssten und es nicht sind (Fall
   `responsive_override_precedes_base_rule` aus der Merkregel vom 17.09.).
3. **Leere Property.** Eine Instanz mit leerem Text- oder Bildfeld ansehen.
   Erscheint „No image selected“ oder verschwindet ein Element, fehlt der
   Default.
4. **Abstand außen.** Trägt die Section den Abstand und der Container nur die
   Breite? Doppelter Seitenrand ist das Erkennungszeichen.

---

## Seite 50 — Service-Karte

**Service-Punkt** (`0b9bf7`, Property: Text)
- [ ] Listenzeile mit Check-Icon, Icon bündig zur ersten Textzeile
- [ ] Langer Text bricht um, ohne dass das Icon mitrutscht
- [ ] Icon kommt aus dem Icon Manager, nicht als Inline-SVG (im Dunkelmodus muss es umfärben)

**Service-Karte** (`580b83`, Properties: Label, Status, Titel, Variante; Slot Listenpunkte)
- [ ] Variante Standard und Variante `sand` nebeneinander korrekt
- [ ] Beim Umschalten auf `sand` bleibt die Basisklasse `service-card` erhalten
- [ ] Die Listenpunkte kommen aus der Instanz, nicht aus der Slot-Vorlage, keine doppelte Karte
- [ ] Label, Status und Titel in der Hierarchie des Prototyps
- [ ] Glas-Deckkraft (0,84 / 0,86) mit Blur 24px lesbar, Hintergrund noch erkennbar

## Seite 60 — Kacheln

**Kachel** (`c3c53b`, Properties: Variante, Label, Titel, Copy, Link-Text, Link)
- [ ] Alle vier Varianten: `tile-cream`, `tile-teal`, `tile-sand`, `tile-deep`
- [ ] Textfarbe auf `tile-deep` und `tile-teal` lesbar, auch im Dunkelmodus
- [ ] Textlink sitzt unten, Kacheln gleicher Reihe gleich hoch
- [ ] Raster `tiles` auf 390px einspaltig

**Foto-Kachel** (`0851ab`, Properties: Bild, Alt-Text, Bildausschnitt)
- [ ] Standardbild (Attachment 74) greift, kein „No image selected“
- [ ] Bild randlos, `tile-photo` setzt das Padding auf 0
- [ ] Bildausschnitt bei schmaler Kachel noch brauchbar

## Seite 63 — Karten

**Schritt** (`719767`, Properties: Nummer, Titel, Copy)
- [ ] Nummer optisch als Zähler, nicht als Fließtext
- [ ] Reihe `steps` bricht auf dem Handy sauber um

**Referenzkarte** (`cbca1c`, Properties: Logo, Alt-Text, Art, Titel, Copy)
- [ ] Alle Platzhalterlogos sichtbar (Dialyse Güstrow 106, Lungenpraxis am Tibarg 107, Urlaub bei Jana 108, Pneumologie Eppendorf 164) und DIGIZT (62)
- [ ] Logos im Dunkelmodus sichtbar. Bekannt: Dunkelfassungen fehlen, nur notieren
- [ ] Logohöhe über alle Karten gleich
- [ ] Entscheidung: soll die Karte klickbar werden (Link-Property fehlt bisher)?

**Kundenstimme** (`05cb9e`, Properties: Variante, Tag, Zitat, Quelle)
- [ ] Variante `featured` auf Teal, Standard daneben
- [ ] Der Platzhalter-Tag ist als Platzhalter erkennbar, es steht kein erfundenes Zitat als echte Aussage da
- [ ] Zitat in Serif, Quelle klar abgesetzt

**Pain-Karte** (`469300`, Properties: Zitat, Copy)
- [ ] Zitat in Serif, Copy darunter
- [ ] Karte funktioniert auch mit kurzem Zitat

## Seite 101 — Abschnitte

**Feature-Block** (`25cc6c`, Slot `7823d9`, Properties: Bildseite, Eyebrow, Titel, Lead, Bild, Alt-Text)
- [ ] Bild rechts (Standard) und Bild links (`flip`) beide richtig (Bild links auf Seite 196 sichtbar)
- [ ] Auf dem Handy steht das Bild über dem Text, nicht mittendrin
- [ ] Eyebrow, H2 und Lead linksbündig
- [ ] Liste mit Icons, Slot-Inhalt kommt aus der Instanz

**Timeline-Punkt** (`74ec3e`, Property: Text)
- [ ] Punkte und Trennlinien durchgehend, auch bei unterschiedlich langen Texten
- [ ] Letzter Punkt schließt sauber ab

**Concierge** (`0a205a`, Slot `3856e1`, Properties: Eyebrow, Titel, Copy, Bild, Alt-Text, Karte)
- [ ] Dunkle Fläche, Eyebrow in Sand
- [ ] Nachricht-Karte auf dem Foto lesbar
- [ ] Im Dunkelmodus bleibt der Abschnitt vom Seitenhintergrund unterscheidbar

**Digital-Check-Block** (`e44db4`, Slot `17e049`, Properties: Eyebrow, Titel, Copy, Button-Text, Hinweis, Aside-Titel, Schritt 1–3)
- [ ] Aside: Zähler links, Text rechts, Text bricht zeilenweise und nicht Wort für Wort
- [ ] Button hell auf Teal, Hinweiszeile daneben
- [ ] Button öffnet das Popup Digital-Check (Template 130)

**Hero Landingpage** (`951227`, Wurzel ist eine Section)
- [ ] Verlauf und Abstand kommen aus der Component, die Seite setzt nichts nach
- [ ] Instanz liegt auf Wurzelebene, nicht in einer zusätzlichen Section
- [ ] Foto mit Service-Karte als Overlay, Buttons primär und ghost (Ghost mit Rahmen)

## Startseite — Zielgruppen

**Zielgruppen-Panel** (`28c728`, Slot Checkliste)
- [ ] Umschalten zwischen allen Tabs, Inhalt wechselt tatsächlich
- [ ] Panel liegt im `tab-pane`, nicht als dessen Ersatz, beim Umschalten flackert nichts
- [ ] Aktiver Tab erkennbar, Tastaturbedienung möglich
- [ ] Tabs auf 390px als volle Breite, scrollbar

---

## Nicht Teil dieser Abnahme

FAQ ist keine Component, sondern ein Accordion-Muster mit Klasse `faq`; es
läuft in der Abnahme der Seiten mit. Ebenso die Abschnitte ohne
Properties: Hero Start, Mosaik, Partnerzeile, Zielgruppen-Tabs, Leitbild,
Dialog, Kontaktbereich der Landingpages.

## Offene Punkte, die bei der Abnahme mit auffallen werden

- Dunkel-Logos der Referenzen fehlen (Digital Avenue liegt vor).
- Popup Digital-Check (Template 130) hat ein Formular, aber der
  Datenschutzlink ist noch ein Platzhalter.
- Die Referenz Dialyse Güstrow braucht die Freigabe des Kunden, bevor sie
  öffentlich genannt wird.

## Ergebnis

Hier trägt Nils Mängel ein, die Code-Session macht daraus die Arbeitsliste.

| Nr. | Component | Mangel | Status |
|---|---|---|---|
| | | | |
