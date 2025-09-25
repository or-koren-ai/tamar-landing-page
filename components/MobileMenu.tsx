'use client'

import { SITE } from "@/lib/site-config"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300/70 bg-white/80 backdrop-blur shadow-sm ring-1 ring-black/5 hover:bg-white hover:shadow-md transition"
          aria-label="פתח תפריט"
        >
          <span className="sr-only">תפריט</span>
          <span className="flex flex-col items-center justify-center gap-1.5">
            <span className="block h-[2px] w-5 rounded-full bg-[#6b8e6b]"></span>
            <span className="block h-[2px] w-4 rounded-full bg-[#6b8e6b]"></span>
            <span className="block h-[2px] w-6 rounded-full bg-[#6b8e6b]"></span>
          </span>
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-white p-0" dir="rtl">
        <div className="px-4 py-3 border-b text-right">
          <div className="text-[#6b8e6b] text-xl">{SITE.name}</div>
        </div>
        <nav className="mt-2">
          <ul className="flex flex-col items-end gap-2 text-right px-4 py-3">
            <li className="w-full">
              <SheetClose asChild>
                <a href="#אודות" className="block w-full rounded-lg px-3 py-2 text-lg text-[#859a85] hover:bg-[#f3f6f3] transition-colors">אודות</a>
              </SheetClose>
            </li>
            <li className="w-full">
              <SheetClose asChild>
                <a href="#שירותי-המרפאה" className="block w-full rounded-lg px-3 py-2 text-lg text-[#859a85] hover:bg-[#f3f6f3] transition-colors">שירותי המרפאה</a>
              </SheetClose>
            </li>
            <li className="w-full">
              <SheetClose asChild>
                <a href="#ביקורות" className="block w-full rounded-lg px-3 py-2 text-lg text-[#859a85] hover:bg-[#f3f6f3] transition-colors">ביקורות</a>
              </SheetClose>
            </li>
            <li className="w-full">
              <SheetClose asChild>
                <a href="#כתבות-ופרסומים" className="block w-full rounded-lg px-3 py-2 text-lg text-[#859a85] hover:bg-[#f3f6f3] transition-colors">כתבות ופרסומים</a>
              </SheetClose>
            </li>
            <li className="w-full">
              <SheetClose asChild>
                <a href="#קביעת-תור" className="block w-full rounded-lg px-3 py-2 text-lg text-[#859a85] hover:bg-[#f3f6f3] transition-colors">קביעת תור</a>
              </SheetClose>
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}