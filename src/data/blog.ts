import { getCollection, type CollectionEntry } from "astro:content";
import type { Lang } from "../i18n/ui";

export type BlogPost = CollectionEntry<"blog">;

export async function getBlogPosts(lang?: Lang): Promise<BlogPost[]> {
  const posts = await getCollection("blog");
  let filtered = posts;
  if (lang) {
    filtered = posts.filter((p) => p.data.lang === lang);
  }
  return filtered.sort(
    (a, b) => b.data.fecha.getTime() - a.data.fecha.getTime()
  );
}

export function formatDate(raw: Date, lang: Lang = "es"): string {
  const d = new Date(raw);
  if (isNaN(d.getTime())) return "";
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  if (lang === "en") {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${months[d.getMonth()]} ${dd}, ${yyyy}`;
  }
  return `${dd}/${mm}/${yyyy}`;
}

export function isoDate(raw: Date): string {
  const d = new Date(raw);
  return isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
}

export function getAllTags(posts: BlogPost[], lang?: Lang): string[] {
  const set = new Set<string>();
  posts.forEach((p) => {
    if (!lang || p.data.lang === lang) {
      p.data.etiquetas.forEach((t) => set.add(t));
    }
  });
  return [...set].sort((a, b) => a.localeCompare(b, lang === "en" ? "en" : "es"));
}
