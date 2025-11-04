# Aquapharm Website - Next.js

A modern, fast, and fully responsive website for Aquapharm Chemicals Private Limited, built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## Features

✅ **Fully Responsive Design** - Mobile-first approach, works on all devices
✅ **Fast Performance** - Optimized with Next.js 16 and Turbopack
✅ **SEO Optimized** - Built-in metadata and semantic HTML
✅ **Modern UI/UX** - Clean design with gradient themes matching brand colors
✅ **Complete Pages** - All pages from the original WordPress site
✅ **Dropdown Navigation** - Multi-level navigation menus
✅ **Hero Slider** - Auto-rotating hero section with multiple slides
✅ **Contact Forms** - Interactive contact and sales enquiry forms
✅ **TypeScript** - Type-safe codebase

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Build Tool**: Turbopack (Next.js bundler)

## Project Structure

```
aquapharm-nextjs/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout with Header & Footer
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   ├── about/                   # About section
│   │   ├── page.tsx            # About us page
│   │   ├── leadership-team/    # Leadership team page
│   │   ├── our-journey/        # Company journey page
│   │   └── certifications/     # Certifications page
│   ├── products/                # Products section
│   │   ├── page.tsx            # Products overview
│   │   ├── phosphonates/       # Phosphonates products
│   │   ├── biodegradable-green-chelates/
│   │   ├── polymers/
│   │   ├── questoll-detergent-additive/
│   │   └── others/
│   ├── industry/                # Industries section
│   │   ├── page.tsx            # Industries overview
│   │   ├── detergents/
│   │   ├── industrial-cleaners/
│   │   ├── water-treatment/
│   │   ├── oil-and-gas/
│   │   ├── textiles/
│   │   └── others/
│   ├── innovation-centre/       # Innovation centre page
│   ├── csr/                     # CSR page
│   ├── careers/                 # Careers page
│   ├── investor-relations/      # Investor relations page
│   ├── contact/                 # Contact page
│   └── sales-enquiry/           # Sales enquiry page
├── components/                   # Reusable components
│   ├── Header.tsx               # Navigation header with dropdown
│   ├── Footer.tsx               # Footer component
│   └── HeroSlider.tsx           # Hero slider component
├── public/                       # Static assets
│   └── images/                  # Image assets
└── package.json                 # Dependencies

```

## Pages Overview

### Main Navigation Pages

1. **HOME** (`/`)
   - Hero slider with 4 rotating slides
   - About section
   - Products showcase
   - Industries served
   - Call-to-action sections

2. **ABOUT US** (`/about`)
   - Company overview
   - Mission & Vision
   - Core values
   - RP-Sanjiv Goenka Group integration
   - Sub-pages:
     - Leadership Team
     - Our Journey
     - Certifications

3. **PRODUCTS** (`/products`)
   - Products overview
   - Categories:
     - Phosphonates
     - Biodegradable/Green Chelates
     - Polymers
     - Questoll Detergent Additive
     - Others

4. **INDUSTRY** (`/industry`)
   - Industries overview
   - Sectors:
     - Detergents
     - Industrial Cleaners
     - Water Treatment
     - Oil and Gas
     - Textiles
     - Others

5. **INNOVATION CENTRE** (`/innovation-centre`)
   - R&D capabilities
   - Research focus areas
   - Innovation facilities

6. **CSR** (`/csr`)
   - Corporate social responsibility initiatives
   - Sustainability programs
   - Community engagement

7. **CAREERS** (`/careers`)
   - Career opportunities
   - Company culture
   - Application process

8. **INVESTOR RELATIONS** (`/investor-relations`)
   - Company information
   - Financial highlights
   - Corporate governance

### Additional Pages

- **Contact** (`/contact`) - Contact form and information
- **Sales Enquiry** (`/sales-enquiry`) - Product enquiry form

## Design Features

### Color Scheme
- **Primary**: Purple (#9333ea to #7e22ce)
- **Secondary**: Orange/Red (#f97316 to #ef4444)
- **Accent**: Yellow (#fbbf24)
- **Gradients**: Purple to Orange/Red transitions

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Key Components

#### Header
- Sticky navigation
- Dropdown menus for About, Products, and Industry
- Mobile hamburger menu
- Search functionality
- Brand logos (RP-Sanjiv Goenka + Aquapharm)

#### Hero Slider
- Auto-rotating slides (5 seconds)
- Navigation arrows
- Dot indicators
- Floating CTA buttons (Contact Us, Sales Enquiry)
- Responsive design

#### Footer
- Quick links
- Contact information
- Social media links
- Copyright information

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Navigate to project directory
cd aquapharm-nextjs

# Install dependencies
npm install

# Run development server
npm run dev
```

The application will be available at `http://localhost:3000` (or next available port).

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Performance Optimizations

1. **Next.js Image Optimization** - Automatic image optimization
2. **Code Splitting** - Automatic route-based code splitting
3. **Turbopack** - Ultra-fast bundler for development
4. **React Server Components** - Reduced client-side JavaScript
5. **CSS Optimization** - Tailwind CSS purging unused styles
6. **Lazy Loading** - Images and components load on demand

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

The website can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Customization

### Adding New Pages
1. Create a new folder in `app/` directory
2. Add `page.tsx` file
3. Update navigation in `components/Header.tsx`

### Modifying Styles
- Global styles: `app/globals.css`
- Tailwind config: Uses Tailwind CSS v4 with @tailwindcss
- Component styles: Inline Tailwind classes

### Updating Content
- Edit respective page files in `app/` directory
- Update component props in `components/`

## License

© 2025 Aquapharm Chemicals Private Limited. All rights reserved.

## Support

For technical support or questions, contact the development team.
