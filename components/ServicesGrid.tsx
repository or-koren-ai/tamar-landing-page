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
  const [visibleTiles, setVisibleTiles] = React.useState<Set<string>>(new Set())
  const gridRef = React.useRef<HTMLDivElement>(null)
  const openItem = services.find((s) => s.key === openKey) || null
  const modalRef = React.useRef<HTMLDivElement>(null)
  const closeBtnRef = React.useRef<HTMLButtonElement>(null)

  const close = React.useCallback(() => {
    setOpenKey(null)
  }, [])

  // Intersection Observer for staggered animations
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const serviceKey = (entry.target as HTMLElement).dataset.serviceKey
          if (serviceKey && entry.isIntersecting) {
            setVisibleTiles(prev => new Set([...prev, serviceKey]))
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    const tiles = gridRef.current?.querySelectorAll('[data-service-key]')
    tiles?.forEach(tile => observer.observe(tile))

    return () => observer.disconnect()
  }, [])

  // Handle ESC key and focus management for modal
  React.useEffect(() => {
    if (!openItem) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close()
      }
    }

    document.addEventListener('keydown', handleEscape)
    
    // Focus the close button when modal opens
    const timer = setTimeout(() => {
      closeBtnRef.current?.focus()
    }, 100)

    // Prevent body scroll
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      clearTimeout(timer)
      document.body.style.overflow = ''
    }
  }, [openItem, close])

  return (
    <div className="w-full">
      {/* Services Grid */}
      <div
        ref={gridRef}
        className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 ${openKey ? 'pointer-events-none select-none' : ''}`}
        aria-hidden={!!openItem}
      >
        {services.map((s, index) => {
          const Icon = iconMap[s.iconKey]
          const isOpen = openKey === s.key
          const isVisible = visibleTiles.has(s.key)
          const iconSizeClass = s.iconKey === 'acne' ? 'w-16 h-16' : 'w-10 h-10'
          
          return (
            <button
              key={s.key}
              type="button"
              data-service-key={s.key}
              onClick={() => setOpenKey(s.key)}
              className={`group bg-white rounded-xl shadow-md p-6 text-right h-full min-h-[180px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#859a85]
                transition-all duration-700 ease-out transform-gpu
                ${isVisible 
                  ? 'opacity-100 translate-y-0 scale-100 shadow-lg' 
                  : 'opacity-0 translate-y-8 scale-95 shadow-sm'
                }
                hover:shadow-xl hover:-translate-y-2 hover:scale-105
                hover:bg-gradient-to-br hover:from-white hover:to-[#f8faf8]
                active:scale-100 active:translate-y-0
              `}
              style={{
                transitionDelay: isVisible ? `${index * 50}ms` : '0ms'
              }}
              aria-haspopup="dialog"
              aria-expanded={isOpen}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className={`w-16 h-16 rounded-full bg-[#A27B5C] flex items-center justify-center 
                  transition-all duration-500 ease-out transform-gpu
                  group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#859a85]
                  group-active:rotate-12 group-active:scale-110
                  ${isVisible ? 'animate-pulse-once' : ''}
                `}>
                  <Icon className={`${iconSizeClass} shrink-0 text-white transition-all duration-300 group-hover:scale-110`} />
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
        <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
            onClick={(e) => {
              e.stopPropagation()
              close()
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div ref={modalRef} className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-right animate-modal-in" role="document">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-[#A27B5C] flex items-center justify-center animate-tilt">
                    {React.createElement(iconMap[openItem.iconKey], { className: `${openItem.iconKey === 'acne' ? 'w-16 h-16' : 'w-10 h-10'} shrink-0 text-white` })}
                  </div>
                  <h3 className="text-2xl font-medium text-[#859a85]">{openItem.title}</h3>
                </div>
                <button ref={closeBtnRef} onClick={close} className="text-gray-500 hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#859a85] rounded" aria-label="סגור">✕</button>
              </div>
              <p className="text-gray-700 leading-relaxed">{openItem.description}</p>
              <ul className="mt-3 list-disc pr-5 space-y-1 text-gray-700">
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