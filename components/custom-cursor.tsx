"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("clickable")

      setIsHovering(isClickable)
    }

    const handleMouseDown = () => {
      setIsClicking(true)
    }

    const handleMouseUp = () => {
      setIsClicking(false)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isVisible])

  const cursorVariants = {
    default: {
      x: mousePosition.x - 24, // Increased size
      y: mousePosition.y - 24, // Increased size
      height: 48, // Increased size
      width: 48, // Increased size
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      opacity: isVisible ? 1 : 0,
      transition: {
        type: "spring",
        mass: 0.1,
        stiffness: 800,
        damping: 30,
      },
    },
    hover: {
      x: mousePosition.x - 30, // Increased size
      y: mousePosition.y - 30, // Increased size
      height: 60, // Increased size
      width: 60, // Increased size
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      border: "1px solid rgba(255, 255, 255, 0.5)",
      opacity: isVisible ? 1 : 0,
      transition: {
        type: "spring",
        mass: 0.1,
        stiffness: 800,
        damping: 30,
      },
    },
    clicking: {
      x: mousePosition.x - 20, // Smaller when clicking
      y: mousePosition.y - 20, // Smaller when clicking
      height: 40, // Smaller when clicking
      width: 40, // Smaller when clicking
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      border: "1px solid rgba(255, 255, 255, 0.6)",
      opacity: isVisible ? 1 : 0,
      transition: {
        type: "spring",
        mass: 0.1,
        stiffness: 800,
        damping: 30,
      },
    },
  }

  const dotVariants = {
    default: {
      x: mousePosition.x - 3,
      y: mousePosition.y - 3,
      height: 6,
      width: 6,
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      opacity: isVisible ? 1 : 0,
      transition: {
        type: "spring",
        mass: 0.1,
        stiffness: 1000,
        damping: 30,
      },
    },
    hover: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      height: 8,
      width: 8,
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      opacity: isVisible ? 1 : 0,
      transition: {
        type: "spring",
        mass: 0.1,
        stiffness: 1000,
        damping: 30,
      },
    },
    clicking: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      height: 12,
      width: 12,
      backgroundColor: "rgba(255, 255, 255, 1)",
      opacity: isVisible ? 1 : 0,
      transition: {
        type: "spring",
        mass: 0.1,
        stiffness: 1000,
        damping: 30,
      },
    },
  }

  const getCurrentVariant = () => {
    if (isClicking) return "clicking"
    if (isHovering) return "hover"
    return "default"
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block"
        variants={cursorVariants}
        animate={getCurrentVariant()}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block"
        variants={dotVariants}
        animate={getCurrentVariant()}
      />
    </>
  )
}
