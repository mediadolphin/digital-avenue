# Bricks-Handoff: Stand

Skill: `.claude/skills/bricks-handoff/` (Ablauf in dessen SKILL.md). Dazu die 45 offiziellen Bricks-Skills (codeerhq/bricks-skills, Release v0.1.0-beta.3) in `.claude/skills/bricks-*`, Stand in `.claude/skills/BRICKS-SKILLS.lock`.

| Phase | Stand | Ergebnis |
|---|---|---|
| 0 Klären | teilweise | Config angelegt (`handoff.config.json`, Präfix `da`, Framework **Bricks Native**, Dunkel-Selektor `:root[data-brx-theme="dark"]`). Staging `https://relaunch.digital-avenue.de` (Bricks 2.4, seit 17.09.2026 final, mit MCP Adapter), MCP-Server in `.mcp.json` (HTTP, Header aus `BRICKS_MCP_AUTH` lokal, Proxy-Anmeldung in der Cloud). Verbindung aus der Cloud-Sitzung bestätigt (11.09.2026): 193 Abilities, davon 167 Bricks und 26 Meta Box. |
| 1 Tokens exportieren | erledigt, am Staging importiert (Theme Style, 52 Farben, 48 Variablen über den Style Manager, 11.09.2026) | `export/`: 52 Farb-Tokens mit Hell- und Dunkel-Wert (davon 16 Schatten- und Glasfarben), 48 Variablen in 8 Kategorien, keine unzugeordneten. Dunkelmodus im Prototyp umgesetzt und am Staging bestätigt (Toggle-Mode-Element, 11.09.2026): Hintergrund, Button und Icons wechseln über den Color Manager. |
| 2 Schriften & Icons | erledigt (11.09.2026) | Manrope und Jost als Custom Fonts mit je 8 Schnitten im Font Manager (Jost lokal statt Google). Icon-Set „Digital Avenue“ mit 15 Icons im Icon Manager, Quelle `import/06-icons/` (SVG → Bricks Optimizer). |
| 3 Komponenten als Global Classes und Components | erledigt (11.09.2026): 50 Klassen am Staging in 8 Kategorien, 14 Components per MCP (Karten, Kacheln, Listenzeilen, Abschnitte Feature-Block, Concierge, Digital-Check-Block, Hero Landingpage), FAQ als Accordion-Muster, alle Fotos in der Mediathek; Testseiten 50, 60, 63, 101. Offen: Abnahme durch Nils, Popup Digital-Check (Formular), Partnerzeile, Zielgruppen-Tabs, Mosaik beim Seitenimport | Stand, IDs und Lernpunkte in `handoff/import/README.md`, Schritt 7. |
| 4 Templates & Seiten | begonnen (11.09.2026): Header (Nav mit Dropdowns Branchen/Referenzen, Umschalter, CTA, Burger) und Footer als Templates per MCP gebaut, Startseite mit Hero, Mosaik und Partnerzeile; offen: mobiles Menü, Rest der Startseite (Kacheln, Schritte, Referenzen, Kundenstimmen, Digital-Check, FAQ), drei Landingpages, Popup Digital-Check | Aufbau in `handoff/import/README.md`, Schritte 8 und 9. |
| 5 Abgleich, Redirects, Launch | offen | Checkliste in `references/launch-checklist.md`. |

Bricks-Version: 2.4 final am Staging (Update von RC2 am 17.09.2026). Das Plugin `da-content-model` war am Staging kurz aktiv und ist wieder entfernt (11.09.2026); Post-Typen kommen erst nach den Templates zurück. Style Guide mit Inventar und Arbeitsliste: `prototype/styleguide.html`.

Betriebskonzept (MCP, Meta Box, CPTs): `handoff/BETRIEBSKONZEPT-MCP.md`. Datenmodell (CPTs, Felder) am 11.09.2026 zurückgestellt: erst Grundparameter, Theme Style, Icons und Components, dann Felder aus den fertigen Templates ableiten.

Merkregeln zum Nachschlagen: `handoff/MERKREGELN.md`. Importdaten für den Aufbau am Staging: `handoff/import/` (README mit Aufträgen je Schritt, Build über `build-import.mjs`).

## Nächste Schritte

0. Schritte 0 bis 7 aus `handoff/import/README.md` sind am Staging erledigt (Components inklusive Abschnitte). Als Nächstes Header und Footer als Templates, dann die Seiten aus den Components zusammensetzen (Startseite zuerst). Im Chat gezeigte Anwendungspasswörter widerrufen.
1. Dunkel-Logos (Digital Avenue vorhanden, Referenzlogos fehlen) beschaffen.
2. Palette und Variablen in eine Staging-Installation importieren, Ergebnis mit `export/tokens-report.md` vergleichen.
3. Erste Global Classes anlegen (Buttons, Eyebrow, Karten) und gegen den Prototyp prüfen.

Nachtrag 11.09.2026 (abends): Startseite um die Section „Für wen“ mit Bricks-Tabs (Klasse `tabs`), Abschnittskopf (`section-head center`) und Component „Zielgruppen-Panel“ (`28c728`) ergänzt. Glas-Deckkraft auf 0.84/0.86 mit stärkerem Blur eingependelt.

Nachtrag 17.09.2026: Kampagnenpaket (`handoff/kampagne/`, ohne Kontaktdaten) übernommen. Landingpages K1/K2/K9 unter `/arztpraxen/` als Entwürfe gebaut (Posts 169, 171, 173), gemeinsame Module als Section-Template 167, Kontaktformular als Template 165. Plugin „Digital Avenue Parameter“ für Telefon, Servicezeiten, Serviceversprechen per Shortcode/Echo-Tag geschrieben (`wordpress/plugins/da-parameter.zip`), Installation durch Nils.

Nachtrag 17.09.2026: Footer-Spalte „Für wen“ (Prototyp) bzw. „Branchen“ (Bricks, Template 54) um Heilberufe und Gastgewerbe ergänzt. Beide verweisen auf `/branchen/heilberufe/` und `/branchen/gastgewerbe/`; im Prototyp vorläufig auf die Praxen- bzw. Mittelstand-Seite. Für beide Zielgruppen gibt es noch keine Seite und keinen Text.

Nachtrag 17.09.2026: Branchenseite Heilberufe nach Konzept aus dem Chat (`handoff/branchen/heilberufe.md`) im Prototyp (`#heilberufe`) und in Bricks (Post 196 unter Elternseite „Branchen“ 193, beide Entwurf) gebaut, fünf neue Higgsfield-Motive m40–m44, eigenes Formular-Template 194. Offene Entscheidungen im Konzept, Abschnitt 4.

### Nachtrag 20.09.2026: Farbsystem-Dokument

- `handoff/BRICKS-FARBSYSTEM-DARKMODE.md`: portable Beschreibung des
  Bricks-Farbsystems und des Hell/Dunkelmodus (Attribut `data-brx-theme`,
  Skript `bricks-dl-mode-js-after` mit `brx_mode`, Palette wird als `:root`-
  und Dunkelblock gedruckt, Datenmodell einer Farbe, Regeln, Umschalter,
  Übertragung auf neue Projekte). Für andere Claude-Code-Umgebungen gedacht.
- Dabei aufgefallen: `color-scheme: light/dark` steht am Staging noch nicht
  im Custom CSS (Formularfelder, Scrollbalken). Standardmodus am Staging ist
  `light`, im Prototyp galt die Systemeinstellung; Entscheidung offen.
