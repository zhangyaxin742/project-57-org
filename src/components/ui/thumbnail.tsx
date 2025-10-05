
import React from "react";

export function getYouTubeEmbed(url: string) {
  if (!url) return null;
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be"))
      return `https://www.youtube.com/embed/${u.pathname.slice(1)}`;
    if (u.searchParams.get("v"))
      return `https://www.youtube.com/embed/${u.searchParams.get("v")}`;
    if (u.pathname.includes("/embed/")) return url;
  } catch {}
  return null;
}

export function getCanvaEmbed(url: string) {
  if (!url) return null;
  return url.includes("?") ? `${url}&embed` : `${url}?embed`;
}

export function Thumbnail({
  thumb,
  rounded = "rounded-t-xl",
}: {
  thumb?: { type?: "youtube" | "canva" | "image"; url?: string; alt?: string };
  rounded?: string;
}) {
  if (!thumb?.url) return null;

  if (thumb.type === "image") {
    return (
      <img
        src={thumb.url}
        alt={thumb.alt || ""}
        loading="lazy"
        className={`w-full aspect-video object-cover ${rounded}`}
      />
    );
  }

  if (thumb.type === "youtube") {
    const src = getYouTubeEmbed(thumb.url);
    if (!src) return null;
    return (
      <div className={`aspect-video w-full ${rounded} overflow-hidden`}>
        <iframe
          src={src}
          title="Workshop video"
          loading="lazy"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    );
  }

  if (thumb.type === "canva") {
    const src = getCanvaEmbed(thumb.url);
    return (
      <div className={`aspect-video w-full ${rounded} overflow-hidden`}>
        <iframe
          src={src}
          title="Workshop slides"
          loading="lazy"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    );
  }

  return null;
}
