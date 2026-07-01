export const SERIES: Array<{ name: string; slug: string; desc: string }> = [
  { name: "Cómo sobrevivir 2030", slug: "como-sobrevivir-2030", desc: "Navegar el colapso y construir el futuro" },
  { name: "Construir riqueza", slug: "construir-riqueza", desc: "Arquitectura financiera para el 0.01%" },
  { name: "Pensar mejor", slug: "pensar-mejor", desc: "Densidad cognitiva y pensamiento crítico" },
  { name: "Creatividad e IA", slug: "creatividad-e-ia", desc: "El arte de crear con máquinas" },
  { name: "El oficio de escribir", slug: "el-oficio-de-escribir", desc: "Escribir como integridad estructural" },
  { name: "Significado", slug: "significado", desc: "Propósito, espiritualidad y trascendencia" },
];

export const SERIES_MAP = Object.fromEntries(
  SERIES.map((s) => [s.slug, s.name])
) as Record<string, string>;

export const SLUG_MAP = Object.fromEntries(
  SERIES.map((s) => [s.name, s.slug])
) as Record<string, string>;

export function seriePath(slug: string, localePrefix: string = ""): string {
  return `${localePrefix}/serie/${slug}`;
}
