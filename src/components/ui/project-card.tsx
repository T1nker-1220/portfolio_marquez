"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Project } from "@/types";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, ChevronRight, ExternalLink, Github, Star } from "lucide-react";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const cardRef = useRef<HTMLDivElement>(null);

  const cardContent = (
    <Card
      ref={cardRef}
      className={cn(
        "group relative h-full flex flex-col overflow-hidden transition-all duration-300",
        project.featured
          ? "bg-background rounded-lg hover:bg-background/98 hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-[3px] border-0"
          : "bg-background/95 backdrop-blur-[8px] hover:bg-background/98 before:absolute before:inset-0 before:p-[1px] before:bg-gradient-to-r before:from-green-500/50 before:via-emerald-500/50 before:to-teal-600/50 before:rounded-lg before:-z-10 before:animate-gradient-xy hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-1 border border-border/50"
      )}
    >
      <div
        className="relative aspect-[16/9] w-full overflow-hidden rounded-t-[calc(var(--radius)-1px)] bg-muted"
        aria-hidden={true}
      >
        <>
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
              width={1920}
              height={1080}
              className={cn(
                "object-cover transition-all duration-500 group-hover:scale-105",
                imageLoading ? "scale-110 blur-xl" : "scale-100 blur-0"
              )}
              priority={false}
              loading="lazy"
              quality={90}
              onLoad={() => setImageLoading(false)}
              onError={(e) => {
                e.currentTarget.src = '/images/logo.png';
                e.currentTarget.className = cn(
                  "object-contain p-8 transition-all duration-500",
                  imageLoading ? "scale-110 blur-xl" : "scale-100 blur-0"
                );
                setImageLoading(false);
              }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LC0yMi4xODY6PTw2ODk8RUhGR01RU1pWVl86WX1phWRphf/2wBDARUXFx4aHh8gIB8gFC4kLhQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBf/AABEIACUAMgMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAAABQMEBgIB/8QAHxAAAgMAAgMBAQAAAAAAAAAAAAECAxEEEiExQRNR/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAIDAQT/xAAcEQACAgMBAQAAAAAAAAAAAAAAAQIRAxIhMUH/2gAMAwEAAhEDEQA/APqoAAAAAAAAAAAAAGGflqKz7K5Xt+GS5vKlN4vSMjJvWZ5cnkN+2L7Ll+GzqtT9MqXKx+yUbk/7KYzZXJjjJUh9GxP6TwsT9mWq5Ov2XKuT/WVU0yM8EX4aADD1cpr6XKeW19MlkZnLjlE1YAMxNgAAAAYTlwx+DPcni/1ozcFJeGNuRxnB+jz5RcXTNi3FmSVLi/Btwp9l5NrxuR2Ro6+Qn7OiE4zXGSUXE+jFNeS+mxr2Z6rkY/Zdr5K/pfHl/TnyYP0ewMtXyWvpcq5P9JLMpLHKPjPQAVJgAAAHE4JrGcgAR8jg791YzP8AI4c6n7PogpcngxtW4ysWX4YpOP6jC4nzP5tfC3XyP6bW7gQmvgts4EX9J/pJeobY0zFV8n+lyvk/1m8t4EX9K9vAi/pRZ4v1CvBJeoxYGVr5TXstwkmvB6KNNWZ4AAAAAAAAAAAAAAAAAP/Z"
            />
        </>
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent" />

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-2 left-2 z-20 flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full bg-orange-500/90 text-white shadow-lg backdrop-blur-sm" aria-label="Featured project">
            <Star className="w-3 h-3" aria-hidden="true" />
            Featured
          </div>
        )}


      </div>

      <div className="flex-1 flex flex-col p-6 space-y-6">
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold tracking-tight text-foreground">
            {project.title}
          </h3>
          <p className="text-muted-foreground/90 text-base line-clamp-2">{project.description}</p>
        </div>

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
            onClick={() => setIsModalOpen(true)}
            className="w-full flex items-center justify-center gap-2 hover:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 transition-colors"
            aria-label={`View details of ${project.title}`}
          >
            View Details
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </Card>
  );

  return (
    <motion.div variants={item} className="h-full">
      {project.featured ? (
        <div 
          className="relative h-full before:absolute before:inset-0 before:p-[3px] before:bg-gradient-to-r before:from-orange-500 before:via-emerald-500 before:to-teal-500 before:rounded-lg before:animate-gradient-xy before:animate-pulse-slow"
          aria-label="Featured project"
        >
          {cardContent}
        </div>
      ) : (
        cardContent
      )}

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-3xl w-[95vw] max-h-[85vh] overflow-y-auto p-4 sm:p-6 gap-4 sm:gap-6 custom-scrollbar">
          <DialogHeader className="space-y-2 sm:space-y-3">
            <DialogTitle className="text-xl sm:text-2xl font-bold">{project.title}</DialogTitle>
            <DialogDescription className="text-sm sm:text-base">{project.description}</DialogDescription>
          </DialogHeader>

          <div className="space-y-4 sm:space-y-8">
            {/* Project Media */}
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted">
              <Image
                src={project.image}
                alt={`${project.title} - Project Preview`}
                width={1920}
                height={1080}
                className="h-full w-full object-cover"
                quality={90}
                onError={(e) => {
                  e.currentTarget.src = '/images/logo.png';
                  e.currentTarget.className = "h-full w-full object-contain p-8";
                }}
              />
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 gap-6 sm:gap-8">
              {/* Features */}
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-semibold text-foreground">Key Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm sm:text-base text-muted-foreground/90">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 mt-[0.4rem] rounded-full bg-emerald-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-semibold text-foreground">Tech Stack</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech.name}
                      className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full transition-all duration-300 hover:scale-105 border"
                      style={{
                        backgroundColor: `${tech.color}15`,
                        color: tech.color,
                        borderColor: `${tech.color}30`,
                        textShadow: "0 1px 2px rgba(0,0,0,0.1)"
                      }}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Links */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 pt-2">
              <Button
                asChild
                className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-md shadow-emerald-500/20"
              >
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Live Demo
                </Link>
              </Button>
              {project.githubUrl && (
                <Button
                  asChild
                  variant="outline"
                  className="flex-1 bg-background hover:bg-muted/50 shadow-sm border-border/50"
                >
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Source Code
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
