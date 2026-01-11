"use client"

import { useState } from "react"

interface ImageWithFallbackProps {
  src: string
  fallbackSrc: string
  alt: string
  className?: string
  width?: number
  height?: number
  fill?: boolean
}

export function ImageWithFallback({ src, fallbackSrc, alt, className, width, height, fill }: ImageWithFallbackProps) {
  const [imageSrc, setImageSrc] = useState(src)

  const handleError = () => {
    setImageSrc(fallbackSrc)
  }

  if (fill) {
    return <img src={imageSrc || "/placeholder.svg"} alt={alt} className={className} onError={handleError} />
  }

  return (
    <img
      src={imageSrc || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
    />
  )
}
