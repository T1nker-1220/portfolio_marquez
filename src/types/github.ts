export interface GitHubContribution {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface GitHubYear {
  year: string;
  total: number;
  range: {
    start: string;
    end: string;
  };
}

export interface GitHubContributionsData {
  total: {
    [year: string]: number;
    [year: number]: number;
  };
  contributions: GitHubContribution[];
  years: GitHubYear[];
}

export interface GitHubApiResponse {
  total: {
    [year: string]: number;
    [year: number]: number;
  };
  contributions: GitHubContribution[];
  years: GitHubYear[];
}

export interface ContributionStats {
  totalContributions: number;
  currentStreak: number;
  longestStreak: number;
  averagePerDay: number;
  mostActiveDay: string;
  mostActiveMonth: string;
  contributionsByLevel: {
    [key: number]: number;
  };
}