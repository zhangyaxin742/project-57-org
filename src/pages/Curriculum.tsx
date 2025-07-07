
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Users, Clock, ExternalLink, Lock, FileText, Download, MessageCircle, Calendar, MapPin } from 'lucide-react';

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
            <span className="bg-sunset-gradient bg-clip-text text-transparent">P</span>Curriculum
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
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Curriculum <span className="bg-sunset-gradient bg-clip-text text-transparent">Modules</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {curriculumModules.map((module, index) => (
              <Card key={index} className="bg-black/50 border-white/10 hover:border-sunset-pink/50 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <BookOpen className="h-6 w-6 text-sunset-orange" />
                  </div>
                  <CardTitle className="text-white">{module.title}</CardTitle>
                  <CardDescription className="text-gray-300">{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {module.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {module.enrolled} learners
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-sunset-gradient hover:opacity-90 text-white font-semibold transition-all duration-300 hover:scale-105">
                    Start Learning
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops & Events Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Workshops & <span className="bg-sunset-gradient bg-clip-text text-transparent">Events</span>
            </h2>
            <Button 
              variant="outline" 
              className="border-sunset-pink text-sunset-pink hover:bg-sunset-pink hover:text-white"
            >
              Request a Workshop
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <Card key={index} className="bg-gray-900/50 border-white/10 hover:border-sunset-pink/50 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-white">{workshop.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <MapPin className="h-4 w-4" />
                      {workshop.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="h-4 w-4" />
                      {workshop.date}
                    </div>
                  </div>
                  <Button className="w-full bg-sunset-gradient hover:opacity-90 text-white font-semibold transition-all duration-300 hover:scale-105">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Educator Portal */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="bg-sunset-gradient bg-clip-text text-transparent">Educator</span> Portal
          </h2>
          <p className="text-gray-300 text-lg mb-12 text-center">
            Access exclusive teaching resources, lesson plans, and curriculum guides.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-black/50 border-white/10 hover:border-sunset-pink/50 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Download className="h-6 w-6 text-sunset-orange" />
                </div>
                <CardTitle className="text-white text-center">Downloadable Resources</CardTitle>
                <CardDescription className="text-gray-300 text-center">
                  Access lesson plans, worksheets, and curriculum guides
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full border-sunset-pink text-sunset-pink hover:bg-sunset-pink hover:text-white"
                >
                  Download Resources
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-white/10 hover:border-sunset-pink/50 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <MessageCircle className="h-6 w-6 text-sunset-purple" />
                </div>
                <CardTitle className="text-white text-center">Classroom Collaboration</CardTitle>
                <CardDescription className="text-gray-300 text-center">
                  Connect with other educators and share best practices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full border-sunset-pink text-sunset-pink hover:bg-sunset-pink hover:text-white"
                >
                  Join Community
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Partner <span className="bg-sunset-gradient bg-clip-text text-transparent">with Us</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Bring financial literacy education to your school or organization.
          </p>
          <Button 
            className="bg-gradient-to-r from-sunset-orange to-sunset-pink hover:opacity-90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://forms.google.com', '_blank')}
          >
            Partnership Application
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Curriculum;
