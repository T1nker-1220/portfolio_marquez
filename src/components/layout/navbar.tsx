"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const navItems = {
  left: [
    { name: "Home", path: "/" },
    { name: "My Story", path: "/my-story" },
  ],
  right: [
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ],
};

const dropdownItems = [
  { name: "My Services", path: "/services" },
  { name: "Resume", path: "/resume" },
];

export function Navbar() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState(pathname);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "flex items-center h-14 sm:h-16 px-2 sm:px-4 mx-auto my-2",
          "max-w-2xl rounded-lg",
          "glass"
        )}
      >
        {/* Left Menu */}
        <ul className="flex items-center gap-0.5 sm:gap-1 flex-1">
          {navItems.left.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={cn(
                  "px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors relative",
                  "hover:text-foreground/80",
                  pathname === item.path
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
                onMouseOver={() => setHoveredPath(item.path)}
                onMouseLeave={() => setHoveredPath(pathname)}
              >
                <span className="relative z-10">{item.name}</span>
                {hoveredPath === item.path && (
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-accent/50"
                    layoutId="navbar-hover"
                    aria-hidden="true"
                    transition={{
                      type: "spring",
                      bounce: 0.25,
                      stiffness: 130,
                      damping: 15,
                    }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Logo/Home link with dropdown */}
        <div
          className="relative group flex flex-col items-center"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <div className="relative w-10 h-10 sm:w-12 sm:h-12">
            <Image
              src="/images/logo.png"
              alt="Nathaniel Logo"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 40px, 48px"
            />
          </div>
          <ChevronDown 
            className={cn(
              "w-4 h-4 mt-1 transition-all duration-300",
              isDropdownOpen ? "rotate-180" : "",
              "text-foreground/60 group-hover:text-foreground"
            )} 
          />
          
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full pt-2 w-[140px]"
            >
              <div className="py-2 bg-background/80 backdrop-blur-sm rounded-lg shadow-lg border border-border">
                {dropdownItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={cn(
                      "block px-4 py-2 text-sm text-center hover:bg-accent/50 transition-colors",
                      pathname === item.path
                        ? "text-foreground"
                        : "text-foreground/60"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Right Menu */}
        <ul className="flex items-center gap-0.5 sm:gap-1 flex-1 justify-end">
          {navItems.right.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={cn(
                  "px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors relative",
                  "hover:text-foreground/80",
                  pathname === item.path
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
                onMouseOver={() => setHoveredPath(item.path)}
                onMouseLeave={() => setHoveredPath(pathname)}
              >
                <span className="relative z-10">{item.name}</span>
                {hoveredPath === item.path && (
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-accent/50"
                    layoutId="navbar-hover"
                    aria-hidden="true"
                    transition={{
                      type: "spring",
                      bounce: 0.25,
                      stiffness: 130,
                      damping: 15,
                    }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
}
