"use client";

import { personalInfo } from "@/data/personal-info";
import { projects } from "@/data/projects";
import SocialLayout from "@/components/layout/social-layout";
import LeftSidebar from "@/components/layout/left-sidebar";
import RightSidebar from "@/components/layout/right-sidebar";
import SocialPostCard from "@/components/ui/social-post-card";
import TimelinePost from "@/components/ui/timeline-post";
import { TabContent } from "@/components/ui/tabs";
import ContributionsDashboard from "@/components/sections/contributions-dashboard";
import CodingActivityDashboard from "@/components/sections/coding-activity-dashboard";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { Filter, Search, X, Tag, Star, Calendar, FolderOpen, GitCommit } from "lucide-react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<string>("projects");
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [featuredOnly, setFeaturedOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>("featured"); // featured, date, title
  const [showAdvancedFilters, setShowAdvancedFilters] = useState<boolean>(false);

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
    setShowAdvancedFilters(false);
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
        leftSidebar={
          <LeftSidebar 
            activeTab={activeTab}
            onTabChange={setActiveTab}
            projectsCount={projects.length}
          />
        }
        rightSidebar={<RightSidebar />}
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
             {/* Main Filter Bar */}
             <div className="flex flex-col sm:flex-row items-center justify-center gap-2 p-3">
               {/* Search */}
               <div className="relative w-full sm:w-64">
                 <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                 <input
                   type="text"
                   placeholder="Search projects..."
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   className="w-full pl-8 pr-3 py-2 bg-muted/20 border-0 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:bg-muted/30 transition-all"
                 />
               </div>

               {/* Quick Actions */}
               <div className="flex items-center gap-1.5">
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

                 <motion.button
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                   onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                   className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                     showAdvancedFilters || activeFiltersCount > 0
                       ? "bg-blue-500/20 text-blue-600"
                       : "bg-muted/20 text-muted-foreground hover:bg-muted/30"
                   }`}
                 >
                   <Filter className="w-3.5 h-3.5" />
                   Filters
                   {activeFiltersCount > 0 && (
                     <span className="min-w-[1rem] h-4 px-1 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center">
                       {activeFiltersCount}
                     </span>
                   )}
                 </motion.button>
               </div>
             </div>

             {/* Advanced Filters */}
             <motion.div
               initial={false}
               animate={{ 
                 height: showAdvancedFilters ? "auto" : 0,
                 opacity: showAdvancedFilters ? 1 : 0 
               }}
               transition={{ duration: 0.2, ease: "easeInOut" }}
               className="overflow-hidden"
             >
               <div className="px-4 pb-4 space-y-4">
                 {/* Categories */}
                 <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                   <span className="text-sm font-medium text-muted-foreground min-w-fit drop-shadow-md">Categories</span>
                   <div className="flex items-center gap-2 flex-wrap">
                     <motion.button
                       whileHover={{ scale: 1.02 }}
                       whileTap={{ scale: 0.98 }}
                       onClick={() => setSelectedCategory("all")}
                       className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                         selectedCategory === "all" 
                           ? "bg-emerald-500/20 text-emerald-600" 
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
                         className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                           selectedCategory === category 
                             ? "bg-emerald-500/20 text-emerald-600" 
                             : "bg-muted/20 text-muted-foreground hover:bg-muted/30"
                         }`}
                       >
                         {category}
                       </motion.button>
                     ))}
                   </div>
                 </div>
                 
                 {/* Technologies */}
                 <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                   <span className="text-sm font-medium text-muted-foreground min-w-fit drop-shadow-md">Technologies</span>
                   <div className="flex items-center gap-2 flex-wrap">
                     {technologies.slice(0, 10).map(tech => (
                       <motion.button
                         key={tech}
                         whileHover={{ scale: 1.02 }}
                         whileTap={{ scale: 0.98 }}
                         onClick={() => handleTechToggle(tech)}
                         className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                           selectedTech.includes(tech) 
                             ? "bg-blue-500/20 text-blue-600" 
                             : "bg-muted/20 text-muted-foreground hover:bg-muted/30"
                         }`}
                       >
                         <Tag className="w-3 h-3" />
                         {tech}
                       </motion.button>
                     ))}
                   </div>
                 </div>
                 
                 {/* Clear Filters */}
                 {activeFiltersCount > 0 && (
                   <div className="flex justify-center pt-2">
                     <motion.button
                       whileHover={{ scale: 1.02 }}
                       whileTap={{ scale: 0.98 }}
                       onClick={clearFilters}
                       className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-500/10 rounded-lg transition-all"
                     >
                       <X className="w-4 h-4" />
                       Clear All Filters ({activeFiltersCount})
                     </motion.button>
                   </div>
                 )}
               </div>
             </motion.div>
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

        {activeTab === "activity" && (
          <TabContent>
            <CodingActivityDashboard />
          </TabContent>
        )}
      </SocialLayout>
  );
}
