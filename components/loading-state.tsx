"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function LoadingState() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + Math.random() * 15
        return newProgress >= 100 ? 100 : newProgress
      })
    }, 200)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center">
      <div className="w-24 h-24 mb-8 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="text-2xl font-serif tracking-wider">NASSAU</span>
        </motion.div>
      </div>

      <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
        <motion.div className="h-full bg-white" style={{ width: `${progress}%` }} transition={{ duration: 0.2 }} />
      </div>

      <motion.p
        className="mt-4 text-sm text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {progress < 100 ? "Loading experience..." : "Ready"}
      </motion.p>
    </div>
  )
}
