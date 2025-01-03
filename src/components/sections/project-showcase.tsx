"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { useState } from "react";

const categories = [
  "All",
  "Web Development",
  "API Integration",
  "UI/UX Design",
  "Full Stack",
  "Content Creation",
  "Coming Soon",
] as const;

const statuses = ["All", "Completed", "In Progress", "Coming Soon"] as const;

type Category = (typeof categories)[number];
type Status = (typeof statuses)[number];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function ProjectShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [selectedStatus, setSelectedStatus] = useState<Status>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesStatus =
      selectedStatus === "All" || project.status === selectedStatus;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.features.some((feature) =>
        feature.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      project.techStack.some((tech) =>
        tech.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesStatus && matchesSearch;
  });

  return (
    <section className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent animate-gradient">
          Project Showcase
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore my portfolio of projects showcasing various technologies and
          skills
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 max-w-md">
            <Input
              type="search"
              placeholder="Search projects, features, or technologies..."
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchQuery(e.target.value)
              }
              className="w-full"
            />
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm text-muted-foreground">
              Found: {filteredProjects.length}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Categories
            </h3>
            <nav className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all"
                >
                  {category}
                </Button>
              ))}
            </nav>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Status
            </h3>
            <nav className="flex flex-wrap gap-2">
              {statuses.map((status) => (
                <Button
                  key={status}
                  variant={selectedStatus === status ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedStatus(status)}
                  className="transition-all"
                >
                  {status}
                </Button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        {filteredProjects.length === 0 && (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground">
              No projects found matching your criteria. Try adjusting your
              filters or search query.
            </p>
          </div>
        )}
      </motion.div>
    </section>
  );
}
