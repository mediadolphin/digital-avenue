# Digital Avenue: Projektwissen für den Chat

Stand 09.10.2026. Automatisch aus dem Repository `mediadolphin/digital-avenue` gebündelt (`handoff/tools/build-chat-paket.py`). Bei jedem neuen Thema zuerst „Projektstand“ und „Merkregeln“ lesen.

## Inhalt

1. Anleitung zu den Änderungen vom 09.10.2026 (`handoff/ANLEITUNG-2026-10-09.md`)
2. Statusbericht 09.10.2026 (`handoff/STATUSBERICHT-2026-10-09.md`)
3. Projektstand (`handoff/STATUS.md`)
4. Merkregeln und Entscheidungen (`handoff/MERKREGELN.md`)
5. Briefing (`BRIEFING.md`)
6. Kampagne: Start (`handoff/kampagne/00_START_HIER.md`)
7. Kampagne: Konzept (`handoff/kampagne/01_Kampagnenkonzept.md`)
8. Kampagne: Mailingtexte (`handoff/kampagne/02_Mailingtexte.md`)
9. Kampagne: Landingpage-Texte (`handoff/kampagne/03_Landingpage_Texte.md`)
10. Branchenseite Heilberufe: Konzept und Texte (`handoff/branchen/heilberufe.md`)
11. Partnerseiten: Konzept und Texte (`handoff/partner/partnerseiten.md`)
12. Leistungsseiten: Konzept und Texte (`handoff/leistungen/leistungsseiten.md`)
13. Weiterleitungen für den Launch (`handoff/REDIRECTS.md`)
14. Technisches Protokoll Bricks (`handoff/import/README.md`)



---

# Anleitung zu den Änderungen vom 09.10.2026

Quelle: `handoff/ANLEITUNG-2026-10-09.md`

## Anleitung: Änderungen vom 9. Oktober 2026

Für Nils. Beschreibt, was sich am Staging und im Repository geändert hat und
wie du damit arbeitest. Alles ist Entwurf, solange nichts anderes dasteht.

### 1. Überblick

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

### 2. Menü und Footer bearbeiten

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

### 3. Eine neue Branchen- oder Partnerseite anlegen

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

### 4. Partnerseiten

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

### 4a. Leistungsseiten

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

### 5. Kontaktseite und Formular

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

### 6. Unternehmensdaten zentral pflegen (Meta Box)

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

### 7. Rückmeldezeiten

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

### 8. Blog

- Seite „Blog“ (231) ist unter Einstellungen › Lesen als Beitragsseite
  eingetragen und noch Entwurf. Der WordPress-Beispielbeitrag liegt im
  Papierkorb.
- Beiträge schreibst du wie gewohnt unter Beiträge.
- Vor dem Launch fehlen: ein Bricks-Template für die Beitragsübersicht und
  eines für den einzelnen Beitrag (zuerst im Prototyp) sowie die ersten
  drei bis fünf Beiträge.

### 9. Digital-Check

Der Button ist aus dem Header raus. Den Digital-Check öffnen weiterhin:
der Button im Hero der Startseite und der Button im Digital-Check-Block,
der auf fast jeder Seite unten steht. Beide öffnen das Popup 130.

### 10. Rückgängig machen

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

### 11. Für Claude-Sitzungen

- `handoff/tools/mcpcall.py` ruft Bricks-Abilities direkt auf und
  speichert große Seitenbäume als Datei. Der Server verlangt den Header
  `MCP-Protocol-Version`, das Skript setzt ihn.
- Beim Speichern eines Seitenbaums bestimmt die Reihenfolge im Array die
  Reihenfolge auf der Seite (Merkregel).
- Seiten anlegen und umhängen geht über `/wp-json/wp/v2/pages`.

### 12. Was du noch liefern oder entscheiden musst

- Einstellungsseite „Unternehmensdaten“ anlegen (Abschnitt 6)
- Adresse Rostock, und ob die Hamburger Adresse für Besuche gedacht ist
- Partnerstatus Placetel und Doctolib, Angaben zu Netleaders
- Rückmeldezeit in den Kampagnen-Mailings
- SMTP-Zugang für den Mailversand


---

# Statusbericht 09.10.2026

Quelle: `handoff/STATUSBERICHT-2026-10-09.md`

## Statusbericht Relaunch digital-avenue.de

Stand 09.10.2026. Grundlage: Staging `relaunch.digital-avenue.de` am selben
Tag per MCP und Frontend gelesen, alle vier Branches im Repository, das
Konzept „Konzept und Website-Texte Relaunch“ und das „URL-Inventar &
Redirect-Plan“ aus Google Drive, die Sitemap der Live-Site.

Maßstab für jede Empfehlung: Wartung, SEO und Usability im Gleichgewicht,
so viel wie möglich in Bricks, so wenig eigener Code wie möglich.

### Auf einen Blick

| Bereich | Stand | Bewertung |
|---|---|---|
| Design-Fundament | Farben, Dunkelmodus, Schriften, 68 Klassen, 14 Components, 15 Icons, Theme Style | fertig |
| Header, Footer, Popup | gebaut, mobiles Menü läuft, Popup-Formular speichert | fertig bis auf E-Mail-Versand |
| Startseite | gebaut und veröffentlicht | fertig bis auf 11 Platzhalter |
| Übrige Seiten | 19 Link-Ziele in Header und Footer, davon keins öffentlich erreichbar | Hauptarbeit liegt noch vor uns |
| Copy | vollständig für Startseite, Heilberufe, drei Kampagnenseiten; Prototyp-Texte für Praxen, Kanzleien, Mittelstand | für rund zwei Drittel der Seiten fehlt Text |
| Informationsarchitektur | drei verschiedene Fassungen im Umlauf | größtes Risiko, Entscheidung nötig |
| SEO-Technik | kein SEO-Plugin, Sprache Englisch, keine Redirects | vor dem Launch nötig, wenig Aufwand |

Der Kern: Das Fundament ist solide und gut dokumentiert. Was fehlt, sind
weniger Technik als Entscheidungen und Texte. Die Navigation verspricht
mehr Seiten, als es Inhalte gibt.

### 1. Technik

#### 1.1 Was am Staging steht

| Baustein | Bestand |
|---|---|
| Seiten | Startseite (veröffentlicht); Entwürfe Heilberufe (196), Kampagnenseiten Facharztpraxis (169), Empfang entlasten (171), Betreuung wechseln (173); leere Entwürfe Arztpraxen (163) und Branchen (193); vier private Testseiten; WordPress-Standardseite „Privacy Policy“ |
| Templates | Header 52, Footer 54, Popup Digital-Check 130; Abschnitte „LP Arztpraxen: Kontaktformular“ 165, „LP Arztpraxen: Gemeinsame Module“ 167, „Heilberufe: Kontaktformular“ 194 |
| Design System | 52 Farben mit Dunkelwert, 48 Variablen, 68 Global Classes in 8 Kategorien, 14 Components, Icon-Set mit 15 Icons |
| Post-Typen, Menüs | keine eigenen Post-Typen, keine WordPress-Menüs; die Navigation steckt fest im Header-Template |
| Umgebung | WordPress 7.1.3, PHP 8.4, Bricks 2.4, Meta Box mit MCP-Abilities, Plesk |

#### 1.2 Befunde

1. **Das Repository ist gespalten.** Eine parallele Sitzung hat vom 11. bis
   16.09. auf dem Branch `claude/optimistic-ride-6edr1i` gearbeitet: mobiles
   Menü, Rest der Startseite, Popup Digital-Check, `handoff/BAUKASTEN.md`
   und die Erweiterung um „Foto, Video & Text“. Am Staging ist das alles
   umgesetzt, im Hauptbranch fehlt es. `handoff/STATUS.md` im Hauptbranch
   meldet deshalb das mobile Menü noch als offen. Zwei weitere Branches
   enthalten Skill-Updates. Zusammenführen ist der erste Schritt; Konflikte
   gibt es nur in fünf Doku-Dateien, die zwei Skill-Branches gehen glatt.

2. **Die Informationsarchitektur existiert in drei Fassungen.**

   | Quelle | Zielgruppen bzw. Branchen |
   |---|---|
   | Prototyp-Navigation | Für Praxen, Für Kanzleien, Für den Mittelstand |
   | Header am Staging | Ärzte, Heilberufe, Freie Berufe, Kanzleien, Ferienwohnungen, Handwerk, Kundendienst |
   | Footer am Staging | Ärzte, Heilberufe, Kanzleien, Handwerk, Kundendienst, Gastgewerbe |

   Dazu liegen die Kampagnenseiten unter `/arztpraxen/`, die Navigation
   verlinkt aber `/branchen/aerzte/`. Der Mittelstand ist auf der
   Startseite eine der drei Hauptzielgruppen (Eyebrow, H1-Umfeld, dritter
   Tab), hat aber keine eigene Seite; „Mehr für den Mittelstand“ führt auf
   die leere Branchenübersicht. Für SEO und Nutzer heißt das: zwei Seiten
   konkurrieren um „Arztpraxis“, und die wichtigste Zielgruppe nach Praxen
   und Kanzleien hat keinen Landeplatz.

3. **Sieben Branchen im Menü, Texte für vier.** Für Freie Berufe,
   Ferienwohnungen, Handwerk, Kundendienst und Gastgewerbe gibt es keine
   Zeile Copy. Dünne Branchenseiten schaden mehr, als sie nutzen: Google
   wertet sie als wenig hilfreich, und jede Seite muss gepflegt werden.
   Inhaltlich überschneiden sie sich: Kanzleien sind Freie Berufe,
   Ferienwohnungen gehören zum Gastgewerbe, Handwerk und Kundendienst sind
   der Mittelstand aus dem Prototyp. Empfehlung in 1.3.

4. **Referenzen als Dropdown mit fünf Kundennamen.** Für Besucher sagen
   Firmennamen im Hauptmenü wenig, jede neue Referenz erfordert eine
   Header-Änderung, und die Übersichtsseite bekommt keine Links. Besser:
   „Referenzen“ als einfacher Link auf die Übersicht, die Einzelseiten
   hängen darunter. Für Metallbau Rostock gibt es weder Karte noch Text.

5. **„Blog“ ohne Beiträge.** Die alte Site hat keine Beiträge, im
   Repository gibt es keine. Ein leerer Blog im Hauptmenü wirkt
   unfertig. Empfehlung: Menüpunkt erst, wenn drei bis fünf Beiträge
   stehen; bis dahin raus.

6. **Keine Kontaktseite, keine Adresse.** Im Footer steht „[Adresse
   ergänzen]“. Für die lokale Suche in Hamburg und Rostock braucht es Name,
   Adresse und Telefon einheitlich auf der Seite und im Google-Profil.
   Eine schlichte Seite `/kontakt/` mit beiden Standorten und dem
   Formular ist Standard, den Besucher erwarten. Der Digital-Check bleibt
   der Haupt-CTA.

7. **Drei Formulare für denselben Zweck.** Popup Digital-Check, Template
   165 und Template 194 sind getrennte Formulare mit eigener Mailvorlage.
   Wartbarer ist ein Kontaktformular-Template mit verstecktem Feld
   `{post_title}`, das jede Seite einbindet. Am Staging fehlt ein
   SMTP-Plugin, Mails aus den Formularen kommen nicht an. Der Link zur
   Datenschutzerklärung ist in zwei Formularen noch Platzhalter.

8. **Sprache steht auf Englisch.** WordPress läuft mit `en-US`, die Seite
   gibt `<html lang="en-US">` aus. Das schadet Screenreadern und der
   Spracherkennung von Suchmaschinen. Behebung ohne Code: Einstellungen ›
   Allgemein › Sprache Deutsch.

9. **Kein SEO-Plugin.** Seitentitel ist nur „Digital Avenue“, keine
   Meta-Description, kein strukturiertes Datenformat, keine Sitemap. Die
   Live-Site nutzt Rank Math. Empfehlung: Rank Math beibehalten. Es deckt
   Titel und Descriptions, Sitemap, Schema für das lokale Unternehmen,
   noindex für die Kampagnenseiten und die 301-Redirects ab. Damit
   entfallen ein Redirect-Plugin und eigener Code.

10. **Redirect-Plan ist veraltet.** Das Drive-Dokument plant drei Säulen,
    heute sind es vier Bereiche. Es sagt „Über uns unverändert“, die neue
    Adresse ist aber `/ueber-uns/` statt `/ueber-digital-avenue/`. Die
    Rechtsseiten liegen alt unter `/legal/...`. Die Sitemap der Live-Site
    enthält außerdem rund ein Dutzend Plugin-Reste (login, register,
    members, sample-page, ui, newsletter), die nach dem Launch auf 410
    oder die Startseite zeigen sollten.

11. **Unternehmensdaten doppelt gepflegt.** Telefon und E-Mail stehen fest
    im Footer und in Texten. Das Plugin `da-parameter` aus dem Repository
    ist nicht installiert (am Staging geprüft). Mit Blick auf „wenig
    eigener Code“: Eine Meta-Box-Einstellungsseite leistet dasselbe, und
    Bricks liest sie nativ über Dynamic Data. Ob die nötige
    Meta-Box-Erweiterung installiert ist, habe ich nicht prüfen können.

12. **Kleinere Punkte.** Footer-Überschriften sind H4 direkt nach H2 (die
    Gliederung springt). `color-scheme` fehlt im Custom CSS, Formularfelder
    bleiben im Dunkelmodus hell. Standardmodus ist „hell“, im Prototyp galt
    die Systemeinstellung. Vor dem Launch Testseiten und „Privacy Policy“
    löschen. Das Staging steht korrekt auf noindex; das muss beim Go-Live
    umgestellt werden.

#### 1.3 Empfohlene Seitenstruktur

Ziel ist eine Struktur, die zum Launch vollständig gefüllt ist und
später wachsen kann.

```
/                                  Startseite
/leistungen/                       Übersicht der vier Bereiche
  /leistungen/sichtbarkeit-marke/
  /leistungen/infrastruktur-prozesse/
  /leistungen/digital-concierge/
  /leistungen/foto-video-text/
/branchen/                         Übersicht
  /branchen/arztpraxen/            statt /branchen/aerzte/ (Suchbegriff „Arztpraxis“)
    /branchen/arztpraxen/facharztpraxis/        Kampagne, noindex
    /branchen/arztpraxen/empfang-entlasten/     Kampagne, noindex
    /branchen/arztpraxen/betreuung-wechseln/    Kampagne, noindex
  /branchen/heilberufe/
  /branchen/kanzleien/             inklusive Freie Berufe
  /branchen/mittelstand/           Handwerk und Kundendienst als Abschnitte
  /branchen/gastgewerbe/           später, inklusive Ferienvermietung
/referenzen/                       Archiv des Post-Typs
  /referenzen/<kunde>/             Einzelseiten aus einem Template
/ueber-uns/
/kontakt/
/impressum/  /datenschutz/
/blog/                             bleibt im Menü (Entscheidung 09.10.)
/partner/                          Übersicht, neu 09.10.
  /partner/placetel/  /partner/doctolib/  /partner/ionos/  /partner/netleaders/
```

Damit stünden zum Launch rund 20 gefüllte Seiten statt 19 leerer Links.
Die Kampagnenseiten wandern unter die Branchenseite; der leere Entwurf
„Arztpraxen“ unter `/arztpraxen/` entfällt. Weil die Kampagne noch nicht
läuft, kostet der Umzug nichts.

Leistungen als vier Unterseiten, nicht als eine Seite mit Ankern: Jede
Seite kann für ihren Suchbegriff ranken (Webdesign Hamburg, Telefonanlage
für Praxen, Fotograf und Imagefilm), und die sieben alten `/service/`-URLs
bekommen ein passendes Ziel. Für den Launch reicht notfalls die
Übersichtsseite mit vier Abschnitten; die Unterseiten folgen.

#### 1.4 Meta Box: Custom Post Types ja oder nein

| Inhalt | Empfehlung | Begründung |
|---|---|---|
| Referenzen | **Post-Typ `referenz`** mit Taxonomie `branche` | Erscheinen auf Startseite, Branchenseiten, Übersicht und als Einzelseite. Mit Query Loop und der vorhandenen Component „Referenzkarte“ erscheint eine neue Referenz überall, ohne Seiten anzufassen. Einzelseiten kommen aus einem Bricks-Template, die Branchenseiten filtern über die Taxonomie. Felder: Kunde, Ort, Logo hell und dunkel, Kurztext für die Karte, Ergebnis, Leistungen, Bilder, Kundenstimme. |
| Kundenstimmen | **Feldgruppe in `referenz`**, kein eigener Typ | Es gibt zwei echte. Ein eigener Typ lohnt erst ab etwa zehn. |
| FAQ | **Post-Typ `faq`** mit Taxonomien `branche` und `thema`, zweite Welle | Preis, Vertrag, Reaktionszeit und Datenschutz wiederholen sich auf rund acht Seiten. Eine Antwort an einer Stelle hält sie gleich, das war dein Anliegen beim Parameter-Plugin. Bricks-Accordion mit Query Loop, FAQ-Schema bleibt. |
| Branchen | **Seiten**, kein Post-Typ | Jede Branchenseite hat eigenen Aufbau und eigene Länge (Heilberufe 1.500 Wörter, Kanzleien 500). Ein Post-Typ erzwänge ein Einheitslayout oder Felder für jede Variante. Die Taxonomie `branche` verbindet sie trotzdem mit Referenzen und FAQ. |
| Leistungen | **Seiten**, kein Post-Typ | Vier Einträge, die sich selten ändern und individuell aufgebaut sind. Die alte Site hatte einen Post-Typ „service“; dessen URLs werden umgeleitet. |
| Partner | Abschnitt-Template | Vier Logos, ändern sich kaum. |
| Team | Teil von Über uns | Eine bis zwei Personen. |
| Blog | WordPress-Beiträge | Nativ, falls er kommt. |
| Digital-Check-Anfragen | Bricks-Formulareinträge, kein Post-Typ | Bricks speichert Anfragen bereits, HubSpot folgt. Die Entscheidung vom 11.09. für einen Anfrage-Typ ist damit überholt. |
| Unternehmensdaten | Meta-Box-Einstellungsseite, sonst `da-parameter` | Siehe Befund 11. |

Umsetzung ohne eigenen Code: Post-Typen, Taxonomien und Feldgruppen legt
der Meta-Box-MCP an (`create-post-type`, `create-taxonomy`,
`create-field-group`). Bricks liest Meta-Box-Felder nativ. Die Definitionen
exportieren wir als JSON ins Repository, damit sie dokumentiert sind.

Reihenfolge: zuerst `referenz` mit Template und Übersicht, dann die
Referenzkarten der Startseite auf den Query Loop umstellen. `faq` erst,
wenn drei Branchenseiten stehen und die gemeinsamen Fragen sichtbar sind.

#### 1.5 Bis zum Launch technisch nötig

- Sprache Deutsch, Rank Math, SMTP-Plugin mit echtem Postfach
- Redirects: sieben `/service/`-URLs, `/ueber-digital-avenue/`, zwei
  `/legal/`-URLs, Plugin-Reste
- Ein Kontaktformular-Template, Datenschutz-Link, Testversand je Formular
- `color-scheme`, Standardmodus, Dunkel-Logos der Referenzen
- 404-Seite als Bricks-Template
- Lighthouse und Barrierefreiheit je Seitentyp, Mobilprüfung der
  Kampagnenseiten nach der Media-Query-Korrektur
- Testseiten löschen, noindex aus, Go-Live per Migration

### 2. Inhalt

#### 2.1 Geplante Seiten und vorhandene Copy

| Seite laut Navigation | Copy | Prototyp | Bricks |
|---|---|---|---|
| Startseite | vollständig, 11 Platzhalter (2.2) | ja | veröffentlicht |
| Leistungen | nur Kacheltexte (je zwei Sätze) und Säulentexte aus dem Drive-Konzept (je rund 70 Wörter, noch drei statt vier Bereiche); alte `/service/`-Seiten als Materialquelle | nein | nein |
| Branchen-Übersicht | keine | nein | leerer Entwurf |
| Ärzte / Arztpraxen | Prototyp „Für Praxen“, rund 700 Wörter | ja | nein |
| Heilberufe | vollständig, rund 1.500 Wörter; offene Entscheidungen im Konzept, Abschnitt 4 | ja | Entwurf |
| Kanzleien | Prototyp, rund 520 Wörter; Kanzlei-Referenz fehlt | ja | nein |
| Mittelstand | Prototyp, rund 570 Wörter; nicht in der Navigation | ja | nein |
| Freie Berufe, Ferienwohnungen, Handwerk, Kundendienst, Gastgewerbe | keine | nein | nein |
| Referenzen-Übersicht | Seitendesign im Design System vorhanden, die Fälle darin sind bis auf DIGIZT erfunden | Design | nein |
| Fünf Referenz-Einzelseiten | je zwei Sätze Kartentext; Metallbau Rostock ohne alles | nein | nein |
| Blog | keine | nein | nein |
| Über uns | Abschnitt der Startseite, Branchenbuch-Text aus Drive (rund 200 Wörter), alte Seite als Material | nein | nein |
| Impressum, Datenschutz | auf der alten Site; Datenschutz muss aktualisiert werden | nein | nein |
| Drei Kampagnenseiten | vollständig | ja | Entwürfe |

Zusammengezählt: Für 6 von 19 Link-Zielen gibt es brauchbare Copy, 4
davon nur als Prototyp-Fassung, die beim Bau noch auf die vier Bereiche
(Foto, Video & Text) gezogen werden muss.

#### 2.2 Platzhalter auf der Startseite

| Platzhalter | Anzahl | Wer liefert |
|---|---|---|
| Leistungsumfang des Digital-Checks | 4 | Nils |
| Kundenstimme, Name und Funktion | 2 + 2 | Nils |
| Link zur Datenschutzerklärung | 2 | entsteht mit der Seite |
| Adresse | 1 | Nils |

#### 2.3 Befunde

1. **Der Digital-Check ist nicht definiert.** Umfang, Dauer und Ergebnis
   sind seit dem Briefing offen und stehen viermal als Platzhalter auf der
   Startseite. Er ist der Haupt-CTA jeder Seite und das Ziel der Kampagne.
   Das ist der wichtigste offene Inhalt.
2. **Leistungen sind die größte Lücke.** Sie sind die natürlichen
   SEO-Träger für allgemeine Suchbegriffe und das Ziel der alten
   Service-URLs. Material: Drive-Konzept, Kacheltexte, alte Seiten.
3. **Die Positionierung hat sich bewegt.** Das Drive-Konzept spricht von
   drei Säulen und der H1 „Digital-Agentur anders gedacht!“. Gebaut ist
   „Ihre Digitalagentur in Hamburg und Rostock“ mit vier Bereichen. Das
   Drive-Dokument ist damit überholt und sollte als Quelle nicht mehr
   gelten.
4. **Referenzen sind dünn.** Fünf Kunden, je zwei Sätze. Für
   Einzelseiten braucht es je Ausgangslage, Lösung, Ergebnis und, wo
   möglich, eine Kennzahl (wie die zwei MFA in vier Wochen). Eine
   Kanzlei-Referenz fehlt, obwohl Kanzleien eine Hauptzielgruppe sind. Die
   Rechte für Foto- und Videoreferenzen sind ungeklärt.
5. **Keyword-Recherche steht aus.** Laut Briefing sollen die H1 der
   Branchen- und Leistungsseiten die konkreten Suchbegriffe tragen. Das
   sollte vor dem Schreiben der fehlenden Seiten passieren, nicht danach.
6. **Rechtstexte.** Die Datenschutzerklärung muss die gespeicherten
   Formulareinträge, HubSpot, lokal eingebundene Schriften und selbst
   gehostete Videos abdecken. Das ist Aufgabe eines Generators oder einer
   Fachperson, nicht des Seitenbaus.

### 3. Design

#### 3.1 Stand

- Design System vollständig in Bricks: Tokens, Dunkelmodus über den Color
  Manager, Schriften lokal, Klassen, Components, Icons.
- Seitentypen gebaut: Startseite, Kampagnenseite, Branchenseite
  (Heilberufe), Popup.
- Dokumentiert: `handoff/BAUKASTEN.md` (auf dem Seitenbranch),
  `handoff/BRICKS-FARBSYSTEM-DARKMODE.md`, `handoff/BRICKS-SVG-ICONS.md`,
  `handoff/MERKREGELN.md`.

#### 3.2 Offen und Befunde

1. **Abnahme der 14 Components fehlt.** Die Ergebnistabelle in
   `handoff/ABNAHME-COMPONENTS.md` ist leer. Jede weitere Seite baut auf
   diesen Components auf; Mängel sind jetzt billiger zu beheben als nach
   zehn weiteren Seiten.
2. **Seitentypen ohne Entwurf:** Leistungsseite, Branchenübersicht,
   Referenz-Einzelseite, Über uns, Kontakt, 404, Rechtstexte. Für die
   Referenzübersicht gibt es einen Entwurf im Design System. Nach unserer
   Regel entstehen sie zuerst im Prototyp.
3. **Bildwelt hat eine Grenze.** Die Higgsfield-Motive tragen Stimmung und
   Zielgruppen. Für Über uns und Referenzen wären generierte Menschen
   irreführend. Dort braucht es echte Fotos von dir und echte
   Projektbilder oder Logos, dazu Dunkel-Logos der Referenzen.
4. **Sichtbare Platzhalter.** Die Kundenstimmen auf der Startseite zeigen
   „[Kundenstimme]“. Bis echte Zitate da sind, sollte der Abschnitt
   ausgeblendet werden. Die zwei echten Bewertungen könnten mit Erlaubnis
   als Zitate dienen.
5. **Begriffe vereinheitlichen.** „Ärzte“, „Arztpraxen“, „Für Praxen“ und
   „Praxen“ stehen nebeneinander. Mit der Entscheidung zur Struktur
   sollte ein Begriff je Zielgruppe gelten, in Menü, Footer, Tabs und
   Überschriften.

### 4. Empfohlene Reihenfolge

1. **Branches zusammenführen** (Claude, kurz): ein Stand für alle
   Sitzungen und den Chat.
2. **Struktur entscheiden** (Nils): Branchen, Referenzen-Menü, Blog,
   Kontakt, URLs. Danach Header, Footer, Startseiten-Links und die
   Kampagnen-URLs anpassen.
3. **Technische Basis** (Claude, Nils für Zugangsdaten): Sprache, Rank
   Math, SMTP, Unternehmensdaten, `color-scheme`, ein Formular-Template.
4. **Abnahme der Components** (Nils), parallel zu Schritt 3.
5. **Referenzen als Post-Typ** mit Template, Übersicht und Loop auf der
   Startseite (Claude), Inhalte je Referenz (Nils).
6. **Seiten nach Geschäftswert:** Arztpraxen (Ziel der Kampagne),
   Kanzleien, Mittelstand, Leistungen, Über uns, Kontakt, Rechtstexte,
   404. Jede zuerst im Prototyp mit Higgsfield-Bildern, dann in Bricks.
7. **Inhalte parallel** (Nils, Chat): Digital-Check-Umfang, Adresse,
   Keyword-Recherche, Referenzdetails, Fotos, Rechtstexte.
8. **Launch:** Redirects, Sitemap, noindex aus, Lighthouse, Formulartests,
   Migration. Danach startet die Kampagne.

### 5. Offene Entscheidungen

Diese Fragen stelle ich einzeln, in dieser Reihenfolge:

1. Welche Branchenseiten zum Launch, und unter welchen Adressen?
   **Entschieden 09.10.2026:** wie in 1.3 empfohlen, umgesetzt am selben
   Tag (Header, Footer, Startseite, Seitenstruktur). Die Branches sind
   ebenfalls zusammengeführt (Befund 1).
2. Referenzen im Menü als Dropdown oder als einfacher Link?
   **Entschieden 09.10.2026:** einfacher Link, umgesetzt. Bei Bedarf
   später eine Referenzen-Liste im Footer.
3. Blog zum Launch im Menü oder später?
   **Entschieden 09.10.2026:** Blog bleibt im Menü. Vor dem Launch braucht
   es das Archiv-Template und erste Beiträge. Neu dazu: Partnerseiten für
   Placetel, Doctolib, IONOS und Netleaders unter `/partner/`, gebaut.
4. Eigene Kontaktseite?
   **Entschieden 09.10.2026:** ja, gebaut (Prototyp und Bricks-Entwurf 235).
5. Unternehmensdaten über Meta-Box-Einstellungsseite oder das eigene Plugin?
   **Entschieden 09.10.2026:** Meta Box Settings Page ist installiert.
   Feldgruppe 243 angelegt, Einstellungsseite durch Nils (Anleitung).
6. Leistungen zum Launch als vier Unterseiten oder zunächst eine Seite?
   **Entschieden 09.10.2026:** vier Unterseiten, gebaut (Entwürfe 244 bis 248).


---

# Projektstand

Quelle: `handoff/STATUS.md`

## Bricks-Handoff: Stand

Skill: `.claude/skills/bricks-handoff/` (Ablauf in dessen SKILL.md). Dazu die 45 offiziellen Bricks-Skills (codeerhq/bricks-skills, Release v0.1.0) in `.claude/skills/bricks-*`, Stand in `.claude/skills/BRICKS-SKILLS.lock`.

| Phase | Stand | Ergebnis |
|---|---|---|
| 0 Klären | teilweise | Config angelegt (`handoff.config.json`, Präfix `da`, Framework **Bricks Native**, Dunkel-Selektor `:root[data-brx-theme="dark"]`). Staging `https://relaunch.digital-avenue.de` (Bricks 2.4, seit 17.09.2026 final, mit MCP Adapter), MCP-Server in `.mcp.json` (HTTP, Header aus `BRICKS_MCP_AUTH` lokal, Proxy-Anmeldung in der Cloud). Verbindung aus der Cloud-Sitzung bestätigt (11.09.2026): 193 Abilities, davon 167 Bricks und 26 Meta Box. |
| 1 Tokens exportieren | erledigt, am Staging importiert (Theme Style, 52 Farben, 48 Variablen über den Style Manager, 11.09.2026) | `export/`: 52 Farb-Tokens mit Hell- und Dunkel-Wert (davon 16 Schatten- und Glasfarben), 48 Variablen in 8 Kategorien, keine unzugeordneten. Dunkelmodus im Prototyp umgesetzt und am Staging bestätigt (Toggle-Mode-Element, 11.09.2026): Hintergrund, Button und Icons wechseln über den Color Manager. |
| 2 Schriften & Icons | erledigt (11.09.2026) | Manrope und Jost als Custom Fonts mit je 8 Schnitten im Font Manager (Jost lokal statt Google). Icon-Set „Digital Avenue“ mit 15 Icons im Icon Manager, Quelle `import/06-icons/` (SVG → Bricks Optimizer). |
| 3 Komponenten als Global Classes und Components | erledigt (11.09.2026): 50 Klassen am Staging in 8 Kategorien, 14 Components per MCP (Karten, Kacheln, Listenzeilen, Abschnitte Feature-Block, Concierge, Digital-Check-Block, Hero Landingpage), FAQ als Accordion-Muster, alle Fotos in der Mediathek; Testseiten 50, 60, 63, 101. Offen: Abnahme durch Nils, Popup Digital-Check (Formular), Partnerzeile, Zielgruppen-Tabs, Mosaik beim Seitenimport | Stand, IDs und Lernpunkte in `handoff/import/README.md`, Schritt 7. |
| 4 Templates & Seiten | Header und Footer fertig (inkl. mobiles Menü, 13.09.2026), Startseite komplett (Hero, Mosaik, Partner, Für wen, Leistungen, So arbeiten wir, Referenzen, Über uns, Digital-Check, 13.09.2026); Popup Digital-Check mit Bricks-Formular (Template 130, E-Mail plus Submissions-Tabelle, kein HubSpot, 13.09.2026); Kampagnenseiten K1, K2, K9 und Branchenseite Heilberufe als Entwürfe (17.09.2026); offen: SMTP am Server, Datenschutz-Link, echte Texte für Kundenstimmen und Referenzen, alle weiteren Seiten (Statusbericht 09.10.2026) | Aufbau in `handoff/import/README.md`, Schritte 8 bis 14. |
| 5 Abgleich, Redirects, Launch | offen | Checkliste in `references/launch-checklist.md`. |

Bricks-Version: 2.4 final am Staging (Update von RC2 am 17.09.2026). Das Plugin `da-content-model` war am Staging kurz aktiv und ist wieder entfernt (11.09.2026); Post-Typen kommen erst nach den Templates zurück. Style Guide mit Inventar und Arbeitsliste: `prototype/styleguide.html`.

Betriebskonzept (MCP, Meta Box, CPTs): `handoff/BETRIEBSKONZEPT-MCP.md`. Datenmodell (CPTs, Felder) am 11.09.2026 zurückgestellt: erst Grundparameter, Theme Style, Icons und Components, dann Felder aus den fertigen Templates ableiten.

Merkregeln zum Nachschlagen: `handoff/MERKREGELN.md`. Importdaten für den Aufbau am Staging: `handoff/import/` (README mit Aufträgen je Schritt, Build über `build-import.mjs`).

### Nächste Schritte

0. Schritte 0 bis 7 aus `handoff/import/README.md` sind am Staging erledigt (Components inklusive Abschnitte). Als Nächstes Header und Footer als Templates, dann die Seiten aus den Components zusammensetzen (Startseite zuerst). Im Chat gezeigte Anwendungspasswörter widerrufen.
1. Dunkel-Logos (Digital Avenue vorhanden, Referenzlogos fehlen) beschaffen.
2. Palette und Variablen in eine Staging-Installation importieren, Ergebnis mit `export/tokens-report.md` vergleichen.
3. Erste Global Classes anlegen (Buttons, Eyebrow, Karten) und gegen den Prototyp prüfen.

Nachtrag 11.09.2026 (abends): Startseite um die Section „Für wen“ mit Bricks-Tabs (Klasse `tabs`), Abschnittskopf (`section-head center`) und Component „Zielgruppen-Panel“ (`28c728`) ergänzt. Glas-Deckkraft auf 0.84/0.86 mit stärkerem Blur eingependelt.

Nachtrag 13.09.2026: Header auf „Sticky on scroll“ umgestellt (Hero-Abstand oben wieder da), Rasterklassen `mosaic`, `audience`, `lp-hero`, `flip` so umgebaut, dass die Media-Queries greifen (Grundwerte in Controls bzw. Selektoren mit Element-Klasse). Nächster Schritt: mobiles Menü in der Navigation.

Nachtrag 13.09.2026 (2): Mosaik auf `width: 100%`, `minmax`-Spalten und `grid-template-areas` umgebaut, Containerbreite im Theme Style von 1100 auf 1240px korrigiert (`container.width`). Offen: Header-Menü läuft bei 400px über (mobiles Menü).

Nachtrag 13.09.2026 (3): Mobiles Menü läuft. Ursache war der fehlende Wrapper-Block `ul.brx-nav-nested-items` in der Nav (plus `backdrop-filter` auf der Header-Section als Containing Block des Drawers). Header 52 umgebaut, Drawer mit CTA, Merkregeln ergänzt. Offen: Burger als X im offenen Zustand, Rest der Startseite.

Nachtrag 13.09.2026 (4): Header-Feinschliff: Burger als X, Drawer-Untermenüs als Liste, Seitenabstand, mobil Logo links und Icons rechts. Nächster Schritt: Rest der Startseite aus den Components.

Nachtrag 13.09.2026 (5): Startseite fertig gebaut (Leistungen, So arbeiten wir, Referenzen, Über uns, Digital-Check), neue Klasse `about`. Nächster Schritt: Popup Digital-Check mit Formular, dann Landingpages.

Nachtrag 13.09.2026 (6): Popup Digital-Check gebaut, alle vier CTA-Buttons öffnen es. E-Mail-Versand am Staging scheitert ohne SMTP-Plugin; Einrichtung offen.

Nachtrag 13.09.2026 (7): `handoff/BAUKASTEN.md` angelegt: Anleitung für manuell gebaute Seiten mit allen 65 Global Classes, 14 Components, Templates, Rezepten und Fehlerbildern.

Nachtrag 16.09.2026: Positionierung erweitert (Foto und Video vom Konzept bis zum Publishing, alle Inhalte auf Wunsch, alles aus einer Hand). Startseite, Footer, Prototyp-Quellen und Briefing angepasst; vierter Leistungsbereich „Foto, Video & Text“ als Kachel. Landingpages übernehmen das beim Bau.

Nachtrag 17.09.2026: Kampagnenpaket (`handoff/kampagne/`, ohne Kontaktdaten) übernommen. Landingpages K1/K2/K9 unter `/arztpraxen/` als Entwürfe gebaut (Posts 169, 171, 173), gemeinsame Module als Section-Template 167, Kontaktformular als Template 165. Plugin „Digital Avenue Parameter“ für Telefon, Servicezeiten, Serviceversprechen per Shortcode/Echo-Tag geschrieben (`wordpress/plugins/da-parameter.zip`), Installation durch Nils.

Nachtrag 17.09.2026: Footer-Spalte „Für wen“ (Prototyp) bzw. „Branchen“ (Bricks, Template 54) um Heilberufe und Gastgewerbe ergänzt. Beide verweisen auf `/branchen/heilberufe/` und `/branchen/gastgewerbe/`; im Prototyp vorläufig auf die Praxen- bzw. Mittelstand-Seite. Für beide Zielgruppen gibt es noch keine Seite und keinen Text.

Nachtrag 17.09.2026: Branchenseite Heilberufe nach Konzept aus dem Chat (`handoff/branchen/heilberufe.md`) im Prototyp (`#heilberufe`) und in Bricks (Post 196 unter Elternseite „Branchen“ 193, beide Entwurf) gebaut, fünf neue Higgsfield-Motive m40–m44, eigenes Formular-Template 194. Offene Entscheidungen im Konzept, Abschnitt 4.

#### Nachtrag 20.09.2026: Farbsystem-Dokument

- `handoff/BRICKS-FARBSYSTEM-DARKMODE.md`: portable Beschreibung des
  Bricks-Farbsystems und des Hell/Dunkelmodus (Attribut `data-brx-theme`,
  Skript `bricks-dl-mode-js-after` mit `brx_mode`, Palette wird als `:root`-
  und Dunkelblock gedruckt, Datenmodell einer Farbe, Regeln, Umschalter,
  Übertragung auf neue Projekte). Für andere Claude-Code-Umgebungen gedacht.
- Dabei aufgefallen: `color-scheme: light/dark` steht am Staging noch nicht
  im Custom CSS (Formularfelder, Scrollbalken). Standardmodus am Staging ist
  `light`, im Prototyp galt die Systemeinstellung; Entscheidung offen.
- `handoff/BRICKS-SVG-ICONS.md`: portable Anleitung für SVG-Icons in Bricks
  (Normalisierung, eigenes Set per Icon Manager oder MCP, Icon-Element,
  Klassen `icon`/`icon-20`, Farbe über Kontext, Components, Stolperfallen).
  Icon-IDs des Staging-Sets per `list-custom-icons` aufgenommen.

#### Nachtrag 09.10.2026: Statusbericht

- `handoff/STATUSBERICHT-2026-10-09.md`: Stand in Technik, Inhalt und
  Design, Seiteninventar gegen Navigation, Empfehlung zu Seitenstruktur
  und Meta-Box-Post-Typen, Reihenfolge bis zum Launch.
- Branches zusammengeführt (09.10.2026): `optimistic-ride`, `youthful-ritchie`
  und `affectionate-wright` sind im Arbeitsbranch; es gibt wieder einen Stand.
- Entscheidung 1 umgesetzt (09.10.2026): fünf Branchenseiten unter
  `/branchen/`: Arztpraxen (mit Kampagnenseiten darunter), Heilberufe,
  Kanzleien & Freie Berufe, Mittelstand; Gastgewerbe nach dem Launch.
  Header, Footer, Startseite, Component-Standard, Kampagnen-Doku und
  Prototyp-Footer angepasst. Details in `handoff/import/README.md`, Schritt 8.
- Neues Hilfsskript `handoff/tools/mcpcall.py`: Abilities direkt aufrufen,
  Seitenbäume als Datei bearbeiten.
- Entscheidung 2 umgesetzt (09.10.2026): Referenzen im Header als einfacher
  Link auf `/referenzen/`, kein Dropdown. Option: Referenzen-Liste im Footer.
- Entscheidung 3 (09.10.2026): Blog bleibt im Menü. Folge: Archiv-Template
  und erste Beiträge vor dem Launch nötig. Seite „Blog“ 231 als Entwurf und
  Beitragsseite angelegt, „Hello world!“ im Papierkorb.
- Partnerseiten (09.10.2026, Auftrag Nils): Übersicht und je eine Seite für
  Placetel, Doctolib, IONOS, Netleaders im Prototyp und in Bricks (Entwürfe
  214 bis 218), acht neue Motive m45 bis m52. Footer-Link „Partner“,
  Partnerzeile der Startseite verlinkt. Offen: Partnerstatus prüfen,
  Netleaders-Leistungsumfang und Abgrenzung zu IONOS (sichtbare Platzhalter).
- Korrigiert: Reihenfolge von Kacheln (Startseite), Footer-Branchen und
  Header, verursacht durch Speichern ohne Array-Sortierung (Merkregel).
- Entscheidung 4 umgesetzt (09.10.2026): Kontaktseite im Prototyp und in
  Bricks (Entwurf 235), allgemeines Formular-Template 233, Footer mit
  Hamburger Adresse aus dem Impressum und Link „Kontakt“. Offen: Adresse
  Rostock. Uneinheitlich: Digital-Check-Block sagt „Rückmeldung innerhalb
  eines Werktags“, Heilberufe und Kontaktseite „innerhalb einer Stunde
  während der Servicezeiten“; eine Formulierung festlegen.
- Bilder vom 17.09. und 09.10. liegen am Staging als PNG in voller Größe;
  vor dem Launch durch die optimierten JPGs aus `prototype/img/` ersetzen.
- 09.10.2026 (Nils): Header ohne Digital-Check-Button. Rückmeldezeiten nach
  Zielgruppe umgestellt (Merkregel). Meta Box Settings Page ist installiert;
  Feldgruppe „Unternehmensdaten“ 243 angelegt, Einstellungsseite legt Nils
  an, danach stellt Claude Footer, Kontaktseite und übrige Stellen auf die
  Felder um. Anleitung: `handoff/ANLEITUNG-2026-10-09.md`.
- Entscheidung 6 umgesetzt (09.10.2026): Leistungsübersicht und vier
  Leistungsseiten im Prototyp und in Bricks (Entwürfe 244 bis 248), Motive
  m53 bis m60, Startseite und Footer verlinkt. Weiterleitungsliste für den
  Launch: `handoff/REDIRECTS.md` (ersetzt den Drive-Plan).


---

# Merkregeln und Entscheidungen

Quelle: `handoff/MERKREGELN.md`

## Merkregeln für den Aufbau in Bricks

Kurze Regeln, die sich beim Aufbau am Staging bewährt haben. Zum
Nachschlagen; jede Regel ein Absatz, mit Datum. Neue Regeln unten anfügen.

### Struktur

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

### Theme Style

**Section-Abstand steht in der Gruppe Section, die Breite in der Gruppe
Container.** (11.09.2026, ergänzt 13.09.2026) Die Felder „Root container
padding“ und „Root container width“ unter General tragen ein rotes Symbol,
sind Altlasten und wirken nicht auf Sections: `general.containerMaxWidth`
gibt `.brxe-container.root` aus, und Container in Sections tragen kein
`root`. Die Breite gehört als `container.width` (Feld „Width“) in die
Gruppe Container; das ergibt `.brxe-container { width: 1240px }` und
überschreibt Bricks' Vorgabe von 1100px. `widthMax` allein reicht nicht,
weil es die Vorgabe-Breite nicht anhebt. Am Staging am 13.09.2026
umgestellt, der Build schreibt jetzt `width`.

**HTML-Schriftgröße im Theme Style auf 100 % setzen.** (11.09.2026)
Ohne den Wert rechnet Bricks mit 62,5 % (1rem = 10px), und alles in rem
schrumpft. Unsere Tokens stehen in Pixel und sind nicht betroffen, Plugins
und WordPress-Blöcke schon.

**Skalen-Generator für Spacing und Typography nicht verwenden.**
(11.09.2026) Er erzeugt Verhältnisreihen in rem. Unser Design System sind
Vielfache von 4px als feste `clamp()`-Werte. Die Kategorien Abstände und
Schriftgrößen bleiben ohne Skalen-Konfiguration; in den Controls sind sie
normal wählbar.

### Farben und Variablen

**Alles, was im Dunkelmodus anders aussieht, ist eine Farbe mit Hell- und
Dunkelwert im Color Manager.** (11.09.2026) Variablen haben keinen
Dunkelwert. Schatten und Glasflächen referenzieren deshalb nur Farb-Tokens
(`--da-ink-*`, `--da-teal-glow*`, `--da-glass*`); dann schaltet Bricks
nativ um, ohne eigene CSS-Regeln. Am Staging mit dem Element „Toggle – Mode“ bestätigt.

**Importdateien nur im gespeicherten Format von Bricks, ohne
Zusatzfelder.** (11.09.2026) Der Style Manager lehnt Dateien mit fremden
Schlüsseln ab („Unable to open ZIP file“). Erklärungen gehören in die
Markdown-Datei daneben. Vorlage ist immer ein Export aus Bricks.

### Klassen

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

### Components

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
(11.09.2026, ergänzt 13.09.2026) Accordion: `accordion-title-wrapper` und
`accordion-content-wrapper`; Dropdown: `brx-dropdown-content`; Tabs:
`tab-menu`, `tab-title`, `tab-content`, `tab-pane`; **Nav (Nestable):
ein Block mit `customTag: ul` und `brx-nav-nested-items`, in dem alle
Menüpunkte liegen, der Toggle (Burger) bleibt direktes Kind der Nav.**
Ohne diese Klassen läuft das Bricks-Skript nicht. Beim Header fehlte der
Nav-Wrapper: Bricks hängt Ausblenden unter dem Breakpoint, Drawer und
`brx-open` an genau diese `ul`, deshalb blieb das Menü sichtbar und hinter
dem Burger war nichts.

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
(11.09.2026, präzisiert 13.09. und 17.09.2026) Bricks erzeugt aus den Controls eine Regel wie
`.tiles.brxe-div { grid-template-columns: … }` und gibt Media-Queries
davor aus. `@media { .tiles { … } }` verliert dann doppelt (Spezifität
und Reihenfolge). Deshalb in Media-Queries immer
`.tiles.brxe-div, .tiles.brxe-block, .tiles.brxe-container` schreiben.
Gleiches gilt für Regeln, die einen Control-Wert überschreiben sollen
(`.tile-photo { padding: 0 }` gegen `.tile.brxe-div { padding }`).

**Grundwerte, die eine Media-Query überschreibt, gehören in die Controls
der Klasse, nicht ins Custom-CSS.** (13.09.2026) Bricks gibt bei einer
Global Class zuerst die CSS aus den Controls aus und danach `_cssCustom`;
der MCP-Adapter sortiert `@media`-Blöcke innerhalb von `_cssCustom` beim
Speichern nach oben (eine Umsortierung kommt unverändert zurück). Steht
die Grundregel im Custom-CSS, landet sie hinter der Media-Query und
gewinnt bei gleicher Spezifität. Deshalb `display`, `grid-template-columns`,
`gap`, `grid-auto-rows`, `align-items` als Controls
(`_display`, `_gridTemplateColumns`, `_gridGap`, `_gridAutoRows`,
`_alignItemsGrid`) setzen und im Custom-CSS nur die Media-Queries lassen
(so funktionieren `tiles`, `steps`, `mosaic`, `audience`). Zielt die
Media-Query auf ein Kind (`.lp-hero .lp-hero-grid`, `.feature.flip figure`),
hilft kein Control; dann bekommt der Media-Query-Selektor die Element-Klasse
zusätzlich (`.lp-hero.brxe-section .lp-hero-grid`), damit er über die
Spezifität gewinnt.

**Layout-Divs im Container brauchen `width: 100%`.** (13.09.2026) Bricks
setzt am Container `align-items: flex-start`; ein Div darin wird nicht
gestreckt, sondern so breit wie sein Inhalt. Ein Grid mit `1fr`-Spalten
wächst dann mit dem längsten Text und lässt rechts einen Rand (Mosaik am
Tablet). Deshalb bei Rasterklassen (`mosaic`, künftig `tiles`, `steps`,
`refs`, `quotes`) `_width: 100%` als Control setzen.

**Raster: Spalten als `minmax(0, …fr)`, Reihen als `minmax(…, auto)`,
Anordnung über `grid-template-areas`.** (13.09.2026) `1fr` heißt
`minmax(auto, 1fr)`; ein langer Text kann die Spalte aufblähen. `minmax(0,
4fr)` hält das Verhältnis, Kacheln bekommen `min-width: 0`. Feste
`grid-auto-rows: 500px` schneiden längere Texte ab, `minmax(500px, auto)`
lässt die Reihe wachsen. Die Anordnung je Breite steht in
`grid-template-areas`, die Kacheln tragen nur `grid-area: praxis` usw.;
umstellen heißt dann eine Zeile ändern. Weil es für `grid-template-areas`
kein Control gibt, stehen alle drei Zustände in sich ausschließenden
Media-Queries (`min-width: 1081px`, `641px bis 1080px`, `max-width:
640px`); so spielt die Reihenfolge im Custom-CSS keine Rolle.

### Templates

**Header-Template mit „Sticky header“ und „Sticky on scroll“.** (13.09.2026)
Nur `headerSticky` macht den Header `position: fixed`; er liegt dann über
dem Seitenanfang, und der obere Section-Abstand des Heros verschwindet
hinter den 72px Nav-Höhe. Mit `headerStickyOnScroll` wird er `position:
sticky`, bleibt wie im Prototyp im Fluss und der Hero beginnt darunter.

**Kein `backdrop-filter` (und kein `transform`, `filter`) auf Header-Section
oder -Container.** (13.09.2026) Diese Eigenschaften machen das Element zum
Containing Block für `position: fixed`. Der mobile Drawer der Nav ist
`fixed` und liegt zwingend in der Nav; mit dem Blur auf der Section war
er nur 48px hoch und lag hinter dem Hero. Der Blur sitzt jetzt auf
`.site-nav.brxe-section::before` (absolut, `inset: 0`, `z-index: -1`),
die Section bleibt filterfrei.

**Nav-Controls gibt Bricks mit ID-Selektor aus, und zwar nach der
Element-CSS der Kinder.** (13.09.2026) `itemPadding`, `itemTypography`
usw. werden zu `#brxe-navmn1 :where(.brx-nav-nested-items > li > a)`
(Spezifität eines IDs). Eine Klasse verliert immer, und auch Controls am
Kind (`#brxe-navcta`) verlieren, weil Bricks sie vor der Nav-Regel
ausgibt. Wer einen einzelnen Menüpunkt anders gestalten will (CTA-Button
im Drawer), braucht `!important` in der Klasse; das ist hier bewusst so.

**Toggle-Element: der offene Zustand kommt per CSS, nicht per zweitem
Icon.** (13.09.2026) Das Toggle hat nur ein Icon-Control. Beim Öffnen
setzt Bricks `aria-expanded="true"` und die Klasse `is-active` auf den
Button. Darauf reagiert die Klasse `nav-burger`: SVG ausblenden, X aus
zwei Pseudo-Elementen in `currentColor`.

**Was mobil anders aussehen soll, darf nicht in Nav-Controls stehen.**
(13.09.2026) Dropdown-Controls der Nav (`dropdownBackgroundColor`,
`dropdownBorder`, …) gelten in beiden Zuständen mit ID-Spezifität; die
Drawer-Variante in der Klasse verliert dann. Deshalb Dropdown-Optik nur in
der Klasse `nav-menu`, Controls der Nav nur für das, was Desktop und
Drawer teilen.

**Global Classes immer per ID in `_cssGlobalClasses` referenzieren.**
(13.09.2026) `_cssClasses: "name"` schreibt nur den Klassennamen ins HTML;
Bricks gibt das CSS einer Global Class nur aus, wenn ein Element sie per
ID referenziert. Für Kind-Elemente, die nur ein Selektor der Klasse
anspricht (`.check-dialog .dialog-head`), reicht `_cssClasses`.

**Buttons, die ein Popup öffnen, sind `tag: button` ohne Link.**
(13.09.2026) Mit `href` (auch `#anker`) läuft die Klick-Interaktion
„show popup“ nicht. Interaktionen stehen am Element; auf einer Global
Class nimmt der MCP-Adapter `_interactions` nicht an.

**Instanz-Properties und Slots ändern heißt: Instanz neu einfügen.**
(16.09.2026) `update-element` nimmt nur `settings`; `properties` einer
Component-Instanz lehnt es ab, und ein Kind, das per `add-element` an eine
Instanz gehängt wird, steht nicht im Slot und rendert nicht. Deshalb
Instanz mit `remove-element` entfernen und mit `add-element` (gleiche ID,
`position`, `properties`, `slotChildren` verschachtelt) neu einfügen.

### Icons

**SVGs vor dem Upload durch den SVG → Bricks Optimizer.** (11.09.2026)
Kein `width`/`height`, `viewBox` vorhanden, Farben `currentColor`, jede
Form mit Klasse `bx1`, `bx2` … Tool unter `handoff/tools/`, im Build
eingebaut.

### Arbeitsweise

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

**Neue Bricks-Site mit dem Skill `bricks-connect` anbinden.** (20.09.2026)
`scripts/bricks-connect.sh check` prüft Rewrite und Adapter ohne Anmeldung,
`config --write .mcp.json` legt den HTTP-Eintrag mit eigener Variable
`BRICKS_MCP_AUTH_<HOST>` an, `keychain` und `test` laufen im Terminal des
Nutzers (Schlüsselbund, Handshake, Abilities zählen). Die Client-Anleitung
aus Bricks › AI liefert nur URL und Anmeldename; ihren npx-Block nicht
übernehmen, er scheitert an Node 18 und am npx-Cache, sobald zwei Sites
gleichzeitig starten.

**Struktur am Staging bauen, Inhalte in der Produktion pflegen.**
(11.09.2026) Struktur-Änderungen wandern als Transfer-Paket vom Staging in
die Produktion. In der Produktion nur lesende Abilities plus Anlegen und
Paket-Import freischalten, Lösch-Abilities nur im Wartungsfenster.

**Importdateien nicht von Hand ändern, Build laufen lassen.** (11.09.2026)
`node handoff/import/build-import.mjs` erzeugt alle Dateien aus Design
System und Prototyp. Ändert sich ein Token, ändert sich die Token-Datei,
dann der Build.

### Hosting

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

**Menü zeigt nur Seiten, die es zum Launch gibt.** (09.10.2026) Header,
Footer und Startseiten-Links verweisen nur auf Seiten mit echtem Inhalt.
Neue Branchen oder Bereiche kommen ins Menü, wenn ihre Seite steht. Ein
Begriff je Zielgruppe überall gleich: Arztpraxen, Heilberufe, Kanzleien &
Freie Berufe, Mittelstand.

**Große Seitenbäume per Skript, nicht per Chat.** (09.10.2026) Für
Änderungen an Component-Eigenschaften (die `update-element` nicht kann)
den Baum mit `handoff/tools/mcpcall.py` als Datei holen, per Python
ändern und mit `set-page-elements` samt `expectedDocumentDigest`
zurückschreiben. Jede Speicherung legt eine Revision an. Seiten umhängen
oder anlegen geht über die WordPress-REST-Schnittstelle
(`/wp-json/wp/v2/pages`), die Anmeldung setzt in der Cloud der Proxy ein.

**Sitzungen arbeiten auf einem Branch.** (09.10.2026) Eine parallele
Sitzung auf einem eigenen Branch hat eine Woche Arbeit am Hauptbranch
vorbei gebaut. Neue Sitzungen zuerst `git fetch` und die Branches prüfen,
fremde Branches sofort zusammenführen.

**Reihenfolge kommt aus dem Array, nicht aus `children`.** (09.10.2026)
`set-page-elements` leitet beim Speichern die `children` jedes Elements aus
der Reihenfolge im flachen Array ab. Wer nur `children` umsortiert oder ein
Element hinten anhängt, verschiebt Geschwister (so am 09.10. Kacheln der
Startseite, Heilberufe im Footer, Referenzen im Header). Vor jedem
Speichern das Array per Tiefensuche entlang der gewünschten `children`
sortieren und danach im Frontend die Reihenfolge prüfen.

**Rückmeldezeiten nach Zielgruppe.** (09.10.2026, Nils) Der Digital-Check
ist Vertrieb: Interessenten bekommen eine Rückmeldung „innerhalb eines
Werktags“. Kunden mit Betreuungsvertrag bekommen die vertraglich
vereinbarte Reaktionszeit. Keine pauschale Stundenzusage auf der Website.

**MCP-Adapter verlangt `MCP-Protocol-Version`.** (09.10.2026) Nach dem
`initialize` muss jede Anfrage den Header `MCP-Protocol-Version: 2025-06-18`
tragen, sonst antwortet der Server mit 400. `mcpcall.py` setzt ihn.


---

# Briefing

Quelle: `BRIEFING.md`

## Briefing: Redesign digital-avenue.de

Stand: 10. September 2026. Ergebnis der Vorab-Klärung (Fragen und Antworten von Nils Rudolph).

### Ausgangslage

- Live-Site: WordPress mit Bricks und Automatic.css (ACSS). Tokens der Live-Site:
  Primär `#305b75`, Sekundär `#38aecc`, Akzent `#d7c9aa`, Tertiär `#42253b`,
  Action `#4c5c68`, Schrift Hanken Grotesk (variabel, 400/500/700/800),
  Radius 1rem, Button-Radius 0.5em, Content-Breite 128rem.
- Neues Logo (Juni 2026): `/wp-content/uploads/2026/06/digital-avenue-logo-randlos.svg`
  (Wortmarke in `#305b75`, 441 x 76 px).
- Relaunch-Konzept und Texte (Juni 2026) in Google Drive:
  "Konzept und Website-Texte Relaunch - Digital Avenue UG" und
  "Digital Avenue – URL-Inventar & Redirect-Plan".
- Positionierung laut Konzept: "Die externe Digitalabteilung / Der Digital-Concierge".
  USP: Sichtbarkeit (Webdesign, PR, Marketing) plus Infrastruktur
  (Placetel-Telefonie, Hosting, Doctolib-/HubSpot-Anbindung) aus einer Hand,
  proaktiver Service (Beispiel: Urlaubs-Service).
- Ergänzung 16.09.2026 (Nils): Digital Avenue bietet **Foto und Video vom
  Konzept über die Produktion bis zum Publishing** an und **erstellt auf Wunsch
  alle Inhalte** (Texte, Fotos, Videos). Kernaussage überall: **alles aus einer
  Hand**, keine dritte Agentur nötig. Auf der Startseite als vierter
  Leistungsbereich „Foto, Video & Text“ umgesetzt (Kachel, Hero-Lead,
  Zielgruppen-Panels, Digital-Check-Liste, Über uns, Footer).
- Das Design System und die Entwürfe aus Claude Design liegen seit dem
  10.09.2026 unverändert unter `design-system/` im Repo (ZIP-Export).

### Entscheidungen

| Thema | Entscheidung |
|---|---|
| Zielgruppe | Inhaber-Persönlichkeiten statt Branche: der Entscheider, der sich nicht um Technik kümmern will. Bildwelt zeigt entlastete Menschen. |
| Umfang | Startseite plus drei Zielgruppen-Landingpages (Arztpraxen, Kanzleien, Mittelstand/KMU). |
| Marke | Logo und Primärblau `#305b75` bleiben. Akzentfarben, Schrift und Flächenaufteilung dürfen neu gedacht werden. Anspruch: hochwertig, dezent, elegant. |
| Bildwelt | Higgsfield: fotorealistische Menschen, ruhig und entlastet, natürliches Licht, gedämpfte Farben, Editorial-Look. Die Zielgruppe soll sich direkt wiederfinden. |
| Format | Klickbarer Prototyp: Navigation, Zielgruppen-Umschalter und Formular funktionieren. |
| Geräte | Desktop (1440 px) und Mobil (390 px), beide klickbar. |
| Texte | Alles neu texten. Das Konzept dient nur als Richtung; Ziel sind Entlastung und Persönlichkeit. |
| Primärer CTA | "Digital-Check anfragen": niedrigschwelliger Einstieg, z. B. kostenloser Check von Website, Telefonie und Google-Unternehmensprofil. Genauer Umfang des Checks ist noch von Nils zu bestätigen. |
| Vertrauensbelege | Partner-Logos (Doctolib, Placetel, Netleaders), Referenzprojekte mit Namen (DIGIZT, Lungenpraxis am Tibarg, Urlaub bei Jana), Kundenstimmen als Platzhalter `[KUNDENSTIMME]`. Kein Foto und keine Vita von Nils. |
| Higgsfield-Budget | Bis 300 Credits (Stand: 610 Credits, Pro-Plan). Etwa 12 finale Motive mit je zwei Varianten. |

### Offene Punkte

- Claude-Design-Projekt (Quelle des Exports):
  https://claude.ai/design/p/019ddea1-f8fe-7a97-bba0-f6d090a4b241
- Inhalt des "Digital-Check" mit Nils abstimmen (Umfang, Dauer, was der Kunde bekommt).
- Referenzen für Foto und Video (16.09.2026): Nils hat Porträts und einen
  Imagefilm aus Kundenprojekten. Nutzungsrechte für die Website müssen erst
  geklärt werden (Kunde und abgebildete Personen). Bis dahin bleiben die
  Referenzkarten bei Website-Projekten. Nach Freigabe: eine Referenzkarte
  je Projekt mit Foto-Serie bzw. Film; Film selbst gehostet (MP4 mit
  Vorschaubild), kein YouTube-Embed, damit keine fremden Cookies laden.
- Echte Kundenstimmen nachliefern.
- Hosting-Hintergrund (Nils, 10.09.2026): Digital Avenue hostet nicht selbst,
  sondern arbeitet mit Partnern (IONOS, Netleaders), weil diese Infrastruktur
  und Personal für Sicherheit und Performance haben. Partnerzeile: Doctolib,
  Placetel, Netleaders, IONOS.
- Placetel-Logo und Partnerstatus prüfen (fehlt auf der Live-Site, steht im Konzept).

### Technische Hinweise

- digital-avenue.de ist aus dem Claude-Code-Netz gesperrt, aber über die
  Higgsfield-Sandbox (`sandbox_exec` mit curl) erreichbar.
- GitHub-Repo war zu Beginn leer. Arbeits-Branch: `claude/digital-avenue-redesign-0wnw6r`.
- Redirect-Plan sieht neue URL-Struktur `/leistungen/...` vor; die Landingpages
  sind darin noch nicht enthalten.

### Layout-Inspiration (von Nils, 10.09.2026)

Referenz: Landingpage-Layout "HALSA" (Wellness-App, Vorschau gola.io/HALSA). Nur als
Struktur- und Stimmungsvorlage, keine Nachbildung.

Was übernommen wird:

- **Luftiger, warmer Grundton**: cremeweißer Hintergrund, große Weißräume, dünne
  Linien, keine harten Kanten. Passt zum Sand-Ton der bisherigen Akzentfarbe.
- **Schlanke Navigation**: Logo links, Menü als zentrierte Pill-Gruppe,
  rechts ein einziger Button ("Digital-Check anfragen").
- **Hero zentriert**: kleines Eyebrow-Label, zweizeilige leichte Headline,
  kurze Subline, Primärbutton dunkel plus Ghost-Button, darunter eine
  Vertrauenszeile.
- **Bildband unter dem Hero**: breite, warm belichtete Fotografie mit ruhigen
  Menschen, in die ein bis zwei schwebende Karten eingebettet sind. Bei
  Digital Avenue zeigen die Karten keine App-Statistiken, sondern konkrete
  Entlastung: etwa die Urlaubs-Service-Karte ("Website, Google-Profil und
  Telefonansage umgestellt") oder eine Digital-Check-Karte.
- **Partner-Logozeile** in Grau direkt unter dem Bildband (Doctolib, Placetel,
  Netleaders).
- **Kachelraster als Herzstück**: 4 x 2 Kacheln, abwechselnd Foto und
  Farbfläche. Farbflächen in Cremeweiß, Primärblau `#305b75` und einem tiefen
  Nachtblau. Jede Farbkachel: Überschrift, zwei Sätze, ein Textlink. Hier
  sitzen die drei Säulen und die drei Zielgruppen-Einstiege (Praxen,
  Kanzleien, Mittelstand) nebeneinander.
- **Zweispaltiger Leitbild-Block**: links Eyebrow und Headline, rechts
  Fließtext. Ersetzt die bisherige "Über uns"-Ansprache auf der Startseite.
- **Typografie**: geometrische Sans mit leichten Schnitten in den Headlines,
  enge Zeilenabstände, kleine Labels in Versalien mit Sperrung.

Was bewusst anders wird:

- Keine Avatare, Sterne oder "Trusted by 1 Million"-Zeile. Die
  Vertrauenszeile nennt stattdessen Referenzprojekte oder die Partner.
- Keine App-Screens. Die schwebenden Karten zeigen Service-Momente aus dem
  Alltag der Inhaber.
- Nachtblau-Kacheln sparsam einsetzen, damit es dezent bleibt.

### Design System (Stand des Exports vom 10.09.2026)

Quelle: `design-system/` (Claude-Design-Projekt "Digital Avenue Design System").
Maßgeblich sind `colors_and_type.css` und `digital-avenue.css`; die Preview-Karten
unter `preview/` zeigen Farben, Typo, Spacing, Buttons, Cards, Chips, Nav, Footer,
Logo und Icons. Die Entwürfe liegen in `pages/_homepage.html` und
`pages/_portfolio.html` (responsiv; die Dateien `homepage-*.html` und
`portfolio-*.html` sind nur Geräterahmen darum herum).

Tokens, die für den Prototyp gelten:

| Token | Wert |
|---|---|
| Teal (Primär) | `#305b75`, Hover `#264a60`, Dark `#1b3a4a`, Deeper `#132a37`, Subtle `#e7eff3`, Text `#234c5f` |
| Sand (Akzent) | `#d7c9aa`, Hover `#c4b393`, Subtle `#f6f2ea`, Text `#7a6845` |
| Plum (Akzent 2) | `#42253b`, Hover `#351b30`, Subtle `#f0e8ee`, Light `#8a5c7e` |
| Flächen | Body `#f9f8f6` (warmes Off-White), Alt `#f2efe9`, Card `#ffffff`, Border `#d9e3e8` |
| Text | `#19242b`, Muted `#5a6e77` |
| Nav/Footer | Hintergrund `#1b3a4a`, Text `#ede9e0`, Muted `#7796a6` |
| Dark Mode | über `data-theme="dark"` auf `<html>`; Body `#182a33`, Card `#1d3340` |
| Schrift | Manrope (Fließtext, selbst gehostet, 200 bis 800), Jost (Logo). Hanken Grotesk ist abgelöst. |
| Typo-Skala | fluid per `clamp()`: base 15 bis 16 px, lg 22 bis 30 px, xl 30 bis 44 px; Hero-H1 38 bis 76 px, Gewicht 800, Tracking -0.03em |
| Radien | 4 / 6 / 10 / 16 / 24 px, Pill 100 px |
| Spacing | fluid `--da-sp-1` bis `--da-sp-20` (3 bis 80 px), Content-Breite 1240 px |
| Buttons | Primär Teal, Sand, Plum, Ghost; 13 px × 26 px, Radius 10 px, Teal-Schatten |
| Motion | 0.2 s ease, Hover-Lift 1 bis 2 px |

Aufbau des Homepage-Entwurfs: helle Glas-Navigation (sticky), Hero zweispaltig mit
Headline links und Kachel-Collage rechts, Kennzahlen, Trust-Bar mit Partnernamen,
sechs Leistungs-Cards, Cases-Teaser, Team, Testimonials, Magazin, Kontakt-CTA,
dunkler vierspaltiger Footer. Hamburger-Drawer auf Mobil, Theme-Toggle.

#### Abweichungen zwischen Entwurf und Entscheidungen

Der Entwurf ist als Design-Vorlage wertvoll, sein Inhalt ist aber überwiegend
Platzhalter und teils erfunden. Vor der Umsetzung gilt:

- **Erfundene Inhalte nicht übernehmen**: MVZ Eppendorf, Brandt & Partner,
  Holzwerk Nord, Gut Ostsee usw. sind fiktive Cases; das achtköpfige Team
  (Jana Schiller, Marek Kowalski, ...), "gegründet 2012", "12+ Jahre",
  "80+ Projekte", "94 % Kundenbindung", die Testimonials und "8 Awards" sind
  erfunden. Kontaktdaten im Entwurf (hallo@digital-avenue.de,
  +49 40 12 34 56 78) sind Platzhalter; echt sind post@digital-avenue.de und
  +49 (40) 41343870.
- **Struktur an die Entscheidungen anpassen**: drei Säulen statt sechs
  Leistungs-Cards, Zielgruppen-Einstiege (Praxen, Kanzleien, Mittelstand),
  Haupt-CTA "Digital-Check anfragen" statt "Erstgespräch buchen", keine
  Team-Sektion, Kundenstimmen nur als markierte Platzhalter, echte Partner
  (Doctolib, Placetel, Netleaders) und echte Referenzen (DIGIZT, Lungenpraxis
  am Tibarg, Urlaub bei Jana) in der Trust-Bar. Das Magazin nur, wenn Nils
  es ausdrücklich will.
- **Bildwelt**: Der Entwurf hat keine Fotografie (Kacheln mit Verläufen).
  Die Higgsfield-Bildwelt ersetzt die Hero-Collage und die Cases-Kacheln
  gemäß Layout-Inspiration (Bildband mit Service-Karten, Foto-Kacheln im
  Raster).
- **Technik-Hinweise**: `digital-avenue.css` lädt Manrope und Jost über
  Google Fonts, `colors_and_type.css` nutzt die selbst gehostete Manrope.
  Für den Prototyp die selbst gehostete Variante verwenden. Die Geräterahmen
  in `pages/frames/` laden React über unpkg und sind reine Präsentation.
  Die README enthält auch Angaben zum Kundenprojekt Digizt (Blau `#2563eb`);
  diese gelten nicht für Digital Avenue.

### Prototyp (Stand 10.09.2026)

- Quelle: `prototype/src/` (Seiten und Partials), gebaut mit `node prototype/build.mjs`
  nach `prototype/*.html` und als Einzeldatei-Bundle nach `prototype/dist/`.
- Seiten: Startseite, Für Praxen, Für Kanzleien, Für den Mittelstand. Alle mit
  Zielgruppen-Umschalter (Startseite), Digital-Check-Dialog mit Validierung,
  FAQ, Referenzen und Kundenstimmen-Platzhaltern.
- Bilder: 39 Higgsfield-Motive in `prototype/img/` (m34–m39 am 17.09.2026 für die Kampagnen-Landingpages) (Soul 2.0 sowie zwei Porträts
  mit GPT Image 2 für ruhige Hintergründe; rund 20 Credits gesamt). Übersicht in
  `prototype/img/contact-sheet.jpg`. Kein Motiv wird doppelt verwendet.
  Nicht verwendet: m04, m06, m08, m10, m14, m17, m20, m23, m30, m31 (m14, m17,
  m30, m31 mit Schrift- oder Bildartefakten).
- Vorschau als Artefakt: https://claude.ai/code/artifact/5c43ea84-ecc7-491f-8a93-f851f2335770
- Offen im Prototyp, als Platzhalter markiert: Adresse im Footer, Konditionen des
  Digital-Checks, Referenz-Beschreibungen, Kanzlei-Referenz, Kundenstimmen,
  Preismodell und Reaktionszeiten in den FAQ, Datenschutzhinweis im Formular.

### H1 und SEO (Entscheidung 10.09.2026)

- Startseiten-H1 nach Variante 3 (Hybrid): "Ihre Digitalagentur in Hamburg und
  Rostock. Damit alles Digitale läuft und Sie den Kopf frei haben." Eyebrow
  "Für Praxen, Kanzleien und Mittelstand". Title-Tag "Digitalagentur Hamburg &
  Rostock für Praxen, Kanzleien, Mittelstand".
- Vor dem Launch: alle Keywords auf Basis einer echten Keyword-Recherche
  optimieren (Search Console der Live-Site, Keyword-Planer). Die Landingpages
  sind die SEO-Träger; ihre H1 sollen dann die konkreten Begriffe tragen
  (z. B. "Website, Telefonanlage und Terminbuchung für Ihre Arztpraxis").

### Recruiting (Ergänzung 10.09.2026)

- Für alle Kunden außer Ferienvermietung ein Kernthema: SEO-optimierte
  Karriereseite mit Online-Bewerbung (Stellen als Google-Jobs, Bewerbung vom
  Handy ohne Hürden). Referenzen: Dialyse Güstrow (zwei MFA innerhalb von vier Wochen) und
  DIGIZT GmbH (zwei Servicetechniker innerhalb von sechs Wochen), jeweils
  trotz Fachkräftemangel.
- Im Prototyp: Recruiting-Kachel auf der Startseite (ersetzt die Digital-Check-
  Kachel, der Check bleibt als CTA-Block), dritter Punkt in jedem Zielgruppen-Tab,
  je eine Recruiting-Kachel und ein "Kennen Sie das?"-Satz auf den drei
  Landingpages, Dialyse Güstrow als vierte Referenz, Karriereseite als Punkt
  im Digital-Check. Details zu den Referenzen sind noch Platzhalter.

### Umzug nach WordPress / Bricks (Stand 2026-09-10)

- Skill `bricks-handoff` in `.claude/skills/bricks-handoff/` angelegt: fünf Phasen (Klären, Tokens exportieren, Schriften/Icons, Komponenten als Global Classes, Templates/Seiten, Abgleich/Launch) plus Skripte `export-tokens.mjs` und `split-icons.mjs`.
- Erster Export liegt in `handoff/export/` (Advanced-Themer-Palette, Bricks-Variablen, globales CSS, Icons, Token-Report). Stand der Phasen in `handoff/STATUS.md`.
- Entscheidung (Nils, 10.09.2026): **Bricks Native**, kein Advanced Themer. Config und Skill entsprechend umgestellt; die AT-Palette wird nur noch als Nebenprodukt erzeugt.
- Offen: Staging-Zugang, Bricks-Template-Export als Referenz für das Template-JSON-Format.

### Dark Mode (Ergänzung 10.09.2026)

- Anforderung: Als Digitalagentur soll die Seite einen Dunkelmodus haben. Umsetzung nach der CSS-Logik von Bricks Native, damit alles eins zu eins übernommen werden kann.
- Mechanik: Attribut `data-brx-theme="dark"` auf `<html>`; alle Dunkel-Werte stehen in `design-system/colors_and_type.css` im Block `:root[data-brx-theme="dark"]`, Layout-Sonderfälle in `prototype/css/site.css` unter demselben Selektor. Wahl wird in localStorage `brx_mode` gespeichert, ohne Wahl gilt die Systemeinstellung. Ein Inline-Skript im Head setzt das Attribut vor dem ersten Rendern (kein Aufblitzen).
- Umschalter: Button in der Navigation mit dem Markup des Bricks-Elements "Toggle – Mode" (`.toggle.light` / `.toggle.dark`), Mond im Hellmodus, Sonne im Dunkelmodus. Auch mobil sichtbar.
- Neue Tokens: `--da-teal-fill` / `--da-teal-fill-hover` für gefüllte Flächen mit weißem Text (Buttons, Digital-Check-Block, aktive Tabs, Kundenstimme). Im Dunkelmodus heller als das Text-Teal, damit Weiß darauf lesbar bleibt (Kontrast 5,4:1). Dunkel-Werte ergänzt für `--da-teal-dark`, `--da-teal-deeper`, `--da-nav-bg`, `--da-nav-border`, Schatten sowie Erfolg/Warnung/Fehler.
- Dunkelmodus-Regeln im Layout: Logo wechselt auf die weiße Variante; Chips und Service-Karten auf Fotos werden dunkles Glas; Hero-Glanz auf Sand reduziert; Concierge- und Deep-Kacheln bekommen eine Kontur; Fremdlogos (DIGIZT) werden per Filter invertiert. Für Bricks werden echte Dunkel-Logos gebraucht.
- Vorschau-Schalter: `?dark` und `?light` an jeder Prototyp-URL.
- Ergänzung 11.09.2026: Alles, was im Dunkelmodus anders aussieht, ist jetzt eine Farbe mit Hell- und Dunkelwert (16 neue Tokens: `--da-ink-*` für Schattenebenen, `--da-teal-glow*`, `--da-glass*`, `--da-chip-*`, `--da-step-bg`, `--da-deep-border`, `--da-wordmark`, `--da-glow-sand*`). Schatten-Variablen referenzieren nur noch diese Farben. Damit schaltet der Bricks Color Manager alles nativ um; im Prototyp-CSS bleiben nur Logo-Wechsel, Umschalter-Icons und die Platzhalter-Filter für Referenzlogos als Dunkelmodus-Regeln.

### Style Guide (10.09.2026)

- Lebende Übersicht aller Farben, Schriften, Elemente und Komponenten: `prototype/styleguide.html` (Mehrdatei) und `prototype/dist/styleguide.html` (Einzeldatei), gebaut aus `prototype/src/styleguide.html` durch `build.mjs`. Komponenten werden aus den Seitenquellen extrahiert, Farbtabelle aus der Token-Datei erzeugt. Beides bleibt damit automatisch mit dem Prototyp synchron.
- Zweck: Planung des Umzugs nach Bricks. Jede Komponente trägt einen Vorschlag (Import, Theme Style, Global Class, Component, Element nativ, Custom CSS) und die Arbeitsliste am Ende hat 32 Einträge mit Erledigt-Spalte.
- Offene Entscheidung aus dem Guide: H5 und H6 sind im Design System nicht definiert (Vorschlag: H5 = Base fett, H6 = Label in Versalien). Kein Element ist ein Slider; die Zielgruppen laufen über Tabs.

### Bricks 2.4 (Entscheidung 10.09.2026)

- Bricks 2.4 ist seit dem 17.09.2026 final auf Staging (vorher RC2); Umsetzung in Bricks läuft.
- Relevante Neuerungen: nativer MCP-Server mit AI Abilities (Claude Code kann Seiten, Templates, Components, Global Classes, Design System direkt anlegen; über den WordPress MCP Adapter, Endpunkt `index.php?rest_route=/mcp/mcp-adapter-default-server`, stdio-Brücke `@automattic/mcp-wordpress-remote`, Anwendungspasswort nur in Umgebungsvariablen; Konfiguration in `.mcp.json`, nicht als claude.ai-Connector), HTML-zu-Bricks, bidirektionaler CSS Sync zwischen Custom CSS und Style-Controls, globaler Import/Export für Design Systems und Components, Bricks Browser, Stile zwischen Breakpoints kopieren. Details in `.claude/skills/bricks-handoff/references/bricks-2-4.md` und im Style Guide, Abschnitt „Bricks 2.4“.
- Folge für den Handoff: Statt JSON-Importe von Hand einzuspielen, kann Claude Code über MCP direkt in Staging arbeiten, sofern die Staging-Domain aus der Umgebung erreichbar ist. Das Anwendungspasswort bleibt beim Client, nie im Repository.

### Datenmodell und Betrieb über MCP (11.09.2026)

- Drei Ebenen: Struktur über MCP (Bricks-Abilities), Datenmodell als Meta-Box-Code im Repo, Inhalte im WordPress-Admin.
- CPTs: `da_referenz` (mit Kundenstimme als Feldgruppe), `da_leistung`, `da_faq`, `da_partner`. Taxonomien `zielgruppe` und `leistungsbereich`. Settings Page `unternehmen`. Landingpages bleiben Seiten aus Components.
- Go-Live durch Übernahme des Stagings; danach Struktur-Änderungen als Transfer-Pakete. Details und Leitplanken in `handoff/BETRIEBSKONZEPT-MCP.md`.
- Entscheidungen 11.09.2026: Referenz-Einzelseiten ab Start; Digital-Check per E-Mail und als Anfrage-CPT; Entwicklung auf relaunch.digital-avenue.de, Go-Live per All-in-One WP Migration; Leistungen mit eigenen Seiten unter `/leistungen/`. Das Plugin mit dem Datenmodell wurde am selben Tag wieder entfernt (Git-Historie): Felder werden erst aus den fertigen Bricks-Templates abgeleitet, ein Feld je Stelle im Template. Reihenfolge jetzt: Grundparameter (Farben, Schriften, Variablen, Klassen), Icons, Theme Style, Components.


---

# Kampagne: Start

Quelle: `handoff/kampagne/00_START_HIER.md`

## Digital Avenue – Kampagnenpaket

Erstellt am 13.09.2026 aus dem Projektgespräch und sämtlichen vorhandenen Adressbeständen. Budgetplanung wurde wie gewünscht zurückgestellt.

### Die Ergebnisse

1. **01_Kampagnenkonzept.md:** vollständige Strategie mit neun Kampagnen, Zielgruppen, Fachrichtungsübersicht, Angebotslogik, Kontaktfolge, Rollen, CRM-Prozess und Erfolgsmessung.
2. **02_Mailingtexte.md:** neun Briefe und neun E-Mail-Texte, zusätzliche Telefonievarianten für beide Kanäle, eine postalische Erinnerung und eine Antwort auf Beratungsanfragen. Insgesamt 22 Textvorlagen.
3. **03_Landingpage_Texte.md:** neun passende Textvarianten samt gemeinsamen Modulen, FAQ, Kontaktformular und Gestaltungshinweisen.
4. **HubSpot/Kontakte_Hamburg.csv:** 5.867 Kontakt-Quelleinträge.
5. **HubSpot/Kontakte_Rostock.csv:** 1.024 Kontakt-Quelleinträge.
6. **HubSpot/IMPORT_ANLEITUNG.md** und **HubSpot/Feldmapping.csv:** Anleitung und Zuordnung aller 37 Spalten; benutzerdefinierte Eigenschaften vor Import anlegen.
7. **HubSpot/Praxiszuordnung_RECHERCHE_KEIN_IMPORT.csv:** 2.226 Anschriftengruppen für die anschließende Organisationsprüfung. Keine verifizierte Praxisliste und kein Unternehmensimport.
8. **HubSpot/Pruefbericht.json:** maschinenlesbare Prüfzahlen.

### Was einsatzfertig ist und was die Ausführung benötigt

Konzept und Texte sind ausgearbeitet. Die beiden CSV-Dateien sind strukturell für den beschriebenen Kontaktimport vorbereitet; der tatsächliche HubSpot-Testimport wurde ohne Kontozugriff nicht durchgeführt. Vor Import sind Eigenschaftsanlage und Bestandsabgleich nötig. Quell-ID kennzeichnet einen Verzeichniseintrag, nicht zwingend einen einmaligen Menschen. E-Mail-Adressen bleiben Recherchefelder und sind nicht als persönliches Standardfeld Email zu importieren.

Vor Versand müssen Praxiszugehörigkeit, Empfänger, Bestandskunden und Kontaktsperren geprüft sowie finale Kampagnenlinks und Pflichtangaben eingesetzt werden. Die E-Mail-Versionen sind ausschließlich für berechtigte Kontakte bestimmt. Es wurden keine E-Mails, Briefe oder Anzeigen versendet und keine Landingpages veröffentlicht.

Die öffentliche Referenznutzung von Pneumologie Eppendorf ist laut Inhaber bestätigt. Die ebenfalls genannte 5-Sterne-Bewertung ist ohne Originalprüfung nicht als Zitat verwendet worden. Servicezeiten und Feiertagsannahme sind in Konzept und Texten konsistent beschrieben.

### Prüfung

Gesamtzahl 6.891; 6.891 eindeutige Quell-IDs; regionale Anzahlen stimmen mit den Originaldateien überein. Alle Spalten haben ein Feldmapping. Kein Standard-Email-Feld, keine gesetzte Werbeeinwilligung und kein freigegebener Versanddatensatz. 35 fehlende Fachrichtungsangaben bleiben sichtbar. Eine bekannte Referenz ist automatisch erkannt, weitere Bestandskunden müssen mit der tatsächlichen Kundenliste abgeglichen werden. Alle Primärkampagnen summieren sich auf 6.891 Einträge.

Die ursprünglichen Adressdateien bleiben unverändert. Das Gesamtpaket liegt zusätzlich als ZIP neben diesem Ordner.


---

# Kampagne: Konzept

Quelle: `handoff/kampagne/01_Kampagnenkonzept.md`

## Digital Avenue: Kampagnen für Praxen und Heilberufe

Stand: 13. September 2026. Ausgearbeitetes Konzept für Hamburg und Rostock einschließlich Landkreis. Budgetentscheidungen bleiben auf Wunsch zurückgestellt. Alle Zeitangaben beziehen sich auf einen später festgelegten Start. Dieses Dokument ersetzt die früheren vorläufigen Kampagnenentscheidungen, ohne deren Datenquellen zu verändern.

### 1. Ziel und Positionierung

Neue Kunden für Bau oder Übernahme von WordPress-Websites und/oder Placetel-Telefonanlagen gewinnen und in langfristige monatliche Betreuung überführen. Praxisgestaltung, Drucksachen, Beschilderung und größere digitale Projekte ergänzen die Zusammenarbeit. Auffindbarkeit und Recruiting werden bei tatsächlichem Bedarf angeboten.

**Positionierung:** Digital Avenue ist die externe Digitalabteilung für Praxis und MVZ. Persönlich erreichbar, vorausschauend in der Pflege und zuständig für die vereinbarten Kommunikationsaufgaben.

**Leitidee:** Ihre Kommunikation gehört zusammen.

**Praktischer Beleg:** Die Praxis meldet einen Urlaub. Digital Avenue aktualisiert die vereinbarten Hinweise auf Website, Google Business und Telefonanlage und nimmt sie zum vereinbarten Zeitpunkt wieder zurück. Der Kunde muss den Folgeschritt nicht erneut beauftragen.

Bis zu 100 zusätzliche Praxen sind ein genannter Kapazitätsrahmen für zwölf Monate, kein prognostiziertes Kampagnenergebnis. Gemessen werden laufende Betreuungsverträge und monatliche Nettoumsätze; einmalige Projekte werden separat ausgewiesen.

### 2. Was angeboten wird

| Baustein | Inhalt | Angebotslogik |
|---|---|---|
| Website | WordPress-Bau oder technische Übernahme, Wartung und Inhalte | Einrichtung/Übernahme separat, laufende Betreuung monatlich |
| Digital-Concierge | Änderungen per Telefon/E-Mail, vereinbarte Folgearbeiten, abgestimmte Pflege | Klarer Umfang im Monatsvertrag; keine unbegrenzte Änderungsflatrate |
| Telefonie | Placetel einrichten oder bestehende Anlage nach Prüfung betreuen | Einrichtung separat; Betreuung monatlich; Providerkosten gesondert |
| Google Business | Stammdaten, Öffnungs- und Schließzeiten sowie vereinbarte Inhalte pflegen | Nach vereinbartem Betreuungsumfang |
| Doctolib | Vermittlung; nach Abschluss Einbindung in Website und, wenn gebucht, Telefonanlage | Konkrete Umsetzung im Angebot; keine vollständige Doctolib-Administration zugesagt |
| Gestaltung und Print | Logo, Geschäftsausstattung, Drucksachen, Beschilderung | Separate Projektangebote; Gestaltung, Produktion und Montage klar abgrenzen |
| Auffindbarkeit | Leistungsseiten, lokale SEO, optional SEA | Zielbezogenes Zusatzprojekt oder laufende Leistung; Werbebudget separat |
| Recruiting | Karriereseite, Stelleninhalte, Bewerbungswege, optional weitere Medien | Nach bestätigtem Bedarf; keine Bewerbungs- oder Besetzungsgarantie |

Vertragliches Hosting bleibt in der Regel beim Kunden; IONOS-Agenturzugriff ermöglicht technische Betreuung. Das ist ein Argument für klare Zuständigkeiten und Wahlfreiheit, keine Behauptung völliger Risikofreiheit. Partner werden anhand ihrer konkreten Aufgabe vorgestellt. Die technische Art einer Doctolib-Telefonanbindung wird je Auftrag geklärt, nicht als universelle Schnittstelle beworben.

**Serviceversprechen:** Persönliche Rückmeldung innerhalb einer Stunde, Mo–Fr 08–18 Uhr, mit Vertretung. Für die Entwürfe sind gesetzliche Feiertage ausgenommen. Bei außerhalb der Servicezeit eingegangenen Anfragen beginnt die Frist mit dem nächsten Servicefenster. Rückmeldung bedeutet keine vollständige Problemlösung. Diese Regel gehört vor Vertragsabschluss konsistent in die Leistungsbeschreibung.

Keine finalen Paketpreise in den Mailings: 149 Euro war lediglich ein diskutierter Prüfpreis. Die Kampagne führt in eine kurze Bedarfsklärung mit anschließend transparentem Angebot. Die 15 Prozent Bestandskundenrabatt auf Zusatzarbeiten sind kein Neukunden-Rabattversprechen und werden im Erstmailing nicht beworben.

### 3. Datenbasis und Qualifizierung

Die zwei Original-CSV-Dateien enthalten 5.867 Hamburger und 1.024 Rostocker Datensätze. Für Hamburg wurden die vorhandenen Namensbestandteile aus der CRM-Excel-Datei über die Quell-URL zugeordnet. Fachrichtungen wurden vollständig ausgewertet; 35 leere Angaben bleiben ungeklärt. Mehrfachqualifikationen bleiben sichtbar.

Die Importdateien enthalten **Quelleinträge als Kontakte**, keine bestätigte Liste unabhängiger Arztpraxen. Gleichlautende Namen können mehrere Arbeitsorte betreffen. Gemeinsame Anschriften, Telefonnummern oder Postfächer beweisen keine gemeinsame Organisation. Eine Recherche-Arbeitsliste fasst 2.226 Anschriftengruppen zusammen; dies ist keine Praxiszahl. Der Unterschied zu früheren Summen entsteht durch die zusätzliche Einbeziehung des Ortsfelds in die Gruppierung.

Eine fehlende Websiteangabe ist „unbekannt“. In Rostock wurden Website-/E-Mail-Daten technisch nicht erhoben. Es wird daraus weder Websitebedarf noch ein niedriger Digitalisierungsgrad abgeleitet. Fachrichtungen werden zu Kampagnenvorschlägen, nicht zu behaupteten Problemen oder Kaufwahrscheinlichkeiten.

#### Aufnahme in eine Aussendung

1. Ambulante Behandlung oder selbstständige medizinische Einrichtung bestätigen.
2. Praxis/Träger und Standort feststellen. Bei MVZ Geschäftsführung oder zuständiges Praxismanagement zuordnen. Bei angestellten Ärzten den Entscheider ermitteln; den einzelnen Arzt nicht pauschal als Websitekäufer behandeln.
3. Website, tatsächliches Leistungsangebot und vorhandene Kontaktwege ansehen; Prüfdatum und Fundstelle dokumentieren. Recruiting, Wachstum und Praxisstart nur mit konkretem Anlass auswählen.
4. Bestandskunden und Sperrvermerke abgleichen. Pneumologie Eppendorf ist in den Daten soweit erkennbar markiert; Lungenpraxis am Tibarg und Dialyse Güstrow sind zusätzliche bekannte Projekt-/Referenzhinweise, die vor Versand abzugleichen sind. Keine vollständige Kundenliste liegt vor.
5. Pro bestätigter Praxis einen passenden Empfänger bestimmen. Nicht alle Ärzte eines Standorts anschreiben. Neutrale Anrede verwenden, falls die persönliche Anrede nicht verifiziert ist.
6. Postalische Voraussetzungen und Informationspflichten berücksichtigen, Versandstatus dokumentieren. Rechercheimport allein löst keine Kommunikation aus.

#### Reihenfolge

**Zuerst:** Pneumologie/Nephrologie und angrenzende Internisten mit eigenen Patientenwegen; danach hausärztliche und andere ambulante Fachpraxen mit organisatorischem Betreuungsbedarf.

**Danach:** Psychotherapie mit passendem Betreuungsumfang, ambulante Eingriffs-/Diagnostikeinrichtungen und MVZ mit geklärter Entscheidungsebene.

**Gesondert:** Labor und Pathologie, weil Zuweiserkommunikation und Recruiting häufig passendere Einstiege sind als Patientenakquise. Krankenhaus- und Trägerzugehörigkeit bleibt ein Prüfpunkt, kein alleiniger Ausschluss.

Weitere Heilberufe wie Physio, Ergo, Logopädie, Podologie, Hebammen, reine Zahnheilkunde und Heilpraktiker sind keine vollständig erfassten Segmente dieser Listen. Es werden keine fehlenden Adressen oder Marktgrößen erfunden.

### 4. Kampagnenarchitektur

K1–K6 übersetzen Fachgruppen in passende Ansprache. K3 ist zusätzlich an einen Wachstumsanlass gebunden. K7–K9 sind fachrichtungsübergreifende Anlässe. Pro Praxis wird pro Welle **eine Hauptkampagne** gewählt. K9 ist für eine Praxis ohne belegten Spezialbedarf ein möglicher Einstieg nach Prüfung; kein automatisch belegter Wechselwunsch.

| ID | Kampagne | Auslöser | Angebot / Gesprächsziel | Landingpage |
|---|---|---|---|---|
| K1 | Facharztpraxis entlasten | Wiederkehrende Patienteninformationen, laufender Betreuungsbedarf | Website und Kontaktwege betreuen | /branchen/arztpraxen/facharztpraxis/ |
| K2 | Empfang entlasten | Wiederkehrende Änderungen und mehrere Kontaktkanäle | Concierge, Website, Google Business, Telefonie | /branchen/arztpraxen/empfang-entlasten/ |
| K3 | Passend gefunden werden | Bestätigte neue Leistung, Standort oder Wachstumsziel | Leistungsseiten, SEO, optional SEA | /branchen/arztpraxen/auffindbarkeit/ |
| K4 | Gut informiert zum Termin | Eigene Untersuchungs-/Eingriffstermine, Informationsbedarf | Patienten- und Zuweiserwege auf der Website | /branchen/arztpraxen/patienteninformation/ |
| K5 | Praxisbetreuung für Psychotherapie | Erstkontakt, Abwesenheiten und Pflegebedarf | Angemessene Websitebetreuung, Telefonie optional | /branchen/arztpraxen/psychotherapie/ |
| K6 | Kommunikation für Einrichtungen | Selbstständige Diagnostikeinrichtung mit eigener Entscheidung | Zuweiserinformationen, Website und Karriere | /branchen/arztpraxen/medizinische-einrichtungen/ |
| K7 | Praxisstart und Übernahme | Verifizierte Gründung, Übernahme, Umzug oder Modernisierung | Gestaltung, Website, Telefonie und anschließende Betreuung | /branchen/arztpraxen/praxisstart/ |
| K8 | Recruiting unterstützen | Bestätigte offene Stelle / Personalplanung | Arbeitgeberdarstellung, Stellen- und Bewerbungswege | /branchen/arztpraxen/recruiting/ |
| K9 | Betreuung wechseln | Wunsch nach externer Betreuung, Systembestand prüfen | WordPress-/Placetel-Übernahme oder Neuaufbau nach Befund | /branchen/arztpraxen/betreuung-wechseln/ |

Die Zuordnungen im Import sind ausdrücklich vorläufig: K1 963, K2 3.113, K4 673, K5 1.927 und K6 180 Einträge; 35 sind ungeklärt. Diese primäre Zuweisung ist überschneidungsfrei. Die Fachgruppenübersicht im Anhang kann Mehrfachnennungen enthalten und darf nicht zur Gesamtzahl addiert werden. K3, K7, K8 und K9 werden erst nach tatsächlichem Anlass final zugewiesen.

#### Fachrichtungsspezifische Anpassungen

Den ersten thematischen Absatz oder die Beispiele passend ersetzen; keine medizinischen Aussagen ergänzen, die nicht von der jeweiligen Praxis stammen.

| Gruppe | Passende konkrete Beispiele |
|---|---|
| Pneumologie | Vorbereitungshinweise, Sprechzeiten und direkte Terminwege |
| Nephrologie / bestätigte Dialyse | Standorte, Besuchsinformationen, bei realem Angebot Gastdialyse; Teamdarstellung |
| Kardiologie / Angiologie | Unterlagen für Untersuchungen, Kontakt- und Terminwege |
| Gastroenterologie | Von der Praxis freigegebene Vorbereitungsinformationen und deren Aktualisierung |
| Onkologie / Rheumatologie / Endokrinologie | Verlässliche Kontaktinformationen und Orientierung für wiederkehrende Besuche |
| Hausarztmedizin | Schließzeiten, Vertretung und bestehende Rezept-/Terminwege |
| Kinderheilkunde | Organisatorische Informationen für Eltern; keine erfundenen Behandlungskapazitäten |
| Gynäkologie / Urologie / Dermatologie | Unterschiedliche Terminarten und Leistungen verständlich darstellen |
| Orthopädie / HNO / Augenheilkunde | Terminvorbereitung und Ansprechpartner; OP-Themen nur wenn tatsächlich angeboten |
| Neurologie | Informationen für Patienten und Angehörige, klare Erreichbarkeit |
| Psychotherapie / Psychiatrie | Erstkontakt, Kontaktzeiten und Abwesenheiten; kein pauschales Wachstumsversprechen |
| Ambulante Chirurgie / MKG / Anästhesiologie | Organisatorische Eingriffsvorbereitung, Standort- und Kontaktwege |
| Radiologie / Nuklearmedizin / Strahlentherapie | Unterlagen, Standortzuordnung und Zuweiserinformationen |
| Humangenetik / rehabilitative Medizin | Beratungs-/Besuchsvorbereitung, Leistungen und Kontaktwege |
| Labor / Pathologie / Transfusionsmedizin | Ansprechpartner für Zuweiser, Leistungen und Recruiting; direkte Patientenansprache erst prüfen |

### 5. Medien und Ablauf pro Praxis

**Erster Kontakt:** Persönlich adressierter, einseitiger Brief mit einer Situation, einem Leistungsangebot, einem glaubwürdigen Beleg und einer Handlungsaufforderung. Absender klar als Digital Avenue erkennbar. Kein amtlich wirkendes Schreiben, keine fingierte bestehende Beziehung, keine unbelegte Websitekritik. Regionaler Bezug über Hamburg/Rostock und tatsächliche Standorte; kein erfundenes örtliches Büro.

**Landingpage:** Gleiche Botschaft wie der Brief. Eine Hauptaktion „Betreuung besprechen“. Kontakt per Telefon oder Formular möglich. Der Brief muss auch ohne QR-Code verständlich funktionieren. Alle neun Textvarianten liegen vor; umgesetzt werden zunächst K1/K2/K9 auf einem gemeinsamen Template. Keine bloßen Fachrichtungs-/Stadtduplikate zur Suchmaschinenoptimierung.

**Tag 0:** Brief nach Qualifizierung und Kontrolle versenden; Kampagne, Welle und Empfänger dokumentieren.

**Tag 14–21:** Höchstens eine postalische Erinnerung, sofern kein Widerspruch, keine Rückmeldung und kein anderes laufendes Gespräch vorliegt. Bei unzustellbar erst Daten korrigieren, nicht erneut ungeprüft senden.

**Danach:** Keine weitere automatisierte Ansprache. Ohne Reaktion Kampagne beenden und Datenverwendung nach dokumentierter Aufbewahrungsregel überprüfen. Ein konkreter späterer Anlass kann eine neue Prüfung begründen.

**Bei Anfrage:** Persönliche Rückmeldung im zugesagten Servicefenster. Zuständigkeit, Systeme, abzugebende Aufgaben und gewünschter Start klären. Angebot mit separaten einmaligen und monatlichen Positionen erstellen. Nachfassen am im Gespräch vereinbarten Termin. Kein Newsletter-Abo aus der Beratungsanfrage ableiten.

**Bei Einwilligung für Marketing-E-Mail:** Die zur Hauptkampagne passende E-Mail kann statt des Briefs eingesetzt werden. Nicht zusätzlich pauschal beide Kanäle bespielen. Das Vorliegen und der Umfang der Berechtigung müssen dokumentiert sein; keine Einwilligung aus einer veröffentlichten Adresse ableiten.

**Ergänzende Suchanzeigen:** Konzeptionell auf Entscheidersuchen wie „Praxiswebsite Betreuung“, „WordPress Arztpraxis übernehmen“ oder „Placetel Praxis Betreuung“ ausrichten. Patientenanfragen wie „Lungenarzt Hamburg“ vermeiden. Suchvolumen und Klickpreise wurden nicht geprüft; Anzeigenstart und Budget sind nicht Teil dieser Lieferung.

**Empfehlungen:** Zufriedene Kunden können die Referenzseite weitergeben. Empfehlungen nicht als Zustimmung der empfohlenen Praxis zu Werbe-E-Mails behandeln.

### 6. Referenzen und Abgrenzung

Pneumologie Eppendorf ist vom Inhaber als öffentlich freigegebene Referenz benannt. Bestätigt sind Website und ergänzende Praxisgestaltung; die genauen einzelnen Printarbeiten sollten für Bildunterschriften anhand tatsächlicher Arbeitsbeispiele benannt werden. Sichtbar auf der Praxiswebsite: Doctolib-Verlinkung, Rezeptwege, Praxis-/Zuweiserinformationen und eine MFA-Stellenanzeige. Die Praxis ist hausärztlich-internistisch mit pneumologischem Schwerpunkt.

**Referenztext für die Branchenseite:** „Für Pneumologie Eppendorf verbindet Digital Avenue die Website mit einem abgestimmten Praxisauftritt. Auf der Website finden Patient*innen Termin- und Rezeptwege sowie aktuelle Informationen. Auch die Darstellung einer offenen Stelle hat dort ihren Platz. Die Zusammenarbeit umfasst persönliche laufende Betreuung.“ Keine behauptete Gründung, Zeitersparnis oder erfolgreiche Stellenbesetzung ergänzen.

Die vom Inhaber genannte 5-Sterne-Google-Bewertung wird ohne Originalprüfung nicht zitiert oder als verifizierter Screenshot verwendet. Andere Referenzen werden erst namentlich in Mailings eingesetzt, wenn die Freigabe geklärt ist; allgemein bestätigte Erfahrung mit Dialysepraxen darf sachlich erwähnt werden.

Meyer-Wagenfeld dient als Inspiration für klare Praxisansprache, verständliche Produktwahl und Gründungsanlässe. Persönliche Betreuung und Doctolib-Vermittlung allein sind kein Alleinstellungsmerkmal. Digital Avenue belegt das Angebot durch den Concierge-Ablauf, die Kombination mit betreuter Telefonie und das konkrete Rückmeldeversprechen. Eigene Gestaltung und Texte bleiben eigenständig.

### 7. HubSpot und Vertriebsprozess

Die beiden CSV-Dateien sind vorbereitete Kontaktimporte mit benutzerdefinierten Recherchefeldern. Der separate Importleitfaden beschreibt Eigenschaftsanlage, eindeutige Quellkennung, Bestandsabgleich und Testimport. Ein Import ins echte Konto wurde nicht ausgeführt. Es gibt keinen Unternehmensimport mit erfundenen Praxisnamen. Die Praxiszuordnung wird nach Recherche bestätigt und kann anschließend mit echten Organisationen verknüpft werden.

**Arbeitsstatus:** Importiert → Qualifizierung → Für eine Kampagne freigegeben → Brief/E-Mail im berechtigten Kanal versendet → Rückmeldung → Gespräch → Angebot → Gewonnen/Verloren. Ein „Deal“ wird erst bei konkreter Gelegenheit angelegt, nicht für jeden Listeneintrag. Das System kann mit gespeicherten Ansichten und Aufgaben funktionieren; kostenpflichtige Automationen werden nicht vorausgesetzt.

**Deal-Daten:** Praxis, Entscheider, Bedarf, Kampagne, einmaliger Projektwert, monatliche Betreuung, gewünschter Start, nächster Schritt, Verantwortlicher. Die CRM-Eigenschaft „Betrag“ braucht eine einheitliche Definition; einmalige und monatliche Werte nicht ohne klare Laufzeit zusammenrechnen.

**Sperren:** Bestandskunde für Neukundenkampagne, Werbewiderspruch, fehlende Berechtigung für E-Mail, unzustellbar, bereits aktives Gespräch, falsche Zuständigkeit. Sperren wirken vor jeder Kontaktaufnahme und werden durch Reimport nicht zurückgesetzt. Die Quellfelder überschreiben keine bestehenden Einwilligungen.

### 8. Arbeitsplan und Verantwortlichkeiten

| Phase | Ergebnis | Verantwortung |
|---|---|---|
| Vorbereitung | Importfelder, Bestandsabgleich, Praxisqualifizierung und erste Liste | Nils: Entscheidung; freie Mitarbeitende: Recherche/CRM |
| Produktion | K1/K2/K9-Landingpages, Referenzdarstellung, Briefsatz und Versandprüfung | Nils: Text-/Leistungsfreigabe; freie Mitarbeitende: Gestaltung/Umsetzung |
| Erste Welle | Kleine vollständig geprüfte Teilmengen je Einstieg und Region | Nils: Auswahl; freie Mitarbeitende: Versandvorbereitung |
| Bearbeitung | Rückmeldungen, Gespräche und getrennte Angebote | Nils, mit bestätigter Vertretung |
| Auswertung | Erkenntnisse zu Bedarf, Einwänden und Betreuungsabschluss | Nils; wöchentliche kurze CRM-Auswertung |
| Erweiterung | K4/K5, anlassbezogen K7/K8; K6 gesondert | Auf Basis der Rückmeldungen und verfügbaren qualifizierten Praxen |

Die erste Welle dient dem Lernen. Als Arbeitsgröße können 20–30 bestätigte Praxen je Einstieg genutzt werden, soweit vorhanden; das ist keine vorgeschriebene Versandmenge. Kleinere Referenzsegmente vollständig sorgfältig qualifizieren, statt für vermeintliche Teststärke ungeeignete Kontakte hinzuzunehmen. Budgetfragen werden nicht erneut eröffnet.

### 9. Messung und Entscheidungen

| Kennzahl | Definition / Zweck |
|---|---|
| Zustellbare Praxen | Versandte Praxisempfänger minus Rückläufer; Personenanzahl nicht als Praxisanzahl ausgeben |
| Rückmeldequote | Eindeutige antwortende Praxen / zustellbare angeschriebene Praxen |
| Gesprächsquote | Geführte qualifizierte Gespräche / zustellbare angeschriebene Praxen |
| Angebotsquote | Angebote / geführte qualifizierte Gespräche |
| Abschlussquote | Gewonnene Betreuungsverträge / Angebote; Nenner immer mit angeben |
| Monatlicher Neuum­satz | Summe der neu vereinbarten monatlichen Netto-Betreuungspreise |
| Projektumsatz | Einmalige Aufträge separat, nicht als monatlichen Umsatz zählen |
| Betreuungsaufwand | Tatsächliche Minuten je Praxis/Monat; eigene und externe Arbeit sichtbar |
| Servicequalität | Anteil Anfragen mit persönlicher Rückmeldung innerhalb des vereinbarten Servicefensters |

Je Kampagne, Region und Welle auswerten. QR-/Kurzlinks tragen nur Kampagnenkennungen, beispielsweise `utm_source=brief&utm_medium=post&utm_campaign=da_k2_hh_w1`. Keine Namen, E-Mail-Adressen oder individuellen Arztkennungen in URLs. Technische Messung nur mit den jeweils erforderlichen Informationen/Einwilligungen. Beratungs- und Abschlussdaten aus dem CRM sind die maßgebliche Grundlage; Öffnungsraten allein steuern keine Entscheidung.

Nach jeder Welle: bei vielen Rückläufern zuerst Adressen korrigieren; bei falschen Ansprechpartnern Organisationen klären; bei Interesse ohne Gespräch CTA/Zugang vereinfachen; bei Gesprächen ohne Angebot Bedarfspassung prüfen; bei Angeboten ohne Abschluss Einwände und Leistungsumfang auswerten. Kleine Stichproben liefern Hinweise, keine statistisch gesicherten Gewinner.

### 10. Grenzen und Voraussetzungen für die Ausführung

Konzept, Texte und Importdateien sind erstellt. Nicht ausgeführt sind Import ins Kundenkonto, Einzelprüfung sämtlicher Websites, Veröffentlichung von Landingpages, Druck, Versand oder Anzeigenbuchung. Das gehört zur Umsetzung und wird nicht als bereits erledigt dargestellt.

Vor Aussendung müssen die noch variablen Felder in den Texten ersetzt werden: erreichbarer Kampagnenlink, vollständige Geschäftsbriefangaben und passende Datenschutzinformation zur Rechercheansprache. Die öffentliche Website bestätigt Telefon +49 (40) 41343870 und post@digital-avenue.de; die extern eingebundenen vollständigen Impressumsangaben waren beim Abruf nicht verfügbar und werden nicht geraten.

Postalische Werbung setzt eine passende datenschutzrechtliche Grundlage, transparente Information und Beachtung von Widersprüchen voraus. E-Mail-Werbung unterliegt zusätzlich den Voraussetzungen des § 7 UWG. Die rechtlichen Hinweise der ursprünglichen Adresslisten sind keine pauschale Versandfreigabe. Die Ausführung muss diese Anforderungen und vorhandene Kontaktsperren konkret berücksichtigen.

### Quellen

- Eigene Bestände: die fünf Adressdateien im Projektordner; beide CSV-Listen als vollständige Zeilenbasis, Hamburger CRM-Excel-Datei für Namensbestandteile. Erhebungsstand laut Übersichtsblättern: 11.07.2026.
- Unternehmensleistungen und Referenzfreigabe: Angaben von Nils Rudolph in diesem Projekt.
- Referenzfunktionen: https://pneumologie-eppendorf.de/ (abgerufen 13.09.2026).
- Inspiration: https://www.meyer-wagenfeld.de/ und https://www.meyer-wagenfeld.de/praxishomepage .
- Unternehmenskontakt: https://digital-avenue.de/legal/impressum/ .
- HubSpot: https://knowledge.hubspot.com/import-and-export/set-up-your-import-file und https://knowledge.hubspot.com/import-and-export/understand-the-import-tool .
- E-Mail-Werbung: https://www.gesetze-im-internet.de/uwg_2004/__7.html .
- Datenschutz und Direktwerbung: https://www.datenschutzkonferenz-online.de/media/oh/OH-Werbung_Februar%202022_final.pdf .

### Anhang: Fachrichtungen und regionale Bestände

Die nachfolgende Tabelle zählt Quelleinträge je Fachgruppe. Mehrfachzuordnungen sind möglich. Prioritäten und Bedarfe sind Arbeitshypothesen, keine geprüften individuellen Kaufabsichten. Insbesondere Nephrologie belegt nicht automatisch ein Dialyseangebot.

| Fachrichtung | Hamburg | Rostock inkl. Landkreis | Priorität | Kampagne | Möglicher Einstieg |
|---|---:|---:|---|---|---|
| Pneumologie | 21 | 3 | A | K1 | Untersuchungsvorbereitung, Kontaktwege, laufende Patienteninformationen |
| Nephrologie / mögliche Dialyseanbieter | 28 | 5 | A | K1 | Standortinformationen, Gastdialyse nur bei bestätigtem Angebot, Recruiting |
| Kardiologie | 58 | 10 | A | K1 | Vorbereitung, Terminwege, Informationen für wiederkehrende Besuche |
| Gastroenterologie | 25 | 5 | A | K1 | Von der Praxis freigegebene Untersuchungsinformationen und Terminwege |
| Hämatologie / Onkologie | 28 | 4 | A | K1 | Klare Kontaktwege, Team- und Standortinformationen, Recruiting |
| Rheumatologie | 14 | 3 | A | K1 | Ablaufinformationen, Erreichbarkeit, wiederkehrende Informationspflege |
| Angiologie | 5 | 3 | A | K1 | Leistungsübersicht, Vorbereitung, Kontaktwege |
| Endokrinologie / Diabetologie | 1 | 0 | A | K1 | Versorgungsangebote, Vorbereitung und laufende Informationspflege |
| Innere Medizin ohne ausgewiesenen Schwerpunkt | 703 | 48 | A | K1/K2 | Haus- oder fachärztliche Versorgung zunächst klären |
| Hausarztmedizin / praktische Ärzte | 823 | 322 | A | K2 | Öffnungs- und Schließzeiten, Vertretung, Termin- und Rezeptwege |
| Kinder- und Jugendmedizin | 234 | 47 | A | K2 | Elterninformationen, Besuchsvorbereitung und Kontaktwege |
| Gynäkologie | 416 | 62 | A | K2/K3 | Terminarten und Leistungen verständlich erklären; Wachstum nur bei Bedarf |
| Orthopädie / Unfallchirurgie | 247 | 49 | A | K2/K3 | Patientenwege, Terminarten, Teamdarstellung und Recruiting |
| HNO / Phoniatrie / Pädaudiologie | 149 | 31 | A | K2 | Untersuchungsinformationen, Terminwege, Erreichbarkeit |
| Urologie | 93 | 19 | A | K2/K3 | Leistungs- und Vorsorgeinformationen, Kontaktwege |
| Augenheilkunde | 213 | 38 | A | K2/K3 | Untersuchungs- und OP-Vorbereitung, Standort- und Terminführung |
| Dermatologie | 145 | 22 | A | K2/K3 | Versorgungsangebote und Terminarten; Auffindbarkeit nach Praxisziel |
| Chirurgie einschließlich Kinder-, Gefäß-, Herz- und Viszeralchirurgie | 100 | 21 | B | K4 | Ambulante Tätigkeit prüfen; Eingriffsvorbereitung und Nachsorgeinformationen |
| Mund-Kiefer-Gesichtschirurgie | 70 | 9 | B | K4/K3 | Patienten- und Zuweiserinformationen, Eingriffsvorbereitung |
| Neurochirurgie | 26 | 5 | B | K4 | Ambulante Sprechstunden, Zuweiserwege, Behandlungsvorbereitung |
| Plastische / ästhetische Chirurgie | 14 | 1 | B | K3/K4 | Beratungsanfragen und Leistungen, Auffindbarkeit nach tatsächlichem Angebot |
| Anästhesiologie | 120 | 25 | B | K4 | Eigene Patientenwege, OP-Kooperationen und Vorbereitungsinformationen prüfen |
| Physikalische / rehabilitative Medizin | 29 | 5 | B | K2 | Leistungsübersicht, Vorbereitung, Terminwege |
| Neurologie / Nervenheilkunde | 150 | 22 | A | K2 | Patienten- und Angehörigeninformationen, Kontaktwege, Recruiting |
| Psychiatrie einschließlich Kinder- und Jugendpsychiatrie | 167 | 24 | B | K5 | Erstkontakt und Sprechzeiten strukturieren, Kapazitäten klar kommunizieren |
| Psychotherapie / Psychosomatik | 1751 | 192 | B | K5 | Erstkontakt, Anfragen und Abwesenheit klar regeln; kleine Pakete prüfen |
| Radiologie | 144 | 20 | B | K4 | Untersuchungsvorbereitung, Standortführung, Zuweiser und Recruiting |
| Nuklearmedizin | 34 | 10 | B | K4 | Untersuchungsvorbereitung, Kontaktwege und Zuweiserinformationen |
| Strahlentherapie | 40 | 14 | B | K4 | Ablaufinformationen und Erreichbarkeit; Trägerstruktur prüfen |
| Humangenetik | 23 | 3 | B | K4 | Ambulante Beratung und Vorbereitung prüfen, Terminwege erläutern |
| Labor / Mikrobiologie / Transfusionsmedizin | 87 | 13 | C | K6 | Direkten Patientenkontakt prüfen; sonst Zuweiserkommunikation und Recruiting |
| Pathologie / Neuropathologie | 71 | 10 | C | K6 | Zuweiserkommunikation und Recruiting statt allgemeiner Patientenakquise |

Ungeklärt: 35 Datensätze. Davon leere Fachrichtung: 35. Nichtleere, nicht zugeordnete Angaben: [].


---

# Kampagne: Mailingtexte

Quelle: `handoff/kampagne/02_Mailingtexte.md`

## Mailingtexte für Digital Avenue

Stand 13.09.2026. Neun Kampagnen, jeweils Brief und E-Mail. Dazu zwei allgemeine Nachfassvorlagen und zwei Telefonievarianten. Sie-Ansprache, persönlich und sachlich; keine erfundenen Mängel, Erfolge oder Kundenzitate. Texte sind fertig ausgearbeitet, Kontakt- und Produktionsfelder müssen vor Versand ersetzt werden.

### Verwendung

- Briefe: erst nach Prüfung der Praxis, Anschrift, Zuständigkeit und postalischen Werbevoraussetzungen. Ein Brief pro bestätigter Praxis je Welle. Adresse aus dem geprüften CRM-Datensatz; Anrede neutral „Guten Tag,“.
- E-Mails: nur mit dokumentierter geeigneter Berechtigung. Die Adresslisten liefern keine Einwilligung. Kein automatischer E-Mail-Nachversand an Briefempfänger. Individuelle Angebotsantworten auf eine Anfrage zweckbezogen senden.
- Eckige Klammern sind Produktionsfelder, keine Tatsachenbehauptungen. [Kampagnenlink] wird erst nach Veröffentlichung ersetzt. +49 (40) 41343870, post@digital-avenue.de, [Postanschrift], [Datenschutzlink] und die vollständigen UG-Pflichtangaben aus bestätigten Unternehmensdaten einsetzen. Die bloße Kenntnis der Domain reicht dafür nicht.
- Die Google-Bewertung wurde mit fünf Sternen vom Inhaber bestätigt, aber nicht unabhängig aufgefunden und nicht wörtlich übermittelt. Deshalb enthalten die Mailings weder Sterne noch ein erfundenes Zitat. Die öffentliche Referenznutzung von Pneumologie Eppendorf ist laut Inhaber freigegeben.
- Die erste Rückmeldung innerhalb einer Stunde ist keine Zusage vollständiger Umsetzung. Servicezeit Mo–Fr 08–18 Uhr; Feiertage werden für die Entwürfe ausgenommen und sind vertraglich entsprechend festzulegen.

### Gemeinsame Absender- und Datenschutzbausteine

**Briefabschluss:** Nils Rudolph · Digital Avenue UG (haftungsbeschränkt) · [Postanschrift] · +49 (40) 41343870 · post@digital-avenue.de · digital-avenue.de. Ergänzen: [vollständige Geschäftsbrief-Pflichtangaben].

**Postalischer Transparenzhinweis:** „Ihre beruflichen Kontaktdaten stammen aus dem öffentlich zugänglichen Verzeichnis [KV Hamburg / KVMV], Datenstand 11.07.2026. Wir verwenden sie, um Ihnen unsere Leistungen für Praxen vorzustellen. Wenn Sie keine weiteren Angebote wünschen, genügt eine Nachricht an post@digital-avenue.de oder [Postanschrift]. Informationen zur Datenverarbeitung und Ihren Rechten: [Datenschutzlink].“ Der verlinkte Hinweis muss die erforderlichen Informationen zur Verarbeitung recherchierter Kontaktdaten enthalten; dieser Kurztext allein ersetzt sie nicht. Verantwortliche, konkrete Rechtsgrundlage, Interessenabwägung, Löschfrist und Betroffenenrechte vor Versand dokumentieren.

**E-Mail-Abschluss:** Nils Rudolph · Digital Avenue UG (haftungsbeschränkt) · +49 (40) 41343870 · post@digital-avenue.de · [Postanschrift] · [vollständige Geschäftsbrief-Pflichtangaben]. „Sie möchten keine weiteren Marketing-E-Mails erhalten? [Abmeldelink]. Datenschutz: [Datenschutzlink].“ Berechtigung und Abmeldung im CRM führen.

Die Bausteine gehören in jedes versandte Dokument. Vor einer Anfrage-Antwort keine Newslettereinwilligung voraussetzen oder behaupten.


### K1 – Facharztpraxis entlasten

Zielgruppe: Pneumologie, Nephrologie und weitere internistische Fachrichtungen; tatsächliches Versorgungsmodell prüfen.

#### Brief

**Ihre Praxisinformationen. Persönlich betreut.**

Guten Tag,

Vor einem Termin kommen oft dieselben organisatorischen Fragen: Was muss ich mitbringen? Wo melde ich mich? Wie erreiche ich die Praxis? Gut auffindbare Informationen können Ihrem Team wiederholte Erklärungen abnehmen.

Wir bauen oder übernehmen Ihre Praxiswebsite, pflegen Ihre Informationen und stimmen die Kontaktwege mit Ihnen ab. Wenn gewünscht, betreuen wir auch Ihre Placetel-Telefonanlage. Doctolib vermitteln wir und binden die gebuchte Lösung anschließend in Ihre Website und gegebenenfalls Telefonanlage ein.

Sie geben die fachlichen Inhalte frei. Wir kümmern uns um Darstellung, Aktualisierung und vereinbarte Folgeschritte. Melden Sie beispielsweise Ihren Urlaub, entfernen wir den Hinweis zum vereinbarten Zeitpunkt auch wieder.

Mit Pneumologie Eppendorf betreuen wir bereits eine internistische Hausarztpraxis mit pneumologischem Schwerpunkt. Als Agentur aus Hamburg und Rostock sind wir persönlich für Sie da. Während unserer Servicezeiten erhalten Sie innerhalb einer Stunde eine persönliche Rückmeldung: montags bis freitags, 08:00–18:00 Uhr, ausgenommen gesetzliche Feiertage.

Lassen Sie uns in einem kurzen Gespräch ansehen, welche wiederkehrenden Informationen und Kontaktwege wir für Ihre Praxis betreuen können. Sie erreichen mich unter +49 (40) 41343870 oder finden weitere Informationen unter [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen Briefabschluss und postalischen Transparenzhinweis einsetzen.]

#### E-Mail – nur bei zulässiger Kontaktberechtigung

**Betreff:** Ihre Praxisinformationen. Persönlich betreut.

**Vorschautext:** Website, digitale Terminwege und Telefonie mit persönlicher Betreuung für internistische und andere Facharztpraxen.

Guten Tag,

Vor einem Termin kommen oft dieselben organisatorischen Fragen: Was muss ich mitbringen? Wo melde ich mich? Wie erreiche ich die Praxis? Gut auffindbare Informationen können Ihrem Team wiederholte Erklärungen abnehmen.

Wir bauen oder übernehmen Ihre Praxiswebsite, pflegen Ihre Informationen und stimmen die Kontaktwege mit Ihnen ab. Wenn gewünscht, betreuen wir auch Ihre Placetel-Telefonanlage. Doctolib vermitteln wir und binden die gebuchte Lösung anschließend in Ihre Website und gegebenenfalls Telefonanlage ein.

Lassen Sie uns in einem kurzen Gespräch ansehen, welche wiederkehrenden Informationen und Kontaktwege wir für Ihre Praxis betreuen können. Antworten Sie mir gern auf diese E-Mail oder vereinbaren Sie ein Gespräch über [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen E-Mail-Abschluss einsetzen.]


### K2 – Empfang entlasten

Zielgruppe: Hausarztmedizin, Kinderheilkunde, Gynäkologie, HNO, Urologie, Orthopädie, Augenheilkunde, Dermatologie, Neurologie und rehabilitative Medizin.

#### Brief

**Eine Urlaubsinfo. Die weiteren Schritte übernehmen wir.**

Guten Tag,

Der Praxisurlaub steht fest. Nun müssen der Hinweis auf der Website, die Öffnungszeiten bei Google und die Telefonansage angepasst werden. Nach dem Urlaub soll wieder alles stimmen. Solche Aufgaben kosten im Praxisalltag Aufmerksamkeit.

Digital Avenue übernimmt die vereinbarte Pflege Ihrer Website, Ihres Google-Business-Profils und Ihrer Placetel-Telefonanlage. Sie teilen uns die Änderung mit. Wir setzen sie an den vereinbarten Stellen um und kümmern uns auch um die spätere Rücknahme.

Auch Terminwege und häufige organisatorische Fragen bringen wir auf Ihrer Website an einen gut auffindbaren Platz. Eine vorhandene WordPress-Website können wir nach technischer Prüfung in Betreuung nehmen.

Pneumologie Eppendorf gehört bereits zu unseren Praxiskunden. Als Agentur aus Hamburg und Rostock sind wir persönlich für Sie da. Während unserer Servicezeiten erhalten Sie innerhalb einer Stunde eine persönliche Rückmeldung: montags bis freitags, 08:00–18:00 Uhr, ausgenommen gesetzliche Feiertage.

Besprechen wir kurz, welche wiederkehrenden Aufgaben wir Ihrem Team abnehmen können. Sie erreichen mich unter +49 (40) 41343870 oder finden weitere Informationen unter [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen Briefabschluss und postalischen Transparenzhinweis einsetzen.]

#### E-Mail – nur bei zulässiger Kontaktberechtigung

**Betreff:** Eine Urlaubsinfo. Die weiteren Schritte übernehmen wir.

**Vorschautext:** Laufende Pflege von Website, Google Business und Telefonie für Ihren Praxisalltag.

Guten Tag,

Der Praxisurlaub steht fest. Nun müssen der Hinweis auf der Website, die Öffnungszeiten bei Google und die Telefonansage angepasst werden. Nach dem Urlaub soll wieder alles stimmen. Solche Aufgaben kosten im Praxisalltag Aufmerksamkeit.

Digital Avenue übernimmt die vereinbarte Pflege Ihrer Website, Ihres Google-Business-Profils und Ihrer Placetel-Telefonanlage. Sie teilen uns die Änderung mit. Wir setzen sie an den vereinbarten Stellen um und kümmern uns auch um die spätere Rücknahme.

Besprechen wir kurz, welche wiederkehrenden Aufgaben wir Ihrem Team abnehmen können. Antworten Sie mir gern auf diese E-Mail oder vereinbaren Sie ein Gespräch über [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen E-Mail-Abschluss einsetzen.]


### K3 – Passend gefunden werden

Zielgruppe: Alle Fachrichtungen mit bestätigtem Wachstumsziel, neuer Leistung oder neuem Standort.

#### Brief

**Ihre Leistungen sollen dort sichtbar sein, wo sie gesucht werden.**

Guten Tag,

Eine neue Leistung oder ein neuer Standort verdient eine verständliche Darstellung. Interessierte sollten schnell erkennen, was Ihre Praxis anbietet und wie sie den passenden Kontakt aufnehmen können.

Wir strukturieren Ihre Leistungsseiten, betreuen Ihr Google-Business-Profil und verbessern die Auffindbarkeit Ihrer Praxis. Wenn gezielte Werbung zu Ihrem Ziel passt, planen und betreuen wir ergänzend Google Ads mit separat vereinbartem Werbebudget.

Am Anfang steht Ihr Ziel: Welche Leistungen möchten Sie bekannter machen, und welche Anfragen passen zu Ihrer Praxis? Daraus leiten wir die Inhalte und Maßnahmen ab. Die laufende Websitepflege übernehmen wir auf Wunsch gleich mit.

Unsere Erfahrung mit Praxiswebsites fließt in die verständliche Darstellung Ihrer Leistungen ein. Als Agentur aus Hamburg und Rostock sind wir persönlich für Sie da. Während unserer Servicezeiten erhalten Sie innerhalb einer Stunde eine persönliche Rückmeldung: montags bis freitags, 08:00–18:00 Uhr, ausgenommen gesetzliche Feiertage.

Lassen Sie uns über die Leistung oder den Standort sprechen, den Sie sichtbarer machen möchten. Sie erreichen mich unter +49 (40) 41343870 oder finden weitere Informationen unter [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen Briefabschluss und postalischen Transparenzhinweis einsetzen.]

#### E-Mail – nur bei zulässiger Kontaktberechtigung

**Betreff:** Ihre Leistungen sollen dort sichtbar sein, wo sie gesucht werden.

**Vorschautext:** Leistungsseiten, Google Business und Suchmarketing passend zu Ihren tatsächlichen Praxiszielen.

Guten Tag,

Eine neue Leistung oder ein neuer Standort verdient eine verständliche Darstellung. Interessierte sollten schnell erkennen, was Ihre Praxis anbietet und wie sie den passenden Kontakt aufnehmen können.

Wir strukturieren Ihre Leistungsseiten, betreuen Ihr Google-Business-Profil und verbessern die Auffindbarkeit Ihrer Praxis. Wenn gezielte Werbung zu Ihrem Ziel passt, planen und betreuen wir ergänzend Google Ads mit separat vereinbartem Werbebudget.

Lassen Sie uns über die Leistung oder den Standort sprechen, den Sie sichtbarer machen möchten. Antworten Sie mir gern auf diese E-Mail oder vereinbaren Sie ein Gespräch über [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen E-Mail-Abschluss einsetzen.]


### K4 – Gut informiert zum Termin

Zielgruppe: Ambulante Chirurgie, MKG, Neurochirurgie, plastische Chirurgie, Anästhesiologie, Radiologie, Nuklearmedizin, Strahlentherapie und Humangenetik.

#### Brief

**Vor dem Termin schon vieles geklärt.**

Guten Tag,

Welche Unterlagen werden benötigt? Wo findet die Untersuchung statt? Welche Hinweise gelten vor dem Besuch? Wenn diese Informationen leicht zu finden sind, können sich Patient*innen besser orientieren.

Wir bringen die von Ihrer Praxis freigegebenen Informationen übersichtlich auf Ihre Website. Dazu gehören passende Kontaktwege, Standortangaben und Hinweise für Zuweiser. Die technische und inhaltliche Pflege übernehmen wir langfristig.

Bei mehreren Standorten oder unterschiedlichen Terminarten achten wir auf eine klare Zuordnung. Vorhandene Terminlösungen binden wir nach Prüfung ein. Bei Bedarf ergänzen wir die Betreuung Ihrer Telefonanlage.

Digital Avenue arbeitet bereits mit Praxen aus Pneumologie und Dialyse zusammen. Als Agentur aus Hamburg und Rostock sind wir persönlich für Sie da. Während unserer Servicezeiten erhalten Sie innerhalb einer Stunde eine persönliche Rückmeldung: montags bis freitags, 08:00–18:00 Uhr, ausgenommen gesetzliche Feiertage.

Gehen wir gemeinsam einen typischen Weg vom ersten Kontakt bis zum Termin durch und klären, wo wir Sie unterstützen können. Sie erreichen mich unter +49 (40) 41343870 oder finden weitere Informationen unter [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen Briefabschluss und postalischen Transparenzhinweis einsetzen.]

#### E-Mail – nur bei zulässiger Kontaktberechtigung

**Betreff:** Vor dem Termin schon vieles geklärt.

**Vorschautext:** Patienteninformationen, Standorte und Kontaktwege für ambulante Untersuchungen und Behandlungen.

Guten Tag,

Welche Unterlagen werden benötigt? Wo findet die Untersuchung statt? Welche Hinweise gelten vor dem Besuch? Wenn diese Informationen leicht zu finden sind, können sich Patient*innen besser orientieren.

Wir bringen die von Ihrer Praxis freigegebenen Informationen übersichtlich auf Ihre Website. Dazu gehören passende Kontaktwege, Standortangaben und Hinweise für Zuweiser. Die technische und inhaltliche Pflege übernehmen wir langfristig.

Gehen wir gemeinsam einen typischen Weg vom ersten Kontakt bis zum Termin durch und klären, wo wir Sie unterstützen können. Antworten Sie mir gern auf diese E-Mail oder vereinbaren Sie ein Gespräch über [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen E-Mail-Abschluss einsetzen.]


### K5 – Praxisbetreuung für Psychotherapie

Zielgruppe: Psychotherapie, Psychosomatik und psychiatrische Praxen; kleine Teams mit angemessenem Umfang.

#### Brief

**Ihre Website bleibt aktuell. Auch wenn Ihr Tag voll ist.**

Guten Tag,

Zwischen Behandlungen bleibt wenig Zeit, um die Website zu pflegen. Trotzdem sollen Kontaktzeiten, Erstkontaktinformationen und Abwesenheiten verlässlich stimmen.

Wir betreuen Ihre WordPress-Website technisch und inhaltlich. Sie erreichen uns per E-Mail oder Telefon und teilen uns mit, was sich ändern soll. Vereinbarte Folgeschritte, etwa die Rücknahme eines Abwesenheitshinweises, erledigen wir mit.

Gemeinsam stellen wir klar dar, wie Interessierte Kontakt aufnehmen können und welche Informationen sie vorher benötigen. Der Betreuungsumfang richtet sich nach Ihrer Praxis. Auf Wunsch prüfen wir auch Ihre Telefonie.

Als Digital Avenue betreuen wir medizinische Praxen langfristig und persönlich. Als Agentur aus Hamburg und Rostock sind wir persönlich für Sie da. Während unserer Servicezeiten erhalten Sie innerhalb einer Stunde eine persönliche Rückmeldung: montags bis freitags, 08:00–18:00 Uhr, ausgenommen gesetzliche Feiertage.

Lassen Sie uns kurz besprechen, welche Websiteaufgaben Sie künftig abgeben möchten. Sie erreichen mich unter +49 (40) 41343870 oder finden weitere Informationen unter [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen Briefabschluss und postalischen Transparenzhinweis einsetzen.]

#### E-Mail – nur bei zulässiger Kontaktberechtigung

**Betreff:** Ihre Website bleibt aktuell. Auch wenn Ihr Tag voll ist.

**Vorschautext:** Persönliche technische und inhaltliche Betreuung für psychotherapeutische und psychiatrische Praxen.

Guten Tag,

Zwischen Behandlungen bleibt wenig Zeit, um die Website zu pflegen. Trotzdem sollen Kontaktzeiten, Erstkontaktinformationen und Abwesenheiten verlässlich stimmen.

Wir betreuen Ihre WordPress-Website technisch und inhaltlich. Sie erreichen uns per E-Mail oder Telefon und teilen uns mit, was sich ändern soll. Vereinbarte Folgeschritte, etwa die Rücknahme eines Abwesenheitshinweises, erledigen wir mit.

Lassen Sie uns kurz besprechen, welche Websiteaufgaben Sie künftig abgeben möchten. Antworten Sie mir gern auf diese E-Mail oder vereinbaren Sie ein Gespräch über [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen E-Mail-Abschluss einsetzen.]


### K6 – Kommunikation für medizinische Einrichtungen

Zielgruppe: Labor, Mikrobiologie, Transfusionsmedizin, Pathologie und diagnostische Einrichtungen; separates B2B-Segment.

#### Brief

**Klare Informationen für Zuweiser, Bewerber und Ihr Team.**

Guten Tag,

Ihre Website hat mehrere Aufgaben: Ansprechpartner nennen, Leistungen erläutern und Bewerber*innen einen Eindruck Ihrer Einrichtung geben. Diese Informationen brauchen eine verlässliche laufende Pflege.

Digital Avenue baut oder übernimmt Ihre WordPress-Website und betreut Inhalte, technische Wartung und vereinbarte Aktualisierungen. Wir strukturieren Informationen nach ihren Zielgruppen und stimmen die Zuständigkeiten mit Ihnen ab.

Bei Bedarf ergänzen wir Karriereseiten, Google Business und die Betreuung Ihrer Cloud-Telefonie. In einem ersten Gespräch klären wir, welche Bereiche Ihre Einrichtung selbst beauftragen kann und wo weitere Verantwortliche eingebunden werden müssen.

Unsere Betreuung verbindet Web, Inhalte und Kommunikation in einer festen Zusammenarbeit. Als Agentur aus Hamburg und Rostock sind wir persönlich für Sie da. Während unserer Servicezeiten erhalten Sie innerhalb einer Stunde eine persönliche Rückmeldung: montags bis freitags, 08:00–18:00 Uhr, ausgenommen gesetzliche Feiertage.

Besprechen wir, welche Kommunikationsaufgaben Sie dauerhaft an einen festen Ansprechpartner abgeben möchten. Sie erreichen mich unter +49 (40) 41343870 oder finden weitere Informationen unter [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen Briefabschluss und postalischen Transparenzhinweis einsetzen.]

#### E-Mail – nur bei zulässiger Kontaktberechtigung

**Betreff:** Klare Informationen für Zuweiser, Bewerber und Ihr Team.

**Vorschautext:** Websitepflege, Ansprechpartner und Arbeitgeberdarstellung für medizinische Einrichtungen.

Guten Tag,

Ihre Website hat mehrere Aufgaben: Ansprechpartner nennen, Leistungen erläutern und Bewerber*innen einen Eindruck Ihrer Einrichtung geben. Diese Informationen brauchen eine verlässliche laufende Pflege.

Digital Avenue baut oder übernimmt Ihre WordPress-Website und betreut Inhalte, technische Wartung und vereinbarte Aktualisierungen. Wir strukturieren Informationen nach ihren Zielgruppen und stimmen die Zuständigkeiten mit Ihnen ab.

Besprechen wir, welche Kommunikationsaufgaben Sie dauerhaft an einen festen Ansprechpartner abgeben möchten. Antworten Sie mir gern auf diese E-Mail oder vereinbaren Sie ein Gespräch über [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen E-Mail-Abschluss einsetzen.]


### K7 – Praxisstart und Übernahme

Zielgruppe: Alle ambulanten Fachrichtungen mit verifizierter Gründung, Übernahme, Umzug oder Modernisierung.

#### Brief

**Ihr Praxisauftritt. Von Anfang an abgestimmt.**

Guten Tag,

Bei einer Gründung, Übernahme oder Modernisierung kommen viele Aufgaben zusammen: Logo, Praxisschild, Drucksachen, Website und Telefonie sollen rechtzeitig bereitstehen und zusammenpassen.

Digital Avenue begleitet Ihren Praxisauftritt von der Gestaltung bis zur digitalen Umsetzung. Wir entwickeln oder übernehmen Ihre Website, gestalten die vereinbarten Praxismaterialien und richten Ihre Placetel-Telefonie nach Bedarf ein.

Doctolib vermitteln wir und binden es nach Abschluss in die Website sowie, wenn gebucht, in die Telefonanlage ein. Anschließend betreuen wir die vereinbarten digitalen Leistungen langfristig. Einmalige Projekte, Produktion und laufende Betreuung weisen wir getrennt aus.

Für Pneumologie Eppendorf haben wir neben der Website auch Leistungen rund um den Praxisauftritt umgesetzt. Als Agentur aus Hamburg und Rostock sind wir persönlich für Sie da. Während unserer Servicezeiten erhalten Sie innerhalb einer Stunde eine persönliche Rückmeldung: montags bis freitags, 08:00–18:00 Uhr, ausgenommen gesetzliche Feiertage.

Lassen Sie uns Ihren Zeitplan und die benötigten Bausteine gemeinsam ordnen. Sie erreichen mich unter +49 (40) 41343870 oder finden weitere Informationen unter [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen Briefabschluss und postalischen Transparenzhinweis einsetzen.]

#### E-Mail – nur bei zulässiger Kontaktberechtigung

**Betreff:** Ihr Praxisauftritt. Von Anfang an abgestimmt.

**Vorschautext:** Gestaltung, Website und Telefonie für Praxisgründung, Übernahme und Modernisierung – anschließend persönlich betreut.

Guten Tag,

Bei einer Gründung, Übernahme oder Modernisierung kommen viele Aufgaben zusammen: Logo, Praxisschild, Drucksachen, Website und Telefonie sollen rechtzeitig bereitstehen und zusammenpassen.

Digital Avenue begleitet Ihren Praxisauftritt von der Gestaltung bis zur digitalen Umsetzung. Wir entwickeln oder übernehmen Ihre Website, gestalten die vereinbarten Praxismaterialien und richten Ihre Placetel-Telefonie nach Bedarf ein.

Lassen Sie uns Ihren Zeitplan und die benötigten Bausteine gemeinsam ordnen. Antworten Sie mir gern auf diese E-Mail oder vereinbaren Sie ein Gespräch über [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen E-Mail-Abschluss einsetzen.]


### K8 – Recruiting unterstützen

Zielgruppe: Fachrichtungsübergreifend bei bestätigter offener Stelle oder Personalplanung.

#### Brief

**Zeigen Sie, warum es sich lohnt, in Ihrer Praxis zu arbeiten.**

Guten Tag,

Wer sich für eine Stelle interessiert, möchte mehr als eine Aufgabenliste sehen: Wie arbeitet das Team? Welche Zeiten gelten? Was macht den Arbeitsplatz aus? Ihre Website kann diese Fragen beantworten.

Wir gestalten und betreuen Ihre Karriereseite, bringen Stellenangebote verständlich auf den Punkt und sorgen für einen einfachen Bewerbungsweg. Auf Wunsch ergänzen wir passende Druckmaterialien oder eine gesondert geplante Anzeigenkampagne.

Sie liefern die tatsächlichen Rahmenbedingungen und geben die Inhalte frei. Wir kümmern uns um Darstellung und Pflege – einschließlich der Aktualisierung oder Entfernung, wenn eine Stelle besetzt ist.

Auf der Website unseres Referenzkunden Pneumologie Eppendorf ist auch ein Stellenangebot eingebunden. Als Agentur aus Hamburg und Rostock sind wir persönlich für Sie da. Während unserer Servicezeiten erhalten Sie innerhalb einer Stunde eine persönliche Rückmeldung: montags bis freitags, 08:00–18:00 Uhr, ausgenommen gesetzliche Feiertage.

Lassen Sie uns ansehen, wie Sie Ihre offene Stelle und Ihre Praxis als Arbeitsplatz präsentieren möchten. Sie erreichen mich unter +49 (40) 41343870 oder finden weitere Informationen unter [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen Briefabschluss und postalischen Transparenzhinweis einsetzen.]

#### E-Mail – nur bei zulässiger Kontaktberechtigung

**Betreff:** Zeigen Sie, warum es sich lohnt, in Ihrer Praxis zu arbeiten.

**Vorschautext:** Karriereseiten, Stellenanzeigen und Bewerbungswege, die wir mit Ihnen entwickeln und aktuell halten.

Guten Tag,

Wer sich für eine Stelle interessiert, möchte mehr als eine Aufgabenliste sehen: Wie arbeitet das Team? Welche Zeiten gelten? Was macht den Arbeitsplatz aus? Ihre Website kann diese Fragen beantworten.

Wir gestalten und betreuen Ihre Karriereseite, bringen Stellenangebote verständlich auf den Punkt und sorgen für einen einfachen Bewerbungsweg. Auf Wunsch ergänzen wir passende Druckmaterialien oder eine gesondert geplante Anzeigenkampagne.

Lassen Sie uns ansehen, wie Sie Ihre offene Stelle und Ihre Praxis als Arbeitsplatz präsentieren möchten. Antworten Sie mir gern auf diese E-Mail oder vereinbaren Sie ein Gespräch über [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen E-Mail-Abschluss einsetzen.]


### K9 – Betreuung wechseln – Website und Telefonie

Zielgruppe: Alle passenden Praxen/MVZ bei bestätigtem Wechselwunsch; alternativ allgemeine Einladung ohne Mangelbehauptung.

#### Brief

**Ihre Website kann bleiben. Wir kümmern uns um die Betreuung.**

Guten Tag,

Sie möchten Website- oder Telefonieaufgaben abgeben und dabei einen festen Ansprechpartner haben? Dafür muss nicht automatisch alles neu aufgebaut werden.

Wir prüfen Ihre bestehende WordPress-Website und übernehmen sie bei technischer Eignung in die laufende Betreuung. Bei einer vorhandenen Placetel-Anlage klären wir ebenso, welche Aufgaben wir übernehmen können. Einen notwendigen Neuaufbau oder Systemwechsel bieten wir gesondert an.

Änderungswünsche erreichen uns per E-Mail oder Telefon. Wir setzen die vereinbarten Aufgaben um und denken an Folgeschritte. Ihr Hostingvertrag kann dabei direkt bei Ihnen bleiben; bei IONOS betreuen wir die Technik über den freigegebenen Agenturzugriff.

Langfristige persönliche Betreuung ist bereits die Grundlage unserer Zusammenarbeit mit medizinischen Praxen. Als Agentur aus Hamburg und Rostock sind wir persönlich für Sie da. Während unserer Servicezeiten erhalten Sie innerhalb einer Stunde eine persönliche Rückmeldung: montags bis freitags, 08:00–18:00 Uhr, ausgenommen gesetzliche Feiertage.

Besprechen wir kurz, welche Systeme Sie einsetzen und welche Betreuung Sie sich wünschen. Sie erreichen mich unter +49 (40) 41343870 oder finden weitere Informationen unter [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen Briefabschluss und postalischen Transparenzhinweis einsetzen.]

#### E-Mail – nur bei zulässiger Kontaktberechtigung

**Betreff:** Ihre Website kann bleiben. Wir kümmern uns um die Betreuung.

**Vorschautext:** Bestehende Website oder Placetel-Telefonie prüfen, Betreuung übernehmen und Änderungen zuverlässig erledigen.

Guten Tag,

Sie möchten Website- oder Telefonieaufgaben abgeben und dabei einen festen Ansprechpartner haben? Dafür muss nicht automatisch alles neu aufgebaut werden.

Wir prüfen Ihre bestehende WordPress-Website und übernehmen sie bei technischer Eignung in die laufende Betreuung. Bei einer vorhandenen Placetel-Anlage klären wir ebenso, welche Aufgaben wir übernehmen können. Einen notwendigen Neuaufbau oder Systemwechsel bieten wir gesondert an.

Besprechen wir kurz, welche Systeme Sie einsetzen und welche Betreuung Sie sich wünschen. Antworten Sie mir gern auf diese E-Mail oder vereinbaren Sie ein Gespräch über [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen E-Mail-Abschluss einsetzen.]


### Telefonievariante für K2/K9 – Brief

**Ihre Praxistelefonie braucht einen Ansprechpartner.**

Guten Tag,

Eine Ansage ändern, Schließzeiten hinterlegen oder eine Weiterleitung anpassen: Auch kleine Aufgaben an der Telefonanlage müssen zuverlässig erledigt werden.

Digital Avenue richtet Placetel-Cloud-Telefonanlagen ein und betreut sie langfristig. Nutzen Sie bereits Placetel, prüfen wir die Übernahme der Betreuung. Bei einem anderen System klären wir zunächst, ob ein Wechsel für Ihre Praxis sinnvoll ist.

Wir stimmen die vereinbarten Telefoninformationen mit Ihrer Website und Ihrem Google-Business-Profil ab. Vermitteln wir Ihnen Doctolib, binden wir die gebuchte Lösung nach Abschluss in Ihre Website und gegebenenfalls Telefonanlage ein. Die konkrete Umsetzung und laufende Betreuung beschreiben wir im Angebot.

Sie haben einen festen Ansprechpartner. Auf Ihr Anliegen erhalten Sie während unserer Servicezeiten innerhalb einer Stunde eine persönliche Rückmeldung: Montag bis Freitag, 08:00–18:00 Uhr, ausgenommen gesetzliche Feiertage.

Lassen Sie uns kurz besprechen, welche Telefonanlage Sie nutzen und welche Aufgaben wir Ihnen abnehmen können. Sie erreichen mich unter +49 (40) 41343870 oder über [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen Briefabschluss und postalischen Transparenzhinweis einsetzen.]

### Telefonievariante – E-Mail bei zulässiger Kontaktberechtigung

**Betreff:** Persönliche Betreuung für Ihre Praxistelefonie

**Vorschautext:** Ansagen, Schließzeiten und Weiterleitungen zuverlässig betreuen lassen.

Guten Tag,

wenn sich Sprechzeiten oder Zuständigkeiten ändern, soll auch die Telefonanlage richtig reagieren. Wir richten Placetel-Anlagen ein und übernehmen die vereinbarte laufende Betreuung.

Ob neue Ansage, Weiterleitung oder Schließzeit: Sie melden sich bei uns. Wir kümmern uns um die Umsetzung und abgestimmte Folgeschritte. Eine bestehende Placetel-Anlage können wir nach Prüfung übernehmen.

Möchten Sie besprechen, welche Unterstützung für Ihre Praxis sinnvoll ist? Antworten Sie mir gern oder nutzen Sie [Kampagnenlink].

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen E-Mail-Abschluss einsetzen.]

### Postalische Erinnerung – frühestens nach 14–21 Tagen

Nur nach erneuter Sperrlistenprüfung; maximal eine Erinnerung, kein Automatismus. Die erste Aussendung muss tatsächlich erfolgt sein.

**Website und Telefonie: Bleibt etwas für uns zu tun?**

Guten Tag,

vor Kurzem haben wir Ihnen unsere Betreuung für Praxen vorgestellt. Vielleicht ist die Pflege Ihrer Website oder Telefonanlage gerade kein dringendes Thema. Wenn Sie diese Aufgaben künftig abgeben möchten, können wir zunächst mit einem klar abgegrenzten Bereich beginnen.

Wir prüfen Ihre vorhandenen Systeme, vereinbaren den Umfang und betreuen Sie anschließend persönlich. Größere Änderungen oder neue Projekte erhalten Sie als separates Angebot.

Ein Beispiel unserer Arbeit finden Sie bei Pneumologie Eppendorf. Welche Bausteine für Ihre Praxis passen, besprechen wir gern mit Ihnen.

Sie erreichen mich unter +49 (40) 41343870 oder über [Kampagnenlink]. Wenn Sie keine weiteren Angebote wünschen, geben Sie uns bitte kurz Bescheid.

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Gemeinsamen Briefabschluss und postalischen Transparenzhinweis einsetzen.]

### Antwort nach eingegangener Beratungsanfrage

**Betreff:** Ihre Anfrage zur Betreuung Ihrer Praxis

Guten Tag,

vielen Dank für Ihre Anfrage. Gern sehen wir uns an, wie wir Ihre Praxis bei [angefragtes Thema] unterstützen können.

Für unser erstes Gespräch schlage ich [Termin 1] oder [Termin 2] vor. Wir klären Ihre Wünsche, die vorhandenen Systeme und die Aufgaben, die Sie abgeben möchten. Anschließend erhalten Sie bei Bedarf ein Angebot mit getrennten Positionen für Einrichtung beziehungsweise Übernahme und laufende Betreuung.

Welcher Termin passt Ihnen? Alternativ erreichen Sie mich unter +49 (40) 41343870.

Freundliche Grüße
Nils Rudolph
Digital Avenue

[Vollständige Unternehmenssignatur und Datenschutzlink einsetzen; keine Marketingeinwilligung aus der Anfrage ableiten.]


---

# Kampagne: Landingpage-Texte

Quelle: `handoff/kampagne/03_Landingpage_Texte.md`

## Landingpage-Texte und Aufbau

Neun Textvarianten auf einem gemeinsamen Seitentemplate. Die URL-Vorschläge sind noch nicht veröffentlicht. Zunächst K1, K2 und K9 umsetzen; weitere Varianten entsprechend Kampagnenstart. Alle Aussagen zu Leistungen stammen aus den bestätigten Angaben von Digital Avenue.

### K1 – /branchen/arztpraxen/facharztpraxis/

**Meta-Titel:** Facharztpraxis entlasten | Digital Avenue

**Meta-Beschreibung:** Website, digitale Terminwege und Telefonie mit persönlicher Betreuung für internistische und andere Facharztpraxen.

**Eyebrow:** Digital Avenue für Praxen und MVZ

## Mehr Zeit für Ihre Praxis. Wir kümmern uns um die Kommunikation.

Website, digitale Terminwege und Telefonie mit persönlicher Betreuung für internistische und andere Facharztpraxen.

Wir bauen oder übernehmen Ihre Praxiswebsite, pflegen Ihre Informationen und stimmen die Kontaktwege mit Ihnen ab. Wenn gewünscht, betreuen wir auch Ihre Placetel-Telefonanlage. Doctolib vermitteln wir und binden die gebuchte Lösung anschließend in Ihre Website und gegebenenfalls Telefonanlage ein.

**Button:** Betreuung besprechen

#### Das übernehmen wir für Sie

- Patienteninformationen aktuell halten
- Website bauen oder übernehmen
- Terminwege und Telefonie abstimmen

Sie geben die fachlichen Inhalte frei. Wir kümmern uns um Darstellung, Aktualisierung und vereinbarte Folgeschritte. Melden Sie beispielsweise Ihren Urlaub, entfernen wir den Hinweis zum vereinbarten Zeitpunkt auch wieder.

#### Aus der Praxis

Mit Pneumologie Eppendorf betreuen wir bereits eine internistische Hausarztpraxis mit pneumologischem Schwerpunkt.

#### Lassen Sie uns Ihre Aufgaben besprechen

Lassen Sie uns in einem kurzen Gespräch ansehen, welche wiederkehrenden Informationen und Kontaktwege wir für Ihre Praxis betreuen können.

**Button:** Gespräch anfragen

### K2 – /branchen/arztpraxen/empfang-entlasten/

**Meta-Titel:** Empfang entlasten | Digital Avenue

**Meta-Beschreibung:** Laufende Pflege von Website, Google Business und Telefonie für Ihren Praxisalltag.

**Eyebrow:** Digital Avenue für Praxen und MVZ

## Eine Mitteilung genügt. Wir kümmern uns um die nächsten Schritte.

Laufende Pflege von Website, Google Business und Telefonie für Ihren Praxisalltag.

Digital Avenue übernimmt die vereinbarte Pflege Ihrer Website, Ihres Google-Business-Profils und Ihrer Placetel-Telefonanlage. Sie teilen uns die Änderung mit. Wir setzen sie an den vereinbarten Stellen um und kümmern uns auch um die spätere Rücknahme.

**Button:** Betreuung besprechen

#### Das übernehmen wir für Sie

- Schließzeiten abgestimmt veröffentlichen
- Kontakt- und Terminwege verständlich machen
- Änderungen und Rücknahmen betreuen

Auch Terminwege und häufige organisatorische Fragen bringen wir auf Ihrer Website an einen gut auffindbaren Platz. Eine vorhandene WordPress-Website können wir nach technischer Prüfung in Betreuung nehmen.

#### Aus der Praxis

Pneumologie Eppendorf gehört bereits zu unseren Praxiskunden.

#### Lassen Sie uns Ihre Aufgaben besprechen

Besprechen wir kurz, welche wiederkehrenden Aufgaben wir Ihrem Team abnehmen können.

**Button:** Gespräch anfragen

### K3 – /branchen/arztpraxen/auffindbarkeit/

**Meta-Titel:** Passend gefunden werden | Digital Avenue

**Meta-Beschreibung:** Leistungsseiten, Google Business und Suchmarketing passend zu Ihren tatsächlichen Praxiszielen.

**Eyebrow:** Digital Avenue für Praxen und MVZ

## Gefunden werden, wenn es für Ihre Praxis zählt.

Leistungsseiten, Google Business und Suchmarketing passend zu Ihren tatsächlichen Praxiszielen.

Wir strukturieren Ihre Leistungsseiten, betreuen Ihr Google-Business-Profil und verbessern die Auffindbarkeit Ihrer Praxis. Wenn gezielte Werbung zu Ihrem Ziel passt, planen und betreuen wir ergänzend Google Ads mit separat vereinbartem Werbebudget.

**Button:** Betreuung besprechen

#### Das übernehmen wir für Sie

- Leistungen verständlich darstellen
- Lokale Praxisinformationen pflegen
- SEO und Anzeigen nach Ziel einsetzen

Am Anfang steht Ihr Ziel: Welche Leistungen möchten Sie bekannter machen, und welche Anfragen passen zu Ihrer Praxis? Daraus leiten wir die Inhalte und Maßnahmen ab. Die laufende Websitepflege übernehmen wir auf Wunsch gleich mit.

#### Aus der Praxis

Unsere Erfahrung mit Praxiswebsites fließt in die verständliche Darstellung Ihrer Leistungen ein.

#### Lassen Sie uns Ihre Aufgaben besprechen

Lassen Sie uns über die Leistung oder den Standort sprechen, den Sie sichtbarer machen möchten.

**Button:** Gespräch anfragen

### K4 – /branchen/arztpraxen/patienteninformation/

**Meta-Titel:** Gut informiert zum Termin | Digital Avenue

**Meta-Beschreibung:** Patienteninformationen, Standorte und Kontaktwege für ambulante Untersuchungen und Behandlungen.

**Eyebrow:** Digital Avenue für Praxen und MVZ

## Gut informiert ankommen.

Patienteninformationen, Standorte und Kontaktwege für ambulante Untersuchungen und Behandlungen.

Wir bringen die von Ihrer Praxis freigegebenen Informationen übersichtlich auf Ihre Website. Dazu gehören passende Kontaktwege, Standortangaben und Hinweise für Zuweiser. Die technische und inhaltliche Pflege übernehmen wir langfristig.

**Button:** Betreuung besprechen

#### Das übernehmen wir für Sie

- Vorbereitungsinformationen zugänglich machen
- Standorte und Ansprechpartner zuordnen
- Inhalte langfristig aktuell halten

Bei mehreren Standorten oder unterschiedlichen Terminarten achten wir auf eine klare Zuordnung. Vorhandene Terminlösungen binden wir nach Prüfung ein. Bei Bedarf ergänzen wir die Betreuung Ihrer Telefonanlage.

#### Aus der Praxis

Digital Avenue arbeitet bereits mit Praxen aus Pneumologie und Dialyse zusammen.

#### Lassen Sie uns Ihre Aufgaben besprechen

Gehen wir gemeinsam einen typischen Weg vom ersten Kontakt bis zum Termin durch und klären, wo wir Sie unterstützen können.

**Button:** Gespräch anfragen

### K5 – /branchen/arztpraxen/psychotherapie/

**Meta-Titel:** Praxisbetreuung für Psychotherapie | Digital Avenue

**Meta-Beschreibung:** Persönliche technische und inhaltliche Betreuung für psychotherapeutische und psychiatrische Praxen.

**Eyebrow:** Digital Avenue für Praxen und MVZ

## Ihre Praxiswebsite in verlässlichen Händen.

Persönliche technische und inhaltliche Betreuung für psychotherapeutische und psychiatrische Praxen.

Wir betreuen Ihre WordPress-Website technisch und inhaltlich. Sie erreichen uns per E-Mail oder Telefon und teilen uns mit, was sich ändern soll. Vereinbarte Folgeschritte, etwa die Rücknahme eines Abwesenheitshinweises, erledigen wir mit.

**Button:** Betreuung besprechen

#### Das übernehmen wir für Sie

- Kontaktzeiten und Erstkontakt erklären
- Abwesenheiten zuverlässig pflegen
- Technische Websitebetreuung übernehmen

Gemeinsam stellen wir klar dar, wie Interessierte Kontakt aufnehmen können und welche Informationen sie vorher benötigen. Der Betreuungsumfang richtet sich nach Ihrer Praxis. Auf Wunsch prüfen wir auch Ihre Telefonie.

#### Aus der Praxis

Als Digital Avenue betreuen wir medizinische Praxen langfristig und persönlich.

#### Lassen Sie uns Ihre Aufgaben besprechen

Lassen Sie uns kurz besprechen, welche Websiteaufgaben Sie künftig abgeben möchten.

**Button:** Gespräch anfragen

### K6 – /branchen/arztpraxen/medizinische-einrichtungen/

**Meta-Titel:** Kommunikation für medizinische Einrichtungen | Digital Avenue

**Meta-Beschreibung:** Websitepflege, Ansprechpartner und Arbeitgeberdarstellung für medizinische Einrichtungen.

**Eyebrow:** Digital Avenue für Praxen und MVZ

## Verlässliche Kommunikation für Ihre Einrichtung.

Websitepflege, Ansprechpartner und Arbeitgeberdarstellung für medizinische Einrichtungen.

Digital Avenue baut oder übernimmt Ihre WordPress-Website und betreut Inhalte, technische Wartung und vereinbarte Aktualisierungen. Wir strukturieren Informationen nach ihren Zielgruppen und stimmen die Zuständigkeiten mit Ihnen ab.

**Button:** Betreuung besprechen

#### Das übernehmen wir für Sie

- Informationen für Zuweiser ordnen
- Karriereinhalte betreuen
- Standorte und Kontakte aktuell halten

Bei Bedarf ergänzen wir Karriereseiten, Google Business und die Betreuung Ihrer Cloud-Telefonie. In einem ersten Gespräch klären wir, welche Bereiche Ihre Einrichtung selbst beauftragen kann und wo weitere Verantwortliche eingebunden werden müssen.

#### Aus der Praxis

Unsere Betreuung verbindet Web, Inhalte und Kommunikation in einer festen Zusammenarbeit.

#### Lassen Sie uns Ihre Aufgaben besprechen

Besprechen wir, welche Kommunikationsaufgaben Sie dauerhaft an einen festen Ansprechpartner abgeben möchten.

**Button:** Gespräch anfragen

### K7 – /branchen/arztpraxen/praxisstart/

**Meta-Titel:** Praxisstart und Übernahme | Digital Avenue

**Meta-Beschreibung:** Gestaltung, Website und Telefonie für Praxisgründung, Übernahme und Modernisierung – anschließend persönlich betreut.

**Eyebrow:** Digital Avenue für Praxen und MVZ

## Ihr Praxisauftritt passt zusammen.

Gestaltung, Website und Telefonie für Praxisgründung, Übernahme und Modernisierung – anschließend persönlich betreut.

Digital Avenue begleitet Ihren Praxisauftritt von der Gestaltung bis zur digitalen Umsetzung. Wir entwickeln oder übernehmen Ihre Website, gestalten die vereinbarten Praxismaterialien und richten Ihre Placetel-Telefonie nach Bedarf ein.

**Button:** Betreuung besprechen

#### Das übernehmen wir für Sie

- Logo und Praxismaterialien gestalten
- Website und Telefonie koordinieren
- Nach dem Start weiter betreuen

Doctolib vermitteln wir und binden es nach Abschluss in die Website sowie, wenn gebucht, in die Telefonanlage ein. Anschließend betreuen wir die vereinbarten digitalen Leistungen langfristig. Einmalige Projekte, Produktion und laufende Betreuung weisen wir getrennt aus.

#### Aus der Praxis

Für Pneumologie Eppendorf haben wir neben der Website auch Leistungen rund um den Praxisauftritt umgesetzt.

#### Lassen Sie uns Ihre Aufgaben besprechen

Lassen Sie uns Ihren Zeitplan und die benötigten Bausteine gemeinsam ordnen.

**Button:** Gespräch anfragen

### K8 – /branchen/arztpraxen/recruiting/

**Meta-Titel:** Recruiting unterstützen | Digital Avenue

**Meta-Beschreibung:** Karriereseiten, Stellenanzeigen und Bewerbungswege, die wir mit Ihnen entwickeln und aktuell halten.

**Eyebrow:** Digital Avenue für Praxen und MVZ

## Ihre Praxis als Arbeitsplatz sichtbar machen.

Karriereseiten, Stellenanzeigen und Bewerbungswege, die wir mit Ihnen entwickeln und aktuell halten.

Wir gestalten und betreuen Ihre Karriereseite, bringen Stellenangebote verständlich auf den Punkt und sorgen für einen einfachen Bewerbungsweg. Auf Wunsch ergänzen wir passende Druckmaterialien oder eine gesondert geplante Anzeigenkampagne.

**Button:** Betreuung besprechen

#### Das übernehmen wir für Sie

- Arbeitsplatz konkret darstellen
- Bewerbungswege vereinfachen
- Stelleninformationen aktuell halten

Sie liefern die tatsächlichen Rahmenbedingungen und geben die Inhalte frei. Wir kümmern uns um Darstellung und Pflege – einschließlich der Aktualisierung oder Entfernung, wenn eine Stelle besetzt ist.

#### Aus der Praxis

Auf der Website unseres Referenzkunden Pneumologie Eppendorf ist auch ein Stellenangebot eingebunden.

#### Lassen Sie uns Ihre Aufgaben besprechen

Lassen Sie uns ansehen, wie Sie Ihre offene Stelle und Ihre Praxis als Arbeitsplatz präsentieren möchten.

**Button:** Gespräch anfragen

### K9 – /branchen/arztpraxen/betreuung-wechseln/

**Meta-Titel:** Betreuung wechseln – Website und Telefonie | Digital Avenue

**Meta-Beschreibung:** Bestehende Website oder Placetel-Telefonie prüfen, Betreuung übernehmen und Änderungen zuverlässig erledigen.

**Eyebrow:** Digital Avenue für Praxen und MVZ

## Ein fester Ansprechpartner für Ihre digitale Praxis.

Bestehende Website oder Placetel-Telefonie prüfen, Betreuung übernehmen und Änderungen zuverlässig erledigen.

Wir prüfen Ihre bestehende WordPress-Website und übernehmen sie bei technischer Eignung in die laufende Betreuung. Bei einer vorhandenen Placetel-Anlage klären wir ebenso, welche Aufgaben wir übernehmen können. Einen notwendigen Neuaufbau oder Systemwechsel bieten wir gesondert an.

**Button:** Betreuung besprechen

#### Das übernehmen wir für Sie

- Vorhandene Systeme prüfen
- Übernahme transparent anbieten
- Änderungen und Folgeschritte betreuen

Änderungswünsche erreichen uns per E-Mail oder Telefon. Wir setzen die vereinbarten Aufgaben um und denken an Folgeschritte. Ihr Hostingvertrag kann dabei direkt bei Ihnen bleiben; bei IONOS betreuen wir die Technik über den freigegebenen Agenturzugriff.

#### Aus der Praxis

Langfristige persönliche Betreuung ist bereits die Grundlage unserer Zusammenarbeit mit medizinischen Praxen.

#### Lassen Sie uns Ihre Aufgaben besprechen

Besprechen wir kurz, welche Systeme Sie einsetzen und welche Betreuung Sie sich wünschen.

**Button:** Gespräch anfragen

### Gemeinsame Module unter jeder Variante

#### Persönlich erreichbar. Vorausschauend betreut.

Sie schicken uns Ihren Änderungswunsch per E-Mail oder rufen an. Wir melden uns in der vertraglich vereinbarten Reaktionszeit, während unserer Servicezeiten montags bis freitags von 08:00 bis 18:00 Uhr, ausgenommen gesetzliche Feiertage. Den Zeitpunkt der Umsetzung stimmen wir nach Aufwand und Dringlichkeit ab.

Zu unserer Betreuung gehören auch vereinbarte Folgeschritte. Ein Urlaubshinweis wird nach Ihrer Rückkehr wieder entfernt. Sie müssen uns daran nicht erneut erinnern.

#### So beginnt die Zusammenarbeit

1. Wir besprechen Ihre Wünsche und prüfen die vorhandenen Systeme.
2. Sie erhalten ein Angebot für Einrichtung oder Übernahme und den passenden laufenden Betreuungsumfang.
3. Wir setzen die vereinbarten Arbeiten um und bleiben Ihr Ansprechpartner.

#### Verschiedene Lösungen. Ein Ansprechpartner für die vereinbarte Betreuung.

**IONOS:** Ihr Hostingvertrag bleibt bei Ihnen. Über den von Ihnen freigegebenen Agenturzugriff übernehmen wir die technischen Aufgaben.

**Doctolib:** Wir vermitteln die Lösung und binden sie nach Vertragsabschluss in Ihre Website sowie, wenn gebucht, in Ihre Telefonanlage ein.

**Placetel:** Wir richten Ihre Cloud-Telefonanlage ein oder übernehmen nach Prüfung die Betreuung einer bestehenden Anlage.

#### Häufige Fragen

**Muss meine Website neu gebaut werden?**
Nicht unbedingt. Wir prüfen Ihre WordPress-Website und bieten bei Eignung die Übernahme an. Notwendige Vorarbeiten werden vorab beschrieben.

**Was kostet die Betreuung?**
Sie erhalten einen festen monatlichen Preis für den vereinbarten Umfang. Einrichtung, größere Zusatzarbeiten und Fremdkosten werden getrennt ausgewiesen. Wir klären zuerst, welche Aufgaben tatsächlich zu Ihrer Praxis passen.

**Ist mit der Rückmeldung schon alles erledigt?**
Die vertraglich vereinbarte Reaktionszeit betrifft unsere persönliche Rückmeldung während der Servicezeiten. Die Umsetzung hängt von Dringlichkeit, Umfang und gegebenenfalls weiteren Anbietern ab.

**Kann ich auch Logo, Drucksachen oder Praxisschilder beauftragen?**
Ja. Gestaltung und Produktion bieten wir passend zum Projekt separat an und stimmen sie mit Ihrem digitalen Auftritt ab.

**Wer liefert die fachlichen Inhalte?**
Fachliche Angaben und medizinische Hinweise werden von Ihrer Praxis geprüft und freigegeben. Wir unterstützen bei der verständlichen Darstellung und Pflege.

#### Kontaktformular

Überschrift: „Welche Aufgabe möchten Sie abgeben?“
Felder: Praxis/Einrichtung, Name, geschäftliche E-Mail oder Rückrufnummer, gewünschtes Thema, kurze Nachricht. Nur notwendige Felder verpflichtend; keine Patientendaten anfordern. Sichtbarer Hinweis: „Bitte übermitteln Sie hier keine Patienten- oder Gesundheitsdaten.“ Datenschutzinformation verlinken. Eine optionale Marketingeinwilligung ist getrennt und nicht vorausgewählt; die Beratungsanfrage funktioniert ohne Newsletteranmeldung.

Bestätigung: „Vielen Dank. Ihre Anfrage ist angekommen. Wir melden uns während unserer Servicezeiten persönlich bei Ihnen.“

#### Gestaltung und Messung

Bestehendes Digital-Avenue-Design: Manrope, Teal #305b75, dunkles Teal #1b3a4a, Sand #d7c9aa, Plum #42253b. Reale freigegebene Arbeitsbeispiele verwenden; keine erfundenen Screenshots oder Testimonials. Die 5-Sterne-Bewertung erst nach Abgleich mit dem Original einbauen. Mobile Kontaktwege testen. Formularabsendung, angefragtes Thema und tatsächliche Beratungen erfassen. Keine personenbezogenen Daten in Tracking-URLs. Gesetzlich erforderliche Einwilligung für eingesetztes Tracking berücksichtigen; keine Trackinginstallation Bestandteil dieser Lieferung.


---

# Branchenseite Heilberufe: Konzept und Texte

Quelle: `handoff/branchen/heilberufe.md`

## Branchenseite Heilberufe: Konzept und Texte

Stand: 17.09.2026 (aus dem Claude-Chat übernommen). URL: `/branchen/heilberufe/`
(im Footer bereits verlinkt, Spalte „Branchen“, Template 54). Öffentliche
Branchenseite, keine Kampagnen-Landingpage; sie darf in Navigation und Footer
stehen.

### 1. Konzept

#### Zielgruppe

Inhaberinnen und Inhaber von Praxen der nicht-ärztlichen Heilberufe:
Physiotherapie, Ergotherapie, Logopädie, Podologie, Osteopathie,
Heilpraktik, Hebammenpraxen, Ernährungsberatung und vergleichbare
Einrichtungen. Ein bis wenige Standorte, meist ohne eigene Verwaltung,
häufig mit Selbstzahlerangeboten neben Kassenleistungen.

Abgrenzung zu Arztpraxen: Arztpraxen sind in der Regel ausgelastet; dort
ist Entlastung das Thema (Kampagne K1–K9 unter `/branchen/arztpraxen/`). Bei
Heilberufen entscheiden Auffindbarkeit und ein einfacher Weg zum ersten
Termin darüber, ob neue Klientinnen und Klienten kommen. Werbung, SEO und
Google Business tragen deshalb mehr Gewicht, der Digital-Concierge bleibt
als Betreuungsversprechen darunter.

Psychotherapie bleibt bei den Arztpraxen (K5). Heilpraktik für
Psychotherapie gehört zu dieser Seite.

#### Kernaussage

Drei Kernelemente, in dieser Reihenfolge auf der Seite:

1. **Gefunden werden.** Leistungsseiten, lokale Suche, Google Business
   Profil, optional Anzeigen.
2. **Termin buchen.** Online-Terminbuchung direkt auf der Website, rund
   um die Uhr, ohne Rückruf-Schleife.
3. **Informiert ankommen.** Die Praxis erklärt sich verständlich: Leistungen,
   Ablauf, Kosten und Kassenfragen, Ansprechpartner, Anfahrt.

Darunter wie auf allen Zielgruppenseiten: Betreuung (Concierge), Recruiting
als viertes Thema, Digital-Check als Einstieg, Referenzen, FAQ, Kontakt.

#### Seitenaufbau (Reihenfolge der Sections)

| Nr. | Section | Component / Klasse (Bricks) | Inhalt |
|---|---|---|---|
| 1 | Hero | Hero Landingpage `951227` | Eyebrow, H1, Subline, Primärbutton „Digital-Check anfragen“, Ghost-Button „Leistungen ansehen“ (#leistungen), Foto mit Buchungs-Karte |
| 2 | Kennen Sie das? | Abschnittskopf + `checks`-Liste | Drei Alltagssituationen |
| 3 | Leistungen `#leistungen` | Drei Feature-Blöcke `25cc6c` im Wechsel Bild/Text | Gefunden werden, Termin buchen, Informiert ankommen |
| 4 | Terminbuchung im Detail | Eigener Abschnitt mit Service-Karte | Was das Buchungstool tut, ohne Funktionsversprechen über den Stand hinaus |
| 5 | Betreuung | Concierge `0a205a` | Serviceversprechen aus dem Parameter-Plugin |
| 6 | Recruiting | Feature-Block | Karriereseite, Stellen als Google Jobs, Bewerbung vom Handy |
| 7 | Referenzen | Referenzkarten `cbca1c` | Platzhalter, siehe Abschnitt 4 |
| 8 | Digital-Check | Digital-Check-Block | Bestehender Block, Punkte für Heilberufe angepasst |
| 9 | FAQ | `faq`-Accordion | Neun Fragen |
| 10 | Kontakt | wie Kampagnenseiten, eigenes Formular | Direktkontakt und Formular |

#### Bilder (Higgsfield, Soul 2.0, Editorial-Look)

Stil wie auf den übrigen Seiten: ruhige, entlastete Menschen, natürliches
Licht, gedämpfte Farben. Keine Behandlungsszenen mit erkennbaren
medizinischen Handlungen, keine Klientinnen und Klienten in verletzlichen
Situationen.

- Hero: Praxisinhaberin am Empfang einer hellen Therapiepraxis, blickt
  entspannt auf ihr Tablet; im Hintergrund ein Behandlungsraum mit Liege,
  unscharf.
- Feature „Gefunden werden“: Person auf dem Smartphone, Blick auf eine
  Kartenansicht, Straßencafé oder Wohnzimmer.
- Feature „Termin buchen“: Nahaufnahme Hände am Smartphone, im Hintergrund
  ein Praxisempfang.
- Feature „Informiert ankommen“: Klientin im Wartebereich, entspannt,
  mit Unterlagen.
- Recruiting: junges Team einer Praxis im Gespräch im Pausenraum.

Service-Karte im Hero: „Neuer Termin, Dienstag 14:30 Uhr. Bestätigung ist
raus.“ Die Karte zeigt eine typische Buchung, keine Statistik.

### 2. Texte

#### Meta

**Meta-Titel:** Website und Online-Terminbuchung für Heilberufe | Digital Avenue

**Meta-Beschreibung:** Praxiswebsite, Online-Terminbuchung und Sichtbarkeit
für Physiotherapie, Ergotherapie, Logopädie, Heilpraktik und weitere
Heilberufe in Hamburg und Rostock. Mit persönlicher Betreuung.

#### Hero

**Eyebrow:** Für Physiotherapie, Ergotherapie, Logopädie, Heilpraktik und weitere Heilberufe

## Neue Klientinnen und Klienten finden Sie online. Und buchen ihren ersten Termin gleich mit.

Website, Online-Terminbuchung und lokale Sichtbarkeit für Ihre Praxis, mit
persönlicher Betreuung aus Hamburg und Rostock.

**Button 1:** Digital-Check anfragen
**Button 2:** Leistungen ansehen

**Vertrauenszeile:** Website, Terminbuchung, Google Business Profil und
Telefonie aus einer Hand.

#### Kennen Sie das?

- Ihre Praxis ist gut, aber wer Sie nicht kennt, findet Sie bei Google auf
  Seite zwei.
- Termine kommen per Telefon, Mailbox, E-Mail und WhatsApp herein, und
  zwischen zwei Behandlungen bleibt keine Zeit zum Zurückrufen.
- Ihre Website erklärt nicht, was Sie anbieten, was es kostet und wie der
  erste Termin abläuft. Also fragen alle dasselbe am Telefon.

#### Leistungen

Eyebrow: Unsere Leistungen für Heilberufe
H2: Gefunden werden, Termin buchen, informiert ankommen.
Copy: Drei Aufgaben, die über neue Klientinnen und Klienten entscheiden.
Wir übernehmen sie zusammen, damit sie ineinandergreifen.

##### Feature 1: Gefunden werden

Eyebrow: Sichtbarkeit
H3: Gefunden werden, wenn jemand in Ihrer Nähe sucht.

Wer eine Physiotherapie, eine Logopädin oder einen Heilpraktiker sucht,
sucht meist lokal und mit einem konkreten Anliegen. Wir bauen Ihre
Leistungsseiten so, dass sie diese Suchanfragen beantworten, pflegen Ihr
Google Business Profil und richten auf Wunsch Anzeigen ein, wenn eine
Leistung schneller bekannt werden soll.

- Eine Seite je Leistung mit den Begriffen, nach denen gesucht wird
- Google Business Profil: Öffnungszeiten, Leistungen, Fotos, Beiträge
- Lokale Suchmaschinenoptimierung für Hamburg, Rostock oder Ihren Standort
- Anzeigen bei Google nur mit klarem Ziel und eigenem Budget

Textlink: So arbeiten wir bei der Sichtbarkeit

##### Feature 2: Termin buchen

Eyebrow: Online-Terminbuchung
H3: Der erste Termin ist drei Klicks entfernt.

Neue Klientinnen und Klienten möchten buchen, wenn sie gerade suchen,
oft abends oder am Wochenende. Mit unserer Online-Terminbuchung wählen
sie Leistung, Termin und Behandlerin oder Behandler direkt auf Ihrer
Website. Sie sehen die Buchung in Ihrem Kalender, die Bestätigung geht
automatisch raus.

- Freie Termine direkt auf Ihrer Website, rund um die Uhr
- Buchung nach Leistung, Dauer und Behandlerin oder Behandler
- Bestätigung und Erinnerung per E-Mail, Absagen laufen über das System
- Serientermine und Warteliste für ausgebuchte Zeiten
- Termin in der Praxis oder, wenn Sie es anbieten, als Hausbesuch
- Betrieb, Pflege und Anpassungen übernehmen wir

Textlink: Mehr zur Online-Terminbuchung

##### Feature 3: Informiert ankommen

Eyebrow: Praxiswebsite
H3: Ihre Praxis erklärt sich selbst.

Eine gute Praxiswebsite beantwortet die Fragen, die sonst am Telefon
landen: Welche Leistungen gibt es, für wen, was kostet es, was zahlt die
Kasse, wie läuft der erste Termin ab, wer behandelt, wie komme ich hin.
Wir bauen oder übernehmen Ihre WordPress-Website, schreiben mit Ihnen
verständliche Texte und halten sie aktuell.

- Leistungen, Ablauf und Kosten verständlich dargestellt
- Team, Räume und Anfahrt so, dass sich Klientinnen und Klienten
  wiederfinden
- Verordnung, Privatleistung, Selbstzahler: Wege klar getrennt
- Änderungen melden Sie uns, wir setzen sie um

Textlink: Website bauen oder übernehmen

#### Online-Terminbuchung im Detail

Eyebrow: Terminbuchung
H2: Termine annehmen, ohne ans Telefon zu gehen.

Unsere Online-Terminbuchung ist ein Baustein Ihrer Website, kein fremdes
Portal. Klientinnen und Klienten bleiben auf Ihrer Seite, sehen Ihre
freien Termine und buchen in Ihrem Design. Sie entscheiden, welche
Leistungen online buchbar sind, wie lang ein Termin dauert und wie viel
Vorlauf Sie brauchen.

Nach der Buchung erhalten beide Seiten eine Bestätigung mit
Kalendereintrag, vor dem Termin eine Erinnerung. Sagt jemand ab, wird der
Termin im Kalender aktualisiert und der freie Platz kann an die Warteliste
gehen. Wiederkehrende Behandlungen buchen Ihre Klientinnen und Klienten als
Serie. Bieten Sie Hausbesuche an, lässt sich der Ort mit auswählen. Die
Pflichtangaben für Online-Buchungen sind eingebaut, bezahlt wird wie
gewohnt in der Praxis.

Zum Datenschutz: Gebucht wird mit Kontaktdaten und Termin. Da die gewählte
Behandlung und ein Kommentar Rückschlüsse auf die Gesundheit zulassen
können, holt das Buchungsformular dafür die ausdrückliche Einwilligung ein.
Alles Weitere bespricht die Praxis im Termin.

Buchungs-Karte:
- Leistung: Erstbefund Physiotherapie, 40 Minuten
- Dienstag, 14:30 Uhr, bei Frau M.
- Bestätigung an beide Seiten, Termin im Kalender

Button: Terminbuchung im Digital-Check ansehen

#### Betreuung (Concierge)

Eyebrow: Persönlich betreut
H2: Ein Anruf genügt. Den Rest übernehmen wir.

Ändern sich Ihre Öffnungszeiten, kommt eine neue Leistung dazu oder fehlt
eine Kollegin für zwei Wochen: Sie melden es uns per Telefon oder E-Mail.
Wir aktualisieren Website, Google Business Profil, Terminbuchung und, wenn
vereinbart, Ihre Telefonansage und nehmen die Änderung zum abgesprochenen
Zeitpunkt wieder zurück.

{Serviceversprechen aus dem Parameter-Plugin: Rückmeldung innerhalb einer
Stunde, Montag bis Freitag 08:00 bis 18:00 Uhr, ausgenommen gesetzliche
Feiertage.}

Timeline-Punkte:
1. Sie melden die Änderung.
2. Wir melden uns in der vereinbarten Reaktionszeit während der Servicezeiten und
   stimmen die Umsetzung ab.
3. Wir setzen um und nehmen vereinbarte Folgeschritte ohne neue Erinnerung
   vor.

#### Recruiting

Eyebrow: Recruiting
H3: Neue Kolleginnen und Kollegen finden Sie dort, wo sie suchen.

Fachkräfte für Therapie und Heilpraktik suchen mobil und über die
Google-Jobsuche. Wir bauen Ihre Karriereseite mit Stellenanzeigen, die
dort erscheinen, und einem Bewerbungsweg, der vom Handy in zwei Minuten
funktioniert. Ihre Praxis zeigt sich als Arbeitsplatz, nicht nur als
Adresse.

- Karriereseite mit Team, Arbeitsweise und Konditionen
- Stellenanzeigen als Google Jobs
- Bewerbung ohne Lebenslauf-Upload-Hürde

Textlink: Recruiting für Praxen

#### Referenzen

Eyebrow: Aus unserer Arbeit
H2: Praxen, die wir betreuen.

Referenzkarten: Platzhalter `[REFERENZ HEILBERUFE]`. Bis eine Referenz aus
den Heilberufen freigegeben ist, zeigt die Seite die freigegebenen
Praxisreferenzen mit dem Hinweis auf vergleichbare Aufgaben (Terminwege,
Patienteninformation, Recruiting).

#### Digital-Check

Eyebrow: Kostenloser Einstieg
H2: Der Digital-Check für Ihre Praxis.

Wir sehen uns an, wie Ihre Praxis heute gefunden wird und wie leicht der
Weg zum ersten Termin ist. Sie bekommen eine kurze, verständliche
Einschätzung, keine Verkaufspräsentation.

- Auffindbarkeit bei Google und im Google Business Profil
- Website: Leistungen, Kosten, Ablauf, Kontaktwege
- Terminweg: Telefon, Formular, Online-Buchung
- Telefonie: Erreichbarkeit und Ansagen
- Karriereseite und Stellenanzeigen

Button: Digital-Check anfragen

#### Häufige Fragen

**Passt die Online-Terminbuchung zu meiner Praxis?**
Sie passt zu jeder Praxis, die feste Terminlängen und planbare Kapazitäten
hat. Welche Leistungen online buchbar sind und wie viel Vorlauf Sie
brauchen, legen Sie fest. Wir richten das gemeinsam ein.

**Welche Daten gibt jemand bei der Online-Buchung an?**
Name, Kontaktdaten und den gewünschten Termin. Die Auswahl der Behandlung
und ein optionales Kommentarfeld können Rückschlüsse auf die Gesundheit
zulassen; dafür holt das Formular eine ausdrückliche Einwilligung ein.
Bezahlt wird in der Praxis, Zahlungsdaten werden nicht erhoben.

**Erinnert das System an Termine?**
Ja. Klientinnen und Klienten erhalten eine Bestätigung und vor dem Termin
eine Erinnerung. Wird ein Termin abgesagt, kann der Platz an die
Warteliste gehen. Serientermine lassen sich in einem Schritt buchen.

**Was ist mit Verordnungen und Kassenleistungen?**
Die Website trennt Kassenleistung, Privatleistung und Selbstzahlerangebot
verständlich. Welche Angaben zur Verordnung Sie bei der Buchung oder erst
im Termin abfragen, entscheiden Sie. Fachliche und abrechnungsrelevante
Aussagen kommen von Ihrer Praxis.

**Muss meine Website neu gebaut werden?**
Nicht unbedingt. Wir prüfen Ihre WordPress-Website und bieten bei Eignung
die Übernahme an. Notwendige Vorarbeiten beschreiben wir vorab.

**Brauche ich Anzeigen, um gefunden zu werden?**
Meist reichen gute Leistungsseiten und ein gepflegtes Google Business
Profil für die lokale Suche. Anzeigen empfehlen wir, wenn eine Leistung
schnell bekannt werden soll oder der Wettbewerb am Standort groß ist. Das
Werbebudget bleibt getrennt und bei Ihnen.

**Was kostet die Betreuung?**
Sie erhalten einen festen monatlichen Preis für den vereinbarten Umfang.
Einrichtung, größere Zusatzarbeiten und Fremdkosten werden getrennt
ausgewiesen. Wir klären zuerst, welche Aufgaben tatsächlich zu Ihrer Praxis
passen.

**Ist mit der Rückmeldung schon alles erledigt?**
Die Zusage betrifft unsere persönliche Rückmeldung während der
Servicezeiten. Die Umsetzung hängt von Dringlichkeit, Umfang und
gegebenenfalls weiteren Anbietern ab.

**Wer schreibt die Texte?**
Wir. Sie liefern die fachlichen Angaben und geben frei. Wir sorgen dafür,
dass Klientinnen und Klienten verstehen, was Sie anbieten und wie sie zu
Ihnen kommen.

#### Kontakt

Eyebrow: Kontakt
H2: Lassen Sie uns über Ihre Praxis sprechen.

In einem kurzen Gespräch sehen wir uns an, wie Ihre Praxis gefunden wird
und wie der Weg zum ersten Termin heute aussieht. Danach wissen Sie, was
sich lohnt und was nicht.

Direktkontakt: {Telefon und E-Mail aus dem Parameter-Plugin}

Formular-Überschrift: Was möchten Sie verbessern?
Themen (Select): Sichtbarkeit und Google, Online-Terminbuchung,
Praxiswebsite, Telefonie, Recruiting, Sonstiges.
Hinweis unter dem Formular: „Bitte übermitteln Sie hier keine Klienten-
oder Gesundheitsdaten.“
Bestätigung: „Vielen Dank. Ihre Anfrage ist angekommen. Wir melden uns
während unserer Servicezeiten persönlich bei Ihnen.“

### 3. SEO

Hauptbegriffe (vor dem Launch mit Keyword-Planer und Search Console
prüfen): „Website Physiotherapie“, „Praxiswebsite Heilpraktiker“,
„Online-Terminbuchung Praxis“, „Website Logopädie“, „Physiotherapie Website
erstellen lassen“, „Google Business Profil Praxis“. Regionale Ergänzung
Hamburg und Rostock in Meta-Beschreibung und Textkörper, nicht im Title.

Die Seite bleibt eine Branchenseite; keine Duplikate je Fachrichtung oder
Stadt. Wenn einzelne Heilberufe eigene Seiten bekommen sollen, dann als
Leistungsseiten mit eigenem Inhalt unter `/leistungen/` oder als
Kampagnen-Landingpages nach dem Muster `/branchen/arztpraxen/`.

### 4. Offene Punkte und Entscheidungen für Nils

1. **Name des Buchungstools auf der Website.** Im Text steht „unsere
   Online-Terminbuchung“. Soll das Produkt einen Namen tragen? Dann Hero,
   Feature 2 und FAQ anpassen.
2. **Buchungstool, Stand 17.09.2026 (Nils).** Neuentwicklung/Anpassung
   ausgehend von FieldBook, aber für Termine in der Praxis; externe Termine
   (Hausbesuch) sind eine Option. Bestätigt: Buchung nach Leistung, Dauer
   und Behandler, Bestätigung und Erinnerung, Absage, Warteliste,
   Serientermine, Ortswahl Praxis/Hausbesuch. Keine Zahlung. Die Texte
   beschreiben genau diesen Umfang; die Seite geht erst live, wenn das Tool
   so funktioniert oder die Sätze zu offenen Funktionen entfernt sind.
3. **Datenschutz der Terminbuchung.** Speicherort der Buchungsdaten und
   Auftragsverarbeitung noch klären, bevor eine Aussage dazu auf die Seite
   kommt.
4. **Referenz aus den Heilberufen.** Keine vorhanden. Bis dahin Pneumologie
   Eppendorf, Lungenpraxis am Tibarg und Dialyse Güstrow mit Bezug auf
   Terminwege und Recruiting.
5. **Doctolib.** Bewusst nicht auf dieser Seite. Wenn Doctolib für
   Heilberufe ebenfalls vermittelt werden soll, ein Satz in den FAQ.
6. **Placetel-Telefonie.** Nur in Vertrauenszeile, Digital-Check und
   Concierge erwähnt.
7. **Hero-Variante.** Umgesetzt mit Hero Landingpage (`951227`), Foto und
   Buchungs-Karte als Overlay.

### 5. Umsetzung

Zuerst Prototyp (`prototype/src/pages/heilberufe.html`), dann Bricks.
Bilder über `prototype/img/sources.json` nachladen (m40–m44). Footer-Link
`/branchen/heilberufe/` besteht bereits; der Prototyp verweist auf
`heilberufe.html`.


---

# Partnerseiten: Konzept und Texte

Quelle: `handoff/partner/partnerseiten.md`

## Partnerseiten: Konzept und Texte

Stand 09.10.2026. Auftrag von Nils: eigene Seiten für die Partner Placetel,
Doctolib, IONOS und Netleaders. Die Texte hier sind die Quelle für Prototyp
(`prototype/src/pages/partner*.html`) und Bricks.

### Entscheidungen und Annahmen

- **Adressen:** Übersicht `/partner/`, Einzelseiten `/partner/placetel/`,
  `/partner/doctolib/`, `/partner/ionos/`, `/partner/netleaders/`.
- **Verlinkung:** nicht im Hauptmenü. Footer-Spalte Leistungen bekommt den
  Link „Partner“, die Partnerzeile der Startseite verlinkt die Einzelseiten,
  jede Partnerseite verlinkt die drei anderen.
- **Seiten statt Post-Typ:** vier Einträge, die sich selten ändern. Alle
  vier haben denselben Aufbau aus vorhandenen Components; neue Partner
  entstehen durch Duplizieren einer Partnerseite.
- **Aussagen nach Kampagnenkonzept:** Partner werden über ihre konkrete
  Aufgabe vorgestellt. Doctolib wird vermittelt und eingebunden, die
  Verwaltung des Doctolib-Kontos übernehmen wir nicht. Eine Doctolib-
  Telefonanbindung wird je Auftrag geklärt. Hosting bleibt im Vertrag des
  Kunden. Providerkosten werden gesondert ausgewiesen.
- **Keine Partnerlogos** ohne Freigabe der Partner. Die Seiten nennen die
  Namen als Text, wie die Partnerzeile der Startseite.
- **Zu prüfen durch Nils:**
  - Partnerstatus bei Placetel und Doctolib: Dürfen wir „Partner“ sagen,
    und gibt es eine offizielle Bezeichnung? (Briefing: Placetel-Status prüfen.)
  - Netleaders: Leistungsumfang, Vertragsmodell und Abgrenzung zu IONOS.
    Die Seite nimmt an, dass Netleaders für höhere Anforderungen an Leistung
    und Sicherheit eingesetzt wird. Sichtbare Platzhalter markieren die Stellen.
  - IONOS-Agenturzugang: Beschreibung entspricht dem Kampagnenkonzept.
  - Die Zahlen in den Service-Karten (etwa „Elf Termine online“) sind
    Beispiele wie auf den Kampagnenseiten, keine Kundendaten.

### Aufbau jeder Partnerseite

1. Hero Landingpage: Eyebrow, H1 mit Betonung, Lead, Buttons (Digital-Check, „Was wir übernehmen“), Vertrauenszeile, Foto mit Service-Karte
2. `#leistungen` (bg-alt): Abschnittskopf und Feature-Block mit fünf Service-Punkten
3. `#zustaendigkeiten`: Zwei Spalten, links Text, rechts Service-Karte (Sand) „Wer macht was“
4. `#ablauf` (bg-alt): drei Schritte
5. Digital-Check-Block
6. `#faq` (bg-alt): Accordion mit FAQ-Schema
7. `#weitere-partner`: drei Kacheln mit Links auf die anderen Partnerseiten

### Übersicht `/partner/`

- Title: Unsere Partner: Placetel, Doctolib, IONOS, Netleaders | Digital Avenue
- Description: Telefonie, Terminbuchung, Hosting und Infrastruktur von spezialisierten Partnern, eingerichtet und betreut von Digital Avenue aus Hamburg und Rostock.
- Eyebrow: Partner
- H1: Partner, die ihr Fach beherrschen. **Wir verbinden sie für Sie.**
- Lead: Wir hosten nicht selbst und bauen keine Telefonanlagen. Dafür arbeiten wir mit Anbietern, die Rechenzentren, Leitungen und Kalender rund um die Uhr betreiben. Unsere Aufgabe: alles einrichten, verbinden und betreuen, damit Sie einen Ansprechpartner haben.

- Kachel cream: **Placetel** (Telefonie): Cloud-Telefonanlage, eingerichtet oder übernommen und laufend betreut. Link „Mehr zu Placetel“ auf `/partner/placetel/`
- Kachel teal: **Doctolib** (Terminbuchung): Online-Terminbuchung, vermittelt und in Website, Google-Profil und Ansage eingebunden. Link „Mehr zu Doctolib“ auf `/partner/doctolib/`
- Kachel sand: **IONOS** (Hosting und E-Mail): Hosting im eigenen Vertrag, technisch betreut über den Agenturzugang. Link „Mehr zu IONOS“ auf `/partner/ionos/`
- Kachel deep: **Netleaders** (Server und Infrastruktur): Infrastruktur für höhere Anforderungen an Leistung und Sicherheit. Link „Mehr zu Netleaders“ auf `/partner/netleaders/`
- Danach Digital-Check-Block.

### Placetel `/partner/placetel/`

- Title: Placetel Cloud-Telefonanlage einrichten und betreuen | Digital Avenue
- Description: Wir richten Ihre Placetel-Cloud-Telefonanlage ein oder übernehmen die Betreuung einer bestehenden Anlage. Für Praxen, Kanzleien und Mittelstand in Hamburg und Rostock.

**Hero.** Eyebrow: Partner · Placetel Cloud-Telefonie. H1: Telefonie, die mitdenkt. **Eingerichtet und betreut von uns.**

Lead: Placetel ist eine Telefonanlage aus der Cloud: keine Technik im Keller, Ihre Rufnummern bleiben, telefoniert wird am Tischtelefon, am Laptop oder unterwegs. Wir richten sie für Sie ein, stimmen sie mit Website und Google-Profil ab und stellen um, wenn sich etwas ändert.

Vertrauenszeile: Rufnummern bleiben erhalten · Bestehende Anlagen nach Prüfung übernommen · Urlaubsansagen ohne Ihr Zutun

Bild: `m45-telefonie-empfang-headset` (Eine Empfangsmitarbeiterin telefoniert lächelnd mit einem schmalen Headset am hellen Praxisempfang.). Service-Karte: Ansage für den Urlaub · geschaltet · Praxis bis 28. Juli geschlossen, Vertretung wird angesagt.

**Was wir übernehmen.** H2: Von der Rufnummer bis zur Urlaubsansage. Copy: Sie sagen uns, wie Ihr Telefon klingen soll. Wir setzen es um und halten es aktuell.

Feature-Block: Eyebrow Einrichtung und Betreuung. Titel: Eine Anlage, die zu Ihren Abläufen passt.

Wir planen mit Ihnen, wer wann erreichbar ist, und bauen daraus Ansagen, Weiterleitungen und Gruppen. Danach bleiben wir Ihr Ansprechpartner: Eine kurze Nachricht genügt, und neue Öffnungszeiten, eine neue Kollegin oder die Urlaubsansage sind eingestellt.

- Ansagemenü, das Anliegen vorsortiert, etwa Rezepte, Termine oder Rückruf
- Weiterleitung aufs Handy, ins Homeoffice oder an einen zweiten Standort
- Mailbox, deren Nachrichten als E-Mail ankommen
- Portierung Ihrer bestehenden Rufnummern
- Übernahme einer vorhandenen Placetel-Anlage nach Prüfung

Bild: `m46-telefonie-homeoffice` (Ein Steuerberater telefoniert lächelnd an seinem Schreibtisch im sonnigen Homeoffice.)

**Zuständigkeiten.** H2: Klar geregelt, wer was macht.

Placetel stellt die Telefonanlage, die Leitungen und die Rufnummern bereit. Die Kosten dafür laufen gesondert über Placetel und stehen getrennt in unserem Angebot.

Wir übernehmen die Einrichtung und die vereinbarte Betreuung. Sie haben einen Ansprechpartner, der Ihre Anlage kennt und auch Website und Google-Profil im Blick hat.

Karte: Wer macht was · geklärt · Ein Ansprechpartner für Ihre Telefonie.
- Placetel: Anlage, Leitungen, Rufnummern
- Sie: Freigaben und Wünsche
- Wir: Einrichtung, Ansagen, Änderungen, Betreuung

**So läuft es ab.** H2: In drei Schritten zu Placetel, betreut von uns.

1. **Bestand aufnehmen.** Wir schauen uns Ihre heutige Telefonie an: Rufnummern, Geräte, Verträge und wer wann erreichbar sein soll.
2. **Einrichten und umziehen.** Wir richten die Anlage ein, portieren Ihre Nummern und stimmen die Ansagen mit Ihnen ab. Der Wechsel passiert zu einem vereinbarten Termin.
3. **Betreuen.** Ändert sich etwas, schreiben Sie uns kurz. Wir stellen um und, wenn nötig, auch wieder zurück.

**Häufige Fragen.** H2: Was Sie zu Placetel wissen sollten.

- **Behalten wir unsere Rufnummern?** Ja. Bestehende Rufnummern werden zu Placetel portiert. Den Termin für den Wechsel stimmen wir mit Ihnen ab.
- **Wir nutzen Placetel schon. Übernehmen Sie die Betreuung?** In der Regel ja. Wir prüfen vorher, wie Ihre Anlage eingerichtet ist, und sagen Ihnen, was wir übernehmen können und was wir ändern würden.
- **Brauchen wir neue Telefone?** Nicht unbedingt. Telefoniert wird über Tischtelefon, Computer oder Smartphone. Ob Ihre vorhandenen Geräte passen, klären wir bei der Bestandsaufnahme.
- **Lässt sich Placetel mit Doctolib verbinden?** Das hängt von Ihrer Anlage und Ihrem Doctolib-Paket ab. Wir klären die technische Lösung im Einzelfall und nennen sie im Angebot.
- **Was kostet das?** Einrichtung und Betreuung bieten wir nach einer kurzen Bedarfsklärung an. Die Kosten für Anlage und Gespräche laufen gesondert über Placetel.

### Doctolib `/partner/doctolib/`

- Title: Doctolib in Website und Praxisalltag einbinden | Digital Avenue
- Description: Wir vermitteln Doctolib und binden die Online-Terminbuchung in Ihre Praxiswebsite, Ihr Google-Profil und, wenn gewünscht, Ihre Telefonanlage ein. Für Praxen in Hamburg und Rostock.

**Hero.** Eyebrow: Partner · Doctolib Online-Terminbuchung. H1: Termine online buchen lassen. **Und überall passt es zusammen.**

Lead: Mit Doctolib buchen Patientinnen und Patienten rund um die Uhr selbst, Ihr Team telefoniert weniger. Wir vermitteln die Lösung und binden sie so in Website, Google-Profil und, wenn gewünscht, Telefonanlage ein, dass der Weg zum Termin überall gleich einfach ist.

Vertrauenszeile: Vermittlung und Einbindung aus einer Hand · Buchen-Button auf Website und Google-Profil · Telefonansage verweist auf die Online-Buchung

Bild: `m47-doctolib-praxis-empfang` (Eine Ärztin steht entspannt neben ihrer Praxismitarbeiterin am hellen Empfangstresen.). Service-Karte: Über Nacht · gebucht · Elf Termine online vereinbart, kein Anruf dafür.

**Was wir übernehmen.** H2: Vom ersten Gespräch bis zum Buchen-Button. Copy: Doctolib liefert Kalender und Buchung. Wir sorgen dafür, dass Patienten sie auf Ihrer Website, im Google-Profil und am Telefon auch finden.

Feature-Block: Eyebrow Vermittlung und Einbindung. Titel: Ein Weg zum Termin, überall gleich.

Wir stellen den Kontakt zu Doctolib her und begleiten Sie bis zum Vertrag. Danach binden wir die Buchung dort ein, wo Patienten nach Ihnen suchen: auf der Website, im Google-Unternehmensprofil und in der Ansage Ihrer Telefonanlage.

- Kontakt zu Doctolib und Begleitung bis zum Abschluss
- Buchen-Button und Terminhinweise auf Ihrer Praxiswebsite
- Terminlink im Google-Unternehmensprofil
- Hinweis auf die Online-Buchung in der Telefonansage
- Website, Profil und Ansage passend zu Urlaub und Schließzeiten

Bild: `m48-wartebereich-patient-smartphone` (Ein älterer Mann sitzt auf einer Holzbank im hellen Wartebereich einer Praxis und schaut auf sein Smartphone.)

**Zuständigkeiten.** H2: Was Doctolib macht und was wir machen.

Doctolib liefert Kalender, Online-Buchung und Terminerinnerungen. Den Vertrag schließen Sie direkt mit Doctolib, Kalender und Terminarten richten Sie gemeinsam mit Doctolib ein.

Wir kümmern uns um alles, was Patienten außerhalb von Doctolib sehen und hören: Website, Google-Profil und Telefonansage. Die Verwaltung Ihres Doctolib-Kontos übernehmen wir nicht.

Karte: Wer macht was · geklärt · Klare Aufgaben, ein Ansprechpartner.
- Doctolib: Kalender, Buchung, Erinnerungen
- Ihre Praxis: Vertrag, Terminarten, Freigaben
- Wir: Vermittlung, Website, Google-Profil, Ansage

**So läuft es ab.** H2: In drei Schritten zu Doctolib, betreut von uns.

1. **Klären.** Wir besprechen, welche Termine online buchbar sein sollen und ob Doctolib dafür passt.
2. **Vermitteln.** Wir stellen den Kontakt her. Den Vertrag schließen Sie direkt mit Doctolib.
3. **Einbinden.** Nach dem Start bauen wir die Buchung in Website und Google-Profil ein und, wenn gebucht, in die Telefonanlage.

**Häufige Fragen.** H2: Was Sie zu Doctolib wissen sollten.

- **Wir nutzen Doctolib bereits. Können Sie trotzdem helfen?** Ja. Wir binden Ihre bestehende Buchung in Website und Google-Profil ein und prüfen, ob Ihre Telefonansage darauf verweist.
- **Richten Sie unseren Doctolib-Kalender ein?** Nein. Kalender, Terminarten und die laufende Verwaltung richten Sie mit Doctolib ein. Wir kümmern uns um alles, was Patienten außerhalb von Doctolib sehen und hören.
- **Funktioniert das mit unserer Telefonanlage?** Das hängt von Ihrer Anlage und Ihrem Doctolib-Paket ab. Wir klären die technische Lösung im Einzelfall und nennen sie im Angebot.
- **Was kostet die Einbindung?** Die Einbindung bieten wir nach einer kurzen Bedarfsklärung an. Die Kosten für Doctolib selbst rechnet Doctolib direkt mit Ihnen ab.

### IONOS `/partner/ionos/`

- Title: Hosting und E-Mail bei IONOS, betreut von uns | Digital Avenue
- Description: Ihr Hosting bleibt bei IONOS und auf Ihren Namen. Über einen freigegebenen Agenturzugang übernehmen wir Einrichtung, Updates und Postfächer. Für Praxen, Kanzleien und Mittelstand.

**Hero.** Eyebrow: Partner · IONOS Hosting und E-Mail. H1: Ihr Hosting bleibt Ihres. **Die Technik übernehmen wir.**

Lead: Bei IONOS liegen Website, Domain und E-Mail auf Servern in Deutschland, der Vertrag läuft auf Ihren Namen. Über einen Zugang, den Sie uns freigeben und jederzeit wieder entziehen können, kümmern wir uns um Einrichtung, Updates und Änderungen.

Vertrauenszeile: Vertrag bleibt auf Ihren Namen · Server in Deutschland · Zugang jederzeit widerrufbar

Bild: `m49-unternehmer-buero-werkstatt` (Ein Unternehmer lehnt zufrieden an seinem Schreibtisch im hellen Büro neben der Werkstatt.). Service-Karte: Diese Nacht · erledigt · Sicherheitsupdate eingespielt, Backup geprüft.

**Was wir übernehmen.** H2: Website, Domain und E-Mail. Laufend gepflegt. Copy: Sie behalten Vertrag und Kontrolle. Wir halten alles am Laufen.

Feature-Block: Eyebrow Technische Betreuung. Titel: Wir kümmern uns, bevor etwas hakt.

Wir richten Webspace, Domain und Postfächer ein, spielen Updates ein, prüfen Backups und behalten Zertifikate im Blick. Fängt jemand neu bei Ihnen an, steht das Postfach am ersten Tag.

- Einrichtung von Webspace, Domain und Postfächern
- Updates für WordPress, Themes und Plugins
- Backups prüfen, Zertifikate im Blick behalten
- Umzug einer bestehenden Website zu IONOS, wenn er sich lohnt
- Postfächer anlegen und entfernen, wenn sich im Team etwas ändert

Bild: `m50-kollegen-stehpult` (Zwei Kollegen besprechen sich an einem hohen Holztisch über ausgedruckte Unterlagen.)

**Zuständigkeiten.** H2: Ihr Vertrag, unsere Arbeit.

IONOS betreibt Rechenzentrum, Server und Netz. Den Hostingvertrag schließen Sie direkt mit IONOS. Er bleibt Ihr Eigentum, auch wenn Sie später die Agentur wechseln.

Wir übernehmen die Technik, die darauf läuft. Das schafft klare Zuständigkeiten und lässt Ihnen jede Freiheit.

Karte: Wer macht was · geklärt · Getrennte Rollen, ein Ansprechpartner.
- IONOS: Rechenzentrum, Server, Netz
- Sie: Vertrag, Domain, Freigabe des Zugangs
- Wir: Einrichtung, Updates, Postfächer, Änderungen

**So läuft es ab.** H2: In drei Schritten zu IONOS, betreut von uns.

1. **Bestand prüfen.** Wir schauen, wo Website, Domain und E-Mail heute liegen und was gut läuft.
2. **Zugang einrichten.** Sie geben uns den Agenturzugang frei. Wenn sinnvoll, ziehen wir Website und Postfächer um.
3. **Betreuen.** Updates, Backups und Änderungen erledigen wir laufend. Sie hören von uns, bevor etwas ausläuft.

**Häufige Fragen.** H2: Was Sie zu IONOS wissen sollten.

- **Warum hosten Sie nicht selbst?** Weil Rechenzentren Personal und Technik für Sicherheit und Verfügbarkeit brauchen, die ein Anbieter wie IONOS rund um die Uhr vorhält. Wir konzentrieren uns auf das, was darauf läuft.
- **Was passiert, wenn wir die Zusammenarbeit beenden?** Vertrag, Domain und Daten bleiben bei Ihnen. Sie entziehen uns den Zugang, und alles läuft weiter.
- **Unsere Website liegt woanders. Müssen wir wechseln?** Nein. Wir prüfen, ob Ihr heutiges Hosting passt. Ein Umzug lohnt sich nur, wenn er etwas besser macht.
- **Wie greifen Sie auf unser Konto zu?** Über einen Agenturzugang, den Sie in Ihrem IONOS-Konto freigeben. Ihr eigenes Passwort bleibt bei Ihnen.

### Netleaders `/partner/netleaders/`

- Title: Hosting und IT-Infrastruktur mit Netleaders | Digital Avenue
- Description: Wenn Standard-Hosting nicht reicht: Mit Netleaders betreuen wir Server und Infrastruktur für Unternehmen mit höheren Anforderungen an Leistung und Sicherheit.

**Hero.** Eyebrow: Partner · Netleaders Server und Infrastruktur. H1: Wenn mehr gebraucht wird als Webspace. **Infrastruktur mit Netleaders.**

Lead: Manche Websites, Shops und Anwendungen brauchen mehr Leistung, eigene Server oder besondere Sicherheit. Dafür arbeiten wir mit Netleaders. Netleaders betreibt die Infrastruktur, wir planen mit Ihnen, richten ein und bleiben Ihr Ansprechpartner.

Vertrauenszeile: Infrastruktur in Deutschland · Für höhere Anforderungen an Leistung und Sicherheit · Ein Ansprechpartner für alles darauf

Bild: `m51-anwaeltin-abendlicht` (Eine Anwältin lehnt sich mit einer Tasse Kaffee in ihrem ruhigen Büro im warmen Abendlicht zurück.). Service-Karte: Lastspitze am Montag · aufgefangen · Shop und Website laufen, auch bei doppeltem Andrang.

**Was wir übernehmen.** H2: Infrastruktur, die mitwächst. Copy: Wir klären mit Ihnen, was Ihre Anwendungen brauchen, und setzen es mit Netleaders um.

Feature-Block: Eyebrow Planung und Betreuung. Titel: Leistung und Sicherheit nach Maß.

Wir planen mit Ihnen, welche Server, welcher Speicher und welche Sicherungen Ihre Anwendungen brauchen. Netleaders stellt die Infrastruktur bereit, wir richten Website, Anwendungen und E-Mail darauf ein und betreuen sie.

- Bedarf klären: Leistung, Speicher, Verfügbarkeit
- Einrichtung von Website, Shop und Anwendungen auf der Infrastruktur
- Sicherungen und Updates nach festem Plan
- Ein Ansprechpartner zwischen Ihnen und dem Rechenzentrum
- [Leistungsumfang Netleaders prüfen]

Bild: `m52-team-besprechung` (Drei Mitarbeitende eines mittelständischen Unternehmens sprechen entspannt an einem hellen Holztisch.)

**Zuständigkeiten.** H2: Rechenzentrum dort, Betreuung hier.

Netleaders betreibt Rechenzentrum, Server und Netz und sorgt für deren Verfügbarkeit. [Vertragsmodell prüfen: Vertrag direkt mit Netleaders oder über uns]

Wir übernehmen Planung, Einrichtung und Betreuung dessen, was darauf läuft. Für Sie bleibt es bei einem Ansprechpartner.

Karte: Wer macht was · geklärt · Getrennte Rollen, ein Ansprechpartner.
- Netleaders: Rechenzentrum, Server, Netz
- Sie: Anforderungen, Freigaben
- Wir: Planung, Einrichtung, Betreuung

**So läuft es ab.** H2: In drei Schritten zu Netleaders, betreut von uns.

1. **Anforderungen klären.** Wir sprechen über Ihre Anwendungen, Besucherzahlen und Sicherheitsanforderungen.
2. **Planen und einrichten.** Wir legen mit Netleaders die passende Infrastruktur fest und ziehen Website und Anwendungen um.
3. **Betreuen.** Updates, Sicherungen und Änderungen erledigen wir laufend und melden uns, bevor es eng wird.

**Häufige Fragen.** H2: Was Sie zu Netleaders wissen sollten.

- **Wann brauchen wir mehr als normales Hosting?** Wenn ein Shop oder eine Anwendung viel Leistung braucht, Lastspitzen auffangen muss oder besondere Sicherheitsanforderungen hat. Für die meisten Websites reicht Hosting bei IONOS.
- **Was unterscheidet Netleaders von IONOS?** IONOS ist für Websites und E-Mail im eigenen Vertrag gedacht. Netleaders setzen wir ein, wenn mehr Leistung, eigene Server oder individuelle Lösungen gefragt sind. [Abgrenzung prüfen]
- **Was kostet das?** Das hängt von der Infrastruktur ab. Nach einer Bedarfsklärung erhalten Sie ein Angebot, in dem Infrastruktur und Betreuung getrennt ausgewiesen sind.


---

# Leistungsseiten: Konzept und Texte

Quelle: `handoff/leistungen/leistungsseiten.md`

## Leistungsseiten: Konzept und Texte

Stand 09.10.2026. Entscheidung Nils: jede Leistung bekommt eine eigene Unterseite. Die Texte hier sind die Quelle für Prototyp (`prototype/src/pages/leistung*.html`) und Bricks (Seiten 244 bis 248).

### Entscheidungen und Annahmen

- **Adressen:** Übersicht `/leistungen/`, Unterseiten `/leistungen/sichtbarkeit-marke/`, `/leistungen/infrastruktur-prozesse/`, `/leistungen/digital-concierge/`, `/leistungen/foto-video-text/`.
- **Material:** Drive-Konzept (Säulentexte), Kacheltexte der Startseite und die sechs alten Service-Seiten (Konzept, Webdesign, Content Creation, Performance Marketing, Kommunikation, Hosting & E-Mail). Deren Inhalte sind auf die vier Bereiche verteilt; die alten Adressen leiten dorthin um (`handoff/REDIRECTS.md`).
- **Grenzen aus dem Kampagnenkonzept:** keine Paketpreise, Werbebudget getrennt, Concierge mit klarem Umfang statt Änderungsflatrate, Fremdkosten getrennt im Angebot, Rückmeldezeiten nach Zielgruppe.
- **Keyword-Recherche steht aus.** Titel und H1 sind Arbeitsstände und sollen nach der Recherche geschärft werden.
- **Zu prüfen durch Nils:** Foto und Video: Wer produziert (allein oder mit Partnern)? Die FAQ sagt „Wir, bei Ihnen vor Ort“.

### Übersicht `/leistungen/`

- Title: Leistungen: Website, Technik, Betreuung und Inhalte | Digital Avenue
- Description: Vier Bereiche, ein Ansprechpartner: Sichtbarkeit und Marke, Infrastruktur und Prozesse, Digital-Concierge sowie Foto, Video und Text. Für Praxen, Kanzleien und Mittelstand.
- H1: Vier Bereiche. **Ein Ansprechpartner.**
- Lead: Sichtbarkeit, Technik, Betreuung und Inhalte gehören zusammen. Deshalb bekommen Sie bei uns alles aus einer Hand, vom Konzept bis zum laufenden Betrieb.
- Vier Kacheln wie auf der Startseite, je mit Link auf die Unterseite
- So arbeiten wir: drei Schritte wie auf der Startseite
- Digital-Check-Block

### Sichtbarkeit & Marke `/leistungen/sichtbarkeit-marke/`

- Title: Webdesign, Google-Profil und Marke für Praxen, Kanzleien und Mittelstand | Digital Avenue
- Description: Website, Google-Unternehmensprofil, lokale Suche und Markenauftritt aus Hamburg und Rostock. Damit Sie gefunden werden und der erste Eindruck überzeugt.

**Hero.** Eyebrow: Leistung 01 · Sichtbarkeit & Marke. H1: Gefunden werden. **Und beim ersten Klick überzeugen.**

Lead: Ihre Website und Ihr Google-Profil sind oft der erste Kontakt mit neuen Patienten, Mandanten oder Kunden. Wir gestalten beides so, dass es zu Ihnen passt, schnell lädt, bei Google gefunden wird und Interessenten den nächsten Schritt leicht macht.

Vertrauenszeile: Webdesign aus Hamburg und Rostock · Lokale Suche und Google-Profil · Marke vom Logo bis zur Website

Bild: `m53-physiotherapeutin-tablet` (Eine Physiotherapeutin steht am hellen Empfang ihrer Praxis und schaut auf ein Tablet.). Service-Karte: Google-Profil · aktualisiert · Neue Öffnungszeiten, Fotos und Leistungen sind online.

**Was dazugehört.** H2: Website, Suche und Marke aus einem Guss. Copy: Ein Auftritt, der auf allen Kanälen gleich klingt und aussieht. Von der ersten Idee bis zur laufenden Pflege.

Feature-Block: Eyebrow Website und Suche. Titel: Eine Website, die arbeitet, nicht nur gut aussieht.

Wir klären zuerst, wen Ihre Website erreichen soll und was Besucher dort tun sollen. Daraus entstehen Aufbau, Texte und Gestaltung. Wir bauen in WordPress, damit Sie unabhängig bleiben, und richten alles für die lokale Suche ein.

- Konzept und Seitenaufbau nach Ihren Zielgruppen
- Webdesign, das auf dem Smartphone genauso funktioniert wie am Schreibtisch
- Leistungsseiten mit den Begriffen, nach denen gesucht wird
- Google-Unternehmensprofil: Zeiten, Leistungen, Fotos, Beiträge
- Karriereseite mit Online-Bewerbung, wenn Sie Personal suchen

Bild: `m54-markenentwurf-farbmuster` (Eine Designerin und ein Unternehmer besprechen an einem Holztisch ausgedruckte Farbmuster und Entwürfe.)

**Marke.** H2: Ein Auftritt, der wiedererkannt wird.

Logo, Farben, Schrift und Bildsprache sind die Grundlage. Wir entwickeln sie neu oder schärfen, was schon da ist, und setzen sie konsequent um: auf der Website, in Geschäftsunterlagen und auf dem Praxis- oder Firmenschild.

Wenn eine Leistung schnell bekannt werden soll, ergänzen wir Anzeigen bei Google. Nur mit klarem Ziel, das Werbebudget bleibt getrennt und bei Ihnen.

Karte: Ihr Auftritt · stimmig · Ein Bild auf allen Kanälen.
- Logo und Corporate Design
- Geschäftsausstattung und Drucksachen
- Bildsprache für Website und Social Media

**So läuft es ab.** H2: So entsteht Ihr Auftritt.

1. **Verstehen.** Wir sprechen über Ihre Ziele, Ihre Zielgruppen und das, was Sie von anderen unterscheidet.
2. **Gestalten und bauen.** Wir entwickeln Aufbau, Texte und Design, stimmen sie mit Ihnen ab und setzen die Website um.
3. **Pflegen und verbessern.** Nach dem Start halten wir Website und Google-Profil aktuell und schauen, was sich verbessern lässt.

**Häufige Fragen.** H2: Was Sie zu Website und Sichtbarkeit wissen sollten.

- **Muss unsere bestehende Website neu gebaut werden?** Nicht unbedingt. Wir prüfen Ihre WordPress-Website und bieten bei Eignung die Übernahme an. Notwendige Vorarbeiten beschreiben wir vorab.
- **Brauchen wir Anzeigen, um gefunden zu werden?** Meist reichen gute Leistungsseiten und ein gepflegtes Google-Profil für die lokale Suche. Anzeigen empfehlen wir, wenn eine Leistung schnell bekannt werden soll. Das Werbebudget bleibt getrennt und bei Ihnen.
- **Wer schreibt die Texte?** Wir. Sie liefern die fachlichen Angaben und geben frei. Fachliche, medizinische oder rechtliche Aussagen kommen von Ihnen.
- **Können wir die Website selbst pflegen?** Ja. Wir bauen in WordPress und zeigen Ihnen, wie Sie Texte und Bilder ändern. Viele Kunden überlassen uns die Pflege trotzdem, dann ist sie Teil der Betreuung.
- **Was kostet eine neue Website?** Das hängt vom Umfang ab. Nach einem kurzen Gespräch bekommen Sie ein Angebot, in dem Konzept, Gestaltung, Umsetzung und Fremdkosten getrennt stehen.

**Abschluss:** Kacheln der drei anderen Leistungen.

### Infrastruktur & Prozesse `/leistungen/infrastruktur-prozesse/`

- Title: Telefonanlage, Hosting, E-Mail und Terminbuchung aus einer Hand | Digital Avenue
- Description: Cloud-Telefonie mit Placetel, Online-Terminbuchung mit Doctolib, Hosting und E-Mail bei IONOS und Netleaders. Eingerichtet, verbunden und betreut von Digital Avenue.

**Hero.** Eyebrow: Leistung 02 · Infrastruktur & Prozesse. H1: Technik, die einfach läuft. **Und zusammenpasst.**

Lead: Telefon, E-Mail, Website, Terminbuchung und Kundenverwaltung sollen funktionieren, ohne dass Sie sich darum kümmern. Wir richten sie ein, verbinden sie miteinander und halten sie am Laufen. Mit Partnern, die Rechenzentren und Leitungen rund um die Uhr betreiben.

Vertrauenszeile: Cloud-Telefonie, Hosting und E-Mail · Server in Deutschland · Ein Ansprechpartner für alles

Bild: `m55-bueroleiterin-telefon` (Eine Büroleiterin telefoniert lächelnd am Fenster eines hellen Büros.). Service-Karte: Neue Kollegin · eingerichtet · Postfach, Telefon und Website-Eintrag stehen am ersten Tag.

**Was dazugehört.** H2: Telefon, E-Mail, Termine und Daten. Verbunden. Copy: Jedes System für sich ist selten das Problem. Schwierig wird es an den Übergängen. Genau dort setzen wir an.

Feature-Block: Eyebrow Einrichtung und Betrieb. Titel: Ein Fundament für Ihren Arbeitsalltag.

Wir schauen, was Sie heute nutzen, und schlagen vor, was bleibt und was sich ändern sollte. Danach richten wir ein, ziehen um und kümmern uns um den laufenden Betrieb: Updates, Sicherungen und Änderungen, wenn jemand kommt oder geht.

- Cloud-Telefonanlage mit Ansagen, Weiterleitung und Mailbox
- Hosting und E-Mail mit Servern in Deutschland
- Online-Terminbuchung, eingebunden in Website und Telefon
- Formulare und Anfragen, die direkt im CRM ankommen
- Updates, Sicherungen und Überwachung Ihrer Website

Bild: `m56-homeoffice-headset-notizen` (Ein Mann arbeitet mit Headset im ruhigen Homeoffice und schreibt Notizen in ein Notizbuch.)

**Partner.** H2: Wir arbeiten mit Spezialisten.

Wir hosten nicht selbst und bauen keine Telefonanlagen. Dafür arbeiten wir mit Anbietern, die das rund um die Uhr mit eigenem Personal tun: Placetel für Telefonie, Doctolib für Terminbuchung, IONOS und Netleaders für Hosting und Infrastruktur.

Ihre Verträge laufen in der Regel direkt mit dem Anbieter. Wir richten ein, verbinden und betreuen. So bleiben Zuständigkeiten klar, und Sie behalten jede Freiheit.

Karte: Unsere Partner · verbunden · Vier Partner, ein Ansprechpartner.
- Placetel: Cloud-Telefonie
- Doctolib: Online-Terminbuchung
- IONOS und Netleaders: Hosting und Infrastruktur

**So läuft es ab.** H2: So bringen wir Ordnung in Ihre Technik.

1. **Bestand aufnehmen.** Telefon, E-Mail, Website, Verträge: Wir schauen, was da ist und wie es zusammenspielt.
2. **Einrichten und verbinden.** Wir richten ein, ziehen um und verbinden die Systeme. Der Wechsel passiert zu einem vereinbarten Termin.
3. **Betreuen.** Updates, Sicherungen und Änderungen erledigen wir laufend. Sie melden sich, wenn sich bei Ihnen etwas ändert.

**Häufige Fragen.** H2: Was Sie zu Technik und Betrieb wissen sollten.

- **Warum hosten Sie nicht selbst?** Weil Rechenzentren Personal und Technik für Sicherheit und Verfügbarkeit brauchen, die spezialisierte Anbieter rund um die Uhr vorhalten. Wir konzentrieren uns auf das, was darauf läuft.
- **Müssen wir unsere Verträge wechseln?** Nein. Wir prüfen, was Sie heute nutzen. Ein Wechsel lohnt sich nur, wenn er etwas besser macht. Bestehende Placetel-Anlagen und Websites übernehmen wir nach Prüfung.
- **Behalten wir Rufnummern und E-Mail-Adressen?** Ja. Rufnummern werden portiert, Postfächer umgezogen. Den Termin dafür stimmen wir mit Ihnen ab.
- **Was kostet die Betreuung?** Sie erhalten einen festen monatlichen Preis für den vereinbarten Umfang. Einrichtung, größere Zusatzarbeiten und die Kosten der Anbieter stehen getrennt im Angebot.

**Abschluss:** Kacheln der vier Partnerseiten.

### Digital-Concierge `/leistungen/digital-concierge/`

- Title: Digital-Concierge: Website-Betreuung, die mitdenkt | Digital Avenue
- Description: Eine Nachricht genügt: Wir ändern Website, Google-Profil und Telefonansage, wenn sich bei Ihnen etwas ändert, und stellen es wieder zurück. Persönliche Betreuung aus Hamburg und Rostock.

**Hero.** Eyebrow: Leistung 03 · Digital-Concierge. H1: Eine Nachricht genügt. **Den Rest übernehmen wir.**

Lead: Urlaub, neue Öffnungszeiten, eine neue Kollegin: Sie schreiben uns kurz, wir stellen Website, Google-Profil und Telefonansage um. Und nach Ihrer Rückkehr wieder zurück, ohne dass Sie daran denken müssen.

Vertrauenszeile: Ein fester Ansprechpartner · Folgeschritte ohne Erinnerung · Klarer Umfang im Betreuungsvertrag

Bild: `m57-urlaub-praxistuer-koffer` (Eine Ärztin geht mit einem Rollkoffer gut gelaunt durch den hellen Flur ihrer Praxis.). Service-Karte: Nachricht an Digital Avenue · erledigt · Website, Google-Profil und Ansage auf Urlaub umgestellt.

**Was dazugehört.** H2: Betreuung statt Ticketsystem. Copy: Sie haben einen Ansprechpartner, der Ihre Systeme kennt. Wir handeln, wenn sich etwas ändert, und oft schon vorher.

Feature-Block: Eyebrow Der Urlaubs-Service. Titel: Unser bestes Beispiel.

Sie schreiben uns Ihre Urlaubszeiten und die Vertretung. Wir setzen einen Hinweis auf die Website, tragen die Schließzeit im Google-Profil ein, schalten die passende Telefonansage und stellen nach Ihrer Rückkehr alles wieder um. Genauso bei neuen Öffnungszeiten, neuen Leistungen oder Personalwechsel.

- Urlaubs- und Schließzeiten auf Website, Google-Profil und Ansage
- Neue Kolleginnen und Kollegen auf Team-Seite, Telefon und Postfach
- Geänderte Öffnungszeiten an allen Stellen gleichzeitig
- Sicherheitsupdates und Zertifikate, bevor sie auslaufen
- Rückstellung zum vereinbarten Termin, ohne Erinnerung

Bild: `m58-terrasse-urlaub-kaffee` (Ein Mann entspannt mit geschlossenen Augen im Liegestuhl am Meer, daneben eine Tasse Kaffee.)

**Umfang.** H2: Klar vereinbart, was dazugehört.

Der Digital-Concierge ist Teil Ihres Betreuungsvertrags. Darin steht, welche Änderungen und Pflegearbeiten enthalten sind. Größere Aufgaben wie eine neue Seite oder ein Shooting bieten wir separat an.

Kunden mit Betreuungsvertrag bekommen eine persönliche Rückmeldung in der vertraglich vereinbarten Reaktionszeit, während unserer Servicezeiten.

Karte: Im Vertrag · geregelt · Was der Concierge übernimmt.
- Vereinbarte Änderungen auf Zuruf
- Pflege von Website, Google-Profil und Ansage
- Updates, Sicherungen und Fristen im Blick

**So läuft es ab.** H2: So läuft eine Änderung.

1. **Sie melden sich.** Per E-Mail oder Telefon, in Ihren Worten. Kein Formularzwang.
2. **Wir stimmen ab.** Wir melden uns in der vereinbarten Reaktionszeit und klären, wann was umgestellt wird.
3. **Wir setzen um.** Wir ändern alles Nötige und denken an die Folgeschritte, etwa die Rückstellung nach dem Urlaub.

**Häufige Fragen.** H2: Was Sie zum Digital-Concierge wissen sollten.

- **Ist das eine Änderungsflatrate?** Nein. Welche Änderungen enthalten sind, steht in Ihrem Betreuungsvertrag. Größere Aufgaben bieten wir separat an.
- **Wie schnell reagieren Sie?** Kunden mit Betreuungsvertrag bekommen eine persönliche Rückmeldung in der vertraglich vereinbarten Reaktionszeit. Die Umsetzung stimmen wir nach Dringlichkeit und Umfang ab.
- **Funktioniert das mit Systemen, die wir schon haben?** In der Regel ja. Wir prüfen Website, Google-Profil und Telefonanlage und sagen Ihnen, was wir übernehmen können.
- **Wer ist unser Ansprechpartner?** Nils Rudolph oder seine Vertretung. Sie sprechen mit Menschen, die Ihre Systeme kennen, nicht mit einem Ticketsystem.

**Abschluss:** Kacheln der drei anderen Leistungen.

### Foto, Video & Text `/leistungen/foto-video-text/`

- Title: Fotos, Imagefilm und Texte für Website und Social Media | Digital Avenue
- Description: Teamfotos, Imagefilm, Produktfotos und Texte vom Konzept bis zum Publishing. Für Praxen, Kanzleien und Mittelstand in Hamburg und Rostock, alles aus einer Hand.

**Hero.** Eyebrow: Leistung 04 · Foto, Video & Text. H1: Zeigen, wer Sie sind. **Mit Bildern, Film und Worten.**

Lead: Echte Fotos von Ihrem Team, ein kurzer Film über Ihre Arbeit und Texte, die Ihre Kunden verstehen: Wir planen, produzieren und veröffentlichen alles, was Website, Google-Profil und Social-Media-Kanäle brauchen. Sie geben nur frei.

Vertrauenszeile: Vom Konzept bis zum Publishing · Fotos, Film und Text aus einer Hand · Ohne dritte Agentur

Bild: `m59-fotoshooting-praxisteam` (Ein Fotograf fotografiert ein Praxisteam in einem hellen Raum.). Service-Karte: Shooting am Dienstag · veröffentlicht · Neue Teamfotos auf Website und Google-Profil.

**Was dazugehört.** H2: Bild, Film und Text, die zusammenpassen. Copy: Inhalte wirken, wenn sie zueinander passen. Deshalb planen wir sie gemeinsam mit Website und Marke.

Feature-Block: Eyebrow Produktion. Titel: Wir planen, produzieren und veröffentlichen.

Wir klären mit Ihnen, welche Inhalte Sie brauchen und wo sie erscheinen sollen. Dann entsteht ein Plan für Shooting, Dreh und Texte. Nach der Produktion bearbeiten wir alles und stellen es dort online, wo Ihre Kunden suchen.

- Team- und Porträtfotos, Räume und Produkte
- Imagefilm und kurze Clips für Website und Social Media
- Texte für Website, Leistungsseiten und Stellenanzeigen
- Bildredaktion und Bearbeitung
- Veröffentlichung auf Website, Google-Profil und Social Media

Bild: `m60-videointerview-kanzlei` (Eine Anwältin sitzt für ein Videointerview in ihrer Kanzlei, im Vordergrund unscharf eine Kamera.)

**Echt statt Archivbild.** H2: Ihre Kunden sollen Sie erkennen.

Archivbilder sehen überall gleich aus. Echte Fotos und Filme zeigen Ihr Team und Ihre Räume und schaffen Vertrauen, bevor jemand anruft.

Videos binden wir direkt auf Ihrer Website ein statt über YouTube. So laden keine fremden Cookies, und Ihre Besucher bleiben bei Ihnen. Die Rechte an Bildern und Filmen klären wir vor dem Shooting mit allen Beteiligten.

Karte: Ihr Inhaltsplan · abgestimmt · Was an einem Produktionstag entsteht.
- Porträts und Teamfotos
- Kurzer Imagefilm mit Schnitt
- Texte und Bildunterschriften

**So läuft es ab.** H2: So entstehen Ihre Inhalte.

1. **Planen.** Wir besprechen Ziele, Kanäle und Motive und schreiben einen kurzen Drehplan.
2. **Produzieren.** Shooting und Dreh bei Ihnen vor Ort, Texte in Abstimmung mit Ihnen.
3. **Veröffentlichen.** Wir bearbeiten, Sie geben frei, wir stellen alles online.

**Häufige Fragen.** H2: Was Sie zu Foto, Video und Text wissen sollten.

- **Wer fotografiert und filmt?** Wir, bei Ihnen vor Ort. Sie müssen nichts vorbereiten außer einem Termin, an dem das Team da ist.
- **Nutzen Sie künstliche Intelligenz?** Für Recherche und Entwürfe ja, als Werkzeug. Was veröffentlicht wird, prüfen und verantworten Menschen, die Ihre Zielgruppe kennen.
- **Wem gehören die Bilder und Filme?** Die Nutzungsrechte für Ihre Kanäle sind im Angebot geregelt. Die Einwilligung der abgebildeten Personen holen wir vor dem Shooting ein.
- **Was kostet ein Shooting?** Das hängt von Umfang und Drehtagen ab. Sie bekommen vorab ein Angebot mit allen Posten.

**Abschluss:** Kacheln der drei anderen Leistungen.


---

# Weiterleitungen für den Launch

Quelle: `handoff/REDIRECTS.md`

## Weiterleitungen für den Launch

Stand 09.10.2026. Ersetzt den Redirect-Plan aus Google Drive (Juni 2026,
drei Säulen). Grundlage: Sitemap der Live-Site (page-, service- und
local-sitemap) und das URL-Inventar. Anlegen als 301 in Rank Math ›
Redirections, Plugin-Reste als 410.

| Alt (digital-avenue.de) | Neu | Code |
|---|---|---|
| `/service/` | `/leistungen/` | 301 |
| `/service/konzept/` | `/leistungen/sichtbarkeit-marke/` | 301 |
| `/service/webdesign-fuer-hamburg-und-rostock/` | `/leistungen/sichtbarkeit-marke/` | 301 |
| `/service/performance-marketing-agentur/` | `/leistungen/sichtbarkeit-marke/` | 301 |
| `/service/content-creation/` | `/leistungen/foto-video-text/` | 301 |
| `/service/kommunikation/` | `/leistungen/infrastruktur-prozesse/` | 301 |
| `/service/hosting-e-mail/` | `/leistungen/infrastruktur-prozesse/` | 301 |
| `/ueber-digital-avenue/` | `/ueber-uns/` | 301 |
| `/legal/impressum/` | `/impressum/` | 301 |
| `/legal/datenschutzerklaerung/` | `/datenschutz/` | 301 |
| `/sample-page/`, `/ui/`, `/login/`, `/login-2/`, `/login-3/`, `/register/`, `/register-2/`, `/user/`, `/members/`, `/logout/`, `/account/`, `/password-reset/`, `/newsletter/` | entfallen | 410 |

Vor dem Launch prüfen:

- Gibt es eine Portfolio-Seite (im alten Menü verlinkt, nicht in der
  Sitemap)? Falls ja: auf `/referenzen/` umleiten.
- Search Console der Live-Site auf weitere aufgerufene Adressen prüfen.
- Nach dem Go-Live jede Zeile einmal aufrufen und den Statuscode prüfen.


---

# Technisches Protokoll Bricks

Quelle: `handoff/import/README.md`

## Importdaten für Bricks 2.4 (Staging relaunch.digital-avenue.de)

Erzeugt aus `design-system/colors_and_type.css` und dem Prototyp mit
`node handoff/import/build-import.mjs`. Nach jeder Änderung an Tokens oder
Prototyp neu bauen, nicht von Hand editieren.

Zwei Wege je Schritt: **Import im Style Manager** von Bricks 2.4 (Datei
hochladen, kein MCP nötig) oder **Auftrag an Claude Code** lokal im
Repository oder in der Cloud-Umgebung, jeweils mit verbundenem MCP-Server
(Einrichtung in `.claude/skills/bricks-handoff/references/bricks-2-4.md`). Die JSON-Dateien liegen im
gespeicherten Format von Bricks (Schema-Bündel `bricks-element-schemas`,
`global/*.json`), ohne Zusatzfelder; Erklärungen stehen in den
Markdown-Dateien daneben. Die Aufträge unten gelten für den MCP-Weg.

Merkregeln zum Nachschlagen: `handoff/MERKREGELN.md`.

Regeln für alle Schritte: zuerst lesen (`get-design-context` und die passende
`list-*`-Ability), Ownership-Werte aus der letzten Antwort weiterreichen,
Schreibaufrufe nacheinander statt parallel, bei `duplicate`-Konflikten das
Vorhandene prüfen statt umbenennen, keine `delete-*`-Abilities, nach jedem
Schritt `handoff/STATUS.md` fortschreiben.

| Schritt | Datei | Ability-Weg | Prüfung |
|---|---|---|---|
| 0 Bestand | – | `list-ability-status`, `get-design-context` | Liste der Abilities erscheint; Design System leer oder bekannt |
| 1 Farben | `01-farben.json` (+ `01-farben.md`) | Style Manager › Colors › Import, oder `create-color-palette` und je Farbe `create-color` | 52 Farben mit Dunkelwert in der Palette „Digital Avenue“ |
| 2 Schriften | `02-schriften.json` | Font Manager im Builder oder `upload-custom-font-file`, `create-custom-font`, `update-custom-font` | erledigt 11.09.2026: Manrope und Jost als Custom Fonts, je 8 Schnitte |
| 3 Variablen | `03-variablen.json` (+ `03-variablen.md`) | Style Manager › Variables › Import, oder `set-global-variable-categories` und `set-global-variables` | 8 Kategorien, 48 Variablen |
| 4 Theme Style | `04-theme-style.json` | Import im Builder (Theme Styles › Import) oder `create-theme-style` | Stil „Digital Avenue“ aktiv, H1 und Button stimmen |
| 5 Klassen | `05-klassen/klassen.json` (+ `klassen.md`, `klassen.css`) | Style Manager › Classes › Import, oder je Klasse `create-global-class` | 21 Klassen; Button mit `da-btn da-btn-primary` rendern |
| 6 Icons | `06-icons/` (durch den SVG → Bricks Optimizer gelaufen) | Icon Manager im Builder (Browser › Icon manager), eigenes Set, SVGs einzeln hochladen | erledigt 11.09.2026: Set „Digital Avenue“ mit 15 Icons |
| 7 Components | `07-components/components.json` | `convert-html-css-to-bricks-data`, dann `create-component` | `get-component`, `render-elements` |

### Schritt 0: Bestand aufnehmen

Auftrag:

> Verbinde dich mit dem Bricks-Staging. Rufe `bricks/list-ability-status` und
> `bricks/get-design-context` auf und fasse zusammen, welche Paletten,
> Variablen, Theme Styles, Global Classes und Components schon existieren.
> Schreibe nichts.

### Schritt 1: Farben

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

### Schritt 2: Schriften

Auftrag:

> Lies `handoff/import/02-schriften.json`. Lade
> `design-system/fonts/Manrope-VariableFont_wght.woff2` als Base64 mit
> `upload-custom-font-file` hoch, lege die Familie „Manrope“ mit
> `create-custom-font` an und setze `fontFaces` mit `update-custom-font`.
> Versuche zuerst den Schlüssel `"200 800"` für die variable Achse; lehnt
> Bricks das ab, verwende `fontFacesFallback` aus der Datei. Prüfe mit
> `list-custom-fonts`. Jost bleibt Google Font: prüfe mit
> `list-settings-schema`, ob Google Fonts aktiv sind, und melde das Ergebnis.

### Schritt 3: Variablen

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

**Skalen-Generator (Reiter Spacing und Typography) nicht verwenden.**
Bricks erzeugt dort Verhältnisreihen (`clamp()` in rem mit Steigung ab
36rem Bildschirmbreite, Wurzelgröße laut Theme Style, sonst 10px). Unser
Design System sind Vielfache von 4px in eigenen `clamp()`-Werten; eine
Verhältnisreihe bildet das nicht ab. Die Kategorien Abstände und
Schriftgrößen bleiben deshalb ohne Skalen-Konfiguration und tauchen in den
Reitern nicht auf; in den Controls sind sie normal wählbar. Eine zum Test
erzeugte Kategorie „Spacing“ mit `br-space-*` im Variablen-Manager wieder
löschen. Wer den Generator später doch nutzt, setzt vorher im Theme Style
die HTML-Schriftgröße auf 16px, sonst rechnet Bricks mit 10px.

Stand 11.09.2026: Farben (52) und Variablen (48 in 8 Kategorien) sind
über den Style Manager am Staging importiert; Exportformat der Variablen
ist `{ variables, categories, styleManager }`.

### Schritt 4: Theme Style

`04-theme-style.json` liegt im Export-Format von Bricks 2.4 (erstellt unter RC2, wie die
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

Wichtig: `typographyHtml: 100%` setzt die HTML-Schriftgröße. Ohne diesen
Wert rechnet der Style Manager mit 62,5 % (1rem = 10px), und alles, was in
rem gesetzt ist, schrumpft. Am Staging bereits importierte Theme Styles von
Hand ergänzen: Theme Styles › Digital Avenue › Typography › HTML font size.

Falle beim Theme Style: Die Felder „Root container padding“ und „Root
container width“ unter General (rotes Symbol) sind Altlasten und wirken
nicht auf Sections. Section-Innenabstand steht in der Gruppe Section,
die Breite in der Gruppe Container; die Datei setzt beides dort.

Der Theme Style deckt Grundschrift, H1 bis H6, Lead, Links, Farben,
Container-Breite, Section-Abstand, Buttons (Standard, Primary, Secondary,
Light, Outline) und Formularfelder ab. Schatten der Buttons stehen nicht im
Theme Style, weil Bricks-Schatten keine Variablen mit mehreren Ebenen
tragen; sie kommen aus den Global Classes in Schritt 5. H5 und H6 sind
Vorschläge (Style Guide, Entscheidung offen).

### Schritt 5: Global Classes

Auftrag:

> Lies `handoff/import/05-klassen/klassen.json`. Lege die Kategorien Sections,
> Text, Buttons, Icons, Forms, Modifiers und Utilities an und je Eintrag eine
> Global Class mit `create-global-class`, das Feld `css` als Custom CSS der
> Klasse (Selektoren sind vollständig, Zeilenumbrüche erhalten). Prüfe mit
> `list-global-classes`, dass 21 Klassen existieren, und rendere ein
> Button-Element mit den Klassen `da-btn da-btn-primary` sowie ein
> Text-Element mit `da-eyebrow`. Melde, welche Deklarationen der CSS Sync in
> Controls übernommen hat und welche als Custom CSS geblieben sind.

Buttons: `da-btn` trägt Padding, Radius, Schrift und Übergang; die
Varianten `da-btn-primary`, `da-btn-ghost`, `da-btn-light`, `da-btn-sand`
nur Farbe, Rahmen und Schatten. Immer beide Klassen setzen.

### Schritt 6: Icons

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

### Schritt 7: Components

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

Stand 11.09.2026 (aus der Cloud-Sitzung per MCP angelegt): Global Class
`service-card` (id `jquabn`, Controls plus Sub-Selektoren `.sc-head`,
`.sc-label`, `.sc-status`, `.sc-title`, `ul`, `li`, `li .icon`, `&.sand`),
Modifier-Klasse `sand` (id `40736a`, Kategorie Modifiers), Components
„Service-Punkt“ (id `0b9bf7`, Property Text) und „Service-Karte“ (id
`580b83`, Properties Label, Status, Titel, Variante; Slot `76f9e7` für
Service-Punkt-Instanzen), Kategorie „Service-Karte“. Testseite „Component-
Test Service-Karte“ (Post 50, privat) mit beiden Varianten.

Gelernt beim ersten Durchlauf:

- Icons aus dem Icon Manager als Icon-Element setzen:
  `{"icon":{"library":"custom_set_nmqwgfdgv","svg":{"id":36,"icon_id":"icon_n6tla3o2l","url":"…/check.svg"}},"iconSize":"16px","_cssGlobalClasses":["daiconx13"]}`.
  Inline-SVG aus dem Konverter lässt sich nicht speichern (code-sensitiv).
- Instanzen im Elementbaum brauchen `name: "div"` und `cid`; sonst lehnt
  `create-component` ab („missing a name“).
- Kinder im Slot der Hauptcomponent werden auf der Seite nicht gerendert.
  Jede Instanz liefert ihre Listenpunkte selbst: flache Zeilen mit
  `parent` = Instanz-ID und `slotChildren: {"76f9e7": ["id1","id2"]}`.
  Verschachtelte Objekte in `slotChildren` haben beim Rendern die Karte
  verdoppelt, also flache Zeilen verwenden.
- Variante als Class-Property mit Optionen `standard` (leer) und `sand`
  (Klassen-ID); ohne `replace`, damit `service-card` erhalten bleibt.
- `create-global-class` kann eine Kategorie zuweisen
  (`category` + `expectedCategoryOwnership` aus `list-global-classes`),
  aber keine Kategorie anlegen. Neue Kategorien entstehen nur im Style
  Manager.

Stand 11.09.2026, zweiter Durchlauf (Kartenfamilie): Klassen `tiles`,
`tile` (Sub-Selektoren `.tile-num`, `h3`, `p`, `.textlink`), Modifier
`tile-teal`, `tile-deep`, `tile-sand`, `tile-cream`, `tile-photo`; `steps`,
`step`; `refs`, `ref`; `quotes`, `quote`, Modifier `featured`; `pains`,
`pain`; `checks`; `wordmark` mit Modifiern `serif`, `wide` (nur noch für die
Partnerzeile). Components
(Kategorie in Klammern): Kachel (`c3c53b`, Kacheln), Foto-Kachel
(`0851ab`, Kacheln), Schritt (`719767`, Karten), Referenzkarte (`cbca1c`,
Karten, Logo-Bild Attachment 62), Kundenstimme (`05cb9e`, Karten), Pain-Karte (`469300`, Karten).
Testseiten: „Component-Test Kachel“ (Post 60), „Component-Test Karten“
(Post 63).

Nachtrag 11.09.2026: Alle Referenzen bekommen ein Logo, deshalb ist die
Component „Referenzkarte Wortmarke“ wieder gelöscht (0 Instanzen). Platz-
halter-Logos für Dialyse Güstrow (106), Lungenpraxis am Tibarg (107) und
Urlaub bei Jana (108) liegen in der Mediathek und unter
`design-system/assets/`; echte Logos später einfach in der Property
„Logo“ austauschen.

Gelernt im zweiten Durchlauf:

- `batch-create-global-classes` übersetzt Custom CSS beim Anlegen in
  echte Controls (Padding, Border, Display, Typografie); der Rest bleibt
  Custom CSS. Kurzschreibweisen mit `color-mix(...)` gehen dabei kaputt
  (`border: 1px dashed color-mix(...)` wurde zu `var(--da-border))`).
  Farben mit `color-mix` als `_border.color.raw` setzen oder als
  Langschreibweise `border-color` schreiben.
- Eine Property ohne `default` überschreibt den Elementwert mit leer.
  Bild-Properties brauchen deshalb `default: {id, url, size}`, sonst
  zeigt jede Instanz „No image selected“.
- Instanz-Kinder brauchen `settings: {}`; Property-Werte einer Instanz
  stehen in `properties`, Class-Properties mit der Options-ID (`teal`).
- Fotos fehlen noch in der Mediathek. `prototype/img/` (30 Dateien) per
  Mediathek hochladen, dann Foto-Kachel, Feature-Block, Concierge und
  Hero Landingpage bestücken.

Stand 11.09.2026, dritter Durchlauf (Abschnitte, nach Foto-Upload):
Fotos liegen in der Mediathek (Attachments 66 bis 98, `m01` bis `m33`,
Logo DIGIZT 62). Klassen `feature` mit Modifier `flip`, `concierge`,
`timeline`, `check`, `lp-hero`, `faq`. Components (Kategorie Abschnitte):
Feature-Block (`25cc6c`, Slot `7823d9`), Timeline-Punkt (`74ec3e`),
Concierge (`0a205a`, Slot `3856e1`), Digital-Check-Block (`e44db4`, Slot
`17e049`), Hero Landingpage (`951227`, Wurzel ist eine Section). Foto-
Kachel hat jetzt ein Standardbild (74). FAQ ist keine Component, sondern
ein Accordion (Nestable) mit Klasse `faq`; Aufbau siehe unten. Testseite
„Component-Test Abschnitte“ (Post 101).

Gelernt im dritten Durchlauf:

- Eine Component darf eine `section` als Wurzel haben (Hero
  Landingpage); die Instanz liegt dann direkt auf Wurzelebene der Seite.
- `add-element` mit `accordion-nested` legt keine Kinder an. Aufbau von
  Hand: Accordion > `block` je Frage (`_cssClasses: faq-item`) > `block`
  mit `_hidden: {_cssClasses: "accordion-title-wrapper"}` (Heading h3 +
  Icon chevron-down) und `block` mit
  `_hidden: {_cssClasses: "accordion-content-wrapper"}` (Text). Bricks
  setzt `brx-open` auf das Item.
- Wurzelregeln einer Klasse werden beim Anlegen in Controls übersetzt.
  Fehlt dem Element das Control (Accordion hat kein `_direction`), geht
  die Eigenschaft verloren. Abhilfe: Regel mit Element-Klasse schreiben
  (`.faq.brxe-accordion-nested { flex-direction: column }`), die bleibt
  Custom CSS.
- Media-Queries in Klassen müssen die Element-Klasse tragen
  (`.tiles.brxe-div`), sonst gewinnt die Control-Regel `.tiles.brxe-div`
  der Basisbreite; Bricks gibt Media-Queries außerdem vor der Custom-CSS
  aus. Alle zehn Rasterklassen am 11.09.2026 entsprechend korrigiert,
  ebenso `nav-burger` (Desktop-Ausblendung als `min-width`-Query).
- Heading kennt kein `_textAlign`; Ausrichtung über
  `_typography: {"text-align": "center"}`.
- Slot-Kinder in `add-element` gehen auch verschachtelt (Objekte in
  `slotChildren`), ohne die Verdopplung aus `render-elements`.
- Listen mit `strong` im Text: Property-Typ `text` reicht, HTML wird
  ausgegeben.
- Ein `li` mit Grid-Layout (Zähler links, Text rechts) braucht ein
  eigenes Kind-Element für den Text. Liegt der Text direkt im `li`,
  werden `strong` und Textknoten getrennte Grid-Zellen und der Text
  bricht Wort für Wort um (Digital-Check-Block, Aside, korrigiert).
- Theme-Style-Buttons haben `border: none` auf `.bricks-button`. Eine
  Outline-Klasse muss deshalb auch `.bricks-button.da-btn-ghost` und
  `.brxe-button.da-btn-ghost` ansprechen, sonst verliert sie den Rahmen.

Für FAQ das Bricks-Accordion (Nestable) statt `details` verwenden; für die
Zielgruppen-Tabs später das Tabs-Element. Beides steht im Skill
`bricks-nestable-elements`.

### Schritt 8: Header

Stand 11.09.2026: Header-Template „Main Header“ (52, Bedingung „gesamte
Website“, Sticky über die Template-Einstellung `headerSticky`). Aufbau:
Section `site-nav` › Container `nav-inner` › Logo-Element (Attachment
110, 28px, Link `/`), Nav (Nestable) `nav-menu` mit fünf Text-Links,
Div `nav-actions` mit Toggle-Mode (Mond/Sonne aus dem Icon-Set), Button
`da-btn da-btn-primary da-btn-sm` und Toggle `nav-burger` (Menü-Icon,
`toggleSelector: #brxe-navmn1`). Mobile Menü über die Nav-Einstellungen:
Breakpoint 960px, Position unter dem Header (`var(--nav-h)`), Hintergrund
`--da-bg`. Neue Variable `--nav-h: 72px` (Kategorie Abstände), neue
Klasse `da-btn-sm`.

Entscheidungen:

- Dunkles Logo nicht als zweite Datei, sondern per CSS-Filter
  (`brightness(0) invert(1)`) im Dunkelmodus; das Logo ist einfarbig.
- Scroll-Zustand über Bricks' eigene Klasse
  `#brx-header.brx-sticky.scrolling`, kein eigenes Skript.
- Wurzelregeln der Header-Klassen tragen die Element-Klasse
  (`.site-nav.brxe-section`), damit der Import sie nicht in Controls
  übersetzt und `color-mix`-Werte heil bleiben.

Umbau 09.10.2026 (Entscheidung Nils, Statusbericht): Branchen-Dropdown
jetzt Arztpraxen (`/branchen/arztpraxen/`), Heilberufe, Kanzleien & Freie
Berufe (`/branchen/kanzleien/`), Mittelstand (`/branchen/mittelstand/`),
Alle Branchen (`/branchen/`); Freie Berufe, Ferienwohnungen, Handwerk und
Kundendienst entfallen als eigene Seiten, Gastgewerbe folgt nach dem
Launch. Footer 54 gleich. Seiten: Arztpraxen 163 unter Branchen 193
gehängt (Kampagnenseiten wandern mit), neue Entwürfe Kanzleien 203 und
Mittelstand 204. Startseite: Mosaik-Kacheln und Zielgruppen-Panels zeigen
auf die neuen Adressen, Standardlink der Component Zielgruppen-Panel
ebenso. Revisionen zum Zurückrollen: Startseite 199, Header 200, Footer 201.

Umbau 09.10.2026 (2): Referenzen im Header als einfacher Link
`navli2` auf `/referenzen/` statt Dropdown mit fünf Kunden (Revision 205).
Die Übersicht kommt aus dem Post-Typ `referenz` und verlinkt die
Einzelseiten. Option für später: eine Referenzen-Liste im Footer.

Umbau 11.09.2026 nach Nils' Rückmeldung: Menü mit Leistungen, Branchen
(Dropdown: Ärzte, Heilberufe, Freie Berufe, Kanzleien, Ferienwohnungen,
Handwerk, Kundendienst), Referenzen (Dropdown: DIGIZT Haushaltsgeräte,
Lungenpraxis Tibarg, Dialyse Güstrow, Metallbau Rostock, Urlaub bei
Jana), Blog, Über uns. Links sind Platzhalter unter `/branchen/…/`,
`/referenzen/…/`, `/blog/`, `/ueber-uns/`. Dropdown-Aufbau: `dropdown`
(Text, Chevron, `toggleOn: both`) › `div` mit `customTag: ul` und
`_hidden: {_cssClasses: "brx-dropdown-content"}` › Text-Links. Abstand
der Menüpunkte jetzt `--da-sp-8`. Der Burger (Toggle-Element) liegt als
letztes Kind in der Nav, damit Bricks ihn nur unter dem Breakpoint zeigt
und das mobile Menü daran bindet; DOM-Reihenfolge Logo, Aktionen, Nav,
die optische Reihenfolge regelt `order` (Nav 1, Aktionen 2, mobil Nav 3,
damit der Burger rechts außen steht).

Nachtrag: Die Klassenregeln `.nav-menu .brx-nav-nested-items …` griffen
im Frontend nicht (Ursache am 13.09.2026 gefunden: der Wrapper-Block
`ul.brx-nav-nested-items` fehlte, siehe unten).
Abstand, Padding, Typografie, Hover und Aktiv-Zustand der obersten Ebene
liegen deshalb in den Nav-Einstellungen selbst (`gap`, `itemPadding`,
`itemTypography`, `itemTypography:hover`, `itemTypographyActive`), die
Bricks mit `#brxe-navmn1 :where(…)` ausgibt. Die Dropdown-Optik liegt seit
13.09.2026 wieder komplett in der Klasse `nav-menu` (Desktop-Karte und
Drawer-Liste), weil die ID-Regeln der Controls sonst die mobile Variante
blockieren.

Offen: Footer-Template „Main Footer“ (54), mobiles Menü im Browser
prüfen, aktiver Menüpunkt (`aria-current`) setzt Bricks automatisch.

### Schritt 9: Footer und Hero der Startseite

Stand 11.09.2026: Footer-Template „Main Footer“ (54, Bedingung „gesamte
Website“). Aufbau: Section `site-footer` › Container › Div `footer-grid`
mit Marke (Logo 110 per Filter weiß, Kurztext), Spalten Leistungen,
Branchen, Kontakt (Telefon, Mail, Adresse mit Icons aus dem Set) › Div
`footer-bottom` mit © `{current_date:Y}` und Impressum/Datenschutz. Die
Klasse `site-footer` trägt alle Regeln, Kinder tragen nur `_cssClasses`.
Adresse ist noch Platzhalter „[Adresse ergänzen]“.

Hero der Startseite (Post 2, ersetzt Nils' Test-Section): Section `hero`
› Container › Eyebrow, H1 mit `strong`, Lead, Buttons (primär, ghost),
Vertrauensliste mit drei Check-Icons. Die Klasse `hero` trägt Verlauf,
Schein und Typografie; die zentrierte Ausrichtung kommt über
`.hero > .brxe-container { align-items: center }`.

Mosaik und Partnerzeile (11.09.2026, Post 2): Section ohne Padding ›
Container › Div `mosaic` (Klasse trägt Raster, Kacheln, Chips, Karte,
Liste und die Media-Queries mit `.mosaic.brxe-div`). Kacheln Praxen,
Kanzleien, Mittelstand sind Divs mit `tag: a` und Link, darin Bild
(98, 67, 66), Chip und eine Service-Karte-Instanz; die Textkarte „Diese
Woche“ nutzt Service-Punkt-Instanzen direkt in `ul.mosaic-list`. Die
Partnerzeile ist eine Section `partners` mit Container `partners-inner`,
Label und Wortmarken (`wordmark`, `wide`, `serif`). Bilder für Partner-
Logos später einfach als Image statt Wortmarke.

Nachjustiert (11.09.2026): Glas-Effekt war zu deckend. Paletten-
farben `da_glass` (hell 0.84, dunkel 0.84), `da_glass_border` (hell 0.55)
und `da_glass_sand` (hell 0.86, dunkel 0.86) per `bricks/update-color`
gesenkt (0.72 war zu durchsichtig für den Lesbarkeitstest), dafür
Blur der Service-Karte auf `blur(24px) saturate(1.4)` erhöht; Tokens in
`design-system/colors_and_type.css` gleich. Service-
Karte: Selektor `.sc-title` hat jetzt `line-height: 1.3` (vorher erbte
der Titel die Absatz-Zeilenhöhe).

Nachjustiert (13.09.2026): Der Hero begann direkt unter dem Header, weil
das Header-Template nur `headerSticky` hatte (`position: fixed`, Header
über dem Inhalt). Jetzt zusätzlich `headerStickyOnScroll` (`position:
sticky`, im Fluss), der obere Abstand `--da-sp-20` ist wieder sichtbar.
Das Mosaik brach nie um: Die Grundregel `.mosaic.brxe-div` stand im
Custom-CSS hinter den Media-Queries (der Adapter sortiert `@media` nach
oben). Grundwerte jetzt als Controls (`_display`, `_gridTemplateColumns`,
`_gridGap`, `_gridAutoRows`), Media-Queries bleiben im Custom-CSS; gleiche
Korrektur für `audience` (Controls) sowie `lp-hero` und `flip`
(Media-Query-Selektoren mit Element-Klasse). Regel in `MERKREGELN.md`.
Geprüft per Playwright bei 1440/900/400px: 4, 2, 1 Spalten.

Mosaik zweiter Durchgang (13.09.2026): Am Tablet blieb rechts ein Rand,
weil Bricks' Container `align-items: flex-start` hat und das Mosaik-Div
nur so breit wurde wie sein Inhalt. Klasse `mosaic` jetzt mit `_width:
100%`, Spalten `minmax(0, 4fr) minmax(0, 3fr) minmax(0, 2.4fr) minmax(0,
2.4fr)`, Reihen `minmax(500px, auto)`, Anordnung über
`grid-template-areas` (Desktop eine Zeile, Tablet 2×2, Smartphone eine
Spalte), Kacheln mit `grid-area` statt `grid-column`. Dabei fiel auf, dass
die Container am Staging 1100px breit waren: Der Theme Style hatte nur die
Altlast `general.containerMaxWidth` (`.brxe-container.root`). Jetzt
`container.width: 1240px`, Altlast entfernt, Build angepasst. Geprüft bei
1440/1280/900/400px: Container 1240/1234/864/364, Mosaik bündig, kein
Überlauf außer dem Header-Menü bei 400px (nächster Schritt).

Mobiles Menü (13.09.2026): Die Diagnose „Bricks 2.4 rendert die Nav-Kinder
ohne `ul.brx-nav-nested-items`“ war falsch. Bricks rendert den Wrapper
nicht selbst; er ist ein Kind-Element der Nav, das der Builder beim
Einfügen anlegt und das beim Aufbau per MCP fehlte (Vorlage: das gekaufte
Mega-Menu-Template von Nick Arce, Nav › Block `brx-nav-nested-items` ›
Punkte, Toggle daneben). Header 52 jetzt: Nav `navmn1` › Block `navitm`
(`customTag: ul`, `_hidden._cssClasses: brx-nav-nested-items`) › Leistungen,
Branchen, Referenzen, Blog, Über uns, Button `navcta` (`nav-cta`, nur im
Drawer sichtbar) › Toggle `hdrbrg`. Dazu zwei Klassenkorrekturen:
`site-nav` trägt den Blur auf `::before` (ein `backdrop-filter` auf der
Section machte sie zum Containing Block des fixierten Drawers, Höhe 48px),
`nav-menu` richtet den Drawer oben aus (`justify-content: flex-start`) und
gestaltet den CTA mit `!important` gegen die ID-Regeln der Nav-Controls.
Geprüft bei 1440/900/400px: Desktop-Menü ohne Burger, darunter Burger,
Drawer 72px bis Fensterunterkante, Dropdowns klappen im Drawer auf, Body
ist gesperrt, kein horizontaler Überlauf. Revisionen 120 bis 123.

Feinschliff (13.09.2026): Burger zeigt im offenen Zustand ein X (Bricks
setzt `aria-expanded="true"` und `is-active`; das SVG wird ausgeblendet,
zwei Pseudo-Elemente bilden das X, kein zweites Icon nötig). Untermenüs im
Drawer wie im Prototyp: eingerückte schlichte Liste ohne Karte, Rahmen und
Hover-Fläche. Dafür sind die Dropdown-Controls der Nav (`dropdown…`)
entfernt, die Klasse `nav-menu` gestaltet Desktop-Karte und Drawer-Liste
allein. Header-Section mit `padding: 0 var(--da-sp-6)`; `nav-inner` trägt
Richtung, Ausrichtung, Lücke und Höhe als Controls, mobil kleinere Lücke;
`nav-actions` rückt mobil mit `margin-left: auto` neben den Burger (Logo
links, Mond und Burger rechts). Geprüft bei 400/900/1440px.

Nächste Schritte: Startseite unterhalb des Heros aus den Components
(Kacheln, Schritte, Referenzen, Kundenstimmen, Digital-Check), Popup
Digital-Check mit Formular.

### Schritt 10: Zielgruppen-Umschalter (Tabs) auf der Startseite

Stand 11.09.2026: Section „Für wen“ (`#fuer-wen`, Klasse `section`) ›
Container › Abschnittskopf (Div mit `section-head` `dasecti02` + neuem
Modifier `center` `centr1`: Eyebrow, H2, Copy) › Bricks-Element
**Tabs (Nestable)** `fwtabs` mit Klasse `tabs` (`tabs01`).

Aufbau des Tabs-Elements (Bricks-Konvention, Rollen in
`_hidden._cssClasses`): Block `tab-menu` › drei Divs `tab-title` (je ein
Text-Span) und Block `tab-content` › drei Blocks `tab-pane` (mit `_cssId`
`tab-praxen`, `tab-kanzleien`, `tab-mittelstand`). Bricks setzt `brx-open`
auf Titel und Panel, `openTab: "0"` öffnet das erste Panel.

Die Steuerungen mit Bricks-Vorgabewerten (`titlePadding`, `contentPadding`,
`contentBorder`, `titleActiveBackgroundColor`, `titleActiveTypography`)
stehen bewusst am Element, weil Bricks die Vorgaben mit ID-Selektor
ausgibt und Klassen sie sonst nicht überschreiben könnten. Alles Übrige
(Pillen-Optik, Hover, Aktivfarbe, Mobil-Verhalten) liegt in der Klasse
`tabs` mit Selektoren `.tabs.brxe-tabs-nested > .tab-menu …`.

Jedes Panel enthält eine Instanz der neuen Component **Zielgruppen-Panel**
(`28c728`, Kategorie Abschnitte, Root-Klasse `audience` `audnc1`):
Figure mit Bild, rechts H3, Lead (`.lead`), `ul.checks` (Slot `fc3fdf`
mit Service-Punkt-Instanzen, Text darf `<strong>` enthalten) und
Textlink. Properties: Bild, Alt-Text, Titel, Lead, Linktext, Link.
Bilder: Praxen 77 (m22), Kanzleien 76 (m23), Mittelstand 79 (m20).

Das Panel ist absichtlich nicht selbst der `tab-pane`, sondern liegt
darin: So bleibt `display: grid` der Component von Bricks' Ein-/Aus-
blenden (`.tab-pane.brx-open`) unberührt; die Einblend-Animation hängt an
`.tab-pane.brx-open > .audience`.

`add-element` nimmt einen ganzen verschachtelten Teilbaum inklusive
Component-Instanzen mit `slotChildren: {slotId: [Kinder]}` an, eigene
6-stellige IDs werden übernommen.

### Schritt 11: Startseite unterhalb des Heros

Stand 13.09.2026: Startseite (Post 2) ist komplett, alle Abschnitte des
Prototyps `prototype/index.html` sind aus den Components zusammengesetzt
(Revisionen 125 bis 129). Aufbau je Abschnitt, jeweils Section › Container:

- **Leistungen** `lssec0` (`#leistungen`, Klasse `section`, Hintergrund
  `--da-bg-alt`, Rahmen oben/unten als Controls) › Abschnittskopf `lshead`
  (`section-head`) › Kacheln `lstile` (`tiles`) mit acht Instanzen in
  Prototyp-Reihenfolge: Foto-Kachel `0851ab` (74, Ausschnitt 35 % 25 %),
  Kachel `c3c53b` cream (Standard), Foto 94, Kachel teal, Kachel deep,
  Foto 92, Kachel sand, Foto 88.
- **So arbeiten wir** `sasec0` (`#so-arbeiten-wir`) › Kopf › Schritte
  `sastep` (`steps`) mit drei Schritt-Instanzen `719767` (nummer, titel,
  copy).
- **Referenzen** `rfsec0` (`#referenzen`, Klasse `section-sm`, bg-alt,
  Rahmen) › Kopf (nur Eyebrow und H2) › Referenzkarten `rfrefs` (`refs`)
  mit vier Instanzen `cbca1c` (Logos 62, 106, 107, 108) › Kundenstimmen
  `rfquot` (`quotes`, Abstand oben `--da-sp-5`) mit zwei Instanzen `05cb9e`
  (erste `featured`). Texte tragen noch die Platzhalter aus dem Prototyp.
- **Über uns** `absec0` (`#ueber-uns`, Klassen `section` und neu `about`
  `023c83`) › Div `absplt` (`split`, `width: 100 %`) › Spalte 1 mit
  Eyebrow, H2 und `about-facts` (vier `fact`-Divs mit `num` und `label`
  als Spans) › Spalte 2 `about-text` mit drei Absätzen. `about` trägt
  Hintergrund, Rahmen, Fakten-Raster (2 Spalten, ab 480px eine) und
  Typografie; die Kind-Elemente tragen nur `_cssClasses`.
- **Digital-Check** `dcsec0` (`#digital-check-info`) › Instanz
  Digital-Check-Block `e44db4` mit fünf Service-Punkten im Slot `17e049`.

Geprüft per Playwright bei 1440/900/400px: keine kaputten Bilder, kein
horizontaler Überlauf, Raster 4/2/1 (Kacheln), 3/3/1 (Schritte), 4/3/1
(Referenzen), 2/2/1 (Kundenstimmen, Über uns).

Attachment-IDs der Fotos folgen dem Muster `99 − n` für `mNN` (m05 → 94,
m07 → 92, m11 → 88, m25 → 74).

Hinweis: Die Klasse `split` (Import vom 11.09.) hat ihre Media-Query noch
hinter der Grundregel im Custom-CSS. Das funktioniert, weil der Import
nicht umsortiert; bei der nächsten Änderung per MCP nach der Merkregel
(Grundwerte in Controls) umbauen.

Inhaltliche Ergänzung (16.09.2026, Nils): Foto und Video vom Konzept bis zum
Publishing, alle Inhalte auf Wunsch aus einer Hand. Umgesetzt auf der
Startseite: Hero-Lead (`herold`), Abschnittskopf Leistungen („Vier
Bereiche“, `lshh20`, `lshp00`), Kachelraster: Foto-Kachel Hafen (m07)
ersetzt durch Kachel `lsk009` „04 · Foto, Video & Text“ (Sand), Recruiting-
Kachel `lsk007` auf Creme, Kachel 01 `lsk002` ohne „Texte und Bilder“;
Mosaik-Karte `ml0204` („Neue Teamfotos …“); je Zielgruppen-Panel ein
vierter Service-Punkt (`fwc104`, `fwc204`, `fwc304`), Mittelstand-Lead;
Über uns `abp002`; Digital-Check-Block mit sechstem Prüfpunkt „Inhalte“
(`dcp006`); Footer 54: Link „Foto, Video & Text“ (`fl0105`) und Kurztext.
Prototyp-Quellen in `prototype/src/` gleich geändert, Build gelaufen.

Gelernt: `update-element` und `batch-update-elements` ändern nur
`settings`. Property-Werte einer Component-Instanz und Slot-Inhalte
lassen sich nur durch Entfernen und Neu-Einfügen der Instanz ändern
(`add-element` mit `properties` und `slotChildren`); ein `add-element`
mit `parentId` = Instanz landet zwar im Baum, aber nicht im Slot.

Offen: Popup Digital-Check mit Formular (alle Buttons zeigen auf
`#digital-check`), echte Kundenstimmen und Leistungsumfang je Referenz,
Adresse im Footer, drei Landingpages.

### Schritt 12: Popup Digital-Check mit Formular

Stand 13.09.2026, Entscheidung Nils: kein HubSpot, Bricks-Bordmittel,
Anfragen werden manuell bearbeitet. Popup-Template „Popup Digital-Check“
(130, Bedingung „gesamte Website“, Schließen per Backdrop und Escape,
Inhalt `calc(100% - 32px)`, max. 640px, Hintergrund `--da-teal-deeper` zu
70 %). Aufbau: Div `ckdlg0` (Global Class `check-dialog` `b44e42`, Kategorie
Sections: Fläche, Radius, Schatten, Kopfzeile, Schließen-Button,
Formular-Feinheiten) › Kopf `ckhead` (Eyebrow, H2, Intro, Button `ckclos`
mit X-Icon `icon_ekrpbw1ba` und Interaktion „hide popup 130“) › Formular
`ckform`.

Felder (IDs sind zugleich die Platzhalter in der E-Mail): `audnce` Radio
„Ich führe“ (Praxis, Kanzlei, Unternehmen, Pflicht), `fname1` Name
(Pflicht, 50 %), `femail` E-Mail (Pflicht, 50 %), `fphone` Telefon (50 %),
`fsite1` Website (50 %), `fmsg01` Textarea, `fdsgvo` Checkbox Einwilligung
(Pflicht, Text mit Platzhalter für den Datenschutz-Link), `fpage1` Hidden
`{post_title}` (Seite, von der die Anfrage kam), `fhoney` Honeypot.
Aktionen in dieser Reihenfolge: `save-submission` (Tabelle, global aktiv),
`email` an post@digital-avenue.de mit Reply-To auf die Absenderadresse.
Erfolgs- und Fehlermeldung mit Telefonnummer als Ausweg.

Öffnen: Interaktion `click › show › popup 130` direkt auf den vier Buttons
Hero `herob1` (Post 2), Header `hdrcta` und Drawer `navcta` (Template 52)
und dem Button `07a417` in der Component Digital-Check-Block (Property
„Button-Link“ entfernt). Alle vier sind jetzt `tag: button` ohne Link.

Geprüft per Playwright: Popup öffnet aus allen vier Buttons bei 1440 und
400px, schließt per X, Backdrop und Escape, Body-Scroll gesperrt; die
Probesendung liefert alle Felder korrekt in den E-Mail-Text, scheitert aber
an der E-Mail-Aktion, weil am Staging kein Mailversand eingerichtet ist
(kein SMTP-Plugin, siehe Systeminfo). Gelernt:

- Klassen-CSS wird nur ausgegeben, wenn das Element die Klasse per
  `_cssGlobalClasses` (ID) referenziert. `_cssClasses: "check-dialog"`
  setzt nur den Namen ins HTML, das CSS der Global Class fehlt dann.
- Eine Klick-Interaktion auf einem Button mit `href` (auch `#anker`)
  öffnet das Popup nicht; erst ohne Link läuft sie. Deshalb CTA-Buttons als
  `tag: button` ohne Link.
- `_interactions` auf einer Global Class nimmt der MCP-Adapter nicht an
  („Expected a registered setting for a global class“); Interaktionen
  deshalb je Element setzen.
- `list-form-submissions` sucht das Formular-Element auf der angegebenen
  Post-ID; die Tabelle speichert aber die Seite, auf der abgeschickt wurde.
  Popup-Formulare lassen sich damit per MCP nicht auslesen, im Admin unter
  Bricks › Form Submissions schon.
- Playwrights `click()` scheitert auf Bricks-Elementen mit Lazy-Load-Klasse
  an der Sichtbarkeitsprüfung; im Test per `element.click()` auslösen.

Offen: SMTP einrichten (Staging und Produktion, z. B. WP Mail SMTP oder
FluentSMTP mit dem Mailkonto des Hosters), Datenschutz-Link im
Checkbox-Text, optional Cloudflare Turnstile (Schlüssel nötig),
Löschfrist für die Submissions-Tabelle festlegen, Probesendung nach
SMTP-Einrichtung wiederholen.

### Schritt 13: Kampagnen-Landingpages Arztpraxen (K1, K2, K9)

Stand 17.09.2026. Grundlage: `handoff/kampagne/03_Landingpage_Texte.md`.
Entscheidungen: Kampagnenseiten liegen unter `/branchen/arztpraxen/…/`
(Elternseite „Arztpraxen“, Post 163, Entwurf, seit 09.10.2026 unter
„Branchen“ 193; vorher `/arztpraxen/…/`); alle Referenzen dürfen genutzt werden;
die Google-Bewertung bleibt draußen; Grundparameter kommen aus dem Plugin
„Digital Avenue Parameter“ (`wordpress/plugins/da-parameter/`).

Seiten (alle Entwurf, Eltern 163): K1 „Facharztpraxis entlasten“ 169
(`facharztpraxis`), K2 „Empfang entlasten“ 171 (`empfang-entlasten`),
K9 „Betreuung wechseln“ 173 (`betreuung-wechseln`). Aufbau je Seite:

1. Hero Landingpage (Component `951227` als Section-Root; Button 1
   `#kontakt`, Button 2 `#leistungen`).
2. Section `#leistungen` › Container › Feature-Block `25cc6c` mit drei
   Service-Punkten im Slot `7823d9`.
3. Section `#referenz` (bg-alt) › Abschnittskopf (`section-head center`)
   › Div max 560px › Referenzkarte `cbca1c` Pneumologie Eppendorf
   (Platzhalter-Logo Attachment 164, `design-system/assets/`).
4. Template-Element → „LP Arztpraxen: Gemeinsame Module“ (Template 167,
   `noRoot`): Concierge (`0a205a`, Serviceversprechen als Copy und drei
   Timeline-Punkte), Schritte (`steps` + 3× Schritt `719767`), Partner
   (IONOS, Doctolib, Placetel als `tile tile-cream` im `steps`-Raster),
   FAQ (`faq`-Accordion mit fünf Fragen aus dem Kampagnenpaket).
5. Section `#kontakt` › Container › Div `lp-kontakt` (Klasse `lpkont`):
   links Eyebrow, H2, kampagnenspezifische Copy, Direktkontakt; rechts
   Div `lp-form-card` (`lpfcrd`) mit H3 und Template-Element → „LP
   Arztpraxen: Kontaktformular“ (Template 165).

Formular (Template 165, Bricks-Form `lpfrm0`, Klasse `lp-form` `lpform`):
Praxis, Name, E-Mail oder Rückrufnummer, Thema (Select), Nachricht,
HTML-Hinweis „keine Patientendaten“ mit Datenschutzlink, optionale, nicht
vorausgewählte Marketing-Checkbox, versteckte Felder `utm_campaign` und
`utm_source` (`{url_parameter:…}`) und Seitentitel, Honeypot. Aktionen:
Submission speichern + E-Mail an post@digital-avenue.de. Erfolgstext aus
dem Kampagnenpaket. Kein Tracking-Skript.

Weitere Varianten (K3–K8): Seite 169 mit `bricks/duplicate-post`
duplizieren und nur Hero-, Feature-, Referenz- und Kontakt-Texte tauschen;
die gemeinsamen Module kommen automatisch aus Template 167.

Offen: Meta-Titel und -Beschreibung (Bricks hat keine SEO-Felder, dafür
ein SEO-Plugin oder Meta Box nutzen), Seite „Arztpraxen“ (163) füllen,
Seite „Arztpraxen“ (163) als Branchenseite bauen, Datenschutzseite mit
Abschnitt zur Rechercheansprache, Serviceversprechen nach Plugin-
Installation per `{echo:da_param('serviceversprechen')}` einsetzen (heute
noch als Klartext in Concierge, FAQ und Formular-Erfolgstext).

Bilder (17.09.2026, Higgsfield Soul 2.0, auch im Prototyp als m34–m39):
K1 Hero 176 (m34), Feature 177 (m35); K2 Hero 178 (m36), Feature 179
(m37); K9 Hero 180 (m38), Feature 181 (m39). Auf Staging als PNG
hochgeladen (`upload-media` per URL, der Server holt das Bild selbst; aus
der Cloud ist das CDN gesperrt). Prototyp: `prototype/src/pages/lp-*.html`,
Routen `#lp-facharztpraxis`, `#lp-empfang-entlasten`,
`#lp-betreuung-wechseln`; bewusst nicht im Footer oder in der Navigation
verlinkt, Kampagnenseiten werden nur über den Kampagnenlink erreicht.

`update-element` kennt keine Component-Properties (nur `settings`). Eine
Instanz ändert man über `set-page-elements` mit dem ganzen Seitenbaum;
die IDs bleiben dabei erhalten (so am 17.09.2026 die Bilder getauscht).

`render-elements` zeigt für Template-Elemente zwar das HTML der Templates,
aber nicht deren Klassen-CSS; das erzeugt Bricks erst im Frontend.

### Schritt 14: Branchenseite Heilberufe

Stand 17.09.2026. Grundlage `handoff/branchen/heilberufe.md` (Konzept und
Texte aus dem Chat). Elternseite „Branchen“ (Post 193, Entwurf, leer),
Seite „Heilberufe“ (Post 196, Entwurf, `/branchen/heilberufe/`). Prototyp:
`prototype/src/pages/heilberufe.html`, Route `#heilberufe`, Footer-Link
„Heilberufe“ zeigt darauf.

Aufbau (Post 196): Hero Landingpage `951227` (Buchungs-Karte als Overlay,
Button 1 `#digital-check-info`, Button 2 `#leistungen`) › „Kennen Sie
das?“ mit `pains` und drei Pain-Karten `469300` (Zitat plus kurzer Bezug
zur Lösung) › `#leistungen` (bg-alt): Container mit `_rowGap` sp-16,
Abschnittskopf und drei Feature-Blöcke `25cc6c` (zweiter mit `bildseite:
links`) › `#terminbuchung`: `split` mit Abschnittskopf-Text, drei Absätzen,
Ghost-Button und rechts Service-Karte `580b83` (Variante sand, drei
Service-Punkte) › `#betreuung` (bg-alt): Concierge `0a205a` › `#recruiting`:
Feature-Block mit Bild links › `#referenzen` (`section-sm`, bg-alt):
Abschnittskopf, Platzhalter-Tag, `refs` mit drei Referenzkarten `cbca1c`
(Pneumologie Eppendorf 164, Lungenpraxis am Tibarg 107, Dialyse Güstrow
106) › `#digital-check-info`: Digital-Check-Block `e44db4` mit fünf
Punkten › `#faq` (bg-alt): Accordion mit neun Fragen › `#kontakt`:
`lp-kontakt` mit Template-Element → „Heilberufe: Kontaktformular“
(Template 194, Themen Sichtbarkeit und Google, Online-Terminbuchung,
Praxiswebsite, Telefonie, Recruiting, Sonstiges; Hinweis „keine Klienten-
oder Gesundheitsdaten“).

Bilder (Higgsfield Soul 2.0, im Prototyp m40–m44): Hero 188, Sichtbarkeit
189, Terminbuchung 190, Praxiswebsite 191, Recruiting 192. Concierge nutzt
weiter Bild 75 (m24).

Abweichungen vom Konzept: Die Vertrauenszeile unter dem Hero gibt es nur
im Prototyp, die Hero-Component hat dafür keine Property. Die
Feature-Blöcke tragen ihre Titel als H2 (Component), im Prototyp als H3.
`update-element` und `create-post` kennen für Container kein `_gap`, der
Abstand zwischen gestapelten Blöcken kommt über `_rowGap`.

Offen (Entscheidungen von Nils, siehe Konzept Abschnitt 4): Name des
Buchungstools, Funktionsstand vor Livegang, Datenschutzaussage zur
Buchung, Referenz aus den Heilberufen, Doctolib-Satz in den FAQ. Meta-Titel
und -Beschreibung brauchen weiterhin ein SEO-Plugin.

### Danach

Header und Footer als Templates, dann Seiten per
`commit-html-css-page-import` (Hero zuerst als Probe), dann Felder und
Post-Typen aus den fertigen Templates ableiten. Siehe
`handoff/BETRIEBSKONZEPT-MCP.md`.

### Schritt 15: Partnerseiten und Blog-Seite

Stand 09.10.2026. Auftrag Nils: eigene Seiten für Placetel, Doctolib, IONOS
und Netleaders. Texte und Annahmen in `handoff/partner/partnerseiten.md`,
Prototyp `prototype/src/pages/partner*.html` (Routen `#partner`,
`#partner-placetel` usw.), Bilder m45 bis m52.

Seiten (alle Entwurf): Partner 214 (`/partner/`), Placetel 215, Doctolib
216, IONOS 217, Netleaders 218 (`/partner/<slug>/`). Aufbau je Partnerseite:
Hero Landingpage `951227` als Section-Root › `#leistungen` (bg-alt):
Abschnittskopf, Feature-Block `25cc6c` mit fünf Service-Punkten ›
`#zustaendigkeiten`: `split` mit Text und Service-Karte `580b83` (sand)
„Wer macht was“ › `#ablauf` (bg-alt): drei Schritte `719767` im Raster
`steps` › `#digital-check-info`: Digital-Check-Block `e44db4` mit vier
Punkten › `#faq` (bg-alt): Accordion mit FAQ-Schema › `#weitere-partner`
(`section-sm`): drei Kacheln `c3c53b` (cream) mit Links. Übersicht 214:
Abschnittskopf mit H1 und vier Kacheln (cream, teal, sand, deep) im Raster
`tiles`, danach Digital-Check-Block.

Bilder (Mediathek): m45 206, m46 207, m47 208, m48 209, m49 210, m50 211,
m51 212, m52 213. Erzeugt wurden die Bäume per Skript aus denselben Daten
wie Konzept und Prototyp.

Verlinkung: Footer 54, Spalte Leistungen, Link „Partner“ (`fl0106`);
Partnerzeile der Startseite (`prtw01` bis `prtw04`) verlinkt die
Einzelseiten über das `link`-Feld des Basic-Text-Elements.

Blog: Seite „Blog“ 231 (Entwurf) ist als Beitragsseite eingetragen
(`set-reading-settings`), der Standardbeitrag „Hello world!“ liegt im
Papierkorb. Offen: Archiv-Template für Beiträge (zuerst im Prototyp) und
die ersten Beiträge vor dem Launch.

Hinweis zur Prüfung: `render-elements` zeigt Accordion-Inhalte nicht
(auch nicht auf der fertigen Heilberufe-Seite); FAQ im Frontend prüfen.

### Schritt 16: Kontaktseite und allgemeines Kontaktformular

Stand 09.10.2026, Entscheidung Nils. Prototyp `prototype/src/pages/kontakt.html`
(Route `#kontakt`). Bricks: Seite „Kontakt“ 235 (Entwurf, `/kontakt/`).

Aufbau: `#kontakt`: `lp-kontakt` (`lpkont`) mit Text links (Eyebrow, H1,
Copy, vier Zeilen `lp-kontakt-direkt`: Telefon, E-Mail, Servicezeiten,
Rückmeldung) und Formularkarte (`lpfcrd`) rechts mit Template-Element ›
`#standorte` (bg-alt): Abschnittskopf und Raster `tiles` mit Foto-Kachel
Hamburg (Bild 92, m07), Kachel cream Hamburg (Adresse, Link „Route planen“
zu Google Maps, kein eingebettetes Kartenmodul), Foto-Kachel Warnemünde
(Bild 91, m08), Kachel sand Rostock (Platzhalter Adresse) ›
Digital-Check-Block.

Neues Template „Kontaktformular allgemein“ 233 (Section, Formular
`ktfrm0`, Klasse `lp-form`): Unternehmen, Name, E-Mail oder Rückrufnummer,
Thema (Website, Telefonie, Online-Terminbuchung, Hosting und E-Mail, Foto,
Video und Text, Recruiting und Karriereseite, Digital-Check, Etwas
anderes), Nachricht, Hinweis ohne Gesundheits- und Mandantendaten mit
Datenschutzlink, verstecktes Feld Seitentitel, Honeypot. Aktionen
Submission speichern und E-Mail an post@digital-avenue.de. Dieses
Template ist für alle neuen Seiten gedacht; die Formulare 165 und 194
können später darauf umgestellt werden.

Footer 54: Adresse „Appener Weg 3b, 20251 Hamburg“ (aus dem Impressum der
alten Site) statt Platzhalter, Link „Kontakt“ (`fl0400`) vor Impressum.

### Schritt 17: Unternehmensdaten, Header ohne CTA, Rückmeldezeiten

Stand 09.10.2026. Anleitung für Nils: `handoff/ANLEITUNG-2026-10-09.md`.

- Meta Box: Feldgruppe „Unternehmensdaten“ 243 (`meta-box/create-field-group`,
  `settings: {object_type: "setting", settings_pages: ["unternehmen"]}`) mit
  zehn Feldern: `firma`, `ansprechpartner`, `telefon`, `telefon_link`,
  `email`, `adresse_hamburg`, `adresse_rostock`, `servicezeiten`,
  `rueckmeldung_interessenten`, `reaktionszeit_kunden`, jeweils mit
  Standardwert. Die Einstellungsseite selbst (ID `unternehmen`, Option
  `da_unternehmen`) legt Nils im Admin an; Meta Box hat dafür keine
  Ability. Werte lesen und schreiben geht danach über
  `/wp-json/meta-box/v1/settings-page?id=unternehmen`. Den genauen
  Dynamic-Data-Tag mit `preview-dynamic-tag` ermitteln, bevor Elemente
  umgestellt werden.
- Header 52: Buttons `hdrcta` (Desktop) und `navcta` (mobiles Menü)
  entfernt (Revision 239). Die Klasse `959b1a` hängt an keinem Element mehr.
- Rückmeldezeiten nach Entscheidung Nils: Interessenten „innerhalb eines
  Werktags“, Kunden „in der vertraglich vereinbarten Reaktionszeit“.
  Geändert in Template 167, Seite 196, Seite 235, Prototyp und
  Textdokumenten; Mailingtexte bewusst nicht.

### Schritt 18: Leistungsseiten

Stand 09.10.2026, Entscheidung Nils: jede Leistung eine Unterseite. Texte in
`handoff/leistungen/leistungsseiten.md`, Prototyp
`prototype/src/pages/leistungen.html` und `leistung-*.html`, Bilder m53 bis
m60. Weiterleitungen der alten Service-Seiten: `handoff/REDIRECTS.md`.

Seiten (alle Entwurf): Leistungen 244 (`/leistungen/`), Sichtbarkeit &
Marke 245, Infrastruktur & Prozesse 246, Digital-Concierge 247, Foto, Video
& Text 248. Aufbau wie die Partnerseiten (Schritt 15): Hero, `#leistungen`
mit Feature-Block, `#details` mit Text und Service-Karte, `#ablauf`,
Digital-Check, `#faq`, `#weitere` (Infrastruktur: vier Partner-Kacheln im
Raster `tiles`, sonst drei Leistungs-Kacheln im Raster `steps`). Übersicht:
H1, vier Kacheln wie auf der Startseite, „So arbeiten wir“,
Digital-Check.

Bilder diesmal als optimierte JPGs aus `prototype/img/` per Base64
hochgeladen (249 bis 256, je 130 bis 240 KB), nicht als PNG-Originale.

Verlinkt: Startseiten-Kacheln `lsk002`, `lsk004`, `lsk005` (Linktext jetzt
„Mehr erfahren“), `lsk009` (Revision 262); Footer `fa0101` bis `fa0105`
(Revision 263). Offen: Der Footer-Link „Digital-Check“ zeigt auf
`#digital-check`, das es nicht gibt; er öffnet das Popup nicht.
