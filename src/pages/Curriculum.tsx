
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Users, Clock, ExternalLink, Lock, FileText } from 'lucide-react';

const Curriculum = () => {
  const courses = [
    {
      title: "Personal Finance Fundamentals",
      description: "Master budgeting, saving, and basic financial planning",
      duration: "6 weeks",
      level: "Beginner",
      format: "In-person & Virtual"
    },
    {
      title: "Investment Literacy for Teens",
      description: "Learn about stocks, bonds, and long-term wealth building",
      duration: "4 weeks", 
      level: "Intermediate",
      format: "Virtual"
    },
    {
      title: "Credit & Debt Management",
      description: "Understanding credit scores, loans, and responsible borrowing",
      duration: "3 weeks",
      level: "Beginner",
      format: "In-person"
    },
    {
      title: "Entrepreneurship & Business Finance",
      description: "Financial planning for young entrepreneurs",
      duration: "8 weeks",
      level: "Advanced", 
      format: "Hybrid"
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
            Comprehensive financial literacy education designed by youth, for youth. 
            Build the skills you need for financial independence.
          </p>
          <Button 
            className="bg-sunset-gradient hover:opacity-90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://forms.google.com', '_blank')}
          >
            Test Your Financial Literacy Now
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our <span className="bg-sunset-gradient bg-clip-text text-transparent">Courses</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="bg-black/50 border-white/10 hover:border-sunset-pink/50 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <BookOpen className="h-6 w-6 text-sunset-orange" />
                    <span className="text-sm text-sunset-pink font-semibold">{course.level}</span>
                  </div>
                  <CardTitle className="text-white">{course.title}</CardTitle>
                  <CardDescription className="text-gray-300">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {course.format}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Educator Portal */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="bg-sunset-gradient bg-clip-text text-transparent">Educator</span> Portal
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Access exclusive teaching resources, lesson plans, and curriculum guides.
          </p>
          
          <Card className="bg-gray-900/50 border-white/10 max-w-md mx-auto">
            <CardHeader>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Lock className="h-6 w-6 text-sunset-purple" />
                <FileText className="h-6 w-6 text-sunset-orange" />
              </div>
              <CardTitle className="text-white">Restricted Access</CardTitle>
              <CardDescription className="text-gray-300">
                Available only to verified educators with institutional email addresses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="outline" 
                className="w-full border-sunset-pink text-sunset-pink hover:bg-sunset-pink hover:text-white"
              >
                Request Educator Access
              </Button>
            </CardContent>
          </Card>
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

  );
};

export default Curriculum;
