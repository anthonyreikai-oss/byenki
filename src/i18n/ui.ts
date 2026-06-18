export const LANGUAGES = {
  es: "Español",
  en: "English",
} as const;

export type Lang = keyof typeof LANGUAGES;

export const DEFAULT_LANG: Lang = "es";

export const UI = {
  "site.title": {
    es: "By Enki | Blog de Diseño Web y Estrategia Digital",
    en: "By Enki | Web Design & Digital Strategy Blog",
  },
  "site.description": {
    es: "Blog de diseño web, branding y estrategia digital en Santo Domingo. Artículos sobre WordPress, SEO local, diseño con IA y brutalismo digital.",
    en: "Web design, branding, and digital strategy blog in Santo Domingo. Articles on WordPress, local SEO, AI-powered design, and digital brutalism.",
  },
  "site.schema_description": {
    es: "Estudio de diseño web en Santo Domingo, República Dominicana. Creamos páginas web estratégicas que convierten visitantes en clientes.",
    en: "Web design studio in Santo Domingo, Dominican Republic. We build strategic websites that turn visitors into clients.",
  },
  "nav.home": { es: "INICIO", en: "HOME" },
  "nav.categorias": { es: "CATEGORÍAS", en: "CATEGORIES" },
  "nav.recursos": { es: "RECURSOS", en: "RESOURCES" },
  "nav.sobre": { es: "SOBRE", en: "ABOUT" },
  "nav.archivo": { es: "ARCHIVO", en: "ARCHIVE" },
  "nav.activo": { es: "ACTIVO", en: "ACTIVE" },
  "nav.proximo": { es: "PRÓXIMO", en: "COMING" },
  "nav.tema": { es: "TEMA", en: "THEME" },
  "nav.idioma": { es: "IDIOMA", en: "LANGUAGE" },
  "nav.categorias_term": { es: "categorias@archivo:~/", en: "categories@archive:~/"},
  "nav.recursos_term": { es: "recursos@archivo:~/", en: "resources@archive:~/"},
  "nav.sobre_term": { es: "about@byenki:~/", en: "about@byenki:~/"},
  "nav.guias": { es: "Guías Gratuitas", en: "Free Guides" },
  "nav.plantillas": { es: "Plantillas y Templates", en: "Templates & Assets" },
  "nav.herramientas": { es: "Herramientas Recomendadas", en: "Recommended Tools" },
  "nav.checklist": { es: "Checklist de Auditoría", en: "Audit Checklist" },
  "nav.quienes": { es: "Quiénes Somos", en: "Who We Are" },
  "nav.estudio": { es: "El Estudio", en: "The Studio" },
  "nav.contacto": { es: "Contacto", en: "Contact" },
  "nav.mobile_categorias": { es: "CATEGORÍAS", en: "CATEGORIES" },
  "nav.mobile_recursos": { es: "RECURSOS", en: "RESOURCES" },
  "nav.mobile_sobre": { es: "SOBRE", en: "ABOUT" },
  "sidebar.en_este_ensayo": { es: "EN ESTE ENSAYO", en: "IN THIS ESSAY" },
  "sidebar.ultimos_ensayos": { es: "ÚLTIMOS ENSAYOS", en: "LATEST ESSAYS" },
  "sidebar.categorias": { es: "CATEGORÍAS", en: "CATEGORIES" },
  "sidebar.leer_mas": { es: "Leer más ensayos →", en: "Read more essays →" },
  "sidebar.indice": { es: "ÍNDICE", en: "INDEX" },
  "post.prev": { es: "← ANTERIOR", en: "← PREVIOUS" },
  "post.next": { es: "SIGUIENTE →", en: "NEXT →" },
  "post.de_lectura": { es: "de lectura", en: "min read" },
  "post.sobre": { es: "sobre", en: "about" },
  "footer.navegacion": { es: "// Navegación", en: "// Navigation" },
  "footer.inicio": { es: "Inicio", en: "Home" },
  "footer.contacto": { es: "// Contacto", en: "// Contact" },
  "footer.volver_arriba": { es: "VOLVER ARRIBA", en: "BACK TO TOP" },
  "footer.copyright": {
    es: "By Enki. Un proyecto",
    en: "By Enki. A",
  },
  "footer.tagline": {
    es: "Blog de diseño web, branding y estrategia digital.<br />Escritos sobre WordPress, SEO local, diseño con IA<br />y brutalismo digital. Santo Domingo, RD.",
    en: "Web design, branding & digital strategy blog.<br />Writing about WordPress, local SEO, AI design<br />and digital brutalism. Santo Domingo, DR.",
  },
  "about.title": { es: "Sobre | By Enki", en: "About | By Enki" },
  "about.description": {
    es: "Hi, mi nombre es Enki. Director Creativo, polímata y constructor. Bienvenido a mi jardín digital.",
    en: "Hi, my name is Enki. Creative Director, polymath, and builder. Welcome to my digital garden.",
  },
  "about.back": { es: "VOLVER AL INICIO", en: "BACK TO HOME" },
  "about.whoami": { es: "$ whoami", en: "$ whoami" },
  "about.heading": { es: "Hi, mi nombre es Enki.", en: "Hi, my name is Enki." },
  "about.p1": {
    es: `Un <strong>polímata de más de 40 años</strong>, profundamente conectado con el mundo espiritual y establecido profesionalmente como <strong>Director Creativo</strong> e <strong>incubador de negocios</strong>.`,
    en: `A <strong>polymath over 40</strong>, deeply connected to the spiritual world and professionally established as a <strong>Creative Director</strong> and <strong>business incubator</strong>.`,
  },
  "about.p2": {
    es: `Bienvenido a mi jardín digital, aquí te enseñaré a encontrar y desbloquear tu <strong>potencial creativo</strong>, inspirarás a otros y <strong>monetizarás tu arte</strong>.`,
    en: `Welcome to my digital garden. Here I'll teach you to find and unlock your <strong>creative potential</strong>, inspire others, and <strong>monetize your art</strong>.`,
  },
  "about.p3": {
    es: `Un jardín digital es una combinación de un <strong>cuaderno en línea</strong> y una <strong>Wikipedia personal</strong>. En ese sentido, este lugar no es un sitio web normal ni un blog. Es una colección de <strong>ideas</strong>, <strong>conocimiento</strong> y <strong>experiencias</strong> de un polímata que ha dedicado su vida entera a la <strong>espiritualidad</strong>, la <strong>creatividad</strong> y el crecimiento personal.`,
    en: `A digital garden is a blend of an <strong>online notebook</strong> and a <strong>personal Wikipedia</strong>. In that sense, this place is neither a normal website nor a blog. It's a collection of <strong>ideas</strong>, <strong>knowledge</strong>, and <strong>experiences</strong> from a polymath who has dedicated his entire life to <strong>spirituality</strong>, <strong>creativity</strong>, and personal growth.`,
  },
  "about.p4": {
    es: `Dentro de este Jardín Digital nos enfocaremos en explorar el <strong>desarrollo creativo</strong>, el <strong>crecimiento personal</strong> y el <strong>desarrollo espiritual</strong>. Este Jardín Digital está dedicado a quienes buscan <strong>expresarse con autenticidad</strong> y sienten la necesidad de <strong>transformarse en quienes verdaderamente nacieron para ser</strong>.`,
    en: `Within this Digital Garden we'll focus on exploring <strong>creative development</strong>, <strong>personal growth</strong>, and <strong>spiritual development</strong>. This Digital Garden is dedicated to those who seek to <strong>express themselves with authenticity</strong> and feel the need to <strong>transform into who they were truly born to be</strong>.`,
  },
  "about.p5": {
    es: `Tu presencia en esta tierra no es accidental; naciste con un propósito único.`,
    en: `Your presence on this earth is not accidental; you were born with a unique purpose.`,
  },
  "about.thinking": { es: "En qué pienso...", en: "What I think about..." },
  "about.doing": { es: "En qué estoy...", en: "What I'm into..." },
  "about.creative_dev": { es: "Desarrollo Creativo", en: "Creative Development" },
  "about.personal_growth": { es: "Crecimiento Personal", en: "Personal Growth" },
  "about.spiritual_dev": { es: "Desarrollo Espiritual", en: "Spiritual Development" },
  "about.quote": {
    es: `"Creo que tienes la responsabilidad de vivir una vida tan plena que te conviertas en un modelo a seguir para otros."`,
    en: `"I believe you have the responsibility to live a life so full that you become a role model for others."`,
  },
  "about.cta": { es: "Leer ensayos →", en: "Read essays →" },
  "blog.title": { es: "Archivo — INDEX.LOG | By Enki", en: "Archive — INDEX.LOG | By Enki" },
  "blog.keywords": {
    es: "blog diseño web, blog branding, blog wordpress, blog seo, santo domingo, artículos diseño web rd, blog agencia digital",
    en: "web design blog, branding blog, wordpress blog, seo blog, santo domingo, web design articles, digital agency blog",
  },
  "blog.schema_name": { es: "Archivo — INDEX.LOG | By Enki", en: "Archive — INDEX.LOG | By Enki" },
  "blog.schema_description": {
    es: "Archivo de ensayos sobre diseño web, branding y estrategia digital en Santo Domingo.",
    en: "Archive of essays on web design, branding, and digital strategy in Santo Domingo.",
  },
  "blog.schema_about": { es: "Archivo de diseño web y estrategia digital", en: "Web design & digital strategy archive" },
  "topics.filter_label": { es: "CATEGORÍAS", en: "CATEGORIES" },
  "topics.search": { es: "BUSCAR", en: "SEARCH" },
  "topics.search_placeholder": { es: "Buscar ensayo...", en: "Search essay..." },
  "topics.no_results": { es: "Sin resultados.", en: "No results." },
  "topics.index_log": { es: "INDEX.LOG", en: "INDEX.LOG" },
  "topics.empty": { es: "No hay ensayos todavía. Vuelve pronto.", en: "No essays yet. Check back soon." },
  "index.title": { es: "By Enki", en: "By Enki" },
  "index.reading_time": { es: "de lectura", en: "min read" },
  "index.about_link": {
    es: "Hi, mi nombre es Enki.",
    en: "Hi, my name is Enki.",
  },
} as const;

export type UIKey = keyof typeof UI;

export function t(key: UIKey, lang: Lang): string {
  return UI[key]?.[lang] ?? UI[key]?.[DEFAULT_LANG] ?? key;
}

export function getLangFromUrl(url: URL): Lang {
  const [, firstSegment] = url.pathname.split("/");
  if (firstSegment === "en") return "en";
  return DEFAULT_LANG;
}
