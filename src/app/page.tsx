"use client";

import { personalInfo, skills, timeline } from "@/data/personal-info";
import { projects } from "@/data/projects";
import SocialLayout from "@/components/layout/social-layout";
import LeftSidebar from "@/components/layout/left-sidebar";
import RightSidebar from "@/components/layout/right-sidebar";
import SocialPostCard from "@/components/ui/social-post-card";
import TimelinePost from "@/components/ui/timeline-post";
import SkillsPost from "@/components/ui/skills-post";
import { motion } from "framer-motion";
import { useState } from "react";
import { Filter, Search, TrendingUp } from "lucide-react";

export default function HomePage() {
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

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
    
    // Timeline posts
    ...timeline.map(item => ({
      id: `timeline-${item.year}`,
      type: "timeline",
      data: item,
      timestamp: item.year,
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

  // Filter feed items
  const filteredItems = feedItems.filter(item => {
    if (filter !== "all" && item.type !== filter) return false;
    if (searchQuery && item.type === "project") {
      const project = item.data as any;
      return project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
             project.description.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return true;
  });

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
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-none">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-muted/50 border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 transition-colors w-full sm:w-48"
              />
            </div>
            
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-3 py-2 bg-muted/50 border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 transition-colors"
            >
              <option value="all">All Posts</option>
              <option value="project">Projects</option>
              <option value="timeline">Journey</option>
              <option value="skills">Skills</option>
            </select>
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
            <div className="text-muted-foreground">
              No posts found matching your search criteria.
            </div>
          </motion.div>
        )}
      </div>
    </SocialLayout>
  );
}
