
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Trophy, DollarSign, Users, Calendar, ExternalLink, Star, MapPin } from 'lucide-react';

const Enterprise = () => {
  const competitions = [
    {
      title: "MassChallenge Youth Pitch Competition",
      deadline: "March 15, 2024",
      prize: "$50,000",
      status: "Applications Open",
      description: "Statewide competition for innovative youth-led startups"
    },
    {
      title: "Boston Young Entrepreneurs Showcase",
      deadline: "April 30, 2024", 
      prize: "$25,000",
      status: "Registration Open",
      description: "Present your business idea to a panel of industry experts"
    },
    {
      title: "Harvard Innovation Challenge",
      deadline: "February 28, 2024",
      prize: "$75,000",
      status: "Deadline Approaching",
      description: "Cross-industry innovation competition for students"
    }
  ];

  const featuredBusinesses = [
    {
      name: "EcoClean Solutions",
      founder: "Alex Martinez, 17",
      location: "Cambridge, MA",
      description: "Sustainable cleaning products made from recycled materials",
      achievement: "Generated $50K revenue in first year"
    },
    {
      name: "TutorConnect",
      founder: "Priya Patel, 16", 
      location: "Boston, MA",
      description: "Peer-to-peer tutoring platform connecting students",
      achievement: "Served 500+ students across Massachusetts"
    },
    {
      name: "Fresh Farms Delivery",
      founder: "Jordan Williams, 18",
      location: "Springfield, MA", 
      description: "Local farm produce delivery service for urban communities",
      achievement: "Partnered with 15 local farms"
    }
  ];

  const grantOpportunities = [
    {
      title: "Youth Entrepreneur Seed Grant",
      amount: "Up to $10,000",
      deadline: "Rolling Applications",
      focus: "Early-stage business development"
    },
    {
      title: "Social Impact Startup Fund",
      amount: "Up to $25,000", 
      deadline: "Quarterly Review",
      focus: "Businesses addressing social issues"
    },
    {
      title: "Tech Innovation Grant",
      amount: "Up to $15,000",
      deadline: "Annual Competition",
      focus: "Technology-driven solutions"
    }
  ];

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

      {/* Pitch Competitions */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Pitch <span className="bg-sunset-gradient bg-clip-text text-transparent">Competitions</span>
          </h2>
          
          <div className="space-y-6">
            {competitions.map((competition, index) => (
              <Card key={index} className="bg-black/50 border-white/10 hover:border-sunset-orange/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-white flex items-center gap-3 mb-2">
                        <Trophy className="h-5 w-5 text-sunset-orange" />
                        {competition.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300">
                        {competition.description}
                      </CardDescription>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                      competition.status === 'Deadline Approaching' ? 'bg-red-500 text-white' :
                      competition.status === 'Applications Open' ? 'bg-green-500 text-white' :
                      'bg-sunset-gradient text-black'
                    }`}>
                      {competition.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center text-sunset-pink">
                        <DollarSign className="h-4 w-4 mr-1" />
                        <span className="font-semibold">{competition.prize} Prize</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Deadline: {competition.deadline}</span>
                      </div>
                    </div>
                    <Button 
                      className="bg-sunset-gradient hover:opacity-90 text-black font-semibold"
                      onClick={() => window.open('#', '_blank')}
                    >
                      Apply Now
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Businesses */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Featured <span className="bg-sunset-gradient bg-clip-text text-transparent">Businesses</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBusinesses.map((business, index) => (
              <Card key={index} className="bg-gray-900/50 border-white/10 hover:border-sunset-purple/50 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="h-5 w-5 text-sunset-orange" />
                    <Star className="h-4 w-4 text-sunset-pink" />
                  </div>
                  <CardTitle className="text-white">{business.name}</CardTitle>
                  <CardDescription className="text-sunset-pink">
                    Founded by {business.founder}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-300 text-sm">{business.description}</p>
                  <div className="flex items-center text-gray-400 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    {business.location}
                  </div>
                  <div className="pt-2 border-t border-white/10">
                    <p className="text-sunset-pink text-sm font-semibold">
                      🏆 {business.achievement}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

  );
};

export default Enterprise;
