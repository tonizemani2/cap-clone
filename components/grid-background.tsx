"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface GridBackgroundProps {
  columns?: number
  rows?: number
  opacity?: number
  color?: string
  animated?: boolean
}

export function GridBackground({
  columns = 8,
  rows = 8,
  opacity = 0.05,
  color = "rgba(255, 255, 255, 0.1)",
  animated = true,
}: GridBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setIsMounted(true)
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      setMousePosition({ x: clientX, y: clientY })
    }

    if (animated) {
      window.addEventListener("mousemove", handleMouseMove)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      if (animated) {
        window.removeEventListener("mousemove", handleMouseMove)
      }
      window.removeEventListener("resize", handleResize)
    }
  }, [animated])

  // Return early if not mounted (server-side rendering)
  if (!isMounted) {
    return (
      <div className="absolute inset-0 z-0" style={{ opacity }}>
        <div
          className="w-full h-full grid"
          style={{
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
          }}
        >
          {Array.from({ length: rows }).map((_, rowIndex) =>
            Array.from({ length: columns }).map((_, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className="border"
                style={{
                  borderColor: color,
                }}
              />
            )),
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="absolute inset-0 z-0" style={{ opacity }}>
      <div
        className="w-full h-full grid"
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {Array.from({ length: rows }).map((_, rowIndex) =>
          Array.from({ length: columns }).map((_, colIndex) => {
            const key = `${rowIndex}-${colIndex}`
            const cellX = (colIndex / columns) * windowSize.width
            const cellY = (rowIndex / rows) * windowSize.height

            // Calculate distance from mouse
            const dx = mousePosition.x - cellX
            const dy = mousePosition.y - cellY
            const distance = Math.sqrt(dx * dx + dy * dy)
            const maxDistance = Math.sqrt(windowSize.width * windowSize.width + windowSize.height * windowSize.height)
            const normalizedDistance = distance / maxDistance

            // Cells closer to mouse are more visible
            const cellOpacity = animated ? Math.max(0.1, 1 - normalizedDistance) : 1

            return (
              <motion.div
                key={key}
                className="border"
                style={{
                  borderColor: color,
                  opacity: cellOpacity,
                }}
                animate={
                  animated
                    ? {
                        opacity: [cellOpacity * 0.5, cellOpacity, cellOpacity * 0.5],
                      }
                    : {}
                }
                transition={
                  animated
                    ? {
                        duration: 3 + Math.random() * 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }
                    : {}
                }
              />
            )
          }),
        )}
      </div>
    </div>
  )
}
