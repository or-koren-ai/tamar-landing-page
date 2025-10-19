import { SITE } from '../config/site-config'
import { services } from '../data/services'

// Enhanced business structured data for LLMs
export const businessStructuredData = {
  "@context": "https://schema.org",
  "@type": ["Physician", "LocalBusiness", "MedicalBusiness"],
  name: SITE.name,
  description: "רופאת עור מומחית בחיפה - טיפול אישי ומקצועי לילדים ולמבוגרים",
  medicalSpecialty: ["Dermatology", "Venereology", "רפואת עור ומין"],
  
  // Logo for google search
  logo: {
    "@type": "ImageObject",
    url: `${SITE.baseUrl}/assets/graphics/herb/herb.png`,
    width: 512,
    height: 512
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
    addressCountry: "Israel",
    postalCode: SITE.address.postalCode,
    addressRegion: "Haifa District"
  },
  
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
  
  // Social profiles
  sameAs: [
    SITE.socials.medreviews,
    SITE.socials.instagram
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
    "Pediatric dermatology"
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
  ]
}

// Service-specific structured data generator
export const generateServiceStructuredData = (service: any) => ({
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: service.title,
  description: service.description,
  url: `${SITE.baseUrl}/services/${service.slug}`,
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
    url: SITE.baseUrl
  },
  publisher: {
    "@type": "MedicalBusiness",
    name: SITE.name,
    url: SITE.baseUrl
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
    }
  ]
}
