import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import ScrollingStats from '../components/ScrollingStats';
import ImpactSection from '../components/ImpactSection';
import ProgramCards from '../components/ProgramCards';
import { useNavigate } from 'react-router-dom';
const Index = () => {

const navigate = useNavigate(); 
  
  useEffect(() => {
    // Page load animation
    document.body.style.opacity = '0';
    setTimeout(() => {
      document.body.style.transition = 'opacity 0.8s ease-in-out';
      document.body.style.opacity = '1';
    }, 100);
  }, []);
  return <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sunset-orange/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sunset-purple/10 rounded-full blur-3xl animate-pulse" style={{
          animationDelay: '1s'
        }}></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Financial Literacy
              <br />
              <span className="bg-sunset-gradient bg-clip-text text-transparent">
                Starts Here
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transforming how Massachusetts teens learn about money, 
              entrepreneurship, and financial independence.
            </p>
            
       <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
  <button
    onClick={() => navigate('/ourwork#curriculum')}
    className="group relative px-8 py-4 bg-sunset-gradient rounded-full text-white font-semibold text-lg hover:scale-105 transition-transform duration-300 ripple-effect"
  >
    <span className="relative z-10">Start Your Journey</span>
  </button>
  
  <button
    onClick={() => navigate('/about')}
    className="px-8 py-4 border-2 border-white/20 rounded-full text-white font-semibold text-lg hover:border-sunset-pink hover:text-sunset-pink transition-colors duration-300"
  >
    Read Our Mission
  </button>
</div>

          </div>
        </div>
        
      </section>

      <ScrollingStats />
      <ImpactSection />
      <ProgramCards />
      {/* Our Partners Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Our Partners</h2>

          {/* Marquee styles (kept local to this component) */}
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee { position: relative; overflow: hidden; }
            .marquee-track {
              display: flex;
              gap: 2rem;
              align-items: center;
              will-change: transform;
              animation: marquee 20s linear infinite;
            }
            /* pause animation when hovering anywhere in the marquee (including on logos) */
            .marquee:hover .marquee-track { animation-play-state: paused; }
            .partner-logo {
              width: 140px;
              height: 64px;
              object-fit: contain;
              filter: grayscale(100%) opacity(.85);
              transition: transform .18s ease, filter .18s ease, opacity .18s ease;
            }
            .partner-logo:hover {
              filter: grayscale(0) opacity(1);
              transform: scale(1.04);
            }
            /* ensure duplicated content sits inline for seamless loop */
            .marquee-track > .marquee-group { display: flex; gap: 2rem; align-items: center; }
          `}</style>

          <div className="marquee mt-4">
            <div className="marquee-track">
              {/* First set of partner logos */}
              <div className="marquee-group">
                <a
                  href="https://partner1.example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Partner 1"
                >
                  <img src="/assets/partner1.png" alt="Partner 1" className="partner-logo" />
                </a>

                <a
                  href="https://partner2.example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Partner 2"
                >
                  <img src="/assets/partner2.png" alt="Partner 2" className="partner-logo" />
                </a>

                <a
                  href="https://partner3.example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Partner 3"
                >
                  <img src="/assets/partner3.png" alt="Partner 3" className="partner-logo" />
                </a>

                <a
                  href="https://partner4.example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Partner 4"
                >
                  <img src="/assets/partner4.png" alt="Partner 4" className="partner-logo" />
                </a>

                <a
                  href="https://partner5.example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Partner 5"
                >
                  <img src="/assets/partner5.png" alt="Partner 5" className="partner-logo" />
                </a>

                <a
                  href="https://partner6.example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Partner 6"
                >
                  <img src="/assets/partner6.png" alt="Partner 6" className="partner-logo" />
                </a>
              </div>

              {/* Duplicate the same group for a continuous seamless loop */}
              <div className="marquee-group" aria-hidden="true">
                <a href="https://partner1.example.com" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/partner1.png" alt="" className="partner-logo" />
                </a>

                <a href="https://partner2.example.com" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/partner2.png" alt="" className="partner-logo" />
                </a>

                <a href="https://partner3.example.com" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/partner3.png" alt="" className="partner-logo" />
                </a>

                <a href="https://partner4.example.com" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/partner4.png" alt="" className="partner-logo" />
                </a>

                <a href="https://partner5.example.com" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/partner5.png" alt="" className="partner-logo" />
                </a>

                <a href="https://partner6.example.com" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/partner6.png" alt="" className="partner-logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;