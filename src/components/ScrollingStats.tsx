
import { useEffect, useState } from 'react';
import StatCard from './StatCard';

const ScrollingStats = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { number: '1 in 5', label: "teens can't create a basic budget." },
    { number: '63%', label: "of American adults can’t afford a $500 emergency." },
    { number: '94%', label: "of Massachusetts districts don't require financial literacy." },
    { number: '250,000+', label: "teens risk a lifetime of financial hardship." }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats-section" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The {""}
            <span className="bg-sunset-gradient bg-clip-text text-transparent">
    Financial Literacy {""}
            </span>
                Crisis
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            57% of Americans fail a basic financial literacy test. 
            Project 57 is changing that, one student at a time.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              isVisible={isVisible}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollingStats;
