"use client"

import { useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button className="md:hidden text-white" onClick={() => setIsOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col p-6">
          <div className="flex justify-end">
            <button onClick={() => setIsOpen(false)}>
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="flex flex-col space-y-6 items-center justify-center h-full">
            <Link href="/track-record" className="text-xl" onClick={() => setIsOpen(false)}>
              Track Record
            </Link>
            <Link href="/services" className="text-xl" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href="/about" className="text-xl" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/transactions" className="text-xl" onClick={() => setIsOpen(false)}>
              Transactions
            </Link>
            <Link href="/team" className="text-xl" onClick={() => setIsOpen(false)}>
              Team
            </Link>
            <Link href="/careers" className="text-xl" onClick={() => setIsOpen(false)}>
              Careers
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
