# Video Assets

This directory contains placeholder video files for the website's hero section.

## Files

- `hero.mp4` - Hero section background video (H.264/MP4 format)
- `hero.webm` - Hero section background video (VP8/VP9 WebM format)

## Current State

⚠️ **These are minimal placeholder files** - They are tiny 1-frame videos meant to establish the file structure and keep the repository lightweight.

## How to Replace with Final Assets

### Video Optimization Guidelines

Before replacing these placeholders with your final videos:

1. **Video Specifications:**
   - Duration: 10-30 seconds (loop-friendly)
   - Resolution: 
     - Desktop: 1920x1080 (Full HD) or 1280x720 (HD)
     - Mobile: 1280x720 (HD) or 854x480 (SD)
   - Aspect ratio: 16:9 (landscape) or 9:16 (vertical for mobile)
   - Frame rate: 24-30 fps
   - No audio (or muted) for background videos

2. **Compression Settings:**
   
   **MP4 (H.264):**
   - Codec: H.264 (x264)
   - Bitrate: 1-3 Mbps for 1080p, 0.5-1.5 Mbps for 720p
   - Profile: High or Main
   - Preset: slow or medium (better compression)
   
   **WebM (VP9 or VP8):**
   - Codec: VP9 (preferred) or VP8
   - Bitrate: 0.7-2 Mbps for 1080p, 0.4-1 Mbps for 720p
   - WebM typically provides better compression than MP4

3. **Optimization Tools:**
   
   **FFmpeg (Command Line):**
   ```bash
   # Create optimized MP4 (H.264)
   ffmpeg -i input.mov \
     -c:v libx264 \
     -preset slow \
     -crf 28 \
     -vf scale=1920:1080 \
     -pix_fmt yuv420p \
     -an \
     hero.mp4
   
   # Create optimized WebM (VP9)
   ffmpeg -i input.mov \
     -c:v libvpx-vp9 \
     -b:v 1.5M \
     -vf scale=1920:1080 \
     -an \
     hero.webm
   ```
   
   **Online Tools:**
   - [Handbrake](https://handbrake.fr/) - Free, user-friendly video encoder
   - [CloudConvert](https://cloudconvert.com/video-converter) - Online video conversion
   - [Clipchamp](https://clipchamp.com/) - Online video editor with compression

4. **Mobile-Specific Considerations:**
   - Create a separate mobile-optimized version if needed
   - Lower resolution (720p or less) for mobile data savings
   - Consider using a poster image (static image shown before playback)
   - Test autoplay behavior on iOS/Android (may require muted + playsinline attributes)

### File Size Targets

- Desktop MP4: 2-5 MB (for 15-20 second clip at 1080p)
- Desktop WebM: 1.5-4 MB (better compression)
- Mobile versions: 1-2 MB (for 720p)

### Best Practices

1. **Always provide both MP4 and WebM formats:**
   - MP4 for Safari and older browsers
   - WebM for Chrome, Firefox, Edge (better compression)

2. **Use a poster image:**
   - Set a poster frame (first or best frame) as `hero-poster.jpg`
   - This shows while video loads and if video fails

3. **Optimize for web:**
   - Use "Fast Start" (moov atom at beginning) for MP4
   - This allows streaming without full download
   - FFmpeg adds this with `-movflags +faststart`

4. **Test performance:**
   - Keep total video size under 5MB when possible
   - Consider lazy loading or only loading on desktop
   - Monitor page load times with video included

### Example Full Optimization Script

```bash
#!/bin/bash
# Optimize video for web use

INPUT="raw-video.mov"

# Create desktop MP4 (H.264)
ffmpeg -i "$INPUT" \
  -c:v libx264 \
  -preset slow \
  -crf 28 \
  -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" \
  -pix_fmt yuv420p \
  -movflags +faststart \
  -an \
  hero.mp4

# Create desktop WebM (VP9)
ffmpeg -i "$INPUT" \
  -c:v libvpx-vp9 \
  -b:v 1.5M \
  -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" \
  -deadline best \
  -cpu-used 0 \
  -an \
  hero.webm

# Extract poster frame (1 second in)
ffmpeg -i "$INPUT" -ss 00:00:01 -vframes 1 -vf scale=1920:1080 ../images/plumber/hero-poster.jpg

echo "Video optimization complete!"
echo "MP4 size: $(du -h hero.mp4 | cut -f1)"
echo "WebM size: $(du -h hero.webm | cut -f1)"
```

## Notes

- The Hero component should use the `<video>` element with both sources
- Add `autoplay muted loop playsinline` attributes for background video
- Always include a poster image for better UX
- Test across multiple browsers and devices
- Consider using a CDN for video hosting in production
