import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Users, ClipboardCheck, Megaphone, HandHeart, Crown, BookOpenCheck, Landmark, LineChart, Lightbulb, FileText } from 'lucide-react';

type Role = {
  title: string;
  icon: React.ComponentType<any>;
  description: string;
  commitment: string;
  benefits: string[];
  link: string;
  cta: string;
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

const GridSection = ({
  title,
  roles
}: {
  title: string;
  roles: Role[];
}) => (
  <section className="py-12">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {roles.map((role, idx) => (
          <SingleRoleCard key={idx} role={role} />
        ))}

        {/* If odd count, add a placeholder to center the last card on md+ */}
        {roles.length % 2 === 1 && (
          <div className="hidden md:block" aria-hidden />
        )}
      </div>
    </div>
  </section>
);

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
            Join our mission to transform financial literacy education in Massachusetts.
          </p>
        </div>
      </section>

      {/* Executive Team */}
      <GridSection title="Executive Team" roles={execPositions} />

      {/* Associate Team */}
      <GridSection title="Associate Team" roles={associatePositions} />

      {/* Chapter President & Volunteer (side-by-side) */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
