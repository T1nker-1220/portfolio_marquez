"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "My Story", path: "/my-story" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState(pathname);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "flex items-center justify-between h-16 px-4 mx-auto my-2",
          "max-w-2xl rounded-lg",
          "glass"
        )}
      >
        {/* Logo/Home link */}
        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <div className="relative w-12 h-12">
            <Image
              src="/images/logo.png"
              alt="Nathaniel Logo"
              fill
              className="object-contain"
              priority
              sizes="48px"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors relative",
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-accent/50 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <motion.div
            className="w-5 h-5 flex flex-col justify-center items-center"
            animate={isOpen ? "open" : "closed"}
          >
            <motion.span
              className="w-5 h-0.5 bg-foreground rounded-full block mb-1"
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 6 },
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="w-5 h-0.5 bg-foreground rounded-full block"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="w-5 h-0.5 bg-foreground rounded-full block mt-1"
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -6 },
              }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <motion.ul
              className={cn(
                "flex flex-col gap-2 p-4 mx-2 mt-2 rounded-lg",
                "glass"
              )}
            >
              {navItems.map((item) => (
                <motion.li
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.path}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                      "hover:bg-accent/50",
                      pathname === item.path
                        ? "text-foreground bg-accent/30"
                        : "text-foreground/60"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
