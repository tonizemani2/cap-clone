"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export function EnhancedCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const benefits = [
    "Tailored advisory solutions for your specific needs",
    "Deep industry expertise across multiple sectors",
    "Global network of institutional investors",
    "Proven track record of successful transactions",
  ]

  return (
    <div ref={ref} className="py-12">
      <div className="bg-gradient-to-b from-gray-900/40 to-gray-900/20 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 md:p-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-extralight mb-6 tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
            >
              Ready to Discuss Your Strategic Objectives?
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-300 font-light mb-8"
            >
              Our team of experienced professionals is ready to help you navigate complex financial decisions and
              achieve your strategic goals.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 mb-8"
            >
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-white/80" />
                  <span className="text-gray-300 font-light">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-black hover:bg-gray-200 transition-colors group relative overflow-hidden"
              >
                <span className="relative z-10">Schedule a Consultation</span>
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10" />
              </Link>
            </motion.div>
          </div>

          <div className="bg-gradient-to-r from-gray-900/60 to-gray-900/40 p-8 md:p-12 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-white/10"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <span className="text-2xl font-extralight">99%</span>
                </div>
                <div>
                  <h4 className="text-lg font-light">Client Satisfaction</h4>
                  <p className="text-sm text-gray-400">Based on post-transaction surveys</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <span className="text-2xl font-extralight">85%</span>
                </div>
                <div>
                  <h4 className="text-lg font-light">Repeat Clients</h4>
                  <p className="text-sm text-gray-400">Return for additional services</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <span className="text-2xl font-extralight">20+</span>
                </div>
                <div>
                  <h4 className="text-lg font-light">Years Experience</h4>
                  <p className="text-sm text-gray-400">Average for senior team members</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
