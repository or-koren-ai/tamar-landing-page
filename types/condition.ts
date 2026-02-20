export type ConditionItem = {
  slug: string
  title: string
  hebrewName: string
  hebrewAlternate?: string
  englishName: string
  parentServiceSlug: string
  metaTitle: string
  metaDescription: string
  shortDescription: string
  content: {
    overview: string
    symptoms: string[]
    diagnosis: string
    treatment: string
    whenToSeeDoctor: string
  }
  faq: {
    question: string
    answer: string
  }[]
  relatedConditions?: string[]
  relatedServices?: string[]
}
