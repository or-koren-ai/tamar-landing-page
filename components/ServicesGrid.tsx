import React from "react"
import { servicesList, type ServiceListItem } from "@/lib/services-list"
import { Stethoscope, Video } from "lucide-react"
import { HairIcon } from "@/components/icons/HairIcon"
import { AcneIcon } from "@/components/icons/AcneIcon"
import { MolesIcon } from "@/components/icons/MolesIcon"
import { FingernailIcon } from "@/components/icons/FingernailIcon"
import { SparklesIcon } from "@/components/icons/SparklesIcon"
import { HyperhidrosisIcon } from "@/components/icons/HyperhidrosisIcon"
import Link from "next/link"

type IconComponent = React.ComponentType<{ className?: string }>

const iconMap: Record<ServiceListItem["iconKey"], IconComponent> = {
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
  return (
    <div className="w-full">
      {/* Services Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {servicesList.map((s) => {
          const Icon = iconMap[s.iconKey]
          const iconSizeClass = s.iconKey === 'acne' ? 'w-16 h-16' : 'w-10 h-10'

          return (
            <Link
              key={s.key}
              href={`/services/${s.slug}`}
              prefetch={true}
              data-service-key={s.key}
              aria-label={`לקריאה על ${s.title}`}
              className={`group service-tile p-5 sm:p-6 text-right h-full min-h-[180px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#859a85]
                transition-all duration-200 ease-out
                hover:shadow-lg hover:-translate-y-1 block
              `}
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#A27B5C] flex items-center justify-center
                  transition-all duration-300 ease-out
                  group-hover:rotate-3 group-hover:bg-[#859a85]
                  group-active:rotate-6
                `}>
                  <Icon className={`${iconSizeClass} shrink-0 text-white transition-transform duration-200 group-hover:scale-105`} />
                </div>
                <h3 className="service-title text-[#859a85] text-balance line-clamp-3 min-h-[3.2rem] transition-colors duration-300 group-hover:text-[#6b8e6b]">
                  {s.title}
                </h3>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}