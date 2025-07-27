"use client";

import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import VerticalScrollSkills from "@/components/ui/vertical-scroll-skills";
import { 
  Code2, 
  Trophy, 
  Calendar, 
  TrendingUp,
  Star,
  GitBranch,
  Zap
} from "lucide-react";


export default function RightSidebar() {

  // Calculate stats  
  const completedProjects = projects.filter(p => p.status === "Completed").length;
  const featuredProjects = projects.filter(p => p.featured).length;

  const stats = [
    { label: "Projects", value: completedProjects, icon: Code2, color: "text-gray-400" },
    { label: "Featured", value: featuredProjects, icon: Star, color: "text-gray-400" },
    { label: "Skills", value: 25, icon: Zap, color: "text-gray-400" },
    { label: "Expert", value: 12, icon: Trophy, color: "text-gray-400" },
  ];

  const recentProjects = projects
    .filter(p => p.status === "Completed")
    .sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime())
    .slice(0, 3);

  return (
    <div className="h-full flex flex-col space-y-6 overflow-hidden">
      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2 drop-shadow-lg">
          <TrendingUp className="w-4 h-4" />
          Overview
        </h3>
        
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="p-3 rounded-lg bg-muted/30 text-center group hover:bg-muted/50 transition-colors"
              >
                <Icon className={`w-5 h-5 mx-auto mb-1 ${stat.color}`} />
                <div className="text-lg font-semibold text-white drop-shadow-lg">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-300 drop-shadow-md">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Skills Showcase - Simple Auto-Scroll */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex-1 min-h-0 flex flex-col"
      >
        <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2 flex-shrink-0 drop-shadow-lg">
          <Code2 className="w-4 h-4" />
          Skills Showcase
        </h3>
        
        <div className="flex-1">
          <VerticalScrollSkills />
        </div>
      </motion.div>

      {/* Recent Projects - Compact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-shrink-0"
      >
        <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2 drop-shadow-lg">
          <GitBranch className="w-4 h-4" />
          Recent Work
        </h3>
        
        <div className="space-y-2">
          {recentProjects.slice(0, 2).map((project, index) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.02, x: 2 }}
              className="p-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group cursor-pointer"
            >
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded bg-gradient-to-br from-gray-500 to-gray-700 flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-medium text-white group-hover:text-gray-300 transition-colors truncate drop-shadow-md">
                    {project.title}
                  </h4>
                  <div className="text-xs text-gray-400 truncate drop-shadow-sm">
                    {project.category}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Activity Timeline - Compact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex-shrink-0"
      >
        <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          Activity
        </h3>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            <div className="flex-1">
              <div className="text-xs text-white">
                New project completed
              </div>
              <div className="text-xs text-gray-400">
                2 days ago
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-500"></div>
            <div className="flex-1">
              <div className="text-xs text-white">
                Portfolio updated
              </div>
              <div className="text-xs text-gray-400">
                1 week ago
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}