export type TimelineItem = {
  year: string;
  description: string;
  image?: string;
};

export type Skill = {
  name: string;
  icon?: string;
  category: "frontend" | "backend" | "tools" | "other";
};

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string | null;
  techStack: TechStack[];
  features: string[];
  category: ProjectCategory;
  status: ProjectStatus;
  completedAt: string;
}

export type ProjectCategory =
  | "Web Development"
  | "API Integration"
  | "UI/UX Design"
  | "Full Stack"
  | "Coming Soon"
  | "Content Creation";

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
    year: string;
  };
  socialLinks: SocialLink[];
};
