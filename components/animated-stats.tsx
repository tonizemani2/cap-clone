"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { AnimatedCounter } from "./animated-counter"
import { TiltCard } from "./tilt-card" // Import TiltCard

interface Stat {
  value: number
  label: string
  prefix?: string
  suffix?: string
  icon: React.ReactNode
  color?: string
}

interface AnimatedStatsProps {
  stats: Stat[]
}

export function AnimatedStats({ stats }: AnimatedStatsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div ref={ref} className="py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="relative"
          >
            <TiltCard className="h-full">
              <div className="bg-gradient-to-b from-gray-900/40 to-gray-900/20 backdrop-blur-sm p-8 rounded-lg text-center h-full border border-white/10 hover:border-white/30 transition-colors duration-500">
                {/* Background glow */}
                <div
                  className="absolute inset-0 rounded-lg opacity-20 blur-xl z-0"
                  style={{
                    background: `radial-gradient(circle at center, ${stat.color || "rgba(255,255,255,0.2)"}, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                    className="mx-auto mb-6 p-4 bg-white/5 rounded-full w-20 h-20 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300"
                  >
                    {stat.icon}
                  </motion.div>

                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    className="text-4xl md:text-5xl font-extralight mb-3"
                  />

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.5 }}
                    className="text-gray-400 text-sm"
                  >
                    {stat.label}
                  </motion.div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
