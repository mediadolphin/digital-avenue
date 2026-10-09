# Partnerseiten: Konzept und Texte

Stand 09.10.2026. Auftrag von Nils: eigene Seiten für die Partner Placetel,
Doctolib, IONOS und Netleaders. Die Texte hier sind die Quelle für Prototyp
(`prototype/src/pages/partner*.html`) und Bricks.

## Entscheidungen und Annahmen

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

## Aufbau jeder Partnerseite

1. Hero Landingpage: Eyebrow, H1 mit Betonung, Lead, Buttons (Digital-Check, „Was wir übernehmen“), Vertrauenszeile, Foto mit Service-Karte
2. `#leistungen` (bg-alt): Abschnittskopf und Feature-Block mit fünf Service-Punkten
3. `#zustaendigkeiten`: Zwei Spalten, links Text, rechts Service-Karte (Sand) „Wer macht was“
4. `#ablauf` (bg-alt): drei Schritte
5. Digital-Check-Block
6. `#faq` (bg-alt): Accordion mit FAQ-Schema
7. `#weitere-partner`: drei Kacheln mit Links auf die anderen Partnerseiten

## Übersicht `/partner/`

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

## Placetel `/partner/placetel/`

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

## Doctolib `/partner/doctolib/`

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

## IONOS `/partner/ionos/`

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

## Netleaders `/partner/netleaders/`

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
