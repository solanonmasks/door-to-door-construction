// Downloads any photo listed in src/data/images.ts that is not yet in public/images.
// Run with:  npm run download-images
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const source = fs.readFileSync(path.join(root, 'src/data/images.ts'), 'utf8');
const base = (source.match(/const U = '([^']+)'/) || [])[1] || '';
const outDir = path.join(root, 'public/images');
fs.mkdirSync(outDir, { recursive: true });

// Matches lines like:  key: { file: 'name.jpg', url: U + '2022/05/name.jpg' },
const re = /file:\s*'([^']+)',\s*url:\s*(?:U\s*\+\s*)?'([^']+)'/g;
const list = [];
for (const m of source.matchAll(re)) {
  const url = m[2].startsWith('http') ? m[2] : base + m[2];
  list.push({ file: m[1], url });
}

let ok = 0, skipped = 0, failed = 0;
for (const { file, url } of list) {
  const dest = path.join(outDir, file);
  if (fs.existsSync(dest)) { skipped++; continue; }
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
    console.log('Downloaded', file);
    ok++;
  } catch (err) {
    console.error('Could not download', url, '-', err.message);
    failed++;
  }
}
console.log(`Done. ${ok} downloaded, ${skipped} already there, ${failed} failed.`);
if (failed) process.exitCode = 1;
