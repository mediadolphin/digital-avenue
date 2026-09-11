#!/usr/bin/env node
// Erzeugt die Importdaten für Bricks 2.4 (MCP-Abilities) aus Design System und Prototyp.
// Aufruf: node handoff/import/build-import.mjs   (vom Repo-Stamm)
import { readFileSync, writeFileSync, mkdirSync, rmSync, readdirSync } from 'node:fs';
import { resolve, basename } from 'node:path';
import { optimizeSVG } from '../tools/svg-bricks-optimize.mjs';

const ROOT = resolve(import.meta.dirname, '../..');
const OUT = resolve(ROOT, 'handoff/import');
const tokensCss = readFileSync(resolve(ROOT, 'design-system/colors_and_type.css'), 'utf8');
const siteCss = readFileSync(resolve(ROOT, 'prototype/css/site.css'), 'utf8');
const pages = Object.fromEntries(['index', 'praxen', 'kanzleien', 'mittelstand'].map(p =>
  [p, readFileSync(resolve(ROOT, `prototype/${p}.html`), 'utf8')]));
const headHtml = readFileSync(resolve(ROOT, 'prototype/src/partials/head.html'), 'utf8');

// ── Hilfen ────────────────────────────────────────────────────────────────
const stripComments = s => s.replace(/\/\*[\s\S]*?\*\//g, '');
function grabBlock(css, selectorRe) {
  const m = css.match(new RegExp(selectorRe + '\\s*\\{([\\s\\S]*?)\\n\\}'));
  if (!m) return {};
  const out = {};
  for (const line of stripComments(m[1]).split('\n')) {
    const d = line.match(/^\s*(--[\w-]+)\s*:\s*(.+?);\s*$/);
    if (d) out[d[1]] = d[2].trim();
  }
  return out;
}
const light = grabBlock(tokensCss, ':root');
const dark = grabBlock(tokensCss, ':root\\[data-brx-theme="dark"\\]');

// oklch(L% C H) → Hex, damit der Bricks-Farbwähler den Wert sicher versteht.
function oklchToHex(str) {
  const m = str.match(/oklch\(\s*([\d.]+)%?\s+([\d.]+)\s+([\d.]+)/);
  if (!m) return null;
  let L = parseFloat(m[1]); if (str.includes('%')) L /= 100;
  const C = parseFloat(m[2]), H = parseFloat(m[3]) * Math.PI / 180;
  const a = C * Math.cos(H), b = C * Math.sin(H);
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.2914855480 * b;
  const l = l_ ** 3, mm = m_ ** 3, s = s_ ** 3;
  const rl = 4.0767416621 * l - 3.3077115913 * mm + 0.2309699292 * s;
  const gl = -1.2684380046 * l + 2.6097574011 * mm - 0.3413193965 * s;
  const bl = -0.0041960863 * l - 0.7034186147 * mm + 1.7076147010 * s;
  const g = v => { v = Math.min(1, Math.max(0, v)); return v <= 0.0031308 ? 12.92 * v : 1.055 * v ** (1 / 2.4) - 0.055; };
  return '#' + [rl, gl, bl].map(v => Math.round(g(v) * 255).toString(16).padStart(2, '0')).join('');
}
const isColor = v => /^#|^oklch|^rgb|^hsl/.test(v) && !/^0 /.test(v);
const toColor = v => v.startsWith('oklch') ? oklchToHex(v) : v;

// ── 01 Farben ─────────────────────────────────────────────────────────────
const USAGE = {
  'teal': 'Primärfarbe: Links, Icons, Akzente', 'teal-hover': 'Hover der Primärfarbe',
  'teal-dark': 'Navigation, Footer, dunkle Kacheln', 'teal-deeper': 'Tiefste dunkle Fläche (Concierge, Digital-Check)',
  'teal-subtle': 'Helle Teal-Tönung als Hintergrund', 'teal-fill': 'Gefüllte Flächen mit weißem Text (Buttons, Tabs, Kachel teal)',
  'teal-fill-hover': 'Hover gefüllter Flächen', 'teal-text': 'Dunkles Teal als Text (Eyebrow)',
  'plum': 'Zweiter Akzent', 'plum-hover': 'Hover Plum', 'plum-subtle': 'Helle Plum-Tönung', 'plum-text': 'Plum als Text', 'plum-light': 'Helles Plum auf dunklem Grund',
  'sand': 'Akzent Sand: Eyebrow auf dunkel, Kachel sand', 'sand-hover': 'Hover Sand', 'sand-subtle': 'Helle Sand-Tönung (Tags, Kachel cream)', 'sand-text': 'Sand als Text (Tags)', 'sand-dark': 'Gedämpftes Sand auf dunkel',
  'bg': 'Seitenhintergrund', 'bg-alt': 'Alternativer Abschnittshintergrund', 'text': 'Fließtext', 'muted': 'Gedämpfter Text, Copy in Karten', 'border': 'Linien und Rahmen',
  'nav-bg': 'Navigation und Footer Hintergrund', 'nav-text': 'Text auf Navigation und Footer', 'nav-muted': 'Gedämpfter Text auf dunkel', 'nav-border': 'Linien auf dunkel',
  'hero-from': 'Hero-Verlauf Start', 'hero-to': 'Hero-Verlauf Ende', 'card-bg': 'Kartenhintergrund',
  'success': 'Status Erfolg', 'success-subtle': 'Status Erfolg Hintergrund', 'warning': 'Status Warnung', 'warning-subtle': 'Status Warnung Hintergrund', 'error': 'Status Fehler', 'error-subtle': 'Status Fehler Hintergrund',
};
const colors = [];
for (const [k, v] of Object.entries(light)) {
  if (!k.startsWith('--da-') || !isColor(v)) continue;
  const name = k.slice(5);
  colors.push({
    raw: `var(${k})`,
    light: toColor(v),
    dark: dark[k] ? toColor(dark[k]) : toColor(v),
    darkDiffers: Boolean(dark[k]) && dark[k] !== v,
    source: { light: v, dark: dark[k] || v },
    usage: USAGE[name] || '',
  });
}
const palette = {
  id: 'da_palette',
  name: 'Digital Avenue',
  colors: colors.map(c => ({ id: 'da_' + c.raw.slice(9, -1).replace(/-/g, '_'), raw: c.raw, light: c.light, dark: c.dark, darkModeEnabled: true })),
};
writeFileSync(resolve(OUT, '01-farben.json'), JSON.stringify(palette, null, 2) + '\n');
writeFileSync(resolve(OUT, '01-farben.md'), `# Farben (${colors.length})\n\nImport: Style Manager › Colors › Import (\`01-farben.json\`, Format der gespeicherten Palette) oder je Farbe \`create-color\` mit raw, light, dark.\nHalbtransparente Werte (rgb mit Alpha) sind Schatten- und Glasfarben; sie schalten Schatten und Glasflächen im Dunkelmodus um. oklch-Werte des Design Systems sind nach Hex umgerechnet.\n\n| Variable | Hell | Dunkel | Verwendung |\n|---|---|---|---|\n` +
  colors.map(c => `| \`${c.raw}\` | \`${c.light}\` | \`${c.dark}\` | ${c.usage} |`).join('\n') + '\n');

// ── 02 Schriften ──────────────────────────────────────────────────────────
writeFileSync(resolve(OUT, '02-schriften.json'), JSON.stringify({
  customFonts: [{
    family: 'Manrope',
    file: 'design-system/fonts/Manrope-VariableFont_wght.woff2',
    hinweis: 'Variable Schrift, Achse wght 200 bis 800. Erst fontFaces-Schlüssel "200 800" versuchen. Lehnt Bricks den Bereich ab, jede Stufe einzeln auf dieselbe attachmentId zeigen lassen.',
    fontFacesVariable: { '200 800': { woff2: '<attachmentId>' } },
    fontFacesFallback: Object.fromEntries(['400', '500', '600', '700', '800'].map(w => [w, { woff2: '<attachmentId>' }])),
  }],
  googleFonts: [{ family: 'Jost', weights: [400, 500, 600, 700], verwendung: 'Navigation, Eyebrow, Chips (Logo-Schrift)' }],
  fallbacks: { 'Manrope': "system-ui, sans-serif", 'Jost': "'Futura', system-ui, sans-serif" },
}, null, 2) + '\n');

// ── 03 Variablen ──────────────────────────────────────────────────────────
const CATS = [
  { id: 'da-spacing', name: 'Abstände', match: /^--da-sp-/ },
  { id: 'da-radius', name: 'Radien', match: /^--da-r-/ },
  { id: 'da-text', name: 'Schriftgrößen', match: /^--da-text-/ },
  { id: 'da-weight', name: 'Schriftgewichte', match: /^--da-w-/ },
  { id: 'da-leading', name: 'Zeilenhöhe und Laufweite', match: /^--da-(leading|tracking)-/ },
  { id: 'da-fonts', name: 'Schriftfamilien', match: /^--da-font/ },
  { id: 'da-shadow', name: 'Schatten', match: /^--da-(shadow-|card-shadow|card-hover)/ },
  { id: 'da-motion', name: 'Übergänge', match: /^--da-t(-slow)?$/ },
];
const variables = [];
for (const [k, v] of Object.entries(light)) {
  const cat = CATS.find(c => c.match.test(k));
  if (!cat) continue;
  variables.push({ name: k.slice(2), value: v.replace(/\s+/g, ' '), category: cat.id, darkValue: dark[k] ? dark[k].replace(/\s+/g, ' ') : undefined });
}
writeFileSync(resolve(OUT, '03-variablen.json'), JSON.stringify({
  categories: CATS.map(({ id, name }) => ({ id, name })),
  variables: variables.map(v => ({ id: 'da_' + v.name, name: v.name, value: v.value, category: v.category })),
}, null, 2) + '\n');
writeFileSync(resolve(OUT, '03-variablen.md'), `# Variablen (${variables.length}, ${CATS.length} Kategorien)\n\nImport: Style Manager › Variables › Import (\`03-variablen.json\`) oder \`set-global-variable-categories\` und \`set-global-variables\`. Namen ohne führendes \`--\`, Bricks ergänzt es. Kategorien ohne Scale-Konfiguration (feste clamp-Werte). Schatten referenzieren nur Farb-Tokens, deshalb braucht keine Variable einen Dunkelwert.\n\n| Kategorie | Variablen |\n|---|---|\n` +
  CATS.map(c => `| ${c.name} | ${variables.filter(v => v.category === c.id).map(v => '`--' + v.name + '`').join(', ')} |`).join('\n') + '\n');
if (variables.some(v => v.darkValue)) console.warn('Achtung: Variablen mit Dunkelwert gefunden. Bricks-Variablen haben keinen Dunkelwert; solche Werte gehören als Farbe in den Color Manager.');

// ── 04 Theme Style ────────────────────────────────────────────────────────
// Format = Export aus Bricks 2.4 RC2 (Theme Styles › Export), Wertformen nach
// bricks-element-schemas/references/schema-resolved/controls/*.json.
const wrap = (siteCss.match(/--wrap:\s*([^;]+);/) || [, '1180px'])[1].trim();
const raw = v => ({ raw: v });
const box = (t, r = t, b = t, l = r) => ({ top: String(t), right: String(r), bottom: String(b), left: String(l) });
const radius = v => ({ radius: box(v) });
const themeStyle = {
  label: 'Digital Avenue',
  settings: {
    _custom: true,
    conditions: { conditions: [{ id: 'daglob1', main: 'any' }] },
    typography: {
      typographyHtml: '100%',
      typographyBody: { 'font-family': 'Manrope', 'font-size': 'var(--da-text-base)', 'line-height': 'var(--da-leading-normal)', color: raw('var(--da-text)') },
      typographyHeadings: { 'font-family': 'Manrope', 'line-height': 'var(--da-leading-tight)', 'letter-spacing': 'var(--da-tracking-tight)', color: raw('var(--da-text)') },
      typographyHeadingH1: { 'font-size': 'var(--da-text-xl)', 'font-weight': '800', 'line-height': '1.14', 'letter-spacing': '-0.03em' },
      h1Margin: box(0),
      typographyHeadingH2: { 'font-size': 'clamp(28px, 3.4vw, 44px)', 'font-weight': '700', 'line-height': '1.1', 'letter-spacing': '-0.03em' },
      h2Margin: box(0),
      typographyHeadingH3: { 'font-size': 'var(--da-text-h3)', 'font-weight': '700', 'line-height': 'var(--da-leading-snug)', 'letter-spacing': '-0.015em' },
      h3Margin: box(0),
      typographyHeadingH4: { 'font-size': 'var(--da-text-md)', 'font-weight': '600', 'line-height': 'var(--da-leading-snug)', 'letter-spacing': '0' },
      h4Margin: box(0),
      typographyHeadingH5: { 'font-size': 'var(--da-text-base)', 'font-weight': '700', 'line-height': 'var(--da-leading-snug)', 'letter-spacing': '0' },
      h5Margin: box(0),
      typographyHeadingH6: { 'font-size': 'var(--da-text-xs)', 'font-weight': '700', 'letter-spacing': '0.06em', 'text-transform': 'uppercase', 'line-height': 'var(--da-leading-snug)', color: raw('var(--da-muted)') },
      h6Margin: box(0),
      typographyLead: { 'font-size': 'var(--da-text-md)', 'line-height': '1.55', color: raw('var(--da-muted)') },
      focusOutline: '2px solid var(--da-teal)',
    },
    colors: {
      colorPrimary: raw('var(--da-teal)'), colorSecondary: raw('var(--da-sand)'), colorLight: raw('var(--da-bg)'), colorDark: raw('var(--da-text)'),
      colorMuted: raw('var(--da-muted)'), colorBorder: raw('var(--da-border)'), colorInfo: raw('var(--da-teal)'),
      colorSuccess: raw('var(--da-success)'), colorWarning: raw('var(--da-warning)'), colorDanger: raw('var(--da-error)'),
    },
    general: {
      containerMaxWidth: wrap,
      sectionPadding: box('var(--da-sp-20)', 'var(--da-sp-6)'),
      siteBackground: { color: raw('var(--da-bg)') },
    },
    links: { typography: { color: raw('var(--da-teal)') }, textDecoration: 'none', transition: 'color var(--da-t)' },
    button: {
      typography: { 'font-family': 'Manrope', 'font-size': '15px', 'font-weight': '700', 'line-height': '1', 'letter-spacing': '0.01em', color: raw('#ffffff') },
      background: raw('var(--da-teal-fill)'),
      border: { width: box(0), style: 'none', ...radius('var(--da-r-md)') },
      transition: 'background var(--da-t), transform var(--da-t), box-shadow var(--da-t), color var(--da-t)',
      primaryBackground: raw('var(--da-teal-fill)'),
      primaryTypography: { color: raw('#ffffff') },
      primaryBorder: { width: box(0), style: 'none', ...radius('var(--da-r-md)') },
      secondaryBackground: raw('var(--da-sand)'),
      secondaryTypography: { color: raw('var(--da-teal-dark)') },
      secondaryBorder: { width: box(0), style: 'none', ...radius('var(--da-r-md)') },
      lightBackground: raw('#ffffff'),
      lightTypography: { color: raw('var(--da-teal-dark)') },
      lightBorder: { width: box(0), style: 'none', ...radius('var(--da-r-md)') },
      outlineBackground: raw('transparent'),
      outlineBorder: { width: box('1.5px'), style: 'solid', color: raw('var(--da-teal)'), ...radius('var(--da-r-md)') },
      outlineTypography: { color: raw('var(--da-teal)') },
    },
    form: {
      labelTypography: { 'font-size': 'var(--da-text-xs)', 'font-weight': '700', 'letter-spacing': '0.06em', 'text-transform': 'uppercase', color: raw('var(--da-muted)') },
      placeholderTypography: { color: raw('var(--da-muted)') },
      fieldTypography: { 'font-family': 'Manrope', 'font-size': 'var(--da-text-base)', color: raw('var(--da-text)') },
      fieldBackgroundColor: raw('var(--da-bg)'),
      fieldBorder: { width: box('1px'), style: 'solid', color: raw('var(--da-border)'), ...radius('var(--da-r-md)') },
      fieldPadding: box('12px', '14px'),
      fieldMargin: box(0),
      submitButtonPadding: box('13px', '26px'),
      submitButtonTypography: { 'font-weight': '700', 'font-size': '15px', 'letter-spacing': '0.01em', color: raw('#ffffff') },
      submitButtonBackgroundColor: raw('var(--da-teal-fill)'),
      submitButtonBorder: { width: box(0), style: 'none', ...radius('var(--da-r-md)') },
    },
  },
  id: 'digital_avenue',
};
writeFileSync(resolve(OUT, '04-theme-style.json'), JSON.stringify(themeStyle, null, 2) + '\n');

// ── CSS-Regeln extrahieren ────────────────────────────────────────────────
// Zerlegt CSS in Regeln, @media-Blöcke bleiben als Umschlag erhalten.
function parseRules(css) {
  css = stripComments(css);
  const rules = []; let i = 0;
  const readBlock = (start) => { // start zeigt auf '{'
    let depth = 0, j = start;
    for (; j < css.length; j++) { if (css[j] === '{') depth++; else if (css[j] === '}') { depth--; if (depth === 0) break; } }
    return j;
  };
  while (i < css.length) {
    const open = css.indexOf('{', i); if (open < 0) break;
    const selector = css.slice(i, open).trim();
    const close = readBlock(open);
    const body = css.slice(open + 1, close).trim();
    if (selector.startsWith('@media')) {
      for (const r of parseRules(body)) rules.push({ ...r, media: selector });
    } else if (selector.startsWith('@')) { /* keyframes, font-face: überspringen */ }
    else for (const sel of selector.split(/,(?![^(]*\))/)) rules.push({ selector: sel.trim(), body });
    i = close + 1;
  }
  return rules;
}
const allRules = [...parseRules(tokensCss).filter(r => !/^:root|^\*|^body|^html/.test(r.selector) || false), ...parseRules(siteCss)];
const selectorClasses = sel => [...sel.replace(/:not\([^)]*\)/g, '').matchAll(/\.([a-zA-Z_][\w-]*)/g)].map(m => m[1]);
function rulesFor(classes, { exclude = [] } = {}) {
  const set = new Set(classes);
  const ex = new Set(exclude);
  return allRules.filter(r => {
    const cls = selectorClasses(r.selector);
    return cls.some(c => set.has(c) && !ex.has(c));
  });
}
const parseDecls = body => { const o = {}; for (const d of body.split(';')) { const i = d.indexOf(':'); if (i > 0) o[d.slice(0, i).trim()] = d.slice(i + 1).trim(); } return o; };
function mergeRules(rules, { dropDecls = {} } = {}) {
  const map = new Map();
  for (const r of rules) {
    const key = (r.media || '') + '|' + r.selector.replace(/\s+/g, ' ');
    const cur = map.get(key) || { selector: r.selector.replace(/\s+/g, ' '), media: r.media, decls: {} };
    Object.assign(cur.decls, parseDecls(r.body));
    map.set(key, cur);
  }
  return [...map.values()].map(r => {
    const decls = Object.fromEntries(Object.entries(r.decls).filter(([k, v]) => dropDecls[k] !== v));
    return { ...r, body: Object.entries(decls).map(([k, v]) => `${k}: ${v};`).join(' ') };
  }).filter(r => r.body);
}
function rulesToCss(rules, opts) {
  rules = mergeRules(rules, opts);
  const plain = rules.filter(r => !r.media), media = rules.filter(r => r.media);
  const fmt = r => `${r.selector} {\n  ${r.body.replace(/;\s*/g, ';\n  ').trim()}\n}`;
  let out = plain.map(fmt).join('\n\n');
  const byMedia = {};
  for (const r of media) (byMedia[r.media] ||= []).push(r);
  for (const [m, rs] of Object.entries(byMedia)) out += `\n\n${m} {\n${rs.map(fmt).join('\n\n').replace(/^/gm, '  ')}\n}`;
  return out.trim() + '\n';
}

// ── 05 Global Classes ─────────────────────────────────────────────────────
const CLASSES = [
  { name: 'section', category: 'Layout', note: 'Section-Innenabstand groß' },
  { name: 'section-sm', category: 'Layout', note: 'Section-Innenabstand klein' },
  { name: 'section-head', category: 'Layout', note: 'Abschnittskopf mit Eyebrow, H2, Lead; Modifier center' },
  { name: 'split', category: 'Layout', note: 'Zweispaltiges Grid, mobil einspaltig' },
  { name: 'da-eyebrow', category: 'Text', note: 'Eyebrow mit Linie, Versalien, Jost' },
  { name: 'on-dark', category: 'Text', note: 'Modifier: Eyebrow und Ghost-Button auf dunklem Grund' },
  { name: 'textlink', category: 'Text', note: 'Textlink mit Pfeil-Icon' },
  { name: 'placeholder-tag', category: 'Text', note: 'Kleines Label (Tag) in Karten' },
  { name: 'da-btn', category: 'Buttons', note: 'Basis aller Buttons: Padding, Radius, Schrift', synth: true },
  { name: 'da-btn-primary', category: 'Buttons', note: 'Gefüllt teal, weißer Text' },
  { name: 'da-btn-ghost', category: 'Buttons', note: 'Umrandet teal; mit on-dark weiß' },
  { name: 'da-btn-light', category: 'Buttons', note: 'Weiß auf dunklen Flächen' },
  { name: 'da-btn-sand', category: 'Buttons', note: 'Sand-Variante' },
  { name: 'icon', category: 'Icons', note: 'Icon 16px' },
  { name: 'icon-20', category: 'Icons', note: 'Icon 20px' },
  { name: 'form', category: 'Formular', note: 'Zweispaltiges Formular-Grid, mobil einspaltig' },
  { name: 'field', category: 'Formular', note: 'Feld mit Label, Input, Fehlertext; Modifier full, half, invalid' },
  { name: 'segmented', category: 'Formular', note: 'Segment-Auswahl (Radio als Buttons)' },
  { name: 'form-foot', category: 'Formular', note: 'Formularfuß mit Hinweis und Button' },
  { name: 'form-success', category: 'Formular', note: 'Erfolgsmeldung nach dem Absenden' },
  { name: 'sr-only', category: 'Hilfsklassen', note: 'Nur für Screenreader' },
];
const baseClassNames = CLASSES.map(c => c.name);
// Button-Basisregel aus der Sammelregel des Prototyps ableiten.
const btnBase = allRules.find(r => r.selector === '.da-btn-primary' && r.body.includes('white-space: nowrap'));
const classOut = []; const emitted = new Set();
for (const c of CLASSES) {
  let rules;
  if (c.synth && c.name === 'da-btn') rules = [{ selector: '.da-btn', body: btnBase.body }];
  else rules = rulesFor([c.name]).filter(r => !(r === btnBase));
  if (c.only) rules = rules.filter(r => c.only.some(o => r.selector.includes('.' + o)));
  // Nur Regeln, deren Klassen alle zum Klassen-Set gehören (keine Kontextregeln anderer Komponenten), jede Regel nur einmal.
  rules = rules.filter(r => selectorClasses(r.selector).every(k => baseClassNames.includes(k)) && !emitted.has(r.media + '|' + r.selector) );
  rules.forEach(r => emitted.add(r.media + '|' + r.selector));
  const opts = c.name.startsWith('da-btn-') ? { dropDecls: parseDecls(btnBase.body) } : {};
  classOut.push({ name: c.name, category: c.category, note: c.note, css: rulesToCss(rules, opts) });
}
mkdirSync(resolve(OUT, '05-klassen'), { recursive: true });
const classId = name => 'da' + name.replace(/[^a-z0-9]/g, '').slice(0, 5).padEnd(5, 'x') + String(CLASSES.findIndex(c => c.name === name)).padStart(2, '0');
writeFileSync(resolve(OUT, '05-klassen/klassen.json'), JSON.stringify(
  classOut.map(c => ({ id: classId(c.name), name: c.name, settings: { _cssCustom: c.css.trim() } })), null, 2) + '\n');
writeFileSync(resolve(OUT, '05-klassen/klassen.css'), classOut.map(c => `/* ── ${c.name}: ${c.note} ── */\n${c.css}`).join('\n'));
writeFileSync(resolve(OUT, '05-klassen/klassen.md'), `# Global Classes (${classOut.length})\n\nImport: Style Manager › Classes › Import (\`klassen.json\`, Array gespeicherter Klassen mit dem CSS als Custom CSS) oder je Klasse \`create-global-class\`. Bricks 2.4 CSS Sync übernimmt unterstützte Deklarationen in die Controls. Buttons: Basisklasse \`da-btn\` plus Variante kombinieren.\n\n| Klasse | Kategorie | Zweck |\n|---|---|---|\n` +
  classOut.map(c => `| \`${c.name}\` | ${c.category} | ${c.note} |`).join('\n') + '\n');

// ── 06 Icons ──────────────────────────────────────────────────────────────
const ICON_NAMES = { 'i-check': 'check', 'i-arrow': 'arrow-right', 'i-phone': 'phone', 'i-mail': 'mail', 'i-pin': 'pin', 'i-clock': 'clock', 'i-shield': 'shield', 'i-menu': 'menu', 'i-x': 'x', 'i-chev': 'chevron-down', 'i-sun': 'sun', 'i-moon': 'moon' };
const iconDir = resolve(OUT, '06-icons'); rmSync(iconDir, { recursive: true, force: true }); mkdirSync(iconDir);
const iconReport = [];
for (const m of headHtml.matchAll(/<symbol\b([^>]*)>([\s\S]*?)<\/symbol>/g)) {
  const id = (m[1].match(/id="([^"]+)"/) || [])[1]; const name = ICON_NAMES[id]; if (!name) continue;
  const viewBox = (m[1].match(/viewBox="([^"]+)"/) || [, '0 0 16 16'])[1];
  const inner = m[2].trim();
  writeFileSync(resolve(iconDir, `${name}.svg`), optimizeSVG(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" fill="none" aria-hidden="true">${inner}</svg>`).output + '\n');
  iconReport.push(`- ${name}: aus dem Prototyp-Sprite, Strich currentColor`);
}
for (const extra of ['calendar', 'star', 'wrench']) {
  const src = resolve(ROOT, `handoff/export/icons/${extra}.svg`);
  const svg = readFileSync(src, 'utf8').replace(/>\n\s+/g, '>').replace(/\n\s*</g, '<');
  writeFileSync(resolve(iconDir, `${extra}.svg`), optimizeSVG(svg).output + '\n');
  iconReport.push(`- ${extra}: aus dem Design-System-Sprite${extra === 'star' ? ' (Fill statt Stroke)' : ''}`);
}
writeFileSync(resolve(iconDir, 'ICONS.md'), `# Icon-Set „Digital Avenue“ (${iconReport.length} Icons)\n\nAlle mit viewBox 0 0 16 16, ohne width/height, Farbe über currentColor, jede Form mit Klasse bx1, bx2 … (in Bricks einzeln ansprechbar). Durch den SVG → Bricks Optimizer gelaufen (handoff/tools/). Für Bricks › Einstellungen › Icons (eigenes Set, SVG-Upload in 2.4) oder als SVG-Element mit Global Class icon / icon-20.\nNicht übernommen: washer, oven (Reste eines fremden Sets).\n\n${iconReport.join('\n')}\n`);

// ── 07 Components ─────────────────────────────────────────────────────────
const VOID = new Set(['img', 'br', 'hr', 'input', 'meta', 'link', 'source', 'use', 'path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'wbr']);
function extractElement(html, cls, nth = 0) {
  const re = new RegExp(`<([a-zA-Z][\\w-]*)([^>]*\\sclass="(?:[^"]*\\s)?${cls}(?:\\s[^"]*)?"[^>]*)>`, 'g');
  let m, hit = -1, count = 0;
  while ((m = re.exec(html))) { if (count++ === nth) { hit = m.index; break; } }
  if (hit < 0) return null;
  const tagRe = /<\/?([a-zA-Z][\w-]*)[^>]*?(\/?)>|<!--[\s\S]*?-->/g; tagRe.lastIndex = hit;
  let depth = 0, t;
  while ((t = tagRe.exec(html))) {
    if (t[0].startsWith('<!--')) continue;
    const name = t[1].toLowerCase(), closing = t[0].startsWith('</'), self = t[2] === '/' || VOID.has(name);
    if (closing) depth--; else if (!self) depth++;
    if (depth === 0) return html.slice(hit, tagRe.lastIndex);
  }
  return null;
}
const SPRITE = {};
for (const m of headHtml.matchAll(/<symbol\b([^>]*)>([\s\S]*?)<\/symbol>/g)) {
  const id = (m[1].match(/id="([^"]+)"/) || [])[1];
  SPRITE[id] = { viewBox: (m[1].match(/viewBox="([^"]+)"/) || [, '0 0 16 16'])[1], inner: m[2].trim() };
}
const clean = html => html
  .replace(/<svg([^>]*)><use href="#([^"]+)"\s*\/><\/svg>/g, (m, attrs, id) => SPRITE[id] ? `<svg${attrs} viewBox="${SPRITE[id].viewBox}" fill="none" aria-hidden="true">${SPRITE[id].inner}</svg>` : m)
  .replace(/\s?class="([^"]*)"/g, (m, c) => { const k = c.split(/\s+/).filter(x => x && x !== 'reveal' && x !== 'in').join(' '); return k ? ` class="${k}"` : ''; })
  .replace(/\s(data-reveal|data-close-check|data-open-check|data-toggle-mode|data-drawer|data-tab|data-panel)(="[^"]*")?/g, '')
  .replace(/\n\s*\n/g, '\n');
const COMPONENTS = [
  { label: 'Service-Karte', cls: 'service-card', page: 'index', category: 'Karten', desc: 'Leistungskarte mit Label, Status-Zeile, Titel, Stichpunkten; Variante sand.', properties: ['Label', 'Status', 'Titel', 'Liste', 'Variante'] },
  { label: 'Kachel', cls: 'tile', page: 'index', category: 'Karten', desc: 'Kachel in fünf Varianten (teal, sand, cream, deep, photo) mit Label, H3, Copy, Link, Bild.', properties: ['Variante', 'Label', 'Titel', 'Copy', 'Link-Text', 'Link', 'Bild'], variants: ['tile-teal', 'tile-sand', 'tile-cream', 'tile-deep', 'tile-photo'] },
  { label: 'Schritt', cls: 'step', page: 'index', category: 'Karten', desc: 'Prozessschritt mit Nummer, H3 und Copy.', properties: ['Nummer', 'Titel', 'Copy'] },
  { label: 'Referenzkarte', cls: 'ref', page: 'index', category: 'Karten', desc: 'Referenz mit Logo, Art, Titel, Copy und Link. Später Query Loop über Referenzen.', properties: ['Logo', 'Art', 'Titel', 'Copy', 'Link'] },
  { label: 'Kundenstimme', cls: 'quote', page: 'index', category: 'Karten', desc: 'Zitat mit Name, Rolle und Tag; Variante featured auf teal.', properties: ['Zitat', 'Name', 'Rolle', 'Tag', 'Variante'] },
  { label: 'Pain-Karte', cls: 'pain', page: 'praxen', category: 'Karten', desc: 'Schmerzpunkt-Karte der Landingpages: Zitat in Serif, Titel, Copy.', properties: ['Zitat', 'Titel', 'Copy'] },
  { label: 'Feature-Block', cls: 'feature', page: 'kanzleien', category: 'Abschnitte', desc: 'Zweispaltiger Feature-Abschnitt mit Eyebrow, H2, Copy, Liste und Bild; Bildseite wechselbar.', properties: ['Eyebrow', 'Titel', 'Copy', 'Liste', 'Bild', 'Bild-Seite'] },
  { label: 'Concierge', cls: 'concierge', page: 'praxen', category: 'Abschnitte', desc: 'Dunkler Abschnitt mit Text und Visual, Eyebrow in Sand.', properties: ['Eyebrow', 'Titel', 'Copy', 'Button-Text', 'Link'] },
  { label: 'FAQ', cls: 'faq', page: 'praxen', category: 'Abschnitte', desc: 'FAQ-Liste als Akkordeon. In Bricks: Accordion (Nestable), Inhalte später aus dem FAQ-Post-Typ.', properties: ['Fragen'] },
  { label: 'Digital-Check-Block', cls: 'check', page: 'index', category: 'Abschnitte', desc: 'CTA-Block Digital-Check mit Liste, Hinweis, Buttons und Aside.', properties: ['Eyebrow', 'Titel', 'Copy', 'Liste', 'Button-Text'] },
  { label: 'Hero Landingpage', cls: 'lp-hero', page: 'praxen', category: 'Abschnitte', desc: 'Hero der Landingpages mit Eyebrow, H1 mit Betonung, Lead, Buttons, Bild, Fokus-Service-Karte.', properties: ['Eyebrow', 'Titel', 'Betonung', 'Lead', 'Button-Text', 'Bild'] },
  { label: 'Hero Start', cls: 'hero', page: 'index', category: 'Abschnitte', desc: 'Zentrierter Hero der Startseite. Kein Component, Section mit Global Classes; HTML für den Seitenimport.', properties: [] },
  { label: 'Mosaik', cls: 'mosaic', page: 'index', category: 'Abschnitte', desc: 'Mosaik-Grid der Startseite mit Bildern, Chips, Service-Karten, Textkarte. Grid als Custom CSS, Karten als Component-Instanzen.', properties: [] },
  { label: 'Partnerzeile', cls: 'partners', page: 'index', category: 'Abschnitte', desc: 'Logo-Zeile der Partner. Später Query Loop über Partner.', properties: [] },
  { label: 'Zielgruppen-Tabs', cls: 'audience', page: 'index', category: 'Abschnitte', desc: 'Tabs Praxen/Kanzleien/Mittelstand mit Panel. In Bricks: Tabs (Nestable) plus Custom CSS.', properties: [] },
  { label: 'Leitbild', cls: 'about', page: 'index', category: 'Abschnitte', desc: 'Leitbild mit Text und Fakten.', properties: [] },
  { label: 'Dialog Digital-Check', cls: 'check-dialog', page: 'index', category: 'Abschnitte', desc: 'Formular-Dialog. In Bricks: Popup-Template mit Form-Element.', properties: [] },
];
const compDir = resolve(OUT, '07-components'); rmSync(compDir, { recursive: true, force: true }); mkdirSync(compDir);
const manifest = [];
for (const c of COMPONENTS) {
  const html = extractElement(pages[c.page], c.cls);
  if (!html) { console.warn('nicht gefunden:', c.cls); continue; }
  const pretty = clean(html);
  const classes = [...new Set([...pretty.matchAll(/class="([^"]*)"/g)].flatMap(m => m[1].split(/\s+/)))].filter(Boolean);
  const rules = rulesFor(classes, { exclude: baseClassNames });
  const file = c.cls;
  writeFileSync(resolve(compDir, `${file}.html`), pretty + '\n');
  writeFileSync(resolve(compDir, `${file}.css`), rulesToCss(rules));
  manifest.push({ label: c.label, category: c.category, desc: c.desc, html: `${file}.html`, css: `${file}.css`, rootClass: c.cls, sourcePage: `prototype/${c.page}.html`, properties: c.properties, variants: c.variants, usesGlobalClasses: classes.filter(k => baseClassNames.includes(k)), images: [...new Set([...pretty.matchAll(/src="([^"]+)"/g)].map(m => m[1]).filter(u => !u.startsWith('data:')))] });
}
writeFileSync(resolve(compDir, 'components.json'), JSON.stringify({
  hinweis: 'Je Eintrag: HTML und CSS mit convert-html-css-to-bricks-data umwandeln (Globals aus 05 sind dann schon vorhanden), Baum prüfen, mit create-component speichern; properties an die Text-, Bild- und Link-Controls binden. Einträge ohne properties sind Abschnitte für den Seitenimport, keine Components.',
  components: manifest,
}, null, 2) + '\n');

console.log(`Farben: ${colors.length}, Variablen: ${variables.length}, Klassen: ${classOut.length}, Icons: ${iconReport.length}, Components/Abschnitte: ${manifest.length}`);
