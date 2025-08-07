export type TimelineItem = {
  year: string;
  description: string;
  image?: string;
};

export interface Skill {
  name: string;
  icon?: string;
  category: "frontend" | "backend" | "tools" | "other" | "soft skills" | "ai";
  level?: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  since?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  video?: {
    src: string;
    poster: string;
  };
  liveUrl: string;
  githubUrl: string | null;
  techStack: TechStack[];
  features: string[];
  category: ProjectCategory;
  status: ProjectStatus;
  completedAt: string;
  featured?: boolean;
  featuredRank?: number;
}

export type ProjectCategory =
  | "Websites"
  | "AI"
  | "MCP"
  | "Scraping";

export type ProjectStatus = "Completed" | "In Progress" | "Coming Soon";

export interface TechStack {
  name: string;
  icon: string;
  color: string;
}

export type SocialLink = {
  platform: string;
  url: string;
  icon?: string;
};

export type PersonalInfo = {
  name: string;
  fullName: string;
  location: string;
  email: string;
  bio: string;
  education: {
    school: string;
    course: string;
    startYear: string;
    endYear: string;
  }[]
  socialLinks: SocialLink[];
  workstation?: {
    typingSpeed: string;
    hardware: {
      motherboard: string;
      processor: string;
      gpu: string;
      ram: string;
      storage: string[];
      psu: string;
      case: string;
      cooling: string;
      fans: string[];
      monitor: string;
      connectivity: string;
    };
    setup: string;
  };
  portfolioAssets?: {
    typingTestProof: string;
    scrapingProjects: {
      gmbScraping: string;
      productListing: string;
    };
  };
};
