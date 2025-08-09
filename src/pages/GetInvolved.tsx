import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Users, Megaphone, HandHeart, BookOpenCheck, Landmark, LineChart, Lightbulb, FileText } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
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

const SingleRoleCard = ({ role }: { role: Role }) => (
  <Card className="bg-black/60 border-white/10 hover:border-sunset-orange/60 transition">
    <CardHeader className="pb-2">
      <div className="flex items-center gap-3">
        <role.icon className="h-7 w-7 text-sunset-orange" />
        <div>
          <CardTitle className="text-white text-lg">{role.title}</CardTitle>
          <p className="text-sunset-pink text-xs">{role.commitment}</p>
        </div>
      </div>
      <CardDescription className="text-gray-300 mt-3">{role.description}</CardDescription>
    </CardHeader>
    <CardContent className="pt-0">
      <ul className="mt-4 text-sm text-gray-200 space-y-2">
        {role.benefits.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sunset-pink" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <a
        href={role.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-sunset-gradient px-4 py-3 font-semibold text-black hover:opacity-90"
      >
        {role.cta} <Mail className="ml-2 h-4 w-4" />
      </a>
    </CardContent>
  </Card>
);

const GridSection = ({ title, roles }: { title: string; roles: Role[] }) => {
  const [expanded, setExpanded] = useState<number | null>(null); 

  return (
  <motion.section
  className="py-12"
  initial="hidden"
  whileInView="show"
  viewport={{ amount: 0.25, once: true }}
  variants={sectionVariants} 
  > 
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
        {roles.map((role, idx) => {
          const isOpen = expanded === idx;
          return (
          <motion.div
            key={idx}
            variants={cardVariants}
            className={
              roles.length % 2 === 1 && idx === roles.length - 1
                ? "md:col-span-2 flex justify-center w-full"
                : "w-full"
            }
          >
 <motion.div
                  layout
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.995 }}
                  transition={{ type: "spring", stiffness: 320, damping: 24 }}
                  onClick={() => setExpanded(isOpen ? null : idx)}
                  className="w-full"
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
                      <CardDescription className="text-gray-300 mt-3">
                        {role.description}
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
                      >
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

function StickySections({
  execRoles,
  associateRoles,
  finalBlock
}: {
  execRoles: Role[];
  associateRoles: Role[];
  finalBlock: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  // fade/replace windows (tweak to taste)
  const execOpacity = useTransform(scrollYProgress, [0.00, 0.20, 0.35], [1, 1, 0]);
  const assocOpacity = useTransform(scrollYProgress, [0.25, 0.40, 0.60], [0, 1, 0]);
  const finalOpacity = useTransform(scrollYProgress, [0.50, 0.70, 0.95], [0, 1, 1]);
const slideUp = (from: number, to: number) =>
  useTransform(scrollYProgress, [from, to], [40, 0]); // px

const execY  = slideUp(0.00, 0.20);
const assocY = slideUp(0.25, 0.40);
const finalY = slideUp(0.50, 0.70);

  return (
    <div ref={ref} className="relative h-[420vh]">
      <motion.div className="sticky top-24" style={{ opacity: execOpacity, y: execY }}>
        <GridSection title="Executive Team" roles={execRoles} />
      </motion.div>

      <motion.div className="sticky top-24" style={{ opacity: assocOpacity, y:assocY }}>
        <GridSection title="Associate Team" roles={associateRoles} />
      </motion.div>

      <motion.div className="sticky top-24" style={{ opacity: finalOpacity, y: finalY }}>
        {finalBlock}
      </motion.div>
    </div>
  );
}

function GetInvolved() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-24 pb-10 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get <span className="bg-sunset-gradient bg-clip-text text-transparent">Involved</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you're a freshman exploring opportunities or a senior who's been to ICDC several times over, 
            join our mission to finally put financial literacy education on the docket in Massachusetts.
          </p>
        </div>
      </section>

  {/* Sticky, replacing sections */}
      <StickySections
        execRoles={execPositions}
        associateRoles={associatePositions}
        finalBlock={
          <section className="py-12 bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Chapter President Card */}
            <Card className="bg-black/60 border-white/10">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Megaphone className="h-7 w-7 text-sunset-orange" />
                  <div>
                    <CardTitle className="text-lg">Chapter President</CardTitle>
                    <p className="text-sunset-pink text-xs">3–5 hrs/week</p>
                  </div>
                </div>
                <CardDescription className="text-gray-300 mt-3">
                  Launch and lead a Project 57 chapter at your school; run workshops, advocacy, and recruitment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-200 space-y-2">
                  <li className="flex gap-2 items-start"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-sunset-pink" />Impact 10+ students annually with monthly events</li>
                  <li className="flex gap-2 items-start"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-sunset-pink" />Distribute 50+ survey responses per chapter</li>
                  <li className="flex gap-2 items-start"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-sunset-pink" />Direct support + training from the COO</li>
                </ul>
                <a
                  href="https://forms.gle/Fbu1pSboTZzRoiBYA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-sunset-gradient px-4 py-3 font-semibold text-black hover:opacity-90"
                >
                  Start a Chapter <Mail className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-white/10">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <HandHeart className="h-7 w-7 text-sunset-orange" />
                  <div>
                    <CardTitle className="text-lg">Volunteer</CardTitle>
                    <p className="text-sunset-pink text-xs">Event-based / flexible</p>
                  </div>
                </div>
                <CardDescription className="text-gray-300 mt-3">
                  Help at workshops, hackathons, and outreach drives—low commitment, real impact.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-200 space-y-2">
                  <li className="flex gap-2 items-start"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-sunset-pink" />Earn verifiable hours via 501(c)(3) sponsorship</li>
                  <li className="flex gap-2 items-start"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-sunset-pink" />Pick one-off events or recurring projects</li>
                  <li className="flex gap-2 items-start"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-sunset-pink" />Join advocacy & hackathon crews statewide</li>
                </ul>
                <a
                  href="https://forms.gle/Fm6r326rC72Hff449"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-sunset-gradient px-4 py-3 font-semibold text-black hover:opacity-90"
                >
                  Sign Up to Volunteer <Mail className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
        }
        />
        </div>
  );
}

export default GetInvolved;

     {/*    Support Our Mission 
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Support Our <span className="bg-sunset-gradient bg-clip-text text-transparent">Mission</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {donationTiers.map((tier, index) => (
              <Card key={index} className="bg-gray-900/50 border-white/10 hover:border-sunset-purple/50 transition-all duration-300 hover:scale-105 text-center">
                <CardHeader>
                  <Gift className="h-8 w-8 text-sunset-purple mx-auto mb-4" />
                  <div className="text-3xl font-bold bg-sunset-gradient bg-clip-text text-transparent mb-2">
                    {tier.amount}
                  </div>
                  <CardTitle className="text-white">{tier.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4">{tier.impact}</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-sunset-pink text-sunset-pink hover:bg-sunset-pink hover:text-white"
                    onClick={() => window.open('#', '_blank')}
                  >
                    Donate Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-4">
              DISCLAIMER: Project 57 is NOT a registered 501(c)(3) nonprofit. We are currently in the process of filing with the IRS.
            </p>
            <Button 
              size="lg"
              className="bg-sunset-gradient hover:opacity-90 text-black font-semibold px-8"
              onClick={() => window.open('#', '_blank')}
            >
              Custom Donation Amount
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
     Partnership Opportunities 
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Partnership <span className="bg-sunset-gradient bg-clip-text text-transparent">Opportunities</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTypes.map((partner, index) => (
              <Card key={index} className="bg-black/50 border-white/10 hover:border-sunset-orange/50 transition-all duration-300">
                <CardHeader>
                  <Heart className="h-8 w-8 text-sunset-orange mb-4" />
                  <CardTitle className="text-white">{partner.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {partner.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    <p className="text-sm font-semibold text-sunset-purple">Partnership Benefits:</p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {partner.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="text-sunset-pink mr-2">•</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-sunset-pink text-sunset-pink hover:bg-sunset-pink hover:text-white"
                    onClick={() => window.open('mailto:partnerships@project57.org', '_blank')}
                  >
                    Explore Partnership
                    <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


        const donationTiers = [
    {
      amount: "$25",
      title: "Supporter",
      impact: "Provides course materials for 1 student for a semester"
    },
    {
      amount: "$100", 
      title: "Advocate",
      impact: "Funds workshop hosting and materials for 5 students"
    },
    {
      amount: "$500",
      title: "Champion", 
      impact: "Sponsors a complete financial literacy workshop series"
    },
    {
      amount: "$1,000",
      title: "Partner",
      impact: "Enables program expansion to a new school district"
    }
  ];

  const partnerTypes = [
    {
      title: "Educational Institutions",
      description: "Schools, colleges, and educational organizations",
      benefits: ["Custom curriculum development", "Teacher training", "Student workshops"]
    },
    {
      title: "Financial Organizations",
      description: "Banks, credit unions, and fintech companies",
      benefits: ["Brand visibility", "Community impact", "Talent pipeline"]
    },
    {
      title: "Community Organizations",
      description: "Nonprofits, youth groups, and community centers",
      benefits: ["Shared resources", "Cross-promotion", "Collaborative programming"]
    }
  ];
      */}
