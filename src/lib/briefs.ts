import type { ComponentType } from "react";

// src/lib/briefs.ts
type Mod = { default: React.ComponentType<any>; meta?: Record<string, any>; frontmatter?: Record<string, any> };

// Most robust: root-anchored, recursive, both md/mdx
const modules = import.meta.glob("/src/briefs/**/*.{md,mdx}", { eager: true }) as Record<string, Mod>;

export type BriefEntry = {
  slug: string;
  Component: ComponentType<any>;
  meta: {
    title: string;
    description?: string;
    author?: string;
    date?: string;        // ISO
    readingTime?: string;
    tags?: string[];
    cover?: string;
  };
};

const slugify = (s: string) =>
  s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const entries: BriefEntry[] = Object.entries(modules).map(([path, mod]) => {
  const raw = path.split("/").pop()!.replace(".mdx", "");
  const slug = slugify(raw);
  const rawMeta = { ...(mod.meta ?? mod.frontmatter ?? {}) } as Partial<BriefEntry["meta"]>;
  const meta: BriefEntry["meta"] = {
    title: (rawMeta?.title as string) ?? raw.replace(/[-_]+/g, " "),
    description: rawMeta?.description,
    author: rawMeta?.author,
    date: rawMeta?.date,
    readingTime: rawMeta?.readingTime,
    tags: rawMeta?.tags,
    cover: rawMeta?.cover,
  };
  return { slug, Component: mod.default, meta };
});

// newest first, guard invalid dates
entries.sort((a, b) => {
  const ta = a.meta.date ? new Date(a.meta.date).getTime() : 0;
  const tb = b.meta.date ? new Date(b.meta.date).getTime() : 0;
  const av = Number.isNaN(ta) ? 0 : ta;
  const bv = Number.isNaN(tb) ? 0 : tb;
  return bv - av;
});

// TEMP DEBUG
console.log("MDX modules keys:", Object.keys(modules));
console.log("Brief entries:", entries.map(e => e.slug));

export const getBriefs = () => entries;
export const getBriefBySlug = (slug: string) => entries.find(b => b.slug === slug);
