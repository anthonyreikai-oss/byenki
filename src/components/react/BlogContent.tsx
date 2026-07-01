import React from 'react';
import { motion } from 'motion/react';
import BrutalBox from './BrutalBox';

interface PostData {
  date: string;
  category: string;
  slug: string;
  title: string;
  excerpt: string;
}

interface BlogContentProps {
  locale?: string;
  initialPosts?: PostData[];
  initialFilter?: string;
  social?: {
    instagram: string;
    linkedin: string;
  };
}

const SERIES = [
  { name: "Cómo sobrevivir 2030", slug: "como-sobrevivir-2030" },
  { name: "Construir riqueza", slug: "construir-riqueza" },
  { name: "Pensar mejor", slug: "pensar-mejor" },
  { name: "Creatividad e IA", slug: "creatividad-e-ia" },
  { name: "El oficio de escribir", slug: "el-oficio-de-escribir" },
  { name: "Significado", slug: "significado" },
];

const t = (key: string, locale: string): string => {
  const dict: Record<string, Record<string, string>> = {
    'index_log': { es: 'INDEX.LOG', en: 'INDEX.LOG' },
    'query_param': { es: 'QUERY_PARAMETER', en: 'QUERY_PARAMETER' },
    'buscar_logs': { es: 'buscar_registros...', en: 'search_logs...' },
    'filtro': { es: 'FILTRO:', en: 'FILTER:' },
    'leer_post': { es: 'LEER ENSAYO →', en: 'READ ESSAY →' },
    'anterior': { es: '← ANTERIOR', en: '← PREVIOUS' },
    'siguiente': { es: 'SIGUIENTE →', en: 'NEXT →' },
    'series': { es: 'CATEGORÍAS', en: 'CATEGORIES' },
    'suscribete': { es: 'SUSCRÍBETE', en: 'SUBSCRIBE' },
    'recibir': { es: 'RECIBIR ACTUALIZACIONES', en: 'RECEIVE UPDATES' },
    'baja_frec': { es: 'Baja frecuencia. Alta densidad. Sin spam. Solo ideas que mueven la aguja.', en: 'Low frequency. High density. No spam. Only ideas that move the needle.' },
    'placeholder_email': { es: 'USUARIO@DOMINIO.COM', en: 'USER@DOMAIN.COM' },
    'suscribirse': { es: 'SUSCRIBIRSE', en: 'SUBSCRIBE' },
    'hero_text': {
      es: 'Transmisiones archivadas, esquemas arquitectónicos y actualizaciones del kernel. Escribir como forma de integridad estructural. Sin filler, sin SEO vacío.',
      en: 'Archived transmissions, architectural schematics, and kernel updates. Writing as structural integrity. No filler, no empty SEO.',
    },
  };
  return dict[key]?.[locale] ?? dict[key]?.es ?? key;
};

const POSTS_PER_PAGE = 4;

export default function BlogContent({ locale: propLocale, initialPosts = [], initialFilter = 'ALL', social }: BlogContentProps = {}) {
  const locale = propLocale || (typeof document !== 'undefined' ? document.documentElement.lang || 'es' : 'es');
  const blogPath = locale === 'en' ? '/en/blog' : '/blog';
  const posts = initialPosts;

  const [filter, setFilter] = React.useState(initialFilter);
  const [query, setQuery] = React.useState('');
  const [page, setPage] = React.useState(1);

  const filtered = posts.filter((p) => {
    const matchesCategory = filter === 'ALL' || p.category === filter;
    const matchesSearch = !query || p.title.toLowerCase().includes(query.toLowerCase()) || p.excerpt.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paged = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  React.useEffect(() => { setPage(1); }, [filter, query]);

  React.useEffect(() => {
    const url = new URL(window.location.href);
    const cat = url.searchParams.get('serie');
    if (cat && cat !== filter) {
      setFilter(cat);
    }
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 pb-16">

      {/* HERO */}
      <section className="pt-2 md:pt-4 lg:pt-6 pb-8">
        <div className="flex flex-col gap-2">
          <motion.div
            className="flex items-center gap-2 mb-4 font-mono text-sm text-w-orange uppercase tracking-widest border-l-2 border-w-orange pl-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span>/root/repository/v8.4.1</span>
          </motion.div>

          <motion.h1
            className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[82px] leading-[0.85] tracking-[-0.01em] uppercase text-w-cream select-none"
            style={{ WebkitTextStroke: '1.2px #F5EFE0' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            INDEX.LOG<span className="text-w-orange blink-cursor">_</span>
          </motion.h1>
        </div>

        <motion.p
          className="mt-6 max-w-2xl font-mono text-[18px] md:text-[18px] text-w-cream leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          {t('hero_text', locale)}
        </motion.p>
      </section>

      {/* FILTER BAR */}
      <div className="mb-12 flex flex-col md:flex-row gap-6 items-end justify-between border-b border-dashed border-dashed-cream pb-8">
        <div className="w-full md:w-1/2">
          <div className="flex items-center gap-3 text-w-orange mb-2">
            <span className="font-mono text-xs uppercase tracking-wider">{t('query_param', locale)}</span>
          </div>
          <div className="relative w-full border border-dashed border-dashed-cream focus-within:border-w-orange transition-colors bg-w-void">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-w-muted font-mono text-sm">&gt;</span>
            <input
              className="w-full bg-transparent border-none text-w-cream font-mono text-sm py-3 pl-8 focus:outline-none placeholder:text-w-muted/40"
              placeholder={t('buscar_logs', locale)}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-3 font-mono text-sm flex-wrap">
          <span className="text-w-muted uppercase">{t('filtro', locale)}</span>
          {['ALL', ...SERIES.map((s) => s.name)].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`uppercase transition-colors ${
                filter === f ? 'text-w-orange font-bold' : 'text-w-muted hover:text-w-orange'
              }`}
            >
              [ {f === 'ALL' ? (locale === 'en' ? 'ALL' : 'TODO') : f} ]
            </button>
          ))}
        </div>
      </div>

      {/* POSTS */}
      <div className="space-y-10 mb-12">
        {paged.map((post, i) => {
          const globalIndex = filtered.indexOf(post);
          return (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`group flex flex-col md:flex-row gap-6 items-start py-6 px-4 -mx-4 transition-colors ${
                i > 0 ? 'border-t border-dashed border-dashed-cream' : ''
              }`}
            >
              <a href={`${blogPath}/${post.slug}`} className="flex flex-col md:flex-row gap-6 items-start w-full no-underline">
              <div className="w-36 shrink-0 font-mono text-sm text-w-orange font-bold uppercase">
                [ {post.date} ]
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-w-muted font-mono text-xs uppercase">LOG_{String(globalIndex + 1).padStart(2, '0')}</span>
                  <span className="h-[1px] flex-grow bg-dashed-cream group-hover:bg-w-orange/40 transition-colors"></span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-w-cream uppercase leading-[0.85] group-hover:text-w-orange transition-colors">
                  {post.title}
                </h2>
                <p className="font-mono text-[18px] text-w-cream mt-4 max-w-3xl leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center gap-4">
                  <span className="text-w-orange font-mono text-sm uppercase group-hover:translate-x-1 transition-transform duration-200 inline-block">
                    {t('leer_post', locale)}
                  </span>
                  <span className="text-w-muted font-mono text-xs uppercase opacity-50">en {post.category}</span>
                </div>
              </div>
              </a>
            </motion.article>
          );
        })}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 mb-16">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="font-mono text-sm text-w-muted hover:text-w-orange uppercase px-3 py-2 border border-dashed border-dashed-cream disabled:opacity-30 disabled:cursor-default transition-colors"
          >
            {t('anterior', locale)}
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`font-mono text-sm uppercase px-3 py-2 border transition-colors ${
                page === p
                  ? 'border-w-orange text-w-orange font-bold bg-w-orange/5'
                  : 'border-dashed border-dashed-cream text-w-muted hover:border-w-orange/40 hover:text-w-orange'
              }`}
            >
              {String(p).padStart(2, '0')}
            </button>
          ))}

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="font-mono text-sm text-w-muted hover:text-w-orange uppercase px-3 py-2 border border-dashed border-dashed-cream disabled:opacity-30 disabled:cursor-default transition-colors"
          >
            {t('siguiente', locale)}
          </button>
        </div>
      )}

      {/* SERIES CLOUD */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6 font-mono text-xs text-w-orange uppercase tracking-widest">
          <span className="w-12 h-px bg-w-orange/40"></span>
          <span>{t('series', locale)}</span>
        </div>
        <div className="flex flex-wrap gap-3">
          {SERIES.map((s) => (
            <a
              key={s.slug}
              href={`/serie/${s.slug}`}
              className="font-mono text-sm border border-dashed border-dashed-cream px-4 py-2 text-w-cream hover:border-w-orange hover:text-w-orange transition-all cursor-pointer"
            >
              #{s.name}
            </a>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="max-w-2xl mx-auto text-center py-12 border-t border-dashed border-dashed-cream">
        <BrutalBox className="p-8 md:p-10">
          <div className="flex items-center gap-2 mb-4 justify-center">
            <span className="font-mono text-xs text-w-orange uppercase tracking-widest font-bold">{t('suscribete', locale)}</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl text-w-cream uppercase mb-3">
            {t('recibir', locale)}
          </h3>
          <p className="font-mono text-sm text-w-muted mb-6 leading-relaxed">
            {t('baja_frec', locale)}
          </p>

          <div className="flex flex-col sm:flex-row gap-2 p-1 border border-dashed border-dashed-cream bg-w-void focus-within:border-w-orange transition-colors">
            <input
              className="flex-grow bg-transparent border-none focus:outline-none font-mono text-sm text-w-cream placeholder:text-w-muted/40 uppercase px-3 py-2"
              placeholder={t('placeholder_email', locale)}
              type="email"
            />
            <button className="bg-w-orange text-w-black px-6 py-3 font-mono font-bold text-sm uppercase border-2 border-w-orange shadow-[3px_3px_0px_#F5EFE0] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 shrink-0">
              {t('suscribirse', locale)}
            </button>
          </div>

          <div className="mt-4 flex justify-center gap-4 font-mono text-xs text-w-muted uppercase">
            <a href={`https://instagram.com/${social?.instagram || 'byenki'}`} target="_blank" rel="noreferrer" className="hover:text-w-orange transition-colors">INSTAGRAM</a>
            <span className="text-w-orange/40">/</span>
            <a href={`https://linkedin.com/company/${social?.linkedin || 'byenki'}`} target="_blank" rel="noreferrer" className="hover:text-w-orange transition-colors">LINKEDIN</a>
          </div>
        </BrutalBox>
      </section>

      <style>{`
        @keyframes blink {
          from, to { opacity: 1; }
          50% { opacity: 0; }
        }
        .blink-cursor {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </div>
  );
}
