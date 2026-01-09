import { PersonalInfo, Skill, TimelineItem } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Nathaniel",
  fullName: "John Nathaniel Marquez",
  location: "Philippines",
  email: "marquezjohnnathanieljade@gmail.com",
  bio: "I'm a passionate web developer with a strong foundation in modern technologies and extensive expertise in AI-assisted development. I leverage cutting-edge AI tools including Claude Code CLI, WindSurf, Cursor, Cline, RooCode, v0.dev, ChatGPT, Perplexity, and Claude to accelerate development workflows and deliver innovative solutions. My latest project, the T1NKER PC Rental & Management System, showcases my ability to architect secure, real-time, and user-friendly solutions for real-world business needs. Starting from basic programming concepts, I've evolved to master AI-assisted development while maintaining high standards of code quality. My journey includes successful projects in both frontend and full-stack development, showcasing my ability to learn and adapt quickly.",
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
  workstation: {
    typingSpeed: "47 WPM with 95% accuracy",
    hardware: {
      motherboard: "Asus Prime B650-A II AM5",
      processor: "AMD Ryzen 7 7700",
      gpu: "PowerColor RX 7800XT 16GB GDDR6",
      ram: "G.Skill Ripjaws M5 32GB (2x16GB) 6000MHz DDR5 RGB",
      storage: ["Kingston NV3 1TB NVMe M.2 SSD", "Kingston NV3 2TB NVMe M.2 SSD"],
      psu: "XPG Corsair 850G 850W 80+ Gold",
      case: "Y60K Panoramic Glass Case",
      cooling: "DarkFlash Twister DX360 Liquid Cooler",
      fans: ["KeyTech Prism 3-in-1 RGB Fan", "KeyTech Prism Single RGB Fan"],
      monitor: "Lenovo Legion 1080p",
      connectivity: "High-speed fiber internet (50+ Mbps)"
    },
    setup: "Professional dual-monitor capable workstation with RGB lighting and liquid cooling for extended development sessions"
  },
  portfolioAssets: {
    typingTestProof: "https://drive.google.com/file/d/1hse8vZfpKiekPW9S2iZwXH_iCSKNfE0s/view?usp=sharing",
    scrapingProjects: {
      gmbScraping: "https://docs.google.com/spreadsheets/d/1tx96wwPwPDzmvbgk2sgPZ-rR-lHAduhh2GIemrJstck/edit?usp=sharing",
      productListing: "https://docs.google.com/spreadsheets/d/1Xpf469ByKEmYYzz-HQ4dr-mqAoqfl6im0mVH9T-F9f0/edit?usp=sharing"
    }
  },
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
  { name: "React", category: "frontend", level: "Intermediate", since: "2024" },
  { name: "Next.js", category: "frontend", level: "Intermediate", since: "2024" },
  { name: "TypeScript", category: "frontend", level: "Intermediate", since: "2024" },
  { name: "Tailwind CSS", category: "frontend", level: "Intermediate", since: "2024" },
  { name: "JavaScript", category: "frontend", level: "Intermediate", since: "2023" },
  { name: "HTML5", category: "frontend", level: "Advanced", since: "2023" },
  { name: "CSS3", category: "frontend", level: "Advanced", since: "2023" },
  { name: "Framer Motion", category: "frontend", level: "Intermediate", since: "2024" },
  { name: "Mantine", category: "frontend", level: "Intermediate", since: "2025" },
  { name: "Radix UI", category: "frontend", level: "Intermediate", since: "2024" },
  { name: "Shadcn/ui", category: "frontend", level: "Intermediate", since: "2024" },
  { name: "Zustand", category: "frontend", level: "Intermediate", since: "2024" },
  { name: "React Query", category: "frontend", level: "Beginner", since: "2024" },
  { name: "Recharts", category: "frontend", level: "Intermediate", since: "2024" },
  { name: "Chart.js", category: "frontend", level: "Intermediate", since: "2025" },

  // Backend Skills
  { name: "Node.js", category: "backend", level: "Intermediate", since: "2024" },
  { name: "Python", category: "backend", level: "Advanced", since: "2023" },
  { name: "FastAPI", category: "backend", level: "Intermediate", since: "2025" },
  { name: "Flask", category: "backend", level: "Intermediate", since: "2024" },
  { name: "PostgreSQL", category: "backend", level: "Intermediate", since: "2024" },
  { name: "Supabase", category: "backend", level: "Intermediate", since: "2024" },
  { name: "Prisma", category: "backend", level: "Beginner", since: "2024" },
  { name: "SQLAlchemy", category: "backend", level: "Intermediate", since: "2025" },
  { name: "PostGIS", category: "backend", level: "Beginner", since: "2025" },
  { name: "Pandas", category: "backend", level: "Intermediate", since: "2025" },
  { name: "NumPy", category: "backend", level: "Intermediate", since: "2025" },
  { name: "OpenAI API", category: "backend", level: "Intermediate", since: "2025" },
  { name: "AWS", category: "backend", level: "Beginner", since: "2025" },
  { name: "Redis", category: "backend", level: "Beginner", since: "2025" },

  // Development Tools
  { name: "Git", category: "tools", level: "Intermediate", since: "2024" },
  { name: "GitHub", category: "tools", level: "Intermediate", since: "2024" },
  { name: "Docker", category: "tools", level: "Intermediate", since: "2025" },
  { name: "Electron", category: "tools", level: "Intermediate", since: "2025" },
  { name: "Vercel", category: "tools", level: "Intermediate", since: "2024" },
  { name: "Heroku", category: "tools", level: "Beginner", since: "2025" },
  { name: "pnpm", category: "tools", level: "Intermediate", since: "2024" },
  { name: "npm", category: "tools", level: "Intermediate", since: "2024" },
  { name: "Poetry", category: "tools", level: "Intermediate", since: "2025" },
  { name: "VS Code", category: "tools", level: "Advanced", since: "2023" },
  { name: "ESLint", category: "tools", level: "Intermediate", since: "2024" },
  { name: "Prettier", category: "tools", level: "Intermediate", since: "2024" },
  { name: "Jest", category: "tools", level: "Beginner", since: "2024" },
  { name: "Pytest", category: "tools", level: "Intermediate", since: "2025" },
  { name: "Webpack", category: "tools", level: "Beginner", since: "2024" },
  { name: "Vite", category: "tools", level: "Beginner", since: "2024" },

  // AI-Assisted Development Tools
  { name: "Claude Code CLI", category: "ai", level: "Advanced", since: "2024" },
  { name: "WindSurf", category: "ai", level: "Advanced", since: "2024" },
  { name: "Cursor", category: "ai", level: "Advanced", since: "2024" },
  { name: "Cline", category: "ai", level: "Intermediate", since: "2024" },
  { name: "RooCode", category: "ai", level: "Intermediate", since: "2025" },
  { name: "v0.dev", category: "ai", level: "Advanced", since: "2024" },
  { name: "ChatGPT", category: "ai", level: "Advanced", since: "2023" },
  { name: "Perplexity", category: "ai", level: "Intermediate", since: "2024" },
  { name: "Claude", category: "ai", level: "Advanced", since: "2024" },
];

// Skill Icon Mapping for devicons-react components
export const SKILL_ICONS = {
  // Frontend Skills
  "React": "ReactOriginal",
  "Next.js": "NextjsOriginal",
  "TypeScript": "TypescriptOriginal",
  "Tailwind CSS": "TailwindcssOriginal",
  "JavaScript": "JavascriptOriginal",
  "HTML5": "Html5Original",
  "CSS3": "Css3Original",
  "Framer Motion": "FramermotionOriginal",
  "Mantine": "MantineOriginal",
  "Radix UI": "RadixuiOriginal",
  "Shadcn/ui": "ShadcnuiOriginal",
  "Zustand": "ZustandOriginal",
  "React Query": "ReactqueryOriginal",
  "Recharts": "RechartsOriginal",
  "Chart.js": "ChartjsOriginal",

  // Backend Skills
  "Node.js": "NodejsOriginal",
  "Python": "PythonOriginal",
  "FastAPI": "FastapiOriginal",
  "Flask": "FlaskOriginal",
  "PostgreSQL": "PostgresqlOriginal",
  "Supabase": "SupabaseOriginal",
  "Prisma": "PrismaOriginal",
  "SQLAlchemy": "SqlalchemyOriginal",
  "PostGIS": "PostgresqlOriginal",
  "Pandas": "PandasOriginal",
  "NumPy": "NumpyOriginal",
  "OpenAI API": "OpenaiOriginal",
  "AWS": "AmazonwebservicesOriginal",
  "Redis": "RedisOriginal",

  // Development Tools
  "Git": "GitOriginal",
  "GitHub": "GithubOriginal",
  "Docker": "DockerOriginal",
  "Electron": "ElectronOriginal",
  "Vercel": "VercelOriginal",
  "Heroku": "HerokuOriginal",
  "pnpm": "PnpmOriginal",
  "npm": "NpmOriginal",
  "Poetry": "PoetryOriginal",
  "VS Code": "VscodeOriginal",
  "ESLint": "EslintOriginal",
  "Prettier": "PrettierOriginal",
  "Jest": "JestOriginal",
  "Pytest": "PytestOriginal",
  "Webpack": "WebpackOriginal",
  "Vite": "ViteOriginal",

  // AI-Assisted Development Tools
  "Claude Code CLI": "TerminalOriginal",
  "WindSurf": "AiOriginal",
  "Cursor": "CursorOriginal",
  "Cline": "AiOriginal",
  "RooCode": "AiOriginal",
  "v0.dev": "VercelOriginal",
  "ChatGPT": "OpenaiOriginal",
  "Perplexity": "AiOriginal",
  "Claude": "AnthropicOriginal",
} as const;
