'use client'

import React, { useEffect, useState } from 'react'

export function StickyAppointmentButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) {
      setIsVisible(true)
      return
    }

    // Show button when hero exits viewport
    const hero = document.querySelector('.animate-hero-fade-in')
    if (!hero) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting)
      },
      { threshold: 0 }
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('קביעת-תור');
    const headerOffset = 100;
    const elementPosition = element?.getBoundingClientRect().top ?? 0;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  };

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-50 md:hidden bg-white/95 backdrop-blur border-t transition-all duration-300 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="container mx-auto px-4 py-3">
        <button
          onClick={handleClick}
          className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#859a85] to-[#6b8e6b] text-white text-lg py-3 px-5 font-medium shadow-lg hover:shadow-xl ring-1 ring-black/5 active:scale-[0.98] transition"
        >
          <span>לקביעת תור</span>
        </button>
      </div>
    </div>
  );
}
