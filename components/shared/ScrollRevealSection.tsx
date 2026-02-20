'use client'

import { ReactNode } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

type RevealVariant = 'fade-up' | 'children' | 'scale'

const variantClassMap: Record<RevealVariant, string> = {
  'fade-up': 'scroll-reveal',
  'children': 'scroll-reveal-children',
  'scale': 'scroll-reveal-scale',
}

interface ScrollRevealSectionProps {
  children: ReactNode
  className?: string
  id?: string
  dir?: string
  as?: 'section' | 'div'
  variant?: RevealVariant
}

export function ScrollRevealSection({
  children,
  className = '',
  id,
  dir,
  as: Tag = 'section',
  variant = 'fade-up',
}: ScrollRevealSectionProps) {
  const { ref, isVisible } = useScrollReveal()
  const baseClass = variantClassMap[variant]

  return (
    <Tag
      ref={ref as any}
      id={id}
      dir={dir}
      className={`${baseClass} ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  )
}
