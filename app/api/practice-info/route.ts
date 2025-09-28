import { NextResponse } from 'next/server'
import { SITE } from '@/lib/site-config'
import { services } from '@/lib/services'

// API endpoint for AI agents to easily access practice information
export async function GET() {
  const practiceInfo = {
    // Basic Information
    practitioner: {
      name: SITE.name,
      title: "ד״ר תמר קורן",
      specialty: "מומחית לרפואת עור ומין",
      specialtyEnglish: "Dermatologist and Venereologist",
      credentials: [
        "בוגרת הפקולטה לרפואה בטכניון",
        "התמחות ברפואת עור במרכז רפואי העמק (2019-2024)",
        "רופאה בכירה ואחראית מרפאת פסוריאזיס בבית החולים העמק"
      ]
    },

    // Contact Information  
    contact: {
      phone: SITE.clinicPhone.display,
      phoneInternational: SITE.clinicPhone.e164,
      whatsapp: SITE.whatsapp.display,
      whatsappLink: SITE.whatsapp.link,
      email: SITE.clinicEmail,
      website: SITE.baseUrl
    },

    // Location
    location: {
      address: `${SITE.address.streetAddress}, ${SITE.address.locality}`,
      city: SITE.address.locality,
      country: "Israel",
      postalCode: SITE.address.postalCode,
      coordinates: {
        // Approximate coordinates for Moriya 84, Haifa
        latitude: 32.7942,
        longitude: 34.9885
      }
    },

    // Operating Hours
    hours: {
      schedule: "ימי שלישי 13:00–19:00",
      scheduleEnglish: "Tuesdays 1:00 PM - 7:00 PM", 
      byAppointmentOnly: true,
      appointmentBooking: [
        `טלפון: ${SITE.clinicPhone.display}`,
        `וואטסאפ: ${SITE.whatsapp.display}`
      ]
    },

    // Medical Services
    services: {
      totalServices: services.length,
      categories: services.map(service => ({
        name: service.title,
        nameEnglish: service.titleEn || service.title,
        description: service.description,
        slug: service.slug,
        url: `${SITE.baseUrl}/services/${service.slug}`,
        conditions: service.longDescription ? 
          service.longDescription.split('\n').slice(0, 3).join(' ') : 
          service.description
      })),
      specialtiesHebrew: [
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
        "טיפול בילדים ותינוקות"
      ],
      specialtiesEnglish: [
        "Acne treatment",
        "Mole examination and dermoscopy",
        "Skin cancer screening", 
        "Psoriasis and biologic treatment",
        "Eczema and atopic dermatitis",
        "Hair loss and alopecia treatment",
        "Nail fungus treatment",
        "Pigmentation and skin spots",
        "Vitiligo treatment",
        "Rosacea treatment",
        "Medical botox injections",
        "Warts and viral warts",
        "Molluscum treatment",
        "Pediatric dermatology"
      ]
    },

    // Patient Information
    patients: {
      ageGroups: ["children", "infants", "adults"],
      ageGroupsHebrew: ["ילדים", "תינוקות", "מבוגרים"],
      languages: ["Hebrew", "English"],
      practiceType: "Private clinic"
    },

    // SEO and Discoverability 
    discoverability: {
      keywords: [
        "דרמטולוג חיפה",
        "רופאת עור חיפה", 
        "בדיקת שומות חיפה",
        "טיפול באקנה",
        "פסוריאזיס",
        "נשירת שיער",
        "Dermatologist Haifa",
        "Skin doctor Haifa"
      ],
      serviceAreas: [
        "חיפה",
        "קריית אתא", 
        "קריית מוצקין",
        "קריית ים",
        "עכו",
        "צפון",
        "Haifa",
        "Kiryat Ata",
        "Kiryat Motzkin", 
        "Kiryat Yam",
        "Acre",
        "North Israel"
      ]
    },

    // Metadata for AI processing
    metadata: {
      lastUpdated: new Date().toISOString(),
      dataFormat: "structured-json",
      language: "he-IL", 
      secondaryLanguage: "en-US",
      contentType: "medical-practice-information",
      aiAccessible: true
    }
  }

  return NextResponse.json(practiceInfo, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  })
}
