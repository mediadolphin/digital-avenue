# MCP, Meta Box und Custom Post Types: Aufbau und Betrieb

Stand 11.09.2026. Grundlage: Bricks 2.4 RC mit MCP Adapter am Staging
`relaunch.digital-avenue.de`, Meta Box AIO, die 45 Bricks-Skills
(v0.1.0-beta.3) und der Prototyp in `prototype/`.

## 1. Grundsatz: drei Ebenen, drei Werkzeuge

| Ebene | Was dazugehört | Werkzeug | Quelle der Wahrheit |
|---|---|---|---|
| **Struktur** | Design System, Global Classes, Components, Templates, Seitenaufbau, Formulare, Einstellungen | Claude Code über MCP (Bricks-Abilities) | Staging, gesichert als Transfer-Paket im Repo |
| **Datenmodell** | Custom Post Types, Taxonomien, Felder, Settings Pages | Meta Box als PHP-Code im Repo (`wordpress/plugins/da-content-model/`) | Git |
| **Inhalte** | Referenzen, Leistungen, FAQ, Partner, Unternehmensdaten, Texte | WordPress-Admin (Redaktion); Claude Code über `bricks/create-post` und WordPress REST für Massenanlage | Produktivsystem |

Warum diese Trennung: Die Bricks-Abilities lesen Meta-Box-Felder (Dynamic
Data `{mb_…}`, Query Loops `mb_*`), legen sie aber nicht an. Meta Box AIO
bringt einen Builder im Admin mit, dessen Ergebnis lässt sich als PHP
exportieren. Als Code im Repo ist das Datenmodell versioniert, auf Staging
und Produktion identisch und ohne Klickarbeit reproduzierbar. Der MB Builder
dient nur zum Ausprobieren, der Export landet im Plugin.

## 2. Was MCP kann und was nicht

**Kann (Abilities, Auswahl):** `get-design-context`, Farben/Variablen/
Global Classes anlegen und ändern, `generate-color-shades`,
`create-component` / `extract-component-from-elements`, `create-template`
mit `set-template-conditions`, `commit-html-css-page-import` (HTML+CSS einer
Seite in Elemente), `set-page-elements`, `create-post` / `find-post`
(alle Post-Typen, Titel, Status), `upload-media` / `find-media`,
`list-dynamic-data-tags` / `preview-dynamic-tag`, `update-form-actions`,
`set-global-settings` (u. a. `postTypes`, für welche Post-Typen Bricks aktiv
ist), `export-transfer-package` / `import-transfer-package`,
`audit-design-system`, `regenerate-css-files`, `list-orphaned-elements`,
`render-elements` zur Prüfung, `list-ability-status`.

**Kann nicht:** CPTs, Taxonomien oder Meta-Box-Felder registrieren;
Feldwerte in Posts schreiben (dafür WordPress REST mit demselben
Anwendungspasswort, Meta Box REST API ist in AIO enthalten); Plugins
installieren; PHP ausführen; Hosting, DNS, Backups.

**Vor jeder Feldnutzung:** `list-dynamic-data-tags` mit einer `postId` des
Zieltyps aufrufen, Tag kopieren, mit `preview-dynamic-tag` prüfen. Ein
geratenes `{mb_kunde}` rendert sonst als Text ohne Fehlermeldung.

## 3. Datenmodell: wo Custom Post Types Sinn ergeben

Regel: CPT, wenn Einträge mehrfach vorkommen, an mehreren Stellen erscheinen
oder eine eigene URL brauchen. Settings Page, wenn es den Eintrag genau
einmal gibt. Seite plus Component, wenn jede Instanz anders gebaut ist.

| Inhalt | Entscheidung | Begründung |
|---|---|---|
| **Referenz** | CPT `da_referenz`, Archiv `/referenzen/`, Einzelseite | Erscheint auf Startseite, je Landingpage gefiltert, später als eigene Seite (SEO). Kundenstimme als Feldgruppe im selben Eintrag, kein zweiter CPT. |
| **Leistung** | CPT `da_leistung`, Einzelseite ja, kein Archiv | Service-Karten auf Startseite und Landingpages aus einer Quelle; Einzelseiten werden nach der Keyword-Recherche gebraucht. |
| **FAQ** | CPT `da_faq`, ohne Einzelseite und Archiv | Fragen tauchen je Zielgruppe in mehreren Akkordeons auf; FAQ-Schema für Suchmaschinen aus dem Loop. |
| **Partner** | CPT `da_partner`, ohne Einzelseite und Archiv | Logo (hell/dunkel), Name, Link, Reihenfolge; als Posts-Loop in Bricks am robustesten. |
| **Zielgruppe** | Taxonomie `zielgruppe` (praxen, kanzleien, mittelstand) an Referenz, Leistung, FAQ, Beitrag | Verbindet alle Inhalte mit den Landingpages. Term-Meta: Link zur Landingpage, Kurzname. |
| **Leistungsbereich** | Taxonomie `leistungsbereich` an Referenz | Filter im Referenz-Archiv (Bricks Query Filter). |
| **Landingpage** | Seite in Bricks, gebaut aus Components mit Properties | Drei Seiten mit individueller Tonalität. Erst ab etwa fünf Zielgruppen lohnt ein CPT mit Einheitstemplate. |
| **Unternehmen** | Meta Box Settings Page `unternehmen` | Adresse, Telefon, E-Mail, Social, Impressumsdaten genau einmal, überall per Dynamic Data. Tag-Form am Staging prüfen. |
| **Team** | Settings Page `unternehmen`, Feldgruppe | Aktuell eine Person. CPT erst ab mehreren Profilen. |
| **Kundenstimme** | Feldgruppe in `da_referenz` | Eine Stimme gehört zu einem Projekt; separate Stimmen ohne Projekt gibt es nicht. |
| **Digital-Check** | Bricks-Formular, Aktionen `save-submission` + E-Mail; optional `create-post` in CPT `da_anfrage` | Start ohne CPT. CPT erst, wenn Anfragen einen Status-Workflow brauchen. Löschfrist beachten. |
| **Wissen/Blog** | Standard-Beiträge mit Taxonomie `zielgruppe` | Kein CPT nötig, Bricks-Template für Single und Archiv. |
| **Schmerzpunkte, Feature-Blöcke, Concierge** | Seiteninhalt in Components | Je Landingpage einmalig formuliert, keine Wiederverwendung. |

### Felder (Entwurf, Namen mit Präfix `da_`)

- `da_referenz`: `da_kunde`, `da_website`, `da_logo`, `da_logo_dark`,
  `da_kurz`, `da_ergebnisse` (Gruppe, klonbar: `wert`, `label`),
  `da_stimme` (Gruppe: `text`, `name`, `rolle`, `foto`), `da_galerie`,
  Beitragsbild = Titelbild. Admin-Spalten: Kunde, Zielgruppe.
- `da_leistung`: `da_icon` (Auswahl aus dem Icon-Set), `da_kurz`,
  `da_punkte` (klonbares Textfeld), Reihenfolge über `menu_order`.
- `da_faq`: Frage = Titel, Antwort = Inhalt, Reihenfolge über `menu_order`.
- `da_partner`: `da_logo`, `da_logo_dark`, `da_url`, `menu_order`.
- Settings Page `unternehmen`: `da_firma`, `da_strasse`, `da_plz_ort`,
  `da_telefon`, `da_email`, `da_social` (Gruppe), `da_team` (Gruppe).

Alle Typen mit `show_in_rest: true`, damit REST und der MCP Adapter sie
sehen. Bricks-Builder nur für `page`, `post`, `da_referenz`, `da_leistung`
und `bricks_template` freischalten (`postTypes`); FAQ und Partner brauchen
keinen Builder.

## 4. Aufbau am Staging: Reihenfolge

Die Reihenfolge folgt den Abhängigkeiten: Felder vor Templates, Design
System vor Components, Components vor Seiten.

1. **Vorbereitung.** `list-ability-status`; `set-global-settings` mit
   `postTypes`; Meta-Box-Plugin `da-content-model` hochladen und aktivieren;
   je CPT zwei Beispiel-Einträge mit `create-post` anlegen und Felder im
   Admin füllen, damit Tags auffindbar sind.
2. **Design System** (Skills `bricks-design-systems`, `bricks-naming-conventions`).
   Farben mit Hell- und Dunkelwert und Variablen aus `handoff/export/`,
   Theme Style (Schrift, Grundgröße, Buttons, Überschriften), dann Global
   Classes aus dem Prototyp-CSS: `convert-html-css-to-bricks-data` im
   CSS-only-Modus je Komponente, Ergebnis prüfen, persistieren.
3. **Components** (Skill `bricks-components`): Service-Karte, Referenzkarte,
   Kundenstimme, Schritt, Kachel, Pain-Karte, Feature-Block, Concierge,
   FAQ-Akkordeon, Digital-Check-Block. Properties für Text, Bild, Link,
   Variante. Basis: Inventar im Style Guide.
4. **Templates** (Skill `bricks-templates-conditions`): Header und Footer;
   Single `da_referenz`; Archiv `da_referenz` mit Query Filter nach
   Zielgruppe und Leistungsbereich; Single `da_leistung`; Single und Archiv
   `post` (erst mit dem Blog).
5. **Seiten:** Startseite und drei Landingpages. Pro Seite
   `commit-html-css-page-import` mit dem Prototyp-HTML des Hauptbereichs
   (ohne Header, Footer, `<main>`), danach wiederholte Rohblöcke durch
   Component-Instanzen ersetzen und Loops einsetzen (Leistungen, Referenzen,
   FAQ, Partner). Erst den Hero als Probe, dann der Rest.
6. **Formulare** (Skill `bricks-forms`): Digital-Check mit
   `update-form-actions`, Spam-Schutz, SMTP prüfen, Testsendung.
7. **Prüfung** (Skills `bricks-quality-gate`, `bricks-browser-verify`):
   nach jedem Schreibblock `render-elements`, Frontend-Screenshots in drei
   Breiten und beiden Farbmodi gegen den Prototyp.
8. **Sicherung:** `export-transfer-package` (Design System, Templates,
   Components, Einstellungen) nach `handoff/packages/<datum>/`, im Repo
   versioniert. Das ist zugleich das Go-Live-Paket.

## 5. Go-Live und Betrieb

**Go-Live.** Empfehlung: Staging als Ganzes mit All-in-One WP Migration auf das
Livesystem übernehmen, weil Inhalte, Medien
und Plugin-Einstellungen mitkommen. Das Transfer-Paket ist Reserve und
Nachweis. Danach werden Struktur-Änderungen wieder am Staging gebaut und als
Paket in die Produktion importiert (`inspect-transfer-package` vor
`import-transfer-package`, Konflikte lesen, Backup vorher).

**Betrieb, wer macht was.**

| Aufgabe | Weg |
|---|---|
| Neue Referenz, Leistung, FAQ, Partner | Redaktion im WordPress-Admin. Erscheint automatisch in Loops. |
| Neue Seite oder neuer Abschnitt | Claude Code über MCP am Staging, Prüfung, Paket in Produktion. |
| Design-Änderung (Farbe, Abstand, Button) | Änderung an Variable oder Global Class über MCP wirkt überall. Danach `regenerate-css-files`. |
| Text-Massenänderung oder Import (z. B. 30 FAQ) | Claude Code: `create-post` für den Eintrag, Feldwerte über REST. |
| Monatlicher Check | `bricks-site-audit` und `audit-design-system` (nur lesend), `list-orphaned-elements`, Performance-Skill bei Bedarf. |
| Formular-Störung | `bricks-forms`: Aktionen und Submissions prüfen, SMTP-Log. |

**Leitplanken für MCP im Betrieb.**

- Produktion: unter Bricks › AI nur lesende Abilities plus `create-post`
  und `import-transfer-package` freischalten. `delete-*`,
  `cleanup-orphaned-elements`, `set-global-settings` nur im Wartungsfenster
  einschalten.
- Eigener WordPress-Benutzer `mcp-claude` mit Rolle Editor plus
  Builder-Zugang; eigenes Anwendungspasswort je Umgebung; Widerruf beim
  Rechnerwechsel.
- Jede Schreibserie endet mit Quality Gate und Screenshot; ein Transfer-
  Paket vor jedem Import in Produktion.
- Idempotency-Keys bei Seitenimporten, damit ein Wiederholungslauf nichts
  doppelt anlegt.
- Cloud-Sitzungen von Claude Code erreichen das Staging erst nach
  Freigabe der Domain in der Netzwerkrichtlinie; bis dahin lokal arbeiten.

## 6. Entscheidungen (11.09.2026)

1. Referenz-Einzelseiten ab Start veröffentlichen; Feinschliff am lebenden
   Objekt. Slugs `/referenzen/`, `/leistungen/<slug>/`, Landingpages
   `/praxen/`, `/kanzleien/`, `/mittelstand/`.
2. Digital-Check: E-Mail und Speicherung als Anfrage (CPT `da_anfrage`)
   mit Status. Löschfrist in der Settings Page hinterlegt.
3. Entwicklung auf `relaunch.digital-avenue.de`, Go-Live per All-in-One WP
   Migration auf das Livesystem. Danach Struktur-Änderungen als
   Transfer-Pakete vom Staging in die Produktion.
4. Leistungen bekommen eigene Seiten unter `/leistungen/`.
5. Offen: Dynamic-Data-Form für die Meta-Box-Settings-Page am Staging
   verifizieren.

## 7. Änderung 11.09.2026: Datenmodell zurückgestellt

Das Plugin `da-content-model` wurde wieder entfernt (in der Git-Historie
abrufbar). Grund: Felder müssen sich nach dem Template richten, ein Feld je
Stelle, an der Bricks ein Element setzt. Deshalb entstehen zuerst
Grundparameter, Theme Style, Icons und Components; die Felder je Post-Typ
werden danach aus den fertigen Templates abgeleitet. Die Entscheidungen zu
CPTs in Abschnitt 3 bleiben als Richtung bestehen.

## 8. Nächste Schritte

1. Grundparameter: Farben (hell/dunkel), Schriften, Variablen, Klassen
   für Text, Abstände, Radien, Formulare.
2. Icons in den Icon-Manager.
3. Theme Style als Basis.
4. Components für wiederkehrende Elemente.
5. Templates bauen, daraus Felder ableiten, Datenmodell neu anlegen.
