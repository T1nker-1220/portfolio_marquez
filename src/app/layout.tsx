import { MainLayout } from "@/components/layout/main-layout";
import { InstallPrompt } from "@/components/pwa/InstallPrompt";
import { fontHeading, fontMono, fontSans } from "@/lib/fonts";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import { type PropsWithChildren } from "react";

export const viewport: Viewport = {
  themeColor: "#FF5733",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

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
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "JN Portfolio",
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
    title: "John Nathaniel Marquez | Front-End Developer Portfolio",
    description:
      "Front-end developer specializing in modern web technologies. Explore my journey, projects, and expertise in web development.",
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
    title: "John Nathaniel Marquez | Front-End Developer Portfolio",
    description:
      "Front-end developer specializing in modern web technologies. Explore my journey, projects, and expertise in web development.",
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
  jobTitle: 'Front-end Developer',
  knowsAbout: ['React', 'Next.js', 'TypeScript', 'Web Development'],
  image: 'https://portfolio-marquez.vercel.app/icon.png',
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
        <link rel="icon" href="/icons/favicon.ico" sizes="any" />
        <link rel="icon" href="/icons/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="JN Portfolio" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#FF5733" />
        <meta name="apple-touch-fullscreen" content="yes" />
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
          <MainLayout>
            {children}
            <InstallPrompt />
          </MainLayout>
          <Analytics />
        </ThemeProvider>
        <Script
          id="pwa-init"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
