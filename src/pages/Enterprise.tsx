import Navigation from '@/components/Navigation';

const Enterprise = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-sunset-gradient bg-clip-text text-transparent">Enterprise</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Empowering young entrepreneurs with pitch opportunities, resources, 
            and the community needed to turn ideas into successful businesses.
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Enterprise Portal
          </h2>
          <p className="text-gray-400 text-lg">
            This section is coming soon. Check back later for pitch competitions, featured founders, and entrepreneurship resources!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Enterprise;
