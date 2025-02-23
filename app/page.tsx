import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { Stethoscope, Fingerprint, Scissors, Search, Sparkles, Palette, Video, Hand } from "lucide-react"
import { Navigation } from "@/components/Navigation"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import React from "react"
import { HairIcon } from '@/components/icons/HairIcon'
import { AcneIcon } from '@/components/icons/AcneIcon'

const services = [
  {
    title: "אבחון וטיפול של כלל מחלות העור",
    icon: Stethoscope,
    description: "אבחון מקצועי ומדויק של מחלות עור שונות והתאמת טיפול אישי",
    longDescription:
      'המרפאה מציעה אבחון מקיף ומדויק של מגוון רחב של מחלות עור. ד"ר קורן משתמשת בידע ובניסיון הרב שלה כדי להתאים טיפול אישי לכל מטופל, תוך התחשבות בגורמים הייחודיים של כל מקרה.',
  },
  {
    title: "מחלות ושינויים בציפורניים",
    icon: Hand,
    description: "טיפול בבעיות ציפורניים ושינויים פתולוגיים",
    longDescription:
      "אנו מטפלים במגוון רחב של בעיות ציפורניים, כולל פטרת, שינויים בצורה ובצבע, ובעיות אחרות. הטיפול מותאם אישית לכל מטופל ומשלב טכניקות מתקדמות לשיפור בריאות הציפורניים.",
  },
  {
    title: "מחלות ונשירת שיער",
    icon: HairIcon,
    description: "אבחון וטיפול בנשירת שיער ובעיות קרקפת",
    longDescription:
      "המרפאה מתמחה באבחון וטיפול בבעיות שיער וקרקפת. אנו מציעים פתרונות מקיפים לנשירת שיער, קרחות, ובעיות קרקפת שונות, תוך שימוש בשיטות הטיפול המתקדמות ביותר.",
  },
  {
    title: "בדיקת שומות, אבחון נגעים שפירים וסרטני עור",
    icon: Search,
    description: "בדיקה יסודית ומעקב אחר שומות ונגעי עור",
    longDescription:
      "אנו מבצעים בדיקות מקיפות של שומות ונגעי עור, תוך שימוש בטכנולוגיות מתקדמת לאבחון מוקדם של סרטן העור. המרפאה מציעה מעקב שוטף ומדויק אחר שינויים בעור לאורך זמן.",
  },
  {
    title: "התאמת טיפול אישי ומדוייק לאקנה",
    icon: AcneIcon,
    description: "טיפול באקנה והתאמת שגרת טיפוח יומיומית",
    longDescription:
      "אנו מציעים טיפול מקיף באקנה, המותאם אישית לכל מטופל. הטיפול כולל אבחון מדויק של סוג האקנה, התאמת טיפול תרופתי במידת הצורך, וייעוץ מקיף לגבי שגרת טיפוח יומיומית לשיפור מצב העור.",
  },
  {
    title: "טיפול בפיגמנטציה ואסטטיקה",
    icon: Palette,
    description: "טיפולים אסתטיים מתקדמים והבהרת כתמי עור",
    longDescription:
      "המרפאה מציעה מגוון טיפולים אסתטיים מתקדמים, כולל טיפול בכתמי עור ופיגמנטציה. אנו משתמשים בטכנולוגיות חדישות להבהרת העור ושיפור מראהו הכללי, תוך שמירה על בריאותו.",
  },
  {
    title: "יעוץ אונליין מרחוק",
    icon: Video,
    description: "ייעוץ מקצועי נוח ונגיש מכל מקום",
    longDescription:
      "אנו מציעים שירות ייעוץ אונליין, המאפשר למטופלים לקבל חוות דעת מקצועית מבלי לצאת מהבית. השירות כולל הערכה ראשונית, מעקב אחר טיפולים, ומתן המלצות מותאמות אישית.",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-light" dir="rtl">
      <header className="py-4 bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="w-[200px]">
              <Link href="/">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dr.%20Tamar%20Koren-U0hIz1F6EsNKraH3b9qex4H5pIyU6c.png"
                  alt="ד״ר תמר קורן"
                  width={200}
                  height={50}
                  className="object-contain"
                  priority
                />
              </Link>
            </div>
            <Navigation />
            <Button className="md:hidden bg-[#859a85] text-white hover:bg-[#A27B5C]">תפריט</Button>
          </div>
        </div>
      </header>

      <main>
        <section className="py-20 text-center bg-[#e8f0e8] bg-opacity-30">
          <h2 className="text-4xl font-thin mb-4 text-[#6b8e6b]">ד״ר תמר קורן – מומחית לרפואת עור ומין</h2>
          <p className="text-lg mb-8 text-gray-900">טיפול אישי ומקצועי לילדים ולמבוגרים</p>
        </section>


        <section id="about" className="py-14">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A51A8218.jpg-Jm1XM2fGyqHdDeohR1Ocu3BEtIVZSx.jpeg"
                alt="ד״ר תמר קורן"
                width={600}
                height={900}
                className="rounded-3xl shadow-lg w-full max-w-md mx-auto"
                priority
              />
            </div>
            <div className="md:w-1/2 md:pr-8">
              <h2 className="text-4xl font-light mb-6 text-[#6b8e6b] text-right">
              אודות
              </h2>
                <p className="mb-6 text-xl text-gray-500 leading-relaxed text-right">
                  ד״ר תמר קורן היא מומחית לרפואת עור ומין, בעלת ניסיון בטיפול בילדים ומבוגרים. 
                  בוגרת הפקולטה לרפואה בטכניון והתמחתה ברפואת עור בבית החולים העמק.
                </p>
                <p className="mb-6 text-xl text-gray-500 leading-relaxed text-right">
                  בעלת פרסום מאמרים מדעיים, מדריכה סטודנטים לרפואה בטכניון
                  ומתנדבת בעמותת 'למענם' המסייעת רפואית לניצולי שואה.
                </p>
                <p className="text-xl text-gray-500 leading-relaxed text-right">
                  ד״ר קורן מאמינה באבחון מדויק והתאמת טיפול אישי לכל מטופל, תוך הקפדה על מקצועיות, גישה קשובה ואכפתית.
                </p>

            </div>
          </div>
        </section>


        <section id="שירותי-המרפאה" className="py-16 bg-[#dce7dc] bg-opacity-60 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-light mb-24 text-center text-[#859a85]">שירותי המרפאה</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {services.map((service, i) => (
                <div
                  key={`service-${i}`}
                  className="service-tile bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-opacity-100"
                >
                  <div className="flex flex-col items-center text-center gap-6">
                    <div className="bg-[#A27B5C] p-4 rounded-full transition-transform duration-300 hover:rotate-12">
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#859a85]">
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="ביקורות" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light mb-12 text-center text-[#859a85]">ביקורות מטופלים</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((_, index) => (
                <div key={index} className="bg-[#c6d5c6] bg-opacity-10 p-6 rounded-lg shadow-md">
                  <p className="text-gray-600 mb-4 text-right">
                    ״השירות של ד״ר קורן היה מעולה. היא הקשיבה לצרכים שלי והציעה טיפול מותאם אישית.״
                  </p>
                  <p className="font-light text-[#859a85] text-right">- לקוח מרוצה</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="קביעת-תור" className="py-24 bg-[#c6d5c6] bg-opacity-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-light mb-12 text-center text-[#859a85]">קביעת תור</h2>
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <p className="mb-8 text-xl text-gray-600 text-right">לקביעת תור ופרטים נוספים:</p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faWhatsapp} className="text-[#25D366] w-5 h-5" />
                    <span className="text-xl text-[#A27B5C]">וואטסאפ: 0525-280650</span>
                  </div>
                  <div>
                    <span className="text-xl text-gray-600">כתובת: מוריה 84, חיפה</span>
                  </div>
                </div>
                <a href="https://wa.me/972525280650" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <Button className="bg-[#A27B5C] text-white hover:bg-[#859a85] transition-colors font-light text-lg py-3 px-6">
                    קבע תור עכשיו
                  </Button>
                </a>
              </div>
              <div className="md:w-1/2 h-[800px] md:h-[400px]">
                <iframe
                  src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=מוריה%2084%20חיפה+(מרפאת%20מומחים%20ד״ר%20תמר%20קורן)&amp;t=k&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" 
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#859a85] text-white py-6 text-center font-light">
        <p>&copy; {new Date().getFullYear()} ד״ר תמר קורן. כל הזכויות שמורות.</p>
        <p className="text-sm mt-2">
          <a 
            href="https://www.flaticon.com/free-icons/hair-follicle" 
            title="hair follicle icons"
            className="text-white hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hair follicle icons created by Freepik - Flaticon
          </a>
        </p>
      </footer>
    </div>
  )
}

