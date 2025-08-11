
import React from 'react';
import { useState, useEffect, useMemo, useRef } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom'; 
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Scale,
  Target, 
  Heart, 
  Award, 
  Users,
  FileText, 
  Calendar, 
  ExternalLink, 
  MapPin, 
  Trophy, 
  Download, 
  TrendingUp,
  Phone, 
  Mail,
  BookOpen, 
  ChevronDown, 
  Handshake, 
HelpCircle, 
ArrowRight } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { getBriefs } from "../lib/briefs";
import { formatMonthYear } from "../lib/utils";

const VALID_SECTIONS = ["advocacy", "curriculum", "enterprise"] as const;
type SectionKey = (typeof VALID_SECTIONS)[number];

// Declare OurWork component

const OurWork = () => {
  // Define types
  type BillStatus = 'Introduced' | 'In Committee' | 'Passed' | 'Rejected';
  
  type Sponsor = {
    name: string;
    party: string;
    district: string;
    email: string;
    phone: string;
  };

  type Bill = {
    id: number;
    title: React.ReactNode;
    number: string;
    summary: string;
    status: BillStatus;
    url?: string;
    urls?: string[];
    sponsors?: Sponsor[];
    sponsorsByBill?: Sponsor[][];
  };

  type PolicyBrief = {
    title: string;
    subheading: string;
    author: string;
    date: string;
    readingTime: string;
  };

  type Workshop = {
    title: string;
    location: string;
    date: string;
  };

  // tab behaviors 

    const location = useLocation();
  const navigate = useNavigate();

  const [expandedSection, setExpandedSection] = useState<SectionKey | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const motionTransition = prefersReducedMotion ? { duration: 0 } : { duration: 0.3 };

useEffect(() => {
  const hash = (location.hash || "").slice(1);

  if (VALID_SECTIONS.includes(hash as SectionKey)) {
    setExpandedSection(hash as SectionKey);
    // scroll to cards container (only for sections, not about)
    setTimeout(() => containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  } else if (hash === "about") {
    // scroll to #about section
    setTimeout(() => {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

// when expandedSection changes: update hash BUT preserve #about
useEffect(() => {
  const currentHash = (location.hash || "").slice(1);

  const nextHash =
    expandedSection
      ? `#${expandedSection}`
      : currentHash === "about"
        ? "#about" // preserve about when no section is open
        : "";

  // only navigate if the hash actually needs to change
  if (nextHash !== location.hash) {
    navigate(`${location.pathname}${nextHash}`, { replace: true });
  }

  // only scroll the cards container when opening a section (not when we're on #about)
  if (expandedSection && currentHash !== "about") {
    setTimeout(() => containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  }
}, [expandedSection, navigate, location.pathname, location.hash]);

// OPTIONAL: react to hash changes while already on the page (e.g., user clicks nav About again)
useEffect(() => {
  const hash = (location.hash || "").slice(1);
  if (hash === "about") {
    // ensure cards are collapsed when going to About
    if (expandedSection) setExpandedSection(null);
    setTimeout(() => {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }
}, [location.hash]); // intentionally depends on hash
  

// Program Cards (again) 

const OurCards = () => {
  const sections = [
    {
      title: 'Advocacy',
      description: 'Track bills, read our research, and advocate for mandatory personal financial education in your district.',
      icon: Scale,
      path: '/advocacy',
      gradient: 'from-sunset-purple to-sunset-orange'
    }, 
        {
      title: 'Curriculum',
      description: 'Lead (or attend) a financial literacy workshop in your town — designed by youth, for youth.',
      icon: BookOpen,
      path: '/curriculum',
      gradient: 'from-sunset-orange to-sunset-pink'
    },
    {
      title: 'Enterprise',
      description: 'Explore pitch competitions, local hackathons, and network with fellow entrepreneurs.',
      icon: Users,
      path: '/enterprise',
      gradient: 'from-sunset-pink to-sunset-purple'
    },
  ];

  // Data constants
  const bills: Bill[] = [
  {
    id: 1,
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
    ],
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

const getStatusColor = (status: BillStatus): string => {
    switch (status) {
      case 'Introduced': return 'bg-primary/20 text-primary border-primary/30';
      case 'In Committee': return 'bg-accent/20 text-accent-foreground border-accent/30';
      case 'Passed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Rejected': return 'bg-destructive/20 text-destructive border-destructive/30';
      default: return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  const workshops: Workshop[] = [
    {
      title: "WTF Are Taxes? (And Other Conundrums)",
      location: "Arlington, MA - TBD",
      date: "Aug 18, 2025"
    },
    {
      title: "Scholarships, Financial Aid, & Planning for College",
      location: "Arlington, MA - TBD",
      date: "Sept 1, 2025"
    },
    {
      title: "Budgeting Is... Shockingly Simple",
      location: "Boston MA - TBD",
      date: "Sept 14, 2025"
    }
  ];

  const briefs = getBriefs();

  // normalize mdx 
  const articles = briefs.map(b => ({
  slug: b.slug,
  title: b.meta.title,
  subheading: b.meta.description,
  author: b.meta.author ?? "Project 57",
  date: formatMonthYear?.(b.meta.date) ?? b.meta.date ?? "",
  readingTime: b.meta.readingTime ?? "",
  tags: b.meta.tags ?? [],
}));

// toggle logic 
  const [selectedBill, setSelectedBill] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
const [faqOpen, setFaqOpen] = useState(false); 
  const [showAllResearch, setShowAllResearch] = useState(false);
const displayedArticles = showAllResearch ? articles : articles.slice(0, 3);

  // Component definitions
  const Advocacy = () => (
    <div className="space-y-16">
      {/* Policy Brief Library */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Our <span className="bg-sunset-gradient bg-clip-text text-transparent">  Research </span>
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
                  <Button asChild
                    className="w-full bg-sunset-gradient hover:opacity-90 text-black font-medium transition-all duration-300 ripple-effect group-hover:scale-105">
<Link to={`/briefs/${article.slug}`} className="flex items-center justify-center">
  <FileText className="h-4 w-4 mr-2" />
  Read Now
</Link>
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

      {/* Bill Tracker */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">

                  <div className="flex items-center gap-2">
            <h2 className="text-3xl md:text-4xl font-bold">
              Bill <span className="bg-sunset-gradient bg-clip-text text-transparent">Tracker</span>
            </h2>
              {/* info icon */}
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            onClick={() => setFaqOpen(true)}
            aria-label="Bill Tracker FAQs"
            className="
              ml-1 inline-flex h-7 w-7 items-center justify-center
              rounded-full border border-white/15 bg-white/5 text-gray-300
              transition-all duration-200
              hover:text-white hover:border-sunset-orange/60 hover:shadow-[0_0_0_2px_rgba(251,146,60,.25)]
              focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60
              active:scale-95
            "
          >
            <HelpCircle className="h-4 w-4" />
          </button>
        </TooltipTrigger>
        <TooltipContent>Bill Tracker FAQs</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
            <div className="text-sm text-gray-400 flex items-right gap-2">
              <TrendingUp className="h-4 w-4" />
              Powered by Billtrack50.com API
            </div>
        </div>
          
          {/* Subheading */}
          <p className="text-gray-400 text-sm max-w-3xl mb-8">
            Multiple identical bills have been filed to show unified support. They are grouped below for clarity.
          </p>

              {/* FAQ Section */}
<Dialog open={faqOpen} onOpenChange={setFaqOpen}>
  <DialogContent className="max-w-lg bg-black/95 border-white/10 text-white">
    <DialogHeader>
      <DialogTitle className="flex items-center justify-between">
        Bill Tracker FAQs
      </DialogTitle>
    </DialogHeader>

    <div className="space-y-4 text-sm text-gray-300">
      <div>
        <p className="font-medium text-white mb-1">Why do some bills look identical?</p>
        <p>House and Senate often file matching bills to build support and move through both chambers.</p>
      </div>
      <div>
        <p className="font-medium text-white mb-1">Which bill should I follow?</p>
        <p>Focus on H.636 and S.421 as the primary vehicles; H.46 is the Treasurer’s supportive filing.</p>
      </div>
      <div>
        <p className="font-medium text-white mb-1">What do the statuses mean?</p>
        <p><span className="text-gray-200">Introduced</span> → filed; <span className="text-gray-200">In Committee</span> → under review; <span className="text-gray-200">Passed</span> → approved by a chamber.</p>
      </div>
      <div>
        <p className="font-medium text-white mb-1">How can I help?</p>
        <p>Call sponsors, submit testimony, and share our briefs with your school district.</p>
      </div>
    </div>
  </DialogContent>
</Dialog>
        
        {/* Carousel */}
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
      </div>
   );
  const Curriculum = () => (
    <div className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
        <h2 className="text-3xl font-bold text-white">
          Our <span className="bg-sunset-gradient bg-clip-text text-transparent"> Workshops </span> 
        </h2>
 <Button
            className="bg-sunset-gradient hover:opacity-90 text-black font-medium flex items-center gap-2 px-5 py-2 rounded-lg sm:ml-4 mt-4 sm:mt-0"
            onClick={() => (window.location.href = "/contact")}
          >
            Request a Workshop
            <ArrowRight className="w-4 h-4" />
          </Button>
                </div>
                  
        {/* Marquee styles */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>

        <div className="relative group" aria-label="Workshops gallery">
          {/* Grid layer (unchanged markup) */}
          <div className="transition-opacity duration-300 md:invisible md:opacity-0 md:pointer-events-none md:group-hover:visible md:group-hover:opacity-100 md:group-hover:pointer-events-auto motion-reduce:visible motion-reduce:opacity-100 motion-reduce:pointer-events-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workshops.map((workshop, index) => (
                <Card 
                  key={index} 
                  className="h-full bg-black/50 border-white/10 hover:border-sunset-orange/50 transition-all duration-300"
                >
                  <div className="h-full flex flex-col justify-center">
                    <CardHeader className="mb-4">
                      <CardTitle className="text-white text-lg font-semibold">
                        {workshop.title}
                      </CardTitle>
                      <div className="text-gray-400 text-sm space-y-1">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {workshop.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {workshop.date}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        className="w-full bg-sunset-gradient hover:opacity-90 text-black font-medium transition-all duration-300"
                      >
                        Register Now
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Marquee layer (desktop only) */}
          {!prefersReducedMotion && (
            <div className="pointer-events-none absolute inset-0 hidden md:block transition-opacity duration-300 group-hover:opacity-0 motion-reduce:hidden" data-marquee-container>
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
              <div className="overflow-hidden">
                <div className="flex gap-6 will-change-transform animate-[marquee_25s_linear_infinite] group-hover:[animation-play-state:paused]" data-marquee-track>
                  {/* pass 1 */}
                  {workshops.map((workshop, index) => (
                    <div className="min-w-[320px] max-w-[360px]" key={`m1-${index}`}>
                      <Card 
                        className="h-full bg-black/50 border-white/10 hover:border-sunset-orange/50 transition-all duration-300"
                      >
                        <div className="h-full flex flex-col">
                          <CardHeader>
                            <CardTitle className="text-white text-lg font-semibold">
                              {workshop.title}
                            </CardTitle>
                            <div className="text-gray-400 text-sm space-y-1">
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                {workshop.location}
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                {workshop.date}
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="mt-auto">
                            <Button 
                              className="w-full bg-sunset-gradient hover:opacity-90 text-black font-medium transition-all duration-300"
                            >
                              Register Now
                            </Button>
                          </CardContent>
                        </div>
                      </Card>
                    </div>
                  ))}
                  {/* pass 2 */}
                  {workshops.map((workshop, index) => (
                    <div className="min-w-[320px] max-w-[360px]" key={`m2-${index}`}>
                      <Card 
                        className="h-full bg-black/50 border-white/10 hover:border-sunset-orange/50 transition-all duration-300"
                      >
                        <div className="h-full flex flex-col">
                          <CardHeader>
                            <CardTitle className="text-white text-lg font-semibold">
                              {workshop.title}
                            </CardTitle>
                            <div className="text-gray-400 text-sm space-y-1">
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                {workshop.location}
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                {workshop.date}
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="mt-auto">
                            <Button 
                              className="w-full bg-sunset-gradient hover:opacity-90 text-black font-medium transition-all duration-300"
                            >
                              Register Now
                            </Button>
                          </CardContent>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const Enterprise = () => (
    <div className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          Founders & <span className="bg-sunset-gradient bg-clip-text text-transparent"> Hackathons </span>
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          Coming soon in partnership with Dream Ventures!
        </p>
        <Link to="/">
        <Button 
          className="bg-sunset-gradient hover:opacity-90 text-black font-medium px-8 py-3"
        >
          Home
        </Button>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
        <section className="pt-16 pb-16 relative items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
  <div className="pointer-events-none absolute inset-0">
        {/* Animated background elements */}
        <div  className=" absolute top-1/4 left-1/4 w-96 h-96 bg-sunset-pink/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sunset-purple/10 rounded-full blur-3xl animate-pulse" 
            style={{
          animationDelay: '1s'
        }}
            /> 
  </div>
        
  <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 text-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
      Our <span className="bg-sunset-gradient bg-clip-text text-transparent">Work</span>
    </h1>
    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
      Read our research, visit our workshops, and take action
      to put financial literacy on the docket in Massachusetts.
    </p>
  </div>
          
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-b from-transparent to-black" />
      </section>


{/* Sticky Card Header (Home-style 3 cards) */}
<section id="our-work-tabs" className="-mt-6 bg-transparent">
  <div
    ref={containerRef}
    className="
      sticky top-16   /* adjust to your navbar height (64px => top-16) */
      z-30
      bg-black/90 backdrop-blur-md
      border-b border-transparent
          shadow-[0_-6px_20px_rgba(0,0,0,0.35)]
    "
  >
    <div className="max-w-6xl mx-auto px-4 py-6">
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-3 gap-6" 
          initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}
  variants={{
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  }}/* always 3 across on md+ */
      >
        {([
          {
            key: "advocacy" as SectionKey,
            title: "Advocacy",
            description:
              "Track bills, read our research, and advocate for mandatory personal financial education in your district.",
            Icon: Scale,
            gradient: "from-sunset-purple to-sunset-orange",
          },
          {
            key: "curriculum" as SectionKey,
            title: "Curriculum",
            description:
              "Lead (or attend) a financial literacy workshop in your town — designed by youth, for youth.",
            Icon: BookOpen,
            gradient: "from-sunset-orange to-sunset-pink",
          },
          {
            key: "enterprise" as SectionKey,
            title: "Enterprise",
            description:
              "Explore pitch competitions, local hackathons, and network with fellow entrepreneurs.",
            Icon: Users,
            gradient: "from-sunset-pink to-sunset-purple",
          },
        ]).map(({ key, title, description, Icon, gradient }) => {
          const isOpen = expandedSection === key;

          return (
            <motion.div key={key} layout>
              {/* Entire card is a trigger ONLY */}
              <Card
                onClick={() => setExpandedSection(isOpen ? null : key)}
                aria-expanded={isOpen}
                aria-controls={`section-panel-${key}`} /* single panel below */
  className={[
    "group relative overflow-hidden rounded-2xl",
    "bg-gradient-to-br from-gray-900/50 to-black",
    "border border-white/10 transition-all duration-500",
    isOpen
      ? "border-orange-400/70 shadow-[0_0_0_1px_rgba(251,146,60,.3)]"
      : "hover:border-white/20 hover:scale-[1.02]",
  ].join(" ")}
              >
                {/* Top gradient bar */}
                <div className={`h-2 bg-gradient-to-r ${gradient}`} />

                {/* Hover color wash overlay */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  aria-hidden
                />

                {/* Collapsed card content (icon, title, copy, CTA) */}
                <div className="relative p-8">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${gradient} mb-6`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>

<h3
  className={`text-xl md:text-2xl font-bold mb-4 transition-colors duration-300 ${
    isOpen ? "text-sunset-pink" : "text-white group-hover:text-sunset-pink"
  }`}
>
  {title}
</h3>

                  <p className="text-gray-300 leading-relaxed">{description}</p>

                  <div className="mt-6 flex items-center text-sunset-pink transition-transform duration-300 group-hover:translate-x-2">
                    <span className="text-sm font-semibold">
                      {isOpen ? "Collapse" : "Learn More"}
</span>
  <svg
    className={`ml-2 h-4 w-4 transition-transform duration-300 ${
      isOpen ? "rotate-90" : ""
    }`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
                  </div>

                  {/* Active gradient indicator */}
                 {isOpen && (
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 pointer-events-none`}
          aria-hidden="true" />
                )}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </div>
</section>

      {/* Full-width expanding content panel */}
<AnimatePresence initial={false}>
  {expandedSection && (
    <motion.div
      key={expandedSection}
      id="section-panel"
      aria-live="polite"
      layout
      initial={{ opacity: 0, height: 0, marginTop: 0 }}
      animate={{ opacity: 1, height: "auto", marginTop: 24 }}
      exit={{ opacity: 0, height: 0, marginTop: 0 }}
      transition={motionTransition}
      className="overflow-hidden"
    >
      <div
        className="max-w-6xl mx-auto px-4"
        onClick={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {expandedSection === "advocacy" && <Advocacy />}
        {expandedSection === "curriculum" && <Curriculum />}
        {expandedSection === "enterprise" && <Enterprise />}
      </div>
    </motion.div>
  )}
</AnimatePresence>

      {/* About Section */}
      <section id="about" className="pt-16 pb-16 bg-gradient-to-b from-black to-gray-900">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* SECTION HEADER spans both columns */}
    <h2 className="text-4xl md:text-5xl font-bold text-center -mt-2 mb-10">
      Our <span className="bg-sunset-gradient bg-clip-text text-transparent">Mission</span>
    </h2>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col justify-start">
      <p className="text-lg text-gray-300 mt-4">
        14 and getting a job. 17 and taking out student loans. 18 and opening credit cards.
      </p>
        <p className="mt-4 text-gray-400">
        When 250,000 futures are at stake, financial literacy can't <em>afford</em> to be optional. 
          Yet Massachusetts — from our schools to our legislatures — continues to ignore the gap. < br/> 
        Project 57 tackles that by going local, teaching by doing, and putting students <em> first.</em>
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
          <Button className="bg-sunset-gradient text-black px-6 py-3 text-base rounded-xl">
            Join Our Team
          </Button>
          <Button variant="outline" className="border-white/30 text-white px-6 py-3 text-base rounded-xl">
            Start a Chapter
          </Button>
        </div>
        </div> 

          
<div className = "flex flex-col justify-start pt-4">
        <ul className="space-y-5">
          {/* full-height color bar using a 2-col grid and self-stretch */}
          <li className="grid grid-cols-[6px_1fr] gap-3 items-start">
            <span className="rounded-full bg-gradient-to-b from-orange-400 to-pink-500 self-stretch" />
            <div>
              <p className="text-white font-semibold">Chapters → District change</p>
              <p className="text-gray-400">Organize by school, win your district, then franchise by city.</p>
            </div>
          </li>

          <li className="grid grid-cols-[6px_1fr] gap-3 items-start">
            <span className="rounded-full bg-gradient-to-b from-violet-400 to-pink-500 self-stretch" />
            <div>
              <p className="text-white font-semibold">Students teaching students</p>
              <p className="text-gray-400">Peer-led workshops on budgets, credit, FAFSA, and first jobs — built to use tomorrow.</p>
            </div>
          </li>

          <li className="grid grid-cols-[6px_1fr] gap-3 items-start">
            <span className="rounded-full bg-gradient-to-b from-amber-400 to-rose-500 self-stretch" />
            <div>
              <p className="text-white font-semibold">Policy + practice</p>
              <p className="text-gray-400">We testify, track bills, and make financial literacy a graduation requirement.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

      {/* Tabbed Modals */}

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

// Final render for OurWork
return <OurCards />;
};

export default OurWork;