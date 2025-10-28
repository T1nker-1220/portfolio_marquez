import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'onError' | 'alt'> {
  onLoadingStateChange?: (loaded: boolean) => void
  alt: string
}

export function OptimizedImage({ onLoadingStateChange, ...props }: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)
  const [imageSrc, setImageSrc] = useState(props.src)

  return (
    <Image
      {...props}
      src={error ? '/images/logo.png' : imageSrc}
      onLoad={() => {
        setLoaded(true)
        onLoadingStateChange?.(true)
      }}
      onError={() => {
        setError(true)
        setImageSrc('/images/logo.png')
        setLoaded(true)
        onLoadingStateChange?.(true)
      }}
      className={`
        ${props.className || ''}
        ${loaded ? 'opacity-100' : 'opacity-0'}
        transition-opacity duration-300
        ${error ? 'object-contain p-8' : ''}
      `}
    />
  )
}
