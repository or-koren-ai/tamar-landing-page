# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project Overview

Hebrew/RTL medical practice landing page for Dr. Tamar Koren, dermatologist in Haifa. Built with Next.js 14 App Router, TypeScript, TailwindCSS, and Radix UI. Mobile-first, SEO-optimized.

## Development Commands

```bash
npm run dev          # Development server (localhost:3000)
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint check
```

## Repository Structure

```
app/
├── (legal)/                        # Route group for legal pages
├── services/[slug]/               # Dynamic service pages
├── layout.tsx                     # Root layout (RTL, fonts)
├── page.tsx                       # Homepage
└── sitemap.ts, robots.ts          # SEO

components/
├── features/                      # Homepage sections (ordered top→bottom)
│   ├── header/                    # Navigation
│   ├── about/                     # Doctor bio
│   ├── services/                  # Services grid
│   ├── reviews/                   # Testimonials
│   ├── appointments/              # Booking CTAs
│   └── press/                     # Media coverage
├── shared/                        # Reusable components
├── icons/                         # SVG service icons
└── ui/                           # Radix UI primitives

lib/
├── config/site-config.ts         # Site metadata, contact info
├── data/                         # Static content (services, press, reviews)
├── seo/structured-data.ts        # JSON-LD schemas
└── tracking/analytics.ts         # Vercel Analytics, Umami

types/                            # TypeScript definitions
└── index.ts                      # Central exports

public/assets/
├── images/                       # Photos
├── graphics/                     # Decorative elements
├── icons/                        # App icons
└── logos/press/                  # Media outlet logos
```

## Key Patterns

### Configuration
- **Site data**: `lib/config/site-config.ts`
- **Services**: `lib/data/services.ts`
- **Types**: Import from `@/types`
- **Path aliases**: `@/*` for absolute imports

### Components
- **Feature components** (`features/`): Organized by homepage visual order (see `features/README.md`)
- **Server components by default**: Use Client Components only for interactivity
- **Types**: All in `types/` folder, centrally exported

### Styling
- **RTL-first**: Tailwind logical utilities (`ps-*`, `pe-*`, `text-start`)
- **Colors**: Medical green theme (`#6b8e6b`, `#859a85`, `#A27B5C`)
- **Typography**: Hebrew-first (Heebo, Assistant)
- **Mobile-first**: Responsive breakpoints

### SEO & Content
- **Language**: All content in Hebrew, URLs in English (`/services/acne`)
- **Metadata**: Hebrew titles (<60 chars), descriptions (140-160 chars)
- **Structured data**: JSON-LD in `lib/seo/structured-data.ts`
- **Images**: Use `next/image` with Hebrew alt text

### Performance Targets
- Lighthouse mobile: SEO ≥95, Performance ≥90
- LCP ≤2.5s on mid-range mobile

## Common Tasks

### Add New Service
1. Update `lib/data/services.ts`
2. Create icon in `components/icons/` if needed
3. Update `app/sitemap.ts`

### Add Homepage Section
1. Create folder in `components/features/`
2. Update `features/README.md` with visual order
3. Import in `app/page.tsx` at correct position

### Modify Contact Info
Update `lib/config/site-config.ts` and structured data in `lib/seo/structured-data.ts`

### Asset Management
- Images → `public/assets/images/`
- Graphics → `public/assets/graphics/`
- Icons → `public/icons/`
- Press logos → `public/logos/press/`

## Development Guidelines

- Server Components by default
- Client Components only for interactivity
- PascalCase for components
- TypeScript types for all props
- Check `components/ui/` before adding libraries
- Medical content must be factual and professional

## Accessibility
- Semantic HTML with proper heading hierarchy
- Hebrew `aria-label` for interactive elements
- Focus states on all interactive elements
- Color contrast compliance
- Keyboard navigation support

## Deployment
- Platform: Vercel
- Environment: Set `NEXT_PUBLIC_SITE_URL` for production
- Verify Hebrew fonts load correctly
- Test mobile performance on real devices
