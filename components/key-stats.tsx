"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { DollarSign, Globe, Clock, BarChart4 } from "lucide-react"
import Image from "next/image"

interface Stat {
  value: string
  label: string
  icon: React.ReactNode
}

export function KeyStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const stats: Stat[] = [
    {
      value: "$25B+",
      label: "Transaction Value",
      icon: <DollarSign className="h-8 w-8 text-white/80" />,
    },
    {
      value: "100+",
      label: "Completed Transactions",
      icon: <BarChart4 className="h-8 w-8 text-white/80" />,
    },
    {
      value: "20+",
      label: "Countries",
      icon: <Globe className="h-8 w-8 text-white/80" />,
    },
    {
      value: "15+",
      label: "Years of Experience",
      icon: <Clock className="h-8 w-8 text-white/80" />,
    },
  ]

  return (
    <div ref={ref} className="py-12 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <Image
          src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000&auto=format&fit=crop"
          alt="Background pattern"
          fill
          className="object-cover"
        />
      </div>

      {/* Animated background gradient elements */}
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10"
      ></motion.div>

      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-0 w-64 h-64 bg-white/3 rounded-full blur-3xl -z-10"
      ></motion.div>

      <div className="text-center mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-extralight mb-4 tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
        >
          By the Numbers
        </motion.h2>
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={isInView ? { width: "6rem", opacity: 1 } : { width: 0, opacity: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="h-px w-24 bg-gradient-to-r from-white/10 via-white/60 to-white/10 mx-auto"
        ></motion.div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 relative z-10">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1.0] }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="bg-gradient-to-b from-gray-900/40 to-gray-900/20 backdrop-blur-sm p-6 md:p-8 rounded-lg text-center relative group overflow-hidden"
          >
            {/* Hover effect overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-white/5"
            ></motion.div>

            {/* Animated border gradient */}
            <motion.div
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: index * 0.5 }}
              className="absolute inset-0 rounded-lg border border-white/10 group-hover:border-white/20 transition-colors duration-500"
            ></motion.div>

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5, rotate: -10 }}
                transition={{ duration: 0.8, delay: index * 0.15 + 0.1 }}
                whileHover={{ rotate: 5, scale: 1.1 }}
                className="mx-auto mb-4 p-3 bg-white/5 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300"
              >
                {stat.icon}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                className="text-3xl md:text-4xl font-extralight mb-2 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent"
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
                className="text-gray-400 text-sm"
              >
                {stat.label}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
