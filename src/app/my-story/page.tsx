import { Timeline } from "@/components/sections/timeline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Story | John Nathaniel Marquez",
  description:
    "Follow my journey through education and technology, from my first steps in programming to becoming a full-stack developer.",
};

const timelineItems = [
  {
    year: "2022",
    title: "First Year College - Introduction to Programming",
    description:
      "Started my journey in programming by learning Java. This was my first exposure to the world of software development.",
    image: "/images/timeline/2022.jpg",
  },
  {
    year: "2023",
    title: "Second Year - Expanding Knowledge",
    description:
      "Delved into Python programming, expanding my programming knowledge and exploring new technologies.",
    image: "/images/timeline/2023.jpg",
  },
  {
    year: "2024",
    title: "Third & Fourth Year - Web Development Journey",
    description:
      "Immersed myself in web development, learning HTML, CSS, and JavaScript. Started exploring AI integration in development and building projects with modern technologies.",
    image: "/images/timeline/2024.jpg",
  },
  {
    year: "December 2024",
    title: "Graduation - ICCT College Cainta Campus",
    description:
      "Graduated with a Bachelor of Science in Information Technology, marking the completion of my formal education and the beginning of my professional journey.",
    image: "/images/timeline/graduation.jpg",
  },
];

export default function MyStoryPage() {
  return (
    <main className="min-h-screen py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text">
            My Journey
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-[90%] md:max-w-2xl mx-auto leading-relaxed">
            Follow my path through education and technology, from my first steps
            in programming to becoming a full-stack developer passionate about
            creating innovative solutions.
          </p>
        </div>

        <Timeline items={timelineItems} />
      </div>
    </main>
  );
}
