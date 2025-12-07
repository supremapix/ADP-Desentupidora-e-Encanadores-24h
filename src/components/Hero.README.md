# Hero Component

A modern, responsive React + TypeScript Hero component with video/image background support, mobile optimization, and customizable content.

## Features

- ✨ **Video or Image Background**: Choose between video or static image backgrounds
- 📱 **Mobile Responsive**: Automatically switches to mobile-optimized assets on small screens
- 🖼️ **WebP Support**: Uses modern WebP format with JPEG fallback
- ♿ **Accessible**: Proper semantic HTML and ARIA attributes
- 🎨 **Customizable**: Extensive props for customization
- 🎬 **Smooth Animations**: Fade-in animations for title, subtitle, and CTAs
- 🔄 **Fallback Handling**: Gracefully falls back to image if video fails to load

## Installation

The component is already included in the project at:
```
src/components/Hero.tsx
```

Required CSS is in `index.html` in the `<style>` section.

## Basic Usage

```tsx
import Hero from './components/Hero';

function HomePage() {
  return (
    <main>
      <Hero />
      {/* Rest of your page */}
    </main>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `'Professional Plumbing Services'` | Main heading text |
| `subtitle` | `string` | `'24/7 Emergency Service Available'` | Subheading text |
| `ctaText` | `string` | `'Get a Quote'` | Primary CTA button text |
| `ctaLink` | `string` | `'#contact'` | Primary CTA button link |
| `secondaryCtaText` | `string` | `'Call Now'` | Secondary CTA button text |
| `secondaryCtaLink` | `string` | `'tel:+1234567890'` | Secondary CTA button link |
| `showVideo` | `boolean` | `true` | Whether to show video background |
| `backgroundType` | `'video' \| 'image'` | `'video'` | Background type |
| `className` | `string` | `''` | Additional CSS classes |

## Examples

### Example 1: Plumbing Service Hero

```tsx
<Hero
  title="24/7 Emergency Plumbing Services"
  subtitle="Fast, Reliable, Professional - We're Here When You Need Us"
  ctaText="Request Service"
  ctaLink="#contact"
  secondaryCtaText="Call Now: (555) 123-4567"
  secondaryCtaLink="tel:+15551234567"
  backgroundType="video"
/>
```

### Example 2: Image Background Only

```tsx
<Hero
  title="Expert Drain Cleaning"
  subtitle="Clear Your Drains in Minutes"
  ctaText="Get a Free Quote"
  ctaLink="#quote"
  backgroundType="image"
  showVideo={false}
/>
```

### Example 3: Single CTA

```tsx
<Hero
  title="Professional Plumbing Solutions"
  subtitle="Serving Your Community Since 2005"
  ctaText="Contact Us"
  ctaLink="#contact"
  secondaryCtaText=""
/>
```

## Asset Management

### Current Assets

The component uses placeholder assets located in:
- Images: `src/assets/images/plumber/`
- Videos: `src/assets/video/`

⚠️ **These are minimal placeholder files** (1x1 pixel images, 1-frame videos)

### Replacing Assets

To replace with production-ready assets:

1. **Optimize your images and videos** following the guidelines in:
   - `src/assets/images/plumber/README.md`
   - `src/assets/video/README.md`

2. **Replace the placeholder files** with your optimized assets:
   ```bash
   # Images
   src/assets/images/plumber/hero-poster.jpg       # Desktop JPEG
   src/assets/images/plumber/hero-poster.webp      # Desktop WebP
   src/assets/images/plumber/hero-poster@mobile.jpg  # Mobile JPEG
   src/assets/images/plumber/hero-poster@mobile.webp # Mobile WebP
   
   # Videos
   src/assets/video/hero.mp4   # H.264 format
   src/assets/video/hero.webm  # WebM format
   ```

3. **Test across devices** to ensure proper loading and performance

### Recommended Asset Specs

**Images:**
- Desktop: 1920x1080px (16:9), 100-300KB
- Mobile: 768x432px (16:9), 30-100KB
- Formats: JPEG + WebP

**Videos:**
- Resolution: 1920x1080 (desktop) or 1280x720 (mobile)
- Duration: 10-30 seconds (looping)
- Format: MP4 (H.264) + WebM (VP9)
- Size: 2-5MB max
- No audio (muted background video)

## Responsive Behavior

The component automatically adapts to screen size:

- **Desktop (≥768px):**
  - Shows video background (if enabled)
  - Uses full-size images
  - Larger text and buttons

- **Mobile (<768px):**
  - Always uses static image (no video)
  - Uses @mobile image variants
  - Smaller, touch-friendly buttons
  - Stacks CTAs vertically

## Browser Support

- ✅ Chrome, Edge, Safari, Firefox (latest)
- ✅ iOS Safari 12+
- ✅ Chrome Mobile, Samsung Internet
- ⚠️ IE11: Not supported (uses modern features)

## Accessibility

- Semantic HTML (`<section>`, `<h1>`, `<p>`, `<a>`)
- Proper heading hierarchy
- Keyboard navigable CTAs
- Alt text for images
- ARIA attributes where appropriate

## Styling

The component uses Tailwind CSS utility classes. The styles are defined in `index.html`:

```css
/* Core hero styles in index.html */
.hero-section { /* ... */ }
.hero-background { /* ... */ }
.hero-video { /* ... */ }
.hero-image { /* ... */ }
/* ... more styles */
```

### Custom Styling

Add custom styles via the `className` prop:

```tsx
<Hero className="my-custom-hero" />
```

Then define your custom styles:

```css
.my-custom-hero .hero-title {
  color: #custom-color;
}
```

## Performance

- **Lazy loading**: Video only loads when needed
- **Responsive images**: Smaller images on mobile
- **WebP format**: ~30% smaller than JPEG
- **Poster image**: Shows immediately while video loads
- **Fallback**: Gracefully handles video load failures

## Troubleshooting

### Video not playing

- Check browser autoplay policies (muted + playsinline required)
- Verify video file paths are correct
- Check browser console for errors
- Ensure video files are accessible

### Images not loading

- Verify file paths in the component
- Check that asset files exist
- Verify correct file extensions (.jpg, .webp)

### Mobile not using @mobile variants

- Check that `isMobile` state is updating correctly
- Verify @mobile files exist
- Check responsive breakpoint (768px)

## Advanced Usage

### Conditional Content

```tsx
const isEmergency = true;

<Hero
  title={isEmergency ? "🚨 Emergency Service" : "Regular Service"}
  subtitle={isEmergency ? "We'll be there in 30 minutes" : "Schedule your appointment"}
  backgroundType={isEmergency ? "video" : "image"}
/>
```

### Dynamic CTA

```tsx
const phoneNumber = "+15551234567";

<Hero
  secondaryCtaText={`Call ${phoneNumber}`}
  secondaryCtaLink={`tel:${phoneNumber}`}
/>
```

## See Also

- `Hero.example.tsx` - More usage examples
- `src/assets/images/plumber/README.md` - Image optimization guide
- `src/assets/video/README.md` - Video optimization guide

## Support

For issues or questions, please refer to the project documentation or open an issue in the repository.
