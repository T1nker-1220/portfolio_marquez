"use client";

import { motion } from "framer-motion";

interface TimelineItem {
  title: string;
  date: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-heading font-bold sm:text-4xl mb-4 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
          My Journey
        </h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          A timeline of my professional experience and education
        </p>
      </motion.div>

      <div className="relative container mx-auto px-4">
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border" />

        {items.map((item, index) => (
          <div
            key={index}
            className={`mb-8 flex justify-between items-center w-full ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            }`}
          >
            <div className="order-1 w-5/12" />
            <div className="z-20 flex items-center order-1 w-8 h-8 rounded-full">
              <div className="relative flex items-center justify-center w-3 h-3">
                <div className="absolute w-3 h-3 bg-primary rounded-full" />
                <div className="absolute w-3 h-3 bg-primary rounded-full animate-ping" />
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`order-1 glass w-5/12 px-6 py-4 rounded-lg ${
                index % 2 === 0 ? "text-right" : "text-left"
              }`}
            >
              <h3 className="mb-2 font-bold text-lg bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                {item.title}
              </h3>
              <time className="mb-3 text-sm text-muted-foreground block">
                {item.date}
              </time>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
