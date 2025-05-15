"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Newspaper, TrendingUp } from "lucide-react"
import Image from "next/image"

export function MediaMentions() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const mentions = [
    {
      source: "Financial Times",
      quote: "A boutique firm with global impact",
      logo: "/placeholder.svg?height=30&width=120",
      icon: <Newspaper className="h-5 w-5 text-white/80" />,
    },
    {
      source: "Wall Street Journal",
      quote: "Innovative approach to complex transactions",
      logo: "/placeholder.svg?height=30&width=120",
      icon: <Newspaper className="h-5 w-5 text-white/80" />,
    },
    {
      source: "M&A Advisor Awards",
      quote: "Boutique Investment Bank of the Year",
      logo: "/placeholder.svg?height=30&width=120",
      icon: <Award className="h-5 w-5 text-white/80" />,
    },
    {
      source: "Bloomberg",
      quote: "Rising star in cross-border transactions",
      logo: "/placeholder.svg?height=30&width=120",
      icon: <TrendingUp className="h-5 w-5 text-white/80" />,
    },
  ]

  return (
    <div ref={ref} className="py-12">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-extralight mb-2">Recognition & Media</h3>
        <div className="h-px w-16 bg-gradient-to-r from-white/10 via-white/60 to-white/10 mx-auto mb-4"></div>
        <p className="text-gray-300 font-light max-w-2xl mx-auto">
          Our work and expertise have been recognized by leading financial publications and industry awards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mentions.map((mention, index) => (
          <motion.div
            key={mention.source}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 group"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-white/5 rounded-full mr-3 group-hover:bg-white/10 transition-colors duration-300">
                {mention.icon}
              </div>
              <div className="grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image
                  src={mention.logo || "/placeholder.svg"}
                  alt={mention.source}
                  width={120}
                  height={30}
                  className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
            <p className="text-gray-300 font-light italic mb-2">"{mention.quote}"</p>
            <p className="text-sm text-gray-400">— {mention.source}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
