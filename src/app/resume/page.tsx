"use client";

import { personalInfo, skills } from "@/data/personal-info";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { memo } from "react";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

interface Education {
  degree: string;
  school: string;
  period: string;
  description: string;
}

interface ResumeData {
  experience: Experience[];
  education: Education[];
  skills: {
    technical: string[];
    tools: string[];
    soft: string[];
  };
  contact: {
    email: string;
    location: string;
    social: typeof personalInfo.socialLinks;
  };
}

const resumeData: ResumeData = {
  experience: [
    {
      title: "Full Stack Developer",
      company: "Freelance",
      period: "2023 - Present",
      description: [
        "Developed Excel Glass Inc. website using Next.js 14, React 18, and TypeScript with modern UI/UX design",
        "Created Weather API application with Flask 3.0 and Python, implementing real-time data integration",
        "Built Edible Artistry website using Next.js 15 and React 19 RC with advanced UI features",
        "Designed Wedding Memories website with Next.js 13.5, Prisma 6, and comprehensive photo management",
        "Managed content creation for T1nker Gaming YouTube channel with professional editing",
        "Developed personal portfolio website with Next.js 15, React 19, and advanced animations",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Information Technology",
      school: personalInfo.education[0].school,
      period: `${personalInfo.education[0].startYear} - ${personalInfo.education[0].endYear}`,
      description: "Specializing in web development, software engineering, and modern development practices",
    },
  ],
  skills: {
    technical: skills
      .filter(skill => skill.category === "frontend" || skill.category === "backend")
      .map(skill => skill.name),
    tools: skills
      .filter(skill => skill.category === "tools")
      .map(skill => skill.name),
    soft: [
      "Problem Solving",
      "Communication",
      "Team Collaboration",
      "Time Management",
      "Adaptability",
      "Attention to Detail",
    ],
  },
  contact: {
    email: personalInfo.email,
    location: personalInfo.location,
    social: personalInfo.socialLinks,
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

interface SkillTagProps {
  skill: string;
}

const SkillTag = memo(function SkillTag({ skill }: SkillTagProps) {
  return (
    <span
      className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-green-400/10 via-emerald-500/10 to-teal-600/10 text-primary"
    >
      {skill}
    </span>
  );
});

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem = memo(function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-semibold">{experience.title}</h3>
      <p className="text-primary">{experience.company}</p>
      <p className="text-sm text-muted-foreground">{experience.period}</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
        {experience.description.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
});

interface EducationItemProps {
  education: Education;
}

const EducationItem = memo(function EducationItem({ education }: EducationItemProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-semibold">{education.degree}</h3>
      <p className="text-primary">{education.school}</p>
      <p className="text-sm text-muted-foreground">{education.period}</p>
      <p className="text-muted-foreground">{education.description}</p>
    </div>
  );
});

interface SkillsSectionProps {
  technical: string[];
  tools: string[];
  soft: string[];
}

const SkillsSection = memo(function SkillsSection({ technical, tools, soft }: SkillsSectionProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
        <div className="flex flex-wrap gap-2">
          {technical.map((skill, index) => (
            <SkillTag key={index} skill={skill} />
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Tools & Soft Skills</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {tools.map((skill, index) => (
            <SkillTag key={index} skill={skill} />
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {soft.map((skill, index) => (
            <SkillTag key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
});

export default function ResumePage() {
  return (
    <main className="container max-w-4xl mx-auto px-6 py-12">
      <div className="relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-400/5 via-emerald-500/5 to-background rounded-3xl" />

        {/* Content */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4 mb-12"
          >
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              Resume
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 mx-auto rounded-full" />

            {/* Contact Info */}
            <div className="text-muted-foreground">
              <p>{resumeData.contact.email}</p>
              <p>{resumeData.contact.location}</p>
            </div>

            {/* Download Resume Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/images/JOHN-NATHANIEL-MARQUEZ-RESUME.pdf"
              download
              className={cn(
                "inline-flex items-center gap-2 px-6 py-3 mt-4",
                "rounded-lg font-medium",
                "glass hover:glass-hover",
                "border border-emerald-500/20",
                "hover:border-emerald-500/40 transition-all duration-200"
              )}
            >
              <Download className="w-4 h-4" />
              Download PDF Version
            </motion.a>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-12"
          >
            {/* Experience Section */}
            <motion.section variants={item} className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                Experience
              </h2>
              <div className="space-y-6">
                {resumeData.experience.map((exp, index) => (
                  <ExperienceItem key={index} experience={exp} />
                ))}
              </div>
            </motion.section>

            {/* Education Section */}
            <motion.section variants={item} className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                Education
              </h2>
              {resumeData.education.map((edu, index) => (
                <EducationItem key={index} education={edu} />
              ))}
            </motion.section>

            {/* Skills Section */}
            <motion.section variants={item} className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                Skills
              </h2>
              <SkillsSection
                technical={resumeData.skills.technical}
                tools={resumeData.skills.tools}
                soft={resumeData.skills.soft}
              />
            </motion.section>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
