"use client";

import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import { PageTransition } from "../page-transition";
import { ThemeToggle } from "../theme-toggle";
import { Footer } from "./footer";
import { Navbar } from "./navbar";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main
        className={cn(
          "flex-1 container max-w-4xl mx-auto px-4",
          "pt-24 pb-12" // Add padding to account for fixed navbar
        )}
      >
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  );
}
