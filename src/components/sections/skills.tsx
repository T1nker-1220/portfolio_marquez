"use client";

import { skills } from "@/data/personal-info";
import { cn } from "@/lib/utils";
import { IconBrain, IconCode, IconStar, IconTools } from "@tabler/icons-react";
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

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "frontend":
      return <IconCode className="w-5 h-5" />;
    case "backend":
      return <IconBrain className="w-5 h-5" />;
    case "tools":
      return <IconTools className="w-5 h-5" />;
    default:
      return <IconStar className="w-5 h-5" />;
  }
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
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-heading font-bold sm:text-5xl mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto text-lg">
          Technologies and tools I work with to bring ideas to life
        </p>
      </motion.div>

      <div className="grid gap-12 md:gap-16">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card/50 rounded-xl p-6 md:p-8 backdrop-blur-sm border border-border/50"
          >
            <div className="flex items-center gap-3 mb-6">
              {getCategoryIcon(category)}
              <h3 className="text-2xl font-heading font-semibold capitalize">
                {category.replace("-", " ")}
              </h3>
            </div>

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
                  whileHover={{ scale: 1.05 }}
                  className={cn(
                    "p-4 rounded-lg glass transition-all duration-300",
                    "hover:glass-hover cursor-pointer hover:shadow-lg",
                    "border border-border/50 bg-card/30",
                    "flex flex-col items-center justify-center gap-2 text-center"
                  )}
                >
                  <div className="text-base font-medium">{skill.name}</div>
                  {skill.level && (
                    <span className="text-xs text-muted-foreground px-2 py-1 rounded-full bg-primary/10">
                      {skill.level}
                    </span>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
