"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, ChevronLeft, ChevronRight, Building, Briefcase, Handshake, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface Transaction {
  id: string
  title: string
  description: string
  sector: string
  year: string
  icon: React.ReactNode
  image: string
}

export function FeaturedTransactions() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const transactions: Transaction[] = [
    {
      id: "trans1",
      title: "Cross-border acquisition",
      description:
        "Advised a US-based technology company on its $500 million acquisition of a European software provider.",
      sector: "Technology",
      year: "2023",
      icon: <Building className="h-8 w-8 text-white/80" />,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "trans2",
      title: "Growth equity financing",
      description:
        "Raised $150 million in growth equity for a healthcare technology company to fund its expansion into new markets.",
      sector: "Healthcare",
      year: "2023",
      icon: <TrendingUp className="h-8 w-8 text-white/80" />,
      image: "https://images.unsplash.com/photo-1504810370725-2585de12e6ee?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "trans3",
      title: "Strategic partnership",
      description:
        "Facilitated a strategic partnership between a leading consumer brand and an Asian distribution network.",
      sector: "Consumer",
      year: "2022",
      icon: <Handshake className="h-8 w-8 text-white/80" />,
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "trans4",
      title: "Minority investment",
      description:
        "Advised a European industrial company on a $200 million minority investment from a global private equity firm.",
      sector: "Industrials",
      year: "2022",
      icon: <Briefcase className="h-8 w-8 text-white/80" />,
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop",
    },
  ]

  const nextSlide = () => {
    setSlideDirection("right")
    setActiveIndex((prev) => (prev === transactions.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setSlideDirection("left")
    setActiveIndex((prev) => (prev === 0 ? transactions.length - 1 : prev - 1))
  }

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [activeIndex])

  const variants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? 200 : -200,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? -200 : 200,
      opacity: 0,
      scale: 0.9,
    }),
  }

  return (
    <div className="py-12 relative">
      {/* Background gradient elements */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10"></div>

      <div className="flex justify-between items-center mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-extralight mb-4 tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Featured Transactions
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-white/10 via-white/60 to-white/10 mb-6"></div>
          <p className="text-lg text-gray-300 font-light">
            A selection of our recent advisory engagements across various sectors.
          </p>
        </div>
        <div className="hidden md:flex space-x-4">
          <button
            onClick={prevSlide}
            className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors group"
            aria-label="Previous transaction"
          >
            <ChevronLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors group"
            aria-label="Next transaction"
          >
            <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-lg bg-gradient-to-b from-gray-900/40 to-gray-900/20 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors duration-500"
      >
        <div className="h-2 bg-gray-800/50 absolute top-0 left-0 right-0 z-10 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-white/50 to-white"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, ease: "linear", repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
          />
        </div>

        <AnimatePresence mode="wait" custom={slideDirection}>
          <motion.div
            key={activeIndex}
            custom={slideDirection}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="md:grid md:grid-cols-2 gap-0"
          >
            <div className="relative hidden md:block h-full min-h-[300px]">
              <Image
                src={transactions[activeIndex].image || "/placeholder.svg"}
                alt={transactions[activeIndex].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-4 bg-black/40 rounded-full">{transactions[activeIndex].icon}</div>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <div className="flex md:hidden items-center justify-center mb-6">
                <div className="p-3 bg-white/5 rounded-full">{transactions[activeIndex].icon}</div>
              </div>

              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                <h3 className="text-2xl md:text-3xl font-extralight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  {transactions[activeIndex].title}
                </h3>
                <div className="flex space-x-3">
                  <span className="text-xs bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                    {transactions[activeIndex].sector}
                  </span>
                  <span className="text-xs bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                    {transactions[activeIndex].year}
                  </span>
                </div>
              </div>
              <p className="text-gray-300 mb-8 font-light text-lg leading-relaxed">
                {transactions[activeIndex].description}
              </p>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-400">
                  {activeIndex + 1} of {transactions.length}
                </div>
                <Link
                  href="/transactions"
                  className="inline-flex items-center text-sm hover:opacity-80 transition-opacity group"
                >
                  View All Transactions
                  <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-6 space-x-2 md:hidden">
        <button
          onClick={prevSlide}
          className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Previous transaction"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Next transaction"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
