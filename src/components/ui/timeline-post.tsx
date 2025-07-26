"use client";

import { TimelineItem } from "@/types";
import { motion } from "framer-motion";
import { Calendar, Clock, Milestone } from "lucide-react";

interface TimelinePostProps {
  item: TimelineItem;
  index: number;
}

export default function TimelinePost({ item, index }: TimelinePostProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl p-6 backdrop-blur-sm border border-border/50"
    >
      {/* Post Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
          <Milestone className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">
            Journey Milestone
          </h3>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            <span>{item.year}</span>
          </div>
        </div>
      </div>

      {/* Timeline Content */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-600"></div>
          <h4 className="text-base font-medium text-foreground">
            {item.year}
          </h4>
        </div>
        
        <p className="text-sm text-muted-foreground leading-relaxed pl-5">
          {item.description}
        </p>
      </div>

      {/* Timeline Visual */}
      <div className="mt-4 flex items-center gap-2">
        <div className="flex-1 h-1 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: index * 0.2 }}
            className="h-full bg-gradient-to-r from-blue-400 to-purple-600"
          />
        </div>
        <Clock className="w-4 h-4 text-muted-foreground" />
      </div>
    </motion.article>
  );
}