"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Quote } from "lucide-react"
import { LegalDisclaimer } from "./legal-disclaimer"

export function ClientTestimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const testimonials = [
    {
      quote:
        "The team's expertise and guidance throughout the M&A process was invaluable. They helped us navigate complex negotiations and achieve an exceptional outcome.",
      author: "John Smith",
      position: "Former CEO, TechCorp",
      image: "/images/testimonials/testimonial-1.jpg",
    },
    {
      quote:
        "Their strategic insights and deep industry knowledge were critical to maximizing our company's value. The team's dedication and professionalism exceeded our expectations.",
      author: "Sarah Johnson",
      position: "Founder, HealthTech Solutions",
      image: "/images/testimonials/testimonial-2.jpg",
    },
    {
      quote:
        "Working with this team was transformative for our business. Their attention to detail and commitment to our success resulted in a transaction that surpassed our goals.",
      author: "Michael Chen",
      position: "President, Global Manufacturing",
      image: "/images/testimonials/testimonial-3.jpg",
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
          Client Testimonials
        </h3>
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "6rem" } : { width: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-px w-24 bg-gradient-to-r from-white/10 via-white/60 to-white/10 mx-auto mb-6"
        />
        <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto">
          Hear what clients say about working with our affiliate, Harris Northwest Advisors
        </p>
      </motion.div>

      {/* Legal Disclaimer */}
      <div className="mb-12">
        <LegalDisclaimer variant="compact" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gradient-to-b from-gray-900/40 to-gray-900/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-500 group relative"
          >
            {/* Quote icon */}
            <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
              <Quote className="h-12 w-12 text-white" />
            </div>

            <div className="mb-6 relative z-10">
              <p className="text-gray-300 font-light italic leading-relaxed">"{testimonial.quote}"</p>
            </div>

            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4 relative">
                <Image
                  src={testimonial.image || "/placeholder.svg?height=48&width=48"}
                  alt={testimonial.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-white font-medium">{testimonial.author}</h4>
                <p className="text-sm text-gray-400">{testimonial.position}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
