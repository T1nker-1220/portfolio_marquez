"use client";

import { motion } from "framer-motion";
import { ContributionStats } from "@/types/github";
import { 
  GitCommit, 
  Calendar, 
  TrendingUp, 
  Award, 
  Clock,
  BarChart3
} from "lucide-react";

interface ContributionStatsProps {
  stats: ContributionStats;
  className?: string;
}

export function ContributionStatsCard({ stats, className = "" }: ContributionStatsProps) {
  const statItems = [
    {
      label: "Total Contributions",
      value: stats.totalContributions.toLocaleString(),
      icon: GitCommit,
      color: "text-gray-300",
      bgColor: "from-gray-500/20 to-gray-700/20 border-gray-500/20"
    },
    {
      label: "Current Streak",
      value: `${stats.currentStreak} ${stats.currentStreak === 1 ? 'day' : 'days'}`,
      icon: Calendar,
      color: "text-gray-300",
      bgColor: "from-gray-500/20 to-gray-700/20 border-gray-500/20"
    },
    {
      label: "Longest Streak", 
      value: `${stats.longestStreak} ${stats.longestStreak === 1 ? 'day' : 'days'}`,
      icon: Award,
      color: "text-gray-300",
      bgColor: "from-gray-500/20 to-gray-700/20 border-gray-500/20"
    },
    {
      label: "Daily Average",
      value: stats.averagePerDay.toFixed(1),
      icon: TrendingUp,
      color: "text-gray-300",
      bgColor: "from-gray-500/20 to-gray-700/20 border-gray-500/20"
    },
    {
      label: "Most Active Day",
      value: stats.mostActiveDay,
      icon: Clock,
      color: "text-gray-300",
      bgColor: "from-gray-500/20 to-gray-700/20 border-gray-500/20"
    },
    {
      label: "Most Active Month",
      value: stats.mostActiveMonth,
      icon: BarChart3,
      color: "text-gray-300",
      bgColor: "from-gray-500/20 to-gray-700/20 border-gray-500/20"
    }
  ];

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
      {statItems.map((item, index) => {
        const Icon = item.icon;
        
        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`bg-gradient-to-r ${item.bgColor} backdrop-blur-md rounded-xl p-4 border glass-container hover:scale-[1.02] transition-transform`}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white/10">
                <Icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                  {item.label}
                </div>
                <div className="text-lg font-bold text-white truncate">
                  {item.value}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

interface ContributionLevelStatsProps {
  contributionsByLevel: { [key: number]: number };
  className?: string;
}

export function ContributionLevelStats({ contributionsByLevel, className = "" }: ContributionLevelStatsProps) {
  const totalDays = Object.values(contributionsByLevel).reduce((sum, count) => sum + count, 0);
  
  const levels = [
    { level: 0, label: "No contributions", color: "bg-gray-800/30" },
    { level: 1, label: "1-3 contributions", color: "bg-gray-600/40" },
    { level: 2, label: "4-6 contributions", color: "bg-gray-500/50" },
    { level: 3, label: "7-9 contributions", color: "bg-gray-400/60" },
    { level: 4, label: "10+ contributions", color: "bg-gray-300/70" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/20 dark:border-white/10 glass-container ${className}`}
    >
      <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
        <BarChart3 className="w-4 h-4" />
        Contribution Levels
      </h3>
      
      <div className="space-y-3">
        {levels.map(({ level, label, color }) => {
          const count = contributionsByLevel[level] || 0;
          const percentage = totalDays > 0 ? (count / totalDays) * 100 : 0;
          
          return (
            <div key={level} className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-sm ${color}`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground truncate">{label}</span>
                  <span className="text-foreground font-medium">{count}</span>
                </div>
                <div className="w-full bg-muted/20 rounded-full h-1.5 mt-1">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.8, delay: level * 0.1 }}
                    className="bg-gray-400 h-1.5 rounded-full"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}