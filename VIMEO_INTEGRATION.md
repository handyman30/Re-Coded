# Vimeo Integration Guide

## Current Setup
- Local video file: `re-coded-banner-2_kRsxWIAY.mp4` (9.4MB)
- Currently hosted in `/public/assets/`

## Vimeo Integration Options

### Option 1: Direct Vimeo URL (If video is public)
```jsx
<video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="https://player.vimeo.com/external/YOUR_VIDEO_ID.hd.mp4?s=YOUR_HASH&profile_id=175" type="video/mp4" />
</video>
```

### Option 2: Vimeo iframe Embed
```jsx
<iframe
  src="https://player.vimeo.com/video/1096147668?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  className="absolute inset-0 w-full h-full"
  frameBorder="0"
  allow="autoplay; fullscreen"
  allowFullScreen
></iframe>
```

### Option 3: Using Vimeo Player SDK
```bash
npm install @vimeo/player
```

```jsx
import Player from '@vimeo/player';

useEffect(() => {
  const player = new Player('video-container', {
    id: 1096147668,
    background: true,
    autoplay: true,
    loop: true,
    muted: true
  });
}, []);
```

## To Switch to Vimeo

1. Replace the video element in `app/components/Hero.tsx`:
```jsx
// Replace the current <video> element with your preferred Vimeo integration method
```

2. Remove the local video file from `/public/assets/` to save space

## Benefits of Vimeo Hosting
- Automatic bandwidth optimization
- Global CDN delivery
- Adaptive streaming quality
- Analytics and insights
- No storage costs on your server

## Note
The Vimeo link you provided (https://vimeo.com/1096147668) appears to be private or requires authentication. You'll need to:
1. Make the video public or unlisted
2. Get the proper embed code from your Vimeo dashboard
3. Or use Vimeo's direct file links if you have a Pro account 

## Current Implementation
The Hero component now uses a Vimeo iframe embed for the background video.

## Troubleshooting: Video Not Showing

If the Vimeo video is not displaying, check the following:

### 1. Video Privacy Settings
- Log into your Vimeo account
- Navigate to the video settings for video ID: 1096147668
- Ensure the video privacy is set to:
  - **Public** or **Unlisted** (not Private)
  - **"Where can this be embedded?"** should include your domain or be set to "Anywhere"

### 2. Vimeo Embed Settings
In your Vimeo video settings, make sure:
- Embedding is enabled
- Domain restrictions (if any) include `localhost` for development
- The video is not password protected

### 3. Test the Video
Visit the test page at `/test-video` to see different embed methods:
- Basic embed
- Background mode
- Your original embed code

### 4. Alternative Solutions

#### Option A: Use a Public Video URL
If you have a Vimeo Pro account, you can get direct video file links:
```jsx
<video autoPlay loop muted playsInline>
  <source src="https://player.vimeo.com/external/VIDEO_ID.hd.mp4?s=HASH&profile_id=175" type="video/mp4" />
</video>
```

#### Option B: Use YouTube
YouTube videos can be embedded more easily:
```jsx
<iframe
  src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&controls=0&showinfo=0"
  className="absolute inset-0 w-full h-full"
/>
```

#### Option C: Use a CDN
Host the video on a CDN like:
- Cloudflare Stream
- AWS CloudFront
- Bunny CDN
- Cloudinary

### 5. Current Code
The current implementation in `app/components/Hero.tsx`:
```jsx
<iframe 
  src="https://player.vimeo.com/video/1096147668?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&background=1&muted=1&quality=1080p" 
  className="absolute inset-0 w-full h-full"
  frameBorder="0" 
  allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
  title="re-coded-banner-2"
  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
/>
```

### 6. Debug Steps
1. Open browser developer console (F12)
2. Check for any error messages
3. Look in the Network tab to see if the Vimeo iframe is loading
4. Check if there are any CORS or embedding errors

### 7. Contact Support
If the video still doesn't show:
- Contact Vimeo support with your video ID
- Ensure your Vimeo account has proper embedding permissions
- Consider upgrading to Vimeo Pro for more embedding options 