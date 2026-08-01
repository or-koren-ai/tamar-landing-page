import type { Review } from '@/types'

// Display order = array order. Mobile shows the first 4, desktop the first 6;
// the rest sit behind the "עוד ביקורות" expander (see ReviewsSection).
// Ordering rules (Clarity 07/2026: attention decays sharply by position):
// short/emotional first, alternate treatment areas so no two similar reviews
// touch — in column order or within a desktop 3-col row.
export const reviews: Review[] = [
  {
    id: '2',
    name: 'אביבית שמואל נסים',
    city: 'קריית אתא',
    rating: 5,
    text: '״בן אדם טוב במלוא מובן המילה ואשת מקצוע מעולה!״',
    dateISO: '2024-07-15',
    tags: ['יחס אישי']
  },
  {
    id: '8',
    name: 'אורן מלאכי',
    city: 'רמת ישי',
    rating: 5,
    text: '״קבעתי את התור 40 דקות לפני התור, הגעתי בזמן ולא חיכיתי במרפאה אולי כמה דקות. רופאה לדעתי מקצועית, קיבלה יפה, טיפלה יפה, אין תלונות רק שבחים.״',
    dateISO: '2026-07-28',
    tags: ['פטרת ציפורניים']
  },
  {
    id: '5',
    name: 'מיכל',
    city: 'קרית אתא',
    rating: 5,
    text: '״רופאה נהדרת! סבלנית מאוד עם ילדים, מסבירה בצורה ברורה את כל אפשרויות הטיפול ומאפשרת לבחור יחד את הדרך המתאימה. נעימה, עדינה ומקצועית ברמה גבוהה.״',
    dateISO: '2025-08-26',
    tags: ['יבלות ויראליות', 'ילדים']
  },
  {
    id: '10',
    name: 'ה.י.',
    rating: 5,
    text: '״ד״ר תמר קורן רופאה מקסימה, אדיבה, סבלנית ונעימה מאוד. טיפלה בי במסירות, הסבירה לי בצורה ברורה ומפורטת על התהליך וענתה בסבלנות על כל שאלה. לאורך כל הביקור הרגשתי מאוד נוח ובידיים טובות. ממליצה עליה בחום!״',
    dateISO: '2026-07-28',
    tags: ['הסרת נגעים']
  },
  {
    id: '3',
    name: 'ר.ב',
    city: 'הרצליה',
    rating: 5,
    text: '״כבר פעם שניה שאני עושה אצל ד"ר קורן המקסימה בוטוקס. בשתי הפעמים התוצאה מעולה. ד"ר קורן מסבירה את האפשרויות בסבלנות ומקצועיות, לא לוחצת ולא משכנעת. עובדת במקצועיות, עדינות וסבלנות. אני ממליצה מאוד.״',
    dateISO: '2024-09-10',
    tags: ['בוטוקס', 'אסתטיקה']
  },
  {
    id: '1',
    name: 'אופיר',
    city: 'חיפה',
    rating: 5,
    text: '״תודה לך ד״ר תמר על מקצועיות, הקשבה ואכפתיות. את נותנת תחושת ביטחון, מסבירה בצורה ברורה על תהליכים רפואיים, ומקדישה זמן אמיתי למטופלים. הרגשתי שמקשיבים לי ושהטיפול נעשה בגישה אנושית ומכילה.״',
    dateISO: '2024-08-31',
    tags: ['אקנה']
  },
  {
    id: '9',
    name: 'אסנת ארזי',
    rating: 5,
    text: '״ד"ר תמר קורן, מקבלת במאור פנים, עורכת בדיקה יסודית ומיקצועית ונותנת מענה לפנייה. ממליצה בחום. אמשיך להזמין תור אליה.״',
    dateISO: '2026-07-24',
    tags: ['יחס אישי']
  },
  {
    id: '4',
    name: 'Wayne Shepherd',
    city: 'Haifa',
    rating: 5,
    text: '"Very professional, knowledgeable and compassionate Health Care Provider. Very satisfied with the excellent service which I received. Would highly recommend this practice"',
    dateISO: '2024-06-20',
    isEnglish: true,
    tags: ['Dermatology', 'Consultation']
  },
  {
    id: '7',
    name: 'ענת גטניו',
    city: 'קרית טבעון',
    rating: 5,
    text: '״רופאה נעימה, קשובה ומקצועית״',
    dateISO: '2026-07-27',
    tags: ['יחס אישי']
  }
]
