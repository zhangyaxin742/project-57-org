import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  embedded?: boolean;   // keeps internal spacing at 0 when embedded
  glass?: boolean;      // glass background
  fullBleed?: boolean;  // span entire viewport width
};

export default function OurSupporters({ embedded = false, glass = false, fullBleed = false }: Props) {
  const partners = [
    { href: "https://www.mefa.org/",  src: "/assets/mefa-text.png", alt: "MEFA" },
    { href: "https://ma.financialeducatorscouncil.org/", src: "/assets/MFEC.png", alt: "MFEC" },
    { href: "https://www.midascollab.org/", src: "/assets/midas.png", alt: "The Midas Collaborative" },
    { href: "https://www.mass.gov/orgs/office-of-economic-empowerment", src: "/assets/oee.png", alt: "OEE" },
    { href: "https://www.babson.edu/the-babson-financial-literacy-project/", src: "/assets/babson.png", alt: "BFLP" },
  ];

  return (
    <section className={cn(embedded ? "py-0" : "py-12")}>
      <div
        className={cn(
          fullBleed
            ? "w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
            : "w-full"
        )}
      >
        <style>{`
          @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }

          .marquee {
            position: relative; overflow: hidden;
            ${glass
              ? "background: rgba(255,255,255,0.06); backdrop-filter: blur(8px); border-top: 1px solid rgba(255,255,255,0.10); border-bottom: 1px solid rgba(255,255,255,0.08);"
              : "background: transparent;"
            }
          }

          /* exact 200% track so -50% = one full group, no lag */
          .track {
            display: flex; align-items: center;
            width: 200%; will-change: transform;
            animation: marquee 20s linear infinite;
          }
          .marquee:hover .track { animation-play-state: paused; }

          .group {
            display: flex; align-items: center; gap: 2rem;
            flex: 0 0 50%; white-space: nowrap;
          }

          .chip {
            flex: 0 0 auto; color: #fff;
            background: rgba(255,255,255,.10);
            border: 1px solid rgba(255,255,255,.16);
            padding: .5rem .9rem; border-radius: 9999px;
            font-weight: 700; white-space: nowrap;
          }

          .logo {
            width: 140px; height: 64px; object-fit: contain; display: block;
            filter: opacity(.95);
            transition: transform .18s ease, opacity .18s ease;
          }
          .logo:hover { filter: opacity(1); transform: scale(1.04); }
        `}</style>

        <div className="marquee">
          <div className="track">
            {/* pass 1 */}
            <div className="group">
              <span className="chip">
                Our <span className="bg-sunset-gradient bg-clip-text text-transparent">Supporters</span>
              </span>
              {partners.map((p) => (
                <a key={p.src} href={p.href} target="_blank" rel="noopener noreferrer" aria-label={p.alt}>
                  <img className="logo" src={p.src} alt={p.alt} />
                </a>
              ))}
            </div>

            {/* pass 2 (duplicate for seamless loop) */}
            <div className="group" aria-hidden="true">
              <span className="chip">
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
