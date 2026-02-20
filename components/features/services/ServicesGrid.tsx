import React from "react"
import { servicesList, type ServiceListItem } from "@/lib/data/services-list"
import { Stethoscope, Video, ScanSearch, CircleDot, Sparkles, Droplets } from "lucide-react"
import { HairIcon } from "@/components/icons/HairIcon"
import { NailIcon } from "@/components/icons/NailIcon"
import Link from "next/link"

type IconComponent = React.ComponentType<{ className?: string }>

const iconMap: Record<ServiceListItem["iconKey"], IconComponent> = {
  stethoscope: Stethoscope,
  hand: NailIcon,
  hair: HairIcon,
  search: ScanSearch,
  acne: CircleDot,
  palette: Sparkles,
  hyperhidrosis: Droplets,
  video: Video,
}

export default function ServicesGrid() {
  return (
    <div className="w-full">
      {/* Services Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {servicesList.map((s) => {
          const Icon = iconMap[s.iconKey]

          return (
            <Link
              key={s.key}
              href={`/services/${s.slug}`}
              prefetch={true}
              data-service-key={s.key}
              aria-label={`לקריאה על ${s.title}`}
              className={`group service-tile p-4 sm:p-5 text-right h-full min-h-[160px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#859a85]
                transition-all duration-200 ease-out
                hover:shadow-lg hover:-translate-y-1 block
              `}
            >
              <div className="flex flex-col items-center text-center gap-2 h-full">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#e8f0e8] flex items-center justify-center
                  transition-all duration-300 ease-out
                  group-hover:rotate-3 group-hover:bg-[#dce7dc]
                  group-active:rotate-6
                `}>
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 text-[#5e7f69] transition-transform duration-200 group-hover:scale-105" />
                </div>
                <h3 className="service-title text-[#859a85] text-balance line-clamp-3 min-h-[3.2rem] transition-colors duration-300 group-hover:text-[#6b8e6b]">
                  {s.title}
                </h3>
                <div className="mt-auto">
                  <span className="inline-block text-[#A27B5C] opacity-85 text-sm transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-[-3px]">
                    מידע נוסף ←
                  </span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
