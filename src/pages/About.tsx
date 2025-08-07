import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Heart, Award, MapPin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="bg-sunset-gradient bg-clip-text text-transparent">Project 57</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            A youth-led Massachusetts nonprofit transforming financial literacy education 
            through innovative programs, legislative advocacy, and entrepreneurship support.
          </p>
        </div>
      </section>

      {/* Mission & Story Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Our <span className="bg-sunset-gradient bg-clip-text text-transparent"> Mission </span> </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Project 57 exists to ensure that every young person in Massachusetts 
                has access to comprehensive, engaging, and culturally relevant financial 
                literacy education. We believe that financial empowerment is a 
                fundamental right, not a privilege.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Through our three core programs - Legislative Advocacy, PFin Curriculum, 
                and Youth Enterprise - we are building a more financially inclusive 
                future for all young people.
              </p>
            </div>
            
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
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-sunset-orange/10 to-sunset-purple/10 rounded-2xl p-8 md:p-12 border border-sunset-pink/20 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Make an Impact?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of young people across Massachusetts who are working 
              to create a more financially inclusive future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-sunset-gradient hover:opacity-90 text-white font-semibold px-8 py-3"
              >
                Contact Us
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-3"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


  {/*
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
      </section> */}


