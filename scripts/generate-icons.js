import { promises as fs } from 'fs';
import { dirname, join } from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ICONS_DIR = join(dirname(__dirname), 'public', 'icons');

// Icon sizes to generate
const ICON_SIZES = [
  512, // PWA icon
  192, // Android
  180, // Apple touch icon
  144, // Windows tile
  96,  // Android
  72,  // Android
  48,  // Android
  32,  // favicon
  16   // favicon
];

async function generateIcons() {
  try {
    // Ensure icons directory exists
    await fs.mkdir(ICONS_DIR, { recursive: true });

    // Read the base SVG
    const svgBuffer = await fs.readFile(join(ICONS_DIR, 'icon.svg'));

    // Generate regular icons
    for (const size of ICON_SIZES) {
      const fileName = size === 180 ? 'apple-touch-icon.png' : `icon-${size}x${size}.png`;
      if (size === 16 || size === 32) {
        await sharp(svgBuffer)
          .resize(size, size, {
            fit: 'contain',
            background: { r: 0, g: 0, b: 0, alpha: 1 }
          })
          .png()
          .toFile(join(ICONS_DIR, `favicon-${size}x${size}.png`));
      } else {
        await sharp(svgBuffer)
          .resize(size, size, {
            fit: 'contain',
            background: { r: 0, g: 0, b: 0, alpha: 1 }
          })
          .png()
          .toFile(join(ICONS_DIR, fileName));
      }
      console.log(`Generated ${fileName}`);
    }

    // Generate maskable icons with exact dimensions
    const maskableSizes = [512, 192];
    for (const size of maskableSizes) {
      // Calculate safe area (80% of the total size)
      const safeArea = Math.floor(size * 0.8);
      const padding = Math.floor((size - safeArea) / 2);

      await sharp(svgBuffer)
        .resize(safeArea, safeArea, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 1 }
        })
        .extend({
          top: padding,
          bottom: padding,
          left: padding,
          right: padding,
          background: { r: 0, g: 0, b: 0, alpha: 1 }
        })
        .png()
        .toFile(join(ICONS_DIR, `icon-${size}x${size}-maskable.png`));

      console.log(`Generated maskable icon ${size}x${size}`);
    }

    console.log('All icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
    process.exit(1);
  }
}

generateIcons();
