"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  id: string
  quote: string
  author: string
  position?: string
  company: string
  image: string
}

export function EnhancedTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout>()

  const testimonials: Testimonial[] = [
    {
      id: "test1",
      quote:
        "The team at Nassau Street Partners provided invaluable guidance throughout our acquisition process. Their deep industry knowledge and global network were instrumental in helping us find the right target and structure a deal that created significant value for our shareholders.",
      author: "Michael Johnson",
      position: "CEO",
      company: "US Technology Company",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "test2",
      quote:
        "Nassau Street Partners helped us navigate a complex cross-border transaction with expertise and professionalism. Their ability to understand our strategic objectives and translate them into a successful outcome exceeded our expectations.",
      author: "Sarah Williams",
      position: "CFO",
      company: "European Healthcare Company",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "test3",
      quote:
        "Working with Nassau Street Partners on our capital raise was a seamless experience. Their team's dedication, market insights, and investor relationships were key to our successful fundraising.",
      author: "David Chen",
      position: "Founder",
      company: "Asian Fintech Startup",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop",
    },
  ]

  useEffect(() => {
    // Auto-advance slides
    intervalRef.current = setInterval(() => {
      nextSlide()
    }, 8000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [activeIndex])

  const nextSlide = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.9,
    }),
  }

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

      {/* Animated background elements */}
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10"
      />

      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-0 w-64 h-64 bg-white/3 rounded-full blur-3xl -z-10"
      />

      <div className="text-center mb-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-extralight mb-4 tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
        >
          Client Testimonials
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "4rem" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-px w-16 bg-gradient-to-r from-white/10 via-white/60 to-white/10 mx-auto"
        />
      </div>

      <div className="relative bg-gradient-to-b from-gray-900/40 to-gray-900/20 backdrop-blur-sm p-8 md:p-12 rounded-lg overflow-hidden border border-white/10 z-10">
        <Quote className="absolute top-8 left-8 h-12 w-12 text-white/10" />

        {/* Navigation buttons */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        </div>

        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

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
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="text-center"
            >
              <p className="text-xl md:text-2xl italic text-gray-300 mb-8 leading-relaxed font-light">
                "{testimonials[activeIndex].quote}"
              </p>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-white/20">
                  <Image
                    src={testimonials[activeIndex].image || "/placeholder.svg"}
                    alt={testimonials[activeIndex].author}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div className="font-normal">{testimonials[activeIndex].author}</div>
                {testimonials[activeIndex].position && (
                  <div className="text-sm text-gray-400">{testimonials[activeIndex].position}</div>
                )}
                <div className="text-sm text-gray-400">{testimonials[activeIndex].company}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > activeIndex ? 1 : -1)
                setActiveIndex(index)
              }}
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
