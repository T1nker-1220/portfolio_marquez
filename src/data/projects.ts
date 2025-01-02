import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "excel-glass",
    title: "Excel Glass Inc.",
    description:
      "A modern website for Excel Glass Inc. showcasing their products and services with a beautiful UI and responsive design.",
    image: "/images/projects/excel-glass.webp",
    liveUrl: "https://excel-glass.vercel.app",
    githubUrl: "https://github.com/T1nker-1220/ExcelGlass",
    techStack: [
      { name: "Next.js 14", icon: "nextjs", color: "#000000" },
      { name: "React 18", icon: "react", color: "#61DAFB" },
      { name: "Node.js", icon: "nodejs", color: "#339933" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4" },
      { name: "Headless UI", icon: "headlessui", color: "#66E3FF" },
      { name: "Heroicons", icon: "heroicons", color: "#4F46E5" },
      { name: "Framer Motion", icon: "framer", color: "#0055FF" },
      { name: "ESLint", icon: "eslint", color: "#4B32C3" },
      { name: "PostCSS", icon: "postcss", color: "#DD3A0A" },
    ],
    features: [
      "Responsive design with mobile-first approach",
      "Custom theme integration with Headless UI",
      "Product showcase with image optimization",
      "Contact form integration",
      "Optimized CSS with PostCSS and CSSNano",
      "Code quality with ESLint",
      "Smooth animations with Framer Motion",
      "SEO optimized with Next.js",
    ],
    category: "Web Development",
    status: "Completed",
    completedAt: "2024-01",
  },
  {
    id: "weather-api",
    title: "Weather API Integration",
    description:
      "A weather application that provides real-time weather information using modern API integration techniques.",
    image: "/images/projects/weather-api.webp",
    liveUrl: "https://weather-api-s.vercel.app",
    githubUrl: "https://github.com/T1nker-1220/Weather_API-s",
    techStack: [
      { name: "Flask 3.0", icon: "flask", color: "#000000" },
      { name: "Python", icon: "python", color: "#3776AB" },
      { name: "Jinja2", icon: "jinja", color: "#B41717" },
      { name: "Requests", icon: "requests", color: "#2C3E50" },
      { name: "URLLib3", icon: "urllib", color: "#4B8BBE" },
      { name: "Python-dotenv", icon: "dotenv", color: "#ECD53F" },
      { name: "Werkzeug", icon: "werkzeug", color: "#009688" },
      { name: "Click", icon: "click", color: "#FF69B4" },
    ],
    features: [
      "Real-time weather data fetching",
      "Location-based weather information",
      "Responsive weather cards",
      "Search functionality",
      "Environment variable management",
      "Template-based rendering",
      "HTTP request handling",
      "Error handling and validation",
    ],
    category: "API Integration",
    status: "Completed",
    completedAt: "2023-12",
  },
  {
    id: "edible-artistry",
    title: "Edible Artistry",
    description:
      "A sample food menu website showcasing culinary creations with an artistic touch.",
    image: "/images/projects/edible-artistry.webp",
    liveUrl: "https://edible-artistry.vercel.app",
    githubUrl: "https://github.com/T1nker-1220/edible-artistry",
    techStack: [
      { name: "Next.js 15", icon: "nextjs", color: "#000000" },
      { name: "React 19 RC", icon: "react", color: "#61DAFB" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "TailwindCSS 3.4", icon: "tailwindcss", color: "#06B6D4" },
      { name: "Node.js", icon: "nodejs", color: "#339933" },
      { name: "PostCSS", icon: "postcss", color: "#DD3A0A" },
      { name: "ESLint", icon: "eslint", color: "#4B32C3" },
    ],
    features: [
      "Interactive menu showcase",
      "Beautiful food photography",
      "Category filtering",
      "Responsive grid layout",
      "Mobile-first design",
      "Type-safe development",
      "Modern React features with RC 19",
      "Advanced ESLint configuration",
    ],
    category: "UI/UX Design",
    status: "Completed",
    completedAt: "2024-02",
  },
  {
    id: "wedding-memories",
    title: "Wedding Memories",
    description:
      "A beautiful wedding memories website with photo galleries and event information.",
    image: "/images/projects/wedding-memories.webp",
    liveUrl: "https://nicholsweddingmemories.vercel.app",
    githubUrl: "https://github.com/T1nker-1220/nichols-wed-blog",
    techStack: [
      { name: "Next.js 13.5", icon: "nextjs", color: "#000000" },
      { name: "React 19", icon: "react", color: "#61DAFB" },
      { name: "TypeScript 5", icon: "typescript", color: "#3178C6" },
      { name: "Prisma 6", icon: "prisma", color: "#2D3748" },
      { name: "TailwindCSS 3.3", icon: "tailwindcss", color: "#06B6D4" },
      { name: "Radix UI", icon: "radix", color: "#FF69B4" },
      { name: "Framer Motion", icon: "framer", color: "#0055FF" },
      { name: "Sharp", icon: "sharp", color: "#99CC00" },
      { name: "Lucide React", icon: "lucide", color: "#5B5B5B" },
      { name: "Zod", icon: "zod", color: "#3E67B1" },
      { name: "ESLint", icon: "eslint", color: "#4B32C3" },
      { name: "pnpm", icon: "pnpm", color: "#F69220" },
    ],
    features: [
      "Photo gallery with lightbox",
      "Event timeline",
      "RSVP system",
      "Responsive design",
      "Image optimization with Sharp",
      "Type-safe data validation",
      "Custom animations",
      "Production-ready deployment",
      "Performance optimizations",
      "Custom device optimizations",
      "WebP format support",
      "Strict TypeScript checks",
    ],
    category: "Full Stack",
    status: "Completed",
    completedAt: "2024-03",
  },
  {
    id: "youtube-channel",
    title: "T1nker Gaming",
    description:
      "A YouTube gaming channel featuring gameplay videos, tutorials, and gaming content with professional editing and production.",
    image: "/images/projects/youtube.webp",
    liveUrl: "https://www.youtube.com/@t1nkergaming731",
    githubUrl: null,
    techStack: [
      { name: "Adobe Premiere Pro", icon: "premiere", color: "#EA77FF" },
      { name: "Adobe After Effects", icon: "aftereffects", color: "#9999FF" },
      { name: "Adobe Photoshop", icon: "photoshop", color: "#31A8FF" },
      { name: "OBS Studio", icon: "obs", color: "#302E31" },
    ],
    features: [
      "Professional video editing",
      "Custom thumbnails",
      "Gaming content creation",
      "Streaming setup",
    ],
    category: "Content Creation",
    status: "Completed",
    completedAt: "2024-03",
  },
];