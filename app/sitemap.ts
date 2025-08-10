import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site-config'
import { services } from '@/lib/services'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const base = SITE.baseUrl
  return [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${base}/services`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    ...services.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
