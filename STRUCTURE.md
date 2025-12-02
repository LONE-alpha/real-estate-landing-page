# Project Structure

## Directory Organization

```
real-estate-landing/
│
├── src/
│   ├── components/
│   │   ├── BackToTop.jsx              # Scroll-to-top button component
│   │   ├── Footer.jsx                 # Footer section component
│   │   ├── Header.jsx                 # Navigation header component
│   │   ├── Hero.jsx                   # Hero banner section
│   │   ├── Preloader.jsx              # Loading animation component
│   │   ├── PropertyCard.jsx           # Individual property card
│   │   ├── PropertyMap.jsx            # Map integration for properties
│   │   ├── PropertyModal.jsx          # Property detail modal
│   │   ├── PropertySection.jsx        # Properties grid section
│   │   ├── PropertySlider.jsx         # Property carousel/slider
│   │   ├── SearchBar.jsx              # Search functionality component
│   │   ├── SidebarFilter.jsx          # Advanced filter sidebar
│   │   ├── TestimonialCard.jsx        # Individual testimonial card
│   │   └── Testimonials.jsx           # Testimonials carousel section
│   │
│   ├── data/
│   │   ├── properties.json            # Property listings data
│   │   └── testimonials.json          # Customer testimonials data
│   │
│   ├── pages/
│   │   ├── Home.jsx                   # Main landing page
│   │   └── PropertySingle.jsx         # Individual property detail page
│   │
│   ├── styles/
│   │   └── globals.css                # Global stylesheet
│   │
│   ├── App.jsx                        # Root React component
│   └── main.jsx                       # Application entry point
│
├── public/
│   ├── img/                           # Image assets directory
│   └── vite.svg                       # Vite logo
│
├── Configuration & Documentation
│   ├── index.html                     # HTML entry point
│   ├── vite.config.js                 # Vite build configuration
│   ├── tailwind.config.js             # Tailwind CSS customization
│   ├── postcss.config.js              # PostCSS configuration
│   ├── eslint.config.js               # ESLint rules
│   ├── package.json                   # Project dependencies & scripts
│   ├── package-lock.json              # Locked dependency versions
│   ├── README.md                      # Project documentation
│   └── STRUCTURE.md                   # This file
│
└── Additional Files
    ├── .gitignore                     # Git ignore patterns
    ├── run_dev.bat                    # Batch script to run dev server
    └── FIXES_APPLIED.md               # History of applied fixes
```

## File Statistics

| Category | Count | Details |
|----------|-------|---------|
| Components | 14 | UI components for various sections |
| Data Files | 2 | Properties and testimonials JSON |
| Pages | 2 | Home and PropertySingle |
| Styles | 1 | Global CSS file |
| Root Components | 2 | App.jsx and main.jsx |
| **Total** | **21** | Core source files |

## Component Breakdown

### Layout Components (3)
- **Header**: Navigation and branding
- **Footer**: Footer information and links
- **Preloader**: Initial page loading animation

### Property Management Components (5)
- **PropertyCard**: Display single property listing
- **PropertySlider**: Featured properties carousel
- **PropertySection**: Properties grid layout
- **PropertyModal**: Property details popup
- **PropertyMap**: Location mapping interface

### User Interface Components (4)
- **Hero**: Landing page hero section
- **SearchBar**: Property search input
- **SidebarFilter**: Advanced filtering options
- **BackToTop**: Scroll-to-top functionality

### Testimonials Components (2)
- **Testimonials**: Testimonials section container
- **TestimonialCard**: Individual testimonial display

## Data Structure

### Properties Data
**File**: `src/data/properties.json`
- Contains array of property objects
- Includes details: price, location, features, images, etc.

### Testimonials Data
**File**: `src/data/testimonials.json`
- Contains array of testimonial objects
- Includes: customer name, review, rating, etc.

## Entry Points

| File | Role |
|------|------|
| `index.html` | HTML entry point with `#root` div |
| `src/main.jsx` | React application initialization |
| `src/App.jsx` | Root React component |

## Dependencies Management

- **package.json**: Declares all project dependencies and scripts
- **package-lock.json**: Locks specific versions for consistency
- **node_modules/**: Installed dependencies (generated during `npm install`)

## Styling Approach

- **Tailwind CSS**: Utility-first CSS framework (primary styling)
- **globals.css**: Global styles and custom utilities
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

## Build & Development

- **Vite**: Modern build tool with HMR support
- **ESLint**: Code quality and style checking
- **Babel/oxc**: JavaScript transpilation via Vite plugin

---

**Last Updated**: December 2, 2025
**Node Version**: v24.10.0
**Module Type**: ES6 (configured in package.json)
