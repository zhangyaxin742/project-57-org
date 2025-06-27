
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Trophy, MapPin, Calendar, Clock, ExternalLink, Users, Download, Settings, Palette, FileText, DollarSign, Shield, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const Enterprise = () => {
  const [selectedFounder, setSelectedFounder] = useState(null);

  const pitchCompetitions = [
    {
      title: "MassChallenge Youth Innovation Challenge",
      description: "Statewide competition for innovative youth-led startups addressing social issues.",
      date: "March 15, 2024",
      time: "6:00 PM EST",
      location: "Virtual",
      status: "Applications Open",
      prize: "$50,000",
      buttonText: "Apply Now"
    },
    {
      title: "Boston Young Entrepreneurs Hackathon",
      description: "48-hour intensive hackathon to build solutions for local community challenges.",
      date: "April 12-14, 2024",
      time: "All Day",
      location: "Boston University",
      status: "Registration Open", 
      prize: "$25,000",
      buttonText: "Register Now"
    }
  ];

  const featuredFounders = [
    {
      id: 1,
      name: "Alex Chen",
      location: "Boston, MA",
      organization: "EcoClean Solutions",
      tagline: "built a startup fighting food waste at 16",
      photo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face",
      story: {
        title: "From High School Student to Social Impact Entrepreneur",
        content: "Alex started EcoClean Solutions after noticing how much food waste was generated at their high school cafeteria. What began as a simple composting initiative has now grown into a full-scale sustainable cleaning products company that has prevented over 10,000 pounds of food waste from entering landfills.",
        achievement: "Generated $50K revenue in first year",
        social: {
          linkedin: "#",
          twitter: "#",
          instagram: "#"
        }
      }
    },
    {
      id: 2,
      name: "Priya Patel",
      location: "Cambridge, MA", 
      organization: "TutorConnect",
      tagline: "built a peer-to-peer tutoring platform at 17",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      story: {
        title: "Connecting Students Through Education",
        content: "Priya recognized that many students struggled with subjects where their peers excelled. She created TutorConnect to bridge this gap, creating a platform where students can both teach and learn from each other, fostering a collaborative learning environment.",
        achievement: "Served 500+ students across Massachusetts",
        social: {
          linkedin: "#",
          twitter: "#",
          instagram: "#"
        }
      }
    },
    {
      id: 3,
      name: "Jordan Williams",
      location: "Springfield, MA",
      organization: "Fresh Farms Delivery",
      tagline: "connected urban communities with local farms at 18",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      story: {
        title: "Bridging the Gap Between Farms and Cities",
        content: "Jordan noticed that many urban communities lacked access to fresh, locally-grown produce. Fresh Farms Delivery creates direct connections between local farms and urban consumers, ensuring fresh produce reaches those who need it most while supporting local agriculture.",
        achievement: "Partnered with 15 local farms",
        social: {
          linkedin: "#",
          twitter: "#",
          instagram: "#"
        }
      }
    }
  ];

  const toolkitItems = [
    { text: "MVP Development Guides", color: "text-sunset-orange" },
    { text: "Pitch Deck Templates", color: "text-sunset-pink" },
    { text: "Logo & Design Resources", color: "text-sunset-purple" },
    { text: "Website Building Tools", color: "text-sunset-orange" },
    { text: "Legal Documentation Help", color: "text-sunset-pink" },
    { text: "Financial Planning Templates", color: "text-sunset-purple" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Youth <span className="bg-sunset-gradient bg-clip-text text-transparent">Enterprise</span>
          </h1>
          <p className="text-xl text-white max-w-4xl mx-auto mb-8">
            Supporting young entrepreneurs with the skills, mentorship, and resources needed to launch successful businesses and build economic opportunity
          </p>
        </div>
      </section>

      {/* Pitch Competitions & Hackathons */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Pitch Competitions & <span className="bg-sunset-gradient bg-clip-text text-transparent">Hackathons</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pitchCompetitions.map((competition, index) => (
              <Card key={index} className="bg-black/50 border-white/10 hover:border-sunset-orange/50 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Lightbulb className="h-6 w-6 text-sunset-orange" />
                      <Trophy className="h-5 w-5 text-sunset-pink" />
                    </div>
                    <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                      {competition.status}
                    </span>
                  </div>
                  <CardTitle className="text-white text-xl mb-2">
                    {competition.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-sm">
                    {competition.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      {competition.date}
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Clock className="h-4 w-4 mr-2" />
                      {competition.time}
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin className="h-4 w-4 mr-2" />
                      {competition.location}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="text-sunset-pink font-bold text-lg">
                      {competition.prize} Prize
                    </div>
                    <Button 
                      className="bg-sunset-gradient hover:opacity-90 text-black font-semibold transition-all duration-300 hover:scale-105 ripple-effect"
                      onClick={() => window.open('#', '_blank')}
                    >
                      {competition.buttonText}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Founders */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-sunset-gradient-subtle" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Featured <span className="bg-sunset-gradient bg-clip-text text-transparent">Founders</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredFounders.map((founder) => (
              <Card key={founder.id} className="bg-gray-900/80 border-sunset-gradient border-2 hover:scale-105 transition-all duration-300 cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-sunset-gradient p-1">
                    <img 
                      src={founder.photo} 
                      alt={founder.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-white text-xl">{founder.name}</CardTitle>
                  <div className="flex items-center justify-center text-gray-400 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    {founder.location}
                  </div>
                  <div className="text-sunset-pink font-semibold">{founder.organization}</div>
                  <CardDescription className="text-gray-300 text-sm italic">
                    {founder.tagline}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full bg-transparent border border-sunset-pink text-sunset-pink hover:bg-sunset-pink hover:text-black transition-all duration-300 ripple-effect"
                    onClick={() => setSelectedFounder(founder)}
                  >
                    View Story
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              className="bg-transparent border border-sunset-orange text-sunset-orange hover:bg-sunset-orange hover:text-black transition-all duration-300 hover:scale-105"
              onClick={() => window.open('#', '_blank')}
            >
              Nominate a Founder →
            </Button>
          </div>
        </div>
      </section>

      {/* Startup Toolkit */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <Settings className="h-8 w-8 text-sunset-orange" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Startup <span className="bg-sunset-gradient bg-clip-text text-transparent">Toolkit</span>
                </h2>
              </div>
              
              <p className="text-gray-300 text-lg mb-8">
                Everything you need to turn your idea into a successful business, from concept to launch.
              </p>

              <div className="space-y-4 mb-8">
                {toolkitItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${item.color.replace('text-', 'bg-')}`} />
                    <span className="text-white">{item.text}</span>
                  </div>
                ))}
              </div>

              <Button 
                className="bg-sunset-gradient hover:opacity-90 text-black font-semibold transition-all duration-300 hover:scale-105"
                onClick={() => window.open('#', '_blank')}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resources
              </Button>
            </div>

            <div className="lg:col-span-1">
              <Card className="bg-gray-800/50 border-white/10 hover:border-sunset-purple/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-sunset-purple" />
                    Looking for more?
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Join the Project 57 Discord community for real-time support, networking, and collaboration!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full bg-sunset-gradient hover:opacity-90 text-black font-semibold ripple-effect"
                    onClick={() => window.open('#', '_blank')}
                  >
                    I'm In!
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story Overlay */}
      {selectedFounder && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-white/10 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <img 
                    src={selectedFounder.photo} 
                    alt={selectedFounder.name}
                    className="w-16 h-16 rounded-full border-2 border-sunset-gradient p-0.5"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white">{selectedFounder.name}</h3>
                    <p className="text-sunset-pink">{selectedFounder.organization}</p>
                    <div className="flex items-center text-gray-400 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {selectedFounder.location}
                    </div>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  className="text-white hover:text-sunset-pink"
                  onClick={() => setSelectedFounder(null)}
                >
                  ✕
                </Button>
              </div>

              <h4 className="text-2xl font-bold text-white mb-4">{selectedFounder.story.title}</h4>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">{selectedFounder.story.content}</p>
              
              <div className="bg-sunset-gradient-subtle p-4 rounded-lg mb-6">
                <p className="text-sunset-pink font-semibold">
                  🏆 {selectedFounder.story.achievement}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-gray-400">Connect:</span>
                <div className="flex gap-3">
                  <a href={selectedFounder.story.social.linkedin} className="text-sunset-pink hover:text-sunset-orange transition-colors">
                    LinkedIn
                  </a>
                  <a href={selectedFounder.story.social.twitter} className="text-sunset-pink hover:text-sunset-orange transition-colors">
                    Twitter
                  </a>
                  <a href={selectedFounder.story.social.instagram} className="text-sunset-pink hover:text-sunset-orange transition-colors">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Enterprise;
