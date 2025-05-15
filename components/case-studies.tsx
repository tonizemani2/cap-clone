"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface CaseStudy {
  id: string
  title: string
  description: string
  sector: string
  image: string
}

export function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0)

  const caseStudies: CaseStudy[] = [
    {
      id: "case1",
      title: "Technology Sector Acquisition",
      description:
        "Advised on a cross-border technology acquisition, facilitating market expansion and operational synergies between the companies.",
      sector: "Technology",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "case2",
      title: "Healthcare Growth Capital",
      description:
        "Facilitated a significant growth capital raise for a healthcare technology company to support expansion and product development initiatives.",
      sector: "Healthcare",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "case3",
      title: "Consumer Market Expansion",
      description:
        "Structured and executed a strategic partnership enabling a consumer brand to establish a presence in new international markets.",
      sector: "Consumer",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <div className="py-12">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-extralight mb-4 tracking-tight">Case Studies</h2>
        <p className="text-lg text-gray-300 font-light">
          A selection of our recent engagements across various sectors and geographies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.id}
            className={`bg-gray-900/30 backdrop-blur-sm rounded-lg overflow-hidden card-hover ${
              activeIndex === index ? "ring-1 ring-white/20" : ""
            }`}
            whileHover={{ y: -5 }}
            onClick={() => setActiveIndex(index)}
          >
            <div className="relative h-48 overflow-hidden">
              <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute top-4 left-4">
                <span className="text-xs bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">{study.sector}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-extralight mb-2">{study.title}</h3>
              <p className="text-gray-300 text-sm font-light mb-4">{study.description}</p>
              <Link
                href="#"
                className="inline-flex items-center text-sm text-white hover:opacity-80 transition-opacity"
              >
                Read More <ArrowUpRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/case-studies"
          className="inline-flex items-center px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors group"
        >
          View All Case Studies
          <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </div>
  )
}
