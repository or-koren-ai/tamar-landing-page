import Link from 'next/link'

interface BreadcrumbProps {
  serviceTitle: string
}

export function Breadcrumb({ serviceTitle }: BreadcrumbProps) {
  return (
    <nav aria-label="ניווט" className="text-sm text-gray-500 mb-6">
      <ol className="flex items-center gap-1 flex-wrap">
        <li>
          <Link href="/" className="hover:text-[var(--accent-strong)] transition-colors">
            דף הבית
          </Link>
        </li>
        <li aria-hidden="true"> &gt; </li>
        <li>
          <Link href="/services" className="hover:text-[var(--accent-strong)] transition-colors">
            שירותים
          </Link>
        </li>
        <li aria-hidden="true"> &gt; </li>
        <li>
          <span aria-current="page" className="text-gray-700">
            {serviceTitle}
          </span>
        </li>
      </ol>
    </nav>
  )
}
