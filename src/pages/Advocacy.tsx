import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { FileText, Calendar, Users, ExternalLink, TrendingUp, Phone, Mail } from 'lucide-react';
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
      summary: "Requires all Massachusetts high school students to complete a personal financial literacy course before graduation. Also creates a Financial Literacy Trust Fund to support implementation.",
      sponsors: [
        { name: "Rep. Ryan Hamilton", party: "D", district: "15th Essex", email: "Ryan.Hamilton@mahouse.gov", phone: "(617) 722-2090" },
      ]
    },
    {
      id: 2,
      title: "An Act Requiring Financial Education in Schools",
      number: "H.636",
      status: "In Committee",
      summary: "Creates a Financial Literacy Trust Fund to support education in Massachusetts schools, with funding from both public and private sources alongside annual implementation reports.",
      sponsors: [
        { name: "Rep. Kate Lipper-Garabedian", party: "D", district: "32nd Middlesex", email: "kate.lipper-garabedian@mahouse.gov", phone: "(617) 722-2960" },
 { name: "Rep. Steven Ultrino", party: "D", district: "33rd Middlesex", email: "Steven.Ultrino@mahouse.gov", phone: "(617) 722-2877" },
{ name: "Rep. Mindy Domb", party: "D", district: "3rd Hampshire", email: "mindy.domb@mahouse.gov", phone: "(617) 722-2060" },
{ name: "Sen. James Eldridge", party: "D", district: "Middlesex and Worcester", email: "James.Eldridge@masenate.gov", phone: "(617) 722-1120" },
{ name: "Rep. Russell Holmes", party: "D", district: "6th Suffolk", email: "Russell.Holmes@mahouse.gov", phone: "(617) 722-2220" },
{ name: "Rep. Mark Sylvia", party: "D", district: "10th Bristol", email: "Mark.Sylvia@mahouse.gov", phone: "(617) 722-2400" },
      ]
    },
    {
      id: 3,
      title: "An Act Relative to Higher Education Financial Literacy Counseling",
      number: "H.1444",
      status: "Introduced",
      summary: "Authorizes the Board of Higher Education to require all public colleges in MA to provide financial literacy counseling to incoming students. Also mandates that colleges give accepted applicants a standardized college financing plan.",
      sponsors: [
  { name: "Rep. Kimberly Ferguson", party: "R", district: "1st Worcester", email: "Kimberly.Ferguson@mahouse.gov", phone: "(617) 722-2100" },
  { name: "Rep. Paul Frost", party: "R", district: "7th Worcester", email: "Paul.Frost@mahouse.gov", phone: "(617) 722-2100" },
  { name: "Rep. Bradley Jones", party: "R", district: "20th Middlesex", email: "Bradley.Jones@mahouse.gov", phone: "(617) 722-2100" },
  { name: "Rep. Hannah Kane", party: "R", district: "11th Worcester", email: "Hannah.Kane@mahouse.gov", phone: "(617) 722-2810" },
  { name: "Rep. Todd Smola", party: "R", district: "1st Hampden", email: "Todd.Smola@mahouse.gov", phone: "(617) 722-2100" },
  { name: "Rep. Alyson Sullivan-Almeida", party: "R", district: "7th Plymouth", email: "alyson.sullivan@mahouse.gov", phone: "(617) 722-2488" },
  { name: "Rep. Kelly Pease", party: "R", district: "4th Hampden", email: "Kelly.Pease@mahouse.gov", phone: "(413) 875-8787" }
]

    },
    {
      id: 4,
      title: "An Act Relative to Student Financial Literacy",
      number: "S.423",
      status: "Introduced",
      summary: "Establishes financial literacy as a required subject in all MA public schools and mandates integration of financial literacy standards into existing courses like math, social sciences, and business. Instruction must cover specified topics, with funding available through the Economic Empowerment Trust Fund.",
      sponsors: [
      { name: "Sen. Patrick O'Connor", party: "R", district: "First Plymouth and Norfolk", email: "Patrick.OConnor@masenate.gov", phone: "(617) 722-1646" },
      { name: "Sen. Patricia Jehlen", party: "D", district: "Second Middlesex", email: "Patricia.Jehlen@masenate.gov", phone: "(617) 722-1578" }
    ]
    },
    {
      id: 5,
      title: "An Act Requiring Financial Education in Schools",
      number: "H.421",
      status: "In Committee",
      summary: "Establishes a Financial Literacy Trust Fund to support mandatory financial literacy education across MA schools. Expands standards to cover topics from budgeting and asset protection to cryptocurrencies, effective the following academic year.",
      sponsors: [
      { name: "Sen. James Eldridge", party: "D", district: "Middlesex and Worcester", email: "James.Eldridge@masenate.gov", phone: "(617) 722-1120" },
      { name: "Sen. Patrick O'Connor", party: "R", district: "First Plymouth and Norfolk", email: "Patrick.OConnor@masenate.gov", phone: "(617) 722-1646" },
      { name: "Sen. John Keenan", party: "D", district: "Norfolk and Plymouth", email: "John.Keenan@masenate.gov", phone: "(617) 722-1494" },
      { name: "Deborah Goldberg", party: "State Treasurer", district: "", email: "dgoldberg@tre.state.ma.us", phone: "617-367-6900" }
    ]
    }, 
    {
      id: 6, 
      title: "An Act Requiring Financial Education in Schools", 
      number: "H.46", 
      status: "In Committee", 
      summary: "g", 
      sponsors: [
        { name: "Deborah Goldberg", party: "State Treasurer", district: "", email: "dgoldberg@tre.state.ma.us", phone: "617-367-6900" },
      ]
    }, 
    {
      id: 7, 
      title: "An Act Relative to the Strengthening of Financial Literacy Throughout the Commonwealth", 
      number: "H.627", 
      status: "In Committee", 
      summary: "h", 
      sponsors: [
     { name: "Rep. John Lawn", party: "D", district: "10th Middlesex", email: "John.Lawn@mahouse.gov", phone: "(617) 722-2430" },
      ]
    },
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
              {bills.map((bill) => (
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
                        <div className="flex-1 w-full">
                          <CardTitle className="text-white text-lg mb-1 block w-full">
                            {bill.title}
                          </CardTitle>
                          <p className="text-sunset-pink text-sm mb-1 block w-full">
                            {bill.number}
                          </p>
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
