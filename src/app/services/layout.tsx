import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Services | Nathaniel Marquez",
  description: "Professional web development and design services offered by Nathaniel Marquez",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 