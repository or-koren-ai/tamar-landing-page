'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { servicesWithConditions } from '@/lib/data/conditions-by-service'

export function Navigation() {
  const pathname = usePathname()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const navItems = ["אודות", "שירותי המרפאה", "ביקורות", "כתבות ופרסומים", "קביעת תור"]

  const getHref = (item: string) => {
    const anchor = item.replace(" ", "-")
    if (pathname !== '/') return `/#${anchor}`
    return `#${anchor}`
  }

  const openDropdown = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    setDropdownOpen(true)
  }

  const scheduleClose = () => {
    closeTimerRef.current = setTimeout(() => setDropdownOpen(false), 150)
  }

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && dropdownOpen) {
      setDropdownOpen(false)
    }
  }, [dropdownOpen])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  // Close dropdown on outside click
  useEffect(() => {
    if (!dropdownOpen) return
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [dropdownOpen])

  return (
    <nav className="hidden md:block">
      <ul className="flex justify-between items-center gap-6">
        {navItems.map((item, index) => {
          if (item === "קביעת תור") {
            return (
              <li key={index}>
                <a
                  href={getHref(item)}
                  className="bg-[var(--accent-strong)] text-white rounded-full px-4 py-1.5 text-sm hover:opacity-90 transition-opacity"
                >
                  {item}
                </a>
              </li>
            )
          }

          if (item === "שירותי המרפאה") {
            return (
              <li
                key={index}
                ref={dropdownRef}
                className="relative"
                onMouseEnter={openDropdown}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="nav-link inline-flex items-center gap-1"
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                >
                  {item}
                  <span className={cn(
                    "inline-block text-[10px] transition-transform duration-200",
                    dropdownOpen ? "rotate-180" : "rotate-0"
                  )}>▼</span>
                </button>

                <div
                  className={cn(
                    "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[280px] bg-white rounded-xl shadow-lg border border-gray-100 z-50",
                    "transition-all duration-200 ease-out origin-top",
                    dropdownOpen
                      ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
                  )}
                >
                  <div className="py-2 px-3 flex flex-col" dir="rtl">
                    {servicesWithConditions.map((service, idx) => (
                      <div key={service.slug}>
                        {idx !== 0 && <div className="mx-1 border-t border-gray-100" />}
                        <a
                          href={`/services/${service.slug}`}
                          className="block text-sm font-semibold text-[#5e7f69] hover:text-[#4a6b55] hover:bg-[#f6f8f6] rounded px-2 py-1.5 transition-colors"
                        >
                          {service.cardTitle}
                        </a>
                        {service.conditions.length > 0 && (
                          <ul className="mb-1">
                            {service.conditions.map((condition) => (
                              <li key={condition.slug}>
                                <a
                                  href={`/conditions/${condition.slug}`}
                                  className="block text-sm text-[#7a8a7a] hover:text-[#5e7f69] hover:bg-[#f6f8f6] rounded px-4 py-1 transition-colors"
                                >
                                  {condition.hebrewName}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-100 px-4 py-2">
                    <a
                      href={getHref("שירותי-המרפאה")}
                      className="block text-center text-sm text-[#5e7f69] hover:text-[#4a6b55] font-medium transition-colors"
                    >
                      כל שירותי המרפאה ←
                    </a>
                  </div>
                </div>
              </li>
            )
          }

          return (
            <li key={index}>
              <a href={getHref(item)} className="nav-link">
                {item}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
