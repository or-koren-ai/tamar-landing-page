import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/config/site-config'
import { CONTENT_DATES } from '@/lib/config/content-dates'
import { services } from '@/lib/data/services'
import { conditions } from '@/lib/data/conditions'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.baseUrl
  return [
    {
      url: `${base}/`,
      // Homepage rating data auto-updates daily, so build time is accurate here
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${base}/services`,
      lastModified: CONTENT_DATES.services,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${base}/accessibility-declaration`,
      lastModified: CONTENT_DATES.legal,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${base}/privacy-policy`,
      lastModified: CONTENT_DATES.legal,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    ...services.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified: CONTENT_DATES.services,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...conditions.map((c) => ({
      url: `${base}/conditions/${c.slug}`,
      lastModified: CONTENT_DATES.conditions,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
