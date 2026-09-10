# Digital Avenue Design System

## Company & Product Context

**Digital Avenue** is a German digital agency based in Hamburg and Rostock. They serve doctors' practices, law firms, and SMEs with services spanning: Konzept (strategy), Web & Design, Content Creation, Performance Marketing, Kommunikation, and Hosting & E-Mail.

**Digizt Haushaltsgeräte** is a client product — a nationwide appliance repair service operating in 14 German cities. Built on WordPress/Bricks Builder. Partners include Miesen & Cie GmbH (logistics/scheduling), Krix Academy (technician certification), Repartly (refurbished parts), Elesco Europe, ASWO, and Bosch.

### Sources
- GitHub repo: `mediadolphin/digizt` (contains `Digizt Redesign.html`, `digizt-core-framework.css`, tweaks panel)
- GitHub repo: `mediadolphin/digital-avenue` (empty / 409 on tree fetch — repo exists but appears unpopulated)
- Website: https://digital-avenue.de (agency site, Hamburg + Rostock)
- Website: https://digizt-haushaltsgeraete.de (Digizt live product)

---

## Content Fundamentals

### Tone & Voice
- **Language**: German (de-DE). Formal "Sie" address in copy ("Wir kommen direkt zu Ihnen").
- **Vibe**: Professional, trustworthy, efficient — German service quality. No fluff. Direct value statements.
- **Copy style**: Short, punchy headlines. Strong verbs. Numbers and concrete benefits up front ("14 Städte bundesweit", "Soforttermin", "Faire Festpreise").
- **Casing**: Title casing for navigation and labels. Sentence case for body copy. ALL CAPS only for section eyebrow labels (letter-spaced).
- **Emoji**: Not used in UI. Only placeholder emoji in city image placeholders (dev only).
- **CTAs**: Action-oriented. "Jetzt Termin buchen", "Termin buchen" — direct imperatives.
- **Trust signals**: Certifications, partner names, city counts. Specific over vague.
- **Headings**: Often include a key term + benefit. Example: "Haushaltsgeräte-Reparatur mit Soforttermin".

---

## Visual Foundations

### Colors
- **Primary accent**: Blue — `#2563eb` (light), `#4f8ef7` (dark). Used for CTAs, links, icons, eyebrows.
- **Nav/Footer bg**: Near-black, slightly blue-shifted — `oklch(13% 0.018 255)`. Creates a sophisticated dark chrome.
- **Body bg**: Off-white `oklch(98.5% 0.006 255)` — not pure white. Alt bg `oklch(96% 0.008 255)` for section alternation.
- **Dark mode**: Full dark mode via `[data-theme="dark"]` on `<html>`. Body bg `oklch(18% 0.025 248)`. Card bg `oklch(22% 0.026 248)`. Not black — dark blue-grey.
- **Text**: Near-black `oklch(16% 0.015 255)` on light, near-white `oklch(90% 0.006 248)` on dark.
- **Muted text**: Mid-grey, slightly desaturated blue `oklch(48% 0.010 255)`.
- **Blue subtle**: Pale blue tint `oklch(94% 0.040 255)` — used for eyebrow pills and chip hovers.

### Typography
- **Font**: **Manrope** (self-hosted variable, `fonts/Manrope-VariableFont_wght.woff2`, weight 200–800) is the Hausschrift for all running text — token `--da-font`. **Jost** (Google Fonts CDN, weight 400–700) is the logo/wordmark typeface — token `--da-font-logo`. Hanken Grotesk has been retired.
- **Weights**: 400 body, 500 medium, 600 semi, 700 bold, 800 black (headings).
- **Letter-spacing**: Tight on headings (`-0.03em`), slightly positive on eyebrows (`+0.10em`), near-zero on body.
- **Line height**: 1.15 headings, 1.6 body.
- **Fluid type**: All scale tokens use `clamp()` — `--da-text-2xs` (10→11), `xs` (11→12), `sm` (13→14), `base` (15→16), `md` (17→18), `h3` (18→21), `lg` (22→30), `xl` (30→44).
- **text-wrap**: `balance` on headings, `pretty` on body.

### Spacing
- Scale: 8 / 16 / 24 / 48 / 64 / 80px (xs → 2xl)
- Section padding: 80px vertical (desktop), 60px mobile.
- Max content width: 1200px centered.

### Backgrounds & Layout
- Section alternation: white ↔ `--dz-bg-alt` (subtle off-white).
- Hero: diagonal gradient from slightly saturated blue-white to near-white.
- No full-bleed photography in current design. City cards use gradient placeholders.
- No textures, patterns, or hand-drawn elements.

### Cards
- Background: white (light) / `oklch(22% 0.026 248)` (dark).
- Border: 1px solid `--dz-border`.
- Radius: 12px (`--dz-radius-md`).
- Shadow: Layered 2-stop box shadow (very subtle light mode, stronger dark mode).
- Hover: lifts `translateY(-2px)`, shadow intensifies.

### Borders & Radius
- `sm`: 8px — small elements (chips inner, logo mark)
- `md`: 12px — cards, buttons, main containers
- `lg`: 16px — larger containers
- `pill`: 100px — eyebrow labels, device chips

### Buttons
- Primary: filled blue, 14px top/bottom × 28px left/right padding, 12px radius, blue box-shadow glow.
- Hover: darker blue, 1px lift, stronger shadow glow.
- Small: 10px × 18px, 8px radius.
- No ghost/outlined buttons visible in current design.

### Animations & Transitions
- Duration: 0.2s ease — uniform, snappy. No bounce, no spring.
- Hover: color shift + shadow intensity. Subtle translateY(-1px or -2px) on cards/buttons.
- Theme toggle: 0.3s background/color transition on body.

### Iconography
See ICONOGRAPHY section below.

### Shadow System
- Card resting: `0 1px 4px rgb(0 0 0 / 0.06), 0 4px 16px rgb(0 0 0 / 0.06)` — double-stop, very light.
- Card hover: `0 2px 8px rgb(0 0 0 / 0.08), 0 8px 28px rgb(0 0 0 / 0.10)` — deeper.
- Button: `0 2px 12px color-mix(in srgb, var(--dz-blue) 40%, transparent)` — colored shadow from accent.
- Button hover: `0 4px 20px color-mix(in srgb, var(--dz-blue) 50%, transparent)`.

---

## Iconography

### Approach
- **System**: Custom inline SVG only. No icon font, no sprite sheet, no external library.
- **Style**: Stroke-based, 1.5px stroke width, round linecaps/linejoin, no fill.
- **Size**: 14–16px in buttons/nav, 16px in trust icons.
- **Color**: `currentColor` — inherits from parent, or explicitly set to `var(--dz-blue)`.
- **Usage**: Accent icons in trust bar, calendar icon in CTAs, chevrons implied in navigation.
- **No PNG icons found**. No icon font in use.
- **Emoji**: Temporary city placeholders only (dev artifact, not production).

### Key Icons (inline SVG)
- Calendar/booking: rect + path
- Star/badge: polygon
- Checkmark: path
- Clock: circle + path
- Location pin: path

---

## File Index

```
README.md                          — This file
SKILL.md                           — Agent skill manifest
colors_and_type.css                — All CSS custom properties + type styles
assets/                            — Logos, icons, brand assets
  logo-digizt.svg                  — Digizt wordmark + logomark
  logo-digital-avenue.svg          — Digital Avenue wordmark (blue #305b75, for light bg)
  logo-digital-avenue-white.svg    — Digital Avenue wordmark (white, for dark/teal bg)
  favicon.svg                      — App / favicon mark (teal tile + white DA monogram)
  icons.svg                        — SVG sprite of common icons
preview/                           — Design System tab cards
  colors-brand.html                — Brand color palette
  colors-semantic.html             — Semantic/contextual colors
  colors-dark.html                 — Dark mode palette
  type-scale.html                  — Type scale specimen
  type-weights.html                — Weight specimens
  spacing-tokens.html              — Spacing scale
  radius-shadow.html               — Radius + shadow tokens
  components-buttons.html          — Button states
  components-cards.html            — Card variants
  components-chips.html            — Chips + eyebrow pills
  components-nav.html              — Navigation bar
  components-footer.html           — Footer
  brand-logo.html                  — Logo usage
  brand-icons.html                 — Icon set
ui_kits/
  website/
    index.html                     — Digizt website UI kit
    README.md                      — Kit notes
```
