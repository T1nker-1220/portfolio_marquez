"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, RefreshCw, AlertCircle, Calendar } from "lucide-react";
import { fetchGitHubContributions, calculateContributionStats } from "@/lib/github-api";
import { GitHubContributionsData, ContributionStats } from "@/types/github";
import { ContributionHeatmap } from "@/components/ui/contribution-heatmap";
import { ContributionStatsCard, ContributionLevelStats } from "@/components/ui/contribution-stats";
import { useToast } from "@/components/ui/toast";

export default function ContributionsDashboard() {
  const [data, setData] = useState<GitHubContributionsData | null>(null);
  const [stats, setStats] = useState<ContributionStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
  const [refreshing, setRefreshing] = useState(false);
  const { addToast } = useToast();

  const loadContributions = async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
        // Clear cache by clearing localStorage
        if (typeof window !== 'undefined') {
          localStorage.removeItem('github_contributions_data');
        }
      } else {
        setLoading(true);
      }
      
      setError(null);
      
      const contributionsData = await fetchGitHubContributions();
      setData(contributionsData);
      
      const calculatedStats = calculateContributionStats(contributionsData);
      setStats(calculatedStats);
      
      if (isRefresh) {
        addToast({
          type: "success",
          title: "Contributions Updated",
          message: "GitHub contributions have been refreshed successfully."
        });
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to load GitHub contributions";
      setError(errorMessage);
      
      addToast({
        type: "error",
        title: "Failed to Load Contributions",
        message: errorMessage
      });
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadContributions();
  }, []);

  const handleRefresh = () => {
    loadContributions(true);
  };

  const handleYearChange = (year: number) => {
    setSelectedYear(year);
  };

  const availableYears = data?.years?.map(y => parseInt(y.year)).sort((a, b) => b - a) || [new Date().getFullYear()];

  if (loading) {
    return (
      <div className="space-y-6">
        {/* Loading Header */}
        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-white/10 glass-container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-500/20 rounded-lg">
                <Github className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="w-32 h-5 bg-muted/20 rounded animate-pulse mb-1" />
                <div className="w-48 h-4 bg-muted/20 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Loading Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/20 dark:border-white/10 glass-container">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-muted/20 rounded-lg animate-pulse" />
                <div className="flex-1">
                  <div className="w-20 h-3 bg-muted/20 rounded animate-pulse mb-2" />
                  <div className="w-16 h-5 bg-muted/20 rounded animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Loading Heatmap */}
        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-white/10 glass-container">
          <div className="w-full h-32 bg-muted/20 rounded animate-pulse" />
        </div>
      </div>
    );
  }

  if (error && !data) {
    return (
      <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-white/10 glass-container text-center">
        <div className="text-red-600 mb-4">
          <AlertCircle className="w-8 h-8 mx-auto mb-2" />
          <h3 className="text-lg font-semibold">Unable to Load Contributions</h3>
          <p className="text-sm text-muted-foreground mt-2">{error}</p>
        </div>
        <motion.button
          onClick={handleRefresh}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={refreshing}
          className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 text-emerald-600 rounded-lg text-sm hover:bg-emerald-500/30 transition-colors disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
          Try Again
        </motion.button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-white/10 glass-container"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/20 rounded-lg">
              <Github className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">GitHub Contributions</h2>
              <p className="text-sm text-muted-foreground">
                Activity overview for {selectedYear}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Year Selector */}
            <select
              value={selectedYear}
              onChange={(e) => handleYearChange(parseInt(e.target.value))}
              className="px-3 py-2 bg-muted/20 border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all"
            >
              {availableYears.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            
            {/* Refresh Button */}
            <motion.button
              onClick={handleRefresh}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={refreshing}
              className="p-2 bg-muted/20 hover:bg-muted/30 rounded-lg transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      {stats && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <ContributionStatsCard stats={stats} />
        </motion.div>
      )}

      {/* Heatmap */}
      {data && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl border border-white/20 dark:border-white/10 glass-container"
        >
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-emerald-600" />
              <h3 className="text-lg font-semibold text-foreground">
                Contribution Heatmap - {selectedYear}
              </h3>
            </div>
            <ContributionHeatmap 
              contributions={data.contributions} 
              year={selectedYear}
            />
          </div>
        </motion.div>
      )}

      {/* Level Stats */}
      {stats && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <ContributionLevelStats contributionsByLevel={stats.contributionsByLevel} />
        </motion.div>
      )}
    </div>
  );
}