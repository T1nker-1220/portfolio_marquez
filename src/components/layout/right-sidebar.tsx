"use client";

import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import VerticalScrollSkills from "@/components/ui/vertical-scroll-skills";
import { wakaTimeAPI, type WakaTimeStats } from "@/lib/wakatime-api";
import { useState, useEffect } from "react";
import { 
  Code2, 
  Trophy, 
  Calendar, 
  TrendingUp,
  Star,
  GitBranch,
  Zap,
  Activity,
  Clock
} from "lucide-react";


export default function RightSidebar() {
  const [stats, setStats] = useState<WakaTimeStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWakaTimeData() {
      try {
        const data = await wakaTimeAPI.getStats();
        setStats(data);
      } catch (err) {
        console.error('WakaTime API error:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchWakaTimeData();
  }, []);

  // Calculate stats  
  const completedProjects = projects.filter(p => p.status === "Completed").length;
  const featuredProjects = projects.filter(p => p.featured).length;

  const overviewStats = [
    { label: "Projects", value: completedProjects, icon: Code2, color: "text-gray-400" },
    { label: "Featured", value: featuredProjects, icon: Star, color: "text-gray-400" },
    { label: "Skills", value: 25, icon: Zap, color: "text-gray-400" },
    { label: "Expert", value: 12, icon: Trophy, color: "text-gray-400" },
  ];

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
          {overviewStats.map((stat, index) => {
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

      {/* Active Projects from WakaTime */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-shrink-0"
      >
        <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2 drop-shadow-lg">
          <Activity className="w-4 h-4" />
          Active Projects
        </h3>
        
        {loading ? (
          <div className="flex items-center justify-center py-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full"
            />
          </div>
        ) : stats?.data?.projects && stats.data.projects.length > 0 ? (
          <div className="space-y-2">
            {stats.data.projects.slice(0, 3).map((project, index) => {
              // Generate project icon color based on project name
              const colors = [
                'from-blue-500 to-cyan-500',
                'from-purple-500 to-pink-500', 
                'from-green-500 to-emerald-500',
                'from-orange-500 to-red-500',
                'from-indigo-500 to-blue-500'
              ];
              const colorClass = colors[index % colors.length];
              
              return (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 2 }}
                  className="p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-200 group cursor-pointer border border-transparent hover:border-white/10"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${colorClass} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <span className="text-white text-sm font-bold">
                        {project.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-white group-hover:text-gray-200 transition-colors truncate drop-shadow-md">
                        {project.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-400 truncate">
                          {project.text}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex-1 bg-gray-700 rounded-full h-1.5 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${project.percent}%` }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className={`h-full bg-gradient-to-r ${colorClass}`}
                          />
                        </div>
                        <span className="text-xs font-medium text-white min-w-fit">
                          {project.percent.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-6">
            <GitBranch className="w-8 h-8 mx-auto mb-2 text-gray-500" />
            <p className="text-xs text-gray-400">No active projects</p>
            <p className="text-xs text-gray-500">Start coding to see your projects</p>
          </div>
        )}
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