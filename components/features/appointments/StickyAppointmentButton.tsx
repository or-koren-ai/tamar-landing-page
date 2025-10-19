'use client'

import React from 'react'

export function StickyAppointmentButton() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('קביעת-תור');
    const headerOffset = 100;
    const elementPosition = element?.getBoundingClientRect().top ?? 0;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-white/95 backdrop-blur border-t" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="container mx-auto px-4 py-3">
        <button
          onClick={handleClick}
          className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#859a85] to-[#6b8e6b] text-white text-lg py-3 px-5 font-medium shadow-lg hover:shadow-xl ring-1 ring-black/5 transition"
        >
          <span>לקביעת תור</span>
        </button>
      </div>
    </div>
  );
}