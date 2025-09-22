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
      <div className="w-full">
        <div 
          className={cn(
            "relative overflow-hidden group",
            glass && "bg-white/[0.06] backdrop-blur-sm border-t border-white/10 border-b border-white/[0.08]"
          )}
        >
          <div className="flex items-center w-[200%] animate-marquee group-hover:[animation-play-state:paused]">
            {/* pass 1 */}
            <div className="flex items-center gap-8 flex-[0_0_50%] whitespace-nowrap">
              <span className="flex-none text-white bg-white/10 border border-white/[0.16] px-4 py-2 rounded-full font-bold whitespace-nowrap">
                Our <span className="bg-sunset-gradient bg-clip-text text-transparent">Supporters</span>
              </span>
              {partners.map((p) => (
                <a 
                  key={p.src} 
                  href={p.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={p.alt}
                  className="block"
                >
                  <img 
                    className="w-[140px] h-16 object-contain block opacity-95 transition-all duration-200 ease-out hover:opacity-100 hover:scale-105" 
                    src={p.src} 
                    alt={p.alt} 
                  />
                </a>
              ))}
            </div>

            {/* pass 2 (duplicate for seamless loop) */}
            <div className="flex items-center gap-8 flex-[0_0_50%] whitespace-nowrap" aria-hidden="true">
              <span className="flex-none text-white bg-white/10 border border-white/[0.16] px-4 py-2 rounded-full font-bold whitespace-nowrap">
                Our <span className="bg-sunset-gradient bg-clip-text text-transparent">Supporters</span>
              </span>
              {partners.map((p) => (
                <a 
                  key={`dup-${p.src}`} 
                  href={p.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={p.alt}
                  className="block"
                >
                  <img 
                    className="w-[140px] h-16 object-contain block opacity-95 transition-all duration-200 ease-out hover:opacity-100 hover:scale-105" 
                    src={p.src} 
                    alt={p.alt} 
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
