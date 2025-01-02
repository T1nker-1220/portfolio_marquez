"use client";

import { projects } from "@/data/personal-info";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function FeaturedProjects() {
  // Take only the first 3 projects for the featured section
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-heading font-bold sm:text-4xl mb-4">
          Featured Projects
        </h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          Some of my recent work that showcases my skills and experience
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {featuredProjects.map((project) => (
          <motion.div
            key={project.title}
            variants={item}
            className={cn(
              "group relative overflow-hidden rounded-lg",
              "glass hover:glass-hover"
            )}
          >
            <Link
              href={project.liveUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6"
            >
              <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded bg-accent/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Link
          href="/projects"
          className={cn(
            "inline-flex items-center px-6 py-3 rounded-lg",
            "glass hover:glass-hover"
          )}
        >
          View All Projects
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
}
