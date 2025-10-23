# Testing Checklist for Portfolio Website

Use this checklist to verify all features are working correctly when you open the site.

## 🚀 Initial Load

- [ ] Loading screen appears with "JIMMIE MILLER" text
- [ ] Loading bar animates smoothly
- [ ] Loading screen fades out after ~1.5 seconds
- [ ] Three.js particle background loads and animates
- [ ] Hero section displays properly

## 🎨 Visual Elements

### Hero Section
- [ ] "Hello_._ I am Jimmie Miller" title displays
- [ ] **Large circular headshot** displays on right side (desktop)
- [ ] **Animated ring** pulses around headshot
- [ ] Headshot has green border and glow
- [ ] Hover effect on headshot (scales and glows more)
- [ ] Green accent on "Jimmie Miller" text
- [ ] "Now pioneering AI automation & consulting" text pulses
- [ ] Three buttons visible: "view_work", "ai_services →", "get_in_touch"
- [ ] AI services button has green gradient
- [ ] Scroll indicator animates at bottom
- [ ] On mobile: headshot appears ABOVE text

### Navigation
- [ ] "JM" logo visible in top left
- [ ] Nav links visible: home, about, work, skills, contact
- [ ] Nav becomes solid on scroll
- [ ] Active nav link highlights in green
- [ ] Mobile menu works (hamburger icon on mobile)

### About Section
- [ ] **Main professional headshot** loads and displays
- [ ] **3-photo gallery** displays below main photo
- [ ] Main photo has green border and glow
- [ ] Main photo zooms on hover with gradient overlay
- [ ] Gallery photos pop up and glow on hover
- [ ] Gallery maintains 3-column layout
- [ ] "Altared Alchemie" link in bio is clickable and green
- [ ] Expertise list shows "AI Consulting & Automation" first with 🤖 icon
- [ ] Quote displays properly

### Work Section
- [ ] **Featured Project**: Altared Alchemie card spans 2 columns (desktop)
- [ ] **Robot animation video** loads and plays automatically
- [ ] Video loops seamlessly without interruption
- [ ] Video has no audio (muted)
- [ ] "Featured Project" badge visible in top right with pulse animation
- [ ] "Altared Alchemie" text glows (alternates white/green)
- [ ] Video overlay is semi-transparent (can see video through it)
- [ ] Hover effect reveals more of the video (overlay fades)
- [ ] Hover zoom effect on video (subtle 1.05x scale)
- [ ] "View Live Site →" link visible and clickable
- [ ] All Budweiser/Bud Light images load correctly
- [ ] Logo images (Cre8tive Soul, KHIS) display properly
- [ ] Hover zoom effect works on all images

### Skills Section
- [ ] AI Automation card has "NEW" badge
- [ ] AI card has green border and subtle glow
- [ ] "Learn More →" link works
- [ ] All 7 skill cards display (1 featured + 6 standard)

### Contact Section
- [ ] **Circular headshot** displays next to contact text
- [ ] Contact photo has green border
- [ ] Hover effect: photo scales and rotates playfully
- [ ] Contact text and photo layout side-by-side (desktop)
- [ ] Photo stacks above text on mobile

### Footer
- [ ] Copyright and attribution display
- [ ] Links work (if any)

## 🖱️ Interactive Features

### Buttons & Links
- [ ] "view_work" button scrolls to work section
- [ ] "ai_services →" button opens altaredalchemie.com in new tab
- [ ] "get_in_touch" button scrolls to contact section
- [ ] All Altared Alchemie links open in new tab
- [ ] Work item hover shows zoom effect

### Filtering System
- [ ] "all" filter shows all projects (default)
- [ ] "ux_design" filter shows Budweiser projects + Altared Alchemie
- [ ] "logo" filter shows Cre8tive Soul + KHIS
- [ ] "cms" filter shows CMS projects + Altared Alchemie
- [ ] "video" filter shows Web Dev project
- [ ] Active filter button turns green with black text
- [ ] Filtered items hide/show smoothly

### Three.js Background
- [ ] Particles animate continuously
- [ ] Particles respond to mouse movement
- [ ] Particles rotate on scroll
- [ ] Background doesn't cause performance issues

### Scroll Effects
- [ ] Smooth scrolling when clicking nav links
- [ ] Sections fade in as you scroll (AOS animations)
- [ ] Nav bar becomes opaque on scroll
- [ ] Active nav link updates based on scroll position

### Custom Cursor (Desktop Only)
- [ ] Small green dot follows cursor immediately
- [ ] Larger circle follows cursor with delay
- [ ] Cursor expands on hover over links/buttons
- [ ] Default cursor is hidden

## 📱 Responsive Design

### Desktop (1920px+)
- [ ] Featured work item spans 2 columns
- [ ] Three columns in work grid
- [ ] Two column about section (text + image/expertise)
- [ ] All spacing looks good

### Tablet (768px - 1024px)
- [ ] Work grid adjusts to 2 columns
- [ ] About section stacks vertically
- [ ] Featured item takes full width
- [ ] Navigation still visible

### Mobile (< 768px)
- [ ] Hamburger menu appears
- [ ] Clicking hamburger opens full-screen menu
- [ ] Menu closes when clicking a link
- [ ] Work grid shows 1 column
- [ ] Profile image centers and sizes appropriately
- [ ] All text remains readable
- [ ] Buttons stack vertically
- [ ] Touch targets are large enough

## 🎯 Altared Alchemie Integration

Verify all 5 touchpoints:

1. [ ] **Hero Button**: "ai_services →" button with green gradient
2. [ ] **About Link**: Inline link in biography text
3. [ ] **Featured Work**: Large featured card in work section
4. [ ] **Expertise List**: First item in expertise list (robot icon)
5. [ ] **Featured Skill**: First skill card with "NEW" badge

All should link to: https://altaredalchemie.com

## 🔍 Performance

- [ ] Page loads in under 3 seconds
- [ ] No console errors (press F12 to check)
- [ ] Images load progressively
- [ ] **Video loads and plays smoothly**
- [ ] No video stuttering or buffering issues
- [ ] Animations run at 60fps
- [ ] Three.js doesn't cause lag
- [ ] Smooth scrolling throughout
- [ ] Video doesn't cause performance issues on mobile

## ♿ Accessibility

- [ ] All images have alt text
- [ ] Links have descriptive text
- [ ] Color contrast is sufficient
- [ ] Keyboard navigation works (Tab key)
- [ ] Focus states visible on interactive elements

## 🎨 Visual Polish

- [ ] All fonts load correctly (Inter & Space Mono)
- [ ] Green accent color (#00ff88) used consistently
- [ ] Dark theme (#0a0a0a background) looks good
- [ ] No layout shifts or jumps
- [ ] Spacing feels consistent
- [ ] Animations feel smooth, not jarring

## 🐛 Known Issues to Check

- [ ] Images in media folder all exist and load
- [ ] **Video file exists** (`media/Red-gold-robot-animation.mp4`)
- [ ] Video plays in all tested browsers
- [ ] No broken image icons (missing files)
- [ ] Three.js library loads from CDN
- [ ] Google Fonts load properly
- [ ] No mixed content warnings (http/https)
- [ ] Video doesn't cause mobile data concerns (consider size)

## 📊 Browser Testing

Test in multiple browsers:

- [ ] **Chrome/Edge** (latest)
- [ ] **Firefox** (latest)
- [ ] **Safari** (latest)
- [ ] **Mobile Safari** (iOS)
- [ ] **Chrome Mobile** (Android)

## 🎉 Final Checks

- [ ] Site looks professional and polished
- [ ] Altared Alchemie is prominently featured
- [ ] Portfolio work is well-presented
- [ ] Contact information is correct
- [ ] LinkedIn link is your actual profile
- [ ] Email address is correct
- [ ] Copyright year is current (2025)

---

## 🐛 If Something Doesn't Work

### Video Not Playing?
- Check that `media/Red-gold-robot-animation.mp4` exists
- Verify file name matches exactly (case-sensitive)
- Check browser console for errors
- Try refreshing the page
- Some browsers block autoplay - check browser settings
- Video may not autoplay if battery saver mode is on (mobile)

### Images Not Loading?
- Check that all files in `media/` folder are present
- Verify file names match exactly (case-sensitive)
- Check browser console for 404 errors

### Three.js Not Working?
- Check internet connection (CDN required)
- Open browser console for errors
- Try refreshing the page

### Animations Not Smooth?
- Close other browser tabs
- Check CPU usage
- Try a different browser
- Reduce particle count in `three-scene.js` if needed

### Mobile Menu Not Opening?
- Check browser console for JavaScript errors
- Try refreshing the page
- Clear browser cache

---

**Status**: Ready for Testing ✅  
**Version**: 2.0.0  
**Last Updated**: December 2024

