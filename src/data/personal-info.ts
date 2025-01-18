import { PersonalInfo, Project, Skill, TimelineItem } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Nathaniel",
  fullName: "John Nathaniel Marquez",
  location: "Amadeo, Cavite",
  email: "marquezjohnnathanieljade@gmail.com",
  bio: "A passionate front-end developer with expertise in modern web technologies.",
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
  { name: "Framer Motion", category: "frontend" },
  { name: "Redux", category: "frontend" },
  { name: "Zustand", category: "frontend" },
  { name: "Vercel", category: "tools" },
];

export const projects: Project[] = [
  {
    id: "excel-glass",
    title: "Excel Glass Inc. Website",
    description: "Corporate website for Excel Glass Inc.",
    image: "/images/projects/excel-glass.png",
    liveUrl: "https://excel-glass.vercel.app",
    githubUrl: null,
    features: ["Modern UI", "Responsive Design", "Glass Morphism"],
    category: "Web Development",
    status: "Completed",
    completedAt: "2024-01",
    techStack: [
      { name: "Next.js", icon: "nextjs", color: "#000000" },
      { name: "TailwindCSS", icon: "tailwind", color: "#38B2AC" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
    ],
  },
  {
    id: "weather-api",
    title: "Weather API",
    description: "Weather application with real-time data",
    image: "/images/projects/weather-api.png",
    liveUrl: "https://weather-api-s.vercel.app",
    githubUrl: null,
    features: [
      "Real-time Weather Data",
      "Location Search",
      "Responsive Design",
    ],
    category: "API Integration",
    status: "Completed",
    completedAt: "2024-01",
    techStack: [
      { name: "React", icon: "react", color: "#61DAFB" },
      { name: "API Integration", icon: "api", color: "#38A169" },
      { name: "CSS", icon: "css", color: "#1572B6" },
    ],
  },
  {
    id: "edible-artistry",
    title: "Edible Artistry",
    description: "Sample food menu website showcasing culinary creations",
    image: "/images/projects/edible-artistry.png",
    liveUrl: "https://edible-artistry.vercel.app",
    githubUrl: null,
    features: ["Menu Management", "Beautiful UI", "Responsive Design"],
    category: "Web Development",
    status: "Completed",
    completedAt: "2024-02",
    techStack: [
      { name: "Next.js", icon: "nextjs", color: "#000000" },
      { name: "TailwindCSS", icon: "tailwind", color: "#38B2AC" },
      { name: "React", icon: "react", color: "#61DAFB" },
    ],
  },
  {
    id: "wedding-memories",
    title: "Wedding Memories",
    description: "Wedding photography and memories website",
    image: "/images/projects/wedding-memories.png",
    liveUrl: "https://nicholsweddingmemories.vercel.app",
    githubUrl: null,
    features: ["Photo Gallery", "Event Timeline", "RSVP System"],
    category: "Web Development",
    status: "Completed",
    completedAt: "2024-02",
    techStack: [
      { name: "React", icon: "react", color: "#61DAFB" },
      { name: "CSS", icon: "css", color: "#1572B6" },
      { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
    ],
  },
];
