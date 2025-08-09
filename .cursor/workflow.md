- Tamar's Landing Page
  - build the different sections of the page
    - navigation bar
    - hero header (value proposition + primary CTA)
    - about section
    - services section
    - testimonials section — taken from [MedReviews](https://www.medreviews.co.il/provider/dr-koren-tamar)
    - FAQ
    - contact/appointment section (form + click-to-call/WhatsApp)
    - footer section

  - mobile-first Hebrew/RTL
    - set global `lang="he-IL"`, `dir="rtl"`; use RTL-safe spacing (Tailwind logical utilities)
    - sticky mobile CTA bar (Call | WhatsApp | Book)

  - SEO + LLM-friendly
    - per-page metadata (title, description, canonical, OG/Twitter)
    - `app/sitemap.ts`, `app/robots.ts`
    - JSON-LD: LocalBusiness/Physician, FAQ (mirror on-page facts)

  - performance
    - `next/image`, `next/font`, lazy-load non-critical images; priority LCP hero image
    - targets: Lighthouse mobile SEO ≥ 95, Performance ≥ 90

  - accessibility
    - semantic headings, Hebrew labels/aria, focus states, color contrast

  - delivery
    - track conversions (call, WhatsApp, form submit)
    - deploy to Vercel, set domain + `SITE_URL`, final checks

- Definition of done
  - renders correctly on mobile/desktop; CTAs visible and working
  - SEO metadata + JSON-LD valid; sitemap/robots present
  - contact form submits server-side with basic spam protection
  - Lighthouse mobile targets met
