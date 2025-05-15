"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { LegalDisclaimer } from "./legal-disclaimer"

export function DetailedSuccessCases() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const featuredCases = [
    {
      id: "dailyom",
      title: "DailyOM",
      subtitle: "Digital Media",
      description:
        "Advised on the sale of DailyOM, a leading online wellness platform, to J2 Global / Ziff Davis (NASDAQ: ZD), resulting in a successful exit for the founders.",
      image: "/images/logos/dailyom-logo.png",
      stats: [
        { label: "Transaction Value", value: "Confidential" },
        { label: "Transaction Type", value: "Strategic Sale" },
        { label: "Industry", value: "Digital Media" },
      ],
    },
    {
      id: "starwave",
      title: "Starwave",
      subtitle: "Digital Media",
      description:
        "Advised on the $1 billion sale of Starwave, the founder of ESPN.com, to Disney, creating significant value for shareholders.",
      image: "/images/logos/starwave-logo.png",
      stats: [
        { label: "Transaction Value", value: "$1 Billion" },
        { label: "Transaction Type", value: "Strategic Sale" },
        { label: "Industry", value: "Digital Media" },
      ],
    },
    {
      id: "npn",
      title: "Northwest Physicians Network",
      subtitle: "Healthcare",
      description:
        "Advised on the sale of Northwest Physicians Network (NPN), a leading physician network, to DaVita Inc., creating a successful exit for the physician owners.",
      image: "/images/logos/npn-logo.png",
      stats: [
        { label: "Transaction Value", value: "Confidential" },
        { label: "Transaction Type", value: "Strategic Sale" },
        { label: "Industry", value: "Healthcare" },
      ],
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
        <h2 className="text-3xl md:text-4xl font-extralight mb-4 tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          Featured Success Cases
        </h2>
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "6rem" } : { width: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-px w-24 bg-gradient-to-r from-white/10 via-white/60 to-white/10 mx-auto mb-6"
        />
        <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto">
          Explore some of our most notable transactions across various industries.
        </p>
        <div className="mt-2">
          <LegalDisclaimer variant="minimal" className="text-center" />
        </div>
      </motion.div>

      <div className="space-y-12">
        {featuredCases.map((case_, index) => (
          <motion.div
            key={case_.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gradient-to-b from-gray-900/40 to-gray-900/20 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden group"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 flex items-center justify-center bg-white/5">
                <div className="h-32 w-full relative flex items-center justify-center">
                  <Image
                    src={case_.image || "/placeholder.svg"}
                    alt={case_.title}
                    width={200}
                    height={100}
                    className="object-contain max-h-24"
                  />
                </div>
              </div>
              <div className="p-8 md:col-span-2">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="text-2xl font-light">{case_.title}</h3>
                    <p className="text-gray-400">{case_.subtitle}</p>
                  </div>
                  <Link
                    href={`/success-cases/${case_.id}`}
                    className="mt-4 md:mt-0 inline-flex items-center text-sm hover:text-white transition-colors"
                  >
                    View Details
                    <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>
                <p className="text-gray-300 font-light mb-6">{case_.description}</p>
                <div className="grid grid-cols-3 gap-4">
                  {case_.stats.map((stat, i) => (
                    <div key={i}>
                      <p className="text-xs text-gray-400">{stat.label}</p>
                      <p className="font-light">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
          className="inline-flex items-center px-8 py-3 bg-white text-black hover:bg-gray-200 transition-colors group"
        >
          Explore All Success Cases
          <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </motion.div>
    </div>
  )
}
