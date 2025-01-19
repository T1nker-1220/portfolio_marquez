"use client";

import { personalInfo } from "@/data/personal-info";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { Download } from "lucide-react";
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  rotation?: number;
}

export default function HomePage() {
  const words = "Front-End Developer".split(" ");
  const controls = useAnimation();
  const particlesRef = useRef<Particle[]>([]);

  // Initialize particle positions and properties on mount
  useEffect(() => {
    particlesRef.current = Array(25)
      .fill(null)
      .map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 25 + 10,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
        rotation: Math.random() * 360,
      }));
    controls.start("visible");
  }, [controls]);

  const particleVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: [0.3, 0.7, 0.3],
      y: [0, -30, 0],
      x: [0, (particlesRef.current[i]?.x ?? 0) * 0.2 - 10, 0],
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      transition: {
        duration: particlesRef.current[i]?.duration ?? 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: particlesRef.current[i]?.delay ?? 0,
      },
    }),
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 overflow-hidden">
      <motion.section className="relative flex flex-col items-center justify-center min-h-[85vh] text-center">
        {/* Optimized Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-emerald-500/5 to-background dark:from-green-400/20 dark:via-emerald-500/15 dark:to-background rounded-3xl before:absolute before:inset-0 before:bg-gradient-to-tr before:from-green-400/5 before:via-emerald-500/5 before:to-transparent dark:before:from-green-400/10 dark:before:via-emerald-500/10 dark:before:to-transparent before:animate-gradient-shift">
          {/* Optimized Particles */}
          {particlesRef.current?.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute backdrop-blur-[1px]"
              style={{
                width: particle.size,
                height: particle.size,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              initial="hidden"
              animate="visible"
              custom={i}
              variants={particleVariants}
            >
              {/* Star shape */}
              <div className="w-full h-full relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-300/40 to-emerald-400/40 dark:from-green-400/60 dark:to-emerald-500/60 rotate-45 transform origin-center star-shape" />
                <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-green-300/30 to-emerald-400/30 dark:from-green-400/50 dark:to-emerald-500/50 -rotate-45 transform origin-center star-shape" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optimized animated stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={cn(
                "absolute mix-blend-screen filter blur-md",
                "star-glow"
              )}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 2,
                ease: "linear",
              }}
              style={{
                top: `${35 + i * 20}%`,
                left: `${25 + i * 20}%`,
                width: `${12 + i * 2}rem`,
                height: `${12 + i * 2}rem`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-300/30 to-emerald-400/30 dark:from-green-400/50 dark:to-emerald-500/50 star-shape animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-r from-green-300/20 to-emerald-400/20 dark:from-green-400/40 dark:to-emerald-500/40 star-shape rotate-45" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative space-y-6 px-4 max-w-4xl mx-auto w-full"
        >
          {/* Animated name */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I&apos;m {personalInfo.name}
          </motion.h1>

          {/* Animated role text */}
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + i * 0.2,
                  ease: "easeOut",
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* Bio text */}
          <motion.p
            className="text-base sm:text-lg text-muted-foreground max-w-[600px] mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <motion.a
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              href="/projects"
              className={cn(
                "w-full sm:w-auto px-8 py-4 rounded-lg font-medium",
                "bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 text-white",
                "transition-all duration-200",
                "shadow-lg shadow-emerald-500/20",
                "flex items-center justify-center gap-2",
                "hover:shadow-xl hover:shadow-emerald-500/30"
              )}
            >
              View Projects
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </motion.svg>
            </motion.a>
            <motion.a
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              href="/images/JOHN-NATHANIEL-MARQUEZ-FlowCV-Resume-.pdf"
              download
              className={cn(
                "w-full sm:w-auto px-8 py-4 rounded-lg font-medium",
                "glass hover:glass-hover",
                "flex items-center justify-center gap-2",
                "border border-emerald-500/20",
                "hover:border-emerald-500/40 transition-all duration-200"
              )}
            >
              Download Resume
              <Download className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
