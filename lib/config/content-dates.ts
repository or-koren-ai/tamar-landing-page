// Real content-modification dates, used for sitemap <lastmod> and JSON-LD dateModified.
// Update the relevant date when page content actually changes — stamping build time
// on every URL teaches crawlers to distrust the sitemap.
export const CONTENT_DATES = {
  services: '2026-02-22',
  conditions: '2026-02-20',
  legal: '2025-10-19',
} as const
