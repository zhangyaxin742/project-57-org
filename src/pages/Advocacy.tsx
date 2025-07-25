
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Scale, FileText, Calendar, Users, ExternalLink, Download, TrendingUp, Phone, Mail, ChevronDown } from 'lucide-react';

const Advocacy = () => {
  const [selectedBill, setSelectedBill] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq1, setOpenFaq1] = useState(false);
  const [openFaq2, setOpenFaq2] = useState(false);
  const [showAllResearch, setShowAllResearch] = useState(false);

const bills = [
  {
    id: 999,
    title: (
      <>
      An Act <br /> 
        Requiring Financial Education in Schools </>
    ),
    number: "H.46/S.421/H.636",
    summary: "Requires comprehensive financial literacy education in all Massachusetts high schools. Establishes minimum curriculum standards and teacher certification requirements.",
    status: "In Committee",
    urls: [
      "https://legiscan.com/MA/text/H46/id/3046995/Massachusetts-2025-H46-Introduced.pdf",
      "https://legiscan.com/MA/text/S421/id/3163196/Massachusetts-2025-S421-Introduced.pdf",
      "https://legiscan.com/MA/text/H636/id/3169916/Massachusetts-2025-H636-Introduced.pdf"
    ],
    sponsorsByBill: [
      [
        {
          name: "Deborah Goldberg",
          party: "State Treasurer",
          district: "",
          email: "dgoldberg@tre.state.ma.us",
          phone: "617-367-6900"
        }
      ],
      [
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
      ],
      [
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
    ]
  },
  {
    id: 4,
    title: ( <> 
    An Act <br /> 
     Relative to Higher Education Financial Literacy Counseling </> ), 
    number: "H.1444",
    summary:
      "Enhanced protections against predatory lending targeting students. Requires additional disclosures for credit products marketed to young adults.",
    status: "In Committee",
    url: "https://legiscan.com/MA/text/H1444/id/3168790/Massachusetts-2025-H1444-Introduced.pdf", 
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
    title: (
      <>
      An Act <br /> 
        Relative to Student Financial Literacy </>
      ),
    number: "S.423",
    summary:
      "Enhanced protections against predatory lending targeting students. Requires additional disclosures for credit products marketed to young adults.",
    status: "Introduced",
    url: "https://legiscan.com/MA/text/S423/id/3164156/Massachusetts-2025-S423-Introduced.pdf", 
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
    title: (
      <>
      An Act <br /> 
      Relative to the Strengthening of Financial Literacy Throughout the Commonwealth </>
      ),
    number: "H.627",
    summary:
      "Enhanced protections against predatory lending targeting students. Requires additional disclosures for credit products marketed to young adults.",
    status: "Introduced",
    url: "https://legiscan.com/MA/text/H627/id/3167243/Massachusetts-2025-H627-Introduced.pdf",
    sponsors: [
      {
        name: "John Lawn",
        party: "D",
        district: "10th Middlesex",
        email: "John.Lawn@mahouse.gov",
        phone: "(617) 722-2430"
      }
    ]
  }, 
  {
    id: 7, 
    title: ( 
      <> 
      An Act <br /> 
        Relative to Personal Financial Literacy </>
      ),
    number: "H.594", 
    summary: "hamilton!!",
    status: "In Committee",
    url: "https://legiscan.com/MA/text/H594/id/3170318/Massachusetts-2025-H594-Introduced.pdf", 
    sponsors: [
      {
        name: "Ryan Hamilton", 
        party: "D", 
        district: "15th Essex", 
        email: "Ryan.Hamilton@mahouse.gov", 
        phone: "(617) 722-2090"
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

  const displayedArticles = showAllResearch ? policyBriefs : policyBriefs.slice(0, 3);

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
         <span className="bg-sunset-gradient bg-clip-text text-transparent">Advocacy</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Track state legislation, read our research, and take action 
            to expand financial literacy education in schools across Massachusetts.
          </p>
        </div>
      </section>

      {/* Bill Tracker */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Bill <span className="bg-sunset-gradient bg-clip-text text-transparent">Tracker</span>
            </h2>
            <div className="text-sm text-gray-400 flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Powered by Billtrack50.com API
            </div>
          </div>
          
          {/* Subheading */}
          <p className="text-gray-400 text-sm max-w-3xl mb-8">
            Multiple identical bills have been filed to show unified support. They are grouped below for clarity.
          </p>
          
          <Carousel opts={{ loop: true}} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {bills.map((bill) => (
                <CarouselItem key={bill.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="flex flex-col justify-between  bg-black/50 border-white/10 hover:border-sunset-orange/50 transition-all duration-300 h-full">
                    <CardHeader className="pb-3">
<div className="flex justify-between items-start mb-2">
  <CardTitle className="text-white text-[15px] text-lg font-bold">
    {bill.title}
  </CardTitle>
    <Badge className={`${getStatusColor(bill.status)} text-white text-[10px] whitespace-nowrap`}>
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
                        {bill.urls ? (
                          <Button
                            size="sm"
                            className="flex-1 bg-sunset-gradient hover:opacity-90 text-black font-medium transition-all duration-300"
                            onClick={() => {
                              setSelectedBill(bill);
                              setActiveModal('text');
                            }}
                          >
                            View Text
                          </Button>
                        ) : (
                          <Button
                            asChild
                            size="sm"
                            className="flex-1 bg-sunset-gradient hover:opacity-90 text-black font-medium transition-all duration-300"
                          >
                            <a href={bill.url} target="_blank" rel="noopener noreferrer">
                              View Full Text
                            </a>
                          </Button>
                        )}
                        <Button 
                          size="sm"
                          variant="outline"
                          className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800 transition-all duration-300"
                          onClick={() => {
                            setSelectedBill(bill);
                            setActiveModal(bill.sponsorsByBill ? 'sponsors' : 'sponsors-single');
                          }}
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
                        {/* FAQ Section */}
          <div className="mb-16 max-w-4xl">
            <div className="space-y-4">
              <Collapsible open={openFaq1} onOpenChange={setOpenFaq1}>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-black/50 border border-white/10 rounded-lg text-gray-300 hover:bg-gray-800 transition-all duration-300">
                  <span className="font-medium">Why are there multiple versions of the same bill?</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openFaq1 ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-black/50 border border-white/10 border-t-0 rounded-b-lg text-gray-300">
                  Different legislators and the Treasurer filed identical bills in the House and Senate to show broad support and ensure the proposal moves procedurally through both chambers.
                </CollapsibleContent>
              </Collapsible>
              
              <Collapsible open={openFaq2} onOpenChange={setOpenFaq2}>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-black/50 border border-white/10 rounded-lg text-gray-300 hover:bg-gray-800 transition-all duration-300">
                  <span className="font-medium">What should I support?</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openFaq2 ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-black/50 border border-white/10 border-t-0 rounded-b-lg text-gray-300">
                  All versions with identical text are effectively the same proposal. We recommend focusing on H.636 and S.421, the primary House and Senate vehicles, while recognizing the Treasurer's filing (H.46) as supportive.
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
      </section>


      {/* Policy Brief Library */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Our Research
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {displayedArticles.map((article, index) => (
              <Card 
                key={index} 
                className="bg-black/50 border-white/10 hover:border-sunset-orange/50 transition-all duration-300 animate-fade-in group"
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
                    className="w-full bg-sunset-gradient hover:opacity-90 text-black font-medium transition-all duration-300 ripple-effect group-hover:scale-105"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Read Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={() => setShowAllResearch(prev => !prev)}
              className="bg-sunset-gradient hover:opacity-90 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              {showAllResearch ? "Hide Briefs" : "Show All Briefs"}
            </Button>
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

      {/* Tabbed Modals */}
      {selectedBill && activeModal && (
        <Dialog open={!!activeModal} onOpenChange={() => setActiveModal(null)}>
          <DialogContent className="max-w-4xl max-h-[80vh] bg-black/95 border-white/10 text-white">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">
                {activeModal === 'text' ? 'Bill Text' : 'Sponsors & Contacts'}
              </DialogTitle>
            </DialogHeader>
            
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-white mb-2">{selectedBill.title}</h4>
              <p className="text-sunset-orange font-semibold">{selectedBill.number}</p>
            </div>
            
            {selectedBill.urls && activeModal === 'text' ? (
              <Tabs defaultValue="h46" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-gray-800">
                  <TabsTrigger value="h46" className="text-white">H.46</TabsTrigger>
                  <TabsTrigger value="s421" className="text-white">S.421</TabsTrigger>
                  <TabsTrigger value="h636" className="text-white">H.636</TabsTrigger>
                </TabsList>
                <TabsContent value="h46" className="mt-4">
                  <div className="p-4 bg-gray-900/50 rounded-lg border border-white/10">
                    <h5 className="text-white font-semibold mb-3">House Bill 46 - Treasurer Filing</h5>
                    <Button 
                      asChild
                      className="bg-sunset-gradient hover:opacity-90 text-black font-medium"
                    >
                      <a href={selectedBill.urls[0]} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Full Text
                      </a>
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="s421" className="mt-4">
                  <div className="p-4 bg-gray-900/50 rounded-lg border border-white/10">
                    <h5 className="text-white font-semibold mb-3">Senate Bill 421 - Senate Version</h5>
                    <Button 
                      asChild
                      className="bg-sunset-gradient hover:opacity-90 text-black font-medium"
                    >
                      <a href={selectedBill.urls[1]} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Full Text
                      </a>
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="h636" className="mt-4">
                  <div className="p-4 bg-gray-900/50 rounded-lg border border-white/10">
                    <h5 className="text-white font-semibold mb-3">House Bill 636 - House Version</h5>
                    <Button 
                      asChild
                      className="bg-sunset-gradient hover:opacity-90 text-black font-medium"
                    >
                      <a href={selectedBill.urls[2]} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Full Text
                      </a>
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            ) : selectedBill.sponsorsByBill && activeModal === 'sponsors' ? (
              <Tabs defaultValue="h46" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-gray-800">
                  <TabsTrigger value="h46" className="text-white">H.46</TabsTrigger>
                  <TabsTrigger value="s421" className="text-white">S.421</TabsTrigger>
                  <TabsTrigger value="h636" className="text-white">H.636</TabsTrigger>
                </TabsList>
                <TabsContent value="h46" className="mt-4">
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {selectedBill.sponsorsByBill[0].map((sponsor, index) => (
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
                </TabsContent>
                <TabsContent value="s421" className="mt-4">
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {selectedBill.sponsorsByBill[1].map((sponsor, index) => (
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
                </TabsContent>
                <TabsContent value="h636" className="mt-4">
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {selectedBill.sponsorsByBill[2].map((sponsor, index) => (
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
                </TabsContent>
              </Tabs>
            ) : activeModal === 'sponsors-single' && selectedBill.sponsors ? (
              <div className="space-y-4 max-h-96 overflow-y-auto">
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
            ) : null}
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Advocacy;
