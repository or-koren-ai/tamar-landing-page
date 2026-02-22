'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import DoctorPhoto from '@/public/assets/images/doctor-photo.webp'
import ClinicInside from '@/public/assets/images/clinic_inside.webp'
import ClinicOutside from '@/public/assets/images/clinic_outside.webp'

const slides = [
  { src: DoctorPhoto, alt: 'ד״ר תמר קורן - רופאת עור בחיפה' },
  { src: ClinicInside, alt: 'פנים המרפאה של ד״ר תמר קורן' },
  { src: ClinicOutside, alt: 'חזית המרפאה של ד״ר תמר קורן בחיפה' },
] as const

const INTERVAL_MS = 5000
const SWIPE_THRESHOLD = 40
const THUMBNAIL_ORDER = [1, 0, 2] // inside, doctor, outside — doctor centered

export function AboutPhotoSlideshow() {
  const [active, setActive] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const reducedMotionRef = useRef(false)
  const touchStartX = useRef(0)

  const startAutoRotate = useCallback(() => {
    if (reducedMotionRef.current) return
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, INTERVAL_MS)
  }, [])

  const goTo = useCallback(
    (index: number) => {
      setActive(index)
      startAutoRotate()
    },
    [startAutoRotate]
  )

  const goNext = useCallback(() => {
    setActive((prev) => (prev + 1) % slides.length)
    startAutoRotate()
  }, [startAutoRotate])

  const goPrev = useCallback(() => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length)
    startAutoRotate()
  }, [startAutoRotate])

  // Touch swipe handlers (RTL: swipe left = next, swipe right = prev)
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }, [])

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const deltaX = e.changedTouches[0].clientX - touchStartX.current
      if (Math.abs(deltaX) < SWIPE_THRESHOLD) return
      // RTL layout: swiping left (negative delta) = next
      if (deltaX < 0) goNext()
      else goPrev()
    },
    [goNext, goPrev]
  )

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    startAutoRotate()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [startAutoRotate])

  return (
    <div
      role="region"
      aria-roledescription="גלריית תמונות"
      aria-label="תמונות המרפאה והרופאה"
      className="w-full max-w-[290px] md:max-w-[380px]"
    >
      {/* Main image area — crossfade, swipeable on mobile */}
      <div
        className="relative overflow-hidden rounded-3xl shadow-lg touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Slide 0: doctor photo — in-flow, sets height, LCP */}
        <Image
          src={slides[0].src}
          alt={slides[0].alt}
          width={800}
          height={1200}
          placeholder="blur"
          quality={80}
          sizes="(min-width: 768px) 380px, 290px"
          className={`photo-crossfade w-full block transition-opacity duration-700 ease-in-out ${
            active === 0 ? 'opacity-100' : 'opacity-0'
          }`}
          priority
          fetchPriority="high"
          aria-hidden={active !== 0}
        />

        {/* Slides 1-2: clinic photos — absolute, lazy */}
        {slides.slice(1).map((slide, i) => {
          const index = i + 1
          return (
            <Image
              key={index}
              src={slide.src}
              alt={slide.alt}
              width={800}
              height={1200}
              placeholder="blur"
              quality={75}
              sizes="(min-width: 768px) 380px, 290px"
              loading="lazy"
              className={`photo-crossfade absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                active === index ? 'opacity-100' : 'opacity-0'
              }`}
              aria-hidden={active !== index}
            />
          )
        })}
      </div>

      {/* Thumbnail row */}
      <div
        className="flex justify-center gap-2.5 mt-3"
        role="tablist"
        aria-label="בחירת תמונה"
      >
        {THUMBNAIL_ORDER.map((slideIndex) => (
          <button
            key={slideIndex}
            role="tab"
            aria-selected={active === slideIndex}
            aria-label={slides[slideIndex].alt}
            onClick={() => goTo(slideIndex)}
            className={`relative w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden transition-all duration-300 ease-in-out
              ${
                active === slideIndex
                  ? 'ring-2 ring-[var(--accent-strong)] ring-offset-2 scale-105 shadow-md'
                  : 'opacity-50 hover:opacity-80 grayscale-[30%] hover:grayscale-0'
              }`}
          >
            <Image
              src={slides[slideIndex].src}
              alt=""
              fill
              sizes="64px"
              loading="lazy"
              className="object-cover pointer-events-none"
            />
          </button>
        ))}
      </div>

      {/* Noscript fallback */}
      <noscript>
        <img
          src="/assets/images/doctor-photo.webp"
          alt="ד״ר תמר קורן - רופאת עור בחיפה"
          width={800}
          height={1200}
          className="w-full rounded-3xl"
        />
      </noscript>
    </div>
  )
}
