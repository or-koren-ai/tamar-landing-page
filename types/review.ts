export type Review = {
  id: string
  name: string
  city?: string
  rating: number
  text: string
  dateISO: string
  tags?: string[]
  isEnglish?: boolean
}
