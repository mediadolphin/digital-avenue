#!/usr/bin/env node
// Zerlegt ein SVG-Sprite (<symbol id="…">) in einzelne SVG-Dateien für Bricks.
// Aufruf: node split-icons.mjs <sprite.svg> <ausgabeordner>
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
const [src, outDir] = process.argv.slice(2);
if (!src || !outDir) { console.error('Nutzung: split-icons.mjs <sprite.svg> <ausgabeordner>'); process.exit(1); }
const svg = readFileSync(src, 'utf8');
mkdirSync(outDir, { recursive: true });
const report = [];
for (const m of svg.matchAll(/<symbol\b([^>]*)>([\s\S]*?)<\/symbol>/g)) {
  const attrs = m[1], inner = m[2].trim();
  const id = (attrs.match(/id="([^"]+)"/) || [])[1]; if (!id) continue;
  const viewBox = (attrs.match(/viewBox="([^"]+)"/) || [, '0 0 24 24'])[1];
  const fill = (attrs.match(/fill="([^"]+)"/) || [, 'none'])[1];
  const usesFill = /fill="(?!none)[^"]+"/.test(inner);
  const file = resolve(outDir, `${id.replace(/^icon-/, '')}.svg`);
  writeFileSync(file, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" fill="${fill}" aria-hidden="true">\n  ${inner.replace(/\n\s*/g, '\n  ')}\n</svg>\n`);
  report.push(`- ${id}: viewBox ${viewBox}${usesFill ? ' (Fill statt Stroke, färbt sich über fill)' : ''}`);
}
writeFileSync(resolve(outDir, 'ICONS.md'), `# Icons aus ${src}\n\n${report.join('\n')}\n`);
console.log(`${report.length} Icons nach ${outDir}`);
