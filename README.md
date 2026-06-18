# byenki — brutalist blog template

Static blog template built with **Astro 5**, **React**, **Tailwind CSS v4**, and **motion** (Framer Motion). Features a terminal-inspired brutalist UI, dark/light themes, and i18n (es/en).

## Quick start

```bash
bash create-blog.sh ~/projects/my-new-blog
```

Follow the prompts to set: site name, domain, logo, accent color, locale, and credit link.

## Manual setup

```bash
git clone <your-fork> my-blog
cd my-blog
npm install
```

### 1. Edit `theme.config.ts`

This is the single source of truth for branding:

```ts
name: "My Blog",           // Site name (used in layouts, schema, footer)
domain: "https://my.blog",  // Production URL
logo: "my_blog_",           // Logo text (underscore = blinking cursor)
logoFont: "Sora",           // Google Font for logo
accentColor: "#C4622D",     // Primary accent

colors: { /* dark palette */ },
colorsLight: { /* light palette */ },

fonts: {
  display: "Anton",         // Display/heading font
  accent: "Syne",           // Accent font
  sans: "Space Grotesk",    // Body font
  mono: "JetBrains Mono",   // Monospace font
},

social: { email, instagram, linkedin, whatsapp },

credit: {
  text: "built with byenki",
  url: "https://byenki.dev",
},

gtm: "GTM-XXXXXXX",         // Google Tag Manager (empty string = disabled)
locales: ["es", "en"],
defaultLocale: "es",
```

### 2. Sync `src/styles/index.css`

The Tailwind `@theme` block must match `theme.config.ts`:

```css
@theme {
  --font-display: "Anton", sans-serif;
  --font-accent: "Syne", sans-serif;
  --font-sans: "Space Grotesk", sans-serif;
  --font-mono: "JetBrains Mono", monospace;
  --color-w-orange: #C4622D; /* same as accentColor */
  /* ... */
}
```

### 3. Edit `src/i18n/ui.ts`

Replace site-specific copy: title, description, about page text, blog archive labels. About 35+ translatable strings.

### 4. Add blog posts

Posts go in `src/content/blog/` as Markdown files with frontmatter:

```md
---
lang: es
titulo: "Título del post"
fecha: 2026-06-17
categoria: SEO
etiquetas: ["SEO", "LOCAL"]
meta_descripcion: "Descripción para SEO."
tiempo_lectura: "5 min"
autor: "Author Name" // optional, defaults to theme.name
---

Contenido del post en Markdown...
```

For English translations, create a separate file with `lang: en` and a different slug.

### 5. Replace public assets

| File | Purpose |
|------|---------|
| `public/logo-one.svg` | Site logo + OG image base |
| `public/og-image.png` | Open Graph image (1200×630) |
| `public/favicon.ico` | Browser favicon |
| `public/og-image.svg` | Source for OG image |

### 6. Update `robots.txt`

Replace `YOUR_DOMAIN.com` with your actual domain.

### 7. Build

```bash
npm run build     # → dist/
npm run dev       # → localhost:4321
```

## Project structure

```
src/
├── components/
│   ├── Header.astro          # Nav, dropdowns, theme/lang toggles
│   ├── Footer.astro          # Minimal copyright + back-to-top
│   └── react/
│       ├── BlogContent.tsx   # Archive page (filter, search, pagination)
│       └── BrutalBox.tsx     # Stylized container component
├── content/
│   └── blog/                 # Markdown posts
├── content.config.ts         # Content schema
├── data/
│   └── blog.ts               # Helpers: getBlogPosts, formatDate, getAllTags
├── i18n/
│   └── ui.ts                 # Translation dictionary (es/en)
├── layouts/
│   ├── BaseLayout.astro      # HTML shell, SEO, GTM, fonts
│   └── PostLayout.astro      # Article template
├── pages/
│   ├── index.astro           # ES home (latest post)
│   ├── about.astro           # ES about page
│   ├── blog/
│   │   ├── index.astro       # ES archive
│   │   └── [slug].astro      # ES post detail
│   └── en/                   # English pages (mirror structure)
├── styles/
│   └── index.css             # Tailwind theme + custom styles
theme.config.ts               # Single source of truth for branding
astro.config.mjs               # Reads from theme.config.ts
```

## Customization checklist

- [ ] `theme.config.ts` — name, domain, logo, colors, fonts, social
- [ ] `src/styles/index.css` — match @theme block
- [ ] `src/i18n/ui.ts` — site title, description, about page copy
- [ ] `src/content/blog/` — add your posts
- [ ] `public/` — logo, favicon, OG image
- [ ] `public/robots.txt` — sitemap URL
- [ ] `.gitignore` — update if needed

## Requirements

- Node.js 20+ or Bun
- npm or bun

## License

MIT
