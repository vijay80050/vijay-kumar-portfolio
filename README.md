# Vijay Kumar - Portfolio Website

A modern, responsive portfolio website showcasing expertise as a Full Stack Developer and DevOps Engineer, specializing in the MERN stack.

## 🚀 Features

- **Modern Design**: Clean, professional UI built with React.js and Tailwind CSS
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Engaging scroll animations and hover effects
- **SEO Optimized**: Comprehensive meta tags, Open Graph, and structured data
- **Contact Form**: Working contact form with Formspree integration
- **Analytics Ready**: Google Analytics 4 integration for tracking
- **PWA Support**: Progressive Web App with manifest and icons
- **Accessibility**: ARIA labels, skip-to-content, keyboard navigation

## 🛠️ Tech Stack

- **Frontend**: React.js 18
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: React Icons
- **Deployment**: Ready for Vercel, Netlify, or GitHub Pages

## 📦 Installation

1. Navigate to the project directory:

```bash
cd "Vijay kumar portfolio"
```

2. Install dependencies:

```bash
npm install
```

## 🏃 Running the Project

### Development Mode

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## ⚙️ Configuration

### 1. Contact Form (Already Configured)

- Formspree ID: Update `formspreeId` in `src/config/constants.js`
- To change: Update `formspreeId` in `src/config/constants.js`

### 2. Google Analytics (Optional)

1. Get your GA4 Measurement ID from [Google Analytics](https://analytics.google.com)
2. Add to `src/config/constants.js`:
   ```javascript
   analytics: {
     googleAnalyticsId: 'G-XXXXXXXXXX',
   }
   ```

### 3. Update Site URL (After Deployment)

1. Update `src/config/constants.js`:
   ```javascript
   site: {
     url: 'https://yourdomain.com',
   }
   ```
2. Update URLs in `index.html` (replace `https://vijay.dev` with your domain)

### 4. Personal Information

Update `src/config/constants.js` with your details:
- Name, email, phone, location
- Social media links
- Site metadata

## 📁 Project Structure

```
Vijay kumar portfolio/
├── public/
│   ├── favicon.svg, favicon.ico, favicon.png
│   ├── icon-192.png, icon-512.png
│   ├── og-image.jpg, twitter-image.jpg
│   ├── resume.pdf
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   ├── BackToTop.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── ErrorBoundary.jsx
│   │   ├── SkipToContent.jsx
│   │   └── AnimatedBackground.jsx
│   ├── config/
│   │   └── constants.js
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── hooks/
│   │   ├── useActiveSection.js
│   │   ├── useScrollAnimation.js
│   │   └── useAnalytics.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🎨 Sections

1. **Hero**: Introduction, call-to-action, and resume download
2. **About**: Personal background and expertise
3. **Skills**: Technical skills organized by category
4. **Experience**: Professional work experience
5. **Projects**: Featured projects with details
6. **Education**: Academic background
7. **Contact**: Contact form and information
8. **Footer**: Social links and copyright

## 🔧 Customization

### Update Personal Info

Edit `src/config/constants.js`:
- Personal information (name, email, phone, location)
- Social media links
- Site metadata
- Analytics and contact form settings

### Add Projects

Edit `src/components/Projects.jsx`:
- Add project objects to the `projects` array
- Include `githubUrl` and `demoUrl` when available

### Change Colors

Edit `tailwind.config.js` to modify the color scheme

### Add Sections

1. Create component in `src/components/`
2. Import and add to `src/App.jsx`
3. Add navigation item in `src/components/Navbar.jsx`

## 📱 Social Media Sharing

The portfolio includes Open Graph and Twitter Card meta tags for:
- WhatsApp, Instagram, Facebook, LinkedIn
- Twitter/X, Telegram, Discord, Slack

Images required:
- `og-image.jpg` (1200x630px) - For most platforms
- `twitter-image.jpg` (1200x630px) - For Twitter

## 🚀 Deployment

### Recommended Platforms:
- **Vercel** - Best for React apps, automatic deployments
- **Netlify** - Great for static sites, easy setup
- **GitHub Pages** - Free, works with GitHub Actions

### Before Deploying:
1. Update all URLs in `constants.js` and `index.html` to your production domain
2. Ensure all images/icons are in the `public` folder
3. Test the contact form
4. Verify analytics is working (if configured)

## 📊 Analytics

Google Analytics 4 tracks:
- Page views
- Mobile vs Desktop visitors
- Android and iOS devices
- Resume downloads
- Contact form submissions
- User behavior and engagement

View data at: [Google Analytics Dashboard](https://analytics.google.com)

## 🆘 Troubleshooting

### Contact Form Not Working
- Verify Formspree ID in `constants.js`
- Check browser console for errors
- Ensure all required fields are filled

### Analytics Not Tracking
- Verify GA4 tracking ID is correct
- Check browser console for errors
- Ensure ID starts with `G-`

### Icons Not Showing
- Verify icon files are in `public` folder
- Clear browser cache
- Check file names match manifest.json

## 📝 License

This project is open source and available under the MIT License.

## 📧 Contact

- **Email**: vijaykumar.cse002@gmail.com
- **LinkedIn**: [linkedin.com/in/vijay-kumar-702b921bb](https://linkedin.com/in/vijay-kumar-702b921bb)
- **GitHub**: [github.com/vijay80050](https://github.com/vijay80050)

---

Built with ❤️ by Vijay Kumar
