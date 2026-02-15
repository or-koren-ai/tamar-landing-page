# CLAUDE.md

Guidance for Claude Code when working with this repository.

## Project Overview

Hebrew/RTL medical practice landing page for **Dr. Tamar Koren**, dermatologist in Haifa, Israel. Built with Next.js 14 App Router, TypeScript, TailwindCSS, and Radix UI. Mobile-first, SEO-optimized, deployed on Vercel at `drkoren.skin`.

## Commands

```bash
npm run dev          # Development server (localhost:3000)
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint check
npm run local        # Clear .next cache + dev server
```

## Repository Structure

```
app/
├── (legal)/                        # Route group for legal pages
├── services/[slug]/               # Dynamic service pages (generateStaticParams)
├── api/practice-info/route.ts     # JSON endpoint for AI agents
├── layout.tsx                     # Root layout (RTL, fonts, Umami, SpeedInsights)
├── page.tsx                       # Homepage
├── sitemap.ts                     # Dynamic sitemap with priority levels
└── robots.ts                      # Allows all crawlers

components/
├── features/                      # Homepage sections (ordered top→bottom)
│   ├── header/                    # Navigation + MobileMenu (Radix Sheet)
│   ├── about/                     # Doctor bio (expandable)
│   ├── services/                  # ServicesGrid + ServiceCTAButtons
│   ├── reviews/                   # Testimonials
│   ├── appointments/              # AppointmentSection + StickyAppointmentButton
│   └── press/                     # PressCarousel (lazy loaded)
├── shared/                        # MapEmbed, ContentSummary, LazyComponents
├── icons/                         # SVG service icons (Hair, Acne, Moles, etc.)
└── ui/                           # Radix UI primitives

lib/
├── config/site-config.ts         # All site metadata, contact info, URLs
├── data/                         # Static content (services, press, reviews)
├── seo/structured-data.ts        # JSON-LD schemas (business, FAQ, service)
└── tracking/analytics.ts         # Umami tracking (trackWhatsAppClick, trackPhoneClick)

types/
└── index.ts                      # Central type exports

public/assets/
├── images/                       # Photos (logo, hero, doctor)
├── graphics/                     # Decorative (herb SVG/PNG)
├── icons/                        # App icons
└── logos/press/                  # Media outlet logos
```

---

## SEO (Critical)

### Metadata (`app/layout.tsx`)
- **Title**: Hebrew, under 60 chars — `ד״ר תמר קורן - מומחית ברפואת עור ומין`
- **Description**: Hebrew, 140-160 chars, includes phone number
- **Keywords**: 30+ Hebrew terms + English variants (locations, conditions, specialties)
- **OG/Twitter**: `locale: 'he_IL'`, `card: 'summary_large_image'`, herb image
- **Canonical**: Set via `alternates: { canonical: '/' }` and per-service page
- **metadataBase**: `https://drkoren.skin`

### Structured Data — JSON-LD (`lib/seo/structured-data.ts`)
Three schemas injected into pages:
1. **`businessStructuredData`** — `@type: ["Physician", "LocalBusiness", "MedicalBusiness"]` with services, credentials, knowsAbout (Hebrew + English), contact points, area served, opening hours
2. **`faqStructuredData`** — `@type: FAQPage` with common patient questions in Hebrew
3. **`generateServiceStructuredData(service)`** — `@type: MedicalWebPage` with breadcrumbs, MedicalCondition about, Physician author

A 4th schema for press (`ItemList` of `NewsArticle`) is inline in `app/page.tsx`.

### Sitemap & Robots
- **`app/sitemap.ts`**: Dynamic, includes homepage (priority 1), `/services` (0.8), each service slug (0.7), legal pages (0.3)
- **`app/robots.ts`**: `userAgent: "*", allow: "/"`, includes sitemap URL and host

### AI/LLM Discoverability
- **`ContentSummary.tsx`**: Hidden (`sr-only`) Schema.org `MedicalBusiness` markup with practice info, specialties, FAQ, credentials — lazy-loaded via `dynamic()` with `ssr: false`
- **`/api/practice-info`** (GET): Full practice JSON for AI agents — cached 1hr (`max-age=3600`), stale-while-revalidate 24hr, CORS enabled
- **`ai-content-description`** meta tag in layout metadata `other` field

### Service Pages (`app/services/[slug]/page.tsx`)
- `generateStaticParams()` pre-renders all service slugs
- `generateMetadata()` produces per-service title, description, canonical, OG
- Service-specific JSON-LD via `generateServiceStructuredData(service)`

### SEO Rules
- Hebrew titles under 60 chars, descriptions 140-160 chars
- English URL slugs (`/services/acne`, not `/services/אקנה`)
- All images need Hebrew `alt` text
- Heading hierarchy: one `h1` per page, then `h2` > `h3`
- Every service page needs canonical URL

---

## Site Latency & Performance (Critical)

### Targets
- Lighthouse mobile: SEO >= 95, Performance >= 90
- LCP <= 2.5s on mid-range mobile

### Image Optimization
- Always use `next/image` — never raw `<img>`
- `sharp` package installed for server-side AVIF/WebP conversion
- **LCP elements** (logo, hero image): `fetchPriority="high"` or `priority`
- Below-fold images: `loading="lazy"`
- Photos: `placeholder="blur"` where applicable
- Set responsive `sizes` attributes on variable-width images

### Font Loading
- Google Fonts `Assistant` with `display: 'swap'`
- Hebrew subset only: `subsets: ['hebrew']`
- Weights: 200, 300, 400, 500, 600

### Code Splitting (`components/shared/LazyComponents.tsx`)
- `LazyPressCarousel` — `dynamic()` + `ssr: false`, skeleton loader
- `LazyContentSummary` — `dynamic()` + `ssr: false`, null loader (hidden content)
- `LazyServicesGrid` — `dynamic()` + `ssr: false`, grid skeleton with animated pulse

### Lazy Loading Triggers
- **MapEmbed**: IntersectionObserver on reviews section with `rootMargin: '200px'` — preloads before user scrolls to map
- **Footer animation**: IntersectionObserver triggers fade-in on scroll visibility

### CSS Performance
- `will-change: transform` on animated elements
- Hardware-accelerated animations
- `prefers-reduced-motion` respected
- `min-height` on cards to prevent CLS

### Caching
- `/api/practice-info`: `Cache-Control: public, max-age=3600, stale-while-revalidate=86400`

### Analytics Loading
- Umami: `<Script strategy="afterInteractive">` — non-blocking
- Vercel `<SpeedInsights />` for real-user monitoring

### Performance Rules
- Always use `next/image`, never raw `<img>`
- Set `fetchPriority="high"` on LCP elements (logo, hero)
- Lazy-load anything below the fold
- Use skeleton loaders for dynamic imports
- Never add render-blocking scripts to `<head>`
- Use `next/dynamic` with `ssr: false` for heavy client components

---

## Design & CTA Strategy (Critical)

### Color System
- Medical green theme with CSS custom properties:
  - `--accent: #6f8f7a` — brand green
  - `--accent-strong: #5e7f69` — CTAs, links, icons
  - `--bg-tint: #f4f8f5` — light green section backgrounds
- Section backgrounds: `#e8f0e8` (hero), `#dce7dc` (services/appointments), `#f8faf8` (press)
- Accent warm: `#A27B5C` (service icon circles)
- Text headings: `#859a85` (section titles), `#6b8e6b` (service titles)

### Typography
- Hebrew-first: Assistant font (Google Fonts)
- Heading weight: 400 (`font-light`) for section titles
- Mobile body: `text-base`, desktop: `text-lg`

### CTA Hierarchy
| CTA | Style | Role |
|-----|-------|------|
| Phone | `bg-[var(--accent-strong)]` solid, white text | Primary action |
| WhatsApp | `border-[var(--accent-strong)]` outlined, green text | Secondary action |

Both buttons: `rounded-full h-12` (48px touch target), full-width on mobile, side-by-side on desktop (`sm:grid-cols-2`)

### CTA Placement (5 touchpoints)
1. **ServiceCTAButtons** — bottom of each service page
2. **AppointmentSection** — homepage booking section with contact info + map
3. **StickyAppointmentButton** — mobile-only fixed bottom bar (`md:hidden`), scrolls to booking section, safe-area-inset padding
4. **Navigation** — link to `#קביעת-תור` section
5. **MedReviews link** — in reviews section, external social proof

### Analytics Tracking
- `trackWhatsAppClick(location)` — fires `whatsapp_click` Umami event
- `trackPhoneClick(location)` — fires `phone_click` Umami event
- **Always pass `location` string** to identify which CTA was clicked (e.g., `'appointment-section'`, `'service-page'`)

### Homepage Section Order
1. **Header** — sticky, shadow, z-50, navigation + hamburger menu
2. **Hero** — animated fade-in, centered title + subtitle, green tint bg
3. **About** — expandable doctor bio
4. **Services** — grid of service cards (links to `/services/[slug]`)
5. **Reviews** — patient testimonials
6. **Appointments** — full CTA card with contact info + Google Maps embed
7. **Press** — media coverage carousel (lazy loaded)
8. **Footer** — Instagram link, copyright, legal links

### Mobile Patterns
- Sticky bottom button with `env(safe-area-inset-bottom)` for notch devices
- Hamburger nav via Radix Sheet dialog
- Full-width cards, stacked CTAs
- `pb-28` on main content to clear sticky button

### Design Rules
- Maintain Phone=solid / WhatsApp=outlined CTA pattern
- Always track CTA clicks with location string
- Keep 48px minimum touch targets on all interactive elements
- Test sticky button on notch devices (safe-area-inset)
- WhatsApp links: `rel="nofollow noopener noreferrer"` + `target="_blank"`

---

## Key Patterns

- **Server Components by default** — Client Components only for interactivity (`"use client"`)
- **Config**: All site data in `lib/config/site-config.ts` — single source of truth
- **Data**: Static content arrays in `lib/data/` (services, press, reviews)
- **Types**: Centrally exported from `types/index.ts`, import via `@/types`
- **RTL**: `lang="he-IL"` + `dir="rtl"` on `<html>`, Tailwind logical utilities (`ps-*`, `pe-*`, `text-start`)
- **Path aliases**: `@/*` maps to project root
- **PascalCase** for component files and exports
- **Medical content**: Must be factual and professional — no unverified claims

## Common Tasks

### Add New Service
1. Add service object to `lib/data/services.ts` (with `slug`, `title`, `description`, `longDescription`, `iconKey`)
2. Create icon in `components/icons/` if needed, add to `iconMap` in `app/services/[slug]/page.tsx`
3. Service page auto-generates via `generateStaticParams()`
4. Sitemap auto-includes via `services.map()` in `app/sitemap.ts`

### Modify Contact Info
1. Update `lib/config/site-config.ts` (phone, WhatsApp, address, email)
2. Update `lib/seo/structured-data.ts` if opening hours or credentials change

### Add Homepage Section
1. Create folder in `components/features/`
2. Import in `app/page.tsx` at correct position in section order
3. Update `components/features/README.md` with visual order

### Asset Management
- Photos → `public/assets/images/`
- Graphics/decorative → `public/assets/graphics/`
- App icons → `public/assets/icons/`
- Press logos → `public/assets/logos/press/`

## Accessibility

- Semantic HTML with proper heading hierarchy (`h1` > `h2` > `h3`)
- Hebrew `aria-label` on all interactive elements
- `focus-visible` states with `focus:ring-2 focus:ring-[var(--accent)]`
- Keyboard navigation support throughout
- Color contrast compliance (WCAG AA)
- `prefers-reduced-motion` respected for animations
- Legal pages: accessibility declaration + privacy policy linked in footer

## Deployment

- **Platform**: Vercel
- **Environment**: Set `NEXT_PUBLIC_SITE_URL` for production domain
- **Verify**: Hebrew fonts load correctly (Assistant, hebrew subset)
- **Test**: Mobile performance on real devices, especially sticky button on notch phones
- **Domain**: `drkoren.skin`
