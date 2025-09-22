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
    onClick={() => navigate('/get-involved')}
    className="group relative px-8 py-4 bg-sunset-gradient rounded-full text-white font-semibold text-lg hover:scale-105 transition-transform duration-300 ripple-effect"
  >
    <span className="relative z-10">Start Your Journey</span>
  </button>
  
  <button
    onClick={() => navigate('/ourwork#curriculum')}
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
      
    </div>;
};
export default Index;