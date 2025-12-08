# Real Estate Landing Page

A modern, responsive real estate landing page built with **React 19**, **Vite**, and **Tailwind CSS**. Features smooth animations, property listings, advanced filtering, and an intuitive user interface.

## 🎯 Features

- **Modern UI/UX**: Sleek design with custom Tailwind CSS theme
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Property Listings**: Interactive property cards with detailed information
- **Advanced Filtering**: Sidebar filters for property search refinement
- **Property Carousel**: Swiper-powered property slider for featured listings
- **Interactive Map**: Leaflet-based map integration for property locations
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Search Functionality**: Real-time search bar for quick property discovery
- **Testimonials**: Customer reviews section with animated carousel
- **Fast Performance**: Built with Vite for lightning-fast development and build times

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | ^19.2.0 | UI library |
| Vite | ^7.2.4 | Build tool & dev server |
| Tailwind CSS | ^4.1.17 | Utility-first CSS framework |
| Framer Motion | ^12.23.24 | Animation library |
| Swiper | ^12.0.3 | Touch carousel slider |
| React Router DOM | Latest | Client-side routing |
| React Icons | Latest | Icon library |
| Leaflet / React Leaflet | Latest | Map integration |
| PostCSS | ^8.5.6 | CSS processing |
| ESLint | ^9.39.1 | Code linting |

## 📁 Project Structure

```
real-estate-landing/
├── src/
│   ├── components/
│   │   ├── BackToTop.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Preloader.jsx
│   │   ├── PropertyCard.jsx
│   │   ├── PropertyMap.jsx
│   │   ├── PropertySection.jsx
│   │   ├── PropertySlider.jsx
│   │   ├── SearchBar.jsx
│   │   ├── SidebarFilter.jsx
│   │   ├── TestimonialCard.jsx
│   │   └── Testimonials.jsx
│   │
│   ├── data/
│   │   ├── properties.js
│   │   └── testimonials.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── PropertySingle.jsx
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── public/
│   ├── img/
│   └── vite.svg
│
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18 or higher (current: v24.10.0)
- **npm**: v9 or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd real-estate-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Development

Start the development server with HMR (Hot Module Replacement):

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create an optimized production build:

```bash
npm run build
```

Output will be in the `dist/` directory.

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality with ESLint:

```bash
npm run lint
```

## 🎨 Customization

### Colors & Branding

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: '#1E3A8A',      // Main brand color
  accent: '#FBBF24',       // Highlight color
  neutral: '#F3F4F6',      // Background
  dark: '#111827'          // Text
}
```

### Fonts

The project uses:
- **Poppins**: Display typography
- **Inter**: Body text

Update these in `tailwind.config.js` under the `fontFamily` section.

## 📋 Components Overview

### Layout Components
- **Header**: Navigation bar with branding
- **Footer**: Footer section with links and information
- **Preloader**: Loading animation on page initialization

### Property Components
- **PropertyCard**: Individual property listing card
- **PropertySlider**: Carousel for featured properties
- **PropertySection**: Grid layout for property listings
- **PropertyModal**: Detailed property view modal
- **PropertyMap**: Map view integration

### Search & Filter
- **SearchBar**: Search input component
- **SidebarFilter**: Advanced property filtering options

### Other
- **Hero**: Hero banner section
- **Testimonials**: Customer testimonials carousel
- **TestimonialCard**: Individual testimonial card
- **BackToTop**: Scroll-to-top button

## 📊 Data Structure

### Properties (`src/data/properties.json`)
Stores property listings with details like price, location, features, etc.

### Testimonials (`src/data/testimonials.json`)
Customer reviews and feedback data.

## ⚙️ Configuration Files

| File | Purpose |
|---|---|
| `vite.config.js` | Vite build configuration |
| `tailwind.config.js` | Tailwind CSS theme customization |
| `postcss.config.js` | PostCSS plugins (Tailwind, Autoprefixer) |
| `eslint.config.js` | ESLint rules and configurations |
| `index.html` | HTML entry point |

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is busy, Vite will automatically use the next available port.

### Module Not Found
Clear `node_modules` and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### HMR Connection Issues
Ensure your firewall allows WebSocket connections.

## 📝 Notes

- The project uses ES6 modules (`"type": "module"` in `package.json`)
- All components are functional React components with hooks
- Styling uses Tailwind CSS utility classes
- No TypeScript configured (but types available for optional setup)

## 📄 License

This project is private and not published to npm.

---

**Last Updated**: December 2, 2025
