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
    id: '1',
    title: 'Project 57 Founder Speaks at Harvard Financial Literacy Summit',
    description: 'Key insights on youth financial education policy and grassroots advocacy.',
    date: '2024-03-15',
    type: 'video',
    thumbnail: '/api/placeholder/300/200',
    tags: ['Speaking', 'Policy', 'Education'],
    featured: true
  },
  {
    id: '2',
    title: 'Massachusetts Legislature Advances Financial Literacy Bill',
    description: 'Project 57 advocacy efforts contribute to historic legislative progress on mandatory financial education.',
    date: '2024-03-10',
    type: 'press',
    tags: ['Legislation', 'Advocacy', 'Massachusetts']
  },
  {
    id: '3',
    title: 'Youth Financial Literacy Workshop Gallery',
    description: 'Photos from our recent community workshop series across Massachusetts.',
    date: '2024-03-08',
    type: 'gallery',
    thumbnail: '/api/placeholder/300/200',
    tags: ['Workshops', 'Community', 'Education']
  },
  {
    id: '4',
    title: 'The State of Youth Financial Literacy in America',
    description: 'An in-depth analysis of current financial education gaps and policy solutions.',
    date: '2024-03-05',
    type: 'article',
    tags: ['Research', 'Policy', 'Analysis'],
    featured: true
  },
  {
    id: '5',
    title: 'Project 57 Team at State House Rally',
    description: 'Supporting financial literacy legislation with students, educators, and policymakers.',
    date: '2024-02-28',
    type: 'gallery',
    thumbnail: '/api/placeholder/300/200',
    tags: ['Advocacy', 'Rally', 'State House']
  },
  {
    id: '6',
    title: 'Partnering with Local High Schools for Financial Education',
    description: 'Project 57 announces new partnerships to bring financial literacy directly to students.',
    date: '2024-02-25',
    type: 'press',
    tags: ['Partnerships', 'Schools', 'Programs']
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