
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Heart, Award, MapPin, Mail } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Founder & Executive Director",
      bio: "Harvard undergraduate studying Economics and Public Policy. Founded PROJECT 57 at age 16.",
      image: "👩‍💼"
    },
    {
      name: "Marcus Johnson", 
      role: "Program Director",
      bio: "MIT student passionate about financial technology and youth empowerment.",
      image: "👨‍💻"
    },
    {
      name: "Elena Rodriguez",
      role: "Legislative Affairs Coordinator", 
      bio: "Boston University Law student with expertise in education policy.",
      image: "👩‍⚖️"
    },
    {
      name: "Jordan Kim",
      role: "Curriculum Development Lead",
      bio: "Northeastern co-op student creating engaging financial literacy content.",
      image: "👨‍🎓"
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

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="bg-sunset-gradient bg-clip-text text-transparent">PROJECT 57</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            A youth-led Massachusetts nonprofit transforming financial literacy education 
            through innovative programs, legislative advocacy, and entrepreneurship support.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="bg-black/50 border-white/10 hover:border-sunset-orange/50 transition-all duration-300">
              <CardHeader>
                <Target className="h-8 w-8 text-sunset-orange mb-4" />
                <CardTitle className="text-white text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  To empower Massachusetts youth with the financial knowledge, entrepreneurial skills, 
                  and civic engagement tools necessary to achieve economic independence and create 
                  systemic change in financial education policy.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-white/10 hover:border-sunset-purple/50 transition-all duration-300">
              <CardHeader>
                <Heart className="h-8 w-8 text-sunset-purple mb-4" />
                <CardTitle className="text-white text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  A Massachusetts where every young person has access to comprehensive financial 
                  literacy education, entrepreneurship opportunities, and the civic tools to 
                  advocate for equitable economic policies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
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

      {/* Timeline */}
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

      {/* Impact Stats */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our <span className="bg-sunset-gradient bg-clip-text text-transparent">Impact</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-sunset-gradient bg-clip-text text-transparent mb-2">
                2,500+
              </div>
              <div className="text-gray-300">Students Reached</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-sunset-gradient bg-clip-text text-transparent mb-2">
                12
              </div>
              <div className="text-gray-300">School Partnerships</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-sunset-gradient bg-clip-text text-transparent mb-2">
                6
              </div>
              <div className="text-gray-300">Bills Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-sunset-gradient bg-clip-text text-transparent mb-2">
                $150K
              </div>
              <div className="text-gray-300">Youth Funding Secured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Get in <span className="bg-sunset-gradient bg-clip-text text-transparent">Touch</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-black/50 border-white/10">
              <CardHeader>
                <MapPin className="h-6 w-6 text-sunset-orange mx-auto mb-2" />
                <CardTitle className="text-white">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Boston, Massachusetts<br />
                  Serving statewide
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-white/10">
              <CardHeader>
                <Mail className="h-6 w-6 text-sunset-purple mx-auto mb-2" />
                <CardTitle className="text-white">Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  hello@project57.org<br />
                  partnerships@project57.org
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
