import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site-config'
import { services } from '@/lib/services'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const baseEntries: MetadataRoute.Sitemap = [
    {
      url: `${SITE.baseUrl}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]

  const serviceEntries: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE.baseUrl}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...baseEntries, ...serviceEntries]
} 