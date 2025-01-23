import { MainLayout } from "@/components/layout/main-layout";
import { fontHeading, fontMono, fontSans } from "@/lib/fonts";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { type PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: {
    default: "Home | Front-End | Marquez",
    template: "%s | Front-End | Marquez",
  },
  description:
    "A passionate front-end developer with expertise in modern web technologies.",
  icons: {
    icon: [
      {
        url: "/images/logo.png",
        href: "/images/logo.png",
      },
    ],
    apple: {
      url: "/images/logo.png",
      href: "/images/logo.png",
    },
  },
  keywords: [
    "John Nathaniel Marquez",
    "Nathaniel",
    "Web Developer",
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
    "Projects",
  ],
  authors: [{ name: "John Nathaniel Marquez" }],
  creator: "John Nathaniel Marquez",
  publisher: "John Nathaniel Marquez",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL,
    title: "Portfolio | John Nathaniel Marquez",
    description:
      "Front-end developer specializing in modern web technologies. Explore my journey, projects, and expertise in web development.",
    siteName: "John Nathaniel Marquez Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | John Nathaniel Marquez",
    description:
      "Front-end developer specializing in modern web technologies. Explore my journey, projects, and expertise in web development.",
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'John Nathaniel Marquez',
  url: 'https://portfolio-marquez.vercel.app/',
  sameAs: [
    'https://github.com/T1nker-1220',
    'https://linkedin.com/in/your-profile'
  ],
  jobTitle: 'Front-end Developer',
  knowsAbout: ['React', 'Next.js', 'TypeScript', 'Web Development'],
  image: 'https://portfolio-marquez.vercel.app/images/logo.png',
  description: 'Front-end developer specializing in React, Next.js, and TypeScript.'
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${fontSans.variable} ${fontMono.variable} ${fontHeading.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <MainLayout>{children}</MainLayout>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
