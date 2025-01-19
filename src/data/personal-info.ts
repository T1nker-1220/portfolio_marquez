import { PersonalInfo, Skill, TimelineItem } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Nathaniel",
  fullName: "John Nathaniel Marquez",
  location: "Amadeo, Cavite",
  email: "marquezjohnnathanieljade@gmail.com",
  bio: "I'm a passionate front-end developer with beginner knowledge in modern web technologies. I embrace AI technologies to accelerate my development process while maintaining high standards of reliability in my web projects.",
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
      url: "www.linkedin.com/in/john-nathaniel-marquez-866522334",
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
      "Second year, expanded knowledge with Python basics.",
  },
  {
    year: "2024",
    description:
      "Third and fourth year, I've got more knowledge in web development and I've learned more about AI integration in development processes. By incorporating AI tools into my daily workflow, I optimize my web development process for speed and reliability. I've also learned more about the importance of testing and documentation in web development. ",
  },
  {
    year: "2024 December",
    description:
      "Graduated from ICCT College Cainta Campus with a degree in Information Technology. While I'm not a professional yet, I'm confident that I can contribute to your team. ",
  },
  {
    year: "2025",
    description:
      "Actively seeking opportunities to join a collaborative team where I can contribute while continuing to grow my web development skills. Eager to learn from experienced developers and take on new challenges.",
  },
];

export const skills: Skill[] = [
  // Frontend Skills
  { name: "React.js", category: "frontend", level: "Beginner", since: "2024" },
  { name: "Next.js", category: "frontend", level: "Beginner", since: "2024" },
  { name: "TypeScript", category: "frontend", level: "Beginner", since: "2024" },
  { name: "Tailwind CSS", category: "frontend", level: "Beginner", since: "2024" },
  { name: "HTML5", category: "frontend", level: "Intermediate", since: "2024" },
  { name: "CSS3", category: "frontend", level: "Intermediate", since: "2024" },
  { name: "JavaScript", category: "frontend", level: "Beginner", since: "2024" },
  { name: "Framer Motion", category: "frontend", level: "Beginner", since: "2024" },

  // Backend Skills
  { name: "Node.js", category: "backend", level: "Beginner", since: "2024" },
  { name: "PostgreSQL", category: "backend", level: "Beginner", since: "2024" },
  { name: "RESTful APIs", category: "backend", level: "Beginner", since: "2024" },
  { name: "Prisma", category: "backend", level: "Beginner", since: "2024" },
  { name: "Supabase", category: "backend", level: "Beginner", since: "2024" },

  // Development Tools
  { name: "Git", category: "tools", level: "Beginner", since: "2024" },
  { name: "VS Code", category: "tools", level: "Advanced", since: "2024" },
  { name: "Vercel", category: "tools", level: "Intermediate", since: "2024" },
  { name: "npm/pnpm", category: "tools", level: "Intermediate", since: "2024" },
  { name: "GitHub", category: "tools", level: "Intermediate", since: "2024" },
  { name: "CI/CD", category: "tools", level: "Beginner", since: "2024" },

  // Soft Skills
  { name: "Problem Solving", category: "soft skills" },
  { name: "Communication", category: "soft skills" },
  { name: "Project Management", category: "soft skills" },
  { name: "Time Management", category: "soft skills" },
  { name: "Mentoring", category: "soft skills" },
  { name: "Critical Thinking", category: "soft skills" },
  { name: "Prompt Engineering", category: "soft skills" },

  // Other Skills
  { name: "UI/UX Design", category: "other" },
  { name: "Responsive Design", category: "other" },
  { name: "Web Performance", category: "other" },
  { name: "SEO", category: "other" },
  { name: "Testing", category: "other" },
  { name: "Documentation", category: "other" },
  { name: "Code Review", category: "other" },
  { name: "System Design", category: "other" },
];
