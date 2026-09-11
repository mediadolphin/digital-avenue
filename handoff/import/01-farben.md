# Farben (52)

Import: Style Manager › Colors › Import (`01-farben.json`, Format der gespeicherten Palette) oder je Farbe `create-color` mit raw, light, dark.
Halbtransparente Werte (rgb mit Alpha) sind Schatten- und Glasfarben; sie schalten Schatten und Glasflächen im Dunkelmodus um. oklch-Werte des Design Systems sind nach Hex umgerechnet.

| Variable | Hell | Dunkel | Verwendung |
|---|---|---|---|
| `var(--da-teal)` | `#305b75` | `#4d8aa0` | Primärfarbe: Links, Icons, Akzente |
| `var(--da-teal-hover)` | `#264a60` | `#5e9cb3` | Hover der Primärfarbe |
| `var(--da-teal-dark)` | `#1b3a4a` | `#24485a` | Navigation, Footer, dunkle Kacheln |
| `var(--da-teal-deeper)` | `#132a37` | `#0f2129` | Tiefste dunkle Fläche (Concierge, Digital-Check) |
| `var(--da-teal-subtle)` | `#e7eff3` | `#1d3c4a` | Helle Teal-Tönung als Hintergrund |
| `var(--da-teal-fill)` | `#305b75` | `#3a7189` | Gefüllte Flächen mit weißem Text (Buttons, Tabs, Kachel teal) |
| `var(--da-teal-fill-hover)` | `#264a60` | `#45819a` | Hover gefüllter Flächen |
| `var(--da-teal-text)` | `#234c5f` | `#82c2d2` | Dunkles Teal als Text (Eyebrow) |
| `var(--da-plum)` | `#42253b` | `#8a5c7e` | Zweiter Akzent |
| `var(--da-plum-hover)` | `#351b30` | `#9e6e92` | Hover Plum |
| `var(--da-plum-subtle)` | `#f0e8ee` | `#2a1a26` | Helle Plum-Tönung |
| `var(--da-plum-text)` | `#42253b` | `#c49ab8` | Plum als Text |
| `var(--da-plum-light)` | `#8a5c7e` | `#c49ab8` | Helles Plum auf dunklem Grund |
| `var(--da-sand)` | `#d7c9aa` | `#c4b393` | Akzent Sand: Eyebrow auf dunkel, Kachel sand |
| `var(--da-sand-hover)` | `#c4b393` | `#d7c9aa` | Hover Sand |
| `var(--da-sand-subtle)` | `#f6f2ea` | `#2a2318` | Helle Sand-Tönung (Tags, Kachel cream) |
| `var(--da-sand-text)` | `#7a6845` | `#d7c9aa` | Sand als Text (Tags) |
| `var(--da-sand-dark)` | `#a89470` | `#a89470` | Gedämpftes Sand auf dunkel |
| `var(--da-bg)` | `#f9f8f6` | `#182a33` | Seitenhintergrund |
| `var(--da-bg-alt)` | `#f2efe9` | `#1e333e` | Alternativer Abschnittshintergrund |
| `var(--da-text)` | `#19242b` | `#ede9e0` | Fließtext |
| `var(--da-muted)` | `#5a6e77` | `#7796a6` | Gedämpfter Text, Copy in Karten |
| `var(--da-border)` | `#d9e3e8` | `#294653` | Linien und Rahmen |
| `var(--da-nav-bg)` | `#1b3a4a` | `#10202a` | Navigation und Footer Hintergrund |
| `var(--da-nav-text)` | `#ede9e0` | `#ede9e0` | Text auf Navigation und Footer |
| `var(--da-nav-muted)` | `#7796a6` | `#7796a6` | Gedämpfter Text auf dunkel |
| `var(--da-nav-border)` | `#264350` | `#1f3742` | Linien auf dunkel |
| `var(--da-hero-from)` | `#e7eff3` | `#1e333e` | Hero-Verlauf Start |
| `var(--da-hero-to)` | `#f9f8f6` | `#182a33` | Hero-Verlauf Ende |
| `var(--da-card-bg)` | `#ffffff` | `#1d3340` | Kartenhintergrund |
| `var(--da-ink-soft)` | `rgb(0 0 0 / 0.04)` | `rgb(0 0 0 / 0.22)` |  |
| `var(--da-ink)` | `rgb(0 0 0 / 0.06)` | `rgb(0 0 0 / 0.30)` |  |
| `var(--da-ink-strong)` | `rgb(0 0 0 / 0.10)` | `rgb(0 0 0 / 0.40)` |  |
| `var(--da-teal-glow)` | `rgb(48 91 117 / 0.35)` | `rgb(77 138 160 / 0.30)` |  |
| `var(--da-teal-glow-strong)` | `rgb(48 91 117 / 0.45)` | `rgb(77 138 160 / 0.40)` |  |
| `var(--da-nav-shadow)` | `rgb(0 0 0 / 0.04)` | `rgb(0 0 0 / 0.35)` |  |
| `var(--da-glass)` | `rgb(255 255 255 / 0.72)` | `rgb(29 51 64 / 0.72)` |  |
| `var(--da-glass-border)` | `rgb(255 255 255 / 0.55)` | `rgb(41 70 83 / 0.70)` |  |
| `var(--da-glass-sand)` | `rgb(246 242 234 / 0.78)` | `rgb(42 35 24 / 0.78)` |  |
| `var(--da-chip-bg)` | `rgb(255 255 255 / 0.88)` | `rgb(29 51 64 / 0.84)` |  |
| `var(--da-chip-text)` | `#1b3a4a` | `#ede9e0` |  |
| `var(--da-step-bg)` | `#e7eff3` | `rgb(77 138 160 / 0.24)` |  |
| `var(--da-deep-border)` | `#132a37` | `#294653` |  |
| `var(--da-wordmark)` | `#1b3a4a` | `#82c2d2` |  |
| `var(--da-glow-sand)` | `rgb(215 201 170 / 0.45)` | `rgb(196 179 147 / 0.14)` |  |
| `var(--da-glow-sand-soft)` | `rgb(215 201 170 / 0.40)` | `rgb(196 179 147 / 0.12)` |  |
| `var(--da-success)` | `#3a8f42` | `#67bb6b` | Status Erfolg |
| `var(--da-success-subtle)` | `#dff1df` | `#1d341e` | Status Erfolg Hintergrund |
| `var(--da-warning)` | `#dd881b` | `#f8a13f` | Status Warnung |
| `var(--da-warning-subtle)` | `#ffeedd` | `#442d15` | Status Warnung Hintergrund |
| `var(--da-error)` | `#c8393a` | `#f2716a` | Status Fehler |
| `var(--da-error-subtle)` | `#ffe7e4` | `#47211e` | Status Fehler Hintergrund |
