import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Users, ChevronRight, HandHeart, BookOpenCheck, Landmark, LineChart, Lightbulb, FileText } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
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
    icon: BookOpenCheck,
    description: "Build and scale statewide financial literacy workshops and resources.",
    commitment: "≈10 hrs/week",
    benefits: [
      "Approve 5–10 workshop proposals/month",
      "Ship 2 live workshop plans/month",
      "Oversee 10+ resources/month in the bank",
    ],
    link: "https://forms.gle/BEZx25HUU8Me1Q5K8",
    cta: "Apply for CCO"
  },
  {
    title: "Chief Policy Officer (CPO)",
    icon: Landmark,
    description: "Lead legislative research, testimony, and statewide advocacy.",
    commitment: "≈10 hrs/week",
    benefits: [
      "Publish 1 article/week + 1 brief/quarter",
      "Coordinate testimony & legislator outreach",
      "Run weekly policy syncs",
    ],
    link: "https://forms.gle/BEZx25HUU8Me1Q5K8",
    cta: "Apply for CPO"
  },
  {
    title: "Chief Marketing Officer (CMO)",
    icon: LineChart,
    description: "Own brand, content, and growth across IG/TikTok/LinkedIn.",
    commitment: "≈10 hrs/week",
    benefits: [
      "Post 3+ carousels & 2+ reels per platform weekly",
      "Track KPIs monthly",
      "Lead a marketing associate pod",
    ],
    link: "https://forms.gle/BEZx25HUU8Me1Q5K8",
    cta: "Apply for CMO"
  },
  {
    title: "Chief Operating Officer (COO)",
    icon: Users,
    description: "Build chapters, train leaders, and run district operations.",
    commitment: "≈10 hrs/week",
    benefits: [
      "Recruit 10–15 Chapter Presidents",
      "Maintain statewide ops dashboard",
      "Run weekly chapter leader calls",
    ],
    link: "https://forms.gle/BEZx25HUU8Me1Q5K8",
    cta: "Apply for COO"
  },
  {
    title: "Chief Innovation Officer (CIO)",
    icon: Lightbulb,
    description: "Run founder spotlights and two hackathons by Summer ‘26.",
    commitment: "≈10 hrs/week",
    benefits: [
      "Lead 2 hackathons (virtual + Boston)",
      "Source 5–7 founder features/month",
      "Manage enterprise associates",
    ],
    link: "https://forms.gle/BEZx25HUU8Me1Q5K8",
    cta: "Apply for CIO"
  },
];

const associatePositions: Role[] = [
  {
    title: "Marketing Associate",
    icon: LineChart,
    description: "Create content and amplify statewide campaigns.",
    commitment: "3–5 hrs/week",
    benefits: [
      "Post 2–3 pieces/week",
      "Run outreach to schools/media weekly",
      "Track performance in shared dashboard",
    ],
    link: "https://forms.gle/i77LyrGBKr7mofxs8",
    cta: "Apply as Marketing Associate"
  },
  {
    title: "Enterprise Associate",
    icon: Lightbulb,
    description: "Source founders and support hackathon logistics.",
    commitment: "3–5 hrs/week",
    benefits: [
      "Verify/interview founders monthly",
      "Promote to FBLA/DECA & clubs statewide",
      "Maintain clean outreach records",
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
      "Run 1+ local workshop/month",
      "Draft 1–2 explainers/month",
      "Update resource bank with vetted sources",
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
      "Write 1–2 posts/month",
      "Help prep testimony & petitions",
      "Distribute + analyze survey data",
    ],
    link: "https://forms.gle/i77LyrGBKr7mofxs8",
    cta: "Apply as Policy Associate"
  },
];

const chapterPresident: Role[] = [
  {
    title: "Chapter President",
    icon: LineChart,
    description: "Launch and lead a Project 57 chapter at your school; run workshops, advocacy, and recruitment.",
    commitment: "3–5 hrs/week",
    benefits: [
      "Build a team of 5–10 members",
      "Gain leadership experience and mentorship",
      "Join a statewide network of leaders",
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
      "Earn verifiable hours via 501(c)(3) sponsorship",
      "Pick one-off events or recurring projects",
      "Join advocacy & hackathon crews statewide",
    ],
    link: "https://forms.gle/Fm6r326rC72Hff449",
    cta: "Sign Up to Volunteer"
  },
]

const GridSection = ({ title, roles, compact = false, centerLast = true, }: { title: string; roles: Role[]; compact?: boolean; centerLast?: boolean;}) => {
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
      className={compact ? "": "py-12"}
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
      transition={{ staggerChildren: 0.08 }}
  > 
    <div className={compact ? "": "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"}>
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
                      "border transition-colors " +
                      (isOpen
                        ? "bg-white/10 border-sunset-orange/70"
                        : "bg-black/60 border-white/10 hover:border-sunset-orange/60")
                    }
                  >
                    {/* Header */}
<CardHeader className="pb-2">
  <div className="flex items-center gap-3">
    <role.icon className="h-7 w-7 text-sunset-orange" />
    <div>
      <CardTitle className="text-white text-lg">{role.title}</CardTitle>
      <p className="text-sunset-pink text-xs">{role.commitment}</p>
    </div>
  </div>

  {/* description + chevron at the far right */}
  <CardDescription className="text-gray-300 mt-3">
    <span className="inline">{role.description}</span>
    <button
      type="button"
      aria-label={isOpen ? "Collapse" : "Expand"}
      onClick={(e) => {
        e.stopPropagation();
        setExpanded(isOpen ? null : idx);
      }}
      className="ml-2 inline-flex items-center rounded-md p-1.5 align-middle text-sunset-orange hover:text-white/90 hover:bg-white/5 transition"
    >
      <ChevronRight
        className={`h-4 w-4 transition-transform ${isOpen ? "rotate-90" : ""}`}
      />
    </button>
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

                        {role.cta} <Mail className="ml-2 h-4 w-4" />
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
  return (
    <div className="min-h-screen bg-gradient from-gray-900 to-black to-gray-900 text-white">
      <Navigation />
      
      {/* Hero */}
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
      Get <span className="bg-sunset-gradient bg-clip-text text-transparent">Involved</span>
    </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Whether you're a freshman exploring opportunities or a senior who's been to ICDC several times over, 
            join our mission to finally put financial literacy education on the docket in Massachusetts.
          </p>
  </div>
              </div>
      </section>
    
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-b from-transparent to-black" />
      </section>

      <GridSection title="Executive Team" roles={execPositions} />
      <GridSection title="Associate Team" roles={associatePositions} />
      < div className = "mb-12">
      <GridSection compact centerLast={false} title="Local Opportunities" roles={[chapterPresident[0], volunteerRole[0]]} />
        </div>
    </div>
  );
}

export default GetInvolved;
