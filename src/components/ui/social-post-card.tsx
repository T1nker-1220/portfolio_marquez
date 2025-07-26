"use client";

import { Project } from "@/types";
import { motion } from "framer-motion";
import { 
  ExternalLink,
  Github,
  Calendar,
  Tag,
  Play,
  Eye,
  MoreHorizontal,
  Star
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


interface SocialPostCardProps {
  project: Project;
}

export default function SocialPostCard({ project }: SocialPostCardProps) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      className="glass rounded-2xl overflow-hidden backdrop-blur-sm border border-border/50 group"
    >
      {/* Post Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white text-sm font-bold">
            N
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Nathaniel
            </h3>
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
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-full hover:bg-muted/50 transition-colors"
        >
          <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
        </motion.button>
      </div>

      {/* Project Title & Description */}
      <div className="px-4 pb-3">
        <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-emerald-600 transition-colors">
          {project.title}
        </h2>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {project.description}
        </p>
      </div>

      {/* Media Section */}
      <div className="relative">
        {showVideo && project.video ? (
          <div className="aspect-video bg-black">
            <video
              src={project.video.src}
              poster={project.video.poster}
              controls
              className="w-full h-full object-cover"
              autoPlay
            />
          </div>
        ) : (
          <div className="relative aspect-video group/media">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
            {/* Video Play Overlay */}
            {project.video && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowVideo(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover/media:opacity-100 transition-opacity"
              >
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                  <Play className="w-6 h-6 text-black ml-1" />
                </div>
              </motion.button>
            )}
            
            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-3 left-3">
                <div className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-medium rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  Featured
                </div>
              </div>
            )}
            
            {/* Status Badge */}
            <div className="absolute top-3 right-3">
              <div className={`px-2 py-1 text-xs font-medium rounded-full ${
                project.status === "Completed" 
                  ? "bg-green-500/20 text-green-600 border border-green-500/30"
                  : project.status === "In Progress"
                  ? "bg-blue-500/20 text-blue-600 border border-blue-500/30"
                  : "bg-gray-500/20 text-gray-600 border border-gray-500/30"
              }`}>
                {project.status}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1 mb-3">
          {project.techStack.slice(0, 6).map((tech, index) => (
            <span
              key={tech.name}
              className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded-md"
              style={{ color: tech.color }}
            >
              {tech.name}
            </span>
          ))}
          {project.techStack.length > 6 && (
            <span className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded-md">
              +{project.techStack.length - 6} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {project.liveUrl && (
            <Link href={project.liveUrl} target="_blank">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-emerald-500/25 transition-shadow"
              >
                <Eye className="w-4 h-4" />
                View Live
              </motion.button>
            </Link>
          )}
          
          {project.githubUrl && (
            <Link href={project.githubUrl} target="_blank">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-muted hover:bg-muted/80 text-foreground text-sm font-medium rounded-lg transition-colors"
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