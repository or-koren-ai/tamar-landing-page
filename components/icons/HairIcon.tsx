import Image from 'next/image'

export function HairIcon(props: { width?: number; height?: number; className?: string }) {
  const { width = 24, height = 24, className = '' } = props;
  
  return (
    <Image
      src="/icons/hair_loss.svg"
      alt="Hair loss icon"
      width={width}
      height={height}
      className={`filter invert brightness-0 ${className}`} 
    />
  )
} 