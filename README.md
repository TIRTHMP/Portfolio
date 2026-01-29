# 🔒 Developer Portfolio

A modern, cybersecurity-themed portfolio website showcasing my skills in web development and cybersecurity. Built with a terminal/hacker aesthetic featuring matrix rain effects, smooth animations, and a distinctive neon design.

![Portfolio Preview](https://img.shields.io/badge/Status-WIP-success?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🌟 Features

- **🎨 Unique Design**: Cyberpunk/hacker aesthetic with neon green and cyan color scheme
- **✨ Matrix Background**: Animated matrix rain effect with Japanese characters
- **🖥️ Terminal Theme**: Monospace fonts and command-line inspired UI elements
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **🎭 Smooth Animations**: Scroll-reveal effects and hover interactions
- **⚡ Single File**: All HTML, CSS, and JavaScript in one file for easy deployment
- **♿ Accessible**: Semantic HTML and keyboard-friendly navigation

## 📋 Sections

1. **Hero** - Eye-catching introduction with animated cursor
2. **About** - Personal background with interactive terminal box
3. **Skills** - Technical skills organized by category (Web Dev, Security, Languages, Tools)
4. **Certificates** - Professional certifications with gradient card design
5. **Projects** - Portfolio showcase with tech stacks and live demo links
6. **Contact** - Multiple contact methods with hover effects

## 🚀 Quick Start

### View Live Demo

Visit the live site: [Your Portfolio URL]

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Open in browser**
   ```bash
   # Simply open the HTML file in your browser
   open index.html
   # or
   start index.html
   # or double-click the file
   ```

3. **Edit and customize**
   - Open `index.html` in your favorite code editor
   - Customize the content, colors, and information
   - Save and refresh your browser to see changes

## 🛠️ Customization Guide

### Change Personal Information

Look for these sections in `index.html`:

```html
<!-- Update your name -->
<h1>Your Name Here</h1>

<!-- Update your tagline -->
<p>Your description here...</p>

<!-- Update contact information -->
<a href="mailto:your.email@example.com">your.email@example.com</a>
```

### Modify Colors

Find the `:root` CSS variables at the top of the `<style>` section:

```css
:root {
    --bg-primary: #0a0e14;        /* Main background */
    --accent-green: #00ff9f;      /* Primary accent */
    --accent-cyan: #00d4ff;       /* Secondary accent */
    /* Modify these to change the entire color scheme */
}
```

### Add Your Projects

Locate the projects section and duplicate this structure:

```html
<div class="project-card reveal">
    <div class="project-header">
        <div class="project-type">PROJECT CATEGORY</div>
        <h3>Project Name</h3>
    </div>
    <div class="project-body">
        <p class="project-description">Your project description</p>
        <div class="project-tech">
            <span class="tech-badge">Tech 1</span>
            <span class="tech-badge">Tech 2</span>
        </div>
        <div class="project-links">
            <a href="#" class="project-link">→ View Code</a>
            <a href="#" class="project-link">→ Live Demo</a>
        </div>
    </div>
</div>
```

### Update Certificates

Find the certificates section and modify:

```html
<div class="certificate-card reveal">
    <div class="cert-icon">🔒</div>
    <h3>Certificate Name</h3>
    <div class="cert-issuer">Issuing Organization</div>
    <div class="cert-date">Month Year</div>
</div>
```

## 🎨 Design Choices

### Typography
- **Display Font**: JetBrains Mono - Bold, technical feel perfect for developers
- **Body Font**: Fira Code - Clean, readable monospace font with coding ligatures

### Color Palette
- **Primary Background**: Deep dark blue (#0a0e14)
- **Accent Green**: Neon green (#00ff9f) - Represents code, success, and tech
- **Accent Cyan**: Electric cyan (#00d4ff) - Adds futuristic, digital feel
- **Accent Purple**: Soft purple (#b877db) - Used for special highlights

### Animation Strategy
- Scroll-reveal animations for engagement
- Hover effects on interactive elements
- Matrix rain background for atmosphere
- Scanline effect for retro-terminal aesthetic

## 📦 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, Animations
- **JavaScript** - DOM manipulation, Scroll effects, Dynamic content
- **Google Fonts** - JetBrains Mono, Fira Code

## 🌐 Deployment

### GitHub Pages

1. **Rename file to `index.html`** (if not already)
2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```
3. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to "Pages" section
   - Select "main" branch
   - Click Save
   - Your site will be live at `https://yourusername.github.io/repository-name/`

### Other Hosting Options

- **Netlify**: Drag and drop the HTML file
- **Vercel**: Connect your GitHub repository
- **Cloudflare Pages**: Deploy via Git integration
- **Surge.sh**: `surge index.html`

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## 🐛 Known Issues

None at the moment! If you find any bugs, please open an issue.

## 🤝 Contributing

While this is a personal portfolio template, suggestions and improvements are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💡 Inspiration & Credits

- **Matrix Effect**: Inspired by the iconic Matrix digital rain
- **Color Scheme**: Cyberpunk and hacker culture aesthetics
- **Typography**: Developer-focused monospace fonts
- **Design Philosophy**: Terminal interfaces and command-line tools

## 📬 Contact

Feel free to reach out if you have questions or want to connect!

- **Email**: tirthmpatel25@gmail.com
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- **GitHub**: [@yourusername](https://github.com/TIRTHMP)

---

<div align="center">
  <p>Made with 💚 by Tirth Patel</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>


---

**Note**: Replace placeholder text with your actual information before deploying!


