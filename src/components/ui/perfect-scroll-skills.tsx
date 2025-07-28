"use client";

import { useEffect, useRef } from "react";
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

interface PerfectScrollRowProps {
  title: string;
  skillsList: any[];
  color: string;
  direction?: "left" | "right";
  speed?: number; // pixels per second
}

function PerfectScrollRow({ title, skillsList, color, direction = "left", speed = 30 }: PerfectScrollRowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  
  // Create enough copies for seamless scrolling
  const repeatedSkills = [...Array(8)].reduce((acc, _) => [...acc, ...skillsList], [] as any[]);
  const itemWidth = 80;
  const singleSetWidth = skillsList.length * itemWidth;
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    let position = direction === "left" ? 0 : -singleSetWidth;
    
    const animate = () => {
      if (direction === "left") {
        position -= speed / 60; // 60fps
        if (position <= -singleSetWidth) {
          position = 0; // Reset to start for seamless loop
        }
      } else {
        position += speed / 60; // 60fps
        if (position >= 0) {
          position = -singleSetWidth; // Reset to start for seamless loop
        }
      }
      
      container.style.transform = `translateX(${position}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [direction, speed, singleSetWidth]);

  return (
    <div className="mb-4">
      <h4 className={`text-xs font-medium mb-2 text-${color}-400`}>
        {title} ({skillsList.length})
      </h4>
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-emerald-500/10 to-emerald-800/20 border border-emerald-500/20 h-12">
        <div 
          ref={containerRef}
          className="flex items-center h-full"
          style={{ 
            width: repeatedSkills.length * itemWidth,
            willChange: 'transform'
          }}
        >
          {repeatedSkills.map((skill: any, index: number) => {
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

export default function PerfectScrollSkills() {
  const skillsByCategory = {
    frontend: skills.filter(s => s.category === "frontend"),
    backend: skills.filter(s => s.category === "backend"),
    tools: skills.filter(s => s.category === "tools"),
  };

  return (
    <div className="space-y-4">
      <PerfectScrollRow 
        title="🎨 Frontend"
        skillsList={skillsByCategory.frontend}
        color="emerald"
        direction="left"
        speed={25}
      />
      <PerfectScrollRow 
        title="⚙️ Backend"
        skillsList={skillsByCategory.backend}
        color="teal"
        direction="right"
        speed={20}
      />
      <PerfectScrollRow 
        title="🛠️ Tools"
        skillsList={skillsByCategory.tools}
        color="green"
        direction="left"
        speed={30}
      />
    </div>
  );
}