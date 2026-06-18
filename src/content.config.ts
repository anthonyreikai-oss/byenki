import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    lang: z.enum(["es", "en"]).default("es"),
    titulo: z.string(),
    fecha: z.coerce.date(),
    autor: z.string().default("Blog Author"), // Override per-post in frontmatter; theme.name used as fallback in layouts
    categoria: z.string().default("GENERAL"),
    etiquetas: z.array(z.string()).default([]),
    meta_descripcion: z.string().optional(),
    palabras_clave: z.string().optional(),
    tiempo_lectura: z.string().optional(),
    schema_type: z.string().optional(),
  }),
});

export const collections = { blog };
