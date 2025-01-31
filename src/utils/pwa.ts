import { trackEvent } from '@/utils/analytics';
import { Workbox } from 'workbox-window';

declare global {
  interface Window {
    workbox: typeof Workbox;
    swRegistration: ServiceWorkerRegistration | null;
  }
}

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}

export const registerServiceWorker = async () => {
  if (
    typeof window !== 'undefined' &&
    'serviceWorker' in navigator &&
    window.workbox !== undefined
  ) {
    try {
      const wb = new Workbox('/sw.js');

      // Add update found event
      wb.addEventListener('waiting', () => {
        if (confirm('New content is available! Click OK to update.')) {
          // Send skip waiting event to service worker
          wb.messageSkipWaiting();
          trackEvent('pwa_update', {
            event_category: 'PWA',
            event_label: 'Update Accepted'
          });
        }
      });

      // Add controlling event
      wb.addEventListener('controlling', () => {
        window.location.reload();
      });

      // Add success handler
      wb.addEventListener('activated', () => {
        console.log('Service Worker activated');
        trackEvent('pwa_activated', {
          event_category: 'PWA',
          event_label: 'Service Worker Activated'
        });
      });

      // Add error handler
      wb.addEventListener('redundant', () => {
        console.error('Service Worker became redundant');
        trackEvent('pwa_error', {
          event_category: 'PWA',
          event_label: 'Service Worker Redundant'
        });
      });

      // Register the service worker after adding listeners
      const registration = await wb.register();
      window.swRegistration = registration ?? null;

      trackEvent('pwa_registered', {
        event_category: 'PWA',
        event_label: 'Service Worker Registered'
      });

      return registration;
    } catch (error) {
      console.error('Service Worker registration failed:', error);
      trackEvent('pwa_error', {
        event_category: 'PWA',
        event_label: 'Registration Failed'
      });
    }
  }
  return null;
};

export const checkForUpdates = async () => {
  if (window.swRegistration) {
    try {
      await window.swRegistration.update();
      trackEvent('pwa_check_update', {
        event_category: 'PWA',
        event_label: 'Update Check'
      });
    } catch (error) {
      console.error('Failed to check for updates:', error);
      trackEvent('pwa_error', {
        event_category: 'PWA',
        event_label: 'Update Check Failed'
      });
    }
  }
};

export const isPWAInstallable = () => {
  if (typeof window === 'undefined') return false;

  const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
  const isInWebAppiOS = 'standalone' in window.navigator &&
    (window.navigator as Navigator & { standalone?: boolean }).standalone === true;
  const isInstalled = isStandalone || isInWebAppiOS;

  return !isInstalled &&
    'serviceWorker' in navigator &&
    'BeforeInstallPromptEvent' in window;
};

let deferredPrompt: BeforeInstallPromptEvent | null = null;

export const initInstallPrompt = () => {
  if (typeof window === 'undefined') return;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    trackEvent('pwa_install_prompt_ready', {
      event_category: 'PWA',
      event_label: 'Install Prompt Available'
    });
  });

  // Handle installed event
  window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    trackEvent('pwa_installed', {
      event_category: 'PWA',
      event_label: 'Success'
    });
  });
};

export const showInstallPrompt = async () => {
  if (!deferredPrompt) return false;

  try {
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    deferredPrompt = null;

    trackEvent('pwa_install_prompt', {
      event_category: 'PWA',
      event_label: outcome
    });

    return outcome === 'accepted';
  } catch (error) {
    console.error('Error showing install prompt:', error);
    trackEvent('pwa_error', {
      event_category: 'PWA',
      event_label: 'Install Prompt Failed'
    });
    return false;
  }
};
