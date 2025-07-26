
"use client";

import { useEffect, useState, useCallback } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function ResponsiveVideoBackground() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isDesktopLoaded, setIsDesktopLoaded] = useState(false);
  const [isMobileLoaded, setIsMobileLoaded] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);

  // Initialize after mount to prevent hydration issues
  useEffect(() => {
    const timer = setTimeout(() => setHasInitialized(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleDesktopLoad = useCallback(() => {
    setIsDesktopLoaded(true);
  }, []);

  const handleMobileLoad = useCallback(() => {
    setIsMobileLoaded(true);
  }, []);

  const isLoaded = isMobile ? isMobileLoaded : isDesktopLoaded;

  return (
    <>
      {/* Desktop Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onLoadedData={handleDesktopLoad}
        onCanPlay={handleDesktopLoad}
        className={`video-background video-desktop fixed inset-0 w-full h-full object-cover z-0 transition-opacity duration-700 ease-out ${
          hasInitialized && !isMobile ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          visibility: hasInitialized && !isMobile ? 'visible' : 'hidden',
          willChange: 'opacity',
        }}
      >
        <source src="/images/desktop-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Mobile Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onLoadedData={handleMobileLoad}
        onCanPlay={handleMobileLoad}
        className={`video-background video-mobile fixed inset-0 w-full h-full object-cover z-0 transition-opacity duration-700 ease-out ${
          hasInitialized && isMobile ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          visibility: hasInitialized && isMobile ? 'visible' : 'hidden',
          willChange: 'opacity',
        }}
      >
        <source src="/images/mobile-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Loading placeholder with smooth fade out */}
      {(!hasInitialized || !isLoaded) && (
        <div 
          className={`fixed inset-0 z-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 transition-opacity duration-1000 ease-out ${
            hasInitialized && isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        />
      )}
    </>
  );
} 