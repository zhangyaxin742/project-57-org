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
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Our Supporters</h2>

                <style>{`
                    @keyframes marquee {
                        from { transform: translateX(0); }
                        to   { transform: translateX(-50%); }
                    }
                    .marquee { position: relative; overflow: hidden; }
                    .fade-l, .fade-r {
                        position:absolute; top:0; bottom:0; width:64px; pointer-events:none;
                    }
                    .fade-l { left:0; background:linear-gradient(to right, var(--bg, #0b1220), transparent); }
                    .fade-r { right:0; background:linear-gradient(to left, var(--bg, #0b1220), transparent); }

                    .track {
                        display:flex; gap:2rem; align-items:center;
                        will-change: transform;
                        animation: marquee 20s linear infinite;
                    }
                    .marquee:hover .track { animation-play-state: paused; }

                    .group { display:flex; gap:2rem; align-items:center; }
                    .logo {
                        width:140px; height:64px; object-fit:contain;
                        filter:grayscale(100%) opacity(.85);
                        transition: transform .18s ease, filter .18s ease, opacity .18s ease;
                    }
                    .logo:hover { filter:grayscale(0) opacity(1); transform:scale(1.04); }
                `}</style>

                <div className="marquee mt-4">
                    <div className="fade-l" />
                    <div className="fade-r" />

                    <div className="track">
                        {/* pass 1 */}
                        <div className="group">
                            {partners.map(p => (
                                <a key={p.src} href={p.href} target="_blank" rel="noopener noreferrer" aria-label={p.alt}>
                                    <img className="logo" src={p.src} alt={p.alt} />
                                </a>
                            ))}
                        </div>
                        {/* pass 2 (aria-hidden for accessibility) */}
                        <div className="group" aria-hidden="true">
                            {partners.map(p => (
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
