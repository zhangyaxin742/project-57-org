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
      <div className="w-full max-w-7xl mx-auto px-4">
        <div 
          className={cn(
            "relative p-6 rounded-2xl",
            glass && "bg-white/[0.06] backdrop-blur-sm border border-white/10"
          )}
        >
          {/* Mosaic Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {/* Header Tile */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1 flex items-center justify-center bg-white/5 border border-white/[0.16] rounded-xl p-4 min-h-[120px] transition-all duration-300 ease-out hover:scale-105 hover:bg-sunset-gradient hover:border-sunset-orange/50 hover:shadow-lg hover:shadow-sunset-orange/20">
              <span className="text-center text-white font-bold text-sm lg:text-base">
                Our <span className="bg-sunset-gradient bg-clip-text text-transparent">Supporters</span>
              </span>
            </div>

            {/* Partner Tiles */}
            {partners.map((partner, index) => (
              <div 
                key={partner.src}
                className="group relative col-span-1 lg:col-span-1"
              >
                <a 
                  href={partner.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={partner.alt}
                  className="block relative overflow-hidden bg-white/5 border border-white/[0.16] rounded-xl p-4 min-h-[120px] transition-all duration-300 ease-out hover:scale-110 hover:z-10 hover:shadow-2xl hover:shadow-sunset-orange/30 group"
                >
                  {/* Sunset gradient overlay - appears on hover */}
                  <div className="absolute inset-0 bg-sunset-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-out rounded-xl" />
                  
                  {/* Border glow effect */}
                  <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-sunset-orange/50 transition-all duration-300 ease-out" />
                  
                  {/* Logo container */}
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <img 
                      className="max-w-full max-h-12 object-contain opacity-90 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:brightness-110 group-hover:saturate-110" 
                      src={partner.src} 
                      alt={partner.alt} 
                    />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
