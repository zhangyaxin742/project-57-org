import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  embedded?: boolean;   // keeps internal spacing at 0 when embedded
  glass?: boolean;      // section glass background (optional)
  fullBleed?: boolean;  // span entire viewport width
};

export default function OurSupporters({
  embedded = false,
  glass = false,
  fullBleed = false,
}: Props) {
  const partners = [
    { href: "https://www.mefa.org/", src: "/assets/mefa-text.png", alt: "MEFA" },
    { href: "https://ma.financialeducatorscouncil.org/", src: "/assets/MFEC.png", alt: "MFEC" },
    { href: "https://www.midascollab.org/", src: "/assets/midas.png", alt: "The Midas Collaborative" },
    { href: "https://www.mass.gov/orgs/office-of-economic-empowerment", src: "/assets/oee.png", alt: "OEE" },
    { href: "https://www.babson.edu/the-babson-financial-literacy-project/", src: "/assets/babson.png", alt: "BFLP" },
  ];

  return (
    <section
      className={cn(
        embedded ? "py-0" : "py-16",
        "bg-gray-900",
        glass && "bg-white/[0.06] backdrop-blur-sm"
      )}
    >
      {/* Heading */}
      <div
        className={cn(
          fullBleed ? "w-full px-4" : "max-w-6xl mx-auto px-4",
          "mb-10"
        )}
      >
        <h2 className="text-3xl font-bold text-white text-center">
          Our <span className="bg-sunset-gradient bg-clip-text text-transparent">Supporters</span>
        </h2>
      </div>

      {/* Grid */}
      <div className={cn(fullBleed ? "w-full px-4" : "max-w-6xl mx-auto px-4")}>
        <ul
          className={cn(
            "grid gap-6",
            // Responsive columns
            "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          )}
        >
          {partners.map((p) => (
            <li key={p.alt}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={p.alt}
                className={cn(
                  // Glass tile
                  "group block rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm",
                  // Layout & spacing
                  "aspect-[3/2] p-4",
                  // Effects
                  "shadow-sm hover:shadow-lg transition-all duration-200",
                  "hover:-translate-y-0.5 focus-visible:-translate-y-0.5",
                  // Focus ring
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                )}
              >
                <div className="h-full w-full grid place-items-center">
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className={cn(
                      "max-h-full max-w-full object-contain",
                      // Slightly muted until hover/focus for a clean look
                      "opacity-80 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity"
                    )}
                  />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
