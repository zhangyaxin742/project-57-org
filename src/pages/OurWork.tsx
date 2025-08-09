
/*   
  const teamMembers = [
    {
      name: "Yaxin Zhang",
      role: "Founder & Executive Director",
      bio: "Arlington High School senior passionate about Business, Economics, and Public Policy. Founded Project 57 at age 17.",
      image: "👩‍💼"
    }
  ]; 

  const milestones = [
    {
      year: "2021",
      title: "Founded",
      description: "PROJECT 57 established by Massachusetts youth leaders"
    },
    {
      year: "2022", 
      title: "First Programs Launch",
      description: "PFin Curriculum and Legislative Advocacy initiatives begin"
    },
    {
      year: "2023",
      title: "Youth Enterprise Added", 
      description: "Expanded to include entrepreneurship programs and funding"
    },
    {
      year: "2024",
      title: "Statewide Impact",
      description: "Serving students across all Massachusetts counties"
    }
  ]; 

  
     Team Section 
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our <span className="bg-sunset-gradient bg-clip-text text-transparent">Team</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-gray-900/50 border-white/10 hover:border-sunset-pink/50 transition-all duration-300 hover:scale-105 text-center">
                <CardHeader>
                  <div className="text-6xl mb-4">{member.image}</div>
                  <CardTitle className="text-white">{member.name}</CardTitle>
                  <CardDescription className="text-sunset-pink font-semibold">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> 

      Timeline
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our <span className="bg-sunset-gradient bg-clip-text text-transparent">Journey</span>
          </h2>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="bg-black/50 border-white/10 hover:border-sunset-orange/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-sunset-gradient text-black font-bold text-lg px-4 py-2 rounded-lg">
                      {milestone.year}
                    </div>
                    <div>
                      <CardTitle className="text-white">{milestone.title}</CardTitle>
                      <CardDescription className="text-gray-300">
                        {milestone.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section> 
      
      const Enterprise = () => {}
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
  */
 // #endregion

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
  Handshake } from 'lucide-react';
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
        }
      ]
    }
  ];

  const briefs = getBriefs();
  const articles = briefs.map(b => ({
    title: b.meta.title,
    subheading: b.meta.description,
    author: b.meta.author ?? "Project 57",
    date: formatMonthYear?.(b.meta.date) ?? b.meta.date ?? "",
    readingTime: b.meta.readingTime ?? "",
    tags: b.meta.tags ?? [],
  }));

  // State variables
  const [selectedBill, setSelectedBill] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq1, setOpenFaq1] = useState(false);
  const [openFaq2, setOpenFaq2] = useState(false);
  const [showAllResearch, setShowAllResearch] = useState(false);
  const displayedArticles = showAllResearch ? articles : articles.slice(0, 3);

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
      title: "Financial Planning Workshop",
      location: "Virtual",
      date: "Dec 15, 2024"
    },
    {
      title: "Youth Entrepreneurship Bootcamp",
      location: "Boston, MA",
      date: "Jan 20, 2025"
    },
    {
      title: "College Financial Literacy Session",
      location: "Cambridge, MA",
      date: "Feb 10, 2025"
    }
  ];

  // Component definitions
  const Advocacy = () => (
    <div className="space-y-16">
      {/* Policy Brief Library */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Our Research
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {displayedArticles.map((article, index) => (
              <Card key={index} className="bg-black/50 border-white/10 hover:border-sunset-orange/50 transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-white text-lg group-hover:text-sunset-orange transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-sm">
                    {article.subheading}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span>{article.author}</span>
                    <span>{article.readingTime}</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{article.date}</p>
                  <Button 
                    asChild
                    variant="outline" 
                    size="sm"
                    className="border-sunset-orange text-sunset-orange hover:bg-sunset-orange hover:text-black transition-all duration-300"
                  >
                    <Link to={`/briefs/${article.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      Read More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {articles.length > 3 && (
            <div className="text-center">
              <Button 
                onClick={() => setShowAllResearch(!showAllResearch)}
                variant="outline"
                className="border-sunset-pink text-sunset-pink hover:bg-sunset-pink hover:text-black"
              >
                {showAllResearch ? 'Show Less' : `Show All ${articles.length} Articles`}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Legislative Tracker */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Track Massachusetts Bills
          </h2>
          
          <div className="space-y-6">
            {bills.map((bill) => (
              <Card key={bill.id} className="bg-gray-900/50 border-white/10 hover:border-sunset-orange/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-white text-xl mb-2">
                        {bill.title}
                      </CardTitle>
                      <div className="text-sunset-orange font-semibold mb-3">
                        {bill.number}
                      </div>
                      <CardDescription className="text-gray-300 leading-relaxed">
                        {bill.summary}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-3">
                      <Badge className={getStatusColor(bill.status)}>
                        {bill.status}
                      </Badge>
                      <div className="flex flex-wrap gap-2">
                        {bill.urls ? (
                          <>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => {
                                setSelectedBill(bill);
                                setActiveModal('text');
                              }}
                              className="border-sunset-orange text-sunset-orange hover:bg-sunset-orange hover:text-black text-xs"
                            >
                              <FileText className="h-3 w-3 mr-1" />
                              View Bills
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => {
                                setSelectedBill(bill);
                                setActiveModal('sponsors');
                              }}
                              className="border-sunset-pink text-sunset-pink hover:bg-sunset-pink hover:text-black text-xs"
                            >
                              <Users className="h-3 w-3 mr-1" />
                              Contact Sponsors
                            </Button>
                          </>
                        ) : (
                          <>
                            {bill.url && (
                              <Button 
                                asChild
                                size="sm" 
                                variant="outline"
                                className="border-sunset-orange text-sunset-orange hover:bg-sunset-orange hover:text-black text-xs"
                              >
                                <a href={bill.url} target="_blank" rel="noopener noreferrer">
                                  <FileText className="h-3 w-3 mr-1" />
                                  View Bill
                                </a>
                              </Button>
                            )}
                            {bill.sponsors && (
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => {
                                  setSelectedBill(bill);
                                  setActiveModal('sponsors-single');
                                }}
                                className="border-sunset-pink text-sunset-pink hover:bg-sunset-pink hover:text-black text-xs"
                              >
                                <Users className="h-3 w-3 mr-1" />
                                Contact Sponsors
                              </Button>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const Curriculum = () => (
    <div className="space-y-16">
      {/* Workshop Directory */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Upcoming Workshops
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshops.map((workshop, index) => (
              <Card key={index} className="bg-black/50 border-white/10 hover:border-sunset-pink/50 transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-sunset-pink transition-colors">
                    {workshop.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {workshop.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sunset-orange mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    {workshop.date}
                  </div>
                  <Button 
                    className="w-full bg-sunset-gradient hover:opacity-90 text-black font-medium"
                  >
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Principles */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Our Curriculum Principles
          </h2>
          <p className="text-gray-300 text-lg mb-12">
            Financial literacy education that meets students where they are
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
              <div className="bg-sunset-gradient w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-white font-semibold mb-3">Relatable</h3>
              <p className="text-gray-400 text-sm">
                Real scenarios that reflect diverse student experiences and backgrounds
              </p>
            </div>
            
            <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
              <div className="bg-sunset-gradient w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-white font-semibold mb-3">Practical</h3>
              <p className="text-gray-400 text-sm">
                Skills and knowledge students can immediately apply to their lives
              </p>
            </div>
            
            <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
              <div className="bg-sunset-gradient w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-white font-semibold mb-3">Interactive</h3>
              <p className="text-gray-400 text-sm">
                Hands-on activities, discussions, and peer-to-peer learning
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const Enterprise = () => (
    <div className="py-16 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Youth <span className="bg-sunset-gradient bg-clip-text text-transparent">Enterprise</span>
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          Coming soon - Youth entrepreneurship and financial innovation programs.
        </p>
        <Button 
          className="bg-sunset-gradient hover:opacity-90 text-black font-medium px-8 py-3"
        >
          Learn More
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <div id="top" className="sr-only" />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-sunset-gradient bg-clip-text text-transparent">Our Work</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Read our research, check out our workshops, and take action
            to expand financial literacy education in schools across Massachusetts.
          </p>
        </div>
      </section>

{/* Tabbed Content (Home-style 3 cards) */}
<section id="our-work-tabs" className="py-16 bg-black">
  <div ref={containerRef} className="max-w-6xl mx-auto px-4 ticky top-0 bg-black z-10">
    <motion.div
      layout
      className={
        expandedSection
          ? "grid grid-cols-1 gap-6"
          : "grid grid-cols-1 md:grid-cols-3 gap-6"
      }
    >
      {([
        {
          key: "advocacy" as SectionKey,
          title: "Advocacy",
          description:
            "Track bills, read our research, and advocate for financial literacy education in your district.",
          Icon: Scale,
          gradient: "from-sunset-purple to-sunset-orange",
        },
        {
          key: "curriculum" as SectionKey,
          title: "Curriculum",
          description:
            "Attend (or run) a financial literacy workshop in your town — designed by youth, for youth.",
          Icon: BookOpen,
          gradient: "from-sunset-orange to-sunset-pink",
        },
        {
          key: "enterprise" as SectionKey,
          title: "Enterprise",
          description:
            "Explore pitch competitions, hackathons, and mentorship for young entrepreneurs.",
          Icon: Users,
          gradient: "from-sunset-pink to-sunset-purple",
        },
      ]).map(({ key, title, description, Icon, gradient }) => {
        const isOpen = expandedSection === key;

        return (
          <motion.div key={key} layout>
            {/* Entire card is clickable to toggle open/close */}
            <Card
              onClick={() => setExpandedSection(isOpen ? null : key)}
              aria-expanded={isOpen}
              aria-controls={`section-panel-${key}`}
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

              {/* Hover color wash overlay (subtle) */}
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                aria-hidden
              />

              {/* Collapsed card content (icon, title, copy, CTA) */}
              <div className="relative p-8">
                {/* Icon pill with gradient bg */}
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${gradient} mb-6`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-sunset-pink">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  {description}
                </p>

                {/* Learn More row (kept for visual parity; click handled by card) */}
                <div className="mt-6 flex items-center text-sunset-pink transition-transform duration-300 group-hover:translate-x-2">
                  <span className="text-sm font-semibold">Learn More</span>
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>

              {/* EXPANDING REGION (same logic as before) */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="panel"
                    layout
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={motionTransition}
                    className="overflow-hidden"
                    id={`section-panel-${key}`}
                  >
                    {/* Critical: stopPropagation so clicking inside content doesn't toggle/close */}
                    <CardContent
                      className="p-0"
                      onClick={(e) => e.stopPropagation()}
                      onMouseDown={(e) => e.stopPropagation()}
                    >
                      {key === "advocacy" && <Advocacy />}
                      {key === "curriculum" && <Curriculum />}
                      {key === "enterprise" && <Enterprise />}
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  </div>
</section>

      {/* About Section */}
      <section id="about" className="pt-24 pb-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="bg-sunset-gradient bg-clip-text text-transparent"> Mission </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Project 57 was founded after a shocking statistic: <br/> 
            Just 57% of Americans today are financially literate.
          </p>
        </div>
      </section>

      {/* Mission & Story Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-black/50 p-8 rounded-2xl border border-white/10">
              <h4 className="text-2xl font-bold text-white mb-4">Our Values</h4>
              <div className="space-y-4">
                <div className="border-l-4 border-sunset-orange pl-4">
                  <h5 className="text-white font-semibold">Youth Leadership</h5>
                  <p className="text-gray-400 text-sm">Students lead, design, and deliver our programs</p>
                </div>
                <div className="border-l-4 border-sunset-pink pl-4">
                  <h5 className="text-white font-semibold">Accessibility</h5>
                  <p className="text-gray-400 text-sm">Financial education should be free and available to all</p>
                </div>
                <div className="border-l-4 border-sunset-purple pl-4">
                  <h5 className="text-white font-semibold">Relevance</h5>
                  <p className="text-gray-400 text-sm">Content that reflects diverse experiences and backgrounds</p>
                </div>
              </div>
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

export default OurWork;