"use client";

import { Project } from "@/types";
import { motion } from "framer-motion";
import {
  Github,
  Tag,
  Eye,
  Star,
  X,
  ExternalLink
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import { usePerformantAnimation, useReducedMotion } from "@/hooks/usePerformantAnimation";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";


interface SocialPostCardProps {
  project: Project;
}

export default function SocialPostCard({ project }: SocialPostCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [techHoverIndex, setTechHoverIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Performance-optimized animations
  const {
    cardY,
    cardScale,
    glowOpacity,
    createHoverHandlers,
    cardVariants,
    techStackVariants,
  } = usePerformantAnimation();

  // Respect reduced motion preferences
  useReducedMotion();

  // Detect mobile and touch devices for adaptive interactions
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Group tech stack by category for better organization
  const organizedTechStack = useMemo(() => {
    const frontend = project.techStack.filter(tech => 
      ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'CSS', 'HTML'].some(f => tech.name.includes(f))
    );
    const backend = project.techStack.filter(tech => 
      ['Node.js', 'Supabase', 'PostgreSQL', 'MongoDB', 'Express', 'API'].some(b => tech.name.includes(b))
    );
    const tools = project.techStack.filter(tech => 
      !frontend.includes(tech) && !backend.includes(tech)
    );
    return { frontend, backend, tools };
  }, [project.techStack]);

  // Get optimized hover handlers
  const hoverHandlers = createHoverHandlers(project.featured || false, isMobile);

  const handleHoverStart = () => {
    setIsHovered(true);
    hoverHandlers.onHoverStart();
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    hoverHandlers.onHoverEnd();
  };

  const handleTouchStart = () => {
    setIsHovered(true);
    hoverHandlers.onTouchStart();
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
    hoverHandlers.onTouchEnd();
  };

  return (
    <motion.article
      variants={cardVariants}
      initial="initial"
      animate="animate"
      style={{
        y: cardY,
        scale: cardScale,
      }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={`relative rounded-2xl overflow-hidden backdrop-blur-md border group transition-all duration-300 gpu-accelerated glass-container ${
        project.featured 
          ? 'bg-white/15 dark:bg-white/10 border-emerald-200/30 dark:border-emerald-400/20 shadow-2xl shadow-emerald-500/20 shimmer' 
          : 'bg-white/10 dark:bg-white/5 border-white/20 dark:border-white/10 shadow-2xl shadow-black/25'
      } ${
        isMobile ? 'active:scale-95' : ''
      }`}
    >
      {/* Performance-optimized glow effect for featured projects */}
      {project.featured && (
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            opacity: glowOpacity,
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.1), rgba(6, 95, 70, 0.1))',
            filter: 'blur(1px)',
          }}
        />
      )}
      
      {/* Subtle animated background pattern for featured */}
      {project.featured && (
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 animate-pulse-slow" />
        </div>
      )}
      
      {/* Mobile-specific subtle gradient overlay */}
      {isMobile && project.featured && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent" />
        </div>
      )}
      {/* Enhanced Card Header */}
      <div className="relative p-1.5 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <h2 className="text-xs font-semibold text-foreground drop-shadow-lg line-clamp-1">
            {project.title}
          </h2>
        </div>

        {/* Featured badge in header */}
        {project.featured && (
          <motion.div
            className="px-1.5 py-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 text-white text-xs font-medium rounded-full flex items-center gap-0.5 shadow-lg flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(16, 185, 129, 0.4)',
                '0 0 0 10px rgba(16, 185, 129, 0)',
                '0 0 0 0 rgba(16, 185, 129, 0)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Star className="w-2.5 h-2.5" />
          </motion.div>
        )}
      </div>

      {/* Year, Category & Description */}
      <div className="px-1.5 pb-1.5">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
          <span className="text-xs">{project.completedAt}</span>
          <span>•</span>
          <span className="flex items-center gap-1 text-xs">
            <Tag className="w-2.5 h-2.5" />
            {project.category}
          </span>
        </div>
        <p className="text-xs text-muted-foreground line-clamp-2 leading-snug drop-shadow-md">
          {project.description}
        </p>
      </div>

      {/* Media Section */}
      <div className="relative">
        <div className="relative aspect-[2/1] group/media">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={(e) => {
              e.currentTarget.src = '/images/logo.png';
              e.currentTarget.className = "object-contain p-8";
            }}
          />
        </div>
      </div>

      {/* Enhanced Content */}
      <div className="p-1.5 relative">
        {/* Interactive Organized Tech Stack */}
        <div className="mb-1.5">
          <h4 className="text-xs font-medium text-muted-foreground mb-1 flex items-center gap-0.5 drop-shadow-md">
            <Tag className="w-2.5 h-2.5" />
            Tech Stack
          </h4>

          {/* Frontend Stack */}
          {organizedTechStack.frontend.length > 0 && (
            <div className="mb-1">
              <div className="flex flex-wrap gap-0.5">
                {organizedTechStack.frontend.slice(0, 2).map((tech, index) => (
                  <span
                    key={`frontend-${tech.name}`}
                    className="px-1.5 py-0.5 text-xs rounded"
                    style={{
                      backgroundColor: `${tech.color}15`,
                      color: tech.color,
                      border: `1px solid ${tech.color}30`
                    }}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {/* Backend Stack */}
          {organizedTechStack.backend.length > 0 && (
            <div className="mb-1">
              <div className="flex flex-wrap gap-0.5">
                {organizedTechStack.backend.slice(0, 2).map((tech, index) => (
                  <span
                    key={`backend-${tech.name}`}
                    className="px-1.5 py-0.5 text-xs rounded"
                    style={{
                      backgroundColor: `${tech.color}15`,
                      color: tech.color,
                      border: `1px solid ${tech.color}30`
                    }}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tools & Others */}
          {organizedTechStack.tools.length > 0 && (
            <div>
              <div className="flex flex-wrap gap-0.5">
                {organizedTechStack.tools.slice(0, 2).map((tech, index) => (
                  <span
                    key={`tools-${tech.name}`}
                    className="px-1.5 py-0.5 text-xs rounded"
                    style={{
                      backgroundColor: `${tech.color}15`,
                      color: tech.color,
                      border: `1px solid ${tech.color}30`
                    }}
                  >
                    {tech.name}
                  </span>
                ))}
                {project.techStack.length > 6 && (
                  <span
                    className="px-1.5 py-0.5 text-xs bg-white/15 backdrop-blur-sm border border-white/20 text-muted-foreground rounded"
                  >
                    +{project.techStack.length - 6}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Action Buttons */}
        <div className="flex gap-1">
          {project.liveUrl && (
            <Link href={project.liveUrl} target="_blank" className="flex-1">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-center gap-1 py-1.5 px-2 text-white text-xs font-medium rounded transition-all duration-200 backdrop-blur-md border ${
                  project.featured
                    ? 'bg-emerald-500/30 border-emerald-400/40'
                    : 'bg-emerald-500/25 border-emerald-400/30'
                }`}
              >
                <Eye className="w-3 h-3" />
                <span className="hidden sm:inline">Live</span>
              </motion.button>
            </Link>
          )}

          {project.githubUrl && (
            <Link href={project.githubUrl || "#"} target="_blank" className="flex-1">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-1 py-1.5 px-2 bg-white/15 backdrop-blur-sm text-foreground text-xs font-medium rounded transition-all duration-200 border border-white/20"
              >
                <Github className="w-3 h-3" />
                <span className="hidden sm:inline">Code</span>
              </motion.button>
            </Link>
          )}

          {/* View Details Button */}
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 flex items-center justify-center gap-1 py-1.5 px-2 bg-white/10 backdrop-blur-sm text-foreground text-xs font-medium rounded transition-all duration-200 border border-white/20"
          >
            <ExternalLink className="w-3 h-3" />
            <span className="hidden sm:inline">More</span>
          </motion.button>
        </div>
      </div>

      {/* Project Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-3xl w-[95vw] max-h-[85vh] overflow-y-auto p-4 sm:p-6 gap-4 sm:gap-6 custom-scrollbar bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-2xl shadow-black/25">
          <DialogHeader className="space-y-2 sm:space-y-3">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-xl sm:text-2xl font-bold pr-8 text-foreground drop-shadow-lg">
                {project.title}
              </DialogTitle>
              {project.featured && (
                <div className="px-3 py-1 bg-gradient-to-r from-emerald-400 to-teal-500 text-white text-xs font-medium rounded-full flex items-center gap-1 shadow-lg">
                  <Star className="w-3 h-3" />
                  Featured
                </div>
              )}
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground drop-shadow-md">
              <span>{project.completedAt}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Tag className="w-3 h-3" />
                {project.category}
              </span>
            </div>
            <DialogDescription className="text-sm sm:text-base text-muted-foreground/90 drop-shadow-md">
              {project.description}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 sm:space-y-8">
            {/* Project Image */}
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
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

            {/* Features Section */}
            {project.features && project.features.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-semibold text-foreground drop-shadow-lg">Key Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm sm:text-base text-muted-foreground/90">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 mt-[0.4rem] rounded-full bg-emerald-500 flex-shrink-0 shadow-sm shadow-emerald-500/50" />
                      <span className="drop-shadow-md">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Complete Tech Stack */}
            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-semibold text-foreground drop-shadow-lg">Complete Tech Stack</h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.techStack.map((tech) => (
                  <motion.span
                    key={tech.name}
                    whileHover={{ scale: 1.05 }}
                    className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full transition-all duration-300 border backdrop-blur-sm"
                    style={{
                      backgroundColor: `${tech.color}15`,
                      color: tech.color,
                      borderColor: `${tech.color}30`,
                      textShadow: "0 1px 2px rgba(0,0,0,0.1)"
                    }}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Project Links */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 pt-2">
              {project.liveUrl && (
                <Link href={project.liveUrl} target="_blank" className="flex-1">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 hover:from-emerald-500/40 hover:to-teal-500/40 text-white text-sm font-medium rounded-lg border border-emerald-400/30 shadow-lg shadow-emerald-500/20 backdrop-blur-md"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit Live Demo
                  </motion.button>
                </Link>
              )}
              {project.githubUrl && (
                <Link href={project.githubUrl} target="_blank" className="flex-1">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white/10 hover:bg-white/15 text-foreground text-sm font-medium rounded-lg border border-white/20 hover:border-white/30 shadow-md backdrop-blur-sm"
                  >
                    <Github className="w-4 h-4" />
                    View Source Code
                  </motion.button>
                </Link>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </motion.article>
  );
}
