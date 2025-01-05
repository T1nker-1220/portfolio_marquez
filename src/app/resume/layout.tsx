import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | John Nathaniel Marquez",
  description: "Professional resume and qualifications of John Nathaniel Marquez, Full Stack Developer.",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 