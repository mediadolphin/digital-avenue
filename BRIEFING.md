# Briefing: Redesign digital-avenue.de

Stand: 10. September 2026. Ergebnis der Vorab-Klärung (Fragen und Antworten von Nils Rudolph).

## Ausgangslage

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
- Das eigentliche Design System und die Entwürfe liegen in Claude Design
  (claude.ai/design). Übergabe per "Send to Claude Code Web".

## Entscheidungen

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

## Offene Punkte

- Design-System-Dateien und Entwürfe aus Claude Design abwarten und als maßgebliche
  Grundlage lesen, bevor Layout und Typografie festgelegt werden.
- Inhalt des "Digital-Check" mit Nils abstimmen (Umfang, Dauer, was der Kunde bekommt).
- Echte Kundenstimmen nachliefern.
- Placetel-Logo und Partnerstatus prüfen (fehlt auf der Live-Site, steht im Konzept).

## Technische Hinweise

- digital-avenue.de ist aus dem Claude-Code-Netz gesperrt, aber über die
  Higgsfield-Sandbox (`sandbox_exec` mit curl) erreichbar.
- GitHub-Repo war zu Beginn leer. Arbeits-Branch: `claude/digital-avenue-redesign-0wnw6r`.
- Redirect-Plan sieht neue URL-Struktur `/leistungen/...` vor; die Landingpages
  sind darin noch nicht enthalten.
