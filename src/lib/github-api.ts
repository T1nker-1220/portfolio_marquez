import { GitHubApiResponse, GitHubContributionsData, ContributionStats } from '@/types/github';

const GITHUB_API_BASE_URL = 'https://github-contributions-api.jogruber.de/v4/T1nker-1220';
const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes in milliseconds

interface CachedData {
  data: GitHubContributionsData;
  timestamp: number;
}

function getCacheKey(year: number): string {
  return `github_contributions_${year}`;
}

class GitHubApiError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
    this.name = 'GitHubApiError';
  }
}

export async function fetchGitHubContributions(year?: number): Promise<GitHubContributionsData> {
  const targetYear = year || new Date().getFullYear();
  
  try {
    // Check cache first
    const cached = getCachedData(targetYear);
    if (cached) {
      return cached;
    }

    const url = `${GITHUB_API_BASE_URL}?y=${targetYear}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Portfolio-Marquez/1.0'
      },
      // Add caching for SSR
      next: { 
        revalidate: 900 // 15 minutes
      }
    });

    if (!response.ok) {
      throw new GitHubApiError(
        `Failed to fetch GitHub contributions for ${targetYear}: ${response.status} ${response.statusText}`,
        response.status
      );
    }

    const data: GitHubApiResponse = await response.json();
    
    // Validate the response structure
    if (!data.contributions || !Array.isArray(data.contributions)) {
      throw new GitHubApiError('Invalid response format: missing contributions array');
    }

    // Cache the successful response
    setCachedData(data, targetYear);
    
    return data;
  } catch (error) {
    if (error instanceof GitHubApiError) {
      throw error;
    }
    
    // Handle network errors, etc.
    throw new GitHubApiError(
      `Network error while fetching GitHub contributions for ${targetYear}: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
}

export async function fetchMultipleYears(years: number[]): Promise<{ [year: number]: GitHubContributionsData }> {
  const results: { [year: number]: GitHubContributionsData } = {};
  
  try {
    const promises = years.map(async (year) => {
      const data = await fetchGitHubContributions(year);
      return { year, data };
    });
    
    const responses = await Promise.all(promises);
    
    responses.forEach(({ year, data }) => {
      results[year] = data;
    });
    
    return results;
  } catch (error) {
    throw new GitHubApiError(
      `Failed to fetch contributions for multiple years: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
}

function getCachedData(year: number): GitHubContributionsData | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const cacheKey = getCacheKey(year);
    const cached = localStorage.getItem(cacheKey);
    if (!cached) return null;

    const { data, timestamp }: CachedData = JSON.parse(cached);
    const now = Date.now();
    
    // Check if cache is still valid
    if (now - timestamp < CACHE_DURATION) {
      return data;
    }
    
    // Cache expired, remove it
    localStorage.removeItem(cacheKey);
    return null;
  } catch {
    // Invalid cache data, remove it
    const cacheKey = getCacheKey(year);
    localStorage.removeItem(cacheKey);
    return null;
  }
}

function setCachedData(data: GitHubContributionsData, year: number): void {
  if (typeof window === 'undefined') return;
  
  try {
    const cacheKey = getCacheKey(year);
    const cacheData: CachedData = {
      data,
      timestamp: Date.now()
    };
    localStorage.setItem(cacheKey, JSON.stringify(cacheData));
  } catch {
    // Ignore cache errors (storage might be full, etc.)
  }
}

export function calculateContributionStats(data: GitHubContributionsData): ContributionStats {
  const contributions = data.contributions || [];
  const currentYear = new Date().getFullYear();
  
  // Total contributions for current year
  const totalContributions = data.total[currentYear] || 0;
  
  // Calculate streaks
  const { currentStreak, longestStreak } = calculateStreaks(contributions);
  
  // Average per day (current year)
  const daysInYear = new Date().getFullYear() % 4 === 0 ? 366 : 365;
  const daysPassed = Math.floor((Date.now() - new Date(currentYear, 0, 1).getTime()) / (1000 * 60 * 60 * 24));
  const averagePerDay = daysPassed > 0 ? totalContributions / daysPassed : 0;
  
  // Most active day and month
  const { mostActiveDay, mostActiveMonth } = findMostActivePeriods(contributions);
  
  // Contributions by level
  const contributionsByLevel = contributions.reduce((acc, contrib) => {
    acc[contrib.level] = (acc[contrib.level] || 0) + 1;
    return acc;
  }, {} as { [key: number]: number });

  return {
    totalContributions,
    currentStreak,
    longestStreak,
    averagePerDay: Math.round(averagePerDay * 100) / 100,
    mostActiveDay,
    mostActiveMonth,
    contributionsByLevel
  };
}

function calculateStreaks(contributions: any[]): { currentStreak: number; longestStreak: number } {
  if (!contributions.length) return { currentStreak: 0, longestStreak: 0 };
  
  // Sort contributions by date (newest first for current streak)
  const sortedContribs = [...contributions].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  let currentStreak = 0;
  let longestStreak = 0;
  let currentStreakLength = 0;
  
  // Calculate current streak (from today backwards)
  const today = new Date();
  let checkDate = new Date(today);
  
  for (let i = 0; i < sortedContribs.length; i++) {
    const contribDate = new Date(sortedContribs[i].date);
    const diffDays = Math.floor((checkDate.getTime() - contribDate.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0 && sortedContribs[i].count > 0) {
      currentStreak++;
      checkDate.setDate(checkDate.getDate() - 1);
    } else if (diffDays === 0) {
      break;
    }
  }
  
  // Calculate longest streak
  const sortedByDate = [...contributions].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  
  for (const contrib of sortedByDate) {
    if (contrib.count > 0) {
      currentStreakLength++;
      longestStreak = Math.max(longestStreak, currentStreakLength);
    } else {
      currentStreakLength = 0;
    }
  }
  
  return { currentStreak, longestStreak };
}

function findMostActivePeriods(contributions: any[]): { mostActiveDay: string; mostActiveMonth: string } {
  const dayTotals: { [key: string]: number } = {};
  const monthTotals: { [key: string]: number } = {};
  
  contributions.forEach(contrib => {
    const date = new Date(contrib.date);
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
    const monthName = date.toLocaleDateString('en-US', { month: 'long' });
    
    dayTotals[dayName] = (dayTotals[dayName] || 0) + contrib.count;
    monthTotals[monthName] = (monthTotals[monthName] || 0) + contrib.count;
  });
  
  const mostActiveDay = Object.entries(dayTotals).sort(([,a], [,b]) => b - a)[0]?.[0] || 'Monday';
  const mostActiveMonth = Object.entries(monthTotals).sort(([,a], [,b]) => b - a)[0]?.[0] || 'January';
  
  return { mostActiveDay, mostActiveMonth };
}