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
      return <IconCode className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
    case "backend":
      return <IconBrain className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
    case "tools":
      return <IconTools className="w-6 h-6 text-green-600 dark:text-green-400" />;
    default:
      return <IconStar className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />;
  }
};

const getCategoryGradient = (category: string) => {
  switch (category) {
    case "frontend":
      return "dark:from-emerald-500/20 dark:to-emerald-800/30 from-emerald-100 to-emerald-200/80";
    case "backend":
      return "dark:from-teal-500/20 dark:to-teal-800/30 from-teal-100 to-teal-200/80";
    case "tools":
      return "dark:from-green-500/20 dark:to-green-800/30 from-green-100 to-green-200/80";
    default:
      return "dark:from-cyan-500/20 dark:to-cyan-800/30 from-cyan-100 to-cyan-200/80";
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
            className={cn(
              "rounded-xl p-6 md:p-8",
              "bg-gradient-to-br from-gray-50 to-gray-100/80 dark:from-gray-900/90 dark:to-gray-800/90",
              "backdrop-blur-sm border border-gray-200 dark:border-gray-800/50",
              "shadow-lg"
            )}
          >
            <div className="flex items-center gap-3 mb-6">
              {getCategoryIcon(category)}
              <h3 className="text-2xl font-heading font-semibold capitalize text-gray-800 dark:text-gray-100">
                {category.replace("-", " ")}
              </h3>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            >
              {categorySkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={item}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className={cn(
                    "p-4 rounded-lg transition-all duration-300",
                    "bg-gradient-to-br",
                    getCategoryGradient(category),
                    "hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-gray-800/50",
                    "border border-gray-200/50 dark:border-gray-700/50",
                    "backdrop-blur-sm",
                    "flex flex-col items-center justify-center gap-2 text-center min-h-[90px]"
                  )}
                >
                  <div className="text-base font-medium text-gray-800 dark:text-gray-100 break-words w-full">
                    {skill.name}
                  </div>
                  {skill.level && (
                    <span className={cn(
                      "text-xs px-3 py-1 rounded-full",
                      "bg-gray-100/80 dark:bg-gray-800/60",
                      "text-gray-700 dark:text-gray-300",
                      "border border-gray-200/50 dark:border-gray-700/50",
                      "break-words max-w-full"
                    )}>
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
