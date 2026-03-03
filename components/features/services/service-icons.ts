import type { ServiceListItem } from "@/lib/data/services-list"
import { Stethoscope, Video, ScanSearch, CircleDot, Sparkles, Droplets } from "lucide-react"
import { HairIcon } from "./HairIcon"
import { NailIcon } from "./NailIcon"

type IconComponent = React.ComponentType<{ className?: string }>

export const serviceIconMap: Record<ServiceListItem["iconKey"], IconComponent> = {
  stethoscope: Stethoscope,
  hand: NailIcon,
  hair: HairIcon,
  search: ScanSearch,
  acne: CircleDot,
  palette: Sparkles,
  hyperhidrosis: Droplets,
  video: Video,
}
