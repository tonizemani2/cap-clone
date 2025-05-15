"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, TrendingUp, Star } from "lucide-react"
import { LegalDisclaimer } from "./legal-disclaimer"

export function IndustryRecognition() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const recognitions = [
    {
      title: "Top M&A Advisory Firm",
      organization: "Financial Times",
      year: "2022",
      icon: <Award className="h-8 w-8 text-white/80" />,
    },
    {
      title: "Excellence in Middle Market M&A",
      organization: "Global Finance Awards",
      year: "2021",
      icon: <TrendingUp className="h-8 w-8 text-white/80" />,
    },
    {
      title: "Best Boutique Advisory Firm",
      organization: "Industry Excellence Awards",
      year: "2023",
      icon: <Star className="h-8 w-8 text-white/80" />,
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
          Industry Recognition
        </h3>
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "6rem" } : { width: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-px w-24 bg-gradient-to-r from-white/10 via-white/60 to-white/10 mx-auto mb-6"
        />
        <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto">
          Our affiliate has been recognized for excellence in M&A advisory services
        </p>
      </motion.div>

      {/* Legal Disclaimer */}
      <div className="mb-12">
        <LegalDisclaimer variant="compact" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {recognitions.map((recognition, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gradient-to-b from-gray-900/40 to-gray-900/20 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-500 group text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
              className="mx-auto mb-6 p-4 bg-white/5 rounded-full w-20 h-20 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300"
            >
              {recognition.icon}
            </motion.div>

            <h4 className="text-xl font-light mb-2 text-white">{recognition.title}</h4>
            <p className="text-gray-400 mb-1">{recognition.organization}</p>
            <p className="text-sm text-gray-500">{recognition.year}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
