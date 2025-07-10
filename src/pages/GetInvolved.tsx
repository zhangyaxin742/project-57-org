
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BookOpen, Megaphone, Heart, Gift, Calendar, ExternalLink, Mail } from 'lucide-react';

const GetInvolved = () => {
  const opportunities = [
    {
      title: "Student Ambassador",
      icon: Users,
      description: "Represent PROJECT 57 at your school and help expand our reach",
      commitment: "2-3 hours/week",
      benefits: ["Leadership experience", "Community service hours", "Networking opportunities"]
    },
    {
      title: "Curriculum Contributor",
      icon: BookOpen,
      description: "Help develop and review financial literacy educational content",
      commitment: "Flexible",
      benefits: ["Build portfolio", "Gain teaching experience", "Impact curriculum design"]
    },
    {
      title: "Advocacy Volunteer",
      icon: Megaphone,
      description: "Support legislative tracking and policy research efforts",
      commitment: "1-2 hours/week",
      benefits: ["Policy experience", "Research skills", "Civic engagement"]
    },
    {
      title: "Event Support",
      icon: Calendar,
      description: "Help organize workshops, competitions, and community events",
      commitment: "Event-based",
      benefits: ["Event planning skills", "Team collaboration", "Direct impact"]
    }
  ];

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
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Volunteer <span className="bg-sunset-gradient bg-clip-text text-transparent">Opportunities</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {opportunities.map((opportunity, index) => (
              <Card key={index} className="bg-black/50 border-white/10 hover:border-sunset-orange/50 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <opportunity.icon className="h-8 w-8 text-sunset-orange" />
                    <div>
                      <CardTitle className="text-white">{opportunity.title}</CardTitle>
                      <p className="text-sunset-pink text-sm">{opportunity.commitment}</p>
                    </div>
                  </div>
                  <CardDescription className="text-gray-300">
                    {opportunity.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-semibold text-sunset-purple">Benefits:</p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {opportunity.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="text-sunset-pink mr-2">•</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    className="w-full bg-sunset-gradient hover:opacity-90 text-black font-semibold"
                    onClick={() => window.open('mailto:volunteer@project57.org', '_blank')}
                  >
                    Apply to Volunteer
                    <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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

    </div>
  );
};
     
     
     
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
      */}
