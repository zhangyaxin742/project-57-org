import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Trophy, DollarSign, Users, Calendar, ExternalLink, Star, MapPin, Tools, ArrowRight, Download } from 'lucide-react';
import { useState } from 'react';

const Enterprise = () => {
  const [selectedFounder, setSelectedFounder] = useState(null);

  const competitions = [
    {
      title: "MassChallenge Youth Pitch Competition",
      description: "Statewide competition for innovative youth-led startups with mentorship and funding opportunities.",
      date: "March 15, 2024",
      time: "2:00 PM EST",
      location: "Virtual",
      prize: "$50,000",
      status: "Applications Open",
      type: "competition"
    },
    {
      title: "Boston Young Entrepreneurs Hackathon",
      description: "48-hour intensive hackathon to build solutions for local community challenges.",
      date: "April 12-14, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Boston University",
      prize: "$25,000",
      status: "Registration Open",
      type: "hackathon"
    }
  ];

  const featuredFounders = [
    {
      name: "Alex Martinez",
      age: 17,
      location: "Cambridge, MA",
      organization: "EcoClean Solutions",
      tagline: "built a startup fighting food waste at 16",
      photo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face",
      story: {
        title: "From High School Project to $50K Revenue",
        content: "Alex started EcoClean Solutions as a chemistry project and turned it into a thriving business...",
        achievements: ["$50K first year revenue", "10+ retail partnerships", "Featured in Boston Globe"]
      }
    },
    {
      name: "Priya Patel",
      age: 16,
      location: "Boston, MA", 
      organization: "TutorConnect",
      tagline: "connected 500+ students through peer tutoring",
      photo: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face",
      story: {
        title: "Building Bridges Through Education",
        content: "Priya's platform has revolutionized how students connect for academic support...",
        achievements: ["500+ students served", "15 school partnerships", "Student Choice Award 2023"]
      }
    },
    {
      name: "Jordan Williams",
      age: 18,
      location: "Springfield, MA",
      organization: "Fresh Farms Delivery",
      tagline: "partnered with 15 local farms to serve urban communities",
      photo: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=400&fit=crop&crop=face",
      story: {
        title: "Connecting Farms to Communities",
        content: "Jordan's delivery service bridges the gap between local farms and urban consumers...",
        achievements: ["15 farm partnerships", "200+ weekly deliveries", "Sustainability Award Winner"]
      }
    }
  ];

  const toolkitItems = [
    { title: "MVP Development Guide", color: "text-sunset-orange" },
    { title: "Pitch Deck Templates", color: "text-sunset-pink" },
    { title: "Logo & Design Resources", color: "text-sunset-purple" },
    { title: "Website Building Tools", color: "text-blue-400" },
    { title: "Legal Documentation", color: "text-green-400" },
    { title: "Financial Planning Sheets", color: "text-yellow-400" }
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
            {competitions.map((event, index) => (
              <Card key={index} className="bg-black/50 border-white/10 hover:border-sunset-orange/50 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {event.type === 'competition' ? 
                        <Trophy className="h-6 w-6 text-sunset-orange" /> : 
                        <Lightbulb className="h-6 w-6 text-sunset-pink" />
                      }
                      <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                        event.status === 'Applications Open' ? 'bg-green-500 text-white' :
                        'bg-sunset-gradient text-black'
                      }`}>
                        {event.status}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-sunset-pink font-bold">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {event.prize}
                      </div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-white text-xl mb-2">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 mb-4">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{event.date} • {event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-sunset-gradient hover:opacity-90 text-black font-semibold ripple-effect"
                  >
                    {event.type === 'competition' ? 'Apply Now' : 'Register Now'}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Founders */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sunset-orange/5 via-sunset-pink/5 to-sunset-purple/5 animate-pulse"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Featured <span className="bg-sunset-gradient bg-clip-text text-transparent">Founders</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredFounders.map((founder, index) => (
              <Card key={index} className="bg-gray-900/50 border-2 border-transparent hover:border-sunset-gradient transition-all duration-300 hover:scale-105 group">
                <CardHeader className="text-center">
                  <div className="relative mx-auto mb-4">
                    <img 
                      src={founder.photo} 
                      alt={founder.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-sunset-gradient"
                    />
                    <div className="absolute -top-1 -right-1">
                      <Star className="h-6 w-6 text-sunset-pink fill-current" />
                    </div>
                  </div>
                  <CardTitle className="text-white text-lg">{founder.name}</CardTitle>
                  <div className="flex items-center justify-center text-gray-400 text-sm mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {founder.location}
                  </div>
                  <CardDescription className="text-sunset-pink font-semibold">
                    {founder.organization}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 text-sm mb-6 italic">
                    "{founder.tagline}"
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-sunset-pink text-sunset-pink hover:bg-sunset-pink hover:text-white ripple-effect"
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
              variant="ghost" 
              className="text-sunset-pink hover:text-white hover:bg-sunset-pink/20 group"
            >
              Nominate a Founder 
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Startup Toolkit */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Toolkit Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <Tools className="h-8 w-8 text-sunset-orange" />
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Startup <span className="bg-sunset-gradient bg-clip-text text-transparent">Toolkit</span>
                  </h2>
                  <p className="text-gray-300 mt-2">
                    Everything you need to build, launch, and scale your startup from idea to impact.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                {toolkitItems.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${item.color.replace('text-', 'bg-')}`}></div>
                    <span className="text-white">{item.title}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className="bg-sunset-gradient hover:opacity-90 text-black font-semibold px-8"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resources
              </Button>
            </div>
            
            {/* Discord Community Card */}
            <div className="lg:col-span-1">
              <Card className="bg-gray-800/50 border-white/10 h-full">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Looking for more?</CardTitle>
                  <CardDescription className="text-gray-300">
                    Join the Project 57 Discord community for real-time support, networking, and exclusive opportunities!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full bg-sunset-gradient hover:opacity-90 text-black font-semibold ripple-effect"
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
          <Card className="bg-gray-900 border-white/20 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img 
                    src={selectedFounder.photo} 
                    alt={selectedFounder.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-sunset-gradient"
                  />
                  <div>
                    <CardTitle className="text-white text-xl">{selectedFounder.name}</CardTitle>
                    <CardDescription className="text-sunset-pink">{selectedFounder.organization}</CardDescription>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedFounder(null)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <h3 className="text-2xl font-bold text-white">{selectedFounder.story.title}</h3>
              <p className="text-gray-300 leading-relaxed">{selectedFounder.story.content}</p>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                <div className="space-y-2">
                  {selectedFounder.story.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-sunset-pink"></div>
                      <span className="text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center space-x-4 pt-4 border-t border-white/10">
                <Button variant="ghost" size="sm" className="text-sunset-pink hover:text-white">
                  LinkedIn
                </Button>
                <Button variant="ghost" size="sm" className="text-sunset-pink hover:text-white">
                  Twitter
                </Button>
                <Button variant="ghost" size="sm" className="text-sunset-pink hover:text-white">
                  Instagram
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Mentorship Program */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Mentorship <span className="bg-sunset-gradient bg-clip-text text-transparent">Matching</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Connect with experienced entrepreneurs and business leaders who can guide your journey.
          </p>
          
          <Card className="bg-gray-900/50 border-white/10 max-w-md mx-auto">
            <CardHeader>
              <Users className="h-12 w-12 text-sunset-orange mx-auto mb-4" />
              <CardTitle className="text-white">1-on-1 Mentorship</CardTitle>
              <CardDescription className="text-gray-300 space-y-2">
                <p>• Industry-specific guidance</p>
                <p>• Business plan development</p>
                <p>• Networking opportunities</p>
                <p>• Monthly check-ins</p>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full bg-sunset-gradient hover:opacity-90 text-black font-semibold"
              >
                Join Mentorship Program
              </Button>
              <p className="text-xs text-gray-400 mt-2">
                Program details coming soon
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Enterprise;
