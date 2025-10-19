'use client'

import { usePathname } from 'next/navigation'

export function Navigation() {
  const pathname = usePathname()
  const navItems = ["אודות", "שירותי המרפאה", "ביקורות", "כתבות ופרסומים", "קביעת תור"];

  const getHref = (item: string) => {
    const anchor = item.replace(" ", "-")
    // If we're not on the homepage, go to homepage with anchor
    if (pathname !== '/') {
      return `/#${anchor}`
    }
    // If we're on homepage, use normal anchor
    return `#${anchor}`
  }

  return (
    <nav className="hidden md:block">
      <ul className="flex justify-between items-center gap-6">
        {navItems.map((item, index) => (
          <li key={index}>
            <a
              href={getHref(item)}
              className="nav-link"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
} 