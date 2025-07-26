/**
 * SkillsShowcase Component
 * 
 * Main component that displays an auto-scrolling horizontal showcase of all skills.
 * Features three separate tracks: Frontend (L→R), Backend (R→L), and Tools (L→R).
 * Each track displays tech stack logos with skill levels in an infinite scroll.
 * 
 * @component
 * 
 * @example
 * ```tsx
 * <SkillsShowcase />
 * ```
 * 
 * @update 2025-01-27 Created auto-scrolling skills showcase with tech stack logos
 */

"use client";

import { skills } from "@/data/personal-info";
import ScrollingSkillsTrack from "@/components/ui/scrolling-skills-track";
import { motion } from "framer-motion";
import { Code2, Database, Settings, Sparkles } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function SkillsShowcase() {
  // Filter skills by category
  const frontendSkills = skills.filter(s => s.category === "frontend");
  const backendSkills = skills.filter(s => s.category === "backend");
  const toolsSkills = skills.filter(s => s.category === "tools");

  // Calculate total skills
  const totalSkills = frontendSkills.length + backendSkills.length + toolsSkills.length;
  const experienceYears = new Date().getFullYear() - 2023; // Started in 2023

  return (
    <section className="py-20 overflow-hidden">
      {/* Header Section */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-16 px-6"
      >
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <Sparkles className="w-6 h-6 text-emerald-500" />
          <span className="text-emerald-600 dark:text-emerald-400 font-medium text-sm uppercase tracking-wider">
            Tech Stack Showcase
          </span>
          <Sparkles className="w-6 h-6 text-emerald-500" />
        </motion.div>

        <motion.h2 
          variants={item}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground drop-shadow-lg"
        >
          Skills & Technologies
        </motion.h2>

        <motion.p 
          variants={item}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 drop-shadow-md"
        >
          A comprehensive showcase of the technologies and tools I use to bring ideas to life.
          Each logo represents hands-on experience and ongoing learning in modern development.
        </motion.p>

        {/* Stats Bar */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-8 flex-wrap"
        >
          <div className="flex items-center gap-2 bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 dark:border-white/10">
            <Code2 className="w-4 h-4 text-emerald-500" />
            <span className="text-sm font-medium text-foreground drop-shadow-md">
              {totalSkills} Technologies
            </span>
          </div>
          
          <div className="flex items-center gap-2 bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 dark:border-white/10">
            <Database className="w-4 h-4 text-teal-500" />
            <span className="text-sm font-medium text-foreground drop-shadow-md">
              {experienceYears}+ Years Experience
            </span>
          </div>
          
          <div className="flex items-center gap-2 bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 dark:border-white/10">
            <Settings className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-foreground drop-shadow-md">
              Full Stack Development
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Auto-Scrolling Skills Tracks */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="space-y-6"
      >
        {/* Frontend Track - Left to Right */}
        <ScrollingSkillsTrack
          skills={frontendSkills}
          direction="left-to-right"
          category="Frontend"
          speed={25}
        />

        {/* Backend Track - Right to Left */}
        <ScrollingSkillsTrack
          skills={backendSkills}
          direction="right-to-left"
          category="Backend"
          speed={30}
        />

        {/* Tools Track - Left to Right */}
        <ScrollingSkillsTrack
          skills={toolsSkills}
          direction="left-to-right"
          category="Tools"
          speed={35}
        />
      </motion.div>

      {/* Floating Action Hint */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-12"
      >
        <p className="text-sm text-muted-foreground drop-shadow-md">
          💡 Hover over any technology to pause the animation and explore
        </p>
      </motion.div>
    </section>
  );
} 