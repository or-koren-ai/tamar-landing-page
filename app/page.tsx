'use client'

import Image from "next/image"
import { Navigation } from "@/components/Navigation"
import { AboutSection } from "@/components/AboutSection"
import React from "react"
import ServicesGrid from "@/components/ServicesGrid"
import PressCarousel from "@/components/PressCarousel"
import AppointmentSection from "@/components/AppointmentSection"
import { SITE } from "@/lib/site-config"
import { pressItems } from "@/lib/press"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import Script from 'next/script'

// Star rating component
const Stars = ({ value = 5 }: { value: number }) => (
  <span className="review-stars" aria-label={`דירוג ${value} מתוך 5`}>
    {[...Array(5)].map((_, i) => (
      <svg key={i} viewBox="0 0 20 20" className={`w-4 h-4 ${i < value ? 'fill-current' : 'fill-gray-200'}`}>
        <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.07 3.29c.13.41.51.69.95.69h3.46c.97 0 1.37 1.24.59 1.81l-2.8 2.03c-.35.26-.49.72-.36 1.12l1.07 3.29c.3.92-.76 1.69-1.54 1.12l-2.8-2.03a1.1 1.1 0 0 0-1.18 0l-2.8 2.03c-.78.57-1.84-.2-1.54-1.12l1.07-3.29c.13-.4-.01-.86-.36-1.12L2.98 8.72c-.78-.57-.38-1.81.59-1.81h3.46c.44 0 .82-.28.95-.69L9.05 2.93z"/>
      </svg>
    ))}
  </span>
);

// Helper function for initials
const initials = (name: string) => name.trim().split(/\s+/).map(w=>w[0]).slice(0,2).join('');

// Review card component
const ReviewCard: React.FC<{ review: any }> = ({ review }) => {
  return (
    <article className="review-card" dir="rtl">
      <header className="review-header">
        <div className="review-id">
          <div className="review-avatar" aria-hidden="true">{initials(review.name)}</div>
          <div className="text-right">
            <div className="review-name">{review.name}{review.city ? <span className="review-city">, {review.city}</span> : null}</div>
            <div><Stars value={Math.round(review.rating)} /></div>
          </div>
        </div>
      </header>

      <p className="review-text text-right">{review.text}</p>

      <footer className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-2">
          {review.treatment ? <span className="review-chip">{review.treatment}</span> : null}
        </div>
      </footer>
    </article>
  );
};


export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-white text-gray-800" dir="rtl">
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
                          <a href="#כתבות-ופרסומים" className="block w-full rounded-lg px-3 py-2 text-lg text-[#859a85] hover:bg-[#f3f6f3] transition-colors">כתבות ופרסומים</a>
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
          <div className="mx-auto max-w-4xl text-center px-4">
            <h1 className="hero-title animate-hero-title">
              ד״ר תמר קורן
              <span className="hero-accent">מומחית לרפואת עור ומין · חיפה</span>
            </h1>
            <p className="hero-sub animate-hero-subtitle">
              קליניקה פרטית – טיפול אישי ומקצועי לילדים ולמבוגרים
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
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-center text-[#859a85]">ביקורות מטופלים</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  id: '1',
                  name: 'אופיר',
                  city: 'חיפה',
                  rating: 5,
                  text: '״תודה לך ד״ר תמר על מקצועיות, הקשבה ואכפתיות. את נותנת תחושת ביטחון, מסבירה בצורה ברורה על תהליכים רפואיים, ומקדישה זמן אמיתי למטופלים. הרגשתי שמקשיבים לי ושהטיפול נעשה בגישה אנושית ומכילה.״',
                  dateISO: '2024-08-31',
                  treatment: 'טיפול באקנה',
                  sourceUrl: 'https://www.medreviews.co.il/provider/dr-koren-tamar#reviews'
                },
                {
                  id: '2',
                  name: 'אביבית שמואל נסים',
                  city: 'קריית אתא',
                  rating: 5,
                  text: '״בן אדם טוב במלוא מובן המילה ואשת מקצוע מעולה!״',
                  dateISO: '2024-07-15',
                  sourceUrl: 'https://www.medreviews.co.il/provider/dr-koren-tamar#reviews'
                },
                {
                  id: '3',
                  name: 'ר.ב',
                  city: 'הרצליה',
                  rating: 5,
                  text: '״כבר פעם שניה שאני עושה אצל ד"ר קורן המקסימה בוטוקס. בשתי הפעמים התוצאה מעולה. ד"ר קורן מסבירה את האפשרויות בסבלנות ומקצועיות, לא לוחצת ולא משכנעת. עובדת במקצועיות, עדינות וסבלנות. אני ממליצה מאוד.״',
                  dateISO: '2024-09-10',
                  treatment: 'בוטוקס',
                  sourceUrl: 'https://www.medreviews.co.il/provider/dr-koren-tamar#reviews'
                },
                {
                  id: '4',
                  name: 'Wayne Shepherd',
                  city: 'Haifa',
                  rating: 5,
                  text: '"Very professional, knowledgeable and compassionate Health Care Provider. Very satisfied with the excellent service which I received. Would highly recommend this practice"',
                  dateISO: '2024-06-20',
                  sourceUrl: 'https://www.medreviews.co.il/provider/dr-koren-tamar#reviews',
                  isEnglish: true
                },
                {
                  id: '5',
                  name: 'מיכל',
                  city: 'קרית אתא',
                  rating: 5,
                  text: '״רופאה נהדרת! טבלנית מאוד עם ילדים, מסבירה בצורה ברורה את כל אפשרויות הטיפול ומאפשרת לבחור יחד את הדרך המתאימה. נעימה, עדינה ומקצועית ברמה גבוהה.״',
                  dateISO: '2025-08-26',
                  treatment: 'טיפול ביבלות ויראליות',
                  sourceUrl: 'https://www.medreviews.co.il/provider/dr-koren-tamar#reviews'
                },
                {
                  id: '6',
                  name: 'א.כ.ד.',
                  city: 'חיפה',
                  rating: 5,
                  text: '״תמר קיבלה אותנו לבדיקה של בני בין השבתיים ואצ. תמר היתה גישה ומקסימה, יצרה עמו קשר שגרם לו להרגיש בטוח ולשתף פעולה. הבדיקה היתה מקיפה, החבזרים היו ברורים ונתנו בנועם עם מענה לכל השאלות. אופן יצירת הקשר וקביעת התור היו נוחים והתורים זמינים.״',
                  dateISO: '2025-07-28',
                  treatment: 'טיפול באטופיק דרמטיטיס',
                  sourceUrl: 'https://www.medreviews.co.il/provider/dr-koren-tamar#reviews'
                }
              ].map(review => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <p className="text-sm text-center">
                לעוד ביקורות — <a href={SITE.socials.medreviews} target="_blank" rel="noopener noreferrer" className="no-underline hover:underline">MedReviews</a>
              </p>
            </div>
          </div>
        </section>

        <AppointmentSection />

        <PressCarousel />

        <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-white/95 backdrop-blur border-t" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
          <div className="container mx-auto px-4 py-3">
            <a href="#קביעת-תור" aria-label="לקביעת תור" className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#859a85] to-[#6b8e6b] text-white text-lg py-3 px-5 font-medium shadow-lg hover:shadow-xl ring-1 ring-black/5 transition">
              <span>לקביעת תור</span>
            </a>
          </div>
        </div>
      </main>

      <footer className="bg-[#859a85] text-white pt-6 pb-28 md:py-8 text-center font-normal overflow-hidden relative z-30">
        <div className="container mx-auto px-4">
            <div className="footer-content opacity-100 translate-y-0 transition-all duration-700 ease-out">
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
      <Script id="press-ld" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context":"https://schema.org",
          "@type":"ItemList",
          "name":"כתבות ופרסומים",
          "itemListElement": pressItems.map((it, i) => ({
            "@type":"ListItem",
            "position": i+1,
            "item": { 
              "@type":"NewsArticle", 
              "headline": it.title, 
              "mainEntityOfPage": it.href, 
              "publisher": it.source, 
              "datePublished": it.date 
            }
          }))
        }) }} 
      />
    </div>
  )
}

