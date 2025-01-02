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

export type Project = {
  title: string;
  description: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  techStack: string[];
};

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
