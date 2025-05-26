import { PersonalInfo, Skill, TimelineItem } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Nathaniel",
  fullName: "John Nathaniel Marquez",
  location: "Amadeo, Cavite",
  email: "marquezjohnnathanieljade@gmail.com",
  bio: "I'm a passionate web developer with a strong foundation in modern technologies. My latest project, the T1NKER PC Rental & Management System, showcases my ability to architect secure, real-time, and user-friendly solutions for real-world business needs. I embrace AI-assisted development and modern frameworks to deliver high-quality, scalable applications. Starting from basic programming concepts, I've evolved to embrace AI-assisted development while maintaining high standards of code quality. My journey includes successful projects in both frontend and full-stack development, showcasing my ability to learn and adapt quickly.",
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
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/john-nathaniel-marquez-866522334",
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
      platform: "Youtube",
      url: "https://www.youtube.com/@t1nkergaming731",
    },
  ],
};

export const timeline: TimelineItem[] = [
  {
    year: "2022",
    description:
      "Started my IT journey at ICCT College, focusing on Java programming and fundamental computer science concepts. This foundation helped shape my understanding of programming logic and object-oriented principles.",
  },
  {
    year: "2023",
    description:
      "Expanded my programming knowledge with Python, choosing it for its simplicity and versatility. Started exploring web development fundamentals including HTML, CSS, and JavaScript. This year marked my initial steps into the world of web technologies.",
  },
  {
    year: "2024",
    description:
      "Made significant strides in web development, completing several key projects including a Weather API integration, Wedding Memories blog, and restaurant management systems. Embraced AI-assisted development tools like Cursor AI and WindSurf AI to enhance my development workflow. Successfully integrated modern frameworks and technologies into my projects.",
  },
  {
    year: "2024 December",
    description:
      "Graduated from ICCT College Cainta Campus with a degree in Information Technology. Completed my first professional project with Excel Glass Inc., applying my web development skills in a real-world business context.",
  },
  {
    year: "2025",
    description:
      "Actively developing my portfolio and skills through continuous learning and project development. Working on enhancing my full-stack capabilities while seeking opportunities to contribute to meaningful projects in a professional team environment.",
  },
  {
    year: "2025 May 15–26",
    description:
      "Designed and launched the T1NKER PC Rental & Management System—a full-stack, real-time kiosk and admin dashboard solution for PC rental shops. Integrated Next.js, Electron, Supabase, PostgreSQL, and advanced session management for a seamless, secure rental experience.",
  },
];

export const skills: Skill[] = [
  // Frontend Skills
  { name: "React.js", category: "frontend", level: "Beginner", since: "2024" },
  { name: "Next.js", category: "frontend", level: "Beginner", since: "2024" },
  { name: "TypeScript", category: "frontend", level: "Beginner", since: "2024" },
  { name: "Tailwind CSS", category: "frontend", level: "Beginner", since: "2024" },
  { name: "Mantine v7", category: "frontend", level: "Intermediate", since: "2025" },
  { name: "HTML5", category: "frontend", level: "Intermediate", since: "2023" },
  { name: "CSS3", category: "frontend", level: "Intermediate", since: "2023" },
  { name: "JavaScript", category: "frontend", level: "Beginner", since: "2023" },
  { name: "Framer Motion", category: "frontend", level: "Beginner", since: "2024" },

  // Backend Skills
  { name: "Node.js", category: "backend", level: "Beginner", since: "2024" },
  { name: "Python", category: "backend", level: "Intermediate", since: "2023" },
  { name: "Flask", category: "backend", level: "Beginner", since: "2024" },
  { name: "RESTful APIs", category: "backend", level: "Beginner", since: "2024" },
  { name: "Prisma", category: "backend", level: "Beginner", since: "2024" },
  { name: "Supabase", category: "backend", level: "Beginner", since: "2024" },
  { name: "MCP Protocol", category: "backend", level: "Intermediate", since: "2025" },
  { name: "Knowledge Graphs", category: "backend", level: "Intermediate", since: "2025" },
  { name: "PostgreSQL", category: "backend", level: "Beginner", since: "2025" },
  { name: "bcryptjs", category: "backend", level: "Beginner", since: "2025" },

  // Development Tools
  { name: "Git", category: "tools", level: "Beginner", since: "2024" },
  { name: "VS Code", category: "tools", level: "Advanced", since: "2023" },
  { name: "Cursor AI", category: "tools", level: "Advanced", since: "2024" },
  { name: "WindSurf AI", category: "tools", level: "Intermediate", since: "2024" },
  { name: "Vercel", category: "tools", level: "Intermediate", since: "2024" },
  { name: "pnpm", category: "tools", level: "Intermediate", since: "2024" },
  { name: "GitHub", category: "tools", level: "Intermediate", since: "2024" },
  { name: "CI/CD", category: "tools", level: "Beginner", since: "2024" },
  { name: "Docker", category: "tools", level: "Intermediate", since: "2025" },
  { name: "Electron", category: "tools", level: "Beginner", since: "2025" },

  // Soft Skills
  { name: "Problem Solving", category: "soft skills" },
  { name: "Communication", category: "soft skills" },
  { name: "Project Management", category: "soft skills" },
  { name: "Time Management", category: "soft skills" },
  { name: "Adaptability", category: "soft skills" },
  { name: "Critical Thinking", category: "soft skills" },
  { name: "Prompt Engineering", category: "soft skills" },
  { name: "Self-Learning", category: "soft skills" },

  // Other Skills
  { name: "UI/UX Design", category: "other" },
  { name: "Responsive Design", category: "other" },
  { name: "Web Performance", category: "other" },
  { name: "SEO", category: "other" },
  { name: "API Integration", category: "other" },
  { name: "Documentation", category: "other" },
  { name: "Code Review", category: "other" },
  { name: "System Design", category: "other" },
  { name: "AI-Assisted Development", category: "other" },
  { name: "AI Context Management", category: "other", level: "Intermediate", since: "2025" },
  { name: "Memory Systems", category: "other", level: "Intermediate", since: "2025" },
];
