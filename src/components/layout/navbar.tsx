"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo, useCallback, useState } from "react";

const navItems = {
  left: [
    { name: "Home", path: "/" },
    { name: "My Story", path: "/my-story" },
  ],
  right: [
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ],
} as const;

const dropdownItems = [
  { name: "My Services", path: "/services" },
  { name: "Resume", path: "/resume" },
] as const;

// Memoized NavLink component to prevent unnecessary re-renders
const NavLink = memo(function NavLink({
  href,
  isActive,
  children,
  onMouseOver,
  onMouseLeave,
}: {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
  onMouseOver: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors relative",
        "hover:text-foreground/80",
        isActive ? "text-foreground" : "text-foreground/60"
      )}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </Link>
  );
});

// Memoized dropdown link component
const DropdownLink = memo(function DropdownLink({
  href,
  isActive,
  children,
}: {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "block px-4 py-2 text-sm text-center",
        "hover:bg-accent/50 hover:text-foreground",
        "transition-colors duration-150",
        isActive ? "text-foreground bg-accent/30" : "text-foreground/60"
      )}
    >
      {children}
    </Link>
  );
});

export function Navbar() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState(pathname);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Memoized handlers
  const handleMouseEnter = useCallback(() => {
    setIsDropdownOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsDropdownOpen(false);
  }, []);

  const handlePathHover = useCallback((path: string) => {
    setHoveredPath(path);
  }, []);

  const handlePathLeave = useCallback((path: string) => {
    setHoveredPath(path);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="px-4 py-2">
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={cn(
            "relative flex items-center h-14 sm:h-16 px-2 sm:px-4 mx-auto",
            "max-w-2xl rounded-xl",
            // Enhanced glass effect with gradient
            "before:absolute before:inset-0 before:rounded-xl before:backdrop-blur-md before:backdrop-saturate-150",
            "after:absolute after:inset-0 after:rounded-xl after:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]",
            // Gradient background
            "bg-gradient-to-b from-background/70 to-background/50",
            // Outer glow effect
            "shadow-[0_0_30px_-15px] shadow-primary/20",
            // Border effect
            "border border-border/50",
            // Dark mode specific enhancements
            "dark:bg-gradient-to-b dark:from-background/80 dark:to-background/40",
            "dark:shadow-primary/10",
            "dark:border-white/[0.08]",
            // Container styles
            "isolate"
          )}
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 dark:from-primary/10 dark:via-secondary/10 dark:to-primary/10 opacity-50 pointer-events-none rounded-xl" />

          {/* Left Menu */}
          <ul className="relative flex items-center gap-0.5 sm:gap-1 flex-1">
            {navItems.left.map((item) => (
              <li key={item.path}>
                <NavLink
                  href={item.path}
                  isActive={pathname === item.path}
                  onMouseOver={() => handlePathHover(item.path)}
                  onMouseLeave={() => handlePathLeave(pathname)}
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
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Logo/Home link with dropdown */}
          <div
            className={cn(
              "relative group flex flex-col items-center",
              // Expanded hover area with padding
              "px-4 -mx-4 py-2",
              // Enhanced hover effects
              "hover:bg-accent/5 rounded-lg transition-colors duration-200"
            )}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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
                "w-4 h-4 mt-1",
                // Enhanced transition
                "transition-transform duration-300 ease-in-out",
                isDropdownOpen && "rotate-180",
                "text-foreground/60 group-hover:text-foreground"
              )}
            />

            {/* Enhanced Dropdown Menu */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full pt-2 w-[140px] z-50"
                >
                  <div
                    className={cn(
                      "py-2 rounded-lg",
                      // Enhanced glass effect for dropdown
                      "bg-background/95 backdrop-blur-md",
                      // Better shadow and border
                      "shadow-lg shadow-primary/5",
                      "border border-border/50 dark:border-white/[0.08]",
                      // Smooth transition
                      "transform-gpu"
                    )}
                  >
                    {dropdownItems.map((item) => (
                      <DropdownLink
                        key={item.path}
                        href={item.path}
                        isActive={pathname === item.path}
                      >
                        {item.name}
                      </DropdownLink>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Menu */}
          <ul className="relative flex items-center gap-0.5 sm:gap-1 flex-1 justify-end">
            {navItems.right.map((item) => (
              <li key={item.path}>
                <NavLink
                  href={item.path}
                  isActive={pathname === item.path}
                  onMouseOver={() => handlePathHover(item.path)}
                  onMouseLeave={() => handlePathLeave(pathname)}
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
                </NavLink>
              </li>
            ))}
          </ul>
        </motion.nav>
      </div>
    </header>
  );
}
