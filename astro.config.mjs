import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import theme from './theme.config.ts';

export default defineConfig({
  site: theme.domain,
  output: 'static',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: theme.defaultLocale,
    locales: theme.locales,
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: theme.defaultLocale,
        locales: {
          es: 'es-DO',
          en: 'en-US',
        },
      },
      lastmod: new Date(),
      changefreq: 'weekly',
      priority: 0.7,
      serialize(item) {
        const url = item.url.replace(/\/$/, '');
        if (url === theme.domain || url === `${theme.domain}/en`) {
          return { ...item, priority: 1.0, changefreq: 'daily' };
        }
        if ((url.startsWith(`${theme.domain}/blog/`) && url !== `${theme.domain}/blog`) ||
            (url.startsWith(`${theme.domain}/en/blog/`) && url !== `${theme.domain}/en/blog`)) {
          return { ...item, lastmod: new Date(), changefreq: 'weekly', priority: 0.8 };
        }
        return item;
      },
    }),
  ],
});
