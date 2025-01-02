import { ProjectShowcase } from "@/components/sections/project-showcase";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Nathaniel Marquez",
  description:
    "Explore my portfolio of web development projects showcasing expertise in Next.js, React, TypeScript, and more.",
};

export default function ProjectsPage() {
  return (
    <main className="container relative min-h-screen py-12 md:py-16">
      <h1 className="text-4xl font-bold tracking-tight text-center mb-8 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary/80 via-primary to-primary/80">
        Project Showcase
      </h1>
      <ProjectShowcase />
    </main>
  );
}
