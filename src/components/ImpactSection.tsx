
import { useEffect, useState } from 'react';

const ImpactSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const impacts = [
    {
      number: '500+',
      label: 'Students Surveyed',
      description: 'Uncovering critical gaps in financial knowledge across high schools'
    },
    {
      number: '420',
      label: 'Schools Contacted',
      description: 'Mobilizing educators and administrators, from Boston to Springfield'
    },
    {
      number: '200+',
      label: 'Policymakers Engaged',
      description: 'Pushing to make personal finance mandatory for high school graduation'
    },
    {
      number: '6',
      label: 'Bills Tracked',
      description: 'Empowering passionate citizens to track and support key legislation'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('impact-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="impact-section" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="bg-sunset-gradient bg-clip-text text-transparent">Impact</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Since our founding, Project 57 has been transforming financial literacy in Massachusetts—one student, one school, and one bill at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/10 transition-all duration-700 hover:border-sunset-pink/30 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-sunset-gradient bg-clip-text text-transparent mb-2">
                {impact.number}
              </div>
              <div className="text-white font-semibold mb-2">{impact.label}</div>
              <div className="text-gray-400 text-sm">{impact.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
