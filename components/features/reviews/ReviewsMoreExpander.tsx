'use client'

import React, { useState } from 'react'

type Props = {
  children: React.ReactNode
  /** Cards shown before expanding on mobile (single column) */
  mobileVisible: number
  /** Cards shown before expanding on md+ (2–3 columns) — keep it a full grid row count */
  desktopVisible: number
  sourceUrl: string
  sourceLabel: string
}

// Renders all review cards in a single grid so rows stay balanced per
// breakpoint: collapsed shows `mobileVisible` cards on mobile and
// `desktopVisible` on md+. Expanding reveals the rest and only then the
// outbound link to the full MedReviews page. Cards are server-rendered
// children, so crawlers always see all of them.
export function ReviewsMoreExpander({ children, mobileVisible, desktopVisible, sourceUrl, sourceLabel }: Props) {
  const [isExpanded, setIsExpanded] = useState(false)
  const items = React.Children.toArray(children)

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
        {items.map((child, i) => {
          const hiddenClass = isExpanded || i < mobileVisible
            ? ''
            : i < desktopVisible ? 'hidden md:block' : 'hidden'
          return (
            <div key={i} className={hiddenClass}>
              {child}
            </div>
          )
        })}
      </div>

      {!isExpanded && items.length > mobileVisible && (
        <div className="mt-8 text-center">
          <button
            className="text-[#54755e] hover:text-[#587a63] transition-colors duration-200 underline text-lg font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[#859a85] rounded"
            onClick={() => setIsExpanded(true)}
            aria-expanded={isExpanded}
            data-umami-event="reviews-expand"
          >
            עוד ביקורות
          </button>
        </div>
      )}

      {isExpanded && (
        <div className="mt-7 text-center">
          <a
            href={sourceUrl}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="text-sm text-gray-500 hover:text-[#587a63] hover:underline transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#859a85] rounded"
            data-umami-event="medreviews-outbound"
          >
            {sourceLabel}
          </a>
        </div>
      )}
    </div>
  )
}
