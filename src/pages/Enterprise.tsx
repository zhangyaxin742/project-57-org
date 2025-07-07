import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Trophy, Calendar, ExternalLink, MapPin, Users } from 'lucide-react';
import { useState } from 'react';

const Enterprise = () => {
  const [selectedFounder, setSelectedFounder] = useState(null);

  const competitions = [
    {
      title: "Tech Innovation Hackathon",
      time: "March 15-17, 2024 | 9:00 AM - 6:00 PM",
      location: "Boston, MA",
      prize: "$5,000",
      status: "Applications Open",
      description: "48-hour hackathon focused on fintech solutions"
    },
    {
      title: "Young Entrepreneurs Pitch Night",
      time: "April 30, 2024 | 7:00 PM - 9:30 PM", 
      location: "Virtual",
      prize: "$2,500",
      status: "Registration Open",
      description: "Present your business idea to a panel of industry experts"
    },
    {
      title: "Climate Action Challenge",
      time: "February 28, 2024 | 2:00 PM - 5:00 PM",
      location: "Cambridge, MA",
      prize: "$10,000",
      status: "Deadline Approaching",
      description: "Sustainability-focused innovation competition"
    }
  ];

  const featuredFounders = [
    {
      name: "Maya Chen",
      location: "San Francisco, CA",
      organization: "EcoTech Solutions",
      tagline: "Building sustainable tech for tomorrow",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9b9c36b?w=150&h=150&fit=crop&crop=face",
      story: "Maya started EcoTech Solutions at age 17 to address environmental challenges through innovative technology. Her company develops AI-powered systems for waste reduction and energy optimization.",
      achievements: [
        "Raised $500K in seed funding",
        "Deployed solutions in 15+ cities",
        "Winner of Global Climate Tech Award 2024",
        "Featured in Forbes 30 Under 30"
      ],
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com"
      }
    },
    {
      name: "Jordan Williams",
      location: "Boston, MA",
      organization: "HealthBridge",
      tagline: "Connecting communities to better healthcare",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      story: "Jordan founded HealthBridge to bridge the gap between underserved communities and quality healthcare. The platform connects patients with local health resources and affordable care options.",
      achievements: [
        "Served 10,000+ patients in first year",
        "Partnered with 50+ healthcare providers",
        "Received MIT Innovation Award",
        "Expanded to 3 states"
      ],
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Aisha Patel",
      location: "New York, NY",
      organization: "EduConnect",
      tagline: "Democratizing access to quality education",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      story: "Aisha created EduConnect to provide personalized learning experiences for students in underserved areas. Her platform uses AI to adapt to individual learning styles and needs.",
      achievements: [
        "Impacted 25,000+ students nationwide",
        "Raised $1M in Series A funding",
        "TechCrunch Startup of the Year finalist",
        "Deployed in 100+ schools"
      ],
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com"
      }
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

      {/* Pitch Competitions & Hackathons */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3">
            <Trophy className="h-8 w-8 text-sunset-orange" />
            Pitch <span className="bg-sunset-gradient bg-clip-text text-transparent">Competitions & Hackathons</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitions.map((competition, index) => (
              <Card key={index} className="bg-black/50 border-white/10 hover:border-sunset-orange/50 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                      competition.status === 'Deadline Approaching' ? 'bg-red-500 text-white' :
                      competition.status === 'Applications Open' ? 'bg-green-500 text-white' :
                      'bg-sunset-gradient text-black'
                    }`}>
                      {competition.status}
                    </span>
                    <span className="bg-sunset-gradient bg-clip-text text-transparent font-bold text-lg">
                      {competition.prize}
                    </span>
                  </div>
                  <CardTitle className="text-white text-xl mb-2">
                    {competition.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 mb-4">
                    {competition.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-gray-400">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{competition.time}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{competition.location}</span>
                  </div>
                  <Button 
                    className="w-full bg-sunset-gradient hover:opacity-90 text-black font-semibold mt-4"
                    onClick={() => window.open('#', '_blank')}
                  >
                    {competition.status === 'Applications Open' ? 'Apply Now' : 'Register Now'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Founders */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="bg-sunset-gradient bg-clip-text text-transparent">Founders</span>
            </h2>
            <p className="text-xl text-gray-300">
              Meet the inspiring young entrepreneurs making a difference
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredFounders.map((founder, index) => (
              <Card key={index} className="bg-gray-900/50 border-white/10 hover:border-sunset-purple/50 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={founder.image} alt={founder.name} />
                    <AvatarFallback>{founder.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-white text-xl">{founder.name}</CardTitle>
                  <div className="flex items-center justify-center text-gray-400 text-sm mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {founder.location}
                  </div>
                  <CardDescription className="text-sunset-pink font-semibold">
                    {founder.organization}
                  </CardDescription>
                  <p className="text-gray-300 text-sm mt-2">{founder.tagline}</p>
                </CardHeader>
                <CardContent>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-sunset-gradient hover:opacity-90 text-black font-semibold">
                        View Story
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold mb-4">
                          {founder.name}'s Story
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <Avatar className="w-16 h-16">
                            <AvatarImage src={founder.image} alt={founder.name} />
                            <AvatarFallback>{founder.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="text-xl font-semibold">{founder.name}</h3>
                            <p className="text-sunset-pink">{founder.organization}</p>
                            <div className="flex items-center text-gray-400 text-sm">
                              <MapPin className="h-4 w-4 mr-1" />
                              {founder.location}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed">{founder.story}</p>
                        
                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-sunset-orange">Key Achievements</h4>
                          <ul className="space-y-2">
                            {founder.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-sunset-pink mr-2">•</span>
                                <span className="text-gray-300">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-sunset-orange">Connect</h4>
                          <div className="flex gap-4">
                            {founder.social.twitter && (
                              <a 
                                href={founder.social.twitter} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-sunset-orange hover:text-sunset-pink transition-colors flex items-center gap-1"
                              >
                                Twitter <ExternalLink className="h-4 w-4" />
                              </a>
                            )}
                            {founder.social.linkedin && (
                              <a 
                                href={founder.social.linkedin} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-sunset-orange hover:text-sunset-pink transition-colors flex items-center gap-1"
                              >
                                LinkedIn <ExternalLink className="h-4 w-4" />
                              </a>
                            )}
                            {founder.social.instagram && (
                              <a 
                                href={founder.social.instagram} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-sunset-orange hover:text-sunset-pink transition-colors flex items-center gap-1"
                              >
                                Instagram <ExternalLink className="h-4 w-4" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              className="bg-sunset-gradient hover:opacity-90 text-black font-semibold px-8 py-3"
              onClick={() => window.open('https://forms.google.com', '_blank')}
            >
              Nominate a Founder →
            </Button>
          </div>
        </div>
      </section>

      {/* Discord Community */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-black/50 border-white/10 text-center">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white mb-4">
                Looking for more?
              </CardTitle>
              <CardDescription className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join the Project 57 Discord community to connect with fellow entrepreneurs, mentors, and access exclusive resources!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="bg-sunset-gradient hover:opacity-90 text-black font-semibold px-8 py-3 text-lg"
                onClick={() => window.open('https://discord.gg/project57', '_blank')}
              >
                I'm In! <Users className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Enterprise;
