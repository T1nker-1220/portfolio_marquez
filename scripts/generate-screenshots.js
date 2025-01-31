import { promises as fs } from 'fs';
import { join } from 'path';
import sharp from 'sharp';

const SCREENSHOTS_DIR = join(process.cwd(), 'public', 'screenshots');

async function resizeScreenshots() {
  try {
    // Ensure screenshots directory exists
    await fs.mkdir(SCREENSHOTS_DIR, { recursive: true });

    // Resize existing desktop screenshot to exactly 1920x1080
    await sharp(join(SCREENSHOTS_DIR, 'desktop.png'))
      .resize(1920, 1080, {
        fit: 'fill', // This ensures exact dimensions while maintaining aspect ratio as much as possible
        withoutEnlargement: false,
        kernel: 'lanczos3' // High-quality resampling
      })
      .png({
        quality: 100,
        compressionLevel: 9
      })
      .toFile(join(SCREENSHOTS_DIR, 'desktop-resized.png'));

    // Resize existing mobile screenshot to exactly 1080x1920
    await sharp(join(SCREENSHOTS_DIR, 'mobile.png'))
      .resize(1080, 1920, {
        fit: 'fill', // This ensures exact dimensions while maintaining aspect ratio as much as possible
        withoutEnlargement: false,
        kernel: 'lanczos3' // High-quality resampling
      })
      .png({
        quality: 100,
        compressionLevel: 9
      })
      .toFile(join(SCREENSHOTS_DIR, 'mobile-resized.png'));

    // Replace original files with resized versions
    await fs.rename(
      join(SCREENSHOTS_DIR, 'desktop-resized.png'),
      join(SCREENSHOTS_DIR, 'desktop.png')
    );
    await fs.rename(
      join(SCREENSHOTS_DIR, 'mobile-resized.png'),
      join(SCREENSHOTS_DIR, 'mobile.png')
    );

    console.log('✅ Screenshots resized successfully to exact dimensions!');
    console.log('Desktop: 1920x1080');
    console.log('Mobile: 1080x1920');
  } catch (error) {
    console.error('Error resizing screenshots:', error);
    process.exit(1);
  }
}

resizeScreenshots();
