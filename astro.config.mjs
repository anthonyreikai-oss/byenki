import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://creadopor.one',
  output: 'static',
  trailingSlash: 'never',
  integrations: [
    react(),
    sitemap({
      lastmod: new Date(),
      changefreq: 'weekly',
      priority: 0.7,
      serialize(item) {
        const url = item.url.replace(/\/$/, '');
        if (url === 'https://creadopor.one') {
          return { ...item, priority: 1.0, changefreq: 'daily' };
        }
        if (url.startsWith('https://creadopor.one/blog/') && url !== 'https://creadopor.one/blog') {
          return { ...item, lastmod: new Date(), changefreq: 'weekly', priority: 0.8 };
        }
        return item;
      },
    }),
  ],
});
