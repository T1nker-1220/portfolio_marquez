import { useSpring, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * Performance-optimized animation hook for 60fps guarantee
 * Uses hardware acceleration and efficient spring values
 */
export function usePerformantAnimation() {
  const frameRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);
  const fpsRef = useRef<number[]>([]);

  // Performance-optimized spring configurations
  const springConfig = {
    stiffness: 300,
    damping: 30,
    mass: 0.8,
  };

  const fastSpringConfig = {
    stiffness: 400,
    damping: 40,
    mass: 0.6,
  };

  // Motion values for hardware-accelerated animations
  const cardY = useSpring(0, springConfig);
  const cardScale = useSpring(1, fastSpringConfig);
  const glowOpacity = useSpring(0, { stiffness: 200, damping: 25 });
  const shimmerProgress = useMotionValue(0);

  // Monitor FPS and adjust quality if needed
  useEffect(() => {
    const measureFPS = () => {
      const now = performance.now();
      const delta = now - lastTimeRef.current;
      
      if (delta > 0) {
        const fps = 1000 / delta;
        fpsRef.current.push(fps);
        
        // Keep only last 10 measurements
        if (fpsRef.current.length > 10) {
          fpsRef.current.shift();
        }
        
        // If average FPS drops below 55, reduce animation complexity
        const averageFPS = fpsRef.current.reduce((a, b) => a + b, 0) / fpsRef.current.length;
        if (averageFPS < 55) {
          // Automatically reduce spring stiffness for better performance
          cardY.set(cardY.get(), { stiffness: 200, damping: 35 });
          cardScale.set(cardScale.get(), { stiffness: 250, damping: 45 });
        }
      }
      
      lastTimeRef.current = now;
      frameRef.current = requestAnimationFrame(measureFPS);
    };

    frameRef.current = requestAnimationFrame(measureFPS);
    
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [cardY, cardScale]);

  // Optimized hover handlers with performance checks
  const createHoverHandlers = (featured: boolean, isMobile: boolean) => ({
    onHoverStart: () => {
      if (!isMobile) {
        cardY.set(-8);
        cardScale.set(1.02);
        glowOpacity.set(featured ? 0.6 : 0.3);
      }
    },
    onHoverEnd: () => {
      if (!isMobile) {
        cardY.set(0);
        cardScale.set(1);
        glowOpacity.set(0);
      }
    },
    onTouchStart: () => {
      if (isMobile) {
        cardScale.set(0.98);
        glowOpacity.set(featured ? 0.4 : 0.2);
      }
    },
    onTouchEnd: () => {
      if (isMobile) {
        setTimeout(() => {
          cardScale.set(1);
          glowOpacity.set(0);
        }, 150);
      }
    },
  });

  // Optimized animation variants
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth feel
      }
    },
  };

  const techStackVariants = {
    container: {
      animate: {
        transition: {
          staggerChildren: 0.05,
        },
      },
    },
    item: (index: number) => ({
      initial: { opacity: 0, x: -10 },
      animate: { 
        opacity: 1, 
        x: 0,
        transition: {
          delay: index * 0.05,
          duration: 0.3,
          ease: "easeOut",
        }
      },
    }),
  };

  return {
    cardY,
    cardScale,
    glowOpacity,
    shimmerProgress,
    createHoverHandlers,
    cardVariants,
    techStackVariants,
    springConfig,
    fastSpringConfig,
  };
}

/**
 * Utility to check if reduced motion is preferred
 */
export function useReducedMotion() {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (mediaQuery.matches) {
      // Disable complex animations for users who prefer reduced motion
      document.documentElement.style.setProperty('--animation-duration', '0.1s');
      document.documentElement.style.setProperty('--transition-duration', '0.1s');
    }
  }, []);
}