import { SkillsSection } from "@/components/sections/skills";
import { Timeline } from "@/components/sections/timeline";
import { timeline } from "@/data/personal-info";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Story",
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
        <Timeline
          items={timelineItems.map((item) => ({
            ...item,
            date: item.year, // Add the required date property
          }))}
        />
        <SkillsSection />
      </div>
    </main>
  );
}
