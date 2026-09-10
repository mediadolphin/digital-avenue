# UI Kit — Digizt Haushaltsgeräte Website

## Overview
Hi-fidelity recreation of the Digizt website (digizt-haushaltsgeraete.de), built on the core design system tokens. React + Babel in-browser, single-page interactive prototype.

## Screens
- **Home** — Nav, hero, trust bar, city grid, brands section, devices chips, partner grid, footer
- **Stadt-Seite** — City-specific landing page (e.g. Köln)
- **Ratgeber** — Article/guide page

## Components
- `Nav` — sticky dark navbar with logo + links + CTA
- `Hero` — gradient hero with eyebrow, H1, sub, CTA, trust bar
- `CityGrid` — responsive grid of city cards with placeholder images
- `BrandsSection` — 3-column brand list + device chips
- `PartnerGrid` — 2-column partner cards with logo placeholders
- `Footer` — 4-column dark footer

## Design Tokens
Pulls from `../../colors_and_type.css`.

## Notes
- Dark mode toggle included via `data-theme` on `<html>`
- City images are gradient placeholders (no real photos available)
- Partner logos are text placeholders
