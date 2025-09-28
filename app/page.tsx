import Image from "next/image"
import { Navigation } from "@/components/Navigation"
import { AboutSectionServer } from "@/components/AboutSectionServer"
import ServicesGrid from "@/components/ServicesGrid"
import { LazyPressCarousel, LazyContentSummary } from "@/components/LazyComponents"
import AppointmentSection from "@/components/AppointmentSection"
import { ReviewsSection } from "@/components/ReviewsSection"
import { MobileMenu } from "@/components/MobileMenu"
import { StickyAppointmentButton } from "@/components/StickyAppointmentButton"
import { SITE } from "@/lib/site-config"
import { pressItems } from "@/lib/press"
import { businessStructuredData, faqStructuredData } from "@/lib/structured-data"
import Script from 'next/script'



export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-white text-gray-800" dir="rtl">
      <header className="py-3 bg-white shadow-md sticky top-0 z-50 animate-header-slide">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Navigation />
              <MobileMenu />
            </div>
            <div className="flex-shrink-0">
              <a href="#top">
                <Image
                  src="/logo-tk.png"
                  alt={SITE.name}
                  width={200}
                  height={50}
                  className="h-auto w-auto max-w-[200px]"
                  fetchPriority="high"
                />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="pb-28 md:pb-0">
        {/* Hidden content summary for LLMs and AI agents - lazy loaded */}
        <LazyContentSummary />
        
        {/* Decorative background wrapper for hero + about */}
        <div className="relative overflow-hidden">
          {/* Decorative leaf (left), above section backgrounds but non-interactive */}
          <div className="pointer-events-none absolute inset-y-0 -top-44 left-10 z-0 hidden sm:block w-[65vw] max-w-[560px] opacity-15">
            <Image
              src="/herb.svg"
              alt=""
              width={560}
              height={400}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>  

          <section className="py-8 md:py-12 text-center bg-[#e8f0e8] bg-opacity-30 animate-hero-fade-in relative z-10">
            <div className="mx-auto max-w-4xl text-center px-4">
              <h1 className="hero-title animate-hero-title">
                ד״ר תמר קורן
                <span className="hero-accent">מומחית לרפואת עור ומין · חיפה</span>
              </h1>
              <p className="text-base md:text-lg hero-sub animate-hero-subtitle">
                טיפול אישי ומקצועי לילדים ולמבוגרים
              </p>
            </div>
          </section>

          <div className="relative z-10">
            <AboutSectionServer />
          </div>
        </div>

        <section id="שירותי-המרפאה" className="py-12 md:py-16 bg-[#dce7dc] bg-opacity-60 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-light mb-10 md:mb-12 text-center text-[#859a85]">שירותי המרפאה</h2>
            <ServicesGrid />
          </div>
        </section>

        <ReviewsSection />

        <AppointmentSection />

        <LazyPressCarousel />

        <StickyAppointmentButton />
      </main>

      <footer className="bg-[#859a85] text-gray-900 pt-6 pb-28 md:py-8 text-center font-normal overflow-hidden relative z-30">
        <div className="container mx-auto px-4">
            <div className="footer-content opacity-100 translate-y-0 transition-all duration-700 ease-out">
            <div className="mb-2">
              <a
                href={SITE.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-900 hover:opacity-80 transition-opacity duration-300 text-lg"
                aria-label="עקבו אחרינו באינסטגרם"
              >
                <span>Instagram</span>
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#833ab4" />
                      <stop offset="50%" stopColor="#fd1d1d" />
                      <stop offset="100%" stopColor="#fcb045" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#instagram-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
            <p>&copy; {new Date().getFullYear()} {SITE.name}. כל הזכויות שמורות. | <a href="/accessibility-declaration" className="text-gray-900 hover:text-gray-700 transition-colors duration-300">הצהרת נגישות</a></p>
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
      {/* Enhanced Business Structured Data for LLMs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessStructuredData),
        }}
      />
      
      {/* FAQ Structured Data for better LLM understanding */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
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

