"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { Footer } from "./footer";
import { Navbar } from "./navbar";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1.0],
        }}
        className={cn(
          "flex-1 container max-w-4xl mx-auto px-4",
          "pt-24 pb-12" // Add padding to account for fixed navbar
        )}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
