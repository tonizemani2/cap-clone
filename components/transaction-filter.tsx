"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Filter, X } from "lucide-react"

interface Transaction {
  id: string
  title: string
  description: string
  sector: string
  year: string
}

interface TransactionFilterProps {
  transactions: Transaction[]
  onFilter: (filtered: Transaction[]) => void
}

export function TransactionFilter({ transactions, onFilter }: TransactionFilterProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedSectors, setSelectedSectors] = useState<string[]>([])
  const [selectedYears, setSelectedYears] = useState<string[]>([])

  // Extract unique sectors and years
  const sectors = Array.from(new Set(transactions.map((t) => t.sector)))
  const years = Array.from(new Set(transactions.map((t) => t.year))).sort(
    (a, b) => Number.parseInt(b) - Number.parseInt(a),
  )

  const toggleSector = (sector: string) => {
    setSelectedSectors((prev) => (prev.includes(sector) ? prev.filter((s) => s !== sector) : [...prev, sector]))
  }

  const toggleYear = (year: string) => {
    setSelectedYears((prev) => (prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]))
  }

  const applyFilters = () => {
    let filtered = [...transactions]

    if (selectedSectors.length > 0) {
      filtered = filtered.filter((t) => selectedSectors.includes(t.sector))
    }

    if (selectedYears.length > 0) {
      filtered = filtered.filter((t) => selectedYears.includes(t.year))
    }

    onFilter(filtered)
    setIsOpen(false)
  }

  const clearFilters = () => {
    setSelectedSectors([])
    setSelectedYears([])
    onFilter(transactions)
  }

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-extralight">Transactions</h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center text-sm text-gray-300 hover:text-white transition-colors"
        >
          <Filter className="h-4 w-4 mr-2" />
          Filter Transactions
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm mt-4 p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-light">Filter Options</h4>
                <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Sector</h5>
                  <div className="space-y-2">
                    {sectors.map((sector) => (
                      <label key={sector} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedSectors.includes(sector)}
                          onChange={() => toggleSector(sector)}
                          className="rounded border-gray-700 text-white bg-gray-800 focus:ring-0"
                        />
                        <span className="text-gray-300">{sector}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Year</h5>
                  <div className="space-y-2">
                    {years.map((year) => (
                      <label key={year} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedYears.includes(year)}
                          onChange={() => toggleYear(year)}
                          className="rounded border-gray-700 text-white bg-gray-800 focus:ring-0"
                        />
                        <span className="text-gray-300">{year}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-4 mt-6">
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Clear Filters
                </button>
                <button
                  onClick={applyFilters}
                  className="px-4 py-2 text-sm bg-white text-black hover:bg-gray-200 transition-colors rounded"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
