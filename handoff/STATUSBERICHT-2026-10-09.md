# Statusbericht Relaunch digital-avenue.de

Stand 09.10.2026. Grundlage: Staging `relaunch.digital-avenue.de` am selben
Tag per MCP und Frontend gelesen, alle vier Branches im Repository, das
Konzept „Konzept und Website-Texte Relaunch“ und das „URL-Inventar &
Redirect-Plan“ aus Google Drive, die Sitemap der Live-Site.

Maßstab für jede Empfehlung: Wartung, SEO und Usability im Gleichgewicht,
so viel wie möglich in Bricks, so wenig eigener Code wie möglich.

## Auf einen Blick

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

## 1. Technik

### 1.1 Was am Staging steht

| Baustein | Bestand |
|---|---|
| Seiten | Startseite (veröffentlicht); Entwürfe Heilberufe (196), Kampagnenseiten Facharztpraxis (169), Empfang entlasten (171), Betreuung wechseln (173); leere Entwürfe Arztpraxen (163) und Branchen (193); vier private Testseiten; WordPress-Standardseite „Privacy Policy“ |
| Templates | Header 52, Footer 54, Popup Digital-Check 130; Abschnitte „LP Arztpraxen: Kontaktformular“ 165, „LP Arztpraxen: Gemeinsame Module“ 167, „Heilberufe: Kontaktformular“ 194 |
| Design System | 52 Farben mit Dunkelwert, 48 Variablen, 68 Global Classes in 8 Kategorien, 14 Components, Icon-Set mit 15 Icons |
| Post-Typen, Menüs | keine eigenen Post-Typen, keine WordPress-Menüs; die Navigation steckt fest im Header-Template |
| Umgebung | WordPress 7.1.3, PHP 8.4, Bricks 2.4, Meta Box mit MCP-Abilities, Plesk |

### 1.2 Befunde

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

### 1.3 Empfohlene Seitenstruktur

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

### 1.4 Meta Box: Custom Post Types ja oder nein

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

### 1.5 Bis zum Launch technisch nötig

- Sprache Deutsch, Rank Math, SMTP-Plugin mit echtem Postfach
- Redirects: sieben `/service/`-URLs, `/ueber-digital-avenue/`, zwei
  `/legal/`-URLs, Plugin-Reste
- Ein Kontaktformular-Template, Datenschutz-Link, Testversand je Formular
- `color-scheme`, Standardmodus, Dunkel-Logos der Referenzen
- 404-Seite als Bricks-Template
- Lighthouse und Barrierefreiheit je Seitentyp, Mobilprüfung der
  Kampagnenseiten nach der Media-Query-Korrektur
- Testseiten löschen, noindex aus, Go-Live per Migration

## 2. Inhalt

### 2.1 Geplante Seiten und vorhandene Copy

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

### 2.2 Platzhalter auf der Startseite

| Platzhalter | Anzahl | Wer liefert |
|---|---|---|
| Leistungsumfang des Digital-Checks | 4 | Nils |
| Kundenstimme, Name und Funktion | 2 + 2 | Nils |
| Link zur Datenschutzerklärung | 2 | entsteht mit der Seite |
| Adresse | 1 | Nils |

### 2.3 Befunde

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

## 3. Design

### 3.1 Stand

- Design System vollständig in Bricks: Tokens, Dunkelmodus über den Color
  Manager, Schriften lokal, Klassen, Components, Icons.
- Seitentypen gebaut: Startseite, Kampagnenseite, Branchenseite
  (Heilberufe), Popup.
- Dokumentiert: `handoff/BAUKASTEN.md` (auf dem Seitenbranch),
  `handoff/BRICKS-FARBSYSTEM-DARKMODE.md`, `handoff/BRICKS-SVG-ICONS.md`,
  `handoff/MERKREGELN.md`.

### 3.2 Offen und Befunde

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

## 4. Empfohlene Reihenfolge

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

## 5. Offene Entscheidungen

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
6. Leistungen zum Launch als vier Unterseiten oder zunächst eine Seite?
