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
        { href: "https://www.babson.edu/the-babson-financial-literacy-project/", src: "/assets/babson.png", alt: "BFLP" },
        { href: "https://www.institutionforsavings.com/", src: "/assets/institution-for-savings.png", alt: "Institution for Savings" },
     { href: "https://www.midascollab.org/", src: "/assets/midas.png", alt: "The Midas Collaborative" },
         { href: "https://www.mass.gov/orgs/office-of-economic-empowerment", src: "/assets/oee.png", alt: "OEE" },
    { href: "https://ma.financialeducatorscouncil.org/", src: "/assets/MFEC.png", alt: "MFEC" },
   { href: "https://www.rocklandtrust.com/", src: "/assets/rockland-trust.png", alt: "Rockland Trust" },
       { href: "https://www.mefa.org/", src: "/assets/mefa-text.png", alt: "MEFA" },
  ];

  return (
    <section
      className={cn(
        embedded ? "py-0" : "py-16",
        // vertical gradient from black at top to white at bottom
        "bg-gradient-to-b from-black to-white py-16 pb-18",
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
      // 2 x 4 grid
      "grid gap-8",
      "grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
    )}
  >
    {partners.map((p) => (
      <li key={p.alt} className="flex items-center justify-center">
        <a
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={p.alt}
          className="block"
        >
          {/* Uniform logo box — no card UI */}
          <div
            className="
              w-full
              h-32
              md:h-36
              aspect-[4/3]            /* same box ratio for every logo */
              flex items-center justify-center
              overflow-hidden
            "
          >
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="
                object-contain
                w-full h-full        /* scale to box without distortion */
                max-h-[96px] md:max-h-[112px]  /* hard cap to standardize visual height */
              "
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
