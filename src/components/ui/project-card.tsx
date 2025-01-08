"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Project } from "@/types";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div variants={item}>
      <Card className="group overflow-hidden border-border/50 bg-background/80 backdrop-blur-[8px] hover:bg-background/90 transition-colors duration-200">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={640}
            height={360}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority={false}
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <span className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              {project.status}
            </span>
            <span className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {project.completedAt}
            </span>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold tracking-tight bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              {project.title}
            </h3>
            <p className="text-muted-foreground">{project.description}</p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Key Features
            </h4>
            <ul className="text-sm text-muted-foreground grid grid-cols-2 gap-2">
              {project.features.slice(0, 6).map((feature, index) => (
                <li key={index} className="flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-emerald-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech.name}
                  className="px-2 py-1 text-xs rounded-full transition-colors duration-200"
                  style={{
                    backgroundColor: `${tech.color}20`,
                    color: tech.color,
                    border: `1px solid ${tech.color}40`
                  }}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 flex items-center gap-2">
            <Button asChild size="sm" className="flex-1">
              <Link href={project.liveUrl} target="_blank">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
            {project.githubUrl && (
              <Button asChild size="sm" variant="outline">
                <Link href={project.githubUrl} target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
