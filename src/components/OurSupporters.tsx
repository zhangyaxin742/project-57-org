import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  embedded?: boolean;   // keeps internal spacing at 0 when embedded
  glass?: boolean;      // glass background
  fullBleed?: boolean;  // span entire viewport width
};

export default function OurSupporters({ embedded = false, glass = false, fullBleed = false }: Props) {
  const partners = [
    { href: "https://www.mefa.org/", src: "/assets/mefa-text.png", alt: "MEFA" },
    { href: "https://ma.financialeducatorscouncil.org/", src: "/assets/MFEC.png", alt: "MFEC" },
    { href: "https://www.midascollab.org/", src: "/assets/midas.png", alt: "The Midas Collaborative" },
    { href: "https://www.mass.gov/orgs/office-of-economic-empowerment", src: "/assets/oee.png", alt: "OEE" },
    { href: "https://www.babson.edu/the-babson-financial-literacy-project/", src: "/assets/babson.png", alt: "BFLP" },
  ];

  // Duplicate partners array for seamless infinite scroll
  const marqueePartners = [...partners, ...partners];

  return (
    <section className={cn(embedded ? "py-0" : "py-16", "bg-gray-900")}>
      {/* Section Heading - Constrained width for readability */}
      <div className={cn("max-w-6xl mx-auto px-4 mb-12", glass && "bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-8")}>
        <h2 className="text-3xl font-bold text-white text-center">
          Our <span className="bg-sunset-gradient bg-clip-text text-transparent">Supporters</span>
        </h2>
      </div>

      {/* Full-width Marquee Container */}
      <div className="relative overflow-hidden marquee-pause w-full">
        <div className="animate-marquee flex items-center gap-12">
          {marqueePartners.map((partner, index) => (
            <a
              key={`${partner.alt}-${index}`}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={partner.alt}
              className="flex-shrink-0 transition-transform duration-300 hover:scale-110 hover:z-10"
            >
              <div className="h-16 w-24 bg-white/95 rounded-lg p-2 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
