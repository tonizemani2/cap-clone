"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight, FileText, BarChart, PieChart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function ThoughtLeadership() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const insights = [
    {
      title: "The Future of Cross-Border M&A in a Post-Pandemic World",
      excerpt:
        "Our analysis of emerging trends in global M&A activity and strategic recommendations for companies considering international expansion.",
      category: "Research",
      date: "May 2023",
      icon: <FileText className="h-5 w-5 text-white/80" />,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Private Capital Markets: 2023 Outlook",
      excerpt:
        "A comprehensive review of private capital markets and projections for fundraising, deal activity, and valuations in the coming year.",
      category: "Market Analysis",
      date: "January 2023",
      icon: <BarChart className="h-5 w-5 text-white/80" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "ESG Considerations in Strategic Transactions",
      excerpt:
        "How environmental, social, and governance factors are increasingly influencing deal structures, valuations, and post-merger integration.",
      category: "Insights",
      date: "March 2023",
      icon: <PieChart className="h-5 w-5 text-white/80" />,
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop",
    },
  ]

  return (
    <div ref={ref} className="py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
        <div>
          <h3 className="text-2xl md:text-3xl font-extralight mb-4 tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Insights & Thought Leadership
          </h3>
          <div className="h-px w-24 bg-gradient-to-r from-white/10 via-white/60 to-white/10 mb-4"></div>
          <p className="text-gray-300 font-light max-w-2xl">
            Our team regularly publishes research and insights on market trends, industry developments, and strategic
            considerations for business leaders.
          </p>
        </div>
        <Link
          href="/insights"
          className="mt-4 md:mt-0 inline-flex items-center text-sm hover:opacity-80 transition-opacity group"
        >
          View All Insights
          <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {insights.map((insight, index) => (
          <motion.div
            key={insight.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900/30 backdrop-blur-sm rounded-lg overflow-hidden group"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={insight.image || "/placeholder.svg"}
                alt={insight.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute top-4 left-4 flex items-center">
                <div className="p-1 bg-white/10 backdrop-blur-sm rounded-full mr-2">{insight.icon}</div>
                <span className="text-xs bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">{insight.category}</span>
              </div>
              <div className="absolute bottom-4 right-4">
                <span className="text-xs text-gray-300">{insight.date}</span>
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-extralight mb-3 group-hover:text-white transition-colors duration-300">
                {insight.title}
              </h4>
              <p className="text-gray-300 text-sm font-light mb-4 line-clamp-3">{insight.excerpt}</p>
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
    </div>
  )
}
