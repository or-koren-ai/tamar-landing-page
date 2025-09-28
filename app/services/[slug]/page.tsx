import type { Metadata } from 'next'
[?import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { notFound } from 'next/navigation'
import { MessageCircle, Phone, ArrowRight } from 'lucide-react'
import { SITE } from '@/lib/site-config'
import { services } from '@/lib/services'
import { Navigation } from '@/components/Navigation'
import { MobileMenu } from '@/components/MobileMenu'

// Import all service icons
import { Stethoscope, Video } from 'lucide-react'
import { HairIcon } from '@/components/icons/HairIcon'
import { AcneIcon } from '@/components/icons/AcneIcon'
import { MolesIcon } from '@/components/icons/MolesIcon'
import { FingernailIcon } from '@/components/icons/FingernailIcon'
import { SparklesIcon } from '@/components/icons/SparklesIcon'
import { HyperhidrosisIcon } from '@/components/icons/HyperhidrosisIcon'

const iconMap = {
  stethoscope: Stethoscope,
  hand: FingernailIcon,
  hair: HairIcon,
  search: MolesIcon,
  acne: AcneIcon,
  palette: SparklesIcon,
  hyperhidrosis: HyperhidrosisIcon,
  video: Video,
}

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    return {
      title: 'שירות לא נמצא | ד״ר תמר קורן',
    }
  }

  return {
    title: `${service.title} | ד״ר תמר קורן`,
    description: service.description,
    alternates: { canonical: `https://drkoren.skin/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | ד״ר תמר קורן`,
      description: service.description,
      url: `https://drkoren.skin/services/${service.slug}`,
      locale: 'he_IL',
      images: ['/herb.png'],
    },
    twitter: { card: 'summary_large_image', images: ['/herb.png'] },
  }
}

export default function ServicePage({ params }: PageProps) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  const IconComponent = iconMap[service.iconKey]
  const iconSizeClass = service.iconKey === 'acne' ? 'w-16 h-16' : 'w-10 h-10'

  // Split long description into paragraphs and process
  const paragraphs = service.longDescription.split('\\n').filter(Boolean)

  return (
    <div className="min-h-screen bg-white text-gray-800" dir="rtl">
      <header className="py-3 bg-white shadow-md sticky top-0 z-50 animate-header-slide">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Navigation />
              <MobileMenu />
            </div>
            <div className="flex-shrink-0">
              <Link href="/" prefetch={true}>
                <Image
                  src="/logo-tk.png"
                  alt={SITE.name}
                  width={200}
                  height={50}
                  className="h-auto w-auto max-w-[200px]"
                  priority
                  fetchPriority="high"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-[#A27B5C] flex items-center justify-center">
              <IconComponent className={`${iconSizeClass} text-white`} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold text-[#6b8e6b] mb-2">
                {service.title}
              </h1>
              <p className="text-xl">{service.description}</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-right">
            {/* Enhanced structured sections for services like hyperhidrosis */}
            {service.sections ? (
              <>
                {service.sections.map((section, index) => (
                  <section key={index} className="mb-12">
                    <h2 className="text-2xl font-medium text-[#859a85] mb-6">{section.title}</h2>
                    <p className="text-xl leading-relaxed mb-6">
                      {section.content}
                    </p>
                    {section.bullets && (
                      <ul className="text-lg space-y-3">
                        {section.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex}>• {bullet}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}

                {service.effectiveness && (
                  <section className="mb-12">
                    <h3 className="text-xl font-medium text-[#6b8e6b] mb-4">{service.effectiveness.title}</h3>
                    <ul className="text-lg space-y-3 mb-6">
                      {service.effectiveness.items.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {service.treatmentAreas && (
                  <section className="mb-12">
                    <h3 className="text-xl font-medium text-[#6b8e6b] mb-4">{service.treatmentAreas.title}</h3>
                    <ul className="text-lg space-y-3">
                      {service.treatmentAreas.items.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {service.treatmentProcess && (
                  <section className="mb-12">
                    <h2 className="text-2xl font-medium text-[#859a85] mb-6">{service.treatmentProcess.title}</h2>
                    <div className="space-y-6">
                      {service.treatmentProcess.steps.map((step, index) => (
                        <div key={index} className="bg-[#f8faf8] p-6 rounded-lg">
                          <h3 className="text-lg font-medium text-[#6b8e6b] mb-3">
                            {step.number}. {step.title}
                          </h3>
                          <p>{step.description}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </>
            ) : (
              /* Fallback for services without structured content */
              paragraphs.map((paragraph, index) => (
                <section key={index} className="mb-8">
                  <p className="text-xl leading-relaxed">
                    {paragraph.trim()}
                  </p>
                </section>
              ))
            )}

            {/* FAQ section - shows for any service that has it, regardless of structured content */}
            {service.faq && (
              <section className="mb-12">
                <h2 className="text-2xl font-medium text-[#859a85] mb-6">{service.faq.title}</h2>
                <div className="space-y-6">
                  {service.faq.items.map((faqItem, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-medium text-[#6b8e6b] mb-3">{faqItem.question}</h3>
                      <p>{faqItem.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className="bg-[#e8f0e8] bg-opacity-30 p-8 rounded-2xl mb-12">
              <h2 className="text-2xl font-medium text-[#859a85] mb-6 text-center">קבעו תור היום</h2>
              <p className="text-lg text-center mb-8">
                לייעוץ מקצועי ו{service.title.includes('טיפול') ? service.title : `טיפול ב${service.title}`}
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <a
                  href={SITE.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366] text-[#25D366] bg-white hover:bg-[#25D366] hover:text-white transition-colors px-6 py-3 text-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>קביעת תור בוואטסאפ</span>
                </a>

                <a
                  href={SITE.clinicPhone.link}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#A27B5C] text-white hover:bg-[#859a85] transition-colors px-6 py-3 text-lg"
                >
                  <Phone className="w-5 h-5" />
                  <span>התקשרות למרפאה</span>
                </a>
              </div>
            </section>

            <div className="text-center">
              <Link
                href="/"
                prefetch={true}
                className="inline-flex items-center gap-2 text-[#859a85] hover:text-[#6b8e6b] transition-colors text-lg"
              >
                <ArrowRight className="w-5 h-5" />
                <span>חזרה לעמוד הראשי</span>
              </Link>
            </div>
          </div>
        </div>
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
    </div>
  )
} 