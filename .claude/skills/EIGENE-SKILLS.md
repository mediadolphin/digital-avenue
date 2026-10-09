# Eigene Skills

Lebendes Verzeichnis der Skills, die wir (Nils + Claude) zusammen entwickeln.
Getrennt von den 45 offiziellen Bricks-Skills (`bricks-*`, Quelle
codeerhq/bricks-skills, Stand in `BRICKS-SKILLS.lock`). Hier steht nur, was
wir selbst gebaut haben, plus die portablen Dokumente, auf die sich die Skills
stützen.

Stand: 2026-09-29.

## Eigene Skills

| Skill | Zweck | Status | Ort | Auslöser |
|---|---|---|---|---|
| **bricks-handoff** | Erst-Handoff: Design System + Prototyp → Bricks-Website (Palette, Variablen, Icons, Schriften, Components, Templates, Launch-Checkliste). | aktiv | `.claude/skills/bricks-handoff/` | „Umzug", „Handoff", „Umsetzung in Bricks", „Relaunch auf WordPress", Farben/Schriften/Icons importieren |
| **bricks-native-retrofit** | Eine SCHON gebaute Bricks-Seite auf nativ nachziehen: Custom-CSS-Inseln → Palette-Dunkelwerte, Eigenbau-Toggle → `toggle-mode`, Hex → Token, `!important` auflösen. | aktiv (neu) | `.claude/skills/bricks-native-retrofit/` | „nativ nachziehen", „Custom-CSS aufräumen", „Dunkelmodus nativ machen", „auf Bricks-Standard bringen" |
| **bricks-connect** | Bricks-Site per HTTP-Eintrag anbinden, prüfen und testen (ohne claude.ai-Connector, ohne OAuth-Schleife). | in Historie angelegt (Commit 51228fe), aktuell **nicht im Arbeitsbaum** – bei Bedarf wiederherstellen | `.claude/skills/bricks-connect/` (fehlt) | „Bricks anbinden", „MCP verbinden", „Zugang testen" |

## Portable Dokumente (Wissen, worauf die Skills verweisen)

Keine Skills, aber die Quelle der Wahrheit für einzelne Themen. Portabel
geschrieben, also auch ohne dieses Repo nutzbar.

| Dokument | Inhalt |
|---|---|
| `handoff/BRICKS-FARBSYSTEM-DARKMODE.md` | Native Farb- und Dunkelmodus-Mechanik in Bricks (`data-brx-theme`, Color Manager mit Hell/Dunkelwert, `toggle-mode`). Basis von `bricks-native-retrofit`. |
| `handoff/BRICKS-SVG-ICONS.md` | SVG-Icons in Bricks (Icon-Sets, `currentColor`, Optimizer). |
| `handoff/MERKREGELN.md` | Merkregeln aus der Praxis (u. a. Media-Queries als doppelte Klasse, Farben/Variablen). |
| `handoff/BETRIEBSKONZEPT-MCP.md` | MCP, Meta Box, CPTs – Betriebskonzept. |

## Konventionen für eigene Skills

- **Sprache**: Deutsch, wie die offiziellen bricks-Skills es bei uns spiegeln.
- **Trennung**: Erst-Aufbau (`bricks-handoff`) und Nachrüstung
  (`bricks-native-retrofit`) sind getrennte Skills, damit keiner beide Fälle
  vermischt. Eine Skill = ein klar abgegrenzter Anlass.
- **Quelle der Wahrheit**: Ausführliches Wissen liegt als portables Dokument in
  `handoff/`; die Skill ist der Ablauf und verweist darauf, statt zu doppeln.
- **Runtime schlägt Erinnerung**: Ability-Namen, Parameter und Schema aus der
  laufenden Bricks-MCP prüfen, nicht aus dem Gedächtnis. Param-Namen weichen ab
  (z. B. `update-theme-style` nimmt `id`, `update-global-class` nimmt
  `classId`, `create-color` nimmt kein `id`).
- **Aktualität**: Dieses Verzeichnis bei jeder neuen oder geänderten eigenen
  Skill mitpflegen (Zeile ergänzen, Status/Datum anpassen).

## Ideen / Backlog

Kandidaten, die als Skill Sinn ergeben könnten, sobald der Fall zum zweiten Mal
auftritt:

- _(offen – hier eintragen, wenn ein wiederkehrender Ablauf auffällt)_
