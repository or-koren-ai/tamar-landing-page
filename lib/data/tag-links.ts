import { services } from '@/lib/data/services'
import { conditions } from '@/lib/data/conditions'

/**
 * Auto-built map from review tag text → internal page URL.
 * Conditions are matched by hebrewName and englishName.
 * Services use explicit aliases since tag text rarely matches service titles.
 */

const conditionMap: Record<string, string> = {}
for (const c of conditions) {
  conditionMap[c.hebrewName] = `/conditions/${c.slug}`
  conditionMap[c.englishName] = `/conditions/${c.slug}`
}

const serviceMap: Record<string, string> = {}
for (const s of services) {
  serviceMap[s.slug] = `/services/${s.slug}`
}

// Explicit aliases for tags that don't match condition/service names directly
const aliases: Record<string, string> = {
  'אקנה': serviceMap['acne'],
  'אסתטיקה': serviceMap['pigmentation'],
  'Dermatology': serviceMap['dermatology'],
}

export const tagLinkMap: Record<string, string> = {
  ...conditionMap,
  ...aliases,
}
