---
name: bricks-handoff
description: Überführt ein fertiges Website-Design (Design System mit CSS-Tokens, HTML/CSS-Prototyp, Icons, Schriften) strukturiert in WordPress mit Bricks Builder. Erzeugt aus der Token-Datei importierbare Bricks-Dateien (Farbpalette im Advanced-Themer-Format, Variablen, globales CSS), zerlegt Icon-Sprites, liefert eine Komponenten-Zuordnung und eine Umzugs-Checkliste. Immer verwenden, wenn ein Prototyp oder Design System nach WordPress, Bricks, Advanced Themer, Automatic.css oder Core Framework übertragen werden soll, wenn Farben, Schriften, Abstände oder Icons in Bricks importiert werden sollen, oder wenn von "Umzug", "Handoff", "Umsetzung in Bricks" oder "Relaunch auf WordPress" die Rede ist, auch ohne dass Bricks ausdrücklich genannt wird.
---

# Bricks-Handoff: vom Design System zur Bricks-Website

Ziel: Ein Design, das als Token-Datei plus Prototyp vorliegt, ohne
Klickarbeit und ohne Übertragungsfehler in eine Bricks-Installation
bringen. Der Grundsatz dahinter: Es gibt eine Quelle der Wahrheit (die
Token-Datei), und alles Weitere wird daraus erzeugt. Wer Farben von Hand
in Bricks eintippt, macht Fehler und kann sie später nicht nachvollziehen.

Der Ablauf hat fünf Phasen. Jede endet mit einem prüfbaren Ergebnis.
Arbeite sie der Reihe nach ab und halte den Stand in `handoff/STATUS.md`
im Projekt fest, damit eine spätere Session dort weitermachen kann.

## Phase 0: Klären, bevor etwas erzeugt wird

Drei Entscheidungen bestimmen alle Ausgabeformate. Frag den Nutzer, wenn
sie nicht aus dem Projekt hervorgehen (CLAUDE.md, BRIEFING.md, README):

1. **CSS-Framework in Bricks**: Bricks Native (Standard bei Digital Avenue,
   `"framework": "bricks-native"`), sonst Advanced Themer (AT), Automatic.css
   (ACSS) oder Core Framework. Davon hängt ab, wie Farben und Variablen
   importiert werden und welcher Selektor den Dunkelmodus trägt (Bricks
   Native: `:root[data-brx-theme="dark"]`). Siehe `references/frameworks.md`.
2. **Token-Quelle**: Welche Datei ist maßgeblich (z. B.
   `design-system/colors_and_type.css`) und welches Präfix tragen die
   Variablen (z. B. `--da-`).
3. **Zielinstallation**: Staging-URL, Bricks-Version, vorhandene
   Global Classes oder Templates, die erhalten bleiben müssen. Ab Bricks 2.4
   zusätzlich: Ist der native MCP-Endpunkt aktiviert und die Staging-Domain
   aus der Umgebung erreichbar? Dann laufen Phase 3 bis 5 direkt über MCP
   statt über Importdateien. Siehe `references/bricks-2-4.md`.

Lege dann `handoff/handoff.config.json` an (Vorlage in
`references/config-example.json`). Die Skripte lesen daraus, welche Tokens
Basisfarben sind und welche Variablen in welche Kategorie gehören.

## Phase 1: Tokens exportieren

```bash
node <skill>/scripts/export-tokens.mjs --config handoff/handoff.config.json --out handoff/export
```

Erzeugt in `handoff/export/`:

| Datei | Inhalt | Import in Bricks |
|---|---|---|
| `bricks-color-palette-tokens.json` | Alle Farb-Tokens 1:1 (Hell und Dunkel) | Bricks-Builder, Farbwähler, Palette importieren |
| `bricks-color-palette-at.json` | Basisfarben mit automatischen Schattierungen im Advanced-Themer-Format | Advanced Themer, Color Palette |
| `bricks-variables.json` | Abstände, Typo-Skala, Radien, Schatten als Bricks-Variablen mit Kategorien | Bricks, Variablen, Import |
| `global-tokens.css` | Alle Custom Properties (Hell und Dunkel) für globales CSS | Bricks, Settings, Custom Code oder Framework-Stylesheet |
| `tokens-report.md` | Was exportiert wurde, was fehlt, was zu prüfen ist | lesen |

Die Schattierungen im AT-Format sind eine Näherung an die Auto-Shades von
Advanced Themer (sechs hellere, sechs dunklere, sechs transparente Stufen).
Nach dem Import in AT einmal die Basisfarbe neu speichern, dann rechnet
AT seine eigenen Stufen, und die exakten Werte stimmen.

Prüfen: Öffne den Report. Jede Farbe des Prototyps muss als Token
auftauchen. Farben, die nur als Literal im Prototyp-CSS stehen, gehören
vorher in die Token-Datei.

## Phase 2: Schriften und Icons

Schriften: Selbst gehostete Fonts als Custom Fonts in Bricks hochladen
(Bricks, Custom Fonts), Google Fonts in den Bricks-Einstellungen
aktivieren. Die Schriftfamilien-Tokens (`--*-font`) zeigen auf die
Bricks-Fontnamen, sonst greift der Fallback.

Icons: Ein SVG-Sprite in Einzeldateien zerlegen, damit Bricks sie als
SVG-Element oder in der Icon-Bibliothek verwenden kann:

```bash
node <skill>/scripts/split-icons.mjs design-system/assets/icons.svg handoff/export/icons
```

Jede Datei behält `viewBox`, `currentColor` und Strichstärke. Der Report
listet Icons, die Fill statt Stroke nutzen, weil die sich in Bricks
anders färben lassen.

## Phase 3: Komponenten als globale Klassen

Der schnellste Weg zu visueller Übereinstimmung: Das Prototyp-CSS zunächst
unverändert als globales CSS in Bricks laden und die Struktur mit
denselben Klassennamen nachbauen. Dann ist die Bricks-Seite sofort
pixelgleich, und die Umstellung auf Bricks-eigene Steuerung (Global
Classes, Theme Styles) kann Komponente für Komponente erfolgen, ohne dass
zwischendurch etwas kaputt aussieht.

Erstelle `handoff/component-mapping.md` nach dem Muster in
`references/component-mapping-example.md`: für jede Prototyp-Komponente
das Bricks-Element, die Global Class, welche Eigenschaften in Bricks-
Steuerung übergehen und welche im CSS bleiben.

Reihenfolge: Theme Styles (Typo, Buttons, Links, Sections) zuerst, dann
Header und Footer als Templates, dann die Komponenten in der Reihenfolge
ihrer Häufigkeit auf der Startseite.

## Phase 4: Templates und Seiten

Bricks importiert Templates als JSON. Wenn ein Export aus der
Zielinstallation vorliegt, lässt sich die Struktur des Prototyps daraus
ableiten. Das Format ist nicht öffentlich dokumentiert und ändert sich
mit Bricks-Versionen, deshalb: erst einen echten Export aus der
Zielinstallation lesen (`references/bricks-template-json.md` erklärt, wie
er entsteht), dann Templates erzeugen, dann importieren, dann in Bricks
prüfen. Nie Templates aus dem Gedächtnis schreiben.

Seiten nach der Struktur des Prototyps aufbauen. Inhalte aus dem
Prototyp übernehmen, Platzhalter in eckigen Klammern als offene Punkte
in `handoff/STATUS.md` listen.

## Phase 5: Abgleich, Redirects, Launch

- Screenshot-Abgleich: Prototyp und Bricks-Seite bei 1440 px und 390 px
  nebeneinander. Abweichungen notieren und beheben, bevor Inhalte
  verfeinert werden.
- Redirects nach dem URL-Inventar des Projekts (alt zu neu, 301).
- Meta-Titel, Descriptions, Schema.org aus dem Konzept übernehmen.
- Checkliste in `references/launch-checklist.md` abarbeiten.

## Hinweise, die Zeit sparen

- Ein Token, das im Prototyp anders heißt als in Bricks, ist die häufigste
  Fehlerquelle. Präfix und Namen unverändert übernehmen.
- Fixierte Menüs, Modale und alles mit `position: fixed` nicht in
  Elemente mit `backdrop-filter` oder `transform` legen. Sie fallen sonst
  auf die Größe des Elternelements zusammen.
- Fotos in gerundeten Rahmen: kein Hintergrund hinter dem Bild, Rundung
  auf das Bild selbst. Sonst entsteht an den Kanten ein heller Saum.
- Bilder aus KI-Generatoren vor dem Einbau ansehen. Schrift- und
  Bildartefakte sind häufig.
