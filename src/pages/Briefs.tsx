import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getBriefBySlug } from "../lib/briefs"; 

export default function Brief () {
  const { slug = "" } = useParams();
  const entry = getBriefBySlug(slug);
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
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const url = `${origin}/briefs/${slug}`;

  return (
    <article className="min-h-screen bg-black text-white">
      <Helmet>
        <title>{meta.title ? `${meta.title} | Project 57` : "Brief | Project 57"}</title>
        <meta name="description" content={meta.description ?? ""} />
        <meta property="og:title" content={meta.title ?? "Brief"} />
        <meta property="og:description" content={meta.description ?? ""} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        {meta.cover ? <meta property="og:image" content={meta.cover} /> : null}
        <link rel="canonical" href={url} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: meta.title,
          description: meta.description,
          author: meta.author,
          datePublished: meta.date,
          image: meta.cover,
          url
        })}</script>
      </Helmet>
      <div className="max-w-3xl mx-auto px-4 py-16 prose prose-invert">
        <Component />
      </div>
    </article>
  );
}