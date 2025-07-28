"use client";

import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import VerticalScrollSkills from "@/components/ui/vertical-scroll-skills";
import { wakaTimeAPI, type WakaTimeStats, type WakaTimeHeartbeats } from "@/lib/wakatime-api";
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
  const [heartbeats, setHeartbeats] = useState<WakaTimeHeartbeats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchWakaTimeData() {
      try {
        const [statsData, heartbeatsData] = await Promise.allSettled([
          wakaTimeAPI.getStats(),
          wakaTimeAPI.getHeartbeats()
        ]);

        if (statsData.status === 'fulfilled') {
          setStats(statsData.value);
        }
        if (heartbeatsData.status === 'fulfilled') {
          setHeartbeats(heartbeatsData.value);
        }
        setError(null);
      } catch (err) {
        console.error('WakaTime API error:', err);
        setError('Failed to load WakaTime data');
        // Set mock data for development
        setStats({
          data: {
            total_seconds: 25200, // 7 hours
            human_readable_total: '7 hrs 0 mins',
            daily_average: 3600, // 1 hour  
            human_readable_daily_average: '1 hr 0 mins',
            languages: [
              { name: 'Markdown', total_seconds: 6048, percent: 24.0, digital: '1h 40m', text: '1 hr 40 mins' },
              { name: 'Python', total_seconds: 5587, percent: 22.2, digital: '1h 33m', text: '1 hr 33 mins' },
              { name: 'TypeScript', total_seconds: 5295, percent: 21.0, digital: '1h 28m', text: '1 hr 28 mins' },
              { name: 'JSON', total_seconds: 4410, percent: 17.5, digital: '1h 13m', text: '1 hr 13 mins' }
            ],
            projects: [
              { name: 'portfolio_marquez', total_seconds: 15000, percent: 60.0, digital: '4h 10m', text: '4 hrs 10 mins' },
              { name: 'minrights-chatbot', total_seconds: 10200, percent: 40.0, digital: '2h 50m', text: '2 hrs 50 mins' },
              { name: 'deebo-prototype', total_seconds: 3600, percent: 14.3, digital: '1h 0m', text: '1 hr 0 mins' }
            ],
            editors: [],
            operating_systems: [],
            best_day: {
              date: '2025-01-26',
              total_seconds: 14400,
              text: '4 hrs 0 mins'
            },
            human_readable_range: 'Last 7 days',
            range: 'last_7_days'
          }
        });
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

      {/* Coding Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex-shrink-0"
      >
        <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
          <TrendingUp className="w-4 h-4" />
          Coding Stats
        </h3>
        
        {loading ? (
          <div className="flex items-center justify-center py-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full"
            />
          </div>
        ) : stats?.data ? (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3 text-blue-400" />
                <span className="text-xs text-gray-300">Daily Avg</span>
              </div>
              <span className="text-xs font-medium text-white">
                {stats.data.human_readable_daily_average || '0m'}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="w-3 h-3 text-green-400" />
                <span className="text-xs text-gray-300">This Week</span>
              </div>
              <span className="text-xs font-medium text-white">
                {stats.data.human_readable_total || '0m'}
              </span>
            </div>
            
            {stats.data.best_day && (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Trophy className="w-3 h-3 text-yellow-400" />
                  <span className="text-xs text-gray-300">Best Day</span>
                </div>
                <span className="text-xs font-medium text-white">
                  {stats.data.best_day.text}
                </span>
              </div>
            )}
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-3 h-3 text-purple-400" />
                <span className="text-xs text-gray-300">Range</span>
              </div>
              <span className="text-xs font-medium text-white">
                {stats.data.human_readable_range || 'Last 7 days'}
              </span>
            </div>
          </div>
        ) : (
          <div className="text-center py-2">
            <TrendingUp className="w-4 h-4 mx-auto mb-1 text-gray-500" />
            <p className="text-xs text-gray-400">No stats available</p>
          </div>
        )}
      </motion.div>

      {/* Today's Activity Pattern */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex-shrink-0"
      >
        <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
          <Activity className="w-4 h-4" />
          Today's Activity
        </h3>
        
        {loading ? (
          <div className="flex items-center justify-center py-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full"
            />
          </div>
        ) : heartbeats?.hourly_breakdown ? (
          <div className="space-y-2">
            <div className="grid grid-cols-12 gap-1">
              {heartbeats.hourly_breakdown.map((hour) => (
                <div key={hour.hour} className="text-center">
                  <div 
                    className="bg-gradient-to-t from-blue-500/30 to-purple-500/30 rounded-sm mb-1 transition-all duration-300 hover:from-blue-500/50 hover:to-purple-500/50"
                    style={{ 
                      height: `${Math.max(2, (hour.minutes / Math.max(...heartbeats.hourly_breakdown.map(h => h.minutes))) * 30)}px` 
                    }}
                    title={`${hour.label}: ${hour.minutes} minutes`}
                  />
                  <span className="text-xs text-gray-400 block">
                    {hour.hour % 8 === 0 ? hour.hour.toString().padStart(2, '0') : ''}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>12AM</span>
              <span>12PM</span>
              <span>12AM</span>
            </div>
          </div>
        ) : (
          <div className="text-center py-4">
            <Activity className="w-6 h-6 mx-auto mb-2 text-gray-500" />
            <p className="text-xs text-gray-400">No activity today</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}