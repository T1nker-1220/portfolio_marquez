"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  image?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="relative container mx-auto px-4">
      {/* Timeline line - hidden on mobile, shown on md+ */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />

      {/* Mobile timeline line */}
      <div className="md:hidden absolute left-4 top-0 h-full w-0.5 bg-border" />

      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className={cn(
            "relative flex items-start mb-16",
            // Mobile: always left-aligned, Desktop: alternating
            "flex-col md:flex-row",
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          )}
        >
          {/* Timeline dot - repositioned for mobile */}
          <div
            className={cn(
              "absolute w-4 h-4 rounded-full bg-primary",
              // Mobile: left aligned, Desktop: centered
              "left-2 md:left-1/2 md:-translate-x-1/2",
              "top-1 md:top-1/2 md:-translate-y-1/2"
            )}
          />

          {/* Content */}
          <div
            className={cn(
              // Mobile: full width with left padding, Desktop: half width
              "w-full pl-8 md:w-1/2 md:px-8",
              // Text alignment based on screen size and position
              "text-left",
              index % 2 === 0 ? "md:text-right" : "md:text-left"
            )}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className="glass p-6 rounded-lg"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-primary">
                {item.year}
              </h3>
              <h4 className="text-lg md:text-xl font-semibold mb-3">
                {item.title}
              </h4>
              <p className="text-sm md:text-base text-muted-foreground">
                {item.description}
              </p>
              {item.image && (
                <div className="mt-4 relative h-40 md:h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 2} // Prioritize loading first two images
                  />
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
