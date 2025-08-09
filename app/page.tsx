import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"
import { Navigation } from "@/components/Navigation"
import React from "react"
import ServicesGrid from "@/components/ServicesGrid"
import { SITE } from "@/lib/site-config"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

export const metadata: Metadata = {
  title: SITE.hero.title,
  description: SITE.hero.subtitle,
}

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-white text-gray-800 font-light" dir="rtl">
      <header className="py-4 bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <a href="#top">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dr.%20Tamar%20Koren-U0hIz1F6EsNKraH3b9qex4H5pIyU6c.png"
                  alt={SITE.name}
                  width={200}
                  height={50}
                  className="h-auto w-auto max-w-[200px]"
                  priority
                />
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Navigation />
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="md:hidden bg-[#859a85] text-white hover:bg-[#A27B5C]">תפריט</Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-white">
                  <nav className="mt-8">
                    <ul className="flex flex-col items-end gap-4 text-right">
                      <li>
                        <SheetClose asChild>
                          <a href="#אודות" className="text-lg text-[#859a85] hover:underline">אודות</a>
                        </SheetClose>
                      </li>
                      <li>
                        <SheetClose asChild>
                          <a href="#שירותי-המרפאה" className="text-lg text-[#859a85] hover:underline">שירותי המרפאה</a>
                        </SheetClose>
                      </li>
                      <li>
                        <SheetClose asChild>
                          <a href="#ביקורות" className="text-lg text-[#859a85] hover:underline">ביקורות</a>
                        </SheetClose>
                      </li>
                      <li>
                        <SheetClose asChild>
                          <a href="#קביעת-תור" className="text-lg text-[#859a85] hover:underline">קביעת תור</a>
                        </SheetClose>
                      </li>
                    </ul>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <main className="pb-24 md:pb-0">
        <section className="py-12 md:py-16 text-center bg-[#e8f0e8] bg-opacity-30">
          <h1 className="text-3xl md:text-5xl font-thin mb-3 md:mb-4 text-[#6b8e6b]">
            {SITE.hero.title}
          </h1>
          <p className="text-base md:text-lg mb-6 text-gray-900">
            {SITE.hero.subtitle}
          </p>
        </section>

        <section id="אודות" className="py-12 md:py-16" aria-labelledby="about-title">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A51A8218.jpg-Jm1XM2fGyqHdDeohR1Ocu3BEtIVZSx.jpeg"
                alt={SITE.hero.title}
                width={600}
                height={900}
                className="rounded-3xl shadow-lg w-full max-w-md mx-auto"
                loading="lazy"
              />
            </div>
            <div className="md:w-1/2 md:pr-8">
              <h2 id="about-title" className="text-3xl md:text-4xl font-light mb-8 text-[#6b8e6b] text-center md:text-right">אודות</h2>
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


        <section id="שירותי-המרפאה" className="py-12 md:py-16 bg-[#dce7dc] bg-opacity-60 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-light mb-10 md:mb-12 text-center text-[#859a85]">שירותי המרפאה</h2>
            <ServicesGrid />
          </div>
        </section>

        <section id="ביקורות" className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-light mb-10 md:mb-12 text-center text-[#859a85]">ביקורות מטופלים</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#c6d5c6] bg-opacity-10 p-6 rounded-lg shadow-md flex flex-col min-h-[220px]">
                <p className="text-gray-700 text-right">
                  ״תודה לך ד״ר תמר על מקצועיות, הקשבה ואכפתיות. את נותנת תחושת ביטחון, מסבירה בצורה ברורה על תהליכים רפואיים, ומקדישה זמן אמיתי למטופלים. הרגשתי שמקשיבים לי ושהטיפול נעשה בגישה אנושית ומכילה.״
                </p>
                <p className="mt-auto font-light text-[#859a85] text-right">- אופיר, חיפה</p>
              </div>

              <div className="bg-[#c6d5c6] bg-opacity-10 p-6 rounded-lg shadow-md flex flex-col min-h-[220px]">
                <p className="text-gray-700 text-right">״בן אדם טוב במלוא מובן המילה ואשת מקצוע מעולה!״</p>
                <p className="mt-auto font-light text-[#859a85] text-right">- אביבית שמואל נסים, קריית אתא</p>
              </div>

              <div className="bg-[#c6d5c6] bg-opacity-10 p-6 rounded-lg shadow-md flex flex-col min-h-[220px]">
                <p className="text-gray-700 text-right">
                  ״כבר פעם שניה שאני עושה אצל ד"ר קורן המקסימה בוטוקס. בשתי הפעמים התוצאה מעולה. ד"ר קורן מסבירה את האפשרויות בסבלנות ומקצועיות, לא לוחצת ולא משכנעת. עובדת במקצועיות, עדינות וסבלנות. אני ממליצה מאוד.״
                </p>
                <p className="mt-auto font-light text-[#859a85] text-right">- ר.ב הרצליה</p>
              </div>

              <div className="bg-[#c6d5c6] bg-opacity-10 p-6 rounded-lg shadow-md flex flex-col min-h-[220px]" dir="ltr">
                <p className="text-gray-700 text-left">
                  "Very professional, knowledgeable and compassionate Health Care Provider. Very satisfied with the excellent service which I received. Would highly recommend this practice"
                </p>
                <p className="mt-auto font-light text-[#859a85] text-right">- Wayne Shepherd, Haifa</p>
              </div>
            </div>

            <p className="mt-8 text-sm text-center text-gray-500">
              מקור הביקורות -{' '}
              <a
                href={SITE.socials.medreviews}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#859a85]"
              >
                MedReviews
              </a>
            </p>
          </div>
        </section>

        <section id="קביעת-תור" className="scroll-mt-24 py-12 md:py-16 bg-[#c6d5c6] bg-opacity-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-light mb-10 md:mb-12 text-center text-[#859a85]">קביעת תור</h2>
            <div className="flex flex-col md:flex-row gap-10 md:gap-12">
              <div className="md:w-1/2">
                <div className="text-right space-y-2">
                  <p className="text-gray-700 text-lg leading-relaxed">לקביעת תור ולשאלות כלליות:</p>
                  <ul className="list-none space-y-1 text-gray-700">
                    <li>
                      <strong className="text-gray-800">טלפון למרפאה:</strong>{' '}
                      <a href={SITE.clinicPhone.link} className="underline" dir="ltr">{SITE.clinicPhone.display}</a>
                    </li>
                    <li>
                      <strong className="text-gray-800">וואטסאפ:</strong>{' '}
                      <a href={SITE.whatsapp.link} target="_blank" rel="noopener noreferrer" className="underline" dir="ltr">{SITE.whatsapp.display}</a>
                    </li>
                    <li>
                      <strong className="text-gray-800">כתובת:</strong>{' '}
                      <address className="not-italic inline">{SITE.address.streetAddress}, {SITE.address.locality}</address>
                    </li>
                  </ul>
                </div>

                <div className="mt-5 flex flex-col md:flex-row items-stretch md:items-center gap-3">
                  <a
                    href={SITE.whatsapp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`יצירת קשר בוואטסאפ לקביעת תור ${SITE.whatsapp.display}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366] text-[#25D366] bg-white hover:bg-[#25D366] hover:text-white transition-colors px-4 py-2 text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="font-medium">קבע/י תור בוואטצאפ</span>
                  </a>

                  <a
                    href={SITE.clinicPhone.link}
                    aria-label={`חיוג למרפאה לקביעת תור ${SITE.clinicPhone.display}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#A27B5C] text-white hover:bg-[#859a85] transition-colors px-4 py-2 text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="font-medium">התקשר/י למרפאה</span>
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 h-80 md:h-[450px] rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
                <iframe
                  src={SITE.map.embedSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`מפת הקליניקה — ${SITE.address.streetAddress}, ${SITE.address.locality}`}
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-white/95 backdrop-blur border-t" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
          <div className="container mx-auto px-4 py-3">
            <Button asChild className="w-full bg-[#859a85] hover:bg-[#6b8e6b] text-white text-lg py-4 font-medium shadow-lg">
              <a href="#קביעת-תור" aria-label="לקביעת תור">לקביעת תור</a>
            </Button>
          </div>
        </div>
      </main>

      <footer className="bg-[#859a85] text-white py-4 text-center font-light">
        <p>&copy; {new Date().getFullYear()} {SITE.name}. כל הזכויות שמורות.</p>

      </footer>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physician",
              name: SITE.name,
              description: SITE.hero.subtitle,
              telephone: SITE.clinicPhone.e164,
              address: {
                "@type": "PostalAddress",
                streetAddress: SITE.address.streetAddress,
                addressLocality: SITE.address.locality,
                addressCountry: SITE.address.countryCode,
              },
              areaServed: SITE.city,
              url: SITE.baseUrl,
              hasMap: SITE.map.url,
              sameAs: [SITE.socials.medreviews, SITE.socials.instagram],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "appointment",
                  telephone: SITE.clinicPhone.e164,
                },
                {
                  "@type": "ContactPoint",
                  contactType: "whatsapp",
                  telephone: SITE.whatsapp.e164,
                  url: SITE.whatsapp.link,
                },
              ],
            }),
          }}
        />
    </div>
  )
}

