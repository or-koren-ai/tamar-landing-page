export const SITE = {
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://drkoren.skin",

  name: "ד״ר תמר קורן",
  specialty: "מומחית לרפואת עור ומין",
  city: "חיפה",

  hero: {
    title: "ד״ר תמר קורן – מומחית לרפואת עור ומין בחיפה",
    subtitle: "קליניקה פרטית בחיפה — טיפול אישי ומקצועי לילדים ולמבוגרים",
  },

  address: {
    streetAddress: "מוריה 84",
    locality: "חיפה",
    countryCode: "IL",
    postalCode: "3461312",
  },

  whatsapp: {
    e164: "+972525280650",
    display: "052-528-0650",
    link: "https://wa.me/972525280650",
  },

  clinicPhone: {
    e164: "+97248340280",
    display: "04-8340280",
    link: "tel:+97248340280",
  },
  
  clinicEmail: "office@mchc.co.il",

  hours: {
    byAppointmentOnly: true,
  },

  map: {
    embedSrc:
      "https://maps.google.com/maps?width=520&height=400&hl=he&q=%D7%9E%D7%95%D7%A8%D7%99%D7%94%2084%20%D7%97%D7%99%D7%A4%D7%94+(%D7%9E%D7%A8%D7%A4%D7%90%D7%AA%20%D7%9E%D7%95%D7%9E%D7%97%D7%99%D7%9D%20%D7%93״ר%20%D7%AA%D7%9E%D7%A8%20%D7%A7%D7%95%D7%A8%D7%9F)&t=k&z=15&ie=UTF8&iwloc=B&output=embed",
    url: "https://maps.google.com/?q=%D7%9E%D7%95%D7%A8%D7%99%D7%94%2084%20%D7%97%D7%99%D7%A4%D7%94",
  },

  socials: {
    medreviews: "https://www.medreviews.co.il/provider/dr-koren-tamar",
    instagram: "https://www.instagram.com/dr.tamar_koren",
  },
} as const; 