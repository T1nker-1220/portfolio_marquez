"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useRef, useState } from "react";

const categories = [
  "All",  
  "Websites",
  "AI",
  "MCP",
  "Scraping",
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
      delayChildren: 0.3,
    },
  },
};

const listContainer = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export function ProjectShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [selectedStatus, setSelectedStatus] = useState<Status>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const searchTimeout = useRef<NodeJS.Timeout | undefined>(undefined);

  // Debounced search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSearching(true);
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }

    searchTimeout.current = setTimeout(() => {
      setSearchQuery(e.target.value);
      setIsSearching(false);
    }, 300);
  };

  const filteredProjects = projects
    .filter((project) => {
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
    })
    .sort((a, b) => {
      // Sort featured projects first by rank, then non-featured projects
      const aRank = a.featured ? a.featuredRank ?? 0 : Infinity;
      const bRank = b.featured ? b.featuredRank ?? 0 : Infinity;
      return aRank - bRank;
    });

  return (
    <section
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 max-w-7xl"
      aria-label="Project showcase section"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
          Project{" "}
          <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-teal-600 bg-clip-text text-transparent">
            Showcase
          </span>
        </h1>
        <p className="text-muted-foreground/90 text-base sm:text-lg max-w-2xl mx-auto">
          Explore my portfolio of projects showcasing various skills and
          capabilities
        </p>
      </motion.div>

      <div className="space-y-8" role="search" aria-label="Project filters">
        <motion.div
          variants={listContainer}
          initial="hidden"
          animate="show"
          className="relative flex flex-col md:flex-row gap-4 sticky top-20 z-30 bg-background/95 backdrop-blur-md p-4 sm:p-6 rounded-lg shadow-lg before:absolute before:inset-0 before:p-[1px] before:bg-gradient-to-r before:from-emerald-500/50 before:via-teal-500/50 before:to-teal-600/50 before:rounded-lg before:-z-10 before:animate-gradient-xy border border-border/50"
        >
          <div className="flex-1 max-w-md relative">
            <Input
              type="search"
              placeholder="Search projects, features, or skills..."
              defaultValue={searchQuery}
              onChange={handleSearch}
              className="w-full bg-background/80 backdrop-blur-sm border-border focus:border-emerald-500/50 transition-colors pr-10"
              aria-label="Search projects"
              role="searchbox"
            />
            {isSearching && (
              <div
                className="absolute right-3 top-1/2 -translate-y-1/2"
                role="status"
                aria-label="Searching..."
              >
                <Loader2 className="w-4 h-4 animate-spin text-emerald-500" aria-hidden="true" />
              </div>
            )}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2 items-center"
          >
            <span className="text-sm font-medium text-muted-foreground/90" role="status" aria-live="polite">
              Found: {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          variants={listContainer}
          initial="hidden"
          animate="show"
          className="relative sticky top-40 z-20 bg-background/95 backdrop-blur-md p-6 rounded-xl shadow-xl border border-border/50 before:absolute before:inset-0 before:p-[1px] before:bg-gradient-to-r before:from-emerald-500/50 before:via-teal-500/50 before:to-teal-600/50 before:rounded-xl before:-z-10 before:animate-gradient-xy"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Categories */}
            <div className="space-y-4" role="group" aria-label="Category filters">
              <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>
                Categories
              </h3>
              <nav className="flex flex-wrap gap-2" role="tablist" aria-label="Project categories">
                {categories.map((category, index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={`transition-all duration-200 text-sm font-medium px-4 py-2 ${
                        selectedCategory === category
                          ? "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg border-0"
                          : "hover:border-emerald-500/50 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 border-border/50 hover:shadow-md"
                      }`}
                      role="tab"
                      aria-selected={selectedCategory === category}
                      aria-controls="project-grid"
                    >
                      {category}
                    </Button>
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Status */}
            <div className="space-y-4" role="group" aria-label="Status filters">
              <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                Status
              </h3>
              <nav className="flex flex-wrap gap-2" role="tablist" aria-label="Project status">
                {statuses.map((status, index) => (
                  <motion.div
                    key={status}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant={selectedStatus === status ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedStatus(status)}
                      className={`transition-all duration-200 text-sm font-medium px-4 py-2 ${
                        selectedStatus === status
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg border-0"
                          : "hover:border-blue-500/50 hover:bg-blue-50 dark:hover:bg-blue-500/10 border-border/50 hover:shadow-md"
                      }`}
                      role="tab"
                      aria-selected={selectedStatus === status}
                      aria-controls="project-grid"
                    >
                      {status}
                    </Button>
                  </motion.div>
                ))}
              </nav>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 pt-8"
        role="tabpanel"
        id="project-grid"
        aria-live="polite"
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="col-span-full flex flex-col items-center justify-center py-12 space-y-4"
            role="alert"
            aria-live="polite"
          >
            <p className="text-foreground text-center text-lg">
              No projects found matching your criteria.
            </p>
            <p className="text-sm text-muted-foreground/90">
              Try adjusting your filters or search query.
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
