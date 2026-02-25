# Plumber Image Assets

This directory contains placeholder image files for the ADP Desentupidora website. These are minimal placeholder files that should be replaced with optimized, high-quality images.

## Current Placeholder Files

The following placeholder files exist:

- `hero-poster.jpg` / `hero-poster.webp` - Hero section background poster image (desktop)
- `hero-poster@mobile.jpg` / `hero-poster@mobile.webp` - Hero section poster for mobile devices
- `plumber-1.jpg` / `plumber-1.webp` - Plumber team member photo 1 (desktop)
- `plumber-1@mobile.jpg` / `plumber-1@mobile.webp` - Plumber team member photo 1 (mobile)
- `plumber-2.jpg` / `plumber-2.webp` - Plumber team member photo 2 (desktop)
- `plumber-2@mobile.jpg` / `plumber-2@mobile.webp` - Plumber team member photo 2 (mobile)
- `drain-1.jpg` / `drain-1.webp` - Drain/pipe service photo (desktop)
- `drain-1@mobile.jpg` / `drain-1@mobile.webp` - Drain/pipe service photo (mobile)
- `sink-1.jpg` / `sink-1.webp` - Sink service photo (desktop)
- `sink-1@mobile.jpg` / `sink-1@mobile.webp` - Sink service photo (mobile)

## Image Specifications

### Desktop Images
- **Format**: JPG and WebP
- **Target Quality**: 80-85% for JPG/WebP
- **Max File Size**: 200KB per image
- **Recommended Dimensions**: 1920x1080 or appropriate aspect ratio

### Mobile Images (@mobile variants)
- **Format**: JPG and WebP
- **Target Quality**: 80-85% for JPG/WebP
- **Max File Size**: 100KB per image
- **Recommended Dimensions**: 800x600 or smaller, appropriate for mobile screens

## How to Replace Placeholder Images

1. **Prepare Your Images**:
   - Take or acquire high-quality photos of plumbers, equipment, and services
   - Ensure images are well-lit, professional, and on-brand

2. **Optimize Images**:
   - Use tools like:
     - [ImageOptim](https://imageoptim.com/) (Mac)
     - [Squoosh](https://squoosh.app/) (Web-based)
     - [Sharp](https://sharp.pixelplumbing.com/) (Node.js CLI)
     - [cwebp](https://developers.google.com/speed/webp/docs/cwebp) for WebP conversion
   
3. **Create Responsive Variants**:
   ```bash
   # Example using ImageMagick
   convert original.jpg -resize 1920x1080 -quality 85 hero-poster.jpg
   convert original.jpg -resize 800x600 -quality 85 hero-poster@mobile.jpg
   
   # Example using cwebp
   cwebp -q 85 hero-poster.jpg -o hero-poster.webp
   cwebp -q 85 hero-poster@mobile.jpg -o hero-poster@mobile.webp
   ```

4. **Replace Files**:
   - Replace the placeholder files with your optimized images
   - Keep the same naming convention
   - Maintain both JPG and WebP versions for better browser support

5. **Test**:
   - Test the images on different devices and screen sizes
   - Verify file sizes are within recommended limits
   - Check that WebP fallback to JPG works correctly

## Image Optimization Best Practices

- **WebP First**: Always provide WebP versions for better compression
- **Progressive JPGs**: Use progressive encoding for faster perceived loading
- **Lazy Loading**: Images should be lazy-loaded when appropriate
- **Responsive Images**: Use `<picture>` element with `srcset` for optimal delivery
- **Alt Text**: Always include descriptive alt text for accessibility
- **File Names**: Use descriptive, SEO-friendly file names

## Notes

- These are **placeholder files** and are not suitable for production use
- The current files are minimal binary files designed to keep the repository size small
- Replace these with actual optimized images before deploying to production
- Consider using a CDN for serving images in production
