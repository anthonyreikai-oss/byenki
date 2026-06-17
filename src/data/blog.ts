import { getCollection, type CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;

export async function getBlogPosts(): Promise<BlogPost[]> {
  const posts = await getCollection("blog");
  return posts.sort(
    (a, b) => b.data.fecha.getTime() - a.data.fecha.getTime()
  );
}

export function formatDate(raw: Date): string {
  const d = new Date(raw);
  if (isNaN(d.getTime())) return "";
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

export function isoDate(raw: Date): string {
  const d = new Date(raw);
  return isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
}

export function getAllTags(posts: BlogPost[]): string[] {
  const set = new Set<string>();
  posts.forEach((p) => p.data.etiquetas.forEach((t) => set.add(t)));
  return [...set].sort((a, b) => a.localeCompare(b, "es"));
}
