import type { ComponentType } from "react";

type Mod = { default: ComponentType<any>; meta?: Record<string, any>; frontmatter?: Record<string, any> };

const modules = import.meta.glob("../briefs/*.mdx", { eager: true }) as Record<string, Mod>;

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

const entries: BriefEntry[] = Object.entries(modules).map(([path, mod]) => {
  const slug = path.split("/").pop()!.replace(".mdx", "");
  const meta = { ...(mod.meta ?? mod.frontmatter ?? {}) };
  return { slug, Component: mod.default, meta };
});

// newest first
entries.sort((a, b) =>
  new Date(b.meta.date ?? 0).getTime() - new Date(a.meta.date ?? 0).getTime()
);

export const getBriefs = () => entries;
export const getBriefBySlug = (slug: string) => entries.find(b => b.slug === slug);
