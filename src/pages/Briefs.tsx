import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

type Mod = { default: React.ComponentType<any>; meta?: Record<string, any>; frontmatter?: Record<string, any> };
const modules = import.meta.glob("../briefs/*.mdx", { eager: true }) as Record<string, Mod>;

const BRIEFS = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => {
    const slug = path.split("/").pop()!.replace(".mdx", "");
    const meta = mod.meta ?? mod.frontmatter ?? {};
    return [slug, { Component: mod.default, meta }];
  })
);

export default function Brief() {
  const { slug = "" } = useParams();
  const entry = BRIEFS[slug];
  if (!entry) return <div className="p-8">Brief not found.</div>;

  const { Component, meta } = entry;

  return (
    <article className="min-h-screen bg-black text-white">
      <Helmet>
        <title>{meta.title ?? "Brief"} | Project 57</title>
        <meta name="description" content={meta.description ?? ""} />
        <meta property="og:title" content={meta.title ?? "Brief"} />
        <meta property="og:description" content={meta.description ?? ""} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`/briefs/${slug}`} />
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 py-16 prose prose-invert">
        <Component />
      </div>
    </article>
  );
}