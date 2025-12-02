---
description: Repository Information Overview
alwaysApply: true
---

# Real Estate Landing Page Information

## Summary

A modern React-based real estate landing page built with Vite, featuring Tailwind CSS for styling and integrated animations. The project uses React 19 with Framer Motion for advanced animations and Swiper for carousel functionality. It's configured with ESLint for code quality and includes components for hero sections and search functionality.

## Structure

The project follows a standard React + Vite structure:
- **`/src`**: Source code containing React components, pages, data files, and stylesheets
  - **`/components`**: Reusable React components (Hero, SearchBar)
  - **`/pages`**: Page-level components
  - **`/data`**: Data files and constants
  - **`/styles`**: CSS stylesheets
- **`/public`**: Static assets (Vite SVG)
- **`index.html`**: HTML entry point that mounts React app to `#root` div
- Configuration files for Vite, Tailwind CSS, ESLint, and PostCSS

## Language & Runtime

**Language**: JavaScript (JSX)  
**Node Version**: v24.10.0 (confirmed from execution environment)  
**Module Type**: ES6 modules (`"type": "module"` in package.json)  
**Build System**: Vite v7.2.4  
**Package Manager**: npm (package-lock.json present)

## Dependencies

**Main Dependencies**:
- **react** ^19.2.0 - UI library
- **react-dom** ^19.2.0 - React DOM rendering
- **framer-motion** ^12.23.24 - Animation library
- **swiper** ^12.0.3 - Touch carousel/slider

**Development Dependencies**:
- **@vitejs/plugin-react** ^5.1.1 - Vite React plugin with Babel/oxc support
- **tailwindcss** ^4.1.17 - Utility-first CSS framework
- **eslint** ^9.39.1 - JavaScript linter
- **postcss** ^8.5.6 - CSS processor
- **autoprefixer** ^10.4.22 - PostCSS plugin for vendor prefixes
- **@types/react** ^19.2.5 - React TypeScript types
- **@types/react-dom** ^19.2.3 - React DOM TypeScript types
- **eslint-plugin-react-hooks** ^7.0.1 - ESLint rules for React Hooks
- **eslint-plugin-react-refresh** ^0.4.24 - ESLint rules for React Refresh
- **globals** ^16.5.0 - Global variable references for linting

## Build & Installation

```bash
npm install
npm run dev          # Start development server (Vite HMR enabled)
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint on all .js and .jsx files
```

## Configuration

**Vite Configuration** (`vite.config.js`):
- Integrates `@vitejs/plugin-react` for React support with HMR

**Tailwind CSS Configuration** (`tailwind.config.js`):
- Custom color scheme: primary (`#1E3A8A`), accent (`#FBBF24`), neutral (`#F3F4F6`), dark (`#111827`)
- Custom fonts: Poppins for display, Inter for body text
- Custom shadow: soft shadow style
- Content paths: `index.html` and `src/**/*.{js,jsx}`

**PostCSS Configuration** (`postcss.config.js`):
- Tailwind CSS and Autoprefixer plugins enabled

**ESLint Configuration** (`eslint.config.js`):
- Targets `.js` and `.jsx` files
- Extends ESLint recommended config with React Hooks and React Refresh rules
- Ignores `/dist` directory
- ECMAScript 2020 with latest parser options
- Browser global environment

## Entry Points

- **HTML Entry**: `index.html` - Root HTML file with `<div id="root"></div>` mounting point
- **Application Entry**: `src/main.jsx` - React application initialization
- **Main Component**: `src/App.jsx` - Root React component

## Testing

No testing framework currently configured in the project.

## Version Info

- **Project Version**: 0.0.0
- **Private Package**: true (not published to npm)