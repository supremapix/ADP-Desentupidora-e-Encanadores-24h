# Hero Component Usage Examples

The `Hero` component is a flexible hero section with support for video or image backgrounds, fully responsive and optimized for mobile devices.

## Basic Usage

```tsx
import Hero from './components/Hero';

function App() {
  return (
    <Hero />
  );
}
```

## With Custom Props

```tsx
import Hero from './components/Hero';

function App() {
  return (
    <Hero
      title="🚨 Emergency Plumbing Services 🚨"
      subtitle="Average arrival time: 40-45 minutes"
      description="Serving CIC and surrounding areas 24/7"
      ctaText="Call Now"
      ctaLink="#contact"
      secondaryCtaText="Chat on WhatsApp"
      secondaryCtaLink="https://wa.me/5541985171966"
    />
  );
}
```

## With Video Background

```tsx
import Hero from './components/Hero';

function App() {
  return (
    <Hero
      useVideoBackground={true}
      videoSrcMp4="/assets/video/hero.mp4"
      videoSrcWebm="/assets/video/hero.webm"
      posterSrc="/assets/images/plumber/hero-poster.jpg"
      posterMobileSrc="/assets/images/plumber/hero-poster@mobile.jpg"
    />
  );
}
```

## With Image Background (Mobile Default)

```tsx
import Hero from './components/Hero';

function App() {
  return (
    <Hero
      useVideoBackground={false}
      posterSrc="/assets/images/plumber/hero-poster.jpg"
      posterMobileSrc="/assets/images/plumber/hero-poster@mobile.jpg"
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | Default title | Main heading text |
| `subtitle` | `string` | Default subtitle | Secondary heading text |
| `description` | `string` | Default description | Descriptive text |
| `useVideoBackground` | `boolean` | `false` | Enable video background (desktop only) |
| `videoSrcMp4` | `string` | `/assets/video/hero.mp4` | Path to MP4 video |
| `videoSrcWebm` | `string` | `/assets/video/hero.webm` | Path to WebM video |
| `posterSrc` | `string` | Desktop poster path | Desktop background image |
| `posterMobileSrc` | `string` | Mobile poster path | Mobile background image |
| `ctaText` | `string` | "Chamar Agora" | Primary CTA button text |
| `ctaLink` | `string` | "#contato" | Primary CTA button link |
| `secondaryCtaText` | `string` | "WhatsApp (Online)" | Secondary CTA text |
| `secondaryCtaLink` | `string` | WhatsApp link | Secondary CTA link |
| `className` | `string` | `""` | Additional CSS classes |

## Features

### Responsive Design
- Automatically detects mobile devices
- Uses optimized mobile images on smaller screens
- Video background disabled on mobile to save bandwidth

### Video Support
- Supports both MP4 and WebM formats for broad browser compatibility
- Autoplay, muted, and looping for background effect
- Graceful fallback to poster image if video fails to load
- Poster image shown while video loads

### Accessibility
- Proper semantic HTML structure
- ARIA labels on decorative icons
- Keyboard-accessible CTA buttons
- Video marked as `aria-hidden` for screen readers

### Performance
- Lazy loading considerations
- WebP format support for images with JPG fallback
- Optimized animations with CSS
- Video loads with poster to prevent layout shift

## CSS Classes

The component uses TailwindCSS classes. Key classes for customization:

- `.hero-section` - Main section wrapper
- `.hero-cta-primary` - Primary CTA button
- `.hero-cta-secondary` - Secondary CTA button
- `.btn-shimmer` - Shimmer effect on hover

## Mobile Optimization

On mobile devices (< 768px width):
- Video background is automatically disabled
- Mobile-specific images are used
- Reduced padding and font sizes
- Touch-optimized button sizes
- Optimized animations

## Browser Support

- Modern browsers with ES6+ support
- Video: Chrome 4+, Firefox 3.5+, Safari 4+, Edge 12+
- WebP: Chrome 23+, Firefox 65+, Safari 14+, Edge 18+
- Fallback to JPG for older browsers

## Notes

- Replace placeholder assets before production deployment
- Video files should be optimized (< 10MB recommended)
- Consider CDN for video hosting in production
- Test on multiple devices and browsers
