"use client"

import { useRef, type ReactNode } from "react"
import { motion, useInView } from "framer-motion"

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  className?: string
  distance?: number
  duration?: number
  once?: boolean
  scale?: number
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  distance = 100, // Increased from default 75
  duration = 1.5, // Increased from default 1.2
  once = true,
  scale = 0.9, // Added scale parameter
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: 0.2 })

  const getDirectionVariants = (dir: string, dist: number) => {
    switch (dir) {
      case "up":
        return { y: dist, opacity: 0, scale }
      case "down":
        return { y: -dist, opacity: 0, scale }
      case "left":
        return { x: dist, opacity: 0, scale }
      case "right":
        return { x: -dist, opacity: 0, scale }
      default:
        return { opacity: 0, scale }
    }
  }

  const variants = {
    hidden: getDirectionVariants(direction, distance),
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1.0], // Cubic bezier for a more natural motion
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
