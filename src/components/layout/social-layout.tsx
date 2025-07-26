"use client";

import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, BarChart3, User } from "lucide-react";

interface SocialLayoutProps {
  children: ReactNode;
  leftSidebar: ReactNode;
  rightSidebar: ReactNode;
}

export default function SocialLayout({
  children,
  leftSidebar,
  rightSidebar,
}: SocialLayoutProps) {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Navigation Bar */}
      <div className="lg:hidden sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="flex items-center justify-between p-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLeftSidebarOpen(true)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
          >
            <User className="w-4 h-4" />
            <span className="text-sm font-medium">Profile</span>
          </motion.button>
          
          <h1 className="text-lg font-semibold text-foreground">
            Portfolio
          </h1>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setRightSidebarOpen(true)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
          >
            <BarChart3 className="w-4 h-4" />
            <span className="text-sm font-medium">Stats</span>
          </motion.button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar - Profile & Navigation */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block lg:col-span-3 lg:sticky lg:top-6 lg:h-fit"
          >
            <div className="glass rounded-2xl p-6 backdrop-blur-sm border border-border/50">
              {leftSidebar}
            </div>
          </motion.aside>

          {/* Center Feed - Main Content */}
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="space-y-6">
              {children}
            </div>
          </motion.main>

          {/* Right Sidebar - Stats & Highlights */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden lg:block lg:col-span-3 lg:sticky lg:top-6 lg:h-fit"
          >
            <div className="glass rounded-2xl p-6 backdrop-blur-sm border border-border/50">
              {rightSidebar}
            </div>
          </motion.aside>
        </div>
      </div>

      {/* Mobile Left Sidebar Overlay */}
      {leftSidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={() => setLeftSidebarOpen(false)}
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 120 }}
            className="w-80 max-w-[85vw] h-full bg-background border-r border-border/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-border/50">
              <h2 className="text-lg font-semibold text-foreground">Profile</h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLeftSidebarOpen(false)}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>
            <div className="p-4 overflow-y-auto h-[calc(100%-80px)]">
              {leftSidebar}
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Mobile Right Sidebar Overlay */}
      {rightSidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={() => setRightSidebarOpen(false)}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 120 }}
            className="ml-auto w-80 max-w-[85vw] h-full bg-background border-l border-border/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-border/50">
              <h2 className="text-lg font-semibold text-foreground">Stats</h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setRightSidebarOpen(false)}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>
            <div className="p-4 overflow-y-auto h-[calc(100%-80px)]">
              {rightSidebar}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}