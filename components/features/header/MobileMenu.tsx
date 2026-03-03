'use client'

import { useState } from 'react'
import { SITE } from "@/lib/config/site-config"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"
import { servicesWithConditions } from "@/lib/data/conditions-by-service"

export function MobileMenu() {
  const pathname = usePathname()
  const [servicesOpen, setServicesOpen] = useState(false)
  const [expandedServices, setExpandedServices] = useState<Record<string, boolean>>({})
  const getHref = (anchor: string) => (pathname !== '/' ? `/#${anchor}` : `#${anchor}`)

  const toggleServiceConditions = (slug: string) => {
    setExpandedServices((prev) => ({ ...prev, [slug]: !prev[slug] }))
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300/70 bg-white/80 backdrop-blur shadow-sm ring-1 ring-black/5 hover:bg-white transition"
          aria-label="פתח תפריט"
        >
          <span className="sr-only">תפריט</span>
          <span className="flex flex-col items-center justify-center gap-1.5">
            <span className="block h-[2px] w-5 rounded-full bg-[#6b8e6b]" />
            <span className="block h-[2px] w-4 rounded-full bg-[#6b8e6b]" />
            <span className="block h-[2px] w-6 rounded-full bg-[#6b8e6b]" />
          </span>
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        dir="rtl"
        className={cn(
          "sheet-compact w-[280px] sm:w-[320px] p-0 bg-white/90 backdrop-blur",
          "border border-gray-200 shadow-xl overflow-y-auto"
        )}
      >
        <div className="px-4 py-3 border-b text-right">
          <div className="text-[#6b8e6b] text-lg">{SITE.name}</div>
        </div>

        <nav aria-label="ניווט ראשי" className="mt-1">
          <ul className="flex flex-col items-end text-right">
            <li className="w-full">
              <SheetClose asChild>
                <a
                  href={getHref("אודות")}
                  className="block w-full px-4 py-2.5 text-base text-[#6f806f] hover:bg-[#f6f8f6] transition-colors"
                >
                  אודות
                </a>
              </SheetClose>
            </li>

            <li className="w-full">
              <div className="mx-3 border-t border-gray-100" />
              <div className="flex items-center">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="px-2 py-2.5 text-[#6f806f] hover:text-[#859a85] transition-colors"
                  aria-expanded={servicesOpen}
                  aria-label="הצג/הסתר שירותים"
                >
                  <span className={cn(
                    "inline-block transition-transform duration-300 text-xs",
                    servicesOpen ? "rotate-90" : "rotate-0"
                  )}>◄</span>
                </button>
                <SheetClose asChild>
                  <a
                    href={getHref("שירותי-המרפאה")}
                    className="flex-1 pe-4 py-2.5 text-base text-[#6f806f] hover:bg-[#f6f8f6] transition-colors text-right"
                  >
                    שירותי המרפאה
                  </a>
                </SheetClose>
              </div>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  servicesOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <ul className="bg-[#f9faf9]">
                  {servicesWithConditions.map((service, idx) => (
                    <li key={service.slug}>
                      {idx !== 0 && <div className="mx-6 border-t border-gray-100" />}

                      {service.conditions.length > 0 ? (
                        <>
                          <div className="flex items-center">
                            <button
                              onClick={() => toggleServiceConditions(service.slug)}
                              className="px-2 py-2 text-[#7a8a7a] hover:text-[#859a85] transition-colors"
                              aria-expanded={!!expandedServices[service.slug]}
                              aria-label={`הצג/הסתר מצבים תחת ${service.cardTitle}`}
                            >
                              <span className={cn(
                                "inline-block transition-transform duration-300 text-[10px]",
                                expandedServices[service.slug] ? "rotate-90" : "rotate-0"
                              )}>◄</span>
                            </button>
                            <SheetClose asChild>
                              <a
                                href={`/services/${service.slug}`}
                                className="flex-1 pe-6 py-2 text-sm text-[#7a8a7a] hover:bg-[#f3f6f3] transition-colors text-right"
                              >
                                {service.cardTitle}
                              </a>
                            </SheetClose>
                          </div>

                          <div
                            className={cn(
                              "overflow-hidden transition-all duration-300 ease-in-out",
                              expandedServices[service.slug] ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                            )}
                          >
                            <ul className="bg-[#f5f7f5]">
                              {service.conditions.map((condition, cIdx) => (
                                <li key={condition.slug}>
                                  {cIdx !== 0 && <div className="mx-8 border-t border-gray-100/80" />}
                                  <SheetClose asChild>
                                    <a
                                      href={`/conditions/${condition.slug}`}
                                      className="block w-full pe-10 ps-4 py-1.5 text-xs text-[#8a968a] hover:bg-[#eef2ee] transition-colors text-right"
                                    >
                                      {condition.hebrewName}
                                    </a>
                                  </SheetClose>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </>
                      ) : (
                        <SheetClose asChild>
                          <a
                            href={`/services/${service.slug}`}
                            className="block w-full pe-8 ps-4 py-2 text-sm text-[#7a8a7a] hover:bg-[#f3f6f3] transition-colors text-right"
                          >
                            {service.cardTitle}
                          </a>
                        </SheetClose>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li className="w-full">
              <div className="mx-3 border-t border-gray-100" />
              <SheetClose asChild>
                <a
                  href={getHref("ביקורות")}
                  className="block w-full px-4 py-2.5 text-base text-[#6f806f] hover:bg-[#f6f8f6] transition-colors"
                >
                  ביקורות
                </a>
              </SheetClose>
            </li>

            <li className="w-full">
              <div className="mx-3 border-t border-gray-100" />
              <SheetClose asChild>
                <a
                  href={getHref("כתבות-ופרסומים")}
                  className="block w-full px-4 py-2.5 text-base text-[#6f806f] hover:bg-[#f6f8f6] transition-colors"
                >
                  כתבות ופרסומים
                </a>
              </SheetClose>
            </li>

            <li className="w-full">
              <div className="mx-3 border-t border-gray-100" />
              <SheetClose asChild>
                <a
                  href={getHref("קביעת-תור")}
                  className="block w-full px-4 py-2.5 text-base text-[#6f806f] hover:bg-[#f6f8f6] transition-colors"
                >
                  קביעת תור
                </a>
              </SheetClose>
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
