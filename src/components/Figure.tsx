import Image from 'next/image'

export type FigureProps = {
  src: string
  caption?: string
  alt?: string
  height?: 'short' | 'medium' | 'tall'
}

const styles = {
  short: 'h-24 sm:h-36',
  medium: 'h-48 sm:72',
  tall: 'h-72 sm:h-96',
}

export function Figure({
  src,
  alt = '',
  caption = '',
  height = 'medium',
}: FigureProps) {
  return (
    <figure>
      <div className={`relative ${styles[height]}`}>
        <Image src={src} alt={alt} layout="fill" objectFit="contain" />
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
