import React from "react";

const partners = [
  { href: "https://www.mefa.org/",  src: "/assets/mefa-text.png", alt: "MEFA" },
  { href: "https://ma.financialeducatorscouncil.org/", src: "/assets/MFEC.png", alt: "MFEC" },
  { href: "https://www.midascollab.org/", src: "/assets/midas.png", alt: "The Midas Collaborative" },
  { href: "https://www.mass.gov/orgs/office-of-economic-empowerment", src: "/assets/oee.png", alt: "OEE" },
  { href: "https://www.babson.edu/the-babson-financial-literacy-project/", src: "/assets/babson.png", alt: "BFLP" },
];

export default function OurSupporters() {
  return (
    <section
      className="py-12"
      // match site background via Tailwind CSS var
      style={{ ["--bg" as any]: "hsl(var(--background))" }}
    >
      {/* Full-bleed container */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">

        <style>{`
          @keyframes marquee {
            from { transform: translate3d(0,0,0); }
            to   { transform: translate3d(-50%,0,0); }
          }
          .marquee { position: relative; overflow: hidden; background: var(--bg); }
          .track {
            display: flex; align-items: center; gap: 2rem;
            width: max-content; /* shrink-wrap contents */
            will-change: transform;
            animation: marquee 20s linear infinite;
          }
          .marquee:hover .track { animation-play-state: paused; }

          .group { display: flex; align-items: center; gap: 2rem; flex: 0 0 auto; }
          .chip {
            flex: 0 0 auto;
            color: white; background: rgba(255,255,255,0.06);
            border: 1px solid rgba(255,255,255,0.1);
            padding: .5rem .9rem; border-radius: 9999px;
            font-weight: 700; letter-spacing: .01em;
            white-space: nowrap;
          }
          .logo {
            width: 140px; height: 64px; object-fit: contain; display: block;
            filter: grayscale(100%) opacity(.85);
            transition: transform .18s ease, filter .18s ease, opacity .18s ease;
          }
          .logo:hover { filter: grayscale(0) opacity(1); transform: scale(1.04); }

          .fade {
            position: absolute; top: 0; bottom: 0; width: 64px; pointer-events: none;
          }
          .fade.left  { left: 0;  background: linear-gradient(to right, var(--bg), transparent); }
          .fade.right { right: 0; background: linear-gradient(to left,  var(--bg), transparent); }
        `}</style>

        <div className="marquee">
          <div className="fade left" />
          <div className="fade right" />

          <div className="track">
            {/* pass 1 */}
            <div className="group">
              <span className="chip">Our Supporters</span>
              {partners.map(p => (
                <a key={p.src} href={p.href} target="_blank" rel="noopener noreferrer" aria-label={p.alt}>
                  <img className="logo" src={p.src} alt={p.alt} />
                </a>
              ))}
            </div>
            {/* pass 2 (duplicate for seamless loop) */}
            <div className="group" aria-hidden="true">
              <span className="chip">Our Supporters</span>
              {partners.map(p => (
                <a key={`dup-${p.src}`} href={p.href} target="_blank" rel="noopener noreferrer" aria-label={p.alt}>
                  <img className="logo" src={p.src} alt={p.alt} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Optional standard padding container below, if you need more section content later */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"></div>
    </section>
  );
}
