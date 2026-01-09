"use client";

import { motion } from "framer-motion";
import VerticalScrollSkills from "@/components/ui/vertical-scroll-skills";
import { Zap } from "lucide-react";

export default function RightSidebar() {
  return (
    <div className="h-full flex flex-col space-y-3 overflow-y-auto">
      {/* Skills Showcase - Simple Auto-Scroll */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-shrink-0 mb-2"
      >
        <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2 drop-shadow-lg">
          <Zap className="w-4 h-4" />
          Skills Showcase
        </h3>

        <div className="h-20 overflow-hidden">
          <VerticalScrollSkills />
        </div>
      </motion.div>
    </div>
  );
}