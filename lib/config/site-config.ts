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
    e164: "+972559620827",
    display: "055-962-0827",
    link: "https://api.whatsapp.com/send?phone=972559620827&text=" + encodeURIComponent("שלום, הופנתי מהאתר של ד״ר תמר קורן") + "%F0%9F%8C%BF",
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
      "https://maps.google.com/maps?width=520&height=400&hl=he&q=%D7%9E%D7%95%D7%A8%D7%99%D7%94%2084%20%D7%97%D7%99%D7%A4%D7%94+(%D7%9E%D7%A8%D7%A4%D7%90%D7%AA%20%D7%9E%D7%95%D7%9E%D7%97%D7%99%D7%9D%20%D7%93״ר%20%D7%AA%D7%9E%D7%A8%20%D7%A7%D7%95%D7%A8%D7%9F)&t=m&z=15&ie=UTF8&iwloc=B&output=embed",
    url: "https://≈com/?q=%D7%9E%D7%95%D7%A8%D7%99%D7%94%2084%20%D7%97%D7%99%D7%A4%D7%94",
    staticImage: "/assets/images/map-clinic-location.png",
  },

  // Rating data from MedReviews — auto-updated daily via GitHub Action
  rating: {
    value: 4.9,
    count: 193,
    bestRating: 5,
    source: "MedReviews",
    sourceUrl: "https://www.medreviews.co.il/provider/dr-koren-tamar",
  },

  socials: {
    instagram: "https://www.instagram.com/dr.tamar_koren",
  },

  // Doctor directories & professional listings
  directories: {
    medreviews: "https://www.medreviews.co.il/provider/dr-koren-tamar",
    infomed: "https://www.infomed.co.il/experts/153933/",
    medpage: "https://medpage.co.il/doctors/21598-%D7%AA%D7%9E%D7%A8-%D7%A7%D7%95%D7%A8%D7%9F-24908/",
    clalit: "https://www.clalit.co.il/he/sefersherut/pages/doctordetails.aspx?edeptcode=53108&eservicecode=31&employeeid=FCE0AC163790F05B90816C3057A7E9A6",
    haifakrayot: "https://haifakrayot.co.il/business/biz/%D7%93%D7%B4%D7%A8-%D7%AA%D7%9E%D7%A8-%D7%A7%D7%95%D7%A8%D7%9F-%D7%9E%D7%95%D7%9E%D7%97%D7%99%D7%AA-%D7%91%D7%A8%D7%A4%D7%95%D7%90%D7%AA-%D7%A2%D7%95%D7%A8-%D7%95%D7%9E%D7%99%D7%9F",
    easy: "https://easy.co.il/page/10161117",
    dapeiZahav: "https://www.d.co.il/80388045/46530/",
    doctors: "https://www.doctors.co.il/expert/dermatologists-venereologists/80388045/",
    google: "https://www.google.com/maps/place/%D7%93%D7%B4%D7%A8+%D7%AA%D7%9E%D7%A8+%D7%A7%D7%95%D7%A8%D7%9F+-+%D7%9E%D7%95%D7%9E%D7%97%D7%99%D7%AA+%D7%91%D7%A8%D7%A4%D7%95%D7%90%D7%AA+%D7%A2%D7%95%D7%A8+%D7%95%D7%9E%D7%99%D7%9F%E2%80%AD/data=!4m2!3m1!1s0x151dbbabf4fcb5b9:0x4bf99a4cb88796bb",
  },
} as const; 