
import { useEffect, useState } from 'react';

interface StatCardProps {
  number: string;
  label: string;
  isVisible: boolean;
  delay?: number;
}

const StatCard = ({ number, label, isVisible, delay = 0 }: StatCardProps) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setTimeout(() => {
        setHasAnimated(true);
      }, delay);
    }
  }, [isVisible, hasAnimated, delay]);

  return (
    <div 
      className={`text-center transition-all duration-1000 ${
        hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="text-4xl md:text-5xl font-bold bg-sunset-gradient bg-clip-text text-transparent mb-2">
        {hasAnimated ? number : '0'}
      </div>
      <div className="text-gray-300 text-sm md:text-base">{label}</div>
    </div>
  );
};

export default StatCard;
