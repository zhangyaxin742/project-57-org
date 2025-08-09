
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Megaphone, Heart, Gift, HandHeart, ExternalLink, Mail, ClipboardCheck } from 'lucide-react';
import { useRef } from 'react'; 

const scroller = useRef<HTMLDivElement | null>(null);

const GetInvolved = () => {
  const opportunities = [
    {
      title: "Executive Team",
      icon: Users,
      description: "Direct the statewide growth, operations, and strategy of Project 57.",
      commitment: "5-10 hours/week",
      benefits: [
        "Lead and manage cross-functional teams impacting 500+ students annually",
        "Gain extensive project management & nonprofit leadership experience",
        "Network with legislators, educators, and business leaders statewide"
      ], 
      link: "https://forms.gle/BEZx25HUU8Me1Q5K8",
      cta: "Apply for Executive Team"
    },
    {
      title: "Associate Team",
      icon: ClipboardCheck,
      description: "Drive specialized initiatives in curriculum, policy, enterprise, or marketing.",
      commitment: "3-5 hours/week",
      benefits: [
        "Produce portfolio-ready outputs (e.g., published briefs, live workshops)",
        "Collaborate with statewide peers under executive mentorship",
        "Develop expertise in public speaking, outreach, and content creation"
      ], 
      link: "https://forms.gle/i77LyrGBKr7mofxs8", 
      cta: "Apply as an Associate"
    },
    {
      title: "Chapter President",
      icon: Megaphone,
      description: "Launch and lead a Project 57 chapter at your high school.",
      commitment: "3-5 hours/week",
      benefits: [
        "Found and grow a chapter impacting (at least) 10 students annually",
        "Organize workshops, advocacy campaigns, and recruitment drives",
        "Earn standout leadership & policy impact for college apps"
      ], 
      link: "https://forms.gle/Fbu1pSboTZzRoiBYA", 
      cta: "Start a Chapter"
    },
    {
      title: "Volunteer",
      icon: HandHeart,
      description: "Support events, workshops, hackathons, and outreach efforts.",
      commitment: "Event-based / flexible",
      benefits: [
        "Earn verifiable community service hours through a 501(c)(3)",
        "Choose from one-off events or recurring contributions",
        "Participate in statewide hackathons & advocacy initiatives for financial literacy"
      ], 
      link: "https://forms.gle/Fm6r326rC72Hff449", 
      cta: "Sign Up to Volunteer"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get <span className="bg-sunset-gradient bg-clip-text text-transparent">Involved</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join our mission to transform financial literacy education in Massachusetts. 
            Whether you're a student, parent, educator, or advocate, we'd love you on board.
          </p>
        </div>
      </section>

      {/* Volunteer Opportunities */}
{/* Opportunities Carousel */}
<section className="py-20 bg-gray-900">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl md:text-3xl font-bold">Opportunities</h2>
      {/* optional arrows */}
      <div className="hidden md:flex gap-2">
        <button
          onClick={() => scroller.current?.scrollBy({ left: -520, behavior: 'smooth' })}
          className="rounded-lg px-3 py-2 bg-white/5 hover:bg-white/10"
        >‹</button>
        <button
          onClick={() => scroller.current?.scrollBy({ left: 520, behavior: 'smooth' })}
          className="rounded-lg px-3 py-2 bg-white/5 hover:bg-white/10"
        >›</button>
      </div>
    </div>

    <div
      ref={scroller}
      className="
        flex gap-6 overflow-x-auto scroll-smooth
        snap-x snap-mandatory
        [-ms-overflow-style:none] [scrollbar-width:none]
      "
      style={{scrollbarWidth:'none'} as any}
    >
      {/* hide scrollbars */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>

      {opportunities.map((o, i) => (
        <div
          key={i}
          className="
            snap-center shrink-0
            w-[88%] sm:w-[70%] md:w-[520px]
          "
        >
          <Card className="h-full bg-gradient-to-b from-black/70 to-black/40 border border-white/10 hover:border-sunset-orange/60 transition">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <o.icon className="h-8 w-8 text-sunset-orange" />
                <div>
                  <CardTitle className="text-xl">{o.title}</CardTitle>
                  <p className="text-sunset-pink text-sm">{o.commitment}</p>
                </div>
              </div>
              <CardDescription className="text-gray-300 mt-4 text-base">
                {o.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="mt-4 rounded-xl bg-white/5 p-4">
                <p className="text-sm font-semibold text-sunset-purple mb-2">Benefits</p>
                <ul className="text-sm text-gray-200 space-y-2">
                  {o.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sunset-pink" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={o.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-sunset-gradient px-4 py-3 font-semibold text-black hover:opacity-90"
              >
                {o.cta ?? "Apply"}
              </a>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  </div>
</section>

          </div>
  );
};

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
