'use client';

import { Button } from '@/components/ui/button';
import { initInstallPrompt, isPWAInstallable, showInstallPrompt } from '@/utils/pwa';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

export function InstallPrompt() {
  const [isInstallable, setIsInstallable] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const checkInstallable = () => {
      setIsInstallable(isPWAInstallable());
    };

    initInstallPrompt();
    checkInstallable();

    window.addEventListener('appinstalled', () => {
      setIsInstallable(false);
    });

    return () => {
      window.removeEventListener('appinstalled', checkInstallable);
    };
  }, []);

  if (!isInstallable || isDismissed) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="install-prompt-title"
      aria-describedby="install-prompt-description"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-auto p-4 bg-background/80 backdrop-blur-sm border rounded-lg shadow-lg z-50"
    >
      <div className="flex flex-col md:flex-row items-center gap-4 relative pr-8">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-0 -mt-2 -mr-2"
          onClick={() => setIsDismissed(true)}
          aria-label="Close installation prompt"
        >
          <X className="h-4 w-4" />
        </Button>
        <div className="text-sm">
          <p id="install-prompt-title" className="font-semibold">Install Portfolio App</p>
          <p id="install-prompt-description" className="text-muted-foreground">Add to your home screen for quick access</p>
        </div>
        <Button
          variant="default"
          className="w-full md:w-auto"
          onClick={async () => {
            const installed = await showInstallPrompt();
            if (installed) {
              setIsInstallable(false);
            }
          }}
        >
          Install
        </Button>
      </div>
    </div>
  );
}
