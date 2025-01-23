import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Professional web development and design services offered by Nathaniel Marquez",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
