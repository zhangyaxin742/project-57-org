import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import ScrollingStats from '../components/ScrollingStats';
import ImpactSection from '../components/ImpactSection';
import ProgramCards from '../components/ProgramCards';
import { useNavigate } from 'react-router-dom';

// ...imports unchanged
import OurSupporters from "@/components/OurSupporters";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.opacity = "0";
    setTimeout(() => {
      document.body.style.transition = "opacity 0.8s ease-in-out";
      document.body.style.opacity = "1";
    }, 100);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sunset-orange/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sunset-purple/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        {/* Content */}
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

            {/* CTAs — forced identical size */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => navigate("/ourwork#curriculum")}
                className="group relative h-14 min-w-[260px] px-8 bg-sunset-gradient rounded-full text-white font-semibold text-lg hover:scale-105 transition-transform duration-300"
              >
                <span className="relative z-10">Start Your Journey</span>
              </button>

              <button
                onClick={() => navigate("/about")}
                className="h-14 min-w-[260px] px-8 border-2 border-white/20 rounded-full text-white font-semibold text-lg hover:border-sunset-pink hover:text-sunset-pink transition-colors duration-300"
              >
                Read Our Mission
              </button>
            </div>

            {/* Keep visual padding between CTAs and marquee without adding section bottom padding */}
            <div className="pb-20" />
          </div>
        </div>

        {/* ===== Fixed/isolated marquee at hero bottom (does not affect layout) ===== */}
        <div className="absolute inset-x-0 bottom-0">
          <OurSupporters embedded glass fullBleed />
        </div>
      </section>

      <ScrollingStats />
      <ImpactSection />
      <ProgramCards />
    </div>
  );
};

export default Index;
