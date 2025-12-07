# Video Assets

This directory contains placeholder video files for the ADP Desentupidora website hero section. These are minimal placeholder files that should be replaced with optimized, high-quality videos.

## Current Placeholder Files

- `hero.mp4` - Hero section background video (MP4/H.264 format)
- `hero.webm` - Hero section background video (WebM/VP9 format)

## Video Specifications

### Recommended Specifications

- **Duration**: 10-30 seconds (looping)
- **Resolution**: 
  - Desktop: 1920x1080 (Full HD) or 1280x720 (HD)
  - Mobile: 720x1280 (vertical) or 720x480 (landscape)
- **Frame Rate**: 24-30 fps
- **Codec**:
  - MP4: H.264 (for broad compatibility)
  - WebM: VP9 (for modern browsers, better compression)
- **Bitrate**:
  - Desktop: 2-5 Mbps
  - Mobile: 1-2 Mbps
- **Max File Size**: 5-10 MB (keep it small for fast loading)

## How to Replace Placeholder Videos

### 1. Prepare Your Video

Record or acquire professional video footage showing:
- Plumbers at work
- Equipment in action (trucks, hydrojetting, etc.)
- Before/after service results
- Team members in action

### 2. Edit Your Video

- Trim to 10-30 seconds
- Add any necessary branding or text overlays
- Ensure good lighting and professional quality
- Consider shooting in landscape for hero sections

### 3. Optimize and Encode

Use FFmpeg for optimal video compression:

```bash
# Convert to MP4 (H.264) - Maximum compatibility
ffmpeg -i input.mov \
  -c:v libx264 \
  -preset slow \
  -crf 23 \
  -vf "scale=1920:1080" \
  -c:a aac \
  -b:a 128k \
  -movflags +faststart \
  hero.mp4

# Convert to WebM (VP9) - Better compression for modern browsers
ffmpeg -i input.mov \
  -c:v libvpx-vp9 \
  -crf 30 \
  -b:v 0 \
  -vf "scale=1920:1080" \
  -c:a libopus \
  -b:a 128k \
  hero.webm

# Mobile-optimized version (if needed separately)
ffmpeg -i input.mov \
  -c:v libx264 \
  -preset slow \
  -crf 28 \
  -vf "scale=1280:720" \
  -c:a aac \
  -b:a 96k \
  -movflags +faststart \
  hero-mobile.mp4
```

### 4. Alternative: Use Online Tools

If you don't have FFmpeg installed:
- [HandBrake](https://handbrake.fr/) - Free, cross-platform video transcoder
- [CloudConvert](https://cloudconvert.com/) - Online video converter
- [Clipchamp](https://clipchamp.com/) - Online video editor with export options

### 5. Test Performance

After replacing:
- Test on different devices and connection speeds
- Verify autoplay works (muted is required for autoplay)
- Check file sizes are reasonable (<10MB)
- Ensure both MP4 and WebM versions work

## Implementation Notes

### HTML5 Video Usage

The video should be implemented with multiple sources for browser compatibility:

```html
<video autoplay muted loop playsinline>
  <source src="/assets/video/hero.webm" type="video/webm">
  <source src="/assets/video/hero.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

### Best Practices

- **Muted Autoplay**: Videos must be muted to autoplay in most browsers
- **Loop**: Background videos should loop seamlessly
- **Playsinline**: Required for autoplay on iOS devices
- **Fallback**: Provide a poster image as fallback
- **Loading**: Consider lazy-loading videos not in viewport
- **Accessibility**: Provide captions if video contains important information
- **Performance**: Use `preload="metadata"` or `preload="none"` for better initial page load

### Video Optimization Tips

1. **Remove Audio**: If the video is just visual, remove audio track to reduce file size:
   ```bash
   ffmpeg -i input.mp4 -c:v copy -an output.mp4
   ```

2. **Two-Pass Encoding**: For better quality at smaller file sizes:
   ```bash
   # First pass
   ffmpeg -i input.mov -c:v libx264 -preset slow -b:v 2M -pass 1 -f mp4 /dev/null
   # Second pass
   ffmpeg -i input.mov -c:v libx264 -preset slow -b:v 2M -pass 2 hero.mp4
   ```

3. **Keyframe Optimization**: Ensure smooth looping:
   ```bash
   ffmpeg -i input.mov -g 30 -keyint_min 30 -sc_threshold 0 hero.mp4
   ```

## Notes

- These are **placeholder files** and are not suitable for production use
- The current files are minimal binary files designed to keep the repository size small
- Replace these with actual optimized videos before deploying to production
- Consider hosting videos on a CDN or video platform (YouTube, Vimeo) for better performance
- For mobile devices, consider showing a static image instead of video to save bandwidth
