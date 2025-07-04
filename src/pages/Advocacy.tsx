
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Scale, FileText, Calendar, Users, ExternalLink, Download, TrendingUp } from 'lucide-react';

const Advocacy = () => {
  const bills = [
    {
      id: "H.3456",
      title: "Student Financial Literacy Education Act",
      status: "Committee Review",
      progress: 60,
      sponsor: "Rep. Sarah Johnson",
      summary: "Requires financial literacy education in all Massachusetts high schools"
    },
    {
      id: "S.1234", 
      title: "Youth Banking Access Initiative",
      status: "Passed House",
      progress: 80,
      sponsor: "Sen. Michael Chen",
      summary: "Expands access to banking services for minors with parental consent"
    },
    {
      id: "H.7890",
      title: "Consumer Protection for Students",
      status: "In Committee",
      progress: 40,
      sponsor: "Rep. Maria Rodriguez",
      summary: "Enhanced protections against predatory lending targeting students"
    }
  ];

  const resources = [
    {
      title: "Lobbying 101 Guide",
      description: "Complete handbook for engaging with legislators",
      type: "PDF Guide"
    },
    {
      title: "Grassroots Organizing Toolkit",
      description: "Build community support for financial literacy initiatives", 
      type: "Resource Kit"
    },
    {
      title: "Email Templates & Scripts",
      description: "Pre-written communications for contacting representatives",
      type: "Templates"
    },
    {
      title: "Social Media Shareables",
      description: "Graphics and content for advocacy campaigns",
      type: "Media Kit"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Legislative <span className="bg-sunset-gradient bg-clip-text text-transparent">Advocacy</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Track financial literacy legislation, access policy resources, and take action 
            to create systemic change in Massachusetts.
          </p>
        </div>
      </section>

      {/* Bill Tracker */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Bill <span className="bg-sunset-gradient bg-clip-text text-transparent">Tracker</span>
            </h2>
            <div className="text-sm text-gray-400 flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Powered by Billtrack50.com API
            </div>
          </div>
          
          <div className="space-y-6">
            {bills.map((bill, index) => (
              <Card key={index} className="bg-black/50 border-white/10 hover:border-sunset-orange/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-white flex items-center gap-3">
                        <Scale className="h-5 w-5 text-sunset-purple" />
                        {bill.id}: {bill.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300 mt-2">
                        {bill.summary}
                      </CardDescription>
                      <p className="text-sunset-pink text-sm mt-2">Sponsored by {bill.sponsor}</p>
                    </div>
                    <span className="text-xs bg-sunset-gradient px-3 py-1 rounded-full text-black font-semibold">
                      {bill.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm text-gray-400 mb-1">
                        <span>Progress</span>
                        <span>{bill.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-sunset-gradient h-2 rounded-full transition-all duration-500" 
                          style={{ width: `${bill.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-sunset-pink text-sunset-pink hover:bg-sunset-pink hover:text-white"
                      onClick={() => window.open('#', '_blank')}
                    >
                      View Full Bill Text
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Brief Library */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Policy <span className="bg-sunset-gradient bg-clip-text text-transparent">Brief Library</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="bg-gray-900/50 border-white/10 hover:border-sunset-purple/50 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <FileText className="h-8 w-8 text-sunset-orange mb-2" />
                  <CardTitle className="text-white text-lg">
                    Financial Literacy Policy Brief #{item}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Comprehensive analysis of current legislation and policy recommendations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="ghost" 
                    className="w-full text-sunset-pink hover:bg-sunset-pink/10"
                    onClick={() => window.open('#', '_blank')}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Civic Toolkit */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Civic <span className="bg-sunset-gradient bg-clip-text text-transparent">Toolkit</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="bg-black/50 border-white/10 hover:border-sunset-orange/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    <Users className="h-5 w-5 text-sunset-pink" />
                    {resource.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-gray-700 px-3 py-1 rounded-full text-gray-300">
                      {resource.type}
                    </span>
                    <Button 
                      size="sm"
                      className="bg-sunset-gradient hover:opacity-90 text-black font-semibold"
                      onClick={() => window.open('#', '_blank')}
                    >
                      Access Resource
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Legislature Calendar */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Massachusetts <span className="bg-sunset-gradient bg-clip-text text-transparent">Legislature Calendar</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Stay informed about upcoming legislative sessions and committee meetings.
          </p>
          
          <Card className="bg-gray-900/50 border-white/10">
            <CardHeader>
              <Calendar className="h-12 w-12 text-sunset-purple mx-auto mb-4" />
              <CardTitle className="text-white">Upcoming Sessions</CardTitle>
              <CardDescription className="text-gray-300">
                Synced with the official Massachusetts State Government calendar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="bg-sunset-gradient hover:opacity-90 text-black font-semibold"
                onClick={() => window.open('https://malegislature.gov/Events', '_blank')}
              >
                View Full Calendar
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Advocacy;
