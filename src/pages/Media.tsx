import React, { useState } from "react";
import { motion } from "framer-motion";
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Play, 
  FileText, 
  Image, 
  Calendar, 
  ExternalLink, 
  Download,
  Eye,
  Share2
} from 'lucide-react';

type MediaItem = {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'video' | 'press' | 'gallery' | 'article';
  thumbnail?: string;
  url?: string;
  tags?: string[];
  featured?: boolean;
};

const sampleMediaItems: MediaItem[] = [
  {
    id: "1",
    title: "Financial Literacy in Massachusetts Schools",
    description: "An in-depth documentary examining the current state of financial education in Massachusetts public schools, featuring interviews with students, teachers, and policy makers about the urgent need for comprehensive financial literacy curriculum.",
    date: "2024-09-15",
    type: "video",
    thumbnail: "/assets/mefa_logo.jpg",
    url: "https://example.com/video1",
    tags: ["education", "policy", "massachusetts", "documentary"],
    featured: true
  },
  {
    id: "2",
    title: "Project 57 Partners with MEFA for Statewide Initiative",
    description: "Project 57 announces groundbreaking partnership with Massachusetts Educational Financing Authority to expand financial literacy programs across all public high schools in the Commonwealth.",
    date: "2024-08-28",
    type: "press",
    thumbnail: "/assets/MFEC.png",
    url: "https://example.com/press1",
    tags: ["announcement", "partnership", "MEFA", "expansion"],
    featured: true
  },
  {
    id: "3",
    title: "Student Success Stories: Breaking the Cycle",
    description: "A powerful photo gallery showcasing students from underserved communities who have transformed their financial futures through Project 57's comprehensive literacy programs.",
    date: "2024-08-10",
    type: "gallery",
    thumbnail: "/assets/babson.png",
    url: "https://example.com/gallery1",
    tags: ["students", "success", "community", "transformation"],
    featured: true
  },
  {
    id: "4",
    title: "The Digital Revolution in Financial Education",
    description: "Thought leadership piece exploring how digital tools and AI are revolutionizing financial education, making it more accessible and engaging for today's students.",
    date: "2024-07-22",
    type: "article",
    thumbnail: "/assets/oee.png",
    url: "https://example.com/article1",
    tags: ["technology", "innovation", "digital learning", "accessibility"],
    featured: false
  },
  {
    id: "5",
    title: "Historic Victory: Massachusetts Passes Comprehensive Financial Literacy Requirements",
    description: "Breaking news coverage of the unanimous passage of legislation requiring all Massachusetts high school students to complete a semester-long financial literacy course before graduation.",
    date: "2024-06-15",
    type: "press",
    thumbnail: "/assets/midas.png",
    url: "https://example.com/press2",
    tags: ["legislation", "victory", "policy", "requirements"],
    featured: false
  },
  {
    id: "6",
    title: "State House Advocacy Day 2024",
    description: "Photo highlights from our annual advocacy day where students, parents, and educators gathered at the Massachusetts State House to champion financial literacy legislation.",
    date: "2024-05-30",
    type: "gallery",
    thumbnail: "/assets/text-logo.png",
    url: "https://example.com/gallery2",
    tags: ["advocacy", "state house", "legislation", "community"],
    featured: false
  },
  {
    id: "7",
    title: "Executive Director Interview: The Path Forward",
    description: "Exclusive 30-minute interview with Project 57's Executive Director discussing the organization's vision, recent victories, and the critical importance of financial literacy in breaking cycles of poverty.",
    date: "2024-05-15",
    type: "video",
    thumbnail: "/assets/transparent-logo.png",
    url: "https://example.com/video2",
    tags: ["interview", "leadership", "vision", "poverty"],
    featured: false
  },
  {
    id: "8",
    title: "Research Report: Financial Literacy's Impact on Youth Employment",
    description: "Comprehensive analysis of how financial literacy education correlates with improved employment outcomes, higher wages, and better financial decision-making among young adults in Massachusetts.",
    date: "2024-04-20",
    type: "article",
    thumbnail: "/assets/babson.png",
    url: "https://example.com/article2",
    tags: ["research", "employment", "outcomes", "data"],
    featured: false
  },
  {
    id: "9",
    title: "Boston Globe: 'A Generation Prepared for Financial Success'",
    description: "Feature article in the Boston Globe highlighting Project 57's innovative approach to financial education and its measurable impact on student financial behavior.",
    date: "2024-04-08",
    type: "press",
    thumbnail: "/assets/mefa-text.png",
    url: "https://example.com/press3",
    tags: ["media coverage", "boston globe", "innovation", "impact"],
    featured: false
  },
  {
    id: "10",
    title: "Teacher Training Workshop Series",
    description: "Photo documentation of our intensive summer workshop series where over 200 Massachusetts educators learned to implement engaging financial literacy curricula in their classrooms.",
    date: "2024-03-25",
    type: "gallery",
    thumbnail: "/assets/MFEC.png",
    url: "https://example.com/gallery3",
    tags: ["teachers", "training", "professional development", "curriculum"],
    featured: false
  },
  {
    id: "11",
    title: "Peer Education Model: Students Teaching Students",
    description: "Documentary showcasing Project 57's innovative peer education program where high school students become certified financial literacy instructors for their younger peers.",
    date: "2024-03-10",
    type: "video",
    thumbnail: "/assets/oee.png",
    url: "https://example.com/video3",
    tags: ["peer education", "student leadership", "innovation", "mentorship"],
    featured: false
  },
  {
    id: "12",
    title: "Coalition Letter: 50+ Organizations Support Expanded Requirements",
    description: "Historic coalition letter signed by over 50 Massachusetts organizations urging the legislature to expand financial literacy requirements to include middle school students.",
    date: "2024-02-18",
    type: "press",
    thumbnail: "/assets/midas.png",
    url: "https://example.com/press4",
    tags: ["coalition", "advocacy", "middle school", "expansion"],
    featured: false
  },
  {
    id: "13",
    title: "Parent Engagement: Bringing Financial Literacy Home",
    description: "Photo series from our family financial literacy nights where parents and students learn together, creating a supportive home environment for financial education.",
    date: "2024-02-05",
    type: "gallery",
    thumbnail: "/assets/text-logo.png",
    url: "https://example.com/gallery4",
    tags: ["parents", "family", "engagement", "community"],
    featured: false
  },
  {
    id: "14",
    title: "Op-Ed: Why Financial Literacy Is Social Justice",
    description: "Powerful opinion piece exploring how financial literacy education serves as a critical tool for social and economic justice, particularly for historically marginalized communities.",
    date: "2024-01-22",
    type: "article",
    thumbnail: "/assets/babson.png",
    url: "https://example.com/article3",
    tags: ["social justice", "equity", "opinion", "advocacy"],
    featured: false
  },
  {
    id: "15",
    title: "2023 Impact Report: Year of Unprecedented Growth",
    description: "Comprehensive visual report showcasing Project 57's 2023 achievements: 15,000+ students reached, 500+ teachers trained, and landmark legislation passed.",
    date: "2024-01-10",
    type: "gallery",
    thumbnail: "/assets/transparent-logo.png",
    url: "https://example.com/gallery5",
    tags: ["impact", "annual report", "growth", "achievements"],
    featured: false
  },
  {
    id: "16",
    title: "WCVB Chronicle: 'Teaching Kids About Money'",
    description: "Feature segment on WCVB's Chronicle program highlighting Project 57's work and including interviews with students whose lives have been transformed by financial literacy education.",
    date: "2023-12-15",
    type: "video",
    thumbnail: "/assets/mefa_logo.jpg",
    url: "https://example.com/video4",
    tags: ["WCVB", "chronicle", "media", "student interviews"],
    featured: false
  },
  {
    id: "17",
    title: "Collaboration Spotlight: University Partnerships",
    description: "Article examining Project 57's strategic partnerships with Massachusetts universities, creating pathways for student research and expanding the evidence base for financial literacy education.",
    date: "2023-11-28",
    type: "article",
    thumbnail: "/assets/oee.png",
    url: "https://example.com/article4",
    tags: ["universities", "research", "partnerships", "evidence"],
    featured: false
  }
];

const MediaCard = ({ item, onClick }: { item: MediaItem; onClick: () => void }) => {
  const getIcon = () => {
    switch (item.type) {
      case 'video': return <Play className="w-5 h-5" />;
      case 'press': return <FileText className="w-5 h-5" />;
      case 'gallery': return <Image className="w-5 h-5" />;
      case 'article': return <FileText className="w-5 h-5" />;
    }
  };

  const getTypeLabel = () => {
    switch (item.type) {
      case 'video': return 'Video';
      case 'press': return 'Press Release';
      case 'gallery': return 'Photo Gallery';
      case 'article': return 'Article';
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card 
        className="cursor-pointer bg-card border-border hover:bg-card/80 transition-colors h-full"
        onClick={onClick}
      >
        {item.thumbnail && (
          <div className="relative h-48 bg-muted rounded-t-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              {getIcon()}
            </div>
            {item.featured && (
              <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                Featured
              </Badge>
            )}
          </div>
        )}
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between gap-2">
            <Badge variant="secondary" className="text-xs">
              {getTypeLabel()}
            </Badge>
            <div className="flex items-center text-muted-foreground text-sm">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(item.date).toLocaleDateString()}
            </div>
          </div>
          <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="line-clamp-3 mb-3">
            {item.description}
          </CardDescription>
          {item.tags && (
            <div className="flex flex-wrap gap-1">
              {item.tags.slice(0, 3).map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const MediaModal = ({ item, isOpen, onClose }: { item: MediaItem | null; isOpen: boolean; onClose: () => void }) => {
  if (!item) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {item.type === 'video' && <Play className="w-5 h-5" />}
            {item.type === 'press' && <FileText className="w-5 h-5" />}
            {item.type === 'gallery' && <Image className="w-5 h-5" />}
            {item.type === 'article' && <FileText className="w-5 h-5" />}
            {item.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {item.thumbnail && (
            <div className="h-64 bg-muted rounded-lg overflow-hidden">
              <div className="h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Play className="w-12 h-12 text-muted-foreground" />
              </div>
            </div>
          )}
          
          <div className="flex items-center justify-between">
            <div className="flex items-center text-muted-foreground text-sm">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(item.date).toLocaleDateString()}
            </div>
            <Badge variant="secondary">
              {item.type === 'video' && 'Video'}
              {item.type === 'press' && 'Press Release'}
              {item.type === 'gallery' && 'Photo Gallery'}
              {item.type === 'article' && 'Article'}
            </Badge>
          </div>
          
          <p className="text-muted-foreground leading-relaxed">
            {item.description}
          </p>
          
          {item.tags && (
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, index) => (
                <Badge key={index} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
          
          <div className="flex gap-2 pt-4">
            <Button className="flex-1">
              <Eye className="w-4 h-4 mr-2" />
              View Full Content
            </Button>
            <Button variant="outline">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            {item.type === 'press' && (
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default function MediaPage(): JSX.Element {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'video' | 'press' | 'gallery' | 'article'>('all');

  const filteredItems = selectedFilter === 'all' 
    ? sampleMediaItems 
    : sampleMediaItems.filter(item => item.type === selectedFilter);

  const featuredItems = sampleMediaItems.filter(item => item.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Project 57 <span className="text-primary">In the Media</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our latest videos, press coverage, photo galleries, and thought leadership articles 
              showcasing our impact on youth financial literacy advocacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Content */}
      {featuredItems.length > 0 && (
        <section className="py-12 bg-muted/20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Featured Content</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <MediaCard 
                    item={item} 
                    onClick={() => setSelectedItem(item)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { key: 'all', label: 'All Media' },
              { key: 'video', label: 'Videos' },
              { key: 'press', label: 'Press Releases' },
              { key: 'gallery', label: 'Photo Galleries' },
              { key: 'article', label: 'Articles' }
            ].map((filter) => (
              <Button
                key={filter.key}
                variant={selectedFilter === filter.key ? "default" : "outline"}
                onClick={() => setSelectedFilter(filter.key as any)}
                className="text-sm"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Media Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <MediaCard 
                  item={item} 
                  onClick={() => setSelectedItem(item)}
                />
              </motion.div>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No {selectedFilter === 'all' ? '' : selectedFilter} content available yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Media Modal */}
      <MediaModal 
        item={selectedItem}
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
}