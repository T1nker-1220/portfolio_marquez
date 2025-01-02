"use client";

import { skills } from "@/data/personal-info";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function SkillsShowcase() {
  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categories = {
    frontend: "Frontend Development",
    backend: "Backend Development",
    tools: "Development Tools",
  };

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-heading font-bold sm:text-4xl mb-4">
          Technical Skills
        </h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          Technologies and tools I've worked with in my development journey
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <motion.div
            key={category}
            variants={item}
            className={cn("p-6 rounded-lg", "glass hover:glass-hover")}
          >
            <h3 className="text-xl font-heading font-semibold mb-4 text-primary">
              {categories[category as keyof typeof categories]}
            </h3>
            <div className="flex flex-wrap gap-2">
              {categorySkills.map((skill) => (
                <span
                  key={skill.name}
                  className="text-sm px-3 py-1 rounded-full bg-accent/50 hover:bg-accent/70 transition-colors"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
