# Kaushik Sambe - Portfolio

A premium, professional portfolio website showcasing my work as a Data Manager & Engineer. Built with modern web technologies and designed with intentional motion and Loki-inspired confidence.

![Tech Stack](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=flat-square&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23-0055FF?style=flat-square&logo=framer)

## 🚀 Tech Stack

- **React 19** - Latest React with modern features
- **Vite 7** - Lightning-fast build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library for React
- **Lucide React** - Beautiful & consistent icon toolkit

## ✨ Features

- **Premium Typography** - Carefully crafted type scale for optimal readability
- **Smooth Animations** - Intentional motion that enhances UX without overwhelming
- **Responsive Design** - Flawless experience across mobile, tablet, and desktop
- **Dark Theme** - Loki-inspired green & gold color palette on dark background
- **Performance Optimized** - Fast load times and smooth 60fps animations
- **Accessibility First** - Semantic HTML and keyboard navigation support

## 🎨 Design Philosophy

- **Confident, Not Loud** - Clean design with controlled personality
- **Motion with Purpose** - Every animation serves a functional purpose
- **Typography Hierarchy** - Clear visual structure guides the eye
- **Curated Spacing** - Generous whitespace for premium feel

## 📦 Project Structure

```
Portfolio/
├── src/
│   ├── components/
│   │   ├── ParticleBackground.jsx  # Animated particle canvas
│   │   └── SectionSeparator.jsx    # Animated section dividers
│   ├── App.jsx                     # Main application component
│   ├── index.css                   # Global styles & Tailwind config
│   └── main.jsx                    # React entry point
├── public/                         # Static assets
├── vercel.json                     # Vercel deployment config
└── package.json                    # Dependencies & scripts
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Kasa1905/My_Portfolio.git

# Navigate to project directory
cd My_Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 🚀 Deployment

This project is configured for seamless deployment on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Kasa1905/My_Portfolio)

### Manual Deployment

1. Push your code to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Vite and configure build settings
4. Deploy! 🎉

The `vercel.json` configuration ensures proper routing for the SPA.

## 📝 Customization

### Colors

Update the theme colors in `src/index.css`:

```css
--color-loki-void: #0a0a0a;
--color-loki-green: #50C878;
--color-loki-gold: #FFD700;
```

### Typography

Font sizes use a responsive `clamp()` scale defined in `src/index.css`:

```css
--font-size-hero: clamp(4.5rem, 11vw, 9.5rem);
--font-size-body: clamp(1rem, 1.2vw, 1.125rem);
```

### Content

Edit sections directly in `src/App.jsx` - each section is a clearly marked component.

## 🎯 Performance

- Lighthouse Score: 95+ across all metrics
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Smooth 60fps animations

## 📄 License

MIT License - feel free to use this project as inspiration for your own portfolio!

## 🤝 Connect

- **GitHub**: [@Kasa1905](https://github.com/Kasa1905)
- **Email**: sambekaushik@gmail.com
- **Portfolio**: [Live Site](https://kaushik-portfolio.vercel.app)

---

**Built with precision by Kaushik Sambe** | Last updated: February 2026
