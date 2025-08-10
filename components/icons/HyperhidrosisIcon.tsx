interface HyperhidrosisIconProps {
  className?: string
}

export function HyperhidrosisIcon({ className = "w-8 h-8" }: HyperhidrosisIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Three upward arrows */}
      <path
        d="M6 10L6 16M6 10L4.5 11.5M6 10L7.5 11.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8L12 14M12 8L10.5 9.5M12 8L13.5 9.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 10L18 16M18 10L16.5 11.5M18 10L19.5 11.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Wavy line representing skin/surface */}
      <path
        d="M3 16.5C5 15.5 7 17.5 9 16.5C11 15.5 13 17.5 15 16.5C17 15.5 19 17.5 21 16.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Three water drops below */}
      <path
        d="M6 20C6 21.1 6.9 22 8 22C9.1 22 10 21.1 10 20C10 18.9 8 17 8 17S6 18.9 6 20Z"
        fill="currentColor"
      />
      <path
        d="M11 21C11 22.1 11.9 23 13 23C14.1 23 15 22.1 15 21C15 19.9 13 18 13 18S11 19.9 11 21Z"
        fill="currentColor"
      />
      <path
        d="M16 20C16 21.1 16.9 22 18 22C19.1 22 20 21.1 20 20C20 18.9 18 17 18 17S16 18.9 16 20Z"
        fill="currentColor"
      />
    </svg>
  )
}