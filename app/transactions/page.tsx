"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { PageTransition } from "@/components/page-transition"
import { Background } from "@/components/background"
import { TransactionFilter } from "@/components/transaction-filter"
import { motion } from "framer-motion"

interface Transaction {
  id: string
  title: string
  description: string
  sector: string
  year: string
}

export default function Transactions() {
  const allTransactions: Transaction[] = [
    {
      id: "trans1",
      title: "Cross-border acquisition",
      description:
        "Advised a US-based technology company on its $500 million acquisition of a European software provider.",
      sector: "Technology",
      year: "2023",
    },
    {
      id: "trans2",
      title: "Growth equity financing",
      description:
        "Raised $150 million in growth equity for a healthcare technology company to fund its expansion into new markets.",
      sector: "Healthcare",
      year: "2023",
    },
    {
      id: "trans3",
      title: "Strategic partnership",
      description:
        "Facilitated a strategic partnership between a leading consumer brand and an Asian distribution network.",
      sector: "Consumer",
      year: "2022",
    },
    {
      id: "trans4",
      title: "Minority investment",
      description:
        "Advised a European industrial company on a $200 million minority investment from a global private equity firm.",
      sector: "Industrials",
      year: "2022",
    },
    {
      id: "trans5",
      title: "Joint venture",
      description:
        "Structured a joint venture between a US energy company and a European utility to develop renewable energy projects.",
      sector: "Energy",
      year: "2021",
    },
    {
      id: "trans6",
      title: "Corporate carve-out",
      description: "Advised on the $350 million carve-out of a division of a global manufacturing company.",
      sector: "Manufacturing",
      year: "2021",
    },
    {
      id: "trans7",
      title: "Series C financing",
      description: "Raised $75 million in Series C financing for a fintech company focused on payment solutions.",
      sector: "Financial Services",
      year: "2023",
    },
    {
      id: "trans8",
      title: "Cross-border merger",
      description: "Advised on the merger of two leading software companies in the US and Europe.",
      sector: "Technology",
      year: "2022",
    },
  ]

  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>(allTransactions)

  const handleFilter = (filtered: Transaction[]) => {
    setFilteredTransactions(filtered)
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-white">
        <div className="relative">
          {/* Background with subtle parallax effect */}
          <Background imageUrl="/images/nyc-skyline.jpg" opacity={0.15} overlayOpacity={0.98} />

          <div className="relative z-10">
            <Navbar />

            <div className="container mx-auto px-6 md:px-12 pt-32 pb-16">
              <ScrollReveal>
                <div className="max-w-4xl">
                  <h1 className="text-5xl md:text-6xl font-extralight mb-6 tracking-tight">Transactions</h1>
                  <p className="text-xl text-gray-300 font-light leading-relaxed">
                    A sample of our recent advisory engagements across various sectors and geographies.
                  </p>
                </div>
              </ScrollReveal>

              <div className="mt-16">
                <TransactionFilter transactions={allTransactions} onFilter={handleFilter} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredTransactions.length > 0 ? (
                    filteredTransactions.map((transaction, index) => (
                      <motion.div
                        key={transaction.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg hover:bg-gray-800/30 transition-colors duration-300 group"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-2xl font-extralight group-hover:translate-x-1 transition-transform duration-300">
                            {transaction.title}
                          </h3>
                          <div className="flex space-x-3">
                            <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">{transaction.sector}</span>
                            <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">{transaction.year}</span>
                          </div>
                        </div>
                        <p className="text-gray-300 font-light">{transaction.description}</p>
                      </motion.div>
                    ))
                  ) : (
                    <div className="col-span-2 text-center py-12">
                      <p className="text-gray-400">No transactions match your filter criteria.</p>
                      <button
                        onClick={() => setFilteredTransactions(allTransactions)}
                        className="mt-4 text-white underline hover:text-gray-300"
                      >
                        Reset filters
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <ScrollReveal delay={0.3}>
                <div className="mt-24">
                  <h3 className="text-2xl font-extralight mb-8">Our Expertise</h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg hover:bg-gray-800/30 transition-colors duration-300">
                      <h4 className="text-xl font-extralight mb-6">Sectors</h4>
                      <ul className="space-y-3 text-gray-300 font-light">
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span>
                          Technology
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span>
                          Healthcare
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span>
                          Consumer & Retail
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span>
                          Financial Services
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span>
                          Industrials
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span>
                          Energy & Infrastructure
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg hover:bg-gray-800/30 transition-colors duration-300">
                      <h4 className="text-xl font-extralight mb-6">Transaction Types</h4>
                      <ul className="space-y-3 text-gray-300 font-light">
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span>
                          Mergers & Acquisitions
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span>
                          Capital Raising
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span>
                          Strategic Partnerships
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span>
                          Joint Ventures
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span>
                          Corporate Carve-outs
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span>
                          Restructurings
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg hover:bg-gray-800/30 transition-colors duration-300">
                      <h4 className="text-xl font-extralight mb-6">Geographies</h4>
                      <ul className="space-y-3 text-gray-300 font-light">
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span>
                          North America
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span>
                          Western Europe
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span>
                          Central & Eastern Europe
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span>
                          Southeast Asia
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span>
                          East Asia
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span>
                          Australia & New Zealand
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
