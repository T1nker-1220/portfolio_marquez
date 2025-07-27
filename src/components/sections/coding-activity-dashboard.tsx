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
import { wakaTimeAPI, type WakaTimeStats } from "@/lib/wakatime-api";


export default function CodingActivityDashboard() {
  const [stats, setStats] = useState<WakaTimeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchWakaTimeData() {
      try {
        setLoading(true);
        const data = await wakaTimeAPI.getStats();
        setStats(data);
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Languages */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-white/10"
        >
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Code2 className="w-5 h-5" />
            Top Languages
          </h3>
          
          <div className="space-y-3">
            {topLanguages.map((language, index) => (
              <div key={language.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center text-white text-sm font-bold">
                    {language.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-medium">{language.name}</p>
                    <p className="text-sm text-gray-400">{language.text}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-semibold">{language.percent.toFixed(1)}%</p>
                  <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${language.percent}%` }}
                      transition={{ delay: index * 0.1, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-emerald-400 to-blue-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Top Projects */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-white/10"
        >
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <GitBranch className="w-5 h-5" />
            Active Projects
          </h3>
          
          <div className="space-y-3">
            {topProjects.map((project, index) => (
              <div key={project.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white text-sm font-bold">
                    {project.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-white font-medium">{project.name}</p>
                    <p className="text-sm text-gray-400">{project.text}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-semibold">{project.percent.toFixed(1)}%</p>
                  <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${project.percent}%` }}
                      transition={{ delay: index * 0.1, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-purple-400 to-pink-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

    </div>
  );
}