import { AnalyticsEvent, TrackingEvents } from '@/types/analytics';

export const trackEvent = (
  eventName: TrackingEvents,
  properties?: AnalyticsEvent
) => {
  if (typeof window === 'undefined') return;

  // Convert AnalyticsEvent to Record<string, unknown>
  const eventProperties: Record<string, unknown> = properties ? {
    event_category: properties.event_category,
    event_label: properties.event_label,
    ...(properties.value !== undefined && { value: properties.value })
  } : {};

  // Track with Vercel Analytics
  try {
    if (window.va && typeof window.va.track === 'function') {
      window.va.track(eventName, eventProperties);
    }
  } catch (error) {
    console.warn('[Analytics] Error tracking with Vercel Analytics:', error);
  }

  // Track with Google Analytics if available
  try {
    if (window.gtag && typeof window.gtag === 'function') {
      window.gtag('event', eventName, eventProperties);
    }
  } catch (error) {
    console.warn('[Analytics] Error tracking with Google Analytics:', error);
  }

  // Log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', eventName, eventProperties);
  }
};

// Declare analytics types for window
declare global {
  interface Window {
    va?: {
      track: (event: string, properties?: Record<string, unknown>) => void;
    };
    gtag?: (
      command: string,
      eventName: string,
      properties?: Record<string, unknown>
    ) => void;
  }
}
