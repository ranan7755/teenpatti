# Gaming Link Hub Webpage

A pixel-perfect replica of the mobile gaming link hub page (matching the original `cgsure.xyz` design) featuring glassmorphism cards, glowing cosmic particle effects, animated jackpot banner, and interactive share & download actions.

## 📁 File Structure

```
├── index.html        # Main HTML structure with semantic markup
├── style.css         # Glassmorphism design, gold gradients, animations & responsiveness
├── script.js         # Configuration for links, Web Share API, clipboard fallback & particles
├── assets/           # High-resolution retina images cropped and extracted from the design
│   ├── jackpot-banner-hd.png
│   ├── teenpatti-icon-composite.png
│   ├── sabka-icon-composite.png
│   └── ...
└── README.md         # Instructions and configuration guide
```

## ⚙️ How to Customize Links

Open [`script.js`](file:///Users/naveenrana/Downloads/new%20website/script.js) and update the `CONFIG` object at the top:

```javascript
const CONFIG = {
  // Teen Patti Palat Game Links
  teenPattiPalat: {
    downloadUrl: 'https://www.palat.cc/share/AgjJjxy=1001',
    shareUrl: 'https://www.palat.cc/share/AgjJjxy=1001',
    title: 'Download Teen Patti Palat - New Version'
  },

  // Sabka Game Links
  sabkaGame: {
    downloadUrl: 'https://www.palat.cc/share/AgjJjxy=1002',
    shareUrl: 'https://www.palat.cc/share/AgjJjxy=1002',
    title: 'Download Sabka Game - New Version'
  },

  // Telegram Channel
  telegram: {
    url: 'https://t.me/drake_rioo',
    handle: '@drake_rioo'
  }
};
```

You can also change text, titles, or add more cards directly in [`index.html`](file:///Users/naveenrana/Downloads/new%20website/index.html).

## 🚀 How to Run Locally

You can open [`index.html`](file:///Users/naveenrana/Downloads/new%20website/index.html) directly in any browser:

- Double-click `index.html`, or
- Run a local server:
  ```bash
  npx serve .
  # or
  python3 -m http.server 8080
  ```
  Then visit `http://localhost:8080` in your mobile or desktop browser.

## ✨ Features Included

- **Pixel-Perfect Fidelity**: Matches the reference layout, colors, gradients, icon borders, and typography.
- **Retina Crisp Assets**: High-resolution 2x assets extracted with sub-pixel precision.
- **Glassmorphism Theme**: Translucent frosted-glass cards with purple, teal, and blue accents.
- **Golden Metallic Typography**: Dual-tone gradient title with soft glow.
- **Cosmic Dust Particles**: Subtle, lightweight background canvas particle animation.
- **Native Share Support**: Uses Web Share API on mobile devices with seamless automatic fallback to clipboard copy and toast notification.
- **Mobile-First Responsive Design**: Optimized for iPhone, Android, tablets, and desktop displays.
