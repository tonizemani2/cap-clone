"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <div className="container mx-auto px-6 md:px-12 pt-40 md:pt-52 pb-20 md:pb-32 flex-grow flex items-center">
      <div className="max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extralight mb-4 leading-tight tracking-tight"
        >
          Connecting You With
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center my-8 md:my-12"
        >
          <motion.span
            animate={{ opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="text-4xl md:text-6xl font-thin italic text-white/40"
          >
            /
          </motion.span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extralight mb-12 leading-tight tracking-tight"
        >
          Across the US, <br className="hidden md:block" />
          Europe & Asia
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
          className="text-lg md:text-xl font-light text-gray-300 max-w-3xl leading-relaxed mt-8 md:mt-12"
        >
          A boutique advisory firm offering tailored capital raising and strategic partnerships. Leveraging deep capital
          markets experience and a global network, we facilitate growth, acquisitions, and long-term value creation for
          our clients.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.5, ease: "easeOut" }}
          className="mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors group relative overflow-hidden"
          >
            <span className="absolute inset-0 w-0 bg-white group-hover:w-full transition-all duration-500 ease-out -z-10"></span>
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">Our Services</span>
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10 group-hover:text-black transition-colors duration-300" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
