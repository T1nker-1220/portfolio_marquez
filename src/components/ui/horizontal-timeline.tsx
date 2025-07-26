"use client";

import { TimelineItem } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ChevronDown, ChevronUp, Clock, Milestone } from "lucide-react";
import { useState } from "react";

interface HorizontalTimelineProps {
  items: TimelineItem[];
}

export default function HorizontalTimeline({ items }: HorizontalTimelineProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {/* Timeline Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center justify-center gap-2">
          <Milestone className="w-6 h-6 text-emerald-500" />
          My Journey
        </h2>
        <p className="text-sm text-muted-foreground">
          A timeline of milestones and achievements
        </p>
      </motion.div>

      {/* Horizontal Timeline Container */}
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute top-12 left-0 right-0 h-1 bg-border/50 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, delay: 0.5 }}
            className="h-full bg-gradient-to-r from-emerald-400 to-blue-500"
          />
        </div>

        {/* Timeline Items */}
        <div className="flex justify-between items-start relative z-10 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0">
          <div className="flex justify-between items-start min-w-full md:min-w-0 w-full">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col items-center flex-1 mx-1 md:mx-2 min-w-0">
              {/* Timeline Node */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.3 }}
                className="relative mb-4"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleExpanded(index)}
                  className={`w-8 h-8 rounded-full border-4 transition-all duration-300 ${
                    expandedIndex === index
                      ? "bg-emerald-500 border-emerald-300 shadow-lg shadow-emerald-500/50"
                      : "bg-background border-emerald-400 hover:border-emerald-500"
                  }`}
                >
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 opacity-75" />
                </motion.button>
                
                {/* Pulse Animation for Active Node */}
                {expandedIndex === index && (
                  <div className="absolute inset-0 w-8 h-8 rounded-full bg-emerald-400 animate-ping opacity-30" />
                )}
              </motion.div>

              {/* Year Label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.7 }}
                className="text-xs font-medium text-muted-foreground mb-2 text-center whitespace-nowrap"
              >
                {item.year.length > 8 ? item.year.split(' ')[0] : item.year}
              </motion.div>

              {/* Expandable Card */}
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-20 left-1/2 transform -translate-x-1/2 w-80 max-w-[95vw] z-20 md:max-w-[80vw] lg:max-w-[400px]"
                  >
                    <div className="glass rounded-xl p-4 backdrop-blur-sm border border-border/50 shadow-lg">
                      {/* Card Header */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center">
                            <Calendar className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm font-semibold text-foreground">
                            {item.year}
                          </span>
                        </div>
                        
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setExpandedIndex(null)}
                          className="p-1 rounded-full hover:bg-muted/50 transition-colors"
                        >
                          <ChevronUp className="w-4 h-4 text-muted-foreground" />
                        </motion.button>
                      </div>

                      {/* Card Content */}
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                        
                        {/* Progress Indicator */}
                        <div className="flex items-center gap-2 pt-2 border-t border-border/30">
                          <Clock className="w-3 h-3 text-emerald-500" />
                          <div className="flex-1 h-1 bg-muted/30 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: "0%" }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 1, delay: 0.3 }}
                              className="h-full bg-gradient-to-r from-emerald-400 to-blue-500"
                            />
                          </div>
                          <span className="text-xs text-muted-foreground">
                            Milestone {index + 1}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Arrow pointing to node */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-background border-l border-t border-border/50 rotate-45" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          </div>
        </div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-center mt-8"
        >
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1 px-4">
            <ChevronDown className="w-3 h-3" />
            <span className="hidden md:inline">Click on any timeline node to expand details</span>
            <span className="md:hidden">Tap timeline nodes for details</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}