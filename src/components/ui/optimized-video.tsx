"use client";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface OptimizedVideoProps {
  src: string;
  poster: string;
  className?: string;
  alt: string;
}

export function OptimizedVideo({ src, poster, className, alt }: OptimizedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const playAttemptRef = useRef<NodeJS.Timeout>();

  // Handle video loading and autoplay
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Function to attempt playback
    const attemptPlay = async (): Promise<void> => {
      try {
        video.muted = true;
        video.playsInline = true;
        await video.play();
        setIsPlaying(true);
      } catch (err) {
        if (err instanceof Error && err.name !== 'AbortError') {
          console.error(`Playback failed: ${src}`, err);
        }
        // Retry playback after a short delay
        playAttemptRef.current = setTimeout(attemptPlay, 1000);
      }
    };

    const handleLoadedMetadata = () => {
      console.log(`Video loaded: ${src}`);
      setIsLoaded(true);
      if (!prefersReducedMotion) {
        attemptPlay();
      }
    };

    const handleVisibilityChange = () => {
      if (!prefersReducedMotion) {
        if (document.hidden) {
          video.pause();
        } else {
          attemptPlay();
        }
      }
    };

    const handlePlay = () => {
      console.log(`Playing: ${src}`);
      setIsPlaying(true);
    };

    const handlePause = () => {
      console.log(`Paused: ${src}`);
      setIsPlaying(false);
      // Attempt to resume playback if not manually paused
      if (!prefersReducedMotion && document.visibilityState === 'visible') {
        playAttemptRef.current = setTimeout(attemptPlay, 1000);
      }
    };

    const handleError = (e: Event) => {
      const videoElement = e.target as HTMLVideoElement;
      console.error(`Video error: ${src}`, videoElement.error);
      setError(`Failed to load video: ${videoElement.error?.message || 'Unknown error'}`);
      setIsLoaded(true);
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("error", handleError);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Start loading the video
    video.load();

    return () => {
      // Clear any pending playback attempts
      if (playAttemptRef.current) {
        clearTimeout(playAttemptRef.current);
      }
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("error", handleError);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [prefersReducedMotion, src]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.muted = true;
      video.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.error(`Manual play failed: ${src}`, err);
        setIsPlaying(false);
      });
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  if (error) {
    // Fallback to poster image if video fails to load
    return (
      <div
        className={cn("relative overflow-hidden", className)}
        role="img"
        aria-label={alt}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={poster}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className={cn("relative group overflow-hidden", className)}>
      <video
        ref={videoRef}
        poster={poster}
        loop
        muted
        playsInline
        autoPlay
        preload="auto"
        className="w-full h-full object-cover"
        aria-label={alt}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="absolute bottom-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-background/90"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? (
          <Pause className="w-4 h-4 text-foreground" />
        ) : (
          <Play className="w-4 h-4 text-foreground" />
        )}
      </button>

      {/* Loading State */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted/50 backdrop-blur-sm flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
