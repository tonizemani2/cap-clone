"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export function ClientLogos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Placeholder for client logos - in a real implementation, these would be actual client logos
  const clients = [
    { name: "Goldman Sachs", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Morgan Stanley", logo: "/placeholder.svg?height=40&width=120" },
    { name: "JP Morgan", logo: "/placeholder.svg?height=40&width=120" },
    { name: "BlackRock", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Blackstone", logo: "/placeholder.svg?height=40&width=120" },
    { name: "KKR", logo: "/placeholder.svg?height=40&width=120" },
  ]

  return (
    <div ref={ref} className="py-12">
      <div className="text-center mb-8">
        <h3 className="text-xl font-extralight mb-2">Trusted By Leading Institutions</h3>
        <div className="h-px w-16 bg-gradient-to-r from-white/10 via-white/60 to-white/10 mx-auto"></div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {clients.map((client, index) => (
          <motion.div
            key={client.name}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="grayscale hover:grayscale-0 transition-all duration-500"
          >
            <Image
              src={client.logo || "/placeholder.svg"}
              alt={client.name}
              width={120}
              height={40}
              className="opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
