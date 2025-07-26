"use client";

import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import { PageTransition } from "../page-transition";
import { ThemeToggle } from "../theme-toggle";
import { Footer } from "./footer";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  );
}
