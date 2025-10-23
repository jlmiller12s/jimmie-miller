# Jimmie Miller - Portfolio Website

A modern, minimalist portfolio website featuring Three.js animations, real project showcases, and highlighting AI consulting services through Altared Alchemie.

## 🌟 Features

- **GSAP Tunnel Intro** - Stunning 3D tunnel animation that greets visitors before revealing the portfolio
- **Three.js 3D Background** - Interactive particle system that responds to mouse movement and scroll
- **Animated Robot Video** - Eye-catching red-gold robot animation for Altared Alchemie featured project
- **Professional Headshots** - Your photos featured in about and contact sections with elegant animations
- **Custom SVG Icon System** - Cohesive, professional icons throughout (no emojis)
- **Modern Minimalist Design** - Inspired by contemporary portfolio aesthetics with Patrick David influence
- **Real Portfolio Images** - Showcasing actual work from Budweiser, Bud Light, and logo design projects
- **Featured AI Services** - Prominent placement of Altared Alchemie AI consultancy with video background
- **Smooth Animations** - Custom scroll animations and transitions throughout
- **Portfolio Filtering** - Dynamic work showcase with category filtering (UX Design, Logo, CMS, Video)
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Custom Cursor** - Enhanced desktop cursor experience
- **Photo Gallery** - Multiple headshots showcasing your professional personality
- **ADA Compliant** - Accessible design following best practices
- **SEO Optimized** - Proper semantic HTML and meta tags

## 🚀 Quick Start

Simply open `index.html` in a modern web browser. No build process required!

### Option 1: Direct File Opening
```bash
# Navigate to the project directory
cd Jimmie-Miller-portfolio-site

# Open index.html in your default browser
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### Option 2: Local Server (Recommended)
For the best experience, use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (http-server)
npx http-server -p 8000
```

Then visit: `http://localhost:8000`

## 📁 File Structure

```
Jimmie-Miller-portfolio-site/
├── index.html          # Main HTML file
├── style.css           # All styles and responsive design
├── script.js           # Main JavaScript functionality
├── three-scene.js      # Three.js 3D scene and animations
├── media/              # Portfolio images and assets
│   ├── 560648_4061998559282_68212903_n.jpg
│   ├── Bud-Light-NFL.png
│   ├── Budweiser (2).png
│   ├── Budweiser-American-Style-Lager-King-of-Beers-since-1876-Budweiser.png
│   ├── cre8tive-soul-logo.png
│   ├── khis-next-logo.png
│   ├── Our-Seltzer-Bud-Light.png
│   └── Red-gold-robot-animation.mp4
└── README.md           # This file
```

## 🎨 Customization

### Colors
Edit the CSS variables in `style.css`:

```css
:root {
    --color-bg: #0a0a0a;           /* Background color */
    --color-text: #e0e0e0;         /* Text color */
    --color-accent: #00ff88;       /* Accent color (green) */
    /* ... more colors */
}
```

### Content
1. **Personal Information** - Edit text directly in `index.html`
2. **Portfolio Items** - Modify or add work items in the work section
3. **Skills** - Update skill cards with your expertise
4. **Contact Info** - Update email and social links

### Three.js Scene
Customize the particle system in `three-scene.js`:
- Particle count (line 35)
- Colors (lines 40-41)
- Animation speed (lines 103-108)

## 🛠 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox & grid
- **JavaScript (ES6+)** - Interactive functionality
- **Three.js** - 3D graphics and animations
- **Google Fonts** - Inter & Space Mono

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## ⚡ Performance

- Lightweight (~50KB total)
- Lazy loading for smooth initial load
- Optimized animations (60fps target)
- Minimal dependencies

## 🎯 Sections

1. **Hero** - Eye-catching introduction with Three.js background + AI services highlight
2. **About** - Professional background, personal photo, and Altared Alchemie mention
3. **Work** - Portfolio showcase with real images and featured Altared Alchemie project
4. **Skills** - Core competencies with featured AI automation card
5. **Contact** - Get in touch section

## 🤖 Featured: Altared Alchemie

This portfolio prominently features [Altared Alchemie](https://altaredalchemie.com), a faith-driven AI consultancy helping businesses, churches, and creators:

- **AI Automation** - Workflows and process automation
- **AI Chatbots** - Smart customer support solutions
- **AI Avatars** - Personalized AI representatives
- **Custom Websites** - Lightning-fast AI-powered development
- **Training & Consulting** - Team workshops and strategy guidance

The AI services are highlighted in:
- Hero section with dedicated CTA button
- Featured work item in portfolio
- About section mention
- Featured skill card with "NEW" badge

## 🔧 Configuration

### Adding New Portfolio Items

Add a new work item with an image in the work section of `index.html`:

```html
<div class="work-item" data-category="your-category" data-aos="fade-up">
    <div class="work-image">
        <img src="media/your-image.png" alt="Project Name" class="work-img">
    </div>
    <div class="work-info">
        <h3 class="work-title">Your Project Title</h3>
        <p class="work-category">Category Name</p>
        <a href="https://yourproject.com" target="_blank" rel="noopener" class="work-link">View Live Site →</a>
    </div>
</div>
```

For logo designs, add the `logo-img` class for proper display:
```html
<img src="media/logo.png" alt="Logo" class="work-img logo-img">
```

### Adding New Filter Categories

1. Add a filter button in `index.html`:
```html
<button class="filter-btn" data-filter="new-category">new_category</button>
```

2. Use the category in work items:
```html
<div class="work-item" data-category="new-category">
```

## 💡 Tips

- ✅ Real images already integrated from media folder
- ✅ Profile photo displayed in about section
- ✅ Featured AI services prominently placed
- Update the email address in the contact section to your preferred contact
- Add your actual LinkedIn profile URL
- Customize colors to match your personal brand
- Consider adding Google Analytics for tracking
- Update project links to point to live websites

## 📄 License

This project is free to use for personal and commercial purposes.

## 👤 Author

**Jimmie Miller**
- Website: [jimmiemiller.com](https://www.jimmiemiller.com)
- LinkedIn: [linkedin.com/in/jimmie-miller](https://linkedin.com)

## 🙏 Acknowledgments

- Inspired by Patrick David's minimalist portfolio design
- Three.js community for excellent documentation
- Modern web design principles and best practices

---

Built with ❤️ by Jimmie Miller

