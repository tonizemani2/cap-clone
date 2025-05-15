"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { XeraLogo } from "./xera-logo"

export function IntroAnimation() {
  const [showAnimation, setShowAnimation] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {showAnimation && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center"
        >
          <div className="relative flex flex-col items-center">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <XeraLogo size="lg" animated={true} />
            </motion.div>

            {/* Company Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col items-center"
            >
              <motion.div
                initial={{ letterSpacing: "0.1em" }}
                animate={{ letterSpacing: "0.2em" }}
                transition={{ duration: 1.2, delay: 1 }}
                className="text-4xl font-serif tracking-wider text-white"
              >
                XERA
              </motion.div>
              <motion.div
                initial={{ letterSpacing: "0.2em", opacity: 0 }}
                animate={{ letterSpacing: "0.4em", opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.2 }}
                className="text-sm tracking-widest font-light mt-1 text-white/80"
              >
                CAPITAL
              </motion.div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="text-white/60 text-sm font-light mt-4 tracking-wider"
            >
              STRATEGIC M&A ADVISORY
            </motion.p>

            {/* Animated line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ duration: 1, delay: 2.2 }}
              className="h-px bg-white/30 mt-6"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
