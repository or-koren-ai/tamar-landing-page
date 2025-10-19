export type ServiceItem = {
  key: string
  slug: string
  title: string
  iconKey: 'stethoscope' | 'hand' | 'hair' | 'search' | 'acne' | 'palette' | 'video' | 'hyperhidrosis'
  description: string
  longDescription: string
  seoAnchor: string
  cardTitle?: string
  cardDescription?: string
  // Enhanced structured content
  sections?: {
    title: string
    content: string
    bullets?: string[]
  }[]
  treatmentProcess?: {
    title: string
    steps: {
      number: string
      title: string
      description: string
    }[]
  }
  effectiveness?: {
    title: string
    items: string[]
  }
  treatmentAreas?: {
    title: string
    items: string[]
  }
  faq?: {
    title: string
    items: {
      question: string
      answer: string
    }[]
  }
}
