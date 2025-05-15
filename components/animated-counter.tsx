"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface AnimatedCounterProps {
  value: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

export function AnimatedCounter({
  value,
  duration = 2,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      let startTime: number
      let animationFrame: number

      const updateValue = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

        setDisplayValue(Math.floor(progress * value))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(updateValue)
        }
      }

      animationFrame = requestAnimationFrame(updateValue)
      controls.start({ opacity: 1, y: 0 })

      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, value, duration, controls])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <span className="text-gradient">{prefix}</span>
      {displayValue}
      <span className="text-gradient">{suffix}</span>
    </motion.div>
  )
}
