"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { LegalDisclaimer } from "./legal-disclaimer"

export function SuccessCases() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Notable transactions
  const successCases = [
    {
      name: "Digital Media Platform",
      logo: "/images/logos/dailyom-logo.png",
      description: "Strategic sale to a leading digital media company",
    },
    {
      name: "Sports Media Network",
      logo: "/images/logos/starwave-logo.png",
      description: "Major media network acquisition by global entertainment company",
    },
    {
      name: "Healthcare Network",
      logo: "/images/logos/npn-logo.png",
      description: "Healthcare network acquisition by industry leader",
    },
    {
      name: "Education Technology",
      logo: "/images/logos/insight-logo.png",
      description: "Strategic acquisition in the education technology sector",
    },
    {
      name: "Learning Solutions",
      logo: "/images/logos/click2learn-logo.png",
      description: "Major merger in the corporate learning solutions space",
    },
    {
      name: "Education Services",
      logo: "/images/logos/edison-logo.png",
      description: "Strategic investment and subsequent acquisition in education services",
    },
  ]

  return (
    <div ref={ref} className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h3 className="text-3xl md:text-4xl font-extralight mb-4 tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          Representative Transactions
        </h3>
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "6rem" } : { width: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-px w-24 bg-gradient-to-r from-white/10 via-white/60 to-white/10 mx-auto mb-6"
        />
        <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto">
          Selected transactions across various industries and deal types, representing our team's experience.
        </p>
        <div className="mt-2">
          <LegalDisclaimer variant="minimal" className="text-center" />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {successCases.map((case_, index) => (
          <motion.div
            key={case_.name}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-b from-gray-900/40 to-gray-900/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 group"
          >
            <div className="h-24 flex items-center justify-center mb-6 relative">
              <Image
                src={case_.logo || "/placeholder.svg"}
                alt={case_.name}
                width={180}
                height={80}
                className="object-contain max-h-20"
              />
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
                className="h-px bg-white/30 absolute bottom-0 left-0"
              />
            </div>
            <p className="text-gray-300 text-center font-light">{case_.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12 text-center"
      >
        <Link
          href="/success-cases"
          className="inline-flex items-center px-6 py-2 border border-white/50 text-white hover:bg-white hover:text-black transition-colors group"
        >
          View All Success Cases
          <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </motion.div>
    </div>
  )
}
