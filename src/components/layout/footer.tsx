"use client";

import { personalInfo } from "@/data/personal-info";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={cn(
          "flex flex-col items-center justify-center gap-6 p-6 mx-2 mt-12 md:mx-auto",
          "max-w-2xl rounded-lg text-center",
          "glass"
        )}
      >
        {/* Social Links */}
        <motion.div
          variants={item}
          className="grid grid-cols-3 sm:flex items-center gap-3 sm:gap-4"
        >
          {personalInfo.socialLinks.map((link) => (
            <motion.a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "p-3 rounded-lg transition-colors",
                "hover:bg-accent/50 hover:text-foreground",
                "flex items-center justify-center",
                "text-sm font-medium text-muted-foreground"
              )}
            >
              {link.platform}
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={item}
          className="w-full h-px bg-border opacity-50"
        />

        {/* Copyright */}
        <motion.div
          variants={item}
          className="space-y-2 text-sm text-muted-foreground"
        >
          <p>
            © {currentYear} {personalInfo.fullName}. All rights reserved.
          </p>
          <p className="flex flex-wrap items-center justify-center gap-1">
            Built with
            <span className="text-primary">Next.js</span>,
            <span className="text-primary">TypeScript</span>, and
            <span className="text-primary">TailwindCSS</span>
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
