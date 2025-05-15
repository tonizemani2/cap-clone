"use client"

import type React from "react"

import { motion } from "framer-motion"
import { TiltCard } from "./tilt-card"
import Image from "next/image"

interface TransactionCardProps {
  title: string
  description: string
  sector: string
  year: string
  icon: React.ReactNode
  image?: string
  delay?: number
}

export function TransactionCard({ title, description, sector, year, icon, image, delay = 0 }: TransactionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
    >
      <TiltCard className="h-full">
        <div className="bg-gradient-to-b from-gray-900/40 to-gray-900/20 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 h-full group">
          <div className="relative h-48 overflow-hidden">
            {image && (
              <>
                <Image
                  src={image || "/placeholder.svg"}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
              </>
            )}

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="p-4 bg-black/40 rounded-full"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {icon}
              </motion.div>
            </div>

            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700"
              style={{
                background: "linear-gradient(45deg, rgba(255,255,255,0.1), transparent 70%)",
              }}
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            />
          </div>

          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-3">
              <motion.h3
                className="text-xl md:text-2xl font-extralight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {title}
              </motion.h3>

              <div className="flex space-x-3">
                <motion.span
                  className="text-xs bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10"
                  whileHover={{ scale: 1.05 }}
                >
                  {sector}
                </motion.span>
                <motion.span
                  className="text-xs bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10"
                  whileHover={{ scale: 1.05 }}
                >
                  {year}
                </motion.span>
              </div>
            </div>

            <p className="text-gray-300 mb-4 font-light leading-relaxed">{description}</p>

            <motion.button
              className="text-sm text-white/70 hover:text-white flex items-center gap-1 group/btn"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              View Details
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover/btn:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  )
}
