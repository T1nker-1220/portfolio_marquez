/**
 * Suppresses Next.js image 404 errors for projects with missing images
 * These images will fallback to the logo via onError handlers
 */

if (typeof window !== 'undefined') {
  const originalConsoleError = console.error;
  
  // List of known missing images that will fallback to logo
  const knownMissingImages = [
    'supabase-postgres-pcrental-mcp.png',
    'minrights-pipeline.png',
    'aws-postgres-mcp-server.png',
    'gabe-gmb-scraper.png',
    'mojogift.png',
    'minrights-chatbot.png',
    'minrights-regulatory-platform.png',
    'myprotein-scraper.png'
  ];

  console.error = (...args: any[]) => {
    // Convert all arguments to strings for checking
    const errorMessage = args.join(' ');
    
    // Check if this is a Next.js image 404 error for a known missing image
    const isKnownMissingImage = knownMissingImages.some(imageName => 
      errorMessage.includes(imageName) && 
      (errorMessage.includes('404') || errorMessage.includes("isn't a valid image"))
    );
    
    // Suppress known missing image errors, let all other errors through
    if (!isKnownMissingImage) {
      originalConsoleError.apply(console, args);
    }
  };
}

export {};
