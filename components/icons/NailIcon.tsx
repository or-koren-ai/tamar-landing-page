export function NailIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M8.5 22v-7" />
      <path d="M15.5 22v-7" />
      <rect x="8.5" y="4" width="7" height="11" rx="3.5" />
      <path d="M10 11.5c0-1.1.9-2 2-2s2 .9 2 2" />
    </svg>
  )
}
