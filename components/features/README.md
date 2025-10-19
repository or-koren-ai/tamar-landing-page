# Features Components

These components represent distinct sections of the landing page.
They are organized here by their **visual order** on the homepage.

## Homepage Flow (Top → Bottom)

| Order | Folder | Description | Anchor ID |
|-------|--------|-------------|-----------|
| 1 | `header/` | Sticky navigation bar | `#top` |
| 2 | `hero/` | Landing title & subtitle | - |
| 3 | `about/` | Doctor bio & credentials | `#אודות` |
| 4 | `services/` | Medical services grid | `#שירותי-המרפאה` |
| 5 | `reviews/` | Patient testimonials | `#ביקורות` |
| 6 | `appointments/` | Appointment booking CTA | `#קביעת-תור` |
| 7 | `press/` | Press & media coverage | `#כתבות-ופרסומים` |

## Component Details

### 1. Header (`header/`)
- `Navigation.tsx` - Desktop navigation menu (hidden on mobile)
- `MobileMenu.tsx` - Mobile hamburger menu (Sheet component)
- **Position**: Sticky header, always visible at top (z-index: 50)

### 2. Hero (`hero/`)
- Currently inline in `app/page.tsx` (lines 61-71)
- Landing section with doctor name and specialty
- **Note**: Can be extracted to separate component if needed

### 3. About (`about/`)
- `AboutSection.tsx` - Client component version
- `AboutSectionServer.tsx` - Server component version (currently used)
- Doctor bio, credentials, education, experience
- Includes doctor photo

### 4. Services (`services/`)
- `ServicesGrid.tsx` - Grid of service cards with icons
- `ServiceCTAButtons.tsx` - Call-to-action buttons on service detail pages
- Main content section showcasing all medical services

### 5. Reviews (`reviews/`)
- `ReviewsSection.tsx` - Patient testimonials carousel
- Social proof section with ratings and review text
- Data from `lib/data/reviews.ts`

### 6. Appointments (`appointments/`)
- `AppointmentSection.tsx` - Main appointment booking section
- `StickyAppointmentButton.tsx` - Floating button (mobile only, bottom-fixed)
- Primary conversion point with WhatsApp/phone CTAs

### 7. Press (`press/`)
- `PressSection.tsx` - Press section wrapper (not currently used)
- `PressCarousel.tsx` - Media coverage carousel with logos
- Trust/credibility section showing press mentions
- Data from `lib/data/press.ts`

## Usage

When modifying the homepage layout (`app/page.tsx`), reference this order.
Each feature folder contains all components for that section.

### Example: Adding a New Section

1. Create new folder in `features/` (e.g., `features/testimonials/`)
2. Add components for that section
3. Update this README with the new section's position
4. Import and use in `app/page.tsx` in the correct order

## Component Types

- **Server Components**: Default, render on server (better performance)
- **Client Components**: Marked with `'use client'`, used for interactivity
  - Navigation (smooth scroll, pathname detection)
  - MobileMenu (Sheet open/close state)
  - AboutSectionServer (expand/collapse state)
  - ReviewsSection (carousel state)
  - PressCarousel (carousel state)
  - StickyAppointmentButton (scroll detection)

## Related Folders

- `components/shared/` - Reusable components used across features
- `components/icons/` - SVG medical service icons
- `components/ui/` - Base Radix UI primitives (Button, Sheet, etc.)
