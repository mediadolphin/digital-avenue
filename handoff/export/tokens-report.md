# Token-Export: Digital Avenue

Quelle: `design-system/colors_and_type.css`, Präfix `--da-`, Framework: bricks-native

- Farb-Tokens: 52 (davon mit Dunkel-Wert: 49)
- AT-Basisfarben mit Schattierungen: 4
- Variablen: 48 in 8 Kategorien

## Farb-Tokens

| Token | Hell | Dunkel |
|---|---|---|
| `--da-teal` | #305b75 | #4d8aa0 |
| `--da-teal-hover` | #264a60 | #5e9cb3 |
| `--da-teal-dark` | #1b3a4a | #24485a |
| `--da-teal-deeper` | #132a37 | #0f2129 |
| `--da-teal-subtle` | #e7eff3 | #1d3c4a |
| `--da-teal-fill` | #305b75 | #3a7189 |
| `--da-teal-fill-hover` | #264a60 | #45819a |
| `--da-teal-text` | #234c5f | #82c2d2 |
| `--da-plum` | #42253b | #8a5c7e |
| `--da-plum-hover` | #351b30 | #9e6e92 |
| `--da-plum-subtle` | #f0e8ee | #2a1a26 |
| `--da-plum-text` | #42253b | #c49ab8 |
| `--da-plum-light` | #8a5c7e | #c49ab8 |
| `--da-sand` | #d7c9aa | #c4b393 |
| `--da-sand-hover` | #c4b393 | #d7c9aa |
| `--da-sand-subtle` | #f6f2ea | #2a2318 |
| `--da-sand-text` | #7a6845 | #d7c9aa |
| `--da-sand-dark` | #a89470 |  |
| `--da-bg` | #f9f8f6 | #182a33 |
| `--da-bg-alt` | #f2efe9 | #1e333e |
| `--da-text` | #19242b | #ede9e0 |
| `--da-muted` | #5a6e77 | #7796a6 |
| `--da-border` | #d9e3e8 | #294653 |
| `--da-nav-bg` | #1b3a4a | #10202a |
| `--da-nav-text` | #ede9e0 |  |
| `--da-nav-muted` | #7796a6 |  |
| `--da-nav-border` | #264350 | #1f3742 |
| `--da-hero-from` | #e7eff3 | #1e333e |
| `--da-hero-to` | #f9f8f6 | #182a33 |
| `--da-card-bg` | #ffffff | #1d3340 |
| `--da-ink-soft` | rgb(0 0 0 / 0.04) | rgb(0 0 0 / 0.22) |
| `--da-ink` | rgb(0 0 0 / 0.06) | rgb(0 0 0 / 0.30) |
| `--da-ink-strong` | rgb(0 0 0 / 0.10) | rgb(0 0 0 / 0.40) |
| `--da-teal-glow` | rgb(48 91 117 / 0.35) | rgb(77 138 160 / 0.30) |
| `--da-teal-glow-strong` | rgb(48 91 117 / 0.45) | rgb(77 138 160 / 0.40) |
| `--da-nav-shadow` | rgb(0 0 0 / 0.04) | rgb(0 0 0 / 0.35) |
| `--da-glass` | rgb(255 255 255 / 0.92) | rgb(29 51 64 / 0.90) |
| `--da-glass-border` | rgb(255 255 255 / 0.60) | rgb(41 70 83 / 0.70) |
| `--da-glass-sand` | rgb(246 242 234 / 0.94) | rgb(42 35 24 / 0.92) |
| `--da-chip-bg` | rgb(255 255 255 / 0.88) | rgb(29 51 64 / 0.84) |
| `--da-chip-text` | #1b3a4a | #ede9e0 |
| `--da-step-bg` | #e7eff3 | rgb(77 138 160 / 0.24) |
| `--da-deep-border` | #132a37 | #294653 |
| `--da-wordmark` | #1b3a4a | #82c2d2 |
| `--da-glow-sand` | rgb(215 201 170 / 0.45) | rgb(196 179 147 / 0.14) |
| `--da-glow-sand-soft` | rgb(215 201 170 / 0.40) | rgb(196 179 147 / 0.12) |
| `--da-success` | oklch(58% 0.140 145) | oklch(72% 0.140 145) |
| `--da-success-subtle` | oklch(94% 0.030 145) | oklch(30% 0.050 145) |
| `--da-warning` | oklch(70% 0.150 65) | oklch(78% 0.150 65) |
| `--da-warning-subtle` | oklch(96% 0.030 65) | oklch(32% 0.050 65) |
| `--da-error` | oklch(56% 0.180 25) | oklch(70% 0.160 25) |
| `--da-error-subtle` | oklch(95% 0.030 25) | oklch(30% 0.060 25) |

## Nicht zugeordnete Variablen (bitte Kategorie in der Config ergänzen)

keine

## Nächste Schritte

1. Paletten und Variablen in Bricks importieren (siehe references/frameworks.md).
2. In Advanced Themer die Basisfarben einmal neu speichern, damit AT die Schattierungen selbst berechnet.
3. `global-tokens.css` als globales CSS einbinden, wenn kein Framework die Variablen erzeugt.