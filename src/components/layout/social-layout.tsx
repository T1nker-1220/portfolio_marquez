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
    <div className="h-screen overflow-hidden">
             {/* Mobile Navigation Bar */}
       <div className="lg:hidden sticky top-0 z-50 bg-white/10 dark:bg-white/5 backdrop-blur-md border-b border-white/20 dark:border-white/10 glass-container">
        <div className="flex items-center justify-between p-4">
                     <motion.button
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             onClick={() => setLeftSidebarOpen(true)}
             className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 transition-colors backdrop-blur-sm"
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
             className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 transition-colors backdrop-blur-sm"
           >
             <BarChart3 className="w-4 h-4" />
             <span className="text-sm font-medium">Stats</span>
           </motion.button>
        </div>
      </div>

      <div className="h-full px-4 py-6">
        <div className="flex gap-6 h-full max-w-none">
                     {/* Left Sidebar - Profile & Navigation */}
           <motion.aside
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5 }}
             className="hidden lg:flex lg:flex-col lg:w-80 lg:min-w-[320px] lg:max-w-[400px] lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)] lg:overflow-hidden"
           >
             <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-white/10 shadow-2xl shadow-black/25 h-full flex flex-col glass-container">
               {leftSidebar}
             </div>
           </motion.aside>

          {/* Center Feed - Main Content */}
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 min-w-0 max-w-full overflow-y-auto h-full custom-scrollbar"
          >
            <div className="space-y-6 h-full">
              {children}
            </div>
          </motion.main>

                     {/* Right Sidebar - Stats & Highlights */}
           <motion.aside
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5, delay: 0.4 }}
             className="hidden xl:flex xl:flex-col xl:w-80 xl:min-w-[320px] xl:max-w-[400px] xl:sticky xl:top-6 xl:h-[calc(100vh-3rem)] xl:overflow-hidden"
           >
             <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-white/10 shadow-2xl shadow-black/25 h-full flex flex-col glass-container">
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
                         className="w-80 max-w-[85vw] h-full bg-white/10 dark:bg-white/5 backdrop-blur-md border-r border-white/20 dark:border-white/10 glass-container"
            onClick={(e) => e.stopPropagation()}
                     >
             <div className="flex items-center justify-between p-4 border-b border-white/20 dark:border-white/10">
               <h2 className="text-lg font-semibold text-foreground">Profile</h2>
                             <motion.button
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.95 }}
                 onClick={() => setLeftSidebarOpen(false)}
                 className="p-2 rounded-lg hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
               >
                 <X className="w-5 h-5" />
               </motion.button>
            </div>
            <div className="p-4 overflow-y-auto h-[calc(100%-80px)] custom-scrollbar">
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
                         className="ml-auto w-80 max-w-[85vw] h-full bg-white/10 dark:bg-white/5 backdrop-blur-md border-l border-white/20 dark:border-white/10 glass-container"
            onClick={(e) => e.stopPropagation()}
                     >
             <div className="flex items-center justify-between p-4 border-b border-white/20 dark:border-white/10">
               <h2 className="text-lg font-semibold text-foreground">Stats</h2>
                             <motion.button
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.95 }}
                 onClick={() => setRightSidebarOpen(false)}
                 className="p-2 rounded-lg hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
               >
                 <X className="w-5 h-5" />
               </motion.button>
            </div>
            <div className="p-4 overflow-y-auto h-[calc(100%-80px)] custom-scrollbar">
              {rightSidebar}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}