// WakaTime API integration for portfolio activity tracking
interface WakaTimeStats {
  data: {
    languages: Array<{
      name: string;
      total_seconds: number;
      percent: number;
      digital: string;
      text: string;
    }>;
    projects: Array<{
      name: string;
      total_seconds: number;
      percent: number;
      digital: string;
      text: string;
    }>;
    editors: Array<{
      name: string;
      total_seconds: number;
      percent: number;
      digital: string;
      text: string;
    }>;
    operating_systems: Array<{
      name: string;
      total_seconds: number;
      percent: number;
      digital: string;
      text: string;
    }>;
    total_seconds: number;
    human_readable_total: string;
    daily_average: number;
    human_readable_daily_average: string;
    best_day?: {
      date: string;
      total_seconds: number;
      text: string;
    };
    human_readable_range: string;
    range: string;
  };
}

interface WakaTimeActivity {
  data: Array<{
    user_id: string;
    project: string;
    time: number;
    hash: string;
    created_at: string;
    type: string;
    category: string;
    entity: string;
    branch: string;
  }>;
}

interface WakaTimeHeartbeats {
  data: Array<any>;
  hourly_breakdown: Array<{
    hour: number;
    minutes: number;
    label: string;
  }>;
  total_heartbeats: number;
}

class WakaTimeAPI {
  private async request<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
    const url = new URL(`/api/wakatime${endpoint}`, window.location.origin);
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`API error: ${response.status} - ${response.statusText}`);
    }

    return response.json();
  }

  // Get coding stats for the last 7 days  
  async getStats(range: string = 'last_7_days'): Promise<WakaTimeStats> {
    return this.request<WakaTimeStats>('/stats', { range });
  }

  // Get recent coding activity/heartbeats
  async getActivity(date?: string): Promise<WakaTimeActivity> {
    const dateParam = date || new Date().toISOString().split('T')[0];
    return this.request<WakaTimeActivity>(`/users/current/heartbeats?date=${dateParam}`);
  }

  // Get today's coding time
  async getTodayStats(): Promise<WakaTimeStats> {
    const today = new Date().toISOString().split('T')[0];
    return this.request<WakaTimeStats>(`/users/current/summaries?start=${today}&end=${today}`);
  }

  // Get all-time stats
  async getAllTimeStats(): Promise<any> {
    return this.request<any>('/all-time');
  }

  // Get goals and current streak
  async getGoals(): Promise<any> {
    return this.request<any>('/users/current/goals');
  }

  // Get weekly data for trends
  async getWeeklyData(): Promise<any> {
    const endDate = new Date();
    const startDate = new Date(endDate.getTime() - 4 * 7 * 24 * 60 * 60 * 1000); // 4 weeks
    const start = startDate.toISOString().split('T')[0];
    const end = endDate.toISOString().split('T')[0];
    return this.request<any>(`/users/current/summaries?start=${start}&end=${end}`);
  }

  // Get heartbeats for hourly breakdown
  async getHeartbeats(date?: string): Promise<WakaTimeHeartbeats> {
    const dateParam = date || new Date().toISOString().split('T')[0];
    return this.request<WakaTimeHeartbeats>(`/heartbeats?date=${dateParam}`);
  }

  // Format seconds to human readable time
  formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  }
}

export const wakaTimeAPI = new WakaTimeAPI();
export type { WakaTimeStats, WakaTimeActivity, WakaTimeHeartbeats };