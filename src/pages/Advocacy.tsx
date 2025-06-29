import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Scale, FileText, Calendar, Users, ExternalLink, Download, TrendingUp, Phone, Mail } from 'lucide-react';
import "../App.css";

const Advocacy = () => {
  const [selectedBill, setSelectedBill] = useState(null);
  const [showAllResearch, setShowAllResearch] = useState(false);

  const bills = [
    {
      id: 1,
      title: "An Act Relative to Personal Financial Literacy",
      number: "H.594",
      status: "In Committee",
      summary: "Requires all Massachusetts high school students to complete a personal financial literacy course before graduation. Also creates a Financial Literacy Trust Fund to support implementation, prioritize underserved communities, and fund teacher training.",
      sponsors: [
        { name: "Rep. Ryan Hamilton", party: "D", district: "15th Essex", email: "Ryan.Hamilton@mahouse.gov", phone: "(617) 722-2090" },
      ]
    },
    {
      id: 2,
      title: "Youth Banking Access Initiative",
      number: "S.1234",
      status: "Passed",
      summary: "Expands access to banking services for minors with parental consent. Removes barriers to opening savings accounts for teens 16+.",
      sponsors: [
        { name: "Sen. Maria Rodriguez", party: "D", district: "1st Essex", email: "maria.rodriguez@masenate.gov", phone: "(617) 722-1500" }
      ]
    },
    {
      id: 3,
      title: "Consumer Protection for Students",
      number: "H.7890",
      status: "Introduced",
      summary: "Enhanced protections against predatory lending targeting students. Requires additional disclosures for credit products marketed to students.",
      sponsors: [
        { name: "Rep. David Kim", party: "D", district: "8th Norfolk", email: "david.kim@mahouse.gov", phone: "(617) 722-2002" }
      ]
    },
    {
      id: 4,
      title: "Financial Literacy Assessment Standards",
      number: "S.2156",
      status: "In Committee",
      summary: "Establishes standardized assessment criteria for financial literacy education. Creates accountability measures for school districts.",
      sponsors: [
        { name: "Sen. Jennifer Walsh", party: "R", district: "2nd Plymouth", email: "jennifer.walsh@masenate.gov", phone: "(617) 722-1501" }
      ]
    },
    {
      id: 5,
      title: "Digital Financial Literacy Curriculum",
      number: "H.2847",
      status: "Introduced",
      summary: "Modernizes financial education to include cryptocurrency, digital payments, and online banking security for the digital age.",
      sponsors: [
        { name: "Rep. Ashley Brown", party: "D", district: "3rd Worcester", email: "ashley.brown@masenate.gov", phone: "(617) 722-1502" }
      ]
    }
  ];

  const researchArticles = [
    {
      title: "The Impact of Peer-Led Financial Education on Youth Outcomes",
      subheading: "Comprehensive analysis of peer education effectiveness in Massachusetts schools",
      author: "Project 57 Research Team",
      date: "Dec 2024",
      readingTime: "8 min read"
    },
    {
      title: "Legislative Barriers to Youth Financial Empowerment",
      subheading: "Identifying policy gaps that limit young people's financial independence",
      author: "Sarah Chen, Policy Analyst",
      date: "Nov 2024",
      readingTime: "12 min read"
    },
    {
      title: "State-by-State Financial Literacy Requirements Analysis",
      subheading: "Comparing Massachusetts standards with national best practices",
      author: "Policy Research Coalition",
      date: "Oct 2024",
      readingTime: "15 min read"
    },
    {
      title: "Youth Voice in Financial Policy: A Massachusetts Case Study",
      subheading: "How student advocacy shaped recent legislative victories",
      author: "Emma Rodriguez",
      date: "Oct 2024",
      readingTime: "6 min read"
    },
    {
      title: "Digital Financial Literacy: Preparing Youth for Tomorrow",
      subheading: "Addressing gaps in cryptocurrency and digital payment education",
      author: "Tech Policy Institute",
      date: "Sep 2024",
      readingTime: "10 min read"
    }
  ];

  const resources = [
    {
      title: "Lobbying 101 Guide",
      description: "Complete handbook for engaging with legislators",
      type: "PDF Guide"
    },
    {
      title: "Grassroots Organizing Toolkit",
      description: "Build community support for financial literacy initiatives", 
      type: "Resource Kit"
    },
    {
      title: "Email Templates & Scripts",
      description: "Pre-written communications for contacting representatives",
      type: "Templates"
    },
    {
      title: "Social Media Shareables",
      description: "Graphics and content for advocacy campaigns",
      type: "Media Kit"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Introduced': return 'bg-blue-500';
      case 'In Committee': return 'bg-yellow-500';
      case 'Passed': return 'bg-green-500';
      case 'Rejected': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const displayedArticles = showAllResearch ? researchArticles : researchArticles.slice(0, 3);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Legislative <span className="bg-sunset-gradient bg-clip-text text-transparent">Advocacy</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Track financial literacy legislation, access policy resources, and take action 
            to create systemic change in Massachusetts.
          </p>
        </div>
      </section>

      {/* Bill Tracker Carousel */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Bill <span className="bg-sunset-gradient bg-clip-text text-transparent">Tracker</span>
            </h2>
            <div className="text-sm text-gray-400 flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Powered by Billtrack50.com API
            </div>
          </div>
          
        <Carousel className="w-full">
  <CarouselContent className="-ml-2 md:-ml-4">
    {bills.map((bill, index) => (
      <CarouselItem key={bill.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
       <Card
  key={bill.id}
  className="
    bg-gray-800
    border-2
    border-transparent
    hover:border-orange-500
    transform
    hover:scale-105
    transition-all
    duration-300
    animate-fade-in
    shadow-md
    h-full
  "
>
     <CardHeader className="pb-3">
          <div className="flex items-start justify-between mb-2">
             <div className="flex-1">
<CardTitle className="text-white text-lg mb-1 text-left">
               {bill.title}
                     </CardTitle>
                          <p className="text-sunset-pink text-base mb-1">{bill.number}</p>
                        </div>
                        <Badge className={`${getStatusColor(bill.status)} text-white text-xs ml-2`}>
                          {bill.status}
                        </Badge>
                      </div>
                      <CardDescription className="text-gray-300 text-xs leading-snug">
                        {bill.summary}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-3">
                        <div className="flex gap-2">
                          <Button 
                            size="sm"
                            className="flex-1 bg-sunset-gradient hover:opacity-90 text-black font-semibold transition-all duration-300"
                            onClick={() => window.open('#', '_blank')}
                          >
                            View Full Text
                          </Button>
                          <Button 
                            size="sm"
                            variant="outline"
                            className="flex-1 border-sunset-purple text-sunset-purple hover:bg-sunset-purple hover:text-white transition-all duration-300"
                            onClick={() => setSelectedBill(bill)}
                          >
                            View Sponsors
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-gray-600 bg-black/50 hover:bg-gray-800" />
            <CarouselNext className="hidden md:flex -right-12 border-gray-600 bg-black/50 hover:bg-gray-800" />
          </Carousel>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our <span className="bg-sunset-gradient bg-clip-text text-transparent">Research</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {displayedArticles.map((article, index) => (
              <Card 
                key={index} 
                className="bg-gray-900/50 border-white/10 hover:border-sunset-purple/50 transition-all duration-300 animate-fade-in group hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-white text-lg font-semibold leading-tight mb-2">
                    {article.title}
                  </CardTitle>
                  <p className="text-gray-400 text-sm mb-3">
                    {article.subheading}
                  </p>
                  <div className="text-xs text-gray-500 space-y-1">
                    <div>By {article.author}</div>
                    <div className="flex justify-between">
                      <span>{article.date}</span>
                      <span>{article.readingTime}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button 
                    className="w-full bg-sunset-gradient hover:opacity-90 text-black font-semibold transition-all duration-300"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Read Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {!showAllResearch && (
            <div className="text-center">
              <Button 
                onClick={() => setShowAllResearch(true)}
                className="bg-sunset-gradient hover:opacity-90 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                Show All Research
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Civic Toolkit */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              Civic <span className="bg-sunset-gradient bg-clip-text text-transparent">Toolkit</span>
            </h2>
            <div className="w-24 h-1 bg-sunset-gradient mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="bg-black/50 border-white/10 hover:border-sunset-orange/50 transition-all duration-300 animate-fade-in group hover:scale-105" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-sunset-gradient rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-6 w-6 text-black" />
                  </div>
                  <CardTitle className="text-white text-center">
                    {resource.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-center">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-gray-700 px-3 py-1 rounded-full text-gray-300">
                      {resource.type}
                    </span>
                    <Button 
                      size="sm"
                      className="bg-sunset-gradient hover:opacity-90 text-black font-semibold transition-all duration-300"
                      onClick={() => window.open('#', '_blank')}
                    >
                      Access Resource
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Legislature Calendar */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Massachusetts <span className="bg-sunset-gradient bg-clip-text text-transparent">Legislature Calendar</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Stay informed about upcoming legislative sessions and committee meetings.
          </p>
          
          <Card className="bg-gray-900/50 border-white/10 hover:border-sunset-purple/50 transition-all duration-300 animate-fade-in">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-sunset-gradient rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-8 w-8 text-black" />
              </div>
              <CardTitle className="text-white">Upcoming Sessions</CardTitle>
              <CardDescription className="text-gray-300">
                Synced with the official Massachusetts State Government calendar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="bg-sunset-gradient hover:opacity-90 text-black font-semibold transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://malegislature.gov/Events', '_blank')}
              >
                View Full Calendar
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sponsors Side Panel */}
      {selectedBill && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-fade-in">
          <div className="fixed right-0 top-0 h-full w-full max-w-md bg-gray-900 border border-white/10 animate-slide-in-right">
            <div className="p-6 h-full overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">Sponsors & Contacts</h3>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedBill(null)}
                  className="text-gray-400 hover:text-white hover:bg-white/10"
                >
                  ✕
                </Button>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">{selectedBill.title}</h4>
                <p className="text-sunset-orange font-semibold">{selectedBill.number}</p>
                <Badge className={`${getStatusColor(selectedBill.status)} text-white text-xs mt-2`}>
                  {selectedBill.status}
                </Badge>
              </div>
              
              <div className="space-y-4">
                {selectedBill.sponsors.map((sponsor, index) => (
                  <div key={index} className="bg-black/50 p-4 rounded-lg border border-white/10">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="text-white font-semibold">{sponsor.name}</h5>
                      <Badge variant="outline" className="text-xs border-sunset-pink text-sunset-pink">
                        {sponsor.party}
                      </Badge>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{sponsor.district}</p>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-300 text-sm">
                        <Mail className="h-4 w-4 mr-2 text-sunset-pink" />
                        <a href={`mailto:${sponsor.email}`} className="hover:text-sunset-orange transition-colors">
                          {sponsor.email}
                        </a>
                      </div>
                      <div className="flex items-center text-gray-300 text-sm">
                        <Phone className="h-4 w-4 mr-2 text-sunset-pink" />
                        <a href={`tel:${sponsor.phone}`} className="hover:text-sunset-orange transition-colors">
                          {sponsor.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Advocacy;
