export const CATEGORIES: Array<{ name: string; slug: string }> = [
  { name: "como sobrevivir 2030", slug: "como-sobrevivir-2030" },
  { name: "Pensamiento Critico", slug: "pensamiento-critico" },
  { name: "Desarrollo Creatividad", slug: "desarrollo-creatividad" },
  { name: "Ensayos de Noticias", slug: "ensayos-de-noticias" },
  { name: "1% Insight", slug: "1-insight" },
  { name: "Personales", slug: "personales" },
];

export const CATEGORY_MAP = Object.fromEntries(
  CATEGORIES.map((c) => [c.slug, c.name])
) as Record<string, string>;

export const SLUG_MAP = Object.fromEntries(
  CATEGORIES.map((c) => [c.name, c.slug])
) as Record<string, string>;

export function categoriaPath(slug: string, localePrefix: string = ""): string {
  return `${localePrefix}/categoria/${slug}`;
}
