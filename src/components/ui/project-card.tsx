"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Project } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, CheckCircle2, ChevronDown, ChevronUp, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

interface ProjectCardProps {
  project: Project;
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const cardRef = useRef<HTMLDivElement>(null);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <motion.div variants={item} className="h-full">
      <Card
        ref={cardRef}
        className="group relative h-full flex flex-col overflow-hidden bg-background/95 backdrop-blur-[8px] hover:bg-background/98 transition-all duration-300 before:absolute before:inset-0 before:p-[1px] before:bg-gradient-to-r before:from-green-500/50 before:via-emerald-500/50 before:to-teal-600/50 before:rounded-lg before:-z-10 before:animate-gradient-xy hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-1 border border-border/50"
        tabIndex={0}
        role="article"
        aria-label={`${project.title} - ${project.description}`}
      >
        <div
          className="relative aspect-video overflow-hidden rounded-t-[calc(var(--radius)-1px)] bg-muted"
          aria-hidden={true}
        >
          {/* Loading Skeleton */}
          {imageLoading && (
            <div
              className="absolute inset-0 bg-muted animate-pulse"
              role="progressbar"
              aria-label="Loading project image"
            />
          )}

          <Image
            src={project.image}
            alt={`${project.title} - Project Preview`}
            width={1280}
            height={720}
            className={cn(
              "object-cover transition-all duration-500 group-hover:scale-105",
              imageLoading ? "scale-110 blur-xl" : "scale-100 blur-0"
            )}
            priority={false}
            loading="lazy"
            quality={85}
            onLoad={() => setImageLoading(false)}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LC0yMi4xODY6PTw2ODk8RUhGR01RU1pWVl86WX1phWRphf/2wBDARUXFx4aHh8gIB8gFC4kLhQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBf/AABEIACUAMgMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAAABQMEBgIB/8QAHxAAAgMAAgMBAQAAAAAAAAAAAAECAxEEEiExQRNR/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAIDAQT/xAAcEQACAgMBAQAAAAAAAAAAAAAAAQIRAxIhMUH/2gAMAwEAAhEDEQA/APqoAAAAAAAAAAAAAGGflqKz7K5Xt+GS5vKlN4vSMjJvWZ5cnkN+2L7Ll+GzqtT9MqXKx+yUbk/7KYzZXJjjJUh9GxP6TwsT9mWq5Ov2XKuT/WVU0yM8EX4aADD1cpr6XKeW19MlkZnLjlE1YAMxNgAAAAYTlwx+DPcni/1ozcFJeGNuRxnB+jz5RcXTNi3FmSVLi/Btwp9l5NrxuR2Ro6+Qn7OiE4zXGSUXE+jFNeS+mxr2Z6rkY/Zdr5K/pfHl/TnyYP0ewMtXyWvpcq5P9JLMpLHKPjPQAVJgAAAHE4JrGcgAR8jg791YzP8AI4c6n7PogpcngxtW4ysWX4YpOP6jC4nzP5tfC3XyP6bW7gQmvgts4EX9J/pJeobY0zFV8n+lyvk/1m8t4EX9K9vAi/pRZ4v1CvBJeoxYGVr5TXstwkmvB6KNNWZ4AAAAAAAAAAAAAAAAAP/Z"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent" />

          {/* Status Badges */}
          <div className="absolute top-4 right-4 flex items-center gap-2" aria-label="Project status">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={cn(
                "px-2 py-1 text-xs rounded-full flex items-center gap-1 backdrop-blur-md shadow-sm border",
                project.status === "Completed"
                  ? "bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border-emerald-500/30"
                  : project.status === "In Progress"
                    ? "bg-amber-500/20 text-amber-800 dark:text-amber-300 border-amber-500/30"
                    : "bg-blue-500/20 text-blue-800 dark:text-blue-300 border-blue-500/30"
              )}
              role="status"
            >
              <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
              {project.status}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="px-2 py-1 text-xs rounded-full bg-slate-500/20 text-slate-800 dark:text-slate-300 flex items-center gap-1 backdrop-blur-md shadow-sm border border-slate-500/30"
              role="status"
            >
              <Calendar className="w-3 h-3" aria-hidden="true" />
              {project.completedAt}
            </motion.span>
          </div>
        </div>

        <div className="flex-1 flex flex-col p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold tracking-tight text-foreground">
              {project.title}
            </h3>
            <p className="text-muted-foreground/90 line-clamp-2">{project.description}</p>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="space-y-6 overflow-hidden"
              >
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground/90">
                    Key Features
                  </h4>
                  <ul
                    className="text-sm text-muted-foreground/90 grid grid-cols-2 gap-2"
                    role="list"
                    aria-label="Project features"
                  >
                    {project.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2"
                        role="listitem"
                      >
                        <span className="w-1.5 h-1.5 mt-[0.4rem] rounded-full bg-emerald-500" aria-hidden="true" />
                        <span className="flex-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground/90">
                    Tech Stack
                  </h4>
                  <div
                    className="flex flex-wrap gap-2"
                    role="list"
                    aria-label="Technologies used"
                  >
                    {project.techStack.map((tech) => (
                      <span
                        key={tech.name}
                        className="px-2 py-1 text-xs rounded-full transition-all duration-300 hover:scale-105 border"
                        style={{
                          backgroundColor: `${tech.color}15`,
                          color: tech.color,
                          borderColor: `${tech.color}30`,
                          textShadow: "0 1px 2px rgba(0,0,0,0.1)"
                        }}
                        role="listitem"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="pt-4 mt-auto flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Button
                asChild
                size="sm"
                className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-md shadow-emerald-500/20"
                aria-label={`View live demo of ${project.title}`}
              >
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                  Live Demo
                </Link>
              </Button>
              {project.githubUrl && (
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="bg-background hover:bg-muted/50 shadow-sm border-border/50"
                  aria-label={`View source code of ${project.title}`}
                >
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" aria-hidden="true" />
                    Code
                  </Link>
                </Button>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              onKeyDown={handleKeyDown}
              className="w-full flex items-center justify-center gap-2 hover:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 transition-colors"
              aria-expanded={isExpanded}
              aria-controls={`${project.id}-details`}
            >
              {isExpanded ? (
                <>
                  Show Less <ChevronUp className="h-4 w-4" aria-hidden="true" />
                </>
              ) : (
                <>
                  View More <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </>
              )}
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
