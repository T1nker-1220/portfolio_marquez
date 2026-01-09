"use client";

import { personalInfo } from "@/data/personal-info";
import { projects } from "@/data/projects";
import SocialLayout from "@/components/layout/social-layout";
import LeftSidebar from "@/components/layout/left-sidebar";
import SocialPostCard from "@/components/ui/social-post-card";
import TimelinePost from "@/components/ui/timeline-post";
import { TabContent } from "@/components/ui/tabs";
import ContributionsDashboard from "@/components/sections/contributions-dashboard";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { Search, Star, Calendar, FolderOpen, GitCommit, Filter } from "lucide-react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<string>("projects");
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [featuredOnly, setFeaturedOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>("featured"); // featured, date, title


  // Extract unique categories and technologies
  const categories = useMemo(() => {
    const cats = [...new Set(projects.map(p => p.category))];
    return cats.sort();
  }, []);



  const clearFilters = () => {
    setFilter("all");
    setSearchQuery("");
    setSelectedCategory("all");
    setFeaturedOnly(false);
    setSortBy("featured");
  };

  // Prepare feed items
  const feedItems = [
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
  ];

  // Advanced filtering logic
  const filteredItems = useMemo(() => {
    let filtered = feedItems.filter(item => {
      // Type filter
      if (filter !== "all" && item.type !== filter) return false;
      
             // Project specific filters
       if (item.type === "project" && 'data' in item) {
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
         if (a.type === "project" && b.type === "project" && 'data' in a && 'data' in b) {
           return new Date((b.data as any).completedAt).getTime() - new Date((a.data as any).completedAt).getTime();
         }
         return 0;
       });
     } else if (sortBy === "title") {
       filtered = filtered.sort((a, b) => {
         if (a.type === "project" && b.type === "project" && 'data' in a && 'data' in b) {
           return (a.data as any).title.localeCompare((b.data as any).title);
         }
         return 0;
       });
     } else if (sortBy === "featured") {
       filtered = filtered.sort((a, b) => {
         if (a.type === "project" && b.type === "project" && 'data' in a && 'data' in b) {
           if ((a.data as any).featured && !(b.data as any).featured) return -1;
           if (!(a.data as any).featured && (b.data as any).featured) return 1;
           if ((a.data as any).featured && (b.data as any).featured) {
             return ((a.data as any).featuredRank || 999) - ((b.data as any).featuredRank || 999);
           }
         }
         return 0;
       });
     }
    
    return filtered;
  }, [feedItems, filter, searchQuery, selectedCategory, featuredOnly, sortBy]);
  



  return (
    <SocialLayout
        leftSidebar={
          <LeftSidebar
            activeTab={activeTab}
            onTabChange={setActiveTab}
            projectsCount={projects.length}
          />
        }
      >

        {activeTab === "projects" && (
          <>
            {/* Centered Minimalist Filter */}
       <motion.div
         initial={{ opacity: 0, y: -20 }}
         animate={{ opacity: 1, y: 0 }}
         className="sticky top-4 z-50 mb-8"
       >
         <div className="max-w-4xl mx-auto">
                       <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl shadow-black/25 border border-white/20 dark:border-white/10 overflow-hidden glass-container">
                         {/* Main Filter Bar - Single Line */}
            <div className="flex flex-wrap items-center justify-center gap-2 p-3">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-48 pl-8 pr-3 py-2 bg-muted/20 border-0 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:bg-muted/30 transition-all"
                />
              </div>

              {/* Categories */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCategory("all")}
                className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === "all" 
                    ? "bg-emerald-500/20 text-emerald-600 shadow-sm" 
                    : "bg-muted/20 text-muted-foreground hover:bg-muted/30"
                }`}
              >
                All
              </motion.button>
              {categories.map(category => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    selectedCategory === category 
                      ? "bg-emerald-500/20 text-emerald-600 shadow-sm" 
                      : "bg-muted/20 text-muted-foreground hover:bg-muted/30"
                  }`}
                >
                  {category}
                </motion.button>
              ))}

              {/* Quick Actions */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 bg-muted/20 border-0 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all"
              >
                <option value="featured">Featured</option>
                <option value="date">Latest</option>
                <option value="title">A-Z</option>
              </select>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setFeaturedOnly(!featuredOnly)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  featuredOnly 
                    ? "bg-emerald-500/20 text-emerald-600" 
                    : "bg-muted/20 text-muted-foreground hover:bg-muted/30"
                }`}
              >
                <Star className="w-3.5 h-3.5" />
                Featured
              </motion.button>
            </div>

             
           </div>
         </div>
       </motion.div>

            {/* Feed Content */}
            <TabContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {filteredItems.map((item, index) => {
                  switch (item.type) {
                    case "project":
                      return 'data' in item ? (
                        <SocialPostCard
                          key={item.id}
                          project={item.data as any}
                        />
                      ) : null;
                      
                    case "timeline":
                      return 'data' in item ? (
                        <TimelinePost
                          key={item.id}
                          item={item.data as any}
                          index={index}
                        />
                      ) : null;
                     
                    default:
                      return null;
                  }
                })}
                
                {filteredItems.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-white/10 shadow-2xl shadow-black/25 text-center glass-container"
                  >
                    <div className="text-muted-foreground mb-4 drop-shadow-md">
                      <Filter className="w-8 h-8 mx-auto mb-2 opacity-50" />
                      No projects found matching your criteria.
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
            </TabContent>
          </>
        )}

        {activeTab === "contributions" && (
          <TabContent>
            <ContributionsDashboard />
          </TabContent>
        )}

      </SocialLayout>
  );
}
