# Putri Shreya — Portfolio

> Web3 Enthusiast & Content Creator portfolio website.

## 🔗 Live Site

**GitHub Pages:** `https://rann-xyz.github.io/putri-/`

## 🚀 Deploy Steps

1. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/rann-xyz/putri-.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Repository **Settings → Pages**
   - Source: `main` branch, `/ (root)` folder
   - Save — live in ~2 minutes

## 📁 Project Structure

```
/
├── index.html              # Home
├── about.html              # About
├── portfolio.html          # Portfolio (5 experiences)
├── contact.html            # Contact
├── assets/
│   ├── css/style.css       # Styles (soft elegant dark theme)
│   ├── js/
│   │   ├── main.js         # Navbar, footer, portfolio data, form
│   │   └── socials.js      # Social links config (easy to extend)
│   └── images/
│       ├── profile.webp    # Optimized (31KB)
│       └── profile.png     # Original (1.5MB)
└── README.md
```

## 🎨 Design

- **Theme:** Soft elegant dark — dusty rose/gold accent on deep charcoal
- **Fonts:** Playfair Display (serif headings) + DM Sans (body)
- **Categories:** Color-coded badges (Web3 Community, DEX, AI Agent, Layer 0, Crypto App)
- **Features:** JS partials for navbar/footer, scroll animations, mobile hamburger menu

## ⚙️ Customizing

### Portfolio Data
Edit `assets/js/main.js` → `PORTFOLIO_DATA` array

### Social Links
Edit `assets/js/socials.js` → `SOCIALS` array (add Instagram, TikTok, etc.)

### Contact Info
Update `CONTACT_INFO` in `socials.js`

### Colors
Edit CSS variables in `assets/css/style.css` → `:root` section

## 📱 Browser Support

Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

---

Built with ❤️ for the Web3 community.