
import { Link } from 'react-router-dom';
import { BookOpen, Users, Scale } from 'lucide-react';

const ProgramCards = () => {
  const programs = [
    {
      title: 'Advocacy',
      description: 'Track bills, read our research, and advocate for mandatory personal financial education in your district.',
      icon: Scale,
      path: '/advocacy',
      gradient: 'from-sunset-purple to-sunset-orange'
    }, 
        {
      title: 'Curriculum',
      description: 'Lead (or attend) a financial literacy workshop in your town — designed by youth, for youth.',
      icon: BookOpen,
      path: '/curriculum',
      gradient: 'from-sunset-orange to-sunset-pink'
    },
    {
      title: 'Enterprise',
      description: 'Explore pitch competitions, local hackathons, and network with fellow entrepreneurs.',
      icon: Users,
      path: '/enterprise',
      gradient: 'from-sunset-pink to-sunset-purple'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our {""} <span className="bg-sunset-gradient bg-clip-text text-transparent"> Work </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Three comprehensive pathways to financial empowerment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Link
              key={index}
              to={program.path}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-black border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 ripple-effect"
            >
              <div className={`h-2 bg-gradient-to-r ${program.gradient}`}></div>
              <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${program.gradient}`}>
              </div>
              
              <div className="relative p-8">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${program.gradient} mb-6`}>
                  <program.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-sunset-pink transition-colors">
                  {program.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {program.description}
                </p>
                
                <div className="mt-6 flex items-center text-sunset-pink group-hover:translate-x-2 transition-transform">
                  <span className="text-sm font-semibold">Learn More</span>
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramCards;
