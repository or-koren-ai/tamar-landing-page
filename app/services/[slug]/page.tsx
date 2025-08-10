import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { services } from '@/lib/services'
import { SITE } from '@/lib/site-config'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) return {}

  const title = `${service.title} | ${SITE.name}`
  const description = service.description

  return {
    title,
    description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE.baseUrl}/services/${service.slug}`,
      images: ['/doctor-photo.jpg'],
      locale: 'he_IL',
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default function ServicePage({ params }: PageProps) {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) return notFound()

  return (
    <main className="min-h-screen bg-white text-gray-800" dir="rtl">
      <section className="py-10 md:py-16 bg-[#e8f0e8] bg-opacity-30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <nav className="text-sm text-right" aria-label="breadcrumbs">
              <ol className="inline-flex gap-1">
                <li>
                  <Link href="/" className="text-[#859a85] hover:underline">דף הבית</Link>
                </li>
                <li className="text-gray-400">/</li>
                <li>
                  <Link href="/services" className="text-[#859a85] hover:underline">שירותי המרפאה</Link>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-700">{service.title}</li>
              </ol>
            </nav>
            <Link href="/#שירותי-המרפאה" className="inline-flex items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors px-3 py-1.5 text-xs md:text-sm" aria-label="חזרה לשירותים">
              חזרה
            </Link>
          </div>

          <h1 className="text-3xl md:text-5xl font-thin mb-3 text-[#6b8e6b] text-right">
            {service.title}
          </h1>
          <p className="text-base md:text-lg text-gray-900 text-right max-w-3xl ml-auto">
            {service.description}
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4">
          <div className="prose prose-lg max-w-3xl ml-auto text-right prose-headings:text-[#6b8e6b] prose-p:leading-8">
            {service.longDescription.split('\n').map((para, idx) => (
              <p key={idx} className="text-gray-700">{para}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-end">
            <a
              href={SITE.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366] text-[#25D366] bg-white hover:bg-[#25D366] hover:text-white transition-colors px-5 py-2.5 text-sm"
              aria-label={`יצירת קשר בוואטסאפ לקביעת תור ${SITE.whatsapp.display}`}
            >
              קבע/י תור בוואטסאפ
            </a>
            <a
              href={SITE.clinicPhone.link}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#A27B5C] text-white hover:bg-[#859a85] transition-colors px-5 py-2.5 text-sm"
              aria-label={`חיוג למרפאה לקביעת תור ${SITE.clinicPhone.display}`}
            >
              התקשר/י למרפאה
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 