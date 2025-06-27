
import React, { useState, useEffect, useRef } from 'react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      number: "54%",
      label: "of young adults lack basic financial knowledge",
      description: "According to the National Financial Educators Council"
    },
    {
      number: "73%",
      label: "of teens want to learn about money management",
      description: "But only 21% feel confident about their financial future"
    },
    {
      number: "1 in 5",
      label: "students receive comprehensive financial education",
      description: "Despite financial literacy being crucial for adult success"
    },
    {
      number: "500+",
      label: "students impacted by Project 57 programs",
      description: "Across Massachusetts communities"
    }
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-dark-card">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            The Financial Literacy 
            <span className="text-gradient"> Crisis</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Young people are entering adulthood without the financial tools they need to succeed. 
            We're changing that, one student at a time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-xl bg-dark-bg border border-gray-800 hover:border-brand-orange/50 transition-all duration-500 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-3">
                {stat.number}
              </div>
              <div className="text-white font-semibold mb-2">
                {stat.label}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;