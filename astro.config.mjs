import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://savetokens.dev',
  // GitHub Pages uses the repo name as base path by default
  // Since we're using a custom domain, we don't need a base path
  base: '/',
});
