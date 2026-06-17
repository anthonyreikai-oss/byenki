import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    titulo: z.string(),
    fecha: z.coerce.date(),
    autor: z.string().default("Creado por ONE"),
    categoria: z.string().default("GENERAL"),
    etiquetas: z.array(z.string()).default([]),
    meta_descripcion: z.string().optional(),
    palabras_clave: z.string().optional(),
    tiempo_lectura: z.string().optional(),
    schema_type: z.string().optional(),
  }),
});

export const collections = { blog };
