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

interface VerticalScrollColumnProps {
  title: string;
  skillsList: any[];
  color: string;
  direction?: "up" | "down";
  speed?: number; // pixels per second
}

function VerticalScrollColumn({ title, skillsList, color, direction = "up", speed = 20 }: VerticalScrollColumnProps) {
  const containerRef = useRef<HTMLDivElement>(null);   
  const animationRef = useRef<number | null>(null);

  // Create enough copies for seamless scrolling       
  const repeatedSkills = Array(6).fill(skillsList).flat(1);
  const itemHeight = 28;
  const singleSetHeight = skillsList.length * itemHeight;
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    let position = 0; // Start all at 0 for consistent alignment
    
    const animate = () => {
      if (direction === "up") {
        position -= speed / 60; // 60fps
        if (position <= -singleSetHeight) {
          position = 0; // Reset to start for seamless loop
        }
      } else {
        position -= speed / 60; // Same direction but different speed
        if (position <= -singleSetHeight) {
          position = 0; // Reset to start for seamless loop
        }
      }
      
      container.style.transform = `translateY(${position}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [direction, speed, singleSetHeight]);

  return (
    <div className="flex-1">
      <h4 className="text-xs font-medium mb-2 text-gray-300 text-center">
        {title}
      </h4>
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-b from-gray-500/10 to-gray-800/20 border border-gray-500/20 h-12">
        <div 
          ref={containerRef}
          className="flex flex-col items-center"
          style={{ 
            height: repeatedSkills.length * itemHeight,
            willChange: 'transform'
          }}
        >
          {repeatedSkills.map((skill, index) => {
            const IconComponent = getIconComponent(skill.name);
            return (
              <div 
                key={`${skill.name}-${index}`}
                className="flex-shrink-0 h-[24px] my-0.5 w-full flex flex-col items-center justify-center bg-white/5 rounded-md p-1"
              >
                <IconComponent className="w-3 h-3 text-gray-400" />
                <span className="text-[6px] text-center text-gray-300 leading-none truncate w-full mt-0.5">
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

export default function VerticalScrollSkills() {
  const skillsByCategory = {
    frontend: skills.filter(s => s.category === "frontend"),
    backend: skills.filter(s => s.category === "backend"),
    tools: skills.filter(s => s.category === "tools"),
  };

  return (
    <div className="flex gap-3 h-40">
      <VerticalScrollColumn 
        title="🎨 Frontend"
        skillsList={skillsByCategory.frontend}
        color="emerald"
        direction="up"
        speed={25}
      />
      <VerticalScrollColumn 
        title="⚙️ Backend"
        skillsList={skillsByCategory.backend}
        color="teal"
        direction="up"
        speed={25}
      />
      <VerticalScrollColumn 
        title="🛠️ Tools"
        skillsList={skillsByCategory.tools}
        color="green"
        direction="up"
        speed={25}
      />
    </div>
  );
}