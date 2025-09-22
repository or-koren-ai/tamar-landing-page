export type PressItem = {
  title: string;
  href: string;
  source: string;
  date?: string;   // "2024-11-22"
  summary?: string;
};

export const pressItems: PressItem[] = [
  {
    title: "דילמה: האם להוציא מאות שקלים לשיחת ייעוץ עם רופא עור או להתייעץ עם הצ'אט בחינם?",
    href: "https://www.ynet.co.il/laisha/article/skvxm11jbee",
    source: "Ynet – לאשה",
    date: "2025-05-25"
  },
  {
    title: "ד\"ר תמר קורן: \"למרוח קרם הגנה בכל שנה ובכל עונות השנה\"",
    href: "https://haipo.co.il/item/562953",
    source: "חי פה – חדשות חיפה",
    date: "2025-03-18"
  },
  {
    title: "עור, שיער, ציפורניים ומה שביניהם -  מה משתנה בהם בזמן ההריון?",
    href: "https://www.olisafecare.com/%D7%A2%D7%95%D7%A8-%D7%A9%D7%99%D7%A2%D7%A8-%D7%95%D7%A6%D7%99%D7%A4%D7%95%D7%A8%D7%A0%D7%99%D7%99%D7%9D-%D7%91%D7%94%D7%A8%D7%99%D7%95%D7%9F?srsltid=AfmBOorwVzenrFdRtCKyzGCD_-kvV98bYatOf3u33bD9hQqOeyn_eFbW",
    source: "Oli Safe Care",
    date: "2025-02-26"
  }
];