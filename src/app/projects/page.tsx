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
      <ProjectShowcase />
    </main>
  );
}
