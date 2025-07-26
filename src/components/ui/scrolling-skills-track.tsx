/**
 * ScrollingSkillsTrack Component
 * 
 * Creates an infinite horizontal scrolling track of skills with customizable direction.
 * Features smooth CSS animations, hover pause effects, and dynamic icon loading.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Skill[]} props.skills - Array of skills to display
 * @param {string} props.direction - Scroll direction: "left-to-right" or "right-to-left"
 * @param {string} props.category - Category name for styling and identification
 * @param {number} props.speed - Animation duration in seconds (default: 30)
 * 
 * @example
 * ```tsx
 * <ScrollingSkillsTrack 
 *   skills={frontendSkills}
 *   direction="left-to-right"
 *   category="Frontend"
 *   speed={25}
 * />
 * ```
 */

"use client";

import { Skill } from "@/types";
import { SKILL_ICONS } from "@/data/personal-info";
import SkillLogoCard from "@/components/ui/skill-logo-card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { 
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFramer,
  SiNodedotjs,
  SiPython,
  SiFlask,
  SiPrisma,
  SiSupabase,
  SiPostgresql,
  SiGit,
  SiVercel,
  SiPnpm,
  SiGithub,
  SiDocker,
  SiFigma,
  SiElectron
} from "react-icons/si";
import { 
  FaCode,
  FaDatabase,
  FaCog,
  FaGlobe,
  FaTerminal,
  FaPalette,
  FaLayerGroup,
  FaBolt,
  FaBox,
  FaMobile,
  FaDesktop,
  FaFileCode,
  FaCodeBranch
} from "react-icons/fa";

interface ScrollingSkillsTrackProps {
  skills: Skill[];
  direction: "left-to-right" | "right-to-left";
  category: string;
  speed?: number;
}

// Tech stack icon mapping using React Icons (includes devicons)
const getIconComponent = (skillName: string) => {
  const iconMap: Record<string, React.ComponentType<any>> = {
    // Frontend - Using Simple Icons (Si) for tech stack logos
    "React.js": SiReact,
    "Next.js": SiNextdotjs,
    "TypeScript": SiTypescript,
    "Tailwind CSS": SiTailwindcss,
    "HTML5": SiHtml5,
    "CSS3": SiCss3,
    "JavaScript": SiJavascript,
    "Framer Motion": SiFramer,
    "Mantine v7": FaCode,

    // Backend
    "Node.js": SiNodedotjs,
    "Python": SiPython,
    "Flask": SiFlask,
    "RESTful APIs": FaGlobe,
    "Prisma": SiPrisma,
    "Supabase": SiSupabase,
    "PostgreSQL": SiPostgresql,
    "bcryptjs": FaCog,
    "MCP Protocol": FaCog,
    "Knowledge Graphs": FaDatabase,

    // Tools
    "Git": SiGit,
    "VS Code": FaDesktop,
    "Cursor AI": FaDesktop,
    "WindSurf AI": FaDesktop,
    "Vercel": SiVercel,
    "pnpm": SiPnpm,
    "GitHub": SiGithub,
    "CI/CD": FaCog,
    "Docker": SiDocker,
    "Electron": SiElectron,

    // Other skills with appropriate icons
    "UI/UX Design": SiFigma,
    "Responsive Design": FaMobile,
    "Web Performance": FaBolt,
    "SEO": FaGlobe,
    "API Integration": FaCog,
    "Documentation": FaFileCode,
    "Code Review": FaCodeBranch,
    "System Design": FaLayerGroup,
    "AI-Assisted Development": FaBolt,
    "AI Context Management": FaDatabase,
    "Memory Systems": FaDatabase,
  };

  return iconMap[skillName] || FaCode; // Default fallback
};

export default function ScrollingSkillsTrack({ 
  skills, 
  direction, 
  category,
  speed = 30 
}: ScrollingSkillsTrackProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-[180px] bg-white/5 dark:bg-white/2 rounded-xl animate-pulse mb-8" />
    );
  }

  // Duplicate skills array for seamless infinite scrolling
  const duplicatedSkills = [...skills, ...skills, ...skills];

  const getCategoryGradient = (category: string) => {
    switch (category.toLowerCase()) {
      case "frontend":
        return "from-emerald-500/10 to-emerald-800/20";
      case "backend":
        return "from-teal-500/10 to-teal-800/20";
      case "tools":
        return "from-green-500/10 to-green-800/20";
      default:
        return "from-slate-500/10 to-slate-800/20";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "frontend":
        return "🎨";
      case "backend":
        return "⚙️";
      case "tools":
        return "🛠️";
      default:
        return "💡";
    }
  };

  return (
    <div className="mb-8">
      {/* Category Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-4 px-6"
      >
        <span className="text-2xl">{getCategoryIcon(category)}</span>
        <h3 className="text-xl font-bold text-foreground drop-shadow-lg capitalize">
          {category} Skills
        </h3>
        <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
        <span className="text-sm text-muted-foreground drop-shadow-md">
          {skills.length} technologies
        </span>
      </motion.div>

      {/* Scrolling Track Container */}
      <div className={cn(
        "relative overflow-hidden rounded-xl",
        "bg-gradient-to-r backdrop-blur-sm",
        "border border-white/10 dark:border-white/5",
        "shadow-lg",
        getCategoryGradient(category)
      )}>
                 {/* Scrolling Track */}
         <div 
           className={cn(
             "flex items-center py-6",
             direction === "left-to-right" ? "animate-scroll-infinite" : "animate-scroll-reverse"
           )}
           style={{
             width: `${duplicatedSkills.length * 150}px`,
             animationDuration: `${speed}s`,
             animationTimingFunction: 'linear',
             animationIterationCount: 'infinite',
             animationPlayState: 'running'
           }}

         >
                     {duplicatedSkills.map((skill, index) => {
             const IconComponent = getIconComponent(skill.name);
             
             return (
               <SkillLogoCard
                 key={`${skill.name}-${index}`}
                 skill={skill}
                 IconComponent={IconComponent}
               />
             );
           })}
        </div>

        {/* Gradient Overlays for Seamless Edge Effect */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-slate-900/50 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-slate-900/50 to-transparent pointer-events-none z-10" />
      </div>
    </div>
  );
} 