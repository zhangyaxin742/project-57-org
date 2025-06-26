
import { useEffect, useState } from 'react';
import StatCard from './StatCard';

const ScrollingStats = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { number: '54%', label: 'of Americans live paycheck to paycheck' },
    { number: '37%', label: 'of US adults would struggle to cover a $400 emergency' },
    { number: '21%', label: 'of high school students receive financial education' },
    { number: '10,000+', label: 'Massachusetts youth need financial literacy' }
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
            The Financial Literacy Crisis
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Young people are entering adulthood without the financial knowledge they need to succeed. 
            PROJECT 57 is changing that, one student at a time.
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
