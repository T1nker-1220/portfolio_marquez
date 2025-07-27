"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Activity, 
  Clock, 
  Code2, 
  Calendar, 
  TrendingUp, 
  Zap,
  GitBranch,
  Monitor,
  Coffee,
  Flame
} from "lucide-react";
import { wakaTimeAPI, type WakaTimeStats, type WakaTimeHeartbeats } from "@/lib/wakatime-api";


export default function CodingActivityDashboard() {
  const [stats, setStats] = useState<WakaTimeStats | null>(null);
  const [heartbeats, setHeartbeats] = useState<WakaTimeHeartbeats | null>(null);
  const [allTimeStats, setAllTimeStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchWakaTimeData() {
      try {
        setLoading(true);
        const [statsData, heartbeatsData, allTimeData] = await Promise.allSettled([
          wakaTimeAPI.getStats(),
          wakaTimeAPI.getHeartbeats(),
          wakaTimeAPI.getAllTimeStats()
        ]);

        if (statsData.status === 'fulfilled') {
          setStats(statsData.value);
        }
        if (heartbeatsData.status === 'fulfilled') {
          setHeartbeats(heartbeatsData.value);
        }
        if (allTimeData.status === 'fulfilled') {
          setAllTimeStats(allTimeData.value);
        }
      } catch (err) {
        setError('Failed to fetch coding activity data');
        console.error('WakaTime API error:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchWakaTimeData();
    
    // Refresh data every 5 minutes
    const interval = setInterval(fetchWakaTimeData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);


  if (loading) {
    return (
      <div className="min-h-[600px] flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[600px] flex items-center justify-center">
        <div className="text-center">
          <Activity className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <p className="text-gray-400 mb-2">Unable to load coding activity</p>
          <p className="text-sm text-gray-500">{error}</p>
        </div>
      </div>
    );
  }

  const topLanguages = stats?.data?.languages?.slice(0, 5) || [];
  const topProjects = stats?.data?.projects?.slice(0, 5) || [];
  const topEditors = stats?.data?.editors?.slice(0, 3) || [];
  const topOS = stats?.data?.operating_systems?.slice(0, 3) || [];

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/20 rounded-lg">
              <Clock className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">This Week</p>
              <p className="text-xl font-bold text-white">
                {stats?.data?.human_readable_total || "0h 0m"}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <TrendingUp className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Daily Average</p>
              <p className="text-xl font-bold text-white">
                {stats?.data?.human_readable_daily_average || "0h 0m"}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <Code2 className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Languages</p>
              <p className="text-xl font-bold text-white">
                {topLanguages.length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-500/20 rounded-lg">
              <GitBranch className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Projects</p>
              <p className="text-xl font-bold text-white">
                {topProjects.length}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Top Languages - Full Width */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-white/10"
      >
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Code2 className="w-5 h-5" />
          Top Languages
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topLanguages.length > 0 ? topLanguages.map((language, index) => (
            <div key={language.name} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center text-white text-sm font-bold">
                {language.name.charAt(0)}
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">{language.name}</p>
                <p className="text-sm text-gray-400">{language.text}</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${language.percent}%` }}
                      transition={{ delay: index * 0.1, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-emerald-400 to-blue-500"
                    />
                  </div>
                  <span className="text-xs text-white font-semibold min-w-fit">
                    {language.percent.toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>
          )) : (
            <div className="col-span-full text-center py-8">
              <Code2 className="w-12 h-12 mx-auto mb-3 text-gray-500" />
              <p className="text-gray-400">No language data yet</p>
              <p className="text-sm text-gray-500">Start coding to see your language breakdown</p>
            </div>
          )}
        </div>
      </motion.div>

      {/* Additional Stats Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Editors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-white/10"
        >
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Monitor className="w-5 h-5" />
            Editors
          </h3>
          
          <div className="space-y-3">
            {topEditors.length > 0 ? topEditors.map((editor, index) => (
              <div key={editor.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center text-white text-sm font-bold">
                    {editor.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-medium">{editor.name}</p>
                    <p className="text-sm text-gray-400">{editor.text}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-semibold">{editor.percent.toFixed(1)}%</p>
                  <div className="w-12 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${editor.percent}%` }}
                      transition={{ delay: index * 0.1, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-cyan-400 to-teal-500"
                    />
                  </div>
                </div>
              </div>
            )) : (
              <div className="text-center py-4">
                <Monitor className="w-8 h-8 mx-auto mb-2 text-gray-500" />
                <p className="text-gray-400 text-sm">No editor data</p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Weekly Trends */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-white/10"
        >
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            This Week's Peak
          </h3>
          
          <div className="space-y-3">
            {stats?.data?.best_day ? (
              <div className="text-center">
                <div className="p-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl mb-3">
                  <Flame className="w-8 h-8 mx-auto mb-2 text-emerald-400" />
                  <p className="text-2xl font-bold text-white">{stats.data.best_day.text}</p>
                  <p className="text-sm text-gray-400">Best day this week</p>
                </div>
                <p className="text-gray-300 text-sm">
                  {new Date(stats.data.best_day.date).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            ) : (
              <div className="text-center py-4">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-gray-500" />
                <p className="text-gray-400 text-sm">No peak data yet</p>
              </div>
            )}
          </div>
        </motion.div>

        {/* All-time Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-white/10"
        >
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Coffee className="w-5 h-5" />
            All-Time
          </h3>
          
          <div className="text-center">
            <div className="p-4 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl mb-3">
              <Zap className="w-8 h-8 mx-auto mb-2 text-orange-400" />
              <p className="text-2xl font-bold text-white">
                {allTimeStats?.data?.text || '0 hrs'}
              </p>
              <p className="text-sm text-gray-400">total coding time</p>
            </div>
            <p className="text-gray-300 text-sm">
              Since {allTimeStats?.data?.range?.start_date ? 
                new Date(allTimeStats.data.range.start_date).getFullYear() : 
                'tracking started'
              }
            </p>
          </div>
        </motion.div>
      </div>

      {/* Hourly Activity Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-white/10"
      >
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Activity className="w-5 h-5" />
          Today's Activity Pattern
        </h3>
        
        {heartbeats?.hourly_breakdown ? (
          <div className="grid grid-cols-12 gap-1">
            {heartbeats.hourly_breakdown.map((hour) => (
              <div key={hour.hour} className="text-center">
                <div 
                  className="bg-gradient-to-t from-blue-500/20 to-purple-500/20 rounded-sm mb-1 transition-all duration-300 hover:from-blue-500/40 hover:to-purple-500/40"
                  style={{ 
                    height: `${Math.max(4, (hour.minutes / Math.max(...heartbeats.hourly_breakdown.map(h => h.minutes))) * 60)}px` 
                  }}
                  title={`${hour.label}: ${hour.minutes} minutes`}
                />
                <span className="text-xs text-gray-400 block">
                  {hour.hour % 6 === 0 ? hour.hour.toString().padStart(2, '0') : ''}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <Activity className="w-12 h-12 mx-auto mb-3 text-gray-500" />
            <p className="text-gray-400">No activity data for today</p>
            <p className="text-sm text-gray-500">Start coding to see your activity pattern</p>
          </div>
        )}
        
        {heartbeats && (
          <div className="mt-4 flex justify-between text-sm text-gray-400">
            <span>12 AM</span>
            <span>6 AM</span>
            <span>12 PM</span>
            <span>6 PM</span>
            <span>12 AM</span>
          </div>
        )}
      </motion.div>

    </div>
  );
}