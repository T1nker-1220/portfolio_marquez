"use client";

import { personalInfo } from "@/data/personal-info";
import { cn } from "@/lib/utils";
import { motion, useAnimation, useInView } from "framer-motion";
import { Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from 'react-type-animation';

type Particle = {
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
};

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const nameAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function HomePage() {
  const words = "Front-End Developer".split(" ");
  const nameArray = `Hi, I'm ${personalInfo.name}`.split("");
  const controls = useAnimation();
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  // Generate particles after component mounts to avoid hydration mismatch
  useEffect(() => {
    const newParticles = Array(15)
      .fill(null)
      .map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 15 + 5,
        duration: Math.random() * 2 + 2,
        delay: Math.random() * 2,
      }));

    setParticles(newParticles);
    setIsLoaded(true);
    controls.start("visible");
  }, [controls]);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const particleVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: [0.2, 0.5, 0.2],
      y: [0, -20, 0],
      x: [0, (particles[i]?.x ?? 0) * 0.1 - 5, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: particles[i]?.duration ?? 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: particles[i]?.delay ?? 0,
      },
    }),
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 overflow-hidden">
      <motion.section
        ref={sectionRef}
        className="relative flex flex-col items-center justify-center min-h-[85vh] text-center"
      >
        {/* Enhanced Background gradient with animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-emerald-500/15 to-background dark:from-green-400/20 dark:via-emerald-500/15 dark:to-background rounded-3xl"
        >
          {/* Optimized Particles - Only render when loaded */}
          {isLoaded && particles.map((particle, i) => (
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
              <div className="w-full h-full relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/40 to-emerald-500/40 dark:from-green-400/40 dark:to-emerald-500/40 rotate-45 transform origin-center star-shape" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative space-y-6 px-4 max-w-4xl mx-auto w-full"
        >
          {/* Animated name with letter animation */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight relative"
            initial="hidden"
            animate="visible"
            variants={nameAnimation}
          >
            {nameArray.map((letter, index) => (
              <motion.span
                key={index}
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600"
                variants={letterAnimation}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* Enhanced role text with floating animation */}
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-foreground/80 dark:text-muted-foreground">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1.5 + i * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                className="relative"
              >
                <motion.span
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </motion.span>
            ))}
          </div>

          {/* Enhanced bio text with typing animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.2 }}
            className="relative"
          >
            <div className="text-base sm:text-lg text-foreground/80 dark:text-muted-foreground max-w-[600px] mx-auto px-4 min-h-[80px]">
              <TypeAnimation
                sequence={[
                  2500,
                  personalInfo.bio,
                  1000,
                  "Let's create something amazing together!",
                  1000,
                  "I'm passionate about building modern web experiences.",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                deletionSpeed={65}
                repeat={Infinity}
                cursor={true}
                className="inline-block"
              />
            </div>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3 }}
          >
            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              href="/projects"
              className={cn(
                "w-full sm:w-auto px-8 py-4 rounded-lg font-medium",
                "bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 text-white",
                "transition-all duration-200",
                "shadow-lg shadow-emerald-500/20",
                "flex items-center justify-center gap-2",
                "hover:shadow-xl hover:shadow-emerald-500/30",
                "relative overflow-hidden group"
              )}
            >
              <span className="relative z-10">View Projects</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 relative z-10"
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
                boxShadow: "0 0 20px rgba(16, 185, 129, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              href="/images/JOHN-NATHANIEL-MARQUEZ-RESUME.pdf"
              download
              className={cn(
                "w-full sm:w-auto px-8 py-4 rounded-lg font-medium",
                "bg-white/10 dark:glass dark:hover:glass-hover backdrop-blur-sm",
                "flex items-center justify-center gap-2",
                "border border-emerald-500/20",
                "hover:border-emerald-500/40 transition-all duration-200",
                "text-foreground/80 dark:text-foreground",
                "group"
              )}
            >
              Download Resume
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                className="inline-block group-hover:text-emerald-500"
              >
                <Download className="h-4 w-4" />
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
