"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface BackgroundVideoProps {
  fallbackImageUrl: string
  videoUrl?: string
  opacity?: number
  overlayOpacity?: number
}

export function BackgroundVideo({
  fallbackImageUrl,
  videoUrl = "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-new-york-city-at-night-time-lapse-4818-large.mp4",
  opacity = 0.15,
  overlayOpacity = 0.98,
}: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { clientX, clientY } = e
      const { width, height } = containerRef.current.getBoundingClientRect()

      // Calculate normalized mouse position
      const normalizedX = (clientX - width / 2) / (width / 2)
      const normalizedY = (clientY - height / 2) / (height / 2)

      setMousePosition({ x: normalizedX, y: normalizedY })
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsVideoLoaded(true)
    }

    video.addEventListener("loadeddata", handleLoadedData)
    return () => {
      video.removeEventListener("loadeddata", handleLoadedData)
    }
  }, [])

  // Return a simpler version during server-side rendering
  if (!isMounted) {
    return (
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Dark overlay */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black via-black to-black/95" style={{ opacity: overlayOpacity }}></div>

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

        {/* Noise texture overlay */}
        <div className="absolute inset-0 z-10 opacity-5 bg-noise"></div>

        {/* Fallback image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${fallbackImageUrl})`,
            opacity: opacity,
          }}
        ></div>
      </div>
    )
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Dark overlay */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-black via-black to-black/95" style={{ opacity: overlayOpacity }}></div>

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

      {/* Noise texture overlay */}
      <div className="absolute inset-0 z-10 opacity-5 bg-noise"></div>

      {/* Video background with parallax effect */}
      <motion.div
        ref={containerRef}
        animate={{
          x: mousePosition.x * -10, // Subtle movement
          y: mousePosition.y * -10, // Subtle movement
        }}
        transition={{ type: "spring", stiffness: 40, damping: 30 }}
        className="absolute inset-0"
      >
        {/* Fallback image (shown until video loads) */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-0" : "opacity-100"
          }`}
          style={{
            backgroundImage: `url(${fallbackImageUrl})`,
            opacity: opacity,
          }}
        ></div>

        {/* Video element */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ opacity }}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      </motion.div>
    </div>
  )
}
