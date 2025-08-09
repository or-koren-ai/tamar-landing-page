export function MolesIcon({ className, title = "בדיקת שומות ודרמוסקופיה" }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={title ? undefined : true}
      role="img"
    >
      {title ? <title>{title}</title> : null}
      {/* Larger, thinner lens */}
      <circle cx="11" cy="11" r="7" strokeWidth="1" />
      {/* Subtle inner ring */}
      <circle cx="11" cy="11" r="5.8" strokeWidth="0.75" />
      {/* Handle */}
      <path d="M20 20l-3.5-3.5" />
      {/* Three lesion dots (varying sizes) */}
      <circle cx="9.1" cy="12.3" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="12.7" cy="9.7" r="0.85" fill="currentColor" stroke="none" />
      <circle cx="10.7" cy="8.3" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
} 