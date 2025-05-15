"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, ChevronLeft, ChevronRight, Building, Briefcase, Handshake, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TiltCard } from "./tilt-card"

interface Transaction {
  id: string
  title: string
  description: string
  sector: string
  year: string
  icon: React.ReactNode
  image: string
  logo?: string
}

export function EnhancedTransactions() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [visibleTransactions, setVisibleTransactions] = useState<Transaction[]>([])
  const [showAll, setShowAll] = useState(false)

  const transactions: Transaction[] = [
    {
      id: "trans1",
      title: "Cross-border acquisition",
      description:
        "Advised a US-based technology company on its $500 million acquisition of a European software provider.",
      sector: "Technology",
      year: "2023",
      icon: <Building className="h-8 w-8 text-white/80" />,
      image: "/images/transactions/tech-acquisition.jpg",
      logo: "/images/logos/tech-company.png",
    },
    {
      id: "trans2",
      title: "Growth equity financing",
      description:
        "Raised $150 million in growth equity for a healthcare technology company to fund its expansion into new markets.",
      sector: "Healthcare",
      year: "2023",
      icon: <TrendingUp className="h-8 w-8 text-white/80" />,
      image: "/images/transactions/healthcare-financing.jpg",
      logo: "/images/logos/healthcare-company.png",
    },
    {
      id: "trans3",
      title: "Strategic partnership",
      description:
        "Facilitated a strategic partnership between a leading consumer brand and an Asian distribution network.",
      sector: "Consumer",
      year: "2022",
      icon: <Handshake className="h-8 w-8 text-white/80" />,
      image: "/images/transactions/consumer-partnership.jpg",
      logo: "/images/logos/consumer-brand.png",
    },
    {
      id: "trans4",
      title: "Minority investment",
      description:
        "Advised a European industrial company on a $200 million minority investment from a global private equity firm.",
      sector: "Industrials",
      year: "2022",
      icon: <Briefcase className="h-8 w-8 text-white/80" />,
      image: "/images/transactions/industrial-investment.jpg",
      logo: "/images/logos/industrial-company.png",
    },
  ]

  useEffect(() => {
    setVisibleTransactions(showAll ? transactions : transactions.slice(0, 3))
  }, [showAll])

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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-extralight mb-4 tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          Featured Transactions
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-px w-24 bg-gradient-to-r from-white/10 via-white/60 to-white/10 mx-auto mb-6"
        />
        <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto">
          A selection of our recent advisory engagements across various sectors and geographies.
        </p>
      </motion.div>

      {/* Featured transaction */}
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-lg bg-gradient-to-b from-gray-900/40 to-gray-900/20 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors duration-500 mb-16"
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
            <div className="relative hidden md:block h-full min-h-[400px]">
              <Image
                src={transactions[activeIndex].image || "/placeholder.svg"}
                alt={transactions[activeIndex].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div className="p-4 bg-black/40 rounded-full mb-6">{transactions[activeIndex].icon}</div>
                {transactions[activeIndex].logo && (
                  <div className="w-32 h-12 relative">
                    <Image
                      src={transactions[activeIndex].logo || "/placeholder.svg"}
                      alt="Company logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
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

        {/* Navigation buttons */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
            aria-label="Previous transaction"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        </div>

        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
            aria-label="Next transaction"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Transaction grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {visibleTransactions.map((transaction, index) => (
          <motion.div
            key={transaction.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <TiltCard className="h-full">
              <div className="bg-gradient-to-b from-gray-900/40 to-gray-900/20 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 h-full group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={transaction.image || "/placeholder.svg"}
                    alt={transaction.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

                  <div className="absolute top-4 left-4">
                    <span className="text-xs bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                      {transaction.sector}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="text-xs bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                      {transaction.year}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="p-4 bg-black/40 rounded-full"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {transaction.icon}
                    </motion.div>
                  </div>

                  {/* Animated gradient overlay */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                    style={{
                      background: "linear-gradient(45deg, rgba(255,255,255,0.1), transparent 70%)",
                    }}
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  />
                </div>

                <div className="p-6">
                  <motion.h3
                    className="text-xl font-extralight mb-3 group-hover:text-white transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {transaction.title}
                  </motion.h3>
                  <p className="text-gray-300 text-sm font-light mb-4 line-clamp-3">{transaction.description}</p>
                  <motion.button
                    className="text-sm text-white/70 hover:text-white flex items-center gap-1 group/btn"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    View Details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform group-hover/btn:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {!showAll && transactions.length > 3 && (
        <div className="mt-8 text-center">
          <motion.button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors group"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            View More Transactions
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.button>
        </div>
      )}
    </div>
  )
}
