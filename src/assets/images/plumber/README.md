# Plumber Images Directory

This directory contains placeholder image files that should be replaced with optimized, production-ready images.

## Current Placeholder Files

- `hero-poster.jpg` - Hero section poster/fallback image
- `plumber-1.jpg` - Plumber professional image 1
- `plumber-2.jpg` - Plumber professional image 2
- `drain-1.jpg` - Drain service image
- `sink-1.jpg` - Sink service image

## Required Image Variants

For each image listed above, you should create and provide **4 versions**:

1. **Desktop JPG** (e.g., `hero-poster.jpg`)
2. **Desktop WebP** (e.g., `hero-poster.webp`)
3. **Mobile JPG** (e.g., `hero-poster@mobile.jpg`)
4. **Mobile WebP** (e.g., `hero-poster@mobile.webp`)

## Image Optimization Guidelines

### Quality Settings
- **JPG Quality**: 80-85%
- **WebP Quality**: 80-85%

### File Size Targets
- **Desktop images**: Maximum 200KB per image
- **Mobile images**: Maximum 100KB per image

### Recommended Dimensions
- **Desktop**: 1920x1080px (or appropriate aspect ratio for your design)
- **Mobile**: 768x432px (or half the desktop dimensions)

## Tools for Image Optimization

### Online Tools
- [Squoosh](https://squoosh.app/) - Google's image optimization tool
- [TinyPNG](https://tinypng.com/) - For PNG/JPG compression
- [Cloudinary](https://cloudinary.com/) - Comprehensive image CDN

### Command Line Tools
```bash
# Convert JPG to WebP using cwebp
cwebp -q 80 input.jpg -o output.webp

# Resize image using ImageMagick
convert input.jpg -resize 768x output@mobile.jpg

# Optimize JPG using jpegoptim
jpegoptim --max=85 input.jpg
```

### Node.js Tools
```bash
# Using sharp library
npm install sharp

# Example script
const sharp = require('sharp');
sharp('input.jpg')
  .resize(1920, 1080)
  .jpeg({ quality: 85 })
  .toFile('output.jpg');
```

## Important: Asset Location for Production

**Note**: These placeholder assets are currently in `src/assets/` as specified. For production use in a Vite project, you have two options:

1. **Option A (Recommended for static assets)**: Move final optimized images to `public/assets/images/plumber/`
   - Files in `public/` are served as-is at the root
   - Reference them as `/assets/images/plumber/image.jpg`
   - No import needed in components

2. **Option B (For imported assets)**: Keep in `src/assets/` and import in components
   - Use `import heroImage from '../assets/images/plumber/hero-poster.jpg'`
   - Vite will process and optimize during build
   - Gets cache-busting hashes in filenames

For this project, **Option A is recommended** for video/image backgrounds to allow easy updates without rebuilding.

## Implementation in Components

When using these images in React components, implement responsive picture elements:

```tsx
<picture>
  <source 
    media="(max-width: 768px)" 
    srcSet="/assets/images/plumber/hero-poster@mobile.webp" 
    type="image/webp" 
  />
  <source 
    media="(max-width: 768px)" 
    srcSet="/assets/images/plumber/hero-poster@mobile.jpg" 
    type="image/jpeg" 
  />
  <source 
    srcSet="/assets/images/plumber/hero-poster.webp" 
    type="image/webp" 
  />
  <img 
    src="/assets/images/plumber/hero-poster.jpg" 
    alt="Hero poster" 
    loading="lazy"
  />
</picture>
```

## Next Steps

1. Replace all placeholder `.jpg` files with high-quality source images
2. Create `.webp` versions of all images
3. Create `@mobile.jpg` versions (resized and optimized for mobile)
4. Create `@mobile.webp` versions
5. Test all images load correctly in both desktop and mobile views
6. Verify file sizes meet the targets above
