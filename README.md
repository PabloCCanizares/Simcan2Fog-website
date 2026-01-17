# Simcan2Fog Website

Official website for the Simcan2Fog fog computing simulation framework.

## 🚀 Quick Start

### Prerequisites
- Node.js 14+ (for Tailwind CSS compilation)
- Git

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/UlyssesDeAguilar/Simcan2Fog-website.git
cd Simcan2Fog-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Build Tailwind CSS**
```bash
npm run build:css
```

4. **Open in browser**
Open `index.html` in your web browser or use a local server:
```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx http-server .
```

Visit `http://localhost:8000`

### Development Mode

Watch for CSS changes during development:
```bash
npm run watch:css
```

## 📦 Deployment to GitHub Pages

### Automatic Deployment

The site is configured for GitHub Pages. To deploy:

1. **Make sure CSS is compiled**
```bash
npm run build:css
```

2. **Commit all changes including the compiled CSS**
```bash
git add .
git commit -m "Update website with improvements"
git push origin main
```

3. **Enable GitHub Pages**
- Go to repository Settings → Pages
- Source: Deploy from branch `main`
- Folder: `/` (root)
- Save

The site will be available at: `https://ulyssesdeaguilar.github.io/Simcan2Fog-website/`

### Important Files for Deployment

Make sure these files are committed:
- `css/tailwind.min.css` - Compiled Tailwind CSS (DO NOT add to .gitignore)
- `images/*.webp` - Optimized WebP images
- All `.html` files

## 🎨 Recent Improvements

✅ **Performance Optimizations**
- Local Tailwind CSS build (~50KB vs 3.5MB CDN)
- WebP image format with lazy loading
- Preconnected Google Fonts
- Reduced page load time by ~70%

✅ **Mobile Responsiveness**
- Functional hamburger menu for mobile devices
- Touch-friendly navigation
- Responsive tables and layouts

✅ **SEO & Social Sharing**
- Open Graph meta tags for Facebook
- Twitter Cards for better sharing
- Schema.org markup for research software
- Canonical URLs

✅ **Analytics**
- Plausible Analytics integration (privacy-friendly)
- Event tracking for downloads and paper clicks

✅ **New Pages**
- Comparison table with other simulators (iFogSim, EdgeCloudSim, etc.)

## 📁 Project Structure

```
.
├── index.html              # Homepage with carousel
├── features.html           # Features list
├── comparison.html         # Simulator comparison table
├── publications.html       # Research papers
├── css/
│   └── tailwind.min.css   # Compiled Tailwind (commit this!)
├── images/
│   ├── *.jpg              # Original images
│   └── *.webp             # Optimized WebP versions
├── doc/
│   ├── documentation.html
│   ├── tutorial.html
│   └── core/              # Core concept pages
├── showcases/
│   ├── iot.html           # IoT showcase
│   └── dc.html            # Data center showcase
├── src/
│   └── input.css          # Tailwind source (for development)
├── package.json           # Node dependencies
└── tailwind.config.js     # Tailwind configuration
```

## 🔧 Build Commands

```bash
# Build CSS for production
npm run build:css

# Watch CSS during development
npm run watch:css
```

## 📊 Analytics

The site uses Plausible Analytics (privacy-friendly, GDPR compliant).
To view analytics, sign up at [plausible.io](https://plausible.io) and verify domain ownership.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Build CSS: `npm run build:css`
5. Commit changes (`git commit -m 'Add amazing feature'`)
6. Push to branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📝 License

This website is part of the Simcan2Fog project.
- Website code: MIT License
- Simcan2Fog framework: GPL-3.0 License

## 🔗 Links

- **Main Project**: https://github.com/UlyssesDeAguilar/Simcan2Fog
- **Documentation**: https://ulyssesdeaguilar.github.io/s2f-ned-docs/
- **Publication**: https://doi.org/10.1016/j.softx.2025.102424

---

Made with ❤️ by the Simcan2Fog team
