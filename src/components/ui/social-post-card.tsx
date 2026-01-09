"use client";

import { Project } from "@/types";
import { motion } from "framer-motion";
import { 
  Github,
  Tag,
  Eye,
  Star
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import { usePerformantAnimation, useReducedMotion } from "@/hooks/usePerformantAnimation";


interface SocialPostCardProps {
  project: Project;
}

export default function SocialPostCard({ project }: SocialPostCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [techHoverIndex, setTechHoverIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

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
      <div className="relative p-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div 
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold ${
              project.featured 
                ? 'bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 shadow-lg shadow-emerald-500/30'
                : 'bg-gradient-to-br from-gray-400 to-gray-600'
            }`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            N
          </motion.div>
          <div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>{project.completedAt}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Tag className="w-3 h-3" />
                {project.category}
              </span>
            </div>
          </div>
        </div>
        
        {/* Featured badge in header */}
        {project.featured && (
          <motion.div
            className="px-3 py-1 bg-gradient-to-r from-emerald-400 to-teal-500 text-white text-xs font-medium rounded-full flex items-center gap-1 shadow-lg"
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
            <Star className="w-3 h-3" />
            Featured
          </motion.div>
        )}
      </div>

      {/* Enhanced Project Title & Description */}
      <div className="px-4 pb-3">
        <motion.h2 
          className={`text-base font-semibold mb-1 transition-colors drop-shadow-lg ${
            project.featured 
              ? 'text-foreground group-hover:text-emerald-400 group-hover:drop-shadow-lg'
              : 'text-foreground group-hover:text-emerald-400'
          }`}
          layoutId={`title-${project.id}`}
        >
          {project.title}
        </motion.h2>
        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed drop-shadow-md">
          {project.description}
        </p>
      </div>

      {/* Media Section */}
      <div className="relative">
        <div className="relative aspect-[4/3] group/media">
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
          
          {/* Enhanced Featured Badge on Image */}
            {project.featured && (
              <motion.div 
                className="absolute top-3 left-3"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="px-3 py-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 text-white text-xs font-medium rounded-full flex items-center gap-1 shadow-lg backdrop-blur-sm">
                  <Star className="w-3 h-3" fill="currentColor" />
                  Featured
                </div>
              </motion.div>
            )}
        </div>
      </div>

      {/* Enhanced Content */}
      <div className="p-3 relative">
        {/* Interactive Organized Tech Stack */}
        <div className="mb-4">
          <h4 className="text-xs font-medium text-muted-foreground mb-2 flex items-center gap-1 drop-shadow-md">
            <Tag className="w-3 h-3" />
            Tech Stack
          </h4>
          
          {/* Frontend Stack */}
          {organizedTechStack.frontend.length > 0 && (
            <div className="mb-2">
              <span className="text-xs text-muted-foreground/80 mb-1 block">Frontend</span>
              <div className="flex flex-wrap gap-1">
                {organizedTechStack.frontend.slice(0, 4).map((tech, index) => (
                  <motion.span
                    key={`frontend-${tech.name}`}
                    className={`relative px-2 py-1 text-xs rounded-md transition-all duration-200 ${
                      isMobile ? 'active:scale-95' : 'cursor-pointer'
                    }`}
                    style={{ 
                      backgroundColor: `${tech.color}15`,
                      color: tech.color,
                      border: `1px solid ${tech.color}30`
                    }}
                    whileHover={!isMobile ? { 
                      scale: 1.05,
                      backgroundColor: `${tech.color}25`,
                      y: -1
                    } : {}}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => !isMobile && setTechHoverIndex(index)}
                    onHoverEnd={() => !isMobile && setTechHoverIndex(null)}
                    onTouchStart={() => isMobile && setTechHoverIndex(index)}
                    onTouchEnd={() => isMobile && setTimeout(() => setTechHoverIndex(null), 1000)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {tech.name}
                    {techHoverIndex === index && (
                      <motion.div
                        className={`absolute left-1/2 transform -translate-x-1/2 px-2 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs rounded whitespace-nowrap z-10 ${
                          isMobile ? '-bottom-8' : '-top-8'
                        }`}
                        initial={{ opacity: 0, y: isMobile ? -5 : 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: isMobile ? -5 : 5 }}
                      >
                        {tech.name}
                        {/* Small arrow pointing to the tech badge */}
                        <div className={`absolute left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/20 backdrop-blur-md border border-white/30 rotate-45 ${
                          isMobile ? '-top-1' : '-bottom-1'
                        }`} />
                      </motion.div>
                    )}
                  </motion.span>
                ))}
              </div>
            </div>
          )}
          
          {/* Backend Stack */}
          {organizedTechStack.backend.length > 0 && (
            <div className="mb-2">
              <span className="text-xs text-muted-foreground/80 mb-1 block">Backend</span>
              <div className="flex flex-wrap gap-1">
                {organizedTechStack.backend.slice(0, 3).map((tech, index) => (
                  <motion.span
                    key={`backend-${tech.name}`}
                    className={`px-2 py-1 text-xs rounded-md transition-all duration-200 ${
                      isMobile ? 'active:scale-95' : 'cursor-pointer'
                    }`}
                    style={{ 
                      backgroundColor: `${tech.color}15`,
                      color: tech.color,
                      border: `1px solid ${tech.color}30`
                    }}
                    whileHover={!isMobile ? { 
                      scale: 1.05,
                      backgroundColor: `${tech.color}25`,
                      y: -1
                    } : {}}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index + 4) * 0.05 }}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </div>
          )}
          
          {/* Tools & Others */}
          {organizedTechStack.tools.length > 0 && (
            <div>
              <div className="flex flex-wrap gap-1">
                {organizedTechStack.tools.slice(0, 3).map((tech, index) => (
                  <motion.span
                    key={`tools-${tech.name}`}
                    className={`px-2 py-1 text-xs rounded-md transition-all duration-200 ${
                      isMobile ? 'active:scale-95' : 'cursor-pointer'
                    }`}
                    style={{ 
                      backgroundColor: `${tech.color}15`,
                      color: tech.color,
                      border: `1px solid ${tech.color}30`
                    }}
                    whileHover={!isMobile ? { 
                      scale: 1.05,
                      backgroundColor: `${tech.color}25`,
                      y: -1
                    } : {}}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index + 7) * 0.05 }}
                  >
                    {tech.name}
                  </motion.span>
                ))}
                {project.techStack.length > 10 && (
                  <motion.span 
                    className="px-2 py-1 text-xs bg-white/15 backdrop-blur-sm border border-white/20 text-muted-foreground rounded-md cursor-pointer"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
                  >
                    +{project.techStack.length - 10} more
                  </motion.span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Action Buttons */}
        <div className="flex gap-2">
          {project.liveUrl && (
            <Link href={project.liveUrl} target="_blank" className="flex-1">
              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: project.featured 
                    ? '0 8px 25px rgba(16, 185, 129, 0.3)'
                    : '0 8px 25px rgba(16, 185, 129, 0.2)'
                }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 text-white text-sm font-medium rounded-lg transition-all duration-200 backdrop-blur-md border ${
                  project.featured 
                    ? 'bg-emerald-500/30 border-emerald-400/40 shadow-lg shadow-emerald-500/25'
                    : 'bg-emerald-500/25 border-emerald-400/30 shadow-md shadow-emerald-500/20'
                }`}
              >
                <Eye className="w-4 h-4" />
                View Live
              </motion.button>
            </Link>
          )}
          
          {project.githubUrl && (
            <Link href={project.githubUrl || "#"} target="_blank" className="flex-1">
              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: 'rgba(255, 255, 255, 0.25)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white/15 backdrop-blur-sm text-foreground text-sm font-medium rounded-lg transition-all duration-200 border border-white/20 hover:border-white/30"
              >
                <Github className="w-4 h-4" />
                Code
              </motion.button>
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}
