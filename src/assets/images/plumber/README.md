# Plumber Image Assets

This directory contains placeholder image files for the plumber/drain service website.

## Files

- `hero-poster.jpg` / `hero-poster.webp` - Hero section background image
- `hero-poster@mobile.jpg` / `hero-poster@mobile.webp` - Mobile-optimized hero background
- `plumber-1.jpg` / `plumber-1.webp` - Plumber service image 1
- `plumber-1@mobile.jpg` / `plumber-1@mobile.webp` - Mobile-optimized version
- `plumber-2.jpg` / `plumber-2.webp` - Plumber service image 2
- `plumber-2@mobile.jpg` / `plumber-2@mobile.webp` - Mobile-optimized version
- `drain-1.jpg` / `drain-1.webp` - Drain cleaning service image
- `drain-1@mobile.jpg` / `drain-1@mobile.webp` - Mobile-optimized version
- `sink-1.jpg` / `sink-1.webp` - Sink repair service image
- `sink-1@mobile.jpg` / `sink-1@mobile.webp` - Mobile-optimized version

## Current State

⚠️ **These are minimal placeholder files** - They are tiny 1x1 pixel images meant to establish the file structure and keep the repository lightweight.

## How to Replace with Final Assets

### Image Optimization Guidelines

Before replacing these placeholders with your final images:

1. **Resize images appropriately:**
   - Desktop versions: 1920px width maximum
   - Mobile versions (@mobile): 768px width maximum
   - Maintain aspect ratios (typically 16:9 for hero, 4:3 for service images)

2. **Optimize JPEG files:**
   - Use quality setting of 80-85%
   - Use progressive JPEG encoding
   - Remove EXIF data
   - Tools: ImageOptim, Squoosh.app, or `jpegoptim`

3. **Create WebP versions:**
   - WebP provides ~30% better compression than JPEG
   - Use quality setting of 80-85%
   - Tools: Squoosh.app, `cwebp` command-line tool, or online converters
   - Command example: `cwebp -q 85 input.jpg -o output.webp`

4. **Create mobile-optimized versions:**
   - Resize to smaller dimensions (768px width)
   - Apply same compression settings
   - Add `@mobile` suffix before the extension
   - Example: `hero-poster@mobile.jpg`, `hero-poster@mobile.webp`

### Recommended Tools

- **Online:** [Squoosh.app](https://squoosh.app) - Free, browser-based image optimizer
- **Mac:** ImageOptim - Drag-and-drop image optimization
- **Command Line:** 
  - `jpegoptim` for JPEG optimization
  - `cwebp` for WebP conversion (from libwebp package)

### Example Workflow

```bash
# Optimize JPEG
jpegoptim --size=200k --strip-all hero-poster.jpg

# Create WebP version
cwebp -q 85 hero-poster.jpg -o hero-poster.webp

# Resize for mobile
convert hero-poster.jpg -resize 768x hero-poster@mobile.jpg
cwebp -q 85 hero-poster@mobile.jpg -o hero-poster@mobile.webp
```

### File Size Targets

- Desktop JPEG: 100-300 KB per image
- Desktop WebP: 70-200 KB per image
- Mobile JPEG: 30-100 KB per image
- Mobile WebP: 20-70 KB per image

## Notes

- The Hero component will automatically use WebP when supported, falling back to JPEG
- Mobile versions are served using responsive image techniques
- Ensure all final images have appropriate alt text in the component code
