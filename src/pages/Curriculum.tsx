import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, ExternalLink, MapPin, Download, Handshake } from 'lucide-react';

const Curriculum = () => {
  const curriculumModules = [
    {
      title: "Personal Finance Fundamentals",
      description: "Master budgeting, saving, and basic financial planning",
      duration: "6 weeks",
      enrolled: 1247
    },
    {
      title: "Investment Literacy for Teens",
      description: "Learn about stocks, bonds, and long-term wealth building",
      duration: "4 weeks",
      enrolled: 892
    },
    {
      title: "Credit & Debt Management",
      description: "Understanding credit scores, loans, and responsible borrowing",
      duration: "3 weeks",
      enrolled: 634
    },
    {
      title: "Entrepreneurship & Business Finance",
      description: "Financial planning for young entrepreneurs",
      duration: "8 weeks",
      enrolled: 456
    }
  ];

  const workshops = [
    {
      title: "Financial Planning Workshop",
      location: "Virtual",
      date: "Dec 15, 2024"
    },
    {
      title: "Youth Entrepreneurship Bootcamp",
      location: "Boston, MA",
      date: "Jan 20, 2025"
    },
    {
      title: "Credit Building Masterclass",
      location: "Virtual",
      date: "Feb 10, 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-sunset-gradient bg-clip-text text-transparent">PFin</span> Curriculum
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Peer-designed personal finance curriculum that makes complex financial concepts accessible, engaging, and culturally relevant.
          </p>
          <Button 
            className="bg-sunset-gradient hover:opacity-90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://forms.google.com', '_blank')}
          >
            Feeling confident? Test your financial literacy knowledge today →
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Curriculum Modules Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Curriculum Modules
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {curriculumModules.map((module, index) => (
              <Card 
                key={index} 
                className="bg-black/50 border-white/10 hover:border-sunset-pink/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-white">{module.title}</CardTitle>
                  <CardDescription className="text-gray-300">{module.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm text-gray-400">{module.duration}</div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">{module.enrolled.toLocaleString()} learners</span>
                  </div>
                  <Button 
                    className="w-full bg-sunset-gradient hover:opacity-90 text-white transition-all duration-300 hover:scale-105"
                  >
                    Start Learning
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops & Events Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-0">
              Workshops & Events
            </h2>
            <Button 
              className="bg-sunset-gradient hover:opacity-90 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://forms.google.com', '_blank')}
            >
              Request a Workshop
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <Card 
                key={index} 
                className="bg-black/50 border-white/10 hover:border-sunset-pink/50 transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <CardTitle className="text-white">{workshop.title}</CardTitle>
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{workshop.location}</span>
                  </div>
                  <div className="text-sunset-orange font-semibold">{workshop.date}</div>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full bg-sunset-gradient hover:opacity-90 text-white transition-all duration-300 hover:scale-105"
                  >
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Educator Portal Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Educator Portal
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Downloadable Resources Card */}
            <Card className="bg-gray-900/50 border-white/10 hover:border-sunset-pink/50 transition-all duration-300 hover:scale-105 text-center animate-fade-in">
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-sunset-gradient flex items-center justify-center">
                    <Download className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-white">Downloadable Resources</CardTitle>
                <CardDescription className="text-gray-300">
                  Access comprehensive teaching materials, lesson plans, and interactive activities designed by students for educators nationwide.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-sunset-gradient hover:opacity-90 text-white transition-all duration-300 hover:scale-105"
                >
                  Download Resources
                </Button>
              </CardContent>
            </Card>

            {/* Classroom Collaboration Card */}
            <Card className="bg-gray-900/50 border-white/10 hover:border-sunset-pink/50 transition-all duration-300 hover:scale-105 text-center animate-fade-in">
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-sunset-gradient flex items-center justify-center">
                    <Handshake className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-white">Classroom Collaboration</CardTitle>
                <CardDescription className="text-gray-300">
                  Partner with Project 57 to bring peer-to-peer financial education directly to your classroom through our student ambassador program.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-sunset-gradient hover:opacity-90 text-white transition-all duration-300 hover:scale-105"
                >
                  Partner with Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Curriculum;