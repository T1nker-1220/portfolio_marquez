import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'alt'> {
  onLoadingStateChange?: (loaded: boolean) => void
  alt: string
}

export function OptimizedImage({ onLoadingStateChange, ...props }: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <Image
      {...props}
      onLoad={() => {
        setLoaded(true)
        onLoadingStateChange?.(true)
      }}
      className={`
        ${props.className || ''}
        ${loaded ? 'opacity-100' : 'opacity-0'}
        transition-opacity duration-300
      `}
    />
  )
}
