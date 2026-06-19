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
  name: "By Enki",
  domain: "https://byenki.dev",
  logo: "by/enki_",
  logoFont: "Sora",
  logoFontWeights: "wght@400;600;700;800",
  accentColor: "#C4622D",

  colors: {
    black: "#1a1a1a",
    void: "#0d0d0d",
    surface: "#141414",
    surfaceAccent: "#1e1e1e",
    accent: "#C4622D",
    cream: "#F5EFE0",
    muted: "#84827B",
  },

  colorsLight: {
    black: "#EDF0EC",
    void: "#E2E5DF",
    surface: "#F5F6F3",
    surfaceAccent: "#D8DBD5",
    accent: "#B5582A",
    cream: "#2C2E2B",
    muted: "#6B6359",
  },

  fonts: {
    display: "Anton",
    accent: "Syne",
    sans: "Space Grotesk",
    mono: "JetBrains Mono",
  },

  googleFonts: "Sora:wght@400;600;700;800&family=Archivo+Black&display=swap",

  social: {
    email: "hello@byenki.dev",
    instagram: "byenki",
    linkedin: "byenki",
    whatsapp: "18099976950",
  },

  credit: {
    text: "by enki project",
    url: "https://www.byenki.com",
  },
  gtm: "GTM-MVH73VX2",

  locales: ["es", "en"],
  defaultLocale: "es",
};

export default config;
