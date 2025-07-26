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
];

export default function LeftSidebar() {
  const pathname = usePathname();

  return (
    <div className="h-full flex flex-col">
      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto space-y-6">
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="relative mb-4 w-20 h-20 mx-auto">
            <div className="w-full h-full rounded-full p-1 bg-gradient-to-br from-green-400 to-emerald-600">
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
            <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-background"></div>
          </div>
          
          <h2 className="text-lg font-semibold text-foreground">
            {personalInfo.name}
          </h2>
          <p className="text-sm text-muted-foreground">
            Full Stack Developer
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

      {/* Footer - Sticky at Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex-shrink-0 pt-4 border-t border-border/50 bg-background/80 backdrop-blur-sm"
      >
        <div className="text-center space-y-2">
          <p className="text-xs text-muted-foreground">
            © 2025 John Nathaniel Marquez. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with{" "}
            <span className="text-emerald-600 font-medium">Next.js</span>,{" "}
            <span className="text-emerald-600 font-medium">TypeScript</span>, and{" "}
            <span className="text-emerald-600 font-medium">TailwindCSS</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}