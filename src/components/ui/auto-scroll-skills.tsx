"use client";

import { skills } from "@/data/personal-info";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiFramer,
  SiNodedotjs, SiPython, SiFlask, SiPrisma, SiSupabase, SiPostgresql, SiGit, SiVercel, SiPnpm, 
  SiGithub, SiDocker, SiFigma, SiElectron
} from "react-icons/si";
import { 
  FaCode, FaDatabase, FaCog, FaGlobe, FaBolt, FaMobile, FaDesktop, FaFileCode, FaCodeBranch, FaLayerGroup
} from "react-icons/fa";

const getIconComponent = (skillName: string) => {
  const iconMap: Record<string, React.ComponentType<any>> = {
    "React.js": SiReact, "Next.js": SiNextdotjs, "TypeScript": SiTypescript, "Tailwind CSS": SiTailwindcss,
    "HTML5": SiHtml5, "CSS3": SiCss3, "JavaScript": SiJavascript, "Framer Motion": SiFramer,
    "Node.js": SiNodedotjs, "Python": SiPython, "Flask": SiFlask, "Prisma": SiPrisma,
    "Supabase": SiSupabase, "PostgreSQL": SiPostgresql, "Git": SiGit, "Vercel": SiVercel,
    "pnpm": SiPnpm, "GitHub": SiGithub, "Docker": SiDocker, "Electron": SiElectron,
    "UI/UX Design": SiFigma, "Responsive Design": FaMobile, "Web Performance": FaBolt,
    "SEO": FaGlobe, "API Integration": FaCog, "Documentation": FaFileCode, 
    "Code Review": FaCodeBranch, "System Design": FaLayerGroup,
  };
  return iconMap[skillName] || FaCode;
};

interface AutoScrollRowProps {
  title: string;
  skillsList: any[];
  color: string;
  direction?: "left" | "right";
  duration?: number;
}

function AutoScrollRow({ title, skillsList, color, direction = "left", duration = 20 }: AutoScrollRowProps) {
  // Create triple array for seamless loop
  const tripleSkills = [...skillsList, ...skillsList, ...skillsList];
  
  const getAnimationClass = () => {
    if (direction === "right") return "scroll-right";
    if (title.includes("Tools")) return "scroll-tools";
    return "scroll-left";
  };
  
  return (
    <div className="mb-4">
      <h4 className={`text-xs font-medium mb-2 text-${color}-400 test-animation`}>
        {title} ({skillsList.length})
      </h4>
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-emerald-500/10 to-emerald-800/20 border border-emerald-500/20 h-12">
        <div 
          className={`flex items-center h-full ${getAnimationClass()}`}
          style={{
            width: `${tripleSkills.length * 80}px`,
          }}
        >
          {tripleSkills.map((skill, index) => {
            const IconComponent = getIconComponent(skill.name);
            return (
              <div 
                key={`${skill.name}-${index}`}
                className="flex-shrink-0 w-[76px] mx-1 flex flex-col items-center justify-center bg-white/5 rounded-md p-2"
              >
                <IconComponent className={`w-4 h-4 text-${color}-400 mb-1`} />
                <span className={`text-[8px] text-center text-${color}-300 leading-tight truncate w-full`}>
                  {skill.name.split(' ')[0]}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function AutoScrollSkills() {
  const skillsByCategory = {
    frontend: skills.filter(s => s.category === "frontend"),
    backend: skills.filter(s => s.category === "backend"),
    tools: skills.filter(s => s.category === "tools"),
  };

  return (
    <div className="space-y-4">
      <AutoScrollRow 
        title="🎨 Frontend"
        skillsList={skillsByCategory.frontend}
        color="emerald"
        direction="left"
        duration={15}
      />
      <AutoScrollRow 
        title="⚙️ Backend"
        skillsList={skillsByCategory.backend}
        color="teal"
        direction="right"
        duration={18}
      />
      <AutoScrollRow 
        title="🛠️ Tools"
        skillsList={skillsByCategory.tools}
        color="green"
        direction="left"
        duration={16}
      />
    </div>
  );
}