export type Review = {
  id: string
  name: string
  city?: string
  rating: number
  text: string
  dateISO: string
  treatment?: string
  sourceUrl: string
  isEnglish?: boolean
}

export const reviews: Review[] = [
  {
    id: '1',
    name: 'אופיר',
    city: 'חיפה',
    rating: 5,
    text: '״תודה לך ד״ר תמר על מקצועיות, הקשבה ואכפתיות. את נותנת תחושת ביטחון, מסבירה בצורה ברורה על תהליכים רפואיים, ומקדישה זמן אמיתי למטופלים. הרגשתי שמקשיבים לי ושהטיפול נעשה בגישה אנושית ומכילה.״',
    dateISO: '2024-08-31',
    treatment: 'טיפול באקנה',
    sourceUrl: 'https://www.medreviews.co.il/provider/dr-koren-tamar#reviews'
  },
  {
    id: '2',
    name: 'אביבית שמואל נסים',
    city: 'קריית אתא',
    rating: 5,
    text: '״בן אדם טוב במלוא מובן המילה ואשת מקצוע מעולה!״',
    dateISO: '2024-07-15',
    sourceUrl: 'https://www.medreviews.co.il/provider/dr-koren-tamar#reviews'
  },
  {
    id: '3',
    name: 'ר.ב',
    city: 'הרצליה',
    rating: 5,
    text: '״כבר פעם שניה שאני עושה אצל ד"ר קורן המקסימה בוטוקס. בשתי הפעמים התוצאה מעולה. ד"ר קורן מסבירה את האפשרויות בסבלנות ומקצועיות, לא לוחצת ולא משכנעת. עובדת במקצועיות, עדינות וסבלנות. אני ממליצה מאוד.״',
    dateISO: '2024-09-10',
    treatment: 'בוטוקס',
    sourceUrl: 'https://www.medreviews.co.il/provider/dr-koren-tamar#reviews'
  },
  {
    id: '4',
    name: 'Wayne Shepherd',
    city: 'Haifa',
    rating: 5,
    text: '"Very professional, knowledgeable and compassionate Health Care Provider. Very satisfied with the excellent service which I received. Would highly recommend this practice"',
    dateISO: '2024-06-20',
    sourceUrl: 'https://www.medreviews.co.il/provider/dr-koren-tamar#reviews',
    isEnglish: true
  },
  {
    id: '5',
    name: 'מיכל',
    city: 'קרית אתא',
    rating: 5,
    text: '״רופאה נהדרת! טבלנית מאוד עם ילדים, מסבירה בצורה ברורה את כל אפשרויות הטיפול ומאפשרת לבחור יחד את הדרך המתאימה. נעימה, עדינה ומקצועית ברמה גבוהה.״',
    dateISO: '2025-08-26',
    treatment: 'טיפול ביבלות ויראליות',
    sourceUrl: 'https://www.medreviews.co.il/provider/dr-koren-tamar#reviews'
  },
  {
    id: '6',
    name: 'א.כ.ד.',
    city: 'חיפה',
    rating: 5,
    text: '״תמר קיבלה אותנו לבדיקה של בני בין השבתיים ואצ. תמר היתה גישה ומקסימה, יצרה עמו קשר שגרם לו להרגיש בטוח ולשתף פעולה. הבדיקה היתה מקיפה, החבזרים היו ברורים ונתנו בנועם עם מענה לכל השאלות. אופן יצירת הקשר וקביעת התור היו נוחים והתורים זמינים.״',
    dateISO: '2025-07-28',
    treatment: 'טיפול באטופיק דרמטיטיס',
    sourceUrl: 'https://www.medreviews.co.il/provider/dr-koren-tamar#reviews'
  }
]