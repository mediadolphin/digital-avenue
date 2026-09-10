#!/usr/bin/env node
// Exportiert CSS-Custom-Properties einer Token-Datei in importierbare Bricks-Dateien.
// Aufruf: node export-tokens.mjs --config handoff/handoff.config.json --out handoff/export
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';

const args = Object.fromEntries(process.argv.slice(2).map((a, i, arr) => a.startsWith('--') ? [a.slice(2), arr[i + 1]] : []).filter(Boolean));
if (!args.config) { console.error('Nutzung: --config <handoff.config.json> [--out <dir>]'); process.exit(1); }
const cfgPath = resolve(args.config);
const cfg = JSON.parse(readFileSync(cfgPath, 'utf8'));
const root = dirname(cfgPath);
const cssPath = resolve(root, '..', cfg.tokensCss);
const out = resolve(args.out || resolve(root, 'export'));
mkdirSync(out, { recursive: true });

// ── CSS lesen: :root-Blöcke (hell) und [data-theme="dark"]-Block ──
const css = readFileSync(cssPath, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
const grab = (selectorRe) => {
  const vars = {};
  const re = new RegExp(`(?:^|})\\s*${selectorRe}\\s*\\{([^}]*)\\}`, 'g');
  for (const m of css.matchAll(re)) {
    for (const d of m[1].split(';')) {
      const i = d.indexOf(':'); if (i < 0) continue;
      const k = d.slice(0, i).trim(), v = d.slice(i + 1).trim();
      if (k.startsWith('--') && v) vars[k] = v;
    }
  }
  return vars;
};
const light = grab(':root');
const dark = grab('\\[data-theme="dark"\\]');
const prefix = `--${cfg.prefix}-`;
const own = Object.keys(light).filter((k) => k.startsWith(prefix));
if (!own.length) { console.error(`Keine Variablen mit Präfix ${prefix} in ${cssPath}`); process.exit(1); }

// ── Farbhelfer ──
const isColor = (v) => /^(#[0-9a-f]{3,8}|rgba?\(|hsla?\(|oklch\()/i.test(v);
const hexToHsl = (hex) => {
  let h = hex.replace('#', ''); if (h.length === 3) h = h.split('').map((c) => c + c).join('');
  const r = parseInt(h.slice(0, 2), 16) / 255, g = parseInt(h.slice(2, 4), 16) / 255, b = parseInt(h.slice(4, 6), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b), l = (max + min) / 2; let hh = 0, s = 0;
  if (max !== min) {
    const d = max - min; s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    hh = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4; hh *= 60;
  }
  return { h: +hh.toFixed(2), s: +(s * 100).toFixed(2), l: +(l * 100).toFixed(2) };
};
const hsla = ({ h, s, l }, a = 1) => `hsla(${h},${s}%,${l}%,${a})`;

// ── 1) Token-Palette 1:1 ──
const colorTokens = own.filter((k) => isColor(light[k]));
const tokenPalette = {
  id: `${cfg.prefix}_tokens`, name: `${cfg.palette.name} Tokens`, status: 'enabled', defaultExpanded: true,
  colors: colorTokens.map((k) => ({
    id: `${cfg.prefix}_${k.slice(prefix.length)}`, name: k.slice(prefix.length),
    raw: light[k], rawValue: { light: light[k], dark: dark[k] || light[k] },
  })),
};
writeFileSync(resolve(out, 'bricks-color-palette-tokens.json'), JSON.stringify(tokenPalette, null, 1));

// ── 2) AT-Palette mit Auto-Shades (Näherung an Advanced Themer) ──
const atp = cfg.palette.atPrefix || 'at-';
const shade = (base, kind, n) => {
  if (kind === 'l') return { h: base.h, s: +(base.s * (n === 6 ? 0.9 : 0.67)).toFixed(2), l: +(base.l + (98 - base.l) * n / 6).toFixed(2) };
  if (kind === 'd') return { h: base.h, s: base.s, l: +(base.l * (1 - n / 7)).toFixed(2) };
  return base;
};
const alphas = [0.84, 0.68, 0.53, 0.37, 0.21, 0.05];
const atColors = [];
for (const [name, def] of Object.entries(cfg.palette.base)) {
  const lv = light[def.token], dv = dark[def.dark || def.token] || lv;
  if (!lv || !/^#/.test(lv)) { console.warn(`Basisfarbe ${name}: ${def.token} fehlt oder ist kein Hex-Wert, übersprungen`); continue; }
  const lb = hexToHsl(lv), db = /^#/.test(dv) ? hexToHsl(dv) : lb;
  const id = `at_${name}`, children = [];
  const push = (kind, n, lightVal, darkVal, type) => {
    const cid = `${id}-${kind}-${n}`; children.push(cid);
    atColors.push({ id: cid, name: `${name}-${kind}-${n}`, raw: `var(--${atp}${name}-${kind}-${n})`, rawValue: { light: lightVal, dark: darkVal }, isShade: true, shadeMode: 'auto', shadeType: type, shadeParent: id, shadeOrder: n - 1, at_framework: true, at_version: '1.0.0' });
  };
  const baseEntry = { id, name, raw: `var(--${atp}${name})`, rawValue: { light: hsla(lb), dark: hsla(db) }, complementaryChildren: [], shadeChildren: children, isExpanded: false, at_framework: true, at_version: '1.0.0' };
  atColors.push(baseEntry);
  for (let n = 1; n <= 6; n++) { const s = shade(lb, 'l', n); push('l', n, hsla(s), hsla({ ...s, l: +(100 - s.l).toFixed(2) }), 'Light'); }
  for (let n = 1; n <= 6; n++) { const s = shade(lb, 'd', n); push('d', n, hsla(s), hsla({ ...s, l: +(100 - s.l).toFixed(2) }), 'Dark'); }
  alphas.forEach((a, i) => push('t', i + 1, hsla(lb, a), hsla({ ...lb, l: +(100 - lb.l).toFixed(2) }, a), 'Transparent'));
}
const atPalette = { id: 'at_framework_palette', name: 'AT Framework', at_framework: true, at_version: '1.0.0', status: 'enabled', prefix: atp, defaultExpanded: true, default: 'true', colors: atColors };
writeFileSync(resolve(out, 'bricks-color-palette-at.json'), JSON.stringify(atPalette, null, 1));

// ── 3) Variablen mit Kategorien ──
const variables = [], categories = [], used = new Set();
for (const [key, def] of Object.entries(cfg.variables || {})) {
  const re = new RegExp(def.match); const catId = `${cfg.prefix}_${key}`;
  const hits = own.filter((k) => re.test(k) && !isColor(light[k]) && !used.has(k));
  if (!hits.length) continue;
  categories.push({ id: catId, name: def.name || key });
  for (const k of hits) { used.add(k); variables.push({ id: `${cfg.prefix}_${k.slice(2)}`, name: k.slice(2), value: light[k], category: catId, type: 'static' }); }
}
writeFileSync(resolve(out, 'bricks-variables.json'), JSON.stringify({ variables, categories }, null, 1));

// ── 4) Globales CSS ──
const block = (vars, keys) => keys.map((k) => `  ${k}: ${vars[k]};`).join('\n');
const darkKeys = own.filter((k) => dark[k]);
writeFileSync(resolve(out, 'global-tokens.css'),
  `/* ${cfg.palette.name}: Design-Tokens, erzeugt aus ${cfg.tokensCss}. Nicht von Hand ändern. */\n:root {\n${block(light, own)}\n}\n` +
  (darkKeys.length ? `[data-theme="dark"] {\n${block(dark, darkKeys)}\n}\n` : ''));

// ── 5) Report ──
const unassigned = own.filter((k) => !isColor(light[k]) && !used.has(k));
const report = [
  `# Token-Export: ${cfg.palette.name}`, '', `Quelle: \`${cfg.tokensCss}\`, Präfix \`${prefix}\`, Framework: ${cfg.framework}`, '',
  `- Farb-Tokens: ${colorTokens.length} (davon mit Dunkel-Wert: ${colorTokens.filter((k) => dark[k]).length})`,
  `- AT-Basisfarben mit Schattierungen: ${Object.keys(cfg.palette.base).length}`,
  `- Variablen: ${variables.length} in ${categories.length} Kategorien`, '',
  '## Farb-Tokens', '', '| Token | Hell | Dunkel |', '|---|---|---|',
  ...colorTokens.map((k) => `| \`${k}\` | ${light[k]} | ${dark[k] || ''} |`), '',
  '## Nicht zugeordnete Variablen (bitte Kategorie in der Config ergänzen)', '',
  ...(unassigned.length ? unassigned.map((k) => `- \`${k}\`: ${light[k]}`) : ['keine']), '',
  '## Nächste Schritte', '', '1. Paletten und Variablen in Bricks importieren (siehe references/frameworks.md).',
  '2. In Advanced Themer die Basisfarben einmal neu speichern, damit AT die Schattierungen selbst berechnet.',
  '3. `global-tokens.css` als globales CSS einbinden, wenn kein Framework die Variablen erzeugt.',
].join('\n');
writeFileSync(resolve(out, 'tokens-report.md'), report);
console.log(`Export nach ${out}: ${colorTokens.length} Farb-Tokens, ${atColors.length} AT-Einträge, ${variables.length} Variablen, ${unassigned.length} unzugeordnet`);
