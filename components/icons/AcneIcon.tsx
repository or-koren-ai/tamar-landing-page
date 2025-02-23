import Image from 'next/image'

export function AcneIcon(props: { width?: number; height?: number; className?: string }) {
  const { width = 24, height = 24, className = '' } = props;
  
  return (
    <Image
      src="/icons/acne.svg"
      alt="Acne icon"
      width={width}
      height={height}
      className={className}
    />
  )
} 