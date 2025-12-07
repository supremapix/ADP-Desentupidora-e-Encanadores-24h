# Plumber Images

This directory contains optimized images for the ADP Desentupidora website with themes related to plumbing and drain cleaning services.

## Images

### Desktop Images (1920x1080px)
- `plumber-1.jpg` - Encanador 24h
- `plumber-2.jpg` - Serviço Profissional
- `drain-1.jpg` - Desentupimento de Ralos
- `sink-1.jpg` - Pias e Instalações

### Mobile Images (800x600px)
- `plumber-1@mobile.jpg`
- `plumber-2@mobile.jpg`
- `drain-1@mobile.jpg`
- `sink-1@mobile.jpg`

### WebP Versions (Optimized)
Each image has a WebP version for better compression:
- `*.webp` - Desktop WebP versions
- `*@mobile.webp` - Mobile WebP versions

## Usage

The images are used in the `PlumberGallery` component with responsive picture elements:

```tsx
<picture>
  <source
    srcSet="/assets/images/plumber/plumber-1@mobile.webp 800w, /assets/images/plumber/plumber-1.webp 1920w"
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
    type="image/webp"
  />
  <source
    srcSet="/assets/images/plumber/plumber-1@mobile.jpg 800w, /assets/images/plumber/plumber-1.jpg 1920w"
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
    type="image/jpeg"
  />
  <img src="/assets/images/plumber/plumber-1.jpg" alt="Encanador 24h" loading="lazy" />
</picture>
```

## Optimization

- Desktop images: Quality 85%, JPEG optimized
- Mobile images: Quality 80%, JPEG optimized
- WebP images: Quality 85% (desktop) and 80% (mobile)
- All images use lazy loading for better performance

## Replacement

To replace these placeholder images with actual photos:
1. Replace the respective `.jpg` files with your photos (maintain same dimensions)
2. Use an image optimizer or WebP converter to create `.webp` versions
3. Create mobile versions at 800x600px resolution
4. Ensure images are optimized for web (< 200KB for desktop, < 100KB for mobile)
