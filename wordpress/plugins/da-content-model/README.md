# Digital Avenue Content Model

WordPress-Plugin mit dem Datenmodell der Website: Custom Post Types,
Taxonomien, Meta-Box-Felder und die Settings Page „Unternehmen“.
Entscheidungen und Begründung: `handoff/BETRIEBSKONZEPT-MCP.md`.

Voraussetzung: Meta Box AIO aktiv (Group, Settings Page, Term Meta,
Admin Columns, REST API sind darin enthalten).

## Inhalt

| Typ | Slug | URL | Felder |
|---|---|---|---|
| Referenz | `da_referenz` | `/referenzen/<slug>/`, Archiv `/referenzen/` | Kunde, Website, Kurz, Logo hell/dunkel, Ergebnisse (Gruppe), Galerie, Kundenstimme (Gruppe) |
| Leistung | `da_leistung` | `/leistungen/<slug>/` | Icon, Kurz, Punkte, Link-Text |
| FAQ | `da_faq` | keine | Titel = Frage, Inhalt = Antwort, Schalter „im Digital-Check“ |
| Partner | `da_partner` | keine | Logo hell/dunkel, Website |
| Anfrage | `da_anfrage` | keine, nicht in REST | Status, Zielgruppe, Kontakt, Nachricht, Quelle, Notiz |

Taxonomien: `zielgruppe` (praxen, kanzleien, mittelstand; an Referenz,
Leistung, FAQ, Beitrag; Term-Meta: Landingpage, Ansprache) und
`leistungsbereich` (an Referenz).

Settings Page „Unternehmen“ (Option `da_unternehmen`): Kontakt, Social,
Team, Rechtliches.

## Installation

1. Paket bauen: `cd wordpress/plugins && zip -r da-content-model.zip da-content-model`
2. Im WordPress-Admin unter Plugins › Installieren › Plugin hochladen
   einspielen und aktivieren. Die Aktivierung legt die Zielgruppen an und
   schreibt die Permalinks neu.
3. Unter Bricks › Einstellungen › Allgemein die Post-Typen `da_referenz`
   und `da_leistung` für den Builder freischalten (oder per MCP
   `set-global-settings` mit `postTypes`).

## Aktualisieren

Geänderte Version hochladen (WordPress ersetzt das Plugin bei gleichem
Ordnernamen) oder per SFTP den Ordner austauschen. Felder und Typen sind
Code; nichts wird im Admin gepflegt.

## Digital-Check-Formular

Die Bricks-Formular-Aktion `create-post` legt einen Eintrag vom Typ
`da_anfrage` an. Meta-Zuordnung: `da_name`, `da_firma`, `da_email`,
`da_telefon`, `da_website`, `da_nachricht`, `da_zielgruppe`, `da_quelle`.
`da_status` bleibt leer und gilt als „Neu“.
