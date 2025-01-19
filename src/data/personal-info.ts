import { PersonalInfo, Skill, TimelineItem } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Nathaniel",
  fullName: "John Nathaniel Marquez",
  location: "Amadeo, Cavite",
  email: "marquezjohnnathanieljade@gmail.com",
  bio: "A passionate front-end developer with expertise in modern web technologies.",
  education: [
    {
      school: "ICCT College Cainta Campus",
      course: "Bachelor of Science in Information Technology",
      startYear: "2022",
      endYear: "2024",
    },
  ],
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
  { name: "HTML", category: "frontend", since: "2023" },
  { name: "CSS", category: "frontend", since: "2023" },
  { name: "JavaScript", category: "frontend", since: "2023" },
  { name: "TypeScript", category: "frontend", since: "2024" },
  { name: "React", category: "frontend", since: "2024" },
  { name: "Next.js", category: "frontend", since: "2024" },
  { name: "TailwindCSS", category: "frontend", since: "2024" },
  { name: "Framer Motion", category: "frontend", since: "2024" },
  { name: "Zustand", category: "frontend", since: "2024" },
  { name: "Prisma", category: "backend", since: "2024" },
  { name: "Supabase", category: "backend", since: "2024" },
  { name: "Webpack", category: "tools", since: "2024" },
  { name: "Vercel", category: "tools", since: "2024" },
];
