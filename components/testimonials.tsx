"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  id: string
  quote: string
  author: string
  company: string
  image: string
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials: Testimonial[] = [
    {
      id: "test1",
      quote:
        "The team at Nassau Street Partners provided invaluable guidance throughout our acquisition process. Their deep industry knowledge and global network were instrumental in helping us find the right target and structure a deal that created significant value for our shareholders.",
      author: "CEO",
      company: "US Technology Company",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "test2",
      quote:
        "Nassau Street Partners helped us navigate a complex cross-border transaction with expertise and professionalism. Their ability to understand our strategic objectives and translate them into a successful outcome exceeded our expectations.",
      author: "CFO",
      company: "European Healthcare Company",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "test3",
      quote:
        "Working with Nassau Street Partners on our capital raise was a seamless experience. Their team's dedication, market insights, and investor relationships were key to our successful fundraising.",
      author: "Founder",
      company: "Asian Fintech Startup",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 8000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="py-12 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <Image
          src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1000&auto=format&fit=crop"
          alt="Background pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-extralight mb-4 tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          Client Testimonials
        </h2>
        <div className="h-px w-16 bg-gradient-to-r from-white/10 via-white/60 to-white/10 mx-auto"></div>
      </div>

      <div className="relative bg-gradient-to-b from-gray-900/40 to-gray-900/20 backdrop-blur-sm p-8 md:p-12 rounded-lg overflow-hidden border border-white/10 z-10">
        <Quote className="absolute top-8 left-8 h-12 w-12 text-white/10" />

        {/* Background image */}
        <div className="absolute inset-0 opacity-10 z-0">
          <Image
            src={testimonials[activeIndex].image || "/placeholder.svg"}
            alt="Testimonial background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-xl md:text-2xl italic text-gray-300 mb-8 leading-relaxed font-light">
                "{testimonials[activeIndex].quote}"
              </p>
              <div>
                <div className="font-normal">{testimonials[activeIndex].author}</div>
                <div className="text-sm text-gray-400">{testimonials[activeIndex].company}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-white w-6" : "bg-white/30"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
