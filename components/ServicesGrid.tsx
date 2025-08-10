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

  const squelchClicksRef = React.useRef(false)
  const close = () => {
    // Squelch any in-flight click after closing so background handlers don't trigger
    squelchClicksRef.current = true
    window.setTimeout(() => {
      squelchClicksRef.current = false
    }, 400)
    setOpenKey(null)
  }

  const canCloseOnScrollRef = React.useRef(false)
  const timerRef = React.useRef<number | null>(null)
  const closeBtnRef = React.useRef<HTMLButtonElement | null>(null)
  const modalRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    const onScrollLike = () => {
      if (canCloseOnScrollRef.current) close()
    }
    const onGlobalPointerDown = (e: Event) => {
      // Close when clicking anywhere outside the modal content
      const root = modalRef.current
      if (!root) return
      if (!root.contains(e.target as Node)) {
        try {
          ;(e as unknown as PointerEvent).preventDefault()
          ;(e as unknown as PointerEvent).stopPropagation()
        } catch {}
        close()
      }
    }

    if (openKey) {
      canCloseOnScrollRef.current = false
      // Enable scroll-close shortly after open to avoid instant close from minor layout shifts
      timerRef.current = window.setTimeout(() => {
        canCloseOnScrollRef.current = true
      }, 350)

      document.addEventListener("keydown", onKey)
      window.addEventListener("scroll", onScrollLike, { passive: true })
      window.addEventListener("wheel", onScrollLike, { passive: true })
      window.addEventListener("touchmove", onScrollLike, { passive: true })
      // Capture phase so we close before other handlers if needed
      document.addEventListener("pointerdown", onGlobalPointerDown, true)
    }

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current)
      document.removeEventListener("keydown", onKey)
      window.removeEventListener("scroll", onScrollLike)
      window.removeEventListener("wheel", onScrollLike)
      window.removeEventListener("touchmove", onScrollLike)
      document.removeEventListener("pointerdown", onGlobalPointerDown, true)
      canCloseOnScrollRef.current = false
    }
  }, [openKey])

  // Global click capture to absorb any stray click immediately after closing
  React.useEffect(() => {
    const onClickCapture = (e: Event) => {
      if (squelchClicksRef.current) {
        try {
          ;(e as MouseEvent).preventDefault()
          ;(e as MouseEvent).stopPropagation()
        } catch {}
      }
    }
    document.addEventListener('click', onClickCapture, true)
    return () => document.removeEventListener('click', onClickCapture, true)
  }, [])

  // Lock body scroll and move focus to the modal close button when opened
  React.useEffect(() => {
    if (!openKey) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    // slight delay to ensure the button is mounted
    const id = window.setTimeout(() => {
      closeBtnRef.current?.focus()
    }, 0)
    return () => {
      document.body.style.overflow = previousOverflow
      window.clearTimeout(id)
    }
  }, [openKey])

  return (
    <div className="relative">
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
              onClick={() => setOpenKey(s.key)}
              className="group bg-white rounded-xl shadow-md p-6 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#859a85] text-right h-full min-h-[180px]"
              aria-haspopup="dialog"
              aria-expanded={isOpen}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#A27B5C] flex items-center justify-center transition-transform duration-300 group-active:rotate-12 group-active:scale-110">
                  <Icon className={`${iconSizeClass} shrink-0 text-white`} />
                </div>
                <h3 className="text-xl font-medium text-[#859a85] line-clamp-2 min-h-[3.5rem] leading-snug">{s.title}</h3>
              </div>
            </button>
          )
        })}
      </div>

      {openItem && (
        <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 bg-black/35 backdrop-blur-sm"
            onClick={(e) => {
              e.preventDefault()
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