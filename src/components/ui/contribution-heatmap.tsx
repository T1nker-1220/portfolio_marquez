"use client";

import { motion } from "framer-motion";
import { GitHubContribution } from "@/types/github";

interface ContributionHeatmapProps {
  contributions: GitHubContribution[];
  year?: number;
  className?: string;
}

export function ContributionHeatmap({ contributions, year, className = "" }: ContributionHeatmapProps) {
  const currentYear = year || new Date().getFullYear();
  
  // Filter contributions for the specified year
  const yearContributions = contributions.filter(contrib => {
    const contribYear = new Date(contrib.date).getFullYear();
    return contribYear === currentYear;
  });

  // Create a map for quick lookup
  const contributionMap = new Map(
    yearContributions.map(contrib => [contrib.date, contrib])
  );

  // Generate all dates for the year
  const startDate = new Date(currentYear, 0, 1);
  const endDate = new Date(currentYear, 11, 31);
  const dates: Date[] = [];
  
  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    dates.push(new Date(d));
  }

  // Get level colors
  const getLevelColor = (level: number) => {
    const colors = {
      0: "bg-muted/10 hover:bg-muted/20",
      1: "bg-emerald-200 hover:bg-emerald-300 dark:bg-emerald-900/30 dark:hover:bg-emerald-900/50",
      2: "bg-emerald-400 hover:bg-emerald-500 dark:bg-emerald-700/50 dark:hover:bg-emerald-700/70",
      3: "bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600/70 dark:hover:bg-emerald-600/90",
      4: "bg-emerald-800 hover:bg-emerald-900 dark:bg-emerald-500/90 dark:hover:bg-emerald-500"
    };
    return colors[level as keyof typeof colors] || colors[0];
  };

  // Group dates by week
  const weeks: Date[][] = [];
  let currentWeek: Date[] = [];
  
  dates.forEach((date, index) => {
    currentWeek.push(date);
    
    // Start a new week on Sunday or when we reach the end
    if (date.getDay() === 6 || index === dates.length - 1) {
      weeks.push([...currentWeek]);
      currentWeek = [];
    }
  });

  // Month labels
  const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <div className={`p-4 ${className}`}>
      <div className="overflow-x-auto">
        <div className="min-w-fit">
          {/* Month labels */}
          <div className="flex mb-2 text-xs text-muted-foreground">
            {monthLabels.map((month, index) => (
              <div key={month} className="w-12 text-center">
                {month}
              </div>
            ))}
          </div>
          
          {/* Heatmap grid */}
          <div className="flex gap-1">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {Array.from({ length: 7 }).map((_, dayIndex) => {
                  const date = week[dayIndex];
                  if (!date) {
                    return <div key={dayIndex} className="w-3 h-3" />;
                  }
                  
                  const dateStr = date.toISOString().split('T')[0];
                  const contribution = contributionMap.get(dateStr);
                  const level = contribution?.level || 0;
                  const count = contribution?.count || 0;
                  
                  return (
                    <motion.div
                      key={dateStr}
                      whileHover={{ scale: 1.2 }}
                      className={`w-3 h-3 rounded-sm cursor-pointer transition-all ${getLevelColor(level)}`}
                      title={`${date.toLocaleDateString()}: ${count} contributions`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
          
          {/* Legend */}
          <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
            <span>Less</span>
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map(level => (
                <div
                  key={level}
                  className={`w-3 h-3 rounded-sm ${getLevelColor(level)}`}
                />
              ))}
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );
}