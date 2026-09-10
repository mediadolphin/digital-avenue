# Frameworks in Bricks: wohin die Exporte gehören

Die UI-Pfade gelten für Bricks 1.9 bis 2.x. Vor dem Import in der
Zielinstallation prüfen, ob die Menüpunkte noch so heißen.

## Advanced Themer (AT)

- Farbpalette: Bricks-Builder öffnen, Farbwähler, Zahnrad, "Import".
  Datei `bricks-color-palette-at.json` (Basisfarben mit Schattierungen)
  oder `bricks-color-palette-tokens.json` (alle Tokens 1:1).
- Nach dem Import jede Basisfarbe einmal öffnen und speichern, damit AT die
  Schattierungen mit seiner eigenen Formel neu berechnet.
- Variablen: Bricks-Builder, Variablen-Manager, Import. Datei
  `bricks-variables.json`. Kategorien werden mit angelegt.
- AT erzeugt die CSS-Variablen selbst, `global-tokens.css` ist dann nur
  für Tokens nötig, die nicht als Bricks-Variable angelegt wurden.

## Automatic.css (ACSS)

- Farben: ACSS-Dashboard, Colors. Primär, Sekundär, Akzent, Base, Shade,
  Neutral als Hex eintragen. ACSS erzeugt die Abstufungen selbst
  (`--primary-light`, `--primary-ultra-dark` usw.).
- Typo und Abstände: ACSS-Dashboard, Typography und Spacing. Die
  clamp()-Werte aus der Token-Datei in Min/Max übersetzen.
- Eigene Tokens, die ACSS nicht kennt (z. B. Karten-Schatten), über
  `global-tokens.css` in Bricks, Settings, Custom Code, oder im ACSS-Feld
  für eigenes CSS.
- Bricks-Paletten-Import ist trotzdem sinnvoll, damit die Farben im
  Farbwähler auftauchen.

## Core Framework

- Core Framework, Settings, Global CSS: `global-tokens.css` einfügen oder
  verlinken. Das ist der Weg aus dem DIGIZT-Projekt (siehe
  `digizt-core-framework.css` im Repo mediadolphin/digizt).
- Farbwähler: Palette wie bei Bricks ohne Framework importieren.
- Variablen als Core-Framework-Variablen anlegen oder über das CSS lassen.

## Bricks Native (ohne Framework, Standard bei Digital Avenue)

- Farbpalette: Farbwähler, Zahnrad, Import (`bricks-color-palette-tokens.json`).
  Im Color Manager (ab Bricks 2.2) bekommt jede Farbe einen Hell- und einen
  Dunkel-Wert; die Dunkel-Werte stehen im Export unter `rawValue.dark`.
- Variablen: Variablen-Manager, Import (`bricks-variables.json`).
- `global-tokens.css` unter Bricks, Settings, Custom Code, Head, in
  `<style>`-Tags, oder als Datei im Child-Theme einbinden.

### Dunkelmodus in Bricks Native

Bricks schaltet den Dunkelmodus rein per CSS-Attribut, ohne Klassen-Toggle:

- Attribut `data-brx-theme="dark"` (bzw. `"light"`) auf `<html>`.
  Dunkel-Werte gehören deshalb in einen Block `:root[data-brx-theme="dark"] { … }`.
  Der Token-Export schreibt genau diesen Selektor (Config-Schlüssel `darkSelector`).
- Umschalter: Element "Toggle – Mode" (`toggle-mode`). Es rendert einen Button
  mit zwei Icon-Spans `.toggle.light` und `.toggle.dark`; CSS blendet je nach
  Modus das passende ein. Ohne Dunkel-Werte im Color Manager erscheint der
  Umschalter nicht.
- Speicherung: localStorage-Schlüssel `brx_mode`; Systemeinstellung
  (`prefers-color-scheme`) kann in den Bricks-Einstellungen als Vorgabe
  aktiviert werden.
- Prototyp-Regel: Alle Dark-Mode-Regeln im Prototyp hängen an
  `:root[data-brx-theme="dark"]`, damit sie unverändert als Custom CSS nach
  Bricks wandern. Logos brauchen eine echte Dunkel-Variante (im Prototyp
  wird das Fremdlogo nur per `filter: invert()` angenähert).
