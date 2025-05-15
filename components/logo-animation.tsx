"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function LogoAnimation() {
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    // Check if animation has been shown before
    const hasAnimationPlayed = sessionStorage.getItem("logoAnimationPlayed")
    if (hasAnimationPlayed) {
      setAnimationComplete(true)
    }
  }, [])

  const handleAnimationComplete = () => {
    setAnimationComplete(true)
    // Store in session storage so it doesn't play again during the session
    sessionStorage.setItem("logoAnimationPlayed", "true")
  }

  if (animationComplete) {
    return null
  }

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 3 }}
      onAnimationComplete={handleAnimationComplete}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <span className="text-3xl md:text-4xl font-serif tracking-wider">NASSAU STREET</span>
          <span className="text-sm md:text-base tracking-[0.3em] font-light mt-1">P A R T N E R S</span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
