"use client";

import { personalInfo } from "@/data/personal-info";
import { motion } from "framer-motion";
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
  Home,
  FolderOpen,
  User2,
  FileText,
  MessageSquare
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Facebook: Facebook,
  Instagram: Instagram,
  WhatsApp: MessageCircle,
  Youtube: Youtube,
};

const navigationItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Projects", href: "/projects", icon: FolderOpen },
  { name: "My Story", href: "/my-story", icon: User2 },
  { name: "Resume", href: "/resume", icon: FileText },
  { name: "Contact", href: "/contact", icon: MessageSquare },
];

export default function LeftSidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-6">
      {/* Profile Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="relative mb-4">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white text-2xl font-bold">
            {personalInfo.name[0]}
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background"></div>
        </div>
        
        <h2 className="text-lg font-semibold text-foreground">
          {personalInfo.name}
        </h2>
        <p className="text-sm text-muted-foreground">
          Front-End Developer
        </p>
        
        <div className="flex items-center justify-center gap-2 mt-2 text-xs text-muted-foreground">
          <MapPin className="w-3 h-3" />
          <span>{personalInfo.location}</span>
        </div>
      </motion.div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-2"
      >
        {navigationItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link key={item.name} href={item.href}>
              <motion.div
                whileHover={{ scale: 1.02, x: 2 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-gradient-to-r from-green-400/20 to-emerald-500/20 text-emerald-600 border border-emerald-500/20"
                    : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{item.name}</span>
              </motion.div>
            </Link>
          );
        })}
      </motion.nav>

      {/* Quick Contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="pt-4 border-t border-border/50"
      >
        <h3 className="text-sm font-medium text-foreground mb-3">
          Get in Touch
        </h3>
        
        <Link href={`mailto:${personalInfo.email}`}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors group"
          >
            <Mail className="w-4 h-4 text-muted-foreground group-hover:text-emerald-600" />
            <span className="text-xs text-muted-foreground group-hover:text-foreground truncate">
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
        <h3 className="text-sm font-medium text-foreground mb-3">
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
                  className="p-2 rounded-lg bg-muted/30 hover:bg-emerald-500/20 transition-colors group flex items-center justify-center"
                >
                  <Icon className="w-4 h-4 text-muted-foreground group-hover:text-emerald-600" />
                </motion.div>
              </Link>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}