import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Trophy, Calendar, ExternalLink, MapPin, Users } from 'lucide-react';
import { useState } from 'react';

const Enterprise = () => {
  const [selectedFounder, setSelectedFounder] = useState(null);
          
  /*
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

   return (
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-sunset-gradient bg-clip-text text-transparent">Enterprise</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              This page is under construction. Check back soon for pitch competitions, hackathons, and featured founders!
            </p>
          </div>
        </section>
      </div>
    );
};

export default Enterprise;
