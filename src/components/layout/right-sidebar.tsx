"use client";

import { skills } from "@/data/personal-info";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { 
  Code2, 
  Trophy, 
  Calendar, 
  TrendingUp,
  Star,
  Eye,
  GitBranch,
  Zap
} from "lucide-react";

export default function RightSidebar() {
  // Calculate stats
  const completedProjects = projects.filter(p => p.status === "Completed").length;
  const featuredProjects = projects.filter(p => p.featured).length;
  const totalSkills = skills.length;
  const advancedSkills = skills.filter(s => s.level === "Advanced").length;
  
  // Get top skills by category
  const topSkills = {
    frontend: skills.filter(s => s.category === "frontend").slice(0, 4),
    backend: skills.filter(s => s.category === "backend").slice(0, 4),
    tools: skills.filter(s => s.category === "tools").slice(0, 4),
  };

  const stats = [
    { label: "Projects", value: completedProjects, icon: Code2, color: "text-blue-500" },
    { label: "Featured", value: featuredProjects, icon: Star, color: "text-yellow-500" },
    { label: "Skills", value: totalSkills, icon: Zap, color: "text-purple-500" },
    { label: "Expert", value: advancedSkills, icon: Trophy, color: "text-green-500" },
  ];

  const recentProjects = projects
    .filter(p => p.status === "Completed")
    .sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime())
    .slice(0, 3);

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
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
                <div className="text-lg font-semibold text-foreground">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Skills Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
          <Code2 className="w-4 h-4" />
          Top Skills
        </h3>
        
        <div className="space-y-4">
          {Object.entries(topSkills).map(([category, categorySkills]) => (
            <div key={category}>
              <h4 className="text-xs font-medium text-muted-foreground mb-2 capitalize">
                {category}
              </h4>
              <div className="flex flex-wrap gap-1">
                {categorySkills.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className="px-2 py-1 text-xs bg-emerald-500/10 text-emerald-600 rounded-md hover:bg-emerald-500/20 transition-colors cursor-default"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Recent Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
          <GitBranch className="w-4 h-4" />
          Recent Work
        </h3>
        
        <div className="space-y-2">
          {recentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.02, x: 2 }}
              className="p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-green-400 to-emerald-600 flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-medium text-foreground group-hover:text-emerald-600 transition-colors truncate">
                    {project.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-muted-foreground">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">
                      {project.completedAt}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Activity Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          Activity
        </h3>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <div className="flex-1">
              <div className="text-xs text-foreground">
                New project completed
              </div>
              <div className="text-xs text-muted-foreground">
                2 days ago
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <div className="flex-1">
              <div className="text-xs text-foreground">
                Portfolio updated
              </div>
              <div className="text-xs text-muted-foreground">
                1 week ago
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
            <div className="flex-1">
              <div className="text-xs text-foreground">
                Skills enhanced
              </div>
              <div className="text-xs text-muted-foreground">
                2 weeks ago
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}