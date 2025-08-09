import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site-config'
import { services } from '@/lib/services'

export const revalidate = 60 * 60 * 24; // 24h

const base = SITE.baseUrl.replace(/\/+$/, ''); // ensure no trailing slash
const nowISO = new Date().toISOString();

export default function sitemap(): MetadataRoute.Sitemap {
  const baseEntries: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: nowISO,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];

  const serviceEntries: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: nowISO,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...baseEntries, ...serviceEntries];
}
