export interface AnalyticsEvent {
  event_category: string;
  event_label: string;
  value?: number;
}

export type TrackingEvents =
  // PWA Events
  | 'pwa_installed'
  | 'pwa_install_prompt'
  | 'pwa_install_prompt_ready'
  | 'pwa_update'
  | 'pwa_activated'
  | 'pwa_error'
  | 'pwa_registered'
  | 'pwa_check_update'
  // Page Events
  | 'page_view'
  | 'navigation'
  | 'theme_change'
  // Content Events
  | 'project_view'
  | 'contact_form_submit'
  | 'resume_download'
  | 'external_link_click';

export interface CustomAnalytics {
  trackEvent: (
    eventName: TrackingEvents,
    properties?: AnalyticsEvent
  ) => void;
}
