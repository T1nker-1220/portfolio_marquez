import { Metadata } from "next";
import { type PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with me. Let's discuss your project or any opportunities.",
};

export default function ContactLayout({ children }: PropsWithChildren) {
  return <>{children}</>;
}
