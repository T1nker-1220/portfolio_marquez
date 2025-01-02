import { SkillsShowcase } from "@/components/sections/skills-showcase";
import { Timeline } from "@/components/sections/timeline";
import { timeline } from "@/data/personal-info";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Story | John Nathaniel Marquez",
  description:
    "Follow my journey through education and technology, from my first steps in programming to becoming a full-stack developer.",
};

export default function MyStoryPage() {
  const timelineItems = timeline.map((item) => ({
    year: item.year,
    title: `${item.year} - Development Journey`,
    description: item.description,
    image: item.image,
  }));

  return (
    <main className="container max-w-7xl mx-auto px-6 py-12">
      <div className="space-y-20">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">My Journey</h1>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            The story of my development journey, from learning the basics to
            building modern web applications
          </p>
        </div>

        <Timeline items={timelineItems} />
        <SkillsShowcase />
      </div>
    </main>
  );
}
