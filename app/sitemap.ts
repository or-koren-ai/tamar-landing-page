import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    {
      url: `${SITE.baseUrl}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
