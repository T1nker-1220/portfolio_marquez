"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export interface TabItem {
  id: string;
  label: string;
  icon?: ReactNode;
  count?: number;
}

interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

export function Tabs({ tabs, activeTab, onTabChange, className = "" }: TabsProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center gap-2 p-2 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          
          return (
            <motion.button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "text-emerald-600"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              {/* Active tab background */}
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-lg border border-emerald-500/20"
                />
              )}
              
              {/* Tab content */}
              <div className="relative z-10 flex items-center gap-2">
                {tab.icon && (
                  <span className="w-4 h-4">
                    {tab.icon}
                  </span>
                )}
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span className={`min-w-[1.125rem] h-5 px-1 text-xs rounded-full flex items-center justify-center ${
                    isActive 
                      ? "bg-emerald-500/20 text-emerald-700" 
                      : "bg-muted/20 text-muted-foreground"
                  }`}>
                    {tab.count}
                  </span>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

interface TabContentProps {
  children: ReactNode;
  className?: string;
}

export function TabContent({ children, className = "" }: TabContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}