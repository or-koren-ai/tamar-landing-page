import { SITE } from '../config/site-config'
import { services } from '../data/services'
import { reviews } from '../data/reviews'

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

  // Doctor photo for Google Knowledge Panel / search results
  image: {
    "@type": "ImageObject",
    url: `${SITE.baseUrl}/assets/images/doctor-photo-green-square.png`,
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
    latitude: "32.7894",
    longitude: "34.9877"
  },
  hasMap: "https://maps.google.com/?q=%D7%9E%D7%95%D7%A8%D7%99%D7%94+84+%D7%97%D7%99%D7%A4%D7%94",
  priceRange: "₪₪",

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
  ]
}

// Service-specific structured data generator
export const generateServiceStructuredData = (service: any) => ({
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: service.title,
  description: service.description,
  url: `${SITE.baseUrl}/services/${service.slug}`,
  datePublished: "2024-12-01",
  dateModified: "2025-06-01",
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
    image: `${SITE.baseUrl}/assets/images/doctor-photo-green-square.png`
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
    }
  ]
}

// Individual review structured data from patient testimonials
export const reviewsStructuredData = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: SITE.name,
  url: SITE.baseUrl,
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
