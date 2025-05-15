"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { TiltCard } from "./tilt-card"
import { DollarSign, BarChart4, TrendingUp } from "lucide-react"
import { LegalDisclaimer } from "./legal-disclaimer"

export function EnhancedTrackRecord() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const stats = [
    {
      value: "$20B+",
      label: "Deal Experience",
      icon: <DollarSign className="h-10 w-10 text-white/80" />,
      description: "Across 100+ transactions in technology, healthcare, consumer, and industrial sectors",
      color: "rgba(255, 255, 255, 0.1)",
    },
    {
      value: "600%",
      label: "Highest Client IRR",
      icon: <TrendingUp className="h-10 w-10 text-white/80" />,
      description: "Achieved through strategic positioning and optimal timing in competitive markets",
      color: "rgba(255, 255, 255, 0.1)",
    },
    {
      value: "100+",
      label: "Completed Transactions",
      icon: <BarChart4 className="h-10 w-10 text-white/80" />,
      description: "Including mergers, acquisitions, divestitures, and strategic investments",
      color: "rgba(255, 255, 255, 0.1)",
    },
  ]

  return (
    <div ref={ref} className="py-16 relative overflow-hidden">
      {/* Background map image with parallax effect */}
      <motion.div
        className="absolute inset-0 opacity-10 z-0"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" }}
      >
        <Image src="/images/world-map.jpg" alt="World map" fill className="object-cover object-center" />
      </motion.div>

      {/* Animated background gradient elements */}
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10"
      />

      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-0 w-64 h-64 bg-white/3 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-extralight mb-4 tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Track Record
          </h2>
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: "6rem", opacity: 1 } : { width: 0, opacity: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="h-px w-24 bg-gradient-to-r from-white/10 via-white/60 to-white/10 mx-auto"
          />
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Exceptional results across industries and transaction types
          </p>
        </motion.div>

        {/* Subtle legal disclaimer */}
        <div className="mb-12 relative z-10 max-w-3xl mx-auto">
          <LegalDisclaimer variant="minimal" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1.0] }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <TiltCard>
                <div className="bg-gradient-to-b from-gray-900/60 to-gray-900/40 backdrop-blur-sm p-8 rounded-xl text-center relative group overflow-hidden h-full border border-white/10 hover:border-white/30 transition-all duration-500">
                  {/* Background glow */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-20 blur-xl z-0"
                    style={{
                      background: `radial-gradient(circle at center, ${stat.color || "rgba(255,255,255,0.2)"}, transparent 70%)`,
                    }}
                  />

                  <div className="relative z-10">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                      animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5, rotate: -10 }}
                      transition={{ duration: 0.8, delay: index * 0.15 + 0.1 }}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      className="mx-auto mb-6 p-4 bg-white/5 rounded-full w-20 h-20 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300"
                    >
                      {stat.icon}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                      className="text-4xl md:text-5xl font-extralight mb-3 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent"
                    >
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 1.5, delay: index * 0.15 + 0.5 }}
                      >
                        {stat.value}
                      </motion.span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.15 + 0.5 }}
                      className="text-white text-lg font-light mb-4"
                    >
                      {stat.label}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.15 + 0.7 }}
                      className="text-gray-400 text-sm"
                    >
                      {stat.description}
                    </motion.div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
