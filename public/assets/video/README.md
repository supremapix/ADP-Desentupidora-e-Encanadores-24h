# Video Assets Directory

This directory contains placeholder video files for the Hero section of the ADP Desentupidora website.

## Current Files

- `hero.mp4.placeholder` - Placeholder marker for MP4 video format
- `hero.webm.placeholder` - Placeholder marker for WebM video format

## Video Requirements

### Specifications

**Format:**
- Primary: MP4 (H.264 codec, AAC audio)
- Fallback: WebM (VP9 codec, Opus audio)

**Dimensions:**
- Desktop: 1920x1080 (Full HD) recommended
- Mobile-friendly: Consider 1280x720 for smaller file size

**Duration:**
- Recommended: 10-30 seconds
- Loop: Yes (video will loop automatically)

**File Size:**
- Target: < 5MB for MP4
- Target: < 4MB for WebM
- Critical: Keep under 10MB total for mobile performance

**Frame Rate:**
- 24-30 fps recommended
- Higher frame rates increase file size

## How to Create Production Videos

### 1. Video Content Guidelines

- **Silent/Muted**: Hero videos should work without sound
- **Visual Focus**: Show plumbing services, team, or equipment
- **Loop-Friendly**: First and last frames should blend smoothly
- **Mobile-Optimized**: Test on slow connections
- **Engaging**: Grab attention in first 2-3 seconds

### 2. Encoding with FFmpeg

**For MP4 (H.264):**
```bash
ffmpeg -i input.mp4 \
  -c:v libx264 \
  -preset slow \
  -crf 23 \
  -profile:v baseline \
  -level 3.0 \
  -movflags +faststart \
  -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" \
  -pix_fmt yuv420p \
  -an \
  hero.mp4
```

**For WebM (VP9):**
```bash
ffmpeg -i input.mp4 \
  -c:v libvpx-vp9 \
  -crf 30 \
  -b:v 0 \
  -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" \
  -an \
  hero.webm
```

### 3. Optimization Tips

**Reduce File Size:**
- Increase CRF value (23-28 for MP4, 30-35 for WebM)
- Lower resolution (1280x720 instead of 1920x1080)
- Reduce frame rate to 24fps
- Trim unnecessary frames
- Use two-pass encoding for better quality/size ratio

**Two-Pass Encoding (Better Quality):**
```bash
# Pass 1
ffmpeg -i input.mp4 -c:v libx264 -preset slow -crf 23 -an -pass 1 -f null /dev/null

# Pass 2
ffmpeg -i input.mp4 -c:v libx264 -preset slow -crf 23 -movflags +faststart -an -pass 2 hero.mp4
```

**Mobile Optimization:**
```bash
# Create a lighter mobile version
ffmpeg -i input.mp4 \
  -c:v libx264 \
  -crf 26 \
  -vf "scale=1280:720" \
  -movflags +faststart \
  -an \
  hero-mobile.mp4
```

### 4. Testing Checklist

After creating videos:
- [ ] File size under 5MB (MP4) and 4MB (WebM)
- [ ] Plays smoothly on mobile devices
- [ ] Loops seamlessly without jarring transitions
- [ ] Works muted (no essential audio)
- [ ] Loads quickly on 3G connections
- [ ] Poster image loads before video
- [ ] Fallback to poster on autoplay block

### 5. Tools & Resources

**Video Editors:**
- **FFmpeg** - Command-line video processing
- **HandBrake** - GUI for video encoding
- **Adobe Premiere** - Professional editing
- **DaVinci Resolve** - Free professional editor
- **iMovie** - Mac users

**Online Tools:**
- **Cloudinary** - Video optimization service
- **Vimeo** - Video hosting with optimization
- **Online-Convert** - Free video converter

**Stock Video:**
- **Pexels Videos** - Free stock footage
- **Pixabay Videos** - Free video clips
- **Coverr** - Free hero videos

### 6. Browser Support

**MP4 (H.264):**
- Chrome: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Edge: ✅ Full support
- iOS Safari: ✅ Full support

**WebM (VP9):**
- Chrome: ✅ Full support
- Firefox: ✅ Full support
- Safari: ⚠️ Limited (iOS 15+)
- Edge: ✅ Full support
- iOS Safari: ⚠️ Limited

**Recommendation:** Always provide both formats with MP4 as primary for best compatibility.

## Implementation Notes

The Hero component automatically:
- Attempts autoplay with muted video
- Falls back to poster image if autoplay fails
- Provides play button overlay for manual play
- Supports both MP4 and WebM formats
- Handles mobile autoplay restrictions gracefully

## File Naming Convention

- `hero.mp4` - Primary MP4 video
- `hero.webm` - WebM alternative
- `hero-mobile.mp4` - (Optional) Lighter mobile version
- Use the corresponding poster image from `../images/plumber/hero-poster.jpg`
