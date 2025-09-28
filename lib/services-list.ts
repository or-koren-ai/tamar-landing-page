export type ServiceListItem = {
  key: string
  slug: string
  title: string
  iconKey: 'stethoscope' | 'hand' | 'hair' | 'search' | 'acne' | 'palette' | 'video' | 'hyperhidrosis'
  description: string
  seoAnchor: string
  cardTitle?: string
  cardDescription?: string
}

export const servicesList: ServiceListItem[] = [
  {
    key: 'diagnosis',
    slug: 'dermatology',
    title: 'אבחון וטיפול של כלל מחלות העור',
    iconKey: 'stethoscope',
    description: 'אבחון מקצועי ומדויק של מחלות עור שונות והתאמת טיפול אישי',
    seoAnchor: 'רופאת עור מומחית בחיפה',
    cardTitle: 'אבחון וטיפול במחלות עור',
    cardDescription: 'התאמת טיפול אישי למגוון מצבים'
  },
  {
    key: 'nails',
    slug: 'nails-fungus',
    title: 'מחלות ושינויים בציפורניים',
    iconKey: 'hand',
    description: 'טיפול בבעיות ציפורניים ושינויים פתולוגיים',
    seoAnchor: 'פטרת ציפורניים בחיפה',
    cardTitle: 'מחלות ציפורניים',
    cardDescription: 'אבחון וטיפול בשינויים בציפורניים'
  },
  {
    key: 'hair',
    slug: 'hair-loss',
    title: 'מחלות ונשירת שיער',
    iconKey: 'hair',
    description: 'אבחון וטיפול בנשירת שיער ובעיות קרקפת',
    seoAnchor: 'טיפול בנשירת שיער חיפה',
    cardTitle: 'נשירת שיער',
    cardDescription: 'אבחון מצבים של שיער וקרקפת'
  },
  {
    key: 'moles',
    slug: 'mole-check',
    title: 'בדיקת שומות, אבחון והסרת נגעים שפירים, אבחון סרטני עור',
    iconKey: 'search',
    description: 'בדיקה יסודית ומעקב אחר שומות ונגעי עור',
    seoAnchor: 'בדיקת שומות ודרמוסקופיה חיפה',
    cardTitle: 'בדיקת שומות ונגעי עור',
    cardDescription: 'כולל גילוי מוקדם של סרטן עור'
  },
  {
    key: 'acne',
    slug: 'acne',
    title: 'אקנה- התאמת טיפול אישי ומדויק',
    iconKey: 'acne',
    description: 'טיפול באקנה והתאמת שגרת טיפוח יומיומית',
    seoAnchor: 'טיפול באקנה חיפה',
    cardTitle: 'אקנה – טיפול מותאם',
    cardDescription: 'אבחון והתאמת טיפול ושגרה'
  },
  {
    key: 'pigmentation',
    slug: 'pigmentation',
    title: 'טיפול בפיגמנטציה ואסתטיקה',
    iconKey: 'palette',
    description: 'טיפולים אסתטיים מתקדמים והבהרת כתמי עור',
    seoAnchor: 'טיפול בפיגמנטציה חיפה',
    cardTitle: 'טיפול בפיגמנטציה',
    cardDescription: 'כולל פתרונות אסתטיים משלימים'
  },
  {
    key: 'hyperhidrosis',
    slug: 'hyperhidrosis',
    title: 'הזעת יתר',
    iconKey: 'hyperhidrosis',
    description: 'טיפול בהזעת יתר באמצעות בוטוקס',
    seoAnchor: 'טיפול בהזעת יתר חיפה',
    cardDescription: 'טיפול ממוקד בבוטוקס'
  },
  {
    key: 'telemedicine',
    slug: 'telemedicine',
    title: 'יעוץ אונליין מרחוק',
    iconKey: 'video',
    description: 'ייעוץ מקצועי נוח ונגיש מכל מקום',
    seoAnchor: 'רופא עור אונליין',
    cardTitle: 'ייעוץ אונליין',
    cardDescription: 'זמין, נוח ומאובטח'
  }
]
