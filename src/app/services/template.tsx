"use client";

import { PageTransition } from "@/components/page-transition";

export default function ServicesTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageTransition>{children}</PageTransition>;
}
