"use client";

import { personalInfo } from "@/data/personal-info";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  User, 
  MapPin, 
  Mail, 
  Github, 
  Linkedin, 
  Facebook, 
  Instagram, 
  MessageCircle,
  Youtube,
  FolderOpen,
  User2,
  FileText,
  MessageSquare,
  Download,
  Sparkles,
  GitCommit,
  Activity
} from "lucide-react";
import Link from "next/link";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Facebook: Facebook,
  Instagram: Instagram,
  WhatsApp: MessageCircle,
  Youtube: Youtube,
};

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  count?: number;
}

interface LeftSidebarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  projectsCount?: number;
}

const navigationItems: NavigationItem[] = [
  {
    id: "projects",
    label: "Projects",
    icon: <FolderOpen className="w-4 h-4" />,
  },
  {
    id: "contributions",
    label: "Contributions", 
    icon: <GitCommit className="w-4 h-4" />,
  },
  {
    id: "activity",
    label: "Coding Activity",
    icon: <Activity className="w-4 h-4" />,
  }
];

export default function LeftSidebar({ 
  activeTab = "projects", 
  onTabChange = () => {}, 
  projectsCount = 0 
}: LeftSidebarProps) {

  return (
    <div className="h-full flex flex-col">
      {/* Top Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-shrink-0 p-4 pb-2 flex items-center justify-between gap-3"
      >
        {/* Hire Me Button - Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.div
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(16, 185, 129, 0.3)",
                "0 0 30px rgba(16, 185, 129, 0.5)",
                "0 0 20px rgba(16, 185, 129, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white text-xs font-semibold rounded-full cursor-pointer hover:scale-105 transition-transform"
          >
            <Sparkles className="w-3 h-3 animate-spin" />
            <span>Hire Me!</span>
          </motion.div>
        </motion.div>

        {/* Resume Button - Right */}
        <motion.a
          href="/resume.pdf"
          download="John_Nathaniel_Marquez_Resume.pdf"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white text-xs font-semibold rounded-full cursor-pointer hover:shadow-lg transition-all"
        >
          <Download className="w-3 h-3" />
          <span>Resume</span>
        </motion.a>
      </motion.div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto space-y-6 custom-scrollbar">
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center"
        >
          <div className="relative mb-4 w-20 h-20 mx-auto">
            <div className="w-full h-full rounded-full p-1 bg-gradient-to-br from-gray-500 to-gray-700">
              <div className="w-full h-full rounded-full overflow-hidden bg-background">
                <Image
                  src="/images/jnm_picture2.jpg"
                  alt={`${personalInfo.name} - Full Stack Developer`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-5 h-5 bg-gray-500 rounded-full border-2 border-background"></div>
          </div>
          
          <h2 className="text-lg font-semibold text-white drop-shadow-lg">
            {personalInfo.name} | Full Stack Developer
          </h2>
          
          <div className="flex items-center justify-center gap-2 mt-2 text-xs text-gray-300 drop-shadow-md">
            <MapPin className="w-3 h-3" />
            <span>{personalInfo.location}</span>
          </div>
        </motion.div>

        {/* Navigation Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="pt-4 border-t border-border/50"
        >
          <h3 className="text-sm font-medium text-white mb-3 drop-shadow-lg">
            Navigation
          </h3>
          
          <div className="space-y-2">
            {navigationItems.map((item) => {
              const isActive = activeTab === item.id;
              const count = item.id === "projects" ? projectsCount : undefined;
              
              return (
                <motion.button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  whileHover={{ scale: 1.01, x: 1 }}
                  whileTap={{ scale: 0.99 }}
                  className={`w-full flex items-center justify-between gap-2 p-2 rounded-lg transition-all group ${
                    isActive 
                      ? "bg-emerald-500/20 text-emerald-400 shadow-md shadow-emerald-500/10" 
                      : "hover:bg-muted/50 text-white hover:text-emerald-300"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`transition-colors ${
                      isActive ? "text-emerald-400" : "text-white group-hover:text-emerald-300"
                    }`}>
                      {item.icon}
                    </div>
                    <span className="text-xs font-medium">
                      {item.label}
                    </span>
                  </div>
                  
                  {count !== undefined && (
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className={`px-1.5 py-0.5 text-xs rounded-full font-medium ${
                        isActive 
                          ? "bg-emerald-600/20 text-emerald-400" 
                          : "bg-white/20 text-white"
                      }`}
                    >
                      {count}
                    </motion.span>
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

                 {/* Quick Contact */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.2 }}
           className="pt-4 border-t border-border/50"
         >
           <h3 className="text-sm font-medium text-white mb-3 drop-shadow-lg">
             Get in Touch
           </h3>
           
           <Link href={`mailto:${personalInfo.email}`}>
             <motion.div
               whileHover={{ scale: 1.02 }}
               className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors group"
             >
               <Mail className="w-4 h-4 text-gray-400 group-hover:text-gray-300" />
               <span className="text-xs text-gray-300 group-hover:text-white truncate drop-shadow-md">
                 {personalInfo.email}
               </span>
             </motion.div>
           </Link>
         </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-4 border-t border-border/50"
        >
          <h3 className="text-sm font-medium text-white mb-3 drop-shadow-lg">
            Follow Me
          </h3>
          
          <div className="grid grid-cols-3 gap-2">
            {personalInfo.socialLinks.slice(0, 6).map((social, index) => {
              const Icon = socialIcons[social.platform as keyof typeof socialIcons];
              
              if (!Icon) return null;
              
              return (
                <Link key={social.platform} href={social.url} target="_blank">
                  <motion.div
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-muted/30 hover:bg-gray-600/20 transition-colors group flex items-center justify-center"
                  >
                    <Icon className="w-4 h-4 text-gray-400 group-hover:text-gray-300" />
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Footer - Sticky at Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex-shrink-0 pt-4 border-t border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-md"
      >
        <div className="text-center space-y-2">
          <p className="text-xs text-gray-400 drop-shadow-md">
            © 2025 John Nathaniel Marquez. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 drop-shadow-md">
            Built with{" "}
            <span className="text-gray-300 font-medium drop-shadow-sm">Next.js</span>,{" "}
            <span className="text-gray-300 font-medium drop-shadow-sm">TypeScript</span>, and{" "}
            <span className="text-gray-300 font-medium drop-shadow-sm">TailwindCSS</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}