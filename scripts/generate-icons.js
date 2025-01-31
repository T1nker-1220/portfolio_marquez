import { promises as fs } from 'fs';
import { join } from 'path';
import sharp from 'sharp';

const ICONS_DIR = join(process.cwd(), 'public', 'icons');
const SOURCE_PNG = join(ICONS_DIR, 'source', 'original.png');

const ICON_SIZES = [
  16, 32, 48, 72, 96, 144, 180, 192, 512
];

async function generateIcons() {
  try {
    // Ensure the icons directory exists
    await fs.mkdir(ICONS_DIR, { recursive: true });

    // Generate regular icons
    for (const size of ICON_SIZES) {
      const outputName = size === 180 ? 'apple-touch-icon.png' : `icon-${size}x${size}.png`;
      await sharp(SOURCE_PNG)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 },
          withoutEnlargement: false,
          kernel: 'lanczos3' // High-quality resampling
        })
        .png({
          quality: 100,
          compressionLevel: 9,
          palette: true // Better color handling
        })
        .toFile(join(ICONS_DIR, outputName));

      // Generate maskable icons for PWA (only for 192 and 512)
      if (size === 192 || size === 512) {
        const padding = Math.floor(size * 0.1); // 10% padding
        const innerSize = size - (padding * 2);

        await sharp(SOURCE_PNG)
          .resize(innerSize, innerSize, {
            fit: 'contain',
            background: { r: 0, g: 0, b: 0, alpha: 0 },
            withoutEnlargement: false,
            kernel: 'lanczos3'
          })
          .extend({
            top: padding,
            bottom: padding,
            left: padding,
            right: padding,
            background: { r: 0, g: 133, b: 79, alpha: 1 } // #00854F
          })
          .png({
            quality: 100,
            compressionLevel: 9,
            palette: true
          })
          .toFile(join(ICONS_DIR, `icon-${size}x${size}-maskable.png`));
      }
    }

    // Generate favicon.ico (multi-size)
    const favSizes = [16, 32];
    const favBuffers = await Promise.all(
      favSizes.map(size =>
        sharp(SOURCE_PNG)
          .resize(size, size, {
            fit: 'contain',
            background: { r: 0, g: 0, b: 0, alpha: 0 },
            withoutEnlargement: false,
            kernel: 'lanczos3'
          })
          .png({
            quality: 100,
            compressionLevel: 9,
            palette: true
          })
          .toBuffer()
      )
    );

    // Use the first size as favicon-16x16.png and second as favicon-32x32.png
    await sharp(favBuffers[0]).toFile(join(ICONS_DIR, 'favicon-16x16.png'));
    await sharp(favBuffers[1]).toFile(join(ICONS_DIR, 'favicon-32x32.png'));

    console.log('✅ All icons generated successfully with high quality!');
  } catch (error) {
    console.error('Error generating icons:', error);
    process.exit(1);
  }
}

generateIcons();
