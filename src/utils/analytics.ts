import { AnalyticsEvent, TrackingEvents } from '@/types/analytics';

export const trackEvent = (
  eventName: TrackingEvents,
  properties?: AnalyticsEvent
) => {
  // Track with Vercel Analytics
  if (window.va) {
    window.va.track(eventName, properties);
  }

  // Track with Google Analytics if available
  if (window.gtag) {
    window.gtag('event', eventName, properties);
  }

  // Log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', eventName, properties);
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
