"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export function EnhancedClientLogos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Actual financial institution logos
  const clients = [
    { name: "Goldman Sachs", logo: "/images/logos/goldman-sachs.png" },
    { name: "Morgan Stanley", logo: "/images/logos/morgan-stanley.png" },
    { name: "JP Morgan", logo: "/images/logos/jp-morgan.png" },
    { name: "BlackRock", logo: "/images/logos/blackrock.png" },
    { name: "Blackstone", logo: "/images/logos/blackstone.png" },
    { name: "KKR", logo: "/images/logos/kkr.png" },
  ]

  return (
    <div ref={ref} className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h3 className="text-xl font-extralight mb-2">Trusted By Leading Institutions</h3>
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "6rem" } : { width: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-px w-24 bg-gradient-to-r from-white/10 via-white/60 to-white/10 mx-auto"
        />
      </motion.div>

      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {clients.map((client, index) => (
          <motion.div
            key={client.name}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              filter: "brightness(1.2)",
              y: -5,
            }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Image
              src={client.logo || "/placeholder.svg"}
              alt={client.name}
              width={120}
              height={40}
              className="opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0"
            />
            <motion.div
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
              className="h-px bg-white/30 mt-2"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
