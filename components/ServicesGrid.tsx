"use client"

import React from "react"
import { services, type ServiceItem } from "@/lib/services"
import { Stethoscope, Search, Video } from "lucide-react"
import { HairIcon } from "@/components/icons/HairIcon"
import { AcneIcon } from "@/components/icons/AcneIcon"
import { MolesIcon } from "@/components/icons/MolesIcon"
import { FingernailIcon } from "@/components/icons/FingernailIcon"
import { SparklesIcon } from "@/components/icons/SparklesIcon"
import { HyperhidrosisIcon } from "@/components/icons/HyperhidrosisIcon"
import Link from "next/link"

type IconComponent = React.ComponentType<{ className?: string }>

const iconMap: Record<ServiceItem["iconKey"], IconComponent> = {
  stethoscope: Stethoscope,
  hand: FingernailIcon,
  hair: HairIcon,
  search: MolesIcon,
  acne: AcneIcon,
  palette: SparklesIcon,
  hyperhidrosis: HyperhidrosisIcon,
  video: Video,
}

export default function ServicesGrid() {
  const [openKey, setOpenKey] = React.useState<string | null>(null)
  const openItem = services.find((s) => s.key === openKey) || null
  const modalRef = React.useRef<HTMLDivElement>(null)
  const closeBtnRef = React.useRef<HTMLButtonElement>(null)
  const lastDismissRef = React.useRef<number>(0)

  const close = React.useCallback(() => {
    lastDismissRef.current = Date.now()
    setOpenKey(null)
  }, [])

  // Handle ESC key, scroll-to-close and focus management for modal
  React.useEffect(() => {
    if (!openItem) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close()
      }
    }

    const handleScroll = () => {
      close()
    }

    document.addEventListener('keydown', handleEscape)
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Focus the close button when modal opens
    const timer = setTimeout(() => {
      closeBtnRef.current?.focus()
    }, 100)

    return () => {
      document.removeEventListener('keydown', handleEscape)
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [openItem, close])

  return (
    <div className="w-full">
      {/* Services Grid */}
      <div
        className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 ${openKey ? 'pointer-events-none select-none' : ''}`}
        aria-hidden={!!openItem}
      >
        {services.map((s) => {
          const Icon = iconMap[s.iconKey]
          const isOpen = openKey === s.key
          const iconSizeClass = s.iconKey === 'acne' ? 'w-16 h-16' : 'w-10 h-10'

          return (
            <button
              key={s.key}
              type="button"
              data-service-key={s.key}
              onClick={() => {
                if (Date.now() - lastDismissRef.current < 300) {
                  return
                }
                setOpenKey(s.key)
              }}
              className={`group bg-white rounded-xl shadow-md p-6 text-right h-full min-h-[180px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#859a85]
                transition-all duration-200 ease-out
                hover:shadow-lg hover:-translate-y-1
                hover:bg-gradient-to-br hover:from-white hover:to-[#f8faf8]
              `}
              aria-haspopup="dialog"
              aria-expanded={isOpen}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className={`w-16 h-16 rounded-full bg-[#A27B5C] flex items-center justify-center 
                  transition-all duration-300 ease-out
                  group-hover:rotate-3 group-hover:bg-[#859a85]
                  group-active:rotate-6
                `}>
                  <Icon className={`${iconSizeClass} shrink-0 text-white transition-transform duration-200 group-hover:scale-105`} />
                </div>
                <h3 className="text-xl font-medium text-[#859a85] line-clamp-2 min-h-[3.5rem] leading-snug transition-colors duration-300 group-hover:text-[#6b8e6b]">
                  {s.title}
                </h3>
              </div>
            </button>
          )
        })}
      </div>

      {openItem && (
        <div
          className="fixed inset-0 z-[100]"
          role="dialog"
          aria-modal="true"
          onPointerDown={(e) => {
            // Close when clicking anywhere outside the modal
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
              e.preventDefault()
              e.stopPropagation()
              close()
            }
          }}
        >
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
            onPointerDown={(e) => {
              e.preventDefault()
              e.stopPropagation()
              close()
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
            <div
              ref={modalRef}
              className="pointer-events-auto w-full max-w-3xl bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-right animate-modal-in"
              role="document"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-[#A27B5C] flex items-center justify-center animate-tilt">
                    {React.createElement(iconMap[openItem.iconKey], { className: `${openItem.iconKey === 'acne' ? 'w-16 h-16' : 'w-10 h-10'} shrink-0 text-white` })}
                  </div>
                  <h3 className="text-2xl font-medium text-[#859a85]">{openItem.title}</h3>
                </div>
                <button ref={closeBtnRef} onClick={close} className="text-gray-800 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#859a85] rounded" aria-label="סגור">✕</button>
              </div>
              <p className="leading-relaxed">{openItem.description}</p>
              <ul className="mt-3 list-disc pr-5 space-y-1">
                {openItem.longDescription
                  .split('.')
                  .map((s) => s.trim())
                  .filter(Boolean)
                  .slice(0, 4)
                  .map((line, idx) => (
                    <li key={idx}>{line}.</li>
                  ))}
              </ul>
              <div className="mt-6 flex justify-start">
                <Link href={`/services/${openItem.slug}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#859a85] text-white hover:bg-[#6b8e6b] transition-colors px-4 py-2 text-sm">
                  לקריאה נוספת על השירות
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}