import { MainLayout } from "@/components/layout/main-layout";
import { fontHeading, fontMono, fontSans } from "@/lib/fonts";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import { type PropsWithChildren } from "react";
import ResponsiveVideoBackground from "@/components/ui/responsive-video-background";
import { ToastProvider } from "@/components/ui/toast";

export const viewport: Viewport = {
  themeColor: "#FF5733",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-marquez.vercel.app'),
  title: {
    default: "Home | Full Stack | Marquez",
    template: "%s | Full Stack | Marquez",
  },
  description:
    "A passionate Full Stack developer with expertise in modern web technologies. Portfolio showcasing web development projects, skills, and experience.",
  applicationName: "John Nathaniel Marquez Portfolio",
  generator: "Next.js",
  keywords: [
    "John Nathaniel Marquez",
    "Nathaniel",
    "Web Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
    "Projects",
    "Web Development",
    "Frontend Development",
    "React Development",
    "TypeScript Development",
    "T1nker",
    "Vercel",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript",
    "HTML",
    "CSS",
  ],
  authors: [{ name: "John Nathaniel Marquez", url: "https://portfolio-marquez.vercel.app" }],
  creator: "John Nathaniel Marquez",
  publisher: "John Nathaniel Marquez",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/icons/favicon.ico' },
      { url: '/icons/icon.png', type: 'image/png' },
      { url: '/icons/android-chrome-192x192.png', type: 'image/png' },
      { url: '/icons/android-chrome-512x512.png', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/icons/icon.svg',
      },
    ],
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
    google: process.env.GOOGLE_VERIFICATION_TOKEN,
  },
  alternates: {
    canonical: 'https://portfolio-marquez.vercel.app',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-marquez.vercel.app",
    title: "John Nathaniel Marquez | Full Stack Developer Portfolio",
    description:
      "Full Stack developer specializing in modern web technologies. Explore my journey, projects, and expertise in web development.",
    siteName: "John Nathaniel Marquez Portfolio",
    images: [
      {
        url: "https://portfolio-marquez.vercel.app/icon.png",
        width: 512,
        height: 512,
        alt: "John Nathaniel Marquez Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Nathaniel Marquez | Full Stack Developer Portfolio",
    description:
      "Full Stack developer specializing in modern web technologies. Explore my journey, projects, and expertise in web development.",
    images: ["https://portfolio-marquez.vercel.app/icon.png"],
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
  jobTitle: 'Full Stack Developer',
  knowsAbout: ['React', 'Next.js', 'TypeScript', 'Web Development'],
  image: 'https://portfolio-marquez.vercel.app/icon.png',
  description: 'Full Stack developer specializing in React, Next.js, and TypeScript.'
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/icons/favicon.ico" sizes="any" />
        <link rel="icon" href="/icons/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <meta name="theme-color" content="#FF5733" />
      </head>
      <body
        className={`${fontSans.variable} ${fontMono.variable} ${fontHeading.variable} min-h-screen font-sans antialiased relative overflow-hidden`}
      >
                          {/* Responsive Video Background Component */}
         <ResponsiveVideoBackground />
        
                 {/* Subtle Overlay for Readability */}
         <div className="fixed inset-0 bg-black/20 dark:bg-black/40 z-10"></div>
        
        {/* Content Layer */}
        <div className="relative z-20 min-h-screen">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange={false}
          >
            <ToastProvider>
              <MainLayout>
                {children}
              </MainLayout>
            </ToastProvider>
            <Analytics debug={false} />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
