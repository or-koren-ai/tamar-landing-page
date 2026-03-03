import { conditions } from '@/lib/data/conditions'
import { services } from '@/lib/data/services'
import type { ConditionItem } from '@/types'

export type ServiceWithConditions = {
  slug: string
  cardTitle: string
  conditions: Pick<ConditionItem, 'slug' | 'hebrewName'>[]
}

/** Services list with their child conditions grouped by parentServiceSlug */
export const servicesWithConditions: ServiceWithConditions[] = services.map((s) => ({
  slug: s.slug,
  cardTitle: s.cardTitle,
  conditions: conditions
    .filter((c) => c.parentServiceSlug === s.slug)
    .map((c) => ({ slug: c.slug, hebrewName: c.hebrewName })),
}))
