import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { notFound } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { SITE } from '@/lib/config/site-config'
import { conditions } from '@/lib/data/conditions'
import { services } from '@/lib/data/services'
import { generateConditionStructuredData } from '@/lib/seo/structured-data'
import { Navigation } from '@/components/features/header/Navigation'
import { MobileMenu } from '@/components/features/header/MobileMenu'
import ServiceCTAButtons from '@/components/features/services/ServiceCTAButtons'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return conditions.map((condition) => ({
    slug: condition.slug,
  }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const condition = conditions.find((c) => c.slug === params.slug)

  if (!condition) {
    return {
      title: 'מצב רפואי לא נמצא | ד״ר תמר קורן',
    }
  }

  return {
    title: condition.metaTitle,
    description: condition.metaDescription,
    alternates: { canonical: `https://drkoren.skin/conditions/${condition.slug}` },
    openGraph: {
      title: condition.metaTitle,
      description: condition.metaDescription,
      url: `https://drkoren.skin/conditions/${condition.slug}`,
      locale: 'he_IL',
      images: ['/assets/images/og-doctor-photo-small.jpg'],
    },
    twitter: { card: 'summary', images: ['/assets/images/og-doctor-photo-small.jpg'] },
  }
}

export default function ConditionPage({ params }: PageProps) {
  const condition = conditions.find((c) => c.slug === params.slug)

  if (!condition) {
    notFound()
  }

  const parentService = services.find((s) => s.slug === condition.parentServiceSlug)
  const structuredDataArray = generateConditionStructuredData(condition)

  // Split overview into paragraphs
  const overviewParagraphs = condition.content.overview.split('\n\n').filter(Boolean)
  // Split treatment into paragraphs
  const treatmentParagraphs = condition.content.treatment.split('\n\n').filter(Boolean)

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
                  src="/assets/images/logo-tk.png"
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
          {/* Breadcrumb */}
          <nav aria-label="ניווט" className="text-sm text-gray-500 mb-6">
            <ol className="flex items-center gap-1 flex-wrap">
              <li>
                <Link href="/" className="hover:text-[var(--accent-strong)] transition-colors">
                  דף הבית
                </Link>
              </li>
              <li aria-hidden="true"> &gt; </li>
              <li>
                <Link href="/services" className="hover:text-[var(--accent-strong)] transition-colors">
                  שירותי המרפאה
                </Link>
              </li>
              {parentService && (
                <>
                  <li aria-hidden="true"> &gt; </li>
                  <li>
                    <Link
                      href={`/services/${condition.parentServiceSlug}`}
                      className="hover:text-[var(--accent-strong)] transition-colors"
                    >
                      {parentService.cardTitle || parentService.title}
                    </Link>
                  </li>
                </>
              )}
              <li aria-hidden="true"> &gt; </li>
              <li>
                <span aria-current="page" className="text-gray-700">
                  {condition.hebrewName}
                </span>
              </li>
            </ol>
          </nav>

          {/* Page title */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-semibold text-[#6b8e6b] mb-2">
              {condition.title}
            </h1>
            <p className="text-xl">{condition.shortDescription}</p>
          </div>

          <p className="text-sm text-gray-500 mb-8">
            תוכן רפואי מאת <span itemProp="author">{SITE.name}</span> | {SITE.specialty}
          </p>

          <div className="prose prose-lg max-w-none text-right">
            {/* Overview */}
            <section className="mb-12">
              <h2 className="text-3xl font-medium text-[#859a85] mb-6">
                מהי {condition.hebrewName}?
              </h2>
              {overviewParagraphs.map((paragraph, index) => (
                <p key={index} className="text-xl leading-relaxed mb-4">
                  {paragraph.trim()}
                </p>
              ))}
            </section>

            {/* Symptoms */}
            <section className="mb-12">
              <h2 className="text-3xl font-medium text-[#859a85] mb-6">תסמינים</h2>
              <ul className="text-lg space-y-3">
                {condition.content.symptoms.map((symptom, index) => (
                  <li key={index}>• {symptom}</li>
                ))}
              </ul>
            </section>

            {/* Diagnosis */}
            <section className="mb-12">
              <h2 className="text-3xl font-medium text-[#859a85] mb-6">אבחון</h2>
              <p className="text-xl leading-relaxed">{condition.content.diagnosis}</p>
            </section>

            {/* Treatment */}
            <section className="mb-12">
              <h2 className="text-3xl font-medium text-[#859a85] mb-6">אפשרויות טיפול</h2>
              {treatmentParagraphs.map((paragraph, index) => (
                <p key={index} className="text-xl leading-relaxed mb-4">
                  {paragraph.trim()}
                </p>
              ))}
            </section>

            {/* When to see a doctor */}
            <section className="mb-12">
              <h2 className="text-3xl font-medium text-[#859a85] mb-6">מתי לפנות לרופא/ת עור?</h2>
              <p className="text-xl leading-relaxed">{condition.content.whenToSeeDoctor}</p>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-3xl font-medium text-[#859a85] mb-6">שאלות נפוצות</h2>
              <div className="space-y-6">
                {condition.faq.map((faqItem, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-medium text-[#6b8e6b] mb-3">{faqItem.question}</h3>
                    <p className="text-lg faq-answer">{faqItem.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Related conditions */}
            {condition.relatedConditions && condition.relatedConditions.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-medium text-[#859a85] mb-6">מצבים קשורים</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {condition.relatedConditions.map((slug) => {
                    const related = conditions.find((c) => c.slug === slug)
                    if (!related) return null
                    return (
                      <Link
                        key={slug}
                        href={`/conditions/${slug}`}
                        prefetch={true}
                        className="block p-4 rounded-xl bg-[#f8faf8] hover:bg-[#e8f0e8] transition-colors"
                      >
                        <h3 className="text-lg font-medium text-[#6b8e6b] mb-1">{related.hebrewName}</h3>
                        <p className="text-sm text-gray-600">{related.shortDescription}</p>
                      </Link>
                    )
                  })}
                </div>
              </section>
            )}

            {/* Related services */}
            {condition.relatedServices && condition.relatedServices.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-medium text-[#859a85] mb-6">שירותים קשורים</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {condition.relatedServices.map((slug) => {
                    const related = services.find((s) => s.slug === slug)
                    if (!related) return null
                    return (
                      <Link
                        key={slug}
                        href={`/services/${slug}`}
                        prefetch={true}
                        className="block p-4 rounded-xl bg-[#f8faf8] hover:bg-[#e8f0e8] transition-colors"
                      >
                        <h3 className="text-lg font-medium text-[#6b8e6b] mb-1">{related.cardTitle || related.title}</h3>
                        <p className="text-sm text-gray-600">{related.cardDescription || related.description}</p>
                      </Link>
                    )
                  })}
                </div>
              </section>
            )}

            {/* CTA section */}
            <section className="bg-[#e8f0e8] bg-opacity-30 p-8 rounded-2xl mb-12">
              <h2 className="text-2xl font-medium text-[#859a85] mb-6 text-center">קבעו תור היום</h2>
              <p className="text-lg !text-center mb-8">
                לייעוץ מקצועי וטיפול ב{condition.hebrewName}
              </p>
              <ServiceCTAButtons />
            </section>

            {/* Back link */}
            <div className="text-center space-y-3">
              {parentService && (
                <Link
                  href={`/services/${condition.parentServiceSlug}`}
                  prefetch={true}
                  className="inline-flex items-center gap-2 text-[#859a85] hover:text-[#6b8e6b] transition-colors text-lg"
                >
                  <ArrowRight className="w-5 h-5" />
                  <span>חזרה ל{parentService.cardTitle || parentService.title}</span>
                </Link>
              )}
              <br />
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

      <footer className="bg-[#859a85] text-white pt-6 pb-28 md:py-8 text-center font-normal overflow-hidden relative z-30">
        <div className="container mx-auto px-4">
            <div className="footer-content opacity-100 translate-y-0 transition-all duration-700 ease-out">
            <div className="mb-2">
              <a
                href={SITE.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:opacity-80 transition-opacity duration-300 text-lg"
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
            <p className="flex flex-col md:flex-row items-center justify-center gap-2">
              <span>&copy; {new Date().getFullYear()} {SITE.name}. כל הזכויות שמורות.</span>
              <span className="flex items-center gap-2">
                <a href="/accessibility-declaration" className="text-white hover:opacity-80 transition-opacity duration-300">הצהרת נגישות</a>
                <span>|</span>
                <a href="/privacy-policy" className="text-white hover:opacity-80 transition-opacity duration-300">מדיניות פרטיות</a>
              </span>
            </p>
          </div>
        </div>
      </footer>

      {/* Condition-specific structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredDataArray),
        }}
      />

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
