/**
 * SkillLogoCard Component
 * 
 * Displays a technology skill with its logo, name, and skill level badge.
 * Features glass morphism design with hover effects and accessibility support.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Skill} props.skill - The skill object containing name, level, and category
 * @param {React.ComponentType} props.IconComponent - The devicons-react icon component
 * @param {string} props.className - Optional additional CSS classes
 * 
 * @example
 * ```tsx
 * <SkillLogoCard 
 *   skill={skill} 
 *   IconComponent={ReactOriginal}
 *   className="mx-2"
 * />
 * ```
 */

"use client";

import { Skill } from "@/types";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillLogoCardProps {
  skill: Skill;
  IconComponent: React.ComponentType<any>;
  className?: string;
}

const getLevelColor = (level?: string) => {
  switch (level) {
    case "Advanced":
      return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
    case "Intermediate": 
      return "bg-amber-500/20 text-amber-400 border-amber-500/30";
    case "Beginner":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    default:
      return "bg-slate-500/20 text-slate-400 border-slate-500/30";
  }
};

export default function SkillLogoCard({ 
  skill, 
  IconComponent, 
  className 
}: SkillLogoCardProps) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        y: -4,
        transition: { duration: 0.2 }
      }}
      className={cn(
        "flex-shrink-0 group cursor-pointer",
        "bg-white/10 dark:bg-white/5 backdrop-blur-md",
        "border border-white/20 dark:border-white/10",
        "rounded-xl p-4 mx-3",
        "shadow-lg hover:shadow-xl",
        "transition-all duration-300",
        "hover:bg-white/20 dark:hover:bg-white/10",
        "w-[120px] h-[140px]",
        "flex flex-col items-center justify-center text-center",
        className
      )}
    >
      {/* Tech Stack Logo */}
      <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
        <IconComponent 
          size="48"
          className="drop-shadow-lg"
        />
      </div>
      
      {/* Skill Name */}
      <h3 className="text-sm font-medium text-foreground drop-shadow-md mb-2 leading-tight">
        {skill.name}
      </h3>
      
      {/* Skill Level Badge */}
      {skill.level && (
        <span className={cn(
          "text-xs px-2 py-1 rounded-full border",
          "backdrop-blur-sm font-medium",
          "transition-all duration-300",
          getLevelColor(skill.level)
        )}>
          {skill.level}
        </span>
      )}
    </motion.div>
  );
} 