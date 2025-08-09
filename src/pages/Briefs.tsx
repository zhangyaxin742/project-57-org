import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getBriefBySlug } from "../lib/briefs"; 

type Mod = { default: React.ComponentType<any>; meta?: Record<string, any>; frontmatter?: Record<string, any> };
const modules = import.meta.glob("../briefs/*.mdx", { eager: true }) as Record<string, Mod>;

const BRIEFS = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => {
    const slug = path.split("/").pop()!.replace(".mdx", "");
    const meta = mod.meta ?? mod.frontmatter ?? {};
    return [slug, { Component: mod.default, meta }];
  })
);

export default function Brief () {
  const { slug = "" } = useParams();
  const entry = getBriefBySlug[slug];
  if (!entry) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-bold mb-2">Brief not found</h1>
          <p className="text-gray-400 mb-6">We couldn’t find “{slug}”.</p>
          <Link to="/ourwork#advocacy" className="underline">Back to Our Work</Link>
        </div>
      </div>
    );
  }

  const { Component, meta } = entry;

  return (
    <article className="min-h-screen bg-black text-white">
      <Helmet>
        <title>{meta.title ? `${meta.title} | Project 57` : "Brief | Project 57"}</title>
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