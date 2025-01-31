'use client';

import { Button } from '@/components/ui/button';
import { useMediaQuery } from '@/hooks/use-media-query';
import { initInstallPrompt, isPWAInstallable, showInstallPrompt } from '@/utils/pwa';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

export function InstallPrompt() {
  const [isInstallable, setIsInstallable] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isIOS = useMediaQuery('(iPhone|iPod|iPad)/');
  const isAndroid = useMediaQuery('Android');

  useEffect(() => {
    const checkInstallable = () => {
      setIsInstallable(isPWAInstallable());
    };

    initInstallPrompt();
    checkInstallable();

    window.addEventListener('appinstalled', () => {
      setIsInstallable(false);
    });

    // Check installable state on visibility change
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        checkInstallable();
      }
    });

    return () => {
      window.removeEventListener('appinstalled', checkInstallable);
      document.removeEventListener('visibilitychange', checkInstallable);
    };
  }, []);

  if (!isInstallable || isDismissed) return null;

  const getDeviceSpecificText = () => {
    if (isIOS) {
      return {
        title: 'Install Portfolio App',
        description: 'Tap the share button and select "Add to Home Screen"'
      };
    }
    if (isAndroid) {
      return {
        title: 'Install Portfolio App',
        description: 'Tap "Install" to add the app to your home screen'
      };
    }
    return {
      title: 'Install Portfolio App',
      description: 'Add to your home screen for quick access'
    };
  };

  const { title, description } = getDeviceSpecificText();

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-labelledby="install-prompt-title"
        aria-describedby="install-prompt-description"
        className={`
          fixed z-50
          ${isMobile ? 'bottom-0 left-0 right-0 rounded-t-xl' : 'bottom-4 right-4 rounded-lg w-auto max-w-sm'}
          p-4 bg-background/80 backdrop-blur-sm border shadow-lg
        `}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        <div className="flex flex-col gap-4 relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 -mt-2 -mr-2 hover:bg-background/50"
            onClick={() => setIsDismissed(true)}
            aria-label="Close installation prompt"
          >
            <X className="h-4 w-4" />
          </Button>
          <div className="text-sm pr-6">
            <p id="install-prompt-title" className="font-semibold">
              {title}
            </p>
            <p id="install-prompt-description" className="text-muted-foreground">
              {description}
            </p>
          </div>
          {!isIOS && (
            <Button
              variant="default"
              className="w-full"
              onClick={async () => {
                const installed = await showInstallPrompt();
                if (installed) {
                  setIsInstallable(false);
                }
              }}
            >
              Install
            </Button>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
