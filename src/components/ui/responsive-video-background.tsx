
"use client";

import { useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

/**
 * Responsive image background component using custom desktop and mobile images.
 * 
 * Displays different background images based on device type for optimal viewing experience.
 * 
 * @component
 * @returns {JSX.Element} Responsive image background with device-specific images
 * 
 * @previous: Used static grey gradient background
 * @update 2025-01-27 Changed to use custom desktop.png and mobile.png images as backgrounds
 */
export default function ResponsiveVideoBackground() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [hasInitialized, setHasInitialized] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Initialize after mount to prevent hydration issues
  useEffect(() => {
    const timer = setTimeout(() => setHasInitialized(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Preload images for better performance
  useEffect(() => {
    const preloadImages = () => {
      const desktopImg = new Image();
      const mobileImg = new Image();
      
      let loadedCount = 0;
      const onLoad = () => {
        loadedCount++;
        if (loadedCount === 2) {
          setIsImageLoaded(true);
        }
      };

      desktopImg.onload = onLoad;
      mobileImg.onload = onLoad;
      desktopImg.onerror = onLoad; // Count errors as loaded to prevent hanging
      mobileImg.onerror = onLoad;
      
      desktopImg.src = "/images/desktop.png";
      mobileImg.src = "/images/mobile.png";
    };

    if (hasInitialized) {
      preloadImages();
    }
  }, [hasInitialized]);

  return (
    <>
      {/* Desktop Background Image */}
      <div
        className={`fixed inset-0 z-0 transition-opacity duration-1000 ease-out ${
          hasInitialized && !isMobile && isImageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: 'url(/images/desktop.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          visibility: hasInitialized && !isMobile ? 'visible' : 'hidden',
        }}
      />

      {/* Mobile Background Image */}
      <div
        className={`fixed inset-0 z-0 transition-opacity duration-1000 ease-out ${
          hasInitialized && isMobile && isImageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: 'url(/images/mobile.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          visibility: hasInitialized && isMobile ? 'visible' : 'hidden',
        }}
      />

      {/* Loading placeholder - shows while images are loading */}
      {(!hasInitialized || !isImageLoaded) && (
        <div 
          className={`fixed inset-0 z-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-opacity duration-1000 ease-out ${
            hasInitialized && isImageLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        />
      )}

      {/* Optional overlay for better content readability */}
      <div className="fixed inset-0 z-10 bg-black/10 dark:bg-black/20" />
    </>
  );
} 