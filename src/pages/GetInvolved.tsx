import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Users, ChevronRight, HandHeart, BookOpenCheck, Landmark, LineChart, GraduationCap, Lightbulb, ChartNoAxesCombined, FileText, Album, MessageCircleHeart} from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import type React from 'react';
import type { Variants } from 'framer-motion';

type Role = {
  title: string;
  icon: React.ComponentType<any>;
  description: string;
  commitment: string;
  benefits: string[];
  link: string;
  cta: string;
};

// variants (top of file)

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.08 }
  }
};
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, 
    transition: { duration: 0.35, ease: "easeOut" }
   }
};

const execPositions: Role[] = [
  {
    title: "Chief Curriculum Officer (CCO)",
    icon: Album,
    description: "Build and scale statewide financial literacy workshops and resources.",
    commitment: "~10 hrs/week",
    benefits: [
      "Lead a statewide education initiative recognized by legislators and press",
      "Graduate with 20+ published workshop plans in your portfolio",
      "Work alongside policy, marketing, and operations executives your age",
    ],
    link: "https://forms.gle/BEZx25HUU8Me1Q5K8",
    cta: "Apply for CCO"
  },
  {
    title: "Chief Policy Officer (CPO)",
    icon: Landmark,
    description: "Lead legislative research, testimony, and statewide advocacy.",
    commitment: "~10 hrs/week",
    benefits: [
"Testify in front of lawmakers and have your name in state hearing records",
      "Publish briefs and op-eds cited by local media and nonprofits",
      "Run an advocacy network with direct connections to state-level decision makers",
    ],
    link: "https://forms.gle/BEZx25HUU8Me1Q5K8",
    cta: "Apply for CPO"
  },
  {
    title: "Chief Marketing Officer (CMO)",
    icon: LineChart,
    description: "Own brand, content, and growth across IG/TikTok/LinkedIn.",
    commitment: "~10 hrs/week",
    benefits: [
   "Grow a statewide brand to 10k+ combined followers",
      "Run high-visibility campaigns featured in partner org channels",
      "Lead a creative team producing portfolio-ready content weekly",
    ],
    link: "https://forms.gle/BEZx25HUU8Me1Q5K8",
    cta: "Apply for CMO"
  },
  {
    title: "Chief Operating Officer (COO)",
    icon: Users,
    description: "Build chapters, train leaders, and run district operations.",
    commitment: "~10 hrs/week",
    benefits: [
 "Recruit and mentor a statewide network of Chapter Presidents",
            "Be known as the organizer who scaled Project 57 to every district",
      "Graduate with proven leadership in a 501(c)(3)-sponsored initiative",
    ],
    link: "https://forms.gle/BEZx25HUU8Me1Q5K8",
    cta: "Apply for COO"
  },
  {
    title: "Chief Innovation Officer (CIO)",
    icon: Lightbulb,
    description: "Run founder spotlights and two hackathons by Summer ‘26.",
    commitment: "~10 hrs/week",
    benefits: [
  "Host hackathons bringing together 100+ students, founders, and sponsors",
      "Curate and publish founder features read across the state",
      "Graduate with innovation projects recognized by partner organizations",
    ],
    link: "https://forms.gle/BEZx25HUU8Me1Q5K8",
    cta: "Apply for CIO"
  },
];

const associatePositions: Role[] = [
  {
    title: "Marketing Associate",
    icon: MessageCircleHeart,
    description: "Create content and amplify statewide campaigns.",
    commitment: "3–5 hrs/week",
    benefits: [
      "Have your work seen by thousands of students across Massachusetts",
      "Drive campaigns that land in schools, media, and student feeds",
      "Graduate with a portfolio of growth wins tied to a statewide brand",
    ],
    link: "https://forms.gle/i77LyrGBKr7mofxs8",
    cta: "Apply as Marketing Associate"
  },
  {
    title: "Enterprise Associate",
    icon: ChartNoAxesCombined,
    description: "Source founders and support hackathon logistics.",
    commitment: "3–5 hrs/week",
    benefits: [
      "Interview and spotlight student founders from across the state",
      "Get behind-the-scenes access to statewide hackathons and events",
      "Build a founder network you can tap for years to come",
    ],
    link: "https://forms.gle/i77LyrGBKr7mofxs8",
    cta: "Apply as Enterprise Associate"
  },
  {
    title: "Curriculum Associate",
    icon: BookOpenCheck,
    description: "Design and deliver monthly workshops in your community.",
    commitment: "3–5 hrs/week",
    benefits: [
      "Host workshops that put your name in front of students and educators",
      "Publish explainer content that gets used in multiple districts",
      "Shape the statewide resource bank with tools you choose",
    ],
    link: "https://forms.gle/i77LyrGBKr7mofxs8",
    cta: "Apply as Curriculum Associate"
  },
  {
    title: "Policy Associate",
    icon: FileText,
    description: "Support bill tracking, writing, and legislator outreach.",
    commitment: "3–5 hrs/week",
    benefits: [
      "Get credited on briefs and testimony sent to the State House",
      "Work alongside peers to influence actual legislation",
      "Collect data that shapes how policymakers see student priorities",
    ],
    link: "https://forms.gle/i77LyrGBKr7mofxs8",
    cta: "Apply as Policy Associate"
  },
];

const chapterPresident: Role[] = [
  {
    title: "Chapter President",
    icon: GraduationCap,
    description: "Lead the push for financial literacy at your school — with full backing from the statewide Project 57 network.",
    commitment: "3–5 hrs/week",
    benefits: [
            "Be the voice for financial literacy with admins and your school board",
      "Push for graduation requirements and policy changes that outlast you",
      "Get direct support, resources, and training from statewide leadership",
    ],
    link: "https://forms.gle/Fbu1pSboTZzRoiBYA",
    cta: "Start A Chapter"
  },
];

const volunteerRole: Role[] = [ 
  {
    title: "Volunteer",
    icon: HandHeart,
    description: "Help at workshops, hackathons, and outreach drives—low commitment, real impact.",
    commitment: "Event-based / flexible",
    benefits: [
      "Get verifiable service hours you can submit to your school or college apps",
      "Pick and choose events or projects that fit your schedule",
      "Join statewide teams at workshops, hackathons, and advocacy events",
    ],
    link: "https://forms.gle/Fm6r326rC72Hff449",
    cta: "Sign Up to Volunteer"
  },
]

const GridSection = ({ title, roles, compact = false, centerLast = true, id, }: { title: React.ReactNode; roles: Role[]; compact?: boolean; centerLast?: boolean; id?: string;}) => {
  const [expanded, setExpanded] = useState<number | null>(null); 
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.25 }); 
    useEffect(() => {
    controls.start(inView ? "show" : "hidden");
  }, [inView, controls]);

  return (
  <motion.section
      ref={ref}
      id={id}
      className={compact ? "": "py-12"}
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
      transition={{ staggerChildren: 0.08 }}
  > 
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
        {roles.map((role, idx) => {
          const isOpen = expanded === idx; 
    const isOddLast = roles.length % 2 === 1 && idx === roles.length - 1;
    
          return (
          <motion.div
            key={idx}
            variants={cardVariants}
            className={centerLast && isOddLast ? "md:col-span-2" : ""}
          >
                <motion.div
                  layout
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.995 }}
                  transition={{ type: "spring", stiffness: 320, damping: 24 }}
                  onClick={() => setExpanded(isOpen ? null : idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setExpanded(isOpen ? null : idx);
                    }
                  }}
                  className={
                    centerLast && isOddLast
                      ? "w-full md:max-w-[560px] mx-auto" // center + cap width only for odd-last
                      : "w-full"
                  }
                >
<Card
  className={
    "group overflow-hidden border rounded-xl transition-colors " +
        "bg-[linear-gradient(30deg,var(--tw-gradient-stops))] " + 
    (isOpen
      ? "from-black via-gray-900 via-gray-800 to-black border-sunset-orange/70"
      : "from-black to-gray-900 border-white/10 hover:border-sunset-orange/60")
  }
>
                    {/* Header */}
<CardHeader className="pb-2">
  <div className="flex items-center gap-3">
    <role.icon className="h-7 w-7 text-sunset-orange" />
    <div className="flex items-center gap-2">
      <CardTitle className="text-white text-lg">{role.title}</CardTitle>
      <button
        type="button"
        aria-label={isOpen ? "Collapse" : "Expand"}
        onClick={(e) => {
          e.stopPropagation();
          setExpanded(isOpen ? null : idx);
        }}
        className="ml-1 inline-flex items-center rounded-md p-1.5 align-middle text-sunset-orange hover:text-white/90 hover:bg-white/5 transition"
      >
        <ChevronRight
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-90" : ""}`}
        />
      </button>
    </div>
  </div>

  <p className="text-sunset-pink text-xs">{role.commitment}</p>

  <CardDescription className="text-gray-300 mt-3">
    <span className="inline">{role.description}</span>
  </CardDescription>
</CardHeader>
                    {/* Expandable body */}
                    <CardContent className="pt-0">
                      <motion.div
                        layout
                        initial={false}
                        animate={{
                          height: isOpen ? "auto" : 0,
                          opacity: isOpen ? 1 : 0,
                          marginTop: isOpen ? 16 : 0
                        }}
                        className={isOpen ? "overflow-visible" : "overflow-hidden"}
                        id={`role-panel-${idx}`}>
                        <ul className="text-sm text-gray-200 space-y-2">
                          {role.benefits.map((b, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sunset-pink" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                      <a
                        href={role.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-sunset-gradient px-4 py-3 font-semibold text-black hover:opacity-90"
                        onClick={(e) => e.stopPropagation()} > 

                        {role.cta} <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

function GetInvolved() {
  const location = useLocation();
  useEffect(() => {
    const hash = (location.hash || "").slice(1);
    if (!hash) return;
    setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-gradient from-gray-900 to-black to-gray-900 text-white">
      <Navigation />
      
      {/* Hero */}
          <section className="pt-16 pb-16 relative items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
  <div className="pointer-events-none absolute inset-0">
        {/* Animated background elements */}
        <div  className=" absolute top-1/4 left-1/4 w-96 h-96 bg-sunset-pink/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sunset-orange/10 rounded-full blur-3xl animate-pulse" 
            style={{
          animationDelay: '1s'
        }}
            /> 
  </div>
        
  <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 text-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
      Get <span className="bg-sunset-gradient bg-clip-text text-transparent">Involved</span>
    </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
  Whether you’re new to high school or already organizing in your district, 2025 is the year we make financial literacy non-negotiable in Massachusetts.
          </p>
  </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-b from-transparent to-black" />
      </section>
 
      <GridSection          title={
    <>
      <span className="text-white"> Executive </span>
      <span className="bg-sunset-gradient bg-clip-text text-transparent">Team</span>
    </>
  } roles={execPositions} />
<div className="pointer-events-none -my-12 h-28 w-full bg-gradient-to-b from-transparent via-sunset-purple/20 to-transparent" />

      <GridSection          title={
    <>
      <span className="text-white">Associate </span>
      <span className="bg-sunset-gradient bg-clip-text text-transparent">Team</span>
    </>
  } roles={associatePositions} />
      <div className="pointer-events-none -my-12 h-28 w-full bg-gradient-to-b from-transparent via-sunset-purple/20 to-transparent" />

      <GridSection id="president" compact centerLast={false} 
         title={
    <>
      <span className="text-white">Local </span>
      <span className="bg-sunset-gradient bg-clip-text text-transparent">Opportunities</span>
    </>
  } roles={[chapterPresident[0], volunteerRole[0]]} />
            <div className="pointer-events-none -my-16 h-40 w-full bg-gradient-to-b from-transparent via-sunset-purple/20 to-transparent" />

    </div>
  );
}

export default GetInvolved;
