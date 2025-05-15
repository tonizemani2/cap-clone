"use client"

import { motion } from "framer-motion"
import { Info } from "lucide-react"
import { useState } from "react"

interface LegalDisclaimerProps {
  variant?: "full" | "compact" | "minimal"
  className?: string
}

export function LegalDisclaimer({ variant = "compact", className = "" }: LegalDisclaimerProps) {
  const [expanded, setExpanded] = useState(false)

  if (variant === "minimal") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`text-xs text-gray-400 italic ${className}`}
      >
        *Showcasing work by our affiliate, Harris Northwest Advisors
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 flex items-start gap-2 ${className}`}
    >
      <Info className="h-4 w-4 text-white/70 mt-0.5 flex-shrink-0" />
      <div className="text-xs text-gray-300 font-light">
        {variant === "full" || expanded ? (
          <>
            <span className="font-medium text-white">Legal Notice:</span> The success cases and track record presented
            on this website represent work completed by Harris Northwest Advisors. Xera Capital, as an affiliate
            company, has been granted rights to showcase these cases. All rights and credit for the work belong to
            Harris Northwest Advisors.
            {variant === "compact" && (
              <button onClick={() => setExpanded(false)} className="ml-1 text-white/70 hover:text-white underline">
                Show less
              </button>
            )}
          </>
        ) : (
          <>
            <span className="font-medium text-white">Affiliate Disclosure:</span> Case studies shown are the work of
            Harris Northwest Advisors.{" "}
            <button onClick={() => setExpanded(true)} className="text-white/70 hover:text-white underline">
              Learn more
            </button>
          </>
        )}
      </div>
    </motion.div>
  )
}
