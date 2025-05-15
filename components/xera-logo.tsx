"use client"

import { motion } from "framer-motion"

interface XeraLogoProps {
  animated?: boolean
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  variant?: "light" | "dark"
}

export function XeraLogo({ animated = false, size = "md", className = "", variant = "light" }: XeraLogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  }

  const mainColor = variant === "light" ? "white" : "black"
  const accentColor = variant === "light" ? "black" : "white"

  // SVG paths for the X
  const xPath = "M 20,10 L 80,90 M 20,90 L 80,10"

  if (animated) {
    return (
      <motion.div
        className={`relative ${sizeClasses[size]} ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Outer circle */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 rounded-full border-2 border-white"
          style={{ borderColor: mainColor }}
        />

        {/* Inner diamond */}
        <motion.div
          initial={{ scale: 0, rotate: 45, opacity: 0 }}
          animate={{ scale: 0.7, rotate: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-md"
          style={{ backgroundColor: accentColor }}
        />

        {/* X shape */}
        <motion.svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.path
            d={xPath}
            stroke={mainColor}
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
          />
        </motion.svg>

        {/* Decorative elements */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="absolute top-0 right-0 w-[20%] h-[20%] rounded-full"
          style={{ backgroundColor: mainColor }}
        />

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
          className="absolute bottom-0 left-0 w-[20%] h-[20%] rounded-full"
          style={{ backgroundColor: mainColor }}
        />
      </motion.div>
    )
  }

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Outer circle */}
      <div className="absolute inset-0 rounded-full border-2" style={{ borderColor: mainColor }} />

      {/* Inner diamond */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-md"
        style={{ backgroundColor: accentColor }}
      />

      {/* X shape */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
        <path d={xPath} stroke={mainColor} strokeWidth="8" strokeLinecap="round" fill="none" />
      </svg>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[20%] h-[20%] rounded-full" style={{ backgroundColor: mainColor }} />

      <div className="absolute bottom-0 left-0 w-[20%] h-[20%] rounded-full" style={{ backgroundColor: mainColor }} />
    </div>
  )
}
