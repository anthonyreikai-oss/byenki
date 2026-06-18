#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BOLD='\033[1m'
DIM='\033[2m'
NC='\033[0m'

echo ""
echo "  ${BOLD}create-blog — byenki template installer${NC}"
echo "  ${DIM}Creates a new blog instance from the byenki template${NC}"
echo ""

# ── Args ──
if [ $# -lt 1 ]; then
  echo "  Usage: $0 <target-directory>"
  echo "  Example: $0 ~/projects/my-blog"
  exit 1
fi
TARGET="${1%/}"

if [ -d "$TARGET" ] && [ "$(ls -A "$TARGET" 2>/dev/null)" ]; then
  echo "  ERROR: Target directory '$TARGET' already exists and is not empty."
  exit 1
fi

# ── Gather params ──
echo "  Fill in the following (press Enter to accept defaults):"
echo ""

read -r -p "  Project name          [my-blog]:           " PROJ_NAME
PROJ_NAME="${PROJ_NAME:-my-blog}"

read -r -p "  Site name              [My Blog]:            " SITE_NAME
SITE_NAME="${SITE_NAME:-My Blog}"

read -r -p "  Domain                 [https://example.com]: " DOMAIN
DOMAIN="${DOMAIN:-https://example.com}"

read -r -p "  Logo text              [blog_]:              " LOGO
LOGO="${LOGO:-blog_}"

read -r -p "  Logo font              [Sora]:               " LOGO_FONT
LOGO_FONT="${LOGO_FONT:-Sora}"

read -r -p "  Accent color (hex)     [#C4622D]:            " ACCENT
ACCENT="${ACCENT:-#C4622D}"

read -r -p "  Default locale         [es]:                 " DEF_LOCALE
DEF_LOCALE="${DEF_LOCALE:-es}"

read -r -p "  Credit text            [built with byenki]:  " CREDIT_TEXT
CREDIT_TEXT="${CREDIT_TEXT:-built with byenki}"

read -r -p "  Credit URL             [https://byenki.dev]: " CREDIT_URL
CREDIT_URL="${CREDIT_URL:-https://byenki.dev}"

echo ""
echo "  ${BOLD}Cloning template...${NC}"

# ── Clone ──
mkdir -p "$TARGET"
rsync -a --exclude='node_modules' --exclude='dist' --exclude='.astro' --exclude='.git' --exclude='.superpowers' --exclude='bun.lock' --exclude='package-lock.json' "$SCRIPT_DIR/" "$TARGET/"

cd "$TARGET"

# ── Derive colors ──
# Generate slightly darker/lighter variants for the palette
ACCENT_NOHASH="${ACCENT#\#}"
R=$((16#${ACCENT_NOHASH:0:2}))
G=$((16#${ACCENT_NOHASH:2:2}))
B=$((16#${ACCENT_NOHASH:4:2}))

darken() { local amt=$1; printf '#%02x%02x%02x' $((R*(100-amt)/100)) $((G*(100-amt)/100)) $((B*(100-amt)/100)); }
lighten() { local amt=$1; printf '#%02x%02x%02x' $((R+(255-R)*amt/100)) $((G+(255-G)*amt/100)) $((B+(255-B)*amt/100)); }
to_rgb() { local h=$1; printf '%d, %d, %d' $((16#${h:1:2})) $((16#${h:3:2})) $((16#${h:5:2})); }

LIGHT_SURFACE="#F5F6F3"
LIGHT_VOID="#E2E5DF"
LIGHT_BLACK="#EDF0EC"
LIGHT_SURFACE_ACCENT="#D8DBD5"
LIGHT_CREAM="#2C2E2B"
LIGHT_MUTED="#6B6359"

ACCENT_LIGHT=$(lighten 15)

# ── Write theme.config.ts ──
cat > theme.config.ts << THEMEEOF
export interface ThemeConfig {
  name: string;
  domain: string;
  logo: string;
  logoFont: string;
  logoFontWeights: string;
  accentColor: string;
  colors: {
    black: string;
    void: string;
    surface: string;
    surfaceAccent: string;
    accent: string;
    cream: string;
    muted: string;
  };
  colorsLight: {
    black: string;
    void: string;
    surface: string;
    surfaceAccent: string;
    accent: string;
    cream: string;
    muted: string;
  };
  fonts: {
    display: string;
    accent: string;
    sans: string;
    mono: string;
  };
  googleFonts: string;
  social: {
    email: string;
    instagram: string;
    linkedin: string;
    whatsapp: string;
  };
  credit: {
    text: string;
    url: string;
  };
  gtm: string;
  locales: string[];
  defaultLocale: string;
}

const config: ThemeConfig = {
  name: "${SITE_NAME}",
  domain: "${DOMAIN}",
  logo: "${LOGO}",
  logoFont: "${LOGO_FONT}",
  logoFontWeights: "wght@400;600;700;800",
  accentColor: "${ACCENT}",

  colors: {
    black: "#060606",
    void: "#0d0d0d",
    surface: "#141414",
    surfaceAccent: "#1e1e1e",
    accent: "${ACCENT}",
    cream: "#F5EFE0",
    muted: "#84827B",
  },

  colorsLight: {
    black: "${LIGHT_BLACK}",
    void: "${LIGHT_VOID}",
    surface: "${LIGHT_SURFACE}",
    surfaceAccent: "${LIGHT_SURFACE_ACCENT}",
    accent: "${ACCENT_LIGHT}",
    cream: "${LIGHT_CREAM}",
    muted: "${LIGHT_MUTED}",
  },

  fonts: {
    display: "Anton",
    accent: "Syne",
    sans: "Space Grotesk",
    mono: "JetBrains Mono",
  },

  googleFonts: "${LOGO_FONT}:wght@400;600;700;800&family=Archivo+Black&display=swap",

  social: {
    email: "hello@example.com",
    instagram: "your_handle",
    linkedin: "your_company",
    whatsapp: "18000000000",
  },

  credit: {
    text: "${CREDIT_TEXT}",
    url: "${CREDIT_URL}",
  },

  gtm: "",
  locales: ["es", "en"],
  defaultLocale: "${DEF_LOCALE}",
};

export default config;
THEMEEOF

# ── Update package.json name ──
sed -i 's/"name": "byenki"/"name": "'"$PROJ_NAME"'"/' package.json

# ── Update i18n site strings (using node to avoid sed &/escaping issues) ──
ES_DESC="Blog de ${SITE_NAME}. Artículos sobre diseño web, branding y estrategia digital."
EN_DESC="${SITE_NAME} blog. Articles about web design, branding, and digital strategy."
ES_ABOUT="Sobre | ${SITE_NAME}"
EN_ABOUT="About | ${SITE_NAME}"
BLOG_ES="Archivo — INDEX.LOG | ${SITE_NAME}"
BLOG_EN="Archive — INDEX.LOG | ${SITE_NAME}"

node -e "
const fs = require('fs');
let c = fs.readFileSync('src/i18n/ui.ts', 'utf-8');
c = c.replace('By Enki | Blog de Diseño Web y Estrategia Digital', '${SITE_NAME} | Blog de Diseño Web y Estrategia Digital');
c = c.replace('By Enki | Web Design & Digital Strategy Blog', '${SITE_NAME} | Web Design & Digital Strategy Blog');
c = c.replace('Blog de diseño web, branding y estrategia digital en Santo Domingo. Artículos sobre WordPress, SEO local, diseño con IA y brutalismo digital.', '${ES_DESC}');
c = c.replace('Web design, branding, and digital strategy blog in Santo Domingo. Articles on WordPress, local SEO, AI-powered design, and digital brutalism.', '${EN_DESC}');
c = c.replace('Sobre | By Enki', '${ES_ABOUT}');
c = c.replace('About | By Enki', '${EN_ABOUT}');
c = c.replace('Archivo — INDEX.LOG | By Enki', '${BLOG_ES}');
c = c.replace('Archive — INDEX.LOG | By Enki', '${BLOG_EN}');
fs.writeFileSync('src/i18n/ui.ts', c);
"

# ── Update index.css with new colors ──
# Replace the @theme block colors
sed -i "s/--color-w-orange: #C4622D;/--color-w-orange: ${ACCENT};/" src/styles/index.css
sed -i "s/--color-w-orange: #B5582A;/--color-w-orange: ${ACCENT_LIGHT};/" src/styles/index.css

# ── Update accent in light scrollbar ──
sed -i "s/background: #B5582A;/background: ${ACCENT_LIGHT};/" src/styles/index.css
sed -i "s/background: #9A4A22;/background: $(darken 15);/" src/styles/index.css

# ── Update dark scrollbar accent ──
sed -i "s/background: #C4622D;/background: ${ACCENT};/" src/styles/index.css
sed -i "s/background: #A35224;/background: $(darken 15);/" src/styles/index.css

# ── Update body background colors (light mode) ──
sed -i "s/background-color: #EDF0EC;/background-color: ${LIGHT_BLACK};/" src/styles/index.css
sed -i "s/background-color: #060606;/background-color: #060606;/" src/styles/index.css

# ── Clear default blog posts ──
rm -f src/content/blog/*.md

# ── Create a sample post ──
cat > src/content/blog/bienvenido.md << 'SAMPLEEOF'
---
lang: es
titulo: "Bienvenido a mi blog"
fecha: 2026-06-17
categoria: GENERAL
etiquetas: ["BLOG"]
meta_descripcion: "Primer post de bienvenida."
tiempo_lectura: "1 min"
---

Este es tu primer post. Puedes editarlo o eliminarlo.

Los posts se escriben en Markdown y se colocan en `src/content/blog/`.
SAMPLEEOF

# ── Create sample English post ──
mkdir -p src/content/blog
cat > src/content/blog/welcome.md << 'SAMPLEEOF'
---
lang: en
titulo: "Welcome to my blog"
fecha: 2026-06-17
categoria: GENERAL
etiquetas: ["BLOG"]
meta_descripcion: "First welcome post."
tiempo_lectura: "1 min"
---

This is your first post. You can edit or delete it.

Posts are written in Markdown and placed in `src/content/blog/`.
SAMPLEEOF

# ── Init git + install ──
rm -rf .git
git init

echo ""
echo "  ${BOLD}Installing dependencies...${NC}"
if command -v bun &>/dev/null; then
  bun install
elif command -v npm &>/dev/null; then
  npm install
else
  echo "  ERROR: No package manager found (bun or npm). Install dependencies manually."
  exit 1
fi

# ── Done ──
echo ""
echo "  ${BOLD}✓ Blog created at:${NC} $TARGET"
echo ""
echo "  ${DIM}Next steps:${NC}"
echo "    cd $TARGET"
echo "    npm run dev          # Start dev server"
echo "    npm run build        # Build for production"
echo ""
echo "  ${DIM}To customize further:${NC}"
echo "    Edit theme.config.ts     # Colors, fonts, social links"
echo "    Edit src/i18n/ui.ts      # Site copy (about page, descriptions)"
echo "    Edit src/styles/index.css # Tailwind theme tokens (match theme.config.ts)"
echo "    Add posts to src/content/blog/"
echo "    Replace public/ assets   # logo-one.svg, favicon.ico, og-image.png"
echo ""
