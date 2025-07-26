"use client";

import { skills } from "@/data/personal-info";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { 
  Code2, 
  Trophy, 
  Calendar, 
  TrendingUp,
  Star,
  Eye,
  GitBranch,
  Zap
} from "lucide-react";
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
  FaBolt,
  FaMobile,
  FaDesktop,
  FaFileCode,
  FaCodeBranch,
  FaLayerGroup
} from "react-icons/fa";

// Tech stack icon mapping for sidebar skills
const getIconComponent = (skillName: string) => {
  const iconMap: Record<string, React.ComponentType<any>> = {
    // Frontend
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

    // Other skills
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

export default function RightSidebar() {
  const [animationsReady, setAnimationsReady] = useState(false);
  
  // Force animations to start after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationsReady(true);
      // Force repaint to trigger animations
      if (typeof window !== 'undefined') {
        const elements = document.querySelectorAll('.animate-scroll-infinite, .animate-scroll-reverse');
        elements.forEach(el => {
          const element = el as HTMLElement;
          element.style.animationName = 'none';
          element.offsetHeight; // Force reflow
          element.style.animationName = '';
        });
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Calculate stats
  const completedProjects = projects.filter(p => p.status === "Completed").length;
  const featuredProjects = projects.filter(p => p.featured).length;
  const totalSkills = skills.length;
  const advancedSkills = skills.filter(s => s.level === "Advanced").length;
  
  // Get all skills by category for auto-scrolling display
  const skillsByCategory = {
    frontend: skills.filter(s => s.category === "frontend"),
    backend: skills.filter(s => s.category === "backend"),
    tools: skills.filter(s => s.category === "tools"),
  };

  const stats = [
    { label: "Projects", value: completedProjects, icon: Code2, color: "text-blue-500" },
    { label: "Featured", value: featuredProjects, icon: Star, color: "text-yellow-500" },
    { label: "Skills", value: totalSkills, icon: Zap, color: "text-purple-500" },
    { label: "Expert", value: advancedSkills, icon: Trophy, color: "text-green-500" },
  ];

  const recentProjects = projects
    .filter(p => p.status === "Completed")
    .sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime())
    .slice(0, 3);

  return (
    <div className="h-full flex flex-col space-y-6 overflow-hidden">
      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2 drop-shadow-lg">
          <TrendingUp className="w-4 h-4" />
          Overview
        </h3>
        
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="p-3 rounded-lg bg-muted/30 text-center group hover:bg-muted/50 transition-colors"
              >
                <Icon className={`w-5 h-5 mx-auto mb-1 ${stat.color}`} />
                <div className="text-lg font-semibold text-foreground drop-shadow-lg">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground drop-shadow-md">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Auto-Scrolling Skills Showcase - Compact Sidebar Version */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex-1 min-h-0 flex flex-col"
      >
        <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2 flex-shrink-0 drop-shadow-lg">
          <Code2 className="w-4 h-4" />
          Skills Showcase
        </h3>
        
        <div className="flex-1 space-y-4">
                     {/* Frontend Skills - Horizontal Scroll */}
           <div className="relative">
             <h4 className="text-xs font-medium text-emerald-400 mb-2 flex items-center gap-1">
               🎨 Frontend ({skillsByCategory.frontend.length})
             </h4>
             <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-emerald-500/10 to-emerald-800/20 border border-emerald-500/20">
               <div 
                 className={cn(
                   "flex items-center py-2",
                   animationsReady ? "animate-scroll-infinite" : ""
                 )}
                 style={{
                   width: `${skillsByCategory.frontend.length * 3 * 72}px`,
                   animationDuration: '15s',
                   animationTimingFunction: 'linear',
                   animationIterationCount: 'infinite',
                   animationPlayState: 'running',
                   transform: 'translateZ(0)'
                 }}
               >
                 {[...skillsByCategory.frontend, ...skillsByCategory.frontend, ...skillsByCategory.frontend].map((skill, index) => {
                   const IconComponent = getIconComponent(skill.name);
                   return (
                     <div 
                       key={`frontend-${skill.name}-${index}`}
                       className="flex-shrink-0 w-[70px] mx-1 flex flex-col items-center justify-center bg-white/5 rounded-md p-2 hover:bg-white/10 transition-colors"
                     >
                       <IconComponent className="w-4 h-4 text-emerald-400 mb-1" />
                       <span className="text-[8px] text-center text-emerald-300 leading-tight truncate w-full">
                         {skill.name.split(' ')[0]}
                       </span>
                     </div>
                   );
                 })}
               </div>
             </div>
           </div>

                     {/* Backend Skills - Reverse Scroll */}
           <div className="relative">
             <h4 className="text-xs font-medium text-teal-400 mb-2 flex items-center gap-1">
               ⚙️ Backend ({skillsByCategory.backend.length})
             </h4>
             <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-teal-500/10 to-teal-800/20 border border-teal-500/20">
               <div 
                 className={cn(
                   "flex items-center py-2",
                   animationsReady ? "animate-scroll-reverse" : ""
                 )}
                 style={{
                   width: `${skillsByCategory.backend.length * 3 * 72}px`,
                   animationDuration: '18s',
                   animationTimingFunction: 'linear',
                   animationIterationCount: 'infinite',
                   animationPlayState: 'running',
                   transform: 'translateZ(0)'
                 }}
               >
                 {[...skillsByCategory.backend, ...skillsByCategory.backend, ...skillsByCategory.backend].map((skill, index) => {
                   const IconComponent = getIconComponent(skill.name);
                   return (
                     <div 
                       key={`backend-${skill.name}-${index}`}
                       className="flex-shrink-0 w-[70px] mx-1 flex flex-col items-center justify-center bg-white/5 rounded-md p-2 hover:bg-white/10 transition-colors"
                     >
                       <IconComponent className="w-4 h-4 text-teal-400 mb-1" />
                       <span className="text-[8px] text-center text-teal-300 leading-tight truncate w-full">
                         {skill.name.split(' ')[0]}
                       </span>
                     </div>
                   );
                 })}
               </div>
             </div>
           </div>

           {/* Tools Skills - Normal Scroll */}
           <div className="relative">
             <h4 className="text-xs font-medium text-green-400 mb-2 flex items-center gap-1">
               🛠️ Tools ({skillsByCategory.tools.length})
             </h4>
             <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-green-500/10 to-green-800/20 border border-green-500/20">
               <div 
                 className={cn(
                   "flex items-center py-2",
                   animationsReady ? "animate-scroll-infinite" : ""
                 )}
                 style={{
                   width: `${skillsByCategory.tools.length * 3 * 72}px`,
                   animationDuration: '16s',
                   animationTimingFunction: 'linear',
                   animationIterationCount: 'infinite',
                   animationPlayState: 'running',
                   transform: 'translateZ(0)'
                 }}
               >
                 {[...skillsByCategory.tools, ...skillsByCategory.tools, ...skillsByCategory.tools].map((skill, index) => {
                   const IconComponent = getIconComponent(skill.name);
                   return (
                     <div 
                       key={`tools-${skill.name}-${index}`}
                       className="flex-shrink-0 w-[70px] mx-1 flex flex-col items-center justify-center bg-white/5 rounded-md p-2 hover:bg-white/10 transition-colors"
                     >
                       <IconComponent className="w-4 h-4 text-green-400 mb-1" />
                       <span className="text-[8px] text-center text-green-300 leading-tight truncate w-full">
                         {skill.name.split(' ')[0]}
                       </span>
                     </div>
                   );
                 })}
               </div>
             </div>
           </div>
        </div>
      </motion.div>

      {/* Recent Projects - Compact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-shrink-0"
      >
        <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2 drop-shadow-lg">
          <GitBranch className="w-4 h-4" />
          Recent Work
        </h3>
        
        <div className="space-y-2">
          {recentProjects.slice(0, 2).map((project, index) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.02, x: 2 }}
              className="p-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group cursor-pointer"
            >
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded bg-gradient-to-br from-green-400 to-emerald-600 flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-medium text-foreground group-hover:text-emerald-400 transition-colors truncate drop-shadow-md">
                    {project.title}
                  </h4>
                  <div className="text-xs text-muted-foreground truncate drop-shadow-sm">
                    {project.category}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Activity Timeline - Compact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex-shrink-0"
      >
        <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          Activity
        </h3>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <div className="flex-1">
              <div className="text-xs text-foreground">
                New project completed
              </div>
              <div className="text-xs text-muted-foreground">
                2 days ago
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <div className="flex-1">
              <div className="text-xs text-foreground">
                Portfolio updated
              </div>
              <div className="text-xs text-muted-foreground">
                1 week ago
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}