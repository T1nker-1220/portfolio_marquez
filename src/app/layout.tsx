import { MainLayout } from "@/components/layout/main-layout";
import { fontHeading, fontMono, fontSans } from "@/lib/fonts";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { type PropsWithChildren } from "react";

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-marquez.vercel.app'),
  title: {
    default: "Home | Front-End | Marquez",
    template: "%s | Front-End | Marquez",
  },
  description:
    "A passionate front-end developer with expertise in modern web technologies. Portfolio showcasing web development projects, skills, and experience.",
  applicationName: "John Nathaniel Marquez Portfolio",
  generator: "Next.js",
  keywords: [
    "John Nathaniel Marquez",
    "Nathaniel",
    "Web Developer",
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
    "Projects",
    "Web Development",
    "Frontend Development",
    "React Development",
    "TypeScript Development",
  ],
  authors: [{ name: "John Nathaniel Marquez", url: "https://portfolio-marquez.vercel.app" }],
  creator: "John Nathaniel Marquez",
  publisher: "John Nathaniel Marquez",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification=QlbrsGI33bBt54ehZOaZYRxeAxnpkgnfu650XO3RPb0',
  },
  alternates: {
    canonical: 'https://portfolio-marquez.vercel.app',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-marquez.vercel.app",
    title: "John Nathaniel Marquez | Front-End Developer Portfolio",
    description:
      "Front-end developer specializing in modern web technologies. Explore my journey, projects, and expertise in web development.",
    siteName: "John Nathaniel Marquez Portfolio",
    images: [
      {
        url: "https://portfolio-marquez.vercel.app/images/logo.png",
        width: 1200,
        height: 630,
        alt: "John Nathaniel Marquez Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Nathaniel Marquez | Front-End Developer Portfolio",
    description:
      "Front-end developer specializing in modern web technologies. Explore my journey, projects, and expertise in web development.",
    images: ["https://portfolio-marquez.vercel.app/images/logo.png"],
    creator: "@your-twitter-handle",
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
