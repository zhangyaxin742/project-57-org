import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, FileText, Users, ExternalLink, Calendar, TrendingUp } from 'lucide-react';

const Advocacy = () => {
  const [selectedBill, setSelectedBill] = useState(null);
  const [showAllResearch, setShowAllResearch] = useState(false);

  const bills = [
    {
      id: 1,
      title: "Student Financial Literacy Education Act",
      number: "H.3456",
      status: "In Committee",
      progress: 60,
      summary: "Requires comprehensive financial literacy education in all Massachusetts high schools.",
      sponsors: [
        { name: "Rep. Sarah Johnson", party: "D", district: "5th Suffolk", email: "sarah.johnson@mahouse.gov", phone: "(617) 722-2000" },
        { name: "Rep. Michael Chen", party: "D", district: "12th Middlesex", email: "michael.chen@mahouse.gov", phone: "(617) 722-2001" }
      ]
    },
    {
      id: 2,
      title: "Youth Banking Access Initiative",
      number: "S.1234",
      status: "Passed",
      progress: 100,
      summary: "Expands access to banking services for minors with parental consent.",
      sponsors: [
        { name: "Sen. Maria Rodriguez", party: "D", district: "1st Essex", email: "maria.rodriguez@masenate.gov", phone: "(617) 722-1500" }
      ]
    },
    {
      id: 3,
      title: "Consumer Protection for Students",
      number: "H.7890",
      status: "Introduced",
      progress: 25,
      summary: "Enhanced protections against predatory lending targeting students.",
      sponsors: [
        { name: "Rep. David Kim", party: "D", district: "8th Norfolk", email: "david.kim@mahouse.gov", phone: "(617) 722-2002" }
      ]
    },
    {
      id: 4,
      title: "Financial Literacy Assessment Standards",
      number: "S.2156",
      status: "In Committee",
      progress: 45,
      summary: "Establishes standardized assessment criteria for financial literacy education.",
      sponsors: [
        { name: "Sen. Jennifer Walsh", party: "R", district: "2nd Plymouth", email: "jennifer.walsh@masenate.gov", phone: "(617) 722-1501" }
      ]
    },
    {
      id: 5,
      title: "Digital Financial Literacy Curriculum",
      number: "H.2847",
      status: "Introduced",
      progress: 20,
      summary: "Modernizes financial education to include cryptocurrency and digital payments.",
      sponsors: [
        { name: "Rep. Ashley Brown", party: "D", district: "3rd Worcester", email: "ashley.brown@mahouse.gov", phone: "(617) 722-1502" }
      ]
    }
  ];

  const researchArticles = [
    {
      title: "The Impact of Peer-Led Financial Education",
      subheading: "Comprehensive analysis of peer education effectiveness.",
      author: "Project 57 Research Team",
      date: "Dec 2024",
      readingTime: "8 min read"
    },
    {
      title: "Legislative Barriers to Youth Financial Empowerment",
      subheading: "Identifying policy gaps limiting financial independence.",
      author: "Sarah Chen, Policy Analyst",
      date: "Nov 2024",
      readingTime: "12 min read"
    },
    {
      title: "State-by-State Requirements Analysis",
      subheading: "Comparing Massachusetts standards with national best practices.",
      author: "Policy Research Coalition",
      date: "Oct 2024",
      readingTime: "15 min read"
    }
  ];

  const resources = [
    {
      title: "Lobbying 101 Guide",
      description: "Complete handbook for engaging with legislators.",
      type: "PDF Guide"
    },
    {
      title: "Grassroots Organizing Toolkit",
      description: "Build community support for financial literacy.",
      type: "Resource Kit"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Introduced": return "bg-blue-500";
      case "In Committee": return "bg-yellow-500";
      case "Passed": return "bg-green-500";
      case "Rejected": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-black to-gray-900 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Legislative <span className="bg-sunset-gradient bg-clip-text text-transparent">Advocacy</span>
          </h1>
          <p className="text-xl text-gray-300">
            Track legislation and connect with policymakers to drive change in Massachusetts.
          </p>
        </div>
      </section>

      {/* Bill Tracker Carousel */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Bill Tracker</h2>

          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {bills.map((bill) => (
                <CarouselItem key={bill.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-gray-900 border border-gray-800 hover:border-brand-orange transition-all duration-300 hover:scale-105 h-full">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-lg font-bold">{bill.title}</CardTitle>
                        <Badge className={`${getStatusColor(bill.status)} text-white text-xs`}>{bill.status}</Badge>
                      </div>
                      <p className="text-brand-orange font-semibold text-sm mb-2">{bill.number}</p>
                      <p className="text-gray-300 text-sm">{bill.summary}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-2 mt-4">
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-sunset hover:opacity-90 text-white font-medium transition-all duration-300"
                          onClick={() => window.open('#', '_blank')}
                        >
                          View Full Text
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800 ripple-effect"
                          onClick={() => setSelectedBill(bill)}
                        >
                          View Sponsors
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-gray-600 bg-black hover:bg-gray-800" />
            <CarouselNext className="hidden md:flex -right-12 border-gray-600 bg-black hover:bg-gray-800" />
          </Carousel>
        </div>
      </section>

      {/* Sponsors Side Panel */}
      {selectedBill && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed right-0 top-0 h-full w-full max-w-md bg-gray-900 border-l border-gray-800 animate-slide-in-right">
            <div className="p-6 overflow-y-auto h-full">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Sponsors & Contacts</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedBill(null)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </Button>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-1">{selectedBill.title}</h4>
                <p className="text-brand-orange font-semibold">{selectedBill.number}</p>
              </div>
              <div className="space-y-4">
                {selectedBill.sponsors.map((sponsor, index) => (
                  <div key={index} className="bg-black p-4 rounded-lg border border-gray-800">
                    <div className="flex justify-between mb-1">
                      <h5 className="font-semibold">{sponsor.name}</h5>
                      <Badge variant="outline" className="text-xs">{sponsor.party}</Badge>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{sponsor.district}</p>
                    <div className="space-y-1">
                      <div className="flex items-center text-gray-300 text-sm">
                        <Mail className="h-4 w-4 mr-2" />
                        <a href={`mailto:${sponsor.email}`} className="hover:text-brand-orange">{sponsor.email}</a>
                      </div>
                      <div className="flex items-center text-gray-300 text-sm">
                        <Phone className="h-4 w-4 mr-2" />
                        <a href={`tel:${sponsor.phone}`} className="hover:text-brand-orange">{sponsor.phone}</a>
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
