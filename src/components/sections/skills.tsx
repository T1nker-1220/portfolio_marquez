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

export function SkillsSection() {
  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-heading font-bold sm:text-4xl mb-4">
          Skills & Technologies
        </h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          Technologies and tools I work with to bring ideas to life
        </p>
      </motion.div>

      <div className="grid gap-8 md:gap-12">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <div key={category}>
            <h3 className="text-xl font-heading font-semibold mb-4 capitalize">
              {category}
            </h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            >
              {categorySkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={item}
                  className={cn(
                    "p-4 rounded-lg glass",
                    "hover:glass-hover cursor-pointer"
                  )}
                >
                  <div className="text-sm font-medium">{skill.name}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
