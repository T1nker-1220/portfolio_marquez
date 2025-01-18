"use client";

import { PageTransition } from "@/components/page-transition";

export default function ResumeTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageTransition>{children}</PageTransition>;
}
