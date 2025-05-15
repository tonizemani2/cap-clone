"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export function TrackRecordVisualization() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const transactionTypes = [
    { type: "M&A Advisory", percentage: 45 },
    { type: "Capital Raising", percentage: 30 },
    { type: "Strategic Advisory", percentage: 25 },
  ]

  const regions = [
    { region: "North America", percentage: 40 },
    { region: "Europe", percentage: 35 },
    { region: "Asia", percentage: 25 },
  ]

  return (
    <div ref={ref} className="py-12 relative">
      {/* Background map image */}
      <div className="absolute inset-0 opacity-10 z-0">
        <Image
          src="https://images.unsplash.com/photo-1589519160732-57fc6fdf5a4d?q=80&w=1000&auto=format&fit=crop"
          alt="World map"
          fill
          className="object-contain"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
        <div className="bg-gradient-to-b from-gray-900/40 to-gray-900/20 backdrop-blur-sm p-8 rounded-lg border border-white/10">
          <h3 className="text-2xl font-extralight mb-6 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 text-white/80"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            By Transaction Type
          </h3>
          <div className="space-y-8">
            {transactionTypes.map((item, index) => (
              <motion.div key={index} className="space-y-2">
                <div className="flex justify-between mb-2">
                  <span className="font-light flex items-center">
                    <span className="w-2 h-2 rounded-full bg-white mr-2"></span>
                    {item.type}
                  </span>
                  <span className="font-light">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-800 h-1 rounded-full overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-r from-white/80 to-white h-1 rounded-full origin-left"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: item.percentage / 100 } : { scaleX: 0 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-b from-gray-900/40 to-gray-900/20 backdrop-blur-sm p-8 rounded-lg border border-white/10">
          <h3 className="text-2xl font-extralight mb-6 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 text-white/80"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            By Region
          </h3>
          <div className="space-y-8">
            {regions.map((item, index) => (
              <motion.div key={index} className="space-y-2">
                <div className="flex justify-between mb-2">
                  <span className="font-light flex items-center">
                    <span className="w-2 h-2 rounded-full bg-white mr-2"></span>
                    {item.region}
                  </span>
                  <span className="font-light">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-800 h-1 rounded-full overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-r from-white/80 to-white h-1 rounded-full origin-left"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: item.percentage / 100 } : { scaleX: 0 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
