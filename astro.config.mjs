// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yourdailywisdom.app',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    alpinejs({ entrypoint: '/src/alpine-entrypoint.ts' }),
    sitemap(),
  ],
});
