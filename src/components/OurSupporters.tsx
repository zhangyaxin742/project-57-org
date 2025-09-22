import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  embedded?: boolean;
  theme?: "light" | "transparent";
  heightClass?: string; // e.g., "h-24"
};

export default function OurSupporters({
  embedded = false,
  theme = "light",
  heightClass = "h-24",
}: Props) {
  const partners = [
    { href: "https://www.mefa.org/",  src: "/assets/mefa-text.png", alt: "MEFA" },
    { href: "https://ma.financialeducatorscouncil.org/", src: "/assets/MFEC.png", alt: "MFEC" },
    { href: "https://www.midascollab.org/", src: "/assets/midas.png", alt: "The Midas Collaborative" },
    { href: "https://www.mass.gov/orgs/office-of-economic-empowerment", src: "/assets/oee.png", alt: "OEE" },
    { href: "https://www.babson.edu/the-babson-financial-literacy-project/", src: "/assets/babson.png", alt: "BFLP" },
  ];

  return (
    <section className={cn(embedded ? "py-0" : "py-12")}>
      {/* full-bleed container */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <style>{`
          @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          .marquee { position: relative; overflow: hidden; }
          .track   { display:flex; align-items:center; width:200%; will-change:transform; animation:marquee 20s linear infinite; }
          .marquee:hover .track { animation-play-state: paused; }
          .group   { display:flex; align-items:center; gap:2rem; flex:0 0 50%; white-space:nowrap; }
          .chip    { flex:0 0 auto; font-weight:700; white-space:nowrap;
                     padding:.5rem .9rem; border-radius:9999px; border:1px solid rgba(0,0,0,.08); }
          .logo    { width:140px; height:64px; object-fit:contain; display:block; transition:transform .18s ease; }
          .logo:hover { transform: scale(1.04); }
        `}</style>

        <div
          className={cn(
            "marquee",
            heightClass,
            theme === "light" ? "bg-white text-gray-900" : "bg-transparent"
          )}
        >
          {/* optional subtle inner container height alignment */}
          <div className="track">
            {/* pass 1 */}
            <div className="group">
              <span className={cn("chip", theme === "light" ? "bg-white/60" : "bg-white/10 text-white")}>
                Our <span className="bg-sunset-gradient bg-clip-text text-transparent">Supporters</span>
              </span>
              {partners.map((p) => (
                <a key={p.src} href={p.href} target="_blank" rel="noopener noreferrer" aria-label={p.alt}>
                  <img className="logo" src={p.src} alt={p.alt} />
                </a>
              ))}
            </div>
            {/* pass 2 */}
            <div className="group" aria-hidden="true">
              <span className={cn("chip", theme === "light" ? "bg-white/60" : "bg-white/10 text-white")}>
                Our <span className="bg-sunset-gradient bg-clip-text text-transparent">Supporters</span>
              </span>
              {partners.map((p) => (
                <a key={`dup-${p.src}`} href={p.href} target="_blank" rel="noopener noreferrer" aria-label={p.alt}>
                  <img className="logo" src={p.src} alt={p.alt} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
