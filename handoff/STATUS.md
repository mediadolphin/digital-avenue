# Bricks-Handoff: Stand

Skill: `.claude/skills/bricks-handoff/` (Ablauf in dessen SKILL.md). Dazu die 45 offiziellen Bricks-Skills (codeerhq/bricks-skills, Release v0.1.0-beta.3) in `.claude/skills/bricks-*`, Stand in `.claude/skills/BRICKS-SKILLS.lock`.

| Phase | Stand | Ergebnis |
|---|---|---|
| 0 Klären | teilweise | Config angelegt (`handoff.config.json`, Präfix `da`, Framework **Bricks Native**, Dunkel-Selektor `:root[data-brx-theme="dark"]`). Staging `https://relaunch.digital-avenue.de` (Bricks 2.4 RC mit MCP Adapter), MCP-Server in `.mcp.json`, Zugangsdaten nur lokal in `WP_API_USERNAME` / `WP_API_PASSWORD`. Offen: erster Verbindungstest aus lokalem Claude Code. |
| 1 Tokens exportieren | erledigt | `export/`: 36 Farb-Tokens mit Hell- und Dunkel-Wert, 48 Variablen in 8 Kategorien, keine unzugeordneten. Dunkelmodus im Prototyp umgesetzt. |
| 2 Schriften & Icons | teilweise | 15 Icons als SVG in `export/icons/`. Manrope-Dateien liegen im Design System, Jost über Google Fonts. In Bricks noch nicht hinterlegt. |
| 3 Komponenten als Global Classes | offen | Zuordnung Prototyp-Komponenten zu Bricks-Klassen (Beispiel in `references/component-mapping-example.md`). |
| 4 Templates & Seiten | offen | Header, Footer, Startseite, drei Landingpages. |
| 5 Abgleich, Redirects, Launch | offen | Checkliste in `references/launch-checklist.md`. |

Bricks-Version: Ziel ist 2.4 (RC2, wir warten auf das Final). Style Guide mit Inventar und Arbeitsliste: `prototype/styleguide.html`.

## Nächste Schritte

0. MCP-Verbindung lokal testen („Liste die verfügbaren Bricks-Abilities“). Das kompromittierte Anwendungspasswort vorher widerrufen. Die Cloud-Umgebung braucht zusätzlich die Freigabe der Staging-Domain in der Netzwerkrichtlinie.
1. Dunkel-Logos (Digital Avenue vorhanden, Referenzlogos fehlen) beschaffen.
2. Palette und Variablen in eine Staging-Installation importieren, Ergebnis mit `export/tokens-report.md` vergleichen.
3. Erste Global Classes anlegen (Buttons, Eyebrow, Karten) und gegen den Prototyp prüfen.
