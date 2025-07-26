"use client";

import { personalInfo, skills, timeline } from "@/data/personal-info";
import { projects } from "@/data/projects";
import SocialLayout from "@/components/layout/social-layout";
import LeftSidebar from "@/components/layout/left-sidebar";
import RightSidebar from "@/components/layout/right-sidebar";
import SocialPostCard from "@/components/ui/social-post-card";
import TimelinePost from "@/components/ui/timeline-post";
import SkillsPost from "@/components/ui/skills-post";
import HorizontalTimeline from "@/components/ui/horizontal-timeline";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { Filter, Search, TrendingUp, X, Tag, Star, Calendar } from "lucide-react";

export default function HomePage() {
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [featuredOnly, setFeaturedOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>("featured"); // featured, date, title

  // Extract unique categories and technologies
  const categories = useMemo(() => {
    const cats = [...new Set(projects.map(p => p.category))];
    return cats.sort();
  }, []);

  const technologies = useMemo(() => {
    const techs = [...new Set(projects.flatMap(p => p.techStack.map(t => t.name)))];
    return techs.sort();
  }, []);

  const handleTechToggle = (tech: string) => {
    setSelectedTech(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const clearFilters = () => {
    setFilter("all");
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedTech([]);
    setFeaturedOnly(false);
    setSortBy("featured");
  };

  // Prepare feed items
  const feedItems = [
    // Welcome post
    {
      id: "welcome",
      type: "welcome",
      timestamp: new Date().toISOString(),
    },
    
    // Featured projects first
    ...projects
      .filter(p => p.featured)
      .sort((a, b) => (a.featuredRank || 999) - (b.featuredRank || 999))
      .map(project => ({
        id: project.id,
        type: "project",
        data: project,
        timestamp: project.completedAt,
      })),
    
    // Skills posts by category
    {
      id: "frontend-skills",
      type: "skills",
      data: {
        category: "Frontend",
        skills: skills.filter(s => s.category === "frontend"),
      },
      timestamp: "2024-12",
    },
    
    // Horizontal Timeline (single item)
    {
      id: "horizontal-timeline",
      type: "horizontal-timeline",
      data: timeline,
      timestamp: "2025",
    },
    
    // Remaining projects
    ...projects
      .filter(p => !p.featured)
      .sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime())
      .map(project => ({
        id: project.id,
        type: "project",
        data: project,
        timestamp: project.completedAt,
      })),
    
    // More skills posts
    {
      id: "backend-skills",
      type: "skills",
      data: {
        category: "Backend",
        skills: skills.filter(s => s.category === "backend"),
      },
      timestamp: "2024-11",
    },
    {
      id: "tools-skills",
      type: "skills",
      data: {
        category: "Tools",
        skills: skills.filter(s => s.category === "tools"),
      },
      timestamp: "2024-10",
    },
  ];

  // Advanced filtering logic
  const filteredItems = useMemo(() => {
    let filtered = feedItems.filter(item => {
      // Type filter
      if (filter !== "all" && item.type !== filter) return false;
      
      // Project specific filters
      if (item.type === "project") {
        const project = item.data as any;
        
        // Search query
        if (searchQuery) {
          const searchLower = searchQuery.toLowerCase();
          const matchesSearch = 
            project.title.toLowerCase().includes(searchLower) ||
            project.description.toLowerCase().includes(searchLower) ||
            project.techStack.some((tech: any) => tech.name.toLowerCase().includes(searchLower)) ||
            project.features?.some((feature: string) => feature.toLowerCase().includes(searchLower));
          if (!matchesSearch) return false;
        }
        
        // Category filter
        if (selectedCategory !== "all" && project.category !== selectedCategory) {
          return false;
        }
        
        // Technology filter
        if (selectedTech.length > 0) {
          const projectTechs = project.techStack.map((tech: any) => tech.name);
          const hasSelectedTech = selectedTech.some(tech => projectTechs.includes(tech));
          if (!hasSelectedTech) return false;
        }
        
        // Featured filter
        if (featuredOnly && !project.featured) {
          return false;
        }
      }
      
      return true;
    });
    
    // Sort filtered items
    if (sortBy === "date") {
      filtered = filtered.sort((a, b) => {
        if (a.type === "project" && b.type === "project") {
          return new Date(b.data.completedAt).getTime() - new Date(a.data.completedAt).getTime();
        }
        return 0;
      });
    } else if (sortBy === "title") {
      filtered = filtered.sort((a, b) => {
        if (a.type === "project" && b.type === "project") {
          return a.data.title.localeCompare(b.data.title);
        }
        return 0;
      });
    } else if (sortBy === "featured") {
      filtered = filtered.sort((a, b) => {
        if (a.type === "project" && b.type === "project") {
          if (a.data.featured && !b.data.featured) return -1;
          if (!a.data.featured && b.data.featured) return 1;
          if (a.data.featured && b.data.featured) {
            return (a.data.featuredRank || 999) - (b.data.featuredRank || 999);
          }
        }
        return 0;
      });
    }
    
    return filtered;
  }, [feedItems, filter, searchQuery, selectedCategory, selectedTech, featuredOnly, sortBy]);
  
  const activeFiltersCount = (
    (filter !== "all" ? 1 : 0) +
    (searchQuery ? 1 : 0) +
    (selectedCategory !== "all" ? 1 : 0) +
    selectedTech.length +
    (featuredOnly ? 1 : 0)
  );

  return (
    <SocialLayout
      leftSidebar={<LeftSidebar />}
      rightSidebar={<RightSidebar />}
    >
      {/* Feed Header with Filters */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-2xl p-6 backdrop-blur-sm border border-border/50 mb-6"
      >
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground mb-1">
              Hi, I'm {personalInfo.name}
            </h1>
            <p className="text-muted-foreground">
              Front-End Developer sharing my journey and projects
            </p>
          </div>
          
          <div className="flex flex-col gap-4 w-full">
            {/* Search and Main Filters */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full">
              <div className="relative flex-1 sm:flex-none">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search projects, tech, features..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-muted/50 border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 transition-colors w-full sm:w-64"
                />
              </div>
              
              <div className="flex items-center gap-2 flex-wrap">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="px-3 py-2 bg-muted/50 border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 transition-colors"
                >
                  <option value="all">All Posts</option>
                  <option value="project">Projects</option>
                  <option value="horizontal-timeline">Journey</option>
                  <option value="skills">Skills</option>
                </select>
                
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 bg-muted/50 border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 transition-colors"
                >
                  <option value="featured">Featured First</option>
                  <option value="date">Latest First</option>
                  <option value="title">A-Z</option>
                </select>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFeaturedOnly(!featuredOnly)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm transition-colors ${
                    featuredOnly 
                      ? "bg-emerald-500/20 text-emerald-600 border border-emerald-500/50" 
                      : "bg-muted/50 text-muted-foreground border border-border/50 hover:bg-muted"
                  }`}
                >
                  <Star className="w-3 h-3" />
                  Featured
                </motion.button>
              </div>
            </div>
            
            {/* Category Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-medium text-muted-foreground">Category:</span>
              <div className="flex items-center gap-1 flex-wrap">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory("all")}
                  className={`px-2 py-1 rounded-md text-xs transition-colors ${
                    selectedCategory === "all" 
                      ? "bg-emerald-500/20 text-emerald-600" 
                      : "bg-muted/50 text-muted-foreground hover:bg-muted"
                  }`}
                >
                  All
                </motion.button>
                {categories.map(category => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-2 py-1 rounded-md text-xs transition-colors ${
                      selectedCategory === category 
                        ? "bg-emerald-500/20 text-emerald-600" 
                        : "bg-muted/50 text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
            
            {/* Technology Filter */}
            <div className="flex items-start gap-2 flex-wrap">
              <span className="text-xs font-medium text-muted-foreground mt-1">Technologies:</span>
              <div className="flex items-center gap-1 flex-wrap max-h-20 overflow-y-auto scrollbar-hide">
                {technologies.slice(0, 15).map(tech => (
                  <motion.button
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleTechToggle(tech)}
                    className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs transition-colors ${
                      selectedTech.includes(tech) 
                        ? "bg-blue-500/20 text-blue-600 border border-blue-500/50" 
                        : "bg-muted/50 text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    <Tag className="w-2 h-2" />
                    {tech}
                  </motion.button>
                ))}
              </div>
            </div>
            
            {/* Active Filters */}
            {activeFiltersCount > 0 && (
              <div className="flex items-center gap-2 pt-2 border-t border-border/30">
                <span className="text-xs text-muted-foreground">
                  {activeFiltersCount} filter{activeFiltersCount !== 1 ? 's' : ''} active
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={clearFilters}
                  className="flex items-center gap-1 px-2 py-1 text-xs text-red-600 hover:bg-red-500/10 rounded-md transition-colors"
                >
                  <X className="w-3 h-3" />
                  Clear All
                </motion.button>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Feed Content */}
      <div className="space-y-6">
        {filteredItems.map((item, index) => {
          switch (item.type) {
            case "welcome":
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-2xl p-8 backdrop-blur-sm border border-border/50 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white text-2xl font-bold">
                    {personalInfo.name[0]}
                  </div>
                  <h2 className="text-xl font-semibold text-foreground mb-2">
                    Welcome to my portfolio!
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    {personalInfo.bio}
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
                    <TrendingUp className="w-4 h-4" />
                    <span>Scroll down to explore my projects and journey</span>
                  </div>
                </motion.div>
              );
              
            case "project":
              return (
                <SocialPostCard
                  key={item.id}
                  project={item.data as any}
                />
              );
              
            case "timeline":
              return (
                <TimelinePost
                  key={item.id}
                  item={item.data as any}
                  index={index}
                />
              );
              
            case "horizontal-timeline":
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-2xl p-6 backdrop-blur-sm border border-border/50"
                >
                  <HorizontalTimeline items={item.data as any} />
                </motion.div>
              );
              
            case "skills":
              return (
                <SkillsPost
                  key={item.id}
                  skills={(item.data as any).skills}
                  category={(item.data as any).category}
                />
              );
              
            default:
              return null;
          }
        })}
        
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass rounded-2xl p-8 backdrop-blur-sm border border-border/50 text-center"
          >
            <div className="text-muted-foreground mb-4">
              <Filter className="w-8 h-8 mx-auto mb-2 opacity-50" />
              No posts found matching your criteria.
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={clearFilters}
              className="px-4 py-2 bg-emerald-500/20 text-emerald-600 rounded-lg text-sm hover:bg-emerald-500/30 transition-colors"
            >
              Clear Filters
            </motion.button>
          </motion.div>
        )}
      </div>
    </SocialLayout>
  );
}
