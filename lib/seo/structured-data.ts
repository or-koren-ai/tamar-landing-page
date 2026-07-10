import { SITE } from '../config/site-config'
import { CONTENT_DATES } from '../config/content-dates'
import { services } from '../data/services'
import { reviews } from '../data/reviews'
import type { ConditionItem } from '@/types'

// Enhanced business structured data for LLMs
export const businessStructuredData = {
  "@context": "https://schema.org",
  "@type": ["Physician", "LocalBusiness", "MedicalBusiness"],
  name: SITE.name,
  description: "רופאת עור פרטית מומלצת בחיפה - רופאה בכירה בביה״ח העמק (כללית). טיפול אישי ומקצועי לילדים ולמבוגרים",
  medicalSpecialty: ["Dermatology", "Venereology", "רפואת עור ומין"],
  
  // Logo for google search
  logo: {
    "@type": "ImageObject",
    url: `${SITE.baseUrl}/assets/graphics/herb/herb.png`,
    width: 512,
    height: 512
  },

  // Doctor photo for Google Knowledge Panel / search results
  image: {
    "@type": "ImageObject",
    url: `${SITE.baseUrl}/assets/images/doctor-photo-green-square.jpg`,
    width: 1200,
    height: 1200,
    caption: "ד״ר תמר קורן - מומחית לרפואת עור ומין בחיפה"
  },

  // Business Info
  url: SITE.baseUrl,
  telephone: SITE.clinicPhone.e164,
  email: SITE.clinicEmail,
  
  // Location
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.streetAddress,
    addressLocality: SITE.address.locality,
    addressCountry: "IL",
    postalCode: SITE.address.postalCode,
    addressRegion: "Haifa District"
  },

  // Geo coordinates for local search
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.latitude,
    longitude: SITE.geo.longitude
  },
  hasMap: SITE.map.url,
  priceRange: "₪₪",
  isAcceptingNewPatients: true,

  // Geographic area served
  areaServed: [
    { "@type": "City", name: "חיפה" },
    { "@type": "City", name: "קריית אתא" },
    { "@type": "City", name: "קריית מוצקין" },
    { "@type": "City", name: "קריית ים" },
    { "@type": "City", name: "עכו" }
  ],
  
  // Services offered
  availableService: services.map(service => ({
    "@type": "MedicalTherapy", 
    name: service.title,
    description: service.description,
    url: `${SITE.baseUrl}/services/${service.slug}`
  })),
  
  // Operating hours
  openingHours: "Tu 13:00-19:00",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Tuesday",
    opens: "13:00",
    closes: "19:00"
  },
  
  // Contact methods
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: SITE.clinicPhone.e164,
      contactType: "appointments",
      availableLanguage: ["Hebrew", "English"]
    },
    {
      "@type": "ContactPoint", 
      telephone: SITE.whatsapp.e164,
      contactType: "customer service",
      contactOption: "WhatsApp"
    }
  ],
  
  // Aggregate rating
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SITE.rating.value,
    reviewCount: SITE.rating.count,
    bestRating: SITE.rating.bestRating,
    worstRating: 1
  },

  // External profiles & listings — same entity, different platforms
  sameAs: [
    // Social media
    SITE.socials.instagram,
    // Medical directories & doctor review sites
    SITE.directories.medreviews,
    SITE.directories.infomed,
    SITE.directories.medpage,
    SITE.directories.doctorita,
    // Health system profiles
    SITE.directories.clalit,
    SITE.directories.emekHospital,
    // Local business directories
    SITE.directories.haifakrayot,
    SITE.directories.easy,
    SITE.directories.topIsrael,
    SITE.directories.dapeiZahav,
    SITE.directories.doctors,
    // Google Business Profile
    SITE.directories.google,
  ],
  
  // Expertise areas - Critical for LLM understanding
  knowsAbout: [
    "אקנה וטיפול באקנה",
    "בדיקת שומות ודרמוסקופיה", 
    "גילוי מוקדם של סרטן העור",
    "פסוריאזיס וטיפול ביולוגי",
    "אקזמה ואטופיק דרמטיטיס",
    "נשירת שיער ואלופציה",
    "פטרת ציפורניים",
    "פיגמנטציה וכתמי עור",
    "ויטיליגו", 
    "רוזציאה",
    "הזרקות בוטוקס לטיפול רפואי",
    "יבלות ויבלות וירליות",
    "מולוסקום",
    "בדיקות עור מקיפות",
    "טיפול בילדים ותינוקות",
    "Acne treatment",
    "Mole examination", 
    "Skin cancer screening",
    "Psoriasis treatment",
    "Hair loss treatment",
    "Dermatology consultation",
    "Pediatric dermatology",
    "רופא עור פרטי חיפה",
    "רופאת עור פרטית בחיפה",
    "תור דחוף לרופא עור",
    "מרפאה פרטית דרמטולוגיה חיפה",
    "Private dermatology clinic Haifa"
  ],
  
  // Credentials
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      educationalLevel: "Medical Doctor",
      recognizedBy: "טכניון - הפקולטה לרפואה"
    },
    {
      "@type": "EducationalOccupationalCredential", 
      credentialCategory: "certification",
      educationalLevel: "Dermatology Specialist",
      recognizedBy: "המרכז הרפואי העמק"
    }
  ],

  // Professional affiliations
  memberOf: [
    {
      "@type": "MedicalOrganization",
      name: "האיגוד הישראלי לרפואת עור ומין",
      alternateName: "Israeli Society of Dermatology and Venereology"
    },
    {
      "@type": "MedicalOrganization",
      name: "הסתדרות הרפואית בישראל",
      alternateName: "Israeli Medical Association"
    }
  ],

  // Education & Training
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "הטכניון - מכון טכנולוגי לישראל, הפקולטה לרפואה",
    alternateName: "Technion - Israel Institute of Technology, Faculty of Medicine"
  },

  // Patient demographics
  audience: [
    {
      "@type": "PeopleAudience",
      audienceType: "ילדים ותינוקות"
    },
    {
      "@type": "PeopleAudience",
      audienceType: "מבוגרים"
    }
  ],

  // Machine-actionable appointment booking for AI agents
  potentialAction: {
    "@type": "ReserveAction",
    name: "קביעת תור",
    target: [
      {
        "@type": "EntryPoint",
        urlTemplate: SITE.whatsapp.link,
        actionPlatform: [
          "https://schema.org/DesktopWebPlatform",
          "https://schema.org/MobileWebPlatform"
        ],
        inLanguage: "he"
      },
      {
        "@type": "EntryPoint",
        urlTemplate: SITE.clinicPhone.link,
        actionPlatform: "https://schema.org/MobileWebPlatform",
        inLanguage: "he"
      }
    ],
    result: {
      "@type": "Reservation",
      name: "תור לרפואת עור"
    }
  },

  // Individual patient reviews
  review: reviews.map(review => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.name
    },
    datePublished: review.dateISO,
    reviewBody: review.text.replace(/[״"]/g, ''),
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1
    }
  }))
}

// Service-specific structured data generator
export const generateServiceStructuredData = (service: any) => ({
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: service.title,
  description: service.description,
  url: `${SITE.baseUrl}/services/${service.slug}`,
  datePublished: "2024-12-01",
  dateModified: CONTENT_DATES.services,
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "דף הבית",
        item: SITE.baseUrl
      },
      {
        "@type": "ListItem", 
        position: 2,
        name: "שירותי המרפאה",
        item: `${SITE.baseUrl}/services`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${SITE.baseUrl}/services/${service.slug}`
      }
    ]
  },
  about: {
    "@type": "MedicalCondition",
    name: service.title,
    description: service.longDescription
  },
  author: {
    "@type": "Physician",
    name: SITE.name,
    url: SITE.baseUrl,
    image: `${SITE.baseUrl}/assets/images/doctor-photo-green-square.jpg`
  },
  publisher: {
    "@type": "MedicalBusiness",
    name: SITE.name,
    url: SITE.baseUrl
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "[itemprop='description']", ".faq-answer:first-of-type"]
  }
})

// FAQ structured data - helps LLMs understand common questions
export const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "איך קובעים תור לד״ר תמר קורן?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `ניתן לקבוע תור בטלפון ${SITE.clinicPhone.display} או בוואטסאפ ${SITE.whatsapp.display}. המרפאה פועלת בימי שלישי בין השעות 13:00-19:00.`
      }
    },
    {
      "@type": "Question", 
      name: "איפה נמצאת המרפאה של ד״ר תמר קורן?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `המרפאה נמצאת ברחוב ${SITE.address.streetAddress}, ${SITE.address.locality}. המרפאה שוכנת במתחם רפואי פרטי בחיפה.`
      }
    },
    {
      "@type": "Question",
      name: "אילו טיפולים מציעה ד״ר תמר קורן?", 
      acceptedAnswer: {
        "@type": "Answer",
        text: "ד״ר קורן מתמחה בטיפול באקנה, בדיקת שומות, נשירת שיער, פסוריאזיס, אקזמה, פיגמנטציה, ויטיליגו, רוזציאה ועוד. המרפאה מטפלת בילדים ומבוגרים."
      }
    },
    {
      "@type": "Question",
      name: "האם ד״ר קורן עובדת בכללית?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ד״ר קורן משמשת כרופאה בכירה ואחראית מרפאת פסוריאזיס בבית החולים העמק (כללית). בנוסף, היא מנהלת מרפאה פרטית בחיפה."
      }
    },
    {
      "@type": "Question",
      name: "האם ניתן לקבל תור דחוף לרופאת עור בחיפה?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "כן, המרפאה הפרטית של ד״ר קורן בחיפה מציעה זמינות גבוהה לתור דחוף ברפואת עור. ניתן לפנות בטלפון או בוואטסאפ לקביעת תור מהיר."
      }
    },
    {
      "@type": "Question",
      name: "מה היתרון של רופא עור פרטי?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "במרפאה פרטית ניתן ליהנות מתורים ארוכים יותר, תשומת לב אישית מהרופאה, וזמינות גבוהה לקביעת תור מהיר. ד״ר קורן מקדישה זמן לכל מטופל עם הסבר מפורט והתאמה אישית של הטיפול."
      }
    },
    {
      "@type": "Question",
      name: "האם צריך הפניה לרופא עור פרטי?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "לא, לא נדרשת הפניה לביקור במרפאה הפרטית. ניתן לפנות ישירות לקביעת תור בטלפון או בוואטסאפ. במידה ויש הפניה מקופת חולים, מומלץ להביא אותה לביקור."
      }
    },
    {
      "@type": "Question",
      name: "האם ד״ר קורן מטפלת גם בילדים?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "כן, ד״ר קורן מטפלת בילדים ותינוקות במגוון מצבי עור כולל אקזמה, יבלות, פטרת, מולוסקום ובדיקת שומות. הטיפול מותאם לגיל הילד ונעשה באווירה מקצועית ורגישה."
      }
    },
    {
      "@type": "Question",
      name: "מה צריך להביא לביקור הראשון אצל רופאת עור?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "מומלץ להביא תוצאות בדיקות דם או ביופסיות קודמות אם יש, רשימת תרופות ותכשירים שאת/ה משתמש/ת בהם, ותמונות של הנגע אם חל שינוי לאורך זמן. אין צורך בהכנה מיוחדת."
      }
    }
  ]
}

// Condition-specific structured data generator
export const generateConditionStructuredData = (condition: ConditionItem) => {
  const parentService = services.find((s) => s.slug === condition.parentServiceSlug)

  const medicalWebPage = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: condition.title,
    description: condition.metaDescription,
    url: `${SITE.baseUrl}/conditions/${condition.slug}`,
    datePublished: "2026-02-19",
    dateModified: CONTENT_DATES.conditions,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "דף הבית",
          item: SITE.baseUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "שירותי המרפאה",
          item: `${SITE.baseUrl}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: parentService?.title || "רפואת עור",
          item: `${SITE.baseUrl}/services/${condition.parentServiceSlug}`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: condition.hebrewName,
          item: `${SITE.baseUrl}/conditions/${condition.slug}`,
        },
      ],
    },
    about: {
      "@type": "MedicalCondition",
      name: condition.hebrewName,
      alternateName: [condition.englishName, ...(condition.hebrewAlternate ? [condition.hebrewAlternate] : [])],
      possibleTreatment: condition.content.treatment.split('\n\n').filter(Boolean).map((t) => ({
        "@type": "MedicalTherapy",
        name: t.split(':')[0]?.trim(),
      })),
    },
    author: {
      "@type": "Physician",
      name: SITE.name,
      url: SITE.baseUrl,
      image: `${SITE.baseUrl}/assets/images/doctor-photo-green-square.jpg`,
    },
    publisher: {
      "@type": "MedicalBusiness",
      name: SITE.name,
      url: SITE.baseUrl,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "[itemprop='description']", ".faq-answer:first-of-type"],
    },
  }

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: condition.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return [medicalWebPage, faqPage]
}

