// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // The live website address. Used for canonical links and social previews.
  site: 'https://doortodoor911.com',
  output: 'static',
  // Pages are built as /about/index.html so links like /about work on any host.
  trailingSlash: 'ignore',
});
