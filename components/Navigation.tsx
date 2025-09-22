'use client';

import React from 'react';

export function Navigation() {
  const navItems = ["אודות", "שירותי המרפאה", "ביקורות", "כתבות ופרסומים", "קביעת תור"];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
    e.preventDefault();
    const element = document.getElementById(item.replace(" ", "-"));
    const headerOffset = 100;
    const elementPosition = element?.getBoundingClientRect().top ?? 0;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  };

  return (
    <nav className="hidden md:block">
      <ul className="flex justify-between items-center gap-6">
        {navItems.map((item, index) => (
          <li key={index}>
            <a
              href={`#${item.replace(" ", "-")}`}
              className="nav-link"
              onClick={(e) => handleClick(e, item)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
} 