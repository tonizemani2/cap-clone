"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ProcessStepsProps {
  compact?: boolean
  showLink?: boolean
}

export function ProcessSteps({ compact = false, showLink = true }: ProcessStepsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: compact
        ? "We begin with understanding your goals and objectives."
        : "We start with a confidential discussion to understand your company, goals, timeline, and expectations for a potential transaction.",
      delay: 0.2,
    },
    {
      step: "02",
      title: "Strategic Planning",
      description: compact
        ? "We develop a tailored approach for your specific situation."
        : "We develop a customized strategy tailored to your specific situation, including valuation analysis, potential buyer identification, and transaction structuring.",
      delay: 0.4,
    },
    {
      step: "03",
      title: "Market Approach",
      description: compact
        ? "We identify and engage with potential partners or buyers."
        : "We identify and approach potential buyers or partners while maintaining strict confidentiality, leveraging our extensive network and industry relationships.",
      delay: 0.6,
    },
    {
      step: "04",
      title: "Transaction Execution",
      description: compact
        ? "We manage the process from negotiation through closing."
        : "We manage the entire process from negotiation to due diligence and closing, ensuring all details are handled with precision and your interests are protected.",
      delay: 0.8,
    },
  ]

  return (
    <div ref={ref} className="relative">
      {/* Process container with glass effect */}
      <div
        className={`bg-gradient-to-b from-gray-900/60 to-gray-900/40 backdrop-blur-md ${
          compact ? "p-6" : "p-8"
        } rounded-lg border border-white/20 relative z-10 shadow-xl`}
      >
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6 }}
          className={`${compact ? "text-xl" : "text-2xl"} font-extralight mb-8 flex items-center`}
        >
          <span className="h-px w-8 bg-white/40 mr-4"></span>
          Our Process
          <span className="h-px w-8 bg-white/40 ml-4"></span>
        </motion.h2>

        <div className={`space-y-${compact ? "6" : "8"}`}>
          {processSteps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: item.delay }}
              className="flex items-start relative"
            >
              {/* Connecting line */}
              {index < processSteps.length - 1 && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={isInView ? { height: "100%" } : { height: 0 }}
                  transition={{ duration: 1, delay: item.delay + 0.3 }}
                  className={`absolute left-[${compact ? "18" : "22"}px] top-[${
                    compact ? "32" : "40"
                  }px] w-[1px] bg-gradient-to-b from-white/40 to-white/10 h-full`}
                ></motion.div>
              )}

              {/* Step number in circle */}
              <div
                className={`flex-shrink-0 ${
                  compact ? "w-9 h-9" : "w-11 h-11"
                } rounded-full border border-white/30 flex items-center justify-center mr-4 bg-black/30 backdrop-blur-sm`}
              >
                <span className={`${compact ? "text-xs" : "text-sm"} font-light`}>{item.step}</span>
              </div>

              <div className="pt-1">
                <h3 className={`${compact ? "text-base" : "text-lg"} font-light mb-2`}>{item.title}</h3>
                <p className={`${compact ? "text-xs" : "text-sm"} text-gray-400 font-light`}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {showLink && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-8 pt-6 border-t border-white/10 text-center"
          >
            <Link
              href="/process"
              className="inline-flex items-center text-sm text-white/70 hover:text-white transition-colors group"
            >
              Learn more about our approach
              <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        )}
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 border border-white/10 rounded-full"></div>
      <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-white/5 rounded-full"></div>
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute -top-10 -left-10 w-20 h-20 border border-white/10 rounded-full"
      ></motion.div>
    </div>
  )
}
