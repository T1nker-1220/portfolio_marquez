import { AnalyticsEvent, TrackingEvents } from '@/types/analytics';

export const trackEvent = (
  eventName: TrackingEvents,
  properties?: AnalyticsEvent
) => {
  // Convert AnalyticsEvent to Record<string, unknown>
  const eventProperties: Record<string, unknown> = properties ? {
    event_category: properties.event_category,
    event_label: properties.event_label,
    ...(properties.value !== undefined && { value: properties.value })
  } : {};

  // Track with Vercel Analytics
  if (window.va) {
    window.va.track(eventName, eventProperties);
  }

  // Track with Google Analytics if available
  if (window.gtag) {
    window.gtag('event', eventName, eventProperties);
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
