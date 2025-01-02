import { PersonalInfo, Project, Skill, TimelineItem } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Nathaniel",
  fullName: "John Nathaniel Marquez",
  location: "Amadeo, Cavite",
  email: "marquezjohnnathanieljade@gmail.com",
  bio: "A passionate full-stack developer with expertise in modern web technologies.",
  education: {
    school: "ICCT College Cainta Campus",
    course: "Bachelor of Science in Information Technology",
    year: "2024",
  },
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/T1nker-1220",
    },
    {
      platform: "Facebook",
      url: "https://www.facebook.com/nathanielmarquez.20",
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/clover_nat/",
    },
    {
      platform: "WhatsApp",
      url: "https://wa.me/639605088715",
    },
    {
      platform: "Vercel",
      url: "https://vercel.com/t1nker-1220s-projects",
    },
  ],
};

export const timeline: TimelineItem[] = [
  {
    year: "2022",
    description:
      "First year of college, began learning Java and foundational programming concepts.",
  },
  {
    year: "2023",
    description:
      "Second year, expanded knowledge with Python and advanced programming concepts.",
  },
  {
    year: "2024",
    description:
      "Third and fourth year, mastered web development with HTML, CSS, JavaScript, and modern frameworks. Explored AI integration in development processes.",
  },
  {
    year: "2024 December",
    description:
      "Graduated from ICCT College Cainta Campus with a degree in Information Technology.",
  },
];

export const skills: Skill[] = [
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "TailwindCSS", category: "frontend" },
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Webpack", category: "tools" },
  { name: "Prisma", category: "backend" },
  { name: "Supabase", category: "backend" },
  { name: "Material UI", category: "frontend" },
  { name: "Framer Motion", category: "frontend" },
  { name: "Redux", category: "frontend" },
  { name: "Zustand", category: "frontend" },
  { name: "GraphQL", category: "backend" },
  { name: "Apollo", category: "backend" },
  { name: "Cypress", category: "tools" },
  { name: "Vercel", category: "tools" },
];

export const projects: Project[] = [
  {
    title: "Excel Glass Inc. Website",
    description: "Corporate website for Excel Glass Inc.",
    liveUrl: "https://excel-glass.vercel.app",
    techStack: ["Next.js", "TailwindCSS", "TypeScript"],
  },
  {
    title: "Weather API",
    description: "Weather application with real-time data",
    liveUrl: "https://weather-api-s.vercel.app",
    techStack: ["React", "API Integration", "CSS"],
  },
  {
    title: "Edible Artistry",
    description: "Sample food menu website showcasing culinary creations",
    liveUrl: "https://edible-artistry.vercel.app",
    techStack: ["Next.js", "TailwindCSS", "React"],
  },
  {
    title: "Wedding Memories",
    description: "Wedding photography and memories website",
    liveUrl: "https://nicholsweddingmemories.vercel.app",
    techStack: ["React", "CSS", "JavaScript"],
  },
];
