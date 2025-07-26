"use client";

import { motion, useReducedMotion } from "framer-motion";

interface TimelineItem {
  title: string;
  date: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  const shouldReduceMotion = useReducedMotion();

  const animation = shouldReduceMotion
    ? {}
    : {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
    };

  return (
    <section className="py-8 sm:py-12 md:py-20">
      <motion.div
        {...animation}
        className="text-center mb-8 md:mb-12"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-3 md:mb-4 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
          My Journey
        </h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto px-4">
          A timeline of my professional experience and education
        </p>
      </motion.div>

      <div className="relative container mx-auto px-4">
        {/* Timeline line - visible on all screens, adjusted for mobile */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />

        {items.map((item, index) => (
          <div
            key={index}
            className={`mb-8 flex flex-col md:flex-row md:justify-between md:items-center w-full ${index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
          >
            {/* Mobile: Left side dot, Desktop: Centered dot */}
            <div className="z-20 flex items-center absolute left-4 md:relative md:left-auto md:order-1 md:w-8 h-8">
              <div className="relative flex items-center justify-center w-3 h-3">
                <div className="absolute w-3 h-3 bg-primary rounded-full" />
                <div className="absolute w-3 h-3 bg-primary rounded-full animate-ping" />
              </div>
            </div>

            {/* Spacer for desktop layout */}
            <div className="hidden md:block md:order-1 md:w-5/12" />

            {/* Content */}
            <motion.div
              {...animation}
              className={`glass pl-12 pr-4 py-4 md:px-6 md:py-4 rounded-lg ml-4 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}
            >
              <h3 className="mb-2 font-bold text-lg sm:text-xl bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent drop-shadow-sm">
                {item.title}
              </h3>
              <time className="mb-3 text-sm text-muted-foreground block drop-shadow-md">
                {item.date}
              </time>
              <p className="text-muted-foreground text-sm sm:text-base drop-shadow-md">{item.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
