# USA Custom Card

A fast, modern, and responsive web app to showcase and manage custom card designs and creative services.

---

## Table of contents
- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Scripts](#scripts)
- [Environment](#environment)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License & Author](#license--author)

---

## About
USA Custom Card is a performance-focused React + TypeScript app built with Vite and Tailwind CSS. It presents custom card designs, services, and business details in a clean, accessible, and responsive UI.

## Features
- Clean, modern design
- Fully responsive layout
- Fast development & production builds via Vite
- Component-driven architecture (React + TypeScript)
- Tailwind CSS for utility-first styling
- Accessible UI components (shadcn/ui)
- Contact section and project showcases
- SEO-friendly structure and smooth animations

## Tech Stack
- Vite
- React + TypeScript
- Tailwind CSS
- shadcn/ui
- Node.js / npm

## Quick start
Prerequisites: Node.js v16+

Clone and install:
```bash
git clone <YOUR_GIT_URL>
cd usa-custom-card
npm install
```

Start development server:
```bash
npm run dev
# Open http://localhost:5173
```

Build for production:
```bash
npm run build
npm run preview
```

## Scripts
- npm run dev — Start dev server
- npm run build — Create production build
- npm run preview — Preview production build
- npm run type-check — Run TypeScript checks (if configured)

## Environment
Create a `.env` in the project root:
```
VITE_SITE_URL=https://yourdomain.com
VITE_CONTACT_EMAIL=your-email@example.com
```
Do not commit `.env` to source control.

## Project structure
src/
- components/ — Reusable UI components
- pages/ — Page sections and routes
- assets/ — Images & media
- styles/ — Global styles
- lib/ — Utilities
- hooks/ — Custom hooks
public/ — Static assets
index.html
package.json

## Customization
- Hero section: `src/components/Hero.tsx`
- Projects / cards: `src/data/projects.ts`
- Skills & services: `src/data/skills.ts`
- Contact info: `src/data/contact.ts`
- Theme & Tailwind config: `tailwind.config.js`

## Deployment
Recommended hosts: Vercel, Netlify, or any static host.

Netlify
- Build command: `npm run build`
- Publish directory: `dist`

Vercel
```bash
npm i -g vercel
vercel
```

Or upload `dist/` to a custom server.

## Contributing
1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit: `git commit -m "Add feature"`
4. Push and open a PR

## License & Author
MIT License

Author: Arghya Biswas  
GitHub: @Arghya360  
Email: codehub0792@gmail.com

Made with ❤️