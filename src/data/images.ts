// ─────────────────────────────────────────────────────────────
// Every photo used on the site is listed here.
//
// Each entry has:
//   file: the file name inside /public/images
//   url:  where the photo lives on the client's current website
//
// If the file exists in /public/images it is used. If not, the site
// falls back to the remote URL. Run `npm run download-images` to copy
// any missing photos into /public/images.
// ─────────────────────────────────────────────────────────────
import fs from 'node:fs';
import path from 'node:path';

const U = 'https://doortodoor911.com/wp-content/uploads/';

export const images = {
  kitchen8: { file: '8.jpg', url: U + '2022/05/8.jpg' },
  countertops: { file: 'Granite-Countertops.jpg', url: U + '2022/05/Granite-Countertops.jpg' },
  remodel1: { file: '1.jpg', url: U + '2022/05/1.jpg' },
  remodel4: { file: '4.jpg', url: U + '2022/05/4.jpg' },
  finishing6: { file: '6.jpg', url: U + '2022/05/6.jpg' },
  renovation9: { file: '9.jpg', url: U + '2022/05/9.jpg' },
  framing: { file: 'Framing.jpg', url: U + '2022/05/Framing.jpg' },
  siding: { file: 'Siding.jpg', url: U + '2022/05/Siding.jpg' },
  residential: { file: 'Residential-Construction.jpg', url: U + '2022/05/Residential-Construction.jpg' },
  doors: { file: 'Door-Services.jpg', url: U + '2022/05/Door-Services.jpg' },
  project10: { file: '2018-10.jpg', url: U + '2018/04/10.jpg' },
  project11: { file: '2018-11.jpg', url: U + '2018/04/11.jpg' },
} as const;

export type ImageKey = keyof typeof images;

const publicDir = path.resolve(process.cwd(), 'public', 'images');

/** Returns the local path if the photo is in /public/images, otherwise the remote URL. */
export function img(key: ImageKey): string {
  const entry = images[key];
  if (fs.existsSync(path.join(publicDir, entry.file))) return '/images/' + entry.file;
  return entry.url;
}
