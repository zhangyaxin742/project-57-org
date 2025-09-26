import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  embedded?: boolean;   // keeps internal spacing at 0 when embedded
  glass?: boolean;      // glass background
  fullBleed?: boolean;  // span entire viewport width
};

export default function OurSupporters({ embedded = false, glass = false, fullBleed = false }: Props) {
  const partners = [
    { href: "https://www.mefa.org/", src: "/assets/mefa-text.png", alt: "MEFA", color: "from-orange-500 to-red-500" },
    { href: "https://ma.financialeducatorscouncil.org/", src: "/assets/MFEC.png", alt: "MFEC", color: "from-pink-500 to-purple-500" },
    { href: "https://www.midascollab.org/", src: "/assets/midas.png", alt: "The Midas Collaborative", color: "from-yellow-400 to-orange-500" },
    { href: "https://www.mass.gov/orgs/office-of-economic-empowerment", src: "/assets/oee.png", alt: "OEE", color: "from-purple-600 to-pink-600" },
    { href: "https://www.babson.edu/the-babson-financial-literacy-project/", src: "/assets/babson.png", alt: "BFLP", color: "from-teal-500 to-blue-500" },
  ];

  return (
    <section className={cn(embedded ? "py-0" : "py-12")}>
      <div className="w-full max-w-4xl mx-auto px-4">
        <div 
          className={cn(
            "relative p-4 rounded-2xl",
            glass && "bg-white/[0.06] backdrop-blur-sm border border-white/10"
          )}
        >
          {/* Colorful Mosaic Grid */}
          <div className="grid grid-cols-3 grid-rows-2 gap-3 aspect-square max-w-lg mx-auto">
            {/* Top Row */}
            <div className="aspect-square">
              <a 
                href={partners[0].href} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={partners[0].alt}
                className={cn(
                  "group relative block w-full h-full rounded-xl p-3 transition-all duration-300 ease-out",
                  "bg-gradient-to-br", partners[0].color,
                  "hover:scale-105 hover:z-10 hover:shadow-xl hover:brightness-110"
                )}
              >
                <div className="flex items-center justify-center h-full">
                  <img 
                    className="max-w-full max-h-8 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110" 
                    src={partners[0].src} 
                    alt={partners[0].alt} 
                  />
                </div>
              </a>
            </div>

            {/* Center Text Tile */}
            <div className="aspect-square">
              <div className="relative w-full h-full rounded-xl p-3 bg-gradient-to-br from-slate-800 to-slate-900 border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:from-slate-700 hover:to-slate-800">
                <div className="text-center">
                  <span className="text-white font-bold text-sm leading-tight">
                    Our<br />
                    <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                      Supporters
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="aspect-square">
              <a 
                href={partners[1].href} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={partners[1].alt}
                className={cn(
                  "group relative block w-full h-full rounded-xl p-3 transition-all duration-300 ease-out",
                  "bg-gradient-to-br", partners[1].color,
                  "hover:scale-105 hover:z-10 hover:shadow-xl hover:brightness-110"
                )}
              >
                <div className="flex items-center justify-center h-full">
                  <img 
                    className="max-w-full max-h-8 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110" 
                    src={partners[1].src} 
                    alt={partners[1].alt} 
                  />
                </div>
              </a>
            </div>

            {/* Bottom Row */}
            <div className="aspect-square">
              <a 
                href={partners[2].href} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={partners[2].alt}
                className={cn(
                  "group relative block w-full h-full rounded-xl p-3 transition-all duration-300 ease-out",
                  "bg-gradient-to-br", partners[2].color,
                  "hover:scale-105 hover:z-10 hover:shadow-xl hover:brightness-110"
                )}
              >
                <div className="flex items-center justify-center h-full">
                  <img 
                    className="max-w-full max-h-8 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110" 
                    src={partners[2].src} 
                    alt={partners[2].alt} 
                  />
                </div>
              </a>
            </div>

            <div className="aspect-square">
              <a 
                href={partners[3].href} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={partners[3].alt}
                className={cn(
                  "group relative block w-full h-full rounded-xl p-3 transition-all duration-300 ease-out",
                  "bg-gradient-to-br", partners[3].color,
                  "hover:scale-105 hover:z-10 hover:shadow-xl hover:brightness-110"
                )}
              >
                <div className="flex items-center justify-center h-full">
                  <img 
                    className="max-w-full max-h-8 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110" 
                    src={partners[3].src} 
                    alt={partners[3].alt} 
                  />
                </div>
              </a>
            </div>

            <div className="aspect-square">
              <a 
                href={partners[4].href} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={partners[4].alt}
                className={cn(
                  "group relative block w-full h-full rounded-xl p-3 transition-all duration-300 ease-out",
                  "bg-gradient-to-br", partners[4].color,
                  "hover:scale-105 hover:z-10 hover:shadow-xl hover:brightness-110"
                )}
              >
                <div className="flex items-center justify-center h-full">
                  <img 
                    className="max-w-full max-h-8 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110" 
                    src={partners[4].src} 
                    alt={partners[4].alt} 
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
