# Plumber Images Directory

This directory contains placeholder images for the ADP Desentupidora website.

## Current Files

### Placeholder Images (SVG format)
- `hero-poster.svg` - Hero section poster image (1920x1080)
- `plumber-1.svg` - Plumber service image 1 (1920x1080)
- `plumber-2.svg` - Plumber service image 2 (1920x1080)
- `drain-1.svg` - Drain cleaning image (1920x1080)
- `sink-1.svg` - Sink repair image (1920x1080)

### Mobile Versions
Each image has a mobile version with `@mobile` suffix:
- `hero-poster@mobile.svg` (800x600)
- `plumber-1@mobile.svg` (800x600)
- `plumber-2@mobile.svg` (800x600)
- `drain-1@mobile.svg` (800x600)
- `sink-1@mobile.svg` (800x600)

### WebP Versions
Files with `.webp.placeholder` extension are placeholders for actual WebP images.

## How to Replace with Production Images

### 1. Prepare Your Images

**Desktop Images (Recommended: 1920x1080 or 1920x1200)**
- Use high-quality JPG or PNG images
- Optimize file size (target: < 500KB per image)
- Maintain aspect ratio 16:9 or similar

**Mobile Images (Recommended: 800x600 or 640x480)**
- Create mobile-optimized versions
- Further reduce file size (target: < 200KB per image)
- Focus on essential content

### 2. Convert to WebP Format

Use tools like:
- **Online**: https://squoosh.app/
- **Command Line**: `cwebp input.jpg -q 80 -o output.webp`
- **ImageMagick**: `convert input.jpg -quality 80 output.webp`

### 3. File Naming Convention

Replace placeholder files with optimized images using the same naming:
```
hero-poster.jpg          → Original JPG (1920x1080)
hero-poster.webp         → WebP version (1920x1080)
hero-poster@mobile.jpg   → Mobile JPG (800x600)
hero-poster@mobile.webp  → Mobile WebP (800x600)
```

### 4. Optimization Tips

**For JPG:**
- Use quality 85-90 for hero images
- Use quality 75-85 for other images
- Apply progressive encoding

**For WebP:**
- Use quality 75-85 (WebP is more efficient)
- Enable lossless for images with text
- Test on various devices

**For Mobile:**
- Reduce dimensions: max 800px width
- Lower quality slightly (70-80)
- Crop to focus on important areas

### 5. Testing

After replacing images:
1. Test loading speed on mobile networks
2. Check visual quality on different screens
3. Verify fallback to JPG for unsupported browsers
4. Validate responsive behavior

## Recommended Tools

- **Squoosh** (https://squoosh.app/) - Online image optimization
- **ImageOptim** (Mac) - Batch image optimization
- **TinyPNG** (https://tinypng.com/) - PNG/JPG compression
- **cwebp** - WebP conversion CLI tool
- **Sharp** (Node.js) - Programmatic image processing

## Image Guidelines

- **Format**: JPG for photos, WebP for better compression
- **Size**: Desktop < 500KB, Mobile < 200KB
- **Dimensions**: Match the placeholders or use higher resolution
- **Alt Text**: Always provide descriptive alt text in components
- **Lazy Loading**: Use for below-the-fold images
- **Responsive**: Provide multiple sizes for different viewports
