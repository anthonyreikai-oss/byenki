import React from 'react';
import { motion } from 'motion/react';
import BrutalBox from './BrutalBox';

const posts = [
  {
    date: '15/06/2026',
    category: 'SEO',
    slug: 'guia-posicionar-negocio-google-republica-dominicana',
    title: '¿Cómo posicionar tu negocio en Google si estás en República Dominicana?',
    excerpt: 'Google Business Profile, citas locales, reseñas y SEO local — paso a paso para dominar el mapa local. Los negocios con fotos en su perfil reciben un 42% más de solicitudes de direcciones.',
  },
  {
    date: '12/06/2026',
    category: 'ESTRATEGIA',
    slug: 'como-escribir-pagina-quienes-somos-seo-local',
    title: '¿Cómo escribir una página de "Quiénes Somos" que atraiga clientes locales?',
    excerpt: 'La segunda página más visitada de cualquier sitio web — y la mayoría de negocios en Latinoamérica la tratan como un trámite. Cómo convertirla en tu activo de SEO local más potente.',
  },
  {
    date: '08/06/2026',
    category: 'IA',
    slug: 'ia-para-emprendedores-freelancers-latinoamerica',
    title: '¿Cómo puede un freelancer en Latinoamérica usar la IA para hacer crecer su negocio?',
    excerpt: 'La IA ya no es opcional — es la palanca competitiva más accesible para una PYME latinoamericana. Herramientas que funcionan en español, automatización de marketing y reducción de la brecha tecnológica.',
  },
  {
    date: '05/06/2026',
    category: 'GEO',
    slug: 'auditoria-geo-2026-pagina-web-lista-futuro-sin-buscadores',
    title: '¿Tu página web está lista para el futuro sin buscadores tradicionales?',
    excerpt: 'Más de la mitad de los sitios web carecen de datos estructurados que las IAs puedan leer. Auditoría de preparación GEO para 2026: ChatGPT, Google AI Overviews y Perplexity.',
  },
  {
    date: '01/06/2026',
    category: 'DISEÑO',
    slug: 'como-preparar-sistema-diseno-ai-ready',
    title: '¿Cómo preparar tu sistema de diseño para la era de la inteligencia artificial?',
    excerpt: 'Los prototipos de IA fallan por falta de contexto estructurado, no por falta de inteligencia. Spec files, token layer y auditoría automatizada — el approach de Atlassian, IBM Carbon y Nordhealth.',
  },
];

const topics = [
  'SEO LOCAL', 'GEO', 'IA', 'GOOGLE BUSINESS PROFILE', 'SCHEMA MARKUP',
  'BRANDING', 'DISEÑO', 'ESTRATEGIA', 'CÓDIGO', 'DOMINICANA', 'NEGOCIOS', 'AUDITORÍA',
];

const POSTS_PER_PAGE = 4;

export default function BlogContent() {
  const [filter, setFilter] = React.useState('ALL');
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

  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-6 pb-16">

      {/* HERO */}
      <section className="pt-2 md:pt-4 lg:pt-6 pb-8">
        <div className="flex flex-col gap-2">
          <motion.div
            className="flex items-center gap-2 mb-4 font-mono text-[11px] text-w-orange uppercase tracking-widest border-l-2 border-w-orange pl-2"
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
          className="mt-6 max-w-2xl font-mono text-sm md:text-base text-w-muted leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          Transmisiones archivadas, esquemas arquitectónicos y actualizaciones del kernel.
          Escribir como forma de integridad estructural. Sin filler, sin SEO vacío.
        </motion.p>
      </section>

      {/* FILTER BAR */}
      <div className="mb-12 flex flex-col md:flex-row gap-6 items-end justify-between border-b border-dashed border-dashed-cream pb-8">
        <div className="w-full md:w-1/2">
          <div className="flex items-center gap-3 text-w-orange mb-2">
            <span className="font-mono text-[10px] uppercase tracking-wider">QUERY_PARAMETER</span>
          </div>
          <div className="relative w-full border border-dashed border-dashed-cream focus-within:border-w-orange transition-colors bg-w-void">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-w-muted font-mono text-sm">&gt;</span>
            <input
              className="w-full bg-transparent border-none text-w-cream font-mono text-sm py-3 pl-8 focus:outline-none placeholder:text-w-muted/40"
              placeholder="buscar_logs..."
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-3 font-mono text-[11px]">
          <span className="text-w-muted uppercase">FILTRO:</span>
          {['ALL', 'DISEÑO', 'ESTRATEGIA', 'SEO', 'GEO', 'IA'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`uppercase transition-colors ${
                filter === f ? 'text-w-orange font-bold' : 'text-w-muted hover:text-w-orange'
              }`}
            >
              [ {f} ]
            </button>
          ))}
        </div>
      </div>

      {/* POSTS — all same featured style */}
      <div className="space-y-10 mb-12">
        {paged.map((post, i) => {
          const globalIndex = filtered.indexOf(post);
          return (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`group flex flex-col md:flex-row gap-6 items-start py-6 px-4 -mx-4 transition-colors ${
                i > 0 ? 'border-t border-dashed border-dashed-cream' : ''
              }`}
            >
              <a href={`/blog/${post.slug}`} class="flex flex-col md:flex-row gap-6 items-start w-full no-underline">
              <div className="w-36 shrink-0 font-mono text-xs text-w-orange font-bold uppercase">
                [ {post.date} ]
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-w-muted font-mono text-[10px] uppercase">LOG_{String(globalIndex + 1).padStart(2, '0')}</span>
                  <span className="h-[1px] flex-grow bg-dashed-cream group-hover:bg-w-orange/40 transition-colors"></span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-w-cream uppercase leading-[0.85] group-hover:text-w-orange transition-colors">
                  {post.title}
                </h2>
                <p className="font-mono text-sm text-w-muted mt-4 max-w-3xl leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center gap-4">
                  <span className="text-w-orange font-mono text-[11px] uppercase group-hover:translate-x-1 transition-transform duration-200 inline-block">
                    LEER_POST →
                  </span>
                  <span className="text-w-muted font-mono text-[10px] uppercase opacity-50">#{post.category}</span>
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
            className="font-mono text-xs text-w-muted hover:text-w-orange uppercase px-3 py-2 border border-dashed border-dashed-cream disabled:opacity-30 disabled:cursor-default transition-colors"
          >
            ← ANTERIOR
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`font-mono text-xs uppercase px-3 py-2 border transition-colors ${
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
            className="font-mono text-xs text-w-muted hover:text-w-orange uppercase px-3 py-2 border border-dashed border-dashed-cream disabled:opacity-30 disabled:cursor-default transition-colors"
          >
            SIGUIENTE →
          </button>
        </div>
      )}

      {/* TOPICS CLOUD */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6 font-mono text-[10px] text-w-orange uppercase tracking-widest">
          <span className="w-12 h-px bg-w-orange/40"></span>
          <span>TEMAS</span>
        </div>
        <div className="flex flex-wrap gap-3">
          {topics.map((topic) => (
            <span
              key={topic}
              className="font-mono text-[11px] border border-dashed border-dashed-cream px-4 py-2 text-w-cream hover:border-w-orange hover:text-w-orange transition-all cursor-default"
            >
              #{topic}
            </span>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="max-w-2xl mx-auto text-center py-12 border-t border-dashed border-dashed-cream">
        <BrutalBox className="p-8 md:p-10">
          <div className="flex items-center gap-2 mb-4 justify-center">
            <span className="font-mono text-[10px] text-w-orange uppercase tracking-widest font-bold">SUSCRÍBETE</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl text-w-cream uppercase mb-3">
            RECIBIR ACTUALIZACIONES
          </h3>
          <p className="font-mono text-sm text-w-muted mb-6 leading-relaxed">
            Baja frecuencia. Alta densidad. Sin spam. Solo ideas que mueven la aguja.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 p-1 border border-dashed border-dashed-cream bg-w-void focus-within:border-w-orange transition-colors">
            <input
              className="flex-grow bg-transparent border-none focus:outline-none font-mono text-sm text-w-cream placeholder:text-w-muted/40 uppercase px-3 py-2"
              placeholder="USUARIO@DOMINIO.COM"
              type="email"
            />
            <button className="bg-w-orange text-w-black px-6 py-3 font-mono font-bold text-xs uppercase border-2 border-w-orange shadow-[3px_3px_0px_#F5EFE0] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 shrink-0">
              SUSCRIBIRSE
            </button>
          </div>

          <div className="mt-4 flex justify-center gap-4 font-mono text-[10px] text-w-muted uppercase">
            <a href="https://instagram.com/creadoporone" target="_blank" rel="noreferrer" className="hover:text-w-orange transition-colors">INSTAGRAM</a>
            <span className="text-w-orange/40">/</span>
            <a href="https://linkedin.com/company/creadoporone" target="_blank" rel="noreferrer" className="hover:text-w-orange transition-colors">LINKEDIN</a>
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
