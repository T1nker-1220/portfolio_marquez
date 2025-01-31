import { promises as fs } from 'fs';
import { dirname, join } from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const SCREENSHOTS_DIR = join(dirname(__dirname), 'public', 'screenshots');

async function generateScreenshots() {
  try {
    // Ensure screenshots directory exists
    await fs.mkdir(SCREENSHOTS_DIR, { recursive: true });

    // Generate desktop screenshot (1920x1080)
    const desktopWidth = 1920;
    const desktopHeight = 1080;

    await sharp({
      create: {
        width: desktopWidth,
        height: desktopHeight,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 1 }
      }
    })
      .composite([
        {
          input: Buffer.from(`
          <svg width="${desktopWidth}" height="${desktopHeight}">
            <rect width="100%" height="100%" fill="#000000"/>
            <text x="50%" y="50%" font-family="Arial" font-size="48" fill="#00A67E" text-anchor="middle">
              T1NKER Portfolio Desktop Screenshot
            </text>
          </svg>`
          ),
          top: 0,
          left: 0,
        }
      ])
      .png()
      .toFile(join(SCREENSHOTS_DIR, 'desktop.png'));

    // Generate mobile screenshot (1080x1920)
    const mobileWidth = 1080;
    const mobileHeight = 1920;

    await sharp({
      create: {
        width: mobileWidth,
        height: mobileHeight,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 1 }
      }
    })
      .composite([
        {
          input: Buffer.from(`
          <svg width="${mobileWidth}" height="${mobileHeight}">
            <rect width="100%" height="100%" fill="#000000"/>
            <text x="50%" y="50%" font-family="Arial" font-size="48" fill="#00A67E" text-anchor="middle">
              T1NKER Portfolio Mobile Screenshot
            </text>
          </svg>`
          ),
          top: 0,
          left: 0,
        }
      ])
      .png()
      .toFile(join(SCREENSHOTS_DIR, 'mobile.png'));

    console.log('Screenshots generated successfully!');
  } catch (error) {
    console.error('Error generating screenshots:', error);
    process.exit(1);
  }
}

generateScreenshots();
