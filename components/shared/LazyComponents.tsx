'use client'

import dynamic from 'next/dynamic'

export const LazyServicesGrid = dynamic(() => import('@/components/features/services/ServicesGrid'), {
  loading: () => (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="bg-gray-100 rounded-xl animate-pulse h-[180px]"></div>
      ))}
    </div>
  ),
  ssr: false
})

export const LazyPressCarousel = dynamic(() => import('@/components/features/press/PressCarousel'), {
  loading: () => (
    <div className="py-12 md:py-16 bg-[#f8faf8]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light mb-6 text-center text-[#859a85]">כתבות ופרסומים</h2>
        <div className="bg-gray-100 rounded-xl animate-pulse h-32"></div>
      </div>
    </div>
  ),
  ssr: false
})

export const LazyContentSummary = dynamic(() => import('@/components/shared/ContentSummary').then(mod => ({ default: mod.ContentSummary })), {
  loading: () => null,
  ssr: true // Render on server so LLM crawlers that don't execute JS can see the content
})