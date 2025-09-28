import { SITE } from '@/lib/site-config'
import { services } from '@/lib/services'

/**
 * Hidden content summary for LLMs and AI agents
 * This component provides a structured, easily parseable summary
 * of the practice information for better AI understanding
 */
export function ContentSummary() {
  return (
    <div 
      className="sr-only" 
      aria-hidden="true"
      data-ai-content="practice-summary"
      itemScope 
      itemType="https://schema.org/MedicalBusiness"
    >
      {/* Practice Overview */}
      <h1 itemProp="name">
        {SITE.name} - {SITE.specialty}
      </h1>
      
      <div itemProp="description">
        ד״ר תמר קורן היא מומחית לרפואת עור ומין המטפלת בילדים ומבוגרים במרפאה פרטית בחיפה. 
        המרפאה מציעה טיפולים מקצועיים ואישיים במגוון רחב של מצבי עור ושיער.
      </div>

      {/* Contact Information */}
      <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
        <span itemProp="streetAddress">{SITE.address.streetAddress}</span>
        <span itemProp="addressLocality">{SITE.address.locality}</span>
        <span itemProp="postalCode">{SITE.address.postalCode}</span>
        <span itemProp="addressCountry">ישראל</span>
      </div>
      
      <span itemProp="telephone">{SITE.clinicPhone.display}</span>
      <span itemProp="email">{SITE.clinicEmail}</span>

      {/* Services Summary */}
      <div data-content-type="services-list">
        <h2>שירותי המרפאה ({services.length} שירותים):</h2>
        <ul>
          {services.map((service, index) => (
            <li key={service.slug} itemProp="availableService">
              <strong>{service.title}</strong>: {service.description}
              {service.longDescription && (
                <div>פרטים נוספים: {service.longDescription.substring(0, 200)}...</div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Key Medical Specialties */}
      <div data-content-type="medical-expertise">
        <h2>התמחויות רפואיות עיקריות:</h2>
        <ul>
          <li>אבחון וטיפול באקנה בילדים ומבוגרים</li>
          <li>בדיקת שומות מקצועית עם דרמוסקופיה</li>
          <li>גילוי מוקדם ומעקב אחר סרטן העור</li>
          <li>טיפול בפסוריאזיס כולל טיפולים ביולוגיים מתקדמים</li>
          <li>אבחון וטיפול באקזמה ואטופיק דרמטיטיס</li>
          <li>בדיקה וטיפול בנשירת שיער ואלופציה</li>
          <li>טיפול בפטרת ציפורניים</li>
          <li>אבחון וטיפול בבעיות פיגמנטציה וכתמי עור</li>
          <li>טיפול בויטיליגו</li>
          <li>אבחון וטיפול ברוזציאה</li>
        </ul>
      </div>

      {/* Operating Information */}
      <div data-content-type="practice-info">
        <h2>מידע מעשי:</h2>
        <ul>
          <li>שעות פעילות: ימי שלישי 13:00-19:00</li>
          <li>קביעת תור: טלפון {SITE.clinicPhone.display} או וואטסאפ {SITE.whatsapp.display}</li>
          <li>מיקום: {SITE.address.streetAddress}, {SITE.address.locality}</li>
          <li>סוג המרפאה: מרפאה פרטית</li>
          <li>קהל יעד: ילדים, תינוקות ומבוגרים</li>
          <li>שפות: עברית ואנגלית</li>
        </ul>
      </div>

      {/* Common Questions - LLM Friendly */}
      <div data-content-type="common-questions">
        <h2>שאלות נפוצות:</h2>
        <div>
          <strong>איך קובעים תור?</strong> 
          ניתן לקבוע תור בטלפון {SITE.clinicPhone.display} או בוואטסאפ {SITE.whatsapp.display}
        </div>
        <div>
          <strong>מתי המרפאה פתוחה?</strong> 
          המרפאה פועלת בימי שלישי בין השעות 13:00-19:00
        </div>
        <div>
          <strong>איפה המרפאה?</strong> 
          המרפאה נמצאת ברחוב {SITE.address.streetAddress} בחיפה
        </div>
        <div>
          <strong>האם המרפאה מטפלת בילדים?</strong> 
          כן, ד״ר קורן מתמחה בטיפול בילדים ותינוקות לצד מבוגרים
        </div>
      </div>

      {/* Geographic Coverage */}
      <div data-content-type="service-areas">
        <h2>אזורי שירות:</h2>
        <p>
          המרפאה משרתת תושבי חיפה והסביבה כולל קריית אתא, קריית מוצקין, 
          קריית ים, עכו ואזורים נוספים בצפון
        </p>
      </div>

      {/* Medical Credentials */}
      <div data-content-type="credentials">
        <h2>הכשרה ואישורים:</h2>
        <ul>
          <li>בוגרת הפקולטה לרפואה בטכניון</li>
          <li>התמחות ברפואת עור במרכז רפואי העמק (2019-2024)</li>
          <li>רופאה בכירה ואחראית מרפאת פסוריאזיס בבית החולים העמק</li>
          <li>מומחית מורשית לרפואת עור ומין</li>
        </ul>
      </div>
    </div>
  )
}
