"use client";

import { useState, useCallback } from "react";

interface FeedInteractions {
  likes: Record<string, boolean>;
  bookmarks: Record<string, boolean>;
  likeCounts: Record<string, number>;
}

export function useFeedInteractions() {
  const [interactions, setInteractions] = useState<FeedInteractions>({
    likes: {},
    bookmarks: {},
    likeCounts: {},
  });

  const initializeLikeCount = useCallback((postId: string) => {
    setInteractions(prev => ({
      ...prev,
      likeCounts: {
        ...prev.likeCounts,
        [postId]: prev.likeCounts[postId] || Math.floor(Math.random() * 50) + 10,
      },
    }));
  }, []);

  const toggleLike = useCallback((postId: string) => {
    setInteractions(prev => {
      const currentlyLiked = prev.likes[postId] || false;
      const currentCount = prev.likeCounts[postId] || 0;
      
      return {
        ...prev,
        likes: {
          ...prev.likes,
          [postId]: !currentlyLiked,
        },
        likeCounts: {
          ...prev.likeCounts,
          [postId]: currentlyLiked ? currentCount - 1 : currentCount + 1,
        },
      };
    });
  }, []);

  const toggleBookmark = useCallback((postId: string) => {
    setInteractions(prev => ({
      ...prev,
      bookmarks: {
        ...prev.bookmarks,
        [postId]: !prev.bookmarks[postId],
      },
    }));
  }, []);

  const isLiked = useCallback((postId: string) => {
    return interactions.likes[postId] || false;
  }, [interactions.likes]);

  const isBookmarked = useCallback((postId: string) => {
    return interactions.bookmarks[postId] || false;
  }, [interactions.bookmarks]);

  const getLikeCount = useCallback((postId: string) => {
    return interactions.likeCounts[postId] || 0;
  }, [interactions.likeCounts]);

  return {
    initializeLikeCount,
    toggleLike,
    toggleBookmark,
    isLiked,
    isBookmarked,
    getLikeCount,
  };
}