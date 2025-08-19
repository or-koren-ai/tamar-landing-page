import type { Metadata } from "next"
import Image from "next/image"
import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react"
import { Navigation } from "@/components/Navigation"
import { AboutSection } from "@/components/AboutSection"
import React from "react"
import ServicesGrid from "@/components/ServicesGrid"
import { SITE } from "@/lib/site-config"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import Script from 'next/script'

export const generateMetadata = () => ({
  title: 'ד״ר תמר קורן – רופאת עור מומחית בחיפה | קביעת תור',
  description:
    'טיפול במחלות עור בילדים ומבוגרים בגובה העיניים. קביעת תור מהירה',
  alternates: { canonical: 'https://drkoren.skin/' },
  openGraph: {
    title: 'ד״ר תמר קורן – רופאת עור חיפה',
    description:
      'טיפול במחלות עור בילדים ומבוגרים בגובה העיניים | קביעת תור מהיר',
    url: 'https://drkoren.skin/',
    locale: 'he_IL',
    images: ['/doctor-photo.jpg'],
  },
  twitter: { card: 'summary_large_image', images: ['/doctor-photo.jpg'] },
})

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-white text-gray-800 font-extralight" dir="rtl">
      <header className="py-3 bg-white shadow-md sticky top-0 z-50 animate-header-slide">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Navigation />
              <Sheet>
                <SheetTrigger asChild>
                  <button
                    type="button"
                    className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300/70 bg-white/80 backdrop-blur shadow-sm ring-1 ring-black/5 hover:bg-white hover:shadow-md transition"
                    aria-label="פתח תפריט"
                  >
                    <span className="sr-only">תפריט</span>
                    <span className="flex flex-col items-center justify-center gap-1.5">
                      <span className="block h-[2px] w-5 rounded-full bg-[#6b8e6b]"></span>
                      <span className="block h-[2px] w-4 rounded-full bg-[#6b8e6b]"></span>
                      <span className="block h-[2px] w-6 rounded-full bg-[#6b8e6b]"></span>
                    </span>
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-white p-0" dir="rtl">
                  <div className="px-4 py-3 border-b text-right">
                    <div className="text-[#6b8e6b] text-xl">{SITE.name}</div>
                  </div>
                  <nav className="mt-2">
                    <ul className="flex flex-col items-end gap-2 text-right px-4 py-3">
                      <li className="w-full">
                        <SheetClose asChild>
                          <a href="#אודות" className="block w-full rounded-lg px-3 py-2 text-lg text-[#859a85] hover:bg-[#f3f6f3] transition-colors">אודות</a>
                        </SheetClose>
                      </li>
                      <li className="w-full">
                        <SheetClose asChild>
                          <a href="#שירותי-המרפאה" className="block w-full rounded-lg px-3 py-2 text-lg text-[#859a85] hover:bg-[#f3f6f3] transition-colors">שירותי המרפאה</a>
                        </SheetClose>
                      </li>
                      <li className="w-full">
                        <SheetClose asChild>
                          <a href="#ביקורות" className="block w-full rounded-lg px-3 py-2 text-lg text-[#859a85] hover:bg-[#f3f6f3] transition-colors">ביקורות</a>
                        </SheetClose>
                      </li>
                      <li className="w-full">
                        <SheetClose asChild>
                          <a href="#קביעת-תור" className="block w-full rounded-lg px-3 py-2 text-lg text-[#859a85] hover:bg-[#f3f6f3] transition-colors">קביעת תור</a>
                        </SheetClose>
                      </li>
                    </ul>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
            <div className="flex-shrink-0">
              <a href="#top">
                <Image
                  src="/logo-tk.png"
                  alt={SITE.name}
                  width={200}
                  height={50}
                  className="h-auto w-auto max-w-[200px]"
                  priority
                  fetchPriority="high"
                />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="pb-28 md:pb-0">
        <section className="py-8 md:py-12 text-center bg-[#e8f0e8] bg-opacity-30 animate-hero-fade-in">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-thin mb-2 md:mb-3 text-[#6b8e6b] px-4 md:px-0 animate-hero-title">
              {SITE.hero.title}
            </h1>
            <p className="text-base md:text-lg mb-4 text-gray-900 px-4 md:px-0 animate-hero-subtitle">
              {SITE.hero.subtitle}
            </p>
          </div>
        </section>

        <AboutSection />

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
                <p className="text-gray-700 text-right italic">
                  ״תודה לך ד״ר תמר על מקצועיות, הקשבה ואכפתיות. את נותנת תחושת ביטחון, מסבירה בצורה ברורה על תהליכים רפואיים, ומקדישה זמן אמיתי למטופלים. הרגשתי שמקשיבים לי ושהטיפול נעשה בגישה אנושית ומכילה.״
                </p>
                <p className="mt-auto font-light text-[#859a85] text-right">- אופיר, חיפה</p>
              </div>

              <div className="bg-[#c6d5c6] bg-opacity-10 p-6 rounded-lg shadow-md flex flex-col min-h-[220px]">
                <p className="text-gray-700 text-right italic">״בן אדם טוב במלוא מובן המילה ואשת מקצוע מעולה!״</p>
                <p className="mt-auto font-light text-[#859a85] text-right">- אביבית שמואל נסים, קריית אתא</p>
              </div>

              <div className="bg-[#c6d5c6] bg-opacity-10 p-6 rounded-lg shadow-md flex flex-col min-h-[220px]">
                <p className="text-gray-700 text-right italic">
                  ״כבר פעם שניה שאני עושה אצל ד"ר קורן המקסימה בוטוקס. בשתי הפעמים התוצאה מעולה. ד"ר קורן מסבירה את האפשרויות בסבלנות ומקצועיות, לא לוחצת ולא משכנעת. עובדת במקצועיות, עדינות וסבלנות. אני ממליצה מאוד.״
                </p>
                <p className="mt-auto font-light text-[#859a85] text-right">- ר.ב הרצליה</p>
              </div>

              <div className="bg-[#c6d5c6] bg-opacity-10 p-6 rounded-lg shadow-md flex flex-col min-h-[220px]" dir="ltr">
                <p className="text-gray-700 text-left italic">
                  "Very professional, knowledgeable and compassionate Health Care Provider. Very satisfied with the excellent service which I received. Would highly recommend this practice"
                </p>
                <p className="mt-auto font-light text-[#859a85] text-right">- Wayne Shepherd, Haifa</p>
              </div>
            </div>

            <p className="mt-8 text-base text-center text-gray-500">
              לעוד ביקורות -{' '}
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
                  <div className="mt-3 flex flex-col gap-2 text-gray-700 text-right items-end">
                    <div className="w-full flex justify-start items-center gap-2">
                      <Phone className="w-4 h-4 text-[#6b8e6b]" />
                      <a href={SITE.clinicPhone.link} className="underline">{SITE.clinicPhone.display}</a>
                    </div>
                    <div className="w-full flex justify-start items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      <a href={SITE.whatsapp.link} target="_blank" rel="noopener noreferrer" className="underline">{SITE.whatsapp.display}</a>
                    </div>
                    <div className="w-full flex justify-start items-center gap-2">
                      <Mail className="w-4 h-4 text-[#6b8e6b]" />
                      <a href="mailto:office@mchc.co.il" className="underline">office@mchc.co.il</a>
                    </div>
                    <div className="w-full flex justify-start items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#6b8e6b]" />
                      <address className="not-italic inline">{SITE.address.streetAddress}, {SITE.address.locality}</address>
                    </div>
                    <div className="w-full flex justify-start items-center gap-2">
                      <Clock className="w-4 h-4 text-[#6b8e6b]" />
                      <span>ימי שלישי 13:00-19:00</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex flex-col md:flex-row items-stretch md:items-center gap-3 justify-end">
                  <a
                    href={SITE.whatsapp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`יצירת קשר בוואטסאפ לקביעת תור ${SITE.whatsapp.display}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366] text-[#25D366] bg-white hover:bg-[#25D366] hover:text-white transition-colors px-4 py-2 text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="font-medium">קבע/י תור ב-WhatsApp</span>
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
            <a href="#קביעת-תור" aria-label="לקביעת תור" className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#859a85] to-[#6b8e6b] text-white text-lg py-3 px-5 font-medium shadow-lg hover:shadow-xl ring-1 ring-black/5 transition">
              <span>לקביעת תור</span>
            </a>
          </div>
        </div>
      </main>

      <footer className="bg-[#859a85] text-white pt-6 pb-28 md:py-8 text-center font-light overflow-hidden relative z-30">
        <div className="container mx-auto px-4">
          <div className="footer-content opacity-0 translate-y-8 transition-all duration-700 ease-out">
            <div className="mb-2">
              <a
                href={SITE.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-gray-200 transition-colors duration-300 text-lg"
                aria-label="עקבו אחרינו באינסטגרם"
              >
                <span>Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
            <p>&copy; {new Date().getFullYear()} {SITE.name}. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
      <Script id="footer-anim" strategy="afterInteractive">
        {`
          (function () {
            var footer = document.querySelector('footer');
            var footerContent = footer && footer.querySelector('.footer-content');
            if (!footer || !footerContent || typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

            var observer = new IntersectionObserver(function(entries){
              for (var i=0;i<entries.length;i++) {
                if (entries[i].isIntersecting) {
                  footerContent.classList.remove('opacity-0', 'translate-y-8');
                  footerContent.classList.add('opacity-100', 'translate-y-0');
                  observer.disconnect();
                  break;
                }
              }
            }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

            observer.observe(footer);
          })();
        `}
      </Script>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Physician",
            name: SITE.name,
            description: 'רופאת עור מומחית בחיפה',
            areaServed: 'חיפה והסביבה',
            telephone: SITE.clinicPhone.e164,
            hasMap: SITE.map.url,
            url: 'https://drkoren.skin',
            sameAs: [
              'https://www.medreviews.co.il/provider/dr-koren-tamar',
              'https://www.instagram.com/dr.tamar_koren'
            ],
            knowsAbout: [
              'אקנה',
              'בדיקת שומות ודרמוסקופיה',
              'סרטן העור',
              'פסוריאזיס',
              'אקזמה / אטופיק דרמטיטיס',
              'נשירת שיער / אלופציה',
              'פטרת ציפורניים',
              'פיגמנטציה וכתמי עור',
              'ויטיליגו',
              'רוזציאה',
              'בוטוקס',
              'יבלות',
              'יבלות וירליות ',
              'מולוסקום',
              'פטרות ציפורניים',
              'סרחי עור'
            ],
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

