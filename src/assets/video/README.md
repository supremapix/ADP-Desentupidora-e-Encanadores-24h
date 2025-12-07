# Video Assets Directory

This directory contains placeholder video files for the Hero background that should be replaced with optimized, production-ready videos.

## Current Placeholder Files

- `hero.mp4` - Hero background video (H.264/MP4 format)
- `hero.webm` - Hero background video (WebM format)

## Video Requirements

### Format Requirements
Provide both formats for maximum browser compatibility:
- **MP4** (H.264 codec) - For Safari and older browsers
- **WebM** (VP9 codec) - For modern Chrome, Firefox, Edge

### Recommended Settings

#### MP4 (H.264)
```bash
# Using FFmpeg
ffmpeg -i input.mov \
  -c:v libx264 \
  -preset slow \
  -crf 23 \
  -vf "scale=1920:1080" \
  -profile:v high \
  -level 4.0 \
  -pix_fmt yuv420p \
  -movflags +faststart \
  -an \
  hero.mp4
```

**Settings explanation:**
- `-c:v libx264` - Use H.264 codec
- `-preset slow` - Better compression (slower encoding)
- `-crf 23` - Constant Rate Factor (18-28 range, 23 is good balance)
- `-vf "scale=1920:1080"` - Scale to 1920x1080
- `-movflags +faststart` - Enable progressive playback (essential for web)
- `-an` - Remove audio track (not needed for background video)

#### WebM (VP9)
```bash
# Using FFmpeg
ffmpeg -i input.mov \
  -c:v libvpx-vp9 \
  -b:v 0 \
  -crf 30 \
  -vf "scale=1920:1080" \
  -row-mt 1 \
  -an \
  hero.webm
```

**Settings explanation:**
- `-c:v libvpx-vp9` - Use VP9 codec
- `-b:v 0` - Use constant quality mode
- `-crf 30` - Quality level (15-35 range, 30 is good for background videos)
- `-row-mt 1` - Enable row-based multithreading

### File Size Targets
- **Desktop video**: Maximum 2-5MB for 10-15 second loop
- **Mobile**: Consider disabling video or using poster image only

### Video Specifications
- **Resolution**: 1920x1080 (Full HD)
- **Aspect Ratio**: 16:9
- **Duration**: 10-15 seconds (looping seamlessly)
- **Frame Rate**: 24-30 fps
- **Audio**: None (remove audio track to reduce file size)

## Mobile Optimization

For mobile devices, it's recommended to:
1. Show only the poster image (no video)
2. Or use a much smaller, lower quality video (720p or less)

The Hero component should automatically disable video playback on mobile devices to:
- Save bandwidth
- Improve page load time
- Preserve battery life
- Ensure better performance

## Video Best Practices

### Loop Seamlessly
- Ensure the last frame transitions smoothly to the first frame
- Use crossfade or match similar colors/positions

### Optimize for Web
- Use progressive encoding (`-movflags +faststart` for MP4)
- Remove audio tracks
- Compress aggressively (background videos can be lower quality)

### Test Across Devices
- Test on desktop browsers (Chrome, Firefox, Safari, Edge)
- Test on mobile devices (iOS Safari, Chrome Mobile)
- Verify autoplay works (requires `muted` attribute)

## Important: Asset Location for Production

**Note**: These placeholder videos are currently in `src/assets/video/` as specified. For production use in a Vite project:

- **Recommended**: Move final optimized videos to `public/assets/video/`
- Files in `public/` are served as-is and can be referenced by path
- This allows updating videos without rebuilding the application
- Default paths in Hero component use `/assets/video/` (public folder convention)

## Implementation in React

```tsx
<video
  autoPlay
  muted
  loop
  playsInline
  poster="/assets/images/plumber/hero-poster.jpg"
>
  <source src="/assets/video/hero.webm" type="video/webm" />
  <source src="/assets/video/hero.mp4" type="video/mp4" />
</video>
```

**Important attributes:**
- `autoPlay` - Start playing automatically
- `muted` - Required for autoplay to work in most browsers
- `loop` - Loop the video continuously
- `playsInline` - Prevent fullscreen on iOS devices
- `poster` - Fallback image shown before video loads

## Tools & Resources

### Video Optimization Tools
- **FFmpeg** (command line) - Most powerful and flexible
- **HandBrake** (GUI) - User-friendly video transcoder
- **CloudConvert** - Online video conversion service

### Online Resources
- [FFmpeg Documentation](https://ffmpeg.org/documentation.html)
- [Web Video Best Practices](https://web.dev/fast/#optimize-your-videos)
- [Video Optimization Guide](https://developers.google.com/web/fundamentals/media/video-encoding)

## Next Steps

1. Record or obtain high-quality source video (at least 1920x1080)
2. Edit video to create seamless 10-15 second loop
3. Encode to MP4 (H.264) with settings above
4. Encode to WebM (VP9) with settings above
5. Optimize file sizes to meet targets
6. Test video playback across browsers and devices
7. Verify poster image displays properly as fallback
