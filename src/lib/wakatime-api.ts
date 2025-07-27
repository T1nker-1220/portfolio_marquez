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
    total_seconds: number;
    human_readable_total: string;
    daily_average: number;
    human_readable_daily_average: string;
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

  // Get coding stats for the last 30 days
  async getStats(range: string = 'last_30_days'): Promise<WakaTimeStats> {
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
export type { WakaTimeStats, WakaTimeActivity };