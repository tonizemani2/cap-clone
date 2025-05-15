"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

interface BackgroundProps {
  imageUrl: string
  opacity?: number
  overlayOpacity?: number
}

export function Background({ imageUrl, opacity = 0.15, overlayOpacity = 0.98 }: BackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { clientX, clientY } = e
      const { width, height } = containerRef.current.getBoundingClientRect()

      // Calculate movement (very subtle parallax effect)
      const moveX = (clientX - width / 2) * 0.005
      const moveY = (clientY - height / 2) * 0.005

      containerRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 z-20 bg-gradient-to-b from-black via-black to-black/95"
        style={{ opacity: overlayOpacity }}
      ></div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 z-10 opacity-5 bg-noise"></div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-10 opacity-10">
        <div className="w-full h-full grid grid-cols-8 grid-rows-8">
          {Array.from({ length: 8 }).map((_, rowIndex) =>
            Array.from({ length: 8 }).map((_, colIndex) => (
              <div key={`${rowIndex}-${colIndex}`} className="border border-white/10"></div>
            )),
          )}
        </div>
      </div>

      {/* Background image with parallax effect */}
      <div ref={containerRef} className="absolute inset-0 transition-transform duration-[3000ms] ease-out">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt="Background"
          fill
          priority
          className="object-cover"
          style={{ opacity }}
        />
      </div>
    </div>
  )
}
