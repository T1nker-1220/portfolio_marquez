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

  // Get language colors
  const getLanguageColor = (language: string) => {
    const colorMap: Record<string, string> = {
      'Markdown': 'from-blue-500 to-blue-600',
      'Python': 'from-yellow-500 to-yellow-600', 
      'TypeScript': 'from-blue-400 to-indigo-500',
      'JSON': 'from-gray-500 to-gray-600',
      'SQL': 'from-orange-500 to-red-500',
      'YAML': 'from-purple-500 to-pink-500',
      'JavaScript': 'from-yellow-400 to-orange-500',
      'Other': 'from-gray-400 to-gray-500'
    };
    return colorMap[language] || 'from-gray-400 to-gray-500';
  };

  return (
    <div className="h-full flex flex-col space-y-3 overflow-y-auto">
      {/* Top Languages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2 drop-shadow-lg">
          <Code2 className="w-4 h-4" />
          Top Languages
        </h3>
        
        {loading ? (
          <div className="flex items-center justify-center py-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full"
            />
          </div>
        ) : stats?.data?.languages && stats.data.languages.length > 0 ? (
          <div className="grid grid-cols-2 gap-2">
            {stats.data.languages.slice(0, 4).map((language, index) => (
              <motion.div
                key={language.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="p-2 rounded-lg bg-muted/30 text-center group hover:bg-muted/50 transition-all duration-200"
              >
                <div className={`w-6 h-6 mx-auto mb-1 rounded-md bg-gradient-to-br ${getLanguageColor(language.name)} flex items-center justify-center`}>
                  <span className="text-white text-xs font-bold">
                    {language.name.charAt(0)}
                  </span>
                </div>
                <div className="text-sm font-semibold text-white drop-shadow-lg">
                  {language.percent.toFixed(1)}%
                </div>
                <div className="text-xs text-gray-300 drop-shadow-md truncate">
                  {language.name}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-4">
            <Code2 className="w-6 h-6 mx-auto mb-2 text-gray-500" />
            <p className="text-xs text-gray-400">No language data</p>
          </div>
        )}
      </motion.div>

      {/* Skills Showcase - Simple Auto-Scroll */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex-shrink-0 mb-2"
      >
        <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2 drop-shadow-lg">
          <Zap className="w-4 h-4" />
          Skills Showcase
        </h3>
        
        <div className="h-20 overflow-hidden">
          <VerticalScrollSkills />
        </div>
      </motion.div>

      {/* Active Projects from WakaTime */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-shrink-0 mt-8"
      >
        <h3 className="text-sm font-medium text-foreground mb-2 flex items-center gap-2 drop-shadow-lg">
          <Activity className="w-4 h-4" />
          Active Projects
        </h3>
        
        {loading ? (
          <div className="flex items-center justify-center py-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full"
            />
          </div>
        ) : stats?.data?.projects && stats.data.projects.length > 0 ? (
          <div className="space-y-1">
            {stats.data.projects.slice(0, 2).map((project, index) => {
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
                  whileHover={{ scale: 1.01 }}
                  className="p-2 rounded-md bg-muted/30 hover:bg-muted/50 transition-all duration-200 group cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-md bg-gradient-to-br ${colorClass} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white text-xs font-bold">
                        {project.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-medium text-white truncate">
                          {project.name}
                        </h4>
                        <span className="text-xs font-medium text-white ml-1">
                          {project.percent.toFixed(0)}%
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mt-0.5">
                        <div className="flex-1 bg-gray-700 rounded-full h-0.5 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${project.percent}%` }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className={`h-full bg-gradient-to-r ${colorClass}`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-1">
            <GitBranch className="w-4 h-4 mx-auto mb-1 text-gray-500" />
            <p className="text-xs text-gray-400">No active projects</p>
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
        
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
            <div className="flex-1">
              <div className="text-xs text-white">
                New project completed
              </div>
              <div className="text-xs text-gray-500">
                2 days ago
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
            <div className="flex-1">
              <div className="text-xs text-white">
                Portfolio updated
              </div>
              <div className="text-xs text-gray-500">
                1 week ago
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}