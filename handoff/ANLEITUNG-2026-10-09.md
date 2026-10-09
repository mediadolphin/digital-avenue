# Anleitung: Änderungen vom 9. Oktober 2026

Für Nils. Beschreibt, was sich am Staging und im Repository geändert hat und
wie du damit arbeitest. Alles ist Entwurf, solange nichts anderes dasteht.

## 1. Überblick

| Bereich | Was jetzt gilt | Wo |
|---|---|---|
| Branchen | Fünf Seiten unter `/branchen/`: Arztpraxen, Heilberufe, Kanzleien & Freie Berufe, Mittelstand, später Gastgewerbe | Seiten 163, 196, 203, 204; Übersicht 193 |
| Kampagnenseiten | liegen unter `/branchen/arztpraxen/` | Seiten 169, 171, 173 |
| Referenzen | einfacher Menüpunkt auf `/referenzen/` | Header 52 |
| Blog | bleibt im Menü, Seite „Blog“ ist Beitragsseite | Seite 231 |
| Partner | Übersicht und vier Partnerseiten | Seiten 214 bis 218 |
| Leistungen | Übersicht und vier Leistungsseiten | Seiten 244 bis 248 |
| Kontakt | eigene Seite mit allgemeinem Formular | Seite 235, Template 233 |
| Header | kein Digital-Check-Button mehr, weder Desktop noch mobil | Header 52 |
| Footer | Hamburger Adresse, Links „Partner“ und „Kontakt“ | Footer 54 |
| Rückmeldezeiten | Interessenten: innerhalb eines Werktags. Kunden: vertraglich vereinbarte Reaktionszeit | alle Seiten |
| Unternehmensdaten | Feldgruppe in Meta Box vorbereitet, Einstellungsseite legst du an | Feldgruppe 243 |

## 2. Menü und Footer bearbeiten

Header und Footer sind Bricks-Templates, keine WordPress-Menüs.

- **Header:** Bricks › Templates › „Main Header“ (52). Die Navigation ist
  das Element „Hauptnavigation“ (Nav Nested). Darin liegt der Block
  „Menüpunkte“ mit Textlinks und den Dropdowns. Einen Menüpunkt fügst du
  hinzu, indem du einen vorhandenen Textlink duplizierst und Text und Link
  änderst.
- **Branchen-Dropdown:** Dropdown „Branchen“ › „Branchen-Liste“. Eine neue
  Branche kommt erst ins Menü, wenn ihre Seite Inhalt hat (Merkregel).
- **Footer:** Bricks › Templates › „Main Footer“ (54). Spalten
  „Leistungen“, „Branchen“, „Kontakt“, unten die Rechtslinks.
- **Reihenfolge:** Im Builder per Ziehen in der Strukturansicht. Bricks
  speichert die Reihenfolge so, wie die Elemente in der Struktur stehen.

## 3. Eine neue Branchen- oder Partnerseite anlegen

1. Eine passende Seite duplizieren, zum Beispiel Heilberufe (196) für eine
   Branche oder Placetel (215) für einen Partner. In der Seitenliste geht
   das über den Link zum Duplizieren, falls Bricks ihn anbietet, oder per
   Claude mit `duplicate-post`.
2. Titel, Titelform (Slug) und unter „Seitenattribute“ die übergeordnete
   Seite setzen: „Branchen“ (193) oder „Partner“ (214).
3. Im Builder die Texte ändern. Die meisten Abschnitte sind Components.
   Du klickst die Instanz an und änderst die Werte im Bereich
   „Properties“ rechts, nicht im Element darunter. Listenpunkte in Karten
   sind eigene kleine Components (Service-Punkt) im Slot der Karte.
4. Bilder tauschen: in der Property „Bild“ der Hero- oder Feature-Instanz.
   Alt-Text steht als eigene Property daneben.
5. Erst wenn die Seite fertig ist: Link im Header oder Footer ergänzen.

## 4. Partnerseiten

- **Aufbau jeder Seite:** Hero mit Service-Karte, „Was wir übernehmen“
  (Feature-Block), „Wer macht was“ (Text und Karte), drei Schritte,
  Digital-Check, FAQ, Kacheln zu den anderen drei Partnern.
- **Texte:** Quelle ist `handoff/partner/partnerseiten.md`. Wenn du dort
  etwas änderst, sag Bescheid; Prototyp und Bricks werden aus denselben
  Daten erzeugt.
- **Platzhalter:** Auf der Netleaders-Seite stehen drei sichtbare
  Platzhalter in eckigen Klammern (Leistungsumfang, Vertragsmodell,
  Abgrenzung zu IONOS). Vor dem Veröffentlichen ersetzen.
- **Verlinkung:** Footer-Link „Partner“, Partnerzeile auf der Startseite
  (die vier Namen sind Links), Kacheln auf jeder Partnerseite.
- **Neuer Partner:** eine Partnerseite duplizieren (Abschnitt 3), dann
  auf den anderen Partnerseiten eine Kachel in „Weitere Partner“ und auf
  der Übersicht 214 eine Kachel ergänzen.
- **Logos:** erst mit Freigabe des Partners. Bis dahin stehen die Namen als Text.

## 4a. Leistungsseiten

- **Adressen:** `/leistungen/` und darunter Sichtbarkeit & Marke,
  Infrastruktur & Prozesse, Digital-Concierge, Foto, Video & Text.
- **Aufbau** wie bei den Partnerseiten. Die Infrastruktur-Seite endet mit
  Kacheln zu den vier Partnern, die anderen mit Kacheln zu den übrigen
  Leistungen.
- **Texte:** Quelle ist `handoff/leistungen/leistungsseiten.md`. Titel und
  H1 sind Arbeitsstände bis zur Keyword-Recherche.
- **Verlinkung:** Header „Leistungen“, Startseiten-Kacheln („Mehr
  erfahren“), Footer-Spalte Leistungen.
- **Alte Adressen:** Die sechs Service-Seiten der Live-Site leiten nach dem
  Launch auf die neuen Seiten um. Liste: `handoff/REDIRECTS.md`.

## 5. Kontaktseite und Formular

- **Seite 235** zeigt Kontaktdaten, das Formular und die Standorte.
  „Route planen“ ist ein Link zu Google Maps, keine eingebettete Karte
  (keine fremden Cookies).
- **Formular:** Template „Kontaktformular allgemein“ (233). Es wird auf
  der Seite über ein Template-Element eingebunden. Änderst du das Template,
  ändert es sich überall, wo es eingebunden ist.
- **Einbinden auf einer anderen Seite:** Element „Template“ einfügen,
  Template 233 wählen, „Kein Wurzelelement“ aktivieren. Das versteckte
  Feld „Seite“ trägt automatisch den Seitentitel in die Anfrage ein.
- **Anfragen:** gehen per E-Mail an post@digital-avenue.de und werden in
  Bricks › Form Submissions gespeichert. Ohne SMTP-Plugin kommen die Mails
  am Staging nicht an.
- **Themenliste ändern:** im Template 233 das Formular wählen, Feld
  „Thema“, Optionen je Zeile.
- **Rostock:** Die Adresse fehlt noch, auf der Seite steht ein Platzhalter.

## 6. Unternehmensdaten zentral pflegen (Meta Box)

Ziel: Telefon, E-Mail, Adressen, Servicezeiten und Rückmeldezeiten an
einer Stelle pflegen. Die Seiten lesen sie über Dynamic Data aus.

**Schritt 1, einmalig durch dich:** Einstellungsseite anlegen.

1. WordPress-Admin › Meta Box › Settings Pages › Add New.
2. Menu title: `Unternehmensdaten`
3. ID: `unternehmen` (genau so, die Feldgruppe ist darauf eingestellt)
4. Option name: `da_unternehmen`
5. Menu type bzw. Parent: unter „Einstellungen“ (Settings).
6. Speichern.

Danach erscheint unter Einstellungen › Unternehmensdaten ein Formular mit
zehn Feldern. Die Standardwerte sind schon eingetragen: Firma,
Ansprechpartner, Telefon (Anzeige und Link), E-Mail, Adresse Hamburg,
Adresse Rostock (leer), Servicezeiten, Rückmeldung für Interessenten,
Reaktionszeit für Kunden. Einmal „Save Settings“ klicken, damit die Werte
gespeichert sind.

**Schritt 2, durch Claude:** Footer, Kontaktseite und die übrigen Stellen
auf diese Felder umstellen. Danach ändert sich eine Telefonnummer an allen
Stellen gleichzeitig.

**Selbst verwenden:** Im Builder bei einem Text auf das Dynamic-Data-Symbol
klicken und unter „Meta Box“ das Feld wählen. Bricks setzt dann einen
Platzhalter-Tag ein, der beim Anzeigen durch den Wert ersetzt wird.

Das eigene Plugin „DA Parameter“ wird damit nicht gebraucht.

## 7. Rückmeldezeiten

- **Interessenten** (Digital-Check, Kontaktformular, Anfragen):
  „innerhalb eines Werktags“.
- **Kunden mit Betreuungsvertrag:** „in der vertraglich vereinbarten
  Reaktionszeit“, während der Servicezeiten.
- Umgestellt auf Kontaktseite, Heilberufe, im Modul-Template der
  Kampagnenseiten (167) und im Prototyp. Die FAQ-Frage heißt jetzt „Ist
  mit der Rückmeldung schon alles erledigt?“.
- **Nicht angefasst:** die Mailingtexte der Kampagne
  (`handoff/kampagne/02_Mailingtexte.md`) und das Kampagnenkonzept. Dort
  steht weiter „innerhalb einer Stunde“; das entscheidest du für HubSpot.

## 8. Blog

- Seite „Blog“ (231) ist unter Einstellungen › Lesen als Beitragsseite
  eingetragen und noch Entwurf. Der WordPress-Beispielbeitrag liegt im
  Papierkorb.
- Beiträge schreibst du wie gewohnt unter Beiträge.
- Vor dem Launch fehlen: ein Bricks-Template für die Beitragsübersicht und
  eines für den einzelnen Beitrag (zuerst im Prototyp) sowie die ersten
  drei bis fünf Beiträge.

## 9. Digital-Check

Der Button ist aus dem Header raus. Den Digital-Check öffnen weiterhin:
der Button im Hero der Startseite und der Button im Digital-Check-Block,
der auf fast jeder Seite unten steht. Beide öffnen das Popup 130.

## 10. Rückgängig machen

Jede Änderung per Claude hat eine Revision angelegt. Im Builder unter
Revisionen oder per Claude mit `restore-revision`.

| Stand vor | Revision |
|---|---|
| Startseite: Branchenlinks | 199 |
| Header: Branchen | 200 |
| Footer: Branchen | 201 |
| Header: Referenzen als Link | 205 |
| Startseite: Partnerlinks | 224 |
| Footer: Partner-Link | 225 |
| Header ohne Digital-Check-Button | 239 |
| Modul-Template Kampagnen: Rückmeldezeit | 240 |
| Heilberufe: Rückmeldezeit | 241 |
| Kontaktseite: Rückmeldezeit | 242 |
| Startseite: Leistungslinks | 262 |
| Footer: Leistungslinks | 263 |

## 11. Für Claude-Sitzungen

- `handoff/tools/mcpcall.py` ruft Bricks-Abilities direkt auf und
  speichert große Seitenbäume als Datei. Der Server verlangt den Header
  `MCP-Protocol-Version`, das Skript setzt ihn.
- Beim Speichern eines Seitenbaums bestimmt die Reihenfolge im Array die
  Reihenfolge auf der Seite (Merkregel).
- Seiten anlegen und umhängen geht über `/wp-json/wp/v2/pages`.

## 12. Was du noch liefern oder entscheiden musst

- Einstellungsseite „Unternehmensdaten“ anlegen (Abschnitt 6)
- Adresse Rostock, und ob die Hamburger Adresse für Besuche gedacht ist
- Partnerstatus Placetel und Doctolib, Angaben zu Netleaders
- Rückmeldezeit in den Kampagnen-Mailings
- SMTP-Zugang für den Mailversand
