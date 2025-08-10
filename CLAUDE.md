# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Hebrew/RTL medical practice landing page for Dr. Tamar Koren, a dermatologist in Haifa, Israel. Built with Next.js 14 App Router, TypeScript, TailwindCSS, and Radix UI components. The site is mobile-first, SEO-optimized, and designed for conversion with clear calls-to-action.

## Development Commands

```bash
# Development
npm run dev          # Start development server on http://localhost:3000

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint to check code quality
```

## Architecture & Key Patterns

### Site Configuration
- **Central config**: `lib/site-config.ts` - Contains all site data (contact info, addresses, social links)
- **Services data**: `lib/services.ts` - Defines all medical services with structured data
- **Path aliases**: Uses `@/*` for absolute imports (configured in `tsconfig.json`)

### Layout Structure
- **Root layout**: `app/layout.tsx` - Sets global Hebrew/RTL attributes (`lang="he-IL"`, `dir="rtl"`)
- **Font loading**: Uses Google Fonts Assistant with Hebrew subsets via `next/font`
- **Single page app**: Main content in `app/page.tsx` with anchor-based navigation

### Component Architecture
- **UI components**: `components/ui/` - Radix UI-based components (Button, Sheet, etc.)
- **Custom icons**: `components/icons/` - SVG icons for medical services
- **Main components**:
  - `Navigation.tsx` - Desktop navigation with smooth scroll
  - `ServicesGrid.tsx` - Interactive service cards with modal overlays

### Styling Conventions
- **RTL-first**: Uses Tailwind logical utilities (`ps-*`, `pe-*`, `text-start`, `text-end`)
- **Color scheme**: Green-based medical theme (`#6b8e6b`, `#859a85`, `#A27B5C`)
- **Typography**: Hebrew-first font stack (Heebo, Assistant, Arial)
- **Responsive**: Mobile-first design with desktop enhancements

### State Management
- **Client components**: Minimal use - only for interactive elements (navigation, modals)
- **Server components**: Default for all static content
- **Local state**: React hooks for component-specific state (modal open/close, etc.)

## Content & SEO Standards

### Hebrew/RTL Requirements
- All UI text, metadata, and content in Hebrew
- URLs use English slugs for compatibility (`/services/acne` not `/שירותים/אקנה`)
- Phone numbers in Israeli format with international `tel:` links
- Structured data values in Hebrew, schema keys in English

### SEO Implementation
- **Metadata**: Each page has Hebrew title (<60 chars), description (140-160 chars)
- **Structured data**: JSON-LD for Physician/LocalBusiness schema
- **Technical SEO**: Sitemap (`app/sitemap.ts`), robots (`app/robots.ts`), canonical URLs
- **Images**: All use `next/image` with descriptive Hebrew alt text

### Performance Targets
- Lighthouse mobile SEO ≥ 95
- Lighthouse mobile Performance ≥ 90
- LCP ≤ 2.5s on mid-range mobile

## Key Configuration Files

### Next.js Configuration (`next.config.mjs`)
- Disables ESLint/TypeScript build errors for development speed
- Enables webpack build optimizations
- Supports user config overlay pattern

### Tailwind Configuration (`tailwind.config.js`)
- Custom Hebrew font families
- Medical-themed color palette with CSS variables
- Custom animations for service cards
- Content paths include all relevant directories

### Components Configuration (`components.json`)
- Shadcn/UI configuration for consistent component generation
- Uses default style with neutral base colors
- Configured for TypeScript and Tailwind CSS variables

## Development Guidelines

### Component Creation
- Check existing `components/ui/` patterns before adding new libraries
- Use Server Components by default, Client Components only for interactivity
- Follow established naming conventions (PascalCase for components)
- Implement proper TypeScript types for all props

### Adding Services
- Update `lib/services.ts` with new service data
- Add corresponding icon to `components/icons/` if needed
- Ensure service pages exist in `app/services/[slug]/` structure

### Content Updates
- Medical content should be factual and professional
- All new content must include proper structured data
- Maintain consistency with established Hebrew terminology
- Update sitemap when adding new pages

## Common Tasks

### Adding a New Service Page
1. Add service definition to `lib/services.ts`
2. Create icon component in `components/icons/` if needed
3. Add route in `app/services/[slug]/page.tsx`
4. Update sitemap in `app/sitemap.ts`

### Modifying Contact Information
- Update `lib/site-config.ts` SITE object
- Verify phone number formats (display vs. tel links)
- Update structured data if business info changes

### Performance Optimization
- Use `next/image` for all images with appropriate `sizes` prop
- Implement lazy loading for non-critical images
- Set `priority` only on LCP hero image
- Minimize client-side JavaScript

## Accessibility Requirements
- Semantic HTML structure with proper heading hierarchy
- Hebrew `aria-label` attributes for interactive elements
- Focus states on all interactive elements
- Color contrast ratio compliance
- Keyboard navigation support

## Deployment Notes
- Default deployment target: Vercel
- Set `NEXT_PUBLIC_SITE_URL` environment variable for production
- Verify Hebrew fonts load correctly in production
- Test mobile performance on actual devices