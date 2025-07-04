
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Scale, FileText, Calendar, Users, ExternalLink, Download, TrendingUp, Phone, Mail } from 'lucide-react';

const Advocacy = () => {
  const [selectedBill, setSelectedBill] = useState(null);

const bills = [
  {
    id: 1,
    title: "An Act Requiring Financial Education in Schools",
    number: "H.46",
    summary:
      "Requires comprehensive financial literacy education in all Massachusetts high schools. Establishes minimum curriculum standards and teacher certification requirements.",
    status: "In Committee",
    url: "https://legiscan.com/MA/text/H46/id/3046995/Massachusetts-2025-H46-Introduced.pdf",
    sponsors: [
      {
        name: "Deborah Goldberg",
        party: "State Treasurer",
        district: "",
        email: "dgoldberg@tre.state.ma.us",
        phone: "617-367-6900"
      }
    ]
  },
  {
    id: 2,
    title: "An Act Requiring Financial Education in Schools",
    number: "S.421",
    summary:
      "Expands access to banking services for minors with parental consent. Creates new pathways for financial independence among teens.",
    status: "Passed",
    sponsors: [
      {
        name: "Sen. James Eldridge",
        party: "D",
        district: "Middlesex and Worcester",
        email: "James.Eldridge@masenate.gov",
        phone: "(617) 722-1120"
      },
      {
        name: "Sen. Patrick O'Connor",
        party: "R",
        district: "First Plymouth and Norfolk",
        email: "Patrick.OConnor@masenate.gov",
        phone: "(617) 722-1646"
      },
      {
        name: "Sen. John Keenan",
        party: "D",
        district: "Norfolk and Plymouth",
        email: "John.Keenan@masenate.gov",
        phone: "(617) 722-1494"
      },
      {
        name: "Deborah Goldberg",
        party: "State Treasurer",
        district: "",
        email: "dgoldberg@tre.state.ma.us",
        phone: "617-367-6900"
      }
    ]
  },
  {
    id: 3,
    title: "An Act Requiring Financial Education in Schools",
    number: "H.636",
    summary:
      "Enhanced protections against predatory lending targeting students. Requires additional disclosures for credit products marketed to young adults.",
    status: "Introduced",
    sponsors: [
      {
        name: "Rep. Kate Lipper-Garabedian",
        party: "D",
        district: "32nd Middlesex",
        email: "kate.lipper-garabedian@mahouse.gov",
        phone: "(617) 722-2960"
      },
      {
        name: "Rep. Steven Ultrino",
        party: "D",
        district: "33rd Middlesex",
        email: "Steven.Ultrino@mahouse.gov",
        phone: "(617) 722-2877"
      },
      {
        name: "Rep. Mindy Domb",
        party: "D",
        district: "3rd Hampshire",
        email: "mindy.domb@mahouse.gov",
        phone: "(617) 722-2060"
      },
      {
        name: "Sen. James Eldridge",
        party: "D",
        district: "Middlesex and Worcester",
        email: "James.Eldridge@masenate.gov",
        phone: "(617) 722-1120"
      },
      {
        name: "Rep. Russell Holmes",
        party: "D",
        district: "6th Suffolk",
        email: "Russell.Holmes@mahouse.gov",
        phone: "(617) 722-2220"
      },
      {
        name: "Rep. Mark Sylvia",
        party: "D",
        district: "10th Bristol",
        email: "Mark.Sylvia@mahouse.gov",
        phone: "(617) 722-2400"
      },
      {
        name: "Deborah Goldberg",
        party: "State Treasurer",
        district: "",
        email: "dgoldberg@tre.state.ma.us",
        phone: "617-367-6900"
      }
    ]
  },
  {
    id: 4,
    title: "An Act Relative to Higher Education Financial Literacy Counseling",
    number: "H.1444",
    summary:
      "Enhanced protections against predatory lending targeting students. Requires additional disclosures for credit products marketed to young adults.",
    status: "Introduced",
    sponsors: [
      {
        name: "Rep. Kimberly Ferguson",
        party: "R",
        district: "1st Worcester",
        email: "Kimberly.Ferguson@mahouse.gov",
        phone: "(617) 722-2100"
      },
      {
        name: "Rep. Paul Frost",
        party: "R",
        district: "7th Worcester",
        email: "Paul.Frost@mahouse.gov",
        phone: "(617) 722-2100"
      },
      {
        name: "Rep. Bradley Jones",
        party: "R",
        district: "20th Middlesex",
        email: "Bradley.Jones@mahouse.gov",
        phone: "(617) 722-2100"
      },
      {
        name: "Rep. Hannah Kane",
        party: "R",
        district: "11th Worcester",
        email: "Hannah.Kane@mahouse.gov",
        phone: "(617) 722-2810"
      },
      {
        name: "Rep. Todd Smola",
        party: "R",
        district: "1st Hampden",
        email: "Todd.Smola@mahouse.gov",
        phone: "(617) 722-2100"
      },
      {
        name: "Rep. Alyson Sullivan-Almeida",
        party: "R",
        district: "7th Plymouth",
        email: "alyson.sullivan@mahouse.gov",
        phone: "(617) 722-2488"
      },
      {
        name: "Rep. Kelly Pease",
        party: "R",
        district: "4th Hampden",
        email: "Kelly.Pease@mahouse.gov",
        phone: "(413) 875-8787"
      }
    ]
  },
  {
    id: 5,
    title: "An Act Relative to Student Financial Literacy",
    number: "S.423",
    summary:
      "Enhanced protections against predatory lending targeting students. Requires additional disclosures for credit products marketed to young adults.",
    status: "Introduced",
    sponsors: [
      {
        name: "Sen. Patrick O'Connor",
        party: "R",
        district: "First Plymouth and Norfolk",
        email: "Patrick.OConnor@masenate.gov",
        phone: "(617) 722-1646"
      },
      {
        name: "Sen. Patricia Jehlen",
        party: "D",
        district: "Second Middlesex",
        email: "Patricia.Jehlen@masenate.gov",
        phone: "(617) 722-1578"
      }
    ]
  },
  {
    id: 6,
    title: "An Act Relative to the Strengthening of Financial Literacy Throughout the Commonwealth",
    number: "H.627",
    summary:
      "Enhanced protections against predatory lending targeting students. Requires additional disclosures for credit products marketed to young adults.",
    status: "Introduced",
    sponsors: [
      {
        name: "John Lawn",
        party: "D",
        district: "10th Middlesex",
        email: "John.Lawn@mahouse.gov",
        phone: "(617) 722-2430"
      }
    ]
  }
];

  const policyBriefs = [
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
    },
    {
      title: "Community-Based Financial Education Models",
      subheading: "Best practices from grassroots organizations across Massachusetts",
      author: "Community Finance Network",
      date: "Aug 2024",
      readingTime: "9 min read"
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

      {/* Bill Tracker */}
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
          
          <Carousel opts={{ loop: true}} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {bills.map((bill) => (
                <CarouselItem key={bill.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="flex flex-col justify-between  bg-black/50 border-white/10 hover:border-sunset-orange/50 transition-all duration-300 h-full">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-white text-lg font-bold">
                          {bill.title}
                        </CardTitle>
                        <Badge className={`cn(
                         `${getStatusColor(bill.status)}`,
                        "text-[10px] leading-none truncate whitespace-nowrap px-2 py-1"
                        )}
                       >
                          {bill.status}
                        </Badge>
                      </div>
                      <div className="text-sunset-orange font-semibold text-sm mb-3">
                        {bill.number}
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {bill.summary}
                      </p>
                    </CardHeader>
                    <CardContent className="pt-0 mt-auto">
                      <div className="flex gap-2">
<Button
  asChild
  size="sm"
  className="flex-1 bg-sunset-gradient hover:opacity-90 text-black font-medium transition-all duration-300"
>
  <a href={bill.url} target="_blank" rel="noopener noreferrer">
    View Full Text
  </a>
</Button>
                        <Button 
                          size="sm"
                          variant="outline"
                          className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800 transition-all duration-300"
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
            <CarouselPrevious className="hidden md:flex -left-12 border-gray-600 bg-black/50 hover:bg-gray-800" />
            <CarouselNext className="hidden md:flex -right-12 border-gray-600 bg-black/50 hover:bg-gray-800" />
          </Carousel>
        </div>
      </section>

      {/* Policy Brief Library */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Policy <span className="bg-sunset-gradient bg-clip-text text-transparent">Research</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {policyBriefs.map((brief, index) => (
              <Card 
                key={index} 
                className="bg-black/50 border-white/10 hover:border-sunset-pink/50 transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-white text-lg font-semibold leading-tight mb-2">
                    {brief.title}
                  </CardTitle>
                  <p className="text-gray-400 text-sm mb-3">
                    {brief.subheading}
                  </p>
                  <div className="text-xs text-gray-500 space-y-1">
                    <div>By {brief.author}</div>
                    <div className="flex justify-between">
                      <span>{brief.date}</span>
                      <span>{brief.readingTime}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button 
                    className="w-full bg-gradient-to-r from-sunset-pink to-sunset-purple hover:opacity-90 text-white font-medium transition-all duration-300 group-hover:scale-105"
                    onClick={() => window.open('#', '_blank')}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Read Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Civic Action Center */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">
              Civic Action <span className="bg-sunset-gradient bg-clip-text text-transparent">Center</span>
            </h2>
            <div className="w-24 h-1 bg-sunset-gradient mx-auto animate-scale-in" style={{ animationDelay: '0.2s' }}></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-black/50 border-2 border-transparent hover:border-sunset-orange/50 transition-all duration-500 animate-fade-in group bg-gradient-to-br from-black/50 to-gray-900">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-sunset-orange to-sunset-pink rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white mb-3">
                  Upcoming Hearings
                </CardTitle>
                <p className="text-gray-300 leading-relaxed">
                  Stay informed about legislative hearings and public comment opportunities 
                  that impact financial literacy education.
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-sunset-orange to-sunset-pink hover:opacity-90 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                  onClick={() => window.open('https://malegislature.gov/Events', '_blank')}
                >
                  View Calendar
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-2 border-transparent hover:border-sunset-pink/50 transition-all duration-500 animate-fade-in group bg-gradient-to-br from-black/50 to-gray-900" style={{ animationDelay: '0.1s' }}>
              <CardHeader className="text-center pb-6">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-sunset-pink to-sunset-purple rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white mb-3">
                  Intro to Lobbying
                </CardTitle>
                <p className="text-gray-300 leading-relaxed">
                  Learn the fundamentals of effective advocacy with our comprehensive 
                  guide to youth lobbying and civic engagement.
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-sunset-pink to-sunset-purple hover:opacity-90 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                  onClick={() => window.open('#', '_blank')}
                >
                  Download Guide
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-2 border-transparent hover:border-sunset-purple/50 transition-all duration-500 animate-fade-in group bg-gradient-to-br from-black/50 to-gray-900" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="text-center pb-6">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-sunset-purple to-sunset-orange rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white mb-3">
                  Scripts & Shareables
                </CardTitle>
                <p className="text-gray-300 leading-relaxed">
                  Access ready-to-use advocacy materials, social media templates, 
                  and talking points for your legislative outreach.
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-sunset-purple to-sunset-orange hover:opacity-90 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                  onClick={() => window.open('#', '_blank')}
                >
                  Get Shareables
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sponsors Side Panel */}
      {selectedBill && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 animate-fade-in">
          <div className="fixed right-0 top-0 h-full w-full max-w-md bg-black/95 backdrop-blur-md border-l border-white/10 animate-slide-in-right">
            <div className="p-6 h-full overflow-y-auto pr-2">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">Sponsors & Contacts</h3>
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
                <h4 className="text-lg font-semibold text-white mb-2">{selectedBill.title}</h4>
                <p className="text-sunset-orange font-semibold">{selectedBill.number}</p>
              </div>
              
              <div className="space-y-4">
                {selectedBill.sponsors.map((sponsor, index) => (
                  <div key={index} className="bg-gray-900/50 p-4 rounded-lg border border-white/10">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="text-white font-semibold">{sponsor.name}</h5>
                      <Badge variant="outline" className="text-xs border-white/20 text-gray-300">
                        {sponsor.party}
                      </Badge>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{sponsor.district}</p>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-300 text-sm">
                        <Mail className="h-4 w-4 mr-2" />
                        <a href={`mailto:${sponsor.email}`} className="hover:text-sunset-orange transition-colors">
                          {sponsor.email}
                        </a>
                      </div>
                      <div className="flex items-center text-gray-300 text-sm">
                        <Phone className="h-4 w-4 mr-2" />
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
