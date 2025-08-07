"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SnowParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  delay: number;
}

interface SnowfallProps {
  particleCount?: number;
  className?: string;
}

export default function Snowfall({ 
  particleCount = 50,
  className = ""
}: SnowfallProps) {
  const [particles, setParticles] = useState<SnowParticle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Generate random particles
  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    };

    const generateParticles = (): SnowParticle[] => {
      // Reduce particle count significantly on mobile devices
      const effectiveParticleCount = isMobile ? Math.max(Math.floor(particleCount * 0.3), 10) : particleCount;
      
      return Array.from({ length: effectiveParticleCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100, // percentage
        y: Math.random() * -100, // start above viewport
        size: Math.random() * 4 + 2, // 2-6px
        speed: Math.random() * 3 + 2, // 2-5 seconds
        opacity: Math.random() * 0.6 + 0.3, // 0.3-0.9
        delay: Math.random() * 5, // 0-5 seconds delay
      }));
    };

    // Update dimensions on resize
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      checkMobile();
    };

    checkMobile();
    setParticles(generateParticles());
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, [particleCount, isMobile]);

  return (
    <div 
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 15 }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            opacity: particle.opacity,
          }}
          initial={{
            y: -20,
          }}
          animate={{
            y: dimensions.height + 20,
          }}
          transition={{
            duration: particle.speed,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}